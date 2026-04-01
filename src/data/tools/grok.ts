import { ToolReview } from "@/lib/types";

export const grok: ToolReview = {
  slug: "grok",
  name: "Grok",
  tagline: "xAI's irreverent chatbot with a direct line to X/Twitter -- real-time data meets unfiltered personality",
  category: "ai-llms",
  url: "https://grok.x.ai",

  scores: {
    easeOfUse: 7,
    outputQuality: 7.5,
    value: 7.5,
    features: 8,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (X Basic)",
      price: "$0",
      features: ["Limited queries per day", "Basic Grok access", "Requires X account"],
    },
    {
      plan: "X Premium",
      price: "$8",
      period: "month",
      features: ["Higher query limits", "Grok 2 access", "Priority responses"],
    },
    {
      plan: "SuperGrok",
      price: "$30",
      period: "month",
      features: ["Grok 3 access", "DeepSearch mode", "Highest rate limits", "Think mode"],
    },
  ],

  pros: [
    "Real-time access to X/Twitter data is genuinely useful for tracking breaking news and trending topics",
    "Grok 3 benchmarks are competitive with GPT-4o and Claude 3.5 -- this is not a vanity project anymore",
    "The personality is refreshing if you're tired of overly cautious AI assistants -- it'll actually joke around",
    "DeepSearch mode does solid multi-step research, pulling from web and X data simultaneously",
  ],
  cons: [
    "The snarky personality gets old fast when you're trying to get serious work done",
    "Tied to the X ecosystem -- you need an X account, and the real-time data skews toward X's user base",
    "SuperGrok at $30/mo is steep when Claude Pro and ChatGPT Plus are $20 with arguably better core models",
    "Image generation and analysis capabilities lag behind what you get from ChatGPT or Gemini",
  ],
  knownIssues: [
    {
      description: "Real-time X data can surface misinformation from viral posts without adequate fact-checking",
      source: "Reddit r/artificial",
      date: "2026-02",
    },
    {
      description: "Free tier rate limits are aggressive -- many users report hitting caps within a few queries",
      source: "X/Twitter user reports",
      date: "2026-03",
    },
  ],
  bestFor: "People who live on X/Twitter and want an AI that can tap into that data in real-time. Also good for users who find mainstream chatbots too sanitized and want something with more personality.",
  notFor: "Enterprise users who need reliable, consistent outputs. Also not the best pick if you don't use X -- the real-time data advantage disappears and you're left with a solid-but-not-best-in-class LLM.",
  verdict: "Grok has come a long way from being dismissed as Elon's pet project. The Grok 3 models are legitimately competitive, and the real-time X integration is a unique differentiator that no other chatbot can match. But the value proposition gets muddier when you strip away the X angle -- at $30/mo for SuperGrok, you're paying a premium for personality and Twitter data. If those matter to you, Grok is great. If not, Claude or ChatGPT give you more for less.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "xAI official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/artificial", dateAccessed: "2026-03-31" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://grok.x.ai",
  status: "active",
  metaTitle: "Grok Review 2026: xAI's Real-Time Chatbot With X/Twitter Integration",
  metaDescription: "Grok review. Real-time X data access, Grok 3 competitive benchmarks, witty personality. But is SuperGrok worth $30/mo? Scores, pricing. March 2026.",
};
