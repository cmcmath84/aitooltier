// SEO index-footprint control for /compare pages (added 2026-06-09).
//
// Context: Google ran an indexing trial on the site 2026-04-14..04-25, found
// ~8,900 programmatic compare pairs on a zero-authority domain, dropped the
// site to "Crawled - currently not indexed" and stopped crawling (last
// Googlebot hit 2026-05-02; sitemap not re-fetched since 04-15). The fix is a
// ~94% cut of the indexable footprint: only compare pages with demonstrated
// search demand or flagship head-to-head value stay indexable; every other
// pair renders fine but carries noindex and is excluded from the sitemap.
// See memory/project_aitooltier_gsc_diagnosis.md for the full diagnosis.
//
// Pairs are unordered -- membership is checked via a normalized key, so this
// list is immune to tools[] array-order changes. URL order stays whatever
// generateStaticParams produces; the compare page canonicalizes to that.
//
// Sources for this list:
// - GSC 2026-03-25..06-09: every compare URL that earned >=1 click (72 pages)
// - GSC same window: 0-click pages with >=20 impressions (3 pages)
// - The /compare hub's curated popular + LLM-vs-local lists (18 pairs)
// - Flagship head-to-heads with known external query demand (~25 pairs)

export const INDEXABLE_COMPARE_PAIRS: Array<[string, string]> = [
  // --- GSC-earned: at least one click during the 4/14-4/25 indexing trial ---
  ["antigravity", "hermes-agent"],
  ["hermes-agent", "paperclip"],
  ["gemma", "gamma"],
  ["codex", "manus-ai"],
  ["perplexity", "hermes-agent"],
  ["figma-ai", "hermes-agent"],
  ["gemma", "antigravity"],
  ["glm", "paperclip"],
  ["n8n", "paperclip"],
  ["notebooklm", "hermes-agent"],
  ["paperclip", "langgraph"],
  ["v0", "manus-ai"],
  ["antigravity", "langgraph"],
  ["antigravity", "perplexity-computer"],
  ["codex", "deepl"],
  ["codex", "langgraph"],
  ["codex", "power-bi"],
  ["codex", "surfer-seo"],
  ["codex", "tableau-ai"],
  ["dall-e", "paperclip"],
  ["deepl", "openclaw"],
  ["deepseek", "antigravity"],
  ["figma-ai", "paperclip"],
  ["gemini", "paperclip"],
  ["gemma", "claude-code"],
  ["gemma", "deepl"],
  ["gemma", "github-copilot"],
  ["gemma", "kling-ai"],
  ["gemma", "langgraph"],
  ["gemma", "microsoft-copilot"],
  ["gemma", "n8n"],
  ["gemma", "perplexity-computer"],
  ["gemma", "power-bi"],
  ["gemma", "windsurf"],
  ["glm", "figma-ai"],
  ["glm", "hermes-agent"],
  ["glm", "perplexity"],
  ["grok", "antigravity"],
  ["hermes-agent", "langgraph"],
  ["hermes-agent", "perplexity-computer"],
  ["kimi", "figma-ai"],
  ["kimi", "paperclip"],
  ["krea-ai", "kimi"],
  ["lovable", "hermes-agent"],
  ["lovable", "paperclip"],
  ["lovable", "perplexity-computer"],
  ["minimax", "github-copilot"],
  ["mistral", "antigravity"],
  ["muse-spark", "antigravity"],
  ["muse-spark", "gemma"],
  ["muse-spark", "github-copilot"],
  ["muse-spark", "kimi"],
  ["muse-spark", "nemotron"],
  ["muse-spark", "poe"],
  ["muse-spark", "sudowrite"],
  ["notebooklm", "gamma"],
  ["notebooklm", "manus-ai"],
  ["notion-ai", "openclaw"],
  ["notion-ai", "paperclip"],
  ["perplexity-computer", "paperclip"],
  ["pika", "perplexity-computer"],
  ["poe", "v0"],
  ["quillbot", "manus-ai"],
  ["qwen", "notebooklm"],
  ["qwen", "paperclip"],
  ["runway", "hermes-agent"],
  ["runway", "heygen"],
  ["semrush", "perplexity-computer"],
  ["stable-diffusion", "gemma"],
  ["tabnine", "codex"],
  ["windsurf", "hermes-agent"],
  ["windsurf", "paperclip"],

  // --- GSC-earned: zero clicks but >=20 impressions in the trial window ---
  ["antigravity", "perplexity"],
  ["antigravity", "v0"],
  ["antigravity", "manus-ai"],

  // --- /compare hub curated lists (popular + LLM-vs-local) ---
  ["claude", "grok"],
  ["chatgpt", "claude"],
  ["github-copilot", "chatgpt"],
  ["deepseek", "github-copilot"],
  ["midjourney", "dall-e"],
  ["claude-code", "replit"],
  ["cursor", "windsurf"],
  ["canva-ai", "gamma"],
  ["codex", "claude-code"],
  ["antigravity", "cursor"],
  ["gemini", "chatgpt"],
  ["codex", "antigravity"],
  ["claude", "llama"],
  ["chatgpt", "deepseek"],
  ["gemini", "mistral"],
  ["grok", "deepseek"],
  ["claude", "qwen"],
  ["gemini", "gemma"],

  // --- Flagship head-to-heads with standing external query demand ---
  ["claude", "gemini"],
  ["chatgpt", "grok"],
  ["gemini", "grok"],
  ["claude", "deepseek"],
  ["chatgpt", "perplexity"],
  ["perplexity", "gemini"],
  ["cursor", "github-copilot"],
  ["cursor", "devin"],
  ["claude-code", "cursor"],
  ["devin", "windsurf"],
  ["midjourney", "ideogram"],
  ["midjourney", "stable-diffusion"],
  ["midjourney", "pika"],
  ["runway", "pika"],
  ["kling-ai", "runway"],
  ["suno", "udio"],
  ["elevenlabs", "murf-ai"],
  ["heygen", "synthesia"],
  ["lovable", "bolt-new"],
  ["lovable", "v0"],
  ["v0", "bolt-new"],
  ["replit", "cursor"],
  ["notion-ai", "chatgpt"],
  ["deepseek", "qwen"],
  ["llama", "mistral"],
];

const pairKey = (a: string, b: string) => (a < b ? `${a}::${b}` : `${b}::${a}`);

const indexableKeys = new Set(
  INDEXABLE_COMPARE_PAIRS.map(([a, b]) => pairKey(a, b))
);

/** True if this tool pair should be indexable (sitemap + no robots noindex). */
export function isIndexableCompare(slugA: string, slugB: string): boolean {
  return indexableKeys.has(pairKey(slugA, slugB));
}

export const INDEXABLE_COMPARE_COUNT = indexableKeys.size;
