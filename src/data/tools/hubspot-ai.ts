import { ToolReview } from "@/lib/types";

export const hubspotAi: ToolReview = {
  slug: "hubspot-ai",
  name: "HubSpot AI",
  tagline: "AI baked into HubSpot's CRM and marketing suite -- write emails, score leads, and build reports with prompts",
  category: "ai-marketing-tools",
  url: "https://hubspot.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 6,
    value: 5,
    features: 8,
    overall: 6.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free CRM",
      price: "$0",
      features: [
        "Limited AI features",
        "AI email writer",
        "Basic chatbot",
        "Contact management",
      ],
    },
    {
      plan: "Marketing Hub Starter",
      price: "$20",
      period: "month",
      features: [
        "Email marketing",
        "AI content assistant",
        "Landing pages",
        "Forms",
      ],
    },
    {
      plan: "Marketing Hub Professional",
      price: "$890",
      period: "month",
      features: [
        "Full AI features",
        "Predictive lead scoring",
        "AI-powered reporting",
        "Campaign automation",
        "SEO tools",
      ],
    },
    {
      plan: "Breeze Customer Agent (outcome-based, effective 2026-04-14)",
      price: "$0.50",
      period: "per resolved conversation",
      features: [
        "Pay only when Breeze actually resolves a customer support ticket",
        "Replaced prior per-conversation flat rate of $1.00",
        "Part of HubSpot's 2026 pivot to outcome-based AI pricing",
      ],
    },
    {
      plan: "Breeze Prospecting Agent (outcome-based)",
      price: "$1",
      period: "per qualified lead",
      features: [
        "Pay only when Breeze produces a qualified lead matching your ICP",
        "Replaced prior monthly per-contact model",
        "Effective 2026-04-14",
      ],
    },
  ],

  pros: [
    "AI features are woven throughout the platform -- email drafting, blog posts, social copy, reporting all in one place",
    "Predictive lead scoring uses your actual CRM data, not generic models, so it improves over time",
    "The AI chatbot builder is solid for customer-facing support and lead qualification on your site",
    "Content remix feature lets you turn a blog post into social posts, emails, and ads quickly",
  ],
  cons: [
    "The pricing cliff from Starter ($20/mo) to Professional ($890/mo) is brutal -- most AI features live behind the expensive plans",
    "AI-generated marketing copy is bland and generic without significant prompt engineering and editing",
    "You're locked into HubSpot's ecosystem -- the AI only works with HubSpot data and tools",
    "Setup and onboarding is complex even for experienced marketers -- this isn't a plug-and-play tool",
  ],
  knownIssues: [
    {
      description:
        "AI content assistant sometimes ignores brand voice settings and reverts to generic corporate tone",
      source: "HubSpot Community Forum",
      date: "2026-02",
    },
    {
      description:
        "Predictive lead scoring can produce unreliable scores when CRM data has inconsistent formatting",
      source: "Reddit r/hubspot",
      date: "2026-03",
    },
  ],
  bestFor:
    "Mid-size marketing teams already on HubSpot who want to speed up content creation and lead management.",
  notFor:
    "Small businesses or solopreneurs -- the price tag for meaningful AI features is hard to justify.",
  verdict:
    "HubSpot's AI features are genuinely useful if you're already paying for the Professional tier. The lead scoring and reporting AI are the real standouts. But the massive price jump to access most features, combined with mediocre content generation quality, makes this a tough sell unless HubSpot is already your marketing hub. The AI is a nice addition to HubSpot -- it's not a reason to buy HubSpot.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "HubSpot official site", url: "https://hubspot.com", dateAccessed: "2026-04-17" },
    { name: "MarTech: HubSpot moves to outcome-based Breeze pricing", url: "https://martech.org/hubspot-moves-to-outcome-based-pricing-for-some-breeze-ai-agents/", dateAccessed: "2026-04-17" },
    { name: "G2 Reviews", dateAccessed: "2026-04-17" },
    { name: "Reddit r/hubspot", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://hubspot.com",
  status: "active",
  metaTitle: "HubSpot AI Review 2026: Powerful Marketing AI With a Steep Price Tag",
  metaDescription:
    "HubSpot AI review. Lead scoring, content generation, and reporting AI built into HubSpot CRM. Great features, but $890/mo to unlock them. March 2026.",
};
