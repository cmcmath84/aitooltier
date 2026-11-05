import { ToolReview } from "@/lib/types";

export const robloxAssistant: ToolReview = {
  slug: "roblox-assistant",
  name: "Roblox Assistant",
  tagline: "**Nov 2026: Scene Generation (beta, 2026-10-30) builds editable scenes from a prompt or image, Prompt-to-Avatar entered Studio Beta on 2026-10-29, and creator-authored Skills (2026-07-09) also work in Claude Code and Cursor via Studio MCP.** Roblox Studio's agentic AI that plans, builds, and playtests games -- Planning Mode (2026-04-16), Mesh Generation and Procedural Models, free inside Studio",
  category: "ai-code-assistants",
  url: "https://create.roblox.com/docs/assistant/guide",

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
        "Assistant with Planning Mode, multiple chats and Skills",
        "Mesh, procedural model and scene generation (procedural models: 50 per rolling 24 hours)",
        "Requires a Roblox account + Studio install",
        "Works on published + unpublished experiences",
        "Third-party AI clients can connect through the Studio MCP server",
      ],
    },
  ],

  pros: [
    "Planning Mode (2026-04-16) turns Assistant from a code completer into a full agent -- it analyzes your game's code and data model, asks clarifying questions, produces an editable plan, and then executes across multiple scripts. Closest thing in the games space to what Devin does for web dev. Since 2026-06-18 plans are editable, persistent Markdown documents",
    "Agentic loop is genuinely real: Assistant uses playtesting tools to read output logs, capture screenshots, drive keyboard + mouse inputs, and identify bugs -- then auto-fixes. This is the piece most AI-coding-assistants cannot do because they don't have the runtime",
    "Mesh Generation produces fully textured 3D objects from natural-language prompts ('create a campfire'), with editable lighting properties. Replaces placeholder-asset workflows for prototyping",
    "Procedural Models reached Full Release (GA) on 2026-05-18 -- a new `ProceduralModel` instance type for parametric 3D objects built via code or AI prompts that auto-adapt when you change attribute values (shelf count, staircase height, colors, materials), no re-generation needed. Now works in Team Create and live games with no opt-in, and models are distributable via the Creator Store",
    "Integrated into Roblox Studio directly, so every Studio user already has it -- no separate install, no API key, no integration work. Roblox says 44% of its top 1,000 creators use Assistant or third-party AI tools via MCP",
  ],
  cons: [
    "Locked to Roblox Studio -- not usable outside the Roblox ecosystem. This is a game-dev-specific tool, not a generic 3D asset generator",
    "Output quality on Mesh Generation trails dedicated 3D tools (Tencent HY-World 2.0, Meshy, Rodin) on geometry fidelity; it's production-ready for prototyping and UGC, not AAA",
    "Procedural Models is now GA (2026-05-18), but the AI-prompt generation path still carries a quota (50 procedural models per rolling 24 hours) and can produce inconsistent geometry on complex prompts -- the deterministic code-based path is the more reliable one for production work",
    "Deep Roblox platform lock-in -- any workflow you build assumes staying in the Roblox ecosystem. Roblox takes a large revenue cut on published experiences",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-05): from April this page said Assistant 'brings 3D-native creation to 70M+ daily creators' and that Planning Mode launched 'at RDC 2026'. No Roblox source we found supports the 70M figure; Roblox's own adoption figure (Newsroom, 2026-04-15) is that '44% of the top 1,000 creators on Roblox use' Roblox Assistant or third-party AI tools via MCP. Planning Mode was announced on the DevForum on 2026-04-16 and in the Newsroom on 2026-04-15, not at RDC. Also removed: the speculative 'Premium (assumed future tier)' pricing row, which had no Roblox source.",
      source: "Roblox Newsroom: Roblox Studio is Going Agentic (about.roblox.com), DevForum: Announcing Planning Mode for Roblox Assistant (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "DOCS MOVED, QUOTA DOCUMENTED (checked 2026-11-05, vendor-primary): the docs URL this page used, create.roblox.com/docs/studio/ai-assistant, now returns 404; the current page is 'Assistant for Studio' at create.roblox.com/docs/assistant/guide. It documents up to '50 procedural models within a 24-hour rolling window', a screen capture subagent, and direct access for 'a third-party client via MCP or your own API key'. Assistant remains free inside Studio, and none of the Roblox pages checked mention a paid Assistant tier.",
      source: "create.roblox.com/docs/assistant/guide (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "PRODUCT: SCENE GENERATION BETA, PROMPT-TO-AVATAR, STUDIO MCP OPEN CLOUD (2026-10-29 to 2026-11-04, vendor-primary): Roblox launched the Scene Generation tool as a beta in Studio on 2026-10-30. It turns images and prompts into 'an editable scene of models, textures, and terrain' via /generate_scene in Assistant or right-click Generate > Scene (Assistant accepts a single image for now), and 'Each generation usually takes between 2-3 minutes.' On 2026-10-29, Prompt-to-Avatar entered Studio Beta: it 'generates Roblox-ready 3D avatars from text prompts' from Avatar Setup, Assistant or Studio MCP. On 2026-11-04 Studio MCP got 'full access to Open Cloud' (developer products, game passes, settings, analytics, asset import), and 'A new permission system lets you choose what agents can access in each game.'",
      source: "Roblox DevForum announcements 4966611, 4964945, 4975849 (vendor-primary)",
      date: "2026-10-30",
    },
    {
      description: "PRODUCT: ASSISTANT UPDATES MAY-SEPTEMBER 2026 (vendor-primary, DevForum): 2026-05-28 new Studio testing APIs ('scriptable device simulation, multiplayer testing, and virtual input') plus Skills that teach Assistant to use them; 2026-06-04 'Assistant now supports multiple chats and persistent chat history.' plus a screen capture subagent; 2026-06-18 Planning Mode plans became 'editable, persistent Markdown documents', and search/insert covers inventories 'as well as paid and free assets on the Creator Store'; 2026-06-26 MicroProfiler capture analysis; 2026-07-09 creator-authored Skills ('Skills also work in third-party MCP clients like Claude Desktop, Claude Code and Cursor'); 2026-08-19 Studio MCP multi-agent routing (every tool call names its target Studio); 2026-09-23 new texture generation tools, 'mesh segmentation for imported models', and image previews.",
      source: "Roblox DevForum announcements 4657854, 4668130, 4690993, 4704417, 4728447, 4820583, 4890084 (vendor-primary)",
      date: "2026-09-23",
    },
    {
      description:
        "Planning Mode launched 2026-04-16 (DevForum announcement; Roblox Newsroom post 2026-04-15). This is the big agentic turn for Roblox Assistant -- prior versions were closer to Copilot-style autocomplete inside Luau scripts. The shift to 'Plan-Build-Test' matches the pattern we're seeing across code-assistants (Cursor 3, Devin 2.2, Windsurf 2.0)",
      source: "Roblox Newsroom (about.roblox.com), TechCrunch, Roblox DevForum",
      date: "2026-04",
    },
    {
      description:
        "Procedural Models reached FULL RELEASE (GA) on 2026-05-18, out of the 2026-04-28 Studio Beta. Adds a new `ProceduralModel` instance type: build parametric 3D objects via code or AI (Roblox Assistant / Studio MCP, text or image prompts) that auto-adapt geometry, colors, and materials when attribute values change -- no re-generation. Now available in Team Create and live games with no opt-in (was Studio-only in beta) and distributable via the Creator Store; insert via the Insert Object menu or the /generate_procedural_model command. Memory-leak and resize bugs from the beta were fixed for GA. Mesh Generation remains the separate prompt-to-textured-mesh path",
      source: "Roblox DevForum: Full Release -- Procedural Models (devforum.roblox.com/t/full-release-procedural-models-build-parametrized-3d-models-with-code-or-ai/4642542)",
      date: "2026-05-18",
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
    "Roblox Assistant's Planning Mode is the most interesting agentic-coding release outside of pure dev tooling in April 2026. The agent loop is real -- it plans, implements, runs, captures screenshots, reads logs, and iterates -- and it's sitting inside the default tool every Roblox creator already uses. For Roblox creators this is a free productivity cliff; for everyone else it's a preview of what game-engine-integrated AI agents will look like across Unity, Unreal, and Godot over the next 12-24 months.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Roblox Creator Hub: Assistant for Studio", url: "https://create.roblox.com/docs/assistant/guide", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Introducing Scene Generation (2026-10-30)", url: "https://devforum.roblox.com/t/introducing-scene-generation-prototype-scenes-faster/4966611", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: [Studio Beta] Prompt-to-Avatar (2026-10-29)", url: "https://devforum.roblox.com/t/studio-beta-generate-game-characters-with-prompt-to-avatar/4964945", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Studio MCP Server Updates, Open Cloud access (2026-11-04)", url: "https://devforum.roblox.com/t/studio-mcp-server-updates-open-cloud-access-in-your-mcp-client-and-asset-import-workflows/4975849", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Creator-Authored Skills (2026-07-09)", url: "https://devforum.roblox.com/t/assistant-updates-introducing-creator-authored-skills/4728447", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Editable Markdown Plans (2026-06-18)", url: "https://devforum.roblox.com/t/assistant-update-editable-markdown-plans-improvements-to-searchinsert/4690993", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Multiple Chats and Chat History (2026-06-04)", url: "https://devforum.roblox.com/t/assistant-updates-multiple-chats-and-chat-history/4668130", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: New Studio Testing APIs and Assistant Improvements (2026-05-28)", url: "https://devforum.roblox.com/t/new-studio-testing-apis-and-assistant-improvements/4657854", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: MicroProfiler and Assistant (2026-06-26)", url: "https://devforum.roblox.com/t/automated-performance-profiling-with-microprofiler-and-assistant/4704417", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Studio MCP Multi-Agent Improvements (2026-08-19)", url: "https://devforum.roblox.com/t/studio-mcp-multi-agent-improvements-and-connected-ai-clients/4820583", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Texture Generation, Segment Any Mesh, Image Previews (2026-09-23)", url: "https://devforum.roblox.com/t/introducing-new-texture-generation-tools-segment-any-mesh-and-image-previews/4890084", dateAccessed: "2026-11-05" },
    { name: "Roblox DevForum: Full Release -- Procedural Models (2026-05-18)", url: "https://devforum.roblox.com/t/full-release-procedural-models-build-parametrized-3d-models-with-code-or-ai/4642542", dateAccessed: "2026-05-26" },
    { name: "Roblox Newsroom: Studio going agentic (2026-04-15)", url: "https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic", dateAccessed: "2026-11-05" },
    { name: "TechCrunch: Roblox Assistant agentic tools", url: "https://techcrunch.com/2026/04/16/robloxs-ai-assistant-gets-new-agentic-tools-to-plan-build-and-test-games/", dateAccessed: "2026-04-25" },
    { name: "Roblox DevForum: Studio Beta -- Procedural Models", url: "https://devforum.roblox.com/t/studio-beta-introducing-procedural-models-build-parametrized-3d-models-with-code-or-ai/4592056", dateAccessed: "2026-04-25" },
    { name: "Roblox DevForum: Planning Mode announcement (2026-04-16)", url: "https://devforum.roblox.com/t/announcing-planning-mode-for-roblox-assistant/4580715", dateAccessed: "2026-11-05" },
  ],
  affiliateUrl: "https://create.roblox.com/docs/assistant/guide",
  status: "active",
  metaTitle: "Roblox Assistant Review 2026: Planning Mode, Scene Generation, Skills",
  metaDescription:
    "Roblox Assistant review. Planning Mode (2026-04-16), Mesh Generation, Procedural Models, Scene Generation beta and creator Skills. Agentic AI inside Roblox Studio that plans, builds, playtests. Free with Studio.",
};
