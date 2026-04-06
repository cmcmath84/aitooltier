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
    { plan: "Free", price: "$0", features: ["Basic captions", "Watermarked exports", "Limited features"] },
    { plan: "Pro", price: "$9.99", period: "month", features: ["200 credits/mo", "No watermarks", "100+ caption templates", "Basic AI editing tools"] },
    { plan: "Max", price: "$24.99", period: "month", features: ["500 credits/mo", "AI Twin", "AI actors", "Text-to-video", "AI Lipdub"] },
    { plan: "Scale", price: "$69.99", period: "month", features: ["1400 credits/mo", "All Max features", "Top-tier AI models", "Built for teams and agencies"] },
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
    "Anything beyond basic captions requires the $25/mo Max plan, which adds up quickly",
    "1.6 out of 5 on Trustpilot -- customer support is widely described as unresponsive",
  ],
  knownIssues: [
    { description: "Audio goes out of sync after export, making final videos unusable -- reported consistently across multiple review platforms", source: "Trustpilot", date: "2026-01" },
    { description: "App crashes during export and randomly deletes projects, causing users to lose work", source: "App Store reviews", date: "2025-12" },
    { description: "Company removed 90% of available avatars mid-subscription after ending community creator contracts", source: "Trustpilot", date: "2025-10" },
    { description: "Support tickets go unanswered for weeks; multiple users report zero response to billing and technical complaints", source: "Trustpilot", date: "2026-02" },
  ],
  bestFor: "Short-form content creators who mostly do talking-head videos and need polished captions fast. If you stick to the caption features, it does that job well.",
  notFor: "Anyone doing serious video production or longer content. The export bugs, credit limits, and poor support make it unreliable for professional workflows.",
  verdict: "Captions nails the core caption experience -- the templates look great and the auto-captioning is accurate. But everything beyond that is rough. The audio sync bugs are a fundamental problem for a video tool, the credit system makes advanced features expensive, and the Trustpilot score of 1.6 tells you everything about the support situation. Use it for quick caption styling on short clips. For anything more, CapCut or Descript are safer bets.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Captions AI official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "eesel AI review", dateAccessed: "2026-04-02" },
    { name: "sendshort.ai review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://captions.ai",
  status: "active",
  metaTitle: "Captions AI Review 2026: Great Captions, But Watch the Bugs",
  metaDescription: "Captions AI review. Best-in-class caption styling, but audio sync bugs and poor support drag it down. Pricing, scores, and honest verdict. April 2026.",
};
