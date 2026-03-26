import { ToolReview } from "@/lib/types";

export const runway: ToolReview = {
  slug: "runway",
  name: "Runway Gen-3",
  tagline: "The most capable AI video generator available -- text-to-video that actually looks professional",
  category: "ai-video-generators",
  url: "https://runwayml.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 6,
    features: 9,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["125 credits", "3 projects", "720p export", "Watermarked"],
    },
    {
      plan: "Standard",
      price: "$15",
      period: "month",
      features: ["625 credits/mo", "Unlimited projects", "4K upscale"],
    },
    {
      plan: "Pro",
      price: "$35",
      period: "month",
      features: ["2,250 credits/mo", "No watermarks", "Custom models"],
    },
  ],

  pros: [
    "Gen-3 Alpha produces the highest quality AI video currently available",
    "Full creative suite -- not just text-to-video but also inpainting, motion brush, image-to-video",
    "Video-to-video transformation is legitimately useful for real production work",
    "The web editor is professional-grade with timeline, layers, and masking",
  ],
  cons: [
    "Credits burn fast -- one 10-second Gen-3 clip can cost 50+ credits",
    "Generation times are slow, especially for Gen-3 at higher quality",
    "Free tier is basically just a demo -- 125 credits gets you maybe 2-3 clips",
    "Generated videos max out at about 10 seconds before quality degrades",
  ],
  knownIssues: [
    {
      description: "Gen-3 Alpha frequently struggles with human hands and faces in motion, producing distortion",
      source: "Reddit r/runwayml",
      date: "2026-03",
    },
    {
      description: "Credit costs quietly increased for Gen-3 features without announcement",
      source: "Twitter/X user reports",
      date: "2026-02",
    },
  ],
  bestFor: "Video creators, filmmakers, and agencies who need the best possible AI video quality and have budget for credits. The creative suite tools (inpainting, motion brush) are best-in-class.",
  notFor: "Casual users or anyone on a tight budget. Credits disappear fast, and the free tier barely lets you try it.",
  verdict: "Runway is the clear leader in AI video generation. Gen-3 Alpha produces clips that genuinely look cinematic -- a huge leap from where AI video was a year ago. But it's expensive if you're creating lots of content, and the 10-second clip limitation means it's a tool for short clips, not full videos. For professional work, it's worth the cost. For experimenting, try Pika first.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Runway official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/runwayml", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://runwayml.com",
  status: "active",
  metaTitle: "Runway Gen-3 Review 2026: Best AI Video Generator?",
  metaDescription: "Runway Gen-3 Alpha review. Best AI video quality available but credits burn fast. Scores, pricing, known issues. March 2026.",
};
