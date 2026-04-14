import { ToolReview } from "@/lib/types";

export const openclaw: ToolReview = {
  slug: "openclaw",
  name: "OpenClaw",
  tagline: "Open-source personal AI agent you talk to through Signal, Telegram, Discord, or WhatsApp -- runs locally, remembers context, uses any LLM",
  category: "ai-personal-agents",
  url: "https://openclaw.ai/",

  scores: {
    easeOfUse: 7,
    outputQuality: 8.5,
    value: 9.5,
    features: 8.5,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-Hosted (MIT)",
      price: "$0",
      features: [
        "Free and open source",
        "Runs on your own machine",
        "Bring your own LLM API key",
        "All messaging integrations included",
        "Skills library (SOUL.md configs)",
      ],
    },
    {
      plan: "LLM API Costs",
      price: "Varies",
      period: "usage",
      features: [
        "Use Claude, GPT, DeepSeek, or local models",
        "Costs depend on model and token volume",
        "Typical power user: $20-$100/month in API fees",
      ],
    },
  ],

  pros: [
    "Messaging-first interface is genuinely better than a chat window -- you can assign tasks from your phone, on the go, in the same app you already use",
    "Grew from 9k to 60k+ GitHub stars in days -- the SOUL.md skills ecosystem and community momentum is real and it keeps compounding",
    "Fully LLM-agnostic: point it at Claude, GPT, DeepSeek, or any OpenAI-compatible endpoint, swap providers without rewriting anything",
    "Runs locally, so your context, credentials, and skills stay on your machine -- no vendor lock-in and no cloud surveillance",
  ],
  cons: [
    "Security surface is large and still maturing -- documented prompt-injection risk, and the agent often holds email/calendar/messaging credentials",
    "Project has been renamed twice in three days (Clawdbot -> Moltbot -> OpenClaw) -- tooling, docs, and third-party guides still lag the current name",
    "No GUI or dashboard -- setup is YAML/Markdown configs and a CLI, which is a wall for non-developers",
    "LLM API costs are entirely on you, and an agent that runs on heartbeats can burn through tokens fast if you don't set explicit budgets",
  ],
  knownIssues: [
    {
      description: "Prompt injection via incoming messages or scraped web content can hijack the agent when it has credential access -- VirusTotal skill scanning partnership is the mitigation path",
      source: "OpenClaw blog / Wikipedia",
      date: "2026-02",
    },
    {
      description: "Breaking config changes across rapid version bumps -- SOUL.md schema has shifted multiple times since the rename, older templates may not load",
      source: "GitHub Issues",
      date: "2026-03",
    },
  ],
  bestFor: "Technical users who want a persistent personal assistant they can reach from any messaging app, and who are comfortable running infrastructure on their own machine. Especially good if you already live in Signal/Telegram/Discord and want an agent to meet you there.",
  notFor: "Non-technical users who want a point-and-click experience, or anyone who isn't willing to take responsibility for securing an agent that holds their credentials. Also not the right pick if you need one agent coordinating many agents -- pair it with Paperclip for that.",
  verdict: "OpenClaw is the viral entry in a category that barely existed four months ago, and it earns its momentum. The messaging-first model is a real UX breakthrough -- telling your agent what to do from your phone feels fundamentally different than opening a web chat. The open-source, bring-your-own-LLM stance is exactly what this category needs. That said, treat it like running your own email server: power and privacy at the cost of responsibility. Set budgets, audit your skills, watch for prompt injection, and you have the most capable personal AI agent available in 2026. Ignore those caveats and you'll end up with a runaway token bill or worse.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "openclaw.ai official site", url: "https://openclaw.ai/", dateAccessed: "2026-04-13" },
    { name: "GitHub openclaw/openclaw", url: "https://github.com/openclaw/openclaw", dateAccessed: "2026-04-13" },
    { name: "KDnuggets explainer", url: "https://www.kdnuggets.com/openclaw-explained-the-free-ai-agent-tool-going-viral-already-in-2026", dateAccessed: "2026-04-13" },
    { name: "Wikipedia: OpenClaw", url: "https://en.wikipedia.org/wiki/OpenClaw", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://openclaw.ai/",
  status: "active",
  metaTitle: "OpenClaw Review 2026: Viral Open-Source Personal AI Agent, Tested",
  metaDescription: "OpenClaw review. Open-source personal AI agent over Signal/Telegram/Discord, runs locally, BYO LLM. Pros, cons, security risks, real pricing. April 2026.",
};
