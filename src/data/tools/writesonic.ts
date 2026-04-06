import { ToolReview } from "@/lib/types";

export const writesonic: ToolReview = {
  slug: "writesonic",
  name: "Writesonic",
  tagline: "AI writing platform for marketing copy, blog posts, and SEO content with built-in search visibility tracking",
  category: "ai-writing-tools",
  url: "https://writesonic.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 6,
    features: 7,
    overall: 7.0,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Limited usage", "GPT-4o mini and Claude Haiku access", "Basic templates"] },
    { plan: "Lite", price: "$39", period: "month", features: ["Long-form blog posts", "SEO content tools", "WordPress integration"] },
    { plan: "Standard", price: "$79", period: "month", features: ["Everything in Lite", "Google Search Console integration", "Google Analytics connection"] },
    { plan: "Professional", price: "$159", period: "month", features: ["100 AI prompts/mo tracking", "Brand presence tracking", "AI platform visibility monitoring"] },
    { plan: "Enterprise", price: "Custom", features: ["Custom AI models", "Personalized onboarding", "Priority support", "Tailored integrations"] },
  ],

  pros: [
    "Solid template library for marketing copy -- landing pages, ads, product descriptions all have dedicated workflows",
    "WordPress integration lets you publish directly from the dashboard, which saves real time",
    "AI search visibility tracking is a unique angle that most writing tools don't offer",
    "Free tier actually lets you test the core features before committing",
  ],
  cons: [
    "Credit system is confusing -- different features burn credits at different rates and unused credits don't roll over",
    "Gets expensive fast; the Lite plan at $39/mo only covers basic content and the good features need $79+",
    "Output quality for long-form content is inconsistent and often needs heavy editing",
    "History of breaking promises to lifetime deal buyers, which doesn't inspire confidence in the company",
  ],
  knownIssues: [
    { description: "Multiple users report being charged after cancelling subscriptions, with slow or absent customer support responses", source: "Trustpilot", date: "2025-12" },
    { description: "AppSumo lifetime deal holders lost access to features they were promised, causing significant backlash", source: "Reddit", date: "2025-06" },
    { description: "Credit consumption rates feel unpredictable -- users run out mid-month without clear tracking of what used their credits", source: "G2 Reviews", date: "2026-01" },
  ],
  bestFor: "Marketing teams that need a one-stop shop for blog posts, ad copy, and SEO content. The template variety and WordPress integration make it practical for high-volume content ops.",
  notFor: "Writers who want high-quality long-form output without heavy editing. You'll get better results from Claude or ChatGPT directly at a fraction of the cost.",
  verdict: "Writesonic tries to be everything -- writer, SEO tool, brand monitor -- and does each piece at about 70%. The marketing copy templates are genuinely useful, and the AI search visibility tracking is forward-thinking. But the confusing credit system, aggressive pricing tiers, and inconsistent long-form quality make it hard to recommend over simpler alternatives. If you're already paying for ChatGPT or Claude, the marginal value here is questionable.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Writesonic official site", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Self Made Millennials review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://writesonic.com",
  status: "active",
  metaTitle: "Writesonic Review 2026: AI Writing Tool Worth the Price?",
  metaDescription: "Writesonic review with honest scores. Good templates, confusing credits, steep pricing. Full breakdown of plans, pros, cons, and issues. April 2026.",
};
