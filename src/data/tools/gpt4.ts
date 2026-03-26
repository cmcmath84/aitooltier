import { ToolReview } from "@/lib/types";

export const gpt4: ToolReview = {
  slug: "gpt-4",
  name: "GPT-4 (OpenAI)",
  tagline: "The most well-known LLM with the largest ecosystem of plugins, tools, and integrations",
  category: "ai-llms",
  url: "https://openai.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 9,
    value: 7,
    features: 10,
    overall: 8.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (GPT-4o mini)",
      price: "$0",
      features: ["Limited GPT-4o mini", "Basic features", "Web browsing"],
    },
    {
      plan: "ChatGPT Plus",
      price: "$20",
      period: "month",
      features: ["GPT-4o access", "DALL-E", "Advanced Data Analysis", "GPTs"],
    },
    {
      plan: "API",
      price: "$2.50-10",
      period: "per 1M tokens",
      features: ["All models", "Function calling", "Vision", "Fine-tuning"],
    },
  ],

  pros: [
    "Largest feature set of any LLM -- image gen, browsing, code execution, file analysis, custom GPTs all in one place",
    "GPT-4o is fast and capable for most tasks",
    "Massive third-party ecosystem -- thousands of plugins and integrations",
    "Best multimodal capabilities (text, image, voice in one conversation)",
  ],
  cons: [
    "Output quality for writing is good but not as natural as Claude's",
    "GPT-4 can be verbose and pad responses with unnecessary filler",
    "OpenAI's pricing changes and model naming have been confusing (GPT-4, 4-turbo, 4o, 4o-mini...)",
    "Privacy concerns -- OpenAI uses conversations for training unless you opt out",
  ],
  knownIssues: [
    {
      description: "GPT-4o output quality perceived as declining compared to early GPT-4 -- multiple Reddit threads about 'dumbing down'",
      source: "Reddit r/ChatGPT",
      date: "2026-03",
    },
    {
      description: "Custom GPTs occasionally lose their instructions mid-conversation",
      source: "OpenAI Community Forum",
      date: "2026-02",
    },
  ],
  bestFor: "Anyone who wants everything in one platform. ChatGPT Plus gives you an LLM, image generator, code interpreter, web browser, and custom apps for $20/mo. Unmatched feature breadth.",
  notFor: "Privacy-conscious users, or anyone who values raw output quality over feature count. Claude writes better. Llama is more private.",
  verdict: "GPT-4 is the Swiss Army knife of LLMs. Nothing else gives you this many capabilities in one place. The output quality is strong (not the absolute best for writing, but close), and the ecosystem of GPTs and integrations is unmatched. It's the default recommendation for most people because it does everything well, even if it doesn't do any single thing the best.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "OpenAI official site", dateAccessed: "2026-03-26" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-03-26" },
    { name: "Reddit r/ChatGPT", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://openai.com",
  status: "active",
  metaTitle: "GPT-4 Review 2026: Still the Best All-Around LLM?",
  metaDescription: "GPT-4 and ChatGPT Plus review. Biggest feature set, strong quality, but is it still worth $20/mo? Scores, pricing, known issues. March 2026.",
};
