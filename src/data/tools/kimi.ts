import { ToolReview } from "@/lib/types";

export const kimi: ToolReview = {
  slug: "kimi",
  name: "Kimi K2.5 (Moonshot)",
  tagline: "Moonshot's 1T-parameter MoE open-weights flagship -- best open-source agentic coder, rivals Claude Opus 4.5",
  category: "ai-local-models",
  url: "https://www.moonshot.cn",

  scores: {
    easeOfUse: 6,
    outputQuality: 9,
    value: 8.5,
    features: 9,
    overall: 8.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["Modified MIT license -- commercial use allowed", "Weights on Hugging Face", "Fine-tuning permitted"],
    },
    {
      plan: "API (Moonshot / OpenRouter)",
      price: "$0.60",
      period: "per 1M input tokens",
      features: ["K2.5-Reasoning: $0.60 in / $3.00 out", "256K context", "Blended cost ~$1.07/M"],
    },
    {
      plan: "Self-hosted (Hardware)",
      price: "$0",
      features: [
        "Kimi K2.5 (1T total, 32B active MoE) -- Min: 256 GB unified RAM Mac Studio M3 Ultra Q2 (~3 tok/s)",
        "Mid: 512 GB RAM or 4× H100 80GB Q4_K_M",
        "Max: 8× H200 141GB FP8 or 16× H100 (production-grade)",
        "Practically a hosted-only model for most users -- self-hosting requires enterprise hardware",
      ],
    },
  ],

  pros: [
    "Frontier-tier performance -- Elo 1309 on GDPval-AA, behind only OpenAI and Anthropic flagships",
    "Beats Claude Opus 4.5 on several coding benchmarks per community testing",
    "Unified thinking + non-thinking modes in one model (no need to swap)",
    "256K context window handles large codebases for agentic coding",
    "Modified MIT license permits commercial use of weights",
    "Native tool-use and agentic planning trained in -- not bolted on",
  ],
  cons: [
    "1T parameter model is impractical to self-host without 4+ H100-class GPUs",
    "Moonshot is a smaller lab than DeepSeek/Alibaba -- less Western infrastructure support",
    "API pricing ($0.60 in / $3.00 out) is higher than DeepSeek V3.2 ($0.28 in / $0.42 out)",
    "PRC content filters apply (Tiananmen, Taiwan, etc.)",
    "Documentation is heavily Chinese-first -- English docs trail releases",
  ],
  knownIssues: [
    {
      description: "Self-hosting K2.5 at usable speed requires $30K+ in enterprise GPU hardware -- realistically this is a hosted-API model",
      source: "Reddit r/LocalLLaMA, llm-stats.com",
      date: "2026-03",
    },
    {
      description: "Early K2.5 releases had inconsistent tool-calling when quantized below Q4 -- community fixes landed March 2026",
      source: "Hugging Face discussions",
      date: "2026-03",
    },
  ],
  bestFor: "Agentic coding workflows, tool-use agents, and teams willing to pay hosted-API prices for frontier-tier quality with open-weights licensing protection.",
  notFor: "Solo developers or hobbyists who want to run models locally -- the 1T parameter size makes that impractical. Use Qwen3-Coder-Next or DeepSeek instead for self-hosting.",
  verdict: "Kimi K2.5 is the best open-weights model in the world right now for agentic coding. It legitimately rivals Claude Opus 4.5 and Gemini 3.1 Pro on practical coding tasks while being nominally 'open.' The catch is that the 1T parameter size makes it hosted-only for 99% of users. If you're picking between hosted APIs and you want maximum quality with open-weights safety, Kimi K2.5 is the S-tier pick. If you need a model that actually runs on your hardware, look at Qwen3-Coder-Next or DeepSeek V3.2 instead.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Moonshot Kimi K2.5 release", dateAccessed: "2026-04-13" },
    { name: "Artificial Analysis GDPval-AA leaderboard", dateAccessed: "2026-04-13" },
    { name: "llm-stats.com", dateAccessed: "2026-04-13" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-13" },
    { name: "Reddit r/singularity, r/LocalLLaMA", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.moonshot.cn",
  status: "active",
  benchmarks: {
    modelName: "Kimi K2.5 (1T/32B active MoE)",
    scores: [
      { name: "MMLU-Pro", score: 84.8, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 80.5, maxScore: 100, unit: "%" },
      { name: "AIME 2025", score: 91.2, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Verified", score: 78.5, maxScore: 100, unit: "%" },
      { name: "LiveCodeBench", score: 74.1, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1309,
    lastUpdated: "2026-04-13",
  },
  metaTitle: "Kimi K2.5 Review 2026: Moonshot's 1T Open-Weights Flagship Tested",
  metaDescription: "Kimi K2.5 review. 1T MoE, 32B active, 256K context, Modified MIT license. Rivals Claude Opus 4.5 on agentic coding. Benchmarks, pricing, hardware requirements. April 2026.",
};
