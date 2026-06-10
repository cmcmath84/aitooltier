import { ToolReview } from "@/lib/types";

export const claude: ToolReview = {
  slug: "claude",
  name: "Claude (Anthropic)",
  tagline: "Anthropic's flagship LLM family -- Claude Fable 5 (launched June 9, 2026) is the first publicly available Mythos-class model: $10/$50 per 1M, included on Pro/Max/Team/Enterprise through June 22, hard safety fallback to Opus 4.8 on cyber/bio/chem requests (<5% of sessions). Opus 4.8 (May 28) remains the $5/$25 workhorse with 1M-token context, effort control, and cheap fast mode",
  category: "ai-llms",
  url: "https://claude.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 9,
    value: 8,
    features: 8,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Limited messages/day", "Claude Sonnet 4.6", "Basic features"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: ["5x more usage than Free", "Claude Opus 4.8 + Sonnet 4.6", "Effort control + extended thinking", "Priority access"],
    },
    {
      plan: "Max (5x)",
      price: "$100",
      period: "month",
      features: ["5x Pro usage", "Priority queue", "Opus 4.8 with full effort control + fast mode"],
    },
    {
      plan: "Max (20x)",
      price: "$200",
      period: "month",
      features: ["20x Pro usage", "Highest priority", "All generally-available models", "Best for power users and agents"],
    },
    {
      plan: "API (Opus 4.8)",
      price: "$5 / $25",
      period: "per 1M tokens (input/output)",
      features: ["Unchanged from Opus 4.7 pricing", "1M context window", "Fast mode at $10 / $50 per 1M (2.5x speed, 3x cheaper than prior fast mode)", "Tool use, MCP, high-res vision; Bedrock, Vertex AI, Foundry"],
    },
    {
      plan: "API (Fable 5)",
      price: "$10 / $50",
      period: "per 1M tokens (input/output)",
      features: ["First publicly available Mythos-class model (launched 2026-06-09)", "Included on Pro/Max/Team/Enterprise at no extra cost through 2026-06-22, usage credits after", "Auto-fallback to Opus 4.8 on cyber/bio/chem-flagged requests (<5% of sessions)", "Mandatory 30-day retention on all Mythos-class traffic (not used for training)"],
    },
  ],

  pros: [
    "Best writing quality of any LLM -- Opus 4.8 outputs read like a human wrote them, not a robot, and instruction-following stays sharpest in class",
    "1M token context window for enterprise API means it can process entire codebases, huge document sets, or long agent traces without chunking",
    "Opus 4.8 is built for agentic work -- Anthropic says it is a more effective collaborator with notably improved judgment in agent scenarios and is roughly 4x less likely than 4.7 to let code flaws slip through",
    "New user-facing effort control (claude.ai + Cowork) lets you trade depth for speed, and fast mode now runs at 2.5x speed while costing 3x less than the previous fast mode -- a real latency/cost lever short of full reasoning",
    "High-res vision (3.75MP images, 2,576px long edge) means charts, diagrams, whiteboards, and dense UIs work properly",
  ],
  cons: [
    "Free tier is more limited than ChatGPT's -- you hit the cap faster",
    "No image generation built in (unlike ChatGPT with DALL-E)",
    "Fewer third-party integrations and plugins compared to OpenAI's ecosystem",
    "Can be overly cautious and refuse requests that are perfectly fine",
  ],
  knownIssues: [
    {
      description: "MODEL LAUNCH (2026-06-09): **Claude Fable 5** -- Anthropic's most powerful generally available model, described by Anthropic as 'a Mythos-class model that we've made safe for general use.' Available via API immediately at $10/$50 per 1M tokens (2x Opus 4.8). Subscription rollout is staged: included at no extra cost on Pro/Max/Team/Enterprise **through June 22, 2026**, then requires usage credits while capacity scales. Safety mechanics: classifiers route cybersecurity, biology/chemistry, and distillation-attempt requests to Opus 4.8 instead (affects <5% of sessions on average). All Mythos-class traffic carries mandatory 30-day retention (overrides zero-data-retention agreements; not used for training). **Claude Mythos 5** -- the same model with safeguards lifted in some areas -- launched simultaneously but is restricted to Project Glasswing partners and select biology researchers; Mythos Preview users can upgrade immediately. Context: Anthropic confidentially filed its S-1 on 2026-06-01, days before this launch.",
      source: "Anthropic news (anthropic.com/news/claude-fable-5-mythos-5), TechCrunch, CNBC",
      date: "2026-06-09",
    },
    {
      description: "FABLE 5 DAY-2 ROLLUP (2026-06-10): platform availability landed fast -- **GitHub Copilot GA 6/9** (github.blog changelog), **Amazon Bedrock** (us-east-1 + eu-north-1 only at launch, more regions coming), **Microsoft Foundry**, **Snowflake Cortex AI**, and **Vertex AI**; notably **NOT in Cursor yet** as of 6/10. Pricing detail: the $10/$50 rate carries a **90% prompt-caching discount**. Vendor benchmark published: **SWE-Bench Pro 80.3%** (vs GPT-5.5's 58.6% -- an 11-point lead over the next-best model); LMArena has NOT yet assigned Fable 5 an Elo, so ignore third-party 'arena score' claims for now. Early user friction: (a) **Claude Desktop spawns a ~1.8GB Hyper-V VM on every launch** even for chat-only sessions -- GitHub issue hit the Hacker News front page (259 points); (b) scattered reports of the safety classifiers flagging benign biology questions -- consistent with the documented <5% Opus 4.8 fallback, but expect occasional false positives on science topics",
      source: "GitHub blog (github.blog/changelog/2026-06-09-claude-fable-5-is-generally-available-for-github-copilot/), AWS news blog, Azure blog, Snowflake blog, Anthropic news (SWE-Bench Pro), Hacker News",
      date: "2026-06-10",
    },
    {
      description: "DISTRIBUTION (2026-06-08, ships fall 2026): Apple's iOS 27 / macOS 27 'Extensions' framework lets users select a third-party AI model -- Apple's developer materials name **Claude** and Gemini explicitly, plus 'any other provider that implements the new language model protocol' -- as the assistant behind Siri, Writing Tools, and Image Playground. Ends ChatGPT's exclusive integration position on Apple platforms. Xcode 27 also integrates Anthropic coding agents natively alongside Google's and OpenAI's. Big default-assistant distribution opening for Claude on ~2B Apple devices; nothing user-facing until the fall OS releases (public betas July).",
      source: "Apple newsroom (apple.com/newsroom, WWDC 2026 developer announcements), MacRumors, TechCrunch",
      date: "2026-06-08",
    },
    {
      description: "MODEL LAUNCH (2026-05-28): **Claude Opus 4.8** shipped as Anthropic's new flagship. Anthropic frames it as 'a more effective collaborator' with notably improved judgment in agent scenarios and meaningful gains across coding, agentic, and reasoning tasks (per third-party coverage, ~4x less likely than Opus 4.7 to let code flaws pass). Two practical changes for users: (1) **effort control** on claude.ai and Cowork -- higher effort makes Claude think more frequently and deeply, lower effort prioritizes speed and rate-limit efficiency; 4.8 defaults to high effort. (2) **Fast mode** for Opus 4.8 runs at 2.5x speed and is now 3x cheaper than fast mode on previous models. API pricing unchanged at $5/$25 per 1M (standard) / $10/$50 (fast). Vendor-cited benchmarks span Terminal-Bench 2.1, OSWorld-Verified, CursorBench, Legal Agent Benchmark, Online-Mind2Web (84%), and Finance Agent v2 -- specific scores are shown only in vendor charts at launch, so third-party verification is pending. New recommended API model id: claude-opus-4-8.",
      source: "Anthropic news (anthropic.com/news/claude-opus-4-8), Axios, MacRumors",
      date: "2026-05-28",
    },
    {
      description: "UPCOMING (surfaced 2026-05-06 at Code with Claude; not yet GA as of this sweep): **Orbit** -- a proactive assistant layer for Claude / Claude Code / Claude Cowork that syncs Gmail, Slack, GitHub, Calendar, Drive, and Figma to deliver opt-in, time-zone-aware personalized briefings with actionable insights (aimed at developers, designers, PMs). As of late May 2026 it exists only as a settings-panel toggle in staging -- no public rollout or firm ship date. Real product (not a rumor), but PRE-LAUNCH on availability; watch for a GA announcement",
      source: "TestingCatalog (Anthropic Orbit), InfoQ (Code with Claude 2026)",
      date: "2026-05-06",
    },
    {
      description: "PARTNERSHIP (2026-05-14): PwC announced an **expanded strategic alliance** to deploy Claude (Code + Cowork + full product suite) across PwC US first, scaling to PwC's global workforce. Headline metrics from Anthropic's launch post: **30,000 PwC professionals to be trained and certified on Claude**, plus a joint Center of Excellence for industry-specific solutions. Dario Amodei pull-quote: 'Insurance underwriting that took 10 weeks now takes 10 days. Security work that took hours now takes minutes.' Advocate Health is the first co-named flagship deployment (167K teammates). Material because (a) it puts a Big 4 firm fully on Claude as the reference frontier model, (b) creates a ~30K-trained labor base evangelizing Claude inside Fortune 500 audits / advisory engagements, (c) competitive pressure on OpenAI Deployment Company (5/11 spin-up) which is targeting the same enterprise-services layer. Distinct event from the same-day Gates Foundation partnership; both were posted to Anthropic newsroom on 5/14.",
      source: "Anthropic news (anthropic.com/news/pwc-expanded-partnership)",
      date: "2026-05-14",
    },
    {
      description: "PARTNERSHIP (2026-05-14): Anthropic + Gates Foundation announced a 4-year, $200M partnership -- approximately half grant funding from the Gates Foundation, half Claude credits + Anthropic technical staff time. Program portfolio: **global health** (polio, HPV vaccines, eclampsia/preeclampsia), **education** (K-12 US + sub-Saharan Africa + India: math tutoring, college advising, curriculum design + benchmark development), **African-language data collection**, **life sciences** (vaccines + therapies), **economic mobility**. Distinct from a standard customer engagement -- philanthropic + product-development partnership with Anthropic technical staff embedded. Material because it positions Claude as the foundation's frontier-model partner of choice over OpenAI / Google / Meta. Practical implication for buyers: nothing direct, but signals Anthropic's continued investment in mission-aligned partnerships that fund model + safety improvements upstream.",
      source: "Anthropic news (anthropic.com/news/gates-foundation-partnership), Gates Foundation co-announcement (gatesfoundation.org), Reuters, PYMNTS",
      date: "2026-05-14",
    },
    {
      description: "PRODUCT (2026-05-13): Anthropic launched 'Claude for Small Business' -- a packaged offering inside Claude Cowork that bundles 15 ready-to-run agentic workflows + 15 repeatable skills across finance, operations, sales, marketing, HR, and customer service. First-party integrations: Intuit QuickBooks, PayPal, HubSpot, Canva, Docusign, Google Workspace, Microsoft 365. Mechanics: toggle Claude for Small Business inside Claude Cowork, connect existing tools, pick a job -- Claude does the work, human approves before anything sends/posts/pays. Anthropic also launched the 'Claude SMB Tour' -- 10-city free AI fluency training kicking off 2026-05-14 in Chicago, then Tulsa / Dallas / Newark / Baton Rouge / Birmingham / SLC / Baltimore / San Jose / Indianapolis; attendees get a one-month Claude Max subscription. PRICING NOT DISCLOSED in the launch post -- no per-seat number, no flat fee, no tier delta vs. Teams ($25-30/seat) or Enterprise published. Target framing: '44% of U.S. GDP / nearly half the private-sector workforce' has lagged AI adoption. First Anthropic SKU explicitly aimed at SMB segment.",
      source: "Anthropic news (anthropic.com/news/claude-for-small-business), TechCrunch coverage",
      date: "2026-05-13",
    },
    {
      description: "PRODUCT + CAPACITY (2026-05-06 Code with Claude SF keynote): Anthropic announced a SpaceX compute partnership at Colossus 1 (300+ MW, 220,000+ NVIDIA GPUs, online 'within the month'). Concurrent product changes shipped TODAY: (a) DOUBLED Claude Code 5-hour rate limits for Pro / Max / Team / seat-based Enterprise plans, (b) REMOVED peak-hours reduction for Pro and Max (peak-hours throttling no longer applies), (c) RAISED API rate limits for Opus models (Opus 4.7 + Opus 4.6 throughput improved). Plus Claude Managed Agents shipped: 'Dreaming' (research preview -- agents review past sessions for self-improvement patterns), 'Outcomes' (public beta -- rubric-graded task success, lifted up to 10 points in tests), and 'Multiagent Orchestration' (public beta -- lead-agent delegates to subagents, e.g. Haiku lead with Opus subagents). Practical impact: existing Pro / Max users see materially more headroom on Claude Code overnight. NOTE: Sonnet 4.8 / Jupiter / Cardinal / KAIROS / Cowork / Undercover Mode -- speculated from the 2026-03-31 source-map leak -- did NOT ship at this keynote. Models page still lists Opus 4.7 / Sonnet 4.6 / Haiku 4.5 as the current trio",
      source: "Anthropic news (anthropic.com/news/higher-limits-spacex), Anthropic Managed Agents (claude.com/blog/new-in-claude-managed-agents), Simon Willison live blog, TheNewStack",
      date: "2026-05-06",
    },
    {
      description: "SECURITY (CVE-2026-41686, NVD-published 2026-05-04, GHSA-p7fg-763f-g4gf): Anthropic TypeScript SDK (`@anthropic-ai/sdk`) `BetaLocalFilesystemMemoryTool` writes memory files with mode 0o666 (world-readable) and directories with mode 0o777 (world-readable + writable). On shared hosts a local attacker can read persisted agent state; in containers with permissive umasks (typical Docker base images) an attacker with container access can poison memory to steer subsequent model behavior. Affects versions 0.79.0 through 0.91.0. **Fix: upgrade to >= 0.91.1**. CVSS 4.8 (moderate). CWE-732 Incorrect Permission Assignment. Reported by lucasfutures, disclosed 2026-04-24",
      source: "GitHub Security Advisory (github.com/anthropics/anthropic-sdk-typescript/security/advisories/GHSA-p7fg-763f-g4gf), NVD CVE-2026-41686",
      date: "2026-05-04",
    },
    {
      description: "PRODUCT (2026-04-28): Anthropic launched Claude for Creative Work with 9 first-party connectors -- Ableton (Live + Push), Adobe Creative Cloud (Photoshop / Premiere / Express via 'Adobe for creativity'), Affinity by Canva, Autodesk Fusion, Blender, Resolume Arena, Resolume Wire, SketchUp, and Splice. The Blender connector is built on MCP and is explicitly accessible to other LLMs -- not Claude-only. Educational pilots also announced with RISD, Ringling, and Goldsmiths. Tier requirements not specified at launch. This is Anthropic's biggest creative-pro market push to date and pairs naturally with the Opus 4.7 launch on 4/16 (vision quality required for visual workflows)",
      source: "Anthropic news (anthropic.com/news/claude-for-creative-work), 9to5mac, Adobe blog",
      date: "2026-04-28",
    },
    {
      description: "POLICY (2026-04-04, enforced 2026-04-10): Anthropic excluded third-party agent harnesses (OpenClaw cited specifically) from Claude Pro and Max flat-rate plans. Routing Pro/Max via OpenClaw, Claude-on-Cline, or similar frameworks now triggers separate pay-as-you-go 'extra usage' billing rather than the flat plan rate. ~135K OpenClaw instances were impacted at the time of the change. Anthropic temporarily banned OpenClaw's creator from the platform on 2026-04-10 and stated subscriptions 'weren't built to handle the usage patterns' of harnesses that 'run continuous reasoning loops, automatically repeat or retry tasks, and tie into a lot of other third-party tools.' If you run agentic workloads on Claude, expect the API path to be the only viable model going forward",
      source: "TechCrunch (techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/), The Next Web, PYMNTS",
      date: "2026-04-10",
    },
    {
      description: "ENTERPRISE PRICING (2026-04-16): Anthropic dropped Claude Enterprise's bundled-token model. Plan moved from ~$200/seat with discounted token allotment to $20/seat base + standard API rates with no token allotment and no usage cap. Customary 10-15% enterprise API discounts also pulled. Heavy users see 2-3x bill increases. Rolling out to enterprises with 150+ seats first. Material for any team evaluating Claude as their primary AI provider at scale -- confirm finance modeling against the new structure before committing seat counts",
      source: "The Register (theregister.com/2026/04/16/anthropic_ejects_bundled_tokens_enterprise/), The Information, PYMNTS",
      date: "2026-04-16",
    },
    {
      description: "Claude Haiku 3 (claude-3-haiku-20240307) RETIRED 2026-04-20 -- deprecated -> retired flip confirmed on Anthropic's deprecations page (verified 2026-04-24). If your API code still targets the 2024 Haiku snapshot, requests are now failing -- migrate to claude-haiku-4-5-20251001",
      source: "Anthropic model deprecations page",
      date: "2026-04",
    },
    {
      description: "Claude Sonnet 4 (claude-sonnet-4-20250514) and Claude Opus 4 (claude-opus-4-20250514) retire 2026-06-15 (now days away) per Anthropic's deprecations page. Announced 2026-04-14. If your product relies on those specific snapshots, migrate to Sonnet 4.6 (`claude-sonnet-4-6`) or Opus 4.8 (`claude-opus-4-8`, the current recommended Opus replacement) before then. SEPARATE 2026-06-15 event: Agent SDK / `claude -p` / Claude Code GitHub Actions move to a metered credit pool at API rates (see claude-code.ts). NEXT IN LINE: Claude Opus 4.1 (claude-opus-4-1-20250805) was deprecated 2026-06-05 and retires 2026-08-05 -- same migration target",
      source: "Anthropic model deprecations page (platform.claude.com/docs/en/about-claude/model-deprecations)",
      date: "2026-06",
    },
    {
      description: "Free tier rate limits feel aggressive -- heavy users get throttled within a few conversations",
      source: "Reddit r/ClaudeAI",
      date: "2026-03",
    },
    {
      description: "Occasionally refuses benign creative writing requests due to safety filters",
      source: "Reddit r/ClaudeAI",
      date: "2026-02",
    },
    {
      description: "SUPERSEDED (2026-06-09): the April-era 'Mythos Preview is gated and will not be generally available' framing no longer holds -- Fable 5 brings Mythos-class capability to the public tier (with safety fallbacks), while Mythos 5 replaces Mythos Preview inside Project Glasswing (expanded to ~150 orgs as of 2026-06-02). See the claude-mythos page for the gated-track detail",
      source: "Anthropic news (anthropic.com/news/claude-fable-5-mythos-5)",
      date: "2026-06-09",
    },
    {
      description: "Opus 4.7 uses an updated tokenizer -- input tokens may increase roughly 1.0-1.35x depending on content type, slightly raising per-request cost even though the published per-token rate is unchanged",
      source: "Anthropic release notes",
      date: "2026-04",
    },
    {
      description: "Project Deal published 2026-04-25 (anthropic.com/features/project-deal, with TechCrunch + PYMNTS + Legal IT Insider analysis): Anthropic ran a one-week internal marketplace where Claude agents bought, sold, and negotiated on behalf of SF-office employees with no human-in-the-loop. 186 deals closed at ~$4K total volume. Headline finding for Claude API buyers: participants assigned Opus 4.5 got measurably better economic outcomes than those on Haiku 4.5 -- and Haiku-assigned users didn't notice they were losing. Practical takeaway: in agentic workflows where Claude transacts on a user's behalf, model-tier selection has measurable downstream economic cost, not just latency or quality. Treat this as a public signal that Anthropic is moving toward productized agent-as-representative use cases",
      source: "anthropic.com/features/project-deal, TechCrunch, PYMNTS",
      date: "2026-04-25",
    },
    {
      description: "Anthropic published an explicit ad-free commitment ('Claude is a space to think', 2026-02-04) -- but the differentiation matters now because OpenAI began rolling ads to ChatGPT Free + Go tiers in Feb 2026 (Plus/Pro/Business/Enterprise still ad-free) and Google AI Overviews already carry ad placements. Anthropic's verbatim language: no sponsored links adjacent to conversations, no advertiser-influenced responses, no third-party product placements. Claude's monetization stays enterprise + subscription only. Practically relevant for B2B / regulated / trust-sensitive deployments (legal, healthcare, finance, research) where ad-incentive contamination in outputs is a deal-breaker",
      source: "anthropic.com/news/claude-is-a-space-to-think (2026-02-04), openai.com/index/testing-ads-in-chatgpt, Axios",
      date: "2026-02-04",
    },
  ],
  bestFor: "Writers, analysts, developers, and anyone who values quality of output over quantity of features. If you care about how good the actual text is, Claude is the best.",
  notFor: "People who want an all-in-one platform with image generation, plugins, and browsing built in. ChatGPT's ecosystem is bigger.",
  verdict: "Claude is the LLM you pick when quality matters more than features -- and with Fable 5 (June 9, 2026), the ceiling just moved. Fable 5 is the first Mythos-class model anyone can actually use: Anthropic's most capable public model, included free on paid plans through June 22 and $10/$50 per 1M via API after that, with a safety design that quietly falls back to Opus 4.8 on flagged cyber/bio/chem requests rather than degrading everything for everyone. Opus 4.8 remains the $5/$25 workhorse with effort control and a cheap fast mode, so you now get a genuine two-tier choice inside one subscription. With the 1M context window, high-res vision, and MCP support -- plus Apple naming Claude a selectable system assistant in iOS 27 this fall -- the question is no longer whether Claude is frontier, it's whether you need Fable-tier reasoning often enough to burn credits on it after June 22.",

  lastReviewedDate: "2026-06-10",
  dataSources: [
    { name: "Anthropic: Introducing Claude Fable 5 and Claude Mythos 5 (2026-06-09)", url: "https://www.anthropic.com/news/claude-fable-5-mythos-5", dateAccessed: "2026-06-09" },
    { name: "TechCrunch: Anthropic releases Claude Fable 5", url: "https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/", dateAccessed: "2026-06-09" },
    { name: "Apple newsroom: WWDC 2026 intelligence frameworks (Extensions / LanguageModel protocol)", url: "https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/", dateAccessed: "2026-06-09" },
    { name: "Anthropic: Introducing Claude Opus 4.8 (2026-05-28)", url: "https://www.anthropic.com/news/claude-opus-4-8", dateAccessed: "2026-06-02" },
    { name: "Anthropic: Claude for Small Business (2026-05-13)", url: "https://www.anthropic.com/news/claude-for-small-business", dateAccessed: "2026-05-13" },
    { name: "GitHub Security Advisory: GHSA-p7fg-763f-g4gf (CVE-2026-41686, 2026-05-04)", url: "https://github.com/anthropics/anthropic-sdk-typescript/security/advisories/GHSA-p7fg-763f-g4gf", dateAccessed: "2026-05-05" },
    { name: "Anthropic: Project Deal (2026-04-25)", url: "https://www.anthropic.com/features/project-deal", dateAccessed: "2026-04-27" },
    { name: "TechCrunch: Anthropic created a test marketplace for agent-on-agent commerce", url: "https://techcrunch.com/2026/04/25/anthropic-created-a-test-marketplace-for-agent-on-agent-commerce/", dateAccessed: "2026-04-27" },
    { name: "Anthropic: Claude is a space to think (ad-free policy, 2026-02-04)", url: "https://www.anthropic.com/news/claude-is-a-space-to-think", dateAccessed: "2026-04-27" },
    { name: "Anthropic: Introducing Claude Opus 4.7", url: "https://www.anthropic.com/news/claude-opus-4-7", dateAccessed: "2026-04-16" },
    { name: "CNBC: Anthropic rolls out Claude Opus 4.7", url: "https://www.cnbc.com/2026/04/16/anthropic-claude-opus-4-7-model-mythos.html", dateAccessed: "2026-04-16" },
    { name: "Axios: Opus 4.7 trails unreleased Mythos", url: "https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos", dateAccessed: "2026-04-16" },
    { name: "Claude Mythos Preview / Project Glasswing", url: "https://red.anthropic.com/2026/mythos-preview/", dateAccessed: "2026-04-16" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing (Opus 4.7 via claude.ai and API)", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://claude.ai",
  status: "active",
  benchmarks: {
    modelName: "Claude Fable 5 (launched 2026-06-09) is now the flagship -- Anthropic positions it as its most capable public model on SWE, knowledge work, and vision, but published SWE-Bench Pro 80.3% at launch (vs GPT-5.5 58.6%); no LMArena Elo yet; legacy Opus-line reasoning-suite scores shown below as baseline, third-party Fable 5 verification pending",
    scores: [
      { name: "MMLU", score: 91.3, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 91.3, maxScore: 100, unit: "%" },
      { name: "AIME 2024", score: 99.8, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 94.0, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified", score: 80.8, maxScore: 100, unit: "%" },
      { name: "ARC-AGI", score: 75.2, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1504,
    lastUpdated: "2026-04-16",
  },
  personality: {
    oneLiner: "The thoughtful consultant",
    tone: "Measured, careful, and slightly formal. Claude explains tradeoffs rather than handing back one-liner answers, asks clarifying questions when a request is ambiguous, and hedges openly when it is not confident.",
    quirks: "More willing than most models to refuse edgy or ambiguous requests, pushes back on premises it disagrees with, and will flag when you are probably asking the wrong question instead of just answering the one you typed.",
  },
  metaTitle: "Claude Fable 5 Review (June 9, 2026): First Public Mythos-Class Model, $10/$50 per 1M",
  metaDescription: "Claude Fable 5 review. Launched June 9, 2026 -- Anthropic's most powerful public model, free on Pro/Max through June 22, then usage credits. $10/$50 per 1M API. Opus 4.8 fallback on flagged requests. Plus Opus 4.8 and iOS 27 Extensions news.",
};
