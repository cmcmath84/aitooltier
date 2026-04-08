import { ToolReview } from "@/lib/types";

export const v0: ToolReview = {
  slug: "v0",
  name: "v0 (Vercel)",
  tagline: "Vercel's AI app builder -- generate React/Next.js UIs from prompts and deploy to Vercel in one click",
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
    { plan: "Free", price: "$0", features: ["$5 monthly credits", "Deploy to Vercel", "Visual Design Mode editing", "GitHub sync"] },
    { plan: "Premium", price: "$20", period: "month", features: ["$20 monthly credits", "Buy more credits anytime", "Higher upload limits", "Figma imports", "v0 API access"] },
    { plan: "Team", price: "$30", period: "user/month", features: ["Shared credits", "Centralized billing", "Team collaboration", "API access"] },
    { plan: "Business", price: "$100", period: "user/month", features: ["$30 included credits/user", "$2 daily free credits/user", "Training opt-out by default"] },
    { plan: "Enterprise", price: "Custom", features: ["Priority performance", "Dedicated support", "SSO", "Enhanced security"] },
  ],

  pros: [
    "Best-in-class for generating React/Next.js components -- the output uses real Tailwind, shadcn/ui, and proper component patterns",
    "Tight Vercel integration: one-click deploy, GitHub sync, and instant preview URLs",
    "Visual Design Mode lets you edit generated UIs without rewriting prompts -- huge for non-developers",
    "Figma imports are genuinely useful -- you can paste a Figma frame and v0 builds it",
    "Output is real, exportable code you can clone into your own repo and own forever",
    "Strong for landing pages, dashboards, marketing sites, and SaaS UI scaffolding",
  ],
  cons: [
    "Credit-based pricing makes costs unpredictable -- a single complex generation can burn through your monthly allowance",
    "$5 free tier credits run out fast -- you'll hit the wall in 1-2 small projects",
    "Backend code generation (APIs, database wiring) is weaker than the UI generation",
    "Locked into the React/Next.js ecosystem -- no Vue, Svelte, or other framework support",
    "Quality drops on very complex multi-screen apps -- works best for individual components and pages",
  ],
  knownIssues: [
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

  lastReviewedDate: "2026-04-08",
  dataSources: [
    { name: "v0.app official site", dateAccessed: "2026-04-08" },
    { name: "v0.app/pricing", dateAccessed: "2026-04-08" },
    { name: "Vercel blog: Updated v0 pricing", dateAccessed: "2026-04-08" },
    { name: "Reddit r/nextjs", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://v0.app",
  status: "active",
  metaTitle: "v0 Review 2026: Vercel's AI Website Builder for React and Next.js",
  metaDescription: "v0.dev review. Vercel's AI tool for generating React/Next.js UIs with shadcn and Tailwind. Free $5 credits, $20/mo Premium. Scores, pricing, honest take. April 2026.",
};
