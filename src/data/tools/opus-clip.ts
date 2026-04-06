import { ToolReview } from "@/lib/types";

export const opusClip: ToolReview = {
  slug: "opus-clip",
  name: "Opus Clip",
  tagline: "AI tool that automatically turns long videos into viral short clips for TikTok, Reels, and Shorts",
  category: "ai-video-generators",
  url: "https://www.opus.pro",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 7,
    features: 8,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "60 minutes of processing/month",
        "Watermarked exports",
        "Basic AI clipping",
        "720p export",
      ],
    },
    {
      plan: "Starter",
      price: "$15",
      period: "month",
      features: [
        "200 minutes of processing/month",
        "No watermark",
        "1080p export",
        "AI captions",
        "Virality score",
      ],
    },
    {
      plan: "Pro",
      price: "$29",
      period: "month",
      features: [
        "600 minutes of processing/month",
        "No watermark",
        "1080p export",
        "Brand kit",
        "AI B-roll",
        "Multi-language captions",
      ],
    },
  ],

  pros: [
    "Genuinely saves hours -- it picks out the best moments from long videos with surprising accuracy",
    "Auto-generated captions and speaker tracking work well out of the box",
    "Virality score helps you prioritize which clips to post first",
    "One-click reframing from landscape to vertical is smooth and handles speaker tracking well",
  ],
  cons: [
    "Free tier watermark makes clips unusable for professional content",
    "Doesn't work great with multi-person panels or roundtable discussions -- it loses track of speakers",
    "The 'virality score' is a black box and sometimes ranks boring clips highly",
    "Processing time can be slow during peak hours, especially for longer videos",
  ],
  knownIssues: [
    {
      description: "Captions sometimes fall out of sync on clips with fast dialogue or multiple speakers",
      source: "Reddit r/NewTubers",
      date: "2026-03",
    },
    {
      description: "Speaker tracking occasionally crops out the wrong person in two-person interview formats",
      source: "YouTube creator forums",
      date: "2026-02",
    },
    {
      description: "Some users report clips getting stuck in 'processing' state and needing to be re-submitted",
      source: "Trustpilot",
      date: "2026-01",
    },
  ],
  bestFor: "YouTubers and podcasters who want to repurpose long-form content into short clips for TikTok, Instagram Reels, and YouTube Shorts without manual editing.",
  notFor: "Creators who need precise editorial control over their clips. The AI picks the moments -- you don't get fine-grained timeline editing.",
  verdict: "Opus Clip is the best long-to-short video tool on the market right now. It genuinely delivers on the promise of turning a 30-minute video into 10 usable short clips with minimal effort. The AI clipping is surprisingly good at finding engaging moments. But it's a starting point, not a finished product -- you'll still want to review and tweak the clips before posting. At $15-29/mo, it pays for itself if you're regularly repurposing content.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Opus Clip official site", dateAccessed: "2026-04-02" },
    { name: "Reddit r/NewTubers", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "YouTube creator community feedback", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.opus.pro",
  status: "active",
  metaTitle: "Opus Clip Review 2026: Best AI Video Clipper for Creators?",
  metaDescription: "Honest Opus Clip review with scores, pricing, and real creator feedback. Best tool for repurposing long videos into shorts? April 2026.",
};
