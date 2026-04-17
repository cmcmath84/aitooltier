import { ToolReview } from "@/lib/types";

export const deepseek: ToolReview = {
  slug: "deepseek",
  name: "DeepSeek",
  tagline: "Near-frontier reasoning for pennies on the dollar -- the open-source LLM that made Silicon Valley nervous",
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
      features: ["Web chat access", "DeepSeek-V3 model", "Basic usage limits"],
    },
    {
      plan: "API",
      price: "$0.14",
      period: "month",
      features: ["Per million input tokens (V3)", "$0.28/M output tokens", "Pay-as-you-go"],
    },
    {
      plan: "DeepSeek Pro",
      price: "$9.99",
      period: "month",
      features: ["Higher rate limits", "Priority access", "Advanced features"],
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
      description: "DeepSeek V4 IMMINENT: Per Reuters (citing The Information) on 2026-04-03, V4 launches in 'next few weeks' running on Huawei Ascend chips. Expected late April / early May 2026. Rumored to be a unified hybrid reasoning + non-reasoning model (~1T params, 1M context) that subsumes both V3 and R2 -- DeepSeek is reportedly skipping a separate R2 release entirely",
      source: "Reuters, The Information, Gizchina",
      date: "2026-04",
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

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "DeepSeek official site", url: "https://www.deepseek.com", dateAccessed: "2026-04-17" },
    { name: "Reuters / The Information: DeepSeek V4 imminent April 2026", url: "https://evolink.ai/blog/deepseek-v4-release-window-prep", dateAccessed: "2026-04-17" },
    { name: "Gizchina: DeepSeek V4 expected late April massive param scale", url: "https://www.gizchina.com/ai/deepseek-v4-expected-to-launch-in-late-april-with-massive-parameter-scale", dateAccessed: "2026-04-17" },
    { name: "Reddit r/LocalLLaMA", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.deepseek.com",
  status: "active",
  benchmarks: {
    modelName: "DeepSeek V3.2",
    scores: [
      { name: "MMLU", score: 90.8, maxScore: 100, unit: "%" },
      { name: "MMLU-Pro", score: 85.0, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 79.9, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 91.5, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 67.8, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1380,
    lastUpdated: "2026-04-13",
  },
  systemRequirements: [
    {
      variant: "DeepSeek V3.2 (671B total, 37B active MoE)",
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
  metaTitle: "DeepSeek Review 2026: Near-Frontier AI at a Fraction of the Cost",
  metaDescription: "DeepSeek review. Open-source LLM with strong reasoning, dirt-cheap API pricing, 130M+ users. But censorship and reliability are real concerns. Scores, pricing. March 2026.",
};
