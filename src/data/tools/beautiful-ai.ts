import { ToolReview } from "@/lib/types";

export const beautifulAi: ToolReview = {
  slug: "beautiful-ai",
  name: "Beautiful.ai",
  tagline: "AI-powered presentation builder that auto-formats slides as you add content",
  category: "ai-presentation-tools",
  url: "https://www.beautiful.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 5,
    features: 7,
    overall: 6.8,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Pro",
      price: "$12",
      period: "month (billed annually)",
      features: ["Unlimited slides", "AI content generation", "PowerPoint export", "Viewer analytics"],
    },
    {
      plan: "Pro (Monthly)",
      price: "$45",
      period: "month",
      features: ["Same as Pro annual", "No commitment", "Cancel anytime"],
    },
    {
      plan: "Team",
      price: "$40",
      period: "user/month (billed annually)",
      features: ["Shared brand kit", "Team collaboration", "Centralized billing", "Up to 20 users"],
    },
  ],

  pros: [
    "Smart formatting actually works -- slides snap into clean layouts as you type, saving real time",
    "Template library is strong and the designs look modern, not like stock PowerPoint themes",
    "PowerPoint import/export means you're not locked in -- you can bring existing decks over",
    "Viewer analytics let you see who opened your deck and which slides they spent time on",
  ],
  cons: [
    "No free plan at all -- just a 14-day trial, then you're paying $12/mo minimum (or $45 monthly)",
    "Monthly pricing is absurd at $45/mo for a single user -- clearly designed to force annual commits",
    "PowerPoint exports can break formatting on complex slides -- fonts, images, and layouts shift",
    "Design output is starting to look dated compared to newer competitors like Gamma and Tome",
    "No API for programmatic deck generation, which limits business automation use cases",
  ],
  knownIssues: [
    {
      description: "Cancellation process is frustrating -- users report unexpected auto-renewals for a full year after free trial ends",
      source: "Trustpilot",
      date: "2026-02",
    },
    {
      description: "Customer support is hard to reach -- no phone support, slow email responses, some users report being ignored entirely",
      source: "Capterra Reviews",
      date: "2026-01",
    },
    {
      description: "PowerPoint exports lose formatting on slides with custom layouts -- font rendering and image placement break",
      source: "G2 Reviews",
      date: "2025-12",
    },
  ],
  bestFor: "Sales teams and consultants who make a lot of presentations and want them to look polished without hiring a designer. The analytics are a nice bonus for tracking prospect engagement.",
  notFor: "Casual users, students, or anyone who balks at paying $12-45/mo for a presentation tool. Google Slides and Canva's free tiers are better starting points.",
  verdict: "Beautiful.ai is a solid presentation tool if you make decks regularly and can commit to annual billing. The smart formatting genuinely saves time, and the templates look good. But the pricing is aggressive -- $45/mo on monthly billing is hard to justify when Canva and Gamma exist. The billing complaints on Trustpilot are a red flag worth noting before you hand over a credit card.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Beautiful.ai official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Capterra reviews", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.beautiful.ai",
  status: "active",
  metaTitle: "Beautiful.ai Review 2026: Smart Slides Worth the Price?",
  metaDescription: "Honest Beautiful.ai review. Smart auto-formatting, good templates, but aggressive pricing and no free tier. Full scores, pricing, pros and cons. April 2026.",
};
