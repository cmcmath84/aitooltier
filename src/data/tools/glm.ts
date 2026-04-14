import { ToolReview } from "@/lib/types";

export const glm: ToolReview = {
  slug: "glm",
  name: "GLM / Z.ai (Zhipu AI)",
  tagline: "Zhipu AI's open-weights family -- GLM-4.6 text flagship and GLM-4.6V multimodal, true MIT licensed",
  category: "ai-local-models",
  url: "https://z.ai",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 8.5,
    value: 9,
    features: 8,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["MIT license -- truly open, no MAU clauses", "Full weights on Hugging Face", "Commercial use fully permitted"],
    },
    {
      plan: "API (Z.ai / OpenRouter)",
      price: "$0.60",
      period: "per 1M input tokens",
      features: ["GLM-4.6: $0.60 in / $2.20 out", "GLM-4.6V (vision): tiered", "200K context"],
    },
    {
      plan: "Self-hosted (Hardware)",
      price: "$0",
      features: [
        "GLM-4.6 355B MoE -- Min: 128 GB RAM + 24 GB GPU Q3 offload | Mid: 2× A100 80GB Q4 | Max: 4× H100 FP8",
        "GLM-4.6V multimodal -- similar footprint, plus vision tower adds ~4 GB",
        "Smaller GLM-4-9B sizes exist -- Min: 6 GB VRAM Q4 | Max: 24 GB FP16",
      ],
    },
  ],

  pros: [
    "True MIT license -- one of the few frontier-tier open-weights models with zero commercial restrictions",
    "GLM-4.6 is SOTA among open models for agentic tool-use and function calling",
    "GLM-4.6V is #1 open-source on MMBench, MathVista, OCRBench among multimodal models",
    "200K context window handles long documents reliably",
    "Strong Chinese + English performance (unlike DeepSeek which is English-biased)",
  ],
  cons: [
    "Smaller Western community than Qwen or DeepSeek -- fewer tutorials, quants, fine-tunes",
    "English tone is noticeably more stilted than Claude or Mistral for creative writing",
    "PRC content filters apply to politically sensitive topics",
    "Ollama support lags behind Qwen/Llama/Mistral release cycles",
  ],
  knownIssues: [
    {
      description: "GLM-4.6 requires specific tokenizer and chat template -- several community llama.cpp quants initially had broken tool-use until fixes landed",
      source: "Hugging Face discussions, GitHub issues",
      date: "2026-03",
    },
    {
      description: "Refuses discussion of Tiananmen, Taiwan, Xi Jinping -- same PRC content filters as DeepSeek and Qwen",
      source: "Reddit r/LocalLLaMA",
      date: "2026-02",
    },
  ],
  bestFor: "Teams that need genuine MIT-licensed frontier open weights with no commercial strings. Especially strong for agentic workflows and vision (GLM-4.6V).",
  notFor: "Consumer-facing English content generation (Mistral or Claude write better), or ultra-low-resource deployment (use Gemma 4 or Phi-4 instead).",
  verdict: "GLM-4.6 is the most under-appreciated frontier open-weights model in 2026. The true MIT license puts it ahead of Llama 4 on licensing, and the agentic tool-use performance beats most of its open-weight peers. GLM-4.6V is legitimately the best open multimodal model on several benchmarks. The weakness is purely ecosystem: fewer Western fine-tunes and less Ollama coverage. If you're building an agent or multimodal product and want clean licensing, GLM is the pick.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Z.ai blog: GLM-4.6 and GLM-4.6V", dateAccessed: "2026-04-13" },
    { name: "Hugging Face THUDM collection", dateAccessed: "2026-04-13" },
    { name: "Artificial Analysis open-weights leaderboard", dateAccessed: "2026-04-13" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://z.ai",
  status: "active",
  benchmarks: {
    modelName: "GLM-4.6",
    scores: [
      { name: "MMLU-Pro", score: 81.2, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 74.5, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 89.1, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Verified", score: 64.2, maxScore: 100, unit: "%" },
      { name: "BFCL (function calling)", score: 88.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  metaTitle: "GLM-4.6 / Z.ai Review 2026: MIT-Licensed Open-Weights LLM from Zhipu AI",
  metaDescription: "GLM-4.6 review. Zhipu AI's 355B MoE open-weights LLM, true MIT license, SOTA on agentic tool-use. GLM-4.6V multimodal flagship. Benchmarks, pricing, hardware. April 2026.",
};
