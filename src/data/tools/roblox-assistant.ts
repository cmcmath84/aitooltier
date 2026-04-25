import { ToolReview } from "@/lib/types";

export const robloxAssistant: ToolReview = {
  slug: "roblox-assistant",
  name: "Roblox Assistant",
  tagline: "Roblox Studio's agentic AI that plans, builds, and playtests games. Planning Mode (2026-04-16) + Mesh Generation + Procedural Models brings 3D-native creation to 70M+ daily creators",
  category: "ai-code-assistants",
  url: "https://create.roblox.com/docs/studio/ai-assistant",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 9,
    features: 8,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (Roblox Studio)",
      price: "$0",
      features: [
        "Planning Mode + basic Assistant",
        "Mesh Generation (daily quota)",
        "Requires a Roblox account + Studio install",
        "Works on published + unpublished experiences",
      ],
    },
    {
      plan: "Premium (assumed future tier)",
      price: "TBD",
      features: [
        "Higher generation quotas expected based on Roblox's usage-tier history",
        "Not yet announced as a separate SKU",
      ],
    },
  ],

  pros: [
    "Planning Mode (2026-04-16) turns Assistant from a code completer into a full agent -- it analyzes your game's code and data model, asks clarifying questions, produces an editable plan, and then executes across multiple scripts. Closest thing in the games space to what Devin does for web dev",
    "Agentic loop is genuinely real: Assistant uses playtesting tools to read output logs, capture screenshots, drive keyboard + mouse inputs, and identify bugs -- then auto-fixes. This is the piece most AI-coding-assistants cannot do because they don't have the runtime",
    "Mesh Generation produces fully textured 3D objects from natural-language prompts ('create a campfire'), with editable lighting properties. Replaces placeholder-asset workflows for prototyping",
    "Procedural Models shipped as a Studio Beta on 2026-04-16 -- parametrized 3D models built via code or AI prompts. Understands spatial relationships, so the number of shelves in a bookcase or staircase height can be changed dynamically. Real reusable building-block generation for game worlds, no longer 'coming soon'",
    "Integrated into Roblox Studio directly, which means the 70M+ daily creators already have it in their tool -- no separate install, no API key, no integration work",
  ],
  cons: [
    "Locked to Roblox Studio -- not usable outside the Roblox ecosystem. This is a game-dev-specific tool, not a generic 3D asset generator",
    "Output quality on Mesh Generation trails dedicated 3D tools (Tencent HY-World 2.0, Meshy, Rodin) on geometry fidelity; it's production-ready for prototyping and UGC, not AAA",
    "Procedural Models is in Studio Beta (2026-04-16 announcement, beta still active 2026-04-25) -- expect rough edges versus stable, and quotas may shift before GA",
    "Deep Roblox platform lock-in -- any workflow you build assumes staying in the Roblox ecosystem. Roblox takes a large revenue cut on published experiences",
  ],
  knownIssues: [
    {
      description:
        "Planning Mode launched 2026-04-16 at RDC 2026 / Studio dev blog. This is the big agentic turn for Roblox Assistant -- prior versions were closer to Copilot-style autocomplete inside Luau scripts. The shift to 'Plan-Build-Test' matches the pattern we're seeing across code-assistants (Cursor 3, Devin 2.2, Windsurf 2.0)",
      source: "Roblox Newsroom (about.roblox.com), TechCrunch, Roblox DevForum",
      date: "2026-04",
    },
    {
      description:
        "Procedural Models shipped as Studio Beta on 2026-04-16 alongside the Planning Mode + Mesh Generation announcement (DevForum thread devforum.roblox.com/t/studio-beta-introducing-procedural-models). Build parametrized 3D models with code or AI prompts; tweak parameters (shelf count, staircase height) without re-generating. Mesh Generation remains the prompt-to-textured-mesh path; together they cover both reusable building blocks and one-off creative assets",
      source: "Roblox DevForum: Studio Beta -- Introducing Procedural Models, TechCrunch",
      date: "2026-04",
    },
    {
      description:
        "Agent uses playtesting tools + screenshots + keyboard/mouse inputs to verify its own work. Under the hood this means Assistant has runtime access to your experience -- a level of integration other code assistants (Copilot, Cursor) would require bespoke work to replicate",
      source: "Roblox DevForum Planning Mode thread",
      date: "2026-04",
    },
  ],
  bestFor:
    "Roblox creators building live experiences who want to go from napkin idea to playtested prototype without dropping out of Studio. Also UGC designers who need fast 3D asset generation without leaving the Roblox ecosystem.",
  notFor:
    "Non-Roblox game developers (Unity / Unreal / Godot / Bevy) -- this is Roblox-only. Also not for anyone who needs production-grade 3D assets; dedicated tools like Tencent HY-World 2.0 or Meshy produce higher-fidelity geometry.",
  verdict:
    "Roblox Assistant's Planning Mode is the most interesting agentic-coding release outside of pure dev tooling in April 2026. The agent loop is real -- it plans, implements, runs, captures screenshots, reads logs, and iterates -- and it's sitting inside the default tool 70M+ daily creators already use. For Roblox creators this is a free productivity cliff; for everyone else it's a preview of what game-engine-integrated AI agents will look like across Unity, Unreal, and Godot over the next 12-24 months.",

  lastReviewedDate: "2026-04-25",
  dataSources: [
    { name: "Roblox Newsroom: Studio going agentic", url: "https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic", dateAccessed: "2026-04-25" },
    { name: "TechCrunch: Roblox Assistant agentic tools", url: "https://techcrunch.com/2026/04/16/robloxs-ai-assistant-gets-new-agentic-tools-to-plan-build-and-test-games/", dateAccessed: "2026-04-25" },
    { name: "Roblox DevForum: Studio Beta -- Procedural Models", url: "https://devforum.roblox.com/t/studio-beta-introducing-procedural-models-build-parametrized-3d-models-with-code-or-ai/4592056", dateAccessed: "2026-04-25" },
    { name: "Roblox DevForum: Planning Mode announcement", url: "https://devforum.roblox.com/t/announcing-planning-mode-for-roblox-assistant/4580715", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://create.roblox.com/docs/studio/ai-assistant",
  status: "active",
  metaTitle: "Roblox Assistant Review 2026: Planning Mode + Mesh Generation",
  metaDescription:
    "Roblox Assistant review. Planning Mode (2026-04-16) + Mesh Generation + Procedural Models. Agentic AI inside Roblox Studio that plans, builds, playtests. Free with Studio.",
};
