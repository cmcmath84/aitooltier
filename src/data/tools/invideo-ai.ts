import { ToolReview } from "@/lib/types";

export const invideoAi: ToolReview = {
  slug: "invideo-ai",
  name: "InVideo AI",
  tagline: "Turn text prompts into fully edited videos with stock footage, voiceover, and music",
  category: "ai-video-generators",
  url: "https://invideo.io",

  scores: {
    easeOfUse: 9,
    outputQuality: 6,
    value: 7,
    features: 7,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "10 min AI video generation/week",
        "Watermarked exports",
        "iStock media library",
        "AI voiceover",
      ],
    },
    {
      plan: "Plus",
      price: "$25",
      period: "month",
      features: [
        "50 min AI video generation/month",
        "No watermark",
        "1080p export",
        "Premium stock media",
        "Background music library",
      ],
    },
    {
      plan: "Max",
      price: "$60",
      period: "month",
      features: [
        "200 min AI video generation/month",
        "No watermark",
        "4K export",
        "Premium everything",
        "Priority rendering",
        "Team collaboration",
      ],
    },
  ],

  pros: [
    "Fastest way to go from an idea to a complete video -- type a prompt, get a video in minutes",
    "Automatic stock footage selection is better than expected and usually relevant",
    "AI voiceover sounds decent and supports multiple languages",
    "Good template library for YouTube, TikTok, ads, and explainer formats",
  ],
  cons: [
    "Output looks like a stock footage slideshow -- it won't pass for custom-produced content",
    "AI voiceover is clearly synthetic and lacks the natural cadence of real narration",
    "Limited control over individual clips and transitions without manual editing",
    "At $25-60/mo it's expensive for what is essentially automated stock footage assembly",
  ],
  knownIssues: [
    {
      description: "AI sometimes selects completely irrelevant stock footage that contradicts the narration",
      source: "Reddit r/VideoEditing",
      date: "2026-03",
    },
    {
      description: "Rendering queue can take 15+ minutes during peak hours even for short videos",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Exported videos occasionally have audio sync issues where voiceover drifts from the visuals",
      source: "Trustpilot",
      date: "2026-01",
    },
  ],
  bestFor: "Marketers and small business owners who need quick social media or explainer videos and don't have a video editing background.",
  notFor: "Anyone who needs polished, professional-looking video content. The output screams 'AI-generated stock footage compilation.'",
  verdict: "InVideo AI is impressive as a concept -- type a prompt, get a video. But the reality is that the output looks like what it is: AI-assembled stock footage with a synthetic voiceover. It's useful for quick social media content where production quality isn't critical, but don't expect to fool anyone into thinking these are professionally produced. For the price, tools like CapCut or even Canva's video editor give you more control.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "InVideo official site", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/VideoEditing", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://invideo.io",
  status: "active",
  metaTitle: "InVideo AI Review 2026: Text-to-Video Worth the Price?",
  metaDescription: "Honest InVideo AI review with real scores and pricing. How good are AI-generated videos from text prompts? Full breakdown. April 2026.",
};
