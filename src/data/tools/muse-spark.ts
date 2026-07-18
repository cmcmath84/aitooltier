import { ToolReview } from "@/lib/types";

export const museSpark: ToolReview = {
  slug: "muse-spark",
  name: "Muse Spark (Meta)",
  tagline: "Meta's frontier model line from its Superintelligence Lab -- Muse Spark 1.1 (2026-07-09) adds substantially better coding, 1M-token multi-agent orchestration, and Meta's first paid developer API (Meta Model API, public preview)",
  category: "ai-llms",
  url: "https://ai.meta.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 10,
    features: 8,
    overall: 8.8,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free (Meta AI app)", price: "$0", features: ["Full Muse Spark access", "Text, image, audio input", "Available on Meta.ai, Facebook, Instagram, WhatsApp", "Contemplating mode"] },
    { plan: "Meta Model API (public preview)", price: "TBA", features: ["Launched 2026-07-09 with Muse Spark 1.1 -- Meta's first paid model API", "Public preview for developer access", "Early partners: Replit, Cline, Box, OpenClaw Foundation", "Pricing not yet disclosed in the launch post"] },
  ],

  pros: [
    "Completely free to use via Meta AI app and Meta.ai -- no subscription required for the full model",
    "Natively multimodal: handles text, images, and audio in a single architecture, not bolted-on adapters",
    "Contemplating mode orchestrates multiple agents reasoning in parallel -- competitive with Gemini Deep Think and GPT-5.4 Pro",
    "Runs on 10x less compute than comparable frontier models according to Meta's benchmarks",
    "260K token context window -- competitive with most frontier models",
    "Scores 52 on Artificial Analysis Intelligence Index and 58% on Humanity's Last Exam in Contemplating mode",
    "HealthBench Hard 42.8 -- a real differentiator. Far ahead of Claude Opus 4.6 (14.8), Gemini 3.1 Pro (20.6), and GPT-5.4 (40.1). Meta trained Muse Spark with 1,000+ licensed physicians in the loop, which shows up in medical-reasoning evaluations",
    "Distribution advantage: will reach billions of users across Facebook, Instagram, and WhatsApp",
  ],
  cons: [
    "Meta Model API is public-preview only, with no published pricing yet -- production commitments are premature",
    "Locked into Meta's ecosystem -- you need Meta accounts and their apps to access it",
    "Early reviews say it's 'competitive but not leading' -- doesn't clearly beat GPT-5.4 or Claude on any benchmark",
    "Privacy concerns given Meta's data practices across its social platforms",
    "No fine-tuning, no custom instructions, no equivalent of Custom GPTs or Claude Projects",
  ],
  knownIssues: [
    {
      description: "MODEL + API LAUNCH (2026-07-09): **Muse Spark 1.1** shipped via Meta Superintelligence Labs -- available immediately in 'Thinking' mode in the Meta AI app and meta.ai, and launched alongside the **Meta Model API public preview**, Meta's first paid model API (resolving the long-standing 'no public API' gap). Vendor-cited improvements: substantially better coding on large, complex codebases (bug diagnosis, feature implementation, code migrations); stronger perception/multimodal reasoning/tool use across images, video, and audio; multi-agent orchestration where Spark 1.1 acts as a main agent delegating to subagents while managing a **1M token context window**; and computer use across multiple applications. Early API partners: Replit, Cline, Box, OpenClaw Foundation. NOTE: no pricing was disclosed in the launch post -- aggregator claims of '75% below rivals' are unverified; wait for the vendor price sheet",
      source: "Meta AI blog (ai.meta.com/blog/introducing-muse-spark-meta-model-api/), NYT (2026-07-09), CNBC, Axios",
      date: "2026-07-09",
    },
    {
      description: "SUPERSEDED (2026-07-09): the April-era 'no public API, private preview only' status no longer holds -- the Meta Model API entered public preview with Muse Spark 1.1 (see entry above).",
      source: "Meta AI blog (ai.meta.com/blog/introducing-muse-spark-meta-model-api/)",
      date: "2026-07-09",
    },
    {
      description: "Contemplating mode adds significant latency (30+ seconds) as multiple agents reason in parallel before responding",
      source: "DataCamp review, Reddit r/artificial",
      date: "2026-04",
    },
  ],
  bestFor: "Anyone who wants frontier-level AI for free. If you use Meta's apps (Facebook, Instagram, WhatsApp) already, Muse Spark is the most accessible high-quality LLM with zero cost.",
  notFor: "Developers who need API access for production apps (not available yet). Also not ideal for enterprise users who need data privacy guarantees given Meta's data handling practices.",
  verdict: "Muse Spark is Meta's strongest statement yet that frontier AI should be free. The model is genuinely competitive with GPT-5.4 and Claude on benchmarks, and Contemplating mode's multi-agent reasoning is a real differentiator. The catch? No API, no customization, and you're locked into Meta's ecosystem. For casual users who just want a great free chatbot, this is arguably the best deal in AI right now. For developers or enterprise users, you'll be waiting.",

  lastReviewedDate: "2026-07-18",
  dataSources: [
    { name: "Meta AI blog: Introducing Muse Spark 1.1 + Meta Model API (2026-07-09)", url: "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/", dateAccessed: "2026-07-18" },
    { name: "Meta AI official blog", dateAccessed: "2026-04-13" },
    { name: "TechCrunch coverage", dateAccessed: "2026-04-13" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-04-13" },
    { name: "DataCamp review", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://ai.meta.com",
  status: "active",
  benchmarks: {
    modelName: "Muse Spark",
    scores: [
      { name: "MMLU", score: 89.0, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 86.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 91.0, maxScore: 100, unit: "%" },
      { name: "HLE", score: 58.0, maxScore: 100, unit: "%" },
      { name: "HealthBench Hard", score: 42.8, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-19",
  },
  metaTitle: "Muse Spark 1.1 Review 2026: Meta's Free Frontier Model Gets Its First Paid API",
  metaDescription: "Meta Muse Spark review. Spark 1.1 (July 9, 2026): better coding, 1M-context multi-agent orchestration, computer use -- plus the Meta Model API public preview, Meta's first paid API. Still free in Meta AI apps.",
};
