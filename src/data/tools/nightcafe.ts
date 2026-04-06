import { ToolReview } from "@/lib/types";

export const nightcafe: ToolReview = {
  slug: "nightcafe",
  name: "NightCafe",
  tagline: "Community-driven AI art generator with multiple models, daily free credits, and a social gallery",
  category: "ai-image-generators",
  url: "https://creator.nightcafe.studio",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "5 free credits daily",
        "Earn 3 more via daily challenges",
        "Bonus credits from streaks and badges",
        "All AI models available",
      ],
    },
    {
      plan: "AI Beginner",
      price: "$5.99",
      period: "month",
      features: ["100 fast credits/month", "Credits roll over", "All models"],
    },
    {
      plan: "AI Hobbyist",
      price: "$9.99",
      period: "month",
      features: ["200 fast credits/month", "Credits roll over", "All models"],
    },
    {
      plan: "AI Enthusiast",
      price: "$19.99",
      period: "month",
      features: ["500 fast credits/month", "Credits roll over", "All models"],
    },
    {
      plan: "AI Artist",
      price: "$49.99",
      period: "month",
      features: [
        "1,400 fast credits/month",
        "Credits roll over",
        "All models",
        "Priority generation",
      ],
    },
  ],

  pros: [
    "Genuinely usable free tier -- 5 daily credits plus challenge and streak bonuses add up",
    "Multiple AI models (Stable Diffusion, DALL-E, etc.) available in one platform",
    "Credits roll over month to month, so you don't lose what you pay for",
    "Strong community with daily challenges, voting, and a social gallery that makes it fun to use",
  ],
  cons: [
    "Output resolution can be low; upscaling requires additional credits or external tools",
    "No in-app editing -- if a generation is 90% right, you need Photoshop to fix the last 10%",
    "Recent policy changes cut daily free credits and retroactively expired earned credits, angering loyal users",
    "Site reliability is inconsistent, with users reporting frequent downtime throughout 2025",
    "Less control over generation parameters compared to running models locally via ComfyUI",
  ],
  knownIssues: [
    {
      description:
        "March 2026 update retroactively expired previously earned credits and cut daily free rewards by 50%",
      source: "NightCafe community, Trustpilot",
      date: "2026-03",
    },
    {
      description:
        "Frequent site downtime reported throughout 2025, with users unable to access the platform for extended periods",
      source: "UpDownRadar, Trustpilot",
      date: "2025-11",
    },
    {
      description:
        "Accounts and all generated artwork can be deleted by moderators without warning or appeal process",
      source: "Trustpilot",
      date: "2026-01",
    },
  ],
  bestFor:
    "Hobbyists and casual creators who want to experiment with multiple AI art models without big upfront costs. The community and daily challenges make it more engaging than pure generators.",
  notFor:
    "Professional designers who need high-res output, precise editing control, or reliable uptime for client work. Use Midjourney or local Stable Diffusion instead.",
  verdict:
    "NightCafe is the most approachable AI art platform for beginners and hobbyists. The free credits, community features, and multi-model access give it real staying power. But the recent credit policy changes and reliability issues have shaken trust with longtime users. It's still a solid starting point for AI art, just don't build a production workflow on it.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "NightCafe official site", dateAccessed: "2026-04-02" },
    { name: "Capterra reviews", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "G2 reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://creator.nightcafe.studio",
  status: "active",
  metaTitle: "NightCafe Review 2026: Best Free AI Art Generator?",
  metaDescription:
    "Honest NightCafe review. Free daily credits, multiple AI models, community features. But reliability issues and credit policy changes. Full verdict inside.",
};
