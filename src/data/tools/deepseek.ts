import { ToolReview } from "@/lib/types";

export const deepseek: ToolReview = {
  slug: "deepseek",
  name: "DeepSeek",
  tagline: "DeepSeek V4 shipped 2026-04-24: V4-Pro (1.6T/49B active MoE) + V4-Flash (284B/13B active), 1M native context, Hybrid Attention Architecture, open-source on HF. **V4-Pro reached GA 2026-08-13** (Terminal Bench 2.1 87.9, three thinking-effort levels, native Responses API). **Pricing changes 2026-08-16:** peak/off-peak billing raises rates at every hour of the day -- V4-Pro goes from $0.435/$0.87 to $0.66/$1.98 off-peak and $1.32/$3.96 peak",
  category: "ai-local-models",
  url: "https://www.deepseek.com",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 8,
    value: 9.5,
    features: 7,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Web chat access at chat.deepseek.com", "V4-Flash by default (as of 2026-04-24 launch)", "Basic usage limits"],
    },
    {
      plan: "API -- V4-Flash",
      price: "$0.14/$0.28",
      period: "per 1M tokens input/output",
      features: ["284B total / 13B active MoE", "1M native context", "Cheapest frontier-class API on market", "Pay-as-you-go, no minimum"],
    },
    {
      plan: "API -- V4-Pro",
      price: "$0.435/$0.87",
      period: "per 1M tokens input/output",
      features: ["1.6T total / 49B active MoE", "1M native context", "GA as DeepSeek-V4-Pro-0813 on 2026-08-13", "Trails only Gemini 3.1 Pro on world knowledge benchmarks", "PRICING CHANGES 2026-08-16 16:00 UTC: the $0.435/$0.87 standing rate is replaced by peak/off-peak billing at $0.66/$1.98 off-peak and $1.32/$3.96 peak -- a rise at every hour, not a discount. See knownIssues", "Still cheap relative to Western frontier models, but the gap narrows sharply after 8/16"],
    },
    {
      plan: "Self-hosted (open-source)",
      price: "$0 + GPU costs",
      features: ["MIT license, open weights on HuggingFace", "V4-Flash is feasible on consumer hardware with quantization", "V4-Pro needs multi-GPU production infrastructure"],
    },
  ],

  pros: [
    "Pricing is absurdly cheap compared to GPT-4 or Claude -- we're talking 90%+ savings on API calls",
    "DeepSeek-R1 reasoning model genuinely competes with o1 and o3 on math and coding benchmarks",
    "Fully open-source weights mean you can run it locally or fine-tune for your own use case",
    "130M+ users and growing fast, so the ecosystem and community support are solid",
  ],
  cons: [
    "Censorship on politically sensitive topics is real and unavoidable -- it's a Chinese company subject to PRC regulations",
    "English output quality is good but noticeably behind Claude or GPT-4 for nuanced writing tasks",
    "Hallucinations on niche or domain-specific topics happen more often than with top-tier Western models",
    "Service reliability has been spotty during high-demand periods -- the free tier especially suffers from rate limiting",
  ],
  knownIssues: [
    {
      description: "V4-PRO IS FINALLY GA (2026-08-13, vendor change log) -- AND THE ACCOMPANYING 'PEAK/OFF-PEAK' PRICING IS A PRICE **RISE**, NOT A DISCOUNT. THIS IS THE MOST MISREPORTABLE ITEM ON THIS PAGE, SO READ THE NUMBERS. **(1) The GA itself.** DeepSeek's change log states 'The GA release of DeepSeek-V4-Pro has been rolled out on the APP, Web, and API,' model version **DeepSeek-V4-Pro-0813**, calling convention unchanged (`deepseek-v4-pro`). This closes the watch item open since 7/31, when only V4-Flash graduated and DeepSeek said Pro would 'follow soon.' **Vendor-published GA benchmarks:** HLE (without/with tools) **42.7/60.0**, Terminal Bench 2.1 **87.9**, NL2Repo **61.5**, Cybergym **83.3**, DeepSWE **62.7**, Toolathlon-Verified **74.1**, Agents' Last Exam **25.7**, AutomationBench public **31.8**, plus internal sets DSBench-FullStack **71.1** and DSBench-Hard **67.2**. All first-party. **(2) The pricing change -- effective 16:00 UTC on 2026-08-16.** DeepSeek is moving to peak/off-peak billing with 'off-peak prices set at half the peak-hour prices.' **Peak hours are 01:00-04:00 and 06:00-10:00 UTC**; every other hour is off-peak (so ~7 of 24 hours are peak). New V4-Pro rates per 1M: **off-peak $0.022 cache-hit / $0.66 cache-miss input / $1.98 output**; **peak $0.044 / $1.32 / $3.96**. New V4-Flash rates: **off-peak $0.007 / $0.22 / $0.66**; **peak $0.014 / $0.44 / $1.32**. **NOW COMPARE TO WHAT YOU PAY TODAY:** V4-Pro is currently **$0.435 input / $0.87 output**, and V4-Flash **$0.14 / $0.28**. So **even the cheapest new off-peak rate is above the current standing price** -- V4-Pro off-peak input rises ~52% and output ~128%; at peak, input roughly triples and output rises ~355%. V4-Flash off-peak output rises ~136%. **There is no time of day at which the new pricing is cheaper than the old.** Framing it as a discount scheme (which the 'off-peak is half of peak' wording invites) is wrong; the correct read is a substantial across-the-board increase with a time-of-day surcharge layered on top. **This also supersedes our own long-standing note that the 75%-off V4-Pro rate had become the permanent standing price** -- that was true from 2026-05-26 until this change, and it ends on 8/16. **(3) Other GA changes:** thinking effort is now three levels (**low / high / max**) on both Pro and Flash, and the API 'natively supports the OpenAI Responses API format and is specifically adapted for Codex' with a one-click config script",
      source: "DeepSeek API change log (api-docs.deepseek.com/updates, entry dated 2026-08-13) and Models & Pricing (api-docs.deepseek.com/quick_start/pricing, carrying both current and 2026-08-16 rate tables) -- both fetched 2026-08-13",
      date: "2026-08-13",
    },
    {
      description: "**[SUPERSEDED 2026-08-13 -- V4-Pro reached GA on that date; see the 2026-08-13 entry above. Kept because it documents that the aggregators calling V4 'GA' in July were wrong at the time.]** V4-FLASH OFFICIAL RELEASE / PUBLIC BETA -- AND V4-PRO IS STILL NOT GA (2026-07-31, vendor changelog; CORRECTS WIDESPREAD AGGREGATOR REPORTING): DeepSeek's own change log states, verbatim: 'The official release of the DeepSeek-V4-Flash API is now in public beta... The DeepSeek-V4-Pro API and the APP/WEB models are unchanged. **The official release of DeepSeek-V4-Pro will follow soon.**' So only FLASH graduated -- aggregators claiming 'DeepSeek V4 went GA in mid/late July' are wrong, and V4-Pro remains Preview. No API change needed: set the model name to `deepseek-v4-flash`. **Vendor-published V4-Flash-0731 benchmarks** (agent-focused, stated as 'far exceeding V4-Pro-Preview'): Terminal Bench 2.1 **82.7**, NL2Repo **54.2**, Cybergym **76.7**, DeepSWE **54.4**, Toolathlon verified **70.3**, Agent Last Exam **25.2**, Automation Bench (public) **25.1**, plus internal sets DSBench-FullStack 68.7 and DSBench-Hard 59.6. Caveats DeepSeek states itself: code-agent numbers were run with the **DeepSeek Harness minimal mode (which it says is still 'to be released soon')** at max effort, topp=0.95, temperature=1.0 -- so they are not straightforwardly reproducible yet, and all figures are first-party. Architecture note: **V4-Flash-0731 keeps the same architecture and size as V4-Flash-Preview and was only re-post-trained.** It also now **natively supports the Responses API format and is specifically adapted for Codex**",
      source: "DeepSeek API change log (api-docs.deepseek.com/updates, fetched 2026-08-03)",
      date: "2026-07-31",
    },
    {
      description: "CORRECTION -- THE 2x PEAK-HOUR PRICING HAS NOT ACTUALLY STARTED (re-verified 2026-08-03): our earlier entry described time-of-day pricing as shipping alongside the mid-July V4 release. It has not. DeepSeek's pricing page still frames it in the future tense -- it 'will soon adopt a peak/off-peak pricing policy', with peak hours 09:00-12:00 and 14:00-18:00 Beijing time billed at 2x, and explicitly: '**The effective date will be subject to the official announcement.**' No such announcement has been published as of 2026-08-03. Treat 2x peak pricing as ANNOUNCED-BUT-NOT-IN-EFFECT; current rates are the standing ones shown in the pricing table above",
      source: "DeepSeek pricing docs (api-docs.deepseek.com/quick_start/pricing, re-checked 2026-08-03)",
      date: "2026-08-03",
    },
    {
      description: "LEGACY API ALIASES RETIRE 2026-07-24 (vendor-primary, HARD deadline): **`deepseek-chat` and `deepseek-reasoner` will be fully retired and inaccessible after July 24, 2026, 15:59 UTC.** The aliases currently route to deepseek-v4-flash (non-thinking/thinking respectively). Migration is a one-line change: keep base_url, update `model` to `deepseek-v4-pro` or `deepseek-v4-flash` -- but note the gotcha that `deepseek-reasoner` maps to FLASH-tier thinking, not V4-Pro, so 'upgrading' to Pro changes both cost and behavior. Any production code still pinned to the legacy aliases breaks on the 24th",
      source: "DeepSeek API docs (api-docs.deepseek.com/news/news260424)",
      date: "2026-07-24",
    },
    {
      description: "V4 OFFICIAL RELEASE MID-JULY + FIRST PEAK/OFF-PEAK PRICING (announced 2026-06-30): DeepSeek scheduled the **official (non-preview) V4 release for mid-July 2026**, with 1M context across the lineup -- and will introduce **time-of-day API pricing for the first time: peak hours (9:00-12:00 and 14:00-18:00 daily) billed at 2x the off-peak rate**, effective alongside the release. STATUS as of 2026-07-22: the vendor news page (api-docs.deepseek.com/news/news260424) STILL labels V4 as 'Preview' and the peak/off-peak rate card has not been published as text (only a pricing image), so treat 'GA' as imminent-but-not-confirmed; community reporting points to a WAIC-timed reveal (~7/20-26, Shanghai). What IS locked is the **7/24 15:59 UTC legacy-alias retirement** (see entry above) -- that is the hard, vendor-confirmed date. If you batch heavy workloads, shifting them off-peak will halve token costs once the rate card lands",
      source: "TechNode (technode.com/2026/06/30/deepseek-to-launch-v4-in-mid-july-with-new-peak-time-api-pricing/), DeepSeek API docs (api-docs.deepseek.com/news/news260424, re-checked 2026-07-22 -- still 'Preview')",
      date: "2026-06-30",
    },
    {
      description: "Regional availability restrictions: EU, Canada, South Korea, Australia, and India issued formal restrictions or bans on deployment of DeepSeek-V3 and the enterprise API in Q1 2026 over data-residency concerns (traffic routing through mainland China). Germany's BSI confirmed classified metadata leak from a parliamentary pilot. If you're deploying DeepSeek in any of these jurisdictions, check local compliance guidance before shipping; self-hosted open-weights deployment is often the workaround but changes the operational picture",
      source: "National CSIRT/BSI statements (aggregated), Alibaba policy analysis",
      date: "2026-Q1",
    },
    {
      description: "DeepSeek V4 SHIPPED 2026-04-24. Two-model family released simultaneously: V4-Pro (1.6T total / 49B active MoE) and V4-Flash (284B / 13B active MoE). Both default to 1M context natively, use DeepSeek's new Hybrid Attention Architecture, and are open-sourced on HuggingFace under MIT license. V4-Pro trails only Gemini 3.1 Pro on world-knowledge benchmarks per early third-party runs. API pricing: Flash $0.14/$0.28, Pro $1.74/$3.48 per 1M tokens -- still 3-10x cheaper than Western frontier models. Tier-1 coverage: Bloomberg, CNBC, TechCrunch, Simon Willison blog. This closes out the 'V4 imminent' watchlist item that was open since 2026-04-03 Reuters pre-report",
      source: "DeepSeek API docs, Bloomberg, CNBC, TechCrunch, Simon Willison",
      date: "2026-04-24",
    },
    {
      description: "**[SUPERSEDED 2026-08-13 -- this permanent rate ends at 16:00 UTC on 2026-08-16, when peak/off-peak billing raises V4-Pro to $0.66/$1.98 off-peak and $1.32/$3.96 peak. See the 2026-08-13 entry above. Kept because 'DeepSeek made the price war permanent' was accurate for nearly three months and is still widely cited.]** PRICE CUT NOW PERMANENT (confirmed 2026-05-26 via the official pricing page): the 75%-off V4-Pro promo does NOT revert on 2026-05-31. DeepSeek's pricing docs state V4-Pro pricing 'will be officially adjusted to 1/4 of the original price after the 75% discount promotion ends 2026/05/31 15:59 UTC' -- i.e. the discounted rate ($0.435 input / $0.87 output per 1M; cache-hit input $0.003625/M) becomes the new standing list price, down from $1.74 / $3.48. Tech press (The Next Web, Engadget) framed it as DeepSeek making the price war permanent. V4-Flash is unchanged at $0.14 / $0.28. The 'lock in now before the promo ends' framing no longer applies -- this is simply the price now",
      source: "DeepSeek pricing docs (api-docs.deepseek.com/quick_start/pricing), The Next Web, Engadget",
      date: "2026-05-26",
    },
    {
      description: "Third-party verification (T+3 days post-launch): Artificial Analysis Intelligence Index pegs V4-Pro at 52 (#2 open-weight, behind Kimi K2.6) and V4-Flash at 47. Vals AI: V4 is #1 open-weight on Vibe Code Bench 'and it's not close', plus #1 open-weight on SWE-bench. SWE-bench Verified 80.6% (effectively tied with Claude Opus 4.6's 80.8%). Codeforces 3206 surpasses GPT-5.4 (3168) -- highest competitive-programming score at release. GDPval-AA agentic 1554 leads all open-weight models. BUT LMSYS Chatbot Arena Elo around 1220 places V4-Pro alongside GPT-4o and Claude 4 Sonnet, not at the Opus-class frontier (1280+). Simon Willison's pelican-SVG community test produced visibly weak output from V4-Pro (one wing, oversized body) and concluded V4-Pro is 3-6 months behind US frontier labs at a fraction of the cost. Practical verdict: best-in-class open-weight for code/agents/math, mid-pack for general chat quality, weakest for creative/visual generation. Hallucination rate 94%/96% (Pro/Flash) per AA-Omniscience -- caveat for fact-sensitive workloads",
      source: "Artificial Analysis, Vals AI, Simon Willison, LMSYS Chatbot Arena, Codeforces",
      date: "2026-04-27",
    },
    {
      description: "Refuses to engage with questions about Tiananmen Square, Taiwan sovereignty, and other politically sensitive topics per Chinese regulations",
      source: "Reddit r/LocalLLaMA",
      date: "2026-01",
    },
    {
      description: "API latency spikes during peak hours, sometimes timing out entirely on longer reasoning chains",
      source: "GitHub Issues",
      date: "2026-02",
    },
  ],
  bestFor: "Developers and teams who need strong reasoning and coding capabilities on a budget. If you're building AI features and can't justify GPT-4 API costs, DeepSeek is the obvious first stop.",
  notFor: "Anyone working on content that touches geopolitical topics, or teams that need guaranteed uptime and enterprise SLAs. Also not ideal if your primary use case is creative English writing.",
  verdict: "DeepSeek is the real deal when it comes to bang-for-your-buck AI. The reasoning capabilities are legitimately impressive, and the open-source angle gives it a flexibility that closed models can't match. The censorship limitations are a dealbreaker for some use cases, and the writing quality trails behind Claude and GPT-4. But for coding, math, and analytical tasks? It's hard to argue with near-frontier performance at a fraction of the cost.",

  lastReviewedDate: "2026-08-13",
  dataSources: [
    { name: "DeepSeek API Change Log: V4-Pro GA (DeepSeek-V4-Pro-0813), benchmarks, thinking-effort levels, 2026-08-16 pricing change (2026-08-13)", url: "https://api-docs.deepseek.com/updates", dateAccessed: "2026-08-13" },
    { name: "DeepSeek Models & Pricing: current rates plus the peak/off-peak table effective 16:00 UTC 2026-08-16", url: "https://api-docs.deepseek.com/quick_start/pricing", dateAccessed: "2026-08-13" },
    { name: "DeepSeek V4 API launch announcement + 7/24 alias retirement (re-checked 2026-07-22)", url: "https://api-docs.deepseek.com/news/news260424", dateAccessed: "2026-07-22" },
    { name: "Bloomberg: DeepSeek unveils newest flagship (2026-04-24)", url: "https://www.bloomberg.com/news/articles/2026-04-24/deepseek-unveils-newest-flagship-a-year-after-ai-breakthrough", dateAccessed: "2026-04-24" },
    { name: "CNBC: DeepSeek V4 LLM preview (2026-04-24)", url: "https://www.cnbc.com/2026/04/24/deepseek-v4-llm-preview-open-source-ai-competition-china.html", dateAccessed: "2026-04-24" },
    { name: "TechCrunch: DeepSeek V4 closes gap with frontier (2026-04-24)", url: "https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models/", dateAccessed: "2026-04-24" },
    { name: "Simon Willison: DeepSeek V4", url: "https://simonwillison.net/2026/Apr/24/deepseek-v4/", dateAccessed: "2026-04-24" },
    { name: "Artificial Analysis: DeepSeek V4 Pro + Flash leading open weights", url: "https://artificialanalysis.ai/articles/deepseek-is-back-among-the-leading-open-weights-models-with-v4-pro-and-v4-flash", dateAccessed: "2026-04-27" },
    { name: "Vals AI: DeepSeek V4-Pro model card", url: "https://www.vals.ai/models/deepseek_deepseek-v4-pro", dateAccessed: "2026-04-27" },
    { name: "DeepSeek pricing docs (75% V4-Pro promo through 2026-05-31)", url: "https://api-docs.deepseek.com/quick_start/pricing", dateAccessed: "2026-04-28" },
    { name: "DeepSeek official site", url: "https://www.deepseek.com", dateAccessed: "2026-04-24" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-04-24" },
  ],
  affiliateUrl: "https://www.deepseek.com",
  status: "active",
  benchmarks: {
    modelName: "DeepSeek V4-Pro (SWE-bench + Arena Elo third-party verified post-launch; knowledge rows are V3.x baseline pending V4 figures)",
    scores: [
      { name: "MMLU", score: 90.8, maxScore: 100, unit: "%" },
      { name: "MMLU-Pro", score: 85.0, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 79.9, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 91.5, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 80.6, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1220,
    lastUpdated: "2026-05-26",
  },
  systemRequirements: [
    {
      variant: "DeepSeek V4-Flash (284B total, 13B active MoE)",
      min: "96 GB RAM + 1× RTX 3090/4090 (Q4 quantization, ~3-5 tok/s)",
      max: "2× H100 FP8 or 1× H200 (FP8 production, fast)",
      notes: "MIT license, open weights on HuggingFace. Flash is the accessible entry point -- feasible on enthusiast / workstation hardware",
    },
    {
      variant: "DeepSeek V4-Pro (1.6T total, 49B active MoE)",
      min: "512 GB RAM + 4× RTX 4090 (severe quantization, experimental)",
      max: "16× H100 FP8 or 8× H200 (full 1.6T production)",
      notes: "MIT license, open weights. Pro is production multi-GPU territory -- not feasible for individuals",
    },
    {
      variant: "DeepSeek V3.2 (671B total, 37B active MoE) -- prior version, still available",
      min: "192 GB RAM + 1× RTX 3090/4090 (IQ2_XXS offload, ~2 tok/s)",
      max: "8× H100 FP8 or 4× H200 (full 671B, production)",
      notes: "MIT license -- commercial use OK",
    },
  ],

  personality: {
    oneLiner: "The open-source reasoning specialist",
    tone: "Direct and technical. DeepSeek's chat models give compact, math- and code-first answers and are noticeably less chatty than Claude or ChatGPT. When asked to reason, they expose a lot of visible thinking.",
    quirks: "Refusal patterns differ from Western models -- more permissive on many technical and gray-area prompts, more cautious on China-specific political questions. Community-tuned variants exist with different system prompts and guardrails.",
  },
  metaTitle: "DeepSeek V4 Review 2026: V4-Pro + V4-Flash (Apr 24 Launch), Open Source",
  metaDescription: "DeepSeek V4 shipped April 24, 2026. V4-Pro (1.6T/49B MoE) + V4-Flash (284B/13B) both open-source with 1M context. $0.14-$3.48 per 1M tokens. Trails only Gemini 3.1 Pro on world knowledge.",
};
