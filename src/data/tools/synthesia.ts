import { ToolReview } from "@/lib/types";

export const synthesia: ToolReview = {
  slug: "synthesia",
  name: "Synthesia",
  tagline: "Create talking-head videos with AI avatars -- no camera, no actors, no studio needed. Now on a shared credits model (Basic free, Starter $19, Pro $89 per month) with Syren, an AI video agent that turns one prompt into an on-brand video",
  category: "ai-marketing-tools",
  url: "https://synthesia.io",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 6,
    features: 8,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Basic",
      price: "$0",
      features: [
        "Free allowance: 10 minutes of Studio video creation or dubbing, 3 survey responses, 500 credits/month",
        "1 Syren video (limited promo)",
        "Pre-built libraries, templates, roleplays, surveys",
        "Videos carry a Synthesia watermark",
      ],
    },
    {
      plan: "Starter",
      price: "$19",
      period: "month",
      features: [
        "$9 first month; $14/month billed yearly ($168/year, 15,000 credits/year)",
        "1,250 credits/month on top of the free allowance (up to ~12 min video)",
        "Download your content, remove Synthesia logo, AI Video Assistant",
        "125+ Synthesia AI Avatars, 3 guests",
      ],
    },
    {
      plan: "Pro",
      price: "$89",
      period: "month",
      features: [
        "$49 first month; $59/month billed yearly ($708/year); larger credit tiers available",
        "6,000 credits/month on top of the free allowance (up to ~60 min video)",
        "5 Personal Avatars, 180+ Synthesia AI Avatars, branded video pages, interactive videos",
        "5 guests, priority chat/email support",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited video minutes, custom credit volumes",
        "1-Click Translations into 140+ languages, 240+ stock AI Avatars",
        "Unlimited Personal Avatars, SAML/SSO, live team collaboration, Brand Kits, SCORM export",
        "Dedicated CSM, implementation services",
      ],
    },
  ],

  pros: [
    "Dead simple workflow -- paste a script, pick an avatar, choose a language, and you have a video in minutes. Syren, Synthesia's AI video agent, goes further: describe the video and it builds an on-brand draft from a prompt plus docs, decks, or links",
    "Language support is outstanding -- Enterprise 1-Click Translations cover 140+ languages, with lip-sync that actually matches the audio",
    "Perfect for internal training and onboarding videos where production quality matters less than speed, now with interactive Roleplay and Survey Sessions",
    "Personal avatars (5 on Pro, unlimited on Enterprise) let you clone your own likeness, which is huge for personal branding",
  ],
  cons: [
    "Avatars still have that uncanny valley feel -- viewers can tell it's AI, especially around eye movement and gestures",
    "Credit-based pricing is harder to predict: one credit pool covers video, dubbing, surveys, and Syren, and Synthesia says a 1-minute Syren video 'typically uses 1,000- 2000 credits' -- most of a Starter month's 1,250 credits",
    "Videos look formulaic -- avatar talking to camera with slides behind them gets repetitive quickly",
    "No real control over avatar emotion or body language -- they deliver everything in the same neutral tone",
  ],
  knownIssues: [
    {
      description:
        "PRICING OVERHAUL TO SHARED CREDITS (pricing page, 2026-11-02): 'Credits are now the shared currency across all AI usage-based features - one common pool for everything you create.' Plans are now Basic ($0, 500 credits/month plus a free allowance of 10 minutes of Studio video or dubbing), Starter ($19/month, $9 first month, or $14/month billed yearly at $168/year; 1,250 credits/month), Pro ($89/month, $49 first month, or $59/month billed yearly at $708/year; 6,000 credits/month), and Enterprise (custom). The former Creator plan is now Pro, and the old Free 3-minute / Starter $22 / Creator $67 rows from earlier versions of this page are superseded. Studio Express-1 avatars are 'a paid add-on ($1000/year) for annual plan users only'",
      source: "Synthesia pricing page (synthesia.io/pricing)",
      date: "2026-11-02",
    },
    {
      description:
        "SYREN AI VIDEO AGENT: 'Syren is Synthesia's AI video agent. Describe the video you want and Syren makes it. A 1-min video typically uses 1,000- 2000 credits.' The Syren page ('Introducing Syren: On-Brand AI Video') says to write a prompt and add context -- a doc, deck, YouTube link, or reference video -- and 'Syren will create a video for you in minutes'. Every plan, including Basic, gets limited-time Syren-only promo credits valid for one month (1,000 to 2,000 depending on plan); Syren videos are capped at up to 3 minutes. Launch date not stated on the vendor pages checked",
      source: "Synthesia pricing page; synthesia.io/syren",
      date: "2026-11-02",
    },
    {
      description:
        "Synthesia 3.0 launched 2025-10-01 as a major platform redesign. New AI Playground brings Veo 3.1 and Sora into Synthesia (universal generative-video access from one place). Express-2 engine adds natural gestures and expressions. Customizable avatars with generated outfits/settings. 240+ avatars in 160+ languages. Note: launch date corrected from prior reviewer error (was logged as 2026-04 in earlier sweeps; vendor blog byline 'Victor Riparbelli, October 1, 2025' is canonical)",
      source: "Synthesia blog (synthesia.io/post/synthesia-3-0-the-next-era-of-video, byline 2025-10-01)",
      date: "2025-10-01",
    },
    {
      description:
        "Custom avatars sometimes exhibit noticeable lip-sync drift on longer scripts (5+ minutes)",
      source: "Synthesia Community Forum",
      date: "2026-03",
    },
    {
      description:
        "Some users report render times spiking to 30+ minutes during peak hours for videos over 5 minutes",
      source: "G2 Reviews",
      date: "2026-02",
    },
  ],
  bestFor:
    "Corporate teams producing training, onboarding, internal comms, and roleplay or survey sessions at scale across multiple languages.",
  notFor:
    "Anyone making customer-facing marketing videos where authentic human presence matters, or anyone who needs predictable per-video costs -- the shared credit pool makes heavy Syren use expensive on Starter.",
  verdict:
    "Synthesia is the best tool for a very specific job: creating lots of talking-head videos quickly, especially in multiple languages. For corporate training and internal comms, it's a no-brainer, and the new Syren agent plus Roleplay and Survey Sessions widen what you can make. The pricing has been rebuilt around shared credits -- Basic free, Starter $19, Pro $89 per month -- which is cheaper to start but harder to forecast once you lean on Syren. The uncanny valley problem is still real, and for anything customer-facing, the AI-generated look can actually hurt your brand more than help it. Know what you're using it for before you commit.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Synthesia pricing page", url: "https://www.synthesia.io/pricing", dateAccessed: "2026-11-02" },
    { name: "Synthesia: Introducing Syren", url: "https://www.synthesia.io/syren", dateAccessed: "2026-11-02" },
    { name: "Synthesia homepage", url: "https://www.synthesia.io/", dateAccessed: "2026-11-02" },
    { name: "Synthesia blog", url: "https://www.synthesia.io/blog", dateAccessed: "2026-11-02" },
    { name: "Synthesia: Synthesia 3.0 next era of video (2025-10-01)", url: "https://www.synthesia.io/post/synthesia-3-0-the-next-era-of-video", dateAccessed: "2026-11-02" },
    { name: "Synthesia: Avatars that take action", url: "https://www.synthesia.io/post/synthesia-new-avatars-dont-just-talk-they-take-action", dateAccessed: "2026-04-18" },
    { name: "G2 Reviews", dateAccessed: "2026-04-18" },
    { name: "Trustpilot", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://synthesia.io",
  status: "active",
  metaTitle: "Synthesia Review 2026: AI Video Avatars for Training and Marketing",
  metaDescription:
    "Synthesia review. AI avatar videos with 140+ language translation, the Syren AI video agent, and credit-based plans (Basic free, Starter $19, Pro $89). Great for training, uncanny for marketing.",
};
