import { ToolReview } from "@/lib/types";

export const tableauAi: ToolReview = {
  slug: "tableau-ai",
  name: "Tableau AI",
  tagline: "Salesforce's analytics powerhouse now with AI-driven insights, natural language queries, and predictive modeling",
  category: "ai-data-analytics",
  url: "https://tableau.com",

  scores: {
    easeOfUse: 5,
    outputQuality: 9,
    value: 5,
    features: 9,
    overall: 7.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Tableau Viewer",
      price: "$15",
      period: "month",
      features: [
        "View and interact with dashboards",
        "Ask Data (natural language queries)",
        "AI-generated explanations",
      ],
    },
    {
      plan: "Tableau Explorer",
      price: "$42",
      period: "month",
      features: [
        "Create and edit visualizations",
        "Full AI features",
        "Predictive analytics",
        "Einstein Discovery integration",
      ],
    },
    {
      plan: "Tableau Creator",
      price: "$75",
      period: "month",
      features: [
        "Full data preparation",
        "All AI features",
        "Tableau Prep Builder",
        "Data management add-on",
      ],
    },
  ],

  pros: [
    "Visualization quality is still best-in-class -- nothing else produces dashboards this polished and interactive",
    "Einstein Discovery integration brings real predictive modeling and what-if analysis to business users",
    "Ask Data natural language feature has improved significantly -- it understands nuanced questions now",
    "Handles massive datasets without breaking a sweat -- this is enterprise-grade infrastructure",
  ],
  cons: [
    "The learning curve is steep even with AI assistance -- this is not a tool you pick up in an afternoon",
    "Pricing is per-user and adds up quickly for teams -- a 10-person team on Creator is $750/month",
    "AI features are spread across the Salesforce ecosystem in confusing ways -- Tableau AI, Einstein, Pulse are all different things",
    "Ask Data still struggles with ambiguous questions and often requires you to rephrase until it understands",
  ],
  knownIssues: [
    {
      description:
        "Ask Data sometimes generates incorrect visualizations when field names are similar (e.g., 'Revenue' vs 'Net Revenue')",
      source: "Tableau Community Forum",
      date: "2026-03",
    },
    {
      description:
        "Einstein Discovery predictions can be misleading when training data has significant class imbalance",
      source: "Reddit r/tableau",
      date: "2026-02",
    },
  ],
  bestFor:
    "Enterprise analytics teams who need production-grade dashboards and predictive insights at scale.",
  notFor:
    "Small teams or individuals looking for a quick, affordable way to analyze data with AI.",
  verdict:
    "Tableau with AI is the most powerful analytics tool you can buy -- and it knows it, based on the pricing. The AI features are genuinely good, especially for predictive modeling and natural language exploration. But you're paying enterprise prices, dealing with enterprise complexity, and navigating Salesforce's increasingly tangled product lineup. If your org already has Tableau, the AI additions are worth enabling. If you're starting from scratch, make sure you actually need this level of power.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Tableau official site", dateAccessed: "2026-03-27" },
    { name: "Tableau Community Forum", dateAccessed: "2026-03-27" },
    { name: "Reddit r/tableau", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://tableau.com",
  status: "active",
  metaTitle: "Tableau AI Review 2026: Enterprise Analytics With AI-Powered Insights",
  metaDescription:
    "Tableau AI review. Best-in-class dashboards, predictive modeling, natural language queries. Powerful but expensive and complex. Scores, pricing. March 2026.",
};
