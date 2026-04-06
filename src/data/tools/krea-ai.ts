import { ToolReview } from "@/lib/types";

export const kreaAi: ToolReview = {
  slug: "krea-ai",
  name: "Krea AI",
  tagline: "Real-time AI image generation and enhancement with a visual, interactive canvas",
  category: "ai-image-generators",
  url: "https://www.krea.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 8,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "50 image generations/day",
        "Real-time generation canvas",
        "Basic upscaling",
        "Community gallery access",
      ],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: [
        "Unlimited generations",
        "High-resolution output",
        "Advanced upscaling (up to 4x)",
        "Video generation",
        "Priority queue",
        "No watermark",
      ],
    },
    {
      plan: "Max",
      price: "$30",
      period: "month",
      features: [
        "All Pro features",
        "Fastest generation speeds",
        "Highest resolution outputs",
        "Early access to new models",
        "Commercial license",
      ],
    },
  ],

  pros: [
    "Real-time generation canvas is genuinely innovative -- you see the image form as you draw and type",
    "Free tier is surprisingly generous at 50 generations/day compared to most competitors",
    "Image upscaling and enhancement are strong, especially for improving AI-generated images from other tools",
    "Clean, modern interface that's more intuitive than Midjourney's Discord workflow",
  ],
  cons: [
    "Smaller model selection compared to Midjourney or Leonardo -- you get what they offer",
    "Real-time mode sacrifices quality for speed -- results need refinement for professional use",
    "Video generation is still early and produces short, sometimes jittery clips",
    "Less community and prompt-sharing ecosystem than established competitors",
  ],
  knownIssues: [
    {
      description: "Real-time generation canvas occasionally lags or freezes on lower-end hardware and slower connections",
      source: "Reddit r/StableDiffusion",
      date: "2026-03",
    },
    {
      description: "Upscaler sometimes introduces artifacts on faces, particularly with non-photorealistic art styles",
      source: "Reddit r/AIArt",
      date: "2026-02",
    },
    {
      description: "Free tier queue times can spike to several minutes during peak usage hours",
      source: "Product Hunt reviews",
      date: "2026-01",
    },
  ],
  bestFor: "Designers and creators who want fast, interactive image generation with a visual canvas approach, plus solid upscaling for existing images.",
  notFor: "Users who want maximum image quality and don't mind a slower workflow. Midjourney still produces better results for patient users.",
  verdict: "Krea AI stands out with its real-time generation canvas, which makes the creative process feel more hands-on than typing prompts into a box. The free tier is generous, the upscaler is excellent, and the overall experience is polished. It won't match Midjourney on raw output quality, but it's faster, more accessible, and more fun to use. A strong pick if you want something between 'type a prompt and wait' and full manual editing.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Krea AI official site", dateAccessed: "2026-04-02" },
    { name: "Reddit r/StableDiffusion", dateAccessed: "2026-04-02" },
    { name: "Reddit r/AIArt", dateAccessed: "2026-04-02" },
    { name: "Product Hunt reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.krea.ai",
  status: "active",
  metaTitle: "Krea AI Review 2026: Real-Time Image Generation Worth It?",
  metaDescription: "Honest Krea AI review with scores, pricing, and real user feedback. Real-time canvas, upscaling, free tier breakdown. April 2026.",
};
