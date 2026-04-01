import { ToolReview } from "@/lib/types";

export const gamma: ToolReview = {
  slug: "gamma",
  name: "Gamma",
  tagline: "AI presentation maker that turns prompts into polished, web-native decks in minutes",
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
      features: ["400 AI credits", "Gamma branding", "Basic templates"],
    },
    {
      plan: "Plus",
      price: "$8",
      period: "month",
      features: ["Unlimited AI credits", "No Gamma branding", "Custom fonts"],
    },
    {
      plan: "Pro",
      price: "$15",
      period: "month",
      features: ["Advanced analytics", "Custom domains", "Priority support"],
    },
  ],

  pros: [
    "Fastest way to go from idea to finished presentation -- type a prompt, get a full deck in under two minutes",
    "Web-native format means your slides are interactive, responsive, and easy to share via link",
    "The design quality out of the box is genuinely good -- better than most people could do manually in PowerPoint",
    "Great value at $8/mo for unlimited credits -- way cheaper than hiring a designer for one-off decks",
  ],
  cons: [
    "Export options are limited -- PDF and PowerPoint exports lose the interactive elements that make Gamma special",
    "For complex, highly customized presentations, the templates start to feel constraining pretty quickly",
    "Free tier credits burn fast -- you'll hit the 400-credit wall within a few sessions of experimenting",
    "Not a PowerPoint replacement for corporate environments that need specific slide master templates",
  ],
  knownIssues: [
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

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "Gamma official site", dateAccessed: "2026-03-31" },
    { name: "G2 Reviews", dateAccessed: "2026-03-31" },
    { name: "Reddit r/presentations", dateAccessed: "2026-03-31" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://gamma.app",
  status: "active",
  metaTitle: "Gamma Review 2026: AI Presentation Maker That Actually Looks Good",
  metaDescription: "Gamma review. Best AI presentation tool for fast, polished decks from text prompts. Web-native format, free tier. But can it replace PowerPoint? Scores, pricing. March 2026.",
};
