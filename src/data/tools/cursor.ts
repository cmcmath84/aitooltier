import { ToolReview } from "@/lib/types";

export const cursor: ToolReview = {
  slug: "cursor",
  name: "Cursor",
  tagline: "AI-native code editor, now agent-first in Cursor 3 -- multi-workspace, cross-platform agents, and Composer 2 (Cursor's own 200+ tok/s coding model)",
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
      plan: "Hobby (Free)",
      price: "$0",
      features: ["2,000 completions", "50 premium requests", "Composer 2 limited access"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: ["Unlimited completions", "Extended agent limits", "Composer 2 Standard at $0.50/$2.50 per 1M tokens", "All frontier models"],
    },
    {
      plan: "Pro+",
      price: "$60",
      period: "month",
      features: ["3x Pro usage on OpenAI, Claude, Gemini models", "Composer 2 Fast at $1.50/$7.50 per 1M tokens", "Multi-workspace"],
    },
    {
      plan: "Ultra",
      price: "$200",
      period: "month",
      features: ["20x Pro usage on all frontier models", "Highest priority queue", "Background Agents at scale"],
    },
    {
      plan: "Teams",
      price: "$40",
      period: "user/month",
      features: ["Shared chats, centralized billing, analytics", "Admin controls, SAML SSO, privacy mode", "Agent Command Center"],
    },
  ],

  pros: [
    "Cursor 3's agent-first redesign (April 2026) is the biggest interface overhaul since launch -- multi-workspace tabs, a persistent sidebar for local + cloud agents, and cross-platform handoff between mobile, web, Slack, GitHub, and Linear actually deliver on 'your AI pair wherever you are'",
    "Composer 2 is Cursor's own frontier coding model (based on Kimi K2.5 architecture) running at 200+ tok/s and priced at $0.50/$2.50 per 1M tokens -- in direct testing it's competitive with Claude Opus 4.6 on straightforward coding while being dramatically faster",
    "Codebase understanding remains best-in-class -- multi-file refactors, architecture-aware chat, and the ability to 'just ask Cursor' about any function in a 500k-line repo still feel a generation ahead of Copilot",
    "Still built on VS Code so the keyboard muscle memory, extensions, and theme are preserved -- the switching cost is genuinely low for existing VS Code users",
  ],
  cons: [
    "Premium request limits on Pro are still frustrating at heavy usage -- the Ultra tier at $200/mo exists for a reason, and serious users will end up there",
    "Composer 2 occasionally produces confident-looking code that fails in subtle ways -- the speed is real but it is noticeably less careful than Claude Opus 4.6 on complex architectural tasks",
    "Cross-platform agent handoff in Cursor 3 adds surface area -- the mobile / Slack / GitHub surfaces are still rough, and background agents sometimes do work you didn't want while you were asleep",
    "The Agent Command Center is a power feature that casual users won't touch -- if you're just here for tab completion, Cursor 3 is more tool than you need and Copilot remains less disruptive",
  ],
  knownIssues: [
    {
      description: "Cursor 3 multi-workspace tabs occasionally lose context on switch -- agents in inactive workspaces sometimes forget prior turns when refocused",
      source: "Cursor Community Forum",
      date: "2026-04",
    },
    {
      description: "Composer 2 has been reported to be overly aggressive with speculative completions in legacy codebases -- produces fast but sometimes wrong suggestions in Python 2 or old Java",
      source: "Reddit r/cursor",
      date: "2026-04",
    },
    {
      description: "Cloud background agents can accumulate unreviewed commits on branches while you're away -- easy to lose track of what the agent did overnight",
      source: "Hacker News discussion",
      date: "2026-04",
    },
  ],
  bestFor: "Developers who want the deepest AI integration possible and who are ready to work with agents rather than just autocomplete. Cursor 3's multi-workspace + cross-platform agent story is designed for people who are already living in the Cursor app daily, not dabblers.",
  notFor: "Developers happy with their current editor setup who just want basic autocomplete -- Copilot is still less disruptive for that. Also not for anyone skeptical of Cursor's own coding model; if you want pure frontier-model access for every task, paying Claude or OpenAI directly and using Claude Code is cleaner.",
  verdict: "Cursor 3 + Composer 2 (April 2026) is the release where Cursor stops being an AI-augmented editor and becomes an agent-first dev environment. Composer 2's speed at $0.50/$2.50 per 1M tokens is the real story -- it makes tight iteration loops feel instant in a way frontier models can't, even if the quality is slightly below Opus 4.6. The multi-workspace + cross-platform handoff design assumes you want your agents everywhere; if you don't, it's overkill. The honest read: for developers willing to go all-in on agentic workflows, Cursor 3 is the 2026 default. For everyone else, Claude Code + Copilot is a simpler, less committing stack.",

  lastReviewedDate: "2026-04-16",
  dataSources: [
    { name: "Cursor blog: Meet the new Cursor (Cursor 3)", url: "https://cursor.com/blog/cursor-3", dateAccessed: "2026-04-16" },
    { name: "Cursor blog: Introducing Composer 2", url: "https://cursor.com/blog/composer-2", dateAccessed: "2026-04-16" },
    { name: "G2 Reviews", dateAccessed: "2026-04-16" },
    { name: "Reddit r/cursor", dateAccessed: "2026-04-16" },
    { name: "Daily use testing", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://cursor.com",
  status: "active",
  poweredBy: "Composer 2 (Cursor's own) / Claude Opus 4.6 / GPT-5.4 / Gemini (user selects)",
  metaTitle: "Cursor 3 + Composer 2 Review 2026: Agent-First AI Code Editor",
  metaDescription: "Cursor 3 review. Agent-first rebuild with multi-workspace, cross-platform agents, and Composer 2 (200+ tok/s coding model) at $0.50/$2.50 per 1M. April 2026.",
};
