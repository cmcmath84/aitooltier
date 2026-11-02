import { ToolReview } from "@/lib/types";

export const augmentIntent: ToolReview = {
  slug: "augment-intent",
  name: "Intent (formerly Intent by Augment)",
  tagline: "Spec-driven multi-agent orchestration for code -- a free Apache 2.0 desktop app for agent coordination that originated as Intent by Augment and now lives at intentapp.dev. Coordinator + implementor + verifier agents in isolated workspaces, with Auggie, Claude Code, Codex, Antigravity, Grok Build, OpenCode, Pi, and Unsloth as swappable providers. macOS, with Windows and Linux in Alpha",
  category: "ai-agent-orchestration",
  url: "https://intentapp.dev",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 8,
    features: 9,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Intent desktop app (open source)",
      price: "$0",
      features: [
        "Intent docs: 'Intent is a free desktop app for large-scale agent coordination for developers'",
        "Apache License 2.0; source at github.com/intent-hq/intent",
        "macOS; Windows (Alpha) and Linux (Alpha)",
        "Intent mobile for iPhone and iPad (App Store, 2026-10-08) as a remote control for your computers",
      ],
    },
    {
      plan: "Underlying agent providers",
      price: "Varies",
      period: "usage",
      features: [
        "You pay whichever providers you plug in: Augment Auggie, Anthropic Claude Code, Google Antigravity, Grok Build, OpenAI Codex, OpenCode, Pi, Unsloth",
        "Provider profiles for Codex and Claude Code with automatic failover when a profile runs out of quota (v2.231.2, 2026-10-27)",
        "Augment Code plans on augmentcode.com (site footer now reads '© 2026 Harness, Inc.'): Standard $20/month flat and Business $100/month flat, each including that amount of usage for up to 50 seats; Enterprise custom",
      ],
    },
  ],

  pros: [
    "Free and open source (Apache 2.0) -- no subscription to evaluate the orchestration layer itself. You only pay for the coding agents and models you run under it",
    "Treats multi-agent development as a single coordinated system rather than parallel-but-disconnected agents -- a Coordinator writes a living spec for every task and every agent in the workspace works from it, so agents don't stomp each other's work. Sharpest contrast with naive CrewAI / LangGraph setups that rely on manual prompt coordination",
    "Each task runs in its own workspace with an isolated copy of your files, and a verifier agent checks work against the spec's definition of done before it lands. Maps cleanly to how senior engineers already batch-delegate small tasks",
    "More model-agnostic than at launch -- eight swappable providers (Auggie, Claude Code, Codex, Antigravity, Grok Build, OpenCode, Pi, Unsloth), mixable per workspace, so you can coordinate with one model and verify with another",
    "Multi-device: offload long runs to remote machines and steer agents from the Intent mobile app on iPhone or iPad",
  ],
  cons: [
    "Governance is opaque: the NOTICE credits 'The Intent Authors' and no company is named on intentapp.dev, while Augment Code's own products moved to Harness. Enterprise buyers will want clarity on who maintains Intent long-term",
    "Windows and Linux builds are still labelled Alpha, and the release cadence is very fast (several pre-release builds per day on GitHub) -- expect churn",
    "Multi-agent orchestration adds real cognitive overhead -- the engineer still has to write good specs, review merged work, and understand workspace isolation and git flows. Not a drop-in 'AI makes software for you' tool",
    "Overlaps heavily with CrewAI, LangGraph, and Paperclip -- the differentiation is the spec + isolated workspace + verifier triad rather than raw capability. Evaluation against those alternatives is worth doing before committing",
  ],
  knownIssues: [
    {
      description:
        "NAME AND HOME CHANGED: augmentcode.com/intent now returns 'HTTP/1.1 308 Permanent Redirect' to https://www.intentapp.dev, and intentapp.dev does not mention Augment. Intent's NOTICE file reads 'Copyright 2026 The Intent Authors ... This product is part of Intent, an open-source agentic coding platform. Intent originated as Intent by Augment (https://github.com/intent-hq), and the NOTICE preserves that lineage and branding'; the Apache 2.0 LICENSE and NOTICE were added 2026-07-22. Separately, Harness acquired select Augment Code assets (2026-10-08): its post 'Harness acquires Augment Code to advance the Autonomous SDLC' says 'Harness has acquired select Augment Code assets, including Cosmos, the Auggie CLI, the Code Context Engine, and related technology'. That post does not name Intent, so do not assume Harness owns Intent",
      source: "augmentcode.com/intent redirect headers; github.com/intent-hq/intent NOTICE; Harness blog (2026-10-08)",
      date: "2026-11-02",
    },
    {
      description:
        "Pricing is now simply free: the docs say 'Intent is a free desktop app for large-scale agent coordination for developers' and 'Intent is licensed under the Apache License 2.0'. Downloads: 'Download Intent for macOS, Windows (Alpha), or Linux (Alpha)'. Providers: 'Works with Augment Auggie, Anthropic Claude Code, Google Antigravity, Grok Build, OpenAI Codex, OpenCode, Pi, and Unsloth as underlying providers'. Earlier versions of this page listed it as included in an Auggie subscription with standalone pricing to be announced -- both rows are superseded",
      source: "intentapp.dev/docs",
      date: "2026-11-02",
    },
    {
      description:
        "Recent releases (intentapp.dev/updates RSS): stable v2.231.2 (2026-10-27) adds provider profiles for Codex and Claude Code with automatic failover when a profile runs out of quota; v2.219.8 (2026-10-19) adds detailed status groups on Home; v2.212.1 (2026-10-09) introduces Home across projects; Intent mobile for iPhone and iPad arrived on the App Store 2026-10-08. The GitHub pre-release channel (intent-hq/cloudlands-releases) reached v2.271.0 on 2026-11-02",
      source: "intentapp.dev/updates RSS; GitHub releases API intent-hq/cloudlands-releases",
      date: "2026-10-27",
    },
    {
      description:
        "History: Intent launched in public beta on 2026-02-10 via the Augment Code blog ('Intent: A workspace for agent orchestration', last updated 2026-06-18, now linking to intentapp.dev). Positioning then and now: the spec is a living artifact that all agents read, with isolated workspaces and a verifier agent handling coordination. If CrewAI / LangGraph feel too low-level, Intent is the higher-level-framework pick",
      source: "Augment Code blog, Product Hunt",
      date: "2026-02",
    },
    {
      description:
        "'Verifier' agent is the interesting architectural piece -- rather than trusting implementor agents' self-reports, a separate agent validates work against the spec's definition of done before it lands. Reduces hallucinated-implementation risk vs single-agent frameworks",
      source: "Augment Code blog (Intent architecture section); intentapp.dev",
      date: "2026-02",
    },
  ],
  bestFor:
    "Engineering teams running mixed Claude Code + Codex + Auggie (or Antigravity, Grok Build, OpenCode) workflows who want free, higher-level orchestration than writing LangGraph graphs from scratch. Also teams that want isolated parallel agent workspaces with a verifier in the loop, and developers who want to steer agents from their phone.",
  notFor:
    "Solo developers or simple workflows -- the overhead of spec-driven multi-agent coordination outweighs the gains for small tasks. Also not for organizations that need a named vendor, SLA, or support contract behind their tooling: Intent is now community-licensed open source credited to 'The Intent Authors'. Windows and Linux users should expect Alpha-quality builds.",
  verdict:
    "Intent is still the cleanest 'framework for coordinating AI agents that write code' we've seen in the post-Devin era, and it got better for buyers: it originated as Intent by Augment and is now a free, Apache 2.0 desktop app at intentapp.dev with eight swappable agent providers, multi-machine support, and an iPhone/iPad remote. The old limits -- public beta, no standalone price -- are gone. The new question is stewardship: Harness acquired select Augment Code assets (2026-10-08) without naming Intent, and Intent's own NOTICE credits 'The Intent Authors'. For individuals and teams comfortable with fast-moving open source, it is now the default 'multi-agent orchestration for software teams' pick alongside Paperclip.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Intent homepage (intentapp.dev)", url: "https://intentapp.dev", dateAccessed: "2026-11-02" },
    { name: "Intent docs", url: "https://intentapp.dev/docs", dateAccessed: "2026-11-02" },
    { name: "Intent updates RSS", url: "https://intentapp.dev/updates/rss.xml", dateAccessed: "2026-11-02" },
    { name: "GitHub: intent-hq/intent NOTICE (Apache 2.0, 'originated as Intent by Augment')", url: "https://raw.githubusercontent.com/intent-hq/intent/main/NOTICE", dateAccessed: "2026-11-02" },
    { name: "GitHub API: intent-hq/intent repository", url: "https://api.github.com/repos/intent-hq/intent", dateAccessed: "2026-11-02" },
    { name: "GitHub releases API: intent-hq/cloudlands-releases", url: "https://api.github.com/repos/intent-hq/cloudlands-releases/releases?per_page=10", dateAccessed: "2026-11-02" },
    { name: "Harness blog: Harness acquires Augment Code to advance the Autonomous SDLC (2026-10-08)", url: "https://www.harness.io/blog/harness-acquires-augment-code-cosmos", dateAccessed: "2026-11-02" },
    { name: "Augment Code pricing (site now Harness, Inc.)", url: "https://www.augmentcode.com/pricing", dateAccessed: "2026-11-02" },
    { name: "Old product URL augmentcode.com/intent (now 308-redirects to intentapp.dev)", url: "https://www.augmentcode.com/intent", dateAccessed: "2026-11-02" },
    { name: "Augment Code blog: Intent workspace (2026-02-10, updated 2026-06-18)", url: "https://www.augmentcode.com/blog/intent-a-workspace-for-agent-orchestration", dateAccessed: "2026-11-02" },
    { name: "Product Hunt: Intent by Augment Code", url: "https://www.producthunt.com/p/augment-code/intent-by-augment-code-is-spec-driven-multi-agent-development-the-next-step-after-the-ide", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://intentapp.dev",
  status: "active",
  metaTitle: "Intent Review 2026: Free Open-Source Multi-Agent Coding Workspace (formerly Intent by Augment)",
  metaDescription:
    "Intent review. Free Apache 2.0 desktop app (formerly Intent by Augment) for spec-driven multi-agent coding. Coordinator + verifier agents across Auggie, Claude Code, Codex, Antigravity, OpenCode. vs CrewAI + LangGraph.",
};
