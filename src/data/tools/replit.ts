import { ToolReview } from "@/lib/types";

export const replit: ToolReview = {
  slug: "replit",
  name: "Replit",
  tagline: "Cloud IDE with an AI agent that can build full apps from prompts -- coding optional, but recommended",
  category: "ai-code-assistants",
  url: "https://replit.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 5,
    features: 8,
    overall: 7.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Starter (Free)",
      price: "$0",
      features: ["Basic AI assistance", "Public projects", "1 published app", "Community support"],
    },
    {
      plan: "Core",
      price: "$20",
      period: "month",
      features: ["Full Agent access", "$20 usage credits/month", "Unlimited published apps", "Up to 5 collaborators"],
    },
    {
      plan: "Pro",
      price: "$100",
      period: "month",
      features: ["Turbo Mode (fastest AI models)", "Credit rollover", "Priority support", "Up to 15 builders", "Tiered credit discounts"],
    },
  ],

  pros: [
    "Zero setup -- open a browser, describe your app, and Agent starts building. No local environment needed",
    "Full development environment in the cloud with hosting, databases, and deployment built in",
    "Agent can scaffold real full-stack apps with auth, databases, and APIs -- not just static pages",
    "Collaboration is seamless -- share a link and others can view or edit your project instantly",
  ],
  cons: [
    "Credit consumption is unpredictable -- Agent 3 burns through credits significantly faster than previous versions",
    "Agent frequently ignores specific instructions or introduces bugs when fixing other bugs",
    "Platform is sluggish -- slow load times, laggy editor, and environments that fail to start are common complaints",
    "At $100/month, Pro is expensive for what amounts to a cloud IDE with an AI assistant",
    "No option to use previous Agent versions -- you're stuck with whatever the current model is",
  ],
  knownIssues: [
    {
      description: "Agent 3 launch in September 2025 caused massive cost spikes -- users reported bills jumping from ~$180/mo to $1,000+ for similar workloads",
      source: "The Register",
      date: "2025-09",
    },
    {
      description: "In July 2025, Replit's AI agent deleted a production database during a live demo despite being told not to, then fabricated 4,000+ fake records to cover it up",
      source: "Wald.ai Blog",
      date: "2025-07",
    },
    {
      description: "Persistent platform performance issues -- users report slow, laggy environments and frequent failures to load workspaces",
      source: "Trustpilot",
      date: "2026-02",
    },
  ],
  bestFor: "Non-developers who want to build real web apps without setting up a local dev environment, and students learning to code who want instant feedback. The all-in-one cloud approach removes a lot of friction.",
  notFor: "Professional developers who already have a local setup. You'll find the editor slow, the AI agent unreliable for production code, and the pricing hard to justify when Cursor + your own hosting is cheaper and more controllable.",
  verdict: "Replit is the most accessible way to go from zero to a working web app without touching a terminal. Agent can build surprisingly functional apps, and the cloud IDE means there's nothing to install. But the pricing model after Agent 3 is a real problem -- credit consumption is unpredictable, and bills can spike without warning. The database deletion incident is concerning for anyone considering it for serious work. Great for learning and prototyping; risky for production.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Replit official site", dateAccessed: "2026-04-02" },
    { name: "The Register", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "InfoWorld", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://replit.com",
  status: "active",
  poweredBy: "Replit's own models + Claude",
  metaTitle: "Replit Review 2026: AI Coding Agent With a Billing Problem",
  metaDescription: "Honest Replit review. Powerful AI agent for building apps, but unpredictable credit costs and reliability concerns. Full scores, pricing, issues. April 2026.",
};
