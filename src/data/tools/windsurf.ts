import { ToolReview } from "@/lib/types";

export const windsurf: ToolReview = {
  slug: "windsurf",
  name: "Devin Desktop (formerly Windsurf)",
  tagline: "Windsurf is now **Devin Desktop** -- Cognition retired the Windsurf brand via OTA update on June 2, 2026. Same editor, plans, pricing, settings, and extensions; the bundled agent is now 'Devin Local' and Devin Cloud agent access starts on the $20 Pro plan. Agent Command Center, Spaces, and Devin Review all carry over",
  category: "ai-code-assistants",
  url: "https://windsurf.com",

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
      features: ["Unlimited autocomplete", "Limited Cascade actions", "Basic chat"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month (raised from $15 in March 2026)",
      features: ["Cascade flows with daily/weekly quotas (replaced legacy monthly allocation)", "Claude Opus 4.7, GPT-5.4, Gemini access", "Priority completions"],
    },
    {
      plan: "Team",
      price: "$30",
      period: "month",
      features: ["Everything in Pro", "Admin dashboard", "Usage analytics", "Centralized billing"],
    },
    {
      plan: "Enterprise (with Devin cloud agent)",
      price: "Custom",
      features: [
        "Full Agent Command Center with multi-agent orchestration",
        "Embedded Devin cloud agent (background autonomous work)",
        "Spaces -- shared team workspaces with agent history",
        "Cognition platform integration (post-$250M acquisition)",
      ],
    },
  ],

  pros: [
    "Windsurf 2.0 (launched 2026-04-15) is a major redesign around agent orchestration -- Agent Command Center lets you supervise local + cloud agents from a single panel, which is genuinely new in the IDE category",
    "Embedded Devin cloud agent (via Cognition's post-$250M Windsurf acquisition) means you get background autonomous work without a separate product -- Devin can pick up work while Windsurf's inline agent handles your current tab",
    "Autocomplete remains fast and accurate -- on par with GitHub Copilot and sometimes better for boilerplate code. Free tier is still among the most generous in the category",
    "Built on VS Code like Cursor, so your extensions and keybindings carry over without friction. Cognition is investing heavily after the acquisition so the ecosystem should close the gap with Cursor over Q2/Q3 2026",
  ],
  cons: [
    "Cognition ownership is still bedding in -- the Windsurf 2.0 Agent Command Center feels polished but the integration points with the pre-existing Cascade flows have rough edges",
    "Cloud agents (Devin) can accumulate unreviewed commits while you're away -- same class of problem Cursor 3 has. Set explicit budgets and review loops",
    "Model selection is more limited than Cursor -- Cursor 3 offers Composer 2 + frontier models via BYO-key; Windsurf 2.0 is hosted-model-first",
    "Community / third-party skill ecosystem is smaller than Cursor's, and the product is changing fast enough that third-party tutorials age quickly",
  ],
  knownIssues: [
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
  notFor: "Developers who just want great autocomplete and inline chat with BYO-API-key flexibility -- Cursor 3 has the deeper model catalog and Pro+ tier. Also not for teams with strict data-residency needs that preclude Cognition's cloud agents.",
  verdict: "The Windsurf name is gone -- as of June 2, 2026 this product is Devin Desktop, and the rebrand tells you exactly where Cognition is taking it: one Devin family where the IDE is the supervised surface and Devin Cloud is the autonomous one. Nothing about the editor itself changed in the rename (same VS Code base, plans, extensions), and Devin Cloud access landing on the $20 Pro plan makes the agent-first pitch more accessible than it was under enterprise gating. The honest read is unchanged from the Windsurf 2.0 era: for agent-heavy workflows this is a first-tier choice alongside Cursor; for autocomplete-and-chat minimalists, Cursor or Copilot remains simpler. With $1B raised at a $26B valuation, Cognition has the runway to keep pushing -- expect the Devin Desktop / Cursor rivalry to define the category through 2026.",

  lastReviewedDate: "2026-06-09",
  dataSources: [
    { name: "Devin blog: Windsurf is now Devin Desktop (2026-06-02)", url: "https://www.devin.ai/blog", dateAccessed: "2026-06-09" },
    { name: "Cognition: More Devins in More Places ($1B raise, 2026-05-27)", url: "https://www.cognition.ai/blog", dateAccessed: "2026-06-09" },
    { name: "Cognition: Introducing Devin in Windsurf", url: "https://cognition.ai/blog/devin-in-windsurf", dateAccessed: "2026-04-17" },
    { name: "TestingCatalog: Windsurf 2.0 adds Devin and Agent Command Center", url: "https://www.testingcatalog.com/windsurf-2-0-adds-devin-and-agent-command-center/", dateAccessed: "2026-04-17" },
    { name: "KuCoin: Cognition launches Windsurf 2.0 with Agent Command Center + Devin cloud agent", url: "https://www.kucoin.com/news/flash/cognition-ai-launches-windsurf-2-0-with-agent-command-center-and-built-in-devin-cloud-agent", dateAccessed: "2026-04-17" },
    { name: "Windsurf official site", url: "https://windsurf.com", dateAccessed: "2026-04-17" },
    { name: "Reddit r/Windsurf", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://windsurf.com",
  status: "active",
  poweredBy: "Cognition hosted models + Claude / GPT / Gemini (user selects) + Devin cloud agent",
  metaTitle: "Windsurf Is Now Devin Desktop (June 2026): Rebrand Explained + Review",
  metaDescription: "Windsurf became Devin Desktop on June 2, 2026 via OTA update. Same IDE, plans, and extensions -- new Devin Local agent branding, Devin Cloud on the $20 Pro plan. What changed, what didn't, and how it stacks vs Cursor.",
};
