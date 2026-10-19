import { ToolReview } from "@/lib/types";

export const sudowrite: ToolReview = {
  slug: "sudowrite",
  name: "Sudowrite",
  tagline: "AI writing assistant built specifically for fiction authors and creative writers",
  category: "ai-writing-tools",
  url: "https://www.sudowrite.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 6,
    features: 8,
    overall: 7.3,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Hobby & Student",
      price: "$10",
      period: "month",
      features: [
        "225,000 credits/month",
        "Write, Rewrite, Describe and Expand with story intelligence",
        "Muse & Ballad (Sudowrite's fiction models) plus 30+ other models",
        "Style matching and series continuity",
      ],
    },
    {
      plan: "Professional",
      price: "$22",
      period: "month",
      features: [
        "1,000,000 credits/month (doubled from 450,000)",
        "Everything in Hobby & Student",
        "Feedback on your work",
      ],
    },
    {
      plan: "Max",
      price: "$44",
      period: "month",
      features: [
        "2,000,000 credits/month",
        "Unused credits roll over for 12 months",
        "Developmental edits, line edits and beta reads",
      ],
    },
  ],

  pros: [
    "Purpose-built for fiction -- understands story structure, characters, and prose in a way ChatGPT doesn't",
    "Story Bible feature keeps characters, settings, and plot points consistent across your novel",
    "Describe and Expand tools generate prose that actually sounds like creative writing, not corporate blog posts",
    "Canvas view gives a visual overview of your story structure that's genuinely useful for plotting",
  ],
  cons: [
    "No free plan -- only a free trial (no credit card) before the $10/mo entry tier",
    "Allowances are now credits rather than words (225,000/month on the cheapest plan), which makes it harder to predict how far a plan goes",
    "Output quality varies wildly -- sometimes brilliant, sometimes generic fantasy prose",
    "Learning curve to get the most out of all the specialized tools",
  ],
  knownIssues: [
    {
      description: "PRICING CHECK (2026-10-19): sudowrite.com/pricing still lists Hobby & Student $10, Professional $22 and Max $44 per month, with a yearly toggle advertised as 'up to 50% off'. Allowances are now **credits, not words**: 225,000 / 1,000,000 (struck through from 450,000, labelled '2x as much!') / 2,000,000 per month, and Max credits roll over for 12 months. Every plan has a free trial with no credit card, and all plans include Sudowrite's own fiction models Muse and Ballad plus '30+ industry-leading models'. Max adds developmental edits, line edits and beta reads.",
      source: "sudowrite.com/pricing",
      date: "2026-10-19",
    },
    {
      description: "Word credits get consumed faster than expected because regenerations and edits all count against the limit",
      source: "Reddit r/writing",
      date: "2026-03",
    },
    {
      description: "Story Bible sometimes loses context in very long manuscripts (80K+ words), leading to character inconsistencies",
      source: "Reddit r/sudowrite",
      date: "2026-01",
    },
    {
      description: "Some authors report the AI defaulting to YA fantasy tropes regardless of genre settings",
      source: "Reddit r/sudowrite",
      date: "2025-12",
    },
  ],
  bestFor: "Fiction writers who want an AI co-pilot that understands narrative, not just grammar. Particularly useful for NaNoWriMo participants and indie authors.",
  notFor: "Non-fiction writers, copywriters, or anyone looking for general-purpose writing help. This is a specialized tool for storytelling.",
  verdict: "Sudowrite is the best AI tool built specifically for fiction writers, and it shows. The story-aware features like Story Bible and structured brainstorming set it apart from generic LLMs. But the credit system feels stingy, and you'll burn through words fast if you use it heavily. It's a solid co-pilot for drafting and brainstorming, not a replacement for actually writing your novel.",

  lastReviewedDate: "2026-10-19",
  dataSources: [
    { name: "Sudowrite pricing", url: "https://www.sudowrite.com/pricing", dateAccessed: "2026-10-19" },
    { name: "Sudowrite official site", dateAccessed: "2026-04-02" },
    { name: "Reddit r/sudowrite", dateAccessed: "2026-04-02" },
    { name: "Reddit r/writing", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.sudowrite.com",
  status: "active",
  metaTitle: "Sudowrite Review 2026: Best AI for Fiction Writers?",
  metaDescription: "Honest Sudowrite review for fiction writers. Story Bible, prose quality, pricing breakdown. Is it worth it for your novel? Updated October 2026.",
};
