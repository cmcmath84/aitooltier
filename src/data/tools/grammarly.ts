import { ToolReview } from "@/lib/types";

export const grammarly: ToolReview = {
  slug: "grammarly",
  name: "Grammarly (by Superhuman)",
  tagline: "**Plan ladder changed: Grammarly now sells Free, Pro ($12/month on the annual plan) and Enterprise -- Premium and Business are folded into Pro -- and parent Superhuman completed its GPTZero acquisition on 2026-09-30, adding it to Grammarly's AI-detection and authorship tools.** AI writing assistant that catches errors everywhere you type, with full AI rewriting. The company behind it renamed itself Superhuman on 2025-10-29 (the Grammarly product keeps its name), alongside Superhuman Docs (formerly Coda), Superhuman Mail, and the Superhuman Go proactive AI assistant",
  category: "ai-writing-tools",
  url: "https://grammarly.com",

  scores: {
    easeOfUse: 10,
    outputQuality: 7,
    value: 7,
    features: 8,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Write without spelling and grammar mistakes", "See your writing tone", "100 AI prompts/mo"] },
    { plan: "Pro (replaces Premium and Business)", price: "$12", period: "month as shown on grammarly.com/plans (the page's plan data lists Annual $144, Quarterly $60, Monthly $30)", features: ["Full-sentence rewrites and tone adjustment", "Plagiarism and AI-generated-text detection", "2,000 AI prompts / member / month", "Team features formerly Business-only: 1 style guide, 1 brand tone, Knowledge Share, team analytics, 2 user groups"] },
    { plan: "Enterprise", price: "Contact sales", features: ["Sold through Superhuman Go", "Unlimited AI prompts / member / month", "SAML SSO, SCIM, BYOK encryption, data loss prevention", "Unlimited style guides and brand tones, dedicated support"] },
    { plan: "Superhuman suite Pro (Grammarly + Go + Docs)", price: "$12", period: "member / month billed annually ($15 billed monthly)", features: ["Unlimited paragraph rewrites and translations", "AI detection and plagiarism checks", "Email Assistant", "Needed to connect work apps and build custom agents in Superhuman Go"] },
    { plan: "Superhuman suite Business (adds Superhuman Mail)", price: "$33", period: "member / month billed annually ($40 billed monthly)", features: ["Everything in Pro", "Superhuman Mail with AI inbox organization", "HubSpot, Salesforce and Pipedrive in the inbox", "Unlimited automations and version history in Docs"] },
  ],

  pros: [
    "Works everywhere -- browser extension, desktop app, mobile keyboard, Google Docs, Office",
    "Grammar and spelling correction is the best available, period",
    "Tone and clarity suggestions genuinely improve writing",
    "The AI rewriting feature is useful for polishing, not just generating from scratch",
  ],
  cons: [
    "AI writing capabilities are basic compared to Claude or ChatGPT",
    "Pro (the old Premium) feels necessary -- the free tier misses too many suggestions and has no rewrites, plagiarism or AI-detection checks",
    "Buying has become confusing: grammarly.com sells Grammarly Pro while superhuman.com sells a Superhuman suite Pro at the same $12 that bundles Go and Docs, and Enterprise is only sold through Superhuman Go",
    "Can be overly aggressive with suggestions, making writing feel generic",
    "Desktop app is heavy and can slow down your system",
  ],
  knownIssues: [
    {
      description: "PLAN LADDER RE-CHECKED (2026-11-12): grammarly.com/plans now lists **Free, Pro and Enterprise** -- no Premium or Business. Pro shows $12 USD (the page's plan data lists Annual $144, Quarterly $60, Monthly $30) with 2,000 AI prompts per member per month; Free keeps 100 prompts; Enterprise is contact-sales, has unlimited prompts and is 'available through Superhuman Go'. Grammarly's FAQ says Pro includes all the advanced writing features of Premium 'plus team features that were previously available only in the Business plan', and that switching cancels a Premium subscription with a prorated refund. Separately, superhuman.com/plans sells the Superhuman suite: Free, Pro at $12 per member/month billed annually ($15 monthly), Business at $33 ($40 monthly, adds Superhuman Mail) and Enterprise. Our earlier Premium $12 / Business $15 rows were out of date and have been replaced",
      source: "Grammarly (grammarly.com/plans), Superhuman (superhuman.com/plans)",
      date: "2026-11-12",
    },
    {
      description: "PROACTIVE WRITING AGENTS (2026-10-09): Grammarly's **AI Detector and AI Rewriter now surface proactively through Superhuman Go** -- Go nudges you when a draft appears to contain a meaningful amount of AI-generated writing and offers rewrites in your own voice, in Google Docs, Microsoft Word, an LMS or a desktop app. Aimed at students; the nudges can be dismissed or turned down in proactive-assistance settings",
      source: "Superhuman blog (blog.superhuman.com/grammarlys-writing-agents-become-proactive-with-go/)",
      date: "2026-10-09",
    },
    {
      description: "GPTZERO JOINS SUPERHUMAN (2026-09-30): Superhuman announced that **GPTZero is now part of the company**, completing the acquisition it agreed on 2026-06-23. GPTZero's suite -- AI detection, hallucination detection, plagiarism checking and writing replay -- sits alongside Grammarly's Authorship tools in what Superhuman calls its authenticity layer and is to be available in Superhuman Go. Superhuman's claim for GPTZero's latest model: one false positive in more than 10,000 essays. Also in September: Superhuman acquired the AI notetaker **Fathom** (2026-09-14) and plans to bring meeting notes into the suite",
      source: "Superhuman blog (blog.superhuman.com/superhuman-acquires-gptzero/, /superhuman-to-acquire-gptzero/, /superhuman-acquires-fathom/)",
      date: "2026-09-30",
    },
    {
      description: "SUPERHUMAN GO 1.0 (2026-08-12): the proactive assistant that carries Grammarly's suggestions into other apps reached 1.0. Anyone can build custom agents that run on a schedule, on an event or whenever you start typing, with a no-code builder. The new app and chat are open to all users, but connecting work apps and creating custom agents requires a paid plan (Pro, Business or Enterprise)",
      source: "Superhuman blog (blog.superhuman.com/go-1-0/)",
      date: "2026-08-12",
    },
    {
      description: "PARENT-COMPANY LAUNCH (2026-07-08): Superhuman (the company formerly known as Grammarly) launched **Superhuman Docs** -- a collaborative document platform built on the acquired Coda technology, merging writing, AI, and structured data. Superhuman's own post the same day is titled 'Coda is now Superhuman Docs': it is a rename of Coda with the same features, not a separate product. Features: AI-drafting from prompts, structured tables + interactive data views, a Docs AI assistant (drafting, table creation, comment resolution, cross-document retrieval), AI Views in private beta (describe a custom interface, the system builds it on live data), Superhuman Databases private beta (up to 1M rows), and an MCP connector linking Docs to ChatGPT, Claude, and Cursor. Early users: Figma, DoorDash, The New York Times. No pricing disclosed at launch. Relevance for Grammarly users: the writing assistant is now one product in a growing Superhuman suite (Mail, Go, Docs), and suite-level bundling/pricing changes are worth watching",
      source: "SiliconANGLE (siliconangle.com/2026/07/08/superhuman-launches-docs-merging-writing-ai-data-document-collaboration/)",
      date: "2026-07-08",
    },
    { description: "COMPANY REBRAND (announced 2025-10-29, catalogued late -- our miss; we previously dated it 2025-11-05): **Grammarly the company renamed itself Superhuman.** The Grammarly writing product keeps its name, but it now sits inside a multi-product AI productivity company: Grammarly (writing), **Coda** (collaborative workspace, renamed Superhuman Docs on 2026-07-08), **Superhuman Mail** (the email client it acquired), and **Superhuman Go** -- a new proactive AI assistant that launched with agents from partners including Google Workspace, Microsoft Outlook, and Atlassian (Go features were free for all users through 2026-02-01). Vendor framing: 'AI should amplify human capability, not replace it.' Practical read: expect the standalone Grammarly experience to keep converging with the Go assistant and the broader Superhuman suite -- if you only want the grammar net, watch for bundle upsells", source: "Superhuman/Grammarly blog (grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/)", date: "2025-10-29" },
    { description: "Browser extension occasionally conflicts with web-based editors (Notion, Confluence), causing formatting issues", source: "Grammarly Community", date: "2026-03" },
  ],
  bestFor: "Non-native English speakers, professionals who write lots of emails, and anyone who wants a passive grammar net running in the background. It catches things you'd miss.",
  notFor: "Creative writers who have a deliberate style (Grammarly will try to 'fix' it) or anyone who just needs AI content generation (use Claude/ChatGPT).",
  verdict: "Grammarly is less of an AI tool and more of a writing safety net that now has AI features bolted on. It's excellent at what it was built for -- catching errors and improving clarity. The AI rewriting is fine but not why you'd buy it. Think of it as spell-check on steroids, not an AI writer. One structural note: the company behind it renamed itself Superhuman (October 2025) and is assembling a productivity suite around the writing product -- Superhuman Docs (formerly Coda), Superhuman Mail, the Superhuman Go assistant, and since September 2026 GPTZero and the Fathom notetaker -- so expect the standalone Grammarly experience to keep drifting toward that bundle. That drift is now visible in the pricing: the old Premium and Business plans are a single $12 Pro plan, and Enterprise is sold through Superhuman Go.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "Grammarly: Prices and Plans", url: "https://www.grammarly.com/plans", dateAccessed: "2026-11-12" },
    { name: "Superhuman Suite: Pricing & Plans", url: "https://superhuman.com/plans", dateAccessed: "2026-11-12" },
    { name: "Superhuman blog: GPTZero is Now Part of Superhuman (2026-09-30)", url: "https://blog.superhuman.com/superhuman-acquires-gptzero/", dateAccessed: "2026-11-12" },
    { name: "Superhuman blog: Superhuman to Acquire GPTZero (2026-06-23)", url: "https://blog.superhuman.com/superhuman-to-acquire-gptzero/", dateAccessed: "2026-11-12" },
    { name: "Superhuman blog: Superhuman Acquires Fathom, AI Notetaker (2026-09-14)", url: "https://blog.superhuman.com/superhuman-acquires-fathom/", dateAccessed: "2026-11-12" },
    { name: "Superhuman blog: Go 1.0 (2026-08-12)", url: "https://blog.superhuman.com/go-1-0/", dateAccessed: "2026-11-12" },
    { name: "Superhuman blog: Grammarly's Writing Agents Become Proactive With Go (2026-10-09)", url: "https://blog.superhuman.com/grammarlys-writing-agents-become-proactive-with-go/", dateAccessed: "2026-11-12" },
    { name: "Superhuman blog: Coda is now Superhuman Docs (2026-07-08)", url: "https://blog.superhuman.com/introducing-superhuman-docs/", dateAccessed: "2026-11-12" },
    { name: "SiliconANGLE: Superhuman launches Docs (2026-07-08)", url: "https://siliconangle.com/2026/07/08/superhuman-launches-docs-merging-writing-ai-data-document-collaboration/", dateAccessed: "2026-07-18" },
    { name: "Grammarly Rebrands Company as Superhuman (published 2025-10-29)", url: "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/", dateAccessed: "2026-11-12" },
    { name: "Grammarly official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Daily use testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://grammarly.com",
  status: "active",
  metaTitle: "Grammarly Review 2026: Pro Plan, Superhuman and GPTZero",
  metaDescription: "Grammarly review. Best grammar checker, now Free / Pro ($12) / Enterprise under parent Superhuman, with GPTZero added Sept 2026. Scores, pricing, honest take.",
};
