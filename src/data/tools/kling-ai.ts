import { ToolReview } from "@/lib/types";

export const klingAi: ToolReview = {
  slug: "kling-ai",
  name: "Kling AI",
  tagline: "Free AI video generation that punches way above its price point -- Kling 3.0 (Feb 5 2026) brings native 4K, multi-shot storyboards, and 15s synchronized audio clips",
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
    {
      plan: "Ultra",
      price: "$180",
      period: "month",
      features: ["Raised from $128 to $180 in Jan 2026 (+41%)", "Highest concurrent-job cap", "Priority render queue", "Used for heavy pro workflows"],
    },
  ],

  pros: [
    "The free tier remains genuinely usable -- 66 daily credits is enough to experiment and produce short clips without paying anything, rare in the 2026 video-gen landscape",
    "Kling 3.0 (Feb 5 2026) brings native 4K, multi-shot storyboards, and 15s clips with native audio -- making it a legitimate top alternative alongside Veo 3.1 and Seedance 2.0 in the post-Sora shutdown landscape",
    "Multimodal I/O (text / image / audio / video inputs all supported) is unusually flexible -- image-to-video mode in particular produces believable motion with decent physics",
    "Credit-based pricing at $5.99/mo Standard and $29.99/mo Pro undercuts Veo/Runway significantly if you can live with the occasional style inconsistency",
  ],
  cons: [
    "Free tier watermark is prominent and distracting -- you'll need to pay to use outputs professionally",
    "Quality varies wildly depending on the style you're going for -- photorealistic is decent but anime/cartoon outputs can look rough",
    "Generation queue times on free tier can stretch to several minutes during peak hours",
    "Text rendering in generated videos is still mostly gibberish -- a common AI video weakness but notable here",
  ],
  knownIssues: [
    {
      description: "Ultra tier jumped from $128/mo to $180/mo in January 2026 -- a 41% price hike in under six months. Standard and Pro tiers held, but if you're a power user the economics of Ultra have shifted materially; Veo 3.1 Lite + Seedance 2.0 + Runway Gen-3 are the obvious post-Sora alternatives to price-check against",
      source: "Costbench, BestVideoGenerationAI pricing trackers",
      date: "2026-01",
    },
    {
      description: "Kuaishou's Terms of Service grant the company rights to use user-generated content for training future Kling models. Not unique to Kling (Runway, Pika, Suno have similar clauses) but worth knowing before uploading client work. The US / China jurisdictional angle adds an extra compliance consideration for enterprise buyers vs Veo or Runway",
      source: "Kling AI Terms of Service, comparison reviews",
      date: "2026-04",
    },
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

  lastReviewedDate: "2026-04-21",
  dataSources: [
    { name: "Kling AI official site", url: "https://klingai.com", dateAccessed: "2026-04-21" },
    { name: "Costbench: Kling pricing tracker", url: "https://costbench.com/software/ai-video-generators/kling/", dateAccessed: "2026-04-21" },
    { name: "BestVideoGenerationAI: Kling pricing 2026", url: "https://bestvideogenerationai.com/blog/kling-ai-pricing", dateAccessed: "2026-04-21" },
    { name: "Kuaishou IR: Kling 3.0 launch", url: "https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be", dateAccessed: "2026-04-16" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://klingai.com",
  status: "active",
  metaTitle: "Kling AI Review 2026: Kling 3.0 (Feb 2026) Native 4K AI Video Generator",
  metaDescription: "Kling AI review. Kling 3.0 brings native 4K, multi-shot storyboards, 15s audio clips. Free 66 credits/day. Top Sora alternative in 2026. Scores, pricing.",
};
