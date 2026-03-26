import { ToolReview } from "@/lib/types";

export const copyAi: ToolReview = {
  slug: "copy-ai",
  name: "Copy.ai",
  tagline: "AI-powered sales and marketing copy with workflow automation and a solid free tier",
  category: "ai-writing-tools",
  url: "https://copy.ai",

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
      features: ["2,000 words/mo", "90+ templates", "1 seat"],
    },
    {
      plan: "Starter",
      price: "$36",
      period: "month",
      features: ["Unlimited words", "All templates", "Brand voices"],
    },
    {
      plan: "Advanced",
      price: "$186",
      period: "month",
      features: ["5 seats", "Workflow automation", "API access"],
    },
  ],

  pros: [
    "Free tier actually lets you test things properly -- 2,000 words is enough",
    "Great for short-form copy: headlines, product descriptions, ad copy, social posts",
    "Workflow automation lets you chain multiple AI steps together",
    "Clean interface that's easy to pick up without a tutorial",
  ],
  cons: [
    "Long-form content (blog posts, articles) quality is mediocre",
    "Starter plan price jumped to $36/mo -- used to be much cheaper",
    "The 'workflows' are powerful but complicated to set up",
    "Free tier's 2,000 word limit goes fast if you're iterating on copy",
  ],
  knownIssues: [
    {
      description: "Workflow automations occasionally timeout on complex multi-step chains",
      source: "Copy.ai community",
      date: "2026-03",
    },
  ],
  bestFor: "Marketers who need lots of short-form copy fast. Product descriptions, email subject lines, ad variations, social media posts. The templates are optimized for these formats.",
  notFor: "Long-form writers, bloggers, or anyone who needs nuanced content. Use Claude or ChatGPT for that.",
  verdict: "Copy.ai does short-form marketing copy well and has a legitimate free tier. The workflow automation is interesting for teams that produce high volumes of similar content. But at $36/mo for the starter plan, you're paying a premium over ChatGPT. Worth trying for free to see if the templates fit your workflow.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Copy.ai official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Product Hunt", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://copy.ai",
  status: "active",
  metaTitle: "Copy.ai Review 2026: Best AI for Marketing Copy?",
  metaDescription: "Copy.ai review with free tier details, pricing, and real scores. Good for short-form marketing copy, weak on long-form. March 2026.",
};
