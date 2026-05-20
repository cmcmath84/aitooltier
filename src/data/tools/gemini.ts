import { ToolReview } from "@/lib/types";

export const gemini: ToolReview = {
  slug: "gemini",
  name: "Gemini (Google)",
  tagline: "Google's LLM with deep Google Workspace integration, 2M token context window, and native code execution -- Gemini 3.5 Flash GA 2026-05-19 (I/O 2026), Gemini 3.5 Pro rolling out June 2026, Gemini Spark agent + Managed Agents public preview in the Gemini API",
  category: "ai-llms",
  url: "https://gemini.google.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Gemini 3.5 Flash (GA 2026-05-19)", "Basic features", "Google integration"],
    },
    {
      plan: "Google AI Pro",
      price: "$19.99",
      period: "month",
      features: ["Gemini 3.1 Ultra (Gemini 3.5 Pro rolling out June 2026)", "2M token context", "Code Execution sandbox", "2TB Google storage", "Workspace integration", "Lyria 3 access"],
    },
    {
      plan: "Google AI Ultra",
      price: "$249.99",
      period: "month",
      features: ["Gemini 3.1 Ultra (max usage)", "Gemini 3.1 Flash Live audio", "Gemini Spark agent access (US 18+, rolling out post-I/O 2026)", "Lyria 3 Pro full access", "Highest API priority", "30TB Google storage"],
    },
    {
      plan: "API",
      price: "$0.075-5",
      period: "per 1M tokens",
      features: ["All models", "2M context", "Flash-Lite at $0.25/M input", "Grounding with Google Search", "Code Execution", "Mandatory spend caps (April 2026)"],
    },
  ],

  pros: [
    "2 million token context window is the largest available -- can process entire books and full codebases in one prompt",
    "Best Google Workspace integration (Gmail, Docs, Drive, Calendar)",
    "Free tier is more generous than Claude's",
    "Gemini Advanced includes 2TB Google One storage -- real added value",
    "API pricing is very competitive, especially for Flash model",
  ],
  cons: [
    "Output quality for creative writing is the weakest of the big three (GPT-4, Claude, Gemini)",
    "Hallucination rate is higher than Claude in our testing",
    "Google's track record of killing products makes long-term commitment feel risky",
    "The Gemini app UI feels like Google slapped AI onto an existing product",
  ],
  knownIssues: [
    {
      description: "I/O 2026 SHIP (2026-05-19): GEMINI 3.5 FLASH GA. Available immediately in Gemini app (global), AI Mode in Google Search, Google Antigravity platform, Gemini API via Google AI Studio + Android Studio, Gemini Enterprise Agent Platform, and Gemini Enterprise. Vendor-published benchmarks: Terminal-Bench 2.1 = 76.2%, GDPval-AA = 1656 Elo, MCP Atlas = 83.6%, CharXiv Reasoning (multimodal) = 84.2%, claimed 4x faster than other frontier models. Vendor framing: 'outperforming Gemini 3.1 Pro on challenging coding and agentic benchmarks' with richer interactive web UIs and graphics vs. Gemini 3. Pricing not disclosed in launch post -- check ai.google.dev/pricing for canonical.",
      source: "blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/, ai.google.dev/gemini-api/docs/changelog (2026-05-19 entry releases gemini-3.5-flash GA)",
      date: "2026-05-19",
    },
    {
      description: "I/O 2026 UPCOMING (2026-05-19): GEMINI 3.5 PRO is in internal testing with rollout 'next month' (June 2026). No specific date or pricing yet. Existing AI Pro subscribers will likely receive 3.5 Pro as the in-tier flagship replacing 3.1 Ultra for new sessions when GA hits. Vendor language consistent: 'rollout planned for next month'.",
      source: "blog.google Gemini 3.5 announcement post (2026-05-19)",
      date: "2026-05-19",
    },
    {
      description: "I/O 2026 SHIP (2026-05-19): MANAGED AGENTS IN THE GEMINI API now in public preview, including the general-purpose ANTIGRAVITY AGENT (model id: antigravity-preview-05-2026). New paradigm: stateful autonomous agents executing in Google-hosted sandbox environments via the Gemini API. Differentiates the Gemini API from a stateless completion endpoint -- competes structurally with OpenAI Responses API + Anthropic Managed Agents (Dreaming/Outcomes/Multiagent Orchestration shipped 2026-05-06).",
      source: "ai.google.dev/gemini-api/docs/changelog (2026-05-19 entries)",
      date: "2026-05-19",
    },
    {
      description: "I/O 2026 UPCOMING (2026-05-19): GEMINI SPARK announced -- Google's 24/7 proactive agent that 'takes action on your behalf' and runs in the background 'even if your phone and laptop are turned off'. Rolling out post-I/O to Google AI Ultra subscribers (18+, US-only at launch) plus 'select business users'. Powered by Gemini 3.5 Flash + Antigravity stack. Integrates Gmail, Calendar, Drive, Docs, Sheets, Slides, YouTube, Maps. Capabilities: task tracking, scheduled automation, custom reusable skills, file/workspace org, email categorization. Operates under user direction with approval gates for sensitive actions -- not continuous monitoring by default. Direct competitor to Anthropic Orbit (Code with Claude 5/6 announcement) and Microsoft Copilot Cowork.",
      source: "gemini.google/overview/agent/spark/ (vendor-primary), blog.google Sundar Pichai I/O 2026 keynote post",
      date: "2026-05-19",
    },
    {
      description: "GEMINI 3.1 FLASH-LITE GA (2026-05-07): Generally available on the Gemini Enterprise Agent Platform. Fastest + most cost-efficient Gemini 3 series model. **2.5x faster Time-to-First-Answer-Token vs Gemini 2.5 Flash; +45% output speed**. Pricing per third-party reference: $0.25/M input, $1.50/M output (vendor blog itself omits direct pricing -- check ai.google.dev/pricing for canonical). Customer signals at GA: Gladly reports ~60% lower cost vs thinking-tier models; OffDeal cites sub-second p95 for classifiers.",
      source: "Google Cloud blog (cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-flash-lite-is-now-generally-available), blog.google",
      date: "2026-05-07",
    },
    {
      description: "Gemini 2.5 family retirement dates EXTENDED (ai.google.dev deprecations page, checked 2026-04-24): Gemini 2.5 Pro, 2.5 Flash, AND 2.5 Flash-Lite now all retire 2026-10-16 (pushed out from original 2026-06-17 / 2026-07-22 dates). Gives ~6 more months to migrate to gemini-3.1-pro + gemini-3-flash. Production code still calling 2.5 model names continues to work through Oct 16, but do not ship new code on retiring endpoints",
      source: "ai.google.dev/gemini-api/docs/deprecations (verified 2026-04-24)",
      date: "2026-04-24",
    },
    {
      description: "Gemini 3.1 Flash TTS launched 2026-04-15 as a preview on Gemini API, AI Studio, Vertex AI, and Google Vids. 70+ languages, audio tags for vocal style/pace/delivery embedded in the text prompt, Elo 1,211 on Artificial Analysis TTS leaderboard. Positions Google as a direct competitor to ElevenLabs v3 on the TTS stack",
      source: "blog.google Gemini 3.1 Flash TTS, MarkTechPost",
      date: "2026-04",
    },
    {
      description: "Image generation of people was temporarily disabled after generating historically inaccurate results, partially restored but still limited",
      source: "The Verge, Google Blog",
      date: "2026-01",
    },
    {
      description: "Gemini Pro model access removed from free API tier on April 1, 2026 -- mandatory spend caps and prepaid billing now required for new accounts",
      source: "Google AI for Developers, FindSkill.ai",
      date: "2026-04",
    },
    {
      description: "Google AI Ultra at $249.99/mo is hard to justify against Claude Max ($200) and ChatGPT Pro ($200) unless you specifically need Lyria 3 Pro",
      source: "Reddit r/Bard",
      date: "2026-04",
    },
  ],
  bestFor: "Google Workspace power users. If you live in Gmail, Docs, and Drive, Gemini Advanced integrates directly into your workflow. Also great for developers who need the cheapest API with the longest context window.",
  notFor: "Anyone who needs the best raw output quality. Claude and GPT-4 both write better. Also not for anyone spooked by Google's history of abandoning products.",
  verdict: "Gemini's strength is the ecosystem play. The 1M context window is genuinely useful for long documents, and the Google Workspace integration is something neither OpenAI nor Anthropic can match. But purely as an LLM, the output quality is a step behind Claude and GPT-4. Pick Gemini if you're deep in Google's ecosystem. Otherwise, the other two are better standalone.",

  lastReviewedDate: "2026-05-20",
  dataSources: [
    { name: "Google Blog: Gemini 3.5 frontier intelligence with action (2026-05-19)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/", dateAccessed: "2026-05-20" },
    { name: "Gemini API Changelog: 3.5 Flash GA + Managed Agents + Antigravity preview (2026-05-19)", url: "https://ai.google.dev/gemini-api/docs/changelog", dateAccessed: "2026-05-20" },
    { name: "Gemini Spark product page (vendor-primary)", url: "https://gemini.google/overview/agent/spark/", dateAccessed: "2026-05-20" },
    { name: "Google AI for Developers: deprecations", url: "https://ai.google.dev/gemini-api/docs/deprecations", dateAccessed: "2026-04-21" },
    { name: "Google Blog: Gemini 3.1 Flash TTS", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/", dateAccessed: "2026-04-21" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-13" },
    { name: "Reddit r/Bard", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://gemini.google.com",
  status: "active",
  benchmarks: {
    modelName: "Gemini 3.5 Flash (vendor-published 2026-05-19; third-party verification pending) -- legacy 3.1 Ultra retained below for context",
    scores: [
      { name: "Terminal-Bench 2.1", score: 76.2, maxScore: 100, unit: "%" },
      { name: "MCP Atlas", score: 83.6, maxScore: 100, unit: "%" },
      { name: "CharXiv Reasoning (multimodal)", score: 84.2, maxScore: 100, unit: "%" },
      { name: "MMLU (3.1 Ultra baseline)", score: 90.5, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified (3.1 Ultra baseline)", score: 80.6, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1500,
    lastUpdated: "2026-05-19",
  },
  personality: {
    oneLiner: "The Google research assistant",
    tone: "Neutral, thorough, and slightly corporate. Gemini leans academic, cites sources readily in Deep Research mode, and keeps its tone even across topics -- rarely funny, rarely snarky.",
    quirks: "Tightly integrated with Google products -- pulls from Search and Workspace by default, which is useful for grounded answers but means you hear Google's worldview. Can feel evasive or overly safe on opinionated or politically charged questions.",
  },
  metaTitle: "Gemini Review 2026: 3.5 Flash GA May 19 (I/O), 3.5 Pro Coming June, Spark Agent",
  metaDescription: "Google Gemini review. Gemini 3.5 Flash GA 2026-05-19 (Terminal-Bench 76.2%, MCP Atlas 83.6%). 3.5 Pro rolling out June. Spark proactive agent + Managed Agents API in public preview.",
};
