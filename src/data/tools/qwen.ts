import { ToolReview } from "@/lib/types";

export const qwen: ToolReview = {
  slug: "qwen",
  name: "Qwen (Alibaba)",
  tagline: "Alibaba's open-weights + API family -- Qwen3.6-27B dense (Apr 22 2026 Apache 2.0, beats the 397B MoE flagship on coding from a single consumer GPU), Qwen 3.6-Max-Preview (Apr 20 2026 closed-weights #1 on SWE-bench Pro/Terminal-Bench 2.0/SciCode), Qwen3.6-35B-A3B (Apr 16 open-weights MoE), plus Qwen 3.6-Plus API flagship",
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
    {
      plan: "API (Qwen 3.6-Max-Preview, Apr 20 2026 -- CLOSED WEIGHTS)",
      price: "TBD",
      period: "per 1M tokens",
      features: [
        "#1 on SWE-bench Pro, Terminal-Bench 2.0, SciCode, QwenClawBench, QwenWebBench",
        "256K context window (text-only at launch, no vision)",
        "OpenAI- and Anthropic-API-compatible endpoints",
        "Alibaba's FIRST flagship shipped without open weights -- proprietary only",
        "Available via Qwen Studio + Alibaba Cloud Model Studio",
      ],
    },
    {
      plan: "Self-hosted (Qwen3.6-27B dense, Apr 22 2026)",
      price: "$0",
      features: [
        "Apache 2.0 open weights -- no commercial restrictions",
        "DENSE 27B (not MoE) -- all params active, simpler to deploy than sparse-MoE flagships",
        "Multimodal: text + image + video, 262K native context (extensible to ~1M)",
        "Runs on a single consumer-tier GPU (RTX 4090 or equivalent at FP16; smaller VRAM at quant)",
        "BEATS Qwen3.5-397B-A17B MoE flagship on coding while being ~15x smaller in active params",
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
      description: "Qwen3.6-27B dropped 2026-04-22 (~48h after Max-Preview) as the new open-weights coding champion. DENSE 27B, NOT MoE -- all params active, simpler to deploy. Apache 2.0 open weights with no commercial restrictions. Multimodal: text + image + video. 262K native context (extensible to ~1M). Verified benchmarks: SWE-bench Verified 77.2%, SWE-bench Pro 53.5%, Terminal-Bench 2.0 59.3% (matches Claude Opus 4.5 exactly), MMLU-Pro 86.2%, GPQA Diamond 87.8%, AIME 2026 94.1%, MMMU-Pro 75.8%. Notably BEATS the Qwen3.5-397B-A17B MoE flagship on coding from a single consumer GPU -- this displaces the 35B-A3B as the open-weights centerpiece for most users. Quants from unsloth + mlx-community shipped same week",
      source: "qwen.ai/blog?id=qwen3.6-27b, HuggingFace Qwen/Qwen3.6-27B, implicator.ai analysis",
      date: "2026-04-22",
    },
    {
      description: "Qwen 3.6-Max-Preview launched 2026-04-20 as Alibaba's first flagship shipped WITHOUT open weights -- #1 across SWE-bench Pro, Terminal-Bench 2.0, SciCode, QwenClawBench, and QwenWebBench. 256K context, text-only (no vision at launch), APIs compatible with OpenAI + Anthropic SDKs for easy swap-in. Signals Alibaba's pivot toward closed flagships while keeping mid-size models open. If you picked Qwen for the 'best open weights' story, the best model is no longer open -- but the 3.6-27B Apache 2.0 dense released 48 hours later mostly closes that complaint for non-frontier coding workloads",
      source: "Decrypt, CNTechPost",
      date: "2026-04",
    },
    {
      description: "CRITICAL (2026-04-15): Qwen Code free OAuth tier discontinued. Alibaba throttled from 1,000 -> 100 free requests/day before fully cutting it. To keep using Qwen Code you now need an Alibaba Cloud Coding Plan (~$50/mo), BYOK via OpenRouter / Fireworks / Cerebras, or local inference on your own hardware via Ollama/vLLM. The 'free open-source AI' framing no longer applies to hosted access -- only to self-hosted deployment",
      source: "Decrypt, GitHub QwenLM/qwen-code issues #3316",
      date: "2026-04",
    },
    {
      description: "Qwen3.6-35B-A3B open-weights release on 2026-04-16 is the open-model story of April. Sparse MoE with 35B total / 3B active, vision-language multimodal, Apache 2.0, 262K native context (extensible to ~1M). Benchmarks are best-in-class for open weights: SWE-bench Verified 73.4% (vs Gemma 4-31B 52%), AIME 2026 92.7, GPQA Diamond 86.0, MMMU 81.7 (beats Claude Sonnet 4.5 at 79.6), Terminal-Bench 2.0 51.5%. Simon Willison's pelican-drawing test favored Qwen3.6-35B-A3B over Claude Opus 4.7 -- a high-signal community endorsement",
      source: "Hugging Face Qwen3.6-35B-A3B, Alibaba Cloud announcement, Simon Willison, MarkTechPost, buildfastwithai review",
      date: "2026-04",
    },
    {
      description: "Qwen3-Max and now Qwen 3.6-Max-Preview are both API-only -- the pattern suggests Alibaba has quietly adopted closed-weights for flagships while keeping sub-flagship sizes Apache 2.0. Confusing for users expecting Alibaba's best model to be self-hostable",
      source: "Reddit r/LocalLLaMA, Decrypt",
      date: "2026-04",
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

  lastReviewedDate: "2026-04-27",
  dataSources: [
    { name: "Qwen blog: Qwen3.6-27B dense Apache 2.0 (2026-04-22)", url: "https://qwen.ai/blog?id=qwen3.6-27b", dateAccessed: "2026-04-27" },
    { name: "HuggingFace Qwen/Qwen3.6-27B", url: "https://huggingface.co/Qwen/Qwen3.6-27B", dateAccessed: "2026-04-27" },
    { name: "Implicator.ai: Qwen3.6-27B beats 397B MoE on coding", url: "https://www.implicator.ai/alibaba-ships-qwen3-6-27b-an-open-weight-coding-model-that-beats-its-397b-moe/", dateAccessed: "2026-04-27" },
    { name: "Decrypt: Qwen 3.6-Max-Preview launch", url: "https://decrypt.co/364948/alibaba-qwen-3-6-max-preview-most-powerful-model", dateAccessed: "2026-04-21" },
    { name: "CNTechPost: Qwen3.6-Max-Preview release notes", url: "https://cntechpost.com/2026/04/20/alibaba-releases-qwen3-6-max-preview-stronger-instruction-following-capabilities/", dateAccessed: "2026-04-21" },
    { name: "Decrypt: Qwen Code free tier shutdown", url: "https://decrypt.co/364501/alibaba-shuts-down-free-tier-qwen-code", dateAccessed: "2026-04-21" },
    { name: "Qwen blog: Qwen 3.6-Plus towards real-world agents", url: "https://qwen.ai/blog?id=qwen3.6", dateAccessed: "2026-04-17" },
    { name: "Alibaba Cloud: Qwen 3.6-Plus for agentic AI", url: "https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-6-plus-to-accelerate-agentic-ai-deployment-for-enterprises-and-alibaba%E2%80%99s-ai-applications_603000", dateAccessed: "2026-04-17" },
    { name: "Hugging Face Qwen collection", dateAccessed: "2026-04-17" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-17" },
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
    {
      variant: "Qwen3.6-35B-A3B (sparse MoE, vision-language, Apr 16 2026)",
      min: "8 GB VRAM Q4 (RTX 3060 tier; ~3B active params keep inference cheap)",
      max: "1x A100 80 GB FP16 or 2x RTX 4090 for 262K+ context",
      notes: "Apache 2.0 open weights. SWE-bench 73.4% -- current best for open-weights coding.",
    },
  ],

  personality: {
    oneLiner: "The multilingual Alibaba all-rounder",
    tone: "Helpful, verbose, and notably strong in Chinese and other non-English languages. Qwen is chattier than Mistral or DeepSeek and tends toward structured, multi-section replies.",
    quirks: "Best-in-class at Chinese -- occasionally switches to Mandarin mid-response for technical or cultural topics even when prompted in English. Political refusal patterns mirror other Chinese models on China-specific topics.",
  },
  metaTitle: "Qwen Review 2026: Qwen3.6-27B Dense Apache 2.0 + Max-Preview Closed",
  metaDescription: "Qwen review. Qwen3.6-27B (Apr 22 2026 dense Apache 2.0, beats 397B MoE on coding, single consumer GPU) + Qwen 3.6-Max-Preview (Apr 20 closed-weights #1 SWE-bench Pro) + Qwen 3.6-Plus API. Free tier killed 4/15.",
};
