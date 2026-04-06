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
        "125-word paraphrase limit",
        "3 paraphrasing modes",
        "Basic grammar checker",
        "1 freeze word",
      ],
    },
    {
      plan: "Premium",
      price: "$10",
      period: "month",
      features: [
        "Unlimited paraphrasing",
        "9 paraphrasing modes",
        "Advanced grammar rewriting",
        "Plagiarism checker",
        "Tone detection",
        "Unlimited freeze words",
      ],
    },
    {
      plan: "Premium (Annual)",
      price: "$4.17",
      period: "month",
      features: [
        "All Premium features",
        "Billed $49.95/year",
      ],
    },
  ],

  pros: [
    "Dead simple to use -- paste text, pick a mode, click paraphrase",
    "Chrome extension and Word/Google Docs integrations make it easy to use where you already write",
    "Free tier is genuinely useful for light use, not just a teaser",
    "Annual pricing is very reasonable at ~$50/year",
  ],
  cons: [
    "Paraphrased output can sound awkward or unnatural, especially in Creative/Formal modes",
    "125-word limit on free tier is tight -- you'll hit it constantly on anything longer than a paragraph",
    "Plagiarism checker is basic compared to Turnitin or Grammarly",
    "Heavy reliance on synonym swapping rather than true rewriting at times",
  ],
  knownIssues: [
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
  bestFor: "Students and non-native English speakers who need quick paraphrasing help and basic grammar checking at a low price.",
  notFor: "Professional writers or editors who need high-quality rewriting -- the output often needs manual cleanup.",
  verdict: "QuillBot is the most popular paraphrasing tool for a reason: it's cheap, easy, and good enough for quick rewrites. But 'good enough' is the key phrase. The output regularly needs human editing, and power users will outgrow the free tier in minutes. If you just need to rephrase a few sentences for an email or assignment, it works great. If you need polished, publication-ready rewrites, you'll want something better.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "QuillBot official site", dateAccessed: "2026-04-02" },
    { name: "Reddit r/QuillBot", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Chrome Web Store reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://quillbot.com",
  status: "active",
  metaTitle: "QuillBot Review 2026: Is It Worth Premium for Paraphrasing?",
  metaDescription: "Honest QuillBot review with real scores, pricing, pros, cons. Free vs Premium compared. Best paraphrasing tool for students? April 2026.",
};
