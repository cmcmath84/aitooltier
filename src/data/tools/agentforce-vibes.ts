import { ToolReview } from "@/lib/types";

export const agentforceVibes: ToolReview = {
  slug: "agentforce-vibes",
  name: "Agentforce Vibes 2.0",
  tagline: "Salesforce's multi-model agent platform (Claude Sonnet + GPT-5 + open harness), paired with Headless 360 that turns every Salesforce capability into an API/MCP/CLI for external agents. Launched at TDX 2026 on 2026-04-15",
  category: "ai-agent-orchestration",
  url: "https://www.salesforce.com/agentforce/",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 6,
    features: 9,
    overall: 7.3,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Bundled with Salesforce",
      price: "Contact sales",
      features: [
        "Requires existing Salesforce org",
        "Usage-based pricing on agent actions + model calls",
        "Volume discounts at enterprise scale",
      ],
    },
    {
      plan: "Agentforce Vibes 2.0 (GA April 2026)",
      price: "Included in Salesforce Agentforce license",
      features: [
        "Multi-model: Claude Sonnet + GPT-5 routing",
        "Open agent harness for third-party agent frameworks",
        "Pre-built connectors to 100+ Salesforce tools via MCP",
        "Ship with Agentforce or via Headless 360 API",
      ],
    },
  ],

  pros: [
    "Every Salesforce capability is now addressable as API / MCP / CLI -- Claude Code, Cursor, and Codex can operate Salesforce objects directly without bespoke integrations. This is the big unlock: you write agents once and they run across Sales Cloud, Service Cloud, Marketing Cloud",
    "Multi-model routing (Claude Sonnet + GPT-5) with automatic fallback means you're not locked into a single vendor for agent reasoning -- differs sharply from OpenAI-only competitors like Microsoft's Copilot Studio",
    "Open agent harness accepts third-party agent frameworks (CrewAI, LangGraph, Paperclip), so existing agent investments plug in rather than being replaced. Large existing Salesforce shops don't need a full rip-and-replace",
    "TDX 2026 launch (2026-04-15) included 100+ new agent tools in one drop -- unusual breadth for an initial GA, suggests Salesforce has been building this for 18+ months and finally felt ready to ship",
  ],
  cons: [
    "Only useful if you're already deep in Salesforce -- there's no standalone use case. For non-Salesforce shops, you'd pick CrewAI / LangGraph / Paperclip instead",
    "Pricing is gated behind sales calls -- no self-serve tier means you cannot evaluate without commercial commitment. Cost at scale is reported to be real",
    "Multi-model routing economics are unclear: each Claude Sonnet or GPT-5 call hits your model-API budget on top of Salesforce license fees. Budget modeling for agentic workflows is still early",
    "Most mid-market buyers will not have the SFDC muscle to take advantage of the 100+ new tools -- the product is aimed at enterprises with dedicated Salesforce teams",
  ],
  knownIssues: [
    {
      description:
        "Launched 2026-04-15 at Salesforce TDX 2026 as part of the broader Headless 360 announcement. Vibes 2.0 specifically is the multi-model + open-harness iteration of the earlier Agentforce Vibes; the 2.0 label signals this is a significant rework rather than an incremental update",
      source: "VentureBeat, SalesforceBen (TDX 2026 coverage)",
      date: "2026-04",
    },
    {
      description:
        "Headless 360 exposes every Salesforce capability as an API / MCP server / CLI tool. This is the platform shift that matters most long-term -- it means Claude Code, Cursor, Codex, and any MCP-compatible agent can drive Salesforce directly. Implications for Salesforce consultants are large: agents can now do work that previously required click-ops admins",
      source: "VentureBeat, The Register",
      date: "2026-04",
    },
    {
      description:
        "Commercial terms for third-party agent frameworks using the Open Agent Harness are still being clarified -- Salesforce positions this as 'bring your own agent' but the licensing details around using external agents inside a Salesforce org are thin at launch",
      source: "TDX 2026 session recordings, SalesforceBen",
      date: "2026-04",
    },
  ],
  bestFor:
    "Enterprise Salesforce shops with existing Agentforce deployments and mature agent platform teams. Also firms where Claude or GPT-5 are already approved for enterprise use -- Vibes 2.0 inherits model selection flexibility.",
  notFor:
    "Anyone without a Salesforce org. Also not a fit for mid-market buyers who don't have dedicated Salesforce admins or integration engineers -- the tools are powerful but require skill to wire together.",
  verdict:
    "Agentforce Vibes 2.0 + Headless 360 is one of the more strategically consequential enterprise AI releases of 2026. The deeper story isn't the agent -- it's that Salesforce now exposes every piece of its platform as API/MCP/CLI, which means external agents (Claude Code, Cursor, Codex) can operate the world's biggest CRM directly. For enterprise Salesforce buyers, this is the new baseline. For everyone else, it's mostly a signal that the agent-driven-enterprise-software era has started arriving in enterprise SaaS, not a product you can buy today.",

  lastReviewedDate: "2026-04-21",
  dataSources: [
    { name: "VentureBeat: Salesforce Headless 360 launch", url: "https://venturebeat.com/technology/salesforce-launches-headless-360-to-turn-its-entire-platform-into-infrastructure-for-ai-agents", dateAccessed: "2026-04-21" },
    { name: "The Register: Salesforce Headless 360", url: "https://www.theregister.com/2026/04/15/salesforce_headless_360/", dateAccessed: "2026-04-21" },
    { name: "SalesforceBen: TDX 2026 keynote coverage", url: "https://www.salesforceben.com/salesforce-headless-360-and-agentforce-vibes-2-0-revealed-at-tdx-2026/", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://www.salesforce.com/agentforce/",
  status: "active",
  metaTitle: "Agentforce Vibes 2.0 Review 2026: Salesforce Multi-Model Agent Platform",
  metaDescription:
    "Agentforce Vibes 2.0 review. Salesforce multi-model agent (Claude + GPT-5) + Headless 360 turns all SFDC capabilities into APIs/MCP/CLI. TDX 2026 launch.",
};
