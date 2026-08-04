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
      description: "KREA 2 WENT OPEN WEIGHTS (2026-06-22/23, vendor release notes): 'Krea 2 is now open-weights. We've released Raw and Turbo checkpoints under a permissive license.' Two checkpoints on Hugging Face (huggingface.co/krea/Krea-2-Raw and /Krea-2-Turbo) with inference code on GitHub and a technical report. **Krea 2 Raw** -- the ~13B DiT base model before post-training, aimed at fine-tuning and LoRA rather than direct inference. **Krea 2 Turbo** -- the 12B distilled variant, 8 steps, up to 2048x2048. **READ THE LICENCE BEFORE YOU SHIP IT: it is the 'Krea 2 Community License', NOT Apache or MIT.** It permits creative, commercial, developer and research use, but **deployers must implement content filtering or an equivalent review process or they are in breach**, and there is a separate enterprise licensing path. Strategically this completes the vertical-integration arc -- Krea went from a real-time UI over other people's models, to its own foundation model, to shipping that model's weights, in about five weeks",
      source: "Krea release notes (krea.ai/release-notes, 2026-06-23), krea.ai/krea-2-open-source, Hugging Face model cards krea/Krea-2-Raw and krea/Krea-2-Turbo",
      date: "2026-06-23",
    },
    {
      description: "KREA 2 ERA (May-June 2026, vendor release notes): **Krea 2** -- Krea's first foundation image model built from scratch -- introduced 5/12, Pro users 5/15, **GA for everyone 5/18** (with a week of unlimited generations for subscribers). Follow-on ships: **Krea 2 API** (5/27, Fal + ComfyUI integrations), **LoRA training** (5/21 beta for Max/Business, **GA for all users 6/1** -- train custom styles on your own images), **Ideogram 4.0 available inside Krea** (6/3, 2K native resolution + best-in-class text rendering), and **Krea 2 Turbo** (6/4, high-quality images in ~2 seconds). Krea has moved from 'real-time UI on other people's models' to a vertically integrated model+platform play in under a month",
      source: "Krea release notes (krea.ai/release-notes)",
      date: "2026-06-04",
    },
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

  lastReviewedDate: "2026-08-03",
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
