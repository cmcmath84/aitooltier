import { ToolReview } from "@/lib/types";

export const midjourney: ToolReview = {
  slug: "midjourney",
  name: "Midjourney",
  tagline: "Industry-leading AI image generation with stunning artistic quality. V8.1 Alpha (2026-04-14, alpha.midjourney.com) brings default HD/2K output at ~3x V8 speed with improved prompt adherence",
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
      description: "Midjourney V8.1 Alpha opened on 2026-04-14 at alpha.midjourney.com -- default HD/2K output, roughly 3x faster than V8, meaningfully better prompt adherence. Currently alpha-only access so stability varies; worth testing alongside your V8 workflows before fully migrating",
      source: "Midjourney docs (docs.midjourney.com/hc/en-us/articles/32199405667853-Version)",
      date: "2026-04",
    },
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

  lastReviewedDate: "2026-04-21",
  dataSources: [
    { name: "Midjourney docs: Version page", url: "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version", dateAccessed: "2026-04-21" },
    { name: "Official Midjourney pricing page", dateAccessed: "2026-04-21" },
    { name: "Reddit r/midjourney", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://midjourney.com",
  status: "active",

  metaTitle: "Midjourney Review 2026: V8.1 Alpha (Apr 14) Default HD/2K + 3x Faster",
  metaDescription: "Midjourney review. V8.1 Alpha (2026-04-14) at alpha.midjourney.com -- default HD/2K output, 3x V8 speed, better prompt adherence. Scores, pricing, alternatives.",
};
