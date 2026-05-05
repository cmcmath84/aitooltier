import { ToolReview } from "@/lib/types";

export const hermesAgent: ToolReview = {
  slug: "hermes-agent",
  name: "Hermes Agent",
  tagline: "Nous Research's self-improving autonomous agent -- persistent memory, auto-generated skills, five sandbox backends. v0.12.0 'Curator Release' (2026-04-30) adds Autonomous Curator background agent that prunes + consolidates skills on a 7-day cycle, plus Microsoft Teams + Tencent Yuanbao platforms",
  category: "ai-personal-agents",
  url: "https://hermes-agent.nousresearch.com/",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 9,
    value: 9,
    features: 9,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-Hosted (MIT)",
      price: "$0",
      features: [
        "Free and open source under MIT",
        "Runs on your server or local machine",
        "All platforms included (Telegram, Discord, Slack, WhatsApp, Signal, CLI, Email)",
        "Full sandboxing: local, Docker, SSH, Singularity, Modal",
        "Persistent memory and auto-generated skills",
      ],
    },
    {
      plan: "LLM API Costs",
      price: "Varies",
      period: "usage",
      features: [
        "Nous Portal, OpenRouter (200+ models), z.ai/GLM, OpenAI, or self-hosted",
        "Switch providers with hermes model -- no code changes",
        "Typical: $30-$150/month depending on heartbeat frequency",
      ],
    },
  ],

  pros: [
    "True learning loop -- after complex tasks it writes reusable skills to its memory, so it really does get more capable the longer you use it (rare in this category)",
    "Five sandboxing backends (local, Docker, SSH, Singularity, Modal) is serious infrastructure -- you can actually run untrusted code without handing your machine over",
    "Subagent delegation with isolated conversations and Python RPC means long pipelines don't eat your context window -- technically this is the cleanest design of any 2026 personal agent",
    "Nous Research pedigree -- this team shipped Hermes 3 on Llama 3.1 and they know model behavior -- the agent reasons better than OpenClaw on ambiguous tasks in direct comparisons",
  ],
  cons: [
    "Smaller community than OpenClaw (~32k vs ~60k stars) means fewer third-party skills, less StackOverflow coverage, and a smaller talent pool if you need help",
    "Natural-language cron, multi-backend sandboxing, and subagents all add surface area -- the setup is more intricate than OpenClaw's and you will spend a Saturday on it",
    "Self-improving memory is powerful but opaque -- debugging 'why did it do that?' gets harder as the skill library grows without good tooling to inspect it",
    "Best in class only if you drive it hard -- a casual user will never see the learning loop pay off and would get the same result from OpenClaw with less setup",
  ],
  knownIssues: [
    {
      description: "RELEASE (2026-04-30): Hermes Agent v0.12.0 'Curator Release' shipped. Headline: **Autonomous Curator** -- a background agent that grades, consolidates, and prunes skills on a 7-day cycle with detailed reporting. Directly addresses the long-standing skill-pollution complaint. Plus Self-Improvement Loop (rubric-based grading + active-update bias), 5 new inference providers (GMI Cloud, Azure AI Foundry, LM Studio first-class, MiniMax OAuth, Tencent Tokenhub), Microsoft Teams + Tencent Yuanbao plugins (18th platform), ComfyUI v5 + TouchDesigner-MCP bundled by default, Spotify native tools + Google Meet plugin, ~57% reduction in TUI cold-start via lazy initialization, new Models tab dashboard with per-model analytics. **Breaking changes**: /provider and /plan slash commands REMOVED; BOOT.md built-in hook ELIMINATED (docs provide alternatives); secret redaction now requires explicit opt-in (was on by default; off-by-default avoids data corruption). 1,096 commits / 550 PRs / 213 contributors since v0.11.0",
      source: "GitHub release notes (github.com/NousResearch/hermes-agent/blob/main/RELEASE_v0.12.0.md), Nous Research X announcement",
      date: "2026-04-30",
    },
    {
      description: "Skill pollution -- the auto-skill generator occasionally creates overlapping or contradictory skills that degrade behavior over weeks of use, requires manual pruning. **Note (2026-04-30):** v0.12.0 Curator Release adds the Autonomous Curator background agent that consolidates and prunes skills on a 7-day cycle -- this issue is now substantially mitigated for v0.12.0+ users",
      source: "Hugging Face discuss thread",
      date: "2026-03",
    },
    {
      description: "Gateway process memory usage grows with subagent count -- heavy parallelization on small VPS can OOM without warning",
      source: "GitHub Issues",
      date: "2026-04",
    },
  ],
  bestFor: "Power users and technical teams who will actually use an agent daily, give it real work, and benefit from a learning loop. Teams running it on a real server with Docker or Modal sandboxing get the most out of it. Also the right pick if you care about model sovereignty -- it runs on anything.",
  notFor: "Someone who wants 'install and chat.' Hermes rewards depth and punishes casual use. If you won't run it daily for a month, you won't see the self-improvement differential -- just use OpenClaw.",
  verdict: "Hermes is the technically superior agent in the category -- better reasoning, better sandboxing, better delegation architecture, a real learning loop. Nous Research shipped the design most of the 'agent that grows with you' marketing was promising elsewhere. The tradeoff is complexity and a smaller community. If you're the kind of person who enjoys tuning your own systems and will use an agent as an actual daily driver, this is the best open-source option in 2026. If you want viral momentum and plug-and-play skills, OpenClaw is the easier on-ramp. The honest read: Hermes for the engineer, OpenClaw for everyone else.",

  lastReviewedDate: "2026-05-05",
  dataSources: [
    { name: "Hermes Agent v0.12.0 'Curator Release' notes (2026-04-30)", url: "https://github.com/NousResearch/hermes-agent/blob/main/RELEASE_v0.12.0.md", dateAccessed: "2026-05-05" },
    { name: "Hermes Agent official site", url: "https://hermes-agent.nousresearch.com/", dateAccessed: "2026-04-13" },
    { name: "GitHub nousresearch/hermes-agent", url: "https://github.com/nousresearch/hermes-agent", dateAccessed: "2026-04-13" },
    { name: "The New Stack: OpenClaw vs Hermes", url: "https://thenewstack.io/persistent-ai-agents-compared/", dateAccessed: "2026-04-13" },
    { name: "Hugging Face discuss thread", url: "https://discuss.huggingface.co/t/hermes-agent-persistent-memory-and-emergent-skills-in-an-open-source-ai-agent-framework/175173", dateAccessed: "2026-04-13" },
    { name: "Turing Post: 9 Self-Improving Agents", url: "https://www.turingpost.com/p/agentselfimprovement", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://hermes-agent.nousresearch.com/",
  status: "active",
  metaTitle: "Hermes Agent Review 2026: Nous Research's Self-Improving AI Agent, Tested",
  metaDescription: "Hermes Agent review. Self-improving open-source AI agent from Nous Research. Persistent memory, auto-skills, sandboxing, multi-platform. Scores & trade-offs. April 2026.",
};
