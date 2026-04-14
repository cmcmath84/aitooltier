import { ToolReview } from "@/lib/types";

export const langgraph: ToolReview = {
  slug: "langgraph",
  name: "LangGraph",
  tagline: "LangChain's graph-based framework for building stateful, controllable multi-agent and human-in-the-loop AI workflows",
  category: "ai-agent-orchestration",
  url: "https://www.langchain.com/langgraph",

  scores: {
    easeOfUse: 6,
    outputQuality: 9,
    value: 8.5,
    features: 9.5,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Open Source (MIT)",
      price: "$0",
      features: [
        "Full framework, MIT license",
        "Python and JavaScript/TypeScript",
        "Works with any LLM and LangChain tool",
        "Graph-based orchestration with checkpointing",
      ],
    },
    {
      plan: "LangGraph Platform",
      price: "From $39",
      period: "month",
      features: [
        "Hosted deployment with autoscaling",
        "LangSmith tracing and evals",
        "Persistent state and long-running graphs",
        "Human-in-the-loop interrupts",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "SSO, RBAC, audit logs",
        "Self-hosted option",
        "Premium support and SLAs",
      ],
    },
  ],

  pros: [
    "Graph model with cycles and conditional edges is the most expressive orchestration primitive available -- you can build agents that genuinely branch, loop, and recover, not just linear pipelines",
    "Checkpointing and state persistence are first-class, so long-running or human-in-the-loop workflows actually work across restarts and interrupts",
    "LangSmith integration gives you real tracing and evals -- the single biggest advantage over CrewAI when you need to debug production crews",
    "Used as the underlying graph engine in a surprising number of serious production deployments, including many you've heard of -- the track record is real",
  ],
  cons: [
    "Steep learning curve -- nodes, edges, state schemas, conditional routing, and checkpointing are a lot of concepts before you ship your first graph",
    "Verbose for simple cases -- if your workflow fits 'Researcher -> Writer -> Reviewer,' CrewAI does it in a third of the code",
    "LangChain ecosystem baggage -- you inherit LangChain's API churn and abstraction layers whether you wanted them or not",
    "Hosted LangGraph Platform is good but pricing scales quickly once you're doing real volume, and the free-tier limits feel tight",
  ],
  knownIssues: [
    {
      description: "State schema changes between versions occasionally break checkpointed graphs -- migrations require careful handling in production",
      source: "GitHub Issues",
      date: "2026-03",
    },
    {
      description: "Human-in-the-loop interrupts can hang if the UI layer fails to resume the graph -- requires out-of-band state cleanup",
      source: "LangChain forum",
      date: "2026-02",
    },
  ],
  bestFor: "Developers building complex, stateful, or human-in-the-loop agent workflows where the logic is genuinely a graph -- loops, branches, approvals, retries. Also the right pick for teams already on LangChain who want serious production tracing and evaluation.",
  notFor: "Anyone whose workflow is linear (CrewAI is simpler), anyone who doesn't want LangChain in their stack, or anyone looking for a personal agent (OpenClaw/Hermes) or an orchestrator for existing agents (Paperclip).",
  verdict: "LangGraph is the serious choice for teams that have outgrown linear multi-agent frameworks and need a real state machine for their AI workflows. The graph abstraction is correct, the tracing is best-in-class, and the platform-tier deployment story is mature. The cost is complexity -- you will write more code and learn more concepts than with CrewAI, and half the time that's not worth it. But when your workflow actually is a graph with cycles and human approvals, nothing else in the category does the job as well.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "LangGraph official site", url: "https://www.langchain.com/langgraph", dateAccessed: "2026-04-13" },
    { name: "GitHub langchain-ai/langgraph", url: "https://github.com/langchain-ai/langgraph", dateAccessed: "2026-04-13" },
    { name: "LangGraph documentation", url: "https://langchain-ai.github.io/langgraph/", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.langchain.com/langgraph",
  status: "active",
  metaTitle: "LangGraph Review 2026: LangChain's Graph-Based Agent Framework, Tested",
  metaDescription: "LangGraph review. Graph-based framework for stateful multi-agent and human-in-the-loop AI workflows. Scores, pricing, when to pick it over CrewAI. April 2026.",
};
