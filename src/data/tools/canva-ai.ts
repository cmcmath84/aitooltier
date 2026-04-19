import { ToolReview } from "@/lib/types";

export const canvaAi: ToolReview = {
  slug: "canva-ai",
  name: "Canva AI (Magic Studio)",
  tagline: "Canva AI 2.0 (launched 2026-04-16 at Canva Create) -- agentic design suite with Canva Design Model (Canva's own foundation model), Lucid Origin image gen (5x faster, 30x cheaper), I2V video (7x faster, 17x cheaper), and connectors to Slack/Notion/Zoom/Gmail",
  category: "ai-design-tools",
  url: "https://canva.com",

  scores: {
    easeOfUse: 10,
    outputQuality: 7,
    value: 9,
    features: 8,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["50 AI uses/mo", "Basic templates", "Magic Write"] },
    { plan: "Pro", price: "$13", period: "month", features: ["500 AI uses/mo", "Magic Eraser", "Background Remover", "Brand Kit"] },
    { plan: "Teams", price: "$10", period: "user/month", features: ["500 AI uses/user", "Brand controls", "Collaboration"] },
  ],

  pros: [
    "If you already use Canva, the AI features are just there -- zero learning curve",
    "Magic Eraser and Background Remover actually work well for quick edits",
    "Magic Write is decent for social media captions and short copy",
    "Price is hard to beat -- the whole design platform plus AI for $13/mo",
  ],
  cons: [
    "AI image generation quality is far below dedicated tools like Midjourney",
    "50 free AI uses per month is stingy",
    "AI features feel bolted on rather than deeply integrated into the design flow",
    "Not useful for anyone who doesn't already use Canva for design",
  ],
  knownIssues: [
    { description: "Canva AI 2.0 launched at Canva Create on 2026-04-16 -- major platform shift from 'design-with-AI' to 'AI-with-design'. Built on the new Canva Design Model (Canva's own foundation model that understands design structure). Six new agentic workflows: connectors (Slack, Notion, Zoom, Gmail), web research, brand intelligence, Sheets AI, Canva Code 2.0. Generates full brand campaigns from text prompts. Rolling out via homepage discovery to first 1M users, broader rollout 'in coming weeks'", source: "Canva newsroom, TechCrunch, Fortune", date: "2026-04" },
    { description: "Image generation via Lucid Origin model is now 5x faster and ~30x cheaper per image vs. prior Canva image gen. Video (I2V) model is 7x faster and 17x cheaper. This is a major cost-efficiency unlock for Canva Pro/Teams users doing high-volume generation", source: "Canva Create keynote, 9to5Mac", date: "2026-04" },
    { description: "Magic Expand sometimes produces noticeable artifacts at the edges of expanded images", source: "Canva Community", date: "2026-03" },
  ],
  bestFor: "Canva users who want AI shortcuts in their existing workflow. Social media managers, small business owners, and non-designers who already make content in Canva.",
  notFor: "Professional designers or anyone who needs high-quality AI image generation. Use Midjourney for images and Figma for design.",
  verdict: "Canva AI is the smart play by Canva -- take the platform 180 million people already use and sprinkle AI on top. The AI features aren't best-in-class individually, but the convenience of having them inside your existing design tool is worth a lot. If you already pay for Canva Pro, the AI features are a nice bonus. If you're evaluating it purely as an AI design tool, dedicated alternatives are better.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "Canva newsroom: Canva Create 2026 AI", url: "https://www.canva.com/newsroom/news/canva-create-2026-ai/", dateAccessed: "2026-04-18" },
    { name: "TechCrunch: Canva AI agentic design", url: "https://techcrunch.com/2026/04/16/canvas-ai-assistant-can-now-call-various-tools-to-make-designs-for-you", dateAccessed: "2026-04-18" },
    { name: "Fortune: Canva AI 2.0 Cliff Obrecht", url: "https://fortune.com/2026/04/16/canva-ai-agentic-design-suite-coo-cliff-obrecht/", dateAccessed: "2026-04-18" },
    { name: "Hands-on testing", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://canva.com",
  status: "active",
  metaTitle: "Canva AI 2.0 Review (Apr 16 2026): Canva Design Model + Agentic Workflows",
  metaDescription: "Canva AI 2.0 review. Launched Apr 16 2026: Canva Design Model, Lucid Origin (5x faster image gen), agentic connectors to Slack/Notion/Gmail, Canva Code 2.0.",
};
