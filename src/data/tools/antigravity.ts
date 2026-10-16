import { ToolReview } from "@/lib/types";

export const antigravity: ToolReview = {
  slug: "antigravity",
  name: "Google Antigravity",
  tagline: "**Gemini 4 Argon reached Antigravity on 2026-10-13 for Google AI Ultra subscribers and enterprises, and Google is offering 10,000 scientists Antigravity's highest usage tier free for six months.** Google's agent-first AI IDE -- deploys up to 5 autonomous coding agents in parallel on a VS Code fork. Antigravity 2.0 (I/O 2026) is the runtime substrate for Gemini Spark, and the Antigravity CLI is now the official successor to Gemini CLI, which stopped serving consumer tiers on 2026-06-18",
  category: "ai-code-assistants",
  url: "https://antigravity.google",

  scores: {
    easeOfUse: 8,
    outputQuality: 8.5,
    value: 6,
    features: 9.5,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["20 requests/day (reduced from 250)", "Basic agent access", "Rate-limited"] },
    { plan: "Pro", price: "$20", period: "month", features: ["Higher rate limits", "All models (Gemini, Claude, GPT)", "Priority agent processing"] },
    { plan: "Ultra", price: "$249.99", period: "month", features: ["Maximum rate limits", "All frontier models", "Highest priority", "Extended agent sessions"] },
    { plan: "AI Credits", price: "$25 / 2,500 credits", features: ["Pay-as-you-go overflow", "Use when subscription limits run out"] },
  ],

  pros: [
    "Up to 5 autonomous agents working in parallel on different parts of your project -- genuinely unique multi-agent architecture",
    "Mission Control Manager View lets you dispatch, monitor, and coordinate agents like an air traffic controller",
    "Built-in Chrome browser for testing means agents can see and interact with your running app, not just write blind code",
    "Multi-model support: Gemini 3.1 Pro, Claude Sonnet/Opus 4.6, and GPT-OSS 120B -- switch models per task",
    "MCP (Model Context Protocol) support connects agents to GitHub, databases, and external APIs",
    "Built on VS Code fork so the editor is familiar -- extensions and keybindings carry over",
  ],
  cons: [
    "Free tier was gutted -- dropped from 250 to 20 daily requests (92% reduction), sparking community backlash",
    "Credit system is opaque -- you can't predict how many credits a task will consume, making cost planning impossible",
    "Ultra at $249.99/mo is the most expensive AI coding tool available -- hard to justify over Cursor + Claude Code combined",
    "Agent coordination adds complexity -- managing 5 parallel agents requires a mental model most developers aren't used to",
    "Pricing protests from The Register and developer forums suggest Google may change pricing again, creating uncertainty",
    "Lock-in risk: it's a Google-specific IDE fork, not a plugin you can add to any editor",
  ],
  knownIssues: [
    {
      description: "GEMINI 4 ARGON LANDS IN ANTIGRAVITY -- ULTRA AND ENTERPRISE ONLY, PLUS A FREE SIX-MONTH TIER FOR 10,000 SCIENTISTS (2026-10-13, vendor-primary): Google's Argon GA post makes Antigravity the model's showcase surface: Argon is available 'for Google AI Ultra subscribers in Google Antigravity' and to enterprises 'in Google Antigravity', and AI Studio access for Ultra subscribers too; **Google AI Pro subscribers get Argon in the Gemini app but not in Antigravity**. Google says 'Argon in Antigravity has helped teams increase agentic code submissions by more than 35% while reducing code rollbacks by nearly a third' internally, and cites Antigravity runs that untangled a ~6M-line Chromium feature folder, cut Agent Development Kit session prep time 40%, sped the xTB quantum-chemistry package up to 2.3x and drove a 2.85x Gemma 4 inference speedup -- all vendor anecdotes. It names /goal slash commands and multi-agent loops with custom skills as the workflow. **Offer:** 'we're offering 10,000 scientists the highest usage tier in Google Antigravity free of charge for 6 months (onboarded on a rolling basis), subject to eligibility, capacity, and selection.' API price for Argon outside Antigravity: $2 / $10 per 1M through 2026-11-30, then $4 / $20. This page's broader review (pricing, agent counts) dates from June and has not been re-verified this sweep.",
      source: "Google (blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/, AI-vertical RSS pubDate Tue 13 Oct 2026) -- fetched 2026-10-15 via curl",
      date: "2026-10-13",
    },
    {
      description: "GEMINI CLI SUCCESSOR -- CUTOVER NOW LIVE (2026-06-18, TODAY): Google designated the **Antigravity CLI** as the official replacement for Gemini CLI and the Gemini Code Assist IDE extensions, and as of today the consumer-tier cutover has taken effect -- Gemini CLI has stopped serving requests for Google AI Pro/Ultra and free Code Assist for individuals (enterprise Standard/Enterprise license holders keep Gemini CLI). Antigravity CLI is available to everyone now. Google states 'there won't be 1:1 feature parity out of the gate' but it keeps the most critical Gemini CLI features -- Agent Skills, Hooks, Subagents, and Extensions (now as Antigravity plugins). This makes Antigravity not just an IDE/runtime but Google's primary command-line agent surface for consumers. If you were scripting against `gemini` on a consumer plan, migrate now.",
      source: "Google Developers Blog (developers.googleblog.com/en/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), 9to5Google",
      date: "2026-06-18",
    },
    {
      description: "I/O 2026 SHIP (2026-05-19): ANTIGRAVITY 2.0 announced at Google I/O 2026. Vendor blog post 'Introducing Google Antigravity 2.0' published on DeepMind / Google's I/O developer recap. Concurrent ship in the Gemini API: a Managed Agents preview model `antigravity-preview-05-2026` -- the general-purpose Antigravity Agent, the first Google-hosted managed-agent endpoint. Antigravity is now also the runtime substrate for Gemini Spark (Google's new proactive 24/7 personal agent), which means Antigravity has been promoted from a standalone IDE to the underlying agent execution layer for consumer Gemini features. Specific feature deltas vs Antigravity 1.x not yet captured in this sweep -- next review should pull the full announcement post once it's published in fully indexable form.",
      source: "deepmind.google blog 'Introducing Google Antigravity 2.0' (vendor-primary), ai.google.dev/gemini-api/docs/changelog 2026-05-19 (antigravity-preview-05-2026 Managed Agent release), gemini.google/overview/agent/spark/ (Spark runs on 'Gemini 3.5 Flash and Antigravity')",
      date: "2026-05-19",
    },
    {
      description: "Free tier daily requests slashed from 250 to 20 in early 2026, and Pro tier quota refresh changed from every 5 hours to weekly for most models",
      source: "The Register, Reddit r/google_antigravity",
      date: "2026-03",
    },
    {
      description: "Credit consumption per task is unpredictable -- developers report identical tasks consuming wildly different credit amounts",
      source: "Reddit r/google_antigravity, Hacker News",
      date: "2026-03",
    },
    {
      description: "Agent sessions can stall or lose context on long-running tasks, requiring manual intervention and wasting credits",
      source: "Reddit r/google_antigravity",
      date: "2026-04",
    },
  ],
  bestFor: "Developers working on large, multi-file projects who want to parallelize their workflow. If you regularly work on 3-5 tasks simultaneously (fix a bug, add a feature, write tests, refactor), Antigravity's multi-agent architecture is unmatched.",
  notFor: "Solo developers on a budget (the free tier is nearly useless after the cuts), anyone who values pricing transparency, or developers who prefer lightweight tools over full IDE replacements.",
  verdict: "Google Antigravity is the most ambitious AI coding tool on the market -- 5 parallel agents, built-in browser testing, multi-model support, and MCP integration. When it works, it's like having a team of junior developers. But Google's aggressive pricing changes (gutting the free tier, introducing opaque credits) have damaged trust. At $20/mo Pro it's competitive, but the credit system means your actual costs are unpredictable. If Google stabilizes the pricing, this could be the best AI IDE available. Right now, the value score drags it down.",

  lastReviewedDate: "2026-10-15",
  dataSources: [
    { name: "Google: Gemini 4 Argon is now available for everyone (2026-10-13) -- Argon in Antigravity for Ultra; 10,000 scientists free highest tier for 6 months", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/", dateAccessed: "2026-10-15" },
    { name: "Google Developers Blog: Transitioning Gemini CLI to Antigravity CLI (cutover took effect 2026-06-18)", url: "https://developers.googleblog.com/en/an-important-update-transitioning-gemini-cli-to-antigravity-cli/", dateAccessed: "2026-06-18" },
    { name: "DeepMind Blog: Introducing Google Antigravity 2.0 (2026-05-19)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/", dateAccessed: "2026-05-20" },
    { name: "Gemini API Changelog: antigravity-preview-05-2026 Managed Agent release (2026-05-19)", url: "https://ai.google.dev/gemini-api/docs/changelog", dateAccessed: "2026-05-20" },
    { name: "Gemini Spark product page (Antigravity is the runtime)", url: "https://gemini.google/overview/agent/spark/", dateAccessed: "2026-05-20" },
    { name: "antigravity.google official site", dateAccessed: "2026-04-14" },
    { name: "The Register pricing protest coverage", dateAccessed: "2026-04-14" },
    { name: "Reddit r/google_antigravity", dateAccessed: "2026-04-14" },
    { name: "vibecoding.app review", dateAccessed: "2026-04-14" },
  ],
  affiliateUrl: "https://antigravity.google",
  status: "active",
  poweredBy: "Gemini 3.5 Flash / Gemini 3.1 Pro / Claude Opus 4.6 / GPT-OSS 120B (multi-model). Gemini 3.5 Flash added at I/O 2026 (2026-05-19) and is the model behind the antigravity-preview-05-2026 Managed Agent.",
  metaTitle: "Google Antigravity Review 2026: Gemini 4 Argon for Ultra, Antigravity 2.0, Gemini CLI Successor",
  metaDescription: "Google Antigravity review. Gemini 4 Argon reached Antigravity on Oct 13, 2026 for AI Ultra subscribers and enterprises, with 10,000 scientists offered the top tier free for six months. Antigravity 2.0 (I/O 2026) runs Gemini Spark, and the Antigravity CLI succeeded Gemini CLI for consumers on June 18, 2026.",
};
