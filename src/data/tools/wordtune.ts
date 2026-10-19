import { ToolReview } from "@/lib/types";

export const wordtune: ToolReview = {
  slug: "wordtune",
  name: "Wordtune",
  tagline: "AI rewriting and editing assistant by AI21 Labs that rewrites your sentences to sound better",
  category: "ai-writing-tools",
  url: "https://www.wordtune.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 7,
    features: 6,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Basic (Free)",
      price: "$0",
      features: [
        "10 rewrites/AI suggestions per day",
        "3 AI summaries per month",
        "Spelling and grammar checks",
        "Chrome extension",
      ],
    },
    {
      plan: "Advanced",
      price: "$4.89",
      period: "month (billed yearly; $6.99 list)",
      features: [
        "30 rewrites/AI suggestions per day",
        "15 AI summaries per month",
        "3-day free trial",
      ],
    },
    {
      plan: "Unlimited",
      price: "$6.99",
      period: "month (billed yearly; $9.99 list)",
      features: [
        "Unlimited rewrites and AI suggestions",
        "Unlimited AI summaries",
        "Premium support",
        "3-day free trial",
      ],
    },
  ],

  pros: [
    "Rewrite quality is noticeably better than QuillBot -- suggestions actually sound natural",
    "Great at shortening wordy sentences without losing meaning",
    "Inline suggestions feel like having a human editor looking over your shoulder",
    "Summarizer tool is surprisingly good for condensing long articles",
  ],
  cons: [
    "10 rewrites per day on the free tier (and only 3 summaries a month) runs out fast if you're editing anything longer than a short email",
    "Feature set is narrower than Grammarly -- it's really just rewriting, not a full writing suite",
    "No desktop app -- you're stuck with the browser extension and web editor",
    "Doesn't work well with highly technical or domain-specific writing",
  ],
  knownIssues: [
    {
      description: "PRICING CHECK (2026-10-19): wordtune.com/plans now lists **Basic (free), Advanced and Unlimited** -- not the Free / Plus $10 / Business $13.99 lineup this page showed since April. Advanced is **$4.89/month billed annually** (shown against $6.99) with 30 rewrites a day and 15 summaries a month; Unlimited is **$6.99/month billed annually** (shown against $9.99) with no caps. Free stays at 10 rewrites a day and 3 summaries a month. Paid plans start with a 3-day free trial, and Wordtune states there are no refunds -- cancel before the trial or billing cycle ends. Business features (SAML SSO, centralized billing) are listed in the comparison table, but no Business price is published on the page.",
      source: "wordtune.com/plans",
      date: "2026-10-19",
    },
    {
      description: "Chrome extension sometimes fails to load on certain websites, requiring a page refresh",
      source: "Chrome Web Store reviews",
      date: "2026-02",
    },
    {
      description: "Summarizer occasionally misses key points in long-form content, especially with multiple subtopics",
      source: "G2 Reviews",
      date: "2026-01",
    },
  ],
  bestFor: "Non-native English speakers and professionals who want their emails, docs, and messages to sound more polished and natural.",
  notFor: "Anyone who needs a comprehensive writing tool with grammar checking, plagiarism detection, and style guides. Grammarly covers more ground.",
  verdict: "Wordtune does one thing and does it well: making your writing sound better. The rewrite suggestions are genuinely helpful and often better than what you'd get from QuillBot. But the narrow feature set means you'll likely still need Grammarly or another tool alongside it. At $6.99/mo (billed yearly) for unlimited rewriting it is cheaper than it used to be, but it is still a tougher sell unless rewriting is specifically what you need most.",

  lastReviewedDate: "2026-10-19",
  dataSources: [
    { name: "Wordtune plans", url: "https://www.wordtune.com/plans", dateAccessed: "2026-10-19" },
    { name: "Wordtune official site", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
    { name: "Chrome Web Store reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/writing", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.wordtune.com",
  status: "active",
  metaTitle: "Wordtune Review 2026: Better Rewriting Than QuillBot?",
  metaDescription: "Honest Wordtune review with scores, pricing, pros and cons. Unlimited now $6.99/mo yearly. How it compares to QuillBot and Grammarly. Updated October 2026.",
};
