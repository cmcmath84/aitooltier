import { ToolReview } from "@/lib/types";

export const captionsAi: ToolReview = {
  slug: "captions-ai",
  name: "Captions",
  tagline: "AI video editor with auto captions, eye contact correction, and dubbing for talking-head content",
  category: "ai-video-generators",
  url: "https://captions.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 6,
    value: 5,
    features: 7,
    overall: 6.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Traditional editing tools (per the plan comparison table)", "1 caption template (100+ on paid plans)", "No AI usage credits"],
    },
    {
      plan: "Max",
      price: "$24.99",
      period: "month (iOS price)",
      features: ["500 credits/mo", "AI Edit styles, AI Creator, chat-based editor, Clips", "Digital twins and custom AI actors", "Generated B-roll, music, sound effects and images"],
    },
    {
      plan: "Frontier",
      price: "$69.99 / $139.99 / $279.99",
      period: "month (1x / 2x / 4x usage, iOS prices)",
      features: ["1,400 / 2,800 / 5,600 credits/mo", "Everything in Max", "Access to Captions' most sophisticated generative models"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Bulk credit discounts and custom seats", "Training data exclusion", "Dedicated account management"],
    },
  ],

  pros: [
    "Caption styling is best-in-class -- over 100 templates that actually look good on Reels, TikTok, and Shorts",
    "Eye contact correction works surprisingly well for creators who read from scripts off-camera",
    "AI dubbing into 29+ languages with lip sync is a standout feature for reaching international audiences",
    "The editing workflow is streamlined for talking-head videos specifically, which is what most creators need",
  ],
  cons: [
    "Audio sync issues after export are a dealbreaker -- multiple users report audio drifting out of sync on final renders",
    "Credit system makes costs unpredictable; generative features like dubbing and AI Twin eat through credits fast",
    "App crashes and lost projects are reported frequently, especially on longer videos",
    "There is no cheap middle tier any more: anything beyond free captions needs the $24.99/mo Max plan, and Captions' top models need Frontier at $69.99/mo or more",
    "1.6 out of 5 on Trustpilot -- customer support is widely described as unresponsive",
  ],
  knownIssues: [
    {
      description: "PRICE CHECK -- PRO TIER REMOVED, SCALE RENAMED FRONTIER WITH 2x AND 4x LEVELS (verified 2026-10-15 on the live pricing page): Captions now lists Free, **Max $24.99/mo (500 credits)**, **Frontier $69.99 / $139.99 / $279.99 per month (1,400 / 2,800 / 5,600 credits)** and Enterprise. The **$9.99 Pro plan (200 credits) this page listed since April is gone**, and the old 'Scale' tier at $69.99 is now Frontier 1x. The page notes 'Features and prices reflect iOS plans only' -- web or Android prices can differ.",
      source: "Captions pricing page (captions.ai/pricing, title 'Captions AI Pricing and Subscription Plans') -- fetched 2026-10-15 via curl",
      date: "2026-10-15",
    },
    { description: "Audio goes out of sync after export, making final videos unusable -- reported consistently across multiple review platforms", source: "Trustpilot", date: "2026-01" },
    { description: "App crashes during export and randomly deletes projects, causing users to lose work", source: "App Store reviews", date: "2025-12" },
    { description: "Company removed 90% of available avatars mid-subscription after ending community creator contracts", source: "Trustpilot", date: "2025-10" },
    { description: "Support tickets go unanswered for weeks; multiple users report zero response to billing and technical complaints", source: "Trustpilot", date: "2026-02" },
  ],
  bestFor: "Short-form content creators who mostly do talking-head videos and need polished captions fast. If you stick to the caption features, it does that job well.",
  notFor: "Anyone doing serious video production or longer content. The export bugs, credit limits, and poor support make it unreliable for professional workflows.",
  verdict: "Captions nails the core caption experience -- the templates look great and the auto-captioning is accurate. But everything beyond that is rough. The audio sync bugs are a fundamental problem for a video tool, the credit system makes advanced features expensive, and the Trustpilot score of 1.6 tells you everything about the support situation. Use it for quick caption styling on short clips. For anything more, CapCut or Descript are safer bets.",

  lastReviewedDate: "2026-10-15",
  dataSources: [
    { name: "Captions pricing -- Free, Max $24.99, Frontier $69.99/$139.99/$279.99 (iOS prices; Pro removed; verified 2026-10-15)", url: "https://www.captions.ai/pricing", dateAccessed: "2026-10-15" },
    { name: "Captions AI official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "eesel AI review", dateAccessed: "2026-04-02" },
    { name: "sendshort.ai review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://captions.ai",
  status: "active",
  metaTitle: "Captions AI Review 2026: Great Captions, But Watch the Bugs",
  metaDescription: "Captions AI review. Best-in-class caption styling, but audio sync bugs and poor support drag it down. Pricing verified October 2026: Free, Max $24.99/mo, Frontier from $69.99/mo (the $9.99 Pro tier is gone). Scores and honest verdict.",
};
