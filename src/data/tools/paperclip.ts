import { ToolReview } from "@/lib/types";

export const paperclip: ToolReview = {
  slug: "paperclip",
  name: "Paperclip",
  tagline: "Open-source orchestration layer that turns your AI agents into a company -- org charts, budgets, governance, and heartbeats for the whole team",
  category: "ai-agent-orchestration",
  url: "https://paperclip.ing/",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 8.5,
    value: 9.5,
    features: 9,
    overall: 8.6,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-Hosted (MIT)",
      price: "$0",
      features: [
        "Full Node.js server + React dashboard",
        "Embedded Postgres or BYO database",
        "Unlimited agents, unlimited companies per install",
        "Org charts, ticketing, budgets, audit log",
        "No Paperclip account required",
      ],
    },
    {
      plan: "Agent Runtime Costs",
      price: "Varies",
      period: "usage",
      features: [
        "You bring your own agents (OpenClaw, Claude Code, Codex, Cursor, HTTP webhooks)",
        "Each agent has a per-month budget enforced by Paperclip",
        "Typical autonomous-biz setup: $100-$500/month across 5-10 agents",
      ],
    },
  ],

  pros: [
    "Actually solves the problem agent frameworks don't -- not 'how do I build an agent' but 'how do I run fifteen of them without losing track of cost, state, or what they did yesterday'",
    "Bring-your-own-agent is the right call -- Paperclip doesn't fight with OpenClaw or Claude Code, it manages them, so you don't have to pick a single runtime",
    "Hard budget enforcement with auto-pause at 100% is the feature everyone else is missing -- no more $400 token surprises from a runaway loop",
    "Ticket system plus immutable audit log means you can actually review what your agents did, which matters the moment one of them does something dumb (they will)",
  ],
  cons: [
    "Assumes you already have agents to orchestrate -- not a starting point, it's a step-two tool, and many users don't need it yet",
    "The 'autonomous company' framing is aspirational -- in practice you'll spend real hours on prompts and governance before it 'just runs,' the marketing understates that",
    "Heartbeat-based execution adds latency -- things happen on schedules, not instantly, and that tradeoff catches some users off-guard",
    "Ecosystem is three weeks old -- Cliphub template marketplace is still 'coming soon,' so you're building the first org charts from scratch",
  ],
  knownIssues: [
    {
      description: "Embedded Postgres occasionally corrupts on unclean shutdown, recommended to move to external Postgres before production use",
      source: "GitHub Issues",
      date: "2026-04",
    },
    {
      description: "Budget enforcement has a race condition on high-concurrency task checkout, can allow small overshoots on the first run after a restart",
      source: "GitHub Issues / Paperclip docs",
      date: "2026-04",
    },
  ],
  bestFor: "Operators running multiple agents who need real coordination -- an indie hacker running a content shop, a small team testing autonomous-biz concepts, or anyone whose 'I'll just open another Claude Code tab' workflow has hit the wall. The org-chart framing is a huge upgrade if you have 5+ agents already.",
  notFor: "Anyone who only needs one agent. Also not the right pick if you want a drag-and-drop workflow builder -- Paperclip is opinionated about the 'company' model and will feel rigid if you wanted something like Zapier for AI.",
  verdict: "Paperclip is the most interesting open-source launch of Q1 2026, full stop. 53k stars in three weeks isn't an accident -- it's solving a problem the category has ignored, which is what happens when you have fifteen agents, ten tabs, and no audit trail. The design choices are correct: BYO agent, hard budgets, immutable tickets, governance gates. If you have one agent, skip this and come back later. If you have three, install it this weekend. If you have ten, you already needed this six months ago.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Paperclip official site", url: "https://paperclip.ing/", dateAccessed: "2026-04-13" },
    { name: "GitHub paperclipai/paperclip", url: "https://github.com/paperclipai/paperclip", dateAccessed: "2026-04-13" },
    { name: "Towards AI: open-source OS for multi-agent companies", url: "https://pub.towardsai.net/paperclip-the-open-source-operating-system-for-zero-human-companies-2c16f3f22182", dateAccessed: "2026-04-13" },
    { name: "Paperclip documentation", url: "https://docs.paperclip.ing/", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://paperclip.ing/",
  status: "active",
  metaTitle: "Paperclip Review 2026: Open-Source AI Agent Orchestrator, Tested",
  metaDescription: "Paperclip review. Open-source orchestration for teams of AI agents -- org charts, budgets, governance, ticketing. BYO OpenClaw, Claude Code, Codex. April 2026.",
};
