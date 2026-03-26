import { ToolReview } from "@/lib/types";

export const ideogram: ToolReview = {
  slug: "ideogram",
  name: "Ideogram",
  tagline: "AI image generator that actually nails text rendering in images",
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
    "Editing and inpainting features are basic compared to Leonardo or Stable Diffusion",
  ],
  knownIssues: [
    {
      description: "Queue times during peak hours can stretch to several minutes even on paid plans",
      source: "Reddit r/ideogram",
      date: "2026-03",
    },
  ],
  bestFor: "Anyone who needs text in their AI-generated images -- logos, posters, social media graphics, mockups. Also great as a budget-friendly Midjourney alternative.",
  notFor: "Power users who need advanced editing, inpainting, or custom model training.",
  verdict: "Ideogram carved out a real niche by being the best at the thing every other generator struggles with: putting readable text in images. If you make social media graphics, marketing materials, or anything with typography, Ideogram is worth trying. For everything else, it's a solid B-tier option that punches above its price.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Ideogram official site", dateAccessed: "2026-03-26" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/ideogram", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://ideogram.ai",
  status: "active",
  metaTitle: "Ideogram Review 2026: The AI Image Generator That Does Text Right",
  metaDescription: "Ideogram review -- the best AI tool for text in images. Scores, free tier details, pros and cons. Updated March 2026.",
};
