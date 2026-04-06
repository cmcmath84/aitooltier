import { ToolReview } from "@/lib/types";

export const vapiAi: ToolReview = {
  slug: "vapi-ai",
  name: "Vapi AI",
  tagline: "Developer platform for building and deploying AI voice agents with modular provider support",
  category: "ai-voice-agents",
  url: "https://vapi.ai",

  scores: {
    easeOfUse: 5,
    outputQuality: 7,
    value: 5,
    features: 8,
    overall: 6.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Pay-As-You-Go",
      price: "$0.05/min",
      period: "platform fee",
      features: [
        "$0.05/min orchestration (STT, LLM, TTS, telephony billed separately)",
        "Real total cost: $0.15-0.35/min depending on providers",
        "Assistants API, function calling, knowledge base support",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Volume discounts",
        "Dedicated support",
        "Custom SLAs",
        "Advanced security features",
      ],
    },
  ],

  pros: [
    "Extremely flexible -- pick your own STT, LLM, TTS, and telephony providers",
    "Squads feature lets you chain multiple specialized agents in a single call with handoffs",
    "Function calling lets agents trigger external APIs mid-conversation",
    "Knowledge base support (RAG) so agents can reference your docs during live calls",
  ],
  cons: [
    "Advertised $0.05/min is misleading -- real costs land between $0.15 and $0.35/min once you add all providers",
    "Documentation is poor and support is near non-existent; expect week-long waits for help",
    "Working assistants break when upstream APIs or models update, requiring emergency fixes",
    "No easy way to delete your account or remove payment info once added",
    "Steep learning curve -- this is a developer tool, not a business tool",
  ],
  knownIssues: [
    {
      description:
        "Working assistants randomly break after Vapi platform updates or upstream model changes, requiring immediate developer attention",
      source: "Trustpilot, Reddit",
      date: "2026-01",
    },
    {
      description:
        "Users report inability to delete accounts or remove credit card information from the platform",
      source: "Trustpilot",
      date: "2025-12",
    },
    {
      description:
        "Real per-minute costs are 3-4x higher than the advertised $0.05/min platform fee when all provider costs are included",
      source: "Reddit, Dograh AI review",
      date: "2026-02",
    },
  ],
  bestFor:
    "Developers building custom voice AI products who want full control over every component and don't mind managing multiple provider relationships.",
  notFor:
    "Business users looking for a turnkey phone agent solution. The complexity, hidden costs, and maintenance burden will eat your time.",
  verdict:
    "Vapi is the most flexible voice agent platform out there, and that flexibility is both its strength and its curse. You can build almost anything, but you'll spend serious engineering time doing it, and the bills add up fast once you stack all the provider fees. Support is a known weak point. If you have the dev resources, it's powerful. If you don't, look at simpler alternatives.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Vapi AI official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Lindy.ai review", dateAccessed: "2026-04-02" },
    { name: "Coval.dev review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://vapi.ai",
  status: "active",
  metaTitle: "Vapi AI Review 2026: Flexible Voice Agent Platform or Hidden Cost Trap?",
  metaDescription:
    "Honest Vapi AI review. Developer voice agent platform at $0.05/min base (real cost $0.15-0.35/min). Full pricing breakdown, known issues, and verdict.",
};
