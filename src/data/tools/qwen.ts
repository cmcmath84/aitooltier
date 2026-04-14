import { ToolReview } from "@/lib/types";

export const qwen: ToolReview = {
  slug: "qwen",
  name: "Qwen (Alibaba)",
  tagline: "Alibaba's open-weights family -- Qwen3.5, Qwen3-Coder-Next, Qwen3-VL, Qwen3-Max. Apache 2.0 flagship sizes.",
  category: "ai-local-models",
  url: "https://qwen.ai",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 10,
    features: 9,
    overall: 8.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["Apache 2.0 license on open weights", "Available on Hugging Face, ModelScope, Ollama", "Fine-tuning fully permitted"],
    },
    {
      plan: "API (OpenRouter / Alibaba Cloud)",
      price: "$0.12",
      period: "per 1M input tokens",
      features: ["Qwen3-Coder-Next 80B-A3B: $0.12 in / $0.60 out", "Qwen3.5-397B: $0.40 in / $2.40 out", "Qwen3-Max (API only): $0.78 in / $6.00 out"],
    },
    {
      plan: "Self-hosted (Hardware)",
      price: "$0",
      features: [
        "Qwen3-Coder-Next 80B-A3B (sparse MoE) -- Min: 8 GB VRAM Q4 RTX 3060 | Mid: 24 GB RTX 4090 Q6 | Max: 1× A100 80GB FP16",
        "Qwen3.5-397B MoE -- Min: 128 GB RAM + 24 GB GPU Q3 | Mid: 2× A100 80GB Q4 | Max: 4× H100 FP8",
        "Qwen3-VL (vision flagship) -- Min: 24 GB VRAM Q4 | Mid: 48 GB Q6 | Max: 1× H100 FP16",
        "Qwen3-Max is API-only -- weights NOT released",
      ],
    },
  ],

  pros: [
    "Apache 2.0 license on the open sizes -- genuinely permissive for any commercial use",
    "Qwen3-Coder-Next 80B-A3B runs on 8 GB VRAM and still posts top-tier coding benchmarks (sparse MoE activates only ~3B params)",
    "Full modality lineup: text (Qwen3), vision (Qwen3-VL), coder (Qwen3-Coder-Next), reasoning (Qwen3-Thinking)",
    "Qwen3.5-397B sits in LMArena's top-3 open-source models",
    "262K context on Qwen3-Max, 256K on Coder-Next -- competitive long-context performance",
    "Massive ecosystem support: Ollama, llama.cpp, vLLM, LM Studio all ship first-class Qwen quants",
  ],
  cons: [
    "Qwen3-Max flagship is API-only -- you can't self-host the best Alibaba model",
    "Censorship on politically sensitive topics (PRC regulations apply)",
    "English writing style occasionally stilted compared to Claude or Mistral",
    "Rapid release cadence means model names (Qwen3, Qwen3.5, Qwen3-Next, Qwen3-Max-Thinking) are confusing",
  ],
  knownIssues: [
    {
      description: "Qwen3-Max (API flagship) is not released as open weights -- confusing for users expecting Alibaba's best model to be self-hostable",
      source: "Reddit r/LocalLLaMA",
      date: "2026-02",
    },
    {
      description: "Refuses discussion of Tiananmen, Taiwan sovereignty, Xi Jinping -- same PRC content filters as DeepSeek",
      source: "Hugging Face discussions",
      date: "2026-01",
    },
  ],
  bestFor: "Developers who want frontier-tier open weights with Apache 2.0 licensing. Qwen3-Coder-Next is arguably the best local coding model; Qwen3.5-397B is a top-3 open generalist.",
  notFor: "Teams that need the Qwen3-Max flagship self-hostable (it's API-only), or use cases that touch Chinese-government-sensitive topics.",
  verdict: "Qwen is the most complete open-weights family in 2026. Alibaba ships Apache-2.0 weights across text, coding, vision, and reasoning -- every modality has a top-tier entry. Qwen3-Coder-Next is a standout: 3B active params but competitive with Claude Sonnet on coding. The catch is that Qwen3-Max, the absolute flagship, stays closed. If you can live with the PRC content filters and want the best open-weights ecosystem, Qwen is the S-tier pick.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Qwen official blog", dateAccessed: "2026-04-13" },
    { name: "Hugging Face Qwen collection", dateAccessed: "2026-04-13" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-13" },
    { name: "Artificial Analysis", dateAccessed: "2026-04-13" },
    { name: "Reddit r/LocalLLaMA", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://qwen.ai",
  status: "active",
  benchmarks: {
    modelName: "Qwen3.5-397B MoE",
    scores: [
      { name: "MMLU-Pro", score: 83.5, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 78.2, maxScore: 100, unit: "%" },
      { name: "AIME 2025", score: 87.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 92.5, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Verified", score: 69.4, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  systemRequirements: [
    {
      variant: "Qwen3-Coder-Next 80B-A3B (sparse MoE)",
      min: "8 GB VRAM Q4 (RTX 3060)",
      max: "1× A100 80 GB FP16",
    },
    {
      variant: "Qwen3.5 (397B MoE flagship)",
      min: "128 GB RAM + 24 GB GPU (Q3)",
      max: "4× H100 FP8",
    },
    {
      variant: "Qwen3-VL (vision flagship)",
      min: "24 GB VRAM (Q4)",
      max: "1× H100 FP16",
    },
    {
      variant: "Qwen3-Max",
      min: "API-only -- weights not released",
      max: "API-only -- weights not released",
    },
  ],

  metaTitle: "Qwen Review 2026: Alibaba's Apache 2.0 Open-Weights LLM Family",
  metaDescription: "Qwen review. Qwen3.5-397B, Qwen3-Coder-Next, Qwen3-VL, Qwen3-Max. Apache 2.0, 256K+ context, top-3 open-source on LMArena. Benchmarks, pricing, hardware. April 2026.",
};
