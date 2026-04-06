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
        "30,000 AI words/month",
        "All writing tools",
        "Story Bible",
        "Canvas editor",
      ],
    },
    {
      plan: "Professional",
      price: "$22",
      period: "month",
      features: [
        "90,000 AI words/month",
        "All writing tools",
        "Story Bible",
        "Canvas editor",
        "Priority support",
      ],
    },
    {
      plan: "Max",
      price: "$44",
      period: "month",
      features: [
        "300,000 AI words/month",
        "All writing tools",
        "Story Bible",
        "Canvas editor",
        "Priority support",
        "Early access to new features",
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
    "No free tier -- you have to pay $10/mo minimum just to try it out",
    "30,000 words/month on the cheapest plan runs out quickly if you're using it as a co-writer",
    "Output quality varies wildly -- sometimes brilliant, sometimes generic fantasy prose",
    "Learning curve to get the most out of all the specialized tools",
  ],
  knownIssues: [
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

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Sudowrite official site", dateAccessed: "2026-04-02" },
    { name: "Reddit r/sudowrite", dateAccessed: "2026-04-02" },
    { name: "Reddit r/writing", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.sudowrite.com",
  status: "active",
  metaTitle: "Sudowrite Review 2026: Best AI for Fiction Writers?",
  metaDescription: "Honest Sudowrite review for fiction writers. Story Bible, prose quality, pricing breakdown. Is it worth it for your novel? April 2026.",
};
