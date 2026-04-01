import { ToolReview } from "@/lib/types";

export const powerBi: ToolReview = {
  slug: "power-bi",
  name: "Power BI",
  tagline: "Microsoft's BI workhorse now has Copilot baked in -- ask questions in English, get dashboards back",
  category: "ai-data-analytics",
  url: "https://powerbi.microsoft.com",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 7,
    features: 9,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Power BI Desktop",
      price: "$0",
      features: ["Full desktop app", "Local data analysis", "Report creation", "No sharing/collaboration"],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: ["Cloud sharing", "Collaboration", "Basic Copilot", "Per-user license"],
    },
    {
      plan: "Premium Per User",
      price: "$20",
      period: "month",
      features: ["Full Copilot access", "Paginated reports", "Larger datasets", "AI insights"],
    },
    {
      plan: "Premium Per Capacity",
      price: "$4,995",
      period: "month",
      features: ["Org-wide deployment", "Unlimited users", "Dedicated resources", "Full AI features"],
    },
  ],

  pros: [
    "The feature set is staggeringly deep -- DAX, Power Query, dataflows, paginated reports, and now Copilot AI on top of all of it",
    "Copilot natural language querying actually works for straightforward questions -- 'show me sales by region last quarter' returns a real chart",
    "Integration with the Microsoft ecosystem is seamless -- Excel, Teams, SharePoint, Azure all play nicely together",
    "The free Desktop version is legitimately powerful for individual analysts who don't need to share reports",
  ],
  cons: [
    "The learning curve is brutal -- DAX alone takes months to get comfortable with, and the UI has layers of complexity",
    "Copilot AI features are gated behind Premium licensing -- the feature everyone wants costs the most",
    "Performance degrades noticeably with large datasets (10M+ rows) unless you're on Premium capacity",
    "The web experience is clunky compared to Desktop -- publishing and managing reports online feels like an afterthought",
  ],
  knownIssues: [
    {
      description: "Copilot occasionally generates incorrect DAX measures, especially with complex date hierarchies and many-to-many relationships",
      source: "Reddit r/PowerBI",
      date: "2026-03",
    },
    {
      description: "Scheduled refresh failures are common with on-premise data gateway connections, requiring manual intervention",
      source: "Microsoft Community Forum",
      date: "2026-02",
    },
  ],
  bestFor: "Enterprise teams already invested in the Microsoft stack who need serious BI capabilities. The Copilot integration makes it more accessible, but Power BI's real strength is still its depth for trained analysts.",
  notFor: "Small teams or individuals who just want quick insights from a CSV. If you don't need enterprise features and Microsoft integration, tools like Tableau or even Google Sheets with Gemini are simpler starting points.",
  verdict: "Power BI is the most feature-complete BI platform on the market, and adding Copilot AI on top makes it even more powerful for users who know what they're doing. The natural language querying genuinely helps bridge the gap between analysts and business users. But let's be honest -- Power BI was complex before Copilot, and it's still complex. The AI doesn't magically flatten the learning curve; it just adds another layer on top. If your organization is already on Microsoft 365, Power BI is the obvious choice. If you're starting fresh, the total cost of ownership (licensing plus training time) is worth thinking hard about.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "Microsoft Power BI official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/PowerBI", dateAccessed: "2026-03-31" },
    { name: "G2 Reviews", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://powerbi.microsoft.com",
  status: "active",
  metaTitle: "Power BI Review 2026: Microsoft's BI Platform With Copilot AI Integration",
  metaDescription: "Power BI with Copilot review. Deep BI features, natural language querying, Microsoft ecosystem integration. But complexity and Premium pricing are barriers. Scores, pricing. March 2026.",
};
