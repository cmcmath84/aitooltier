import { ToolReview } from "@/lib/types";

export const cursor: ToolReview = {
  slug: "cursor",
  name: "Cursor",
  tagline: "AI-native code editor that understands your entire codebase -- not just the file you're in",
  category: "ai-code-assistants",
  url: "https://cursor.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 8,
    features: 9,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["2,000 completions", "50 premium requests", "Basic features"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: ["Unlimited completions", "500 premium requests/mo", "All models"],
    },
    {
      plan: "Business",
      price: "$40",
      period: "month",
      features: ["Unlimited premium", "Admin controls", "SAML SSO"],
    },
  ],

  pros: [
    "Understands your entire codebase, not just the current file -- ask it about any part of your project",
    "Multi-file editing is best-in-class -- it can refactor across files intelligently",
    "Built on VS Code so the transition is smooth and extensions still work",
    "Lets you choose between Claude, GPT-4, and other models for different tasks",
  ],
  cons: [
    "Requires switching from your current editor to Cursor (even though it's VS Code-based)",
    "Premium request limits on Pro plan can be frustrating for heavy users",
    "Occasionally makes sweeping changes when you wanted something targeted",
    "Still has rough edges -- sometimes the AI context gets confused in very large repos",
  ],
  knownIssues: [
    {
      description: "Tab completion sometimes conflicts with VS Code extensions, causing double-insertions",
      source: "Cursor Community Forum",
      date: "2026-03",
    },
    {
      description: "Composer mode occasionally makes unintended changes to files you didn't ask it to edit",
      source: "Reddit r/cursor",
      date: "2026-02",
    },
  ],
  bestFor: "Developers who want the deepest AI integration possible. If you want an AI that truly understands your project architecture and can do multi-file refactors, Cursor is the best option.",
  notFor: "Developers happy with their current editor setup who just want basic autocomplete. Copilot is less disruptive for that use case.",
  verdict: "Cursor represents where AI coding is heading -- the editor itself is AI-native, not just AI-augmented. The codebase understanding is a genuine leap beyond Copilot. But it requires adopting a new editor and learning new workflows. If you're willing to invest the time, it's the most powerful AI coding tool available. If you just want completions in your current editor, stick with Copilot.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Cursor official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/cursor", dateAccessed: "2026-03-26" },
    { name: "Daily use testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://cursor.com",
  status: "active",
  metaTitle: "Cursor Review 2026: AI Code Editor That Understands Your Whole Codebase",
  metaDescription: "Cursor review. Best multi-file AI coding, codebase-aware chat, built on VS Code. But is it worth switching editors? Scores, pricing. March 2026.",
};
