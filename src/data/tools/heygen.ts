import { ToolReview } from "@/lib/types";

export const heygen: ToolReview = {
  slug: "heygen",
  name: "HeyGen",
  tagline: "**Nov 2026: HeyGen now ships its own models -- HeyGen Video (2026-09-30) and HeyGen Voice (2026-10-09) -- and Creator and Pro credits now roll over, with Creator $29, Pro $49+ and Business $149 unchanged.** AI avatar videos for marketing and sales -- like Synthesia but with better lip-sync and more personality",
  category: "ai-video-generators",
  url: "https://heygen.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 6,
    features: 8,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "Up to 3 videos a month, watermarked (help center: 1 to 3 depending on region); no monthly credits",
        "Videos up to 1 minute each",
        "One custom video avatar plus stock presenters",
        "For learning / exploring HeyGen",
      ],
    },
    {
      plan: "Creator",
      price: "$29",
      period: "month",
      features: [
        "600 credits/month; credits roll over one month",
        "No watermark, 1080p export",
        "Instant avatar (your own clone); Avatar V with limited usage",
        "Cannot buy add-on credits -- upgrade to Pro to scale",
      ],
    },
    {
      plan: "Pro",
      price: "$49+",
      period: "month",
      features: [
        "1,000 to 100,000 credits/month (tiered), with rollover",
        "All avatars + Avatar V",
        "4K export, videos up to 30 minutes",
        "Seedance 2.5, VEO 3.1 and Nano Banana inside HeyGen",
        "Faster processing",
        "API billed separately (pay-as-you-go API credits)",
      ],
    },
    {
      plan: "Business",
      price: "$149 + $20/seat",
      period: "month",
      features: [
        "1,500 credits/month base (first seat)",
        "$20/month per additional seat",
        "Add-on credits $0.05 each (100-credit blocks, $5 min) + auto-reload",
        "Team controls, SAML/SSO, brand kit; videos up to 60 minutes",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Custom credit volume",
        "Studio-quality avatars",
        "Dedicated support",
        "SOC 2 Type II",
      ],
    },
  ],

  pros: [
    "Lip-sync quality is the best in the AI avatar space -- it's noticeably more natural than Synthesia",
    "Instant Avatar lets you clone yourself in minutes and the resemblance is surprisingly good",
    "Video translate feature dubs your existing videos into other languages with matched lip movements",
    "Template library is extensive and actually usable -- not just filler templates nobody would use",
  ],
  cons: [
    "Credit math is opaque -- a minute of finished video can eat several credits, so the 600-credit Creator plan goes faster than the number suggests",
    "The Creator $29 -> Pro $49 -> Business $149 ladder climbs fast once you need real volume or multiple seats",
    "Avatar gestures and body movement still look robotic, especially during longer monologues",
    "Rendering can be slow -- complex videos with multiple scenes regularly take 15-20 minutes",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-05): this page listed 'API access' as a Pro plan feature. HeyGen's help center says its credit-based Avatar and Video subscriptions 'are separate from API credits (pay-as-you-go) and LiveAvatar plans', and the pricing page links API pricing separately. Pro now lists API billing as separate.",
      source: "HeyGen help center: credit-based pricing plans (help.heygen.com/en/articles/15125761), heygen.com/pricing (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "PRICING CHECK (2026-11-05, vendor-primary): plan prices are unchanged -- Creator $29/mo (600 credits), Pro $49/mo (1,000 credits, tiers up to 100,000), Business $149/mo plus 'Add team members for $20/seat/month' (1,500 credits). New on the pricing page: Creator 'Credits roll over one month'; Pro 'Raise your monthly credits any time, with rollover' and 'Access to Seedance 2.5' (the help center still names Seedance 2.0); Free is shown as '3 videos a month, watermarked', while the help center says the free quota varies 'depending on your region'. The help center still says 'Creator does not support one-time credit purchases.'",
      source: "heygen.com/pricing, help.heygen.com/en/articles/15125761 (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "PRODUCT: HEYGEN VOICE, VOICE TURBO, VOICE MIRRORING (2026-10-09 to 2026-10-28, vendor-primary): HeyGen's October update: 'On October 9, we launched' HeyGen Voice, its in-house voice model, which HeyGen says debuted at #1 on the Artificial Analysis leaderboard (HeyGen's claim, not checked here). Professional Voice Clone is 'a paid add-on launched alongside HeyGen Voice'. HeyGen Voice Turbo (2026-10-21) 'is a lower-cost, lower-latency mode of HeyGen Voice through the API', and 'The Turbo endpoint is free to try through November 30 on shared capacity'. Voice Mirroring (2026-10-28) is speech-to-speech that keeps the original delivery. LiveAvatar added 30 public avatars on 2026-10-07.",
      source: "HeyGen blog: What's new at HeyGen, October 2026 (heygen.com/blog/heygen-october-2026-release), vendor-primary",
      date: "2026-10-28",
    },
    {
      description: "PRODUCT: HEYGEN VIDEO MODEL (2026-09-30, vendor-primary): 'HeyGen Video, our general-purpose video model, launched on September 30.' The API moved to 2K output from 2026-10-06 and single takes of up to 30 seconds from 2026-10-23 (duration depends on mode and settings), and from 2026-10-16 connected assistants can generate HeyGen Video clips through HeyGen MCP.",
      source: "HeyGen blog: What's new at HeyGen, October 2026 (heygen.com/blog/heygen-october-2026-release), vendor-primary",
      date: "2026-09-30",
    },
    {
      description:
        "PRODUCT (2026-05-04): HeyGen formally launched 'Avatar V' with a dedicated announcement post ('Announcing Avatar V: The most realistic AI avatar model in the world'). Mechanics: one 15-second reference recording generates studio-quality video that maintains face / voice / presence across angles, looks, and runtime; identity consistency solved at the model level (not as a post-processing patch); supports long-form video stability without identity drift; multi-look generation separates performance from appearance ('record once, choose from there'); integrates with Seedance 2.0 for cinematic effects. Authored by Holly Xiao (Head of Marketing) on heygen.com/blog/announcing-avatar-v. PRICING NOT DISCLOSED at launch. Prior April product update had previewed Avatar V; this is the formal GA announcement. 'Generative Credits' rename to 'Premium Credits' and unlimited audio-dubbing on paid plans remain from the same April cycle.",
      source: "HeyGen blog: Announcing Avatar V (heygen.com/blog/announcing-avatar-v)",
      date: "2026-05-04",
    },
    {
      description:
        "PRICING MODEL OVERHAUL (legacy 'Unlimited' plans retired after 2026-05-15; existing subscribers are grandfathered while active but cannot switch back once they leave). HeyGen is now fully credit-based, confirmed against the vendor help center on 2026-05-26: Free (1-3 videos, no monthly credits), Creator $29/mo (600 credits), Pro from $49/mo (1,000-100,000 credits, tiered), Business $149/mo first seat + $20/seat (1,500 base credits; add-on credits $0.05 each in 100-credit blocks with auto-reload), Enterprise custom. This supersedes the older Creator $24 / Business $120 numbers from prior sweeps",
      source: "HeyGen help center: credit-based pricing plans (help.heygen.com/en/articles/15125761) + legacy-plan retirement (help.heygen.com/en/articles/9204682)",
      date: "2026-05-15",
    },
    {
      description:
        "Instant Avatar clones sometimes produce audio artifacts or unnatural pauses in certain languages",
      source: "Reddit r/heygen",
      date: "2026-03",
    },
    {
      description:
        "Video translate feature occasionally mistranslates technical terms and proper nouns",
      source: "G2 Reviews",
      date: "2026-02",
    },
  ],
  bestFor:
    "Marketing teams and sales orgs who need personalized video content at scale, especially for multilingual campaigns.",
  notFor:
    "Creators who need full creative control over video production -- this is a template-based tool at its core.",
  verdict:
    "HeyGen edges out Synthesia on lip-sync quality and the Instant Avatar feature is a genuine differentiator for personal branding. The video translation is also a strong unique feature. But the credit-based pricing is frustrating -- you'll burn through your monthly allotment faster than expected, and the Business plan is expensive for what you get. Best for teams doing high-volume personalized video outreach where the per-video time savings justify the cost.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "HeyGen blog: What's new at HeyGen, October 2026", url: "https://www.heygen.com/blog/heygen-october-2026-release", dateAccessed: "2026-11-05" },
    { name: "HeyGen help center: credit-based pricing plans explained", url: "https://help.heygen.com/en/articles/15125761-heygen-credit-based-pricing-plans-explained", dateAccessed: "2026-11-05" },
    { name: "HeyGen: Announcing Avatar V (2026-05-04)", url: "https://www.heygen.com/blog/announcing-avatar-v", dateAccessed: "2026-05-13" },
    { name: "HeyGen blog: product updates", url: "https://www.heygen.com/blog/category/product-updates", dateAccessed: "2026-11-05" },
    { name: "HeyGen pricing page", url: "https://www.heygen.com/pricing", dateAccessed: "2026-11-05" },
    { name: "G2 Reviews", dateAccessed: "2026-04-18" },
    { name: "Reddit r/heygen", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://heygen.com",
  status: "active",
  metaTitle: "HeyGen Review 2026: AI Video Avatars With Best-in-Class Lip Sync",
  metaDescription:
    "HeyGen review (Nov 2026). AI avatar videos with top lip-sync, instant cloning, video translation, Avatar V, plus in-house HeyGen Video and HeyGen Voice models. Credit-based: Creator $29, Pro $49+, Business $149. Scores + pricing.",
};
