import { ToolReview } from "@/lib/types";

export const olmo: ToolReview = {
  slug: "olmo",
  name: "Olmo 3 (AI2)",
  tagline: "Allen Institute for AI's fully-open frontier reasoning models -- Olmo 3 family (2025-11-20) includes 7B and 32B sizes, four variants (Base, Think, Instruct, RLZero). Apache 2.0 with fully open data + checkpoints + training logs. Olmo 3-Think 32B matches Qwen3-32B-Thinking at 6x fewer training tokens",
  category: "ai-local-models",
  url: "https://allenai.org/blog/olmo3",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 9.5,
    features: 8,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Apache 2.0 + fully open data)",
      price: "$0",
      features: [
        "Apache 2.0 license on weights",
        "Training data FULLY OPEN -- Dolma dataset published",
        "Training checkpoints at every step published",
        "Training logs / ablations / paper published",
        "Four variants per size: Base, Think (reasoning), Instruct (chat), RLZero (RLHF-free)",
      ],
    },
    {
      plan: "API via partner providers",
      price: "Usage-based",
      period: "per 1M tokens",
      features: [
        "Available on OpenRouter and select hosted providers",
        "Pricing roughly in line with comparable 7B / 32B open-weight models",
        "Primary distribution is self-hosted via Hugging Face",
      ],
    },
  ],

  pros: [
    "FULLY OPEN is a different category than 'open weights.' Olmo 3 publishes not just weights but the complete training data (Dolma dataset), checkpoints at every training step, training logs, and research papers. That level of openness is irreproducible by Llama / Qwen / DeepSeek / Granite / Gemma, none of which publish the training corpus",
    "Olmo 3-Think 32B matches Qwen3-32B-Thinking reasoning quality at roughly 6x fewer training tokens -- a meaningful efficiency result that suggests AI2's data curation is genuinely competitive with the major labs at a tiny fraction of the compute budget",
    "Four-variant release (Base, Think, Instruct, RLZero) means AI2 ships matched models for pretraining research, reasoning, chat, and RLHF-free experimentation -- the RLZero variant is rare and valuable for anyone studying how instruction tuning compares to pure pretraining",
    "Non-profit research institution (AI2 = Allen Institute for AI, founded by Paul Allen) publishing at frontier scale is a durable check against the 'only for-profit labs can reach frontier' narrative. Real ecosystem importance beyond any individual model's scores",
  ],
  cons: [
    "Absolute quality is not frontier-competitive for its size -- Olmo 3-Think 32B is strong but DeepSeek, Qwen 3.6, GLM-5.1, and Llama 4 all outscore it at comparable sizes on mainstream benchmarks. The value is in openness + research utility, not in beating the leaderboards",
    "Research audience primarily -- AI2 is optimizing for reproducibility and science, not for consumer or production ergonomics. Fine-tuning toolkits and deployment recipes are less polished than what you get with Qwen or Llama",
    "Smaller community than Llama / Qwen / DeepSeek -- fewer third-party fine-tunes, fewer production deployment case studies. AI2 does serious community engagement but at a smaller scale than the for-profit labs",
    "November 2025 release means it is no longer the newest open model as of April 2026 -- Granite 4, GLM-5.1, and Arcee Trinity have all shipped since. Still relevant for research-first uses, less so for bleeding-edge quality",
  ],
  knownIssues: [
    {
      description: "Olmo 3's value proposition is research transparency, not peak benchmark performance. If you are choosing an open-weight model purely on MMLU / GPQA / SWE-Bench scores, Olmo will not top the list -- DeepSeek / GLM / Qwen are stronger there. Olmo earns its place when reproducibility, training-corpus transparency, or RLZero research matters",
      source: "AI2 Olmo 3 technical report, Interconnects analysis",
      date: "2025-11",
    },
    {
      description: "Dolma training corpus is large (~3TB). Serious reproducibility work requires significant storage + compute. Most downstream users will still fine-tune from Olmo's published checkpoints rather than re-train from raw data",
      source: "AI2 Dolma documentation",
      date: "2025-11",
    },
  ],
  bestFor: "AI researchers doing reproducibility work, training-data studies, instruction-tuning research, or RLHF-free (RLZero) experimentation. Also valuable for academic institutions and non-profits that want to use an open-weight model whose provenance is fully auditable. Good as a teaching / learning model where inspecting checkpoints matters.",
  notFor: "Production deployments chasing absolute quality -- DeepSeek V3.2, GLM-5.1, Qwen 3.6, or Llama 4 score higher on mainstream benchmarks. Also not ideal for teams that need a rich community ecosystem and many third-party fine-tunes.",
  verdict: "Olmo 3 (November 2025) is the most important open-weight release for the research community in the past year, even though it does not top the mainstream benchmarks. AI2's commitment to publishing weights + data + checkpoints + logs is irreproducible by for-profit labs, and the fact that a non-profit research institution can ship 32B-scale frontier models at all is a structurally important counterweight to Big Lab concentration. For research and educational use, Olmo is the default. For production use, pick based on quality tier -- Olmo is competitive but not leading at its size.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Allen Institute for AI: Olmo 3 announcement", url: "https://allenai.org/blog/olmo3", dateAccessed: "2026-04-17" },
    { name: "Interconnects: Olmo 3, America's truly open reasoning model", url: "https://www.interconnects.ai/p/olmo-3-americas-truly-open-reasoning", dateAccessed: "2026-04-17" },
    { name: "HPCwire: AI2 announces Olmo 3 family", url: "https://www.hpcwire.com/aiwire/2025/11/20/ai2-announces-olmo-3-family-of-open-frontier-language-models/", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://allenai.org/blog/olmo3",
  status: "active",
  systemRequirements: [
    {
      variant: "Olmo 3-7B (Base / Think / Instruct / RLZero)",
      min: "6 GB VRAM Q4 (RTX 3060 / 3070)",
      max: "24 GB VRAM FP16",
      notes: "Apache 2.0 + Dolma training data fully open",
    },
    {
      variant: "Olmo 3-32B (Base / Think / Instruct / RLZero)",
      min: "16 GB VRAM Q4 (RTX 4090)",
      max: "1× H100 80 GB FP16",
      notes: "Olmo 3-Think 32B matches Qwen3-32B-Thinking at ~6x fewer training tokens",
    },
  ],
  metaTitle: "Olmo 3 Review 2026: AI2's Fully-Open Reasoning Models (Weights + Data + Checkpoints)",
  metaDescription: "Olmo 3 review. Allen Institute AI's fully-open reasoning family (Nov 2025). 7B / 32B, four variants (Base, Think, Instruct, RLZero). Apache 2.0 + open Dolma data.",
};
