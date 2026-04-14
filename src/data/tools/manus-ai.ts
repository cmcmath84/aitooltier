import { ToolReview } from "@/lib/types";

export const manusAi: ToolReview = {
  slug: "manus-ai",
  name: "Manus AI",
  tagline: "Hosted autonomous AI agent you talk to through Telegram, WhatsApp, and Slack -- the 'no DevOps' alternative to OpenClaw and Hermes",
  category: "ai-personal-agents",
  url: "https://manus.im/",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 7,
    features: 7.5,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      period: "month",
      features: [
        "Limited daily tasks",
        "Telegram and WhatsApp integration",
        "Standard model",
      ],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: [
        "Unlimited standard tasks",
        "All messaging platforms",
        "Priority execution",
        "Browser automation",
      ],
    },
    {
      plan: "Team",
      price: "$60",
      period: "month / seat",
      features: [
        "Shared agent workspace",
        "Admin controls",
        "Higher-tier models",
        "Integration webhooks",
      ],
    },
  ],

  pros: [
    "Zero setup -- sign up, connect Telegram, done, and that's the killer feature for anyone who doesn't want to run a server",
    "Hosted compute means the agent works even when your laptop is closed, which OpenClaw and Hermes can't match without paying for a VPS",
    "Real messaging-first UX that non-technical users can actually operate -- this is the agent you give to a spouse or business partner",
    "Browser automation and web actions work out of the box without configuring Docker, Playwright, or five environment variables",
  ],
  cons: [
    "Closed source and vendor-hosted -- your conversations, skills, and credentials live on someone else's servers, which is a hard no for some use cases",
    "Monthly subscription on top of inevitable usage-based billing -- cost ceiling is less predictable than 'I pay Anthropic for tokens' with OpenClaw",
    "Feature velocity trails open-source competitors -- OpenClaw's SOUL.md ecosystem adds capabilities faster than Manus's roadmap",
    "Less control over the LLM behind the agent -- you can't swap to DeepSeek or a local model the way you can with OpenClaw or Hermes",
  ],
  knownIssues: [
    {
      description: "Occasional rate-limiting on free tier during peak hours, tasks silently queue rather than error, which can look like a stall",
      source: "Reddit r/aiToolForBusiness",
      date: "2026-03",
    },
    {
      description: "Browser automation failures on sites with aggressive bot detection, support is to retry with different flows",
      source: "Manus community forum",
      date: "2026-04",
    },
  ],
  bestFor: "Non-technical users and small business operators who want an autonomous agent reachable from their phone without running any infrastructure. The right pick if 'I don't want to learn Docker' is a hard requirement and you can live with SaaS tradeoffs.",
  notFor: "Anyone who wants to own their agent's data and skills end-to-end, or who needs to swap LLM providers freely. If self-hosting is an option, OpenClaw or Hermes will give you more capability for less ongoing cost.",
  verdict: "Manus AI is the hosted counterweight to the open-source wave. It's less powerful than OpenClaw or Hermes on raw capability, but dramatically easier to adopt -- and for 80% of would-be agent users, 'easier to adopt' is the feature they actually need. The Pro tier at $20/month is fair if you'd otherwise spend a weekend on setup and $10/month on a VPS. Just go in knowing you're picking convenience and paying for it in lock-in and control.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Manus AI official site", url: "https://manus.im/", dateAccessed: "2026-04-13" },
    { name: "Reddit r/aiToolForBusiness: OpenClaw alternatives", url: "https://www.reddit.com/r/aiToolForBusiness/comments/1rd8pww/50_openclaw_alternatives_for_business/", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://manus.im/",
  status: "active",
  metaTitle: "Manus AI Review 2026: Hosted Autonomous AI Agent Over Telegram, Tested",
  metaDescription: "Manus AI review. Hosted autonomous agent over Telegram/WhatsApp/Slack. The no-setup alternative to OpenClaw and Hermes. Scores, pricing, trade-offs. April 2026.",
};
