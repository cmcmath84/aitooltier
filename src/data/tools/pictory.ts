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
      price: "$25",
      period: "month (billed yearly; $29 monthly)",
      features: ["1,200 AI credits/yr on yearly (100/month on monthly)", "Royalty-free stock videos, AI voices, music", "Free trial available"],
    },
    {
      plan: "Professional",
      price: "$35",
      period: "month (billed yearly; $59 monthly)",
      features: ["12,000 AI credits/yr on yearly (500/month on monthly)", "Hyper-realistic AI voices", "Branded templates"],
    },
    {
      plan: "Team",
      price: "$119",
      period: "month (billed yearly; $199 monthly)",
      features: ["28,800 AI credits/yr on yearly (2,400/month on monthly)", "Collaboration tools"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Custom AI credits for images, videos and avatars"],
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
      description: "PRICING CHECK (2026-10-17): Pictory moved to AI-credit plans. Yearly: Starter $25/mo (1,200 credits/yr), Professional $35/mo (12,000/yr), Team $119/mo (28,800/yr); monthly: $29 (100/month), $59 (500/month), $199 (2,400/month); Enterprise custom. Yearly plans include a consultation with a video-creation expert (billed as a $210 value). The old per-video caps (30/60/90 videos a month) are no longer how plans are sold.",
      source: "pictory.ai/pricing",
      date: "2026-10-17",
    },
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

  lastReviewedDate: "2026-10-17",
  dataSources: [
    { name: "Pictory pricing", url: "https://pictory.ai/pricing", dateAccessed: "2026-10-17" },
    { name: "Pictory official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Capterra reviews", dateAccessed: "2026-04-02" },
    { name: "Wyzowl review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://pictory.ai",
  status: "active",
  metaTitle: "Pictory Review 2026: Script-to-Video AI Worth It?",
  metaDescription: "Honest Pictory review. Auto-generate videos from articles and scripts, from $25/mo billed yearly ($29 monthly) on AI-credit plans. Fast but buggy output with wrong visuals. Full scores, pricing, and verdict.",
};
