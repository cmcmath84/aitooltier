import { ToolReview } from "@/lib/types";

export const perplexityComet: ToolReview = {
  slug: "perplexity-comet",
  name: "Perplexity Comet",
  tagline: "Perplexity's agentic AI browser -- FREE on all platforms as of 2026-03-18 (previously $200/mo Max-only). iOS, Android, Windows, Mac. Browses the web, executes multi-step tasks, and summarizes pages in-line. Comet Plus ($5/mo) adds premium publisher content",
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
        "Free on iOS (launched 2026-03-18), Android, Windows, Mac",
        "Full agentic browsing -- page summaries, multi-step tasks, shopping research",
        "Previously gated to Perplexity Max ($200/mo) on PC only -- Max paywall removed",
        "Bundled Perplexity account sync",
      ],
    },
    {
      plan: "Comet Plus",
      price: "$5",
      period: "month",
      features: [
        "Premium publisher content (Condé Nast, select paywalled sources)",
        "Bundled into Perplexity Pro ($20) and Max ($200) -- no separate charge for those subscribers",
        "Standalone add-on for Comet users without Perplexity Pro/Max",
      ],
    },
    {
      plan: "Perplexity Max",
      price: "$200",
      period: "month",
      features: [
        "Still exists for priority inference + background assistant features",
        "No longer required for Comet access",
        "Includes Comet Plus automatically",
      ],
    },
  ],

  pros: [
    "Went FREE on all platforms 2026-03-18 -- previously $200/mo Max-only, PC-only. This is one of the biggest pricing pivots in the agent-browser category and likely the single most consumer-friendly move Perplexity has made in 2026",
    "Agentic browsing does real work -- books, reservations, researches products across multiple tabs, summarizes pages in a sidebar. Meaningfully different from just a chatbot with a browse tool. iOS launch (2026-03-18) closed the mobile gap that kept Comet niche through Q1 2026",
    "Bundled into Perplexity's existing account -- if you already use Perplexity Pro, Comet and Comet Plus are already included. No new subscription to evaluate",
    "Category timing is good: AI browsers are a rising category (ChatGPT Atlas, Arc, Dia, Opera Neon all in motion in 2026). Comet going free lets Perplexity compete on distribution and may pressure competitors to drop their pricing",
  ],
  cons: [
    "Still primarily a Perplexity-ecosystem browser -- search results, chat, and agent behavior all lean into Perplexity's own models and indexes. If you want Google search + agent behavior, use Google's own AI Mode instead",
    "Comet Plus at $5/mo gates premium publisher content (Condé Nast, select paywalled sources) -- not a huge fee, but worth noting that 'fully free' is not literally true for every use case",
    "The core chatbot Perplexity pricing (Free / Pro $20 / Max $200) is unchanged -- this free pivot is Comet-specific. Do not conflate them",
    "Browser extension + app surface area is new and still maturing. Expect some UX rough edges through Q2 2026, especially in the Android and Windows installers",
  ],
  knownIssues: [
    {
      description: "Comet went free on all platforms 2026-03-18 with the iOS launch completing the rollout. Previously Max-only ($200/mo) and PC-only. This is a pricing event, not a product rebuild -- the same agentic-browser product is now accessible to every Perplexity account",
      source: "Perplexity changelog, MacRumors iOS launch coverage, The Keyword",
      date: "2026-03",
    },
    {
      description: "Comet Plus ($5/mo) is a separate paid add-on for premium publisher content. Bundled into Perplexity Pro and Max but not into Free. Worth pointing out if users ask why some articles require payment",
      source: "Perplexity pricing page",
      date: "2026-04",
    },
  ],
  bestFor: "Users who already use Perplexity for search and want an agent browser that can complete multi-step tasks (booking, research, shopping, document summarization) across tabs. Also a strong introduction to the AI-browser category for anyone curious but unwilling to pay $200/mo for a preview -- the 2026-03-18 free rollout makes evaluation risk-free.",
  notFor: "Users committed to Google Search workflows -- Perplexity's results skew toward its own index and chatbot. Also not the right pick if you want a browser that stays out of your way -- Comet is opinionated about AI-everywhere and the sidebar is always present.",
  verdict: "Perplexity Comet going free on all platforms (2026-03-18) is the single most consequential AI-browser pricing event of 2026. The product itself did not change; Perplexity's go-to-market did. For anyone who wants to try an agentic AI browser without paying $200/mo for a research preview, Comet is now the default experimental path. For power users already paying for Perplexity Pro ($20/mo) it is a free addition to your existing stack. Compare against ChatGPT Atlas (when it generally releases), Arc, Dia, and Opera Neon as those each make their own pricing moves through 2026.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Perplexity Comet product page", url: "https://www.perplexity.ai/comet", dateAccessed: "2026-04-17" },
    { name: "Perplexity changelog: Comet iOS launch 2026-03-27", url: "https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026", dateAccessed: "2026-04-17" },
    { name: "MacRumors: Perplexity Comet on iPhone 2026-03-18", url: "https://www.macrumors.com/2026/03/18/perplexity-comet-browser-iphone/", dateAccessed: "2026-04-17" },
    { name: "The Keyword: Perplexity drops Comet paywall", url: "https://www.thekeyword.co/news/perplexity-comet-browser-free-all-platforms", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.perplexity.ai/comet",
  status: "active",
  metaTitle: "Perplexity Comet Review 2026: Free AI Browser (Was $200/mo Max-Only)",
  metaDescription: "Perplexity Comet review. Free on all platforms as of Mar 18 2026 (iOS launch). Agentic AI browser, previously $200/mo Max-only. Comet Plus $5/mo. vs ChatGPT Atlas, Arc, Dia.",
};
