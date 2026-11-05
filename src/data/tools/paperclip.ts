import { ToolReview } from "@/lib/types";

export const paperclip: ToolReview = {
  slug: "paperclip",
  name: "Paperclip",
  tagline: "**Nov 2026: v2026.1023.0 (2026-10-23) added private tasks and projects, bring-your-own model gateways and an exact cost ledger, and Paperclip Cloud is now on a waitlist.** Open-source orchestration layer that turns your AI agents into a company -- org charts, budgets, governance, and heartbeats for the whole team",
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
        "Bring-your-own model gateway (OpenRouter, Amazon Bedrock, Google Gemini, custom endpoints) since v2026.1023.0",
      ],
    },
    {
      plan: "Agent Runtime Costs",
      price: "Varies",
      period: "usage",
      features: [
        "You bring your own agents (OpenClaw, Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, Hermes, Grok Build, Kimi Code, HTTP webhooks)",
        "Each agent has a per-month budget enforced by Paperclip",
        "Typical autonomous-biz setup: $100-$500/month across 5-10 agents",
      ],
    },
    {
      plan: "Paperclip Cloud (hosted)",
      price: "Waitlist",
      features: [
        "Hosted version not generally available -- the README says 'Sign up for the Paperclip Cloud waitlist'",
        "No public price (paperclip.ing has no pricing page as of 2026-11-05)",
        "The self-hosted MIT install remains the shipping product",
      ],
    },
  ],

  pros: [
    "Actually solves the problem agent frameworks don't -- not 'how do I build an agent' but 'how do I run fifteen of them without losing track of cost, state, or what they did yesterday'",
    "Bring-your-own-agent is the right call -- Paperclip doesn't fight with OpenClaw or Claude Code, it manages them, so you don't have to pick a single runtime",
    "Hard budget enforcement with auto-pause at 100% is the feature everyone else is missing -- no more $400 token surprises from a runaway loop (enforcement uses recorded spend, so in-flight work can still overshoot slightly)",
    "Ticket system plus immutable audit log means you can actually review what your agents did, which matters the moment one of them does something dumb (they will)",
  ],
  cons: [
    "Assumes you already have agents to orchestrate -- not a starting point, it's a step-two tool, and many users don't need it yet",
    "The 'autonomous company' framing is aspirational -- in practice you'll spend real hours on prompts and governance before it 'just runs,' the marketing understates that",
    "Heartbeat-based execution adds latency -- things happen on schedules, not instantly, and that tradeoff catches some users off-guard",
    "Hosted Paperclip Cloud is still waitlist-only with no published price, so today you run and patch the Node.js server yourself -- company import/export lets you reuse org setups across instances, but the roadmap still lists broader company-template distribution as 'eventually'",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-05): from April this page said the 'Ecosystem is three weeks old' with the 'Cliphub template marketplace' still coming soon, and the verdict cited '53k stars in three weeks'. Vendor now: portable company templates ship in the open-source app ('Export/import orgs, agents, and skills with secret scrubbing and collision handling'), the roadmap describes import/export as the foundation 'eventually for broader company-template distribution', and the repo shows 111,350 stars (GitHub API, 2026-11-05). No current Paperclip page we checked mentions Cliphub, so this page no longer describes it.",
      source: "Paperclip GitHub README + ROADMAP.md + GitHub API (github.com/paperclipai/paperclip), vendor-primary",
      date: "2026-11-05",
    },
    {
      description: "HOSTED PAPERCLIP CLOUD ON A WAITLIST (checked 2026-11-05, vendor-primary): the GitHub README now opens with 'Sign up for the Paperclip Cloud waitlist', and the homepage hero button reads 'Join the waitlist'. The roadmap marks Cloud deployments as in progress: 'Shipped so far: multi-tenant isolation with per-company JWT keys and company-scoped cloud tenants', plus portable import/export and cloud-managed instance bootstrap. No hosted price is published (paperclip.ing/pricing returns 404). The homepage title now reads 'The app people use to manage AI agents for work'. Supported runtimes now include Gemini CLI, OpenCode, Pi, Hermes, Grok Build and Kimi Code alongside OpenClaw, Claude Code, Codex and Cursor.",
      source: "paperclip.ing homepage, GitHub README + ROADMAP.md (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "PRODUCT: v2026.1023.0 -- PRIVATE WORK, BYO MODEL GATEWAY, EXACT COST LEDGER (2026-10-23, vendor-primary): the release carries 200 commits and 'The headline is private work': tasks and projects can be marked private and shared only with named people and agents. Agents can now run through your own model gateway -- 'OpenRouter, Amazon Bedrock, Google Gemini, or any OpenAI Responses, Anthropic Messages, or Chat Completions endpoint'. Also: Slack bots set themselves up through Slack's Manifest API, the GitHub review bot publishes a 'Paperclip Review' status check, Costs becomes an exact ledger that also shows connected ChatGPT or Claude subscription fees, and connected MCP assistants can edit tasks and configure agents. Breaking changes: the Operator role preset grows from one grant to fourteen ('Review your member roles if Operators were meant to be read-mostly.'), GitHub review bots move behind an experimental setting, and 'Budgets hold on unpriced usage by default.' Cadence stayed near-weekly: 19 releases on the vendor changelog from v2026.517.0 (2026-05-17) to v2026.1023.0.",
      source: "Paperclip changelog (paperclip.ing/changelog/v2026.1023.0/), vendor-primary",
      date: "2026-10-23",
    },
    {
      description: "PRODUCT (2026-05-13, TODAY): Paperclip v2026.513.0 shipped. Highlights from the GitHub release notes: (a) Source-scoped recovery actions -- stalled or missing-disposition recovery now creates first-class recovery actions on the source issue itself (rather than discarding state into a side queue), (b) Blocked Inbox attention view -- a new Blocked Inbox tab surfaces blocked work alongside active assignments so an agent can triage without the org chart, (c) Local plugin development workflow -- `paperclipai plugin init` scaffolding now ships with a CLI-first authoring loop (faster dev cycle for community plugins). Maintainer continues weekly cadence -- v2026.512.0 had been the prior release with planning mode + claude-sonnet-4-6/4-5 routing additions.",
      source: "GitHub releases (github.com/paperclipai/paperclip/releases/tag/v2026.513.0)",
      date: "2026-05-13",
    },
    {
      description: "Embedded Postgres occasionally corrupts on unclean shutdown, recommended to move to external Postgres before production use",
      source: "GitHub Issues",
      date: "2026-04",
    },
    {
      description: "Budget stops can lag spend: Paperclip's README says 'Enforcement uses recorded spend; usage reporting and in-flight work can delay a stop.' Earlier GitHub issues reported small overshoots under high-concurrency task checkout after a restart. Since v2026.1023.0, budget policies also block on unpriced usage by default.",
      source: "Paperclip GitHub README (vendor-primary), GitHub Issues",
      date: "2026-04",
    },
  ],
  bestFor: "Operators running multiple agents who need real coordination -- an indie hacker running a content shop, a small team testing autonomous-biz concepts, or anyone whose 'I'll just open another Claude Code tab' workflow has hit the wall. The org-chart framing is a huge upgrade if you have 5+ agents already.",
  notFor: "Anyone who only needs one agent. Also not the right pick if you want a drag-and-drop workflow builder -- Paperclip is opinionated about the 'company' model and will feel rigid if you wanted something like Zapier for AI.",
  verdict: "Paperclip is the most interesting open-source launch of Q1 2026, full stop. Passing 111k GitHub stars by November 2026 isn't an accident -- it's solving a problem the category has ignored, which is what happens when you have fifteen agents, ten tabs, and no audit trail. The design choices are correct: BYO agent, hard budgets, immutable tickets, governance gates. If you have one agent, skip this and come back later. If you have three, install it this weekend. If you have ten, you already needed this six months ago.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Paperclip changelog: v2026.1023.0 (2026-10-23)", url: "https://paperclip.ing/changelog/v2026.1023.0/", dateAccessed: "2026-11-05" },
    { name: "Paperclip changelog index", url: "https://paperclip.ing/changelog/", dateAccessed: "2026-11-05" },
    { name: "Paperclip ROADMAP.md", url: "https://raw.githubusercontent.com/paperclipai/paperclip/master/ROADMAP.md", dateAccessed: "2026-11-05" },
    { name: "GitHub API: paperclipai/paperclip (stars)", url: "https://api.github.com/repos/paperclipai/paperclip", dateAccessed: "2026-11-05" },
    { name: "Paperclip v2026.513.0 release (2026-05-13)", url: "https://github.com/paperclipai/paperclip/releases", dateAccessed: "2026-05-13" },
    { name: "Paperclip official site", url: "https://paperclip.ing/", dateAccessed: "2026-11-05" },
    { name: "GitHub paperclipai/paperclip (README)", url: "https://github.com/paperclipai/paperclip", dateAccessed: "2026-11-05" },
    { name: "Towards AI: open-source OS for multi-agent companies", url: "https://pub.towardsai.net/paperclip-the-open-source-operating-system-for-zero-human-companies-2c16f3f22182", dateAccessed: "2026-04-13" },
    { name: "Paperclip documentation", url: "https://docs.paperclip.ing/", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://paperclip.ing/",
  status: "active",
  metaTitle: "Paperclip Review 2026: Open-Source AI Agent Orchestrator, Tested",
  metaDescription: "Paperclip review. Open-source orchestration for teams of AI agents -- org charts, budgets, governance, ticketing, private work, BYO model gateway. BYO OpenClaw, Claude Code, Codex. Hosted Cloud on a waitlist. Updated November 2026.",
};
