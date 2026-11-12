import { ToolReview } from "@/lib/types";

export const jasper: ToolReview = {
  slug: "jasper",
  name: "Jasper",
  tagline: "**Nov 2026 pricing check: Jasper now sells two plans -- Pro at $69/month ($59 billed yearly, one seat, 7-day free trial) and custom-priced Business -- and has spent the summer shipping a GEO Agent and GEO Hub for AI-search visibility, Product IQ, and a Claude connector.** AI writing platform for marketing teams -- now agentic with Grid (Q1 2026 spreadsheet-style content pipelines), Optimization Agent (Jan 2026 SEO/AEO/GEO scoring per Google SQR Guidelines), and Autonomous Research/Personalization Agents on top of templates and Brand Voice",
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
      plan: "Pro",
      price: "$69",
      period: "month",
      features: ["$59/month billed yearly", "1 seat (more users require Business)", "Canvas platform for on-brand content creation", "2 Brand Voices, 5 Knowledge assets and 3 Audiences", "7-day free trial"],
    },
    {
      plan: "Business",
      price: "Custom",
      features: ["Agents for complex marketing workflows, including GEO, translations, and deep research", "No-code builder to create Custom AI Agents", "Jasper Grid", "Unlimited IQ customization: Brand Voices, Knowledge, Audiences", "Admin controls, Groups and SSO", "Usage-based features (GEO Hub, Agents) run on credits alongside seat pricing"],
    },
  ],

  pros: [
    "Excellent template library for marketing content -- blog posts, ads, emails, social",
    "Brand Voice feature lets you train it on your company's tone and style",
    "Campaign workflows help teams plan and produce content together",
    "Good Chrome extension for writing anywhere",
  ],
  cons: [
    "Extremely expensive for what it is -- $69/mo ($59 on annual billing) for a single seat when ChatGPT Plus is $20",
    "Under the hood it runs third-party frontier models (GPT-6 Sol, GPT-6 Luna and Claude Opus 5.5 in Agent Studio), so you're paying a premium for the brand-context layer and workflow on top",
    "No free tier -- only a 7-day free trial of Pro -- and the agents, Grid and GEO tooling that Jasper now leads with sit on the custom-priced Business plan",
    "Quality of output without templates isn't much better than just using ChatGPT directly",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-11): this page listed a 'Creator' plan at $49/month, a five-seat Pro plan at $69, and said Jasper has no free trial. Jasper's live pricing page says 'There are two plans to choose from': **Pro at $59/month billed yearly or $69/month billed monthly** (one user -- 'Need more than 1 user on Pro? Contact Jasper's sales team') and **Business** at custom pricing. A 7-day free trial of Pro is offered. There is no Creator plan and no $49 price on the page. The 'mostly GPT-4 with templates' con was also outdated -- Jasper's own posts name GPT-6 and Claude Opus 5.5 models in Agent Studio. Do not restore the Creator / $49 row",
      source: "Jasper pricing page (jasper.ai/pricing, fetched 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "JUNE-OCTOBER 2026 PRODUCT UPDATES (vendor blog): **GEO Agent and GEO Hub** (introduced 2026-06-16) -- an autonomous agent that analyzes how a brand appears in ChatGPT, Gemini and Claude answers and executes the content fixes, with the Hub as its dashboard. The July update (published Aug 5) added Perplexity as a GEO Hub engine, raised the per-analysis page limit from 300 to 1,000, and lets the agent push drafts to Asana, Monday.com or Webflow. The August update (published Sep 2) made **Product IQ generally available** (a governed product catalog available in Chat, Canvas, Grid, the API and MCP) and put **Jasper in the Claude Connector Marketplace**. On Sep 22 Agent Studio added **GPT-6 Sol, GPT-6 Luna and Claude Opus 5.5**. The September update (published Oct 7) added Multiple Audiences (up to four per generation on Business and Enterprise, three on Pro) and competitor sentiment comparison in the GEO Hub",
      source: "Jasper blog (jasper.ai/blog/geo-agent-and-geo-hub, /july-2026-product-update, /august-2026-product-update, /september-2026-product-update, /new-models-in-jasper-agent-studio-gpt-6-sol-gpt-6-luna-and-claude-opus-5-5)",
      date: "2026-10-07",
    },
    {
      description: "PRODUCT UPDATES (April-May 2026, vendor blog; May post published 6/10): The May update brings a **Jasper Slack Agent**, **Claude Opus 4.8 and Gemini 3.5 Flash to Studio** (with automatic model updates for Studio Agents), Style Guide generation from 1-3 sources, Grid History run logs (Business/Pro), and SharePoint/Workfront integration improvements; Jasper also released MONET, a 105M-sample image-text dataset. The April update (published 5/5) added **AI Visibility Workflows in Grid** -- three 6-step templates (Originate / Optimize / Outrank) producing FAQs, key takeaways, and schema markup aimed at ranking in AI search answers. Frontier-model parity in Studio is the practical headline: Jasper no longer lags the model generation its competitors expose",
      source: "Jasper blog (jasper.ai/blog/may-2026-product-update, jasper.ai/blog/april-2026-product-update)",
      date: "2026-06-10",
    },
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
  verdict: "Jasper was revolutionary when it launched -- it was one of the first AI writing tools. But ChatGPT caught up fast, and now Jasper's main selling point is its marketing-specific templates and team features. At $59-69/mo for a single Pro seat, with the agent and GEO features reserved for custom-priced Business, it's a tough sell unless your team is producing high volumes of marketing content and needs the workflow tools. For everyone else, save your money.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Jasper plans and pricing", url: "https://www.jasper.ai/pricing", dateAccessed: "2026-11-11" },
    { name: "Jasper blog: Introducing Jasper GEO Agent and GEO Hub (2026-06-16)", url: "https://www.jasper.ai/blog/geo-agent-and-geo-hub", dateAccessed: "2026-11-11" },
    { name: "Jasper blog: What's New in July 2026", url: "https://www.jasper.ai/blog/july-2026-product-update", dateAccessed: "2026-11-11" },
    { name: "Jasper blog: What's New in August 2026", url: "https://www.jasper.ai/blog/august-2026-product-update", dateAccessed: "2026-11-11" },
    { name: "Jasper blog: What's New in September 2026", url: "https://www.jasper.ai/blog/september-2026-product-update", dateAccessed: "2026-11-11" },
    { name: "Jasper blog: New models in Agent Studio (2026-09-22)", url: "https://www.jasper.ai/blog/new-models-in-jasper-agent-studio-gpt-6-sol-gpt-6-luna-and-claude-opus-5-5", dateAccessed: "2026-11-11" },
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
  metaTitle: "Jasper AI Review 2026: Is It Worth $69/Month?",
  metaDescription: "Honest Jasper AI review. Pro is $69/mo ($59 annual) for one seat; agents and GEO tools need Business. Worth it when ChatGPT costs $20? November 2026.",
};
