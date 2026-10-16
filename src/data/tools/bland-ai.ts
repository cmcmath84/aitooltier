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
      period: "platform fee; $0.14/min talk time",
      features: ["Two credits plus an inbound number ($15/mo value), no card required", "$0.05/min transfer time", "10 concurrent calls, 100 calls/day, 1 voice, 10 knowledge bases", "No token charges -- LLM, STT and TTS included in the per-minute rate"],
    },
    {
      plan: "Build",
      price: "$299",
      period: "month platform fee; $0.12/min talk time",
      features: ["$0.04/min transfer time", "50 concurrent calls, 2,000 calls/day, 1,000/hour", "5 voices, 50 knowledge bases"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Contracted per-minute rate and concurrency", "On-prem / VPC deployment, dedicated orchestration server", "BAA, SSO, data residency, 99.9% uptime SLA", "Forward-deployed engineers"],
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
      description: "PRICE CHECK -- THE $499 SCALE TIER IS GONE; THREE PLANS NOW (verified 2026-10-15 on the live pricing page): Bland now lists **Start** ($0 platform fee, $0.14/min talk, $0.05/min transfer, 10 concurrent / 100 calls a day), **Build** ($299/month platform fee, $0.12/min talk, $0.04/min transfer, 50 concurrent / 2,000 a day) and **Enterprise** (custom). The **Scale plan ($499/month, $0.11/min) this page carried since April no longer appears.** Bland now advertises 'No token charges. No model-provider pass-throughs' -- LLM, transcription and premium TTS are inside the per-minute rate. The Start and Build per-minute rates are unchanged from April.",
      source: "Bland AI pricing page (bland.ai/pricing, title 'Pricing | Bland AI') -- fetched 2026-10-15 via curl",
      date: "2026-10-15",
    },
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

  lastReviewedDate: "2026-10-15",
  dataSources: [
    { name: "Bland AI pricing -- Start $0 + $0.14/min, Build $299/mo + $0.12/min, Enterprise custom; Scale tier removed (verified 2026-10-15)", url: "https://www.bland.ai/pricing", dateAccessed: "2026-10-15" },
    { name: "Bland AI official site & docs", dateAccessed: "2026-04-02" },
    { name: "Lindy.ai review", dateAccessed: "2026-04-02" },
    { name: "Dialora.ai review", dateAccessed: "2026-04-02" },
    { name: "Synthflow review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://bland.ai",
  status: "active",
  metaTitle: "Bland AI Review 2026: AI Phone Agent Worth the Cost?",
  metaDescription: "Honest Bland AI review. AI phone calling agent at $0.14/min with no platform fee, or $0.12/min on the $299/mo Build plan (the $499 Scale tier is gone, verified October 2026), 800ms latency and sparse support. Full scores, pricing, and verdict.",
};
