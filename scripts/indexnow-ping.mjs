#!/usr/bin/env node
/**
 * IndexNow ping for aitooltier.com (added 2026-06-11).
 *
 * Notifies IndexNow-participating engines (Bing, DuckDuckGo via Bing,
 * Yandex, Seznam, Naver) that pages changed. Google does NOT use IndexNow --
 * this complements, not replaces, the GSC recovery work.
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs --urls /tools/claude /pricing/claude
 *   node scripts/indexnow-ping.mjs --from-files src/data/tools/claude.ts ...
 *
 * --from-files mode reads the `slug` field from each tool data file and
 * expands it to its three page URLs (/tools, /pricing, /alternatives).
 * The homepage is always included (it renders tier lists that change with
 * every tool edit). Used by .github/workflows/indexnow.yml on push.
 */
import { readFileSync, existsSync } from "fs";

const HOST = "aitooltier.com";
const KEY = "b6238734dec9f5399b54abd3a92f31e4"; // public by design; served at /<key>.txt
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const mode = args[0];
const items = args.slice(1);

if (!mode || items.length === 0) {
  console.log("Usage: indexnow-ping.mjs --urls <paths...> | --from-files <tool-files...>");
  process.exit(0); // no-op, not an error -- lets the Action skip cleanly
}

const urls = new Set([`https://${HOST}/`]);

if (mode === "--from-files") {
  for (const f of items) {
    if (!f.startsWith("src/data/tools/") || f.endsWith("index.ts") || !existsSync(f)) continue;
    const m = readFileSync(f, "utf8").match(/slug:\s*"([^"]+)"/);
    if (!m) continue;
    for (const surface of ["tools", "pricing", "alternatives"]) {
      urls.add(`https://${HOST}/${surface}/${m[1]}`);
    }
  }
} else if (mode === "--urls") {
  for (let p of items) {
    // Git Bash on Windows rewrites leading-slash args to filesystem paths
    // (MSYS path translation): /tools/x -> C:/Program Files/Git/tools/x.
    // Strip that prefix so relative paths work from any shell.
    p = p.replace(/^[A-Za-z]:[\\/].*?[\\/](?=(tools|pricing|alternatives|compare|categories|benchmarks)[\\/])/, "/");
    urls.add(p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`);
  }
} else {
  console.error(`Unknown mode: ${mode}`);
  process.exit(1);
}

if (urls.size <= 1 && mode === "--from-files") {
  console.log("No tool data files in change set -- skipping IndexNow ping.");
  process.exit(0);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: [...urls],
};

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow: ${res.status} ${res.statusText} -- pinged ${body.urlList.length} URLs:`);
body.urlList.forEach((u) => console.log(`  ${u}`));
// 200 = OK, 202 = accepted (key validation pending) -- both are success.
if (res.status !== 200 && res.status !== 202) {
  const text = await res.text();
  console.error(`IndexNow ping failed: ${text}`);
  process.exit(1);
}
