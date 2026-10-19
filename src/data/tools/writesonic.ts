import { ToolReview } from "@/lib/types";

export const writesonic: ToolReview = {
  slug: "writesonic",
  name: "Writesonic",
  tagline: "AI search visibility (GEO) platform that tracks your brand in ChatGPT, Gemini and AI Overviews, with AI articles and SEO audits bundled in",
  category: "ai-writing-tools",
  url: "https://writesonic.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 6,
    features: 7,
    overall: 7.0,
  },

  hasFreeTier: false,
  pricing: [
    { plan: "Starter", price: "$79", period: "month (billed yearly; save $240/yr vs monthly)", features: ["Tracks ChatGPT, Gemini and Google AI Overviews: 50 prompts, 50 answers daily", "15 AI articles/month, 10 site audits (100 pages each)", "1 user, 1 project; 10 agentic-workflow trial runs"] },
    { plan: "Basic", price: "$199", period: "month (billed yearly; save $600/yr)", features: ["100 prompts, 300 answers tracked daily", "25 AI articles/month, 20 site audits (1,200 pages each)", "2 users, 1 project; 50 workflow trial runs"] },
    { plan: "Growth", price: "$399", period: "month (billed yearly; save $1,200/yr)", features: ["200 prompts, 600 answers tracked daily", "Sentiment analysis + Action Center trial", "50 AI articles/month, 50 site audits (2,500 pages each)", "3 users, 2 projects"] },
    { plan: "Enterprise", price: "Custom", features: ["All 9 AI platforms tracked", "Full Action Center and agentic workflows", "SSO/SAML, SOC 2 Type II, HIPAA", "Dedicated AI search strategist"] },
  ],

  pros: [
    "Solid template library for marketing copy -- landing pages, ads, product descriptions all have dedicated workflows",
    "WordPress integration lets you publish directly from the dashboard, which saves real time",
    "AI search visibility tracking is a unique angle that most writing tools don't offer",
    "Free trial with no credit card, so you can see your own AI-visibility numbers before paying",
  ],
  cons: [
    "Credit system is confusing -- different features burn credits at different rates and unused credits don't roll over",
    "Much pricier than it was: the entry plan is now $79/mo billed yearly (was $39), sentiment analysis needs the $399 Growth plan, and the full Action Center is Enterprise-only",
    "Output quality for long-form content is inconsistent and often needs heavy editing",
    "History of breaking promises to lifetime deal buyers, which doesn't inspire confidence in the company",
  ],
  knownIssues: [
    { description: "REPOSITIONED AS A GEO PLATFORM, PRICES ROUGHLY DOUBLED (pricing check 2026-10-19): writesonic.com now titles itself an **AI Search Visibility Platform**, and its plans are built around tracking how ChatGPT, Gemini and Google AI Overviews mention your brand, with AI articles and site audits as allowances. The Lite $39 / Standard $79 / Professional $159 lineup and the free plan this page showed since April are gone. Current plans, billed yearly: **Starter $79/mo, Basic $199/mo, Growth $399/mo, Enterprise custom** (monthly billing costs more -- the cards say save $240 / $600 / $1,200 a year). There is a free trial with no credit card but no free plan on the pricing page. Extra users are $50/user/month.", source: "writesonic.com/pricing", date: "2026-10-19" },
    { description: "Multiple users report being charged after cancelling subscriptions, with slow or absent customer support responses", source: "Trustpilot", date: "2025-12" },
    { description: "AppSumo lifetime deal holders lost access to features they were promised, causing significant backlash", source: "Reddit", date: "2025-06" },
    { description: "Credit consumption rates feel unpredictable -- users run out mid-month without clear tracking of what used their credits", source: "G2 Reviews", date: "2026-01" },
  ],
  bestFor: "Marketing and SEO teams whose real question is 'what do ChatGPT and AI Overviews say about us?' -- Writesonic now bundles AI-visibility tracking with articles and site audits, which suits teams that want GEO and SEO content in one bill.",
  notFor: "Anyone who just wants an AI writer. At $79+/mo billed yearly, you are paying mostly for visibility tracking; for drafting copy, Claude or ChatGPT directly costs a fraction of that.",
  verdict: "Writesonic has picked a lane: it is now an AI search visibility (GEO) platform first and a writing tool second, with article generation and SEO audits included as allowances. That focus makes more sense than the old do-everything pitch, but the price of entry has roughly doubled to $79/mo billed yearly, the most useful pieces (sentiment, Action Center) sit on the $399 and Enterprise tiers, and there is no longer a free plan. Judge it against dedicated AI-visibility trackers, not against ChatGPT -- as a pure writing tool it is now hard to justify.",

  lastReviewedDate: "2026-10-19",
  dataSources: [
    { name: "Writesonic pricing", url: "https://writesonic.com/pricing", dateAccessed: "2026-10-19" },
    { name: "Writesonic official site", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Self Made Millennials review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://writesonic.com",
  status: "active",
  metaTitle: "Writesonic Review 2026: Now an AI Search Visibility Platform -- Worth $79+?",
  metaDescription: "Writesonic review: now a GEO / AI search visibility platform with AI articles bundled. Starter $79, Basic $199, Growth $399 (yearly). Pros, cons, issues. October 2026.",
};
