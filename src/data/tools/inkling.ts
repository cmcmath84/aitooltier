import { ToolReview } from "@/lib/types";

export const inkling: ToolReview = {
  slug: "inkling",
  name: "Inkling (Thinking Machines Lab)",
  tagline: "Mira Murati's $12B lab ships its first model (2026-07-15): a 975B/41B-active open-weights MoE that reasons natively over text, images, and audio with a 1M-token context -- positioned not as the strongest model, but as the best starting point for fine-tuning via Tinker",
  category: "ai-local-models",
  url: "https://thinkingmachines.ai/inkling/",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 8.5,
    features: 8.5,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: [
        "Full weights on Hugging Face -- original checkpoint plus an NVFP4 checkpoint for efficient inference on NVIDIA Blackwell",
        "Open weights; license terms per the model card (not spelled out in the launch post)",
        "Inkling-Small (276B total / 12B active) available in preview",
      ],
    },
    {
      plan: "Tinker (fine-tuning platform)",
      price: "50% off at launch",
      period: "limited time",
      features: [
        "Inkling available on Tinker day one with 64K and 256K context options",
        "Fine-tuning with cookbook support, incl. three recipes for Inkling's audio capabilities",
        "This is the business model: Inkling is the starting point, Tinker is how Thinking Machines makes money",
      ],
    },
    {
      plan: "Hosted APIs (partners)",
      price: "varies",
      features: ["Served by TogetherAI, Fireworks, Modal, Databricks (day-zero partner), and Baseten", "No first-party inference API from Thinking Machines itself"],
    },
  ],

  pros: [
    "First US frontier-adjacent open-weights release at this scale in 2026 -- 975B total / 41B active MoE (256 routed + 2 shared experts, 6 active per token, DeepSeek-V3-style routing), pretrained on 45T tokens",
    "Natively multimodal INPUT across text, images, and audio (dMel spectrograms for audio, 40x40 pixel patches for vision) with a context window up to 1M tokens",
    "Refreshingly honest positioning -- the launch post says outright it is 'not the strongest overall model available today, open or closed'; the pitch is calibration, an adjustable 'thinking effort' dial, and customizability",
    "Designed for fine-tuning from day one: Tinker integration, cookbooks, and NVFP4 checkpoints lower the barrier to making it YOUR model rather than consuming it as-is",
    "Credible team: Thinking Machines Lab is ex-OpenAI CTO Mira Murati's ~200-person lab, and this is its first public proof point after 18 months of infrastructure work",
  ],
  cons: [
    "Text-only outputs for now -- it reasons over images and audio but does not generate them",
    "Not a benchmark leader by its own admission -- if you want maximum raw capability, frontier closed models (or Kimi K3 on the open side) outscore it",
    "41B active parameters still puts practical self-hosting in multi-GPU territory -- this is not a laptop model (Inkling-Small's 12B active is the more realistic self-host target)",
    "License terms live in the model card rather than the launch post -- verify commercial-use terms there before building on it",
    "No first-party API; you depend on Tinker or third-party hosts (Together, Fireworks, Modal, Databricks, Baseten) for managed inference",
  ],
  knownIssues: [
    {
      description: "LAUNCH (2026-07-15): Inkling is Thinking Machines Lab's first-ever model release -- open weights on Hugging Face (original + NVFP4 checkpoints), 975B total / 41B active MoE, native text+image+audio input, up to 1M context, pretrained on 45T tokens. **Inkling-Small** (276B total / 12B active) shipped alongside in preview, 'matching or exceeding its larger sibling on many benchmarks' per the vendor. Available on Tinker at launch (64K/256K context options, 50% launch discount) and via TogetherAI, Fireworks, Modal, Databricks, and Baseten. Strategy note: the company explicitly frames Inkling as a customization substrate monetized through Tinker fine-tuning, not a chatbot -- TechCrunch: revenue depends on the platform, not model distribution. Funding context: a reported ~$50B round was said to be coming together last November but had stalled by January (company declined comment)",
      source: "Thinking Machines Lab (thinkingmachines.ai/news/introducing-inkling/), TechCrunch (2026-07-15), Reuters, Axios",
      date: "2026-07-15",
    },
    {
      description: "Vendor benchmark tables were not published as a simple comparative suite at launch, and the company itself disclaims SOTA -- treat any specific Inkling benchmark numbers circulating on aggregators as unverified until third-party evals (Artificial Analysis, LMArena) publish",
      source: "thinkingmachines.ai launch post (no comparative benchmark table), TechCrunch",
      date: "2026-07-15",
    },
  ],
  bestFor: "Teams that want to fine-tune a serious multimodal open-weights model into a domain specialist -- Tinker plus the cookbook ecosystem makes Inkling the most customization-oriented large release of 2026. Also researchers who want audio-native reasoning in an open model.",
  notFor: "Anyone who just wants the smartest chat model out of the box (use Claude, GPT-5.6, or Kimi K3), or solo self-hosters without multi-GPU hardware -- watch Inkling-Small instead.",
  verdict: "Inkling is the most interesting kind of debut: a $12B lab's first model that deliberately refuses the benchmark arms race. The specs are real -- 975B/41B MoE, native text+image+audio input, 1M context, full weights on Hugging Face -- but the point is the Tinker fine-tuning flywheel: Inkling is sold as a starting ingredient, not a finished assistant. That makes it the leading US open-weights play (a lane Meta has drifted out of) and a genuinely different bet from Kimi K3's 'biggest model wins' approach launched the same week. If you consume models via API, this changes little today. If you build models from open weights, Inkling plus Tinker is now the most credible US-based path.",

  lastReviewedDate: "2026-07-18",
  dataSources: [
    { name: "Thinking Machines Lab: Introducing Inkling (2026-07-15)", url: "https://thinkingmachines.ai/news/introducing-inkling/", dateAccessed: "2026-07-18" },
    { name: "Thinking Machines Lab: Inkling product page", url: "https://thinkingmachines.ai/inkling/", dateAccessed: "2026-07-18" },
    { name: "TechCrunch: Thinking Machines amps up its bet against one-size-fits-all AI (2026-07-15)", url: "https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/", dateAccessed: "2026-07-18" },
  ],
  affiliateUrl: "https://thinkingmachines.ai/inkling/",
  status: "active",
  systemRequirements: [
    {
      variant: "Inkling (975B total / 41B active MoE)",
      min: "Multi-GPU server class -- 41B active parameters plus expert weights; NVFP4 checkpoint targets NVIDIA Blackwell systems",
      max: "Production-grade multi-node inference or hosted via Together/Fireworks/Modal/Databricks/Baseten",
      notes: "Practically hosted-or-cluster for the full model; Inkling-Small (276B/12B active, preview) is the realistic self-host target",
    },
  ],
  metaTitle: "Inkling Review 2026: Thinking Machines Lab's First Open Model",
  metaDescription: "Inkling review. Mira Murati's Thinking Machines Lab debuts (July 15, 2026): 975B/41B-active open-weights MoE, native text+image+audio input, 1M context, weights on Hugging Face, fine-tuning via Tinker. What it is and isn't.",
};
