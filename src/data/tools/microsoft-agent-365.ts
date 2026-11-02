import { ToolReview } from "@/lib/types";

export const microsoftAgent365: ToolReview = {
  slug: "microsoft-agent-365",
  name: "Microsoft Agent 365",
  tagline:
    "Microsoft's enterprise control plane for AI agents -- GA 2026-05-01, with nearly 50 million agents registered by 2026-09-30. Local-agent registry (public preview) plus Purview Audit for GitHub Copilot CLI, Claude Code, OpenAI Codex, and OpenClaw; registry sync GA for Amazon Bedrock, Google Cloud, Anthropic Claude, Databricks Genie, and Salesforce Agentforce. $15/user/month paid yearly, or included in Microsoft 365 E7 ($99/user/month)",
  category: "ai-agent-orchestration",
  url: "https://learn.microsoft.com/en-us/microsoft-agent-365/overview",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 7,
    features: 9,
    overall: 7.5,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Standalone",
      price: "$15",
      period: "user/month, paid yearly",
      features: [
        "GA 2026-05-01; 'Agent 365 $15.00 user/month, paid yearly (Annual commitment)'",
        "Unified agent registry for Microsoft-native and third-party agents, including local agents (public preview)",
        "Identity (Microsoft Entra), security posture and threat protection (Microsoft Defender), data security and compliance (Microsoft Purview)",
        "Registry sync GA: Amazon Bedrock, Google Cloud Gemini Enterprise Agent Platform, Anthropic Claude, Databricks Genie, Salesforce Agentforce (Snowflake, Oracle OCI, UiPath 'to follow soon')",
      ],
    },
    {
      plan: "Microsoft 365 E7 (includes Agent 365)",
      price: "$99",
      period: "user/month, paid yearly",
      features: [
        "Microsoft's product page: 'Microsoft 365 E7: The Frontier Suite includes Agent 365'",
        "Microsoft 365 E7 (No Teams): $90.45 user/month, paid yearly",
        "Aimed at organizations already on the Microsoft enterprise stack",
        "Same Agent 365 capability surface as standalone",
      ],
    },
  ],

  pros: [
    "Shadow AI discovery is the big one -- local agents now appear in the Agent 365 registry (public preview since the June 2026 update) with publisher, detected device count, and last-scanned date, and Microsoft Purview Audit covers GitHub Copilot CLI, Claude Code, OpenAI Codex, and OpenClaw. The first credible IT answer to 'what AI is actually running in my org right now?'",
    "Registry sync goes well beyond Microsoft turf -- generally available for Amazon Bedrock, Google Cloud Gemini Enterprise Agent Platform, Anthropic Claude, Databricks Genie, and Salesforce Agentforce, with Snowflake, Oracle OCI, and UiPath to follow. Rare in Microsoft enterprise tooling and a real differentiator vs single-cloud competitors",
    "Policy-based runtime controls mean IT can block malicious or out-of-policy agent behavior in real time, not just after the fact in a SIEM. Pairs the discovery side with enforcement",
    "Central tools governance: Tools management (GA in the September 2026 update) applies tenant-wide allow or block controls across MCP servers, plugins, skills, and connectors, and cost management for usage-based AI spend is included with Microsoft cloud subscriptions",
    "40+ ecosystem partner agents pre-integrated at GA: Zendesk, n8n, Kore.ai, plus Copilot Studio agents and the new Windows 365 for Agents secure environment (public preview). Microsoft reports nearly 50 million agents registered across tens of thousands of organizations by September 2026",
  ],
  cons: [
    "$15/user/month (paid yearly) is meaningful at scale -- a 5,000-seat company is $900,000/year on the standalone tier before any Microsoft 365 E7 ($99/user/month) conversion math",
    "Locked to Microsoft 365 / Azure AD identity model -- if your org isn't already on the Microsoft enterprise stack, the integration cost gets real",
    "Enterprise-only positioning means there's no SMB or self-serve tier, even though small teams increasingly need agent governance too. Underserved gap below 250 users",
    "Many headline capabilities are still public preview as of the September 2026 update -- the local-agent registry, AI mode for the registry, Agent Management Rules, and custom MCP server approval -- alongside Windows 365 for Agents. Plan rollout in waves",
  ],
  knownIssues: [
    {
      description:
        "SEPTEMBER 2026 UPDATE (posted 2026-09-30): 'Since launching Agent 365 in May 2026, nearly 50 million agents have been registered across tens of thousands of organizations.' 'Now generally available, Tools management in Agent 365 expands the centralized governance experience beyond MCP servers to include plugins, skills, and connectors.' Public previews: AI mode (natural-language registry search), Agent Management Rules (automatic blocking or policy actions), and custom MCP servers registered via the Agent 365 CLI and submitted for admin approval. The Azure API Management integration began rolling out September 30. Cost management (FinOps for AI) 'is included with Microsoft cloud subscriptions'",
      source: "Microsoft Tech Community: What's new in Agent 365 - September 2026",
      date: "2026-09-30",
    },
    {
      description:
        "JULY 2026 UPDATE (posted 2026-08-04): registry sync is GA -- 'Supported platforms at general availability include Amazon Bedrock, Google Cloud Gemini Enterprise Agent Platform, Anthropic Claude, Databricks Genie, Salesforce Agentforce. Additionally, Snowflake, Oracle OCI, and UIPath to follow soon.' Agents sync on a daily or weekly cadence, and where platform APIs allow, admins can take governance actions directly. The update also added partner risk signals from Cyera, Darktrace, and Zenity and multi-tenant management",
      source: "Microsoft Tech Community: What's new in Agent 365 - July 2026",
      date: "2026-08-04",
    },
    {
      description:
        "JUNE 2026 UPDATE (posted 2026-07-08): the GA-time promise to expand beyond OpenClaw is delivered. 'With local agents now in the Agent 365 registry (public preview), IT and security teams gain a unified view of shadow local agents detected across the environment', showing publisher, detected device count, and last-scanned date per agent. Microsoft Purview Audit 'introduces support for emerging local and developer-focused agents, including GitHub Copilot CLI, Claude Code, OpenAI Codex, and OpenClaw', and Defender and Purview protections for local agents are in public preview",
      source: "Microsoft Tech Community: What's new in Agent 365 - June 2026",
      date: "2026-07-08",
    },
    {
      description:
        "Microsoft Agent 365 went GA on 2026-05-01 with Shadow AI Discovery covering 'local AI agents running on Windows devices, starting with OpenClaw agents and expanding soon to other widely used agents like GitHub Copilot CLI and Claude Code' (that expansion arrived in the June 2026 update -- see above). Multi-cloud registry sync shipped at GA for AWS Bedrock + Google Cloud connections, not just Azure",
      source: "Microsoft Security Blog (microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/), Microsoft Learn",
      date: "2026-05-01",
    },
    {
      description:
        "Pairs with the Anthropic OpenClaw lockout (2026-04-04, enforced 4/10) -- enterprises that had OpenClaw running unmonitored against Claude Pro/Max are now both billed differently AND visible to Microsoft Agent 365's Shadow AI Discovery. The compliance-and-cost story for unmanaged agentic stacks just changed materially in the same window",
      source: "Microsoft Security Blog 2026-05-01, TechCrunch (Anthropic ban 2026-04-10)",
      date: "2026-05-01",
    },
    {
      description:
        "Windows 365 for Agents is in public preview at GA -- it provides a secure cloud-VM environment specifically for agents to run in, isolated from human user sessions. Useful for high-risk autonomous workloads but expect preview-tier limits and rough edges through 2026-Q3",
      source: "Microsoft Security Blog",
      date: "2026-05-01",
    },
  ],
  bestFor:
    "Enterprise IT and security teams running mixed-AI environments who need a single pane of glass over local agents (GitHub Copilot CLI, Claude Code, OpenAI Codex, OpenClaw), Copilot Studio agents, and cloud agents synced from Amazon Bedrock, Google Cloud, Anthropic Claude, Databricks, and Salesforce. Especially valuable for orgs already on or moving to Microsoft 365 E7, which includes Agent 365 and removes the per-seat math.",
  notFor:
    "Solo developers, prosumers, and SMBs under ~250 users -- there's no self-serve tier and the per-seat pricing assumes enterprise-scale governance budget. Also not for orgs that have explicitly avoided Microsoft 365 / Azure AD: the identity-model lock-in is real.",
  verdict:
    "Microsoft Agent 365's GA on 2026-05-01 was the first credible enterprise answer to 'what AI agents are actually running across my org, who's using them, and can I block one when it goes off the rails' -- and the six months since have filled in the promises. Local agents are now in the registry (public preview) with Purview Audit coverage for GitHub Copilot CLI, Claude Code, OpenAI Codex, and OpenClaw; registry sync is GA across Amazon Bedrock, Google Cloud, Anthropic Claude, Databricks Genie, and Salesforce Agentforce; and Tools management governs MCP servers, plugins, skills, and connectors from one pane. Microsoft says nearly 50 million agents were registered by September. The cost story is real ($15/user/month paid yearly is $900K/year at 5,000 seats), and much of the newest surface is still preview, but for any enterprise that has been quietly accumulating shadow AI agents, this is the cheapest path back to compliance. If you're on Microsoft 365 E7 ($99/user/month), Agent 365 is already included.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    {
      name: "Microsoft Agent 365 product and pricing page",
      url: "https://www.microsoft.com/en-us/microsoft-agent-365",
      dateAccessed: "2026-11-02",
    },
    {
      name: "Microsoft Security Blog: Agent 365 GA (2026-05-01)",
      url: "https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/",
      dateAccessed: "2026-11-02",
    },
    {
      name: "Microsoft Learn: Agent 365 overview",
      url: "https://learn.microsoft.com/en-us/microsoft-agent-365/overview",
      dateAccessed: "2026-11-02",
    },
    {
      name: "Microsoft Tech Community: What's new in Agent 365 - September 2026",
      url: "https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-agent-365---september-2026/4560803",
      dateAccessed: "2026-11-02",
    },
    {
      name: "Microsoft Tech Community: What's new in Agent 365 - July 2026",
      url: "https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-agent-365-%E2%80%93-july-2026/4543654",
      dateAccessed: "2026-11-02",
    },
    {
      name: "Microsoft Tech Community: What's new in Agent 365 - June 2026",
      url: "https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-agent-365-%E2%80%93-june-2026/4535107",
      dateAccessed: "2026-11-02",
    },
    {
      name: "Microsoft Tech Community: Agent 365 May 2026 update",
      url: "https://techcommunity.microsoft.com/blog/agent-365-blog/what-s-new-in-agent-365-may-2026/4516340",
      dateAccessed: "2026-05-01",
    },
  ],
  affiliateUrl: "https://learn.microsoft.com/en-us/microsoft-agent-365/overview",
  status: "active",
  metaTitle: "Microsoft Agent 365 Review 2026: Enterprise Agent Governance + Shadow AI Discovery",
  metaDescription:
    "Microsoft Agent 365 review. GA 2026-05-01. Enterprise control plane for AI agents -- local-agent registry and Purview Audit for Copilot CLI, Claude Code, Codex, OpenClaw; registry sync for Bedrock, Google Cloud, Claude, Databricks, Salesforce. $15/user/mo or M365 E7.",
};
