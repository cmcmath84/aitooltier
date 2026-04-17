import { ToolReview } from "@/lib/types";

export const nemotron: ToolReview = {
  slug: "nemotron",
  name: "Nemotron (Nvidia)",
  tagline: "Nvidia's open-weights family -- hybrid Mamba-Transformer MoE architecture, optimized for efficient reasoning on Nvidia hardware",
  category: "ai-local-models",
  url: "https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 8,
    value: 8,
    features: 8.5,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["NVIDIA Open Model License", "Commercial use permitted", "Weights on Hugging Face and NGC"],
    },
    {
      plan: "API (build.nvidia.com)",
      price: "varies",
      period: "per 1M tokens",
      features: ["Free tier for experimentation", "NIM microservices for production", "Pricing via Nvidia Cloud partners"],
    },
  ],

  pros: [
    "Hybrid Mamba-Transformer architecture dramatically reduces memory per token at long context",
    "Nemotron 3 Super activates only 3.6B params -- runs on 8 GB VRAM with top-tier reasoning quality",
    "Nvidia-optimized inference: first-class TensorRT-LLM, vLLM, and NIM deployment",
    "Llama-Nemotron 70B scores MMLU 88.4% -- within a point of GPT-4o on a model you can run locally",
    "Permissive Nvidia Open Model License allows commercial deployment",
  ],
  cons: [
    "Mamba inference ecosystem is still catching up -- Ollama and llama.cpp support is partial",
    "Not the absolute frontier on benchmarks -- DeepSeek, Qwen, Kimi outscore on most leaderboards",
    "Smaller community than Llama/Qwen -- fewer fine-tunes available",
    "Release cadence is slow compared to Chinese labs",
  ],
  knownIssues: [
    {
      description: "NEMOTRON COALITION: Announced at GTC March 2026, Nvidia leads an open-frontier coalition with Black Forest Labs, Cursor, LangChain, Mistral, Perplexity, Reflection AI, Sarvam, and Thinking Machines. Nemotron 4 (the first coalition model) has no public release date yet. Nemotron 3 Super/Ultra expected first half of 2026; Nemotron 3 Nano already shipped",
      source: "Nvidia press release, Nemotron Coalition announcement",
      date: "2026-03",
    },
    {
      description: "Mamba-hybrid layers require custom CUDA kernels -- non-Nvidia hardware (Apple Silicon, AMD ROCm) has limited support",
      source: "Hugging Face discussions, GitHub issues",
      date: "2026-02",
    },
    {
      description: "Early Nemotron 3 Super quantizations below Q4 showed degraded reasoning quality vs. dense Llama at same bit-width",
      source: "Reddit r/LocalLLaMA",
      date: "2026-03",
    },
  ],
  bestFor: "Teams running on Nvidia hardware (TensorRT-LLM, NIM) who need efficient long-context reasoning. Nemotron 3 Super is a standout for its 8 GB VRAM footprint with strong reasoning.",
  notFor: "Apple Silicon / AMD GPU users -- Mamba hybrid kernels are Nvidia-first. Also not ideal if you want maximum community support (use Llama or Qwen).",
  verdict: "Nemotron is Nvidia's bet that architecture innovation (hybrid Mamba-Transformer MoE) beats pure scale. The bet largely pays off: Nemotron 3 Super runs on a gaming GPU while posting reasoning scores that rival much larger dense models. If you're deployed on Nvidia hardware and need efficient long-context inference, Nemotron is the natural pick. If you're not on Nvidia or need absolute frontier quality, Qwen3 or DeepSeek are stronger options.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Nvidia press release: Nemotron Coalition", url: "https://nvidianews.nvidia.com/news/nvidia-launches-nemotron-coalition-of-leading-global-ai-labs-to-advance-open-frontier-models", dateAccessed: "2026-04-17" },
    { name: "Nvidia press release: Nemotron 3 family of open models", url: "https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models", dateAccessed: "2026-04-17" },
    { name: "Nvidia blog: Nemotron 3 Super agentic AI", url: "https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai/", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis Nemotron Ultra 253B", dateAccessed: "2026-04-17" },
    { name: "Hugging Face nvidia collection", dateAccessed: "2026-04-17" },
    { name: "Reddit r/LocalLLaMA Nemotron 3 discussion", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/",
  status: "active",
  benchmarks: {
    modelName: "Nemotron 3 Ultra (253B)",
    scores: [
      { name: "MMLU-Pro", score: 79.8, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 70.5, maxScore: 100, unit: "%" },
      { name: "AIME 2025", score: 84.5, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 89.6, maxScore: 100, unit: "%" },
      { name: "MMLU (Llama-Nemotron 70B)", score: 88.4, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  systemRequirements: [
    {
      variant: "Nemotron 3 Super (31.6B total, 3.6B active Mamba-MoE)",
      min: "8 GB VRAM Q4 (RTX 3070)",
      max: "1× A100 40 GB FP16",
      notes: "Mamba hybrid gives unusually low memory per token at long context",
    },
    {
      variant: "Nemotron 3 Ultra (253B reasoning)",
      min: "128 GB RAM + 24 GB GPU (Q3)",
      max: "4× H100 FP8",
    },
    {
      variant: "Llama-Nemotron 70B",
      min: "24 GB VRAM Q4 (RTX 3090/4090)",
      max: "1× H100 80 GB FP16",
    },
  ],

  personality: {
    oneLiner: "Nvidia's enterprise-tuned model",
    tone: "Polished, safe, and aimed at business use. Nemotron responses feel engineered -- consistent length, clear structure, little snark -- like it was optimized for predictability rather than personality.",
    quirks: "Heavy RLHF for workplace-friendly outputs. Great for enterprise deployment; less interesting for open-ended chat. Runs best on Nvidia stacks, which is the whole point -- you pay (or don't) for that optimization.",
  },
  metaTitle: "Nvidia Nemotron Review 2026: Hybrid Mamba-Transformer Open-Weights LLM",
  metaDescription: "Nvidia Nemotron review. Hybrid Mamba-MoE architecture, 31.6B/3.6B active Super, 253B Ultra. Efficient long-context reasoning on Nvidia hardware. Benchmarks, hardware. April 2026.",
};
