import { ToolReview } from "@/lib/types";

export const emergentWingman: ToolReview = {
  slug: "emergent-wingman",
  name: "Wingman (Emergent)",
  tagline: "Emergent's hosted personal AI agent, now at getwingman.com. Works through iMessage, WhatsApp and Telegram, connects to 300+ apps, and runs on monthly credits: Starter free (10 credits), Growth $20 (100 credits), Pro $50 (275 credits). Launched 2026-04-15 as an OpenClaw alternative with safer defaults",
  category: "ai-personal-agents",
  url: "https://getwingman.com/",

  scores: {
    easeOfUse: 8.5,
    outputQuality: 8,
    value: 8.5,
    features: 7.5,
    overall: 8.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Starter",
      price: "$0",
      period: "month",
      features: [
        "10 credits",
        "Light automation and tasks, per Emergent's plan description",
        "No credit card required",
        "All plans list 300+ integrations, 100+ skills, unlimited tasks and prolonged memory",
      ],
    },
    {
      plan: "Growth",
      price: "$20",
      period: "month",
      features: [
        "100 credits per month",
        "$1 for the first month",
        "Full operations and workflows, per Emergent's plan description",
        "A daily brief uses 1-2 credits; research uses 3-5, per the Wingman FAQ",
      ],
    },
    {
      plan: "Pro",
      price: "$50",
      period: "month",
      features: [
        "275 credits per month",
        "$19 for the first month",
        "Daily workflows and tasks, per Emergent's plan description",
        "Hosted by Emergent; no self-host option listed",
      ],
    },
  ],

  pros: [
    "Wingman's FAQ documents its security setup: AES-256 encryption at rest, TLS in transit, an isolated sandbox per job, SOC 2 Type I via Emergent, a global kill switch, and an April 2026 red-team by Straiker STAR Labs",
    "Launched 2026-04-15 by the team behind Emergent (8M+ builders, 1.5M MAU), which raised $70M at a $300M valuation, so the backing is real",
    "iMessage, WhatsApp and Telegram are first-class channels, same UX pattern as OpenClaw but with a consumer-polished onboarding -- you can have a working agent in about 3 minutes without a terminal or any config files",
    "Hosted by default so the security-surface risks that have plagued OpenClaw (credential handling, prompt-injection exposure across 135k public instances) don't apply the same way here -- Emergent operates the infrastructure and rotates keys",
    "Backed by a startup with proven distribution in emerging markets (India, Southeast Asia, Latin America) -- same geographies where aitooltier's April 2026 GSC traffic spiked, suggesting real pull for messaging-first AI in non-US markets",
  ],
  cons: [
    "Credit metering ties cost to workload. At the FAQ's rates (1-2 credits for a daily brief, 3-5 for research), Growth's 100 monthly credits cover roughly 50 to 100 briefs or 20 to 33 research tasks",
    "Brand new -- no track record yet on uptime, skill ecosystem depth, or whether Emergent can sustain consumer AI pricing at scale (their coding-agent product operates at steep margins)",
    "Hosted-only as of October 2026. If your core requirement is self-hosting / data sovereignty / bring-your-own-LLM, Hermes Agent or OpenClaw remain the right answer despite their ergonomic tradeoffs",
    "Wingman naming collision: several unrelated AI products use 'Wingman' (code-assistant startups, Salesforce plugin, etc.) -- expect SEO and trademark churn over the next year",
    "Skill library is smaller than OpenClaw's community catalog: Wingman lists 100+ skills and 300+ integrations, against the 4,000+ community OpenClaw skills counted in April 2026",
  ],
  knownIssues: [
    {
      description: "Moved and repriced: emergent.sh/wingman now returns 404 Not Found, and Wingman lives at getwingman.com, marked Built by Emergent. The old Free / Pro $12 / Team $30 per seat plans are replaced by credit plans: Starter free (10 credits), Growth $20/month (100 credits, $1 first month) and Pro $50/month (275 credits, $19 first month). No Team plan is listed on the new site, so the Team row was removed from this page",
      source: "getwingman.com plans and FAQ; emergent.sh/wingman (404), checked 2026-10-29",
      date: "2026-10-29",
    },
    {
      description: "Channels and integrations grew: Emergent's 2026-07-10 security post lists iMessage, WhatsApp and Telegram as Wingman channels and over 300 connected applications, up from WhatsApp and Telegram only at launch",
      source: "Emergent blog: Building Security Into Wingman From the Start",
      date: "2026-07-10",
    },
    {
      description: "New product, limited production track record. Uptime, latency under load, and skill-execution reliability remain unverified outside Emergent's internal beta",
      source: "TechCrunch launch coverage",
      date: "2026-04",
    },
    {
      description: "Trademark / SEO collision with unrelated 'Wingman' AI products (sales automation tools, separate coding assistants). Will complicate branded-search discovery",
      source: "Generic search verification",
      date: "2026-04",
    },
  ],
  bestFor: "Users who want the OpenClaw messaging-first UX without running their own infrastructure, especially in India, Southeast Asia, Latin America, and other markets where WhatsApp is the dominant messaging platform. Good for non-technical users who want a real personal agent without the terminal tax.",
  notFor: "Users who want self-hosting, full data sovereignty, or bring-your-own-LLM flexibility -- Hermes Agent and OpenClaw are still the right answers for those requirements despite their ergonomic costs. Also not yet proven for regulated enterprise deployments.",
  verdict: "Wingman is the most interesting new personal-agent launch of Q2 2026. Emergent's founder team has credibility from their coding-agent product (8M builders, $70M raise, $300M valuation) and they're applying the same playbook to consumer agents: strong onboarding, hosted defaults, messaging-first UX. If it executes, it becomes the 'plug and play' answer in the category where OpenClaw and Hermes still demand real setup effort. If it doesn't, it'll be the usual story of a well-funded launch that doesn't escape its initial hype window. The bet is that a hosted, consumer-polished agent on WhatsApp is what most of the world actually wants. By October 2026 it had its own domain, iMessage support, 300+ integrations and credit plans from $20/month, so Emergent is still investing in it. Uptime and task reliability still lack independent testing.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "Wingman (getwingman.com): plans and FAQ", url: "https://getwingman.com/", dateAccessed: "2026-10-29" },
    { name: "Emergent blog: Building Security Into Wingman From the Start (2026-07-10)", url: "https://emergent.sh/blog/building-security-into-wingman-from-the-start", dateAccessed: "2026-10-29" },
    { name: "TechCrunch: Emergent Wingman launch", url: "https://techcrunch.com/2026/04/15/indias-vibe-coding-startup-emergent-enters-openclaw-like-ai-agent-space/", dateAccessed: "2026-04-17" },
    { name: "SiliconANGLE: Emergent launches Wingman personal AI agent", url: "https://siliconangle.com/2026/04/15/emergent-launches-wingman-personal-ai-agent-everyone/", dateAccessed: "2026-04-17" },
    { name: "Businesswire: Emergent Wingman announcement", url: "https://www.businesswire.com/news/home/20260415413794/en/", dateAccessed: "2026-04-17" },
    { name: "Emergent product page", url: "https://emergent.sh/wingman", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://getwingman.com/",
  status: "active",
  metaTitle: "Wingman (Emergent) Review 2026: Hosted AI Agent on iMessage, WhatsApp and Telegram",
  metaDescription: "Wingman review. Emergent's hosted personal AI agent on iMessage, WhatsApp and Telegram with 300+ app integrations. Free Starter, Growth $20/mo and Pro $50/mo on credits. OpenClaw alternative for non-technical users.",
};
