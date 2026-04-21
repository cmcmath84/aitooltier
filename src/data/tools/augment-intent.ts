import { ToolReview } from "@/lib/types";

export const augmentIntent: ToolReview = {
  slug: "augment-intent",
  name: "Augment Code Intent",
  tagline: "Spec-driven multi-agent orchestration for code -- coordinator + implementor agents in isolated git worktrees + verifier. Works with Augment's Auggie, Claude Code, Codex, and OpenCode. Public beta 2026-02-10",
  category: "ai-agent-orchestration",
  url: "https://www.augmentcode.com/intent",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 8,
    features: 9,
    overall: 8.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Auggie rate (Augment Code users)",
      price: "Included in Auggie subscription",
      features: [
        "Intent workspace ships with Auggie CLI at the same rate",
        "Usage billed to the underlying agent provider",
        "BYOM (bring-your-own-model) for Claude Code, Codex, OpenCode",
      ],
    },
    {
      plan: "Standalone (non-Augment users)",
      price: "TBD",
      features: [
        "Public beta open but standalone pricing not published",
        "Signup via augmentcode.com/intent",
      ],
    },
  ],

  pros: [
    "Treats multi-agent development as a single coordinated system rather than parallel-but-disconnected agents -- a living spec + shared workspace means agents don't stomp each other's work. Sharpest contrast with naive CrewAI / LangGraph setups that rely on manual prompt coordination",
    "Git worktree isolation per implementor agent is the right architecture -- each agent gets its own branch, works in parallel, and the verifier agent merges the good ones. Maps cleanly to how senior engineers already batch delegate small tasks",
    "Model-agnostic by design -- orchestrates Auggie (Augment's own, powered by their Context Engine), Claude Code, Codex, and OpenCode. You're not locked into one agent provider, which matters as frontier models churn",
    "Spec-driven workflow forces explicit intent statements before agents spin up -- reduces the 'AI wrote plausible-looking code that misunderstood the task' failure mode that dogs single-agent tools",
  ],
  cons: [
    "Public beta (2026-02-10 onward) -- production workflows may hit rough edges, error-handling behavior across agent failures is still maturing",
    "Standalone pricing not published -- useful mostly if you're already an Augment Code customer or willing to use Auggie as one of the agents. Less approachable for teams running purely on Claude Code or Cursor",
    "Multi-agent orchestration adds real cognitive overhead -- the engineer still has to write good specs, review merged work, and understand git worktrees. Not a drop-in 'AI makes software for you' tool",
    "Overlaps heavily with CrewAI, LangGraph, and Paperclip -- the differentiation is the spec + worktree + verifier triad rather than raw capability. Evaluation against those alternatives is worth doing before committing",
  ],
  knownIssues: [
    {
      description:
        "Public beta launched 2026-02-10 via the Augment Code blog. Positioning: 'a workspace for agent orchestration' that goes beyond simply running agents in parallel -- the spec is a living artifact that all agents read, and git worktree isolation + a verifier agent handle coordination. If CrewAI / LangGraph feel too low-level, Intent is the higher-level-framework pick",
      source: "Augment Code blog, Product Hunt",
      date: "2026-02",
    },
    {
      description:
        "Integration surface area is large: Auggie, Claude Code, Codex, OpenCode today, more frameworks likely as MCP adoption expands. Practical implication: you can mix Claude and OpenAI agents on the same spec, which matters for teams with multi-vendor model agreements",
      source: "Augment Code blog",
      date: "2026-02",
    },
    {
      description:
        "'Verifier' agent is the interesting architectural piece -- rather than trusting implementor agents' self-reports, a separate agent validates merged work against the spec before it lands. Reduces hallucinated-implementation risk vs single-agent frameworks",
      source: "Augment Code blog (Intent architecture section)",
      date: "2026-02",
    },
  ],
  bestFor:
    "Engineering teams already using Augment Code's Auggie or running mixed Claude-Code + Codex workflows who want higher-level orchestration than writing LangGraph graphs from scratch. Also teams that want git-worktree-isolated parallel agent work with a verifier in the loop.",
  notFor:
    "Solo developers or simple workflows -- the overhead of spec-driven multi-agent coordination outweighs the gains for small tasks. Also not for teams strictly on a single agent framework (Cursor-only, Claude-Code-only) without multi-vendor needs.",
  verdict:
    "Augment Code Intent is the cleanest 'framework for coordinating AI agents that write code' we've seen in the post-Devin era. The spec + worktree + verifier architecture is genuinely well-thought-out, and model-agnosticism is a big deal given the pace of frontier-model churn. The public beta status and lack of standalone pricing are the real limits right now -- if Augment publishes a non-Auggie pricing tier and hardens the integration surface, Intent becomes the default 'multi-agent orchestration for software teams' pick. For now, it's the most interesting bet in the category alongside Paperclip.",

  lastReviewedDate: "2026-04-21",
  dataSources: [
    { name: "Augment Code blog: Intent workspace", url: "https://www.augmentcode.com/blog/intent-a-workspace-for-agent-orchestration", dateAccessed: "2026-04-21" },
    { name: "Product Hunt: Intent by Augment Code", url: "https://www.producthunt.com/p/augment-code/intent-by-augment-code-is-spec-driven-multi-agent-development-the-next-step-after-the-ide", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://www.augmentcode.com/intent",
  status: "active",
  metaTitle: "Augment Code Intent Review 2026: Spec-Driven Multi-Agent Orchestration",
  metaDescription:
    "Augment Code Intent review. Spec + worktree + verifier architecture orchestrates Auggie + Claude Code + Codex + OpenCode. Public beta Feb 2026. vs CrewAI + LangGraph.",
};
