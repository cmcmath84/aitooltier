import { ToolReview } from "@/lib/types";

export const microsoftAgent365: ToolReview = {
  slug: "microsoft-agent-365",
  name: "Microsoft Agent 365",
  tagline:
    "Microsoft's enterprise governance + observability platform for AI agents -- went GA 2026-05-01. Discovers + inventories + secures local agents (OpenClaw / GitHub Copilot CLI / Claude Code) AND cloud agents across AWS Bedrock + Google Cloud + Azure. $15/user/month or bundled in Microsoft 365 E7",
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
      period: "user/month",
      features: [
        "GA 2026-05-01",
        "Cross-platform agent discovery + inventory",
        "Identity, observability, policy controls, runtime blocking",
        "Multi-cloud registry sync (AWS Bedrock + Google Cloud + Azure)",
      ],
    },
    {
      plan: "Microsoft 365 E7 (bundled)",
      price: "Bundled",
      features: [
        "Bundled into M365 E7 enterprise plan",
        "Aimed at organizations already on the Microsoft enterprise stack",
        "Same Agent 365 capability surface as standalone",
      ],
    },
  ],

  pros: [
    "Shadow AI Discovery is the big one -- inventories local AI agents on Windows devices, starting with OpenClaw and expanding to GitHub Copilot CLI + Claude Code. The first credible IT answer to 'what AI is actually running in my org right now?'",
    "Multi-cloud registry sync goes beyond Microsoft turf -- registers + observes agents running in AWS Bedrock and Google Cloud, not just Azure. Rare in Microsoft enterprise tooling and a real differentiator vs single-cloud competitors",
    "Policy-based runtime controls mean IT can block malicious or out-of-policy agent behavior in real time, not just after the fact in a SIEM. Pairs the discovery side with enforcement",
    "Asset context mapping shows agent relationships, delegated vs independent credentials, and which cloud resources each agent can reach. The graph view that security teams have wanted for agentic stacks",
    "40+ ecosystem partner agents pre-integrated at GA: Zendesk, n8n, Kore.ai, plus Copilot Studio agents and the new Windows 365 for Agents secure environment (public preview). Broad install base from day one",
  ],
  cons: [
    "$15/user/month is meaningful at scale -- a 5,000-seat company is $900,000/year on the standalone tier before any Microsoft 365 E7 conversion math",
    "Locked to Microsoft 365 / Azure AD identity model -- if your org isn't already on the Microsoft enterprise stack, the integration cost gets real",
    "Enterprise-only positioning means there's no SMB or self-serve tier, even though small teams increasingly need agent governance too. Underserved gap below 250 users",
    "Public preview features (Windows 365 for Agents, some integrations) ship at GA but carry the usual 'preview != production' caveats. Plan rollout in waves",
  ],
  knownIssues: [
    {
      description:
        "Microsoft Agent 365 went GA on 2026-05-01 with Shadow AI Discovery covering 'local AI agents running on Windows devices, starting with OpenClaw agents and expanding soon to other widely used agents like GitHub Copilot CLI and Claude Code' -- the only enterprise governance product that names third-party non-Microsoft agents as first-class targets at GA. Multi-cloud registry sync ships at GA for AWS Bedrock + Google Cloud connections, not just Azure",
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
    "Enterprise IT and security teams running mixed-AI environments who need a single pane of glass over local agents (OpenClaw, Copilot CLI, Claude Code), Copilot Studio agents, and cloud agents in AWS Bedrock / Google Cloud / Azure. Especially valuable for orgs already on Microsoft 365 E5/E7 where the bundled tier removes the per-seat math.",
  notFor:
    "Solo developers, prosumers, and SMBs under ~250 users -- there's no self-serve tier and the per-seat pricing assumes enterprise-scale governance budget. Also not for orgs that have explicitly avoided Microsoft 365 / Azure AD: the identity-model lock-in is real.",
  verdict:
    "Microsoft Agent 365's GA on 2026-05-01 is the first credible enterprise answer to 'what AI agents are actually running across my org, who's using them, and can I block one when it goes off the rails.' The Shadow AI Discovery surface naming OpenClaw + GitHub Copilot CLI + Claude Code as first-class discovery targets -- not just Microsoft's own agents -- is the unusually open move that makes this product matter beyond pure Azure shops. Multi-cloud registry sync to AWS Bedrock + Google Cloud at GA reinforces that the strategy is genuinely platform-spanning. The cost story is real ($15/user/month is $900K/year at 5,000 seats), but for any enterprise that's been quietly accumulating shadow AI agents through 2025-2026, this is the cheapest path back to compliance. If you're already on M365 E7, the bundled tier removes most of the procurement debate.",

  lastReviewedDate: "2026-05-01",
  dataSources: [
    {
      name: "Microsoft Security Blog: Agent 365 GA (2026-05-01)",
      url: "https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/",
      dateAccessed: "2026-05-01",
    },
    {
      name: "Microsoft Learn: Agent 365 overview",
      url: "https://learn.microsoft.com/en-us/microsoft-agent-365/overview",
      dateAccessed: "2026-05-01",
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
    "Microsoft Agent 365 review. GA 2026-05-01. Enterprise governance for AI agents -- discovers OpenClaw + GitHub Copilot CLI + Claude Code on Windows, syncs to AWS Bedrock + Google Cloud. $15/user/mo or M365 E7.",
};
