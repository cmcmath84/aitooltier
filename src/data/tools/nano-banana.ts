import { ToolReview } from "@/lib/types";

export const nanoBanana: ToolReview = {
  slug: "nano-banana",
  name: "Nano Banana 2 (Gemini 3.1 Flash Image)",
  tagline: "Google's Gemini 3.1 Flash Image model -- the best-in-class text-in-image renderer, now the default across the Gemini app",
  category: "ai-image-generators",
  url: "https://gemini.google.com/",

  scores: {
    easeOfUse: 9.5,
    outputQuality: 9.5,
    value: 8.5,
    features: 8,
    overall: 8.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Gemini Free",
      price: "$0",
      features: [
        "Nano Banana 2 on Gemini app Fast tier",
        "Rate-limited daily generations",
        "Basic multi-reference support",
      ],
    },
    {
      plan: "Google AI Pro",
      price: "$19.99",
      period: "month",
      features: [
        "Gemini Thinking tier with Nano Banana 2",
        "Higher generation limits",
        "Multi-reference up to 6 images",
      ],
    },
    {
      plan: "Google AI Ultra",
      price: "$249",
      period: "month",
      features: [
        "Gemini Pro tier, effectively unlimited Nano Banana 2",
        "Veo 3.1 video generation included",
        "Priority compute",
      ],
    },
    {
      plan: "API (Gemini 3.1 Flash Image)",
      price: "$0.039",
      period: "per image",
      features: [
        "Direct model access via Gemini API",
        "Batch generation support",
        "Commercial use rights",
      ],
    },
  ],

  pros: [
    "Text-in-image rendering is genuinely best-in-class -- signs, posters, book covers, infographics, and typography compositions come out readable and correctly spelled in a way no other model nails yet in 2026",
    "Multi-image reference (up to 6 reference images) preserves character identity, style, or product consistency across an entire campaign -- this is the practical feature most agencies were waiting for",
    "Bundled into the existing Gemini app -- if you already have a Google One or Gemini subscription, Nano Banana 2 is a mode toggle rather than a separate tool to learn and pay for",
    "Massive branded search volume for 'Nano Banana' shows Google is explicitly marketing this as a consumer product, not just a model release, which means ongoing investment and rapid iteration",
  ],
  cons: [
    "Confusing branding -- 'Nano Banana' is the nickname, 'Gemini 3.1 Flash Image' is the actual model name, and the Gemini app interface is inconsistent about which one it surfaces to users",
    "Rate limits on the free tier are tight -- iterative prompt design will push you into a paid tier faster than you might expect for a model positioned as 'free'",
    "Loses to Midjourney on purely artistic or stylized generation -- Nano Banana 2 feels clean and literal where Midjourney feels interpretive and atmospheric",
    "API pricing at $0.039/image is higher than FLUX.2 [klein] or hosted Stable Diffusion at scale -- the per-image cost adds up fast for high-volume production",
  ],
  knownIssues: [
    {
      description: "Multi-reference mode occasionally blends source images inconsistently when the references are stylistically divergent",
      source: "Reddit r/GeminiAI",
      date: "2026-03",
    },
    {
      description: "Text rendering in non-Latin scripts (Arabic, Chinese, Korean) lags Latin-script quality noticeably, with character shape errors that Latin text rarely shows",
      source: "Google Japan developer forums",
      date: "2026-02",
    },
  ],
  bestFor: "Designers, marketers, and content creators who need readable text in images (social posts, ad creative, book covers, infographics, event flyers) and who are already using or willing to pay for Gemini. If any part of your commercial design work requires typography to look right, Nano Banana 2 is the 2026 leader.",
  notFor: "Pure artistic or stylized image generation -- Midjourney's aesthetic wins there. Also not for anyone deeply in the open-weight camp; FLUX.2 [klein] is free to self-host and almost as good for text-free images with better control.",
  verdict: "Nano Banana 2 earned its viral branded search volume honestly -- it's the best commercial-use image model in 2026 for any workflow that requires readable text or consistent branding across multiple images. Google's decision to roll it into the default Gemini app experience (instead of shipping yet another product) is smart: it puts best-in-class image gen in front of everyone with a Gemini account with zero onboarding. The honest read: for design and marketing work in 2026, Nano Banana 2 is the default answer. For artistic exploration, stick with Midjourney.",

  lastReviewedDate: "2026-04-16",
  dataSources: [
    { name: "Google Blog: Nano Banana 2", url: "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/", dateAccessed: "2026-04-16" },
    { name: "Google Cloud: Nano Banana Pro for enterprise", url: "https://cloud.google.com/blog/products/ai-machine-learning/nano-banana-pro-available-for-enterprise", dateAccessed: "2026-04-16" },
    { name: "Gemini API pricing page", dateAccessed: "2026-04-16" },
    { name: "Reddit r/GeminiAI community reports", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing via Gemini app", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://gemini.google.com/",
  status: "active",
  metaTitle: "Nano Banana 2 Review 2026: Google's Gemini 3.1 Flash Image, the Best Text-in-Image Model",
  metaDescription: "Nano Banana 2 review. Google's Gemini 3.1 Flash Image model. Best-in-class text-in-image, multi-reference, bundled in Gemini app. Pricing + API. April 2026.",
};
