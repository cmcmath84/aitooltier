import { ToolReview } from "@/lib/types";

export const photoroom: ToolReview = {
  slug: "photoroom",
  name: "PhotoRoom",
  tagline: "AI background removal and product photo editor -- built for e-commerce sellers who need clean listings fast",
  category: "ai-photo-editing",
  url: "https://www.photoroom.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 7,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["250 exports/month", "Background removal", "Basic templates", "Watermarked exports"],
    },
    {
      plan: "Pro",
      price: "$13",
      period: "month",
      features: ["No watermark", "Batch editing", "AI product staging", "1,000+ templates", "High-res exports"],
    },
    {
      plan: "Max",
      price: "$35",
      period: "month",
      features: ["Advanced AI models", "Higher batch limits", "More AI credits", "Priority support", "Faster processing"],
    },
  ],

  pros: [
    "Background removal is fast and accurate -- handles hair, transparent objects, and complex edges better than most competitors",
    "Batch editing is a real time-saver for e-commerce sellers with hundreds of product photos",
    "Mobile app works surprisingly well -- you can shoot and edit product photos from your phone",
    "Free tier gives you 250 exports/month, which is enough to try it seriously before paying",
  ],
  cons: [
    "Free exports are watermarked, which makes the free tier useless for actual business use",
    "Pricing has crept up and features have been restricted -- pre-paid users got burned in late 2025 when plans were restructured",
    "AI-generated backgrounds can look artificial on close inspection, especially for lifestyle product shots",
    "Customer support relies heavily on bots and is slow to respond with actual human help",
  ],
  knownIssues: [
    {
      description: "In November 2025, PhotoRoom changed terms for pre-paid customers, adding monthly image limits to plans that were sold as unlimited -- sparking backlash",
      source: "Medium",
      date: "2025-11",
    },
    {
      description: "Batch processing has been reported to downsize images significantly when using certain background templates",
      source: "App Store Reviews",
      date: "2026-01",
    },
    {
      description: "Customer support mostly automated -- users report difficulty reaching a human agent for billing and account issues",
      source: "Trustpilot",
      date: "2026-02",
    },
  ],
  bestFor: "E-commerce sellers, Etsy/Amazon/eBay resellers, and small business owners who need clean product photos at scale. The batch editing alone can save hours per week.",
  notFor: "Photographers who need full creative editing control. PhotoRoom is a product photo factory, not a creative tool. Use Photoshop or Lightroom for actual photo editing.",
  verdict: "PhotoRoom is the best tool for high-volume product photo editing, period. Background removal is nearly flawless, batch mode is a genuine differentiator, and the mobile app means you can shoot and edit from anywhere. The free tier lets you kick the tires before committing. Just be aware that the company has a track record of changing plan terms on existing customers, so read the fine print on what you're actually getting.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "PhotoRoom official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Medium article on TOS changes", dateAccessed: "2026-04-02" },
    { name: "App Store reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.photoroom.com",
  status: "active",
  metaTitle: "PhotoRoom Review 2026: Best AI Product Photo Editor for E-Commerce?",
  metaDescription: "Honest PhotoRoom review. Best-in-class background removal and batch editing for e-commerce. Free tier, fair pricing, but watch the TOS. April 2026.",
};
