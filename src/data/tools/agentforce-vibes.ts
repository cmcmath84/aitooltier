import { ToolReview } from "@/lib/types";

export const agentforceVibes: ToolReview = {
  slug: "agentforce-vibes",
  name: "Agentforce Vibes 2.0",
  tagline: "**Headless 360 was rebranded to AIforce on Sept 4, 2026, and Developer Edition orgs now get a free daily Vibes allowance (50 requests or 1 million tokens a day on Claude Sonnet 4.6) instead of a lifetime cap.** Salesforce's AI development environment for building on the platform -- org-aware, multi-model (Claude Sonnet and GPT-5 families), shipped as an IDE and VS Code extension -- paired with AIforce (formerly Headless 360), which exposes Salesforce capabilities as API, MCP tool, or CLI command for external coding agents. Vibes 2.0 was announced at TDX 2026 on 2026-04-15",
  category: "ai-agent-orchestration",
  url: "https://www.salesforce.com/agentforce/",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 6,
    features: 9,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Developer Edition (free daily allocation)",
      price: "$0",
      features: [
        "50 requests per day or 1 million tokens per day, whichever comes first; resets every 24 hours",
        "Powered by Claude Sonnet 4.6",
        "Allocation is per org, not per user",
        "Developer Edition orgs are not for production use",
      ],
    },
    {
      plan: "Flex Credits (metered)",
      price: "$500",
      period: "per 100k Flex Credits (USD list)",
      features: [
        "Claude Sonnet 4.6 (default), GPT-5, GPT-5.4, Claude Opus 4.5 / 4.6 / 4.7 / 4.8",
        "Billed per 2,000-token increment by Prompt Usage Type (Starter, Basic, Standard, Advanced); Opus uses Advanced prompts",
        "Same credits as the rest of Agentforce; tracked in Digital Wallet",
      ],
    },
    {
      plan: "Unmetered (Platform Developer and Admin AI User permission set licence)",
      price: "Contact sales",
      features: [
        "Flat-fee, per-user licence -- price not published",
        "GPT-5 included (contractual fair use)",
        "Claude Sonnet 4.6 as premium model: 2,500 requests or 36 million tokens per user per org, resetting every 30 days",
        "After the premium limit, switch to Flex Credits or the included model",
      ],
    },
  ],

  pros: [
    "Every Salesforce capability is now addressable as API / MCP / CLI -- Claude Code, Cursor, and Codex can operate Salesforce objects directly without bespoke integrations. This is the big unlock: you write agents once and they run across Sales Cloud, Service Cloud, Marketing Cloud",
    "Multi-model support (Claude Sonnet, Claude Opus and GPT-5 families in a model picker) means you're not locked into a single vendor for agent reasoning -- differs sharply from OpenAI-only competitors like Microsoft's Copilot Studio",
    "Works with the coding agents teams already use: Salesforce says its MCP tools and coding skills run in Claude Code, Cursor, Codex and Windsurf, so Vibes is one option rather than a forced switch",
    "TDX 2026 launch (2026-04-15) shipped more than 60 new MCP tools and 30+ preconfigured coding skills in one drop, and Developer Edition orgs get a free daily allowance to try it",
  ],
  cons: [
    "Only useful if you're already deep in Salesforce -- there's no standalone use case. For non-Salesforce shops, you'd pick CrewAI / LangGraph / Paperclip instead",
    "Production pricing is hard to predict -- the unmetered per-user licence has no published price, and metered use burns Flex Credits ($500 per 100k) in 2,000-token increments, with Opus models on the most expensive prompt type",
    "Free use is limited to Developer Edition orgs, which are not for production, and the daily 50-request / 1M-token pool is shared by everyone in the org",
    "Most mid-market buyers will not have the SFDC muscle to take advantage of the new MCP tools and skills -- the product is aimed at enterprises with dedicated Salesforce teams",
  ],
  knownIssues: [
    {
      description:
        "CORRECTION (2026-11-11): several claims on this page traced only to third-party coverage and do not match Salesforce's own pages. (1) Free tier: the page said Developer Editions get 110 requests / 1.5M tokens on Claude Sonnet 4.5 as a LIFETIME limit. Salesforce's developer guide now states Developer Edition orgs get **50 requests per day or 1 million tokens per day on Claude Sonnet 4.6, resetting every 24 hours**, per org -- 'No trial period, no expiration'. (2) The 'open agent harness' for CrewAI / LangGraph / Paperclip and the '100+ new agent tools' figure appear on no Salesforce page we fetched; the launch post says 'More than 60 new MCP tools and 30+ preconfigured coding skills'. Those pros were rewritten. (3) Vibes is described by Salesforce as 'an AI development environment' (an IDE and VS Code extension), not a general agent-orchestration platform. (4) Model list updated from the billing doc: Claude Sonnet 4.6 default, GPT-5, GPT-5.4, Claude Opus 4.5 through 4.8",
      source: "Salesforce Developers: Agentforce Vibes Developer Guide (afv-free-tier, afv-admin-billing), Salesforce newsroom Headless 360 announcement (2026-04-15), all fetched 2026-11-11",
      date: "2026-11-11",
    },
    {
      description:
        "HEADLESS 360 RENAMED AIFORCE (2026-09-04): Salesforce's release notes state 'As of September 4, 2026, Headless 360 has been rebranded to AIforce ... While the name is new, the functionality and content remains unchanged.' AIforce is the umbrella for Agentforce Vibes, Salesforce Multi-Framework and the Salesforce MCP Servers. September release notes also added Agentforce Commerce Vibes for B2C Commerce and an Agentic Development dashboard in DevOps Center (developer preview) for tracking Vibes usage",
      source: "Salesforce Help: AIforce release notes (help.salesforce.com release-notes.rn_headless360, Winter 27)",
      date: "2026-09-04",
    },
    {
      description:
        "VIBES 4.xx PRE-RELEASE (2026-06-06): the Vibes VS Code extension changelog announced the first public pre-release of version 4.xx -- redesigned multi-tab chat with conversation history and reasoning visibility, a new Plan Mode, tool execution with approvals and native VS Code diff review, expanded MCP support including platform-hosted MCP servers, built-in Skills and Rules, live previews for Lightning Web Components and React UIs, and a unified Claude / GPT model picker",
      source: "Salesforce Developers: Agentforce Vibes change log (developer.salesforce.com/docs/platform/agentforcevibes/guide/afv-changelog.html)",
      date: "2026-06-06",
    },
    {
      description:
        "SUPERSEDED IN PART -- see the 2026-11-11 correction above; the Developer Edition limits quoted here are no longer what Salesforce documents. BILLING CHANGE -- VIBES NO LONGER FREE (effective 2026-06-01): agentic chat in Vibes now requires Flex Credits or the Unmetered Platform Developer and Admin AI User Permission Set License for non-Developer Edition orgs. Developer Editions keep limited free access -- 110 requests / 1.5M tokens on Claude Sonnet 4.5 as a LIFETIME org limit (no monthly refresh), with no fallback model (previously 50 requests / 1M tokens on GPT-5 with GPT-5 mini fallback). GPT-5 became a selectable model the same day. Budget accordingly before adopting for prototyping",
      source: "SalesforceBen (2026-05-15), Salesforce developer billing docs",
      date: "2026-06-01",
    },
    {
      description:
        "Launched 2026-04-15 at Salesforce TDX 2026 as part of the broader Headless 360 announcement. Vibes 2.0 specifically is the multi-model, org-aware iteration of the earlier Agentforce Vibes; the 2.0 label signals this is a significant rework rather than an incremental update",
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
        "UNVERIFIED (flagged 2026-11-11): launch coverage described an 'Open Agent Harness' for third-party agent frameworks with unclear commercial terms. No Salesforce page fetched on 2026-11-11 uses that term; what Salesforce documents is MCP tools and coding skills usable from external coding agents (Claude Code, Cursor, Codex, Windsurf). Treat harness licensing claims as unconfirmed",
      source: "TDX 2026 session recordings, SalesforceBen",
      date: "2026-04",
    },
  ],
  bestFor:
    "Enterprise Salesforce shops with existing Agentforce deployments and mature agent platform teams. Also firms where Claude or GPT-5 are already approved for enterprise use -- Vibes 2.0 inherits model selection flexibility.",
  notFor:
    "Anyone without a Salesforce org. Also not a fit for mid-market buyers who don't have dedicated Salesforce admins or integration engineers -- the tools are powerful but require skill to wire together.",
  verdict:
    "Agentforce Vibes 2.0 + Headless 360 (renamed AIforce in September 2026) is one of the more strategically consequential enterprise AI releases of 2026. The deeper story isn't the agent -- it's that Salesforce now exposes every piece of its platform as API/MCP/CLI, which means external agents (Claude Code, Cursor, Codex) can operate the world's biggest CRM directly. For enterprise Salesforce buyers, this is the new baseline. For everyone else, it's mostly a signal that the agent-driven-enterprise-software era has started arriving in enterprise SaaS, not a product you can buy today.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Salesforce Developers: Build Every Day for Free with Agentforce Vibes", url: "https://developer.salesforce.com/docs/platform/agentforcevibes/guide/afv-free-tier.html", dateAccessed: "2026-11-11" },
    { name: "Salesforce Developers: Usage and Billing for Agentforce Vibes", url: "https://developer.salesforce.com/docs/platform/agentforcevibes/guide/afv-admin-billing.html", dateAccessed: "2026-11-11" },
    { name: "Salesforce Developers: Agentforce Vibes change log", url: "https://developer.salesforce.com/docs/platform/agentforcevibes/guide/afv-changelog.html", dateAccessed: "2026-11-11" },
    { name: "Salesforce: Agentforce Vibes pricing", url: "https://www.salesforce.com/agentforce/developers/vibe-coding/pricing/", dateAccessed: "2026-11-11" },
    { name: "Salesforce Help: AIforce release notes (Headless 360 rebrand, 2026-09-04)", url: "https://help.salesforce.com/s/articleView?id=release-notes.rn_headless360.htm&language=en&release=264&type=5", dateAccessed: "2026-11-11" },
    { name: "Salesforce newsroom: Introducing Salesforce Headless 360 (2026-04-15)", url: "https://www.salesforce.com/news/stories/salesforce-headless-360-announcement/", dateAccessed: "2026-11-11" },
    { name: "Salesforce blog: TDX 2026 Roundup, Agentforce Edition (2026-04-15)", url: "https://www.salesforce.com/blog/tdx-2026-roundup-agentforce-edition/", dateAccessed: "2026-11-11" },
    { name: "SalesforceBen: Agentforce Vibes no longer free for use", url: "https://www.salesforceben.com/agentforce-vibes-no-longer-free-for-use/", dateAccessed: "2026-07-05" },
    { name: "VentureBeat: Salesforce Headless 360 launch", url: "https://venturebeat.com/technology/salesforce-launches-headless-360-to-turn-its-entire-platform-into-infrastructure-for-ai-agents", dateAccessed: "2026-04-21" },
    { name: "The Register: Salesforce Headless 360", url: "https://www.theregister.com/2026/04/15/salesforce_headless_360/", dateAccessed: "2026-04-21" },
    { name: "SalesforceBen: TDX 2026 keynote coverage", url: "https://www.salesforceben.com/salesforce-headless-360-and-agentforce-vibes-2-0-revealed-at-tdx-2026/", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://www.salesforce.com/agentforce/",
  status: "active",
  metaTitle: "Agentforce Vibes 2.0 Review 2026: Salesforce AI Dev Tool",
  metaDescription:
    "Agentforce Vibes 2.0 review. Salesforce's multi-model AI dev environment plus AIforce (ex-Headless 360). Free daily Developer Edition allowance.",
};
