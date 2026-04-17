import { ToolReview } from "@/lib/types";

export const alexaPlus: ToolReview = {
  slug: "alexa-plus",
  name: "Alexa+",
  tagline: "Amazon's reborn consumer AI assistant -- rolls out to every Alexa device with memory, multi-turn agent tasks, and Fire TV navigation",
  category: "ai-chatbots",
  url: "https://www.amazon.com/alexaplus",

  scores: {
    easeOfUse: 9.5,
    outputQuality: 7,
    value: 8.5,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Prime Included",
      price: "$0",
      features: [
        "Included with Amazon Prime ($149/year or $14.99/month as of 2026)",
        "Works on all existing Alexa devices (Echo, Fire TV, third-party)",
        "Multi-turn agent tasks, memory, cross-app chaining",
      ],
    },
    {
      plan: "Standalone",
      price: "$19.99",
      period: "month",
      features: [
        "For non-Prime households",
        "Same feature set as Prime tier",
        "No Prime benefits bundled",
      ],
    },
  ],

  pros: [
    "Actually useful on-device now -- multi-turn conversations on Echo that don't reset every query, Fire TV navigation that works, and task chaining across apps (book a reservation while setting a timer)",
    "Free for Prime members -- if you already pay $149/year for Prime, you're getting a major AI assistant rollout at no additional cost, which is structurally hard to beat on value",
    "Install base is unmatched -- hundreds of millions of existing Alexa devices auto-upgraded to Alexa+ on rollout, so the ecosystem is there from day one without anyone needing to buy new hardware",
    "Smart home and device control is still the best in class -- this is the use case where voice-first actually makes sense, and Alexa+ keeps the lead over Google Assistant and Siri",
  ],
  cons: [
    "Output quality lags ChatGPT/Gemini for knowledge tasks -- ask it something nuanced and you'll feel the gap immediately, this is not GPT-5-class reasoning",
    "Amazon ecosystem lock-in (Prime Video over Netflix, Whole Foods over other delivery, Kindle over other e-books) makes some responses feel commercial rather than genuinely helpful",
    "Privacy concerns persist -- always-on microphones in your house remain Amazon's data, and the company's track record on voice recording retention and review has been mixed",
    "Multi-turn agent tasks still break on edge cases -- anything sophisticated that works reliably in ChatGPT often stumbles on Alexa+, especially when it spans more than two apps",
  ],
  knownIssues: [
    {
      description: "Cross-device conversation handoff occasionally drops context when moving from Echo to Fire TV mid-task, forcing users to repeat prompts",
      source: "Reddit r/alexa",
      date: "2026-03",
    },
    {
      description: "Non-Prime $19.99 pricing feels steep next to free basic Alexa, especially since new capabilities roll out unevenly across older devices",
      source: "The Verge Alexa+ review",
      date: "2026-02",
    },
  ],
  bestFor: "Households already in the Amazon ecosystem (Prime, multiple Echo devices, Fire TV, Ring) -- especially families who use voice assistants for everyday tasks. If you're a Prime subscriber with Alexa hardware, Alexa+ is essentially a free major upgrade that lands where you already are.",
  notFor: "Users outside the Amazon ecosystem, privacy-conscious users who don't want always-on microphones, or anyone who wants the smartest AI assistant available. ChatGPT on iOS and Gemini on Android both produce noticeably better outputs and don't require hardware investment.",
  verdict: "Alexa+ is Amazon's overdue upgrade to what voice assistants should have been three years ago -- genuine multi-turn agent capability, persistent memory, and task chaining across your home ecosystem. It's not ChatGPT-smart, but for Prime households the value math is hard to beat: every Echo device in the house just got materially more capable for zero additional cost. The honest read: if you already own Alexa hardware and pay for Prime, Alexa+ is a no-brainer starting today. If you're picking a single AI assistant in 2026 and starting from zero, Gemini on Android or ChatGPT on iOS offers better intelligence for free.",

  lastReviewedDate: "2026-04-16",
  dataSources: [
    { name: "Amazon Alexa+ product page", url: "https://www.amazon.com/alexaplus", dateAccessed: "2026-04-16" },
    { name: "TechCrunch: Alexa+ available to everyone in the U.S.", url: "https://techcrunch.com/2026/02/04/alexa-amazons-ai-assistant-is-now-available-to-everyone-in-the-u-s/", dateAccessed: "2026-04-16" },
    { name: "CNBC: Alexa+ US release", url: "https://www.cnbc.com/2026/02/04/amazon-alexa-plus-us-releas.html", dateAccessed: "2026-04-16" },
    { name: "The Verge Alexa+ review", dateAccessed: "2026-04-16" },
    { name: "Reddit r/alexa user reports", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://www.amazon.com/alexaplus",
  status: "active",
  personality: {
    oneLiner: "The reborn voice assistant",
    tone: "Warm, casual, consumer-friendly. Alexa+ sounds like the same helpful-family-helper voice as classic Alexa, just now with the capability to actually follow through on complex multi-step tasks. Responses are concise and spoken-first, optimized for hearing rather than reading on a screen.",
    quirks: "Defaults toward Amazon ecosystem actions when ambiguous (Prime Video over Netflix, Whole Foods over other grocery). Occasionally references things it did 'for you' in shopping assistant mode. Still has the classic Alexa habit of asking clarifying questions out loud instead of making assumptions.",
  },
  metaTitle: "Alexa+ Review 2026: Amazon's Rebuilt AI Assistant, Tested",
  metaDescription: "Alexa+ review. Amazon's multi-turn AI assistant across Echo, Fire TV, and Ring. Free for Prime, $19.99 standalone. Pros, cons, vs ChatGPT. April 2026.",
};
