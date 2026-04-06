import { ToolReview } from "@/lib/types";

export const blandAi: ToolReview = {
  slug: "bland-ai",
  name: "Bland AI",
  tagline: "AI phone calling agent that handles inbound and outbound calls for businesses",
  category: "ai-voice-agents",
  url: "https://bland.ai",

  scores: {
    easeOfUse: 5,
    outputQuality: 7,
    value: 6,
    features: 7,
    overall: 6.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Start",
      price: "$0",
      features: [
        "$0.14/min connected calls",
        "Basic phone agent",
        "Community Discord support",
      ],
    },
    {
      plan: "Build",
      price: "$299",
      period: "month",
      features: [
        "$0.12/min connected calls",
        "Higher call concurrency",
        "Email support",
      ],
    },
    {
      plan: "Scale",
      price: "$499",
      period: "month",
      features: [
        "$0.11/min connected calls",
        "Priority support",
        "Advanced analytics",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Custom per-minute rates",
        "Unlimited call caps",
        "Dedicated infrastructure",
        "SLA guarantees",
      ],
    },
  ],

  pros: [
    "Handles both inbound and outbound calls with decent conversational ability",
    "API-first design gives developers full control over call flows and logic",
    "Supports call transfers to human agents mid-conversation",
    "Scales to high call volumes without needing your own telephony stack",
  ],
  cons: [
    "~800ms latency creates noticeable pauses that make calls feel unnatural",
    "Customer support is widely reported as slow or unresponsive, even for paying customers",
    "Documentation is sparse -- expect to spend time in Discord hunting for answers",
    "No built-in CRM integrations; everything requires custom webhook work",
    "Price jumped 56% on the free tier in late 2025 with little warning",
  ],
  knownIssues: [
    {
      description:
        "Average 800ms response latency creates awkward pauses during dynamic conversations, making the AI agent obvious to callers",
      source: "Multiple review sites",
      date: "2026-02",
    },
    {
      description:
        "No staging environment or call simulator -- you have to debug flows on live calls, which is risky at scale",
      source: "Reddit r/VAPI_AI, competitor reviews",
      date: "2026-01",
    },
    {
      description:
        "Free tier pricing increased from $0.09/min to $0.14/min in December 2025, frustrating existing users",
      source: "Bland AI docs, user reports",
      date: "2025-12",
    },
  ],
  bestFor:
    "Dev teams building outbound calling automations who can handle the webhook-heavy integration work and don't mind getting their hands dirty with API setup.",
  notFor:
    "Non-technical teams or anyone expecting plug-and-play CRM integration. The setup complexity and weak documentation will slow you down.",
  verdict:
    "Bland AI works if you have developers who can wire up the integrations and tolerate the latency. The call quality is decent but not indistinguishable from a human. The bigger concern is support -- when things break (and they will), you're mostly on your own in Discord. At $0.14/min on the free tier, test carefully before committing volume.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Bland AI official site & docs", dateAccessed: "2026-04-02" },
    { name: "Lindy.ai review", dateAccessed: "2026-04-02" },
    { name: "Dialora.ai review", dateAccessed: "2026-04-02" },
    { name: "Synthflow review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://bland.ai",
  status: "active",
  metaTitle: "Bland AI Review 2026: AI Phone Agent Worth the Cost?",
  metaDescription:
    "Honest Bland AI review. AI phone calling agent with $0.14/min pricing, 800ms latency, and sparse support. Full scores, pricing breakdown, and verdict.",
};
