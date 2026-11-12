import { ToolReview } from "@/lib/types";

export const luma: ToolReview = {
  slug: "luma",
  name: "Luma (formerly Dream Machine)",
  tagline: "**The Dream Machine name is gone -- lumalabs.ai/dream-machine now redirects to the Luma app, sold as 'Luma Agents', and plans are credit-based at $30 / $90 / $300 a month.** One canvas for Luma's own Ray3.2 video and Uni-1.1 image models plus Kling 4.0, Seedance 2.5, Veo 3.1, MiniMax H3 and Flux 3, with Scenes storyboards, Layers editing and an MCP connector for ChatGPT and Claude",
  category: "ai-video-generators",
  url: "https://lumalabs.ai/app",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 7,
    value: 6.5,
    features: 7.5,
    overall: 7.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free trial credits",
      price: "$0",
      features: ["Pricing page metadata says all plans include free trial credits", "No standing Free plan or monthly free allowance is listed on the pricing page (checked 2026-11-12)"],
    },
    {
      plan: "Plus",
      price: "$30",
      period: "month ($300 billed yearly)",
      features: ["10,000 credits", "Luma and third-party image and video models", "Edit access for guest collaborators", "Commercial use"],
    },
    {
      plan: "Pro",
      price: "$90",
      period: "month ($900 billed yearly)",
      features: ["Everything in Plus", "40,000 credits", "4x usage with the Luma Agents"],
    },
    {
      plan: "Ultra",
      price: "$300",
      period: "month ($3,000 billed yearly)",
      features: ["Everything in Pro", "150,000 credits", "15x usage with the Luma Agents"],
    },
    {
      plan: "Team / Enterprise",
      price: "Custom",
      features: ["Team: member management, projects, usage analytics, shared team credits, SSO", "Enterprise: enterprise commitments, dedicated education and training, custom fine-tuning"],
    },
    {
      plan: "Credit costs (examples)",
      price: "Varies",
      period: "usage",
      features: [
        "Ray3.2 text/image-to-video: 100 credits per 5 sec at 720p, 400 credits per 5 sec at 1080p (HDR 2x, HDR+EXR 3x)",
        "Kling 4.0: 53 credits/sec at 720p, 79 credits/sec at 1080p",
        "Seedance 2.5: 78 credits/sec at 720p, 191 credits/sec at 1080p",
        "Veo 3.1: 140 credits/sec",
        "Uni-1.1 image: 30 credits",
      ],
    },
  ],

  pros: [
    "Speed is the real differentiator -- clips generate in under a minute, which makes iteration actually practical",
    "Model aggregation is smart -- Ray3.2, Kling 4.0, Seedance 2.5, Veo 3.1, MiniMax H3 and Flux 3 for video, plus Uni-1.1, GPT Image and Nano Banana for stills, all billed from one credit pool instead of separate subscriptions (Sora dropped from the model picker after the 2026-04-26 OpenAI consumer shutdown)",
    "Image-to-video is solid -- upload a still and get surprisingly coherent motion from it",
    "The UI is clean and straightforward compared to some competitors that bury features behind confusing menus",
  ],
  cons: [
    "No standing free plan on the pricing page any more -- only trial credits, and the cheapest paid tier is $30/month",
    "Quality varies wildly depending on which model you select and how you phrase the prompt",
    "Credits burn fast at high resolution -- a 5-second 1080p Ray3.2 clip costs 400 credits, so the $30 Plus plan's 10,000 credits is 25 such clips, and third-party models such as Veo 3.1 (140 credits/sec) cost more",
    "The product has moved upmarket toward agencies and brand teams (Luma Agents, Variants, Team and Enterprise plans) -- hobbyists get a busier canvas and a $90 or $300 step-up if they outgrow Plus",
  ],
  knownIssues: [
    {
      description: "NAME, URL AND PRICING CHECK (2026-11-12, vendor pages): the 'Dream Machine' name no longer appears on Luma's product, pricing or news pages. lumalabs.ai/dream-machine redirects to lumalabs.ai/app (page title 'Creative agents for creative professionals | Luma') and the product is marketed as **Luma** / **Luma Agents**. The pricing page now lists credit-based individual plans -- **Plus $30/month** ($300 billed yearly, 10,000 credits), **Pro $90/month** ($900 yearly, 40,000 credits, '4x usage with the Luma Agents'), **Ultra $300/month** ($3,000 yearly, 150,000 credits, '15x usage') -- plus Team and Enterprise (contact sales). The Free / Standard $23.99 / Pro $95.99 generation-count plans this page carried until today are not on the live page; the date of the switch is not published. Per-model credit costs are listed, e.g. Ray3.2 at 400 credits per 5 seconds of 1080p",
      source: "lumalabs.ai/pricing, lumalabs.ai/dream-machine (redirect), both fetched 2026-11-12",
      date: "2026-11-12",
    },
    {
      description: "PRODUCT (2026-11-03): **Luma MCP** -- Luma's creative workflows can now be run from inside ChatGPT and Claude ('Luma MCP is now available for Claude and ChatGPT'). Pre-set workflows include Product Shots, Camera Angles, Background swap, Relight Studio and short promo clips; usage draws on your Luma subscription credits. Related (2026-10-08): Claude Motion animations open directly in Luma through the MCP connection, where Ray and Uni models turn them into final video",
      source: "lumalabs.ai/news/new-luma-mcp, lumalabs.ai/news/Luma-Claude-Motion-Launch-Partnership",
      date: "2026-11-03",
    },
    {
      description: "MODELS AND FEATURES ADDED JULY - OCTOBER 2026 (recorded late on 2026-11-12): **Kling 4.0** added for fast action and big camera moves, 'available to every Luma customer' (2026-10-23); **Variants** -- upload one approved static ad and get every size (Story 9:16, Portrait 4:5, Square 1:1, Medium Rectangle 6:5, Widescreen 16:9) and language (2026-10-01); **Luma Scenes** -- a storyboard of editable keyframes powered by Uni-1 that renders with Ray 3.2 or Seedance 2 only after you approve it, so fixing one scene costs one scene (2026-08-11); **Seedance 2.5** with native 30-second single-pass generation and up to 50 reference inputs, and **MiniMax H3** with native 2K at 24fps and same-pass audio (both 2026-08-06); **Layers** -- images generated or decomposed into independently editable layers (2026-07-29); **Pages** to split large boards into sections (2026-07-28)",
      source: "lumalabs.ai/news (kling-4-in-luma-ai-video, introducing-luma-variants, introducing-luma-scenes, seedance-2.5-live-in-luma, minimax-h3-now-available-in-luma-agents, introducing-layers, new-luma-pages)",
      date: "2026-10-23",
    },
    {
      description: "RAY3.2 SHIPPED (2026-06-09): Luma's newest in-house model + API -- up to 16 keyframes per clip, facial performance tracking across up to 8 faces, native HDR with 16-bit EXR export, reframing, and clips up to 20 seconds at 1080p. Separately, Luma announced the Open Physical AI Lab (2026-06-01) -- an open-science lab targeting generalization in physical AI / world models, marking Luma's expansion beyond consumer video into robotics research",
      source: "lumalabs.ai/news (Ray3.2 + Open Physical AI Lab posts), Semafor",
      date: "2026-06",
    },
    {
      description: "Sora dropped from Luma's model picker after OpenAI's consumer Sora shutdown on 2026-04-26 (API survives until 2026-09-24 but Luma's integration was the consumer surface). Older review copy referencing 'Sora 2' was tied to OpenAI's now-retired branding -- updated tagline + pros to reflect current model lineup (Ray 3 + Veo 3 + Kling)",
      source: "OpenAI Help Center, Luma Labs changelog",
      date: "2026-04-26",
    },
    {
      description: "Ray 3 model sometimes produces noticeable morphing artifacts on human faces during movement",
      source: "Reddit r/aivideo",
      date: "2026-03",
    },
    {
      description: "Third-party model availability can be inconsistent -- Veo 3 and Kling options occasionally have extended queue times during peak hours",
      source: "Discord community",
      date: "2026-02",
    },
  ],
  bestFor: "Marketers, agencies and content creators who need quick video clips and ad variants and want to compare outputs from multiple AI models on one canvas without subscribing to each one separately.",
  notFor: "Anyone on a tight budget -- there is no standing free plan on the pricing page and paid plans start at $30/month with credits that go quickly at 1080p. Filmmakers who want a dedicated editing timeline may still prefer Runway.",
  verdict: "Luma has outgrown the Dream Machine name: the product is now simply Luma, pitched as creative agents for brand and agency teams, and the value proposition is model aggregation plus workflow. Being able to run the same shot through Ray3.2, Kling 4.0, Seedance 2.5 and Veo 3.1 from one board is genuinely useful, and Scenes (approve the storyboard before paying for the render), Layers and Variants are real production features rather than demos. The trade-off is cost and complexity: plans are credit-based at $30 / $90 / $300 a month, a 5-second 1080p Ray3.2 clip is 400 credits, and the quality ceiling still depends on which model you pick. The OpenAI Sora consumer shutdown (2026-04-26) removed one model-picker option, but the catalog is now broader than it was then. Plus at $30/mo is a reasonable entry point for video experimentation; Pro and Ultra only make sense at commercial volume.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "Luma: Plans & Pricing (Plus / Pro / Ultra, per-model credit costs)", url: "https://lumalabs.ai/pricing", dateAccessed: "2026-11-12" },
    { name: "Luma app page (lumalabs.ai/dream-machine redirects here)", url: "https://lumalabs.ai/app", dateAccessed: "2026-11-12" },
    { name: "Luma news index", url: "https://lumalabs.ai/news", dateAccessed: "2026-11-12" },
    { name: "Luma news: Connect Luma to ChatGPT and Claude (2026-11-03)", url: "https://lumalabs.ai/news/new-luma-mcp", dateAccessed: "2026-11-12" },
    { name: "Luma news: Kling 4.0 in Luma (2026-10-23)", url: "https://lumalabs.ai/news/kling-4-in-luma-ai-video", dateAccessed: "2026-11-12" },
    { name: "Luma news: Start in Claude Motion. Finish it in Luma. (2026-10-08)", url: "https://lumalabs.ai/news/Luma-Claude-Motion-Launch-Partnership", dateAccessed: "2026-11-12" },
    { name: "Luma news: Live Now: Luma Variants (2026-10-01)", url: "https://lumalabs.ai/news/introducing-luma-variants", dateAccessed: "2026-11-12" },
    { name: "Luma news: Introducing Luma Scenes (2026-08-11)", url: "https://lumalabs.ai/news/introducing-luma-scenes", dateAccessed: "2026-11-12" },
    { name: "Luma news: Seedance 2.5: Now Live in Luma (2026-08-06)", url: "https://lumalabs.ai/news/seedance-2.5-live-in-luma", dateAccessed: "2026-11-12" },
    { name: "Luma news: MiniMax H3 Available Now (2026-08-06)", url: "https://lumalabs.ai/news/minimax-h3-now-available-in-luma-agents", dateAccessed: "2026-11-12" },
    { name: "Luma news: Introducing Layers (2026-07-29)", url: "https://lumalabs.ai/news/introducing-layers", dateAccessed: "2026-11-12" },
    { name: "Luma news: Pages (2026-07-28)", url: "https://lumalabs.ai/news/new-luma-pages", dateAccessed: "2026-11-12" },
    { name: "Luma Labs news: Introducing Ray3.2", url: "https://lumalabs.ai/news/introducing-ray-3-2", dateAccessed: "2026-07-05" },
    { name: "Luma Labs news: Open Physical AI Lab", url: "https://lumalabs.ai/news/luma-open-physical-ai-lab", dateAccessed: "2026-07-05" },
    { name: "Luma Labs official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-03-31" },
    { name: "Discord community feedback", dateAccessed: "2026-03-31" },
    { name: "YouTube comparisons", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://lumalabs.ai/app",
  status: "active",
  metaTitle: "Luma (Dream Machine) Review 2026: Ray3.2 + Multi-Model Video",
  metaDescription: "Luma review (formerly Dream Machine). Ray3.2 plus Kling 4.0, Seedance 2.5 and Veo 3.1 on one canvas. Credit plans at $30 / $90 / $300 a month. Nov 2026.",
};
