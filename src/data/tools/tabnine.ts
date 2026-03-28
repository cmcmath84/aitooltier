import { ToolReview } from "@/lib/types";

export const tabnine: ToolReview = {
  slug: "tabnine",
  name: "Tabnine",
  tagline: "AI code completion that runs locally and keeps your code private -- the enterprise-friendly alternative to Copilot",
  category: "ai-code-assistants",
  url: "https://www.tabnine.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 6,
    value: 5,
    features: 6,
    overall: 6.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Basic",
      price: "$0",
      features: ["Short code completions", "Basic AI chat", "Limited functionality"],
    },
    {
      plan: "Dev",
      price: "$9",
      period: "month",
      features: ["Full-line completions", "AI chat", "Personalized suggestions"],
    },
    {
      plan: "Enterprise",
      price: "$39",
      period: "month",
      features: ["On-premise deployment", "Custom models", "Private codebase training", "SSO"],
    },
  ],

  pros: [
    "Privacy-first approach -- code never leaves your machine on the local model, which matters for regulated industries",
    "Works as a plugin in any major IDE (VS Code, JetBrains, Vim, etc.) so you don't have to switch editors",
    "Enterprise plan with on-premise deployment and private model training is genuinely unique in this space",
    "Lightweight and fast -- completions appear instantly without the latency you sometimes get with cloud-based tools",
  ],
  cons: [
    "Completion quality has fallen behind Copilot, Cursor, and Windsurf -- the suggestions are shorter and less contextual",
    "AI chat is basic compared to Cursor's codebase-aware chat or Copilot Chat's integration depth",
    "The free tier is so limited it's hard to get a real sense of the tool's capabilities before paying",
    "At $9/month for Dev, the value is questionable when GitHub Copilot offers more for $10/month",
  ],
  knownIssues: [
    {
      description: "Completions in TypeScript projects sometimes suggest patterns from outdated library versions",
      source: "GitHub Issues",
      date: "2026-02",
    },
    {
      description: "JetBrains plugin occasionally causes IDE slowdowns, especially in larger Java projects",
      source: "JetBrains Marketplace Reviews",
      date: "2026-01",
    },
  ],
  bestFor: "Enterprise teams in regulated industries (healthcare, finance) who need AI code completion that stays on-premise.",
  notFor: "Individual developers looking for the best AI coding experience -- Copilot and Cursor are simply better for personal use.",
  verdict: "Tabnine carved out a niche with privacy and on-premise deployment, and for enterprise teams in regulated industries, that still matters. But for everyone else, the competitive landscape has shifted dramatically. GitHub Copilot, Cursor, and Windsurf all offer significantly better completion quality and deeper AI features. Tabnine's completions feel like they're from a previous generation. Unless you specifically need local-only code processing or on-premise deployment, there are better options at every price point.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Tabnine official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "GitHub Issues", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://www.tabnine.com",
  status: "active",
  metaTitle: "Tabnine Review 2026: Private AI Code Completion -- Still Worth It?",
  metaDescription: "Tabnine review. Local AI code completion with enterprise on-premise deployment. But has the competition left it behind? Honest scores, pricing. March 2026.",
};
