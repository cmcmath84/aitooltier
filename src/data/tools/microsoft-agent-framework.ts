import { ToolReview } from "@/lib/types";

export const microsoftAgentFramework: ToolReview = {
  slug: "microsoft-agent-framework",
  name: "Microsoft Agent Framework 1.0",
  tagline: "Microsoft's MIT-licensed open-source agent orchestration framework -- GA on 2026-04-03. Merges Semantic Kernel and AutoGen into a single SDK. Python and .NET. Native MCP and A2A protocol support. Connectors for Foundry, Azure OpenAI, OpenAI, Claude, Bedrock, Gemini, Ollama",
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
        "pip install agent-framework (Python) / dotnet add package Microsoft.Agents.AI (.NET)",
        "Source available at github.com/microsoft/agent-framework",
        "No vendor lock-in",
      ],
    },
    {
      plan: "Implied cloud costs (LLM providers + Foundry)",
      price: "Varies",
      period: "usage",
      features: [
        "You pay for whatever model and infra you plug in",
        "Native connectors: Foundry, Azure OpenAI, OpenAI, Anthropic Claude, Amazon Bedrock, Google Gemini, Ollama",
        "Memory backends: Foundry, Mem0, Redis, Neo4j",
        "Typical production cost: model API calls + memory store fees",
      ],
    },
  ],

  pros: [
    "First-class .NET support is the wedge -- CrewAI and LangGraph are Python-only, so Fortune 500 shops with .NET-heavy stacks (finance, insurance, healthcare, manufacturing) can finally pick an agent framework without forking the team into a Python island",
    "Merges Semantic Kernel's enterprise foundations (service connectors, plugins, telemetry, compliance hooks) with AutoGen's multi-agent patterns (group chat, Magentic-One, handoff) into a single SDK -- no more picking sides between the two former Microsoft frameworks",
    "Native MCP + A2A protocol support, broad connector support (OpenAI, Claude, Bedrock, Gemini, Ollama alongside Azure-native endpoints), and real memory-backend options (Foundry, Mem0, Redis, Neo4j) mean you can build real multi-agent systems without gluing 4 libraries together",
    "MIT licensed and GA (not preview) as of 2026-04-03. Semantic Kernel gets a 1+ year support runway, which matters for enterprise migration planning",
  ],
  cons: [
    "Most enterprise-flavored of the open agent frameworks -- which means more surface area and more configuration than CrewAI's opinionated role-based approach. Smaller teams or prototypes may prefer CrewAI for faster onboarding",
    "Newer than LangGraph and CrewAI. Community, third-party skill ecosystem, and Stack Overflow / blog-post coverage are thinner as of mid-April 2026. Expect this to close through Q2/Q3 2026 but not immediately",
    "Multiple language SDKs (Python + .NET) means feature parity is a moving target -- watch the release notes for which patterns ship to which language first",
    "Microsoft's incentives favor Azure Foundry deployment paths. You can run it entirely vendor-neutral, but the documentation and examples lean Azure-first in ways CrewAI and LangGraph do not",
  ],
  knownIssues: [
    {
      description: "Migration from Semantic Kernel or AutoGen is not automatic -- the merge into Agent Framework means existing code needs rework, though Microsoft provides migration guides. Semantic Kernel gets at least 1 year of continued support to bridge the transition",
      source: "Microsoft DevBlogs: Agent Framework v1.0",
      date: "2026-04",
    },
    {
      description: "Feature-parity gaps between Python and .NET SDKs still exist at GA. Some advanced patterns (specific Magentic-One configurations, certain memory-backend integrations) ship to Python first",
      source: "GitHub Issues, Microsoft Learn docs",
      date: "2026-04",
    },
  ],
  bestFor: "Enterprise developers on .NET or mixed Python + .NET stacks who want an MIT-licensed agent orchestration framework with real enterprise credibility. Also good for Azure Foundry customers who want first-class native integration. Teams migrating from Semantic Kernel or AutoGen should plan the move to Microsoft Agent Framework 1.0 now rather than later.",
  notFor: "Solo developers or small teams with a Python-only stack where CrewAI's opinionated role-based approach and faster onboarding are better fits. Also not ideal if you are deeply committed to LangChain-native graph-based orchestration -- LangGraph has tighter integration there.",
  verdict: "Microsoft Agent Framework 1.0 (GA 2026-04-03) is the enterprise-credibility answer to CrewAI and LangGraph. By merging Semantic Kernel and AutoGen into a single MIT-licensed SDK with first-class .NET support and broad provider connectors, Microsoft has removed the main blocker to agent orchestration adoption in .NET-heavy enterprises. For Fortune 500 shops that have been waiting for 'Microsoft's answer' before picking an agent framework, the wait is over. For prototypes, startups, and Python-native teams, CrewAI and LangGraph remain viable and often faster to adopt. Over the next two quarters watch how the community + third-party skill ecosystem develops -- if Microsoft invests in the plugin catalog, MAF becomes the new default for enterprise agents.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Microsoft DevBlogs: Agent Framework v1.0 GA", url: "https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/", dateAccessed: "2026-04-17" },
    { name: "GitHub: microsoft/agent-framework", url: "https://github.com/microsoft/agent-framework", dateAccessed: "2026-04-17" },
    { name: "Microsoft Learn: Agent Framework overview", url: "https://learn.microsoft.com/en-us/agent-framework/overview/", dateAccessed: "2026-04-17" },
    { name: "Visual Studio Magazine: MAF 1.0 coverage", url: "https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://github.com/microsoft/agent-framework",
  status: "active",
  metaTitle: "Microsoft Agent Framework 1.0 Review 2026: MIT-Licensed, .NET + Python",
  metaDescription: "Microsoft Agent Framework 1.0 review. MIT-licensed open-source agent orchestration, GA Apr 3 2026. Merges Semantic Kernel + AutoGen. .NET + Python. MCP + A2A. vs CrewAI, LangGraph.",
};
