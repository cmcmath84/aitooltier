import { ToolReview } from "@/lib/types";

export const flux: ToolReview = {
  slug: "flux",
  name: "Flux (FLUX.2 [klein])",
  tagline: "Black Forest Labs open-source image model -- FLUX.2 [klein] (Jan 15 2026) is the fastest image model to date at sub-0.5s generation, 4MP coherence, multi-reference, and native editing. 4B + 9B open-core variants",
  category: "ai-image-generators",
  url: "https://flux1.ai",

  scores: {
    easeOfUse: 6,
    outputQuality: 9.5,
    value: 8.5,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "FLUX.2 [klein] (Open-core)",
      price: "$0",
      features: [
        "Launched 2026-01-15 -- 4B + 9B parameter variants",
        "Apache 2.0 on open-core weights",
        "Under 0.5s generation on modern hardware, 4MP coherence",
        "Multi-reference mode + native image editing",
        "Requires 13 GB VRAM minimum (4B variant)",
      ],
    },
    {
      plan: "Flux.1 Schnell (legacy)",
      price: "$0",
      features: ["Apache 2.0 license", "Run locally", "Fast generation", "Superseded by FLUX.2 [klein] for most use cases"],
    },
    {
      plan: "FLUX.2 [max] / [pro] API",
      price: "$0.05",
      period: "per image",
      features: [
        "BFL's hosted API -- highest quality tier",
        "Multi-reference + editing + higher resolution than [klein]",
        "Commercial license included",
        "Positioned vs Nano Banana 2 and Midjourney",
      ],
    },
  ],

  pros: [
    "FLUX.2 [klein] (Jan 15 2026) is the fastest frontier-quality image model to date -- sub-0.5s generation on modern hardware unlocks iterative prompt design in a way earlier Flux generations couldn't. Open-core + 13 GB VRAM minimum puts it within reach of consumer GPUs",
    "Native image editing + multi-reference mode (new in FLUX.2 [klein]) closes the biggest UX gap vs Nano Banana 2 -- you no longer need ComfyUI inpainting workflows for basic edits",
    "Photorealistic output quality remains top-tier. Text rendering in images is vastly better than legacy DALL-E and rivals Nano Banana 2 for Latin scripts",
    "Community ecosystem (LoRAs, fine-tunes, workflows on Civitai, ComfyUI) is the deepest in open-source image generation -- moved quickly to FLUX.2 [klein] support within 2 weeks of release",
  ],
  cons: [
    "FLUX.2 [klein] requires 13 GB VRAM minimum for the 4B variant -- still puts it out of reach of 8 GB consumer cards. Use Flux.1 Schnell or legacy SD models on smaller hardware",
    "Hosted API ([max] / [pro]) can be slow for high-resolution outputs -- expect 10-20 seconds per image in 4K",
    "Prompt adherence is still inconsistent on complex multi-element scenes -- Nano Banana 2 is more literal/reliable for commercial design work with tight spec requirements",
    "Non-technical users still face a steep onramp -- ComfyUI or Forge is the realistic path to getting best results, which is a wall for anyone who just wants to type a prompt and get an image",
  ],
  knownIssues: [
    {
      description: "FLUX.2 [klein] 4B variant can produce hand/finger artifacts in ~5% of generations -- materially better than Flux.1 Dev's ~10-15%, but not solved",
      source: "Reddit r/StableDiffusion, Hugging Face discussions",
      date: "2026-02",
    },
    {
      description: "Multi-reference mode in FLUX.2 [klein] occasionally blends stylistically-divergent sources inconsistently -- same class of issue Nano Banana 2 has",
      source: "Reddit r/StableDiffusion",
      date: "2026-03",
    },
    {
      description: "BFL API rate limits and occasional downtime still frustrate developers building production applications -- the [klein] open-core release partially addresses this by enabling self-hosting",
      source: "GitHub Issues",
      date: "2026-03",
    },
  ],
  bestFor: "Technically savvy users who want the best possible image quality and are willing to set up local inference. Also great for developers who want an open-source model they can fine-tune and deploy on their own infrastructure.",
  notFor: "Non-technical users who want a simple web interface. If you don't know what ComfyUI is and don't want to learn, Midjourney or DALL-E will get you results with far less friction.",
  verdict: "Flux has earned its reputation as the photorealism benchmark in AI image generation. The output quality, especially on Flux Pro, is stunning -- and the fact that capable open-source versions exist for free is remarkable. But this is not a plug-and-play tool. Getting the most out of Flux requires technical setup, GPU resources, and familiarity with the ecosystem. If you're willing to invest that time, you'll get better images than any subscription service. If you want to type a prompt and get a picture, look elsewhere.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Black Forest Labs official site", url: "https://bfl.ai/", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: FLUX.2 [klein] open-source launch", url: "https://venturebeat.com/technology/black-forest-labs-launches-open-source-flux-2-klein-to-generate-ai-images-in", dateAccessed: "2026-04-17" },
    { name: "MarkTechPost: FLUX.2 [klein] compact flow models", url: "https://www.marktechpost.com/2026/01/16/black-forest-labs-releases-flux-2-klein-compact-flow-models-for-interactive-visual-intelligence/", dateAccessed: "2026-04-17" },
    { name: "Reddit r/StableDiffusion", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis image benchmarks", dateAccessed: "2026-04-17" },
    { name: "Hands-on testing", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://flux1.ai",
  status: "active",
  metaTitle: "FLUX.2 [klein] Review 2026: Sub-0.5s Open-Source Image Generation",
  metaDescription: "FLUX.2 [klein] review. Black Forest Labs' Jan 15 2026 open-core release: 4B/9B models, under 0.5s generation, 4MP coherence, native editing. Scores + tradeoffs. April 2026.",
};
