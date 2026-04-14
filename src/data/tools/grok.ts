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
      plan: "Free",
      price: "$0",
      features: ["~10 prompts per 2 hours", "Basic Grok access", "Requires X account"],
    },
    {
      plan: "X Premium",
      price: "$8",
      period: "month",
      features: ["Higher query limits", "Grok 4.20 access", "Bundled X social features"],
    },
    {
      plan: "X Premium+",
      price: "$40",
      period: "month",
      features: ["Higher Grok 4.20 access", "Ad-free X", "Priority responses"],
    },
    {
      plan: "SuperGrok",
      price: "$30",
      period: "month",
      features: ["Full Grok 4.20 (4-agent multi-agent system)", "DeepSearch mode", "Highest rate limits", "Think mode", "$300/yr option (16% off)"],
    },
    {
      plan: "SuperGrok Heavy",
      price: "$300",
      period: "month",
      features: ["Grok 4 Heavy exclusive access", "Highest priority", "Multi-agent at scale"],
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
    {
      description: "Grok 4.20's 4-agent system (Grok, Harper, Benjamin, Lucas) can take 30+ seconds for complex queries as agents debate internally",
      source: "Reddit r/grok",
      date: "2026-04",
    },
  ],
  bestFor: "People who live on X/Twitter and want an AI that can tap into that data in real-time. Also good for users who find mainstream chatbots too sanitized and want something with more personality.",
  notFor: "Enterprise users who need reliable, consistent outputs. Also not the best pick if you don't use X -- the real-time data advantage disappears and you're left with a solid-but-not-best-in-class LLM.",
  verdict: "Grok has come a long way from being dismissed as Elon's pet project. The Grok 3 models are legitimately competitive, and the real-time X integration is a unique differentiator that no other chatbot can match. But the value proposition gets muddier when you strip away the X angle -- at $30/mo for SuperGrok, you're paying a premium for personality and Twitter data. If those matter to you, Grok is great. If not, Claude or ChatGPT give you more for less.",

  lastReviewedDate: "2026-04-08",
  dataSources: [
    { name: "xAI official site", dateAccessed: "2026-04-08" },
    { name: "xAI Grok 4.20 announcement", dateAccessed: "2026-04-08" },
    { name: "Reddit r/grok, r/artificial", dateAccessed: "2026-04-08" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-04-08" },
    { name: "Hands-on testing", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://grok.x.ai",
  status: "active",
  benchmarks: {
    modelName: "Grok 4.20",
    scores: [
      { name: "MMLU", score: 88.5, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 85.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 90.0, maxScore: 100, unit: "%" },
      { name: "HLE", score: 50.7, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1420,
    lastUpdated: "2026-04-13",
  },
  metaTitle: "Grok 4.20 Review 2026: SuperGrok, Multi-Agent AI With X Integration",
  metaDescription: "Grok 4.20 review. New 4-agent multi-agent system, SuperGrok $30/mo, Heavy $300, real-time X data, rapid weekly learning. Scores, pricing. April 2026.",
};
