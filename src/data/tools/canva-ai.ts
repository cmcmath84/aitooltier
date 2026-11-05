import { ToolReview } from "@/lib/types";

export const canvaAi: ToolReview = {
  slug: "canva-ai",
  name: "Canva AI (Magic Studio)",
  tagline: "**Nov 2026: Canva shipped its own image model (Canva Craft) and design-editing model (Canva Brush), and the Teams plan is closed to new sign-ups.** Canva AI 2.0 (launched at Canva Create in April 2026) -- agentic design suite with conversational design, Canva Code, AI connectors (now including Meta's Muse agent) and the ProSuite (Affinity, Cavalry, Flourish, Leonardo). Pro US$144/yr, Business US$250/yr per person",
  category: "ai-design-tools",
  url: "https://canva.com",

  scores: {
    easeOfUse: 10,
    outputQuality: 7,
    value: 9,
    features: 8,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Limited access to Standard and Premium AI", "1.6M+ templates, 1 Brand Kit (3 colors only)", "5GB cloud storage", "Canva Offline"] },
    { plan: "Pro", price: "US$144", period: "year", features: ["One person", "10x more AI than Canva Free (Premium or Ultra AI tools)", "Canva AI 2.0, AI connectors, Magic Layers", "5 Brand Kits, social scheduling, 100GB storage", "AI Pass add-on available (extra cost)"] },
    { plan: "Business", price: "US$250", period: "year per person", features: ["20x more AI than Canva Free", "Collaboration and team admin, 100 Brand Kits and approvals", "Flourish access, 500GB storage", "AI Pass add-on and AI top-ups available (extra cost)"] },
    { plan: "Enterprise", price: "Custom", features: ["SSO and SCIM provisioning", "1000 Brand Kits with tiered approvals", "Canva AI 2.0 and AI connectors listed as 'Soon'", "1TB cloud storage"] },
  ],

  pros: [
    "If you already use Canva, the AI features are just there -- zero learning curve",
    "Canva now builds its own models: Canva Craft for images (2K, also on Canva's public API) and Canva Brush for design edits, which Canva says is up to 69% faster and 46% cheaper per edit than its previous design agent",
    "Magic Write is decent for social media captions and short copy, and Magic Eraser and Background Remover still work well for quick edits",
    "Price is hard to beat -- the whole design platform plus AI for US$144 a year on Pro",
    "The ProSuite (2026-09-16) connects Affinity, Cavalry, Flourish and Leonardo with Canva for professional work",
  ],
  cons: [
    "Canva's own image model is new (Craft, 2026-10-22) -- Canva says it debuted fourth on DesignArena, but it has not been independently tested here, and dedicated image tools still offer more control",
    "The Free plan's AI allowance is unspecified ('Limited access'), and paid allowances are stated as multiples (Pro 10x Free, Business 20x) rather than a number of uses",
    "Standard, Premium and Ultra AI tools draw on one shared monthly allowance, heavier tools use more of it, and extra AI costs more through AI Pass or top-ups",
    "Not useful for anyone who doesn't already use Canva for design",
    "Company turbulence: on 2026-11-03 Canva said 1,271 people, or 22% of staff, will be affected by a restructuring",
  ],
  knownIssues: [
    { description: "CANVA CRAFT + CANVA BRUSH (2026-10-22 / 2026-10-29, vendor-primary): Canva Research, Canva's in-house AI lab of more than 160 scientists and engineers (introduced 2026-10-21), shipped Canva's first image model -- 'Available now in Canva and to developers through our public API, Craft generates stunning, high-quality images at 2K resolution in any aspect ratio.' Canva says 'It debuted as the fourth most advanced image generation model on DesignArena'. A week later came Canva Brush, a vision-language model for design edits: 'Starting today, Brush is powering supported design edits in Canva AI for Canva Pro subscribers, with expanded availability coming soon.' Canva claims Brush is up to 69% faster and 46% lower cost per edit than its previous design agent.", source: "canva.com/newsroom/news/canva-craft/ (2026-10-22), canva.com/newsroom/news/canva-brush/ (2026-10-29), canva.com/newsroom/news/introducing-canva-research/ (2026-10-21), fetched 2026-11-05", date: "2026-10-29" },
    { description: "PLAN LINEUP + PRICES (verified 2026-11-05, vendor-primary): canva.com/pricing (US) now lists Free, Pro, Business and Enterprise -- 'Canva Teams is no longer available for new sign-ups or upgrades.' Existing Teams customers stay on their plan. Yearly prices: Pro US$144 per year for one person, Business US$250 per year per person, Enterprise by quote. AI allowances are relative: Free gets 'Limited access to Standard and Premium AI', Pro '10x more AI than Canva Free', Business and Enterprise 20x. The AI Pass add-on promises to 'Unlock 40x more AI than Canva Pro'.", source: "canva.com/pricing (fetched 2026-11-05)", date: "2026-11-05" },
    { description: "OTHER RELEASES (Sep-Nov 2026, vendor-primary): the Canva ProSuite (2026-09-16) -- 'The Canva ProSuite connects Affinity, Cavalry, Flourish and Leonardo for the first time' -- a Canva connector for Meta's Muse agent (2026-09-29) and Affinity for iPad (2026-11-03). Also on 2026-11-03, co-founder and CEO Melanie Perkins announced a restructuring: 'This means 1,271 people, or 22% of Canva, will be impacted.'", source: "canva.com/newsroom/news/canva-prosuite-launch/, canva-meta-muse/, affinity-for-ipad/, canva-team-update/ (fetched 2026-11-05)", date: "2026-11-03" },
    { description: "CORRECTION (2026-11-05): this page priced Canva at 'Pro $13/month (500 AI uses/mo)', 'Teams $10/user/month (500 AI uses/user)' and 'Free -- 50 AI uses/mo'. Canva's pricing page shows Pro at US$144/year, Business at US$250/year per person, no Teams plan for new customers, and AI allowances stated as 'Limited' (Free), 10x (Pro) and 20x (Business) rather than a count of uses.", source: "canva.com/pricing (fetched 2026-11-05)", date: "2026-11-05" },
    { description: "CORRECTION (2026-11-05): claims that Canva's Lucid Origin image generation is '5x faster' and '30x cheaper', and that its image-to-video model is '7x faster' and '17x cheaper', came from keynote coverage (9to5Mac), not Canva. Neither of Canva's own Create 2026 newsroom posts (canva-create-2026-ai, canva-create-2026-launches) contains them, so they have been removed from this page.", source: "canva.com/newsroom/news/canva-create-2026-ai/, canva.com/newsroom/news/canva-create-2026-launches/ (fetched 2026-11-05)", date: "2026-11-05" },
    { description: "CREATE 2026 ADDENDA (verified vendor-primary 2026-06-10): Canva AI 2.0 launched as a **research preview** at Create (April 15), with general availability 'rolling out over the coming weeks' -- by June it is broadly available. Same-event items not previously captured: **Canva Offline** (essential editing offline, auto-sync on reconnect), **Print Shop** (vendor copy says both '40' and 'more than 60' new print products -- Canva's own pages disagree), **Cavalry now completely free** for any Canva account (pro motion-graphics tool), expanded connectors (Slack, Gmail, Google Drive/Calendar, Notion, Zoom, HubSpot, Microsoft, Atlassian, Linear), and an **Affinity AI Connector with Claude**. Scheduling is general agentic task scheduling (e.g. weekly content batches that run while you're offline), not just social posting", source: "Canva newsroom (canva.com/newsroom/news/canva-create-2026-ai/, canva-create-2026-launches/)", date: "2026-06" },
    { description: "Canva AI 2.0 launched at Canva Create on 2026-04-16 -- major platform shift from 'design-with-AI' to 'AI-with-design'. Built on the new Canva Design Model (Canva's own foundation model that understands design structure). Six new agentic workflows: connectors (Slack, Notion, Zoom, Gmail), web research, brand intelligence, Sheets AI, Canva Code 2.0. Generates full brand campaigns from text prompts. Rolling out via homepage discovery to first 1M users, broader rollout 'in coming weeks'", source: "Canva newsroom, TechCrunch, Fortune", date: "2026-04" },
    { description: "Magic Expand sometimes produces noticeable artifacts at the edges of expanded images", source: "Canva Community", date: "2026-03" },
  ],
  bestFor: "Canva users who want AI shortcuts in their existing workflow. Social media managers, small business owners, and non-designers who already make content in Canva -- now with Canva's own image and design-edit models built in.",
  notFor: "Professional designers who need pixel-level control outside a template platform (the ProSuite's Affinity and Cavalry cover more of that than Canva itself), and anyone who wants a standalone AI image generator. Use Midjourney for pure image work and Figma for product design.",
  verdict: "Canva AI is the smart play by Canva -- take the platform more than a quarter of a billion people already use and build AI into it. Since April it has gone further than sprinkling third-party AI on top: Canva Research now ships its own image model (Craft) and design-editing model (Brush), and the ProSuite pulls Affinity, Cavalry, Flourish and Leonardo into one ecosystem. Pricing changed too -- Pro is US$144 a year, Teams is closed to new sign-ups in favour of Business at US$250 per person per year, and AI allowances are now multiples rather than fixed counts. If you already pay for Canva Pro, the AI features are a strong bonus; if you are evaluating it purely as an AI image tool, dedicated alternatives still give more control.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Canva pricing (US)", url: "https://www.canva.com/pricing/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: Introducing Canva Craft (2026-10-22)", url: "https://www.canva.com/newsroom/news/canva-craft/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: Introducing Canva Brush (2026-10-29)", url: "https://www.canva.com/newsroom/news/canva-brush/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: Introducing Canva Research (2026-10-21)", url: "https://www.canva.com/newsroom/news/introducing-canva-research/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: Introducing the Canva ProSuite (2026-09-16)", url: "https://www.canva.com/newsroom/news/canva-prosuite-launch/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: Canva expands design with Muse, from Meta (2026-09-29)", url: "https://www.canva.com/newsroom/news/canva-meta-muse/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: Affinity for iPad (2026-11-03)", url: "https://www.canva.com/newsroom/news/affinity-for-ipad/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: An important update on our team (2026-11-03)", url: "https://www.canva.com/newsroom/news/canva-team-update/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: Canva Create 2026 AI", url: "https://www.canva.com/newsroom/news/canva-create-2026-ai/", dateAccessed: "2026-11-05" },
    { name: "Canva newsroom: More from Canva Create 2026", url: "https://www.canva.com/newsroom/news/canva-create-2026-launches/", dateAccessed: "2026-11-05" },
    { name: "TechCrunch: Canva AI agentic design", url: "https://techcrunch.com/2026/04/16/canvas-ai-assistant-can-now-call-various-tools-to-make-designs-for-you", dateAccessed: "2026-04-18" },
    { name: "Fortune: Canva AI 2.0 Cliff Obrecht", url: "https://fortune.com/2026/04/16/canva-ai-agentic-design-suite-coo-cliff-obrecht/", dateAccessed: "2026-04-18" },
    { name: "Hands-on testing", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://canva.com",
  status: "active",
  metaTitle: "Canva AI Review (Nov 2026): Canva Craft, Canva Brush, AI 2.0 and New Plans",
  metaDescription: "Canva AI review. Canva Craft image model (Oct 22) and Canva Brush design-edit model (Oct 29), Canva AI 2.0 with connectors, ProSuite. Pro US$144/yr, Business US$250/yr per person; Teams closed to new sign-ups.",
};
