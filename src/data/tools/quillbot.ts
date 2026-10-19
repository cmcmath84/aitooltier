import { ToolReview } from "@/lib/types";

export const quillbot: ToolReview = {
  slug: "quillbot",
  name: "QuillBot",
  tagline: "AI-powered paraphrasing and grammar tool used by millions of students and writers",
  category: "ai-writing-tools",
  url: "https://quillbot.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "Paraphrase up to 100 words in 2 modes",
        "Basic grammar fixes",
        "Humanizer up to 100 words (limited usage)",
        "Basic summaries and limited AI Detector",
      ],
    },
    {
      plan: "Premium",
      price: "$19.95",
      period: "month (billed monthly)",
      features: [
        "Full paraphrasing access in unlimited modes",
        "Advanced grammar recommendations",
        "Full Humanizer and AI Detector access",
        "Custom summaries",
        "Plagiarism prevention",
        "Also sold quarterly ($39.95) and semi-annually ($79.95)",
      ],
    },
    {
      plan: "Premium (Annual)",
      price: "$8.33",
      period: "month (billed yearly)",
      features: [
        "All Premium features",
        "Billed $99.95/year",
        "2-year plan: $159.95 ($6.66/mo)",
      ],
    },
    {
      plan: "Team",
      price: "Contact sales",
      features: [
        "Everything in Premium",
        "Usage metrics and user management dashboard",
        "Centralized billing and data controls",
      ],
    },
  ],

  pros: [
    "Dead simple to use -- paste text, pick a mode, click paraphrase",
    "Chrome extension and Word/Google Docs integrations make it easy to use where you already write",
    "Free tier is genuinely useful for light use, not just a teaser",
    "Annual pricing is still reasonable at $99.95/year ($8.33/mo), though it has doubled from the ~$50/year it used to be",
  ],
  cons: [
    "Paraphrased output can sound awkward or unnatural, especially in Creative/Formal modes",
    "100-word paraphrase limit (2 modes) on the free tier is tight -- you'll hit it constantly on anything longer than a paragraph",
    "Plagiarism checker is basic compared to Turnitin or Grammarly",
    "Heavy reliance on synonym swapping rather than true rewriting at times",
  ],
  knownIssues: [
    {
      description: "PRICING CHECK (2026-10-19): quillbot.com/premium now lists Premium at **$8.33/month billed annually ($99.95/year)** -- double the $49.95/year ($4.17/mo) this page showed since April. The page's own plan data lists Monthly $19.95, Quarterly $39.95, Semi-Annual $79.95, Annual $99.95 and 2-Yearly $159.95; it also carries A/B price variants for the monthly plan ($21.95 and $23.95), so the monthly price you are shown may differ. The free plan is now 100 words in 2 paraphrasing modes (was 125 words / 3 modes) and adds a limited Humanizer and AI Detector. A Team plan (contact sales) adds usage metrics, user management and centralized billing.",
      source: "quillbot.com/premium",
      date: "2026-10-19",
    },
    {
      description: "Paraphraser sometimes produces grammatically incorrect output that the grammar checker doesn't catch",
      source: "Reddit r/QuillBot",
      date: "2026-02",
    },
    {
      description: "Chrome extension occasionally conflicts with Google Docs, causing lag or duplicate text",
      source: "Chrome Web Store reviews",
      date: "2026-01",
    },
    {
      description: "Some users report billing issues with annual plan auto-renewal being hard to cancel",
      source: "Trustpilot",
      date: "2025-12",
    },
  ],
  bestFor: "Students and non-native English speakers who need quick paraphrasing help and basic grammar checking, and who will pay annually -- the $19.95 month-to-month price is steep for what it is.",
  notFor: "Professional writers or editors who need high-quality rewriting -- the output often needs manual cleanup.",
  verdict: "QuillBot is the most popular paraphrasing tool for a reason: it's cheap, easy, and good enough for quick rewrites. But 'good enough' is the key phrase. The output regularly needs human editing, and power users will outgrow the free tier in minutes. If you just need to rephrase a few sentences for an email or assignment, it works great. If you need polished, publication-ready rewrites, you'll want something better.",

  lastReviewedDate: "2026-10-19",
  dataSources: [
    { name: "QuillBot Premium pricing", url: "https://quillbot.com/premium", dateAccessed: "2026-10-19" },
    { name: "QuillBot official site", dateAccessed: "2026-04-02" },
    { name: "Reddit r/QuillBot", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Chrome Web Store reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://quillbot.com",
  status: "active",
  metaTitle: "QuillBot Review 2026: Is It Worth Premium for Paraphrasing?",
  metaDescription: "Honest QuillBot review with real scores, pricing, pros, cons. Free vs Premium compared. Premium now $99.95/yr or $19.95/mo. Updated October 2026.",
};
