import { ToolReview } from "@/lib/types";

export const midjourney: ToolReview = {
  slug: "midjourney",
  name: "Midjourney",
  tagline: "Industry-leading AI image generation with stunning artistic quality",
  category: "ai-image-generators",
  url: "https://midjourney.com",

  scores: {
    easeOfUse: 6,
    outputQuality: 10,
    value: 7,
    features: 8,
    overall: 7.8,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Basic",
      price: "$10",
      period: "month",
      features: ["~200 generations/mo", "3 concurrent jobs", "General commercial terms"],
    },
    {
      plan: "Standard",
      price: "$30",
      period: "month",
      features: ["15hr fast generations", "Unlimited relaxed", "General commercial terms"],
    },
    {
      plan: "Pro",
      price: "$60",
      period: "month",
      features: ["30hr fast generations", "Stealth mode", "12 concurrent jobs"],
    },
  ],

  pros: [
    "Best-in-class image quality, especially for artistic and photorealistic styles",
    "Huge active community for prompt inspiration",
    "Consistent improvements with each version update",
    "Strong upscaling and variation controls",
  ],
  cons: [
    "No free tier -- you have to pay to try it",
    "Still primarily Discord-based which is clunky for non-gamers",
    "Web interface exists but lacks some Discord features",
    "No API access for developers on lower plans",
  ],
  knownIssues: [
    {
      description: "Hands and text in images still inconsistent, though improved in v6",
      source: "Reddit r/midjourney",
      date: "2026-03",
    },
    {
      description: "Discord bot occasionally slow during peak hours",
      source: "Midjourney community forum",
      date: "2026-02",
    },
  ],
  bestFor: "Artists, designers, and content creators who need the highest quality AI-generated images and don't mind the Discord workflow.",
  notFor: "Beginners who want a simple web interface, or developers who need API access on a budget.",
  verdict: "Midjourney is still the gold standard for AI image quality. The output is consistently stunning. But the Discord-first experience is a real barrier for casual users, and the lack of a free tier means you can't even test it before committing. If image quality is your top priority, it's worth the price. If you want something simpler, look at DALL-E or Leonardo AI.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Official Midjourney pricing page", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/midjourney", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://midjourney.com",
  status: "active",

  metaTitle: "Midjourney Review 2026: Is It Still the Best AI Image Generator?",
  metaDescription: "Honest Midjourney review with real scores, pricing breakdown, pros, cons, and known issues. Updated March 2026.",
};
