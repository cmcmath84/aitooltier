import { ToolReview } from "@/lib/types";

export const cursor: ToolReview = {
  slug: "cursor",
  name: "Cursor",
  tagline: "AI-native code editor, agent-first in Cursor 3 -- multi-workspace, cross-platform agents, and Composer 2.5 (shipped 2026-05-18, Cursor's frontier coding model at $0.50/$2.50 per 1M tokens, 2x usage during launch week)",
  category: "ai-code-assistants",
  url: "https://cursor.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 8,
    features: 9,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Hobby (Free)",
      price: "$0",
      features: ["2,000 completions", "50 premium requests", "Composer 2 limited access"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: ["Unlimited completions", "Extended agent limits", "Composer 2 Standard at $0.50/$2.50 per 1M tokens", "All frontier models"],
    },
    {
      plan: "Pro+",
      price: "$60",
      period: "month",
      features: ["3x Pro usage on OpenAI, Claude, Gemini models", "Composer 2 Fast at $1.50/$7.50 per 1M tokens", "Multi-workspace"],
    },
    {
      plan: "Ultra",
      price: "$200",
      period: "month",
      features: ["20x Pro usage on all frontier models", "Highest priority queue", "Background Agents at scale"],
    },
    {
      plan: "Teams",
      price: "$40",
      period: "user/month",
      features: ["Shared chats, centralized billing, analytics", "Admin controls, SAML SSO, privacy mode", "Agent Command Center"],
    },
  ],

  pros: [
    "Cursor 3's agent-first redesign (April 2026) is the biggest interface overhaul since launch -- multi-workspace tabs, a persistent sidebar for local + cloud agents, and cross-platform handoff between mobile, web, Slack, GitHub, and Linear actually deliver on 'your AI pair wherever you are'",
    "Composer 2 is Cursor's own frontier coding model (based on Kimi K2.5 architecture) running at 200+ tok/s and priced at $0.50/$2.50 per 1M tokens -- in direct testing it's competitive with Claude Opus 4.6 on straightforward coding while being dramatically faster",
    "Codebase understanding remains best-in-class -- multi-file refactors, architecture-aware chat, and the ability to 'just ask Cursor' about any function in a 500k-line repo still feel a generation ahead of Copilot",
    "Still built on VS Code so the keyboard muscle memory, extensions, and theme are preserved -- the switching cost is genuinely low for existing VS Code users",
  ],
  cons: [
    "Premium request limits on Pro are still frustrating at heavy usage -- the Ultra tier at $200/mo exists for a reason, and serious users will end up there",
    "Composer 2 occasionally produces confident-looking code that fails in subtle ways -- the speed is real but it is noticeably less careful than Claude Opus 4.6 on complex architectural tasks",
    "Cross-platform agent handoff in Cursor 3 adds surface area -- the mobile / Slack / GitHub surfaces are still rough, and background agents sometimes do work you didn't want while you were asleep",
    "The Agent Command Center is a power feature that casual users won't touch -- if you're just here for tab completion, Cursor 3 is more tool than you need and Copilot remains less disruptive",
  ],
  knownIssues: [
    {
      description: "PRODUCT (2026-05-19 + 2026-05-20): Cursor shipped two post-Composer-2.5 integration/feature drops. **5/19 Cursor in Jira**: @Cursor mentions inside Jira comments trigger cloud agent runs that auto-create PR links back to the Jira ticket. Requires Rovo-enabled Jira Commercial Cloud (Atlassian's AI tier) -- not available on Jira Server / Data Center. **5/20 Cursor Automations v2**: multi-repo support, no-repo automations (automations that orchestrate without targeting a specific repo at definition time), plus 5 new marketplace templates (Slack digest agent, product analytics agent, FAQ agent, finance agent, customer-health agent). **50% discount on agent runs for the first 7 days of each new automation**. The Jira surface adds @-mention parity with the 5/11 Microsoft Teams integration; the Automations v2 marketplace template push is Cursor's bid for the no/low-code business-agent slot that Microsoft Agent 365 + Notion Custom Agents are competing for.",
      source: "Cursor changelog (cursor.com/changelog) -- 2026-05-19 Jira + 2026-05-20 Automations v2",
      date: "2026-05-20",
    },
    {
      description: "PRODUCT (2026-05-18): **Cursor Composer 2.5** shipped via the Cursor changelog -- 'substantial improvement in intelligence and behavior' over Composer 2, with the **same pricing** structure ($0.50/M input + $2.50/M output for the Standard tier; Fast tier remains $1.50/$7.50 for Pro+ subscribers). **Double usage for the first launch week** -- effectively a free quality bump for all paying users through ~5/25. Vendor changelog confirmed at cursor.com/changelog; the aggregator-circulated 'Kimi K2.5 architecture' detail is not stated in the official changelog post and should be treated as unverified narrative. Practical implication: if you were holding Composer use down because Composer 2 felt unreliable on architectural tasks, retry with Composer 2.5 this week. Pair with the 5/13 cloud Dev Environments + 5/7 PR review experience for the strongest one-month feature window since Cursor 3 launched.",
      source: "Cursor changelog (cursor.com/changelog) -- 2026-05-18 Composer 2.5",
      date: "2026-05-18",
    },
    {
      description: "PRODUCT (2026-05-07): **Cursor 3.3** shipped with a new PR review experience (Reviews / Commits / Changes tabs inside the editor) and **'Build in Parallel'** -- Cursor multitasks plan execution so the agent works through multiple independent steps simultaneously instead of serializing them. Pinnable quick-action skill pills also landed. The PR review surface is a clear shot at GitHub Copilot Code Review's territory (Copilot is also re-pricing PR review on Actions minutes 6/1, see github-copilot.ts) -- Cursor's version sits in the editor and doesn't bill separately.",
      source: "Cursor changelog (cursor.com/changelog/05-07-26)",
      date: "2026-05-07",
    },
    {
      description: "PRODUCT (2026-05-13): Cursor shipped 'Development Environments for Cloud Agents' -- configured runtime setups so cloud agents can take engineering tasks start to finish with cloned repos, installed deps, internal-toolchain credentials, and build-system access. Key capabilities: (a) multi-repo environments (one agent works across interdependent codebases), (b) Dockerfile-based config with build secrets and improved layer caching (70% faster builds), (c) Cursor-generated Dockerfiles via agent-led setup (private beta for Enterprise -- agent inspects repo, asks clarifying questions, validates), (d) governance controls: version history with rollback, audit log of all changes, granular permissions (secrets + network egress scoped per environment). Positions Cursor's cloud agents as a viable Devin / Cognition substitute for teams that want the agent inside their existing Cursor seat instead of buying a separate Cognition contract.",
      source: "Cursor blog (cursor.com/blog/cloud-agent-development-environments), Cursor changelog 2026-05-13",
      date: "2026-05-13",
    },
    {
      description: "PRODUCT (2026-05-11): Cursor in Microsoft Teams -- @Cursor mentions inside Teams channels delegate a coding task to the Cursor cloud agent, which auto-selects the relevant repo + model, reads thread context, and opens a PR. First first-party Cursor integration outside the editor itself; positions Cursor against GitHub Copilot's Teams-native presence. Concurrently shipped: Bugbot effort levels (Default / High / Custom tiers for code-review depth -- High pass tradeoffs more deeply, Custom lets you set the budget per repo).",
      source: "Cursor changelog (cursor.com/changelog/microsoft-teams), Cursor changelog (cursor.com/changelog)",
      date: "2026-05-11",
    },
    {
      description: "SECURITY (disclosed 2026-04-27, reported privately 2026-02-01): LayerX Security published 'CursorJacking' -- any Cursor extension can read OpenAI / Anthropic / Google API keys + session tokens directly from the unencrypted SQLite store at ~/Library/Application Support/Cursor/User/globalStorage/state.vscdb. CVSS 8.2 (HIGH). No CVE assigned. Anysphere / Cursor declined to patch, position is that defining the trust boundary on installed extensions is a user responsibility. No vendor remediation expected. Practical mitigation: only install extensions from sources you trust as much as you trust the API keys themselves; rotate API keys periodically; monitor key usage for anomalies. If you've installed any unknown / cracked / from-the-wild extensions, treat your active API keys as potentially compromised and rotate now",
      source: "LayerX Security disclosure (layerxsecurity.com/blog/cursorjacking-every-cursor-user-is-vulnerable-to-api-key-theft-by-rogue-extensions), Infosecurity Magazine, The CybrDef",
      date: "2026-04-27",
    },
    {
      description: "PRODUCT (2026-04-30 + 2026-05-01): Cursor Security Review shipped in beta on Teams + Enterprise plans. Two security agents: Security Reviewer scans every PR for security vulnerabilities, auth regressions, and privacy/data-handling risks; Vulnerability Scanner runs scheduled scans of the codebase for known vulnerabilities and outdated dependencies. MCP-customizable -- plug in your existing SAST / SCA / secrets scanners. Draws from your existing usage pool (no separate billing line). On 2026-05-01 Team Marketplace updates landed: admins can configure plugin distribution as Default Off (users opt in), Default On (auto-installed but opt-out), or Required (cannot be uninstalled), all without needing a repo connection first. Pairs with the SDK + 3.2 multitask shipment to make Cursor a cleaner enterprise-IT proposition",
      source: "Cursor changelog (cursor.com/changelog) -- 2026-04-30 + 2026-05-01 entries",
      date: "2026-05-01",
    },
    {
      description: "OWNERSHIP-CHANGE WATCH (2026-04-21): SpaceX disclosed it has the option to acquire Anysphere (Cursor's parent) for $60B later in 2026, OR pay $10B in lieu for joint compute work via Colossus (~1M H100-equivalent). Cursor cited being 'bottlenecked by compute' as the reason. Closing window pegged to SpaceX's June 2026 IPO. Not a closed deal -- it's an option -- but a meaningful tool-risk signal for buyers planning multi-year Cursor commitments. Earlier in April Cursor was also in talks to raise $2B+ at a $50B valuation; whether the SpaceX option supersedes or coexists with that round is unclear",
      source: "CNBC, TechCrunch, Bloomberg, Engadget",
      date: "2026-04-21",
    },
    {
      description: "Cursor was reported on 2026-04-17 to be training Composer 2.5 on thousands of xAI-supplied GPUs (Business Insider). Composer 2.5 subsequently **shipped 2026-05-18** -- about a month after that report -- see the 5/18 entry above. First major compute deal between a top AI coding company and xAI's post-SpaceX-acquisition infrastructure.",
      source: "Business Insider, Seeking Alpha, MSN, Cursor changelog 2026-05-18",
      date: "2026-04",
    },
    {
      description: "Cursor SDK shipped 2026-04-28 in public beta -- `npm install @cursor/sdk` exposes the same agents that power the Cursor desktop, CLI, and web apps as TypeScript primitives. Run agents locally or on Cursor's cloud infrastructure. Token-based consumption pricing -- no separate seat or tier requirement, billed against your existing plan. Practical impact: Cursor is no longer just an IDE -- you can embed Cursor's agents inside your own products, CI pipelines, or internal tools. Sample projects in a public repo for forking",
      source: "Cursor changelog: cursor.com/changelog/sdk-release",
      date: "2026-04-28",
    },
    {
      description: "Cursor 3.2 (2026-04-24) added three agent-window upgrades: (1) `/multitask` runs async subagents in parallel instead of queuing requests, (2) Worktrees in the Agents window let you run isolated tasks in the background across different branches, (3) Multi-root Workspaces -- a single agent session can target a reusable workspace made of multiple folders, enabling cross-repository changes without retargeting the agent each time. If you're on 3.1 without an update, you're missing the parallel-multitask + cross-repo workflow polish",
      source: "Cursor changelog: cursor.com/changelog",
      date: "2026-04-24",
    },
    {
      description: "Cursor 3.1 (2026-04-13 rollout) added voice dictation and parallel agent improvements on top of the Cursor 3 base -- if you're on 3.0 without an update, you're missing voice + parallel-agent polish",
      source: "Cursor changelog",
      date: "2026-04",
    },
    {
      description: "Cursor 3 multi-workspace tabs occasionally lose context on switch -- agents in inactive workspaces sometimes forget prior turns when refocused",
      source: "Cursor Community Forum",
      date: "2026-04",
    },
    {
      description: "Composer 2 has been reported to be overly aggressive with speculative completions in legacy codebases -- produces fast but sometimes wrong suggestions in Python 2 or old Java",
      source: "Reddit r/cursor",
      date: "2026-04",
    },
    {
      description: "Cloud background agents can accumulate unreviewed commits on branches while you're away -- easy to lose track of what the agent did overnight",
      source: "Hacker News discussion",
      date: "2026-04",
    },
  ],
  bestFor: "Developers who want the deepest AI integration possible and who are ready to work with agents rather than just autocomplete. Cursor 3's multi-workspace + cross-platform agent story is designed for people who are already living in the Cursor app daily, not dabblers.",
  notFor: "Developers happy with their current editor setup who just want basic autocomplete -- Copilot is still less disruptive for that. Also not for anyone skeptical of Cursor's own coding model; if you want pure frontier-model access for every task, paying Claude or OpenAI directly and using Claude Code is cleaner.",
  verdict: "Cursor 3 + Composer 2 (April 2026) is the release where Cursor stops being an AI-augmented editor and becomes an agent-first dev environment. Composer 2's speed at $0.50/$2.50 per 1M tokens is the real story -- it makes tight iteration loops feel instant in a way frontier models can't, even if the quality is slightly below Opus 4.6. The multi-workspace + cross-platform handoff design assumes you want your agents everywhere; if you don't, it's overkill. The honest read: for developers willing to go all-in on agentic workflows, Cursor 3 is the 2026 default. For everyone else, Claude Code + Copilot is a simpler, less committing stack.",

  lastReviewedDate: "2026-05-21",
  dataSources: [
    { name: "Cursor: Development Environments for Cloud Agents (2026-05-13)", url: "https://cursor.com/blog/cloud-agent-development-environments", dateAccessed: "2026-05-13" },
    { name: "Cursor changelog: Microsoft Teams (2026-05-11)", url: "https://cursor.com/changelog/microsoft-teams", dateAccessed: "2026-05-13" },
    { name: "LayerX Security: CursorJacking disclosure (2026-04-27)", url: "https://layerxsecurity.com/blog/cursorjacking-every-cursor-user-is-vulnerable-to-api-key-theft-by-rogue-extensions/", dateAccessed: "2026-05-02" },
    { name: "Cursor changelog: SDK release (2026-04-28)", url: "https://cursor.com/changelog/sdk-release", dateAccessed: "2026-04-28" },
    { name: "Cursor changelog: 3.2 multitask + worktrees + multi-root workspaces", url: "https://cursor.com/changelog", dateAccessed: "2026-04-28" },
    { name: "CNBC: SpaceX says it can buy Cursor later this year for $60B (2026-04-21)", url: "https://www.cnbc.com/2026/04/21/spacex-says-it-can-buy-cursor-later-this-year-for-60-billion-or-pay-10-billion-for-our-work-together.html", dateAccessed: "2026-04-25" },
    { name: "TechCrunch: SpaceX is working with Cursor and has an option to buy", url: "https://techcrunch.com/2026/04/21/spacex-is-working-with-cursor-and-has-an-option-to-buy-the-startup-for-60-billion/", dateAccessed: "2026-04-25" },
    { name: "Cursor blog: Meet the new Cursor (Cursor 3)", url: "https://cursor.com/blog/cursor-3", dateAccessed: "2026-04-16" },
    { name: "Cursor blog: Introducing Composer 2", url: "https://cursor.com/blog/composer-2", dateAccessed: "2026-04-16" },
    { name: "G2 Reviews", dateAccessed: "2026-04-16" },
    { name: "Reddit r/cursor", dateAccessed: "2026-04-16" },
    { name: "Daily use testing", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://cursor.com",
  status: "active",
  poweredBy: "Composer 2 (Cursor's own) / Claude Opus 4.6 / GPT-5.4 / Gemini (user selects)",
  metaTitle: "Cursor 3 + Composer 2 Review 2026: Agent-First AI Code Editor",
  metaDescription: "Cursor 3 review. Agent-first rebuild with multi-workspace, cross-platform agents, and Composer 2 (200+ tok/s coding model) at $0.50/$2.50 per 1M. April 2026.",
};
