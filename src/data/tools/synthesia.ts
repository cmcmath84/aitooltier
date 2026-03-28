import { ToolReview } from "@/lib/types";

export const synthesia: ToolReview = {
  slug: "synthesia",
  name: "Synthesia",
  tagline: "Create talking-head videos with AI avatars -- no camera, no actors, no studio needed",
  category: "ai-marketing-tools",
  url: "https://synthesia.io",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 6,
    features: 8,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "3 minutes of video/month",
        "9 AI avatars",
        "Limited templates",
      ],
    },
    {
      plan: "Starter",
      price: "$22",
      period: "month",
      features: [
        "10 minutes of video/month",
        "70+ AI avatars",
        "Custom backgrounds",
        "120+ languages",
      ],
    },
    {
      plan: "Creator",
      price: "$67",
      period: "month",
      features: [
        "30 minutes of video/month",
        "90+ AI avatars",
        "Custom avatar creation",
        "Brand kits",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited minutes",
        "Custom avatars",
        "API access",
        "Priority support",
        "SOC 2 compliance",
      ],
    },
  ],

  pros: [
    "Dead simple workflow -- paste a script, pick an avatar, choose a language, and you have a video in minutes",
    "Language support is outstanding -- 120+ languages with lip-sync that actually matches the audio",
    "Perfect for internal training and onboarding videos where production quality matters less than speed",
    "Custom avatar creation lets you clone your own likeness, which is huge for personal branding",
  ],
  cons: [
    "Avatars still have that uncanny valley feel -- viewers can tell it's AI, especially around eye movement and gestures",
    "Per-minute pricing adds up fast if you're making anything longer than a short explainer",
    "Videos look formulaic -- avatar talking to camera with slides behind them gets repetitive quickly",
    "No real control over avatar emotion or body language -- they deliver everything in the same neutral tone",
  ],
  knownIssues: [
    {
      description:
        "Custom avatars sometimes exhibit noticeable lip-sync drift on longer scripts (5+ minutes)",
      source: "Synthesia Community Forum",
      date: "2026-03",
    },
    {
      description:
        "Some users report render times spiking to 30+ minutes during peak hours for videos over 5 minutes",
      source: "G2 Reviews",
      date: "2026-02",
    },
  ],
  bestFor:
    "Corporate teams producing training, onboarding, and internal comms videos at scale across multiple languages.",
  notFor:
    "Anyone making customer-facing marketing videos where authentic human presence matters.",
  verdict:
    "Synthesia is the best tool for a very specific job: creating lots of talking-head videos quickly, especially in multiple languages. For corporate training and internal comms, it's a no-brainer. But the uncanny valley problem is real, and for anything customer-facing, the AI-generated look can actually hurt your brand more than help it. Know what you're using it for before you commit.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Synthesia official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Trustpilot", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://synthesia.io",
  status: "active",
  metaTitle: "Synthesia Review 2026: AI Video Avatars for Training and Marketing",
  metaDescription:
    "Synthesia review. AI avatar videos in 120+ languages, great for training, uncanny for marketing. Pricing, scores, and honest take. March 2026.",
};
