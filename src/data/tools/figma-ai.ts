import { ToolReview } from "@/lib/types";

export const figmaAi: ToolReview = {
  slug: "figma-ai",
  name: "Figma AI",
  tagline: "**The Figma agent left beta on 2026-10-06 and now draws on metered AI credits -- 3,000 a month on a $16 Professional full seat, 500 on the free Starter plan -- after Figma doubled the credits in its paid Professional add-ons on 2026-08-25.** AI features baked into the design tool everyone already uses, with a native in-canvas design agent since 2026-05-20. Still more useful shortcuts than a full design replacement",
  category: "ai-design-tools",
  url: "https://www.figma.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 6,
    value: 7,
    features: 6,
    overall: 6.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Starter",
      price: "$0",
      features: ["Unlimited drafts", "UI kits and templates", "150 AI credits/day, up to 500 AI credits/mo", "Figma MCP server: 20 tool calls / month"],
    },
    {
      plan: "Professional",
      price: "$16",
      period: "full seat / month, annual billing (Dev seat $12, Collab seat $3)",
      features: [
        "3,000 AI credits/mo per full seat (500 on Dev and Collab seats)",
        "Unlimited files and projects, team-wide design libraries",
        "Advanced Dev Mode inspection and MCP server",
        "Extra AI credits by subscription or pay-as-you-go; add-on packages carry 2x the credits since 2026-08-25 at the same cost",
      ],
    },
    {
      plan: "Organization",
      price: "$55",
      period: "full seat / month, billed annually (Dev seat $25, Collab seat $5)",
      features: ["3,500 AI credits/mo per full seat", "Shared libraries and fonts", "Centralized admin tools", "Internal publishing for Weave tools"],
    },
    {
      plan: "Enterprise",
      price: "$90",
      period: "full seat / month, billed annually (Dev seat $35, Collab seat $5)",
      features: ["4,250 AI credits/mo per full seat", "Custom team workspaces", "Design system theming and APIs", "SCIM seat management", "AI Usage Analytics API"],
    },
  ],

  pros: [
    "It's built right into Figma -- no plugins, no context switching, it just works where you already design",
    "Every seat on every plan, including free Starter, now includes AI credits, so the generally available Figma agent and Figma Make can be tried without paying",
    "Auto-layout suggestions and rename layers features save genuine time on tedious cleanup tasks",
    "Text generation for placeholder content is better than lorem ipsum and faster than writing it yourself",
    "Visual search lets you find components by describing what you want instead of scrolling through libraries",
  ],
  cons: [
    "AI-generated designs are mediocre at best -- they feel like generic templates, not thoughtful design work",
    "The 'Make a design' prompt feature produces layouts that need so much rework you might as well start from scratch",
    "AI features feel bolted on rather than deeply integrated -- they help with small tasks but don't transform the workflow",
    "AI is metered: the Starter plan gets 500 credits a month with a 150-a-day cap, a Make prompt can use roughly 30 to 100+ credits by Figma's own estimates, and the agent started consuming credits when it left beta on 2026-10-06",
  ],
  knownIssues: [
    {
      description: "CODE LAYERS OPEN BETA + CONFIG INDIA (2026-10-15): at Config India Figma launched 'new ways to build and collaborate with code, capture and share context, and build with real data and content'. Per Figma's help center, **code layers entered open beta on 2026-10-15** and consume AI credits, with a limited-time promotional period during which eligible users are not charged credits. Follow-ups in the release notes: Gemini 4 Argon rolling out in Figma Make (2026-10-13), Weave video and image models reachable through the Figma MCP (2026-10-26), a Google Drive connector for the agent and Make on all plans (2026-10-30), prototype connections used as context for code layers (2026-11-03), and 3D transforms (2026-11-12)",
      source: "Figma release notes (figma.com/release-notes), Figma help center (How Figma AI credits work)",
      date: "2026-10-15",
    },
    {
      description: "AGENT GENERALLY AVAILABLE, NOW METERED (2026-10-06): the **Figma agent in Figma Design left beta**, with Figma citing improved latency, better multiplayer performance and better access to Figma context; **Weave tools went GA the same day**. Both now consume AI credits from the same shared budget as Figma Make -- usage during the beta was free. Agent usage varies with prompt complexity and attached context; if Make has already used a seat's monthly credits, the agent shows 0 left until the reset or until an admin buys more. Seat allowances per the pricing page: 500 credits/mo on Starter (150/day cap), 3,000 on a Professional full seat, 3,500 on Organization, 4,250 on Enterprise; Dev, Collab and View seats get 500",
      source: "Figma release notes (2026-10-06), Figma help center (AI credit updates FAQ), figma.com/pricing",
      date: "2026-10-06",
    },
    {
      description: "AI CREDIT ADD-ONS ENLARGED (2026-08-25): Figma raised the credits included in its paid AI credit add-ons at no change in price -- 2x more credits on the Professional plan and 1.6x more on Organization and Enterprise -- for both subscriptions and pay-as-you-go. The credits bundled with each seat did not change. Related admin controls arrived on 2026-08-05 (per-user AI credit limits and credit requests)",
      source: "Figma help center (AI credit updates FAQ), Figma release notes (2026-08-05)",
      date: "2026-08-25",
    },
    {
      description: "ACQUISITION (2026-07-07): Figma **acquired the team behind Bud (formerly Orchids)**, a vibe-coding / AI-agent platform for building applications across platforms. Both the Bud and Orchids products **shut down by July 18, 2026** -- existing users had to migrate their projects out before the deadline. Figma's stated aim: expand beyond design into coding and prototyping, 'giving teams more tools for building and prototyping apps, not just ideating over static concepts.' Read: the in-canvas design agent (May) + code layers (Config, June) + this team are one arc -- Figma is assembling an AI app-building layer directly on its canvas to defend against Claude Design / Cursor-style tools",
      source: "TechCrunch (techcrunch.com/2026/07/07/figma-acquires-team-behind-a-vibe-coding-app/)",
      date: "2026-07-07",
    },
    {
      description: "CONFIG 2026 (2026-06-24/25): At its annual conference Figma shipped a batch of AI + platform updates -- **code layers** (attach real code to design layers), **support for animations**, more AI features, and the in-canvas **design agent moving through beta**. Extends the May in-canvas agent and the design-to-code push, and lands as Figma defends its turf against Claude Design + Cursor-style design modes. Output-quality verdict below still stands until we re-test against the Config 2026 features.",
      source: "TechCrunch (techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/)",
      date: "2026-06-24",
    },
    {
      description: "Figma launched a native in-canvas AI design agent on 2026-05-20. Distinct from the April MCP-agent support (external agents like Claude Code / Codex writing to Figma files), this agent lives on the multiplayer canvas: generate new designs from natural-language prompts, edit existing designs by instruction, auto-produce variations, and run MULTIPLE agents simultaneously on the same canvas, backed by design-tuned models. Rolling out in Figma Design first, expanding to other Figma products later. Figma frames it as a collaborator for testing ideas / visualizing edge cases / refining concepts, not a replacement for designer judgment. We have not independently tested output quality, so the verdict below (generative results still feel generic) stands until re-evaluated against this agent",
      source: "TechCrunch (techcrunch.com/2026/05/20/figma-adds-an-ai-assistant-to-its-collaborative-canvas), Figma",
      date: "2026-05-20",
    },
    {
      description: "Figma's April 2026 release introduced AI agent support -- AI agents can now write directly to Figma files via Figma's MCP server. 'Skills' framework lets agents follow design-system intent. Figma Weave workflows available on Community. Make kits/attachments support richer context (PRDs, code, videos). Video playback in FigJam/Slides/Buzz. Timed with Anthropic's Claude Design launch (Apr 17) and Figma stock dropping ~5-7% on the competitive news",
      source: "Figma release notes, DEV Community",
      date: "2026-04",
    },
    {
      description: "AI-generated components sometimes use inconsistent spacing that doesn't match the file's existing design system",
      source: "Figma Community Forum",
      date: "2026-03",
    },
    {
      description: "Visual search returns irrelevant results for abstract or complex component descriptions",
      source: "Reddit r/FigmaDesign",
      date: "2026-02",
    },
  ],
  bestFor: "Existing Figma users who want small AI-powered productivity boosts without changing their workflow.",
  notFor: "Anyone expecting AI to generate production-ready designs from a text prompt -- it's not there yet.",
  verdict: "Update, November 2026: the in-canvas Figma agent is now generally available (2026-10-06) and Figma has added code layers, Motion, Weave tools and shaders around it, so the product is broader than the review below describes; it is also metered, with AI credits attached to every seat. We have not re-tested output quality since the agent left beta, so the assessment that follows is our earlier one. Figma AI is a collection of helpful shortcuts rather than a design revolution. The layer renaming, auto-layout suggestions, and content generation features genuinely save time on busywork. But the generative design features -- creating layouts from prompts -- produce generic results that no serious designer would ship. Think of it as a productivity add-on to an already great tool, not an AI design assistant. The real value is in the small time-savers, not the headline features.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "Figma: Plans & Pricing", url: "https://www.figma.com/pricing/", dateAccessed: "2026-11-12" },
    { name: "Figma help center: AI credit updates FAQ (add-on change 2026-08-25, agent GA 2026-10-06)", url: "https://help.figma.com/hc/en-us/articles/42614902212887", dateAccessed: "2026-11-12" },
    { name: "Figma help center: How Figma AI credits work", url: "https://help.figma.com/hc/en-us/articles/33459875669015-How-AI-credits-work", dateAccessed: "2026-11-12" },
    { name: "Figma release notes feed", url: "https://www.figma.com/release-notes/feed/feed.json", dateAccessed: "2026-11-12" },
    { name: "TechCrunch: Figma acquires team behind a vibe-coding app (2026-07-07)", url: "https://techcrunch.com/2026/07/07/figma-acquires-team-behind-a-vibe-coding-app/", dateAccessed: "2026-07-18" },
    { name: "TechCrunch: Figma adds code layers, animation support, more AI (Config 2026, 2026-06-24)", url: "https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/", dateAccessed: "2026-07-04" },
    { name: "TechCrunch: Figma adds an AI assistant to its collaborative canvas (2026-05-20)", url: "https://techcrunch.com/2026/05/20/figma-adds-an-ai-assistant-to-its-collaborative-canvas/", dateAccessed: "2026-05-26" },
    { name: "Figma release notes", url: "https://www.figma.com/release-notes/", dateAccessed: "2026-11-12" },
    { name: "DEV: Figma April 2026 AI step forward", url: "https://dev.to/spookuspookus/figma-made-a-huge-step-forward-in-ai-design-april-2026-1cin", dateAccessed: "2026-04-18" },
    { name: "Figma Community Forum", dateAccessed: "2026-04-18" },
    { name: "Reddit r/FigmaDesign", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://www.figma.com",
  status: "active",
  metaTitle: "Figma AI Review 2026: Helpful Shortcuts or Overhyped Features?",
  metaDescription: "Figma AI review. The Figma agent is GA (Oct 2026) and metered by AI credits: 3,000/mo on a $16 Professional seat, 500 free. Honest scores, pricing.",
};
