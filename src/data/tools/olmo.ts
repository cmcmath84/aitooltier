import { ToolReview } from "@/lib/types";

export const olmo: ToolReview = {
  slug: "olmo",
  name: "Olmo 3 / 3.1 (Ai2)",
  tagline: "Allen Institute for AI's fully-open reasoning models -- Olmo 3 family (2025-11-20; 7B and 32B; Base, Think, Instruct, RL Zero), the Olmo 3.1 Think 32B and Instruct 32B refresh (2025-12-12), and Olmo Hybrid 7B (2026-03-05, transformer plus linear RNN). Apache 2.0 with open Dolma 3 data, stage checkpoints, and training code. Olmo 3-Think 32B narrows the gap to Qwen 3 32B on roughly 6x fewer training tokens. No Olmo 4 yet as of the November 2026 check",
  category: "ai-local-models",
  url: "https://allenai.org/olmo",

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
        "Apache 2.0 license on weights (Olmo 3, Olmo 3.1, Olmo Hybrid)",
        "Training data fully open -- Dolma 3 (~9.3T-token pool; 5.9T-token Dolma 3 Mix used for pretraining)",
        "Checkpoints published for each major training stage (base, mid-training, long-context, post-training)",
        "Training code, logs, and technical report published",
        "Variants: Base, Think (reasoning), Instruct (chat), plus RL Zero 7B checkpoints (RL directly from the base model)",
      ],
    },
    {
      plan: "API via Ai2 inference partner",
      price: "Usage-based",
      period: "per 1M tokens",
      features: [
        "Ai2 links Cirrascale's Ai2 Model Endpoints from allenai.org/olmo (account sign-in required to see pricing)",
        "OpenRouter still lists Olmo 3 / 3.1 models but showed no active provider endpoints on 2026-11-02",
        "Primary distribution is self-hosted via Hugging Face; Ai2 Playground for chat",
      ],
    },
  ],

  pros: [
    "FULLY OPEN is a different category than 'open weights.' Olmo 3 publishes not just weights but the complete training data (Dolma 3), checkpoints from each major training stage, training code and logs, and research papers. That level of openness is irreproducible by Llama / Qwen / DeepSeek / Granite / Gemma, none of which publish the training corpus",
    "Olmo 3-Think 32B narrows the gap to Qwen 3 32B on Ai2's reasoning suite while training on roughly 6x fewer tokens, and the Olmo 3.1 Think 32B refresh (an extra 21 days of RL on 224 GPUs) adds 5+ points on AIME and 20+ points on IFBench per Ai2 -- evidence that AI2's data curation is genuinely competitive at a fraction of the compute budget",
    "Four-path release (Base, Think, Instruct, RL Zero) means AI2 ships matched models for pretraining research, reasoning, chat, and RL-from-base experimentation -- the RL Zero checkpoints (math, code, instruction following, general chat; refreshed in 3.1 for code and math) are rare and valuable for RLVR research",
    "Olmo Hybrid 7B (2026-03-05) mixes transformer attention with Gated DeltaNet linear-RNN layers and, per Ai2, reaches the same MMLU accuracy as Olmo 3 using 49% fewer tokens -- a fully open, controlled comparison of hybrid versus pure-transformer scaling",
    "Non-profit research institution (AI2 = Allen Institute for AI, founded by Paul Allen) publishing at frontier scale is a durable check against the 'only for-profit labs can reach frontier' narrative. Real ecosystem importance beyond any individual model's scores",
  ],
  cons: [
    "Absolute quality is not frontier-competitive for its size -- Olmo 3-Think 32B is strong but DeepSeek, Qwen 3.6, GLM-5.1, and Llama 4 all outscore it at comparable sizes on mainstream benchmarks. The value is in openness + research utility, not in beating the leaderboards",
    "Research audience primarily -- AI2 is optimizing for reproducibility and science, not for consumer or production ergonomics. Fine-tuning toolkits and deployment recipes are less polished than what you get with Qwen or Llama",
    "Hosted API access is thin -- OpenRouter's Olmo 3 / 3.1 listings returned zero active provider endpoints on 2026-11-02 and Ai2's linked Cirrascale endpoints require an account. Plan on self-hosting",
    "The 3.x line dates from November-December 2025 (plus Olmo Hybrid 7B in March 2026). Ai2 says the next generation of Olmo is being built on Olmo-core 3 (2026-10-01), but no Olmo 4 has shipped as of 2026-11-02 -- still relevant for research-first uses, less so for bleeding-edge quality",
  ],
  knownIssues: [
    {
      description: "Olmo 3's value proposition is research transparency, not peak benchmark performance. If you are choosing an open-weight model purely on MMLU / GPQA / SWE-Bench scores, Olmo will not top the list -- DeepSeek / GLM / Qwen are stronger there. Olmo earns its place when reproducibility, training-corpus transparency, or RL Zero research matters",
      source: "AI2 Olmo 3 technical report, Interconnects analysis",
      date: "2025-11",
    },
    {
      description: "Dolma 3 is large -- Ai2 describes a ~9.3-trillion-token pool, a 5.9-trillion-token pretraining mix (Dolma 3 Mix), a 100B-token mid-training mix (Dolmino, sampled from a ~2.2T-token pool) and a ~50B-token long-context mix (Longmino). Serious reproducibility work requires significant storage + compute; most downstream users will fine-tune from Olmo's published checkpoints rather than re-train from raw data",
      source: "Ai2: Olmo 3 announcement (allenai.org/blog/olmo3)",
      date: "2025-11",
    },
    {
      description: "Wording correction (2026-11-02): earlier versions of this page said Olmo 3-Think 32B 'matches' Qwen3-32B-Thinking, that checkpoints are published 'at every training step', and that the Dolma corpus is '~3TB'. Ai2's own wording is 'narrowing the gap to ... Qwen 3 32B ... while training on roughly 6x fewer tokens' and 'checkpoints from each major training milestone', and it sizes Dolma 3 in tokens (~9.3T pool, 5.9T mix)",
      source: "Ai2: Olmo 3 announcement (allenai.org/blog/olmo3)",
      date: "2026-11-02",
    },
    {
      description: "OpenRouter lists allenai/olmo-3.1-32b-think, olmo-3.1-32b-instruct, olmo-3-7b-instruct and olmo-3-7b-think, but each returned an empty provider-endpoint list on 2026-11-02, so the listings cannot currently serve requests. Ai2's /olmo page instead links Cirrascale's Ai2 Model Endpoints (sign-in required)",
      source: "OpenRouter API (models/{id}/endpoints), allenai.org/olmo",
      date: "2026-11-02",
    },
  ],
  bestFor: "AI researchers doing reproducibility work, training-data studies, instruction-tuning research, or RL Zero (RL straight from the base model) experimentation. Also valuable for academic institutions and non-profits that want to use an open-weight model whose provenance is fully auditable. Good as a teaching / learning model where inspecting checkpoints matters.",
  notFor: "Production deployments chasing absolute quality -- DeepSeek V3.2, GLM-5.1, Qwen 3.6, or Llama 4 score higher on mainstream benchmarks. Also not ideal for teams that need a rich community ecosystem, many third-party fine-tunes, or a ready hosted API.",
  verdict: "Olmo 3 (November 2025, refreshed as Olmo 3.1 in December 2025) remains the reference fully-open release for the research community, even though it does not top the mainstream benchmarks. AI2's commitment to publishing weights + data + stage checkpoints + logs is irreproducible by for-profit labs, and the fact that a non-profit research institution can ship 32B-scale reasoning models at all is a structurally important counterweight to Big Lab concentration. Olmo Hybrid 7B adds a fully open testbed for hybrid architectures. For research and educational use, Olmo is the default. For production use, pick based on quality tier -- Olmo is competitive but not leading at its size, and hosted access is limited.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Allen Institute for AI: Olmo 3 announcement (incl. 12/12 Olmo 3.1 update)", url: "https://allenai.org/blog/olmo3", dateAccessed: "2026-11-02" },
    { name: "Ai2: Olmo hub", url: "https://allenai.org/olmo", dateAccessed: "2026-11-02" },
    { name: "Ai2: Introducing Olmo Hybrid (2026-03-05)", url: "https://allenai.org/blog/olmohybrid", dateAccessed: "2026-11-02" },
    { name: "Ai2: Introducing Olmo-core 3 (2026-10-01)", url: "https://allenai.org/blog/olmocore3", dateAccessed: "2026-11-02" },
    { name: "Ai2 research feed (Olmo tag)", url: "https://allenai.org/research?tags=olmo", dateAccessed: "2026-11-02" },
    { name: "Hugging Face: allenai/Olmo-3.1-32B-Think model card", url: "https://huggingface.co/allenai/Olmo-3.1-32B-Think/raw/main/README.md", dateAccessed: "2026-11-02" },
    { name: "OpenRouter API: allenai/olmo-3.1-32b-think endpoints", url: "https://openrouter.ai/api/v1/models/allenai/olmo-3.1-32b-think/endpoints", dateAccessed: "2026-11-02" },
    { name: "Interconnects: Olmo 3, America's truly open reasoning model", url: "https://www.interconnects.ai/p/olmo-3-americas-truly-open-reasoning", dateAccessed: "2026-04-17" },
    { name: "HPCwire: AI2 announces Olmo 3 family", url: "https://www.hpcwire.com/aiwire/2025/11/20/ai2-announces-olmo-3-family-of-open-frontier-language-models/", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://allenai.org/blog/olmo3",
  status: "active",
  systemRequirements: [
    {
      variant: "Olmo 3-7B (Base / Think / Instruct / RL Zero)",
      min: "6 GB VRAM Q4 (RTX 3060 / 3070)",
      max: "24 GB VRAM FP16",
      notes: "Apache 2.0 + Dolma 3 training data fully open",
    },
    {
      variant: "Olmo 3-32B / Olmo 3.1-32B (Base / Think / Instruct)",
      min: "16 GB VRAM Q4 (RTX 4090)",
      max: "1× H100 80 GB FP16",
      notes: "Olmo 3-Think 32B narrows the gap to Qwen 3 32B at ~6x fewer training tokens; Olmo 3.1 32B Think / Instruct (2025-12-12) share the same footprint",
    },
  ],
  metaTitle: "Olmo 3 / 3.1 Review 2026: AI2's Fully-Open Reasoning Models (Weights + Data + Checkpoints)",
  metaDescription: "Olmo review. Ai2's fully-open reasoning family: Olmo 3 (Nov 2025), Olmo 3.1 32B Think/Instruct (Dec 2025), Olmo Hybrid 7B (Mar 2026). Apache 2.0 + open Dolma 3 data.",
};
