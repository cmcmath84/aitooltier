import { ToolReview } from "@/lib/types";

export const luma: ToolReview = {
  slug: "luma",
  name: "Luma Dream Machine",
  tagline: "Fast AI video generator with its own Ray 3 model plus access to Sora 2, Veo 3, and Kling in one interface",
  category: "ai-video-generators",
  url: "https://lumalabs.ai/dream-machine",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 7,
    value: 6.5,
    features: 7.5,
    overall: 7.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["30 generations/mo", "Basic models", "Watermarked output"],
    },
    {
      plan: "Standard",
      price: "$23.99",
      period: "month",
      features: ["150 generations/mo", "All models", "No watermark"],
    },
    {
      plan: "Pro",
      price: "$95.99",
      period: "month",
      features: ["400 generations/mo", "Priority processing", "Commercial license"],
    },
  ],

  pros: [
    "Speed is the real differentiator -- clips generate in under a minute, which makes iteration actually practical",
    "Model aggregation is smart -- access Sora 2, Veo 3, Kling, and Ray 3 from one interface instead of juggling separate tools",
    "Image-to-video is solid -- upload a still and get surprisingly coherent motion from it",
    "The UI is clean and straightforward compared to some competitors that bury features behind confusing menus",
  ],
  cons: [
    "Free tier is barely usable -- 30 generations per month disappears fast when you're iterating on prompts",
    "Quality varies wildly depending on which model you select and how you phrase the prompt",
    "No fine-grained camera or motion controls -- you're at the mercy of how the model interprets your text",
    "Pro plan at $96/mo is expensive for hobbyists, and the 400-generation cap can still feel tight for commercial work",
  ],
  knownIssues: [
    {
      description: "Ray 3 model sometimes produces noticeable morphing artifacts on human faces during movement",
      source: "Reddit r/aivideo",
      date: "2026-03",
    },
    {
      description: "Third-party model availability can be inconsistent -- Sora 2 and Veo 3 options occasionally disappear or have extended queue times",
      source: "Discord community",
      date: "2026-02",
    },
  ],
  bestFor: "Content creators and marketers who need quick video clips and want to compare outputs from multiple AI models without subscribing to each one separately.",
  notFor: "Filmmakers who need precise camera control and consistent characters across shots -- Runway offers more control. Also not for anyone on a tight budget given the pricing.",
  verdict: "Luma Dream Machine's value proposition is speed and model aggregation. Being able to test the same prompt across Ray 3, Sora 2, Veo 3, and Kling from one dashboard is genuinely useful -- it saves you from subscribing to four separate services. The trade-off is that you get less control than dedicated tools like Runway, and the quality ceiling depends on which model you're using. At $24/mo for Standard, it's a reasonable entry point for video experimentation. The Pro tier is harder to justify unless you're doing commercial volume.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "Luma Labs official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-03-31" },
    { name: "Discord community feedback", dateAccessed: "2026-03-31" },
    { name: "YouTube comparisons", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://lumalabs.ai/dream-machine",
  status: "active",
  metaTitle: "Luma Dream Machine Review 2026: Fast AI Video With Multi-Model Access",
  metaDescription: "Luma Dream Machine review. Fast video generation with Ray 3 plus Sora 2, Veo 3, Kling access. Speed vs. quality trade-offs. Scores, pricing. March 2026.",
};
