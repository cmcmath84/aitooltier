import { ToolReview } from "@/lib/types";

export const ideogram: ToolReview = {
  slug: "ideogram",
  name: "Ideogram",
  tagline: "AI image generator that nails text rendering -- now with Custom Models (April 2026) for brand-trained generation on Pro / Team / Enterprise plans",
  category: "ai-image-generators",
  url: "https://ideogram.ai",

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
      features: ["10 prompts/day", "Slow generation", "Basic features"],
    },
    {
      plan: "Basic",
      price: "$8",
      period: "month",
      features: ["400 prompts/mo", "Faster generation", "Private mode"],
    },
    {
      plan: "Plus",
      price: "$20",
      period: "month",
      features: ["1,000 prompts/mo", "Priority queue", "API access"],
    },
  ],

  pros: [
    "Best text-in-image rendering of any generator -- logos, signs, and typography actually look right",
    "Solid free tier with 10 prompts per day",
    "Competitive pricing compared to Midjourney",
    "Clean, simple web interface that doesn't overwhelm you",
  ],
  cons: [
    "Overall artistic quality still behind Midjourney for non-text images",
    "Smaller community means fewer prompt examples and shared styles",
    "API is newer and less documented than competitors",
    "Custom Models is gated to Pro+ tiers -- not available on the free or Basic plans",
    "Editing and inpainting features are basic compared to Leonardo or Stable Diffusion",
  ],
  knownIssues: [
    {
      description: "Custom Models (April 2026) lets you train brand-specific image models on 15-100 of your own images for typography, characters, or visual style. Available on Pro / Team / Enterprise plans (Team plan supports unlimited custom models with team-shared access; Enterprise gets white-glove setup, larger 1000+-image datasets, custom typography/SVG logos, and a data-privacy guarantee). This is the most accessible custom-model offering in the consumer image-gen space -- competitors typically require API-only fine-tuning or expensive Enterprise-only paths. Caveat: early adopters report overfitting on tight datasets (single-character archetypes, narrow style ranges) and the trained models don't always generalize beyond training-set composition",
      source: "Ideogram product page (ideogram.ai/features/custom-models)",
      date: "2026-04",
    },
    {
      description: "Queue times during peak hours can stretch to several minutes even on paid plans",
      source: "Reddit r/ideogram",
      date: "2026-03",
    },
  ],
  bestFor: "Anyone who needs text in their AI-generated images -- logos, posters, social media graphics, mockups. With Custom Models (April 2026) on Pro / Team / Enterprise plans, also a strong fit for marketing teams that need brand-trained generation without committing to API-only fine-tuning paths.",
  notFor: "Power users who need advanced editing or inpainting. Free / Basic users -- the new Custom Models feature is gated to Pro+ tiers.",
  verdict: "Ideogram carved out a real niche by being the best at putting readable text in images. The April 2026 Custom Models release closes a big gap: marketing teams that previously had to choose between Midjourney (better artistic quality) and a custom-trained API path can now train brand-specific models inside Ideogram on Pro / Team / Enterprise plans. For social media graphics, marketing materials, typography-heavy work, and brand-consistent generation, Ideogram is the clearest B-tier-or-better pick. Pure artistic image work still favors Midjourney.",

  lastReviewedDate: "2026-04-27",
  dataSources: [
    { name: "Ideogram Custom Models product page", url: "https://ideogram.ai/features/custom-models", dateAccessed: "2026-04-27" },
    { name: "Ideogram official site", dateAccessed: "2026-04-27" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/ideogram", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://ideogram.ai",
  status: "active",
  metaTitle: "Ideogram Review 2026: Custom Models + Best-in-Class Text Rendering",
  metaDescription: "Ideogram review. Custom Models (April 2026) lets you train brand-specific image models on 15-100 photos for Pro / Team / Enterprise plans. Best text-in-image generator. Pricing, pros, cons.",
};
