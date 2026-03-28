import { ToolReview } from "@/lib/types";

export const murfAi: ToolReview = {
  slug: "murf-ai",
  name: "Murf AI",
  tagline: "Text-to-speech that actually sounds like a real person read your script -- not a robot trying its best",
  category: "ai-voice-audio",
  url: "https://murf.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 6,
    features: 7,
    overall: 7,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["10 minutes generation", "Limited voices", "No downloads"],
    },
    {
      plan: "Creator",
      price: "$29",
      period: "month",
      features: ["24 hours generation/year", "120+ voices", "Commercial rights"],
    },
    {
      plan: "Business",
      price: "$79",
      period: "month",
      features: ["96 hours generation/year", "AI voice cloning", "Priority support"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Unlimited generation", "Custom voice cloning", "API access", "SSO"],
    },
  ],

  pros: [
    "Voice quality is genuinely impressive -- most listeners can't tell it's AI on the first listen",
    "The editor is simple and intuitive, you paste text and start tweaking pitch and pacing right away",
    "Good selection of accents and languages -- useful if you're producing content for different markets",
    "Emphasis and pause controls let you fine-tune delivery so it doesn't sound flat or monotone",
  ],
  cons: [
    "Pricing is steep for what you get -- 24 hours per year on the Creator plan runs out fast",
    "Some voices still have an uncanny quality, especially with technical jargon or unusual names",
    "Free tier is basically a demo -- no downloads means you can't actually use the output for anything",
    "Voice cloning is locked behind the Business plan, which is $79/month -- hard to justify for small creators",
  ],
  knownIssues: [
    {
      description: "Long-form scripts (10+ minutes) sometimes produce audio with inconsistent pacing between sections",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Exported audio occasionally has slight clipping at the beginning of sentences after pauses",
      source: "Reddit r/voiceover",
      date: "2026-01",
    },
  ],
  bestFor: "Content creators and course builders who need professional voiceovers without hiring voice talent.",
  notFor: "Anyone who needs truly emotional or nuanced delivery -- AI voice still can't match a skilled human narrator.",
  verdict: "Murf AI delivers solid text-to-speech that's good enough for explainer videos, e-learning, and podcasts. The voices are natural-sounding and the editor is easy to use. But the pricing feels aggressive for the generation limits you get, and the free tier is too restricted to properly evaluate the product. If you're producing a lot of audio content, the per-hour cost adds up quickly compared to alternatives like ElevenLabs.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Murf AI official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/voiceover", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://murf.ai",
  status: "active",
  metaTitle: "Murf AI Review 2026: Realistic AI Voiceovers for Content Creators",
  metaDescription: "Murf AI review. Natural-sounding text-to-speech with 120+ voices and accent options. But is the pricing worth it? Honest scores, pros, cons. March 2026.",
};
