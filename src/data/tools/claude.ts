import { ToolReview } from "@/lib/types";

export const claude: ToolReview = {
  slug: "claude",
  name: "Claude (Anthropic)",
  tagline: "Anthropic's flagship LLM -- Opus 4.7 (launched April 16, 2026) with 1M-token context, high-res vision, new xhigh reasoning level, and the most natural conversational style",
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
      features: ["5x more usage than Free", "Claude Opus 4.7 + Sonnet 4.6", "Extended thinking, xhigh reasoning level", "Priority access"],
    },
    {
      plan: "Max (5x)",
      price: "$100",
      period: "month",
      features: ["5x Pro usage", "Priority queue", "Opus 4.7 with full xhigh + max reasoning"],
    },
    {
      plan: "Max (20x)",
      price: "$200",
      period: "month",
      features: ["20x Pro usage", "Highest priority", "All generally-available models", "Best for power users and agents"],
    },
    {
      plan: "API (Opus 4.7)",
      price: "$5 / $25",
      period: "per 1M tokens (input/output)",
      features: ["Unchanged from Opus 4.6 pricing", "1M context window", "Tool use, MCP, high-res vision up to 3.75MP", "Bedrock, Vertex AI, Foundry"],
    },
  ],

  pros: [
    "Best writing quality of any LLM -- Opus 4.7 outputs read like a human wrote them, not a robot, and instruction-following is substantially sharper than 4.6",
    "1M token context window for enterprise API means it can process entire codebases, huge document sets, or long agent traces without chunking",
    "Opus 4.7 brings a real step-change in coding (~13% lift on benchmarks, 3x more production tasks resolved per Anthropic) and the new xhigh reasoning level lets you dial in the effort/latency tradeoff",
    "First Claude model with genuine high-res vision -- 3.75MP images (2,576px long edge, 3x prior limit) means charts, diagrams, whiteboards, and dense UIs finally work properly",
  ],
  cons: [
    "Free tier is more limited than ChatGPT's -- you hit the cap faster",
    "No image generation built in (unlike ChatGPT with DALL-E)",
    "Fewer third-party integrations and plugins compared to OpenAI's ecosystem",
    "Can be overly cautious and refuse requests that are perfectly fine",
  ],
  knownIssues: [
    {
      description: "Claude Haiku 3 (claude-3-haiku-20240307) retires 2026-04-19 -- if any API code still targets the 2024 Haiku snapshot, migrate to Haiku 4.5 immediately. Anthropic gave 60 days' notice on 2026-02-19",
      source: "Anthropic model deprecations page",
      date: "2026-04",
    },
    {
      description: "Claude Sonnet 4 and Opus 4 retirement was announced 2026-04-14 with ~60-day notice -- target retirement around 2026-06-14. If your product relies on those specific snapshots, schedule migration work to Sonnet 4.6 / Opus 4.7 before then",
      source: "Anthropic model deprecations page",
      date: "2026-04",
    },
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
      description: "Claude Mythos Preview is Anthropic's most capable model but is gated to ~40 pilot orgs via Project Glasswing for cybersecurity use (AWS, Apple, Cisco, CrowdStrike, Google, JPMorgan, Linux Foundation, Microsoft, Nvidia, Palo Alto Networks among them). It is NOT in consumer Pro/Max tiers -- those get Opus 4.7, which Anthropic concedes trails Mythos on cyber tasks. Anthropic has stated Mythos Preview will NOT be made generally available in the near term",
      source: "Axios, Anthropic Mythos Preview announcement",
      date: "2026-04",
    },
    {
      description: "Opus 4.7 uses an updated tokenizer -- input tokens may increase roughly 1.0-1.35x depending on content type, slightly raising per-request cost even though the published per-token rate is unchanged",
      source: "Anthropic release notes",
      date: "2026-04",
    },
  ],
  bestFor: "Writers, analysts, developers, and anyone who values quality of output over quantity of features. If you care about how good the actual text is, Claude is the best.",
  notFor: "People who want an all-in-one platform with image generation, plugins, and browsing built in. ChatGPT's ecosystem is bigger.",
  verdict: "Claude is the LLM you pick when quality matters more than features. Opus 4.7 (April 16, 2026) widened the quality lead on writing and made real step-change gains in software engineering and long-context reasoning, while keeping the $5/$25 per 1M token pricing. The new xhigh reasoning level is the biggest practical change for coding agents -- you can finally dial in real reasoning effort short of max without the latency cost. The 1M context window, 3.75MP vision, and MCP support make it the most capable generally-available model from any vendor today. If you're choosing one to pay $20/mo for, it still comes down to: do you want better outputs (Claude) or more features (ChatGPT)?",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "Anthropic: Introducing Claude Opus 4.7", url: "https://www.anthropic.com/news/claude-opus-4-7", dateAccessed: "2026-04-16" },
    { name: "CNBC: Anthropic rolls out Claude Opus 4.7", url: "https://www.cnbc.com/2026/04/16/anthropic-claude-opus-4-7-model-mythos.html", dateAccessed: "2026-04-16" },
    { name: "Axios: Opus 4.7 trails unreleased Mythos", url: "https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos", dateAccessed: "2026-04-16" },
    { name: "Claude Mythos Preview / Project Glasswing", url: "https://red.anthropic.com/2026/mythos-preview/", dateAccessed: "2026-04-16" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing (Opus 4.7 via claude.ai and API)", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://claude.ai",
  status: "active",
  benchmarks: {
    modelName: "Claude Opus 4.7 (4.6 baseline scores shown; 4.7 announced 13% coding lift, 3x production task completion)",
    scores: [
      { name: "MMLU", score: 91.3, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 91.3, maxScore: 100, unit: "%" },
      { name: "AIME 2024", score: 99.8, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 94.0, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 80.8, maxScore: 100, unit: "%" },
      { name: "ARC-AGI", score: 75.2, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1504,
    lastUpdated: "2026-04-16",
  },
  personality: {
    oneLiner: "The thoughtful consultant",
    tone: "Measured, careful, and slightly formal. Claude explains tradeoffs rather than handing back one-liner answers, asks clarifying questions when a request is ambiguous, and hedges openly when it is not confident.",
    quirks: "More willing than most models to refuse edgy or ambiguous requests, pushes back on premises it disagrees with, and will flag when you are probably asking the wrong question instead of just answering the one you typed.",
  },
  metaTitle: "Claude Opus 4.7 Review (April 16, 2026): xhigh Reasoning, 3.75MP Vision, 1M Context",
  metaDescription: "Claude Opus 4.7 review. Launched April 16, 2026. New xhigh reasoning, 3x higher-res vision (3.75MP), 1M context, 13% coding lift. $5/$25 per 1M tokens. Pro $20/mo.",
};
