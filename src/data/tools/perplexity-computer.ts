import { ToolReview } from "@/lib/types";

export const perplexityComputer: ToolReview = {
  slug: "perplexity-computer",
  name: "Perplexity Computer",
  tagline: "Perplexity's general-purpose digital worker -- operates real software like you do, runs for hours or months, **and since 2026-09-29 runs on its own: Automations replace Scheduled Tasks with schedule- or event-triggered agents (Slack, Gmail, Outlook, Linear, GitHub) that remember prior runs and can flag missed deadlines, with per-action review gates and admin-scoped connector permissions.** and since 2026-09-21 is documented as served by GLM 5.2 rather than a frontier council: Perplexity disclosed that Computer sessions run on Z.ai's open-weight GLM 5.2, post-trained on real user sessions, with the trained checkpoint offered as a model option (21.2% fewer live tool-call failures). **Portable Computer** runs the whole thing on your own hardware -- NVIDIA RTX since 8/25, Windows since 9/14, AMD Ryzen AI Max since 9/24 -- on PPLX 27B or Qwen 3.8 27B with 24 GB of GPU memory, and local inference does not consume Computer credits. Included on Pro ($20) since 5/07, not only Max ($200).",
  category: "ai-personal-agents",
  url: "https://www.perplexity.ai/hub/blog/introducing-perplexity-computer",

  scores: {
    easeOfUse: 8.5,
    outputQuality: 9,
    value: 6.5,
    features: 9.5,
    overall: 8.4,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Perplexity Pro",
      price: "$20",
      period: "month",
      features: [
        "Now includes Personal Computer on the Mac app (expanded from Max-only on 2026-05-07)",
        "Deep Research",
        "Comet browser (Mac, Windows, iOS, Android)",
      ],
    },
    {
      plan: "Perplexity Max",
      price: "$200",
      period: "month",
      features: [
        "Perplexity Computer access",
        "Model Council (Opus 4.6, GPT-5.2, Gemini, Grok, Veo 3.1)",
        "Unlimited Deep Research",
        "Advanced Comet browser",
        "Long-running workflows (hours to months)",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Team seats and admin controls",
        "SOC 2 and data controls",
        "Workspace-scoped agents",
      ],
    },
  ],

  pros: [
    "Best-in-class model routing -- it uses Opus 4.6 for reasoning, Gemini for deep research, GPT-5.2 for long-context recall, Grok for speed, Veo 3.1 for video -- no single open-source agent gets this",
    "Truly long-running -- workflows can run for hours or months across restarts, which is the feature that separates 'agent' from 'chatbot with tools' in 2026",
    "Zero infrastructure, zero sandboxing to configure -- the Max subscription replaces what would otherwise be a weekend of OpenClaw setup plus a VPS bill",
    "Operates real applications through a browser/desktop layer, not just API calls, so it handles web apps that OpenAI-style tool use cannot reach",
  ],
  cons: [
    "Personal Computer is on the $20 Pro tier since 2026-05-07, but the full long-running product and highest limits still sit on the $200 Max tier -- and cloud sessions burn Computer credits, which is why Perplexity keeps pushing Portable Computer (local inference is credit-free but needs a 24 GB GPU)",
    "Closed-source and fully hosted -- your data, your workflows, your credentials live on Perplexity's infrastructure with no self-hosted escape hatch",
    "Sibling product Comet has a documented prompt-injection-to-phishing exploit (March 2026) -- Computer uses the same agentic infrastructure, treat it as an active security surface",
    "Perplexity disclosed on 2026-09-21 that Computer sessions are served by GLM 5.2 post-trained on user sessions -- an open-weight Chinese model rather than the frontier Opus/GPT council the launch marketing implied; capable, but not what the Model Council pitch suggested, and per-task routing is a black box either way",
  ],
  knownIssues: [
    {
      description: "AUTOMATIONS -- COMPUTER BECOMES A STANDING AGENT WITH EVENT TRIGGERS AND MEMORY ACROSS RUNS (2026-09-29, vendor-primary): Perplexity launched **Automations**, 'which bring Computer's capabilities to long-running agents that work proactively on a schedule or in response to conditional events'. Each automation uses Computer's connected files, tools and Projects, and **'remembers prior work, picking up where it left off without waiting for a new request'** -- Perplexity's contrast is explicit: 'Unlike other agents, Automations don't start from scratch every time.' **They replace Scheduled Tasks**, adding event triggers from **Slack, Gmail, Outlook, Linear or GitHub** with conditions (sender, request type) and absence detection ('Flag any priority customer account that hasn't replied in four days'). Setup from the omnibar or Automations > New Automation with instructions, trigger, connected accounts and Projects; users decide which actions run unattended and which need review; admins limit connector access and actions; run history shows trigger and output. **No credit price per run is published** -- the page's standing caveat that Computer work burns credits applies, and the 10/01 American Express Skills bundle (Enterprise subscribers; ten finance/marketing/ops/hiring workflows) states outright that 'running Skills requires Computer Credits'. Portable Computer's credit-free local runs are a separate path and the post does not say whether Automations can run there.",
      source: "Perplexity (perplexity.ai/hub/blog/computer-adds-automations-for-ongoing-work, 'Sep 29, 2026'; perplexity.ai/hub/blog/perplexity-and-american-express-make-ai-easier-for-growing-businesses, 'Oct 1, 2026') -- dates from the hub index via Firecrawl, bodies via curl, fetched 2026-10-02",
      date: "2026-09-29",
    },
    {
      description: "STALENESS CATCH-UP (page last reviewed 2026-05-26): WHAT RUNS COMPUTER, PORTABLE COMPUTER ON YOUR OWN HARDWARE, AND THE SANDBOX RED-TEAM (2026-08-25 to 2026-09-24, vendor-primary): (1) **The model.** Perplexity's 9/21 research post 'Learning from real-world experience' says Computer sessions are served by **GLM 5.2** (Z.ai's open-weight model) post-trained by Perplexity with rejection-sampling fine-tuning plus hint-guided self-distillation on real sessions; the later checkpoint cut live tool-call failures 21.2% relative (2.24% to 1.77%) and 'becomes a model option in Computer'. This supersedes the launch-era 'Model Council' framing on this page (Opus 4.6, GPT-5.2, Gemini, Grok, Veo 3.1 routing) for the core session model; per-task routing to third-party models is not restated in the 9/21 post, so treat the council description as historical. (2) **Portable Computer.** Introduced 8/25 as 'Perplexity Computer entirely on device with NVIDIA, keeping private data local and escalating to the cloud only when a task needs it' (hub index); Windows app 9/14; **AMD Ryzen AI Max on 9/24** with the local models named for the first time -- **'Qwen 3.8 27B and PPLX 27B, Perplexity's post-trained model'** -- requiring at least 24 GB of GPU-accessible memory, Windows 10/11 and ~20 GB disk; 'local inference doesn't consume Computer credits'; local MCP servers reach apps on the same PC; **Pro and Max subscribers on individual and enterprise plans**, admin-gated on enterprise. (3) **Sandbox.** The 9/23 'Escaping SPACE: Part I' report red-teamed SPACE, 'the sandbox platform behind Perplexity Computer': nine models with root in a guest VM, **no VM-to-host escape in 108 runs**, but four models bypassed network confinement via DNS spoofing or shared-IP routing; defenses were added and a re-evaluation produced no verified bypass. (4) **Pricing rows and cons on this page were internally inconsistent** -- the pricing table has said since 5/26 that Personal Computer is included on the $20 Pro tier, while the cons still called $200 Max 'the only way to get it'; corrected today per the same-page rule.",
      source: "Perplexity (perplexity.ai/hub/blog/learning-from-real-world-experience, 9/21; perplexity.ai/hub/blog/portable-computer-comes-to-amd-powered-agentic-pcs, 9/24; perplexity.ai/hub/blog/escaping-space-part-i, 9/23; hub index dates via Firecrawl) -- fetched 2026-09-28",
      date: "2026-09-24",
    },
    {
      description: "PRICING / DISTRIBUTION (CONFIRMED 2026-05-26 via MacRumors): on 2026-05-07 Perplexity launched a Mac desktop app and expanded 'Personal Computer' access beyond Max to include the Pro $20/mo and Enterprise tiers (prior gating was Max-only at $200/mo). Runs on any Mac with macOS 14 Sonoma or later (a Mac mini is recommended for always-on operation); activated by pressing both Command keys; the agent gets local file + web access inside a secure sandbox with auditable, reversible actions. The Pro tier above is updated to reflect that it now includes Personal Computer on Mac. Note: Perplexity's own changelog/hub still returns 403 to automated fetch (same bot-blocking pattern as OpenAI), so tier-1 press is the verification path here rather than a vendor-page failure meaning 'no change'.",
      source: "MacRumors (macrumors.com/2026/05/07/perplexity-mac-app-personal-computer); Perplexity changelog (vendor, 403 to automated fetch)",
      date: "2026-05-07",
    },
    {
      description: "Comet browser (same agentic stack) was tricked into executing a phishing workflow within 4 minutes in controlled research -- Perplexity Computer inherits the same prompt-injection exposure, credentials held by the agent are at risk",
      source: "The Hacker News, March 2026",
      date: "2026-03",
    },
    {
      description: "Long-running workflows occasionally lose state on model-council handoffs -- Perplexity has acknowledged and is iterating on the orchestration layer",
      source: "Perplexity changelog",
      date: "2026-03",
    },
  ],
  bestFor: "Professionals and small teams who will burn $200/month worth of research, drafting, and multi-step workflow time -- consultants, researchers, analysts, founders. Especially strong if you want frontier models across text, video, and images in one agent without stitching APIs together. The right pick if infrastructure is a non-starter and quality ceiling matters more than cost.",
  notFor: "Anyone price-sensitive (OpenClaw + Claude API is a fraction of the cost), anyone who needs data sovereignty (self-host Hermes instead), or anyone whose workflow doesn't actually need multi-model routing. Also wrong if you want a messaging-first UX -- Perplexity Computer lives in the browser, not in your Telegram.",
  verdict: "Perplexity Computer is the most capable hosted personal agent in 2026 and it's not especially close on output quality -- routing frontier models by task is a genuine architectural advantage over single-model agents. It's also the most expensive option in this category by an order of magnitude, and it lives on infrastructure you don't control with an active prompt-injection exposure on the sibling product. Buy it if your time is worth more than $200/month and the quality difference will show up in your work. Skip it and run OpenClaw or Hermes with Claude API if you're cost-sensitive or security-paranoid -- you'll give up the Model Council but save $150+/month.",

  lastReviewedDate: "2026-10-02",
  dataSources: [
    { name: "Perplexity: Computer adds Automations for ongoing work (2026-09-29)", url: "https://www.perplexity.ai/hub/blog/computer-adds-automations-for-ongoing-work", dateAccessed: "2026-10-02" },
    { name: "Perplexity: Learning from real-world experience (2026-09-21) -- Computer sessions served by GLM 5.2, post-trained checkpoint as a model option, 21.2% fewer tool-call failures", url: "https://www.perplexity.ai/hub/blog/learning-from-real-world-experience", dateAccessed: "2026-09-28" },
    { name: "Perplexity: Portable Computer comes to AMD-powered agentic PCs (2026-09-24) -- PPLX 27B and Qwen 3.8 27B, 24 GB floor, credit-free local inference, Pro/Max", url: "https://www.perplexity.ai/hub/blog/portable-computer-comes-to-amd-powered-agentic-pcs", dateAccessed: "2026-09-28" },
    { name: "Perplexity: Escaping SPACE: Part I (2026-09-23) -- red-team of the sandbox behind Computer", url: "https://www.perplexity.ai/hub/blog/escaping-space-part-i", dateAccessed: "2026-09-28" },
    { name: "Perplexity hub blog index -- Portable Computer intro dated Aug 25, 2026 and post dates (via Firecrawl, 2026-09-28)", url: "https://www.perplexity.ai/hub/blog", dateAccessed: "2026-09-28" },
    { name: "MacRumors: Perplexity Mac app + Personal Computer (2026-05-07)", url: "https://www.macrumors.com/2026/05/07/perplexity-mac-app-personal-computer/", dateAccessed: "2026-05-26" },
    { name: "Introducing Perplexity Computer", url: "https://www.perplexity.ai/hub/blog/introducing-perplexity-computer", dateAccessed: "2026-04-13" },
    { name: "Perplexity Comet product page", url: "https://www.perplexity.ai/comet", dateAccessed: "2026-04-13" },
    { name: "The Hacker News: Comet phishing exploit", url: "https://thehackernews.com/2026/03/researchers-trick-perplexitys-comet-ai.html", dateAccessed: "2026-04-13" },
    { name: "IBM Think: Comet agentic browser", url: "https://www.ibm.com/think/news/comet-perplexity-take-agentic-browser", dateAccessed: "2026-04-13" },
    { name: "Perplexity changelog", url: "https://www.perplexity.ai/changelog/what-we-shipped---february-6th-2026", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.perplexity.ai/",
  status: "active",
  poweredBy: "GLM 5.2 (Z.ai), post-trained by Perplexity on real sessions, for cloud Computer sessions (disclosed 2026-09-21); PPLX 27B or Qwen 3.8 27B locally in Portable Computer (named 2026-09-24); launch-era Model Council routing (Opus, GPT, Gemini, Grok, Veo) is historical",
  metaTitle: "Perplexity Computer Review 2026: Automations With Event Triggers, Runs on GLM 5.2, Portable Computer Local",
  metaDescription: "Perplexity Computer review. Automations (Sept 29, 2026) turn Computer into a standing agent triggered by a schedule or by events in Slack, Gmail, Outlook, Linear or GitHub, with memory across runs and review gates, replacing Scheduled Tasks. Perplexity disclosed (Sept 21) that Computer runs on GLM 5.2 post-trained on real sessions. Portable Computer runs it locally on NVIDIA RTX or AMD Ryzen AI Max with no credit spend. Personal Computer on the $20 Pro tier since May.",
};
