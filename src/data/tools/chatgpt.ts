import { ToolReview } from "@/lib/types";

export const chatgpt: ToolReview = {
  slug: "chatgpt",
  name: "ChatGPT",
  tagline: "The chatbot that started the AI revolution -- most popular AI assistant in the world. ChatGPT Images 2.0 / gpt-image-2 (2026-04-21) brings native-reasoning image gen, 8-image character-continuity sets, 3:1 to 1:3 aspect ratios",
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
    { plan: "Free", price: "$0", features: ["Limited GPT-5.2", "Web browsing", "Basic image gen", "Default model after GPT-4o retirement (2026-02-13)"] },
    { plan: "Go", price: "$8", period: "month", features: ["GPT-5.2 Instant", "Image generation", "File uploads"] },
    { plan: "Plus", price: "$20", period: "month", features: ["GPT-5.4 Standard", "Custom GPTs", "1M token context", "Image gen via gpt-image-2 (Images 2.0, 2026-04-21) with native reasoning + 8-image continuity"] },
    { plan: "Pro ($100, new 2026-04-09)", price: "$100", period: "month", features: ["5x Plus usage (10x Codex during launch promo through 2026-05-31)", "GPT-5.4 Thinking", "Targets Claude Max price point", "Best for longer high-effort Codex sessions"] },
    { plan: "Pro (Ultra $200)", price: "$200", period: "month", features: ["GPT-5.4 Pro + Thinking", "Unlimited usage", "Priority access", "Power users and agent workloads"] },
    { plan: "Business", price: "$20", period: "seat/month (annual, price CUT from $25 on 2026-04-02)", features: ["GPT-5.4", "Admin controls", "Data privacy", "Custom GPTs"] },
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
    { description: "ChatGPT Images 2.0 / gpt-image-2 launched 2026-04-21 -- OpenAI's first image model with native reasoning ('thinks before it draws'), 3:1 to 1:3 aspect ratios, generates up to 8 related images with character/object continuity across the set, materially better multilingual text rendering. Free tier gets standard outputs; advanced thinking-mode gen is gated to Plus / Pro / Business / Enterprise. Reportedly took #1 on Image Arena leaderboard within 12 hours by ~242 Elo points (largest first-day jump on record). API model id: gpt-image-2. Bundled deprecation: DALL-E 2 + 3 retire 2026-05-12 -- code calling legacy endpoints will fail", source: "OpenAI Introducing ChatGPT Images 2.0, Tom's Guide, The New Stack", date: "2026-04" },
    { description: "GPT-4o, GPT-4.1, GPT-4.1-mini, and o4-mini were retired on 2026-02-13 (ChatGPT) / 2026-02-16 (API). Business/Enterprise/Edu Custom GPTs had grace period through 2026-04-03. If you have older prompts or agents hardcoded to 'gpt-4o', they are broken -- migrate to GPT-5.2 or GPT-5.4", source: "OpenAI deprecations, TechCrunch backlash coverage", date: "2026-02" },
    { description: "New $100/mo Pro tier launched 2026-04-09 (between Plus $20 and Pro Ultra $200). OpenAI positioned it explicitly as a response to Claude Max pricing. Existing $200 Pro is retained for unlimited usage; the $100 tier offers 5x Plus quotas and 10x Codex during the launch promo through 2026-05-31", source: "OpenAI community post, TechCrunch, The Next Web", date: "2026-04" },
    { description: "Legacy Deep Research mode was removed from ChatGPT on 2026-03-26 -- replaced by the newer agentic Deep Research. Users who preferred the old behavior (more predictable, less agentic) have no direct replacement", source: "OpenAI help changelog", date: "2026-03" },
    { description: "ChatGPT Business annual was cut from $25 to $20 per seat on 2026-04-02 -- a rare downward pricing move. Existing customers on the $25 tier should check whether their renewal reflects the new rate", source: "OpenAI pricing page", date: "2026-04" },
    { description: "Memory feature sometimes surfaces irrelevant stored memories or forgets things it should remember", source: "Reddit r/ChatGPT", date: "2026-03" },
    { description: "Custom GPTs occasionally break when OpenAI updates models", source: "OpenAI Community Forum", date: "2026-02" },
    { description: "GPT-5.4 Thinking mode latency can be 30+ seconds for complex queries -- frustrating for back-and-forth use", source: "Reddit r/ChatGPT", date: "2026-04" },
  ],
  bestFor: "Everyone. Seriously -- if you're new to AI or want the most complete all-in-one package, ChatGPT is the default recommendation.",
  notFor: "Power users who need the absolute best writing quality (Claude) or total privacy (local Llama). Also not for anyone opposed to OpenAI's data practices.",
  verdict: "ChatGPT is the Toyota Camry of AI chatbots. It's not the flashiest or the absolute best at any one thing, but it does everything well, it's reliable, and the ecosystem around it is massive. For most people, this is the only AI chatbot they need.",

  lastReviewedDate: "2026-04-22",
  dataSources: [
    { name: "OpenAI: Introducing ChatGPT Images 2.0 (2026-04-21)", url: "https://openai.com/index/introducing-chatgpt-images-2-0/", dateAccessed: "2026-04-22" },
    { name: "Tom's Guide: ChatGPT Images 2.0 launch", url: "https://www.tomsguide.com/ai/chatgpt-launched-images-2-0-and-its-the-first-one-designers-might-actually-use", dateAccessed: "2026-04-22" },
    { name: "OpenAI: Introducing new $100/month Pro tier (2026-04-09)", url: "https://community.openai.com/t/introducing-new-100-month-pro-tier/1378752", dateAccessed: "2026-04-18" },
    { name: "OpenAI: Retiring GPT-4o and older models", url: "https://openai.com/index/retiring-gpt-4o-and-older-models/", dateAccessed: "2026-04-18" },
    { name: "Reddit r/ChatGPT", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://chat.openai.com",
  status: "active",
  benchmarks: {
    modelName: "GPT-5.4",
    scores: [
      { name: "MMLU", score: 91.0, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 92.8, maxScore: 100, unit: "%" },
      { name: "AIME 2024", score: 83.3, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 95.0, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 72.0, maxScore: 100, unit: "%" },
      { name: "ARC-AGI", score: 73.3, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1480,
    lastUpdated: "2026-04-13",
  },
  personality: {
    oneLiner: "The eager generalist",
    tone: "Friendly, upbeat, and helpful. ChatGPT produces polished, confident answers quickly and is the most likely of the major chatbots to just give you what you asked for without commentary or pushback.",
    quirks: "Leans formulaic -- lots of bulleted lists, headings, and 'certainly!' openers unless you explicitly ask for a different style. Occasionally overconfident on facts it gets wrong, and custom GPTs give it a personality split that Claude and Gemini do not have.",
  },
  metaTitle: "ChatGPT Review 2026: gpt-image-2 (Apr 21), $100 Pro Tier, GPT-5.4",
  metaDescription: "ChatGPT review. ChatGPT Images 2.0 / gpt-image-2 launched 2026-04-21 (native reasoning + 8-image continuity). $100 Pro tier, GPT-5.4 1M context, DALL-E sunset May 12.",
};
