import { ToolReview } from "@/lib/types";

export const windsurf: ToolReview = {
  slug: "windsurf",
  name: "Windsurf",
  tagline: "Codeium's AI code editor that tries to out-Cursor Cursor -- strong autocomplete with a growing agentic mode",
  category: "ai-code-assistants",
  url: "https://windsurf.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Unlimited autocomplete", "Limited Cascade actions", "Basic chat"],
    },
    {
      plan: "Pro",
      price: "$15",
      period: "month",
      features: ["Unlimited Cascade flows", "GPT-4o and Claude access", "Priority completions"],
    },
    {
      plan: "Team",
      price: "$30",
      period: "month",
      features: ["Everything in Pro", "Admin dashboard", "Usage analytics", "Centralized billing"],
    },
  ],

  pros: [
    "Autocomplete is fast and accurate -- on par with GitHub Copilot and sometimes better for boilerplate code",
    "Cascade (agentic mode) can handle multi-step tasks like creating files, running commands, and fixing errors in sequence",
    "Significantly cheaper than Cursor at $15/month for Pro -- and the free tier is more generous too",
    "Built on VS Code like Cursor, so your extensions and keybindings carry over without friction",
  ],
  cons: [
    "Cascade mode is ambitious but inconsistent -- it sometimes takes unnecessary detours or edits the wrong files",
    "Less mature than Cursor -- the codebase understanding isn't as deep, especially in large monorepos",
    "Community and ecosystem are smaller, so finding solutions to Windsurf-specific issues takes more digging",
    "Model selection is more limited than Cursor, and you can't easily bring your own API keys on all plans",
  ],
  knownIssues: [
    {
      description: "Cascade occasionally enters a loop where it repeatedly tries to fix the same error with the same approach",
      source: "Reddit r/Windsurf",
      date: "2026-03",
    },
    {
      description: "Extension compatibility issues with some VS Code extensions that work fine in Cursor",
      source: "GitHub Issues",
      date: "2026-02",
    },
  ],
  bestFor: "Developers who want a Cursor-like experience at a lower price point with solid free-tier autocomplete.",
  notFor: "Teams working in very large codebases where Cursor's deeper context understanding makes a noticeable difference.",
  verdict: "Windsurf is the best value proposition in AI code editors right now. The autocomplete rivals Cursor and GitHub Copilot, the Cascade agentic feature shows real promise, and it costs $5/month less than Cursor's Pro plan. The catch is maturity -- Cursor has had more time to polish its multi-file editing and codebase understanding, and it shows in complex projects. If you're price-sensitive or mainly need great autocomplete, Windsurf is an easy recommendation. If you're doing heavy multi-file refactoring daily, Cursor still has the edge.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Windsurf official site", dateAccessed: "2026-03-27" },
    { name: "Reddit r/Windsurf", dateAccessed: "2026-03-27" },
    { name: "GitHub Issues", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://windsurf.com",
  status: "active",
  metaTitle: "Windsurf Review 2026: Codeium's AI Editor vs Cursor -- Which Is Better?",
  metaDescription: "Windsurf (Codeium) review. AI code editor with Cascade agentic mode, strong autocomplete, $15/mo Pro plan. How does it compare to Cursor? March 2026.",
};
