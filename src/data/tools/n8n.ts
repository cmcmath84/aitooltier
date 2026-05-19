import { ToolReview } from "@/lib/types";

export const n8n: ToolReview = {
  slug: "n8n",
  name: "n8n",
  tagline: "Open-source workflow automation with AI nodes, self-hostable and way cheaper than Zapier for complex flows. **Microsoft Agent 365 Trigger node shipped 2026-05-05** -- agents built in n8n now show up as @-mentionable members inside Teams / Outlook / Word",
  category: "ai-automation-workflow",
  url: "https://n8n.io",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 9,
    features: 9,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Community (Self-Hosted)",
      price: "$0",
      features: [
        "Unlimited executions",
        "Unlimited workflows",
        "All integrations",
        "Full source code access",
      ],
    },
    {
      plan: "Starter (Cloud)",
      price: "$24",
      period: "month",
      features: [
        "2,500 executions/month",
        "Unlimited workflows & users",
        "All integrations",
      ],
    },
    {
      plan: "Pro (Cloud)",
      price: "$60",
      period: "month",
      features: [
        "10,000 executions/month",
        "Unlimited workflows & users",
        "All integrations",
        "Debug executions",
      ],
    },
    {
      plan: "Business (Cloud)",
      price: "$800",
      period: "month",
      features: [
        "50,000 executions/month",
        "SSO & advanced permissions",
        "Priority support",
      ],
    },
  ],

  pros: [
    "Self-hosted option is genuinely free with unlimited everything -- hard to beat that value",
    "400+ integrations and AI nodes for LLMs, vector databases, and agent workflows",
    "Pricing is per-execution, not per-step -- complex 50-node workflows cost the same as simple ones",
    "Active open-source community with thousands of shared workflow templates",
    "You own your data and can inspect every line of code running your automations",
  ],
  cons: [
    "Steeper learning curve than Zapier or Make -- not beginner-friendly",
    "Self-hosting requires server management skills and ongoing maintenance",
    "Error messages can be vague, making debugging frustrating without digging into node logs",
    "SSO and advanced permissions locked behind the $800/mo Business plan",
    "Visual canvas gets unwieldy with highly complex branching logic or recursive flows",
  ],
  knownIssues: [
    {
      description: "PRODUCT (2026-05-05): n8n shipped the **Microsoft Agent 365 Trigger node** -- agents built in n8n now show up as @-mentionable members inside Microsoft Teams channels, Outlook, and Word. End-user @-mentions an agent in a Teams thread; n8n routes the prompt through whatever workflow you've wired (LLM call, tool use, DB lookup, multi-step) and posts the response back in-thread as the agent identity. Pairs with Microsoft Agent 365's 5/1 GA -- n8n is one of the first independent automation platforms to ship a first-party Agent 365 surface, giving teams a self-hostable / open-source path to native M365 agentic deployment vs Microsoft's own Copilot Studio. Material for any n8n shop already on Microsoft 365 -- you get Agent 365 native presence without buying Microsoft's $15/user/mo Agent 365 SKU for every seat.",
      source: "n8n blog (blog.n8n.io/deploy-n8n-agents-that-show-up-as-members-of-the-team-inside-microsoft-apps/), n8n docs (docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger/)",
      date: "2026-05-05",
    },
    {
      description:
        "Critical security vulnerabilities (CVE-2026-27577, CVSS 9.4) discovered in workflow expression evaluation -- patch immediately if self-hosting",
      source: "Hacker News, CISA advisory",
      date: "2026-03",
    },
    {
      description:
        "Cloud version can slow down with very large datasets; self-hosting gives more control over performance",
      source: "G2 reviews",
      date: "2026-01",
    },
    {
      description:
        "Credential connections to some services (like Firestore) expire silently, causing workflows to fail without clear errors",
      source: "n8n Community forum",
      date: "2025-11",
    },
  ],
  bestFor:
    "Technical users and teams who want powerful automation without per-step pricing. Especially strong if you can self-host and want AI agent workflows.",
  notFor:
    "Non-technical users who want drag-and-drop simplicity. If you've never touched a server or API, start with Zapier and graduate to n8n later.",
  verdict:
    "n8n is the best value in workflow automation, full stop. The self-hosted version is free with no execution limits, and even the cloud plans are cheaper than Zapier for complex workflows. The trade-off is complexity -- it takes longer to learn and self-hosting means you're responsible for security patches (which matter, given the recent CVEs). But if you're building AI-powered automations and don't want to pay per step, n8n is the clear choice.",

  lastReviewedDate: "2026-05-19",
  dataSources: [
    { name: "n8n official site", dateAccessed: "2026-04-02" },
    { name: "n8n Community forum", dateAccessed: "2026-04-02" },
    { name: "G2 reviews", dateAccessed: "2026-04-02" },
    { name: "Hacker News (CVE reports)", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://n8n.io",
  status: "active",
  metaTitle: "n8n Review 2026: Best Open-Source Automation for AI Workflows?",
  metaDescription:
    "Honest n8n review. Free self-hosted automation, 400+ integrations, AI nodes. Cloud from $24/mo. Full pricing, security notes, and verdict. April 2026.",
};
