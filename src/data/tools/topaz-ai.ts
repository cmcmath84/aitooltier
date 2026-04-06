import { ToolReview } from "@/lib/types";

export const topazAi: ToolReview = {
  slug: "topaz-ai",
  name: "Topaz Labs",
  tagline: "Desktop AI suite for photo and video enhancement -- upscaling, denoising, and sharpening that actually works",
  category: "ai-photo-editing",
  url: "https://www.topazlabs.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 5,
    features: 8,
    overall: 7.3,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Photo AI",
      price: "$199",
      period: "year",
      features: ["Sharpen, denoise, upscale photos", "Batch processing", "Lightroom/Photoshop plugin", "Local processing"],
    },
    {
      plan: "Video AI",
      price: "$299",
      period: "year",
      features: ["Video upscaling to 4K/8K", "Frame interpolation", "Stabilization", "Multiple AI models"],
    },
    {
      plan: "Studio (Bundle)",
      price: "$399",
      period: "year",
      features: ["Photo AI + Video AI + Gigapixel", "All tools included", "Priority cloud rendering"],
    },
  ],

  pros: [
    "Output quality is genuinely best-in-class for photo upscaling and noise reduction -- results speak for themselves",
    "Processes locally on your GPU, so your images never leave your machine -- important for client work",
    "Lightroom and Photoshop plugins integrate into existing photographer workflows seamlessly",
    "Video AI upscaling is one of the few tools that can make old footage look modern",
  ],
  cons: [
    "Switched from one-time purchase to subscription in late 2025 -- $199-399/year is a tough pill for hobbyists",
    "Requires a decent GPU to run at reasonable speed -- older machines will struggle badly",
    "Software is notoriously buggy -- regressions reappear across releases and updates frequently break things",
    "No mobile or web option -- desktop only, which limits flexibility",
  ],
  knownIssues: [
    {
      description: "Perpetual licenses killed in October 2025 -- longtime users who paid $299 once now face $199-399/year subscriptions, generating massive backlash",
      source: "DPReview Forums",
      date: "2025-10",
    },
    {
      description: "Persistent bugs that get fixed and then reappear in subsequent releases -- quality control is a recurring complaint",
      source: "Topaz Community Forums",
      date: "2026-02",
    },
    {
      description: "Some users report license/renewal confusion after the subscription transition -- unable to renew or access software they paid for",
      source: "Medium",
      date: "2026-01",
    },
  ],
  bestFor: "Professional photographers and videographers who need the absolute best AI enhancement quality and process locally. If you shoot in low light or need to upscale old footage, nothing else comes close.",
  notFor: "Hobbyists who can't justify $200+/year for photo enhancement, or anyone without a dedicated GPU. Free alternatives like Upscayl handle basic upscaling fine.",
  verdict: "Topaz still produces the best AI-enhanced images and video on the market -- that hasn't changed. What has changed is the pricing model. The shift from a one-time $299 purchase to a $199-399/year subscription alienated a huge chunk of their user base, and the persistent bug issues don't help. If you're a working professional who bills clients, the cost is easy to justify. Everyone else should think hard about whether the quality bump over free alternatives is worth the annual fee.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Topaz Labs official site", dateAccessed: "2026-04-02" },
    { name: "DPReview Forums", dateAccessed: "2026-04-02" },
    { name: "Topaz Community Forums", dateAccessed: "2026-04-02" },
    { name: "CG Channel", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.topazlabs.com",
  status: "active",
  metaTitle: "Topaz Labs Review 2026: Best AI Photo/Video Enhancement (But at What Cost)?",
  metaDescription: "Honest Topaz Labs review. Best-in-class AI upscaling and denoising, but controversial subscription switch. Full scores, pricing, known issues. April 2026.",
};
