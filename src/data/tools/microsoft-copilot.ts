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

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Microsoft Copilot official site", dateAccessed: "2026-03-27" },
    { name: "Reddit r/MicrosoftCopilot", dateAccessed: "2026-03-27" },
    { name: "Microsoft Tech Community", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://copilot.microsoft.com",
  status: "active",
  metaTitle: "Microsoft Copilot Review 2026: Free GPT-4, But Is It Actually Good?",
  metaDescription: "Microsoft Copilot review. Free GPT-4 with Bing search, DALL-E 3 images, Office integration. But how does it compare to ChatGPT? Scores, pricing. March 2026.",
};
