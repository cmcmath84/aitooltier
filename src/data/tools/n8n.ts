import { ToolReview } from "@/lib/types";

export const n8n: ToolReview = {
  slug: "n8n",
  name: "n8n",
  tagline: "**Nov 2026: n8n 3.0 (2026-10-27) is a major release with breaking changes, native Agents (preview) arrived on 2026-09-21, and the Business plan is now self-hosted only at $960/mo ($800/mo billed annually) for 40K executions.** Open-source workflow automation with AI nodes, self-hostable and way cheaper than Zapier for complex flows. The Microsoft Agent 365 Trigger node (2026-05-05, early preview) lets n8n agents show up as @-mentionable members inside Teams / Outlook / Word",
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
        "$20/mo billed annually",
        "5 concurrent executions",
        "Agents, MCP and AI nodes; 1,600 Assistant credits/month",
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
        "$50/mo billed annually",
        "Up to 50 concurrent executions; up to 9,600 Assistant credits/month",
        "Unlimited workflows & users",
        "All integrations",
        "Admin roles, workflow history, metric-based evaluations",
      ],
    },
    {
      plan: "Business (self-hosted only)",
      price: "$960",
      period: "month",
      features: [
        "$800/mo billed annually",
        "40,000 executions/month",
        "Self-hosted only -- not yet available on n8n Cloud (waitlist)",
        "SSO and LDAP, multiple environments, Git version control, queue mode",
        "Forum support",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Custom workflow executions",
        "Hosted by n8n or self-hosted",
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
    "SSO and LDAP start at the Business plan, which is self-hosted only and costs $960/mo ($800/mo billed annually)",
    "Visual canvas gets unwieldy with highly complex branching logic or recursive flows",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-05): this page listed 'Business (Cloud)' at '$800' per month with '50,000 executions/month' and 'Priority support'. n8n's pricing page (US view) now shows Business as 'Self-hosted only' with 40K workflow executions at $960/mo billed monthly or '$800/mo, billed annually', with forum support; the FAQ says 'Not yet. The Business plan is currently only available for self-hosted n8n.' n8n does not publish the date of the change.",
      source: "n8n.io/pricing (US view, monthly and annual toggles), vendor-primary",
      date: "2026-11-05",
    },
    {
      description: "CORRECTION (2026-11-05): CVE-2026-27577 was dated '2026-03' and sourced to 'Hacker News, CISA advisory'. NVD shows it published 2026-02-25 from GitHub's security advisory; the 9.4 is GitHub's CVSS 4.0 score (NVD's own CVSS 3.1 score is 9.9). Also removed: our claim that the Agent 365 node avoids 'buying Microsoft's $15/user/mo Agent 365 SKU for every seat' -- no n8n source supports it, and n8n's docs describe the node as an early preview that needs Microsoft's Frontier preview program.",
      source: "NVD CVE-2026-27577, docs.n8n.io Microsoft Agent 365 Trigger node page (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "PRICING CHECK (2026-11-05, vendor-primary): n8n.io/pricing (US view): Starter $24/mo ($20/mo billed annually) for 2.5K executions, 5 concurrent executions and '1,600 Assistant credits/month'; Pro $60/mo ($50/mo billed annually) for 10K executions, 'Up to 50 concurrent executions' and 'Up to 9,600 Assistant credits/month'; Business $960/mo ($800/mo billed annually), self-hosted only, 40K executions, SSO and LDAP, Git version control and queue mode; Enterprise custom, hosted or self-hosted. Non-US visitors are shown euro prices (Starter 20, Pro 50, Business 667 EUR per month billed annually).",
      source: "n8n.io/pricing (US and default views), vendor-primary",
      date: "2026-11-05",
    },
    {
      description: "SECURITY: DEPRECATED CODE NODES COULD RUN CODE IN THE MAIN PROCESS (2026-10-28, vendor-primary): GitHub advisory GHSA-9p7v-45m2-wxgj (high, CVSS 4.0 8.7): the Function and Function Item nodes run user code in the vm2 sandbox and the LangChain Code node runs it in the n8n main process, outside task-runner isolation. 'In n8n versions 2.42.6, 2.43.3, 2.44.0 and 3.0.1, the Function, Function Item, and LangChain Code nodes are deprecated and blocked by default.' The same 2026-10-28 batch included 'Insufficient Isolation in Workflow Expression Evaluation' (high, 7.7), and n8n also published large advisory batches on 2026-09-30 and 2026-10-14 -- self-hosters should track the GitHub security advisories and upgrade promptly.",
      source: "GitHub security advisories (github.com/n8n-io/n8n/security/advisories), vendor-primary",
      date: "2026-10-28",
    },
    {
      description: "N8N 3.0 MAJOR RELEASE; STABLE LINE STILL 2.x (2026-10-27, vendor-primary): n8n's release notes: 'n8n 3.0 is a major release with breaking changes.' n8n asks users to read the 3.0 breaking-changes page and run its migration tool before upgrading. In 3.0, 'Nodes marked as deprecated are now frozen in the editor', and Edit Image v2 (napi-rs canvas, replacing GraphicsMagick) becomes the default. GitHub still marks 3.0.0, 3.0.1 and 3.1.0 as pre-releases; the latest stable release is n8n@2.46.6 (2026-11-04).",
      source: "docs.n8n.io release notes, GitHub releases (n8n-io/n8n), vendor-primary",
      date: "2026-10-27",
    },
    {
      description: "PRODUCT: AGENTS, N8N ASSISTANT, GATEWAY CREDITS (2026-07-09 to 2026-09-21, vendor-primary): the Agents tab (n8n 2.40, 2026-09-21) builds agents you configure once and connect to Slack, Telegram, Linear or Discord; 'One turn with an agent counts as one execution.' and 'Agents are in Preview.' n8n Assistant (2026-07-09) plans, builds, runs and fixes workflows -- 'n8n Assistant supersedes the AI Workflow Builder'. Gateway credits (2026-09-02, n8n 2.36) let n8n Cloud users call models without their own provider keys: 'Supported AI providers include OpenAI, Anthropic, Google Gemini, Alibaba Cloud Qwen, MiniMax, and Moonshot Kimi.' Since 2026-09-01, error-workflow runs no longer count toward execution quotas.",
      source: "docs.n8n.io changelog, vendor-primary",
      date: "2026-09-21",
    },
    {
      description: "PRODUCT (2026-05-05): n8n shipped the **Microsoft Agent 365 Trigger node** -- agents built in n8n now show up as @-mentionable members inside Microsoft Teams channels, Outlook, and Word. End-user @-mentions an agent in a Teams thread; n8n routes the prompt through whatever workflow you've wired (LLM call, tool use, DB lookup, multi-step) and posts the response back in-thread as the agent identity. Pairs with Microsoft Agent 365's 5/1 GA -- n8n is one of the first independent automation platforms to ship a first-party Agent 365 surface, giving teams a self-hostable / open-source path to native M365 agentic deployment vs Microsoft's own Copilot Studio. Material for any n8n shop already on Microsoft 365. Status checked 2026-11-05: n8n's docs say 'This is an early preview for building agents with Microsoft Agent 365 and n8n.' and require Microsoft's Frontier preview program.",
      source: "n8n blog (blog.n8n.io/deploy-n8n-agents-that-show-up-as-members-of-the-team-inside-microsoft-apps/), n8n docs (docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger/)",
      date: "2026-05-05",
    },
    {
      description:
        "Critical expression-evaluation vulnerability CVE-2026-27577 (GitHub CVSS 4.0 score 9.4; NVD CVSS 3.1 score 9.9): 'An authenticated user with permission to create or modify workflows could abuse crafted expressions in workflow parameters to trigger unintended system command execution on the host running n8n.' 'The issues have been fixed in n8n versions 2.10.1, 2.9.3, and 1.123.22.' Patch immediately if self-hosting",
      source: "NVD CVE-2026-27577 (from GitHub security advisory), vendor-primary",
      date: "2026-02-25",
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

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "n8n pricing page (US view via Firecrawl, plus default view)", url: "https://n8n.io/pricing/", dateAccessed: "2026-11-05" },
    { name: "n8n docs: release notes (n8n 3.0, 2026-10-27)", url: "https://docs.n8n.io/release-notes/", dateAccessed: "2026-11-05" },
    { name: "n8n docs: changelog (Agents, Assistant, Gateway credits, Agent 365 Trigger)", url: "https://docs.n8n.io/changelog/", dateAccessed: "2026-11-05" },
    { name: "GitHub n8n-io/n8n latest stable release (n8n@2.46.6)", url: "https://api.github.com/repos/n8n-io/n8n/releases/latest", dateAccessed: "2026-11-05" },
    { name: "GitHub n8n-io/n8n security advisories", url: "https://api.github.com/repos/n8n-io/n8n/security-advisories", dateAccessed: "2026-11-05" },
    { name: "NVD: CVE-2026-27577", url: "https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-27577", dateAccessed: "2026-11-05" },
    { name: "n8n docs: Microsoft Agent 365 Trigger node", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger/", dateAccessed: "2026-11-05" },
    { name: "n8n blog: agents as team members inside Microsoft apps (2026-05-01)", url: "https://blog.n8n.io/deploy-n8n-agents-that-show-up-as-members-of-the-team-inside-microsoft-apps/", dateAccessed: "2026-11-05" },
    { name: "n8n official site", dateAccessed: "2026-04-02" },
    { name: "n8n Community forum", dateAccessed: "2026-04-02" },
    { name: "G2 reviews", dateAccessed: "2026-04-02" },
    { name: "Hacker News (CVE reports)", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://n8n.io",
  status: "active",
  metaTitle: "n8n Review 2026: Best Open-Source Automation for AI Workflows?",
  metaDescription:
    "Honest n8n review. Free self-hosted automation, 400+ integrations, AI nodes and Agents. Cloud from $24/mo; Business $960/mo, self-hosted only. n8n 3.0, security notes, and verdict. Updated November 2026.",
};
