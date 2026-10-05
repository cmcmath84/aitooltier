import { ToolReview } from "@/lib/types";

export const juliusAi: ToolReview = {
  slug: "julius-ai",
  name: "Julius AI",
  tagline: "Chat with your data files -- upload a spreadsheet, ask questions in plain English, get charts and answers. **Julius now bills itself as 'Your AI Workspace' and makes presentations, reports, websites, images and video as well as analysis; the plan ladder was re-verified 2026-10-05 and Julius now spans Plus, Pro, Max and Business ($20, $45, $200 and $450 a month, roughly 20% less on annual billing) on a credit system, with warehouse connectors (Snowflake, BigQuery, Postgres) on every paid plan.**",
  category: "ai-data-analytics",
  url: "https://julius.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 6,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (verified 2026-10-05)",
      price: "$0",
      features: [
        "Free daily credits",
        "Julius Lite models",
        "Create presentations, reports, websites, images and video (limited)",
        "Google Drive, OneDrive and SharePoint connectors",
        "Scheduled runs: 3",
      ],
    },
    {
      plan: "Plus (verified 2026-10-05; replaces the old Essential tier)",
      price: "$20",
      period: "month ($16/month billed yearly)",
      features: [
        "2,000 credits per month with daily refresh credits (24,000 per year on annual)",
        "1 seat",
        "Frontier models named on the page: GPT-5.6 and Claude Sonnet 5",
        "Export presentations, reports, websites, charts, images and video",
        "Snowflake, BigQuery and Postgres data connectors",
        "Unlimited charts and file storage formats",
      ],
    },
    {
      plan: "Pro (verified 2026-10-05)",
      price: "$45",
      period: "month ($37/month billed yearly)",
      features: [
        "5,000 credits per month (60,000 per year on annual)",
        "All models, including Claude Fable 5 per the plan table",
        "Expanded context window",
        "Priority email support",
      ],
    },
    {
      plan: "Max (verified 2026-10-05)",
      price: "$200",
      period: "month ($166/month billed yearly)",
      features: [
        "25,000 credits per month (300,000 per year on annual)",
        "Access to the most powerful models and a larger context window",
        "Early access to advanced and unreleased features",
        "Priority access at high-traffic times",
        "Permanent file storage and a members-only Slack channel",
      ],
    },
    {
      plan: "Business (verified 2026-10-05)",
      price: "$450",
      period: "month ($375/month billed yearly)",
      features: [
        "60,000 credits per month (720,000 per year on annual)",
        "Add up to 50 team members, shared workspace, files and threads",
        "Postgres, BigQuery, Snowflake and more, with no table limit",
        "Unlimited custom agents and unlimited scheduled report runs",
        "Usage dashboard, centralized billing, audit logs",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Unlimited credits", "Custom data connectors", "SOC 2 Type II, SSO, user roles and permissions"],
    },
  ],

  pros: [
    "The lowest barrier to data analysis you'll find -- upload a CSV and start asking questions like you're texting a friend",
    "Visualizations are clean and actually presentable -- you can drop the charts directly into a deck, and the workspace now builds the deck too",
    "Handles messy data better than expected -- it can usually figure out what you mean even with inconsistent formatting",
    "Every paid plan now connects to Snowflake, BigQuery and Postgres, so you are no longer limited to uploading files",
    "Plus at $20/month ($16 annual) with GPT-5.6 and Claude Sonnet 5 is reasonable next to enterprise analytics tools",
  ],
  cons: [
    "Falls apart on complex multi-step analysis -- anything beyond basic aggregations and correlations gets unreliable",
    "The credit system makes cost unpredictable: 2,000 credits on Plus can disappear fast on heavy analysis or image and video generation, and the page does not publish per-action credit costs",
    "Can't handle very large datasets -- files over a few hundred thousand rows slow down or fail entirely",
    "The AI sometimes makes subtle calculation errors that are hard to catch if you don't verify the output",
    "The pivot to presentations, websites, images and video dilutes what was a focused data tool",
  ],
  knownIssues: [
    {
      description: "PLAN LADDER AND POSITIONING RE-VERIFIED (2026-10-05, vendor-primary): julius.ai/pricing now presents Julius as 'Your AI Workspace' ('Analyze data and research, create presentations and reports, build websites, and generate images and video') with Free ($0, free daily credits, Julius Lite models, Google Drive/OneDrive/SharePoint connectors, 3 scheduled runs), Plus ($20/month or $16 yearly; 2,000 credits/month, 1 seat, GPT-5.6 and Claude Sonnet 5, Snowflake/BigQuery/Postgres connectors), Pro ($45 or $37 yearly; 5,000 credits, all models including Claude Fable 5, expanded context), Max ($200 or $166 yearly; 25,000 credits, most powerful models, early access, permanent file storage), Business ($450 or $375 yearly; 60,000 credits, up to 50 members, unlimited custom agents and scheduled runs, audit logs) and Enterprise (unlimited credits, custom connectors, SOC 2 Type II, SSO). The Essential tier this page listed in March 2026 is gone; Plus takes its $20 slot. One oddity on the vendor page: the Business card says 'Everything in Ultra, plus' although no Ultra plan is listed -- treated as a vendor typo. Hands-on quality notes from March were not re-tested.",
      source: "Julius AI pricing page (julius.ai/pricing) -- fetched 2026-10-05 via curl with browser UA",
      date: "2026-10-05",
    },
    {
      description:
        "Pivot table-style analyses occasionally produce incorrect totals when data contains blank rows",
      source: "Reddit r/analytics",
      date: "2026-02",
    },
    {
      description:
        "Chart exports sometimes lose formatting or truncate axis labels on complex visualizations",
      source: "Julius AI Discord",
      date: "2026-03",
    },
  ],
  bestFor:
    "Non-technical people who need to quickly analyze spreadsheets or a warehouse table and turn the result into charts, a report or a deck without learning SQL or Python.",
  notFor:
    "Data teams needing repeatable, auditable analysis pipelines, or anyone who wants predictable per-seat pricing rather than a monthly credit budget.",
  verdict:
    "Julius AI is the tool you wish existed when your boss asks you to 'pull some insights' from a spreadsheet and you don't know pandas from Excel VLOOKUP. The 2026 version adds warehouse connectors on every paid plan and a credit-based ladder from $20 to $450 a month, plus a growing pile of presentation, website and media features. For quick, one-off analysis of small-to-medium datasets it's genuinely useful. But don't trust it blindly -- always sanity-check the numbers, watch the credit meter, and don't expect it to replace a real analytics workflow.",

  lastReviewedDate: "2026-10-05",
  dataSources: [
    { name: "Julius AI pricing page -- Free, Plus $20/$16, Pro $45/$37, Max $200/$166, Business $450/$375, Enterprise; credits, models and connectors per plan (fetched 2026-10-05)", url: "https://julius.ai/pricing", dateAccessed: "2026-10-05" },
    { name: "Julius AI official site", dateAccessed: "2026-03-27" },
    { name: "Reddit r/analytics", dateAccessed: "2026-03-27" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://julius.ai",
  status: "active",
  metaTitle: "Julius AI Review 2026: Pricing (Plus $20 to Business $450), Credits, Data Connectors",
  metaDescription:
    "Julius AI review, October 2026. Upload data or connect Snowflake, BigQuery or Postgres, ask questions in plain English, get charts, reports and decks. Plans: Free, Plus $20, Pro $45, Max $200, Business $450 a month on credits. Great for quick analysis, but verify the math.",
};
