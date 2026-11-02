import { ToolReview } from "@/lib/types";

export const perplexityComet: ToolReview = {
  slug: "perplexity-comet",
  name: "Perplexity Comet",
  tagline: "Perplexity's AI browser -- free download on Mac, Windows, iOS, and Android. Launched as a limited release on 2025-07-09, free worldwide since 2025-10-02, and on iOS since the 2026-03-26 changelog. The browser is free but the Comet Assistant browser agent needs Pro or Max, per the plan table updated 2026-10-29",
  category: "ai-personal-agents",
  url: "https://www.perplexity.ai/comet",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 9.5,
    features: 8,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (all platforms)",
      price: "$0",
      features: [
        "Free download on Mac, Windows, iOS, and Android",
        "Free worldwide since 2025-10-02 (limited release began 2025-07-09); iOS added 2026-03-26",
        "Browser Agent (Comet Assistant) queries: 'No' on the Free plan per Perplexity's plan-comparison table -- agentic multi-step tasks need Pro, Max, or Enterprise",
        "Bundled Perplexity account sync",
      ],
    },
    {
      plan: "Perplexity Pro",
      price: "$17",
      period: "month (billed annually)",
      features: [
        "Browser Agent (Comet Assistant) queries: 'Monthly limits (average use)'",
        "Expanded Computer access, 4,000 bonus credits, Deep research, top AI models with model selection",
        "Monthly-billing price not surfaced on the pricing page in this review",
      ],
    },
    {
      plan: "Perplexity Max",
      price: "$167",
      period: "month (billed annually)",
      features: [
        "Browser Agent (Comet Assistant) queries: 'Monthly limits (advanced use)'",
        "Maximum Computer usage, 35,000 bonus credits, 10,000 monthly credits",
        "Priority access to new features",
        "Monthly-billing price not surfaced on the pricing page in this review",
      ],
    },
    {
      plan: "Enterprise Pro / Enterprise Max",
      price: "From $40",
      period: "seat/month",
      features: [
        "Enterprise Pro: 'Per-seat pricing (starts at $40/month or $400/year/seat)'",
        "Comet Assistant queries: Enterprise Pro 'Extended limits (80/month)', Enterprise Max 'Highest limits (800/month)'",
        "Comet for Enterprise (macOS and Windows) with browser policies and controls",
      ],
    },
  ],

  pros: [
    "Free to download on every major platform -- Mac, Windows, iOS, and Android -- so evaluating an AI browser costs nothing. Free worldwide since 2025-10-02; the iOS app (2026-03-26) closed the last platform gap",
    "Agentic browsing does real work on paid plans -- the Comet Assistant can research products across tabs, draft emails, and complete multi-step tasks, which is meaningfully different from a chatbot with a browse tool",
    "Bundled into Perplexity's existing account -- if you already pay for Perplexity Pro or Max, Comet Assistant agent queries come with your plan's limits. No new subscription to evaluate",
    "Category timing is good: AI browsers are a rising category (ChatGPT Atlas, Arc, Dia, Opera Neon all in motion). Comet being a free download lets Perplexity compete on distribution",
  ],
  cons: [
    "Still primarily a Perplexity-ecosystem browser -- search results, chat, and agent behavior all lean into Perplexity's own models and indexes. If you want Google search + agent behavior, use Google's own AI Mode instead",
    "'Free' covers the browser, not the agent: Perplexity's plan table lists Browser Agent (Comet Assistant) queries as 'No' on the Free plan, so the multi-step agent features that make Comet interesting require Pro, Max, or Enterprise",
    "Comet Plus (premium publisher content) was announced as a $5 standalone subscription included with Pro and Max, but it is not listed on Perplexity's current pricing page -- confirm availability before counting on it",
    "Browser extension + app surface area is still maturing. Expect some UX rough edges, especially on the newer mobile apps",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-02 sweep): earlier versions of this page said Comet went 'FREE on all platforms as of 2026-03-18' after being '$200/mo Max-only'. That history was wrong. Vendor-primary dates: limited release on July 9, 2025 (the 2025-10-02 post says 'We first launched Comet to limited release on July 9'); Perplexity's post 'The Internet is Better on Comet' (publishedAt 2025-10-02) says 'Today we are releasing the Comet browser to the world, for free'; the changelog dated 03/26/26 says 'This week, Perplexity launched Comet to all iOS users. With this release, Comet is now available on all major platforms: iOS, Android, Mac, and Windows.' Do not revert to the 2026-03-18 framing",
      source: "Perplexity blog: comet-is-now-available-to-everyone-worldwide (publishedAt 2025-10-02); Perplexity changelog: what-we-shipped--march-27-2026 (dated 03/26/26)",
      date: "2026-11-02",
    },
    {
      description: "Comet Assistant agent queries are NOT included on the Free plan. Perplexity's 'Which Perplexity Subscription Plan is right for you?' comparison table (last modified October 29, 2026) lists 'Browser Agent (Comet Assistant) Queries' as 'No' for Free, 'Monthly limits (average use)' for Pro and Education Pro, 'Monthly limits (advanced use)' for Max, 'Extended limits (80/month)' for Enterprise Pro, and 'Highest limits (800/month)' for Enterprise Max. The browser itself remains a free download",
      source: "Perplexity Help Center: Which Perplexity Subscription Plan is right for you? (last modified 2026-10-29)",
      date: "2026-10-29",
    },
    {
      description: "Perplexity's pricing page (perplexity.ai/hub/pricing) shows Pro at '$17/month when billed annually' and Max at '$167/month when billed annually' and has a Comet section ('Comet Assistant', 'Advanced models powering Comet Assistant') but no Comet Plus line. Comet Plus was announced in 2025 as 'a $5 standalone subscription (included at no additional cost with Perplexity Pro and Max)'; its current availability and price are unconfirmed",
      source: "Perplexity pricing page; Perplexity blog: Announcing Comet Plus Launch Partners",
      date: "2026-11-02",
    },
  ],
  bestFor: "Users who already pay for Perplexity Pro or Max and want an agent browser that can complete multi-step tasks (booking, research, shopping, document summarization) across tabs. Also a zero-cost way to try an AI browser on any platform -- the download is free, though the Comet Assistant agent needs a paid plan.",
  notFor: "Users committed to Google Search workflows -- Perplexity's results skew toward its own index and chatbot. Also not the right pick if you want agentic browsing without paying: the Free plan does not include Comet Assistant agent queries. And not for anyone who wants a browser that stays out of the way -- Comet is opinionated about AI-everywhere.",
  verdict: "Perplexity Comet is a free download on Mac, Windows, iOS, and Android -- free worldwide since 2025-10-02 after a limited release in July 2025, with iOS added in March 2026. The catch is that 'free' means the browser: Perplexity's own plan table gives Free users no Comet Assistant agent queries, so the agentic features that define Comet come with Pro ($17/mo billed annually), Max ($167/mo billed annually), or Enterprise. For existing Perplexity subscribers it is a no-extra-cost addition; for everyone else it is a free browser with a paid agent. Compare against ChatGPT Atlas, Arc, Dia, and Opera Neon.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Perplexity Comet product page", url: "https://www.perplexity.ai/comet", dateAccessed: "2026-11-02" },
    { name: "Perplexity blog: The Internet is Better on Comet (worldwide free release, 2025-10-02)", url: "https://www.perplexity.ai/hub/blog/comet-is-now-available-to-everyone-worldwide", dateAccessed: "2026-11-02" },
    { name: "Perplexity changelog: Comet iOS launch (dated 03/26/26)", url: "https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026", dateAccessed: "2026-11-02" },
    { name: "Perplexity Help Center: Which Perplexity Subscription Plan is right for you? (plan table, modified 2026-10-29)", url: "https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you", dateAccessed: "2026-11-02" },
    { name: "Perplexity pricing page", url: "https://www.perplexity.ai/hub/pricing", dateAccessed: "2026-11-02" },
    { name: "Perplexity blog: Announcing Comet Plus Launch Partners", url: "https://www.perplexity.ai/hub/blog/announcing-comet-plus-launch-partners", dateAccessed: "2026-11-02" },
  ],
  affiliateUrl: "https://www.perplexity.ai/comet",
  status: "active",
  metaTitle: "Perplexity Comet Review 2026: Free AI Browser, Paid Agent",
  metaDescription: "Perplexity Comet review. Free AI browser on Mac, Windows, iOS, Android (free worldwide since Oct 2025). Comet Assistant agent queries need Pro or Max. vs ChatGPT Atlas, Arc, Dia.",
};
