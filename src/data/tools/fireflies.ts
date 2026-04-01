import { ToolReview } from "@/lib/types";

export const fireflies: ToolReview = {
  slug: "fireflies",
  name: "Fireflies.ai",
  tagline: "AI meeting notetaker with 6,000+ integrations that records, transcribes, and summarizes your calls",
  category: "ai-business-productivity",
  url: "https://fireflies.ai",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 7,
    value: 7.5,
    features: 9,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["800 min storage", "Limited transcription", "AI summaries"],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: ["Unlimited transcription", "8,000 min storage", "CRM integrations"],
    },
    {
      plan: "Business",
      price: "$19",
      period: "month",
      features: ["Unlimited storage", "Conversation intelligence", "Custom vocabulary"],
    },
  ],

  pros: [
    "Integration list is massive -- 6,000+ apps means it plugs into basically any workflow you already have",
    "60+ language support makes it one of the most globally accessible meeting tools available",
    "Action item extraction and meeting summaries save real time -- you can skip re-watching recordings",
    "Conversation intelligence features on Business plan are genuinely useful for sales teams tracking deal progress",
  ],
  cons: [
    "Transcription accuracy drops noticeably with heavy accents, background noise, or multiple people talking at once",
    "The free tier's 800-minute storage cap fills up fast if you're in meetings all day",
    "The bot occasionally fails to join meetings -- you show up expecting notes and get nothing",
    "Per-seat pricing adds up quickly for larger teams compared to alternatives like Otter.ai",
  ],
  knownIssues: [
    {
      description: "Bot sometimes doesn't join Zoom meetings when the meeting link format is non-standard or uses a passcode",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Speaker identification frequently misattributes dialogue when more than 4-5 people are on a call",
      source: "Reddit r/sales",
      date: "2026-01",
    },
  ],
  bestFor: "Sales teams that need CRM-integrated call recording, remote teams that want searchable meeting archives, and managers who sit in too many meetings to take notes manually.",
  notFor: "Small teams on a budget who just need basic transcription -- Otter.ai is cheaper. Also not ideal if your meetings regularly involve heavy crosstalk or non-English speakers with strong accents.",
  verdict: "Fireflies wins on breadth -- the integration count and language support are hard to beat. Where it falls short is transcription accuracy in less-than-ideal conditions, which is exactly when you need a notetaker most. The Pro plan at $10/seat is fair for what you get, but check whether the accuracy is good enough for your specific accent and meeting style before committing a whole team. The free tier is worth testing first.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "Fireflies.ai official site", dateAccessed: "2026-03-31" },
    { name: "G2 Reviews", dateAccessed: "2026-03-31" },
    { name: "Reddit r/sales", dateAccessed: "2026-03-31" },
    { name: "Capterra reviews", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://fireflies.ai",
  status: "active",
  metaTitle: "Fireflies.ai Review 2026: AI Meeting Notetaker With 6,000+ Integrations",
  metaDescription: "Fireflies.ai review. Leading AI meeting assistant with transcription, summaries, CRM integration. But how accurate is it really? Scores, pricing. March 2026.",
};
