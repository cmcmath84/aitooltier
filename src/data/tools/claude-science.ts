import { ToolReview } from "@/lib/types";

export const claudeScience: ToolReview = {
  slug: "claude-science",
  name: "Claude Science (Anthropic)",
  tagline: "Anthropic's AI workbench for scientists (launched 2026-06-30) -- a generalist coordinating agent plus 60+ curated skills and connectors preconfigured for genomics, single-cell analysis, proteomics, structural biology, and cheminformatics, with auditable output history. Beta for Claude Pro, Max, Team, and Enterprise",
  category: "ai-data-analytics",
  url: "https://www.anthropic.com/news/claude-science-ai-workbench",

  scores: {
    easeOfUse: 7,
    outputQuality: 8.5,
    value: 8,
    features: 8,
    overall: 7.9,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Included with Claude Pro / Max / Team / Enterprise (beta)",
      price: "from $20",
      period: "month (Claude Pro)",
      features: [
        "No separate Claude Science SKU at launch -- access rides on your existing Claude plan",
        "Generalist coordinating agent + 60+ curated science skills/connectors",
        "Auditable output history for reproducibility",
      ],
    },
    {
      plan: "AI for Science grants",
      price: "$0",
      features: [
        "Up to 50 grants of up to $30,000 in credits",
        "Applications through 2026-07-15, awards by 2026-07-31",
      ],
    },
  ],

  pros: [
    "Domain-preconfigured out of the box: 60+ curated skills/connectors spanning genomics, single-cell, proteomics, structural biology, and cheminformatics -- not a blank chat window you have to teach",
    "Auditable output history addresses the reproducibility objection that keeps LLMs out of serious lab workflows",
    "No new subscription: beta access is included on Pro/Max/Team/Enterprise, so labs already paying for Claude can evaluate it for free",
    "Anthropic is dogfooding it -- the company says it will use Claude Science for its own drug-discovery research into rare and neglected diseases",
  ],
  cons: [
    "Beta software in a domain where errors are expensive -- outputs still need expert review before anything reaches a wet lab or a paper",
    "Coverage is life-sciences-heavy at launch; physicists, chemists outside cheminformatics, and social scientists get less preconfigured value",
    "Rides on Claude plan limits -- heavy computational-biology sessions will eat the same usage budget as everything else on your plan",
    "Launched the same day as Claude Sonnet 5 and was largely overshadowed -- ecosystem content, community skills, and third-party reviews are still thin",
  ],
  knownIssues: [
    {
      description: "THE MODEL HARDWARE STANDARD -- ANTHROPIC'S SECOND OPEN STANDARD, THIS TIME FOR PHYSICAL LAB EQUIPMENT (2026-08-27, vendor-primary): Anthropic opened a **research preview of the Model Hardware Standard (MHS)**, '**a shared specification for AI agents to safely operate physical devices**', to a first group of scientific research labs and advanced manufacturers. **What it does:** lets agents drive **multiple lab and manufacturing instruments in parallel** -- Anthropic names **microscopes, liquid handlers and robotic arms** -- for work ranging from routine drug-discovery experiments to **laser calibration on a quantum computer**. **The claimed win is integration time: what typically takes a lab weeks or months to set up drops to 'hours or minutes'**, because MHS replaces bespoke per-device integrations with a **standardized driver** exposing simple primitives (`read`, e.g. get temperature; `write`, e.g. set temperature) plus **standard-format discoverability** so devices and agents find each other across networks. The driver also supplies machine characteristics an agent cannot infer from code alone. Anthropic says agents can reason through each step, update parameters in real time, and **in some cases recover from hardware errors without intervention**. **THE STRATEGIC SHAPE IS THE SAME PLAY AS MCP, AND THAT IS THE POINT: MHS is explicitly model-agnostic, works with any device that has a programmable interface, and any agent harness can reach it over standard protocols including the Model Context Protocol.** Anthropic is again defining the interoperability layer rather than a Claude-only feature. **Origin: a collaboration with HHMI Janelia Research Campus.** **STATUS CAVEATS THAT MATTER -- it is an early version, access is application-gated, partners are being recruited specifically to co-develop safety evaluations and best practices for AI operating physical equipment, and it is NOT open source yet ('ahead of making the standard open source').** Nothing here is generally available, and no pricing exists.",
      source: "Anthropic (anthropic.com/news/model-hardware-standard-research-preview, on-page 'Aug 27, 2026') -- fetched 2026-08-28 via curl with browser UA",
      date: "2026-08-27",
    },
    {
      description: "LAUNCH (2026-06-30): Claude Science shipped in beta for Claude Pro, Max, Team, and Enterprise users -- an AI workbench pairing a generalist coordinating agent with 60+ curated skills/connectors for genomics, single-cell analysis, proteomics, structural biology, and cheminformatics, plus auditable output history. Anthropic simultaneously announced up to 50 'AI for Science' grants of up to $30,000 in credits (applications through July 15, awards by July 31) and said it will use the product internally for drug-discovery research into rare/neglected diseases. MIT Technology Review called it Anthropic's 'newest flagship product'",
      source: "Anthropic (anthropic.com/news/claude-science-ai-workbench), MIT Technology Review (2026-06-30), STAT News",
      date: "2026-06-30",
    },
  ],
  bestFor: "Computational biologists, bioinformaticians, and life-science research teams already on a paid Claude plan who want an agentic workbench with domain tooling preconfigured -- and grant applicants who can land up to $30K in credits.",
  notFor: "Researchers outside the launch domains (the 60+ skills skew heavily life-sciences), anyone needing validated/regulated-environment software today, or casual users without a paid Claude plan.",
  verdict: "Claude Science is Anthropic's clearest statement yet that vertical agent products -- not just better base models -- are where it's heading. The pitch is strong: a coordinating agent that already knows genomics and proteomics tooling, with an audit trail, at no extra cost on plans many labs already have. The caveats are the usual beta ones: expert review remains mandatory, domain coverage is life-sciences-first, and the ecosystem is days old. If you work in computational biology and have a Pro plan, trying it costs nothing -- and the July 15 grant deadline is worth moving on. Everyone else should watch how fast the skill catalog grows beyond biology.",

  lastReviewedDate: "2026-08-28",
  dataSources: [
    { name: "Anthropic: Model Hardware Standard research preview (2026-08-27)", url: "https://www.anthropic.com/news/model-hardware-standard-research-preview", dateAccessed: "2026-08-28" },
    { name: "Anthropic: Claude Science -- an AI workbench for scientists (2026-06-30)", url: "https://www.anthropic.com/news/claude-science-ai-workbench", dateAccessed: "2026-07-05" },
    { name: "MIT Technology Review: Claude Science is Anthropic's newest flagship product", url: "https://www.technologyreview.com/2026/06/30/1139987/claude-science-is-anthropics-newest-flagship-product/", dateAccessed: "2026-07-05" },
    { name: "STAT News: Anthropic releases Claude Science", url: "https://www.statnews.com/2026/06/30/anthropic-release-claude-science-ceo-dario-amodei/", dateAccessed: "2026-07-05" },
  ],
  affiliateUrl: "https://claude.ai",
  status: "active",
  metaTitle: "Claude Science Review (2026): Anthropic's AI Workbench for Scientists",
  metaDescription: "Claude Science review. Anthropic's AI workbench (June 30, 2026): coordinating agent + 60+ science skills for genomics, proteomics, structural biology. Beta on Pro/Max/Team/Enterprise. $30K grants through July 15.",
};
