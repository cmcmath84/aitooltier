import { ToolReview } from "@/lib/types";

export const gamma: ToolReview = {
  slug: "gamma",
  name: "Gamma",
  tagline: "**Gamma 5 (announced in the Sept-Oct 2026 changelog) rebuilds the product around an agent that brainstorms, researches and designs a deck from a sentence, doc, PDF or old deck. Paid plans are now credit-metered: Plus $9, Pro $18 and Ultra $90 a month on annual billing.** AI presentation maker that turns prompts into polished, web-native decks in minutes",
  category: "ai-design-tools",
  url: "https://gamma.app",

  scores: {
    easeOfUse: 9,
    outputQuality: 7.5,
    value: 8,
    features: 7,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["400 credits at signup (do not refill)", "Create up to 10 slides per prompt", "Import from PDF & PPTX; export to PDF, PPTX, PNG & Google Slides", "Gamma branding"],
    },
    {
      plan: "Plus",
      price: "$9",
      period: "month (billed annually, $108/yr)",
      features: ["1,500 monthly credits", "Create up to 100 slides per prompt", "Remove Gamma branding", "Advanced AI image models"],
    },
    {
      plan: "Pro",
      price: "$18",
      period: "month (billed annually, $216/yr)",
      features: ["4,000 monthly credits", "Premium AI image models", "Custom branding", "Detailed analytics & advanced sharing", "Publish up to 10 custom domains"],
    },
    {
      plan: "Ultra",
      price: "$90",
      period: "month (billed annually, $1,080/yr)",
      features: ["20,000 monthly credits", "Access to the most advanced AI models (text, image, video)", "Publish up to 100 custom domains", "Early access to new features"],
    },
  ],

  pros: [
    "Fastest way to go from idea to finished presentation -- type a prompt, get a full deck in under two minutes",
    "Web-native format means your slides are interactive, responsive, and easy to share via link",
    "The design quality out of the box is genuinely good -- better than most people could do manually in PowerPoint",
    "Still cheap at $9/mo (annual billing) for 1,500 monthly credits and no branding -- way cheaper than hiring a designer for one-off decks",
  ],
  cons: [
    "Export options are limited -- PDF and PowerPoint exports lose the interactive elements that make Gamma special",
    "For complex, highly customized presentations, the templates start to feel constraining pretty quickly",
    "Free tier credits burn fast -- the 400 signup credits do not refill, and paid plans are metered too (Plus 1,500 a month, Pro 4,000), so no tier is unlimited any more",
    "Not a PowerPoint replacement for corporate environments that need specific slide master templates",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-11): this page listed Plus at $8/month with 'Unlimited AI credits' and Pro at $15/month. Gamma's live pricing page shows no unlimited tier: Plus is $9/month ($108 billed annually) with 1,500 monthly credits, Pro is $18/month ($216 billed annually) with 4,000, and a new Ultra plan is $90/month ($1,080 billed annually) with 20,000; Business is 10,000 credits per seat per month. Unused credits roll over up to 2x the monthly amount and paid users can buy more. Prices shown are the annual-billing rates -- the page says annual saves up to 28%, and the pay-monthly figures were not captured, so do not quote a monthly-billing price from this page",
      source: "Gamma pricing page (gamma.app/pricing, fetched 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "GAMMA 5 + JUNE-OCTOBER UPDATES (vendor changelog): the **Sept-Oct 2026 entry (published 2026-10-26)** introduces **Gamma 5** -- 'We rebuilt how Gamma thinks, designs, and edits' -- an agent that takes a sentence, doc, PDF, image or old deck and brainstorms, researches and designs the presentation, imports PDF and PPT designs for ongoing use, and pulls context from Slack, Notion, Granola and 20+ other tools; the same entry adds clearer credit-balance displays and better PowerPoint font fidelity. **Aug 28** -- native apps in the App Store and Google Play, a Slack app, API additions (engagement analytics, comments, multi-page gammas, exports, OAuth), tables that stay editable in PowerPoint and Google Slides, and Smart Charts that sync one-way from Google Sheets. **Jun 12** -- mobile web editing for everyone and SVG images that embed correctly in Google Slides and Keynote exports",
      source: "Gamma changelog (meetgamma.canny.io/changelog -- entries published 2026-06-12, 2026-08-28, 2026-10-26)",
      date: "2026-10-26",
    },
    {
      description: "FEATURE BATCH (2026-05-15 + 2026-05-29, vendor changelog): 5/15 -- 6-column layouts, **custom typefaces fully embedded in PowerPoint exports** (addresses the long-standing PPTX-fidelity complaint below), remix imported/pasted content, consistent styled image generation with topic-based style suggestions, chat-based image brainstorming/editing, dark mode for the theme panel. 5/29 -- **smarter Claude/ChatGPT connectors** (better instruction-following + plan checking), API delete endpoint, export improvements across PPTX/PDF/Google Slides",
      source: "Gamma changelog (meetgamma.canny.io/changelog)",
      date: "2026-05-29",
    },
    {
      description: "PowerPoint exports sometimes have layout shifts and broken formatting compared to the web version",
      source: "Reddit r/presentations",
      date: "2026-02",
    },
    {
      description: "Image generation within slides can be hit-or-miss, occasionally producing irrelevant or low-quality visuals",
      source: "Product Hunt reviews",
      date: "2026-01",
    },
  ],
  bestFor: "Startup founders pitching investors, marketers building quick client presentations, and anyone who needs a solid deck fast without touching PowerPoint.",
  notFor: "Corporate teams locked into PowerPoint/Google Slides workflows, or designers who need pixel-perfect control over every element.",
  verdict: "Gamma is the best AI presentation tool right now, and it's not particularly close. The speed from prompt to polished deck is impressive, and the web-native format genuinely adds value over traditional slides. The catch is that it's a different format -- if your audience expects a .pptx file, the export quality drops noticeably. For web-shared presentations, it's excellent. For traditional slide decks, you'll still want PowerPoint.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Gamma plans and pricing", url: "https://gamma.app/pricing", dateAccessed: "2026-11-11" },
    { name: "Gamma changelog (June 12 - October 26, 2026 entries)", url: "https://meetgamma.canny.io/changelog", dateAccessed: "2026-11-11" },
    { name: "Gamma home page", url: "https://gamma.app/", dateAccessed: "2026-11-11" },
    { name: "Gamma official site", dateAccessed: "2026-03-31" },
    { name: "G2 Reviews", dateAccessed: "2026-03-31" },
    { name: "Reddit r/presentations", dateAccessed: "2026-03-31" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://gamma.app",
  status: "active",
  metaTitle: "Gamma Review 2026: AI Presentation Maker That Actually Looks Good",
  metaDescription: "Gamma review. AI presentation maker with the new Gamma 5 agent and credit-metered plans from $9/mo (annual). Can it replace PowerPoint? November 2026.",
};
