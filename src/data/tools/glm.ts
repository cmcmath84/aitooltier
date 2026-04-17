import { ToolReview } from "@/lib/types";

export const glm: ToolReview = {
  slug: "glm",
  name: "GLM / Z.ai (Zhipu AI)",
  tagline: "Zhipu AI's open-weights family -- GLM-5.1 (launched 2026-04-07) is 744B MoE / 40B active, topped SWE-Bench Pro at 58.4 (beating GPT-5.4 and Claude Opus 4.6), MIT licensed, 200K context. Trained entirely on 100K Huawei Ascend 910B chips -- first frontier model with zero Nvidia in the training stack",
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
      plan: "API (Z.ai / OpenRouter, GLM-5.1)",
      price: "$0.60",
      period: "per 1M input tokens",
      features: ["GLM-5.1 (launched 2026-04-07): 744B MoE / 40B active, $0.60 in / $2.20 out", "GLM-4.6V (vision): tiered", "200K context"],
    },
  ],

  pros: [
    "GLM-5.1 (2026-04-07) topped SWE-Bench Pro at 58.4 -- beating GPT-5.4, Claude Opus 4.6, and every other open-weight model on that benchmark. The result is externally verified and is the strongest agentic-coding signal from any Chinese open-weight model in 2026",
    "First frontier model trained entirely on 100,000 Huawei Ascend 910B chips with zero Nvidia in the training stack -- a genuine proof point that non-Nvidia training pipelines can reach frontier quality, with big implications for US-China compute strategy",
    "True MIT license -- one of the few frontier-tier open-weights models with zero commercial restrictions",
    "GLM-5.1 is SOTA among open models for agentic tool-use and function calling; GLM-4.6V is #1 open-source on MMBench, MathVista, OCRBench among multimodal models",
    "200K context window handles long documents reliably. Strong Chinese + English performance (unlike DeepSeek which is English-biased)",
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

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Winbuzzer: Z.ai releases GLM-5.1 754B tops SWE-Bench Pro", url: "https://winbuzzer.com/2026/04/09/z-ai-releases-glm-5-1-754b-model-tops-swe-bench-pro-xcxwbn/", dateAccessed: "2026-04-17" },
    { name: "TestingCatalog: Zhipu AI launches GLM-5.1 open-source model for coding", url: "https://www.testingcatalog.com/zhipu-ai-launches-open-source-glm-5-1-model-for-coding-tasks/", dateAccessed: "2026-04-17" },
    { name: "Z.ai blog: GLM-4.6 and GLM-4.6V", url: "https://z.ai", dateAccessed: "2026-04-17" },
    { name: "Hugging Face THUDM collection", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis open-weights leaderboard", dateAccessed: "2026-04-17" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://z.ai",
  status: "active",
  benchmarks: {
    modelName: "GLM-5.1 (744B MoE / 40B active)",
    scores: [
      { name: "SWE-Bench Pro", score: 58.4, maxScore: 100, unit: "%" },
      { name: "MMLU-Pro", score: 81.2, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 74.5, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 89.1, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Verified", score: 64.2, maxScore: 100, unit: "%" },
      { name: "BFCL (function calling)", score: 88.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-17",
  },
  systemRequirements: [
    {
      variant: "GLM-5.1 (744B MoE / 40B active, launched 2026-04-07)",
      min: "256 GB RAM + 48 GB GPU (Q2 offload, production builds still landing)",
      max: "8× H100 FP8 or 4× H200",
      notes: "MIT license. Trained entirely on Huawei Ascend 910B, not Nvidia",
    },
    {
      variant: "GLM-4.6 (355B MoE, legacy)",
      min: "128 GB RAM + 24 GB GPU (Q3 offload)",
      max: "4× H100 FP8",
      notes: "MIT license -- zero commercial restrictions",
    },
    {
      variant: "GLM-4.6V (multimodal)",
      min: "128 GB RAM + 28 GB GPU (Q3 + vision tower)",
      max: "4× H100 FP8",
      notes: "Vision tower adds ~4 GB on top of base footprint",
    },
    {
      variant: "GLM-4-9B (small)",
      min: "6 GB VRAM (Q4)",
      max: "24 GB VRAM FP16",
    },
  ],

  personality: {
    oneLiner: "The Z.ai research model",
    tone: "Academic and structured. GLM-4.6's instruction-tuned chat tends toward outlined, bullet-heavy responses and leans on established phrasing rather than casual voice.",
    quirks: "Strong on multilingual and tool use, weaker at playful conversation. Smaller community fine-tuning ecosystem than Llama or Qwen, so fewer 'flavored' checkpoints to pick from -- most deployments run the base instruction-tune.",
  },
  metaTitle: "GLM-5.1 Review 2026: Zhipu AI's 744B MoE Tops SWE-Bench Pro, MIT Licensed",
  metaDescription: "GLM-5.1 review (launched Apr 7 2026). 744B MoE / 40B active, MIT license, trained on 100K Huawei Ascend chips. Topped SWE-Bench Pro at 58.4. 200K context.",
};
