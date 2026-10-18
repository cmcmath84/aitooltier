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
      plan: "AI Hobbyist",
      price: "$7.49",
      period: "month (billed yearly; $12.50 monthly)",
      features: ["200 fast credits/month", "Earn 600+ relax credits/month", "First creation each day free", "Purchased credits do not expire"],
    },
    {
      plan: "AI Enthusiast",
      price: "$14.99",
      period: "month (billed yearly; $25 monthly)",
      features: ["500 fast credits/month", "Earn 600+ relax credits/month", "Additional fast credits $0.04 each"],
    },
    {
      plan: "AI Creator",
      price: "$23.99",
      period: "month (billed yearly; $40 monthly)",
      features: ["850 fast credits/month", "Earn 600+ relax credits/month", "Additional fast credits $0.038 each"],
    },
    {
      plan: "AI Artist",
      price: "$37.49",
      period: "month (billed yearly; $62.50 monthly)",
      features: ["1,400 fast credits/month", "Earn 600+ relax credits/month", "50+ PRO image models, skip the queue"],
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
      description: "PRICING CHECK (2026-10-17): NightCafe PRO now bills monthly, quarterly (save 15%) or yearly (save 40%). Plan cards: AI Hobbyist $12.50/mo or $7.49/mo yearly (200 fast credits), AI Enthusiast $25 or $14.99 (500), new **AI Creator** $40 or $23.99 (850), AI Artist $62.50 or $37.49 (1,400); every tier earns 600+ relax credits a month and the first creation each day is free. The $5.99 AI Beginner tier no longer appears among the plan cards. Free users can still make unlimited base Stable Diffusion creations.",
      source: "creator.nightcafe.studio/pricing",
      date: "2026-10-17",
    },
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

  lastReviewedDate: "2026-10-17",
  dataSources: [
    { name: "NightCafe pricing", url: "https://creator.nightcafe.studio/pricing", dateAccessed: "2026-10-17" },
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
