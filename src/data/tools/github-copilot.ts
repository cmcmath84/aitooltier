import { ToolReview } from "@/lib/types";

export const githubCopilot: ToolReview = {
  slug: "github-copilot",
  name: "GitHub Copilot",
  tagline: "AI code assistant that lives in your editor -- autocomplete on steroids",
  category: "ai-code-assistants",
  url: "https://github.com/features/copilot",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 8,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["2,000 completions/mo", "50 chat messages/mo", "VS Code + JetBrains"],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: ["Unlimited completions", "Unlimited chat", "CLI access"],
    },
    {
      plan: "Business",
      price: "$19",
      period: "month",
      features: ["Organization management", "Policy controls", "Audit logs"],
    },
  ],

  pros: [
    "Inline code completions feel magical -- it predicts what you're about to type with scary accuracy",
    "Works directly in VS Code, JetBrains, Neovim -- no context switching",
    "Copilot Chat is great for explaining code, writing tests, and debugging",
    "Free tier is functional enough for personal projects",
  ],
  cons: [
    "Suggestions can be confidently wrong -- it'll autocomplete plausible-looking code that has subtle bugs",
    "Sometimes suggests code that's clearly copied from public repos, raising licensing questions",
    "Context window for chat is smaller than standalone tools like Claude",
    "Multi-file refactoring understanding is limited compared to Cursor",
  ],
  knownIssues: [
    {
      description: "Copilot chat occasionally loses context mid-conversation in larger projects, giving irrelevant suggestions",
      source: "GitHub Community Discussions",
      date: "2026-03",
    },
  ],
  bestFor: "Any developer who wants productivity gains without changing their workflow. It works in your existing editor and the inline suggestions are the best in the business.",
  notFor: "Developers who need deep codebase understanding and multi-file refactoring. Cursor does that better. Also not for anyone uncomfortable with potential code licensing issues.",
  verdict: "Copilot is still the default AI code assistant for good reason. The inline completions are the best available, and it works seamlessly in the editors most developers already use. At $10/mo it's an easy expense to justify. But if you want something that truly understands your entire codebase and can do complex refactors, look at Cursor.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "GitHub Copilot official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/programming", dateAccessed: "2026-03-26" },
    { name: "Daily use testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://github.com/features/copilot",
  status: "active",
  metaTitle: "GitHub Copilot Review 2026: Still the Best AI Code Assistant?",
  metaDescription: "GitHub Copilot review. Best inline completions, great editor integration, but limited codebase awareness. Scores, pricing, known issues. March 2026.",
};
