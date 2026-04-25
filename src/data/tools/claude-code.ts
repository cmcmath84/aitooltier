import { ToolReview } from "@/lib/types";

export const claudeCode: ToolReview = {
  slug: "claude-code",
  name: "Claude Code",
  tagline: "Anthropic's terminal-based coding agent that reads your whole repo and makes real changes -- not just suggestions",
  category: "ai-code-assistants",
  url: "https://docs.anthropic.com/en/docs/claude-code",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 9,
    value: 7,
    features: 8.5,
    overall: 7.8,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Claude Pro",
      price: "$20",
      period: "month",
      features: ["Included Claude Code access", "Usage limits apply", "Claude Sonnet model"],
    },
    {
      plan: "Claude Max (5x)",
      price: "$100",
      period: "month",
      features: ["5x Pro usage", "Opus model access", "Higher rate limits"],
    },
    {
      plan: "Claude Max (20x)",
      price: "$200",
      period: "month",
      features: ["20x Pro usage", "Opus model access", "Highest rate limits"],
    },
    {
      plan: "API Direct",
      price: "Usage-based",
      features: ["Pay per token", "Full model selection", "No monthly commitment"],
    },
  ],

  pros: [
    "Reads and understands your entire codebase before making changes -- context awareness is best-in-class for a coding agent",
    "Actually executes code, runs tests, and iterates on failures autonomously -- it's a real agent, not a chatbot with code formatting",
    "Multi-file refactoring is where it shines -- it can restructure projects across dozens of files coherently",
    "41% developer adoption rate speaks for itself -- the output quality on complex coding tasks is genuinely excellent",
  ],
  cons: [
    "Terminal-only interface is a hard sell for developers who prefer visual tools -- there's no GUI at all",
    "API costs can spiral fast on large tasks -- a complex refactor can easily burn through $5-10 in a single session",
    "Sometimes over-edits files, making changes you didn't ask for in the name of 'improving' things",
    "Learning curve is real -- you need to understand how to write good prompts and set appropriate boundaries",
  ],
  knownIssues: [
    {
      description: "PRICING SCARE (2026-04-21 -> 2026-04-22, RESOLVED): Anthropic briefly removed Claude Code from the $20 Pro plan on logged-out pricing pages on 2026-04-21. Head of growth Amol Avasare framed it as a 2% A/B test on new prosumer signups; existing Pro/Max subscribers were never affected. Reversed within 24 hours after backlash -- as of 2026-04-22 the Claude Code checkbox is restored on claude.com/pricing. Anthropic statement: 'a mistake that the logged-out landing page and docs were updated for this test.' Pricing risk on agentic-coding tools is real even when today's price holds; if you're cost-sensitive on Pro, watch the pricing page periodically",
      source: "The Register (2026-04-22), Simon Willison",
      date: "2026-04-22",
    },
    {
      description: "Claude Opus 4.7 (default backing model) brings three Claude-Code-relevant features documented on Anthropic's What's New page: (1) new `xhigh` effort level recommended specifically for coding + agentic work, (2) task budgets (beta header `task-budgets-2026-03-13`) -- give Claude an advisory token budget across the full agentic loop and the model self-paces against a running countdown, (3) high-resolution image support up to 2576px / 3.75MP with 1:1 pixel-coordinate mapping, big upgrade for screenshot-driven debugging. Breaking changes for direct API users: extended thinking budgets removed (use adaptive thinking), sampling parameters (temperature/top_p/top_k) removed, thinking content omitted from response by default (set display=summarized to restore)",
      source: "Anthropic: What's new in Claude Opus 4.7 (platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7)",
      date: "2026-04",
    },
    {
      description: "2026-04-18 added the `/usage` command -- shows a usage-driver breakdown for the current session, flags cache-miss patterns, and makes it easier to catch runaway token consumption before it ends up on the bill. If your Claude Code sessions surprise you with cost, this is now the first diagnostic to run",
      source: "Anthropic Claude Code release notes",
      date: "2026-04",
    },
    {
      description: "Large file edits occasionally produce malformed output, requiring manual cleanup of partial replacements",
      source: "GitHub Issues",
      date: "2026-03",
    },
    {
      description: "Token consumption on large repos can exceed expectations -- users report $20+ sessions on complex multi-file tasks",
      source: "Reddit r/ClaudeAI",
      date: "2026-02",
    },
  ],
  bestFor: "Experienced developers who are comfortable in the terminal and want an AI that can do real, multi-file engineering work autonomously. Especially strong for refactoring, debugging, and building features across complex codebases.",
  notFor: "Beginners who want a visual coding assistant, or anyone who needs predictable monthly costs. If you're looking for autocomplete-style help, Copilot or Cursor are better fits.",
  verdict: "Claude Code is the most capable agentic coding tool available right now. The ability to read entire codebases, execute code, run tests, and iterate on results puts it in a different category than autocomplete-style assistants. The output quality on complex tasks is outstanding. But it's firmly a power-user tool -- the CLI-only interface, unpredictable costs, and learning curve mean it's not for everyone. If you're a developer who thinks in terms of terminal workflows and you're working on non-trivial projects, Claude Code is worth every penny. Just keep an eye on your API bill.",

  lastReviewedDate: "2026-04-25",
  dataSources: [
    { name: "The Register: Anthropic tests Claude Code Pro removal (2026-04-22)", url: "https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/", dateAccessed: "2026-04-25" },
    { name: "Simon Willison: Is Claude Code going to cost $100/month? Probably not", url: "https://simonwillison.net/2026/Apr/22/claude-code-confusion/", dateAccessed: "2026-04-25" },
    { name: "Anthropic: What's new in Claude Opus 4.7", url: "https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7", dateAccessed: "2026-04-22" },
    { name: "Anthropic documentation", dateAccessed: "2026-04-22" },
    { name: "Reddit r/ClaudeAI", dateAccessed: "2026-04-22" },
    { name: "GitHub community discussions", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://docs.anthropic.com/en/docs/claude-code",
  status: "active",
  poweredBy: "Claude Opus 4.7 (xhigh effort recommended for agentic coding)",
  metaTitle: "Claude Code Review 2026: Terminal-Based Agentic Coding That Actually Works",
  metaDescription: "Claude Code review. Agentic coding assistant that reads entire repos, runs tests, multi-file refactoring. CLI-only but powerful. Scores, pricing. March 2026.",
};
