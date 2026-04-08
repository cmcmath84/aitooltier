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
    { plan: "Free", price: "$0", features: ["Limited GPT-5.2", "Web browsing", "Basic image gen"] },
    { plan: "Go", price: "$8", period: "month", features: ["GPT-5.2 Instant", "Image generation", "File uploads"] },
    { plan: "Plus", price: "$20", period: "month", features: ["GPT-5.4 Standard", "DALL-E 3", "Advanced Data Analysis", "Custom GPTs", "1M token context"] },
    { plan: "Pro", price: "$200", period: "month", features: ["GPT-5.4 Pro", "GPT-5.4 Thinking mode", "Unlimited usage", "Priority access"] },
    { plan: "Business", price: "$20", period: "seat/month (annual)", features: ["GPT-5.4", "Admin controls", "Data privacy", "Custom GPTs"] },
  ],

  pros: [
    "The most polished AI chat experience available -- it just works",
    "All-in-one: text, image gen, code execution, file analysis, web browsing in one app",
    "Custom GPTs let you build mini AI apps without coding",
    "Mobile app is excellent -- voice mode is genuinely useful",
    "GPT-5.4 with 1M token context handles entire codebases and long documents",
  ],
  cons: [
    "Free tier has gotten more restrictive over time",
    "GPT-5.4 Pro at $200/mo is hard to justify unless you live in the chat",
    "Privacy concerns -- conversations used for training by default",
    "Multi-step agent workflows still occasionally hallucinate or get stuck",
  ],
  knownIssues: [
    { description: "Memory feature sometimes surfaces irrelevant stored memories or forgets things it should remember", source: "Reddit r/ChatGPT", date: "2026-03" },
    { description: "Custom GPTs occasionally break when OpenAI updates models", source: "OpenAI Community Forum", date: "2026-02" },
    { description: "GPT-5.4 Thinking mode latency can be 30+ seconds for complex queries -- frustrating for back-and-forth use", source: "Reddit r/ChatGPT", date: "2026-04" },
  ],
  bestFor: "Everyone. Seriously -- if you're new to AI or want the most complete all-in-one package, ChatGPT is the default recommendation.",
  notFor: "Power users who need the absolute best writing quality (Claude) or total privacy (local Llama). Also not for anyone opposed to OpenAI's data practices.",
  verdict: "ChatGPT is the Toyota Camry of AI chatbots. It's not the flashiest or the absolute best at any one thing, but it does everything well, it's reliable, and the ecosystem around it is massive. For most people, this is the only AI chatbot they need.",

  lastReviewedDate: "2026-04-08",
  dataSources: [
    { name: "OpenAI official site", dateAccessed: "2026-04-08" },
    { name: "OpenAI GPT-5.4 announcement", dateAccessed: "2026-04-08" },
    { name: "Reddit r/ChatGPT", dateAccessed: "2026-04-08" },
    { name: "Hands-on daily use", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://chat.openai.com",
  status: "active",
  metaTitle: "ChatGPT Review 2026: GPT-5.4, ChatGPT Go, and All Plans",
  metaDescription: "ChatGPT review. GPT-5.4 with 1M context, new $8/mo Go plan, Plus, Pro, Business. Still the best all-in-one AI chatbot? Scores, pricing, known issues. April 2026.",
};
