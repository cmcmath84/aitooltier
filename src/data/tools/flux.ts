import { ToolReview } from "@/lib/types";

export const flux: ToolReview = {
  slug: "flux",
  name: "Flux",
  tagline: "The open-source image model from ex-Stability AI engineers that's quietly become the photorealism king",
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
      plan: "Open Source (Flux.1 Schnell)",
      price: "$0",
      features: ["Apache 2.0 license", "Run locally", "Fast generation", "Lower quality tier"],
    },
    {
      plan: "Flux.1 Dev",
      price: "$0",
      features: ["Non-commercial license", "Higher quality", "Run locally", "Guidance distilled"],
    },
    {
      plan: "Flux Pro API",
      price: "$0.05",
      period: "month",
      features: ["Per image (via BFL API)", "Highest quality", "Commercial license", "Fast inference"],
    },
  ],

  pros: [
    "Photorealistic output quality is genuinely top-tier -- consistently produces images that are hard to distinguish from photographs",
    "Open-source models mean you can run it locally with zero ongoing costs if you have the GPU",
    "Text rendering in images is vastly better than DALL-E or Midjourney -- it actually spells words correctly most of the time",
    "The community has built an incredible ecosystem of LoRAs and fine-tunes for every style imaginable",
  ],
  cons: [
    "Local setup requires serious technical knowledge -- you need ComfyUI or similar tools and a decent GPU (12GB+ VRAM minimum)",
    "The API can be slow for high-resolution outputs -- expect 15-30 seconds for a single Pro-quality image",
    "Prompt adherence is inconsistent -- complex multi-element prompts sometimes ignore or merge elements together",
    "No built-in editing or inpainting workflow -- you need third-party tools for anything beyond text-to-image",
  ],
  knownIssues: [
    {
      description: "Flux.1 Dev model produces noticeable artifacts on human hands in about 10-15% of generations",
      source: "Reddit r/StableDiffusion",
      date: "2026-02",
    },
    {
      description: "BFL API rate limits and occasional downtime have frustrated developers building production applications",
      source: "GitHub Issues",
      date: "2026-03",
    },
  ],
  bestFor: "Technically savvy users who want the best possible image quality and are willing to set up local inference. Also great for developers who want an open-source model they can fine-tune and deploy on their own infrastructure.",
  notFor: "Non-technical users who want a simple web interface. If you don't know what ComfyUI is and don't want to learn, Midjourney or DALL-E will get you results with far less friction.",
  verdict: "Flux has earned its reputation as the photorealism benchmark in AI image generation. The output quality, especially on Flux Pro, is stunning -- and the fact that capable open-source versions exist for free is remarkable. But this is not a plug-and-play tool. Getting the most out of Flux requires technical setup, GPU resources, and familiarity with the ecosystem. If you're willing to invest that time, you'll get better images than any subscription service. If you want to type a prompt and get a picture, look elsewhere.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "Black Forest Labs official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/StableDiffusion", dateAccessed: "2026-03-31" },
    { name: "Artificial Analysis image benchmarks", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://flux1.ai",
  status: "active",
  metaTitle: "Flux Review 2026: Open-Source AI Image Generation With Best-in-Class Photorealism",
  metaDescription: "Flux review. Top-tier photorealistic images, open-source models, great text rendering. Technical setup required. Scores, pricing. March 2026.",
};
