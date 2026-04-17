import { ToolReview } from "@/lib/types";

export const granite: ToolReview = {
  slug: "granite",
  name: "IBM Granite 4.0",
  tagline: "IBM's enterprise-focused open-weight family -- Granite 4.0 hybrid Mamba-2 + transformer architecture (70-80% memory reduction vs pure transformer), 3B to 32B sizes, Apache 2.0. First open model family to secure ISO 42001 certification. Nano 350M runs on CPU with 8-16GB RAM. 3B Vision variant landed 2026-04-01",
  category: "ai-local-models",
  url: "https://www.ibm.com/new/announcements/ibm-granite-4-0-hyper-efficient-high-performance-hybrid-models",

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
        "Weights on Hugging Face + Ollama + watsonx",
        "Full family: Nano 350M / 1.5B, 3B, 3B Vision, 7B, 32B",
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
    "Hybrid Mamba-2 + transformer architecture delivers 70-80% memory reduction versus pure transformer at the same quality tier -- the practical result is that Granite 4.0 3B fits inside memory budgets that older 7B transformers needed, and Granite 32B fits where 70B would have",
    "Granite 4.0 Nano (350M and 1.5B) is genuinely runnable on CPU with 8-16GB RAM -- no GPU required. One of the few open-weight options that realistically runs inside a browser via WebGPU or on a laptop without heat issues",
    "First open model family with ISO 42001 AI management system certification -- matters significantly for regulated industries (healthcare, finance, government) where an audit trail on AI governance is a procurement requirement",
    "Granite 4.0 3B Vision (2026-04-01) adds multimodality to the lineup at a size where consumer GPUs can actually run it. Apache 2.0 on the vision variant too",
  ],
  cons: [
    "Granite does not top absolute-quality open-weight benchmarks -- DeepSeek V3.2, Qwen 3.6, GLM-5.1, and Llama 4 all outscore it at the flagship tier. Granite competes on efficiency / governance / enterprise-fit, not on raw-model leaderboard position",
    "Mamba-2 hybrid layers need first-party runtime support -- Ollama and llama.cpp support is improving but has been behind pure-transformer models. Check runtime compatibility before committing to Granite on exotic hardware",
    "Smaller community than Llama / Qwen / DeepSeek -- fewer third-party fine-tunes, fewer Reddit help threads, less Stack Overflow coverage. IBM watsonx is the curated-docs route for teams that need that",
    "IBM brand is polarizing in open-source -- some developers are enthusiastic about having a US enterprise incumbent in the open-weight game, others assume enterprise = stodgy and skip it entirely. Evaluate the models, not the logo",
  ],
  knownIssues: [
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
  bestFor: "Regulated-industry enterprises (healthcare, finance, government) who need Apache 2.0 open-weight models with ISO 42001 certification. Also ideal for edge deployments where Granite Nano (350M / 1.5B) is one of the few open models that runs realistically on CPU. And for any Mamba-hybrid research or low-memory production use where the 70-80% memory reduction actually changes the economics.",
  notFor: "Teams chasing absolute raw quality -- DeepSeek V3.2, GLM-5.1, Qwen 3.6 are all stronger on general benchmarks. Also not for users who want a rich community ecosystem and extensive third-party fine-tunes -- Llama or Qwen wins on that axis.",
  verdict: "IBM Granite 4.0 is the best open-weight option in 2026 for enterprise procurement, edge deployment, and any workflow where the Mamba-2 hybrid architecture's memory savings materially change what hardware you need. The ISO 42001 certification is a genuinely differentiating feature for regulated industries -- nothing else in the open-weight category has it. The tradeoff is absolute-quality: Granite is not trying to beat DeepSeek or GLM on benchmarks, it is trying to be the model your compliance team can actually approve. If that matters, Granite is the pick. If it doesn't, you have other options that score higher.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "IBM: Granite 4.0 hyper-efficient hybrid models", url: "https://www.ibm.com/new/announcements/ibm-granite-4-0-hyper-efficient-high-performance-hybrid-models", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: Granite 4.0 Nano runs locally", url: "https://venturebeat.com/ai/ibms-open-source-granite-4-0-nano-ai-models-are-small-enough-to-run-locally", dateAccessed: "2026-04-17" },
    { name: "Hugging Face: IBM Granite 4.0 3B Vision", url: "https://huggingface.co/ibm-granite/granite-4.0-3b-vision", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.ibm.com/new/announcements/ibm-granite-4-0-hyper-efficient-high-performance-hybrid-models",
  status: "active",
  systemRequirements: [
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
  metaTitle: "IBM Granite 4.0 Review 2026: Mamba-2 Hybrid, Apache 2.0, ISO 42001 Certified",
  metaDescription: "IBM Granite 4.0 review. Hybrid Mamba-2 + transformer, 70-80% memory savings. Nano 350M runs on CPU. 3B Vision (Apr 1 2026). First open model family with ISO 42001.",
};
