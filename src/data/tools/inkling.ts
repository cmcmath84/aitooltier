import { ToolReview } from "@/lib/types";

export const inkling: ToolReview = {
  slug: "inkling",
  name: "Inkling (Thinking Machines Lab)",
  tagline: "**Nov 5: Thinking Machines introduced Inkling 2 Small, its second model generation -- a 594B-total / 17B-active MoE with image input and variable effort that the lab says scores 31 on the Artificial Analysis Intelligence Index. It is on Tinker now with closed weights at $0.30 / $1.00 per 1M input / output tokens for serverless inference, and the lab intends to publish Apache 2.0 weights next week after external safety testing.** **Inkling-Small (276B total / 12B active) was released as open weights on 2026-07-30 at $1.20 per 1M output tokens versus $4.05 for Inkling, and on 2026-11-04 Cognition shipped SWE-2 Flash, a Devin coding model post-trained from it.** Mira Murati's $12B lab ships its first model (2026-07-15): a 975B/41B-active open-weights MoE that reasons natively over text, images, and audio with a 1M-token context -- positioned not as the strongest model, but as the best starting point for fine-tuning via Tinker",
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
        "Inkling-Small (276B total / 12B active) released as open weights on 2026-07-30 -- same native audio and image reasoning, variable thinking effort and 1M context as Inkling",
        "Output pricing per Thinking Machines: Inkling $4.05 per 1M tokens, Inkling-Small $1.20 per 1M",
      ],
    },
    {
      plan: "Tinker -- Inkling 2 Small (from 2026-11-05)",
      price: "$0.30 / $1.00",
      period: "per 1M input / output tokens (serverless inference beta; cached input $0.03)",
      features: [
        "Fine-tuning on Tinker: $1.50 per 1M training tokens at 64K context, $3.00 at 256K; sampling $1.00, prefill $0.30",
        "Closed weights at launch -- Apache 2.0 weights promised 'next week' after external safety testing and red-teaming; Tinker checkpoints become downloadable then",
        "Serverless inference is in beta for the Inkling family only (Inkling $1.00 / $4.05, Inkling-Small $0.30 / $1.20); production use is by waitlist",
        "256K max context on Tinker",
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
    "Inkling 2 Small (2026-11-05) is the cheapest model in the family to call: $0.30 / $1.00 per 1M on Tinker serverless inference with 17B active parameters, and Apache 2.0 weights are promised",
    "First US frontier-adjacent open-weights release at this scale in 2026 -- 975B total / 41B active MoE (256 routed + 2 shared experts, 6 active per token, DeepSeek-V3-style routing), pretrained on 45T tokens",
    "Natively multimodal INPUT across text, images, and audio (dMel spectrograms for audio, 40x40 pixel patches for vision) with a context window up to 1M tokens",
    "Refreshingly honest positioning -- the launch post says outright it is 'not the strongest overall model available today, open or closed'; the pitch is calibration, an adjustable 'thinking effort' dial, and customizability",
    "Designed for fine-tuning from day one: Tinker integration, cookbooks, and NVFP4 checkpoints lower the barrier to making it YOUR model rather than consuming it as-is",
    "Credible team: Thinking Machines Lab is ex-OpenAI CTO Mira Murati's ~200-person lab, and this is its first public proof point after 18 months of infrastructure work",
  ],
  cons: [
    "Inkling 2 Small launched with closed weights -- the Apache 2.0 release is a stated plan for 'next week', not yet a download",
    "Text-only outputs for now -- it reasons over images and audio but does not generate them",
    "Not a benchmark leader by its own admission -- if you want maximum raw capability, frontier closed models (or Kimi K3 on the open side) outscore it",
    "41B active parameters still puts practical self-hosting in multi-GPU territory -- this is not a laptop model (Inkling-Small's 12B active is the more realistic self-host target)",
    "License terms live in the model card rather than the launch post -- verify commercial-use terms there before building on it",
    "No first-party API; you depend on Tinker or third-party hosts (Together, Fireworks, Modal, Databricks, Baseten) for managed inference",
  ],
  knownIssues: [
    {
      description: "INKLING 2 SMALL -- SECOND GENERATION, CLOSED WEIGHTS FIRST, APACHE 2.0 PROMISED NEXT WEEK (2026-11-05, vendor-primary): Thinking Machines: 'Today we are introducing our second model generation with Inkling 2 Small. It is a Mixture-of-Experts model with 594B total parameters, 17B active, and supports image inputs and variable effort.' The lab says it 'far surpasses our previous models' scores on the Artificial Analysis Intelligence Index with a score of 31'. **Availability:** 'Inkling 2 Small will initially be available through Tinker, with closed weights... We intend to make the full weights available under an Apache 2.0 license next week after the completion of external safety testing and red-teaming.' It can be tried in Tinker Playground and fine-tuned or sampled on Tinker, and 'will be available on additional platforms in the coming weeks'. **Price (Tinker pricing page, checked 2026-11-05):** serverless inference **$0.30 input / $0.03 cached / $1.00 output per 1M** at 256K context -- below Inkling-Small's $0.30 / $1.20 -- and training $1.50 (64K) or $3.00 (256K) per 1M tokens. **Vendor benchmarks worth noting:** on its PMPP-Hard kernel-optimization eval it solved 54.25 tasks at 10 hours, behind GPT-6 Astra (63), Kimi K3.1 Pro (60.5) and Claude Opus 5.5 (60) but ahead of GLM 5.3 and Mistral Large 4; the lab says that, pending the weights, it 'is set to be the top open-weights model on DesignArena', and concedes it 'still trails closed-weights models, such as GPT-6.1 Sol on our alignment evaluations'. Early checkpoints were tested publicly on OpenCode as 'Fledge-Alpha'. **For this page:** until the weights land, Inkling 2 Small is a hosted Tinker model rather than a local one, so the self-hosting notes below still describe Inkling and Inkling-Small only.",
      source: "Thinking Machines Lab (thinkingmachines.ai/news/inkling-2-small/, dateModified 2026-11-05; thinkingmachines.ai/tinker/pricing/; thinkingmachines.ai/tinker/) -- fetched 2026-11-05",
      date: "2026-11-05",
    },
    {
      description: "INKLING-SMALL LEFT PREVIEW ON 2026-07-30, AND A DOWNSTREAM CODING MODEL NOW BUILDS ON IT (2026-07-30 and 2026-11-04, vendor-primary; this page still said 'preview' until 2026-11-05): Thinking Machines: 'Today, we are releasing Inkling-Small, an efficient open-weights model that achieves comparable performance to Inkling at a quarter of its size.' It is a 276B-total / 12B-active MoE trained on NVIDIA GB300 NVL72 systems, with Inkling's native audio and image reasoning, variable thinking effort and up to 1M context; the lab prices output at '$4.05 / 1M tokens' for Inkling and '$1.20 / 1M tokens' for Inkling-Small. **Downstream (11/04):** Cognition's SWE-2 Flash, now in Devin Desktop and CLI, is Inkling-Small with a large mid-training stage and reinforcement learning on top -- Cognition reports it lifted Terminal-Bench 4.0 from 0.9% (Inkling-Small) to 20.0%, which also tells you base Inkling-Small is not a strong agentic coder out of the box.",
      source: "Thinking Machines Lab (thinkingmachines.ai/news/inkling-small/, on-page 'Jul 30, 2026'); Cognition (cognition.ai/blog/swe-2-flash, JSON-LD 2026-11-04) -- fetched 2026-11-05",
      date: "2026-07-30",
    },
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

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Thinking Machines Lab: Introducing Inkling 2 Small (2026-11-05)", url: "https://thinkingmachines.ai/news/inkling-2-small/", dateAccessed: "2026-11-05" },
    { name: "Tinker pricing (Inkling 2 Small serverless inference and training)", url: "https://thinkingmachines.ai/tinker/pricing/", dateAccessed: "2026-11-05" },
    { name: "Thinking Machines Lab: Introducing Inkling-Small (2026-07-30)", url: "https://thinkingmachines.ai/news/inkling-small/", dateAccessed: "2026-11-05" },
    { name: "Cognition: Introducing SWE-2 Flash -- post-trained from Inkling-Small (2026-11-04)", url: "https://cognition.ai/blog/swe-2-flash", dateAccessed: "2026-11-05" },
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
      notes: "Practically hosted-or-cluster for the full model; Inkling-Small (276B/12B active, released 2026-07-30) is the realistic self-host target",
    },
  ],
  metaTitle: "Inkling Review 2026: Inkling 2 Small (594B/17B, $0.30/$1.00 on Tinker), Open Weights Promised",
  metaDescription: "Inkling review. Thinking Machines' Inkling 2 Small (Nov 5, 2026): 594B/17B-active MoE with image input, $0.30/$1.00 per 1M on Tinker, Apache 2.0 weights promised next week. Plus Inkling (975B/41B, July 2026) and Inkling-Small open weights, and fine-tuning via Tinker.",
};
