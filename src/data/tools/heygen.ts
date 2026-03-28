import { ToolReview } from "@/lib/types";

export const heygen: ToolReview = {
  slug: "heygen",
  name: "HeyGen",
  tagline: "AI avatar videos for marketing and sales -- like Synthesia but with better lip-sync and more personality",
  category: "ai-video-generators",
  url: "https://heygen.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 6,
    features: 8,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "1 credit (1 min video)",
        "Limited avatars",
        "HeyGen watermark",
      ],
    },
    {
      plan: "Creator",
      price: "$24",
      period: "month",
      features: [
        "15 credits/month",
        "120+ avatars",
        "No watermark",
        "Instant avatar (your own clone)",
      ],
    },
    {
      plan: "Business",
      price: "$120",
      period: "month",
      features: [
        "30 credits/month",
        "All avatars",
        "Priority processing",
        "API access",
        "Brand kit",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Custom credit volume",
        "Studio-quality avatars",
        "Dedicated support",
        "SOC 2 Type II",
      ],
    },
  ],

  pros: [
    "Lip-sync quality is the best in the AI avatar space -- it's noticeably more natural than Synthesia",
    "Instant Avatar lets you clone yourself in minutes and the resemblance is surprisingly good",
    "Video translate feature dubs your existing videos into other languages with matched lip movements",
    "Template library is extensive and actually usable -- not just filler templates nobody would use",
  ],
  cons: [
    "Credits go fast -- 15 credits on the Creator plan means 15 minutes of video, which is not much for the price",
    "The jump from Creator ($24) to Business ($120) is steep and only doubles your credits",
    "Avatar gestures and body movement still look robotic, especially during longer monologues",
    "Rendering can be slow -- complex videos with multiple scenes regularly take 15-20 minutes",
  ],
  knownIssues: [
    {
      description:
        "Instant Avatar clones sometimes produce audio artifacts or unnatural pauses in certain languages",
      source: "Reddit r/heygen",
      date: "2026-03",
    },
    {
      description:
        "Video translate feature occasionally mistranslates technical terms and proper nouns",
      source: "G2 Reviews",
      date: "2026-02",
    },
  ],
  bestFor:
    "Marketing teams and sales orgs who need personalized video content at scale, especially for multilingual campaigns.",
  notFor:
    "Creators who need full creative control over video production -- this is a template-based tool at its core.",
  verdict:
    "HeyGen edges out Synthesia on lip-sync quality and the Instant Avatar feature is a genuine differentiator for personal branding. The video translation is also a strong unique feature. But the credit-based pricing is frustrating -- you'll burn through your monthly allotment faster than expected, and the Business plan is expensive for what you get. Best for teams doing high-volume personalized video outreach where the per-video time savings justify the cost.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "HeyGen official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/heygen", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://heygen.com",
  status: "active",
  metaTitle: "HeyGen Review 2026: AI Video Avatars With Best-in-Class Lip Sync",
  metaDescription:
    "HeyGen review. AI avatar videos with top lip-sync, instant cloning, and video translation. Great features, pricey credits. Scores, pricing. March 2026.",
};
