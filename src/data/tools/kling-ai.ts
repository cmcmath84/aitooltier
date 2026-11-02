import { ToolReview } from "@/lib/types";

export const klingAi: ToolReview = {
  slug: "kling-ai",
  name: "Kling AI",
  tagline: "Kuaishou's AI video generator, now at kling.ai, with a free tier that punches above its price point -- Kling 4.0 (rolled out to all users 2026-10-15) adds native 30s generation, Omni reference, and multiple keyframes, building on Kling 3.0 (Feb 5 2026; 15s clips with native audio) and native 4K video (added 2026-04-23)",
  category: "ai-video-generators",
  url: "https://kling.ai",

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
      plan: "Basic (Free)",
      price: "$0",
      features: [
        "Monthly free credits for non-subscribers (claimed on login, valid 31 days)",
        "Daily bonus credits are a subscriber-only perk",
        "1 video per generation",
        "Watermark removal and commercial use require a paid plan",
      ],
    },
    {
      plan: "Standard",
      price: "$10",
      period: "month",
      features: [
        "$6.99 first month (30% off), then $8.80/month on the current monthly promo (offer valid until Dec 31 2026)",
        "660 credits/month ($1.06 per 100 credits)",
        "Yearly: $79.20/year (list $120)",
        "1080p/4K video generation, watermark removal, commercial use",
      ],
    },
    {
      plan: "Pro",
      price: "$37",
      period: "month",
      features: [
        "$25.99 first month, then $32.56/month on the current monthly promo",
        "3,000 credits/month ($0.87 per 100 credits)",
        "Yearly: $293.04/year (list $444)",
        "Priority access to new features",
      ],
    },
    {
      plan: "Premier",
      price: "$207",
      period: "month",
      features: [
        "$144.99 first month, then $181.99/month on the current monthly promo",
        "18,000 credits/month ($0.81 per 100 credits); 8K / 18K / 28K / 38K credit options",
        "Yearly: $1,639.99/year (list $2,484)",
        "Priority access to new features",
      ],
    },
    {
      plan: "Ultra+",
      price: "$619",
      period: "month",
      features: [
        "$432.99 first month, then $544.99/month on the current monthly promo",
        "57,000 credits/month ($0.76 per 100 credits)",
        "Yearly: $4,902.99/year (list $7,428)",
        "Beta test invites (if applicable)",
      ],
    },
  ],

  pros: [
    "The free tier remains usable -- non-subscribers get a monthly free-credit allotment on login, enough to experiment with short clips before paying, which is rare in the 2026 video-gen landscape",
    "Kling 4.0 (2026-10-15) adds native 30s generation, Omni reference, and multiple keyframes; Kling 3.0 (Feb 5 2026) had already brought 15s clips with native multilingual audio and multi-shot storyboards, and native 4K video arrived 2026-04-23 -- keeping Kling a legitimate top alternative alongside Veo and Seedance",
    "Multimodal I/O (text / image / audio / video inputs all supported) is unusually flexible -- image-to-video mode in particular produces believable motion with decent physics",
    "Credit-based pricing starts low -- Standard is $10/month list ($6.99 first month, $8.80/month on the promo running through Dec 31 2026) and yearly billing cuts it to $79.20/year",
  ],
  cons: [
    "Free tier watermark is prominent and distracting -- watermark removal and commercial use are paid-plan benefits",
    "Quality varies wildly depending on the style you're going for -- photorealistic is decent but anime/cartoon outputs can look rough",
    "Generation queue times on free tier can stretch to several minutes during peak hours",
    "Text rendering in generated videos is still mostly gibberish -- a common AI video weakness but notable here",
    "Pricing is promo-heavy -- list prices ($10 / $37 / $207 / $619 per month) sit well above the first-month and promo rates, and the current offer is dated to Dec 31 2026",
  ],
  knownIssues: [
    {
      description: "Plan lineup restructured (checked 2026-11-02): kling.ai lists Basic (free), Standard ($10/mo list), Pro ($37), Premier ($207) and Ultra+ ($619), with 30% off the first month and a 12%-off monthly / 34%-off yearly promotion valid until Dec 31 2026. The old Standard $5.99 / Pro $29.99 prices and the Ultra tier (raised from $128 to $180/mo in January 2026) no longer appear; the closest high tiers are Premier (18,000 credits) and Ultra+ (57,000 credits). Daily bonus credits are now a subscriber perk -- non-subscribers get monthly free credits valid for 31 days, so the earlier daily free-credit figure on this page no longer applies",
      source: "Kling AI membership page (kling.ai/app/membership/membership-plan)",
      date: "2026-11-02",
    },
    {
      description: "Domain change: klingai.com now redirects to kling.ai; the app, membership page and release history all live under kling.ai",
      source: "kling.ai",
      date: "2026-11-02",
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
  bestFor: "Content creators and social media marketers who need quick video clips without a big budget. The free tier makes it perfect for experimentation, and the entry paid plans are affordable enough for regular use.",
  notFor: "Professional video producers who need consistent, high-end quality across different styles. If you're doing client work where every frame matters, Veo or Runway are safer bets.",
  verdict: "Kling AI has carved out a smart niche as the 'good enough for most people' AI video tool. The free tier still lets you experiment, and output quality has improved with each model version -- Kling 4.0 (October 2026) adds native 30s generation and keyframe control on top of 3.0's native audio and 4K. It won't win any awards for photorealism against Veo, but for the price it's hard to complain. The inconsistency across styles, the watermark on free output, and promo-heavy list pricing are the main pain points. If you're a creator on a budget who needs video content regularly, Kling is an easy recommendation.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Kling AI official site", url: "https://kling.ai", dateAccessed: "2026-11-02" },
    { name: "Kling AI release history (Kling 4.0, 2026-10-15)", url: "https://kling.ai/release-note/release-history", dateAccessed: "2026-11-02" },
    { name: "Kling AI membership plans", url: "https://kling.ai/app/membership/membership-plan", dateAccessed: "2026-11-02" },
    { name: "Kling AI blog: Kling 4.0 at Work", url: "https://kling.ai/blog/kling4-work-creative-vision-production", dateAccessed: "2026-11-02" },
    { name: "Kuaishou IR: Kling 3.0 launch", url: "https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be", dateAccessed: "2026-11-02" },
    { name: "Costbench: Kling pricing tracker", url: "https://costbench.com/software/ai-video-generators/kling/", dateAccessed: "2026-04-21" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://kling.ai",
  status: "active",
  metaTitle: "Kling AI Review 2026: Kling 4.0 (Oct 2026) AI Video Generator, Plans from $10/mo",
  metaDescription: "Kling AI review. Kling 4.0 (Oct 15 2026) adds native 30s generation, Omni reference, multiple keyframes. Plans: Standard $10, Pro $37, Premier $207, Ultra+ $619 list. Free monthly credits. Scores, pricing.",
};
