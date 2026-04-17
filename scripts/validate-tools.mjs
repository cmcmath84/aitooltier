#!/usr/bin/env node
/**
 * Pre-ship validation for aitooltier.com tool data.
 *
 * Run before every commit in the update runbook (phase 4.5, between
 * typecheck and git commit). Catches the classes of miss that required
 * follow-up commits during the 2026-04-16 to 2026-04-17 sweep session:
 *   - Missing logoMap entries (19 tools shipped without icons)
 *   - Slug mismatches between tool files and logoMap (dall-e vs dalle)
 *   - status="active" but tagline says DISCONTINUED/DEPRECATED
 *   - Orphan imports (imported but not in tools array)
 *   - Broken logo files (HTML saved as .png, missing files, etc.)
 *
 * Exit 0 on pass, 1 on fail. Integrate via: npm run validate
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, "..");
const TOOLS_DIR = join(REPO, "src/data/tools");
const INDEX_FILE = join(TOOLS_DIR, "index.ts");
const LOGO_COMPONENT = join(REPO, "src/components/ui/ToolLogo.tsx");
const LOGOS_DIR = join(REPO, "public/logos");

let hadErrors = false;
const failGroup = (arr, title) => {
  if (arr.length) {
    console.log(`\n❌ FAIL: ${title} (${arr.length})`);
    arr.forEach((x) => console.log(`   - ${x}`));
    hadErrors = true;
    return true;
  }
  console.log(`✅ PASS: ${title}`);
  return false;
};

// -- 1. Parse tools/index.ts --
const idx = readFileSync(INDEX_FILE, "utf8");
const importRegex = /^import\s+\{\s*(\w+)\s*\}\s+from\s+"\.\/([\w-]+)";/gm;
const imports = [...idx.matchAll(importRegex)].map((m) => ({
  varName: m[1],
  file: m[2],
}));

const arrMatch = idx.match(/export const tools: ToolReview\[\] = \[([\s\S]*?)^\];/m);
if (!arrMatch) {
  console.log("💥 FATAL: Could not locate `export const tools` array in index.ts");
  process.exit(1);
}
const arrayEntries = new Set(
  [...arrMatch[1].matchAll(/^\s+(\w+),\s*$/gm)].map((m) => m[1]),
);

const importVars = new Set(imports.map((i) => i.varName));
const orphanImports = [...importVars].filter((v) => !arrayEntries.has(v));
failGroup(orphanImports, "Orphan imports (imported but not in tools array)");

const missingFromImports = [...arrayEntries].filter((v) => !importVars.has(v));
failGroup(
  missingFromImports,
  "Array entries missing matching import (TS would already fail, but double-check)",
);

// -- 2. Read each tool file --
const slugs = {}; // {file: slug}
const statusTaglineMismatches = [];
const missingSlug = [];
for (const { file } of imports) {
  const path = join(TOOLS_DIR, `${file}.ts`);
  if (!existsSync(path)) {
    missingSlug.push(`${file}.ts does not exist`);
    continue;
  }
  const content = readFileSync(path, "utf8");
  const slugM = content.match(/slug:\s*"([^"]+)"/);
  if (!slugM) {
    missingSlug.push(`${file}.ts has no slug field`);
    continue;
  }
  slugs[file] = slugM[1];

  const statusM = content.match(/status:\s*"(\w+)"/);
  const taglineM = content.match(/tagline:\s*"([^"]+)"/);
  if (statusM && taglineM && statusM[1] === "active") {
    if (/\b(DISCONTINUED|DEPRECATED|shut\s*down|SUNSET|discontinuation)\b/i.test(taglineM[1])) {
      statusTaglineMismatches.push(
        `${file}.ts: status="active" but tagline indicates deprecation. Flip status to "deprecated" OR reword tagline.\n      tagline: "${taglineM[1].slice(0, 100)}..."`,
      );
    }
  }
}
failGroup(missingSlug, "Tool files missing or without slug");
failGroup(
  statusTaglineMismatches,
  'Status/tagline mismatches (status="active" but tagline says DISCONTINUED/DEPRECATED)',
);

// -- 3. Parse logoMap in ToolLogo.tsx --
const logoC = readFileSync(LOGO_COMPONENT, "utf8");
const logoBlockStart = logoC.indexOf("const logoMap");
const logoBlockEnd = logoC.indexOf("\n};", logoBlockStart);
if (logoBlockStart === -1 || logoBlockEnd === -1) {
  console.log("💥 FATAL: Could not locate logoMap in ToolLogo.tsx");
  process.exit(1);
}
const logoBlock = logoC.slice(logoBlockStart, logoBlockEnd);
const logoEntries = [
  ...logoBlock.matchAll(/^\s+"?([\w-]+)"?:\s*"([^"]+)",?\s*$/gm),
];
const logoMap = new Map();
for (const e of logoEntries) {
  logoMap.set(e[1], e[2]);
}

// -- 4. Coverage: every tool slug has a logoMap entry --
const slugsMissingLogo = [];
for (const [file, slug] of Object.entries(slugs)) {
  if (!logoMap.has(slug)) {
    slugsMissingLogo.push(`${slug} (from ${file}.ts) -- add to logoMap in ToolLogo.tsx`);
  }
}
failGroup(slugsMissingLogo, "Tool slugs missing from logoMap");

// -- 5. Every logoMap path points to a valid PNG --
const brokenLogos = [];
for (const [slug, logoPath] of logoMap.entries()) {
  if (!logoPath.startsWith("/logos/")) {
    brokenLogos.push(`${slug} -> "${logoPath}" (expected /logos/*.png)`);
    continue;
  }
  const fpath = join(LOGOS_DIR, logoPath.slice("/logos/".length));
  if (!existsSync(fpath)) {
    brokenLogos.push(`${slug} -> ${logoPath} (FILE MISSING at ${fpath})`);
    continue;
  }
  const buf = readFileSync(fpath);
  // Accept PNG, JPEG, GIF, or WebP magic bytes. Several files in the
  // repo are JPEGs saved with .png extension (pre-existing). Browsers
  // render them fine regardless of extension -- we just need to catch
  // catastrophic breakage (HTML, text, empty files).
  const isPng =
    buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
  const isJpeg = buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
  const isGif = buf.length >= 4 && buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46;
  const isWebp =
    buf.length >= 12 &&
    buf[0] === 0x52 &&
    buf[1] === 0x49 &&
    buf[2] === 0x46 &&
    buf[3] === 0x46 &&
    buf[8] === 0x57 &&
    buf[9] === 0x45 &&
    buf[10] === 0x42 &&
    buf[11] === 0x50;
  const isImage = isPng || isJpeg || isGif || isWebp;
  if (!isImage) {
    const headerHex = [...buf.slice(0, 4)]
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    brokenLogos.push(
      `${slug} -> ${logoPath} (NOT A VALID IMAGE; first 4 bytes: 0x${headerHex}, size ${buf.length}). Accepted formats: PNG, JPEG, GIF, WebP.`,
    );
  }
}
failGroup(brokenLogos, "Broken logo files (missing, non-PNG, or wrong path)");

// -- Summary --
console.log();
if (hadErrors) {
  console.log(
    `💥 VALIDATION FAILED. Fix issues above before committing.`,
  );
  process.exit(1);
}
console.log(
  `🎉 VALIDATION PASSED: ${imports.length} imports, ${arrayEntries.size} array entries, ${logoMap.size} logoMap entries, ${Object.keys(slugs).length} tool slugs all matched up.`,
);
process.exit(0);
