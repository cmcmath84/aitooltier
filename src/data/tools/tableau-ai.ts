import { ToolReview } from "@/lib/types";

export const tableauAi: ToolReview = {
  slug: "tableau-ai",
  name: "Tableau AI",
  tagline: "**Tableau's AI now sits in the premium tier: Tableau Agent and Tableau Knowledge come only with Cloud+ Edition or the Tableau+ Bundle (contact sales), while Standard ($15/$42/$75 per Viewer/Explorer/Creator) and Enterprise ($35/$70/$115) include Pulse but no agent.** Salesforce's analytics powerhouse now with AI-driven insights, natural language queries, and predictive modeling",
  category: "ai-data-analytics",
  url: "https://tableau.com",

  scores: {
    easeOfUse: 5,
    outputQuality: 9,
    value: 5,
    features: 9,
    overall: 7.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Standard Edition -- Viewer / Explorer / Creator",
      price: "$15 / $42 / $75",
      period: "user/month, billed annually",
      features: [
        "Tableau Cloud with up to 3 sites, Tableau Pulse, Tableau MCP",
        "Creators get Tableau Desktop and Prep Builder",
        "Tableau Agent (the AI assistant) is NOT included in Standard",
      ],
    },
    {
      plan: "Enterprise Edition -- Viewer / Explorer / Creator",
      price: "$35 / $70 / $115",
      period: "user/month, billed annually",
      features: [
        "Everything in Standard plus Data Management and Advanced Management",
        "Up to 10 sites, eLearning",
        "Tableau Agent still NOT included",
      ],
    },
    {
      plan: "Cloud+ Edition / Tableau+ Bundle",
      price: "Contact sales",
      features: [
        "Tableau Agent in Pulse, Authoring, Prep, Catalog and dashboards; Tableau Knowledge graphs",
        "Premier Success, up to 50 sites, Release Preview sites",
        "Tableau+ Bundle adds Tableau Next (agentic analytics on Agentforce 360) and Data 360 with 250K credits",
      ],
    },
    {
      plan: "Tableau Next",
      price: "From $40",
      period: "user/month, billed annually",
      features: ["Tableau Agent, Tableau Semantics, native Slack integration", "Sold standalone or in the Tableau+ Bundle"],
    },
  ],

  pros: [
    "Visualization quality is still best-in-class -- nothing else produces dashboards this polished and interactive",
    "Tableau Pulse (metrics and digests) ships in every edition, including Standard, and Tableau MCP lets outside AI agents query Tableau content without the premium tier",
    "With Cloud+ or the Tableau+ Bundle, Tableau Agent works across authoring, Prep, Catalog, dashboards and Pulse, grounded in Tableau Knowledge graphs of your metadata and semantics",
    "Handles massive datasets without breaking a sweat -- this is enterprise-grade infrastructure",
  ],
  cons: [
    "The learning curve is steep even with AI assistance -- this is not a tool you pick up in an afternoon",
    "Pricing is per-user and adds up quickly for teams -- a 10-person team on Creator is $750/month",
    "The AI is gated to the top tier: Tableau Agent is only in Cloud+ Edition or the Tableau+ Bundle, both contact-sales, so Standard ($75 Creator) and Enterprise ($115 Creator) buyers pay full price for analytics with no AI assistant",
    "Three overlapping AI-era products (Tableau Cloud editions, Tableau Next on Agentforce 360, and the Tableau+ Bundle) make it hard to tell what you are buying without a sales call",
  ],
  knownIssues: [
    {
      description: "PRICING AND PACKAGING REFRESH -- AI MOVED TO CLOUD+ AND TABLEAU+; ENTERPRISE EDITION PRICED; ASK DATA AND EINSTEIN DISCOVERY NO LONGER ON THE PRICING PAGES (tableau.com/pricing and /pricing/cloud checked 2026-10-12, vendor-primary; this page was last reviewed 2026-03-27): **Standard Edition: Creator $75, Explorer $42, Viewer $15 per user/month billed annually** (unchanged from this page) with Tableau Cloud (3 sites), Pulse, Desktop, Prep Builder and Tableau MCP. **Enterprise Edition: Creator $115, Explorer $70, Viewer $35**, adding Data Management, Advanced Management, eLearning and 10 sites. **Cloud+ Edition (contact sales)** is where the AI lives: Tableau Knowledge, **Tableau Agent in Pulse, Authoring, Prep, Catalog and dashboards**, Premier Success and 50 sites. **Tableau+ Bundle (contact sales)** adds Tableau Next and Data 360 (250K credits). **Tableau Next** starts at $40 per user/month billed annually. No monthly plans exist; every deployment needs at least one Creator; capacity-based Viewer blocks are available on Cloud, compute-based (8-core) licensing on Server. **Corrections on this page:** the old pricing rows listed 'Ask Data' and 'Einstein Discovery' as included features -- neither appears anywhere on the current Tableau pricing pages, which name Tableau Agent and Pulse instead, so those claims were removed from pricing, pros and cons rather than carried forward unverified. Scores unchanged pending a hands-on check of Tableau Agent.",
      source: "Tableau pricing (tableau.com/pricing -- edition cards for Cloud, Server and Next) and Tableau Cloud pricing (tableau.com/pricing/cloud -- role-based prices, edition feature table, FAQ) -- fetched 2026-10-12 via Firecrawl (curl and WebFetch are blocked by Akamai)",
      date: "2026-10-12",
    },
    {
      description:
        "Ask Data sometimes generates incorrect visualizations when field names are similar (e.g., 'Revenue' vs 'Net Revenue')",
      source: "Tableau Community Forum",
      date: "2026-03",
    },
    {
      description:
        "Einstein Discovery predictions can be misleading when training data has significant class imbalance",
      source: "Reddit r/tableau",
      date: "2026-02",
    },
  ],
  bestFor:
    "Enterprise analytics teams who need production-grade dashboards and predictive insights at scale.",
  notFor:
    "Small teams or individuals looking for a quick, affordable way to analyze data with AI.",
  verdict:
    "Tableau with AI is the most powerful analytics tool you can buy -- and it knows it, based on the pricing. The AI features are genuinely good, especially for predictive modeling and natural language exploration. But you're paying enterprise prices, dealing with enterprise complexity, and navigating Salesforce's increasingly tangled product lineup. If your org already has Tableau, the AI additions are worth enabling. If you're starting from scratch, make sure you actually need this level of power.",

  lastReviewedDate: "2026-10-12",
  dataSources: [
    { name: "Tableau: Pricing -- Cloud, Server and Next editions", url: "https://www.tableau.com/pricing", dateAccessed: "2026-10-12" },
    { name: "Tableau: Tableau Cloud pricing -- role-based prices per edition, feature table, FAQ", url: "https://www.tableau.com/pricing/cloud", dateAccessed: "2026-10-12" },
    { name: "Tableau official site", dateAccessed: "2026-03-27" },
    { name: "Tableau Community Forum", dateAccessed: "2026-03-27" },
    { name: "Reddit r/tableau", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://tableau.com",
  status: "active",
  metaTitle: "Tableau AI Review 2026: Tableau Agent Needs Cloud+ -- Standard $75 and Enterprise $115 Creator Pricing",
  metaDescription: "Tableau AI review. Tableau Agent and Tableau Knowledge now come only with Cloud+ Edition or the Tableau+ Bundle (contact sales). Standard costs $75/$42/$15 per Creator/Explorer/Viewer a month and Enterprise $115/$70/$35, billed annually, with Pulse but no agent; Tableau Next starts at $40. Best-in-class dashboards, steep learning curve. Pricing checked October 2026.",
};
