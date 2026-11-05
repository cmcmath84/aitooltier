import { ToolReview } from "@/lib/types";

export const boltNew: ToolReview = {
  slug: "bolt-new",
  name: "Bolt.new",
  tagline: "**Nov 2026: Pro is $25/mo, and Bolt now trains on your projects by default outside the EU, UK and Switzerland.** AI full-stack web app builder by StackBlitz -- describe what you want and it writes the code in the browser. Standard and Max agents, Bolt Slides, skills, visual edits and a prompt queue added since June; strategic Microsoft Azure partnership announced 2026-05-05 (Microsoft vendor channels, Azure deploys, M365 integration)",
  category: "ai-website-builders",
  url: "https://bolt.new",

  scores: {
    easeOfUse: 8,
    outputQuality: 6,
    value: 5,
    features: 7,
    overall: 6.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["1M tokens/month, 300K daily limit", "Public and private projects", "Website hosting (up to 333k web requests), Bolt branding", "Unlimited databases"],
    },
    {
      plan: "Pro",
      price: "$25",
      period: "month",
      features: ["Billed monthly; yearly billing saves 'up to 28%'", "Starts at 10M tokens/month, no daily limit", "Unused tokens roll over (kept up to two months)", "Custom domains, no Bolt branding, security audits"],
    },
    {
      plan: "Teams",
      price: "$30",
      period: "member/month",
      features: ["Everything in Pro", "Centralized billing and team-level access management", "Private NPM registries, design-system knowledge", "Tokens are per member, not shared"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["SSO, audit logs, compliance support", "Dedicated account manager & 24/7 priority support", "Custom workflows, integrations & SLAs"],
    },
  ],

  pros: [
    "The initial magic is real -- you can go from a text prompt to a working web app in minutes, not hours",
    "Runs entirely in the browser via WebContainers, so there's nothing to install or configure locally",
    "Free tier gives you enough tokens to build a simple prototype and see if the approach works for you",
    "Supports multiple frameworks (React, Next.js, Astro, etc.) and can scaffold full-stack apps with databases",
    "Steady stream of useful additions since June: visual edits in the preview, a prompt queue (up to 20 prompts), Bolt Slides, reusable skills, Safari support, and a security audit on paid plans that does not use your tokens",
  ],
  cons: [
    "Falls apart on anything beyond ~1,000 lines of code -- the AI forgets context, duplicates components, and introduces bugs",
    "Token consumption is brutal -- a single auth bug can burn 3-5M tokens across retry attempts",
    "Deploying to production is painful for non-developers -- the gap between prototype and real app is still huge",
    "1.4 stars on Trustpilot -- customer support is essentially nonexistent when things go wrong",
    "Making small changes frequently breaks unrelated parts of your app",
    "Model training is on by default: Bolt may use your projects and chats to train AI models unless you opt out (off by default only in the EU, UK and Switzerland), for content from 2026-10-07",
  ],
  knownIssues: [
    {
      description: "MODEL-TRAINING DEFAULT (2026-10-07, vendor-primary): a new Model training setting decides whether Bolt can use your projects and chats to train AI models -- 'It’s on by default, except for accounts based in the EU, UK, or Switzerland, where it’s off by default.' 'The setting applies to content you create or submit to Bolt’s AI features on or after October 7, 2026.' Also: from 2026-11-01 Stripe's Link handles plan and domain billing (local-currency checkout possible), and from 2026-10-30 new Bolt database tables are private by default.",
      source: "Bolt release notes (support.bolt.new/release-notes, fetched 2026-11-05)",
      date: "2026-10-07",
    },
    {
      description: "CORRECTION (2026-11-05): the pricing table on this page still showed 'Pro $20/month'. bolt.new/pricing shows 'Pro $25 /month Billed monthly' (starting at 10M tokens/month) and 'Teams Popular $30 /month Per member, billed monthly'; yearly billing saves 'up to 28%' (yearly prices not captured). The Microsoft partnership post also moved: it now lives at bolt.new/blog/bolt-microsoft-partnership.",
      source: "bolt.new/pricing, bolt.new/blog/bolt-microsoft-partnership (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "BOLT FORGE + BOLT LITE (2026-09-14 to 2026-10-14, vendor-primary): 'Bolt Forge is a new third agent' running open-source models (GLM 5.3, GLM 5.3 Flash, Kimi K3, DeepSeek v4 Pro) as a research preview, included free on individual Pro plans, plus Bolt Lite, a $9/month Forge-only plan sold via waitlist. Forge prompts and code are anonymized and shared with Bolt's partners to help train open-source models. The preview ended on 2026-10-14: 'If you’re on a Pro plan, your Forge access and additional free usage end on October 14.' Lite sign-ups closed the same day; existing Lite subscribers keep their plan.",
      source: "Bolt release notes (Sep 14-20), support.bolt.new/account/bolt-forge (fetched 2026-11-05)",
      date: "2026-10-14",
    },
    {
      description: "FEATURE RELEASES (Jun-Oct 2026, vendor-primary release notes): Bolt Slides (week of 2026-07-13), reusable skills (week of 2026-07-20), a security audit on paid plans plus Safari support (week of 2026-07-27), a template marketplace and the retirement of the v1 agent -- 'As of August 3, 2026, the v1 Agent (legacy) and Discussion Mode are retired.' -- voice dictation (Aug 10-23), a prompt queue of up to 20 prompts (Aug 24-30), visual edits in the preview (Aug 31-Sep 6), pinned preview comments you can send to Bolt (Oct 5-11) and a fuller mobile experience (Oct 12-18).",
      source: "Bolt release notes (support.bolt.new/release-notes, fetched 2026-11-05)",
      date: "2026-10",
    },
    {
      description: "MODEL SELECTION ABSTRACTED (May 2026, vendor release notes 5/2-5/15 window): Bolt replaced individual model selection with **two agents -- 'Standard' and 'Max'** -- and now 'handles model selection behind the scenes.' (Claude Sonnet 4.6 had become the default model in the April 4-10 release; that distinction is now invisible to users.) Pricing-page state verified 2026-06-10 and again 2026-11-05: Free 1M tokens, **Pro $25/mo starting at 10M tokens**, Teams $30/member. NOTE: an aggregator-circulated 'Pro raised to 13M tokens on 5/5' claim is CONTRADICTED by the live pricing page (10M) -- not written here as fact",
      source: "Bolt release notes (support.bolt.new/release-notes), bolt.new/pricing (verified 2026-06-10 and 2026-11-05)",
      date: "2026-05",
    },
    {
      description: "PARTNERSHIP (2026-05-05): StackBlitz / Bolt.new announced a **strategic Microsoft partnership** -- Bolt.new is now purchasable through Microsoft vendor channels, deploys generated apps to Azure, and integrates with Microsoft 365. Material competitive shift: positions Bolt against Cursor / Lovable / v0 for the enterprise-procured app-builder slot inside Microsoft-shop organizations. Pairs with the broader Microsoft Agent 365 / Copilot agent platform push -- Bolt becomes the consumer-friendly entry point for non-developers in M365 shops who want to scaffold internal tools without going through IT. Pricing impact: enterprise via Microsoft channels typically lands at custom Azure-billed rates rather than the $25/mo Pro retail price.",
      source: "Bolt.new blog (bolt.new/blog/bolt-microsoft-partnership), Bolt on X (x.com/boltdotnew)",
      date: "2026-05-05",
    },
    {
      description: "Projects degrade badly past 10+ components -- AI starts hallucinating, duplicating files, and modifying code you didn't ask it to touch",
      source: "Reddit r/webdev",
      date: "2026-02",
    },
    {
      description: "Token burn rate is a consistent complaint -- users report spending 5-8M tokens on Supabase auth issues alone",
      source: "Trustpilot",
      date: "2026-01",
    },
    {
      description: "Customer support is unresponsive -- users report waiting weeks with no reply to emails or Discord messages",
      source: "Trustpilot",
      date: "2026-03",
    },
  ],
  bestFor: "Non-developers who want to quickly prototype a web app idea and don't need production quality. Also useful for developers who want to scaffold boilerplate fast and then take over manually.",
  notFor: "Anyone trying to build a production app purely with AI prompts. Once your project gets complex, you'll need to write real code. Developers are better off using Cursor or Claude Code. Also anyone who does not want their projects used for model training without opting out.",
  verdict: "Bolt.new is the most impressive AI app builder demo you'll ever see -- and the most frustrating production tool you'll ever use. The first 15 minutes are magical: describe an app, watch it appear. But past a basic prototype, the AI loses context, burns tokens, and breaks things faster than it builds them. The 2026 additions (visual edits, prompt queue, skills, security audits) smooth the workflow without fixing that core problem, Pro now costs $25/mo, and model training on your content is on by default outside Europe. Use it to prototype ideas quickly, then port the code to a real development environment. Don't try to build your startup on it.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Bolt.new pricing", url: "https://bolt.new/pricing", dateAccessed: "2026-11-05" },
    { name: "Bolt release notes", url: "https://support.bolt.new/release-notes", dateAccessed: "2026-11-05" },
    { name: "Bolt help: Bolt Forge", url: "https://support.bolt.new/account/bolt-forge", dateAccessed: "2026-11-05" },
    { name: "Bolt.new blog: Bolt.new comes to Microsoft Azure and Microsoft 365 (2026-05-05)", url: "https://bolt.new/blog/bolt-microsoft-partnership", dateAccessed: "2026-11-05" },
    { name: "Bolt.new blog index", url: "https://bolt.new/blog", dateAccessed: "2026-11-05" },
    { name: "Bolt.new official site", url: "https://bolt.new", dateAccessed: "2026-11-05" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/webdev", dateAccessed: "2026-04-02" },
    { name: "Product Hunt reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://bolt.new",
  status: "active",
  metaTitle: "Bolt.new Review 2026: AI App Builder That Hits a Wall Fast",
  metaDescription: "Honest Bolt.new review. Impressive AI prototyping, but breaks on complex projects. Token burn, no support, Pro now $25/mo, model training on by default. Full scores, pricing, issues. Nov 2026.",
};
