import { ToolReview } from "@/lib/types";

export const falcon: ToolReview = {
  slug: "falcon",
  name: "Falcon (TII)",
  tagline: "UAE's Technology Innovation Institute open-weights family -- Falcon 3 optimized for efficient sub-10B deployment on consumer hardware",
  category: "ai-local-models",
  url: "https://falconllm.tii.ae",

  scores: {
    easeOfUse: 7,
    outputQuality: 6.5,
    value: 9,
    features: 6,
    overall: 7.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["Apache 2.0 with Acceptable Use Policy", "Commercial use permitted", "Weights on Hugging Face"],
    },
    {
      plan: "API (Hugging Face Inference, third-party)",
      price: "varies",
      period: "per 1M tokens",
      features: ["Hosted via HF Inference Endpoints", "Together.ai partial support", "Small community of API hosts"],
    },
  ],

  pros: [
    "Apache 2.0 license -- fully permissive for commercial use",
    "Sub-10B sizes run on any consumer GPU or even CPU with acceptable speed",
    "Falcon 3 Mamba variant offers state-space architecture for cheap long-context inference",
    "Backed by UAE government funding -- long-term viability is strong",
    "Strong multilingual performance including Arabic (a gap in most Western open-weights models)",
  ],
  cons: [
    "Not frontier quality -- Falcon 3 10B is B/C-tier vs. Qwen3, Gemma 4, Llama 4 in the same size class",
    "Smaller community than Llama, Qwen, Mistral -- fewer fine-tunes and tools",
    "Original Falcon 180B (2023) was hyped but quickly obsoleted -- damaged reputation somewhat",
    "Falcon 3 release cadence has slowed since 2025",
    "No flagship frontier-size model in 2026 -- TII is focused on efficient small models",
  ],
  knownIssues: [
    {
      description: "Falcon 3 10B trails similarly-sized Qwen3 and Gemma 4 on most benchmarks -- pick it for licensing/multilingual, not peak quality",
      source: "Artificial Analysis, Hugging Face discussions",
      date: "2026-03",
    },
    {
      description: "Falcon 3 Mamba 7B has limited llama.cpp support vs. standard transformer variants",
      source: "GitHub ggerganov/llama.cpp issues",
      date: "2026-02",
    },
  ],
  bestFor: "Developers who need a genuinely Apache-2.0 small model for on-device or edge deployment, or who need strong Arabic/multilingual support.",
  notFor: "Anyone chasing peak benchmark quality -- Qwen3, Gemma 4, Llama 3.3 all beat Falcon 3 in their respective size classes. Also not ideal for agentic or tool-use workflows.",
  verdict: "Falcon is the niche-but-viable choice in 2026. TII has carved out a sensible position: efficient sub-10B Apache-2.0 models with strong Arabic support. It's not trying to compete with DeepSeek or Qwen at the frontier, and that's fine. If you need a small permissively-licensed model for edge deployment and the multilingual mix matters, Falcon 3 is a real option. For most other use cases, Qwen3 or Gemma 4 in the same size class outperform it.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Falcon LLM official site (TII)", dateAccessed: "2026-04-13" },
    { name: "Hugging Face blog: Falcon 3", dateAccessed: "2026-04-13" },
    { name: "Hugging Face tiiuae collection", dateAccessed: "2026-04-13" },
    { name: "Artificial Analysis open-weights leaderboard", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://falconllm.tii.ae",
  status: "active",
  benchmarks: {
    modelName: "Falcon 3 10B",
    scores: [
      { name: "MMLU", score: 73.1, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 42.5, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 73.8, maxScore: 100, unit: "%" },
      { name: "MATH", score: 55.4, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  systemRequirements: [
    {
      variant: "Falcon 3 7B / 10B (dense)",
      min: "4 GB VRAM (Q4)",
      max: "16 GB VRAM FP16",
    },
    {
      variant: "Falcon 3 Mamba 7B (state-space hybrid)",
      min: "4 GB VRAM (Q4)",
      max: "16 GB VRAM FP16",
      notes: "Mamba architecture gives cheap long-context inference",
    },
  ],

  metaTitle: "Falcon 3 Review 2026: TII's Apache-2.0 Open-Weights LLM Family",
  metaDescription: "Falcon 3 review. UAE's Technology Innovation Institute open-weights LLM. Apache 2.0, efficient 7B/10B sizes, Mamba variant. Strong Arabic. Benchmarks, hardware requirements. April 2026.",
};
