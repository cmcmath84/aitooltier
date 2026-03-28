import { ToolReview } from "@/lib/types";

export const sora: ToolReview = {
  slug: "sora",
  name: "Sora",
  tagline: "OpenAI's text-to-video model -- the one everyone was waiting for, now that it's actually available",
  category: "ai-video-generators",
  url: "https://sora.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 5,
    features: 6,
    overall: 6.5,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "ChatGPT Plus",
      price: "$20",
      period: "month",
      features: [
        "50 priority videos/month (720p)",
        "5 second max duration",
        "Access via ChatGPT",
      ],
    },
    {
      plan: "ChatGPT Pro",
      price: "$200",
      period: "month",
      features: [
        "Unlimited relaxed videos",
        "500 priority videos/month (1080p)",
        "Up to 20 second duration",
        "No watermark",
      ],
    },
  ],

  pros: [
    "Visual quality and physical realism are among the best in AI video -- motion and lighting look natural",
    "Understands spatial relationships and physics better than competitors -- objects interact more believably",
    "Prompt comprehension is strong -- it gets what you're describing without needing hyper-specific language",
    "Integrated into ChatGPT so you don't need yet another platform and account",
  ],
  cons: [
    "No free tier at all -- you need at least ChatGPT Plus, and the 50 video limit is tight",
    "The $200/month Pro plan is the only way to get longer videos and no watermark, which is absurd for casual use",
    "Generation times are slow -- expect minutes per clip, not seconds, and sometimes much longer",
    "Still struggles with human hands, text in scenes, and consistent character appearance across clips",
  ],
  knownIssues: [
    {
      description:
        "Characters sometimes change appearance between cuts when generating multi-scene videos with storyboard mode",
      source: "Reddit r/OpenAI",
      date: "2026-03",
    },
    {
      description:
        "Generation queue times can exceed 10 minutes during peak hours for Plus subscribers",
      source: "Reddit r/ChatGPT",
      date: "2026-03",
    },
  ],
  bestFor:
    "Filmmakers and creatives experimenting with AI video who want the most realistic-looking output available.",
  notFor:
    "Anyone who needs affordable, high-volume video generation -- the pricing model doesn't support that.",
  verdict:
    "Sora produces some of the most impressive AI video you can generate today, and the physics understanding is genuinely a step ahead. But OpenAI made some frustrating choices: no free tier, tight limits on the $20 plan, and a $200 jump to get full features. If you're already paying for ChatGPT Pro, Sora is a nice bonus. As a standalone video tool, the value proposition is weak compared to Runway or Kling at similar price points.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "OpenAI Sora official page", dateAccessed: "2026-03-27" },
    { name: "Reddit r/OpenAI", dateAccessed: "2026-03-27" },
    { name: "The Verge Sora review", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://sora.com",
  status: "active",
  metaTitle: "Sora Review 2026: OpenAI's Video Generator -- Worth the Hype?",
  metaDescription:
    "Sora review. Best-looking AI video generation, but no free tier and expensive Pro plan. Realistic physics, slow queues. Scores, pricing. March 2026.",
};
