import { ToolReview } from "@/lib/types";

export const gemini: ToolReview = {
  slug: "gemini",
  name: "Gemini (Google)",
  tagline: "Google's LLM with deep Google Workspace integration, 2M token context window, and native code execution",
  category: "ai-llms",
  url: "https://gemini.google.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Gemini 3.1 Flash", "Basic features", "Google integration"],
    },
    {
      plan: "Google AI Pro",
      price: "$19.99",
      period: "month",
      features: ["Gemini 3.1 Ultra", "2M token context", "Code Execution sandbox", "2TB Google storage", "Workspace integration", "Lyria 3 access"],
    },
    {
      plan: "Google AI Ultra",
      price: "$249.99",
      period: "month",
      features: ["Gemini 3.1 Ultra (max usage)", "Gemini 3.1 Flash Live audio", "Lyria 3 Pro full access", "Highest API priority", "30TB Google storage"],
    },
    {
      plan: "API",
      price: "$0.075-5",
      period: "per 1M tokens",
      features: ["All models", "2M context", "Flash-Lite at $0.25/M input", "Grounding with Google Search", "Code Execution", "Mandatory spend caps (April 2026)"],
    },
  ],

  pros: [
    "2 million token context window is the largest available -- can process entire books and full codebases in one prompt",
    "Best Google Workspace integration (Gmail, Docs, Drive, Calendar)",
    "Free tier is more generous than Claude's",
    "Gemini Advanced includes 2TB Google One storage -- real added value",
    "API pricing is very competitive, especially for Flash model",
  ],
  cons: [
    "Output quality for creative writing is the weakest of the big three (GPT-4, Claude, Gemini)",
    "Hallucination rate is higher than Claude in our testing",
    "Google's track record of killing products makes long-term commitment feel risky",
    "The Gemini app UI feels like Google slapped AI onto an existing product",
  ],
  knownIssues: [
    {
      description: "PRE-I/O STAGING (re-verified 2026-05-13, T-6 to Google I/O 2026-05-19 keynote): No new Gemini model or product launches between 2026-05-08 and 2026-05-13. Most-recent ship remains Gemini 3.1 Flash-Lite GA (2026-05-07). I/O watchlist (LEAKS, not yet shipped): (a) 'Omni' video model -- UI string 'Powered by Omni' leaked in Gemini video tab 2026-05-04, actual generated clips leaked 5/11 from a Pro user account (seaside spaghetti scene, trig-proof chalkboard demo) -- expect I/O reveal 5/19, would bundle video + image vs OpenAI's now-killed-Sora standalone approach. (b) COSMO -- on-device proactive assistant accidentally published to Play Store 2026-05-01 under Google's main account for a 47-min window (~1.13 GB, local Gemini Nano), two modes: 'Nano Only' (offline) + 'Hybrid' (with PI backend); 20K+ Play Store searches during the leak window before takedown -- expect I/O reveal. (c) Gemini 3.2 -- already spotted in iOS Gemini app + AI Studio model selector 5/5, Polymarket 94.5% on 3.2 release 5/19; Gemini 3.5 jump remains low-confidence. Pre-stage to update entry post-keynote with shipped names + benchmarks.",
      source: "TestingCatalog (Omni leak), 9to5Google (COSMO leak), Polymarket (Gemini 3.2 market)",
      date: "2026-05-13",
    },
    {
      description: "GEMINI 3.1 FLASH-LITE GA (2026-05-07): Generally available on the Gemini Enterprise Agent Platform. Fastest + most cost-efficient Gemini 3 series model. **2.5x faster Time-to-First-Answer-Token vs Gemini 2.5 Flash; +45% output speed**. Pricing per third-party reference: $0.25/M input, $1.50/M output (vendor blog itself omits direct pricing -- check ai.google.dev/pricing for canonical). Customer signals at GA: Gladly reports ~60% lower cost vs thinking-tier models; OffDeal cites sub-second p95 for classifiers.",
      source: "Google Cloud blog (cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-flash-lite-is-now-generally-available), blog.google",
      date: "2026-05-07",
    },
    {
      description: "Gemini 2.5 family retirement dates EXTENDED (ai.google.dev deprecations page, checked 2026-04-24): Gemini 2.5 Pro, 2.5 Flash, AND 2.5 Flash-Lite now all retire 2026-10-16 (pushed out from original 2026-06-17 / 2026-07-22 dates). Gives ~6 more months to migrate to gemini-3.1-pro + gemini-3-flash. Production code still calling 2.5 model names continues to work through Oct 16, but do not ship new code on retiring endpoints",
      source: "ai.google.dev/gemini-api/docs/deprecations (verified 2026-04-24)",
      date: "2026-04-24",
    },
    {
      description: "Gemini 3.1 Flash TTS launched 2026-04-15 as a preview on Gemini API, AI Studio, Vertex AI, and Google Vids. 70+ languages, audio tags for vocal style/pace/delivery embedded in the text prompt, Elo 1,211 on Artificial Analysis TTS leaderboard. Positions Google as a direct competitor to ElevenLabs v3 on the TTS stack",
      source: "blog.google Gemini 3.1 Flash TTS, MarkTechPost",
      date: "2026-04",
    },
    {
      description: "Image generation of people was temporarily disabled after generating historically inaccurate results, partially restored but still limited",
      source: "The Verge, Google Blog",
      date: "2026-01",
    },
    {
      description: "Gemini Pro model access removed from free API tier on April 1, 2026 -- mandatory spend caps and prepaid billing now required for new accounts",
      source: "Google AI for Developers, FindSkill.ai",
      date: "2026-04",
    },
    {
      description: "Google AI Ultra at $249.99/mo is hard to justify against Claude Max ($200) and ChatGPT Pro ($200) unless you specifically need Lyria 3 Pro",
      source: "Reddit r/Bard",
      date: "2026-04",
    },
  ],
  bestFor: "Google Workspace power users. If you live in Gmail, Docs, and Drive, Gemini Advanced integrates directly into your workflow. Also great for developers who need the cheapest API with the longest context window.",
  notFor: "Anyone who needs the best raw output quality. Claude and GPT-4 both write better. Also not for anyone spooked by Google's history of abandoning products.",
  verdict: "Gemini's strength is the ecosystem play. The 1M context window is genuinely useful for long documents, and the Google Workspace integration is something neither OpenAI nor Anthropic can match. But purely as an LLM, the output quality is a step behind Claude and GPT-4. Pick Gemini if you're deep in Google's ecosystem. Otherwise, the other two are better standalone.",

  lastReviewedDate: "2026-05-13",
  dataSources: [
    { name: "Google AI for Developers: deprecations", url: "https://ai.google.dev/gemini-api/docs/deprecations", dateAccessed: "2026-04-21" },
    { name: "Google Blog: Gemini 3.1 Flash TTS", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/", dateAccessed: "2026-04-21" },
    { name: "Google Gemini official site", dateAccessed: "2026-04-21" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-13" },
    { name: "Reddit r/Bard", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://gemini.google.com",
  status: "active",
  benchmarks: {
    modelName: "Gemini 3.1 Ultra",
    scores: [
      { name: "MMLU", score: 90.5, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 94.3, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 93.5, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 80.6, maxScore: 100, unit: "%" },
      { name: "ARC-AGI", score: 77.1, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1500,
    lastUpdated: "2026-04-13",
  },
  personality: {
    oneLiner: "The Google research assistant",
    tone: "Neutral, thorough, and slightly corporate. Gemini leans academic, cites sources readily in Deep Research mode, and keeps its tone even across topics -- rarely funny, rarely snarky.",
    quirks: "Tightly integrated with Google products -- pulls from Search and Workspace by default, which is useful for grounded answers but means you hear Google's worldview. Can feel evasive or overly safe on opinionated or politically charged questions.",
  },
  metaTitle: "Gemini Review 2026: 3.1 Ultra, 2.5 Retirement Oct 16, Flash TTS",
  metaDescription: "Google Gemini review. Gemini 3.1 Ultra (2M context), Gemini 3.1 Flash TTS (Apr 15 2026, 70+ langs). Gemini 2.5 Pro/Flash/Flash-Lite all retire 2026-10-16 (extended from June/July).",
};
