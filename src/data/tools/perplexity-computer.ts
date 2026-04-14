import { ToolReview } from "@/lib/types";

export const perplexityComputer: ToolReview = {
  slug: "perplexity-computer",
  name: "Perplexity Computer",
  tagline: "Perplexity's general-purpose digital worker -- operates real software like you do, runs for hours or months, routes sub-tasks to Opus, Gemini, GPT-5.2, Grok, and Veo 3.1",
  category: "ai-personal-agents",
  url: "https://www.perplexity.ai/hub/blog/introducing-perplexity-computer",

  scores: {
    easeOfUse: 8.5,
    outputQuality: 9,
    value: 6.5,
    features: 9.5,
    overall: 8.4,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Perplexity Pro",
      price: "$20",
      period: "month",
      features: [
        "Does NOT include Perplexity Computer",
        "Deep Research",
        "Standard Comet browser features",
      ],
    },
    {
      plan: "Perplexity Max",
      price: "$200",
      period: "month",
      features: [
        "Perplexity Computer access",
        "Model Council (Opus 4.6, GPT-5.2, Gemini, Grok, Veo 3.1)",
        "Unlimited Deep Research",
        "Advanced Comet browser",
        "Long-running workflows (hours to months)",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Team seats and admin controls",
        "SOC 2 and data controls",
        "Workspace-scoped agents",
      ],
    },
  ],

  pros: [
    "Best-in-class model routing -- it uses Opus 4.6 for reasoning, Gemini for deep research, GPT-5.2 for long-context recall, Grok for speed, Veo 3.1 for video -- no single open-source agent gets this",
    "Truly long-running -- workflows can run for hours or months across restarts, which is the feature that separates 'agent' from 'chatbot with tools' in 2026",
    "Zero infrastructure, zero sandboxing to configure -- the Max subscription replaces what would otherwise be a weekend of OpenClaw setup plus a VPS bill",
    "Operates real applications through a browser/desktop layer, not just API calls, so it handles web apps that OpenAI-style tool use cannot reach",
  ],
  cons: [
    "$200/month Max tier is the only way to get it -- this is a premium product and the cost adds up fast if you have any other SaaS subscriptions",
    "Closed-source and fully hosted -- your data, your workflows, your credentials live on Perplexity's infrastructure with no self-hosted escape hatch",
    "Sibling product Comet has a documented prompt-injection-to-phishing exploit (March 2026) -- Computer uses the same agentic infrastructure, treat it as an active security surface",
    "Model Council routing is impressive but also a black box -- you don't control which sub-agent gets a task, and you pay one price for all of them whether you wanted GPT-5.2 or not",
  ],
  knownIssues: [
    {
      description: "Comet browser (same agentic stack) was tricked into executing a phishing workflow within 4 minutes in controlled research -- Perplexity Computer inherits the same prompt-injection exposure, credentials held by the agent are at risk",
      source: "The Hacker News, March 2026",
      date: "2026-03",
    },
    {
      description: "Long-running workflows occasionally lose state on model-council handoffs -- Perplexity has acknowledged and is iterating on the orchestration layer",
      source: "Perplexity changelog",
      date: "2026-03",
    },
  ],
  bestFor: "Professionals and small teams who will burn $200/month worth of research, drafting, and multi-step workflow time -- consultants, researchers, analysts, founders. Especially strong if you want frontier models across text, video, and images in one agent without stitching APIs together. The right pick if infrastructure is a non-starter and quality ceiling matters more than cost.",
  notFor: "Anyone price-sensitive (OpenClaw + Claude API is a fraction of the cost), anyone who needs data sovereignty (self-host Hermes instead), or anyone whose workflow doesn't actually need multi-model routing. Also wrong if you want a messaging-first UX -- Perplexity Computer lives in the browser, not in your Telegram.",
  verdict: "Perplexity Computer is the most capable hosted personal agent in 2026 and it's not especially close on output quality -- routing frontier models by task is a genuine architectural advantage over single-model agents. It's also the most expensive option in this category by an order of magnitude, and it lives on infrastructure you don't control with an active prompt-injection exposure on the sibling product. Buy it if your time is worth more than $200/month and the quality difference will show up in your work. Skip it and run OpenClaw or Hermes with Claude API if you're cost-sensitive or security-paranoid -- you'll give up the Model Council but save $150+/month.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Introducing Perplexity Computer", url: "https://www.perplexity.ai/hub/blog/introducing-perplexity-computer", dateAccessed: "2026-04-13" },
    { name: "Perplexity Comet product page", url: "https://www.perplexity.ai/comet", dateAccessed: "2026-04-13" },
    { name: "The Hacker News: Comet phishing exploit", url: "https://thehackernews.com/2026/03/researchers-trick-perplexitys-comet-ai.html", dateAccessed: "2026-04-13" },
    { name: "IBM Think: Comet agentic browser", url: "https://www.ibm.com/think/news/comet-perplexity-take-agentic-browser", dateAccessed: "2026-04-13" },
    { name: "Perplexity changelog", url: "https://www.perplexity.ai/changelog/what-we-shipped---february-6th-2026", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.perplexity.ai/",
  status: "active",
  poweredBy: "Claude Opus 4.6 (core reasoning) + Model Council",
  metaTitle: "Perplexity Computer Review 2026: $200/mo Hosted AI Agent, Tested",
  metaDescription: "Perplexity Computer review. Premium hosted AI agent using Claude Opus 4.6, GPT-5.2, Gemini, Grok, and Veo 3.1. Worth $200/mo? Security risks, real trade-offs. April 2026.",
};
