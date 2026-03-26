import { ToolReview } from "@/lib/types";

export const gemini: ToolReview = {
  slug: "gemini",
  name: "Gemini (Google)",
  tagline: "Google's LLM with deep Google Workspace integration and a massive 1M+ token context window",
  category: "ai-llms",
  url: "https://gemini.google.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Gemini 1.5 Flash", "Basic features", "Google integration"],
    },
    {
      plan: "Gemini Advanced",
      price: "$19.99",
      period: "month",
      features: ["Gemini 1.5 Pro", "1M token context", "2TB Google storage", "Workspace integration"],
    },
    {
      plan: "API",
      price: "$0.075-5",
      period: "per 1M tokens",
      features: ["All models", "1M+ context", "Grounding with Google Search"],
    },
  ],

  pros: [
    "1 million+ token context window is the largest available -- can process entire books",
    "Best Google Workspace integration (Gmail, Docs, Drive, Calendar)",
    "Free tier is more generous than Claude's",
    "Gemini Advanced includes 2TB Google One storage -- real added value",
    "API pricing is very competitive, especially for Flash model",
  ],
  cons: [
    "Output quality for creative writing is the weakest of the big three (GPT-4, Claude, Gemini)",
    "Hallucination rate is higher than Claude in our testing",
    "Google's track record of killing products makes long-term commitment feel risky",
    "The Gemini app UI feels like Google slapped AI onto an existing product",
  ],
  knownIssues: [
    {
      description: "Image generation of people was temporarily disabled after generating historically inaccurate results, partially restored but still limited",
      source: "The Verge, Google Blog",
      date: "2026-01",
    },
    {
      description: "Gemini Advanced occasionally gives different quality responses than the same model via API",
      source: "Reddit r/Bard",
      date: "2026-02",
    },
  ],
  bestFor: "Google Workspace power users. If you live in Gmail, Docs, and Drive, Gemini Advanced integrates directly into your workflow. Also great for developers who need the cheapest API with the longest context window.",
  notFor: "Anyone who needs the best raw output quality. Claude and GPT-4 both write better. Also not for anyone spooked by Google's history of abandoning products.",
  verdict: "Gemini's strength is the ecosystem play. The 1M context window is genuinely useful for long documents, and the Google Workspace integration is something neither OpenAI nor Anthropic can match. But purely as an LLM, the output quality is a step behind Claude and GPT-4. Pick Gemini if you're deep in Google's ecosystem. Otherwise, the other two are better standalone.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Google Gemini official site", dateAccessed: "2026-03-26" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-03-26" },
    { name: "Reddit r/Bard", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://gemini.google.com",
  status: "active",
  metaTitle: "Gemini Review 2026: Google's LLM vs ChatGPT and Claude",
  metaDescription: "Google Gemini review. 1M context window, great Google integration, but output quality trails GPT-4 and Claude. Full scores. March 2026.",
};
