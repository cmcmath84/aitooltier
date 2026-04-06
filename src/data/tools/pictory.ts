import { ToolReview } from "@/lib/types";

export const pictory: ToolReview = {
  slug: "pictory",
  name: "Pictory",
  tagline: "Turn scripts, articles, and blog posts into short videos automatically using AI",
  category: "ai-video-generators",
  url: "https://pictory.ai",

  scores: {
    easeOfUse: 7,
    outputQuality: 6,
    value: 6,
    features: 7,
    overall: 6.5,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Starter",
      price: "$19",
      period: "month (billed annually)",
      features: [
        "30 videos/month",
        "Royalty-free stock videos",
        "AI voices",
        "Music tracks",
        "Free trial available",
      ],
    },
    {
      plan: "Professional",
      price: "$35",
      period: "month (billed annually)",
      features: [
        "60 videos/month",
        "Hyper-realistic AI voices",
        "Branded templates",
        "Bulk video downloads",
      ],
    },
    {
      plan: "Teams",
      price: "$99",
      period: "month (billed annually)",
      features: [
        "90 videos/month",
        "3 users included",
        "Collaboration tools",
        "180-min transcription per video",
      ],
    },
  ],

  pros: [
    "Script-to-video workflow is genuinely fast -- paste an article and get a watchable video in minutes",
    "Auto-captioning and transcription save hours of manual subtitle work",
    "Good template library for social media formats (YouTube Shorts, Reels, TikTok)",
    "Pictory 2.0 added AI avatars, brand kits, and a proper timeline editor",
  ],
  cons: [
    "AI-selected visuals are often hilariously wrong -- literal interpretations of metaphorical language",
    "Rendering glitches are common, with random blank screens appearing in downloaded videos",
    "Monthly billing is 40-70% more expensive, making annual commitment basically mandatory",
    "AI voice options are limited and you can't adjust tone, pacing, or emphasis",
    "Customer support is hard to reach; refund requests go unanswered for weeks",
  ],
  knownIssues: [
    {
      description:
        "Downloaded videos frequently contain random blank screen segments, requiring re-rendering or manual editing",
      source: "Trustpilot, Capterra",
      date: "2026-02",
    },
    {
      description:
        "AI visual matching takes text literally -- 'open rates' shows people opening mail, 'deliverability' shows delivery trucks",
      source: "Wyzowl review, Zebracat review",
      date: "2026-01",
    },
    {
      description:
        "AppSumo lifetime deal holders locked out of newer features like realistic AI voices and Getty images",
      source: "AppSumo reviews",
      date: "2025-12",
    },
  ],
  bestFor:
    "Content marketers and small business owners who need to repurpose blog posts and articles into social video quickly without video editing skills.",
  notFor:
    "Anyone who needs polished, brand-quality video. The auto-selected visuals and rendering bugs mean you'll still spend time fixing things manually.",
  verdict:
    "Pictory solves a real problem -- turning text content into video is tedious, and the script-to-video pipeline genuinely works for basic social content. But the output needs babysitting. The AI picks wrong visuals constantly, rendering glitches waste time, and the voice options are stiff. Pictory 2.0 improved things with avatars and a timeline editor, but it's still a draft generator, not a finished-video machine. Worth the Starter plan if you're churning out social clips from blog posts.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Pictory official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Capterra reviews", dateAccessed: "2026-04-02" },
    { name: "Wyzowl review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://pictory.ai",
  status: "active",
  metaTitle: "Pictory Review 2026: Script-to-Video AI Worth It?",
  metaDescription:
    "Honest Pictory review. Auto-generate videos from articles starting at $19/mo. Fast but buggy output with wrong visuals. Full scores, pricing, and verdict.",
};
