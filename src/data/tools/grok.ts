import { ToolReview } from "@/lib/types";

export const grok: ToolReview = {
  slug: "grok",
  name: "Grok",
  tagline: "SpaceXAI's irreverent chatbot with a direct line to X/Twitter -- and now Grok 4.5 (launched 2026-07-08), the frontier MoE model trained jointly with Cursor for coding, agentic tasks, and knowledge work at $2/$6 per 1M tokens. Grok 4.3 remains the value tier at $1.25/$2.50",
  category: "ai-llms",
  url: "https://grok.x.ai",

  scores: {
    easeOfUse: 7,
    outputQuality: 7.5,
    value: 7.5,
    features: 8,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["~10 prompts per 2 hours", "Basic Grok access", "Requires X account"],
    },
    {
      plan: "X Premium",
      price: "$8",
      period: "month",
      features: ["Higher query limits", "Grok 4.20 access", "Bundled X social features"],
    },
    {
      plan: "X Premium+",
      price: "$40",
      period: "month",
      features: ["Higher Grok 4.20 access", "Ad-free X", "Priority responses"],
    },
    {
      plan: "SuperGrok",
      price: "$30",
      period: "month",
      features: ["Full Grok 4.20 (4-agent multi-agent system)", "DeepSearch mode", "Highest rate limits", "Think mode", "$300/yr option (16% off)"],
    },
    {
      plan: "SuperGrok Heavy",
      price: "$300",
      period: "month",
      features: ["Grok 4 Heavy model", "Highest priority", "Multi-agent at scale", "Note: Grok 4.3 beta-gating ended 2026-05-02"],
    },
    {
      plan: "API (Grok 4.5, launched 2026-07-08)",
      price: "$2 / $6",
      period: "per 1M tokens (input/output)",
      features: ["SpaceXAI + Cursor joint frontier MoE model", "Faster variant $4/$18 via Cursor", "Available in Grok Build, SpaceXAI console/API, Cursor (all plans)", "NOT available in EU at launch", "Vendor benchmarks: Terminal-Bench 2.1 83.3%, SWE-Bench Pro 64.7% (third-party verification pending)"],
    },
    {
      plan: "API (Grok 4.3)",
      price: "$1.25 / $2.50",
      period: "per 1M tokens (input/output)",
      features: ["Production launch 2026-05-02 (~40% input / ~60% output price cut vs 4.20)", "1M context window", "Reasoning tokens billed at output rate", "Native video input + PDF/PPT/spreadsheet output", "Custom Voices voice cloning free on console (80+ presets, 28 languages)", "Imagine Agent Mode (creative workflow agent, beta)"],
    },
  ],

  pros: [
    "Real-time access to X/Twitter data is genuinely useful for tracking breaking news and trending topics",
    "Grok 3 benchmarks are competitive with GPT-4o and Claude 3.5 -- this is not a vanity project anymore",
    "The personality is refreshing if you're tired of overly cautious AI assistants -- it'll actually joke around",
    "DeepSearch mode does solid multi-step research, pulling from web and X data simultaneously",
  ],
  cons: [
    "The snarky personality gets old fast when you're trying to get serious work done",
    "Tied to the X ecosystem -- you need an X account, and the real-time data skews toward X's user base",
    "SuperGrok at $30/mo is steep when Claude Pro and ChatGPT Plus are $20 with arguably better core models",
    "Image generation is no longer the weak spot it was -- Imagine Image 2.0 (2026-08-07) added region editing, segmentation, background removal and 5-image multi-ref, and xAI places it #2 worldwide on both Arena image boards; the remaining gap vs ChatGPT/Gemini is analysis and document understanding, not generation",
  ],
  knownIssues: [
    {
      description: "IMAGINE IMAGE 2.0 IS GA -- PRECISE EDITING ARRIVES, AND GROK IS NOW #2 ON BOTH IMAGE ARENAS (2026-08-07, vendor-primary): xAI shipped **Imagine Image 2.0 as the new Quality Mode** on grok.com/imagine and the iOS and Android apps. The pitch is explicitly utilitarian -- 'make images you can use in real work' -- with the model planning typography and layout 'the way a designer would' so dense multi-part visuals hold together and small text stays sharp. **The substantive change is that editing is now first-class, not a re-roll.** Four tools: the **magic wand** edits only the region you point at and leaves the rest untouched; **segmentation** selects precise areas to change; **background removal** exports any subject on transparency; and **multi-ref editing accepts up to 5 input images in a single generation**, which removes a manual compositing step. **Smart resize** refills the frame across ten ratios (1:2, 9:16, 2:3, 3:4, 1:1, 4:3, 3:2, 16:9, 2:1). xAI also added **templates** -- prepackaged workflows for photo editing, product shots, headshots, icons, game assets, mascots, e-commerce and UGC photos, emoji and merch. **RANKING, QUOTED PRECISELY:** xAI says Image 2.0 'ranks second in the world in both text-to-image generation and image editing' on Arena overall Elo **as of Aug 7, 2026** -- note this is a vendor-stated placement citing the Arena leaderboards, third-party re-verification pending, and that **xAI models are listed on Arena under 'SpaceXAI'**, which is where to look if you go check it yourself. This directly retires the long-standing con on this page that Grok's image generation lags ChatGPT and Gemini -- on the vendor's own leaderboard reading it no longer does, though the con predates the Imagine line and is kept below as historical context for Grok 3-era users",
      source: "SpaceXAI (x.ai/news/grok-imagine-image-2, on-page date Aug 7, 2026, fetched 2026-08-10 via curl -- x.ai 403s WebFetch)",
      date: "2026-08-07",
    },
    {
      description: "IMAGINE VIDEO 1.5 GETS REFERENCES, TEXT-TO-VIDEO AND NATIVE 1080p (2026-07-31, vendor-primary -- this page had only ever recorded the 6/3 Imagine 1.5 *preview*, so the shipped feature set was several steps behind): xAI substantially expanded its video model. **Three things landed.** (1) **Multi-reference conditioning** -- pass reference images and 'each reference image locks one thing in place: a face, a product, a location', so you can keep a character and swap the scene, keep the scene and swap the character, or hold both and change only the action. **Up to seven references per generation.** (2) **Voice reference / voice consistency** -- supply a character image plus a voice reference and 'both hold: the same face and the same voice in every scene', which is the piece most competing video models still cannot do without a separate dubbing pass. (3) **Text-to-video and native 1080p** -- generation from a prompt with no starting image (xAI describes it as pairing their image generation with image-to-video), and 1080p output for both text-to-video and image-to-video, up from the 720p ceiling the 6/3 preview shipped with. **AVAILABILITY IS SPLIT AND WORTH READING CAREFULLY:** text-to-video and native 1080p are **generally available** on grok.com/imagine, iOS and Android. Image and voice references started **2026-07-31 in the US only, for SuperGrok Heavy and SuperGrok Plus**, on grok.com/imagine and iOS, with xAI saying they roll out to all tiers 'over the next few days' -- so by now that gate has probably widened, but the vendor post is the last first-party statement of scope. **In the API**, image references, text-to-video and native 1080p are live under the model id **`grok-imagine-video-1.5`**; **voice reference support is 'available on request'**, i.e. not self-serve. No pricing was published in the post",
      source: "xAI/SpaceXAI (x.ai/news/grok-imagine-video-1-5-references, datePublished 2026-07-31T00:00:00Z, fetched 2026-08-06 via curl -- x.ai 403s WebFetch)",
      date: "2026-07-31",
    },
    {
      description: "PRODUCT PAIR (2026-07-15/16, vendor posts on x.ai/news): (1) **Grok Automations** (7/16) -- scheduled and autonomous recurring tasks in the Grok app (standing queries, monitoring, repeat jobs), SpaceXAI's answer to ChatGPT's Scheduled Tasks. (2) **Grok Build open-sourced** (7/15) -- the terminal coding agent's source is now public, relevant if you want to audit or extend the harness. Roadmap noise, clearly labeled: Musk indicated a **Grok 4.6** is in the pipeline (~7/17-18, no date, no specs -- aggregator-grade until a vendor post exists) and Grok 5's timeline has slid repeatedly. **GROK 4.6 UPDATE (checked 2026-08-10): it has NOT shipped.** A Musk-stated 8/7 target circulated; we re-enumerated the full x.ai/news index on 8/10 and there is **no Grok 4.6 post and no Grok 4.6 slug** -- the newest xAI post is Imagine Image 2.0 (8/7). Treat every 'Grok 4.6 is out' claim as unsourced until a vendor post exists; this is the second Musk-stated Grok date to pass without a release. EU AVAILABILITY STILL UNRESOLVED: the 'mid-July' EU promise for Grok 4.5 has conflicting reports (one aggregator claims EU access landed ~7/16; another says still unavailable) and x.ai's Grok 4.5 page wouldn't load for verification -- we are NOT flipping EU availability until vendor wording confirms; re-check next sweep",
      source: "SpaceXAI (x.ai/news/grok-automations, x.ai/news/grok-build-open-source -- both listed on the x.ai news index, scraped in-session)",
      date: "2026-07-16",
    },
    {
      description: "GROK 4.5 LAUNCHED (2026-07-08 developer surfaces, public rollout reported 7/9): SpaceXAI shipped **Grok 4.5, 'our smartest model built for coding, agentic tasks, and knowledge work'** -- a mixture-of-experts frontier model **trained jointly with Cursor** (SpaceX closed its Anysphere/Cursor acquisition in June) on trillions of tokens of Cursor data. Musk's framing: 'Opus-class, but faster, more token-efficient and lower cost.' **API pricing: $2/M input + $6/M output** (a faster variant at $4/$18 is offered through Cursor). Day-one availability: **Grok Build, the SpaceXAI console/API, and Cursor on all plans**; press reports public access via grok.com and the X app from 7/9; **NOT available in the EU at launch**. Vendor-reported benchmarks (charts, third-party verification pending): **Terminal-Bench 2.1 83.3%, SWE-Bench Pro 64.7%, #1 on Harvey's Legal Agent Benchmark**, with standout token efficiency (~16K output tokens per SWE-Bench Pro task vs ~67K for Opus 4.8 max per launch charts); Artificial Analysis measured 91.3 tok/s on the API. CONSUMER ACCESS CONFIRMED (7/10 press): available to **X Premium and SuperGrok subscribers** in the Grok interface, and it's the **default model in Grok Build** (beta, SuperGrok + X Premium+). API also live on OpenRouter, Vercel, Cloudflare, Snowflake, Databricks. **INDEPENDENT BENCHMARKS PUBLISHED (Artificial Analysis, 7/9-10): Intelligence Index 54** -- AA's launch article places it 4th among frontier models behind Fable 5, GPT-5.5, and Opus 4.8 (the model page ranks it #8 of 188 counting all model variants); **GDPval-AA v2 Elo 1543**; 92.9 output tok/s measured; 500K context window per AA. AA calls the 16-point gen-over-gen jump xAI's largest ever. Press caveat: reviewers note a higher hallucination rate than frontier peers. Aggregator claims of a '1.5T-param V9 foundation' remain UNVERIFIED -- treat as rumor",
      source: "SpaceXAI (x.ai/news/grok-4-5), Cursor blog (cursor.com/blog/grok-4-5), Artificial Analysis (artificialanalysis.ai/models/grok-4-5), Axios (2026-07-08)",
      date: "2026-07-10",
    },
    {
      description: "GROK BUILD PLUGIN MARKETPLACE (2026-06-11, vendor-primary): xAI launched a built-in **plugin marketplace for Grok Build** -- plugins bundle skills, slash commands, agents, hooks, MCP servers, and LSPs; installs are commit-SHA-pinned for supply-chain safety; the catalog is open to community submissions via PR. Launch partners: MongoDB, Vercel, Sentry, Chrome DevTools, Cloudflare. Mirrors the plugin/extension pattern Claude Code and Gemini-CLI-era tooling established -- Grok Build is maturing fast for a product still labeled beta",
      source: "xAI news (x.ai/news/grok-plugin-marketplace), GitHub (github.com/xai-org/plugin-marketplace)",
      date: "2026-06-11",
    },
    {
      description: "JUNE CLUSTER (2026-06, all vendor-primary on x.ai/news): **Grok Imagine 1.5 Preview** (6/3) -- image-to-video generation up to 720p, available as an API preview. **Composer 2.5** (6/1) -- xAI's 'fast, SOTA model for long-running tasks,' now selectable in the Grok Build /models menu for SuperGrok and X Premium+ subscribers (NOT related to Cursor's Composer line despite the name). **Grok Build 0.1 on the API** (5/29) -- the coding-agent model behind Grok Build became directly callable via the xAI API: 256K context, always-on reasoning, text + image input. Grok Build itself ('Introducing Grok Build,' 5/25) is in early beta for ALL SuperGrok and X Premium+ subscribers -- broader than the original Heavy-tier-only gate. Also: Grok voice now powers Vapi (6/3) and Gopuff's 'Go' shopping agent (6/9). NOTE: 'Grok 5' / 'V9-Medium mid-June' claims remain aggregator-only with zero vendor signal -- not real until x.ai posts it",
      source: "xAI news (x.ai/news/grok-imagine-1-5, x.ai/news/composer-2-5, x.ai/news/grok-build-0-1, x.ai/news/grok-build-cli), x.ai/build/changelog",
      date: "2026-06-03",
    },
    {
      description: "PRODUCT (2026-05-18): xAI shipped **Grok Skills** -- a persistent-memory Skills layer on Grok 4.3. Skills are user-defined named capabilities Grok carries across sessions on web / iOS / Android (recipe collection, code-review checklist, study-habits coach, etc.). Each Skill is a stored prompt + behavioral pattern Grok consults when invoked by name. Per-user storage; not shared across accounts. Differentiates Grok from ChatGPT Memory (passive recall) toward configurable named tools. Pairs with the 5/14 Grok Build CLI ship -- Skills are the consumer-facing persistent-state layer, Build CLI is the developer-facing one. Material in the 'agent goes where you go' competitive narrative alongside Codex on mobile (5/14) + Cursor Jira integration (5/19) + Devin Windows VMs (5/21).",
      source: "xAI news (x.ai/news), xAI release notes (docs.x.ai/developers/release-notes)",
      date: "2026-05-18",
    },
    {
      description: "MODEL LINEUP CONSOLIDATION (2026-05-15, went live 12:00 PT): xAI auto-redirected **8 deprecated model slugs** to grok-4.3 (or grok-imagine-image-quality for the image model). Affected slugs: grok-4-1-fast-reasoning, grok-4-1-fast-non-reasoning, grok-4-fast-reasoning, grok-4-fast-non-reasoning, grok-4-0709, grok-code-fast-1, grok-3, grok-imagine-image-pro. All requests now silently bill at grok-4.3 rates ($1.25 input / $2.50 output per 1M tokens). Anyone with these slugs pinned in production or referenced inside a Copilot/Cursor/Codex multi-model selector now pays the new rate without any code change. Migration path: explicitly switch to grok-4.3 in your model selector and audit token-spend after 5/15 since the new rate may differ from what each deprecated slug was previously billed at. The grok-code-fast-1 slug retirement is the same event that took the model off GitHub Copilot's Chat/inline/agent surfaces on 5/15",
      source: "xAI docs (docs.x.ai/developers/migration/may-15-retirement)",
      date: "2026-05-15",
    },
    {
      description: "PRODUCT (2026-05-14): xAI launched **Grok Build CLI** in early beta -- an agentic terminal-native CLI for coding, app development, and workflow automation. Spawns up to **8 concurrent agents** in parallel. Powered by Grok 4.3 beta with a 16-agent Heavy architecture and **2M token context window**. Vendor-primary launch posts at x.ai/news/grok-build-cli and x.ai/cli, plus Musk's public invitation to wider beta testers on X. **Access gate**: launched first to SuperGrok Heavy tier ($299/mo, intro offer $99/mo for 6 months) -- not yet available to standard Premium / SuperGrok subscribers. Positions Grok as a direct competitor to Claude Code, Codex CLI, and Cursor CLI for terminal-first agentic coding workflows. The 8-agent parallelism + 2M context is the differentiating feature -- single longest context window of any production coding CLI as of today",
      source: "xAI news (x.ai/news/grok-build-cli), xAI product page (x.ai/cli), Musk on X",
      date: "2026-05-14",
    },
    {
      description: "xAI joined SpaceX on 2026-02-02 -- SpaceX acquired xAI. Procurement, billing, and compliance workflows now route through SpaceX's vendor pipeline. For regulated industries (healthcare, finance, US government) this may require re-qualifying xAI as a vendor even if Grok itself was previously approved",
      source: "xAI announcement (x.ai/news/xai-joins-spacex), SpaceX updates",
      date: "2026-02",
    },
    {
      description: "Grok Speech (STT + TTS) APIs launched 2026-04-17 as separate products from the chatbot -- see /tools/grok-voice on this site. Built on the same stack Grok Voice uses. Not included in Premium/SuperGrok consumer tiers; billed separately at $0.10/hr STT batch and $4.20/1M char TTS",
      source: "xAI Grok STT/TTS announcement",
      date: "2026-04",
    },
    {
      description: "Real-time X data can surface misinformation from viral posts without adequate fact-checking",
      source: "Reddit r/artificial",
      date: "2026-02",
    },
    {
      description: "Free tier rate limits are aggressive -- many users report hitting caps within a few queries",
      source: "X/Twitter user reports",
      date: "2026-03",
    },
    {
      description: "Grok 4.20's 4-agent system (Grok, Harper, Benjamin, Lucas) can take 30+ seconds for complex queries as agents debate internally. Grok 4.20 Beta 2 (landed ~2026-04-07) improved instruction-following, reduced hallucinations, better LaTeX and image search -- partially addresses the slowness and reliability complaints from early 4.20 feedback",
      source: "Reddit r/grok, IBTimes",
      date: "2026-04",
    },
    {
      description: "PRODUCTION LAUNCH (2026-05-02): Grok 4.3 went broadly available beyond the SuperGrok Heavy beta. New consumer + API features: **Custom Voices voice cloning suite** (clone voice from ~1 minute of speech in <2 minutes, two-stage passphrase + speaker-embedding consent gate, 80+ preset voices, 28 languages, free on console); **Imagine Agent Mode** (creative production workflow agent, beta); native video input + reasoning-by-default; native PDF / PowerPoint / spreadsheet output. **API pricing: $1.25 input / $2.50 output per 1M tokens** -- ~40% input cut + ~60% output cut vs Grok 4.20. 1M context window. Reasoning tokens billed at output rate. xAI's pattern is silent ship via grok.com model selector + console UI rather than vendor blog post -- vendor-primary verification through grok.com itself plus 4+ tier-1 press sources (VentureBeat, Winbuzzer, The Decoder, Phemex)",
      source: "VentureBeat (venturebeat.com/technology/xai-launches-grok-4-3-at-an-aggressively-low-price-and-a-new-fast-powerful-voice-cloning-suite), Winbuzzer 2026-05-03, The Decoder, grok.com console",
      date: "2026-05-02",
    },
    {
      description: "Grok 4.3 Beta dropped 2026-04-17 as a SuperGrok Heavy exclusive ($300/mo tier). Elon Musk clarified on 2026-04-18 that the live checkpoint is ~0.5T params; the full 1T version is ~5 days from finishing training. Beta gating ENDED 2026-05-02 with broader rollout (see entry above)",
      source: "PiunikaWeb, BuildFastWithAI, xAI release notes, Musk posts on X (2026-04-18)",
      date: "2026-04",
    },
  ],
  bestFor: "People who live on X/Twitter and want an AI that can tap into that data in real-time. Also good for users who find mainstream chatbots too sanitized and want something with more personality.",
  notFor: "Enterprise users who need reliable, consistent outputs. Also not the best pick if you don't use X -- the real-time data advantage disappears and you're left with a solid-but-not-best-in-class LLM.",
  verdict: "Grok has come a long way from being dismissed as Elon's pet project. The Grok 3 models are legitimately competitive, and the real-time X integration is a unique differentiator that no other chatbot can match. But the value proposition gets muddier when you strip away the X angle -- at $30/mo for SuperGrok, you're paying a premium for personality and Twitter data. If those matter to you, Grok is great. If not, Claude or ChatGPT give you more for less.",

  lastReviewedDate: "2026-08-10",
  dataSources: [
    { name: "SpaceXAI: Imagine Image 2.0 -- precise editing, multi-ref, smart resize, #2 on both Arena image boards (2026-08-07)", url: "https://x.ai/news/grok-imagine-image-2", dateAccessed: "2026-08-10" },
    { name: "SpaceXAI: Imagine Video 1.5 with References -- multi-reference, voice consistency, text-to-video, native 1080p (2026-07-31)", url: "https://x.ai/news/grok-imagine-video-1-5-references", dateAccessed: "2026-08-06" },
    { name: "SpaceXAI: Grok Automations (2026-07-16)", url: "https://x.ai/news/grok-automations", dateAccessed: "2026-07-18" },
    { name: "SpaceXAI: Grok Build open source (2026-07-15)", url: "https://x.ai/news/grok-build-open-source", dateAccessed: "2026-07-18" },
    { name: "SpaceXAI: Introducing Grok 4.5 (2026-07-08)", url: "https://x.ai/news/grok-4-5", dateAccessed: "2026-07-09" },
    { name: "Cursor blog: Introducing Grok 4.5 (joint training details)", url: "https://cursor.com/blog/grok-4-5", dateAccessed: "2026-07-09" },
    { name: "Axios: SpaceXAI launches new model, Grok 4.5", url: "https://www.axios.com/2026/07/08/spacexai-grok-new-model", dateAccessed: "2026-07-09" },
    { name: "xAI May 15 model retirement docs", url: "https://docs.x.ai/developers/migration/may-15-retirement", dateAccessed: "2026-05-19" },
    { name: "VentureBeat: xAI launches Grok 4.3 with voice cloning (2026-05-02)", url: "https://venturebeat.com/technology/xai-launches-grok-4-3-at-an-aggressively-low-price-and-a-new-fast-powerful-voice-cloning-suite", dateAccessed: "2026-05-05" },
    { name: "Winbuzzer: xAI Grok 4.3 + Custom Voices (2026-05-03)", url: "https://winbuzzer.com/2026/05/03/xai-grok-4-3-custom-voices-voice-cloning-launch-xcxwbn/", dateAccessed: "2026-05-05" },
    { name: "xAI official site", url: "https://grok.x.ai", dateAccessed: "2026-04-17" },
    { name: "xAI Grok 4.20 announcement", dateAccessed: "2026-04-17" },
    { name: "IBTimes: Grok 4.20 Beta 2 April 2026", url: "https://www.ibtimes.com.au/grok-420-beta-2-powers-xai-advances-model-tops-benchmarks-saves-lives-april-2026-1866556", dateAccessed: "2026-04-17" },
    { name: "BuildFastWithAI: Grok 4.3 Beta 2026-04-17", url: "https://www.buildfastwithai.com/blogs/grok-4-3-beta-features-review", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis: Grok 4.20", url: "https://artificialanalysis.ai/models/grok-4-20", dateAccessed: "2026-04-17" },
    { name: "Reddit r/grok, r/artificial", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://grok.x.ai",
  status: "active",
  benchmarks: {
    modelName: "Grok 4.20 (baseline -- Grok 4.5 launched 2026-07-08; vendor-reported 4.5 scores in Known Issues pending third-party verification)",
    scores: [
      { name: "MMLU", score: 88.5, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 85.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 90.0, maxScore: 100, unit: "%" },
      { name: "HLE", score: 50.7, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1420,
    lastUpdated: "2026-04-13",
  },
  personality: {
    oneLiner: "The irreverent contrarian",
    tone: "Casual, jokey, and willing to swear. Grok takes strong positions without hedging, leans into an edgy 'based' persona, and cracks jokes far more often than Claude, ChatGPT, or Gemini.",
    quirks: "Engages with topics other chatbots refuse, pulls live context from X so it reflects whatever is trending that hour, and will freely mock things -- including itself. In SuperGrok's multi-agent mode it can sound like several personalities arguing with each other.",
  },
  metaTitle: "Grok Review 2026: Grok 4.5 Launch -- SpaceXAI + Cursor's Frontier Model",
  metaDescription: "Grok review. Grok 4.5 (July 8, 2026): SpaceXAI's smartest model, trained jointly with Cursor, $2/$6 per 1M tokens, Terminal-Bench 2.1 83.3%. Plus SuperGrok tiers, Grok Build, real-time X data, and Grok 4.3 as the value API tier.",
};
