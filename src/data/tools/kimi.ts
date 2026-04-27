import { ToolReview } from "@/lib/types";

export const kimi: ToolReview = {
  slug: "kimi",
  name: "Kimi K2.6 (Moonshot)",
  tagline: "Moonshot's 1T-parameter MoE open-weights flagship -- Kimi K2.6 (GA 2026-04-20) is #1 open-weights on Artificial Analysis Intelligence Index v4.0 (score 54, ranked #4 overall). Native video input, 256K context, Modified MIT license",
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
      plan: "API (Moonshot direct, K2.6)",
      price: "$0.60",
      period: "per 1M input tokens",
      features: ["K2.6: $0.60 in / $2.50 out (Moonshot direct)", "256K context", "Native video input (mp4/mov/avi/webm)"],
    },
    {
      plan: "API (OpenRouter, K2.6 blended)",
      price: "~$0.95",
      period: "per 1M input tokens",
      features: ["K2.6: ~$0.95 in / ~$4.00 out via OpenRouter", "Useful when you don't want a Moonshot account directly"],
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
      description: "Kimi K2.6 (GA 2026-04-20) supersedes K2.5 -- 1T total / 32B active MoE, 256K context, adds native video input (mp4/mov/avi/webm). Scores 54 on Artificial Analysis Intelligence Index v4.0, ranked #1 open-weights and #4 overall (three points behind Claude Opus 4.7 / Gemini 3.1 Pro / OpenAI flagships at 57). SWE-Bench Pro 58.6%. Modified MIT license unchanged. Moonshot direct API: $0.60 in / $2.50 out per 1M tokens. OpenRouter blended: ~$0.95 in / $4.00 out. If you were on K2.5, the upgrade is non-breaking on the API side -- Moonshot routes the K2.6 model under the same endpoint family",
      source: "Moonshot Kimi blog (kimi.com/blog/kimi-k2-6), HuggingFace moonshotai/Kimi-K2.6, Artificial Analysis, OpenRouter, SiliconANGLE",
      date: "2026-04-20",
    },
    {
      description: "Self-hosting K2.5 / K2.6 at usable speed requires $30K+ in enterprise GPU hardware (8x H200 FP8 or 16x H100 production-grade) -- realistically this is a hosted-API model. Mac Studio M3 Ultra 256 GB unified RAM at Q2 quantization runs the model but at ~3 tok/s",
      source: "Reddit r/LocalLLaMA, llm-stats.com",
      date: "2026-03",
    },
    {
      description: "Early K2.5 releases had inconsistent tool-calling when quantized below Q4 -- community fixes landed March 2026; K2.6 inherits the same tool-use stack so quant guidance carries forward",
      source: "Hugging Face discussions",
      date: "2026-03",
    },
  ],
  bestFor: "Agentic coding workflows, tool-use agents, and teams willing to pay hosted-API prices for frontier-tier quality with open-weights licensing protection.",
  notFor: "Solo developers or hobbyists who want to run models locally -- the 1T parameter size makes that impractical. Use Qwen3-Coder-Next or DeepSeek instead for self-hosting.",
  verdict: "Kimi K2.5 is the best open-weights model in the world right now for agentic coding. It legitimately rivals Claude Opus 4.5 and Gemini 3.1 Pro on practical coding tasks while being nominally 'open.' The catch is that the 1T parameter size makes it hosted-only for 99% of users. If you're picking between hosted APIs and you want maximum quality with open-weights safety, Kimi K2.5 is the S-tier pick. If you need a model that actually runs on your hardware, look at Qwen3-Coder-Next or DeepSeek V3.2 instead.",

  lastReviewedDate: "2026-04-27",
  dataSources: [
    { name: "Moonshot Kimi K2.6 blog (GA 2026-04-20)", url: "https://www.kimi.com/blog/kimi-k2-6", dateAccessed: "2026-04-27" },
    { name: "HuggingFace moonshotai/Kimi-K2.6", url: "https://huggingface.co/moonshotai/Kimi-K2.6", dateAccessed: "2026-04-27" },
    { name: "Artificial Analysis: Kimi K2.6 leading open weights", url: "https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model", dateAccessed: "2026-04-27" },
    { name: "SiliconANGLE: Kimi K2.6 release", url: "https://siliconangle.com/2026/04/20/moonshot-ai-releases-kimi-k2-6-model-1t-parameters-attention-optimizations/", dateAccessed: "2026-04-27" },
    { name: "OpenRouter Kimi K2.6 pricing", url: "https://openrouter.ai/moonshotai/kimi-k2.6", dateAccessed: "2026-04-27" },
    { name: "llm-stats.com", dateAccessed: "2026-04-13" },
    { name: "Reddit r/singularity, r/LocalLLaMA", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.moonshot.cn",
  status: "active",
  benchmarks: {
    modelName: "Kimi K2.6 (1T/32B active MoE) -- Artificial Analysis Intelligence Index v4.0 score 54 (#1 open-weights, #4 overall as of 2026-04-27). MMLU/GPQA/AIME shown below are K2.5-baseline numbers retained until K2.6-specific third-party runs publish",
    scores: [
      { name: "SWE-Bench Pro", score: 58.6, maxScore: 100, unit: "%" },
      { name: "MMLU-Pro (K2.5 baseline)", score: 84.8, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond (K2.5 baseline)", score: 80.5, maxScore: 100, unit: "%" },
      { name: "AIME 2025 (K2.5 baseline)", score: 91.2, maxScore: 100, unit: "%" },
      { name: "LiveCodeBench (K2.5 baseline)", score: 74.1, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-27",
  },
  systemRequirements: [
    {
      variant: "Kimi K2.5 (1T total, 32B active MoE)",
      min: "256 GB unified RAM Mac Studio M3 Ultra (Q2, ~3 tok/s)",
      max: "8× H200 141 GB FP8 or 16× H100 (production-grade)",
      notes: "Practically a hosted-only model for most users -- self-hosting requires enterprise hardware",
    },
  ],

  personality: {
    oneLiner: "The long-context note-taker",
    tone: "Careful and document-focused. Kimi K2.5 shines when you dump a long document in -- replies read as summary-and-citation rather than open chat, leaning on the source material rather than the model's opinions.",
    quirks: "Context handling is the whole pitch. Without a document to anchor to, replies feel plainer than Qwen or DeepSeek. Native Chinese quality is very strong; English is decent but not class-leading.",
  },
  metaTitle: "Kimi K2.6 Review 2026: #1 Open-Weights on Artificial Analysis Index",
  metaDescription: "Kimi K2.6 review. GA April 20 2026. 1T MoE / 32B active, 256K context, native video input, Modified MIT. AA Index 54 (#1 open-weights, #4 overall). $0.60 / $2.50 per 1M tokens.",
};
