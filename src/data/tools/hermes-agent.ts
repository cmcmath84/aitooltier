import { ToolReview } from "@/lib/types";

export const hermesAgent: ToolReview = {
  slug: "hermes-agent",
  name: "Hermes Agent",
  tagline: "**v0.23.0 'Hearth Release' (2026-11-05): the Desktop workspace now opens in a browser tab served by your own gateway, and one gateway owns every session across CLI, TUI, Desktop, bots and cron.** Nous Research's MIT-licensed self-improving agent -- persistent memory, auto-generated skills, a signed desktop app with guided onboarding and one-click local models (v0.22.0), and optional Nous Portal plans from $20/month",
  category: "ai-personal-agents",
  url: "https://hermes-agent.nousresearch.com/",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 9,
    value: 9,
    features: 9,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-Hosted (MIT)",
      price: "$0",
      features: [
        "Free and open source under MIT",
        "Runs on your server or local machine",
        "All platforms included (Telegram, Discord, Slack, WhatsApp, Signal, CLI, Email)",
        "Full sandboxing: local, Docker, SSH, Singularity, Modal (Singularity moved to a self-installing plugin in v0.23.0)",
        "Persistent memory and auto-generated skills",
        "Desktop app (signed; Microsoft Store on Windows, Apple Silicon macOS) plus CLI/TUI; one-click llama.cpp local models since v0.22.0",
      ],
    },
    {
      plan: "Nous Portal (optional)",
      price: "$0 / $20 / $100 / $200",
      period: "month (Free / Plus / Super / Ultra)",
      features: [
        "Free: $0, pay as you go, free models only",
        "Plus $20/month, Super $100/month (5x Plus usage), Ultra $200/month (10x Plus usage)",
        "All paid tiers include usage in Hermes Agent, access to 200+ models, built-in tool use and one Cloud agent",
        "Cloud hosting: one agent up to 4 GB RAM / 25 GB disk (Plus), 4 GB / 100 GB (Super), 8 GB / 100 GB (Ultra)",
        "Not required -- bring any provider key or run local models instead",
      ],
    },
    {
      plan: "LLM API Costs",
      price: "Varies",
      period: "usage",
      features: [
        "Nous Portal, OpenRouter (200+ models), z.ai/GLM, OpenAI, or self-hosted",
        "Switch providers with hermes model -- no code changes",
        "Typical: $30-$150/month depending on heartbeat frequency",
      ],
    },
  ],

  pros: [
    "True learning loop -- after complex tasks it writes reusable skills to its memory, so it really does get more capable the longer you use it (rare in this category)",
    "Five sandboxing backends (local, Docker, SSH, Singularity, Modal) is serious infrastructure -- you can actually run untrusted code without handing your machine over",
    "Subagent delegation with isolated conversations and Python RPC means long pipelines don't eat your context window -- technically this is the cleanest design of any 2026 personal agent",
    "Nous Research pedigree -- this team shipped Hermes 3 on Llama 3.1 and they know model behavior -- the agent reasons better than OpenClaw on ambiguous tasks in direct comparisons",
  ],
  cons: [
    "Smaller community than OpenClaw (~263k vs ~394k GitHub stars as of 2026-11-12) -- the gap has narrowed a lot and the plugin catalog passed 1,050 entries in v0.23.0, but OpenClaw still has the larger third-party ecosystem",
    "Natural-language cron, multi-backend sandboxing, gateways, profiles and subagents all add surface area -- the v0.22.0 desktop onboarding gets you chatting in minutes, but a real server deployment with sandboxing and messaging bots is still a weekend project",
    "Release pace is punishing -- five minor versions and roughly 25 patch tags between July and November 2026, each with upgrade notes (removed browser tools, renamed commands, Python 3.14 runtime, MSIX-only Windows desktop); v0.22.1 was built from the wrong commit and replaced a day later",
    "Self-improving memory is powerful but opaque -- debugging 'why did it do that?' gets harder as the skill library grows without good tooling to inspect it",
    "Best in class only if you drive it hard -- a casual user will never see the learning loop pay off and would get the same result from OpenClaw with less setup",
  ],
  knownIssues: [
    {
      description: "RELEASE (2026-11-05, patch 2026-11-09): Hermes Agent v0.23.0 'The Hearth Release', then v0.23.1. Headlines: a **Webapp** that serves the full Desktop workspace from your own gateway in any browser (off by default; `webapp.enabled` or Web Access in Settings); **one gateway owns every conversation** -- CLI, TUI, Desktop, editors (ACP), messaging bots and cron now attach to a single per-machine gateway as clients instead of each running its own agent; inline images in the terminal; `/rewind` (Esc twice) to edit-and-resend or fork from an earlier message; Desktop keeps every local/SSH/remote gateway connected at once; Group Chats with lead-bot or automatic routing; `hermes plugins update` plus opt-in plugin auto-update; price tags and spend limits on paid MCP tools; pluggable subagent delegation. Plugin catalog grew 'from about 600 to over 1,050 entries' with a new Verified tier. **Upgrade notes:** the ten `browser_*` tools and agent-browser were removed (browser automation runs on `browser_exec` only); Desktop needs macOS 13+ and 64-bit Windows; `hermes mcp serve` is now `hermes mcp-serve`; Singularity, Camofox and the agent importers moved out of core into self-installing plugins; the silent default model moved from GLM-5.2 to GLM-5.3. **v0.23.1 (2026-11-09)** fixes a plugin-catalog bug: since the catalog site deploy on November 9 the published catalog exceeded the 2 MiB client cap, so every install silently fell back to its bundled catalog -- installs that stay on v0.23.0 or older keep falling back until they update",
      source: "GitHub release notes (github.com/NousResearch/hermes-agent/releases/tag/v0.23.0, .../tag/v0.23.1)",
      date: "2026-11-05",
    },
    {
      description: "RELEASE (2026-10-13): Hermes Agent v0.22.0 'The Threshold Release' -- the on-ramp release, and by the vendor's own count the largest window it has shipped (~6,080 merged PRs). A fresh desktop install opens a guided setup chat on a free trial model (`nous/welcome`, once per OS user) so no API key is needed to start; **Connectors** let the agent act in hosted apps such as Linear and Notion through the Nous tool gateway; **one-click local models** install and maintain llama.cpp for your hardware (CPU, CUDA, Metal, Vulkan or ROCm); **stable SemVer release channels** (source installs now move release to release instead of tracking main, and tags went back from date-style v2026.x.y to v0.x.y); signed desktop packages including the Microsoft Store; a 600-plugin reviewed catalog; Bot Screen takeover; codebase cut from about 1.06M to 698K lines. **Upgrade notes:** Python 3.14 is the managed runtime; Windows desktop is MSIX-only and needs Windows 11 22H2 or newer, and the macOS app is Apple Silicon only in default builds; one gateway per machine is the default; idle/daily `session_reset` modes are retired; `sessions.auto_prune` now defaults on (ended sessions inactive for 90 days are deleted at startup -- set it to false to keep everything); memory providers (Honcho, Supermemory, Hindsight, Mem0, OpenViking, Holographic) moved to catalog plugins; `hermes sync` was removed. Follow-up: v0.22.1 (2026-10-14) 'was built from the wrong commit' and v0.22.2 (2026-10-15) replaced it, with a known issue that sessions run under the 0.22.1 gateway cannot be deleted in 0.22.2",
      source: "GitHub release notes (github.com/NousResearch/hermes-agent/releases/tag/v0.22.0, .../tag/v0.22.2)",
      date: "2026-10-13",
    },
    {
      description: "RELEASES v0.19.0 - v0.21.0 (2026-07-20 to 2026-08-31, recorded late on 2026-11-12): **v0.19.0 'Quicksilver' (2026-07-20)** -- first-turn time-to-first-token cut ~80% (cold start ~4.3s to ~0.9s), smart approvals on by default, Bitwarden and 1Password secret sources, `/subscription` and `/topup` to manage a Nous plan from the terminal, a durable delivery ledger so a finished answer survives a gateway crash. **v0.20.0 'Herald' (2026-08-03)** -- streaming conversational voice with barge-in and on-device wake words, Agent-to-Agent (A2A v1.0), signed outbound webhooks, grounded research with citations and fact-checking, desktop artifacts and a plugin SDK. **v0.21.0 'Pantheon' (2026-08-31)** -- Bot Mode built into the desktop app (named agents, group chats, @-mentions), `hermes peer` bot-to-bot DMs, cron jobs with memory between runs, live steering of running subagents, an MCP command center, and the agent driving the desktop's own browser",
      source: "GitHub release notes (github.com/NousResearch/hermes-agent/releases -- tags v2026.7.20, v2026.8.3, v2026.8.31)",
      date: "2026-08-31",
    },
    {
      description: "PRICING (as of 2026-11-12, vendor site): Hermes Agent itself stays free under MIT, but the official site now lists optional **Nous Portal** plans -- Free ($0, pay as you go, free models only), Plus $20/month, Super $100/month (5x Plus usage), Ultra $200/month (10x Plus usage). All paid tiers include usage in Hermes Agent, access to 200+ models, built-in tool use and one hosted Cloud agent (up to 4 GB RAM / 25 GB disk on Plus, 8 GB / 100 GB on Ultra). This is the first hosted no-server path for Hermes and it narrows the gap with hosted agents such as Manus; you can still ignore it entirely and bring your own provider or local models",
      source: "Hermes Agent official site (hermes-agent.nousresearch.com -- pricing table and FAQ)",
      date: "2026-11-12",
    },
    {
      description: "RELEASE (2026-07-01): Hermes Agent v0.18.0 'The Judgment Release' shipped (GitHub tag v2026.7.1 -- the project moved to date-style tags; six minor versions since our last deep review at v0.12.0). Headlines: 100% of P0/P1 issues closed (~692 highest-priority items, zero open); work verification with evidence + completion contracts (the agent must prove tasks finished); Mixture-of-Agents selectable as first-class models; /learn and /journey self-improvement + memory commands; parallel background subagent delegation; desktop coding projects with git integration; scale-to-zero gateway",
      source: "GitHub release notes (github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1)",
      date: "2026-07-01",
    },
    {
      description: "RELEASE (2026-04-30): Hermes Agent v0.12.0 'Curator Release' shipped. Headline: **Autonomous Curator** -- a background agent that grades, consolidates, and prunes skills on a 7-day cycle with detailed reporting. Directly addresses the long-standing skill-pollution complaint. Plus Self-Improvement Loop (rubric-based grading + active-update bias), 5 new inference providers (GMI Cloud, Azure AI Foundry, LM Studio first-class, MiniMax OAuth, Tencent Tokenhub), Microsoft Teams + Tencent Yuanbao plugins (18th platform), ComfyUI v5 + TouchDesigner-MCP bundled by default, Spotify native tools + Google Meet plugin, ~57% reduction in TUI cold-start via lazy initialization, new Models tab dashboard with per-model analytics. **Breaking changes**: /provider and /plan slash commands REMOVED; BOOT.md built-in hook ELIMINATED (docs provide alternatives); secret redaction now requires explicit opt-in (was on by default; off-by-default avoids data corruption). 1,096 commits / 550 PRs / 213 contributors since v0.11.0",
      source: "GitHub release notes (github.com/NousResearch/hermes-agent/blob/main/RELEASE_v0.12.0.md), Nous Research X announcement",
      date: "2026-04-30",
    },
    {
      description: "Skill pollution -- the auto-skill generator occasionally creates overlapping or contradictory skills that degrade behavior over weeks of use, requires manual pruning. **Note (2026-04-30):** v0.12.0 Curator Release adds the Autonomous Curator background agent that consolidates and prunes skills on a 7-day cycle -- this issue is now substantially mitigated for v0.12.0+ users",
      source: "Hugging Face discuss thread",
      date: "2026-03",
    },
    {
      description: "Gateway process memory usage grows with subagent count -- heavy parallelization on small VPS can OOM without warning",
      source: "GitHub Issues",
      date: "2026-04",
    },
  ],
  bestFor: "Power users and technical teams who will actually use an agent daily, give it real work, and benefit from a learning loop. Teams running it on a real server with Docker or Modal sandboxing get the most out of it. Also the right pick if you care about model sovereignty -- it runs on anything.",
  notFor: "Someone who only wants a chat window. The v0.22.0 desktop app and guided onboarding removed most of the install pain, but Hermes still rewards depth: if you won't run it daily for a month, you won't see the self-improvement differential -- just use OpenClaw or a hosted agent.",
  verdict: "Hermes is the technically superior agent in the category -- better reasoning, better sandboxing, better delegation architecture, a real learning loop. Nous Research shipped the design most of the 'agent that grows with you' marketing was promising elsewhere. The tradeoff is complexity, a relentless release cadence and a smaller community. Since July 2026 the project has also become far easier to start with -- a signed desktop app, guided onboarding on a free trial model, one-click local models, and optional Nous Portal plans ($20-$200/month) that include a hosted Cloud agent -- so the old 'engineers only' caveat is weaker than it was. If you're the kind of person who enjoys tuning your own systems and will use an agent as an actual daily driver, this is the best open-source option in 2026. If you want viral momentum and plug-and-play skills, OpenClaw is the easier on-ramp. The honest read: Hermes for the engineer, OpenClaw for everyone else.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "Hermes Agent v0.23.0 'Hearth Release' notes (2026-11-05)", url: "https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0", dateAccessed: "2026-11-12" },
    { name: "Hermes Agent v0.23.1 notes (2026-11-09)", url: "https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1", dateAccessed: "2026-11-12" },
    { name: "Hermes Agent v0.22.0 'Threshold Release' notes (2026-10-13)", url: "https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0", dateAccessed: "2026-11-12" },
    { name: "Hermes Agent releases list incl. v0.19.0 - v0.22.2 bodies (GitHub API)", url: "https://api.github.com/repos/NousResearch/hermes-agent/releases?per_page=60", dateAccessed: "2026-11-12" },
    { name: "Hermes Agent official site: Nous Portal plan table (Free / Plus / Super / Ultra)", url: "https://hermes-agent.nousresearch.com/", dateAccessed: "2026-11-12" },
    { name: "GitHub API: NousResearch/hermes-agent repo stats", url: "https://api.github.com/repos/NousResearch/hermes-agent", dateAccessed: "2026-11-12" },
    { name: "GitHub API: openclaw/openclaw repo stats", url: "https://api.github.com/repos/openclaw/openclaw", dateAccessed: "2026-11-12" },
    { name: "Hermes Agent v0.18.0 'Judgment Release' notes (2026-07-01)", url: "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1", dateAccessed: "2026-07-05" },
    { name: "Hermes Agent v0.12.0 'Curator Release' notes (2026-04-30)", url: "https://github.com/NousResearch/hermes-agent/blob/main/RELEASE_v0.12.0.md", dateAccessed: "2026-05-05" },
    { name: "Hermes Agent official site", url: "https://hermes-agent.nousresearch.com/", dateAccessed: "2026-04-13" },
    { name: "GitHub nousresearch/hermes-agent", url: "https://github.com/nousresearch/hermes-agent", dateAccessed: "2026-04-13" },
    { name: "The New Stack: OpenClaw vs Hermes", url: "https://thenewstack.io/persistent-ai-agents-compared/", dateAccessed: "2026-04-13" },
    { name: "Hugging Face discuss thread", url: "https://discuss.huggingface.co/t/hermes-agent-persistent-memory-and-emergent-skills-in-an-open-source-ai-agent-framework/175173", dateAccessed: "2026-04-13" },
    { name: "Turing Post: 9 Self-Improving Agents", url: "https://www.turingpost.com/p/agentselfimprovement", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://hermes-agent.nousresearch.com/",
  status: "active",
  metaTitle: "Hermes Agent Review 2026: Self-Improving Open-Source Agent",
  metaDescription: "Hermes Agent review. Open-source self-improving AI agent from Nous Research. v0.23.0 Hearth Release: browser Webapp, one gateway, 1,050+ plugins. Nov 2026.",
};
