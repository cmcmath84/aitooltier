import { ToolReview } from "@/lib/types";

export const antigravity: ToolReview = {
  slug: "antigravity",
  name: "Google Antigravity",
  tagline: "Google's agent-first AI IDE -- deploys up to 5 autonomous coding agents in parallel on a VS Code fork",
  category: "ai-code-assistants",
  url: "https://antigravity.google",

  scores: {
    easeOfUse: 8,
    outputQuality: 8.5,
    value: 6,
    features: 9.5,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["20 requests/day (reduced from 250)", "Basic agent access", "Rate-limited"] },
    { plan: "Pro", price: "$20", period: "month", features: ["Higher rate limits", "All models (Gemini, Claude, GPT)", "Priority agent processing"] },
    { plan: "Ultra", price: "$249.99", period: "month", features: ["Maximum rate limits", "All frontier models", "Highest priority", "Extended agent sessions"] },
    { plan: "AI Credits", price: "$25 / 2,500 credits", features: ["Pay-as-you-go overflow", "Use when subscription limits run out"] },
  ],

  pros: [
    "Up to 5 autonomous agents working in parallel on different parts of your project -- genuinely unique multi-agent architecture",
    "Mission Control Manager View lets you dispatch, monitor, and coordinate agents like an air traffic controller",
    "Built-in Chrome browser for testing means agents can see and interact with your running app, not just write blind code",
    "Multi-model support: Gemini 3.1 Pro, Claude Sonnet/Opus 4.6, and GPT-OSS 120B -- switch models per task",
    "MCP (Model Context Protocol) support connects agents to GitHub, databases, and external APIs",
    "Built on VS Code fork so the editor is familiar -- extensions and keybindings carry over",
  ],
  cons: [
    "Free tier was gutted -- dropped from 250 to 20 daily requests (92% reduction), sparking community backlash",
    "Credit system is opaque -- you can't predict how many credits a task will consume, making cost planning impossible",
    "Ultra at $249.99/mo is the most expensive AI coding tool available -- hard to justify over Cursor + Claude Code combined",
    "Agent coordination adds complexity -- managing 5 parallel agents requires a mental model most developers aren't used to",
    "Pricing protests from The Register and developer forums suggest Google may change pricing again, creating uncertainty",
    "Lock-in risk: it's a Google-specific IDE fork, not a plugin you can add to any editor",
  ],
  knownIssues: [
    {
      description: "Free tier daily requests slashed from 250 to 20 in early 2026, and Pro tier quota refresh changed from every 5 hours to weekly for most models",
      source: "The Register, Reddit r/google_antigravity",
      date: "2026-03",
    },
    {
      description: "Credit consumption per task is unpredictable -- developers report identical tasks consuming wildly different credit amounts",
      source: "Reddit r/google_antigravity, Hacker News",
      date: "2026-03",
    },
    {
      description: "Agent sessions can stall or lose context on long-running tasks, requiring manual intervention and wasting credits",
      source: "Reddit r/google_antigravity",
      date: "2026-04",
    },
  ],
  bestFor: "Developers working on large, multi-file projects who want to parallelize their workflow. If you regularly work on 3-5 tasks simultaneously (fix a bug, add a feature, write tests, refactor), Antigravity's multi-agent architecture is unmatched.",
  notFor: "Solo developers on a budget (the free tier is nearly useless after the cuts), anyone who values pricing transparency, or developers who prefer lightweight tools over full IDE replacements.",
  verdict: "Google Antigravity is the most ambitious AI coding tool on the market -- 5 parallel agents, built-in browser testing, multi-model support, and MCP integration. When it works, it's like having a team of junior developers. But Google's aggressive pricing changes (gutting the free tier, introducing opaque credits) have damaged trust. At $20/mo Pro it's competitive, but the credit system means your actual costs are unpredictable. If Google stabilizes the pricing, this could be the best AI IDE available. Right now, the value score drags it down.",

  lastReviewedDate: "2026-04-14",
  dataSources: [
    { name: "antigravity.google official site", dateAccessed: "2026-04-14" },
    { name: "The Register pricing protest coverage", dateAccessed: "2026-04-14" },
    { name: "Reddit r/google_antigravity", dateAccessed: "2026-04-14" },
    { name: "vibecoding.app review", dateAccessed: "2026-04-14" },
  ],
  affiliateUrl: "https://antigravity.google",
  status: "active",
  poweredBy: "Gemini 3.1 Pro / Claude Opus 4.6 / GPT-OSS 120B (multi-model)",
  metaTitle: "Google Antigravity Review 2026: Agent-First AI IDE With 5 Parallel Agents",
  metaDescription: "Google Antigravity review. AI IDE with 5 parallel coding agents, multi-model support, built-in browser. Free tier gutted. Scores, pricing, known issues. April 2026.",
};
