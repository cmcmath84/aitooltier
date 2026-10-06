import { ToolReview } from "@/lib/types";

export const tabnine: ToolReview = {
  slug: "tabnine",
  name: "Tabnine",
  tagline: "**Tabnine was acquired by Tricentis on 2026-07-30 and is being folded into the Tricentis Agentic Quality Engineering Platform as its Enterprise Context Engine; tabnine.com now redirects to tricentis.com and the public price list is gone, though the VS Code extension (v3.335.0, about 9.6M installs) and the docs are still live.** Privacy-first AI code completion with on-premise deployment -- now a testing-company asset rather than a standalone Copilot rival.",
  category: "ai-code-assistants",
  url: "https://www.tabnine.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 6,
    value: 5,
    features: 6,
    overall: 6.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Basic (last publicly listed March 2026)",
      price: "$0",
      features: ["Short code completions", "Basic AI chat", "No public plan page since the Tricentis acquisition -- availability unconfirmed"],
    },
    {
      plan: "Dev (last publicly listed March 2026)",
      price: "$9",
      period: "month -- no longer on any vendor page",
      features: ["Full-line completions", "AI chat", "tabnine.com/pricing now redirects to a Tricentis contact form"],
    },
    {
      plan: "Enterprise (via Tricentis)",
      price: "Contact Tricentis",
      features: ["On-premise, private VPC or fully air-gapped deployment", "Enterprise Context Engine (knowledge graph of repos, docs, tickets, APIs)", "Sold as part of the Tricentis Agentic Quality Engineering Platform"],
    },
  ],

  pros: [
    "Privacy-first approach -- code never leaves your machine on the local model, which matters for regulated industries",
    "Works as a plugin in any major IDE (VS Code, JetBrains, Vim, etc.) so you don't have to switch editors",
    "The Enterprise Context Engine -- a graph-plus-vector model of an organization's repos, docs, tickets and APIs -- is the asset Tricentis paid for, and it still deploys on-premises, in a private VPC or fully air-gapped",
    "Lightweight and fast -- completions appear instantly without the latency you sometimes get with cloud-based tools",
  ],
  cons: [
    "Since the 2026-07-30 Tricentis acquisition there is no public pricing, no Tabnine blog and no standalone product roadmap -- tabnine.com redirects to Tricentis, and the stated plan is to integrate the technology into a testing platform, not to keep competing with Copilot and Cursor",
    "Completion quality has fallen behind Copilot, Cursor, and Windsurf -- the suggestions are shorter and less contextual",
    "AI chat is basic compared to Cursor's codebase-aware chat or Copilot Chat's integration depth",
    "The free tier is so limited it's hard to get a real sense of the tool's capabilities before paying",
    "At $9/month for Dev, the value is questionable when GitHub Copilot offers more for $10/month",
  ],
  knownIssues: [
    {
      description: "TRICENTIS ACQUIRED TABNINE -- THE 'ENTERPRISE CONTEXT ENGINE' IS BEING FOLDED INTO A SOFTWARE-TESTING PLATFORM, AND THE STANDALONE MARKETING SITE IS GONE (2026-07-30, acquirer press release; site state checked 2026-10-06): Tricentis, 'the global leader in agentic quality engineering', 'announced the acquisition of Tabnine, the AI-coding platform purpose-built for secure, context-aware enterprise software development' and said it 'will integrate Tabnine's Enterprise Context Engine technology into the Tricentis Agentic Quality Engineering Platform'. The release describes the engine as 'a structured, continuously updated knowledge graph of an organization's systems' (entities, dependencies and architectural patterns pulled from repositories, documentation, tickets, APIs and infrastructure metadata) that deploys 'on-premises, in a private VPC, or fully air-gapped'; Tricentis cites customer-reported 'up to a two-times improvement in AI accuracy, up to 80 percent reduction in token consumption' and 'up to 50 percent faster time to resolution'. Tabnine founder and CEO Dror Weiss: 'Bringing our technology into that platform is exactly what it was built for.' **No deal terms were disclosed, and the release does not mention the Tabnine IDE product, its plans or its users at all.** **What we verified on 2026-10-06:** tabnine.com now 301-redirects to tricentis.com/products, tabnine.com/pricing redirects to a Tricentis contact form, and tabnine.com/blog redirects to Tricentis Learn -- so the $9 Dev and $39 Enterprise prices this page carried since March have no vendor source any more; docs.tabnine.com still serves the product documentation; the Tabnine VS Code extension is still listed (version 3.335.0, about 9.64 million installs); app.tabnine.com returned HTTP 503 at check time. **How to read it:** this is an acqui-integration by a QA vendor, not a continuation of Tabnine as a Copilot competitor. Existing enterprise customers should ask Tricentis about contract continuity; individuals should assume the Dev plan is no longer sold. This page keeps its 'active' status because the extension and docs are live and no end-of-life has been announced, but the category comparison now reads Tabnine as legacy. **Missed window note:** the acquisition closed more than two months before it reached this page; the staleness sweep caught it.",
      source: "Tricentis (tricentis.com/news/tricentis-acquires-tabnine/, dateline 'AUSTIN, Texas -- July 30, 2026') -- fetched 2026-10-06 via curl; tabnine.com, tabnine.com/pricing and tabnine.com/blog redirect targets observed 2026-10-06; Visual Studio Marketplace (TabNine.tabnine-vscode, Version 3.335.0, '9,643,109 installs') and docs.tabnine.com, both fetched 2026-10-06; app.tabnine.com HTTP 503 on 2026-10-06",
      date: "2026-07-30",
    },
    {
      description: "Completions in TypeScript projects sometimes suggest patterns from outdated library versions",
      source: "GitHub Issues",
      date: "2026-02",
    },
    {
      description: "JetBrains plugin occasionally causes IDE slowdowns, especially in larger Java projects",
      source: "JetBrains Marketplace Reviews",
      date: "2026-01",
    },
  ],
  bestFor: "Existing Tabnine enterprise customers and Tricentis shops that want the Enterprise Context Engine inside their QA pipeline. Not a tool to adopt fresh in October 2026.",
  notFor: "Anyone choosing an AI coding assistant today -- Copilot, Cursor, Claude Code and Windsurf are the live options, and Tabnine's standalone plans no longer have a vendor page.",
  verdict: "Tabnine carved out a niche with privacy and on-premise deployment, and that niche is exactly what Tricentis bought on July 30, 2026: the Enterprise Context Engine is now a component of a software-testing platform, the marketing site redirects to Tricentis, and the public price list is gone. The VS Code extension and docs still work, so existing users are not cut off today, but there is no standalone roadmap and no statement about the IDE product's future. For regulated enterprises already on Tabnine, talk to Tricentis about continuity. For everyone else, this is a legacy pick -- GitHub Copilot, Cursor, Claude Code and Windsurf were already ahead before the deal, and nothing in the acquisition narrows that gap.",

  lastReviewedDate: "2026-10-06",
  dataSources: [
    { name: "Tricentis: Tricentis Acquires Tabnine to Further Scale Agentic Quality Engineering for the Enterprise (2026-07-30)", url: "https://www.tricentis.com/news/tricentis-acquires-tabnine/", dateAccessed: "2026-10-06" },
    { name: "Visual Studio Marketplace: Tabnine extension still listed (v3.335.0, ~9.64M installs, checked 2026-10-06)", url: "https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode", dateAccessed: "2026-10-06" },
    { name: "Tabnine docs (still live 2026-10-06); tabnine.com and /pricing redirect to Tricentis", url: "https://docs.tabnine.com/main", dateAccessed: "2026-10-06" },
    { name: "Tabnine official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "GitHub Issues", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://www.tabnine.com",
  status: "active",
  poweredBy: "Tabnine's own models (local + cloud)",
  metaTitle: "Tabnine Review 2026: Acquired by Tricentis (July 2026) -- What Happens to the AI Code Assistant",
  metaDescription: "Tabnine review. Tricentis acquired Tabnine on July 30, 2026 and is folding its Enterprise Context Engine into a software-testing platform; tabnine.com now redirects to Tricentis and the $9 Dev plan has no public page. VS Code extension and docs still live. Scores, status, alternatives.",
};
