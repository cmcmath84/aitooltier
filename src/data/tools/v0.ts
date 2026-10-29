import { ToolReview } from "@/lib/types";

export const v0: ToolReview = {
  slug: "v0",
  name: "v0 (Vercel)",
  tagline: "Plans as of 2026-10-29: Free (7 messages a day), Plus $30 per user a month (the renamed Team plan), Business $100 per user a month and Enterprise; the $20 Premium plan is closed to new users. ChatGPT Plus and Pro subscribers can build with their ChatGPT plan since 2026-09-29. Vercel's AI app builder: generate React/Next.js UIs from prompts and deploy to Vercel in one click",
  category: "ai-website-builders",
  url: "https://v0.app",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 7,
    features: 8,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["7 messages/day", "$5 one-time credits for new users (existing Free users keep $5 monthly)", "Deploy to Vercel", "Visual Design Mode editing", "GitHub sync"] },
    { plan: "Plus", price: "$30", period: "user/month", features: ["$30 monthly credits per user", "$2 free daily credits on login per user", "Access to all models", "Extra credits shared across the team", "Renamed from Team on 2026-07-21"] },
    { plan: "Business", price: "$100", period: "user/month", features: ["Everything in Plus", "$30 monthly credits per user", "$2 free daily credits on login per user", "Training opt-out by default"] },
    { plan: "Enterprise", price: "Custom", features: ["Everything in Business", "Data never used for training", "SAML SSO and role-based access control", "Priority access with no queues", "Guaranteed support SLAs"] },
    { plan: "Premium (legacy)", price: "$20", period: "month", features: ["Closed to new users", "$20 monthly credits for existing subscribers"] },
  ],

  pros: [
    "ChatGPT Plus and Pro subscribers can connect their plan (since 2026-09-29), so eligible responses on GPT-6 Astra, GPT-5.6 Sol and GPT-5.6 Luna count against ChatGPT instead of v0 credits",
    "Best-in-class for generating React/Next.js components -- the output uses real Tailwind, shadcn/ui, and proper component patterns",
    "Tight Vercel integration: one-click deploy, GitHub sync, and instant preview URLs",
    "Visual Design Mode lets you edit generated UIs without rewriting prompts -- huge for non-developers",
    "Figma imports are genuinely useful -- you can paste a Figma frame and v0 builds it",
    "Output is real, exportable code you can clone into your own repo and own forever",
    "Strong for landing pages, dashboards, marketing sites, and SaaS UI scaffolding",
  ],
  cons: [
    "Credit-based pricing makes costs unpredictable -- a single complex generation can burn through your monthly allowance",
    "Free is capped at 7 messages a day, and new accounts get $5 in credits once rather than monthly, so you'll hit the wall within one or two small projects",
    "Backend code generation (APIs, database wiring) is weaker than the UI generation",
    "Locked into the React/Next.js ecosystem -- no Vue, Svelte, or other framework support",
    "Quality drops on very complex multi-screen apps -- works best for individual components and pages",
  ],
  knownIssues: [
    {
      description: "PLAN CHANGES (2026-07-21 to 2026-10-06, vendor changelog, docs and pricing page): the Team plan was renamed Plus on 2026-07-21 ($30 per user a month with $30 of monthly credits per user and $2 of free daily credits on login). The docs say the $20 Premium plan 'is no longer available to new users' and is being phased out; existing subscribers keep it. New Free users get $5 in credits once ('A one-time allowance does not renew') while existing Free users keep their $5 monthly allowance, and Free carries a 7 message/day limit. Unused monthly credits roll over to the next billing cycle and expire after 65 days. Credits burn at per-model token rates (per 1M input/output): v0 Mini $0.20/$1.20, v0 Pro $2/$10, v0 Max $5/$25, v0 Max Fast $10/$50. On 2026-10-06 personal v0 accounts became team workspaces, with chats, projects and settings migrated automatically.",
      source: "v0.app/pricing + v0.app/docs/pricing + v0.app/changelog (Jul 21 and Oct 6, 2026 entries), fetched 2026-10-29",
      date: "2026-10-06",
    },
    {
      description: "CHATGPT PLANS IN V0 (2026-09-29, vendor changelog): 'ChatGPT Plus and Pro subscribers can now use their ChatGPT subscription to build in v0.' Once connected and enabled, eligible responses count toward the ChatGPT plan instead of v0 credits. Supported models are GPT-6 Astra, GPT-5.6 Sol and GPT-5.6 Luna at Standard speed; Fast mode still uses v0 credits.",
      source: "v0.app/changelog (Sep 29, 2026 entry), fetched 2026-10-29",
      date: "2026-09-29",
    },
    {
      description: "Credit consumption per generation is opaque -- users report being surprised by how fast a $20/mo plan is depleted",
      source: "Reddit r/nextjs",
      date: "2026-03",
    },
    {
      description: "Generated components occasionally use shadcn/ui imports that aren't installed in the target project, causing build errors",
      source: "GitHub issues",
      date: "2026-03",
    },
  ],
  bestFor: "Next.js developers who want to scaffold UI fast, designers who want to convert mockups to working code, and product teams building React-based dashboards or landing pages.",
  notFor: "Anyone using a non-React framework, anyone needing complex backend logic, or anyone with a tight budget who can't stomach unpredictable credit burn.",
  verdict: "v0 is the gold standard for AI-generated React UIs in 2026. The output is genuinely production-grade -- real Tailwind, real shadcn/ui patterns, real exportable code -- not the broken hallucinations you get from generic AI app builders. The Vercel integration makes deployment effortless. The catch is the credit-based pricing: it works great until you start iterating heavily on a complex project, then the bills add up. Best used as a scaffolding tool rather than a full app builder.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "v0 pricing: Free, Plus $30/user, Business $100/user, Enterprise, model token rates", url: "https://v0.app/pricing", dateAccessed: "2026-10-29" },
    { name: "v0 docs: Pricing (Premium closed to new users, one-time Free credits, 65-day rollover)", url: "https://v0.app/docs/pricing", dateAccessed: "2026-10-29" },
    { name: "v0 changelog (Team renamed Plus 2026-07-21, ChatGPT plans 2026-09-29, team workspaces 2026-10-06)", url: "https://v0.app/changelog", dateAccessed: "2026-10-29" },
    { name: "v0.app official site", dateAccessed: "2026-04-08" },
    { name: "v0.app/pricing", dateAccessed: "2026-04-08" },
    { name: "Vercel blog: Updated v0 pricing", dateAccessed: "2026-04-08" },
    { name: "Reddit r/nextjs", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://v0.app",
  status: "active",
  metaTitle: "v0 Review 2026: Vercel's AI Website Builder for React and Next.js",
  metaDescription: "v0 review. Vercel's AI tool for generating React/Next.js UIs with shadcn and Tailwind. Free (7 messages a day), Plus $30/user/mo, Business $100/user/mo, and ChatGPT Plus/Pro plans usable in v0. Scores, pricing, honest take.",
};
