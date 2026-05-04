import { ToolReview } from "@/lib/types";

export const githubCopilot: ToolReview = {
  slug: "github-copilot",
  name: "GitHub Copilot",
  tagline: "AI code assistant that lives in your editor -- autocomplete on steroids. As of 2026-04-20 new signups for Pro/Pro+/Student are PAUSED. As of 2026-04-27 GitHub announced ALL plans transition to usage-based billing (AI Credits + token metering) effective 2026-06-01 -- code completions remain free, agent/chat usage now meters against monthly credit allotments matching the plan price",
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
      features: ["NEW SIGNUPS PAUSED 2026-04-20", "Claude Opus REMOVED (Opus 4.7 now Pro+ only)", "Effective 2026-06-01: $10 in monthly AI Credits replaces premium-request quota"],
    },
    {
      plan: "Pro+",
      price: "$39",
      period: "month",
      features: ["NEW SIGNUPS PAUSED 2026-04-20", "Claude Opus 4.7 access", "Full frontier-model picker", "Effective 2026-06-01: $39 in monthly AI Credits"],
    },
    {
      plan: "Business",
      price: "$19",
      period: "user/month",
      features: ["Organization management", "Policy controls", "Audit logs", "Effective 2026-06-01: $19 in monthly AI Credits per user"],
    },
    {
      plan: "Enterprise",
      price: "$39",
      period: "user/month",
      features: ["Org-wide governance + SSO", "Effective 2026-06-01: $39 in monthly AI Credits per user", "Standard token metering above the allotment"],
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
      description: "MULTI-CHANGE BATCH heading into 2026-06-01 billing cutover (vendor-primary verified 2026-05-04): (1) GPT-5.2 + GPT-5.2-Codex DEPRECATION announced 2026-05-01 -- both retired across all Copilot experiences (Chat, inline edits, ask + agent modes, code completions) on 2026-06-01, except GPT-5.2-Codex remains in Copilot Code Review temporarily. Migrate to GPT-5.5 (7.5x multiplier) or GPT-5.4 (1x). (2) Business self-serve signup PAUSED 2026-04-22 -- joining Pro/Pro+/Student paused since 4/20. New Business orgs get Free or Team only; existing Business customers unaffected. (3) Copilot Code Review begins consuming GitHub Actions minutes on 2026-06-01 alongside the existing premium-request charge -- code reviews now bill TWICE (review request + Actions runtime). Budget impact for teams running review on every PR. (4) Verified multiplier table (paid plans, docs.github.com/en/copilot/concepts/billing/copilot-requests as of 2026-05-04): Claude Opus 4.7 = 15x; Claude Opus 4.6 = 3x (fast-mode preview = 30x); Sonnet 4/4.5/4.6 = 1x; Haiku 4.5 = 0.33x; Gemini 3.1 Pro = 1x; Gemini 3 Flash = 0.33x; GPT-5.5 = 7.5x; GPT-5.4 = 1x; GPT-5.4 mini = 0.33x; GPT-5.4 nano = 0.25x; GPT-5.3-Codex = 1x. Aggregator-circulated 'Opus 4.7 = 27x' and 'Gemini 3.1 Pro = 6x' figures are WRONG vs vendor primary",
      source: "GitHub Blog (github.blog/changelog/2026-05-01-upcoming-deprecation-of-gpt-5-2-and-gpt-5-2-codex), (github.blog/changelog/2026-04-22-pausing-new-self-serve-signups-for-github-copilot-business), (github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026), docs.github.com Copilot multiplier table",
      date: "2026-05-04",
    },
    {
      description: "PRICING REFORM ANNOUNCED 2026-04-27 (effective 2026-06-01): All Copilot paid plans transition off the 'premium requests' metering system to a usage-based AI Credits model. Each tier's monthly price now ALSO becomes its monthly credit allotment ($10 Pro = $10 in credits; $39 Pro+ = $39 in credits; $19 Business = $19/user; $39 Enterprise = $39/user). Above the allotment, requests pay-as-you-go at standard token API rates (input + output + cached). Code completions and Next Edit suggestions remain free across all plans and DO NOT consume credits. Annual subscribers stay on the existing premium-request model until their current plan expires, then drop to Free with a one-time prorated credit transfer covering remaining value. This is a direct response to agent-workload economics that VP Joe Binder cited as the reason for the 4/20 signup pause",
      source: "GitHub Blog: 'GitHub Copilot is moving to usage-based billing' (github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)",
      date: "2026-04-27",
    },
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

  lastReviewedDate: "2026-05-04",
  dataSources: [
    { name: "GitHub Changelog: GPT-5.2 + GPT-5.2-Codex deprecation (2026-05-01, retiring 2026-06-01)", url: "https://github.blog/changelog/2026-05-01-upcoming-deprecation-of-gpt-5-2-and-gpt-5-2-codex/", dateAccessed: "2026-05-04" },
    { name: "GitHub Changelog: Business self-serve signup pause (2026-04-22)", url: "https://github.blog/changelog/2026-04-22-pausing-new-self-serve-signups-for-github-copilot-business/", dateAccessed: "2026-05-04" },
    { name: "GitHub Changelog: Code Review Actions minutes billing (2026-04-27, effective 2026-06-01)", url: "https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/", dateAccessed: "2026-05-04" },
    { name: "GitHub docs: Copilot requests + multiplier table", url: "https://docs.github.com/en/copilot/concepts/billing/copilot-requests", dateAccessed: "2026-05-04" },
    { name: "GitHub Blog: Copilot moving to usage-based billing (2026-04-27, effective 2026-06-01)", url: "https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/", dateAccessed: "2026-04-30" },
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
  metaTitle: "GitHub Copilot Review 2026: Usage-Based Billing June 1 + Signups Paused",
  metaDescription: "GitHub Copilot review. Usage-based billing effective 2026-06-01: $10 Pro / $39 Pro+ / $19 Business / $39 Enterprise become monthly AI Credit allotments. Code completions stay free. Pro signups still paused 4/20.",
};
