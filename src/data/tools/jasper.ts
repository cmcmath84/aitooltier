import { ToolReview } from "@/lib/types";

export const jasper: ToolReview = {
  slug: "jasper",
  name: "Jasper",
  tagline: "AI writing platform built for marketing teams -- templates, brand voice, and campaign workflows",
  category: "ai-writing-tools",
  url: "https://jasper.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 5,
    features: 8,
    overall: 7.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Creator",
      price: "$49",
      period: "month",
      features: ["1 seat", "Brand voice", "SEO mode", "50+ templates"],
    },
    {
      plan: "Pro",
      price: "$69",
      period: "month",
      features: ["Up to 5 seats", "3 brand voices", "Collaboration", "Art generation"],
    },
    {
      plan: "Business",
      price: "Custom",
      features: ["Unlimited seats", "API access", "Custom AI models", "SSO"],
    },
  ],

  pros: [
    "Excellent template library for marketing content -- blog posts, ads, emails, social",
    "Brand Voice feature lets you train it on your company's tone and style",
    "Campaign workflows help teams plan and produce content together",
    "Good Chrome extension for writing anywhere",
  ],
  cons: [
    "Extremely expensive for what it is -- $49/mo when ChatGPT Plus is $20",
    "Under the hood it's mostly GPT-4 with templates, so you're paying a premium for the wrapper",
    "No free tier or free trial makes it hard to evaluate before committing",
    "Quality of output without templates isn't much better than just using ChatGPT directly",
  ],
  knownIssues: [
    {
      description: "Users report Brand Voice feature doesn't always maintain consistency, especially for longer content",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Pricing increased significantly in 2025, alienating solo creators who were on older plans",
      source: "Reddit r/jasper",
      date: "2026-01",
    },
  ],
  bestFor: "Marketing teams at companies with budget who need collaboration features and brand consistency. The templates and workflow tools save time when you're producing lots of marketing content.",
  notFor: "Solo creators, freelancers, or anyone on a budget. You can get 90% of the same results from ChatGPT for $20/mo.",
  verdict: "Jasper was revolutionary when it launched -- it was one of the first AI writing tools. But ChatGPT caught up fast, and now Jasper's main selling point is its marketing-specific templates and team features. At $49-69/mo per person, it's a tough sell unless your team is producing high volumes of marketing content and needs the workflow tools. For everyone else, save your money.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Jasper official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Capterra Reviews", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://jasper.ai",
  status: "active",
  metaTitle: "Jasper AI Review 2026: Is It Worth $49/Month?",
  metaDescription: "Honest Jasper AI review. Great templates but expensive. Is it worth it when ChatGPT costs $20? Scores, pricing breakdown, pros and cons. March 2026.",
};
