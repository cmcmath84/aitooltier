import { ToolReview } from "@/lib/types";

export const pika: ToolReview = {
  slug: "pika",
  name: "Pika",
  tagline: "Fast, fun AI video generator that's easier on your wallet than Runway",
  category: "ai-video-generators",
  url: "https://pika.art",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["250 credits/mo", "Basic generation", "Watermarked"],
    },
    {
      plan: "Standard",
      price: "$10",
      period: "month",
      features: ["700 credits/mo", "No watermarks", "Commercial use"],
    },
    {
      plan: "Pro",
      price: "$35",
      period: "month",
      features: ["2,000 credits/mo", "Priority processing", "4K"],
    },
  ],

  pros: [
    "Most generous free tier in AI video -- 250 credits lets you actually experiment",
    "Super intuitive interface -- type a prompt and get a video. That simple.",
    "Generation speed is faster than Runway for comparable quality",
    "Fun creative tools: lip sync, sound effects, video extend",
  ],
  cons: [
    "Video quality is noticeably below Runway Gen-3 for cinematic output",
    "Clips are short -- 3-4 seconds is the sweet spot, longer ones get weird",
    "Less control over the output compared to Runway's creative suite",
    "Consistency between frames degrades on complex scenes",
  ],
  knownIssues: [
    {
      description: "Pika's current featured product (per pika.art homepage as of 2026-05-02) is the Pikaformance model -- image-to-video with hyper-real expressions synced to audio (sing, speak, rap, etc.) at near real-time generation speed. This is the public surface of Pika today; older Pika 2.x text-to-video flows still work but Pikaformance is the headline feature",
      source: "pika.art (vendor homepage)",
      date: "2026-05-02",
    },
    {
      description: "Lip sync feature produces uncanny results on real human faces",
      source: "Reddit r/pika",
      date: "2026-03",
    },
  ],
  bestFor: "Social media creators, anyone experimenting with AI video, and budget-conscious users. The free tier is genuinely useful and the paid plans are reasonable.",
  notFor: "Professional filmmakers or anyone who needs the highest possible video quality. Use Runway for that.",
  verdict: "Pika is the best entry point to AI video generation. It's easier to use, cheaper, and more generous with free credits than Runway. The quality gap is real -- Runway Gen-3 looks noticeably better -- but for social media content and experimentation, Pika is more than good enough. Start here, upgrade to Runway when you need to.",

  lastReviewedDate: "2026-05-02",
  dataSources: [
    { name: "Pika official site (Pikaformance feature)", url: "https://pika.art", dateAccessed: "2026-05-02" },
    { name: "Reddit r/pika", dateAccessed: "2026-05-02" },
  ],
  affiliateUrl: "https://pika.art",
  status: "active",
  metaTitle: "Pika Review 2026: Best Budget AI Video Generator",
  metaDescription: "Pika review. Generous free tier, easy to use, great for social media -- but not Runway quality. Full scores and pricing. March 2026.",
};
