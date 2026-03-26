import { ToolReview } from "@/lib/types";

export const chatgpt: ToolReview = {
  slug: "chatgpt",
  name: "ChatGPT",
  tagline: "The chatbot that started the AI revolution -- most popular AI assistant in the world",
  category: "ai-chatbots",
  url: "https://chat.openai.com",

  scores: {
    easeOfUse: 10,
    outputQuality: 8,
    value: 8,
    features: 9,
    overall: 8.8,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["GPT-4o mini", "Limited GPT-4o", "Web browsing"] },
    { plan: "Plus", price: "$20", period: "month", features: ["GPT-4o", "DALL-E 3", "Advanced Data Analysis", "Custom GPTs"] },
    { plan: "Pro", price: "$200", period: "month", features: ["Unlimited GPT-4o", "o1 pro mode", "Priority access"] },
  ],

  pros: [
    "The most polished AI chat experience available -- it just works",
    "All-in-one: text, image gen, code execution, file analysis, web browsing in one app",
    "Custom GPTs let you build mini AI apps without coding",
    "Mobile app is excellent -- voice mode is genuinely useful",
  ],
  cons: [
    "Free tier has gotten more restrictive over time",
    "GPT-4o quality perceived as declining by power users compared to early GPT-4",
    "Pro plan at $200/mo is hard to justify for most people",
    "Privacy concerns -- conversations used for training by default",
  ],
  knownIssues: [
    { description: "Memory feature sometimes surfaces irrelevant stored memories or forgets things it should remember", source: "Reddit r/ChatGPT", date: "2026-03" },
    { description: "Custom GPTs occasionally break when OpenAI updates models", source: "OpenAI Community Forum", date: "2026-02" },
  ],
  bestFor: "Everyone. Seriously -- if you're new to AI or want the most complete all-in-one package, ChatGPT is the default recommendation.",
  notFor: "Power users who need the absolute best writing quality (Claude) or total privacy (local Llama). Also not for anyone opposed to OpenAI's data practices.",
  verdict: "ChatGPT is the Toyota Camry of AI chatbots. It's not the flashiest or the absolute best at any one thing, but it does everything well, it's reliable, and the ecosystem around it is massive. For most people, this is the only AI chatbot they need.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "OpenAI official site", dateAccessed: "2026-03-26" },
    { name: "Reddit r/ChatGPT", dateAccessed: "2026-03-26" },
    { name: "Hands-on daily use", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://chat.openai.com",
  status: "active",
  metaTitle: "ChatGPT Review 2026: Still the Best AI Chatbot?",
  metaDescription: "ChatGPT review. The most popular AI chatbot, all-in-one features, but is it still the best? Honest scores, pricing, known issues. March 2026.",
};
