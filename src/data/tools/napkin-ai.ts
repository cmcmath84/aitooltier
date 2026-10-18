import { ToolReview } from "@/lib/types";

export const napkinAi: ToolReview = {
  slug: "napkin-ai",
  name: "Napkin AI",
  tagline: "Paste your text, get a visual -- Napkin turns written content into diagrams and infographics in seconds",
  category: "ai-presentation-tools",
  url: "https://napkin.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 6,
    value: 8,
    features: 5,
    overall: 7.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["500 AI credits/week (about 1 credit per word selected for generation)", "Core visual styles", "Watermarked exports"],
    },
    {
      plan: "Plus",
      price: "$9",
      period: "person/month (billed yearly)",
      features: ["10,000 AI credits/month", "No watermark", "Custom branding", "Yearly billing saves 25% vs monthly"],
    },
    {
      plan: "Pro",
      price: "$22",
      period: "person/month (billed yearly)",
      features: ["30,000 AI credits/month", "Optional credit top-ups", "Advanced customization and team collaboration", "Yearly billing saves 25% vs monthly"],
    },
  ],

  pros: [
    "Dead simple -- paste text, get a visual. No design skills needed whatsoever",
    "Free tier is genuinely usable for occasional social media graphics or blog visuals",
    "Fastest way to turn a wall of text into something shareable for a slide deck or LinkedIn post",
    "Clean, modern visual style that doesn't look like clip art from 2005",
  ],
  cons: [
    "Customization is shallow -- you can't fine-tune layouts or move elements around freely",
    "Visuals feel generic after a while; everything starts looking the same",
    "No API, so you can't integrate it into automated content pipelines",
    "Collaboration features are barebones compared to Figma or even Canva",
    "Complex data relationships get oversimplified or misrepresented",
  ],
  knownIssues: [
    {
      description: "PRICING CHECK (2026-10-17): napkin.ai/pricing lists Plus at $9 and Pro at $22 per person per month on yearly billing (25% off monthly), with 10,000 and 30,000 AI credits per month; Free keeps 500 credits per week. Credits are charged at roughly 1 per word selected for generation. Paid teamspaces bill one seat per accepted member. No rename or ownership change.",
      source: "napkin.ai/pricing",
      date: "2026-10-17",
    },
    {
      description: "Exports copy as a flat image -- text inside diagrams isn't editable after export, which limits reuse",
      source: "G2 Reviews",
      date: "2026-01",
    },
    {
      description: "Limited integration options -- no direct embed into Notion, Google Slides, or other common tools",
      source: "Reddit r/productivity",
      date: "2025-11",
    },
  ],
  bestFor: "Content creators, marketers, and consultants who need quick visuals from text without touching a design tool. Great for blog graphics and LinkedIn posts.",
  notFor: "Anyone who needs precise control over diagram layouts, detailed data visualization, or team-based design workflows. Use Figma or Miro instead.",
  verdict: "Napkin AI does one thing and does it fast: turn text into a visual. It's genuinely useful for quick social posts and slide graphics, and the free tier is enough for casual use. But the lack of customization means power users will hit a ceiling quickly. Think of it as a visual shortcut, not a design tool.",

  lastReviewedDate: "2026-10-17",
  dataSources: [
    { name: "Napkin AI pricing", url: "https://www.napkin.ai/pricing", dateAccessed: "2026-10-17" },
    { name: "Napkin AI official site", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/productivity", dateAccessed: "2026-04-02" },
    { name: "Hands-on testing", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://napkin.ai",
  status: "active",
  metaTitle: "Napkin AI Review 2026: Fast Text-to-Visual Tool or Too Basic?",
  metaDescription: "Honest Napkin AI review. Turns text into visuals fast, solid free tier, but limited customization. Full scores, pricing, and alternatives. April 2026.",
};
