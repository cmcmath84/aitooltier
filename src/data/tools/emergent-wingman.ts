import { ToolReview } from "@/lib/types";

export const emergentWingman: ToolReview = {
  slug: "emergent-wingman",
  name: "Wingman (Emergent)",
  tagline: "Emergent's messaging-first personal AI agent -- launched 2026-04-15 from the India vibe-coding startup ($70M raise, $300M valuation). Positioned as an OpenClaw alternative with safer defaults",
  category: "ai-personal-agents",
  url: "https://emergent.sh/wingman",

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
      plan: "Free",
      price: "$0",
      features: [
        "WhatsApp and Telegram integration",
        "Limited daily messages + task capacity",
        "Basic skill library",
        "Emergent handles LLM hosting",
      ],
    },
    {
      plan: "Pro",
      price: "$12",
      period: "month",
      features: [
        "Unlimited WhatsApp/Telegram usage",
        "Full skill library + custom skills",
        "Higher context windows",
        "Priority response queue",
      ],
    },
    {
      plan: "Team",
      price: "$30",
      period: "month/seat",
      features: [
        "Team-shared skills + memory",
        "Admin controls + audit log",
        "Priority support",
        "Still hosted -- no self-host option in 2026-04",
      ],
    },
  ],

  pros: [
    "Same-day fresh -- launched 2026-04-15, behind a founder team that already shipped Emergent (8M builders, 1.5M MAU) and just raised $70M at a $300M valuation, so backing is real",
    "WhatsApp + Telegram first-class, same UX pattern as OpenClaw but with a consumer-polished onboarding -- you can have a working agent in about 3 minutes without a terminal or any config files",
    "Hosted by default so the security-surface risks that have plagued OpenClaw (credential handling, prompt-injection exposure across 135k public instances) don't apply the same way here -- Emergent operates the infrastructure and rotates keys",
    "Backed by a startup with proven distribution in emerging markets (India, Southeast Asia, Latin America) -- same geographies where aitooltier's April 2026 GSC traffic spiked, suggesting real pull for messaging-first AI in non-US markets",
  ],
  cons: [
    "Brand new -- no track record yet on uptime, skill ecosystem depth, or whether Emergent can sustain consumer AI pricing at scale (their coding-agent product operates at steep margins)",
    "Hosted-only in April 2026. If your core requirement is self-hosting / data sovereignty / bring-your-own-LLM, Hermes Agent or OpenClaw remain the right answer despite their ergonomic tradeoffs",
    "Wingman naming collision: several unrelated AI products use 'Wingman' (code-assistant startups, Salesforce plugin, etc.) -- expect SEO and trademark churn over the next year",
    "Limited skill library at launch -- Emergent is building the SOUL-style custom skills framework but as of April 2026 the catalog is thin compared to the 4,000+ community OpenClaw skills",
  ],
  knownIssues: [
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
  verdict: "Wingman is the most interesting new personal-agent launch of Q2 2026. Emergent's founder team has credibility from their coding-agent product (8M builders, $70M raise, $300M valuation) and they're applying the same playbook to consumer agents: strong onboarding, hosted defaults, messaging-first UX. If it executes, it becomes the 'plug and play' answer in the category where OpenClaw and Hermes still demand real setup effort. If it doesn't, it'll be the usual story of a well-funded launch that doesn't escape its initial hype window. The bet is that a hosted, consumer-polished agent on WhatsApp is what most of the world actually wants. Worth watching closely through June 2026 -- by then you'll know whether the uptime, the skill ecosystem, and the geography tailwinds cohere into a real product or not.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "TechCrunch: Emergent Wingman launch", url: "https://techcrunch.com/2026/04/15/indias-vibe-coding-startup-emergent-enters-openclaw-like-ai-agent-space/", dateAccessed: "2026-04-17" },
    { name: "SiliconANGLE: Emergent launches Wingman personal AI agent", url: "https://siliconangle.com/2026/04/15/emergent-launches-wingman-personal-ai-agent-everyone/", dateAccessed: "2026-04-17" },
    { name: "Businesswire: Emergent Wingman announcement", url: "https://www.businesswire.com/news/home/20260415413794/en/", dateAccessed: "2026-04-17" },
    { name: "Emergent product page", url: "https://emergent.sh/wingman", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://emergent.sh/wingman",
  status: "active",
  metaTitle: "Wingman (Emergent) Review April 2026: OpenClaw-Style Agent, Hosted + WhatsApp-First",
  metaDescription: "Wingman review. Emergent's messaging-first AI agent, launched April 15 2026. WhatsApp + Telegram, hosted infra, $12/mo Pro. OpenClaw alternative for non-technical users. Scores + tradeoffs.",
};
