import { ToolReview } from "@/lib/types";

export const qwen: ToolReview = {
  slug: "qwen",
  name: "Qwen (Alibaba)",
  tagline: "Alibaba's open-weights + API family -- Qwen 3.6-Plus (Mar 30 2026, 1M context + always-on CoT + agentic tool-use), Qwen3.5 Small (2B runs on iPhone, 9B matches 120B-class models), plus Qwen3.5-Omni native multimodal. Apache 2.0 on the open sizes",
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
      plan: "API (Qwen 3.6-Plus flagship, Mar 30 2026)",
      price: "$0.90",
      period: "per 1M input tokens",
      features: [
        "Native 1M context window",
        "Always-on chain-of-thought reasoning",
        "Agentic tool-use baked in (matches Claude Opus 4.5 on SWE-bench per Alibaba Cloud)",
        "API-only (weights not released)",
      ],
    },
  ],

  pros: [
    "Qwen 3.6-Plus (launched Mar 30 2026) is Alibaba's answer to Claude Opus 4.5 on agentic coding -- native 1M context, always-on CoT reasoning, and tool-use baked into the base model. Matches Claude on SWE-bench per Alibaba Cloud's published benchmarks",
    "Qwen3.5 Small (0.8B / 2B / 4B / 9B) is the most capable sub-10B open-weight family in 2026 -- the 2B runs on iPhone in airplane mode, the 9B matches 120B-class models on reasoning benchmarks. Apache 2.0 on all of it",
    "Qwen3.5-Omni (Mar 30 2026) is the first native multimodal open-weight model with realtime text/audio/video inputs and outputs in one unified model -- displaces needing 3 separate models for voice + vision + text",
    "Full modality lineup Apache 2.0: text (Qwen3, 3.5), vision (Qwen3-VL), coder (Qwen3-Coder-Next), reasoning (Qwen3-Thinking), omni-multimodal (Qwen3.5-Omni)",
    "Qwen3-Coder-Next 80B-A3B runs on 8 GB VRAM and still posts top-tier coding benchmarks (sparse MoE activates only ~3B params)",
    "Massive ecosystem: Ollama, llama.cpp, vLLM, LM Studio, Hugging Face all ship first-class Qwen quants within days of release",
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

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Qwen blog: Qwen 3.6-Plus towards real-world agents", url: "https://qwen.ai/blog?id=qwen3.6", dateAccessed: "2026-04-17" },
    { name: "Alibaba Cloud: Qwen 3.6-Plus for agentic AI", url: "https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-6-plus-to-accelerate-agentic-ai-deployment-for-enterprises-and-alibaba%E2%80%99s-ai-applications_603000", dateAccessed: "2026-04-17" },
    { name: "Marktechpost: Qwen3.5-Omni native multimodal", url: "https://www.marktechpost.com/2026/03/30/alibaba-qwen-team-releases-qwen3-5-omni-a-native-multimodal-model-for-text-audio-video-and-realtime-interaction/", dateAccessed: "2026-04-17" },
    { name: "Hugging Face Qwen collection", dateAccessed: "2026-04-17" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis", dateAccessed: "2026-04-17" },
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

  personality: {
    oneLiner: "The multilingual Alibaba all-rounder",
    tone: "Helpful, verbose, and notably strong in Chinese and other non-English languages. Qwen is chattier than Mistral or DeepSeek and tends toward structured, multi-section replies.",
    quirks: "Best-in-class at Chinese -- occasionally switches to Mandarin mid-response for technical or cultural topics even when prompted in English. Political refusal patterns mirror other Chinese models on China-specific topics.",
  },
  metaTitle: "Qwen Review 2026: Qwen 3.6-Plus, Qwen3.5-Omni, Apache 2.0 Open Weights",
  metaDescription: "Qwen review. Qwen 3.6-Plus (1M context + always-on CoT + agentic), Qwen3.5-Omni (native multimodal), Qwen3.5 Small (2B on iPhone, 9B matches 120B). Apache 2.0. April 2026.",
};
