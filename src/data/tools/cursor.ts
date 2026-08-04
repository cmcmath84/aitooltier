import { ToolReview } from "@/lib/types";

export const cursor: ToolReview = {
  slug: "cursor",
  name: "Cursor",
  tagline: "AI-native code editor, agent-first in Cursor 3 -- and now home to Grok 4.5 (launched 2026-07-08), the frontier MoE model Cursor trained jointly with SpaceXAI on trillions of Cursor tokens ($2/$6 per 1M, all plans, desktop/web/iOS/CLI/SDK), with Composer 2.5 as the fast lower-cost tier",
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
      plan: "Teams -- Standard seat (new pricing, renewals 2026-07-01)",
      price: "$32-40",
      period: "user/month ($32 annual / $40 monthly)",
      features: ["Now includes MORE total usage at the same price (leverages Composer 2.5 cost efficiency)", "Two separate usage pools: (1) first-party Composer/Auto, (2) third-party API models", "Shared chats, centralized billing, analytics, SAML SSO, privacy mode, Agent Command Center"],
    },
    {
      plan: "Teams -- Premium seat (new, 2026-07-01)",
      price: "$96-120",
      period: "user/month ($96 annual / $120 monthly)",
      features: ["5x the included usage of the Standard seat at only 3x the cost", "Same two-pool structure (first-party vs third-party API)", "For heavy agentic teams that were previously overflowing the Standard seat"],
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
      description: "THREE SHIPS IN A WEEK -- CURSOR START (INDIA), IPAD, AND GOOGLE WORKSPACE (2026-07-28 -> 2026-08-03, vendor changelog): **(1) Cursor Start, 2026-07-28** -- a new **India-only** plan at **Rs 649/month**, vendor wording: 'a new Rs 649 monthly plan for developers in India, making daily agentic development accessible and payment easy with local pricing and UPI.' It bundles Grok 4.5 (fixed medium effort, non-fast), Composer, always-on cloud agents and iOS access. This is Cursor's first regional price tier and reads as a direct response to price-sensitive high-volume markets. **(2) Cursor for iPad, 2026-07-29** -- 'Cursor for iPad is now available on all paid plans', shipping alongside an inbox for organising work and a review experience that covers the full PR, plus Bitbucket and Azure DevOps SCM support and multi-PR sessions. **(3) Google Workspace plugins, 2026-08-03 (today)** -- 'Cursor can now read, write, and act across your Google Workspace', with plugins giving coding agents direct access to **Gmail, Google Drive, Calendar, Docs, and Sheets.' That last one pushes Cursor beyond the IDE into general knowledge work, which is a notable scope expansion for a coding tool",
      source: "Cursor changelog (cursor.com/changelog plus /changelog/cursor-start, /changelog/ipad, /changelog/google-workspace-plugins; fetched 2026-08-03)",
      date: "2026-08-03",
    },
    {
      description: "CURSOR ROUTER (2026-07-22, vendor changelog): Cursor shipped **Cursor Router**, intelligent per-request model routing that picks the model for each request across three selectable modes -- **Intelligence** (best model regardless of cost), **Balance**, and **Cost** -- rather than making you pin one model. Admin controls let teams restrict which modes are allowed and allowlist specific models; it works across desktop, web, iOS, CLI, and SDK, and is **on by default for Teams**. Separately (2026-07-17) Cursor overhauled its **Slack integration** -- plan-before-execute, multi-repo awareness, and cross-channel context. Feature releases, no pricing change",
      source: "Cursor changelog (cursor.com/changelog)",
      date: "2026-07-22",
    },
    {
      description: "GROK 4.5 SHIPPED (2026-07-08, vendor-primary on BOTH sides): the SpaceXAI + Cursor joint model is real and launched as **Grok 4.5** -- a mixture-of-experts frontier model Cursor says it 'trained jointly with SpaceXAI,' incorporating **trillions of tokens of Cursor data** plus RL on deliberately hard problems, aimed beyond software engineering at data science, finance, and legal work. **Available in Cursor on ALL plans across desktop, web, iOS, CLI, and the SDK** from day one. Pricing: **$2/M input + $6/M output** (base) and **$4/$18 for a faster variant**. Vendor-reported benchmarks: Terminal-Bench 2.1 83.3%, SWE-Bench Pro 64.7%, #1 on Harvey's Legal Agent Benchmark, and striking token efficiency (~15,954 output tokens per SWE-Bench Pro task vs ~67,020 for Opus 4.8 max, per press relaying the launch charts). INDEPENDENT VERIFICATION LANDED 7/9-10: **Artificial Analysis Intelligence Index 54** (4th among frontier models per AA's launch article), GDPval-AA Elo 1543, 92.9 tok/s measured. **Composer 2.5 remains available as a separate, smaller weight class** -- Grok 4.5 is the frontier tier above it. Not yet available in the EU at launch. This resolves the 7/7 Reuters/The Information 'imminent' report and confirms the post-acquisition Cursor+SpaceXAI stack is shipping first-party frontier models",
      source: "Cursor blog (cursor.com/blog/grok-4-5), SpaceXAI (x.ai/news/grok-4-5), Axios (2026-07-08)",
      date: "2026-07-08",
    },
    {
      description: "ENTERPRISE (2026-06-30, v3.10 changelog): **Team MCP servers** -- admins configure MCP servers once at the team level and they distribute across cloud agents, the Agents window, IDE, and CLI; marketplace access can now be restricted by organization group. Small release, but it closes an enterprise-governance gap for MCP-heavy teams",
      source: "Cursor changelog (cursor.com/changelog)",
      date: "2026-06-30",
    },
    {
      description: "TEAMS PRICING OVERHAUL (2026-06, effective immediately for new customers / **billing cycles starting 2026-07-01 for renewals**): Cursor restructured Teams into TWO usage pools per seat -- a 'generous' pool reserved for first-party Cursor models (Composer + Auto), and a separate pool for third-party API models (Claude/OpenAI/Gemini). **Standard seat: $32/mo annual ($40 monthly), now with MORE included usage at the same price** (Cursor credits Composer 2.5's cost efficiency). **New Premium seat: $96/mo annual ($120 monthly) = 5x the Standard seat's included usage at 3x the cost** -- for heavy agentic teams. Practical read: if your team lived on third-party frontier models, watch which pool your usage draws from now; the extra headroom is concentrated in the first-party Composer pool. NOT the June-2025 Pro-plan backlash -- this is a fresh Teams-tier change.",
      source: "Cursor blog (cursor.com/blog/teams-pricing-june-2026)",
      date: "2026-07-01",
    },
    {
      description: "PLATFORM (2026-06-29): **Cursor for iOS entered public beta** -- a native iPhone app to monitor, steer, and kick off cloud agent runs from your phone (Android 'planned,' no date). Extends the cross-platform agent story off the desktop. Context worth tracking: SpaceX's option to acquire Anysphere (~$60B all-stock) is expected to close in Q3 2026, which could reshape Cursor branding/roadmap. Separately, **Cursor Origin** -- an agent-first Git forge/hosting platform announced 6/16 -- remains waitlist-only with GA targeted 'fall 2026'; no pricing yet.",
      source: "Cursor (x.com/cursor_ai), learncursor.dev, thenewstack.io/cursor-origin-github-disruption",
      date: "2026-06-29",
    },
    {
      description: "BUGBOT UPDATE (2026-06-10, vendor changelog): Bugbot is now **3x faster (~90s average review), 22% cheaper, and finds ~10% more bugs** (0.56 → 0.62 bugs/review per Cursor's published numbers). MODEL-GAP NOTE: **Claude Fable 5 (launched 6/9) is NOT yet available in Cursor** as of 6/10 -- it went day-one GA in GitHub Copilot, Bedrock, Foundry, and Vertex; if you want the strongest agentic-coding model inside Cursor you're waiting on Anysphere",
      source: "Cursor changelog (cursor.com/changelog -- 2026-06-10 Bugbot entry)",
      date: "2026-06-10",
    },
    {
      description: "VERSION CLUSTER (v3.6 5/29 + v3.7 early June, all vendor changelog): **3.6 'Auto-review Run Mode'** (5/29) -- a classifier subagent routes Shell/MCP/Fetch tool calls between auto-execute and require-review, cutting approval fatigue without going full-YOLO (the aggregator-circulated 'Cursor 3.6 auto-review' claim is confirmed real). **v3.7 ships**: Organizations for Cursor Enterprise (6/3, per-team security/governance/budget controls), Canvas Design Mode + Context Usage Report (6/4), SDK upgrades (custom stores, custom tools, auto-review, nested subagents in TS/Python), and Design Mode improvements (6/5, multi-select + voice input). Enterprise governance + design tooling in one week -- Cursor pushing both upmarket and into the designer workflow simultaneously",
      source: "Cursor changelog (cursor.com/changelog) -- 2026-05-29 v3.6 + 2026-06-03/04/05 v3.7 entries",
      date: "2026-06-05",
    },
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

  lastReviewedDate: "2026-07-22",
  dataSources: [
    { name: "Cursor changelog: Cursor Router (2026-07-22) + Slack overhaul (2026-07-17)", url: "https://cursor.com/changelog", dateAccessed: "2026-07-22" },
    { name: "Cursor blog: Introducing Grok 4.5 (2026-07-08)", url: "https://cursor.com/blog/grok-4-5", dateAccessed: "2026-07-09" },
    { name: "SpaceXAI: Introducing Grok 4.5", url: "https://x.ai/news/grok-4-5", dateAccessed: "2026-07-09" },
    { name: "Axios: SpaceXAI launches new model, Grok 4.5 (2026-07-08)", url: "https://www.axios.com/2026/07/08/spacexai-grok-new-model", dateAccessed: "2026-07-09" },
    { name: "Cursor blog: Teams pricing (June 2026, renewals effective 2026-07-01)", url: "https://cursor.com/blog/teams-pricing-june-2026", dateAccessed: "2026-07-04" },
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
  poweredBy: "Grok 4.5 (Cursor + SpaceXAI joint, 2026-07-08) / Composer 2.5 / Claude / GPT-5.6 / Gemini (user selects)",
  metaTitle: "Cursor Review 2026: Grok 4.5 Launch -- Cursor + SpaceXAI's Frontier Model",
  metaDescription: "Cursor review. Grok 4.5 (July 8, 2026) is the Cursor + SpaceXAI joint frontier model -- $2/$6 per 1M, all plans, trained on trillions of Cursor tokens, Terminal-Bench 2.1 83.3%. Plus Composer 2.5, iOS beta, and the July Teams pricing overhaul.",
};
