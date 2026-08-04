import { ToolReview } from "@/lib/types";

export const crewai: ToolReview = {
  slug: "crewai",
  name: "CrewAI",
  tagline: "Python framework for building multi-agent systems with role-based agents, tasks, and sequential or hierarchical processes",
  category: "ai-agent-orchestration",
  url: "https://www.crewai.com/",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 8,
    value: 8.5,
    features: 8,
    overall: 8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Open Source (MIT)",
      price: "$0",
      features: [
        "Full framework, MIT license",
        "Unlimited agents and crews",
        "Python-based, works with any LLM",
        "Community tooling and integrations",
      ],
    },
    {
      plan: "CrewAI Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Hosted control plane",
        "Observability and tracing",
        "Team collaboration and RBAC",
        "Priority support and SLAs",
      ],
    },
  ],

  pros: [
    "Role-based agent abstraction is intuitive -- define a Researcher, a Writer, a Reviewer and a sensible default process runs them without you writing a scheduler",
    "Most mature multi-agent framework in Python -- huge community, lots of example crews, and it plays nicely with LangChain tools",
    "Genuinely productive for content, research, and analysis pipelines where you actually want specialized agents collaborating in a defined order",
    "Enterprise tier adds real observability, which matters once you're running crews in production and need to debug why one agent keeps hallucinating tool calls",
  ],
  cons: [
    "Abstraction taxes simple tasks -- for a single-agent job, CrewAI adds overhead that's not justified versus just calling the API directly",
    "Sequential and hierarchical processes cover most cases but get awkward when you need truly dynamic branching -- LangGraph handles that better",
    "Agent-to-agent context passing can bloat token usage fast, production crews regularly surprise users with their bill",
    "Documentation has improved but examples still lean toward 'toy crew' rather than hardened production patterns",
  ],
  knownIssues: [
    {
      description: "SKILLS REPOSITORY IS GA, AND THE RELEASE CADENCE IS ~EVERY 2-3 DAYS (2026-07-17, vendor release notes): CrewAI promoted the **Skills Repository out of experimental status** in v1.15.4, release-note wording verbatim: 'Promote Skills Repository out of experimental status'. Skills are `SKILL.md` files -- YAML frontmatter plus a markdown body -- loaded by **progressive disclosure**: name and description are discovered at agent setup, full instructions load only when a request looks relevant, and resource directories load only on explicit call. That directly addresses the prompt-bloat problem: you can attach a large skill library without paying for it in every prompt. Skills publish to an org-scoped registry -- 'Published skills are always scoped to your organization -- like tools, only members of the publishing org can see and install them.' Follow-ons landed fast: progressive-disclosure refinements in 1.15.9 and skill usage telemetry in 1.15.10. **Current release is 1.15.10 (2026-07-31)** (verified against PyPI this sweep) -- note the framework ships every few days, so pin your version. License remains genuinely MIT. PRICING NOTE our page previously missed: the hosted platform has a **free but hard-capped Basic tier -- 50 workflow executions per month, no overage** -- below the custom-priced Enterprise tier",
      source: "CrewAI changelog (docs.crewai.com/en/changelog), CrewAI docs Skills (docs.crewai.com/en/concepts/skills), CrewAI pricing (crewai.com/pricing), PyPI crewai 1.15.10 verified 2026-08-03",
      date: "2026-07-17",
    },
    {
      description: "Hierarchical process occasionally deadlocks when a manager agent waits on a subordinate that errored silently -- fixed in v0.x but regressions have recurred",
      source: "GitHub Issues",
      date: "2026-03",
    },
    {
      description: "Token usage tracking is imprecise on long-running crews, makes budget estimation unreliable without external cost telemetry",
      source: "Reddit r/LangChain",
      date: "2026-02",
    },
  ],
  bestFor: "Python developers building multi-agent content, research, or analysis pipelines with clear role separation. Teams that want a code-first framework rather than an orchestrator GUI. Also the right pick if your workflow fits 'Researcher -> Writer -> Reviewer' style patterns.",
  notFor: "Anyone looking for a persistent personal agent (use OpenClaw or Hermes) or a governance-layer orchestrator for existing agents (use Paperclip). Also wrong if you need complex dynamic graphs -- reach for LangGraph.",
  verdict: "CrewAI earned its place as the default 'multi-agent framework' name in 2026 because the role/task abstraction is the right one for 70% of use cases. It's productive, well-documented, and the ecosystem is real. Just don't reach for it when you don't have a 'crew' problem -- a lot of CrewAI projects would have been simpler as a single agent with good tools. Pick it when the workflow genuinely is a team, skip it when it isn't.",

  lastReviewedDate: "2026-08-03",
  dataSources: [
    { name: "CrewAI official site", url: "https://www.crewai.com/", dateAccessed: "2026-04-13" },
    { name: "GitHub joaomdmoura/crewAI", url: "https://github.com/joaomdmoura/crewAI", dateAccessed: "2026-04-13" },
    { name: "Skywork: OpenClaw alternatives guide", url: "https://skywork.ai/skypage/en/ultimate-guide-alternatives-openclaw-ai-agent/2037090138300694528", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.crewai.com/",
  status: "active",
  metaTitle: "CrewAI Review 2026: Python Multi-Agent Framework, Tested",
  metaDescription: "CrewAI review. Python framework for role-based multi-agent systems. Scores, pricing, production trade-offs, and when to pick it over LangGraph or Paperclip. April 2026.",
};
