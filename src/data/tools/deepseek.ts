import { ToolReview } from "@/lib/types";

export const deepseek: ToolReview = {
  slug: "deepseek",
  name: "DeepSeek",
  tagline: "Near-frontier reasoning for pennies on the dollar -- the open-source LLM that made Silicon Valley nervous",
  category: "ai-llms",
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

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "DeepSeek official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/LocalLLaMA", dateAccessed: "2026-03-31" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://www.deepseek.com",
  status: "active",
  metaTitle: "DeepSeek Review 2026: Near-Frontier AI at a Fraction of the Cost",
  metaDescription: "DeepSeek review. Open-source LLM with strong reasoning, dirt-cheap API pricing, 130M+ users. But censorship and reliability are real concerns. Scores, pricing. March 2026.",
};
