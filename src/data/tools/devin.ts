import { ToolReview } from "@/lib/types";

export const devin: ToolReview = {
  slug: "devin",
  name: "Devin",
  tagline: "**Devin Fusion shipped in Devin Desktop and CLI on 2026-09-11**: a two-model harness (a frontier 'lead' plans and reviews, a cheaper 'sidekick' such as SWE-2 executes) that Cognition and Artificial Analysis/Vals measured at 23-46% lower cost per benchmark with near-identical scores to single-model Claude Code and Codex runs. Cognition also acquired the Dioxus team (9/10). The most autonomous AI coding agent -- now a full product family: Devin Cloud, **Devin Desktop (the renamed Windsurf IDE, June 2 2026)**, and Devin Review. Cognition raised $1B+ at a $26B valuation (May 27). Recent shipments: **day-one support for both Claude Fable 5.1 (2026-09-01) and GPT-6 Astra (2026-09-03)** -- Cognition says it moved Devin's Opus 5 traffic to Fable 5.1 on launch day because the new cache-read pricing made a Fable-class model economical for code review. Claude Fable 5 support day-one (6/9), Auto-Triage (5/18), Windows VMs (5/21), Android Emulator (5/13)",
  category: "ai-code-assistants",
  url: "https://devin.ai",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 8,
    value: 7,
    features: 8,
    overall: 7.4,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Core",
      price: "$20",
      period: "month",
      features: ["250 ACUs included", "Full autonomous agent", "GitHub integration"],
    },
    {
      plan: "Team",
      price: "$40",
      period: "month",
      features: ["500 ACUs included", "Team management", "Priority support"],
    },
  ],

  pros: [
    "Genuine autonomy -- you can describe a task and walk away while it researches dependencies, writes code, and runs tests. Devin 2.2 (Feb 24 2026) improved long-session context retention so it holds plans coherently across multi-hour work",
    "Desktop / GUI testing via computer-use (Devin 2.2) -- Devin can drive Figma, Photoshop, or browser-based SaaS tools, which unlocks classes of tasks (QA automation, designer-handoff) that inline IDE agents can't touch",
    "Devin Review (Devin 2.2) automatically analyzes pull requests and reportedly catches ~30% more issues than human review alone -- used internally at Cognition before public release, now available as a standalone mode",
    "Now embedded in Windsurf 2.0 as the cloud-agent layer (2026-04-15) -- if you want Devin's background autonomy alongside an inline IDE experience, Windsurf 2.0 is the integrated path",
  ],
  cons: [
    "Complex architecture decisions are where it struggles -- it'll build something that works but isn't how a senior dev would structure it",
    "Ambiguous specs send it down rabbit holes -- you'll burn ACUs watching it go in circles on unclear requirements",
    "Much slower than copilot-style tools for quick edits -- the autonomous workflow has overhead that doesn't make sense for small changes",
    "ACU consumption is unpredictable -- a task you think is simple can eat through credits if Devin hits a snag",
  ],
  knownIssues: [
    {
      description: "DEVIN FUSION -- A LEAD/SIDEKICK TWO-MODEL HARNESS IN DESKTOP AND CLI, WITH THIRD-PARTY-RUN COST NUMBERS (2026-09-11, vendor-primary, benchmarks run with Artificial Analysis and Vals AI): Cognition released **Fusion** in Devin Desktop and Devin CLI, described as 'the most efficient frontier harness for Fable and Astra, up to 39% more efficient compared to other model harnesses across major coding benchmarks.' **HOW IT WORKS:** you pick two models -- a **lead** (frontier: Fable 5.1 or GPT-6 Astra) that 'owns the plan, interpretation of ambiguity, and review', and a **sidekick** (Cognition recommends its own **SWE-2**) that 'explores code, implements changes, runs tests, and reports back.' The two run as **parallel agents with separate persistent contexts**, exchanging only briefs, results and feedback rather than full conversations, so each keeps its own prompt cache -- Cognition's stated reason model routing fails ('you break prompt caches by switching models mid-task'). The lead always reviews and can take work back. **THE NUMBERS (score / cost per task; Fusion pairs use SWE-2 as sidekick):** DeepSWE 1.1 -- Fable 5.1 alone 64.3 at $14.63 vs Fusion 63.1 at $7.88 (**-46%**); Astra alone 67.6 at $7.88 vs Fusion 67.3 at $4.69 (-40%). Terminal-Bench 4 -- Fable 57.6/$17.46 vs Fusion 56.1/$13.37 (-23%); Astra 55.6/$10.08 vs Fusion 50.0/$6.06 (-40%, and the one row where Fusion gives up meaningful score). SWE-Atlas QnA -- Fable 64.8/$7.57 vs Fusion 65.9/$5.00 (-34%). Vals Code Migration -- Fable 54.6/$70.97 vs Fusion 57.3/$42.00 (-41%). FrontierCode 1.1 Extended -- Fable 63.6/$2.68 vs Fusion 63.5/$1.67 (-38%). Headline chart: Devin Fusion (Fable 5.1 + SWE-2) 61.7 vs Claude Code Fable 5.1 max 62.2 at 36% lower cost; vs Codex Astra 61.6 at 39% lower cost. **CALIBRATION:** these were run 'in partnership with Artificial Analysis and Vals AI', which is better than vendor-only, but the harness, task selection and the choice of SWE-2 as sidekick are Cognition's, and the comparison chart mixes third-party agents (Claude Code, Codex, Grok Build, Kimi Code CLI, Opencode, Antigravity SDK) at settings Cognition chose. The claim that survives scrutiny is the narrow one: for these suites, delegating execution to a cheap model under a frontier reviewer cost 20-46% less at roughly the same score. **WHY IT MATTERS:** it is the first shipping coding agent to make the two-model split a first-class user setting rather than an internal routing detail, and it turns SWE-2 from a standalone model into the default cheap half of every Devin session -- which is where Cognition's margin lives. **ALSO 9/10: Cognition acquired the Dioxus team** (Jonathan Kelley et al., the Rust cross-platform UI framework Devin itself is built with); Cognition says it will keep funding Dioxus, Blitz, Taffy and Subsecond as open source and put the team on Devin's VM, computer-use and testing stack. Terms not disclosed.",
      source: "Cognition (cognition.ai/blog/local-fusion, JSON-LD datePublished 2026-09-11T10:00:00-07:00; cognition.ai/blog/welcoming-dioxus, datePublished 2026-09-10T10:00:00-07:00) -- both fetched 2026-09-14 via curl",
      date: "2026-09-11",
    },
    {
      description: "COGNITION TOOK BOTH FRONTIER LAUNCHES ON DAY ONE -- AND SAID WHY, IN COST TERMS (2026-09-01 and 2026-09-03, vendor-primary via both model vendors): Cognition is quoted in **Anthropic's Fable 5.1 launch** and **OpenAI's GPT-6 Astra launch**, three days apart, committing to both on launch day. **On Fable 5.1, CPO and co-founder Walden Yan is specific about the economics rather than the benchmarks:** '**We're moving our Opus 5 traffic in Devin to Claude Fable 5.1 on launch day. It matched or edged out Fable 5 in our testing at a lower cost per task, and with the new cache read pricing a Fable-class model is finally economical for the workloads we'd kept on Opus, starting with code review.**' **That is an unusually useful quote, because it independently corroborates the one thing that actually changed in Fable 5.1's price: the cache read.** Fable 5.1's base rate is identical to Fable 5's ($10/$50 per 1M); only cache hits moved, from $1 to $0.25/MTok. Cognition is saying that single line was enough to move a production workload off Opus 5 -- exactly the agentic, repo-context-heavy shape that benefits most. **On Astra, SVP Research Silas Alberti says:** '**We're integrating GPT-6 Astra into Devin's harness on launch day, where it delivers state-of-the-art performance on our internal testing benchmark. Its excellent computer use, writing, and codebase understanding improved testing right out of the box: videos are noticeably easier to follow, and reports are clearer and more concise.**' **READ BOTH TOGETHER AND THE POSITIONING IS MODEL-NEUTRAL, NOT MODEL-LOYAL:** Devin is routing by cost-per-task and by capability fit, taking Anthropic's model for code review economics and OpenAI's for computer use and reporting quality -- in the same week Cursor is losing OpenAI access entirely. **CAVEAT ON SOURCING, AND IT MATTERS: both quotes are vendor-published launch testimonials, not independent evaluation.** They are cited here for what Cognition committed to and its stated reasoning, not as verified performance claims about either model.",
      source: "Anthropic (anthropic.com/claude-fable-and-mythos-5-1, 2026-09-01) + OpenAI (openai.com/index/gpt-6-astra/, 2026-09-03) -- both fetched 2026-09-05 via curl with browser UA",
      date: "2026-09-03",
    },
    {
      description: "DEVIN OUTPOSTS -- RUN DEVIN ON YOUR OWN MACHINES (2026-07-21, vendor post): Cognition split Devin's brain from its hands. You can now run **Devin Cloud sessions on any machine you operate** -- a GPU box, a VM inside your private network, a Kubernetes cluster next to internal services, or a Mac mini. The agent loop and inference stay in Cognition's cloud; all command execution, file edits and repo access happen on your infrastructure, and '**Your machines only dial out -- no inbound connectivity required.**' That unlocks Devin against private databases, internal APIs, proprietary toolchains and hardware that only exists inside your environment. Launch partners: **Modal, Cloudflare, Namespace, Daytona, E2B, NVIDIA Brev, NVIDIA OpenShell**. Outposts is the third hosting tier alongside multi-tenant and dedicated-tenant, and Cognition recommends it for 'tech-native organizations or small, trusted teams' already comfortable running remote dev infrastructure -- it is not a click-to-enable feature. No pricing disclosed. This is the answer to the single biggest enterprise objection to Devin: our code cannot leave our network. SWEEP NOTE: this post lives on **devin.ai/blog**, not cognition.com/blog, and the Cognition blog index does not list it -- which is why earlier sweeps missed it",
      source: "Devin blog (devin.ai/blog/introducing-devin-outposts)",
      date: "2026-07-21",
    },
    {
      description: "SWE-1.7 -- COGNITION SHIPPED ITS OWN FRONTIER-CLASS MODEL (2026-07-08, vendor post): rather than only orchestrating other people's models, Cognition released 'SWE-1.7, the most capable model we've trained so far. It reaches frontier-level intelligence at a much lower cost, advancing the cost-performance Pareto curve.' Built with heavy RL post-training on a **Kimi K2.7** base. Vendor-reported: **42.3% on FrontierCode 1.1 Main at $1.97 cost per task**, served **via Cerebras at 1000 tokens/sec**, and 'available today in Devin (Web, Desktop, and CLI).' READ THE BENCHMARK WITH CARE: FrontierCode is Cognition's own benchmark, so a Cognition model scoring well on it is not independent evidence -- the durable claims here are the **speed (1000 tok/s)** and the **cost per task**, which are what actually change day-to-day use",
      source: "Cognition blog (cognition.com/blog/swe-1-7)",
      date: "2026-07-08",
    },
    {
      description: "BENCHMARK PUBLISHED (2026-06-08): Cognition released **FrontierCode** -- a benchmark measuring 'code mergeability' (would a maintainer actually merge the generated code, not just does it pass tests). 150 tasks in nested subsets (Extended 150 / Main 100 / Diamond 50-hardest), scored on blocker-criteria pass rate + weighted rubric, 5 runs per task. Diamond results: Claude Opus 4.8 13.4%, GPT-5.5 6.3% (with 4x fewer tokens), Gemini 3.1 Pro 4.7%, Kimi K2.6 3.8% (open-source leader). Tasks are NOT public (contamination prevention); evals opening to model creators. Positions Cognition as a measurement authority for exactly the metric Devin sells on -- and the low absolute scores are a sober counterpoint to 'AI writes mergeable code today' marketing",
      source: "Cognition blog (cognition.ai/blog/frontier-code)",
      date: "2026-06-08",
    },
    {
      description: "COMPANY + PRODUCT (June 2026 cluster): **6/2 -- Windsurf renamed Devin Desktop** via OTA update; Cognition now ships one Devin family (Cloud / Desktop / Review) and Devin Cloud agent access starts on Desktop's $20 Pro plan (see the windsurf page for migration detail). **5/27 -- $1B+ raised at a $26B valuation** (Lux Capital, General Catalyst, 8VC lead; vendor-confirmed in Cognition's 'More Devins in More Places' post). **6/4 -- 'AI Productivity Guarantee'** announced for enterprise contracts. **6/9 -- Claude Fable 5 available in Devin on launch day.** Practical read: Cognition is consolidating brands and pushing downmarket -- the $20 entry point now buys both the IDE and cloud-agent access that used to be enterprise-gated",
      source: "Cognition blog (cognition.ai/blog), Devin blog (devin.ai/blog)",
      date: "2026-06-02",
    },
    {
      description: "PRODUCT (2026-05-18 + 2026-05-21): Cognition shipped two material Devin features in 4 days. **5/18 Auto-Triage**: Devin observes incoming bug reports / incident channels, investigates with its tool surface (logs, deploy state, recent diffs), consolidates duplicate or related reports into a single thread, and generates triage-quality PRs as a default starting point. Cuts the manual on-call triage step entirely for well-scoped bug classes. **5/21 (TODAY) Windows VM support**: Devin can now build, run, and test code natively inside Windows VMs (was Linux-only sandbox prior). Cognition framing: 'the world's most mature developer ecosystem.' Material for any Windows-stack shop (.NET, WPF, Unity Windows builds, MAUI Windows) that previously could not use Devin for end-to-end build+test runs. Closes a gap vs Cursor cloud Dev Environments (5/13 ship) which is Docker-Linux only by default.",
      source: "Cognition blog (cognition.ai/blog) -- 2026-05-18 Auto-Triage + 2026-05-21 Windows VMs",
      date: "2026-05-21",
    },
    {
      description: "PRODUCT (2026-05-13): Cognition shipped Android Emulator support for Devin -- Devin can now spin up an Android Virtual Device (AVD) inside its sandbox and use it for autonomous mobile app development end-to-end (build, deploy to emulator, exercise UI, screenshot, iterate). Closes the gap with Cursor 3 + Antigravity for mobile-flow testing without leaving the agent's sandbox. Concurrent: Devin's Review API is now available (in addition to the existing Playbook / schedule / knowledge-management APIs), and the UI added session-grouping + streaming-thoughts preview.",
      source: "Cognition blog (cognition.ai/blog)",
      date: "2026-05-13",
    },
    {
      description: "Devin sometimes installs outdated package versions or uses deprecated APIs when the training data doesn't reflect recent library changes",
      source: "GitHub Issues",
      date: "2026-02",
    },
    {
      description: "Long-running sessions occasionally lose context, causing Devin to repeat work or contradict earlier decisions in the same task",
      source: "Reddit r/programming",
      date: "2026-03",
    },
  ],
  bestFor: "Development teams that want to offload well-scoped tasks like bug fixes, test writing, and boilerplate code to an autonomous agent. Best when the task description is detailed and specific.",
  notFor: "Developers who want fast inline suggestions while coding -- Cursor or Copilot are better for that. Also not ready for unsupervised work on critical production systems.",
  verdict: "Devin is the most ambitious AI coding tool available, and at $20/mo it's finally priced for experimentation. When it works, it's like having a junior developer who never sleeps. When it doesn't, it's like watching that junior dev spend three hours on something you could've done in twenty minutes. The key is task selection -- give it clear, bounded work and it impresses. Give it vague requirements and you'll burn credits watching it spin. It's a glimpse of the future, but today it's a supplemental tool, not a replacement for an IDE-integrated copilot.",

  lastReviewedDate: "2026-09-14",
  dataSources: [
    { name: "Cognition: Introducing Fusion in Devin Desktop & CLI -- lead/sidekick harness, benchmark cost table with Artificial Analysis + Vals AI (2026-09-11)", url: "https://cognition.ai/blog/local-fusion", dateAccessed: "2026-09-14" },
    { name: "Cognition: Welcoming Dioxus to Cognition -- acquisition of the Dioxus team (2026-09-10)", url: "https://cognition.ai/blog/welcoming-dioxus", dateAccessed: "2026-09-14" },
    { name: "Anthropic: Fable 5.1 launch -- Cognition moving Devin's Opus 5 traffic to Fable 5.1 on launch day, citing cache-read pricing (2026-09-01)", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1", dateAccessed: "2026-09-05" },
    { name: "OpenAI: GPT-6 Astra launch -- Cognition integrating Astra into Devin's harness on launch day (2026-09-03)", url: "https://openai.com/index/gpt-6-astra/", dateAccessed: "2026-09-05" },
    { name: "Cognition: More Devins in More Places ($1B raise, 2026-05-27)", url: "https://www.cognition.ai/blog", dateAccessed: "2026-06-09" },
    { name: "Devin blog: Windsurf is now Devin Desktop (2026-06-02)", url: "https://www.devin.ai/blog", dateAccessed: "2026-06-09" },
    { name: "Cognition blog: Devin updates (2026-05-13)", url: "https://cognition.ai/blog", dateAccessed: "2026-05-13" },
    { name: "Cognition: Introducing Devin 2.2", url: "https://cognition.ai/blog/introducing-devin-2-2", dateAccessed: "2026-04-17" },
    { name: "Cognition: Devin in Windsurf 2.0", url: "https://cognition.ai/blog/devin-in-windsurf", dateAccessed: "2026-04-17" },
    { name: "Devin official site", url: "https://devin.ai", dateAccessed: "2026-04-17" },
    { name: "Reddit r/programming", dateAccessed: "2026-04-17" },
    { name: "GitHub Issues", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://devin.ai",
  status: "active",
  poweredBy: "Cognition proprietary orchestration over Claude / GPT / Gemini + Devin's own tuned components",
  metaTitle: "Devin Review 2026: Fusion Lead/Sidekick Harness Cuts Cost 23-46%, Fable 5.1 + Astra Day One",
  metaDescription: "Devin review. Devin Fusion (Sept 11, 2026) pairs a frontier lead (Fable 5.1 or GPT-6 Astra) with a cheap SWE-2 sidekick and, in benchmarks run with Artificial Analysis and Vals, matched single-model scores at 23-46% lower cost. Cognition at $26B, Devin Desktop (ex-Windsurf), Devin Cloud on the $20 plan.",
};
