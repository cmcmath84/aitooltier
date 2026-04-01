import { ToolReview } from "@/lib/types";

export const klingAi: ToolReview = {
  slug: "kling-ai",
  name: "Kling AI",
  tagline: "Free AI video generation that punches way above its price point -- 60M creators can't all be wrong",
  category: "ai-video-generators",
  url: "https://klingai.com",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 7.5,
    value: 9,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["66 credits/day", "720p output", "Watermark included", "Basic models"],
    },
    {
      plan: "Standard",
      price: "$5.99",
      period: "month",
      features: ["660 credits/mo", "1080p output", "No watermark", "Kling 2.0 access"],
    },
    {
      plan: "Pro",
      price: "$29.99",
      period: "month",
      features: ["3000 credits/mo", "4K output", "Kling 3.0 access", "Priority generation"],
    },
  ],

  pros: [
    "The free tier is genuinely usable -- 66 daily credits is enough to experiment and produce short clips without spending anything",
    "Kling 2.0 and 3.0 models produce surprisingly coherent motion and character consistency for the price",
    "Audio generation built in means you're not bouncing between tools to add sound to your videos",
    "Image-to-video mode is strong -- feed it a still and get believable motion with decent physics",
  ],
  cons: [
    "Free tier watermark is prominent and distracting -- you'll need to pay to use outputs professionally",
    "Quality varies wildly depending on the style you're going for -- photorealistic is decent but anime/cartoon outputs can look rough",
    "Generation queue times on free tier can stretch to several minutes during peak hours",
    "Text rendering in generated videos is still mostly gibberish -- a common AI video weakness but notable here",
  ],
  knownIssues: [
    {
      description: "Content moderation can be overly aggressive, rejecting prompts that seem innocuous to Western users",
      source: "Reddit r/aivideo",
      date: "2026-02",
    },
    {
      description: "Exported videos occasionally have audio sync issues, particularly on longer clips over 10 seconds",
      source: "YouTube creator reviews",
      date: "2026-03",
    },
  ],
  bestFor: "Content creators and social media marketers who need quick video clips without a big budget. The free tier makes it perfect for experimentation, and the paid plans are affordable enough for regular use.",
  notFor: "Professional video producers who need consistent, high-end quality across different styles. If you're doing client work where every frame matters, Veo or Runway are safer bets.",
  verdict: "Kling AI has carved out a smart niche as the 'good enough for most people' AI video tool. The free tier is legitimately generous, and the output quality has improved dramatically with each model version. It won't win any awards for photorealism against Veo or Sora, but for the price -- especially free -- it's hard to complain. The inconsistency across styles and the watermark situation are the main pain points. If you're a creator on a budget who needs video content regularly, Kling is an easy recommendation.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "Kling AI official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-03-31" },
    { name: "YouTube creator reviews", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://klingai.com",
  status: "active",
  metaTitle: "Kling AI Review 2026: Free AI Video Generator With 60M+ Users",
  metaDescription: "Kling AI review. Free tier AI video generation, Kling 2.0/3.0 models, built-in audio. Quality varies but value is unbeatable. Scores, pricing. March 2026.",
};
