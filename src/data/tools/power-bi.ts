import { ToolReview } from "@/lib/types";

export const powerBi: ToolReview = {
  slug: "power-bi",
  name: "Power BI",
  tagline: "Microsoft's BI workhorse now has Copilot baked in -- ask questions in English, get dashboards back **Pricing verified 2026-10-06: Power BI Pro is $14 per user/month and Premium Per User $24 (both paid yearly), up from the $10/$20 this page carried; the old Premium per-capacity P SKUs are now presented through Microsoft Fabric capacities, with free report consumption for viewers at F64 and above.**",
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
      plan: "Power BI Desktop / Fabric free account",
      price: "$0",
      features: ["Full desktop authoring app", "Local data analysis and report creation", "Included in the Microsoft Fabric free account", "Upgrade to Pro or Premium to share reports"],
    },
    {
      plan: "Power BI Pro",
      price: "$14",
      period: "user/month, paid yearly",
      features: ["Cloud sharing and collaboration", "Per-user license", "Was $10 on this page in March 2026"],
    },
    {
      plan: "Power BI Premium Per User",
      price: "$24",
      period: "user/month, paid yearly",
      features: ["Everything in Pro", "Advanced AI, dataflows and datamarts", "XMLA endpoint read/write", "Larger model memory limits", "Available as a $14 paid-yearly step-up add-on for Pro, Microsoft 365 E5 and Office 365 E5 licences"],
    },
    {
      plan: "Microsoft Fabric capacity (F SKUs)",
      price: "Capacity-based",
      period: "see Fabric pricing; annual purchase saves 40.5% over pay-as-you-go",
      features: ["Org-wide deployment on shared capacity", "Viewers consume Power BI content without per-user licences at F64 and above (and legacy P1 and above)", "Copilot in Fabric", "Replaces the $4,995 Premium Per Capacity row this page carried"],
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
    "Copilot features sit behind Premium Per User or Fabric capacity, and the per-user prices rose 40% on Pro ($10 to $14) and 20% on PPU ($20 to $24) -- the feature everyone wants costs the most, and it costs more than it did",
    "Performance degrades noticeably with large datasets (10M+ rows) unless you're on Premium capacity",
    "The web experience is clunky compared to Desktop -- publishing and managing reports online feels like an afterthought",
  ],
  knownIssues: [
    {
      description: "PER-USER PRICES ARE $14 AND $24, NOT $10 AND $20, AND PREMIUM PER CAPACITY NOW LIVES UNDER MICROSOFT FABRIC (verified 2026-10-06, Microsoft pricing page): the Power BI pricing page lists **Power BI Pro at $14.00 user/month, paid yearly** and **Power BI Premium Per User at $24.00 user/month, paid yearly**, with a **$14.00 paid-yearly add-on** that steps Pro, Microsoft 365 E5 and Office 365 E5 users up to Premium Per User; the free tier is described as the **Microsoft Fabric free account** ('Upgrade to Pro or Premium to share reports') and Power BI Desktop remains a free download. **The $4,995 Premium Per Capacity row this page carried has no price on the page any more:** capacity is sold as Microsoft Fabric F SKUs ('Annual purchase, saving 40.5% over pay-as-you-go prices'), and the footnotes say consuming Power BI content without a paid per-user licence 'applies to Fabric SKUs F64 and above, and Power BI Premium per capacity SKUs P1 and above'; the comparison table lists Copilot in Fabric, advanced AI, advanced dataflows and datamarts and XMLA read/write among the paid-tier features. This page's March 2026 prices were the pre-increase figures; the $4 per-user rise is a 40% increase on Pro and 20% on PPU. Scores unchanged (value was already scored with Premium in mind), but the ten-person-team arithmetic now reads $140 per month on Pro, not $100.",
      source: "Microsoft (microsoft.com/en-us/power-platform/products/power-bi/pricing -- '$14.00 user/month, paid yearly', '$24.00 user/month, paid yearly', Fabric capacity footnotes) -- fetched 2026-10-06 via curl with browser UA",
      date: "2026-10-06",
    },
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

  lastReviewedDate: "2026-10-06",
  dataSources: [
    { name: "Microsoft Power BI pricing -- Pro $14, Premium Per User $24 (paid yearly), Fabric capacity footnotes (verified 2026-10-06)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/pricing", dateAccessed: "2026-10-06" },
    { name: "Microsoft Power BI official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/PowerBI", dateAccessed: "2026-03-31" },
    { name: "G2 Reviews", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://powerbi.microsoft.com",
  status: "active",
  metaTitle: "Power BI Review 2026: Microsoft's BI Platform With Copilot AI Integration",
  metaDescription: "Power BI with Copilot review. Deep BI features, natural language querying, Microsoft ecosystem integration. Pro is $14 and Premium Per User $24 per user/month paid yearly (Oct 2026); capacity now sold as Microsoft Fabric F SKUs. Complexity and Premium pricing remain the barriers. Scores, pricing.",
};
