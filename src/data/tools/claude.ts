import { ToolReview } from "@/lib/types";

export const claude: ToolReview = {
  slug: "claude",
  name: "Claude (Anthropic)",
  tagline: "Anthropic's flagship LLM -- strong reasoning, long context, and the most natural conversational style",
  category: "ai-llms",
  url: "https://claude.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 9,
    value: 8,
    features: 8,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Limited messages/day", "Claude Sonnet 4.6", "Basic features"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: ["5x more usage", "Claude Opus 4.6", "Claude Mythos 5 access", "Priority access"],
    },
    {
      plan: "Max (5x)",
      price: "$100",
      period: "month",
      features: ["5x Pro usage", "Priority queue", "Mythos 5 + Opus 4.6"],
    },
    {
      plan: "Max (20x)",
      price: "$200",
      period: "month",
      features: ["20x Pro usage", "Highest priority", "All models", "Best for power users"],
    },
    {
      plan: "API",
      price: "$3-15",
      period: "per 1M tokens",
      features: ["Full model access", "200K-1M context window", "Tool use", "MCP support"],
    },
  ],

  pros: [
    "Best writing quality of any LLM -- outputs read like a human wrote them, not a robot",
    "200K token context window means it can process entire codebases or long documents",
    "Strongest at nuanced analysis and following complex instructions",
    "Less likely to hallucinate than GPT-4 on factual questions in our testing",
  ],
  cons: [
    "Free tier is more limited than ChatGPT's -- you hit the cap faster",
    "No image generation built in (unlike ChatGPT with DALL-E)",
    "Fewer third-party integrations and plugins compared to OpenAI's ecosystem",
    "Can be overly cautious and refuse requests that are perfectly fine",
  ],
  knownIssues: [
    {
      description: "Free tier rate limits feel aggressive -- heavy users get throttled within a few conversations",
      source: "Reddit r/ClaudeAI",
      date: "2026-03",
    },
    {
      description: "Occasionally refuses benign creative writing requests due to safety filters",
      source: "Reddit r/ClaudeAI",
      date: "2026-02",
    },
    {
      description: "Mythos 5 (10T params) is positioned for cybersecurity and coding -- general chat users may not see a clear quality jump over Opus 4.6",
      source: "Anthropic announcement, Reddit r/ClaudeAI",
      date: "2026-04",
    },
  ],
  bestFor: "Writers, analysts, developers, and anyone who values quality of output over quantity of features. If you care about how good the actual text is, Claude is the best.",
  notFor: "People who want an all-in-one platform with image generation, plugins, and browsing built in. ChatGPT's ecosystem is bigger.",
  verdict: "Claude is the LLM you pick when quality matters more than features. The writing is noticeably better, the reasoning is sharper, and the 200K context window is a real advantage for long documents. But ChatGPT has a bigger ecosystem with more integrations. If you're choosing one to pay $20/mo for, it comes down to: do you want better outputs (Claude) or more features (ChatGPT)?",

  lastReviewedDate: "2026-04-08",
  dataSources: [
    { name: "Anthropic official site", dateAccessed: "2026-04-08" },
    { name: "Anthropic Mythos 5 announcement", dateAccessed: "2026-04-08" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-08" },
    { name: "Reddit r/ClaudeAI", dateAccessed: "2026-04-08" },
    { name: "Hands-on testing", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://claude.ai",
  status: "active",
  benchmarks: {
    modelName: "Claude Opus 4.6",
    scores: [
      { name: "MMLU", score: 91.3, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 91.3, maxScore: 100, unit: "%" },
      { name: "AIME 2024", score: 99.8, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 94.0, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 80.8, maxScore: 100, unit: "%" },
      { name: "ARC-AGI", score: 75.2, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1504,
    lastUpdated: "2026-04-13",
  },
  metaTitle: "Claude Review 2026: Mythos 5, Opus 4.6, and Max Plans",
  metaDescription: "Claude review. Mythos 5 (10T params) for security/coding, Opus 4.6, new Max $100/$200 tiers. Best writing quality. Scores, pricing, comparisons. April 2026.",
};
