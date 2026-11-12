import { ToolReview } from "@/lib/types";

export const windsurf: ToolReview = {
  slug: "windsurf",
  name: "Devin Desktop (formerly Windsurf)",
  tagline: "**windsurf.com now redirects to devin.ai/desktop, Cascade was removed outright in v3.9.19 (2026-09-08), and the plan ladder is Free / Pro $20 / Max $200 / Teams $80 + $40 per seat.** Windsurf became **Devin Desktop** on June 2, 2026: the same VS Code-based editor, now with Devin Local as the only built-in agent, Devin Cloud from the Pro plan, free SWE-2 on paid plans, and an Agent Window that mirrors the Devin web app",
  category: "ai-code-assistants",
  url: "https://devin.ai/desktop",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Light quota to code with agents", "Limited model availability", "Unlimited inline edits", "Unlimited Tab completions"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month (raised from $15 in March 2026)",
      features: [
        "Increased quotas (refresh daily and weekly), including frontier models from OpenAI, Claude, Gemini, and SpaceXAI, plus leading open source models",
        "Full model availability and free use of SWE-2",
        "Access to cloud agents (Devin Cloud)",
        "Purchase extra usage at API pricing",
        "Use your ChatGPT plan",
      ],
    },
    {
      plan: "Max",
      price: "$200",
      period: "month",
      features: ["Everything in Pro", "Significantly higher quotas", "Marked NEW on the pricing page as of 2026-11-12"],
    },
    {
      plan: "Teams",
      price: "$80 + $40 per full dev seat",
      period: "month",
      features: [
        "Everything in Pro, up to 100 users",
        "Multiplayer sessions for sharing and collaboration",
        "2 concurrent sessions in Free mode per user",
        "SAML/OIDC SSO, centralized billing, cost controls with 3 usage tiers",
        "Slack channel support",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "SCIM and role-based access control, centralized enterprise admin controls",
        "Dedicated deployment option (VPC)",
        "Dedicated account management and highest priority support",
      ],
    },
  ],

  pros: [
    "Windsurf 2.0 (launched 2026-04-15) is a major redesign around agent orchestration -- Agent Command Center lets you supervise local + cloud agents from a single panel, which is genuinely new in the IDE category",
    "Embedded Devin cloud agent (via Cognition's post-$250M Windsurf acquisition) means you get background autonomous work without a separate product -- Devin can pick up work while Windsurf's inline agent handles your current tab",
    "Autocomplete remains fast and accurate -- on par with GitHub Copilot and sometimes better for boilerplate code. Free tier is still among the most generous in the category",
    "Built on VS Code like Cursor, so your extensions and keybindings carry over without friction. Cognition keeps investing -- weekly Devin Desktop releases through autumn 2026, its own SWE-2 model free on paid plans, and a $2B Series E at a $48B valuation (2026-09-08)",
  ],
  cons: [
    "Migration churn for long-time Windsurf users -- Cascade was removed in v3.9.19 (2026-09-08), workflows are being deprecated in favor of skills, and legacy entry points (Vibe & Replace, Deploy, workflow commands) were stripped in v3.10.23; hooks, workflows and memories have to go through the Cascade Migration Wizard",
    "Cloud agents (Devin) can accumulate unreviewed commits while you're away -- same class of problem Cursor 3 has. Set explicit budgets and review loops",
    "Usage is quota-based with daily and weekly refreshes, overage is billed at API pricing, and the step above Pro is a $200 Max plan -- there is no mid-priced individual tier",
    "Community / third-party skill ecosystem is smaller than Cursor's, and the product is changing fast enough that third-party tutorials age quickly",
  ],
  knownIssues: [
    {
      description: "HOST, NAME AND PLAN CHECK (2026-11-12, vendor pages): the product is still **Devin Desktop** from Cognition, but the Windsurf web property is gone -- windsurf.com and windsurf.com/editor redirect to devin.ai/desktop, windsurf.com/pricing to devin.ai/pricing, windsurf.com/blog to devin.ai/blog and windsurf.com/changelog to docs.devin.ai/desktop/changelog; cognition.ai now redirects to cognition.com. The live plan ladder is **Free $0, Pro $20/month, Max $200/month (marked NEW), Teams at '$80/month for team plan + $40/mo per full dev seat' (up to 100 users), and Enterprise**. Pro adds full model availability, 'free use of SWE-2', Devin Cloud access, extra usage at API pricing and 'Use your ChatGPT plan'. The $30 Team row this page carried is not on the live page; the date the Max and Teams pricing took effect is not published there. Latest stable build is v3.12.43 (2026-11-09)",
      source: "devin.ai/pricing, devin.ai/desktop (redirect target of windsurf.com), docs.devin.ai/desktop/changelog -- all fetched 2026-11-12",
      date: "2026-11-12",
    },
    {
      description: "AGENT WINDOW REBUILT ON THE DEVIN WEB APP (v3.11.212, 2026-10-23): 'The Agent Window now runs the same interface as the Devin web app' -- sessions sidebar, session view, Automations, Review, Wiki, settings and Command Palette match app.devin.ai. You can drag sessions to view up to 8 side by side, every session gets Files, Changes and Terminal tabs, and cloud sessions have an IDE button that opens a Remote SSH window on the session's machine. Earlier in the window: remote agent hosts over SSH and always-on ACP (v3.10.23, 2026-09-10), any number of agent windows side by side (v3.8.20, 2026-08-21), shareable Devin Local conversations (v3.7.16, 2026-08-10)",
      source: "Devin Desktop changelog (docs.devin.ai/desktop/changelog)",
      date: "2026-10-23",
    },
    {
      description: "MODELS AND COMPANY (September 2026, vendor blog; recorded late on 2026-11-12): **SWE-2** (2026-09-10), Cognition's own coding model, 'available starting today in Devin Desktop and CLI' and free to use on paid plans per the pricing page -- Cognition reports 50.0% on FrontierCode 1.1 Main, 'within one point of Fable 5.1 while being 64% cheaper'. **Fusion in Devin Desktop & CLI** (2026-09-11): pick a frontier 'lead' model for planning and review plus a cheaper 'sidekick' for execution. **Series E** (2026-09-08): 'Cognition has raised over $2B at a $48B valuation', led by Andreessen Horowitz and Accel. On 2026-09-25 Cognition said it 'crossed $1B in annualized revenue run rate'. See our Devin page for SWE-2 Flash (2026-11-04) and per-model availability",
      source: "Cognition blog (cognition.com/blog/swe-2, /blog/local-fusion, /blog/series-e, /blog/1b-run-rate)",
      date: "2026-09-10",
    },
    {
      description: "CASCADE REMOVED FROM THE PRODUCT (v3.9.19, 2026-09-08): 'Cascade has been removed. Devin Local is now the only agent available in Devin Desktop. Use the Continue in Devin Local prompt to migrate existing conversations to the new agent.' Two days later v3.10.23 removed the remaining legacy Cascade entry points (new-agent option, annotations, conversation mentions, settings group, automatic Lifeguard checks, Vibe & Replace, Deploy and workflow commands). A guided Cascade Migration Wizard for hooks, workflows and memories shipped in v3.6.22 (2026-07-29), when workflow surfaces also began stating that workflows are being deprecated in favor of skills. Note the timeline: the vendor blog set Cascade end-of-life for July 1, 2026, but the changelog shows Cascade fixes still shipping in v3.5.17 (2026-07-17) and the actual removal on September 8",
      source: "Devin Desktop changelog (docs.devin.ai/desktop/changelog -- v3.9.19, v3.10.23, v3.6.22, v3.5.17)",
      date: "2026-09-08",
    },
    {
      description: "CASCADE END-OF-LIFE (2026-07-01, vendor blog; removal actually landed 2026-09-08 in v3.9.19 -- see above): the legacy **Cascade local agent reached end-of-life on July 1, 2026** -- Devin Local, rewritten from scratch in Rust, is now the sole local agent ('the successor to Cascade as our primary local agent,' per Cognition; same capabilities and settings, up to 30% more token-efficient, adds subagents). Any automations or scripts that invoked Cascade directly stop working; quotas and plan structures carry over under the Devin Local name",
      source: "Devin blog (devin.ai/blog/windsurf-is-now-devin-desktop/ -- Cascade migration section)",
      date: "2026-07-01",
    },
    {
      description: "REBRAND (2026-06-02): **Windsurf is now Devin Desktop.** Cognition shipped the rename as an over-the-air update (build 2026.5.26) -- windsurf.com/editor now titles itself 'Devin Desktop' and the changelog has become 'Devin Docs.' Nothing breaks: plans, pricing, settings, and extensions carry over unchanged. What's new in the bundle: the local agent is branded **Devin Local**, and **Devin Cloud agent access now starts on the $20 Pro plan** (previously enterprise-only positioning). The rebrand completes the post-acquisition consolidation -- Cognition now ships one product family (Devin Cloud, Devin Desktop, Devin Review) instead of two brands. Context: Cognition announced 2026-05-27 it has raised over $1B at a $26B valuation (Lux Capital, General Catalyst, 8VC)",
      source: "Devin blog (devin.ai/blog, 'Windsurf is now Devin Desktop', 2026-06-02), windsurf.com/editor, Cognition blog (cognition.ai/blog, 'More Devins in More Places')",
      date: "2026-06-02",
    },
    {
      description: "PRODUCT (2026-05-12): Windsurf bundled **Devin Review** into all paid Windsurf IDE tiers at no extra cost -- self-serve subscribers get a 2-week free trial of Devin Review. Two flavors: 'Fast' (quick PR scan) and 'Comprehensive' (deep review with Devin reasoning). Same-day shipped: **Claude Opus 4.7 fast mode** added to the Windsurf model picker. The Devin Review integration is the most concrete payoff yet from the Cognition acquisition of Windsurf -- the IDE now embeds Cognition's flagship code-review agent without a separate Cognition contract, narrowing Cursor's PR-review edge (Cursor 3.3 5/7 PR review experience). Practical implication: any team comparing Cursor vs Windsurf for PR-review-in-editor should re-evaluate now -- the 2-week free trial gives a clean A/B on Cognition's review quality before committing.",
      source: "Windsurf blog (windsurf.com/blog/devin-review-windsurf)",
      date: "2026-05-12",
    },
    {
      description: "SECURITY (2026-04-15): CVE-2026-30615 -- a prompt-injection vulnerability in Windsurf 1.9544.26 allows remote attackers to execute arbitrary commands on a victim system. Severity 8.0 (HIGH) per CISA-ADP scoring; NIST has not yet enriched the entry. Update past 1.9544.26 to a newer build. Caveat: NVD publicly notes 'this CVE record is not being prioritized for NVD enrichment efforts due to resource or other concerns,' so the canonical severity score comes from CISA-ADP rather than NIST -- but the underlying vulnerability is real and the recommendation to update is unchanged",
      source: "NVD (nvd.nist.gov/vuln/detail/CVE-2026-30615), CISA-ADP",
      date: "2026-04-15",
    },
    {
      description: "Windsurf Pro was raised from $15/mo to $20/mo in March 2026, and the entire credit system shifted from a monthly allocation to daily/weekly quotas. If your old monthly budget assumed evenly-distributable credits, the new quota cadence may surprise you in burst-usage weeks",
      source: "Windsurf pricing page",
      date: "2026-03",
    },
    {
      description: "Windsurf 2.0 Agent Command Center is new as of 2026-04-15 -- expect early rough edges in multi-agent handoff and background-agent commit tracking over the next few weeks",
      source: "TestingCatalog, Cognition blog",
      date: "2026-04",
    },
    {
      description: "Cascade sometimes enters loops where it repeatedly tries to fix the same error with the same approach -- long-standing issue that Agent Command Center may help surface but hasn't eliminated",
      source: "Reddit r/Windsurf",
      date: "2026-03",
    },
    {
      description: "Extension compatibility issues with some VS Code extensions that work fine in Cursor persist through the 2.0 release",
      source: "GitHub Issues",
      date: "2026-02",
    },
  ],
  bestFor: "Developers who want agent-first coding (background + inline) inside a familiar VS Code-based editor, and who value Cognition's Devin integration as a core part of the workflow. The April 2026 redesign makes Windsurf 2.0 a direct alternative to Cursor 3 for this use case.",
  notFor: "Developers who just want great autocomplete and inline chat -- Cursor or Copilot is simpler, and there is no individual tier between the $20 Pro and $200 Max plans. Also not for teams with strict data-residency needs that preclude Cognition's cloud agents (unless you buy the Enterprise VPC deployment).",
  verdict: "The Windsurf name is gone -- as of June 2, 2026 this product is Devin Desktop, and the rebrand tells you exactly where Cognition is taking it: one Devin family where the IDE is the supervised surface and Devin Cloud is the autonomous one. Nothing about the editor itself changed in the rename (same VS Code base, plans, extensions), and Devin Cloud access landing on the $20 Pro plan makes the agent-first pitch more accessible than it was under enterprise gating. The honest read is unchanged from the Windsurf 2.0 era: for agent-heavy workflows this is a first-tier choice alongside Cursor; for autocomplete-and-chat minimalists, Cursor or Copilot remains simpler. By November 2026 the consolidation is complete: windsurf.com redirects to devin.ai, Cascade is gone from the product (v3.9.19, 2026-09-08), the Agent Window is the Devin web app embedded in the editor, and the plan ladder is Free / Pro $20 / Max $200 / Teams $80 plus $40 per seat. With a further $2B raised at a $48B valuation in September 2026, Cognition has the runway to keep pushing -- expect the Devin Desktop / Cursor rivalry to keep defining the category.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "Devin: Plans and Pricing (Free / Pro / Max / Teams / Enterprise; windsurf.com/pricing redirects here)", url: "https://devin.ai/pricing", dateAccessed: "2026-11-12" },
    { name: "Devin Desktop product page (windsurf.com redirects here)", url: "https://devin.ai/desktop", dateAccessed: "2026-11-12" },
    { name: "Devin Desktop changelog (windsurf.com/changelog redirects here)", url: "https://docs.devin.ai/desktop/changelog", dateAccessed: "2026-11-12" },
    { name: "Devin blog index (windsurf.com/blog redirects here)", url: "https://devin.ai/blog", dateAccessed: "2026-11-12" },
    { name: "Cognition: Introducing SWE-2 (2026-09-10)", url: "https://cognition.com/blog/swe-2", dateAccessed: "2026-11-12" },
    { name: "Cognition: Introducing Fusion in Devin Desktop & CLI (2026-09-11)", url: "https://cognition.com/blog/local-fusion", dateAccessed: "2026-11-12" },
    { name: "Cognition: Announcing our Series E (2026-09-08)", url: "https://cognition.com/blog/series-e", dateAccessed: "2026-11-12" },
    { name: "Cognition: $1B annualized revenue run rate (2026-09-25)", url: "https://cognition.com/blog/1b-run-rate", dateAccessed: "2026-11-12" },
    { name: "Devin blog: Windsurf is now Devin Desktop (2026-06-02)", url: "https://www.devin.ai/blog", dateAccessed: "2026-06-09" },
    { name: "Cognition: More Devins in More Places ($1B raise, 2026-05-27)", url: "https://www.cognition.ai/blog", dateAccessed: "2026-06-09" },
    { name: "Cognition: Introducing Devin in Windsurf", url: "https://cognition.ai/blog/devin-in-windsurf", dateAccessed: "2026-04-17" },
    { name: "TestingCatalog: Windsurf 2.0 adds Devin and Agent Command Center", url: "https://www.testingcatalog.com/windsurf-2-0-adds-devin-and-agent-command-center/", dateAccessed: "2026-04-17" },
    { name: "KuCoin: Cognition launches Windsurf 2.0 with Agent Command Center + Devin cloud agent", url: "https://www.kucoin.com/news/flash/cognition-ai-launches-windsurf-2-0-with-agent-command-center-and-built-in-devin-cloud-agent", dateAccessed: "2026-04-17" },
    { name: "Windsurf official site", url: "https://windsurf.com", dateAccessed: "2026-04-17" },
    { name: "Reddit r/Windsurf", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://devin.ai/desktop",
  status: "active",
  poweredBy: "Cognition SWE-2 + frontier models from OpenAI, Anthropic, Google and SpaceXAI plus open source models (user selects) + Devin Cloud agent",
  metaTitle: "Devin Desktop (Formerly Windsurf) Review: What Changed",
  metaDescription: "Windsurf is now Devin Desktop. Cascade removed Sept 2026, windsurf.com redirects to devin.ai. Plans: Free, Pro $20, Max $200, Teams $80 + $40/seat. Nov 2026.",
};
