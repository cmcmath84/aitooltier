import { ToolReview } from "@/lib/types";

export const codex: ToolReview = {
  slug: "codex",
  name: "Codex (OpenAI)",
  tagline: "OpenAI's cloud-based coding agent -- runs parallel tasks, proposes PRs, and lives inside ChatGPT",
  category: "ai-code-assistants",
  url: "https://openai.com/index/introducing-codex/",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 8,
    features: 9,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Basic Codex access", "Quick coding tasks only", "Explore capabilities"] },
    { plan: "Go", price: "$8", period: "month", features: ["Lightweight coding tasks", "Codex CLI access"] },
    { plan: "Plus", price: "$20", period: "month", features: ["Codex web + CLI + IDE extension", "GPT-5.4 + GPT-5.3-Codex", "20-100 local messages per 5h", "Slack integration", "Cloud code review"] },
    { plan: "Pro", price: "$100", period: "month", features: ["10-20x higher rate limits", "GPT-5.3-Codex-Spark (research preview)", "Up to 2,000 messages per 5h", "Priority processing"] },
    { plan: "Business", price: "Pay as you go", period: "per seat", features: ["30-150 local messages per 5h", "10-60 cloud tasks per 5h", "20-50 code reviews per 5h", "Admin controls", "Larger VMs"] },
  ],

  pros: [
    "Lives inside ChatGPT -- if you already pay for Plus ($20/mo), Codex is included at no extra cost",
    "Parallel task execution is a real differentiator -- assign 5 tasks at once and come back when they're done",
    "Code review feature catches bugs and suggests improvements before you merge -- genuinely useful, not just a gimmick",
    "Sandboxed environments per task means it can't break your local setup -- runs tests safely in the cloud",
    "GitHub integration lets it propose PRs directly, read your repo, and work on real issues end-to-end",
    "CLI, web, and IDE extension gives you three ways to interact depending on your workflow",
  ],
  cons: [
    "Usage limits burn through fast -- 20-100 messages per 5 hours on Plus means heavy users hit the wall mid-task",
    "Can't be corrected mid-task -- once you send a prompt, you wait for the full result, no steering",
    "Struggles with complex refactors and architectural decisions -- great at straightforward tasks, mediocre on nuanced ones",
    "Cloud-based GitHub integration is unintuitive to set up -- many users find the workflow confusing",
    "No image input yet -- can't show it a screenshot of a UI bug and ask it to fix it",
    "Response latency can spike to 3+ minutes per response during peak hours",
  ],
  knownIssues: [
    {
      description: "Security vulnerability discovered where branch parameter allowed shell command injection during environment setup -- fixed by OpenAI with improved input validation",
      source: "BeyondTrust Phantom Labs, TechRadar",
      date: "2026-03",
    },
    {
      description: "CLI was macOS-only at launch, frustrating Windows and Linux users -- broader platform support now rolling out",
      source: "Reddit r/openai, GitHub issues",
      date: "2026-04",
    },
    {
      description: "Code quality for complex tasks often needs significant human review before merging -- better at code review than code writing according to developer feedback",
      source: "Hacker News, Reddit r/programming",
      date: "2026-04",
    },
    {
      description: "2026-04-16 Codex 'super app' update is substantially bigger than the initial Mac-app control headline suggested. Full feature set per OpenAI: (1) macOS computer-use agent that opens apps, clicks, and types with its own cursor in background while you use your machine, (2) image generation via gpt-image-1.5 INSIDE Codex, (3) persistent memory + user preferences across sessions, (4) in-app browser built on the Atlas browser stack, (5) 90+ new plugins combining skills, app integrations, and MCP servers. OpenAI also disclosed 3M weekly Codex users with 70% month-over-month growth. Windows / Linux computer-use support still pending. Not available in EEA, UK, or Switzerland",
      source: "BigGo Finance, gHacks, Blockchain News, OpenAI release notes",
      date: "2026-04",
    },
  ],
  bestFor: "Developers already paying for ChatGPT Plus who want a coding agent at no extra cost. Especially good for parallel task execution -- assign multiple bug fixes or feature branches and let Codex work them simultaneously.",
  notFor: "Developers who need fine-grained control mid-task (use Claude Code or Cursor instead). Also not ideal for complex architectural refactors where the AI needs human guidance throughout the process.",
  verdict: "Codex is OpenAI's answer to Claude Code and Devin, and it has one killer advantage: it's bundled with ChatGPT Plus. If you're already paying $20/mo for ChatGPT, you get a cloud coding agent for free. The parallel task execution is genuinely unique -- no other coding agent lets you fire off 5 tasks and check back later. But the rough edges are real: you can't steer it mid-task, complex refactors fall flat, and the usage limits feel tight. For straightforward coding tasks and code review, it's excellent. For anything nuanced, Claude Code's interactive approach is still better.",

  lastReviewedDate: "2026-04-19",
  dataSources: [
    { name: "OpenAI official Codex page", url: "https://openai.com/index/introducing-codex/", dateAccessed: "2026-04-17" },
    { name: "developers.openai.com/codex/pricing", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: Codex Mac-app control + GPT-Rosalind launch 2026-04-16", url: "https://venturebeat.com/technology/openai-debuts-gpt-rosalind-a-new-limited-access-model-for-life-sciences-and-broader-codex-plugin-on-github", dateAccessed: "2026-04-17" },
    { name: "Reddit r/openai, r/programming", dateAccessed: "2026-04-17" },
    { name: "TechRadar security review", dateAccessed: "2026-04-17" },
    { name: "GitHub openai/codex issues", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openai.com/index/introducing-codex/",
  status: "active",
  poweredBy: "GPT-5.3-Codex / GPT-5.4",
  benchmarks: {
    modelName: "GPT-5.3-Codex",
    scores: [
      { name: "SWE-bench Verified", score: 72.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 95.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  metaTitle: "OpenAI Codex Review 2026: Cloud Coding Agent Inside ChatGPT",
  metaDescription: "OpenAI Codex review. Cloud-based coding agent with parallel tasks, code review, and GitHub PR integration. Free with ChatGPT Plus. Scores, pricing, known issues. April 2026.",
};
