import { ToolReview } from "@/lib/types";

export const mistral: ToolReview = {
  slug: "mistral",
  name: "Mistral AI",
  tagline: "European AI lab with open and commercial models that punch well above their size",
  category: "ai-local-models",
  url: "https://mistral.ai",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 9,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Le Chat (Free)",
      price: "$0",
      features: ["Web chat interface", "Mistral models", "Basic features"],
    },
    {
      plan: "API (Mistral Small)",
      price: "$0.20",
      period: "per 1M tokens",
      features: ["Fast, efficient model", "32K context", "Function calling"],
    },
    {
      plan: "API (Mistral Large 3)",
      price: "$2",
      period: "per 1M tokens",
      features: ["Flagship sparse MoE", "256K context", "MRL license (paid for commercial self-hosting)"],
    },
    {
      plan: "Self-hosted (Hardware)",
      price: "$0",
      features: [
        "Mistral Small 3 / Devstral 2 (24B dense, Apache) -- Min: 10 GB VRAM Q4 | Mid: 16 GB Q6 | Max: 1× A100 40GB FP16",
        "Mistral 14B / 8B / 3B (Apache) -- Min: 6 / 4 / 2 GB VRAM Q4 | Max: 24 / 16 / 8 GB FP16",
        "Mixtral 8x22B (legacy) -- Min: 64 GB RAM + 24 GB GPU Q3 | Mid: 1× H100 | Max: 2× A100 80GB FP16",
        "Mistral Large 3 flagship -- MRL license; self-host only with paid commercial license",
      ],
    },
  ],

  pros: [
    "Extremely competitive API pricing -- Mistral Small is dirt cheap for its quality",
    "Open-weight models (Mistral 7B, Mixtral) are excellent for self-hosting",
    "Stronger multilingual performance than most competitors, especially European languages",
    "Mixtral MoE architecture is innovative -- gets big model quality at lower compute cost",
  ],
  cons: [
    "Le Chat web interface is bare-bones compared to ChatGPT or Claude",
    "Smaller ecosystem -- fewer integrations and community resources",
    "Less brand recognition means less community help when you get stuck",
    "Documentation could be better, especially for newer models",
  ],
  knownIssues: [
    {
      description: "Le Chat occasionally slower than competitors during European business hours",
      source: "Reddit r/MistralAI",
      date: "2026-03",
    },
  ],
  bestFor: "Developers who want cheap, high-quality API access. Also strong for multilingual applications and European companies that prefer an EU-based AI provider for data residency.",
  notFor: "Non-technical users looking for a polished chat experience. ChatGPT and Claude are much better as consumer products.",
  verdict: "Mistral is the scrappy underdog that keeps surprising people. Their models are impressively efficient -- you get near-GPT-4 quality at a fraction of the API cost. But the consumer experience (Le Chat) is rough. This is primarily a developer's tool. If you're building AI applications on a budget, Mistral should be on your shortlist.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Mistral AI official site", dateAccessed: "2026-03-26" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-03-26" },
    { name: "Reddit r/MistralAI", dateAccessed: "2026-03-26" },
    { name: "API testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://mistral.ai",
  status: "active",
  benchmarks: {
    modelName: "Mistral Large",
    scores: [
      { name: "MMLU", score: 86.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 92.0, maxScore: 100, unit: "%" },
      { name: "MATH", score: 69.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  metaTitle: "Mistral AI Review 2026: Best Budget LLM for Developers?",
  metaDescription: "Mistral AI review. Cheap API, great multilingual support, open models -- but rough consumer product. Full scores and pricing. March 2026.",
};
