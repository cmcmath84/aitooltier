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
      features: ["Limited messages/day", "Claude Sonnet", "Basic features"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: ["5x more usage", "Claude Opus access", "Priority access"],
    },
    {
      plan: "API",
      price: "$3-15",
      period: "per 1M tokens",
      features: ["Full model access", "200K context window", "Tool use"],
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
  ],
  bestFor: "Writers, analysts, developers, and anyone who values quality of output over quantity of features. If you care about how good the actual text is, Claude is the best.",
  notFor: "People who want an all-in-one platform with image generation, plugins, and browsing built in. ChatGPT's ecosystem is bigger.",
  verdict: "Claude is the LLM you pick when quality matters more than features. The writing is noticeably better, the reasoning is sharper, and the 200K context window is a real advantage for long documents. But ChatGPT has a bigger ecosystem with more integrations. If you're choosing one to pay $20/mo for, it comes down to: do you want better outputs (Claude) or more features (ChatGPT)?",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Anthropic official site", dateAccessed: "2026-03-26" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-03-26" },
    { name: "Reddit r/ClaudeAI", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://claude.ai",
  status: "active",
  metaTitle: "Claude Review 2026: Best LLM for Writing and Reasoning?",
  metaDescription: "Honest Claude review by Anthropic. Best writing quality, 200K context, but limited free tier. Full scores, pricing, and comparison. March 2026.",
};
