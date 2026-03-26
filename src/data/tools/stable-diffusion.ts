import { ToolReview } from "@/lib/types";

export const stableDiffusion: ToolReview = {
  slug: "stable-diffusion",
  name: "Stable Diffusion",
  tagline: "Open-source AI image generation with unlimited free local use and full customization",
  category: "ai-image-generators",
  url: "https://stability.ai",

  scores: {
    easeOfUse: 4,
    outputQuality: 9,
    value: 10,
    features: 9,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Local (Free)",
      price: "$0",
      features: ["Unlimited generations", "Full model access", "Requires GPU (6GB+ VRAM)"],
    },
    {
      plan: "Stability AI API",
      price: "$0.01-0.05",
      period: "per image",
      features: ["Cloud-based", "No GPU needed", "Multiple models"],
    },
    {
      plan: "DreamStudio",
      price: "$10",
      period: "1000 credits",
      features: ["Web interface", "Easy to use", "No setup"],
    },
  ],

  pros: [
    "Completely free if you run it locally",
    "Open source -- full control, no restrictions",
    "Massive ecosystem of custom models, LoRAs, and extensions",
    "Best option for developers and technical users",
    "No content filtering (when running locally)",
  ],
  cons: [
    "Steep learning curve for local setup (ComfyUI, Automatic1111)",
    "Needs a decent GPU to run locally -- not laptop-friendly",
    "Cloud options (DreamStudio) feel underfunded compared to competitors",
    "Stability AI as a company has had financial instability",
  ],
  knownIssues: [
    {
      description: "Stability AI layoffs and leadership changes have raised concerns about long-term support",
      source: "TechCrunch, The Verge",
      date: "2026-01",
    },
    {
      description: "SDXL Turbo can produce lower quality results vs full SDXL pipeline",
      source: "Reddit r/StableDiffusion",
      date: "2026-02",
    },
  ],
  bestFor: "Developers, tinkerers, and power users who want full control and are comfortable with technical setup. Also anyone on a budget -- it's genuinely free.",
  notFor: "Non-technical users who want a simple web app experience. If Terminal scares you, this isn't it.",
  verdict: "Stable Diffusion is the most powerful and flexible AI image generator -- if you're willing to put in the work. The local setup lets you generate unlimited images for free with zero restrictions. But it's not for everyone. If you just want to type a prompt and get an image, use DALL-E or Midjourney instead.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Stability AI official site", dateAccessed: "2026-03-26" },
    { name: "Reddit r/StableDiffusion", dateAccessed: "2026-03-26" },
    { name: "GitHub repository", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://stability.ai",
  status: "active",

  metaTitle: "Stable Diffusion Review 2026: The Free Open-Source AI Image Generator",
  metaDescription: "Honest Stable Diffusion review. Free, open-source, and powerful -- but is it too technical? Scores, pricing, pros and cons. Updated March 2026.",
};
