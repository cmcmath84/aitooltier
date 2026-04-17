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
      features: ["Grok 4.3 Beta exclusive access (as of 2026-04-17)", "Grok 4 Heavy model", "Highest priority", "Multi-agent at scale"],
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
      description: "Grok 4.20's 4-agent system (Grok, Harper, Benjamin, Lucas) can take 30+ seconds for complex queries as agents debate internally. Grok 4.20 Beta 2 (landed ~2026-04-07) improved instruction-following, reduced hallucinations, better LaTeX and image search -- partially addresses the slowness and reliability complaints from early 4.20 feedback",
      source: "Reddit r/grok, IBTimes",
      date: "2026-04",
    },
    {
      description: "Grok 4.3 Beta dropped 2026-04-17 as a SuperGrok Heavy exclusive ($300/mo tier). Consumer Premium and Premium+ users do not get access yet. If the SuperGrok Heavy feature list on this page says 'Grok 4 Heavy exclusive access,' note that in April 2026 that means Grok 4.3 Beta specifically",
      source: "BuildFastWithAI, xAI release notes",
      date: "2026-04",
    },
  ],
  bestFor: "People who live on X/Twitter and want an AI that can tap into that data in real-time. Also good for users who find mainstream chatbots too sanitized and want something with more personality.",
  notFor: "Enterprise users who need reliable, consistent outputs. Also not the best pick if you don't use X -- the real-time data advantage disappears and you're left with a solid-but-not-best-in-class LLM.",
  verdict: "Grok has come a long way from being dismissed as Elon's pet project. The Grok 3 models are legitimately competitive, and the real-time X integration is a unique differentiator that no other chatbot can match. But the value proposition gets muddier when you strip away the X angle -- at $30/mo for SuperGrok, you're paying a premium for personality and Twitter data. If those matter to you, Grok is great. If not, Claude or ChatGPT give you more for less.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "xAI official site", url: "https://grok.x.ai", dateAccessed: "2026-04-17" },
    { name: "xAI Grok 4.20 announcement", dateAccessed: "2026-04-17" },
    { name: "IBTimes: Grok 4.20 Beta 2 April 2026", url: "https://www.ibtimes.com.au/grok-420-beta-2-powers-xai-advances-model-tops-benchmarks-saves-lives-april-2026-1866556", dateAccessed: "2026-04-17" },
    { name: "BuildFastWithAI: Grok 4.3 Beta 2026-04-17", url: "https://www.buildfastwithai.com/blogs/grok-4-3-beta-features-review", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis: Grok 4.20", url: "https://artificialanalysis.ai/models/grok-4-20", dateAccessed: "2026-04-17" },
    { name: "Reddit r/grok, r/artificial", dateAccessed: "2026-04-17" },
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
  personality: {
    oneLiner: "The irreverent contrarian",
    tone: "Casual, jokey, and willing to swear. Grok takes strong positions without hedging, leans into an edgy 'based' persona, and cracks jokes far more often than Claude, ChatGPT, or Gemini.",
    quirks: "Engages with topics other chatbots refuse, pulls live context from X so it reflects whatever is trending that hour, and will freely mock things -- including itself. In SuperGrok's multi-agent mode it can sound like several personalities arguing with each other.",
  },
  metaTitle: "Grok 4.20 Review 2026: SuperGrok, Multi-Agent AI With X Integration",
  metaDescription: "Grok 4.20 review. New 4-agent multi-agent system, SuperGrok $30/mo, Heavy $300, real-time X data, rapid weekly learning. Scores, pricing. April 2026.",
};
