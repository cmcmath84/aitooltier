import { ToolReview } from "@/lib/types";

export const grammarly: ToolReview = {
  slug: "grammarly",
  name: "Grammarly",
  tagline: "AI writing assistant that catches errors everywhere you type -- now with full AI rewriting",
  category: "ai-writing-tools",
  url: "https://grammarly.com",

  scores: {
    easeOfUse: 10,
    outputQuality: 7,
    value: 7,
    features: 8,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Basic grammar/spelling", "Tone detection", "100 AI prompts/mo"] },
    { plan: "Premium", price: "$12", period: "month", features: ["Advanced suggestions", "Plagiarism detection", "1,000 AI prompts/mo", "Full rewriting"] },
    { plan: "Business", price: "$15", period: "user/month", features: ["Brand tones", "Analytics", "Admin controls", "2,000 AI prompts/mo"] },
  ],

  pros: [
    "Works everywhere -- browser extension, desktop app, mobile keyboard, Google Docs, Office",
    "Grammar and spelling correction is the best available, period",
    "Tone and clarity suggestions genuinely improve writing",
    "The AI rewriting feature is useful for polishing, not just generating from scratch",
  ],
  cons: [
    "AI writing capabilities are basic compared to Claude or ChatGPT",
    "Premium feels necessary -- the free tier misses too many suggestions",
    "Can be overly aggressive with suggestions, making writing feel generic",
    "Desktop app is heavy and can slow down your system",
  ],
  knownIssues: [
    { description: "Browser extension occasionally conflicts with web-based editors (Notion, Confluence), causing formatting issues", source: "Grammarly Community", date: "2026-03" },
  ],
  bestFor: "Non-native English speakers, professionals who write lots of emails, and anyone who wants a passive grammar net running in the background. It catches things you'd miss.",
  notFor: "Creative writers who have a deliberate style (Grammarly will try to 'fix' it) or anyone who just needs AI content generation (use Claude/ChatGPT).",
  verdict: "Grammarly is less of an AI tool and more of a writing safety net that now has AI features bolted on. It's excellent at what it was built for -- catching errors and improving clarity. The AI rewriting is fine but not why you'd buy it. Think of it as spell-check on steroids, not an AI writer.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Grammarly official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Daily use testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://grammarly.com",
  status: "active",
  metaTitle: "Grammarly Review 2026: AI Writing Assistant or Just Spell Check?",
  metaDescription: "Grammarly review. Best grammar checker available, now with AI rewriting. But is it worth paying for? Scores, pricing, honest take. March 2026.",
};
