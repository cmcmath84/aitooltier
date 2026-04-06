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
      plan: "Free",
      price: "$0",
      features: [
        "10 rewrites per day",
        "3 AI prompts per day",
        "Basic rewriting modes",
        "Chrome extension",
      ],
    },
    {
      plan: "Plus",
      price: "$10",
      period: "month",
      features: [
        "Unlimited rewrites",
        "Unlimited AI prompts",
        "Tone and length controls",
        "Summarizer",
        "Priority support",
      ],
    },
    {
      plan: "Business",
      price: "$13.99",
      period: "month",
      features: [
        "All Plus features",
        "Team management",
        "Brand voice settings",
        "SSO and admin controls",
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
    "10 rewrites per day on the free tier runs out fast if you're editing anything longer than a short email",
    "Feature set is narrower than Grammarly -- it's really just rewriting, not a full writing suite",
    "No desktop app -- you're stuck with the browser extension and web editor",
    "Doesn't work well with highly technical or domain-specific writing",
  ],
  knownIssues: [
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
  verdict: "Wordtune does one thing and does it well: making your writing sound better. The rewrite suggestions are genuinely helpful and often better than what you'd get from QuillBot. But the narrow feature set means you'll likely still need Grammarly or another tool alongside it. At $10/mo for essentially a rewriting tool, it's a tougher sell unless rewriting is specifically what you need most.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Wordtune official site", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
    { name: "Chrome Web Store reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/writing", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.wordtune.com",
  status: "active",
  metaTitle: "Wordtune Review 2026: Better Rewriting Than QuillBot?",
  metaDescription: "Honest Wordtune review with scores, pricing, pros and cons. How it compares to QuillBot and Grammarly for rewriting. Updated April 2026.",
};
