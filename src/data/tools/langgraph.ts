import { ToolReview } from "@/lib/types";

export const langgraph: ToolReview = {
  slug: "langgraph",
  name: "LangGraph",
  tagline: "**Nov 2026: LangGraph 1.2.20 is current (2026-11-05), DeltaChannel is still beta and since 1.2.18 snapshots every 100 updates by default, and the hosted tier is now LangSmith Deployment on the $39-per-seat LangSmith Plus plan.** LangChain's graph-based framework for building stateful, controllable multi-agent and human-in-the-loop AI workflows. LangGraph v1.2 (2026-05-12) introduced DeltaChannel -- incremental delta state storage instead of full-state-per-step checkpoints, with a ~41x storage reduction at 200 turns in LangChain's coding-agent benchmark; the newer default trades some of that saving for faster reads",
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
      plan: "LangSmith Plus (includes Deployment)",
      price: "$39",
      period: "seat/month",
      features: [
        "Hosted runtime for LangGraph agents is now sold as LangSmith Deployment",
        "1 free Serverless (Small) deployment included; more deployments metered in LSUs ($1.00 / LSU)",
        "10k base traces / mo included, then pay-as-you-go",
        "LangSmith tracing and evals, persistent state, human-in-the-loop interrupts",
        "Free LangSmith Developer plan: 1 seat, 5k base traces / mo, no Deployment",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Custom SSO, ABAC, and RBAC",
        "Self-hosted and hybrid deployment options",
        "Support SLA",
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
    "Hosted LangSmith Deployment is good but metered pricing (LSUs for runtime and database compute and memory) scales quickly once you're doing real volume, and the free Developer plan includes no Deployment at all",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-05): from 2026-05-19 this page said DeltaChannel 'Beta gating expected through Q2 2026' (no vendor source) and listed the hosted tier as 'LangGraph Platform' 'From $39' per month. Vendor now: the docs say '`DeltaChannel` requires `langgraph>=1.2` and is currently in **beta**' in November 2026, and the $39 is LangSmith Plus at '$39 / seat per month' plus metered usage; LangChain's pricing page does not use the LangGraph Platform name.",
      source: "docs.langchain.com/oss/python/langgraph/pregel, langchain.com/pricing (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "HOSTED TIER IS LANGSMITH DEPLOYMENT, PRICED PER SEAT PLUS USAGE (checked 2026-11-05, vendor-primary): LangChain's pricing page sells LangSmith Developer ($0, 1 seat, 'Up to 5k base traces / mo, then pay-as-you-go', no Deployment), Plus ('$39 / seat per month', 10k base traces, '1 free Serverless (Small) deployment included', further deployments metered in LangChain Standard Units at '$1.00 / LSU') and custom-priced Enterprise ('Self-hosted and hybrid deployment options'). The docs: '**LangSmith Deployment** is a workflow orchestration runtime purpose-built for agent workloads.' The old docs site langchain-ai.github.io/langgraph now redirects to docs.langchain.com.",
      source: "langchain.com/pricing, docs.langchain.com/langsmith/deployment (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "DELTACHANNEL DEFAULT CHANGED, STILL BETA; 1.2.20 CURRENT (2026-10-26 and 2026-11-05, vendor-primary): langgraph 1.2.18 release notes: '`DeltaChannel` now takes a full snapshot every 100 updates instead of 1000: faster reads on long threads, more storage. Pass `snapshot_frequency=1000` to keep the old behavior.' So the May benchmark (5.3 GB down to 129 MB at 200 turns) does not describe the new default. Other 1.2.x work since May: v3 streaming support in RemoteGraph (1.2.3), response_schema on interrupt() (1.2.12), prune on PostgresSaver (1.2.16), and in 1.2.20 (2026-11-05) a separate id for each interrupt() plus 'a strict resume mode that refuses stale interrupt answers' -- relevant to the interrupt-resume issue below. Current release: 1.2.20 on PyPI; no 1.3 yet.",
      source: "GitHub releases (github.com/langchain-ai/langgraph/releases), PyPI langgraph, docs.langchain.com (vendor-primary)",
      date: "2026-10-26",
    },
    {
      description: "PRODUCT (2026-05-12): **LangGraph v1.2 shipped DeltaChannel beta** -- an alternative checkpointing primitive that stores **incremental state deltas** per node execution instead of full-state snapshots. LangChain published a 200-turn coding-agent benchmark showing **~41x storage reduction** vs the default full-state checkpointer, with no observed change in graph-resume fidelity. Material because (a) long-horizon agentic graphs (multi-hour research agents, coding agents on big codebases) had previously been blocked by checkpoint storage costs at production scale, (b) hosted users (now LangSmith Deployment) hit storage caps fastest, so this directly impacts hosted-pricing economics, (c) DeltaChannel is opt-in -- existing graphs keep their current checkpoint behavior until you explicitly switch. Still beta as of 2026-11-05, and the default snapshot frequency changed in 1.2.18 -- see the newer entries above.",
      source: "LangChain blog (langchain.com/blog/delta-channels-evolving-agent-runtime)",
      date: "2026-05-12",
    },
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

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "LangSmith plans and pricing", url: "https://www.langchain.com/pricing", dateAccessed: "2026-11-05" },
    { name: "LangSmith Deployment docs", url: "https://docs.langchain.com/langsmith/deployment", dateAccessed: "2026-11-05" },
    { name: "LangGraph Pregel docs (DeltaChannel beta status)", url: "https://docs.langchain.com/oss/python/langgraph/pregel", dateAccessed: "2026-11-05" },
    { name: "LangChain OSS changelog (langgraph v1.2.0, 2026-05-12)", url: "https://docs.langchain.com/oss/python/releases/changelog", dateAccessed: "2026-11-05" },
    { name: "GitHub releases langchain-ai/langgraph (1.2.18 DeltaChannel default, 1.2.20)", url: "https://api.github.com/repos/langchain-ai/langgraph/releases", dateAccessed: "2026-11-05" },
    { name: "PyPI langgraph JSON (1.2.20, 2026-11-05)", url: "https://pypi.org/pypi/langgraph/json", dateAccessed: "2026-11-05" },
    { name: "LangChain blog: Delta Channels (2026-05-12)", url: "https://www.langchain.com/blog/delta-channels-evolving-agent-runtime", dateAccessed: "2026-11-05" },
    { name: "LangGraph official site", url: "https://www.langchain.com/langgraph", dateAccessed: "2026-11-05" },
    { name: "GitHub langchain-ai/langgraph", url: "https://github.com/langchain-ai/langgraph", dateAccessed: "2026-11-05" },
    { name: "LangGraph documentation (old URL; redirects to docs.langchain.com)", url: "https://langchain-ai.github.io/langgraph/", dateAccessed: "2026-11-05" },
  ],
  affiliateUrl: "https://www.langchain.com/langgraph",
  status: "active",
  metaTitle: "LangGraph Review 2026: LangChain's Graph-Based Agent Framework, Tested",
  metaDescription: "LangGraph review. Graph-based framework for stateful multi-agent and human-in-the-loop AI workflows. v1.2.20, DeltaChannel beta, LangSmith Deployment pricing, when to pick it over CrewAI. Updated November 2026.",
};
