import { ToolReview } from "@/lib/types";

export const githubCopilot: ToolReview = {
  slug: "github-copilot",
  name: "GitHub Copilot",
  tagline: "AI code assistant that lives in your editor -- autocomplete on steroids. As of 2026-04-20 new signups for Pro/Pro+/Student are PAUSED and Claude Opus was removed from Pro (Opus 4.7 remains on Pro+ only)",
  category: "ai-code-assistants",
  url: "https://github.com/features/copilot",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 8,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["2,000 completions/mo", "50 chat messages/mo", "VS Code + JetBrains", "Still open to new signups (2026-04-20)"],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: ["NEW SIGNUPS PAUSED 2026-04-20", "Claude Opus REMOVED (Opus 4.7 now Pro+ only)", "Tightened usage limits"],
    },
    {
      plan: "Pro+",
      price: "$39",
      period: "month",
      features: ["NEW SIGNUPS PAUSED 2026-04-20", "5x+ the usage limits of Pro", "Claude Opus 4.7 access", "Full frontier-model picker"],
    },
    {
      plan: "Business",
      price: "$19",
      period: "month",
      features: ["Organization management", "Policy controls", "Audit logs", "Not affected by 2026-04-20 signup pause"],
    },
  ],

  pros: [
    "Inline code completions feel magical -- it predicts what you're about to type with scary accuracy",
    "Works directly in VS Code, JetBrains, Neovim -- no context switching",
    "Copilot Chat is great for explaining code, writing tests, and debugging",
    "Free tier is functional enough for personal projects",
  ],
  cons: [
    "Suggestions can be confidently wrong -- it'll autocomplete plausible-looking code that has subtle bugs",
    "Sometimes suggests code that's clearly copied from public repos, raising licensing questions",
    "Context window for chat is smaller than standalone tools like Claude",
    "Multi-file refactoring understanding is limited compared to Cursor",
  ],
  knownIssues: [
    {
      description: "CRITICAL (2026-04-20): GitHub paused NEW signups for Copilot Pro, Pro+, and Student plans. Copilot Free remains open. Existing subscribers keep access but face tightened usage caps -- VP Joe Binder cited agent workloads consuming more compute than subscription economics support. Refund window for dissatisfied subscribers: 2026-04-20 through 2026-05-20 via GitHub Support. If you were planning to buy Pro or Pro+, you currently cannot. Cursor, Claude Code, and Windsurf are the obvious alternatives during the pause",
      source: "GitHub Changelog (github.blog/changelog/2026-04-20), The Register, AfterDawn",
      date: "2026-04",
    },
    {
      description: "Claude Opus models were pulled from the Pro tier on 2026-04-20. Opus 4.7 remains on Pro+ only; Opus 4.5 and 4.6 are being removed from Pro+ as well. If you specifically subscribed to Pro for Opus access, your tier has materially changed -- the $10 Pro plan now routes to GPT-5.4 + Gemini 3.1 + smaller open models by default",
      source: "GitHub Changelog 2026-04-20, AfterDawn",
      date: "2026-04",
    },
    {
      description: "EFFECTIVE 2026-04-24 (yesterday): GitHub now trains its AI models on Copilot Free/Pro/Pro+ interaction data by default -- inputs, outputs, code snippets, file names, navigation patterns, and chat comments. Business + Enterprise plans remain excluded. To opt out: settings > Copilot > Features > 'Allow GitHub to use my data for AI model training' (toggle off). Users who previously opted out of product-improvement data collection have that preference preserved. Big differentiator vs. Cursor and Claude Code, both of which do NOT train on user code by default",
      source: "GitHub blog (github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/), The Register",
      date: "2026-04-24",
    },
    {
      description: "New 'premium requests' currency system rolled out in early 2026 -- Pro plan now gets 300 premium requests/mo, Business 1,500, Enterprise 1,000. Beyond those quotas, requests pay-as-you-go. Check the new plan details page before assuming legacy 'unlimited chat' behavior still applies",
      source: "GitHub Copilot plans page",
      date: "2026-03",
    },
    {
      description: "Agent mode reached GA on VS Code and JetBrains in March 2026 -- Copilot can now run multi-step agentic workflows rather than just reply to chat messages. Still behind Cursor Composer 2 and Claude Code on autonomous multi-file work but closes the gap meaningfully",
      source: "GitHub Copilot blog",
      date: "2026-03",
    },
    {
      description: "Copilot chat occasionally loses context mid-conversation in larger projects, giving irrelevant suggestions",
      source: "GitHub Community Discussions",
      date: "2026-03",
    },
  ],
  bestFor: "Existing Copilot subscribers on Business/Enterprise or grandfathered Pro/Pro+ seats. Also new Free-tier users -- the entry point is still open and inline completions are still best-in-class.",
  notFor: "Anyone trying to sign up for Pro, Pro+, or Student right now -- signups are paused (2026-04-20 onward). Also not for developers who specifically wanted Claude Opus on the $10 Pro plan; Opus was just pulled to Pro+ only. Cursor or Claude Code are the obvious alternatives during the pause.",
  verdict: "GitHub Copilot hit a wall on 2026-04-20: new Pro/Pro+/Student signups paused, Claude Opus pulled from Pro, and usage caps tightened across the board. Microsoft is openly admitting that agent workloads consume more compute than the current subscription tiers can sustain, and the product is being retuned in real time. For existing subscribers the inline completions remain best-in-class, but the value proposition has gotten worse overnight. If you're shopping for an AI code assistant in the next 30 days, Cursor (Pro+ $60) and Claude Code are the practical choices until Microsoft either reopens signups or reprices. Watch the refund window (through 2026-05-20) if you're on the fence about staying.",

  lastReviewedDate: "2026-04-25",
  dataSources: [
    { name: "GitHub Changelog 2026-04-20: Copilot plan changes for individuals", url: "https://github.blog/changelog/2026-04-20-changes-to-github-copilot-plans-for-individuals/", dateAccessed: "2026-04-21" },
    { name: "The Register: GitHub grounds Copilot account creation", url: "https://www.theregister.com/2026/04/20/microsofts_github_grounds_copilot_account/", dateAccessed: "2026-04-21" },
    { name: "AfterDawn: Usage limits + Opus removal", url: "https://www.afterdawn.com/news/article.cfm/2026/04/20/github-copilot-tightens-its-usage-limits-removes-access-to-claude-opus", dateAccessed: "2026-04-21" },
    { name: "GitHub Copilot plans", url: "https://github.com/features/copilot/plans", dateAccessed: "2026-04-21" },
    { name: "GitHub blog: Copilot interaction data usage policy update (effective 2026-04-24)", url: "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/", dateAccessed: "2026-04-25" },
    { name: "GitHub: Copilot Pro/Business training policy", url: "https://docs.github.com/en/copilot/get-started/plans", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://github.com/features/copilot",
  status: "active",
  poweredBy: "GPT-5.4 (Pro) / Claude Opus 4.7 + GPT-5.4 (Pro+)",
  metaTitle: "GitHub Copilot Review 2026: Signups PAUSED + Opus Removed From Pro",
  metaDescription: "GitHub Copilot review. Pro/Pro+/Student signups paused 2026-04-20, Claude Opus removed from Pro, tightened usage caps. Refund window through May 20. Alternatives: Cursor, Claude Code.",
};
