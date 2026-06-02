import { ToolReview } from "@/lib/types";

export const githubCopilot: ToolReview = {
  slug: "github-copilot",
  name: "GitHub Copilot",
  tagline: "AI code assistant that lives in your editor -- autocomplete on steroids. Usage-based billing went LIVE 2026-06-01: AI Credits + token metering across all plans, code completions still free. New Copilot Max tier added the same day. New signups for Student/Pro/Pro+/Max remain PAUSED. As of 2026-06-02 (Microsoft Build), Microsoft's own MAI-Code-1-Flash is rolling into the VS Code model picker",
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
      features: ["NEW SIGNUPS PAUSED 2026-04-20", "Claude Opus access (Pro+ only)", "Full frontier-model picker", "Live 2026-06-01: $39 in monthly AI Credits"],
    },
    {
      plan: "Copilot Max (NEW 2026-06-01)",
      price: "Upgrade tier",
      features: ["Upgrade for existing Student/Pro/Pro+ subscribers", "Higher included usage + higher spending limits", "NEW SIGNUPS PAUSED (reopen in coming weeks)", "Usage-based AI Credits + token metering"],
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
      description: "BILLING CUTOVER WENT LIVE (2026-06-01, vendor-primary github.blog/changelog): usage-based billing is now live for all GitHub Copilot users. Each plan ships with monthly included usage; beyond it, requests meter against GitHub AI Credits / token rates. Code completions and Next Edit suggestions stay free. **New Copilot Max tier introduced the same day** -- an upgrade for existing Student/Pro/Pro+ subscribers with higher included usage + higher spending limits. **New signups remain PAUSED for Student, Pro, Pro+, AND the new Max plan** ('we'll reopen sign-ups in the coming weeks'). Copilot code review now also consumes GitHub Actions minutes as of 6/1. Net: the 4/27-announced transition is no longer 'upcoming' -- it is the current state.",
      source: "GitHub Changelog (github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/), GitHub Blog: moving to usage-based billing",
      date: "2026-06-01",
    },
    {
      description: "MICROSOFT BUILD (2026-06-02): Microsoft's own **MAI-Code-1-Flash** -- a lightweight in-house coding model -- is rolling out to GitHub Copilot individual users in VS Code, in the model picker and under the default auto-picker. Vendor benchmarks vs Claude Haiku 4.5: SWE-Bench Pro 51.2% vs 35.2% (a 16-point lead), solves SWE-Bench Verified problems with up to 60% fewer tokens, and +28.9 on IF Bench (instruction-following). Microsoft frames it as 'better price-to-performance across coding benchmarks.' Significant because it is the first time a first-party Microsoft model is the cost-efficient default inside Copilot rather than an OpenAI or Anthropic model -- part of the broader 'seven new MAI models' Build wave that also includes MAI-Thinking-1 (reasoning), MAI-Image-2.5, MAI-Transcribe-1.5, and MAI-Voice-2.",
      source: "Microsoft AI (microsoft.ai/news/introducingmai-code-1-flash/), Microsoft Build 2026 newsroom (news.microsoft.com/build-2026/)",
      date: "2026-06-02",
    },
    {
      description: "PRODUCT + MODEL CLUSTER (2026-05-14 → 2026-05-21, 6 vendor changelog entries in 8 days -- highest cadence of the year): (1) **2026-05-14 GitHub Copilot app in technical preview** -- standalone Copilot app outside the editor, paralleling the OpenAI Codex mobile / Cursor / Anthropic 'agent goes where you go' pattern. (2) **2026-05-19 Gemini 3.5 Flash GA inside Copilot** -- same day as Google's I/O 2026 reveal (no aggregator delay; vendor-to-vendor handoff). Added to the Pro+/Business/Enterprise model picker. (3) **2026-05-20 Auto model selection routes by task in VS Code** -- Copilot auto-picks among the lineup based on task type rather than user-pinned default. (4) **2026-05-20 Semantic issue search in Copilot Chat** -- chat queries the issues backlog with semantic understanding (find related, dedupe, surface stale). (5) **2026-05-20 Updates to available models in Copilot on web** -- model-picker parity refresh across surfaces. (6) **2026-05-21 Issue fields public preview** -- organization-wide rollout of issue-field customization. Net effect: 6 customer-facing changelogs in the 8-day window ahead of the 6/1 billing cliff.",
      source: "GitHub Changelog (github.blog/changelog -- 5/14 copilot-app-tech-preview, 5/19 gemini-3-5-flash-ga, 5/20 auto-model-selection-vscode, 5/20 semantic-issue-search-copilot-chat, 5/20 updates-to-available-models-on-web, 5/21 issue-fields-public-preview)",
      date: "2026-05-21",
    },
    {
      description: "MODEL LINEUP REFRESH (2026-05-17 + 2026-05-18): (1) **GPT-5.3-Codex is now the base model for Copilot Business and Enterprise** (vendor-primary github.blog 2026-05-17), replacing GPT-4.1 ahead of its 6/1 retirement. 1x multiplier, included in standard premium-request quotas; meaningfully faster base-tier completions + chat. (2) **Copilot Cloud Agent added two low-multiplier models 2026-05-18**: Claude Haiku 4.5 and GPT-5.4-mini, both at 0.33x multiplier -- positioned as the 'fast, cost-efficient' default for simple cloud agent tasks. Default cloud-agent runs now route to these tiers; users can still override to Sonnet 4.6 / Opus 4.7 / GPT-5.5 for complex work, but the new default cuts per-task spend ~3x. Material change for any team using Copilot agent mode on PR cleanup / test scaffolding -- audit your spend dashboard after 5/18",
      source: "GitHub Changelog (github.blog/changelog/2026-05-17-gpt-5-3-codex-is-now-the-base-model-for-copilot-business-and-enterprise, github.blog/changelog/2026-05-18-copilot-cloud-agent-fast-cost-efficient-models-for-simple-tasks)",
      date: "2026-05-18",
    },
    {
      description: "MODEL RETIREMENT WENT LIVE 2026-05-15: **Grok Code Fast 1 fully removed** from Copilot Chat, inline edits, ask + agent modes, and code completions (the 5/8-announced T-7 cliff landed on schedule, accelerated by xAI's own deprecation that day -- see grok.ts 8-model retirement). Anyone with grok-code-fast-1 pinned in a team config saw failures starting 5/15; replacements are GPT-5 mini or Claude Haiku 4.5. **GPT-4.1 retirement 2026-06-01 still on schedule** (T-13 from today). Joins the GPT-5.2 + GPT-5.2-Codex 6/1 batch already documented, making 6/1 a triple-deprecation cliff",
      source: "GitHub Changelog (github.blog/changelog/2026-05-08-upcoming-deprecation-of-grok-code-fast-1, github.blog/changelog/2026-05-08-upcoming-deprecation-of-gpt-4-1), xAI 5/15 retirement docs",
      date: "2026-05-15",
    },
    {
      description: "TWO MODEL DEPRECATIONS ANNOUNCED 2026-05-08 (Grok Code Fast 1 was T-7, now PAST-TENSE per 5/15 entry above): (1) **Grok Code Fast 1 retired 2026-05-15** -- accelerated 'due to the model provider deprecation' on xAI's side. Affected Copilot Chat, inline edits, ask + agent modes, code completions. Replacement: GPT-5 mini or Claude Haiku 4.5. (2) **GPT-4.1 retires 2026-06-01** -- joins the GPT-5.2 + GPT-5.2-Codex 6/1 batch. Replacement: GPT-5.5. Adds to the broader 6/1 usage-based-billing transition cliff: by June 1, model lineup loses GPT-5.2, GPT-5.2-Codex, GPT-4.1, AND moves to AI Credits metering simultaneously",
      source: "GitHub Changelog (github.blog/changelog/2026-05-08-upcoming-deprecation-of-grok-code-fast-1, github.blog/changelog/2026-05-08-upcoming-deprecation-of-gpt-4-1)",
      date: "2026-05-08",
    },
    {
      description: "ORIGINAL 5/8 ANNOUNCEMENT (now past-tense, see 5/15 + 5/08 entries above): (1) Grok Code Fast 1 retires 2026-05-15 -- only T-7 from announcement, accelerated 'due to the model provider deprecation' on xAI's side. Affects Copilot Chat, inline edits, ask + agent modes, code completions. Replacement: GPT-5 mini or Claude Haiku 4.5. If you have Grok Code Fast 1 pinned in any team config, it stops working in a week. (2) **GPT-4.1 retires 2026-06-01** -- joins the GPT-5.2 + GPT-5.2-Codex 6/1 batch already documented. Replacement: GPT-5.5. Adds to the broader 6/1 usage-based-billing transition cliff: by June 1, model lineup loses GPT-5.2, GPT-5.2-Codex, GPT-4.1, AND moves to AI Credits metering simultaneously",
      source: "GitHub Changelog (github.blog/changelog/2026-05-08-upcoming-deprecation-of-grok-code-fast-1, github.blog/changelog/2026-05-08-upcoming-deprecation-of-gpt-4-1)",
      date: "2026-05-08",
    },
    {
      description: "MODEL LINEUP SHRINK (2026-05-07): GitHub Copilot retires Claude Sonnet 4 from its model lineup, mirroring the upstream Anthropic API retirement scheduled for 2026-06-15. If your Copilot org/team had pinned Sonnet 4, it is now unselectable -- migrate to Sonnet 4.6 (1x multiplier, same as Sonnet 4) or Opus 4.7 (15x multiplier, dramatically higher cost). Adds to the 2026-06-01 GPT-5.2 + GPT-5.2-Codex deprecation already documented",
      source: "GitHub Changelog (github.blog/changelog), Anthropic deprecations page",
      date: "2026-05-07",
    },
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

  lastReviewedDate: "2026-06-02",
  dataSources: [
    { name: "GitHub Changelog: Updates to GitHub Copilot billing and plans -- usage-based billing live (2026-06-01)", url: "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: Introducing MAI-Code-1-Flash (2026-06-02)", url: "https://microsoft.ai/news/introducingmai-code-1-flash/", dateAccessed: "2026-06-02" },
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
  metaTitle: "GitHub Copilot Review 2026: Usage-Based Billing Live + New Copilot Max + MAI-Code-1-Flash",
  metaDescription: "GitHub Copilot review. Usage-based AI Credits billing went live 2026-06-01; new Copilot Max tier added; signups still paused for Student/Pro/Pro+/Max. Microsoft's MAI-Code-1-Flash now in the VS Code picker (Build, June 2). Code completions stay free.",
};
