import { ToolReview } from "@/lib/types";

export const claudeCode: ToolReview = {
  slug: "claude-code",
  name: "Claude Code",
  tagline: "Anthropic's terminal-based coding agent that reads your whole repo and makes real changes -- not just suggestions. **Claude Fable 5.1 (2026-09-01) is the top model and defaults to High effort in Claude Code specifically** -- Medium on every other Anthropic surface -- at an unchanged $10/$50 per 1M with cache reads cut 4x to $0.25/MTok. **Changelog pass (2026-09-21): 121 releases between 2.1.132 and 2.1.278 since the May 6 conference batch**, the ones that change how you buy or use it being agent view (5/11), Fable 5 (6/09), Sonnet 5 as default (6/30), Opus 5 (7/24), **AGENTS.md read when no CLAUDE.md exists (9/18)** and **auto mode moving to a server-side classifier with no classifier overhead charge (9/19)**. v2.1.131 (2026-05-06) shipped Code Review GA + Remote Agents + CI Auto-Fix + Routines",
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
      features: ["Included Claude Code access", "Usage limits apply", "Claude Sonnet 5 (new default, 2026-06-30)"],
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
      description: "CHANGELOG PASS -- 121 RELEASES BETWEEN 2.1.132 (2026-05-06) AND 2.1.278 (2026-09-19), NEAR-DAILY, AND HERE ARE THE ONES THAT CHANGE HOW YOU USE OR PAY FOR IT (compiled 2026-09-21 from Anthropic's own changelog, vendor-primary): This page had cited v2.1.131 (May 6) as the last product batch; Claude Code has shipped a version almost every weekday since. Model events already recorded above (Fable 5 in 2.1.170 on 6/09, Sonnet 5 as default in 2.1.197 on 6/30 with its $2/$10 promo, Opus 5 as the default Opus in 2.1.219 on 7/24 -- 1M context, fast mode at $10/$50 -- and Fable 5.1 on 9/01) are the headline. **Product changes worth knowing, in date order:** (1) **Agent view, research preview (2.1.139, 5/11)** -- `claude agents` gives 'a single list of every Claude Code session -- running, blocked on you, or done'; the same release **disabled Remote Control, /schedule, claude.ai MCP connectors and notification preferences whenever an API key is set**, even with a claude.ai login present. (2) **Fast mode default moved to Opus 4.7 (2.1.142, 5/14)** and then, with Opus 5, to the current line. (3) **AGENTS.md support (2.1.277, 9/18)** -- 'in a project with no CLAUDE.md, Claude Code reads AGENTS.md instead', switchable under Project instructions in /config; not yet on Bedrock, Vertex or Foundry. That is the cross-vendor agent-instructions convention Cursor, Codex and Copilot already read, so repos no longer need a Claude-specific file. (4) **Auto mode now defaults to a server-side classifier (2.1.278, 9/19)** for Claude API and Enterprise users and on Bedrock, Vertex, Foundry and gateways -- and Anthropic says it '**does not charge for classifier overhead**'; `CLAUDE_CODE_AUTO_MODE_SERVER=0` opts out on the cloud platforms, the CLI warns when it falls back to billed classification, and /status gains an 'Auto mode server' row. For anyone who avoided auto mode because the safety classifier cost tokens, that objection is gone. (5) **Headless and SDK hardening (2.1.277, 9/18)** -- `claude -p` and Agent SDK sessions that could hang after an internal error now exit with code 1, headless resumes keep cost totals, and the background auto-title request was removed from `claude -p` runs outside an SDK or IDE. (6) **The deprecated TaskOutput tool was removed (9/18)**; Claude reads background-task output files directly. (7) **Claude Code on the web (9/18)** -- Personal and Organization environment sections for Team/Enterprise, and admins can share a personal cloud environment org-wide. (8) **VS Code extension (9/18)** shows session cost and token usage in the Account and usage dialog for API-key, Vertex, Bedrock and Foundry users, where plan limits do not apply. (9) **Security posture:** subagent results now arrive under a header marking them as subagent output, 'so text in a subagent's result cannot pass as the session's own instructions' (9/18), and prompts are scrubbed of invisible Unicode formatting characters before sending. **What the page still does not cover and the docs sidebar now lists:** Chrome, Slack, Claude Tag, mobile, keybindings and /schedule routines exist as surfaces; they are mentioned here as present, not reviewed. Check the changelog itself for the bug-fix stream -- it runs to dozens of items per release.",
      source: "Anthropic: Claude Code changelog (code.claude.com/docs/en/changelog.md -- entries 2.1.132 'May 6, 2026' through 2.1.278 'September 19, 2026'; generated from github.com/anthropics/claude-code CHANGELOG.md) -- fetched 2026-09-21 via curl",
      date: "2026-09-19",
    },
    {
      description: "FABLE 5.1 IS THE NEW TOP MODEL IN CLAUDE CODE, AND IT DEFAULTS TO HIGH EFFORT HERE SPECIFICALLY (2026-09-01, vendor-primary): Anthropic shipped **Claude Fable 5.1**, and the detail that matters most for Claude Code users sits in a parenthetical on the launch post: '**Fable 5.1 defaults to High effort in Claude Code, and to Medium in Claude Cowork and on Claude.ai.**' **Claude Code is the only surface that defaults to High.** That is a defensible choice for a terminal agent doing long-running work, but it means the same prompt costs more here than in Cowork or on the web, and Anthropic's own framing is that '**when set to Low or Medium effort, Fable 5.1 achieves results similar to or better than Fable 5's at a much lower cost**' -- so the cheapest correct configuration for routine work is explicitly not the default you are given. **THE COST STORY IS CACHE-SHAPED, WHICH SUITS THIS TOOL UNUSUALLY WELL.** Fable 5.1's base rate is unchanged from Fable 5 at **$10/MTok input and $50/MTok output**; the entire quoted 25% saving (up to approximately 45% on 'highly agentic work') comes from **cache reads falling from $1/MTok to $0.25/MTok**. Claude Code re-reads a large, stable repo context on nearly every turn, which is close to the best possible case for a cache-read discount -- so of all the Anthropic surfaces, this is the one where the upper end of that range is plausible rather than promotional. **CODING EVIDENCE, VENDOR-PUBLISHED:** Terminal-Bench 4.0 **55.8%** (vs 42.0% for Fable 5, 52.3% for Opus 5, 37.3% for GPT-5.6 Sol); CursorBench 3.2.0 **73.4%** vs 70.5%; Terminal-Bench-Science 0.1 **52.6%** vs 24.7%. Anthropic says Fable 5.1 'avoids shortcuts that result in poorer-quality work' and fixes root causes, and cites Millennium finding a one-in-a-million crash that had gone unexplained for four to five years and that Fable 5 had missed. **Note the caveat Anthropic itself publishes: these runs had production safeguards enabled, and tasks where safeguards intervened scored zero**, which Anthropic says likely understates the numbers. Red Hat, quoted in the launch post, says Fable 5.1 'correctly identified the root cause of every broken build we tested, across all the effort levels' using Claude Code.",
      source: "Anthropic (anthropic.com/claude-fable-and-mythos-5-1 -- root path, not /news/) + platform.claude.com/docs/en/about-claude/pricing.md -- fetched 2026-09-05 via curl with browser UA",
      date: "2026-09-01",
    },
    {
      description: "CLAUDE CODE PROMPTS CAN NOW BE GATED BY YOUR OWN SECURITY SERVER -- INFERENCE HOOKS BETA (2026-08-05, vendor-primary, Enterprise only): Anthropic shipped **inference hooks** in beta for **Claude Enterprise organizations**, and Claude Code is explicitly in scope. Point Claude at your organization's AI security server and '**each governed prompt across claude.ai, Cowork, and Claude Code is held for the server's allow or deny verdict before inference proceeds**' -- a synchronous pre-inference block, not retrospective logging. Requests to your server are **signed**, **failure handling is configurable**, and **denials land in the compliance Activity Feed**. **WHY THIS MATTERS SPECIFICALLY FOR CLAUDE CODE:** it is the surface where a coding agent sees source, secrets and infrastructure, and until now enterprise controls mostly stopped at API-level logging and data-retention terms. This is the first Anthropic control that can refuse a Claude Code prompt before the model ever sees it. **THE SETTING THAT DECIDES IF THIS IS SAFE TO TURN ON is the configurable failure handling** -- fail-closed makes your security server a hard dependency for every developer's Claude Code session, fail-open makes the control advisory. Decide that deliberately before rollout. Beta, Enterprise-tier only, and it requires you to actually run the security server",
      source: "Anthropic Claude Platform release notes (platform.claude.com/docs/en/release-notes/api, August 5 2026 entry, fetched 2026-08-06)",
      date: "2026-08-05",
    },
    {
      description: "MCP SPEC 2026-07-28 IS OUT AND IT IS A BREAKING RELEASE (2026-07-28, spec-primary): the Model Context Protocol shipped its `2026-07-28` revision as a **stable release**, and it materially changes how MCP servers are built and operated. The headline, verbatim: '**The highlight of this release is a stateless protocol core - MCP is transforming from a bidirectional stateful protocol into a request/response stateless protocol.**' Practical consequence: '**Any request can now land on any server instance behind a plain round-robin load balancer without needing shared storage**' -- MCP servers become ordinary horizontally-scalable web services. Other changes: **Multi Round-Trip Requests (MRTR)** replace server-initiated streams so mid-call confirmations no longer need an open bidirectional connection; **header-based routing** moves method and tool names into the `Mcp-Method` and `Mcp-Name` HTTP headers so gateways can route and authorize without parsing JSON bodies; **authorization hardening** adds RFC 9207 issuer validation and moves from Dynamic Client Registration to Client ID Metadata Documents (CIMD); and **Tasks and MCP Apps graduate out of experimental** into a formal extensions framework. BREAKING BITS: the `initialize`/`initialized` handshake and session IDs are removed, and the 12-month deprecation policy now starts the clock on Roots, Sampling and Logging. '**The TypeScript, Python, Go, and C# SDKs are updated to match, with detailed migration notes for the breaking bits.**' Anthropic is rolling support across the Claude apps, Claude Code and the Platform API. If you maintain an MCP server for Claude Code, this is the upgrade to plan for",
      source: "MCP blog (blog.modelcontextprotocol.io/posts/2026-07-28/, fetched 2026-08-03), MCP spec (modelcontextprotocol.io/specification/2026-07-28)",
      date: "2026-07-28",
    },
    {
      description: "ALIBABA WORKPLACE BAN NOW IN EFFECT (took effect 2026-07-10 per the announced schedule -- scope and date unchanged in all reporting through 7/10, no delay reported, no formal Anthropic statement): Alibaba banned Claude Code company-wide over an alleged 'backdoor' -- since v2.1.91 (April 2) Claude Code reportedly checked for Asia/Shanghai and Asia/Urumqi timezones plus a 147-entry list of Chinese proxy/cloud/AI-lab URLs, inserting markers into prompts; Claude Code is now on Alibaba's 'high-risk software' list. Anthropic's only response remains a Claude Code engineer's statement that it was an anti-distillation / reseller-abuse experiment from March, rolled back as of July 1. Alibaba employees are directed to the in-house Qoder tool. Background: Anthropic's June 10 letter accused Qwen operators of ~25,000 fraudulent accounts and 28.8M distillation conversations. Relevant if you operate in China-adjacent environments or are sensitive to telemetry behavior in CLI tools",
      source: "Reuters (2026-07-03), CNBC (2026-07-06), SCMP, The Decoder",
      date: "2026-07-10",
    },
    {
      description: "MODEL UPDATE (2026-06-30): **Claude Sonnet 5** is now available in Claude Code (and is the new default on Free/Pro). Anthropic bills it as 'the most agentic Sonnet yet,' approaching Opus 4.8 quality at lower cost -- a meaningful default upgrade for everyday coding sessions, at $2/$10 per 1M. **PRICING UPDATE (confirmed 2026-08-31 on Anthropic's pricing doc): the $2/$10 rate was announced as introductory pricing through Aug 31 with a rise to $3/$15 on Sept 1 -- that increase was cancelled and $2/$10 is now the standard price.** For a Claude Code user this is the single biggest cost fact on the page, because Sonnet 5 is the default model on Free and Pro: the per-token cost of your default coding model is now permanently a third lower than the launch announcement scheduled, and Sonnet 5 permanently undercuts Sonnet 4.6 and 4.5, which both stay at $3/$15. Opus 4.8 remains the top-end option on Max for the hardest agentic work; the `xhigh` effort level is still the recommendation for coding. Note the new Sonnet-5 tokenizer inflates input token counts ~1.0-1.35x, so watch session cost on large repos. Separately, after a 19-day export-control suspension, Fable 5 returned to Claude Code on 2026-07-01 (see claude.ts).",
      source: "Anthropic news (anthropic.com/news/claude-sonnet-5), Anthropic (anthropic.com/news/redeploying-fable-5)",
      date: "2026-06-30",
    },
    {
      description: "BILLING CHANGE PAUSED -- NOTHING CHANGES FOR NOW (status as of 2026-06-18): Anthropic had announced (~2026-05-13/14) that, effective 2026-06-15, programmatic Claude usage -- the Agent SDK, `claude -p` non-interactive mode, Claude Code GitHub Actions, and third-party apps built on the Agent SDK -- would move OFF normal Pro/Max subscription limits onto a SEPARATE metered credit pool (Pro $20/mo, Max 5x $100, Max 20x $200) billed at API rates beyond that. Commentary pegged the effective increase for heavy CI / Agent-SDK users at 12x-175x. **Anthropic reversed course and PAUSED the overhaul just before the June 15 go-live, telling developers 'Nothing changes for now.'** As of today, programmatic Claude Code usage (Agent SDK, `claude -p`, GitHub Actions) still draws on your regular Pro/Max subscription limits -- there is NO separate credit pool in effect (Anthropic's own cost docs at code.claude.com/docs/en/costs describe normal subscription/API billing, not a programmatic credit pool). Reporting attributes the reversal to the OpenAI price war, Anthropic's pending IPO filing, and government pressure over model access. Treat the credit-pool plan as shelved-but-not-dead and re-check before architecting around it. NOTE: this is DISTINCT from the 2026-06-15 Sonnet 4 / Opus 4 MODEL retirement, which DID take effect (see claude.ts).",
      source: "The Decoder (the-decoder.com/anthropic-backs-off-unpopular-billing-overhaul-as-price-war-with-openai-looms/), Axios (2026-05-14), Anthropic Claude Code cost docs (code.claude.com/docs/en/costs) -- earlier announcement: The New Stack, VentureBeat (2026-05-13/14)",
      date: "2026-06-18",
    },
    {
      description: "PRODUCT BATCH (2026-05-06 Code with Claude SF keynote, versions 2.1.129 + 2.1.131): (1) **Code Review GA** -- 'used by every team at Anthropic'; substantive review comments rose 16% -> 54% of PRs; PRs >1000 lines: 84% generated findings, avg 7.5 issues per PR. Vendor-primary blog post at claude.com/blog/code-review. (2) **Remote Agents** -- launch and monitor Claude Code sessions from your phone; control your laptop remotely. SHIPPED. (3) **CI Auto-Fix** -- automatic fixes generated against PRs in CI. SHIPPED. (4) **Routines** -- saved Claude Code config (prompt + repos + connectors) running on Anthropic cloud as async automations; 'wake up to PRs ready to merge'. SHIPPED (expanded from earlier April rollout). (5) **Security Reviews** public beta for Enterprise (per April 30 post). PLUS rate-limit doubling from concurrent SpaceX compute deal -- Pro / Max / Team / seat-based Enterprise see 2x Claude Code 5-hour limits and removed peak-hours reduction (Pro / Max). Customers cited on stage: Shopify, Mercado Libre (~23k engineers targeting '90% autonomous coding by Q3'). Plus speakers from GitHub, Netflix, Datadog, Vercel",
      source: "Anthropic Code Review blog (claude.com/blog/code-review), Claude Code release notes 2.1.129 + 2.1.131 (docs.claude.com/en/release-notes/overview.md), Simon Willison live blog (simonwillison.net/2026/May/6/code-w-claude-2026/), InfoQ, TheNewStack, VentureBeat",
      date: "2026-05-06",
    },
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

  lastReviewedDate: "2026-09-21",
  dataSources: [
    { name: "Anthropic: Claude Code changelog -- 2.1.132 (May 6, 2026) through 2.1.278 (Sept 19, 2026): agent view, AGENTS.md support, server-side auto mode classifier, TaskOutput removal", url: "https://code.claude.com/docs/en/changelog", dateAccessed: "2026-09-21" },
    { name: "Anthropic: Claude Fable 5.1 launch -- defaults to High effort in Claude Code, Medium elsewhere (2026-09-01)", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1", dateAccessed: "2026-09-05" },
    { name: "Anthropic pricing docs: Fable 5.1 cache hits $0.25/MTok (0.025x); base $10/$50 unchanged (verified 2026-09-05)", url: "https://platform.claude.com/docs/en/about-claude/pricing", dateAccessed: "2026-09-05" },
    { name: "Anthropic pricing docs: Sonnet 5 $2/$10 is now the standard price -- the Sept 1 rise to $3/$15 will not occur (verified 2026-08-31)", url: "https://platform.claude.com/docs/en/about-claude/pricing", dateAccessed: "2026-08-31" },
    { name: "Anthropic: Claude Platform release notes (2026-08-05 -- inference hooks beta covering claude.ai, Cowork and Claude Code)", url: "https://platform.claude.com/docs/en/release-notes/api", dateAccessed: "2026-08-06" },
    { name: "Reuters (via TradingView syndication): Alibaba to ban Claude Code in workplace over alleged backdoor risks", url: "https://www.tradingview.com/news/reuters.com,2026:newsml_P8N42I08H:0-alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks-source-says/", dateAccessed: "2026-07-05" },
    { name: "Anthropic: Introducing Claude Sonnet 5 (2026-06-30, available in Claude Code)", url: "https://www.anthropic.com/news/claude-sonnet-5", dateAccessed: "2026-07-04" },
    { name: "The Decoder: Anthropic backs off unpopular billing overhaul as price war with OpenAI looms (PAUSED before 6/15)", url: "https://the-decoder.com/anthropic-backs-off-unpopular-billing-overhaul-as-price-war-with-openai-looms/", dateAccessed: "2026-06-18" },
    { name: "Anthropic: Claude Code cost management docs (no programmatic credit pool in effect)", url: "https://code.claude.com/docs/en/costs", dateAccessed: "2026-06-18" },
    { name: "The New Stack: Anthropic Agent SDK separate credit pools (original 2026-06-15 announcement, later paused)", url: "https://thenewstack.io/anthropic-agent-sdk-credits/", dateAccessed: "2026-05-26" },
    { name: "Anthropic: Claude Code Review (2026-05-06 keynote)", url: "https://claude.com/blog/code-review", dateAccessed: "2026-05-06" },
    { name: "Claude Code release notes 2.1.131", url: "https://docs.claude.com/en/release-notes/overview.md", dateAccessed: "2026-05-06" },
    { name: "Simon Willison: Code with Claude 2026 live blog", url: "https://simonwillison.net/2026/May/6/code-w-claude-2026/", dateAccessed: "2026-05-06" },
    { name: "The Register: Anthropic tests Claude Code Pro removal (2026-04-22)", url: "https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/", dateAccessed: "2026-04-25" },
    { name: "Simon Willison: Is Claude Code going to cost $100/month? Probably not", url: "https://simonwillison.net/2026/Apr/22/claude-code-confusion/", dateAccessed: "2026-04-25" },
    { name: "Anthropic: What's new in Claude Opus 4.7", url: "https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7", dateAccessed: "2026-04-22" },
    { name: "Anthropic documentation", dateAccessed: "2026-04-22" },
    { name: "Reddit r/ClaudeAI", dateAccessed: "2026-04-22" },
    { name: "GitHub community discussions", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://docs.anthropic.com/en/docs/claude-code",
  status: "active",
  poweredBy: "Claude Sonnet 5 (default on Pro) / Claude Opus 5 / Claude Fable 5.1 (top model, defaults to High effort in Claude Code)",
  metaTitle: "Claude Code Review 2026: Fable 5.1 High-Effort Default, AGENTS.md Support, Free Auto-Mode Classifier",
  metaDescription: "Claude Code review. Anthropic's terminal coding agent reads entire repos, runs tests and refactors across files. Fable 5.1 (Sept 1, 2026) is the top model and defaults to High effort here at $10/$50 per 1M with $0.25 cache reads. Changelog pass through 2.1.278 (Sept 19): AGENTS.md read when no CLAUDE.md exists, auto mode moves to a server-side classifier with no overhead charge, agent view, Sonnet 5 default, Opus 5. Pricing, pros, cons.",
};
