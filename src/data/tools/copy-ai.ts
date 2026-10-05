import { ToolReview } from "@/lib/types";

export const copyAi: ToolReview = {
  slug: "copy-ai",
  name: "Copy.ai",
  tagline: "Copy.ai now sells itself as GTM AI -- a go-to-market workflow platform priced per team, not the $36 solo copywriting tool it used to be. **The pricing page no longer lists a free plan or the old Starter/Advanced tiers: the entry plan is Chat at $29/month ($24 annual) for 5 seats, and workflow credits only start at Growth, $1,000/month billed annually.** Short-form copy is still what the templates do best.",
  category: "ai-writing-tools",
  url: "https://copy.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Chat (verified 2026-10-05)",
      price: "$29",
      period: "month ($24/month billed $288/year, 20% saving)",
      features: ["5 seats", "Unlimited words in Chat", "Unlimited Chat Projects", "Access to OpenAI, Anthropic and Gemini models", "No workflow credits -- Workflows start at Growth"],
    },
    {
      plan: "Growth (verified 2026-10-05)",
      price: "$1,000",
      period: "month, billed $12,000/year",
      features: ["75 seats", "Unlimited words in Chat", "20K Workflow Credits/month"],
    },
    {
      plan: "Expansion (verified 2026-10-05)",
      price: "$2,000",
      period: "month, billed $24,000/year -- via the accounts team",
      features: ["150 seats", "Unlimited words in Chat", "45K Workflow Credits/month"],
    },
    {
      plan: "Scale (verified 2026-10-05)",
      price: "$3,000",
      period: "month, billed $36,000/year -- via the accounts team",
      features: ["200 seats", "Unlimited words in Chat", "75K Workflow Credits/month"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Guided Jumpstart implementation", "API access and bulk workflow runs", "20+ tech integrations", "Unlimited customizable Workflows", "Designated account and support team", "Enterprise-grade security"],
    },
  ],

  pros: [
    "Chat at $29/month gives a five-person team unlimited words across OpenAI, Anthropic and Gemini models in one place",
    "Great for short-form copy: headlines, product descriptions, ad copy, social posts",
    "Workflows let you chain multiple AI steps into a repeatable go-to-market process (account plans, SEO briefs, outreach sequences)",
    "Clean interface that is easy to pick up without a tutorial",
  ],
  cons: [
    "The pricing page no longer lists a free plan -- the only way in is a trial CTA or the $29/month Chat plan, so the old 2,000-free-words tier is gone",
    "Workflow credits do not exist below Growth at $1,000/month billed annually ($12,000 up front) -- the automation that made Copy.ai interesting is now priced for sales and marketing teams, not individuals",
    "Long-form content (blog posts, articles) quality is mediocre",
    "The GTM AI positioning means the product is drifting away from the simple copywriting templates most people arrive for",
  ],
  knownIssues: [
    {
      description: "PRICING RESET TO A TEAM-FIRST GTM AI LADDER -- NO FREE PLAN, NO STARTER OR ADVANCED TIERS ON THE PRICING PAGE (verified 2026-10-05, vendor-primary): copy.ai/pricing now lists Chat ($29/month, or $24/month billed $288/year; 5 seats, unlimited words and projects in Chat, OpenAI/Anthropic/Gemini models), Growth ($1,000/month billed $12,000/year; 75 seats, 20K workflow credits/month), Expansion ($2,000/month billed $24,000/year; 150 seats, 45K credits) and Scale ($3,000/month billed $36,000/year; 200 seats, 75K credits), plus a custom Enterprise plan with guided implementation, API access and bulk workflow runs. The free plan (2,000 words/month), Starter ($36) and Advanced ($186) tiers this page carried from the March 2026 review are not on the vendor page; the site still shows a 'Try for free' CTA but no free plan is described. The site brands the platform as 'GTM AI' and cites '17 million users'. Hands-on quality notes from March were not re-tested.",
      source: "Copy.ai pricing page (copy.ai/pricing) -- fetched 2026-10-05 via WebFetch and curl with browser UA",
      date: "2026-10-05",
    },
    {
      description: "Workflow automations occasionally timeout on complex multi-step chains",
      source: "Copy.ai community",
      date: "2026-03",
    },
  ],
  bestFor: "Sales and marketing teams who want shared AI chat plus repeatable go-to-market workflows -- product descriptions, email sequences, ad variations, account research -- and can justify a per-team subscription.",
  notFor: "Solo writers looking for a free or cheap copywriting tool (there is no free plan now and workflows start at $12,000/year), and long-form writers, who should use Claude or ChatGPT.",
  verdict: "Copy.ai has repriced itself out of the hobbyist market. The $29/month Chat plan is a reasonable multi-model chat workspace for a small team, but the Workflows that made it distinctive now begin at $1,000/month billed annually. If you are a GTM team that will actually run thousands of workflow credits a month, the ladder makes sense; if you came for quick marketing copy, a general-purpose chatbot does the same job for a fifth of the price.",

  lastReviewedDate: "2026-10-05",
  dataSources: [
    { name: "Copy.ai pricing page -- Chat $29/$24, Growth $1,000, Expansion $2,000, Scale $3,000, Enterprise custom; no free plan listed", url: "https://www.copy.ai/pricing", dateAccessed: "2026-10-05" },
    { name: "Copy.ai official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://copy.ai",
  status: "active",
  metaTitle: "Copy.ai Review 2026: GTM AI Pricing, No Free Plan, Chat $29 to Scale $3,000",
  metaDescription: "Copy.ai review, October 2026. The pricing page now starts at Chat ($29/month, 5 seats) and workflow credits only begin at Growth ($1,000/month billed annually); the free plan and $36 Starter tier are gone. Still good for short-form marketing copy, weak on long-form. Scores and verdict.",
};
