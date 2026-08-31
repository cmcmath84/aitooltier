import { ToolReview } from "@/lib/types";

export const codex: ToolReview = {
  slug: "codex",
  name: "Codex (OpenAI)",
  tagline: "OpenAI's coding agent -- parallel tasks, PRs, and as of 2026-07-09 merged into the unified ChatGPT desktop app (Chat + Work + Codex, every plan incl. Free) with GPT-5.6 across the lineup",
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
    { plan: "Plus", price: "$20", period: "month", features: ["Codex web + CLI + IDE extension", "GPT-5.6 Sol / Terra / Luna (GPT-5.3-Codex already deprecated; **GPT-5.4 + GPT-5.4-mini retired from Codex 2026-08-31** -- migrate to gpt-5.6-terra / gpt-5.6-luna)", "20-100 local messages per 5h", "Slack integration", "Cloud code review"] },
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
      description: "TODAY IS THE DAY: GPT-5.4 AND GPT-5.4-MINI RETIRE FROM CODEX (2026-08-31 -- re-verified on the vendor doc this morning, still scheduled, not slipped): the deprecation announced back on 2026-04-22 reaches its date today. OpenAI's Codex models documentation still states it in the future tense as of this check -- '**GPT-5.4 and GPT-5.4 mini retire from Codex on August 31, 2026**' -- so the retirement is proceeding on schedule rather than being quietly deferred, which is worth confirming because OpenAI has let doc pages for retired models linger before. **THE MIGRATION, VERBATIM FROM THE VENDOR:** 'If you sign in with ChatGPT, replace `gpt-5.4` with `gpt-5.6-terra` and `gpt-5.4-mini` with `gpt-5.6-luna` in **saved configurations, custom agents, and scheduled tasks**.' Those three surfaces are the ones that break silently -- a `model = \"gpt-5.4\"` line in a `config.toml`, a custom agent definition, or a nightly `codex exec --model gpt-5.4` job will not warn you in advance. **THE SCOPE LIMIT THAT MOST COVERAGE GETS WRONG, AND THE VENDOR IS EXPLICIT ABOUT IT:** '**The OpenAI API and Codex authenticated with your own API key aren't affected.**' This is specifically **Codex with ChatGPT sign-in**. If you drive Codex with your own API key, nothing changes for you today. **Corroborating detail: `gpt-5.4` does not appear anywhere in OpenAI's API deprecations ledger** -- checked the same session -- which is consistent with this being a Codex-surface retirement rather than an API model shutdown, and is a useful reminder that the two ledgers are separate and you have to read both. Current recommended Codex set remains **GPT-5.6 Sol / Terra / Luna**, with Sol the only one available in Codex cloud.",
      source: "OpenAI (developers.openai.com/codex/models.md, 'Other models' section) -- fetched 2026-08-31; cross-checked against platform.openai.com/docs/deprecations.md the same session, which contains no gpt-5.4 row",
      date: "2026-08-31",
    },
    {
      description: "THE ADMIN PLUGIN COVERS CODEX, NOT JUST CHATGPT WORK (2026-08-25, vendor-primary): OpenAI's new **Admin plugin ships for ChatGPT Work *and* Codex**, so Codex workspaces get the same conversational administration surface: **review Codex activity and credit usage**, spot members or groups approaching credit limits, manage members and groups, control **feature or model access by role or group**, and approve or deny **usage-limit and spending requests** in context. Recurring checks can be automated and routed into Slack or Microsoft Teams for approval. **For Codex specifically the credit-usage angle is the relevant one** -- Codex consumption is the line item enterprises actually watch, and this puts limit adjustment and spend approval in the same conversation as the usage data. OpenAI notes its own IT team runs ChatGPT Work and Codex this way. **Same caveat as on the ChatGPT Work page: this grants an LLM authority to change permissions and approve spend, and the announcement describes no independent audit or rollback mechanism.**",
      source: "OpenAI (openai.com/index/introducing-admin-plugin/, publicationDateText 'August 25, 2026') -- fetched 2026-08-28 via curl with browser UA",
      date: "2026-08-25",
    },
    {
      description: "THE ASSISTANTS API IS NOW ACTUALLY DEAD -- SUNSET EXECUTED 2026-08-26, CONFIRMED PAST-TENSE ON OPENAI'S OWN DEPRECATIONS PAGE (2026-08-26, vendor-primary): OpenAI's deprecations documentation now reads, in the past tense, '**The Assistants API was officially sunset on August 26, 2026, following its deprecation announcement on August 26, 2025**' -- exactly twelve months' notice, honoured to the day. **Replacements are the Responses API and the Conversations API**, with an Assistants-to-Conversations migration guide. This closes a dated watch we had been carrying: the retirement was scheduled, and unlike some vendor deadlines this one executed on time rather than slipping. **Why it belongs on this page: anyone still running an Assistants-API integration has a broken product today, not a deprecation warning** -- and the migration is not cosmetic, because Responses/Conversations split what Assistants did into two primitives. **Method note for future sweeps: the machine-readable source is platform.openai.com/docs/deprecations.md (the developers.openai.com/api/deprecations.md path 404s and returns a 440KB HTML shell that greps as a false negative).**",
      source: "OpenAI (platform.openai.com/docs/deprecations, fetched as .md -- verbatim: 'The Assistants API was officially sunset on August 26, 2026'; deprecation table row '2026-08-26 | Assistants API | Responses API and Conversations API') -- fetched 2026-08-28 via curl",
      date: "2026-08-26",
    },
    {
      description: "MODEL RETIREMENT WAVE EXECUTED 2026-07-23 -- AND GPT-5.4 LEAVES CODEX ON 2026-08-31 (announced 2026-04-22, vendor deprecation ledger): OpenAI shut down **18 model IDs across 15 ledger rows**. The Codex-branded ones all went in one sweep: **`gpt-5-codex`, `gpt-5.1-codex`, `gpt-5.1-codex-max`, `gpt-5.1-codex-mini` and `gpt-5.2-codex`** -- substituted by `gpt-5.6-sol`, except `gpt-5.1-codex-mini` which maps to `gpt-5.6-terra`. Also retired: `gpt-5-chat-latest`, `gpt-5.1-chat-latest`, `computer-use-preview`, `o3-deep-research`, `o4-mini-deep-research`. **TWO MORE CODEX DEPRECATIONS ARE LIVE RIGHT NOW:** `gpt-5.2` and `gpt-5.3-codex` are already deprecated for ChatGPT sign-in, and **`gpt-5.4` + `gpt-5.4-mini` retire from Codex on 2026-08-31** (migrate to `gpt-5.6-terra` and `gpt-5.6-luna` respectively). If you have `model = \"gpt-5.4\"` in a config.toml, a custom agent, a scheduled task, or a `codex exec --model` script, you have until the end of August. **The OpenAI API and Codex authenticated with your own API key are not affected by the GPT-5.4 retirement** -- this is specifically Codex with ChatGPT sign-in. Current recommended set is **GPT-5.6 Sol / Terra / Luna**, with Sol the only one available in Codex cloud, plus **GPT-5.3-Codex-Spark** as a Pro-only text-only research preview for near-instant iteration. DATA-HYGIENE WARNING: OpenAI's own models index still serves live doc pages for several retired IDs with no retirement banner -- do not treat presence in the docs as evidence a model is callable",
      source: "OpenAI deprecations ledger (developers.openai.com/api/docs/deprecations), OpenAI Codex models doc (developers.openai.com/codex/models)",
      date: "2026-07-23",
    },
    {
      description: "APP MERGER + GPT-5.6 (2026-07-09): The **standalone Codex app is merging into the new unified ChatGPT desktop app** (Mac/Windows) -- update the Codex app and it becomes the ChatGPT app with Chat, Work, and Codex surfaces; developers can set Codex as the default view and keep the Codex icon; desktop Codex projects are accessible from the ChatGPT mobile app; the old ChatGPT desktop app is renamed 'ChatGPT Classic.' Codex itself gains: **inline editing within diffs, PR review in the side panel, faster computer use (powered by GPT-5.6), and multi-repo projects**. Model lineup: **GPT-5.6 GA in Codex same day** -- Free/Go get Terra; Plus+ pick Sol/Terra/Luna with per-model effort; `max` toggleable for all GPT-5.6 users; **`ultra` (4 parallel agents) available from Plus up in Codex**. Scale disclosure: 5M+ weekly Codex users, 1M+ using it for non-development work. Net read: Codex stops being a separate app and becomes the engine inside ChatGPT's agent stack (ChatGPT Work is built on Codex technology -- see /tools/chatgpt-work)",
      source: "OpenAI (openai.com/index/chatgpt-for-your-most-ambitious-work/), OpenAI (openai.com/index/gpt-5-6/)",
      date: "2026-07-09",
    },
    {
      description: "FEATURE CLUSTER (May-June 2026, all vendor changelog): **5/14 Codex in the ChatGPT mobile app** (iOS/Android) -- monitor and drive Codex sessions from your phone by connecting to a Mac running the Codex app (remote control, not standalone mobile execution). **5/21 Goal mode GA** -- out of experimental, available in Codex app + IDE extension + CLI. **5/29 Computer Use on Windows** + remote control of Windows devices. **6/1 Amazon Bedrock support** -- Codex can use supported OpenAI models through Bedrock. **6/2 Sites preview** -- create AND deploy websites/web apps to OpenAI-hosted infrastructure from inside Codex. The Sites ship is the notable one: Codex now competes directly with Lovable/Bolt/v0 on the build-and-host loop, not just the code-generation step",
      source: "OpenAI Codex changelog (developers.openai.com/codex/changelog)",
      date: "2026-06-02",
    },
    {
      description: "GPT-5.2-Codex shipped 2026-04-23 as a coding-specialized variant separate from the consumer GPT-5.5 launch. Available to all paid ChatGPT users across Codex web/CLI/IDE surfaces today; API access in coming weeks. Posts SOTA on SWE-Bench Pro and Terminal-Bench 2.0. Improvements: long-horizon agentic coding via context compaction, large refactors and migrations, Windows env perf, and cybersecurity. Direct upgrade over GPT-5.3-Codex for serious agentic work -- if you're on Plus or Pro, your Codex defaults are already on the new model",
      source: "OpenAI: Introducing GPT-5.2-Codex (openai.com/index/introducing-gpt-5-2-codex/), OpenAI Codex changelog",
      date: "2026-04-23",
    },
    {
      description: "Codex Chronicle launched 2026-04-20/21 as an opt-in research preview for ChatGPT Pro on macOS only (NOT available in EU/UK/Switzerland). Captures screen content + builds persistent memories so Codex understands what you're working on without manual context-restating. Privacy details: screenshots stored locally in $TMPDIR/chronicle/screen_recording/ auto-deleted after 6 hours; generated memories live unencrypted as markdown at ~/.codex/memories_extensions/chronicle/; OpenAI servers don't retain processed screenshots and don't train on them. OpenAI explicitly flags 'increased prompt-injection attack surface from screen content' -- pause Chronicle before meetings or sensitive material. Currently consumes rate limits aggressively. Closest comparison is Microsoft Recall but with stronger local-storage guarantees",
      source: "OpenAI Chronicle docs (developers.openai.com/codex/memories/chronicle), Help Net Security, 9to5Mac",
      date: "2026-04",
    },
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

  lastReviewedDate: "2026-08-31",
  dataSources: [
    { name: "OpenAI Codex models doc: GPT-5.4 and GPT-5.4 mini retire from Codex on August 31, 2026 -- ChatGPT sign-in only, API unaffected (re-verified 2026-08-31)", url: "https://developers.openai.com/codex/models", dateAccessed: "2026-08-31" },
    { name: "OpenAI: Introducing the Admin plugin for ChatGPT Work and Codex (2026-08-25)", url: "https://openai.com/index/introducing-admin-plugin/", dateAccessed: "2026-08-28" },
    { name: "OpenAI: API deprecations -- Assistants API sunset 2026-08-26", url: "https://platform.openai.com/docs/deprecations", dateAccessed: "2026-08-28" },
    { name: "OpenAI: ChatGPT Work + desktop app merger (2026-07-09)", url: "https://openai.com/index/chatgpt-for-your-most-ambitious-work/", dateAccessed: "2026-07-09" },
    { name: "OpenAI: GPT-5.6 GA (Codex availability matrix)", url: "https://openai.com/index/gpt-5-6/", dateAccessed: "2026-07-09" },
    { name: "OpenAI: Introducing GPT-5.2-Codex (2026-04-23)", url: "https://openai.com/index/introducing-gpt-5-2-codex/", dateAccessed: "2026-04-25" },
    { name: "OpenAI Codex changelog", url: "https://developers.openai.com/codex/changelog", dateAccessed: "2026-04-25" },
    { name: "OpenAI Chronicle docs (Apr 2026)", url: "https://developers.openai.com/codex/memories/chronicle", dateAccessed: "2026-04-22" },
    { name: "Help Net Security: Chronicle screen-context memories", url: "https://www.helpnetsecurity.com/2026/04/21/openai-chronicle-codex-screen-context-memories/", dateAccessed: "2026-04-22" },
    { name: "OpenAI official Codex page", url: "https://openai.com/index/introducing-codex/", dateAccessed: "2026-04-17" },
    { name: "developers.openai.com/codex/pricing", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: Codex Mac-app control + GPT-Rosalind launch 2026-04-16", url: "https://venturebeat.com/technology/openai-debuts-gpt-rosalind-a-new-limited-access-model-for-life-sciences-and-broader-codex-plugin-on-github", dateAccessed: "2026-04-17" },
    { name: "Reddit r/openai, r/programming", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openai.com/index/introducing-codex/",
  status: "active",
  poweredBy: "GPT-5.6 Sol / Terra / Luna (GA 2026-07-09; Terra default on Free/Go, Sol the only one in Codex cloud) + GPT-5.3-Codex-Spark research preview on Pro. GPT-5.5 remains selectable as previous-gen; GPT-5.2-Codex was RETIRED 2026-07-23",
  benchmarks: {
    modelName: "GPT-5.2-Codex (HISTORICAL -- this model was RETIRED 2026-07-23; scores retained for trend context only. Current Codex default is GPT-5.6 Sol, whose first-party Codex benchmarks are pending)",
    scores: [
      { name: "SWE-bench Verified", score: 72.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 95.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-25",
  },
  metaTitle: "OpenAI Codex Review 2026: GPT-5.6, Unified ChatGPT App Merger + ultra Mode",
  metaDescription: "OpenAI Codex review. July 9, 2026: Codex app merges into the unified ChatGPT desktop app (every plan incl. Free), GPT-5.6 Sol/Terra/Luna across Codex, ultra 4-agent mode from Plus up, inline diff editing + side-panel PR review. 5M+ weekly users.",
};
