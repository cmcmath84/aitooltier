import { ToolReview } from "@/lib/types";

export const microsoftAgentFramework: ToolReview = {
  slug: "microsoft-agent-framework",
  name: "Microsoft Agent Framework",
  tagline: "Microsoft's MIT-licensed open-source agent orchestration framework -- GA 2026-04-03 and now shipping weekly releases (Python 1.24.0 and .NET 1.27.0 on 2026-10-30). Merges Semantic Kernel and AutoGen into a single SDK. Python and .NET, plus a Go SDK in public preview. Native MCP and A2A protocol support. Connectors for Foundry, Azure OpenAI, OpenAI, Claude, Bedrock, Gemini, Mistral, Ollama",
  category: "ai-agent-orchestration",
  url: "https://github.com/microsoft/agent-framework",

  scores: {
    easeOfUse: 6,
    outputQuality: 8.5,
    value: 10,
    features: 9,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Open Source (MIT)",
      price: "$0",
      features: [
        "MIT license on the full framework",
        "pip install agent-framework (Python) / dotnet add package Microsoft.Agents.AI (.NET) / go get github.com/microsoft/agent-framework-go (Go, public preview)",
        "Source available at github.com/microsoft/agent-framework (Go SDK at github.com/microsoft/agent-framework-go)",
        "No vendor lock-in",
      ],
    },
    {
      plan: "Implied cloud costs (LLM providers + Foundry)",
      price: "Varies",
      period: "usage",
      features: [
        "You pay for whatever model and infra you plug in",
        "Native connectors: Foundry, Foundry Local, Azure OpenAI, OpenAI, Anthropic Claude, Amazon Bedrock, Google Gemini, Mistral, Ollama, GitHub Copilot (plus an alpha NVIDIA NIM embedding client)",
        "Memory backends: Foundry, Mem0, Redis, Neo4j, Azure Cosmos DB",
        "Typical production cost: model API calls + memory store fees",
      ],
    },
  ],

  pros: [
    "First-class .NET support is the wedge -- CrewAI and LangGraph are Python-only, so Fortune 500 shops with .NET-heavy stacks (finance, insurance, healthcare, manufacturing) can finally pick an agent framework without forking the team into a Python island",
    "Merges Semantic Kernel's enterprise foundations (service connectors, plugins, telemetry, compliance hooks) with AutoGen's multi-agent patterns (group chat, Magentic-One, handoff) into a single SDK -- no more picking sides between the two former Microsoft frameworks",
    "Native MCP + A2A protocol support, broad connector support (OpenAI, Claude, Bedrock, Gemini, Mistral, Ollama alongside Azure-native endpoints), and real memory-backend options (Foundry, Mem0, Redis, Neo4j, Cosmos DB) mean you can build real multi-agent systems without gluing 4 libraries together",
    "MIT licensed and GA (not preview) since 2026-04-03, with a steady weekly release train since then (Python 1.24.0 and .NET 1.27.0 both shipped 2026-10-30). Semantic Kernel gets a 1+ year support runway, which matters for enterprise migration planning",
  ],
  cons: [
    "Most enterprise-flavored of the open agent frameworks -- which means more surface area and more configuration than CrewAI's opinionated role-based approach. Smaller teams or prototypes may prefer CrewAI for faster onboarding",
    "Younger than LangGraph and CrewAI. The repo is at roughly 14.5K GitHub stars (2026-11-02), and third-party skill ecosystem and Stack Overflow / blog-post coverage are still thinner than for the older frameworks",
    "Multiple language SDKs (Python + .NET, now plus a Go preview) means feature parity is a moving target -- Microsoft's own docs say Go does not implement declarative agents, CodeAct, or functional workflows, and the 2026-09-24 devblog tells readers not to assume Python/.NET parity",
    "Fast release cadence brings breaking changes: Python 1.23.0 (2026-10-22) reworked MCP handling for MCP 2.x, and .NET 1.27.0 (2026-10-30) changed Foundry AgentServer hosting APIs. Pin versions and read the changelog before upgrading",
    "Microsoft's incentives favor Azure Foundry deployment paths. You can run it entirely vendor-neutral, but the documentation and examples lean Azure-first in ways CrewAI and LangGraph do not",
  ],
  knownIssues: [
    {
      description: "LATEST RELEASES 2026-10-30 (GitHub releases API): python-1.24.0 and dotnet-1.27.0. Python 1.24.0 makes Python 3.11 the supported baseline ('Python 3.11 or later is now the supported baseline'; 3.10 installs still allowed this release but the next release removes them) and warns that the beta RedisContextProvider rejects the legacy raw-scope index schema, so old Redis context indexes must be deleted and re-ingested. It also adds experimental agent-triggered in-run compaction and skill unloading. .NET 1.27.0 is a [BREAKING] AgentServer dependency update: Foundry-hosted apps must switch from builder.Services.AddFoundryResponses(...) to builder.AddFoundryResponses(...), and local durable response state moves to responses/partitions-v1 with no migration for old files",
      source: "GitHub releases: microsoft/agent-framework python-1.24.0 and dotnet-1.27.0 (2026-10-30)",
      date: "2026-10-30",
    },
    {
      description: "MCP 2.x BREAKING CHANGE in python-1.23.0 (2026-10-22): '[BREAKING] Add the MCP 2.x compatibility foundation and migrate MCP transports, errors, schemas, and lifecycle handling'. The same release requires an explicit AG-UI authorization scope or single-user declaration for endpoint registration, and renames the Docker shell extra_run_args to unsafe_extra_run_args. Anyone upgrading from an April-era 1.0.x install should expect code changes",
      source: "GitHub releases: microsoft/agent-framework python-1.23.0",
      date: "2026-10-22",
    },
    {
      description: "GO SDK IN PUBLIC PREVIEW: Microsoft Learn now states 'Agent Framework for Go is in public preview and requires Go 1.26 or later. Declarative agents, CodeAct, and functional workflows aren't implemented in Go.' The microsoft/agent-framework-go repo (MIT) has shipped prerelease tags v0.1.0 (2026-09-01) through v0.2.1 (2026-10-27). Treat Go as preview-tier, not production",
      source: "Microsoft Learn: Agent Framework overview (ms.date 2026-10-23); GitHub releases API microsoft/agent-framework-go",
      date: "2026-10-27",
    },
    {
      description: "Feature additions since GA: a 'Harness Agent' (Learn: 'An opinionated agent with batteries-included capabilities for long, multi-step tasks' -- planning and todo tracking, context compaction, file access and memory, tool approval, observability), agent and workflow channels for OpenAI Responses, Telegram, A2A and MCP (devblog 2026-08-26), the Agent Harness production guide (2026-08-27), native Azure Cosmos DB memory (2026-09-04), AG-UI integration (Python stable, .NET hosting still in preview; devblog 2026-09-24), and a python-github-copilot 1.0.0 package (2026-07-23)",
      source: "Microsoft Agent Framework devblog RSS; Microsoft Learn overview; GitHub releases",
      date: "2026-09-24",
    },
    {
      description: "Migration from Semantic Kernel or AutoGen is not automatic -- the merge into Agent Framework means existing code needs rework, though Microsoft provides migration guides. Semantic Kernel gets at least 1 year of continued support to bridge the transition",
      source: "Microsoft DevBlogs: Agent Framework v1.0",
      date: "2026-04",
    },
    {
      description: "Feature-parity gaps between SDKs persist: the 2026-09-24 devblog says Python and .NET 'capabilities are not identical -- use the language-specific examples rather than assuming feature parity', and .NET AG-UI hosting remains in preview while the Python package is stable. Some advanced patterns ship to Python first",
      source: "Microsoft Agent Framework devblog 2026-09-24, Microsoft Learn docs",
      date: "2026-09-24",
    },
  ],
  bestFor: "Enterprise developers on .NET or mixed Python + .NET stacks who want an MIT-licensed agent orchestration framework with real enterprise credibility. Also good for Azure Foundry customers who want first-class native integration. Teams migrating from Semantic Kernel or AutoGen should plan the move to Microsoft Agent Framework now rather than later -- and pin versions, because the weekly release train ships breaking changes.",
  notFor: "Solo developers or small teams with a Python-only stack where CrewAI's opinionated role-based approach and faster onboarding are better fits. Also not ideal if you are deeply committed to LangChain-native graph-based orchestration -- LangGraph has tighter integration there. Go shops should treat the Go SDK as a preview, not a production dependency.",
  verdict: "Microsoft Agent Framework (GA 2026-04-03; Python 1.24.0 and .NET 1.27.0 as of 2026-10-30) is the enterprise-credibility answer to CrewAI and LangGraph. By merging Semantic Kernel and AutoGen into a single MIT-licensed SDK with first-class .NET support and broad provider connectors, Microsoft has removed the main blocker to agent orchestration adoption in .NET-heavy enterprises. Since GA it has kept a weekly release cadence, added a batteries-included Harness Agent, AG-UI and channel hosting, and a Go SDK in public preview -- but that pace also means breaking changes (MCP 2.x in Python 1.23.0, AgentServer hosting in .NET 1.27.0). For Fortune 500 shops that have been waiting for 'Microsoft's answer' before picking an agent framework, the wait is over. For prototypes, startups, and Python-native teams, CrewAI and LangGraph remain viable and often faster to adopt.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Microsoft DevBlogs: Agent Framework v1.0 GA", url: "https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/", dateAccessed: "2026-11-02" },
    { name: "GitHub: microsoft/agent-framework", url: "https://github.com/microsoft/agent-framework", dateAccessed: "2026-04-17" },
    { name: "GitHub releases API: microsoft/agent-framework (python-1.24.0, dotnet-1.27.0 on 2026-10-30)", url: "https://api.github.com/repos/microsoft/agent-framework/releases?per_page=30", dateAccessed: "2026-11-02" },
    { name: "GitHub releases API: microsoft/agent-framework-go (v0.1.0-v0.2.1 prereleases)", url: "https://api.github.com/repos/microsoft/agent-framework-go/releases?per_page=10", dateAccessed: "2026-11-02" },
    { name: "Microsoft Learn: Agent Framework overview", url: "https://learn.microsoft.com/en-us/agent-framework/overview/", dateAccessed: "2026-11-02" },
    { name: "Microsoft Agent Framework devblog: Interactive experiences, memory, and resilient execution (2026-09-24)", url: "https://devblogs.microsoft.com/agent-framework/interactive-experiences-memory-and-resilient-execution/", dateAccessed: "2026-11-02" },
    { name: "Microsoft Agent Framework devblog: Agent Harness (2026-08-27)", url: "https://devblogs.microsoft.com/agent-framework/agent-harness-making-your-claw-production-ready/", dateAccessed: "2026-11-02" },
    { name: "Microsoft Agent Framework devblog RSS", url: "https://devblogs.microsoft.com/agent-framework/feed/", dateAccessed: "2026-11-02" },
    { name: "Visual Studio Magazine: MAF 1.0 coverage", url: "https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://github.com/microsoft/agent-framework",
  status: "active",
  metaTitle: "Microsoft Agent Framework Review 2026: MIT-Licensed, .NET + Python + Go Preview",
  metaDescription: "Microsoft Agent Framework review. MIT-licensed open-source agent orchestration, GA Apr 3 2026, now Python 1.24 / .NET 1.27 with a Go preview. Merges Semantic Kernel + AutoGen. MCP + A2A. vs CrewAI, LangGraph.",
};
