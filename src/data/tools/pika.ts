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
      features: ["80 video credits/mo", "Pika 2.5 access", "Watermarked"],
    },
    {
      plan: "Standard",
      price: "$8",
      period: "month (billed yearly)",
      features: ["700 credits/mo", "No watermarks", "Commercial use", "Pikaframes + Pikascenes"],
    },
    {
      plan: "Pro",
      price: "$28",
      period: "month (billed yearly)",
      features: ["2,300 credits/mo", "Priority processing", "Higher resolutions"],
    },
    {
      plan: "Fancy",
      price: "$76",
      period: "month (billed yearly)",
      features: ["6,000 credits/mo", "Highest credit tier", "All tools incl. Pikaformance"],
    },
  ],

  pros: [
    "Genuinely useful free tier (80 credits/mo on Pika 2.5) lets you actually experiment before paying",
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
      description: "Pika's featured product (confirmed via pika.art 2026-05-26) is the Pikaformance model -- image-to-video with hyper-real expressions synced to audio (sing, speak, rap, etc.) at near real-time speed. Vendor specs: 720p output, 3 credits/second, audio up to 10s or 30s depending on tier. The general model is Pika 2.5; older text-to-video flows still work but Pikaformance is the headline feature. Plan pricing was also refreshed (Free 80 credits; Standard $8, Pro $28, Fancy $76 billed yearly)",
      source: "pika.art + pika.art/pricing (vendor)",
      date: "2026-05-26",
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

  lastReviewedDate: "2026-05-26",
  dataSources: [
    { name: "Pika official site (Pikaformance feature)", url: "https://pika.art", dateAccessed: "2026-05-26" },
    { name: "Pika pricing page", url: "https://pika.art/pricing", dateAccessed: "2026-05-26" },
    { name: "Reddit r/pika", dateAccessed: "2026-05-02" },
  ],
  affiliateUrl: "https://pika.art",
  status: "active",
  metaTitle: "Pika Review 2026: Best Budget AI Video Generator",
  metaDescription: "Pika review. Generous free tier, easy to use, great for social media -- but not Runway quality. Full scores and pricing. March 2026.",
};
