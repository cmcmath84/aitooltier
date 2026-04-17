import { ToolReview } from "@/lib/types";

export const stepfun: ToolReview = {
  slug: "stepfun",
  name: "StepFun Step 3.5 Flash",
  tagline: "StepFun's (China) agent-focused open-weight model -- Step 3.5 Flash launched 2026-02-01. 196B sparse MoE, ~11B active. Benchmarks slightly ahead of DeepSeek V3.2 at over 3x smaller total size. Step 3 (321B / 38B active, Apache 2.0) and Step3-VL-10B multimodal also in the family",
  category: "ai-local-models",
  url: "https://stepfun.ai/research/en/step3",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Apache 2.0)",
      price: "$0",
      features: [
        "Apache 2.0 license on Step 3 + Step3-VL-10B",
        "Weights on Hugging Face (stepfun-ai/step3)",
        "Agent-focused tuning -- tool use, planning, multi-step reasoning",
      ],
    },
    {
      plan: "API (StepFun / OpenRouter)",
      price: "Usage-based",
      period: "per 1M tokens",
      features: [
        "Available on OpenRouter and select hosted providers",
        "StepFun direct API for enterprise customers",
        "Pricing in line with other mid-tier Chinese open-weight models",
      ],
    },
  ],

  pros: [
    "Step 3.5 Flash at 196B total / 11B active beats DeepSeek V3.2 on several mainstream benchmarks at 3x smaller total parameter count -- an efficient architecture result that suggests StepFun's MoE routing is unusually well-tuned for agentic workloads",
    "Agent-focused tuning explicitly -- tool use, function calling, and multi-step planning are prioritized in training objectives, not just general chat. For teams building agent systems with Chinese open-weight models, Step 3.5 Flash is a stronger starting point than general-purpose DeepSeek or Qwen base models",
    "Fills an important gap in the site's Chinese open-weight roster (already have DeepSeek, Qwen, GLM, Kimi, MiniMax -- StepFun was the notable absence). StepFun has real traction in the China market and growing Western mindshare through OpenRouter",
    "Step3-VL-10B multimodal variant provides a small-footprint vision option in the same family -- 10B size is realistic for consumer GPUs and the vision tower is competitive with Qwen3-VL-10B on standard benchmarks",
  ],
  cons: [
    "Smaller Western community than DeepSeek or Qwen -- fewer tutorials, quants, and third-party fine-tunes. Production adoption outside China is still early, which means less Stack Overflow coverage when you hit edge cases",
    "PRC content filters apply -- same category of refusals on politically sensitive topics as DeepSeek, Qwen, GLM. Not a dealbreaker for most commercial work but worth flagging",
    "Step 3.5 Flash's benchmark wins are strongest on Chinese-heavy evaluations and lighter on purely-English benchmarks versus comparably-sized Western models. English writing quality trails Claude / Mistral / Llama meaningfully",
    "Release cadence is fast (Step 3 → Step 3.5 in months) but model naming / versioning is confusing -- expect churn in which specific variant is the 'current best' through Q2 2026",
  ],
  knownIssues: [
    {
      description: "Step 3.5 Flash was released 2026-02-01 with initial quantization issues for Q3 and below -- community Q5 quants are the practical deployment target as of April 2026. Full FP16 weights require significant multi-GPU setup (196B total params even with 11B active)",
      source: "Hugging Face discussions, Reddit r/LocalLLaMA",
      date: "2026-02",
    },
    {
      description: "Refuses discussion of Tiananmen, Taiwan sovereignty, Xi Jinping, and other politically sensitive topics per PRC regulations -- same content filters as other Chinese open-weight models",
      source: "Hugging Face discussions, user reports",
      date: "2026-02",
    },
  ],
  bestFor: "Teams building agent systems on Chinese open-weight foundations who want something other than DeepSeek or Qwen, especially if agentic tool-use is the primary workload. Also good for Chinese-market products where StepFun's domestic tuning advantages matter. And for anyone looking to add diversity to their open-weight evaluation matrix beyond the top-3 Chinese labs.",
  notFor: "English-first creative writing, non-technical users, or workflows that touch politically sensitive topics (PRC content filters apply). Also not the right pick if you need the absolute best Western-community ecosystem -- Llama, Qwen, or DeepSeek will have more third-party tooling.",
  verdict: "StepFun Step 3.5 Flash (February 2026) is the notable Chinese open-weight release that doesn't come from the top-3 labs (DeepSeek, Alibaba/Qwen, Zhipu/GLM). The agent-focused tuning and MoE efficiency (196B total / 11B active beats DeepSeek V3.2 at 3x larger) give it a real niche for teams building tool-use agents on open weights. Western community adoption is still early but StepFun is growing OpenRouter presence and the Step 3.5 Flash release is a credible first step into broader ecosystem relevance. Worth adding to any Chinese-open-weight shortlist alongside DeepSeek and Qwen.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "StepFun research: Step 3", url: "https://stepfun.ai/research/en/step3", dateAccessed: "2026-04-17" },
    { name: "Hugging Face: stepfun-ai/step3", url: "https://huggingface.co/stepfun-ai/step3", dateAccessed: "2026-04-17" },
    { name: "aibase news: Step 3.5 Flash", url: "https://news.aibase.com/news/25147", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://stepfun.ai/research/en/step3",
  status: "active",
  systemRequirements: [
    {
      variant: "Step 3.5 Flash (196B total / 11B active MoE)",
      min: "64 GB RAM + 16 GB GPU (Q3 offload)",
      max: "4× H100 FP8",
      notes: "Agent-focused tuning; MoE routing activates ~11B params per token",
    },
    {
      variant: "Step 3 (321B total / 38B active, Apache 2.0)",
      min: "128 GB RAM + 24 GB GPU (Q3)",
      max: "4× H100 FP8",
    },
    {
      variant: "Step3-VL-10B (multimodal)",
      min: "12 GB VRAM Q4 (RTX 3060 / 4070)",
      max: "1× A100 40 GB FP16",
    },
  ],
  metaTitle: "StepFun Step 3.5 Flash Review 2026: Agent-Focused Chinese Open-Weight LLM",
  metaDescription: "StepFun Step 3.5 Flash review (Feb 2026). 196B MoE / 11B active, agent-tuned. Beats DeepSeek V3.2 at 3x smaller size. Apache 2.0. Step3-VL-10B multimodal variant included.",
};
