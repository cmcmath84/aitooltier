import { ToolReview } from "@/lib/types";

export const granite: ToolReview = {
  slug: "granite",
  name: "IBM Granite 4.2",
  tagline: "IBM's enterprise-focused open-weight family. Granite 4.2 (2026-08-25) is IBM's first dense reasoning family: 3B, 8B and 30B with thinking, non-thinking and low-effort modes, native tool calling, 128K native context extendable to 512K, Apache 2.0. Granite 4.0 keeps the hybrid Mamba-2 models, including Nano 350M for CPU. IBM's Granite AI management system holds ISO 42001 certification",
  category: "ai-local-models",
  url: "https://www.ibm.com/granite",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 9.5,
    features: 8.5,
    overall: 8.2,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Apache 2.0)",
      price: "$0",
      features: [
        "Apache 2.0 license, unrestricted commercial use",
        "Weights on Hugging Face, Ollama and LM Studio; hosted on watsonx.ai, OpenRouter and Replicate",
        "Granite 4.2 dense reasoning: 3B, 8B, 30B (GGUF, FP8, MXFP4, NVFP4 and MLX builds published)",
        "Granite 4.0 hybrid Mamba-2: Nano 350M / 1.5B, 3B, 3B Vision, 7B, 32B",
        "First open model family with ISO 42001 AI management system certification",
      ],
    },
    {
      plan: "watsonx.ai (IBM-hosted)",
      price: "Usage-based",
      period: "per 1M tokens",
      features: [
        "Enterprise-grade SLAs, data residency",
        "ISO 42001 + SOC 2 + HIPAA compliance",
        "Watsonx.governance integration (model cards, lineage)",
        "Priced via IBM enterprise contracts",
      ],
    },
  ],

  pros: [
    "Granite 4.2 adds reasoning across the family: every model has thinking, non-thinking and low-effort modes plus native tool calling, and the 8B and 30B went through agentic RL in sandboxed environments. IBM reports SWE-Bench Verified 57.00 and AIME25 89.17 for the 30B (vendor-reported)",
    "Granite 4.0's hybrid Mamba-2 + transformer architecture delivers 70-80% memory reduction versus pure transformer at the same quality tier -- the practical result is that Granite 4.0 3B fits inside memory budgets that older 7B transformers needed, and Granite 32B fits where 70B would have",
    "Granite 4.0 Nano (350M and 1.5B) is genuinely runnable on CPU with 8-16GB RAM -- no GPU required. One of the few open-weight options that realistically runs inside a browser via WebGPU or on a laptop without heat issues",
    "First open model family with ISO 42001 AI management system certification -- matters significantly for regulated industries (healthcare, finance, government) where an audit trail on AI governance is a procurement requirement",
    "Granite 4.0 3B Vision (2026-04-01) adds multimodality to the lineup at a size where consumer GPUs can actually run it. Apache 2.0 on the vision variant too",
  ],
  cons: [
    "Granite does not top absolute-quality open-weight benchmarks -- DeepSeek V3.2, Qwen 3.6, GLM-5.1, and Llama 4 all outscore it at the flagship tier. Granite competes on efficiency / governance / enterprise-fit, not on raw-model leaderboard position",
    "Granite 4.0's Mamba-2 hybrid layers need first-party runtime support -- Ollama and llama.cpp support is improving but has been behind pure-transformer models. Check runtime compatibility before committing to Granite 4.0 on exotic hardware. Granite 4.2 is a standard dense transformer, so this caveat does not apply to it",
    "Smaller community than Llama / Qwen / DeepSeek -- fewer third-party fine-tunes, fewer Reddit help threads, less Stack Overflow coverage. IBM watsonx is the curated-docs route for teams that need that",
    "IBM brand is polarizing in open-source -- some developers are enthusiastic about having a US enterprise incumbent in the open-weight game, others assume enterprise = stodgy and skip it entirely. Evaluate the models, not the logo",
  ],
  knownIssues: [
    {
      description: "VERSION BUMP: Granite 4.2 released 2026-08-25 as IBM's first family of dense, decoder-only reasoning models (3B, 8B, 30B), post-trained from Granite 4.1 base models, Apache 2.0. Context is 128K native with long-context extension to 512K. The hybrid Mamba-2 architecture described on this page applies to Granite 4.0 only; Granite 4.1 (2026-04-29) and Granite 4.2 are dense transformers",
      source: "Hugging Face: Granite 4.2 blog and granite-4.2-8b model card; ibm.com/granite",
      date: "2026-08-25",
    },
    {
      description: "Granite 4.0 3B Vision released 2026-04-01 -- community tool support (llama.cpp vision tower, Ollama vision variant) is still catching up in the first 2-3 weeks post-launch. Watsonx.ai has first-class vision support out of the box",
      source: "IBM announcement, Hugging Face discussions",
      date: "2026-04",
    },
    {
      description: "Granite Nano 350M is a capability floor, not a ceiling -- it handles simple classification and short extraction well but struggles on multi-step reasoning. Use the 3B or larger for anything agentic",
      source: "IBM model cards, VentureBeat coverage",
      date: "2025-12",
    },
  ],
  bestFor: "Regulated-industry enterprises (healthcare, finance, government) who need Apache 2.0 open-weight models with ISO 42001 certification. Also ideal for edge deployments where Granite Nano (350M / 1.5B) is one of the few open models that runs realistically on CPU. And for Granite 4.0 Mamba-hybrid research or low-memory production use where the 70-80% memory reduction actually changes the economics. Granite 4.2 8B and 30B add an Apache 2.0 reasoning option for on-prem agentic and tool-calling work.",
  notFor: "Teams chasing absolute raw quality -- DeepSeek V3.2, GLM-5.1, Qwen 3.6 are all stronger on general benchmarks. Also not for users who want a rich community ecosystem and extensive third-party fine-tunes -- Llama or Qwen wins on that axis.",
  verdict: "IBM Granite is the best open-weight option in 2026 for enterprise procurement, edge deployment, and any workflow where Granite 4.0's Mamba-2 hybrid memory savings materially change what hardware you need. Granite 4.2 (August 2026) adds dense 3B, 8B and 30B reasoning models with thinking modes and native tool calling. The ISO 42001 certification is a genuinely differentiating feature for regulated industries -- nothing else in the open-weight category has it. The tradeoff is absolute-quality: Granite is not trying to beat DeepSeek or GLM on benchmarks, it is trying to be the model your compliance team can actually approve. If that matters, Granite is the pick. If it doesn't, you have other options that score higher.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "IBM Granite page (Granite 4.2, benchmarks, ISO footnote)", url: "https://www.ibm.com/granite", dateAccessed: "2026-10-29" },
    { name: "Hugging Face blog: Granite 4.2 LLMs, How They're Built (2026-08-25)", url: "https://huggingface.co/blog/ibm-granite/granite-4-2", dateAccessed: "2026-10-29" },
    { name: "Hugging Face: ibm-granite models", url: "https://huggingface.co/ibm-granite", dateAccessed: "2026-10-29" },
    { name: "IBM: Granite 4.0 hyper-efficient hybrid models", url: "https://www.ibm.com/new/announcements/ibm-granite-4-0-hyper-efficient-high-performance-hybrid-models", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: Granite 4.0 Nano runs locally", url: "https://venturebeat.com/ai/ibms-open-source-granite-4-0-nano-ai-models-are-small-enough-to-run-locally", dateAccessed: "2026-04-17" },
    { name: "Hugging Face: IBM Granite 4.0 3B Vision", url: "https://huggingface.co/ibm-granite/granite-4.0-3b-vision", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.ibm.com/granite",
  status: "active",
  systemRequirements: [
    {
      variant: "Granite 4.2 3B / 8B / 30B (dense reasoning, 2026-08-25)",
      min: "Not stated on the IBM model card; GGUF, MXFP4, NVFP4 and 4-bit MLX builds are published",
      max: "Not stated on the IBM model card; BF16 weights",
      notes: "Apache 2.0. Dense decoder-only transformer with 128K native context and extension to 512K",
    },
    {
      variant: "Granite 4.0 Nano (350M / 1.5B)",
      min: "8-16 GB RAM (CPU inference)",
      max: "Any modern laptop GPU",
      notes: "Apache 2.0. Runs on CPU with no GPU required",
    },
    {
      variant: "Granite 4.0 3B / 3B Vision (2026-04-01)",
      min: "6 GB VRAM Q4 (RTX 3060)",
      max: "24 GB VRAM FP16",
      notes: "Mamba-2 hybrid; memory per token ~30 percent lower than pure transformer at same scale",
    },
    {
      variant: "Granite 4.0 7B / 32B",
      min: "8 / 24 GB VRAM Q4",
      max: "1× A100 40 GB / 2× H100 FP16",
      notes: "ISO 42001 certified, enterprise-grade governance",
    },
  ],
  metaTitle: "IBM Granite 4.2 Review 2026: Dense Reasoning Models, Apache 2.0, ISO 42001 Certified",
  metaDescription: "IBM Granite review. Granite 4.2 (Aug 2026) adds dense reasoning models at 3B, 8B and 30B with up to 512K context. Granite 4.0 hybrid Mamba-2 and Nano 350M for CPU remain. Apache 2.0, ISO 42001.",
};
