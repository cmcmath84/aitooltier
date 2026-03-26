import { ToolReview } from "@/lib/types";

export const llama: ToolReview = {
  slug: "llama",
  name: "Llama 3 (Meta)",
  tagline: "Meta's open-source LLM -- run it locally for free with zero data sharing",
  category: "ai-llms",
  url: "https://llama.meta.com",

  scores: {
    easeOfUse: 4,
    outputQuality: 8,
    value: 10,
    features: 7,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["Unlimited use", "Full control", "Requires hardware"],
    },
    {
      plan: "Cloud providers",
      price: "$0.20-2",
      period: "per 1M tokens",
      features: ["AWS, Azure, Together AI", "No hardware needed", "Various sizes"],
    },
  ],

  pros: [
    "Completely free and open-source -- no API costs if you self-host",
    "Total privacy -- your data never leaves your machine",
    "Llama 3 70B competes with GPT-4 on many benchmarks",
    "Massive ecosystem of fine-tunes and community models built on top of it",
    "No content restrictions when running locally",
  ],
  cons: [
    "Self-hosting requires serious hardware (70B model needs 40GB+ VRAM)",
    "No built-in web interface -- you need Ollama, LM Studio, or similar",
    "Smaller models (8B) are noticeably worse than the big commercial LLMs",
    "No integrated tools (browsing, code execution, image gen) without extra setup",
  ],
  knownIssues: [
    {
      description: "Llama 3 70B quantized versions show degraded performance on complex reasoning tasks compared to full precision",
      source: "Reddit r/LocalLLaMA",
      date: "2026-02",
    },
  ],
  bestFor: "Developers, privacy-focused users, and anyone who wants to run an LLM locally without sending data to any company. Also great for building custom AI applications.",
  notFor: "Non-technical users who want a chat app they can just open and use. You need to know what you're doing to get Llama running well.",
  verdict: "Llama 3 is the best open-source LLM available. The 70B model is genuinely competitive with commercial options, and the fact that it's completely free with zero data sharing is a huge deal. But it's not a product -- it's a model. You need to bring your own interface, your own hardware, and your own technical skills. For developers, it's incredible. For everyone else, just use Claude or ChatGPT.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Meta Llama official site", dateAccessed: "2026-03-26" },
    { name: "Hugging Face benchmarks", dateAccessed: "2026-03-26" },
    { name: "Reddit r/LocalLLaMA", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing via Ollama", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://llama.meta.com",
  status: "active",
  metaTitle: "Llama 3 Review 2026: Best Open-Source LLM You Can Run Locally",
  metaDescription: "Meta Llama 3 review. Free, open-source, private -- but you need the hardware and skills to run it. Scores, setup info, pros and cons. March 2026.",
};
