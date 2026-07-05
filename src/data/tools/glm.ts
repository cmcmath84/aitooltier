import { ToolReview } from "@/lib/types";

export const glm: ToolReview = {
  slug: "glm",
  name: "GLM / Z.ai (Zhipu AI)",
  tagline: "Zhipu AI's open-weights flagship -- GLM-5.2 (launched 2026-06-13) is a ~753B-parameter MoE with a 1M-token context and the new IndexShare sparse-attention architecture (~2.9x lower per-token FLOPs at 1M context), MIT licensed. Vendor benchmarks put SWE-Bench Pro at 62.1 (up from GLM-5.1's 58.4) and it tops the Artificial Analysis open-weights Intelligence Index; VentureBeat reports it beats GPT-5.5 on several long-horizon coding benchmarks at roughly 1/6 the cost. Drop-in for Claude Code / Cline / OpenCode. Still trained outside the Nvidia stack on Huawei Ascend silicon",
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
      plan: "API (Z.ai / OpenRouter, GLM-5.2)",
      price: "$0.60+",
      period: "per 1M input tokens",
      features: ["GLM-5.2 (launched 2026-06-13): ~753B MoE, 1M context, IndexShare architecture", "GLM-5.1 (2026-04-07): 744B MoE / 40B active, $0.60 in / $2.20 out (still available)", "GLM-4.6V (vision): tiered", "VentureBeat: ~1/6 the cost of GPT-5.5 on long-horizon coding"],
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
      description: "INDEPENDENT BENCHMARK PUBLISHED (verified 2026-07-04): Artificial Analysis now has a citable independent eval for GLM-5.2 -- **Intelligence Index = 51, ranked #1 of 93 open-weight models** (artificialanalysis.ai/models/glm-5-2), corroborating the vendor's 'tops the open-weights index' claim with a third-party number. Keep the Zhipu-reported figures (SWE-Bench Pro 62.1%, Terminal-Bench 2.1 81.0%) labeled as vendor benchmarks -- the AA-51 is the independently-measured one to lead with.",
      source: "Artificial Analysis (artificialanalysis.ai/models/glm-5-2), Crypto Briefing",
      date: "2026-07-04",
    },
    {
      description: "MODEL LAUNCH (2026-06-13): **GLM-5.2** -- Z.ai's new open-weights flagship 'for long-horizon tasks', a substantial leap over GLM-5.1. ~753B-parameter MoE, MIT licensed, with a 1M-token context that sustains long-horizon work and the new **IndexShare** sparse-attention architecture that cuts per-token FLOPs ~2.9x at 1M-token context. Vendor-published benchmarks (third-party verification still settling): SWE-Bench Pro 62.1, GPQA-Diamond ~91.2, AIME 2026 ~99.2, HLE reasoning ~40.5. It tops the Artificial Analysis open-weights Intelligence Index, and VentureBeat reports it beats GPT-5.5 on several long-horizon coding benchmarks at roughly 1/6 the cost. MIT weights shipped to Hugging Face (zai-org/GLM-5.2) and ModelScope; works as a drop-in coding backend for Claude Code, Cline, and OpenCode. Note: exact active-parameter count for 5.2 was not published in the model card -- treat the MoE-active figure as unconfirmed pending a vendor spec sheet.",
      source: "Hugging Face zai-org/GLM-5.2 model card, VentureBeat (z-ais-open-weights-glm-5-2-beats-gpt-5-5...), z.ai/blog/glm-5.2",
      date: "2026-06-13",
    },
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
  verdict: "With GLM-5.2 (June 13, 2026), Z.ai has the strongest MIT-licensed open-weights model of 2026 -- a ~753B MoE with a 1M context, SWE-Bench Pro 62.1, and the top spot on Artificial Analysis's open-weights index, which VentureBeat says edges GPT-5.5 on long-horizon coding at a fraction of the cost. The true MIT license puts it ahead of Llama 4 on licensing, and the agentic tool-use performance beats most of its open-weight peers. GLM-4.6V is legitimately the best open multimodal model on several benchmarks. The weakness is purely ecosystem: fewer Western fine-tunes and less Ollama coverage. If you're building an agent or multimodal product and want clean licensing, GLM is the pick.",

  lastReviewedDate: "2026-07-04",
  dataSources: [
    { name: "Artificial Analysis: GLM-5.2 (Intelligence Index 51, #1 open-weight)", url: "https://artificialanalysis.ai/models/glm-5-2", dateAccessed: "2026-07-04" },
    { name: "Hugging Face: zai-org/GLM-5.2 model card (specs, license, benchmarks)", url: "https://huggingface.co/zai-org/GLM-5.2", dateAccessed: "2026-06-18" },
    { name: "VentureBeat: Z.ai's open-weights GLM-5.2 beats GPT-5.5 on long-horizon coding for ~1/6 the cost", url: "https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost", dateAccessed: "2026-06-18" },
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
    modelName: "GLM-5.2 (~753B MoE, launched 2026-06-13) -- vendor-published; third-party verification still settling",
    scores: [
      { name: "SWE-Bench Pro", score: 62.1, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 91.2, maxScore: 100, unit: "%" },
      { name: "AIME 2026", score: 99.2, maxScore: 100, unit: "%" },
      { name: "Humanity's Last Exam (reasoning)", score: 40.5, maxScore: 100, unit: "%" },
      { name: "MMLU-Pro", score: 81.2, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 89.1, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-06-18",
  },
  systemRequirements: [
    {
      variant: "GLM-5.2 (~753B MoE, launched 2026-06-13, 1M context)",
      min: "256 GB RAM + 48 GB GPU (Q2 offload; community quants landing post-launch)",
      max: "8x H100 FP8 or 4x H200",
      notes: "MIT license. IndexShare sparse attention lowers per-token FLOPs ~2.9x at 1M context. Active-parameter count not published in the model card",
    },
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
  metaTitle: "GLM-5.2 Review 2026: Zhipu AI's ~753B MoE, 1M Context, MIT Licensed",
  metaDescription: "GLM-5.2 review (launched Jun 13 2026). ~753B MoE, 1M-token context, IndexShare architecture, MIT license. SWE-Bench Pro 62.1; VentureBeat says it beats GPT-5.5 on long-horizon coding at ~1/6 the cost.",
};
