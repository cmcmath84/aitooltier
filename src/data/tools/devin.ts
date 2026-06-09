import { ToolReview } from "@/lib/types";

export const devin: ToolReview = {
  slug: "devin",
  name: "Devin",
  tagline: "The most autonomous AI coding agent -- now a full product family: Devin Cloud, **Devin Desktop (the renamed Windsurf IDE, June 2 2026)**, and Devin Review. Cognition raised $1B+ at a $26B valuation (May 27). Recent shipments: Claude Fable 5 support day-one (6/9), Auto-Triage (5/18), Windows VMs (5/21), Android Emulator (5/13)",
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

  lastReviewedDate: "2026-06-09",
  dataSources: [
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
  metaTitle: "Devin Review 2026: $26B Cognition, Devin Desktop (ex-Windsurf), Cloud Agent at $20/mo",
  metaDescription: "Devin review (June 2026). Cognition raised $1B at $26B, renamed Windsurf to Devin Desktop, and put Devin Cloud on the $20 plan. Auto-Triage, Windows VMs, Claude Fable 5 day-one. Scores + pricing.",
};
