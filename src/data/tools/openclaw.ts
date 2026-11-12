import { ToolReview } from "@/lib/types";

export const openclaw: ToolReview = {
  slug: "openclaw",
  name: "OpenClaw",
  tagline: "**Now stewarded by the OpenClaw Foundation, an independent US 501(c)(3) formed in July 2026, with desktop apps for macOS, Windows and Linux and a Multiplayer mode (Nov 5) for shared team sessions. Its own security page counts 722 fixed and published advisories since January 2026, 14 of them confirmed critical and all fixed.** Open-source personal AI agent you talk to through WhatsApp, Telegram, Discord, Slack, Signal or iMessage. It holds real credentials and has a long advisory history -- stay on current releases and verify hardening before running anywhere sensitive",
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
        "Free and open source -- the Foundation states there is no enterprise edition and no paid version",
        "Runs on your own machine; desktop apps for macOS, Windows and Linux or a one-line installer",
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
    "Community momentum is real and it keeps compounding -- 394,367 GitHub stars as of 2026-11-11, near-daily releases, and since July a non-profit foundation with a paid core team behind it",
    "Fully LLM-agnostic: point it at Claude, GPT, DeepSeek, or any OpenAI-compatible endpoint, swap providers without rewriting anything",
    "Runs locally, so your context, credentials, and skills stay on your machine -- no vendor lock-in and no cloud surveillance",
  ],
  cons: [
    "Security surface is large and still maturing -- OpenClaw's own security page lists 722 fixed and published advisories since January 2026 (39 with a CVE, 14 confirmed critical), a third of them in add-ons, and the agent often holds email/calendar/messaging credentials",
    "Project has been renamed twice in three days (Clawdbot -> Moltbot -> OpenClaw) -- tooling, docs, and third-party guides still lag the current name",
    "Still a power-user tool -- desktop apps now handle install and setup, but skills, channels and sandbox policy are yours to configure and get wrong",
    "LLM API costs are entirely on you, and an agent that runs on heartbeats can burn through tokens fast if you don't set explicit budgets",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-11): this page led with '9 CVEs in March 2026 including a CVSS 9.9' and '135,000+ exposed instances', sourced to third-party coverage. Those specific figures could not be matched to any OpenClaw-published page and have been removed from the tagline, cons and meta. What OpenClaw itself publishes (openclaw.ai/security, updated Sep 11, 2026): **1,799 reports filed since January 2026; 58% closed with no advisory; 722 fixed and published, 39 of which carry a CVE; 14 confirmed critical, all fixed and disclosed** (of 137 filed as critical, 123 were invalid, duplicate or out of scope); 239 of the 722 fixes are in add-ons; 'No known compromise of OpenClaw infrastructure or of the official install and update channels'. The GitHub advisories API returned 120 advisories in our sample, all published in June and September 2026, the highest scored CVSS 8.8. Also corrected: 'No GUI' (desktop apps now ship for macOS, Windows and Linux) and '60k+ stars' (394,367 on 2026-11-11). Licence re-verified as MIT, copyright OpenClaw Foundation. The Anthropic billing entries below rest on press coverage and were not re-verified against an Anthropic page in this pass",
      source: "OpenClaw security page (openclaw.ai/security), GitHub API (api.github.com/repos/openclaw/openclaw, /security-advisories, LICENSE), openclaw.ai home page, all fetched 2026-11-11",
      date: "2026-11-11",
    },
    {
      description: "MULTIPLAYER + MODEL CATALOG (2026-11-05 / 11-06): **OpenClaw Multiplayer** lets a team share one gateway -- sessions several people can open and steer, live presence, and commits credited to the people behind them. A day later, OpenClaw began learning about new models from a hosted catalog, your provider account and your installed Codex, so a model launch no longer waits for an OpenClaw release. Current stable release is v2026.11.3 (2026-11-10)",
      source: "OpenClaw blog (openclaw.ai/blog/shattering-silos-with-openclaw-multiplayer, openclaw.ai/blog/use-new-models-in-openclaw-without-an-update), GitHub releases",
      date: "2026-11-06",
    },
    {
      description: "OPENCLAW FOUNDATION (2026-07-08): OpenClaw is now stewarded by the OpenClaw Foundation, 'officially a 501(c)(3) American non-profit', which employs the core team, signs every release and commits to keeping the product MIT licensed. Donors named on the site include the University of Michigan, OpenAI, Amazon, Red Hat, Offline Holdings and Lobster Computer Company; the Foundation says donors 'do not own, control, or direct the project'. Creator Peter Steinberger joined OpenAI earlier in 2026 and leads Claw Labs there; the site states plainly that 'OpenClaw is not an OpenAI product'. Security follow-through listed by the project: a security audit through OpenAI's Patch the Planet initiative (Sept 21), ClawScan skill scanning with VirusTotal, NVIDIA SkillSpector and Tencent AIG (Oct 2), and an extended-stable release channel",
      source: "OpenClaw blog (openclaw.ai/blog/introducing-openclaw-foundation, 2026-07-08), openclaw.ai home page and security page",
      date: "2026-07-08",
    },
    {
      description: "CREDIT-POOL REINSTATEMENT PLAN PAUSED (status as of 2026-06-18): Anthropic had announced (~2026-05-13) it would reinstate third-party agent harnesses -- OpenClaw, `claude -p`, Agent SDK apps -- onto Claude Pro/Max subscriptions via a SEPARATE metered credit pool (Pro $20, Max 5x $100, Max 20x $200) effective 2026-06-15. **Anthropic then PAUSED that billing overhaul just before launch ('Nothing changes for now')**, so the separate-credit-pool model is NOT in effect. As of today, programmatic harness usage against a Claude subscription draws on regular subscription limits, with no separate programmatic credit pool live. The strict April lockout enforcement has effectively relaxed, but the long-term billing posture for continuous-loop harnesses is unsettled -- and a heartbeat agent will still consume Claude limits fast. DeepSeek / OpenAI API remain cheaper substitutes for non-Claude-dependent skills, and the safest assumption for production OpenClaw is still direct API token economics.",
      source: "The Decoder (anthropic-backs-off-unpopular-billing-overhaul), Axios (2026-05-14); earlier reinstatement announcement: VentureBeat, The New Stack (2026-05-13)",
      date: "2026-06-18",
    },
    {
      description: "ANTHROPIC LOCKOUT (2026-04-04, enforced 2026-04-10): Anthropic excluded OpenClaw and other third-party agent harnesses from Claude Pro / Max flat-rate plans. Running OpenClaw against your existing Pro or Max subscription now bills as separate pay-as-you-go 'extra usage' rather than counting against the flat plan. Anthropic temporarily banned OpenClaw's creator from the platform on 2026-04-10 (cited 'subscriptions weren't built to handle the usage patterns' of harnesses that run continuous reasoning loops and tool chains). For OpenClaw users specifically: budget for direct API token costs going forward, NOT a flat $20-200/mo Claude subscription. The pay-as-you-go path still works -- but the economics are materially different. DeepSeek + OpenAI API are cheaper substitutes for non-Claude-dependent skills",
      source: "TechCrunch (techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/), The Next Web, PYMNTS",
      date: "2026-04-10",
    },
    {
      description: "REPORTED BY THIRD PARTIES, NOT VENDOR-VERIFIED (see 2026-11-11 correction): SECURITY CRISIS -- 9 CVEs disclosed over 4 days in March 2026, including one rated CVSS 9.9 (critical). Security researchers found 135,000+ OpenClaw instances publicly exposed on the internet across 82 countries, many with default credentials or unpatched versions. Mass developer migration to Hermes Agent reported across r/LocalLLaMA and Hacker News. If you are running OpenClaw, verify you are on the latest patch release and behind a firewall before doing anything else",
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
  notFor: "Non-technical users, anyone running untested versions, anyone exposing instances to the public internet. Hermes Agent remains a reasonable alternative if you want a smaller security surface. Pair OpenClaw with Paperclip if you need multi-agent orchestration.",
  verdict: "OpenClaw was the viral entry that defined the messaging-first personal agent category, and its UX ideas are broadly correct. But the spring 2026 wave of vulnerability disclosures and reports of exposed public instances revealed that the project's rapid growth outran its security engineering. Developer migration to Hermes Agent has been visible on r/LocalLLaMA and Hacker News throughout March and April. UPDATE November 2026: the project did respond. It now sits under an independent non-profit foundation with a paid core team, publishes its own advisory numbers (722 fixed and published since January, 14 confirmed critical, all fixed), completed an outside security audit in September, and ships desktop apps and near-daily releases. That is a materially better posture than the one this verdict was written against, though the sheer advisory count is its own warning: run current releases, keep it off the public internet, and give it only the credentials it needs.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "OpenClaw security page (advisory numbers, updated Sep 11, 2026)", url: "https://openclaw.ai/security", dateAccessed: "2026-11-11" },
    { name: "OpenClaw blog: Introducing the OpenClaw Foundation (2026-07-08)", url: "https://openclaw.ai/blog/introducing-openclaw-foundation", dateAccessed: "2026-11-11" },
    { name: "OpenClaw blog: Shattering Silos with OpenClaw Multiplayer (2026-11-05)", url: "https://openclaw.ai/blog/shattering-silos-with-openclaw-multiplayer", dateAccessed: "2026-11-11" },
    { name: "OpenClaw blog: Use new models in OpenClaw without an update (2026-11-06)", url: "https://openclaw.ai/blog/use-new-models-in-openclaw-without-an-update", dateAccessed: "2026-11-11" },
    { name: "GitHub API: openclaw/openclaw releases (v2026.11.3, 2026-11-10)", url: "https://api.github.com/repos/openclaw/openclaw/releases?per_page=30", dateAccessed: "2026-11-11" },
    { name: "The Decoder: Anthropic backs off unpopular billing overhaul (reinstatement-via-credit-pool PAUSED before 6/15)", url: "https://the-decoder.com/anthropic-backs-off-unpopular-billing-overhaul-as-price-war-with-openai-looms/", dateAccessed: "2026-06-18" },
    { name: "VentureBeat: Anthropic reinstates OpenClaw + third-party agent usage (original announcement, later paused)", url: "https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch", dateAccessed: "2026-05-26" },
    { name: "openclaw.ai official site", url: "https://openclaw.ai/", dateAccessed: "2026-11-11" },
    { name: "GitHub openclaw/openclaw", url: "https://github.com/openclaw/openclaw", dateAccessed: "2026-04-17" },
    { name: "The New Stack: Persistent AI agents compared (post-CVE analysis)", url: "https://thenewstack.io/persistent-ai-agents-compared/", dateAccessed: "2026-04-17" },
    { name: "KDnuggets explainer", url: "https://www.kdnuggets.com/openclaw-explained-the-free-ai-agent-tool-going-viral-already-in-2026", dateAccessed: "2026-04-17" },
    { name: "Wikipedia: OpenClaw", url: "https://en.wikipedia.org/wiki/OpenClaw", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openclaw.ai/",
  status: "active",
  metaTitle: "OpenClaw Review Nov 2026: Foundation, Multiplayer, Security",
  metaDescription: "OpenClaw review. Now run by the non-profit OpenClaw Foundation, MIT licensed, with desktop apps and Multiplayer. 722 published security fixes in 2026.",
};
