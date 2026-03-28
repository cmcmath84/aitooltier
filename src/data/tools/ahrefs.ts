import { ToolReview } from "@/lib/types";

export const ahrefs: ToolReview = {
  slug: "ahrefs",
  name: "Ahrefs",
  tagline: "The SEO toolset that backlink nerds swear by -- massive data, clean UI, and now with AI writing baked in",
  category: "ai-seo-tools",
  url: "https://ahrefs.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 6,
    features: 9,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Webmaster Tools only", "Limited site audit", "Basic data"],
    },
    {
      plan: "Lite",
      price: "$129",
      period: "month",
      features: ["500 credits/mo", "1 user", "Site Explorer", "Keywords Explorer"],
    },
    {
      plan: "Standard",
      price: "$249",
      period: "month",
      features: ["Unlimited projects", "Content Explorer", "SERP history", "AI writing tools"],
    },
    {
      plan: "Advanced",
      price: "$449",
      period: "month",
      features: ["Everything in Standard", "Looker Studio integration", "API access"],
    },
  ],

  pros: [
    "Backlink database is the largest and most accurate in the industry -- this is where Ahrefs truly dominates",
    "Site Explorer gives you a complete picture of any domain's organic traffic, top pages, and link profile in one view",
    "Content Explorer helps you find content gaps and link-building opportunities that other tools miss",
    "The UI is clean and fast -- compared to SEMrush's cluttered interface, Ahrefs feels like a breath of fresh air",
  ],
  cons: [
    "Pricing is brutal -- $129/month for the Lite plan with only 500 credits means you'll burn through data fast",
    "The credit system on Lite and Standard plans is confusing and restrictive, every click costs you",
    "AI content features feel tacked on and can't compete with dedicated AI writing tools",
    "Rank tracking is competent but not as feature-rich as dedicated rank trackers or even SEMrush's offering",
  ],
  knownIssues: [
    {
      description: "Credit usage on Lite plan is opaque -- users report running out of credits mid-month without clear tracking",
      source: "Reddit r/SEO",
      date: "2026-03",
    },
    {
      description: "Keyword difficulty scores sometimes disagree significantly with actual ranking difficulty for long-tail terms",
      source: "Reddit r/bigseo",
      date: "2026-02",
    },
  ],
  bestFor: "SEO professionals and agencies who need the best backlink data and competitive analysis available.",
  notFor: "Small businesses or bloggers on a budget -- the pricing is hard to justify unless SEO is your primary growth channel.",
  verdict: "Ahrefs is the gold standard for backlink analysis and competitive research. The data quality is genuinely best-in-class, and the interface makes complex SEO data approachable. But the pricing is a real barrier -- $129/month with credit limits means even the entry plan requires careful usage. The newer AI features are fine but nothing special. If backlinks and competitive analysis are central to your work, Ahrefs is worth the investment. If you mostly need keyword research and on-page tools, SEMrush might give you more for less.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Ahrefs official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/SEO", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://ahrefs.com",
  status: "active",
  metaTitle: "Ahrefs Review 2026: Best Backlink Tool, But Is the Price Worth It?",
  metaDescription: "Ahrefs review. Industry-leading backlink data, site explorer, and competitive analysis. But at $129+/month, is it worth it? Scores, pricing. March 2026.",
};
