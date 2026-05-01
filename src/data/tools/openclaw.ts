import { ToolReview } from "@/lib/types";

export const openclaw: ToolReview = {
  slug: "openclaw",
  name: "OpenClaw",
  tagline: "Open-source personal AI agent you talk to through Signal, Telegram, Discord, or WhatsApp. WARNING: March 2026 disclosed 9 CVEs (including CVSS 9.9) with 135,000+ exposed public instances -- verify hardening before running anywhere sensitive",
  category: "ai-personal-agents",
  url: "https://openclaw.ai/",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 8,
    features: 8.5,
    overall: 7.6,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-Hosted (MIT)",
      price: "$0",
      features: [
        "Free and open source",
        "Runs on your own machine",
        "Bring your own LLM API key",
        "All messaging integrations included",
        "Skills library (SOUL.md configs)",
      ],
    },
    {
      plan: "LLM API Costs",
      price: "Varies",
      period: "usage",
      features: [
        "Use Claude, GPT, DeepSeek, or local models",
        "Costs depend on model and token volume",
        "Typical power user: $20-$100/month in API fees",
      ],
    },
  ],

  pros: [
    "Messaging-first interface is genuinely better than a chat window -- you can assign tasks from your phone, on the go, in the same app you already use",
    "Grew from 9k to 60k+ GitHub stars in days -- the SOUL.md skills ecosystem and community momentum is real and it keeps compounding",
    "Fully LLM-agnostic: point it at Claude, GPT, DeepSeek, or any OpenAI-compatible endpoint, swap providers without rewriting anything",
    "Runs locally, so your context, credentials, and skills stay on your machine -- no vendor lock-in and no cloud surveillance",
  ],
  cons: [
    "Security surface is large and still maturing -- documented prompt-injection risk, and the agent often holds email/calendar/messaging credentials",
    "Project has been renamed twice in three days (Clawdbot -> Moltbot -> OpenClaw) -- tooling, docs, and third-party guides still lag the current name",
    "No GUI or dashboard -- setup is YAML/Markdown configs and a CLI, which is a wall for non-developers",
    "LLM API costs are entirely on you, and an agent that runs on heartbeats can burn through tokens fast if you don't set explicit budgets",
  ],
  knownIssues: [
    {
      description: "ANTHROPIC LOCKOUT (2026-04-04, enforced 2026-04-10): Anthropic excluded OpenClaw and other third-party agent harnesses from Claude Pro / Max flat-rate plans. Running OpenClaw against your existing Pro or Max subscription now bills as separate pay-as-you-go 'extra usage' rather than counting against the flat plan. Anthropic temporarily banned OpenClaw's creator from the platform on 2026-04-10 (cited 'subscriptions weren't built to handle the usage patterns' of harnesses that run continuous reasoning loops and tool chains). For OpenClaw users specifically: budget for direct API token costs going forward, NOT a flat $20-200/mo Claude subscription. The pay-as-you-go path still works -- but the economics are materially different. DeepSeek + OpenAI API are cheaper substitutes for non-Claude-dependent skills",
      source: "TechCrunch (techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/), The Next Web, PYMNTS",
      date: "2026-04-10",
    },
    {
      description: "SECURITY CRISIS -- 9 CVEs disclosed over 4 days in March 2026, including one rated CVSS 9.9 (critical). Security researchers found 135,000+ OpenClaw instances publicly exposed on the internet across 82 countries, many with default credentials or unpatched versions. Mass developer migration to Hermes Agent reported across r/LocalLLaMA and Hacker News. If you are running OpenClaw, verify you are on the latest patch release and behind a firewall before doing anything else",
      source: "The New Stack, OpenClaw security advisories, Hacker News",
      date: "2026-03",
    },
    {
      description: "Prompt injection via incoming messages or scraped web content can hijack the agent when it has credential access -- VirusTotal skill scanning partnership is one mitigation path but not a full solution. Pair with an allow-list of executable skills and never give the agent write-access credentials to production systems",
      source: "OpenClaw blog / Wikipedia",
      date: "2026-02",
    },
    {
      description: "Breaking config changes across rapid version bumps -- SOUL.md schema has shifted multiple times since the rename, older templates may not load. Downstream of the security disclosures, update cadence is now slower/more careful which reduces but doesn't eliminate this",
      source: "GitHub Issues",
      date: "2026-03",
    },
  ],
  bestFor: "Technical users who will properly harden the deployment -- latest-patch version, firewall, no credentials with production write access, skill allow-list. If you can take operational responsibility for running a locally-deployed agent that holds credentials, the messaging-first UX and BYO-LLM flexibility are still genuinely valuable.",
  notFor: "Non-technical users, anyone running untested versions, anyone exposing instances to the public internet. As of April 2026, Hermes Agent is the safer default for most users -- similar concept with a smaller security surface and an active security-response track record. Pair OpenClaw with Paperclip if you need multi-agent orchestration.",
  verdict: "OpenClaw was the viral entry that defined the messaging-first personal agent category, and its UX ideas are broadly correct. But the March 2026 CVE disclosures -- 9 vulnerabilities including a CVSS 9.9 critical, with 135,000+ instances found exposed on public IPs -- revealed that the project's rapid growth outran its security engineering. Developer migration to Hermes Agent has been visible on r/LocalLLaMA and Hacker News throughout March and April. OpenClaw is not dead and the project is responding, but the honest read is: if you haven't already built deep operational trust in your OpenClaw deployment, Hermes Agent is the better default in April 2026. Revisit OpenClaw after two more release cycles when the security posture has hardened and the install-base has churned through the exposed instances.",

  lastReviewedDate: "2026-04-30",
  dataSources: [
    { name: "openclaw.ai official site", url: "https://openclaw.ai/", dateAccessed: "2026-04-17" },
    { name: "GitHub openclaw/openclaw", url: "https://github.com/openclaw/openclaw", dateAccessed: "2026-04-17" },
    { name: "The New Stack: Persistent AI agents compared (post-CVE analysis)", url: "https://thenewstack.io/persistent-ai-agents-compared/", dateAccessed: "2026-04-17" },
    { name: "KDnuggets explainer", url: "https://www.kdnuggets.com/openclaw-explained-the-free-ai-agent-tool-going-viral-already-in-2026", dateAccessed: "2026-04-17" },
    { name: "Wikipedia: OpenClaw", url: "https://en.wikipedia.org/wiki/OpenClaw", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openclaw.ai/",
  status: "active",
  metaTitle: "OpenClaw Review April 2026: Anthropic Lockout + Post-CVE Security Crisis",
  metaDescription: "OpenClaw review. Anthropic excluded OpenClaw from Claude Pro/Max flat-rate 2026-04-04 -- agent users now pay-as-you-go API only. Plus March 2026 CVE crisis (9 CVEs, 135k exposed). Hermes Agent migration ongoing.",
};
