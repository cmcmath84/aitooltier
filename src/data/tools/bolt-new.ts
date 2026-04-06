import { ToolReview } from "@/lib/types";

export const boltNew: ToolReview = {
  slug: "bolt-new",
  name: "Bolt.new",
  tagline: "AI full-stack web app builder by StackBlitz -- describe what you want and it writes the code in the browser",
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
      features: ["1M tokens/month", "300K daily limit", "Public/private projects", "Website hosting"],
    },
    {
      plan: "Pro",
      price: "$20",
      period: "month",
      features: ["10M tokens/month", "Token rollover", "Custom domains", "No Bolt branding"],
    },
    {
      plan: "Teams",
      price: "$30",
      period: "member/month",
      features: ["Everything in Pro", "Team collaboration", "Shared projects", "Priority support"],
    },
  ],

  pros: [
    "The initial magic is real -- you can go from a text prompt to a working web app in minutes, not hours",
    "Runs entirely in the browser via WebContainers, so there's nothing to install or configure locally",
    "Free tier gives you enough tokens to build a simple prototype and see if the approach works for you",
    "Supports multiple frameworks (React, Next.js, Astro, etc.) and can scaffold full-stack apps with databases",
  ],
  cons: [
    "Falls apart on anything beyond ~1,000 lines of code -- the AI forgets context, duplicates components, and introduces bugs",
    "Token consumption is brutal -- a single auth bug can burn 3-5M tokens across retry attempts",
    "Deploying to production is painful for non-developers -- the gap between prototype and real app is still huge",
    "1.4 stars on Trustpilot -- customer support is essentially nonexistent when things go wrong",
    "Making small changes frequently breaks unrelated parts of your app",
  ],
  knownIssues: [
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
  notFor: "Anyone trying to build a production app purely with AI prompts. Once your project gets complex, you'll need to write real code. Developers are better off using Cursor or Claude Code.",
  verdict: "Bolt.new is the most impressive AI app builder demo you'll ever see -- and the most frustrating production tool you'll ever use. The first 15 minutes are magical: describe an app, watch it appear. But past a basic prototype, the AI loses context, burns tokens, and breaks things faster than it builds them. Use it to prototype ideas quickly, then port the code to a real development environment. Don't try to build your startup on it.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Bolt.new official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/webdev", dateAccessed: "2026-04-02" },
    { name: "Product Hunt reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://bolt.new",
  status: "active",
  metaTitle: "Bolt.new Review 2026: AI App Builder That Hits a Wall Fast",
  metaDescription: "Honest Bolt.new review. Impressive AI prototyping, but breaks on complex projects. Token burn, no support. Full scores, pricing, issues. April 2026.",
};
