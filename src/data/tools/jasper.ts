import { ToolReview } from "@/lib/types";

export const jasper: ToolReview = {
  slug: "jasper",
  name: "Jasper",
  tagline: "AI writing platform for marketing teams -- now agentic with Grid (Q1 2026 spreadsheet-style content pipelines), Optimization Agent (Jan 2026 SEO/AEO/GEO scoring per Google SQR Guidelines), and Autonomous Research/Personalization Agents on top of templates and Brand Voice",
  category: "ai-writing-tools",
  url: "https://jasper.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 5,
    features: 8,
    overall: 7.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Creator",
      price: "$49",
      period: "month",
      features: ["1 seat", "Brand voice", "SEO mode", "50+ templates"],
    },
    {
      plan: "Pro",
      price: "$69",
      period: "month",
      features: ["Up to 5 seats", "3 brand voices", "Collaboration", "Art generation"],
    },
    {
      plan: "Business",
      price: "Custom",
      features: ["Unlimited seats", "API access", "Custom AI models", "SSO"],
    },
  ],

  pros: [
    "Excellent template library for marketing content -- blog posts, ads, emails, social",
    "Brand Voice feature lets you train it on your company's tone and style",
    "Campaign workflows help teams plan and produce content together",
    "Good Chrome extension for writing anywhere",
  ],
  cons: [
    "Extremely expensive for what it is -- $49/mo when ChatGPT Plus is $20",
    "Under the hood it's mostly GPT-4 with templates, so you're paying a premium for the wrapper",
    "No free tier or free trial makes it hard to evaluate before committing",
    "Quality of output without templates isn't much better than just using ChatGPT directly",
  ],
  knownIssues: [
    {
      description: "Jasper Grid (announced 2025-11-04 PRNewswire, generally available Q1 2026) is a spreadsheet-style interface designed to power AI-native content pipelines -- run hundreds of generation tasks in parallel with row-level prompts, brand voice, and approvals. Repositions Jasper from 'AI templates' to 'AI content factory.' Adds onboarding complexity for solo users unfamiliar with no-code workflow systems",
      source: "Jasper: jasper.ai/grid, PRNewswire (2025-11-04 launch announcement)",
      date: "2026-04",
    },
    {
      description: "Optimization Agent (January 2026) scores content against SEO, AEO (Answer Engine Optimization for AI search), and GEO (Generative Engine Optimization) using Google SQR Guidelines as the rubric. AEO is the underserved axis -- most competitors only score for traditional SEO. Operates as a separate workflow component, so teams report a learning curve to integrate it cleanly into existing pipelines",
      source: "Jasper Blog: January 2026 Product Update",
      date: "2026-01",
    },
    {
      description: "Autonomous Agents (January 2026) -- Research Agent and Personalization Agent execute end-to-end content workflows: gather sources, synthesize, draft, personalize per audience segment, optimize. Web search can be enabled across team access; early adopters report governance overhead at the team-admin level (who can spawn agents, what data they touch)",
      source: "Jasper Blog: January 2026 Product Update",
      date: "2026-01",
    },
    {
      description: "Brand Voice consistency on longer content remains the most-cited weakness in user reviews -- Jasper's Brand Voice can drift over multi-thousand-word pieces, requiring manual touch-up. Q1 2026 agent additions don't directly address this",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Pricing increased significantly in 2025 and the agent additions in Q1 2026 are bundled into the existing Pro/Business tiers rather than added as a standalone agent SKU. Solo creators on legacy plans report the value gap vs ChatGPT Plus widening",
      source: "Reddit r/jasper",
      date: "2026-01",
    },
  ],
  bestFor: "Marketing teams at companies with budget who need collaboration features and brand consistency. The templates and workflow tools save time when you're producing lots of marketing content.",
  notFor: "Solo creators, freelancers, or anyone on a budget. You can get 90% of the same results from ChatGPT for $20/mo.",
  verdict: "Jasper was revolutionary when it launched -- it was one of the first AI writing tools. But ChatGPT caught up fast, and now Jasper's main selling point is its marketing-specific templates and team features. At $49-69/mo per person, it's a tough sell unless your team is producing high volumes of marketing content and needs the workflow tools. For everyone else, save your money.",

  lastReviewedDate: "2026-04-27",
  dataSources: [
    { name: "Jasper Blog: January 2026 Product Update (Optimization Agent + Autonomous Agents)", url: "https://www.jasper.ai/blog/january-2026-product-update", dateAccessed: "2026-04-27" },
    { name: "PRNewswire: Jasper introduces Grid (2025-11-04)", url: "https://www.prnewswire.com/news-releases/jasper-introduces-grid-the-interface-powering-ai-native-content-pipelines-302603705.html", dateAccessed: "2026-04-27" },
    { name: "Jasper Grid product page", url: "https://www.jasper.ai/grid", dateAccessed: "2026-04-27" },
    { name: "Jasper official site", dateAccessed: "2026-04-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Capterra Reviews", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://jasper.ai",
  status: "active",
  metaTitle: "Jasper AI Review 2026: Is It Worth $49/Month?",
  metaDescription: "Honest Jasper AI review. Great templates but expensive. Is it worth it when ChatGPT costs $20? Scores, pricing breakdown, pros and cons. March 2026.",
};
