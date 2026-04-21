import { ToolReview } from "@/lib/types";

export const microsoftCopilot: ToolReview = {
  slug: "microsoft-copilot",
  name: "Microsoft Copilot",
  tagline: "Microsoft's answer to ChatGPT -- free GPT-4 access with Bing search built in, but it feels like a corporate product",
  category: "ai-chatbots",
  url: "https://copilot.microsoft.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["GPT-4 access", "Image generation", "Web search grounding", "Basic chat"],
    },
    {
      plan: "Copilot Pro",
      price: "$20",
      period: "month",
      features: ["Priority GPT-4 Turbo", "Copilot in Microsoft 365 apps", "100 image generations/day"],
    },
    {
      plan: "Copilot for Microsoft 365",
      price: "$30",
      period: "month",
      features: ["Full Office integration", "Enterprise data protection", "Meeting summaries", "Requires M365 license"],
    },
  ],

  pros: [
    "Free tier gives you GPT-4 with web search grounding -- genuinely useful for research questions with current data",
    "Deep integration with Windows, Edge, and Microsoft 365 means it's always one click away if you're in that ecosystem",
    "Image generation with DALL-E 3 is included free -- you get solid AI art without paying for a separate tool",
    "Web search grounding means answers include citations and links, which ChatGPT's free tier doesn't offer",
  ],
  cons: [
    "The personality is aggressively safe and corporate -- it hedges everything and refuses more requests than ChatGPT",
    "Conversation quality drops off after a few turns -- it loses context and starts giving generic responses",
    "The UI changes frequently and Microsoft can't seem to decide what Copilot actually is or where it lives",
    "Copilot Pro at $20/month is a tough sell when ChatGPT Plus costs the same and offers a better chat experience",
  ],
  knownIssues: [
    {
      description: "Microsoft 365 pricing update hits all purchasing channels on 2026-07-01 -- confirmed in the 2026-04-16 Partner Center announcement referencing the December 2025 blog post. Copilot Business bundles are specifically called out as lockable at current pricing pre-7/1. If you plan to deploy M365 Copilot to a mid-size org, renewing or purchasing before 2026-06-30 locks current rates; anything after ticks into the new pricing schedule. Microsoft 365 E7 SKU also launches 2026-05-01 bundling E5 + Entra Suite + Copilot + Agent 365 with 10-15% CSP promotional discounts through 2026-12-31",
      source: "Microsoft Partner Center 2026-04-16 announcement, Microsoft 365 blog (2025-12-04)",
      date: "2026-04",
    },
    {
      description: "Copilot Chat access in Word/Excel/PowerPoint/OneNote is being restricted for large enterprise tenants (reportedly 2000+ seats) without a paid M365 Copilot license as of mid-April 2026. Smaller tenants see throttling during peak hours. Free Copilot in Edge and copilot.microsoft.com still open. If you've been relying on free Chat inside Office, check whether your tenant is affected before building workflows on it",
      source: "Microsoft Learn partner announcements, Primend blog",
      date: "2026-04",
    },
    {
      description: "Copilot in Edge sidebar sometimes provides outdated information from cached Bing results instead of live data",
      source: "Reddit r/MicrosoftCopilot",
      date: "2026-03",
    },
    {
      description: "Microsoft 365 Copilot integration in Excel sometimes generates formulas that reference wrong cell ranges",
      source: "Microsoft Tech Community",
      date: "2026-02",
    },
  ],
  bestFor: "Users already deep in the Microsoft ecosystem who want free GPT-4 access with web search built in.",
  notFor: "Anyone who wants the best conversational AI experience -- ChatGPT and Claude both feel more natural to talk to.",
  verdict: "Microsoft Copilot's biggest selling point is that it's free and it's everywhere in Windows and Edge. The GPT-4 access with Bing search grounding is genuinely useful for quick research. But as a conversational AI, it feels like talking to a corporate chatbot -- overly cautious, context-limited, and bland. The paid tiers are where it gets complicated: Copilot Pro competes directly with ChatGPT Plus and doesn't win, while Copilot for Microsoft 365 is powerful but requires an existing M365 subscription. It's a solid free option, but not the best at anything.",

  lastReviewedDate: "2026-04-21",
  dataSources: [
    { name: "Microsoft Partner Center April 2026 announcements", url: "https://learn.microsoft.com/en-us/partner-center/announcements/2026-april", dateAccessed: "2026-04-21" },
    { name: "Microsoft 365 blog: pricing + packaging update (Dec 2025)", url: "https://www.microsoft.com/microsoft-365/blog/2025/12/04/advancing-microsoft-365-new-capabilities-and-pricing-update/", dateAccessed: "2026-04-21" },
    { name: "Microsoft Copilot official site", dateAccessed: "2026-04-21" },
    { name: "Reddit r/MicrosoftCopilot", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://copilot.microsoft.com",
  status: "active",
  personality: {
    oneLiner: "The work-safe assistant",
    tone: "Friendly-professional and cautious. Copilot keeps the ChatGPT-style voice but dials down personality for workplace contexts, with more hedging and disclaimers on anything sensitive.",
    quirks: "Tightly integrated with Microsoft 365 -- will pull context from your Outlook, Word, and Teams when enabled. Stricter refusals than consumer ChatGPT on the same prompts, especially inside the enterprise tenant.",
  },
  metaTitle: "Microsoft Copilot Review 2026: July 1 Price Update + Office Chat Limits",
  metaDescription: "Microsoft Copilot review. M365 pricing update 2026-07-01 (lock current rates before 6/30), M365 E7 SKU 5/1, enterprise Office Chat restrictions. Free tier still useful.",
};
