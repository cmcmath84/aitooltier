import { ToolReview } from "@/lib/types";

export const minimax: ToolReview = {
  slug: "minimax",
  name: "MiniMax M2 / M2.5",
  tagline: "MiniMax's open-weights frontier -- first open model to match Claude Opus 4.6 on SWE-Bench at 10-20× lower cost",
  category: "ai-local-models",
  url: "https://www.minimax.io",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 9,
    value: 9.5,
    features: 8.5,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["MIT license on M2 and M2.5", "Weights on Hugging Face", "Commercial use permitted"],
    },
    {
      plan: "API (OpenRouter / MiniMax)",
      price: "$0.30",
      period: "per 1M input tokens",
      features: ["M2: $0.30 in / $1.20 out", "192K+ context", "Native agentic + tool-use"],
    },
    {
      plan: "Self-hosted (Hardware)",
      price: "$0",
      features: [
        "MiniMax M2 / M2.5 (230B total, ~10B active MoE) -- Min: 96 GB unified RAM Q3 (Mac M3 Ultra) | Mid: 2× A100 80GB or 1× H100 Q4 | Max: 4× A100 80GB FP8",
        "M1 (hybrid-attention reasoning predecessor) -- similar footprint",
        "Sparse MoE activates only ~10B params during inference -- fast tokens-per-second on moderate hardware",
      ],
    },
  ],

  pros: [
    "First open-weight model to hit 80.2% on SWE-Bench Verified -- matching Claude Opus 4.6",
    "~10B active params during inference (out of 230B) means fast and cheap to run",
    "MIT license with zero commercial restrictions",
    "Native agentic and tool-use training -- not bolted on",
    "Per-layer QK-Norm + full-attention blocks make long-context stable",
    "10-20× cheaper than closed frontier models at similar quality per Bytebot analysis",
  ],
  cons: [
    "Smaller Western community than Qwen/DeepSeek -- tutorials sparse",
    "Ollama support arrived late -- community relied on vLLM for months",
    "English writing tone is noticeably less polished than Claude or Mistral",
    "PRC content filters apply",
    "MiniMax as a lab is less well-known than Alibaba or DeepSeek -- some enterprise buyers hesitate",
  ],
  knownIssues: [
    {
      description: "M2 initial release required custom vLLM build -- community quants took 2-3 weeks to stabilize",
      source: "GitHub MiniMax-AI/MiniMax-M2, Hugging Face discussions",
      date: "2026-02",
    },
    {
      description: "Per-layer QK-Norm is non-standard -- some inference backends had subtle bugs at long context",
      source: "Reddit r/LocalLLaMA",
      date: "2026-03",
    },
  ],
  bestFor: "Agentic coding and tool-use workflows on a budget. Best price-to-SWE-Bench ratio of any open-weights model in 2026.",
  notFor: "Teams that prioritize polished English writing (Mistral Large 3 or Claude are better), or anyone who needs the deepest ecosystem support (Llama is still that).",
  verdict: "MiniMax M2/M2.5 is the most cost-efficient frontier-tier open model in 2026. The 80.2% SWE-Bench Verified score is a genuine breakthrough -- matching Claude Opus 4.6 on real coding tasks at a tenth of the price. The sparse 10B-active MoE runs fast on moderate hardware. The main drawback is ecosystem: MiniMax has less Western infrastructure support than Alibaba or DeepSeek. If you're building an agentic product and want maximum value per token, M2.5 is an A-tier pick.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Artificial Analysis MiniMax M2 benchmarks", dateAccessed: "2026-04-13" },
    { name: "Bytebot MiniMax M2.5 analysis", dateAccessed: "2026-04-13" },
    { name: "Hugging Face MiniMaxAI collection", dateAccessed: "2026-04-13" },
    { name: "GitHub MiniMax-AI/MiniMax-M2", dateAccessed: "2026-04-13" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.minimax.io",
  status: "active",
  benchmarks: {
    modelName: "MiniMax M2.5 (230B/10B active MoE)",
    scores: [
      { name: "MMLU-Pro", score: 82.1, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 76.8, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Verified", score: 80.2, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 91.0, maxScore: 100, unit: "%" },
      { name: "AIME 2025", score: 85.3, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  metaTitle: "MiniMax M2 / M2.5 Review 2026: 80.2% SWE-Bench Open-Weights LLM",
  metaDescription: "MiniMax M2.5 review. 230B/10B active MoE, MIT license, 80.2% SWE-Bench Verified -- matches Claude Opus 4.6 at 10-20× lower cost. Benchmarks, pricing, hardware. April 2026.",
};
