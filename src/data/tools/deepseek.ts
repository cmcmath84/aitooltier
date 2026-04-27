import { ToolReview } from "@/lib/types";

export const deepseek: ToolReview = {
  slug: "deepseek",
  name: "DeepSeek",
  tagline: "DeepSeek V4 shipped 2026-04-24: V4-Pro (1.6T/49B active MoE) + V4-Flash (284B/13B active), 1M native context, Hybrid Attention Architecture, open-source on HF. Trails only Gemini 3.1 Pro on world knowledge",
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
      price: "$1.74/$3.48",
      period: "per 1M tokens input/output",
      features: ["1.6T total / 49B active MoE", "1M native context", "Trails only Gemini 3.1 Pro on world knowledge benchmarks", "Still dramatically cheaper than GPT-5.5 ($5/$30) or Claude Opus 4.7 ($5/$25)"],
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

  lastReviewedDate: "2026-04-27",
  dataSources: [
    { name: "DeepSeek V4 API launch announcement (2026-04-24)", url: "https://api-docs.deepseek.com/news/news260424", dateAccessed: "2026-04-24" },
    { name: "Bloomberg: DeepSeek unveils newest flagship (2026-04-24)", url: "https://www.bloomberg.com/news/articles/2026-04-24/deepseek-unveils-newest-flagship-a-year-after-ai-breakthrough", dateAccessed: "2026-04-24" },
    { name: "CNBC: DeepSeek V4 LLM preview (2026-04-24)", url: "https://www.cnbc.com/2026/04/24/deepseek-v4-llm-preview-open-source-ai-competition-china.html", dateAccessed: "2026-04-24" },
    { name: "TechCrunch: DeepSeek V4 closes gap with frontier (2026-04-24)", url: "https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models/", dateAccessed: "2026-04-24" },
    { name: "Simon Willison: DeepSeek V4", url: "https://simonwillison.net/2026/Apr/24/deepseek-v4/", dateAccessed: "2026-04-24" },
    { name: "Artificial Analysis: DeepSeek V4 Pro + Flash leading open weights", url: "https://artificialanalysis.ai/articles/deepseek-is-back-among-the-leading-open-weights-models-with-v4-pro-and-v4-flash", dateAccessed: "2026-04-27" },
    { name: "Vals AI: DeepSeek V4-Pro model card", url: "https://www.vals.ai/models/deepseek_deepseek-v4-pro", dateAccessed: "2026-04-27" },
    { name: "DeepSeek official site", url: "https://www.deepseek.com", dateAccessed: "2026-04-24" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-04-24" },
  ],
  affiliateUrl: "https://www.deepseek.com",
  status: "active",
  benchmarks: {
    modelName: "DeepSeek V4-Pro (launched 2026-04-24; scores below are the V3.2 baseline pending third-party V4 verification, which typically lands 3-7 days post-launch)",
    scores: [
      { name: "MMLU", score: 90.8, maxScore: 100, unit: "%" },
      { name: "MMLU-Pro", score: 85.0, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 79.9, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 91.5, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 67.8, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1380,
    lastUpdated: "2026-04-24",
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
