import { ToolReview } from "@/lib/types";

export const canvaAi: ToolReview = {
  slug: "canva-ai",
  name: "Canva AI (Magic Studio)",
  tagline: "AI features baked into the design tool millions already use -- no learning curve needed",
  category: "ai-design-tools",
  url: "https://canva.com",

  scores: {
    easeOfUse: 10,
    outputQuality: 7,
    value: 9,
    features: 8,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["50 AI uses/mo", "Basic templates", "Magic Write"] },
    { plan: "Pro", price: "$13", period: "month", features: ["500 AI uses/mo", "Magic Eraser", "Background Remover", "Brand Kit"] },
    { plan: "Teams", price: "$10", period: "user/month", features: ["500 AI uses/user", "Brand controls", "Collaboration"] },
  ],

  pros: [
    "If you already use Canva, the AI features are just there -- zero learning curve",
    "Magic Eraser and Background Remover actually work well for quick edits",
    "Magic Write is decent for social media captions and short copy",
    "Price is hard to beat -- the whole design platform plus AI for $13/mo",
  ],
  cons: [
    "AI image generation quality is far below dedicated tools like Midjourney",
    "50 free AI uses per month is stingy",
    "AI features feel bolted on rather than deeply integrated into the design flow",
    "Not useful for anyone who doesn't already use Canva for design",
  ],
  knownIssues: [
    { description: "Magic Expand sometimes produces noticeable artifacts at the edges of expanded images", source: "Canva Community", date: "2026-03" },
  ],
  bestFor: "Canva users who want AI shortcuts in their existing workflow. Social media managers, small business owners, and non-designers who already make content in Canva.",
  notFor: "Professional designers or anyone who needs high-quality AI image generation. Use Midjourney for images and Figma for design.",
  verdict: "Canva AI is the smart play by Canva -- take the platform 180 million people already use and sprinkle AI on top. The AI features aren't best-in-class individually, but the convenience of having them inside your existing design tool is worth a lot. If you already pay for Canva Pro, the AI features are a nice bonus. If you're evaluating it purely as an AI design tool, dedicated alternatives are better.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Canva official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://canva.com",
  status: "active",
  metaTitle: "Canva AI Review 2026: Magic Studio Worth It?",
  metaDescription: "Canva AI (Magic Studio) review. Convenient AI features in the platform you already use, but not best-in-class. Scores, pricing. March 2026.",
};
