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
      plan: "By Usage",
      price: "$0.05/min",
      period: "Vapi hosting fee",
      features: [
        "$5 free credits to start; models passed through at cost",
        "2 organizations, 1 Vapi number, 4 concurrent calls, 14-day data retention",
        "Community (Discord) support, email without SLA",
        "Vapi's own estimate for 1,000 min: $82-$129 all-in",
      ],
    },
    {
      plan: "Core",
      price: "$29",
      period: "month + usage",
      features: [
        "5 Vapi numbers, 10 concurrent calls",
        "30-day data retention, ZDR included",
        "Email support, 2-business-day SLA",
      ],
    },
    {
      plan: "Pro",
      price: "$999",
      period: "month minimum (10% of hosting fee)",
      features: [
        "10 organizations, 30 concurrent calls",
        "180-day retention, RBAC + ZDR",
        "Dedicated Slack support, 1-business-day SLA, 99% uptime SLA",
      ],
    },
    {
      plan: "Premier",
      price: "Custom",
      features: [
        "Named support team, 1-hour P0 SLA, 99.9% uptime SLA",
        "Custom RBAC + ZDR + SSO, dedicated SIP",
        "Add-ons: HIPAA $2,000/mo, extra concurrency $10/line/mo",
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
    "The $0.05/min hosting fee is only part of the bill -- Vapi's own calculator puts a typical stack at $0.08-$0.13/min, and third-party reviews report $0.15-$0.35/min with premium providers",
    "Documentation is poor and support is near non-existent; expect week-long waits for help",
    "Working assistants break when upstream APIs or models update, requiring emergency fixes",
    "No easy way to delete your account or remove payment info once added",
    "Steep learning curve -- this is a developer tool, not a business tool",
  ],
  knownIssues: [
    {
      description: "PRICING CHECK (2026-10-19): vapi.ai/pricing now sells **Success Packages** on top of the unchanged $0.05/min Vapi hosting fee: **By Usage** ($0 to start, $5 free credits, 4 concurrent calls, community support), **Core $29/month** (10 concurrent calls, 30-day retention, ZDR, 2-business-day email SLA), **Pro at 10% of the hosting fee with a $999/month minimum** (30 concurrent calls, 180-day retention, RBAC, Slack support, 99% uptime SLA) and **Premier** (custom; 1-hour P0 SLA, 99.9% uptime, SSO, dedicated SIP). Add-ons: HIPAA compliance $2,000/month, extra concurrency $10 per line per month, extra organizations $20 each. Models are passed through at cost; Vapi telephony/SIP, WebSockets and Daily WebRTC transport are free, Twilio $0.008-$0.014/min. Vapi's own calculator estimates **$82-$129 for 1,000 minutes** (Deepgram + OpenAI + ElevenLabs), lower than the $0.15-$0.35/min third-party estimate this page has cited.",
      source: "vapi.ai/pricing",
      date: "2026-10-19",
    },
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
    "Developers building custom voice AI products who want full control over every component and don't mind managing multiple provider relationships. Production teams will want at least the $29 Core package for concurrency and an email SLA.",
  notFor:
    "Business users looking for a turnkey phone agent solution. The complexity, hidden costs, and maintenance burden will eat your time.",
  verdict:
    "Vapi is the most flexible voice agent platform out there, and that flexibility is both its strength and its curse. You can build almost anything, but you'll spend serious engineering time doing it, and the bills add up fast once you stack all the provider fees. Support is a known weak point, and Vapi now sells it explicitly: the free By Usage tier gets community support only, and SLAs start at the $29/month Core package. If you have the dev resources, it's powerful. If you don't, look at simpler alternatives.",

  lastReviewedDate: "2026-10-19",
  dataSources: [
    { name: "Vapi pricing", url: "https://vapi.ai/pricing", dateAccessed: "2026-10-19" },
    { name: "Vapi AI official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Lindy.ai review", dateAccessed: "2026-04-02" },
    { name: "Coval.dev review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://vapi.ai",
  status: "active",
  metaTitle: "Vapi AI Review 2026: Flexible Voice Agent Platform or Hidden Cost Trap?",
  metaDescription:
    "Honest Vapi AI review. $0.05/min hosting plus Core $29 and Pro $999 support packages; real all-in cost per minute explained. Pricing, known issues, verdict. October 2026.",
};
