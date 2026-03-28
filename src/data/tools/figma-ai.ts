import { ToolReview } from "@/lib/types";

export const figmaAi: ToolReview = {
  slug: "figma-ai",
  name: "Figma AI",
  tagline: "AI features baked into the design tool everyone already uses -- useful shortcuts, not a design replacement",
  category: "ai-design-tools",
  url: "https://www.figma.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 6,
    value: 7,
    features: 6,
    overall: 6.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Starter",
      price: "$0",
      features: ["3 Figma files", "Unlimited personal files", "Basic AI features"],
    },
    {
      plan: "Professional",
      price: "$15",
      period: "month",
      features: ["Unlimited files", "Full AI features", "Team libraries"],
    },
    {
      plan: "Organization",
      price: "$45",
      period: "month",
      features: ["Everything in Pro", "Design system analytics", "SSO", "Advanced admin"],
    },
  ],

  pros: [
    "It's built right into Figma -- no plugins, no context switching, it just works where you already design",
    "Auto-layout suggestions and rename layers features save genuine time on tedious cleanup tasks",
    "Text generation for placeholder content is better than lorem ipsum and faster than writing it yourself",
    "Visual search lets you find components by describing what you want instead of scrolling through libraries",
  ],
  cons: [
    "AI-generated designs are mediocre at best -- they feel like generic templates, not thoughtful design work",
    "The 'Make a design' prompt feature produces layouts that need so much rework you might as well start from scratch",
    "AI features feel bolted on rather than deeply integrated -- they help with small tasks but don't transform the workflow",
    "Only available on paid plans for full access, and the free tier's AI capabilities are quite limited",
  ],
  knownIssues: [
    {
      description: "AI-generated components sometimes use inconsistent spacing that doesn't match the file's existing design system",
      source: "Figma Community Forum",
      date: "2026-03",
    },
    {
      description: "Visual search returns irrelevant results for abstract or complex component descriptions",
      source: "Reddit r/FigmaDesign",
      date: "2026-02",
    },
  ],
  bestFor: "Existing Figma users who want small AI-powered productivity boosts without changing their workflow.",
  notFor: "Anyone expecting AI to generate production-ready designs from a text prompt -- it's not there yet.",
  verdict: "Figma AI is a collection of helpful shortcuts rather than a design revolution. The layer renaming, auto-layout suggestions, and content generation features genuinely save time on busywork. But the generative design features -- creating layouts from prompts -- produce generic results that no serious designer would ship. Think of it as a productivity add-on to an already great tool, not an AI design assistant. The real value is in the small time-savers, not the headline features.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Figma official site", dateAccessed: "2026-03-27" },
    { name: "Figma Community Forum", dateAccessed: "2026-03-27" },
    { name: "Reddit r/FigmaDesign", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://www.figma.com",
  status: "active",
  metaTitle: "Figma AI Review 2026: Helpful Shortcuts or Overhyped Features?",
  metaDescription: "Figma AI review. Built-in AI features for design, auto-layout, and content generation. But can it actually design? Honest scores, pricing. March 2026.",
};
