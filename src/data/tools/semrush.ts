import { ToolReview } from "@/lib/types";

export const semrush: ToolReview = {
  slug: "semrush",
  name: "SEMrush",
  tagline: "The Swiss Army knife of SEO -- does everything from keyword research to PPC analysis, with AI sprinkled throughout",
  category: "ai-seo-tools",
  url: "https://www.semrush.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 7,
    features: 10,
    overall: 8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["10 searches/day", "Limited data", "1 project"],
    },
    {
      plan: "Pro",
      price: "$139.95",
      period: "month",
      features: ["500 keywords to track", "5 projects", "10,000 results per report"],
    },
    {
      plan: "Guru",
      price: "$249.95",
      period: "month",
      features: ["1,500 keywords", "15 projects", "Content marketing tools", "Historical data"],
    },
    {
      plan: "Business",
      price: "$499.95",
      period: "month",
      features: ["5,000 keywords", "40 projects", "API access", "Share of Voice"],
    },
  ],

  pros: [
    "Feature count is unmatched -- keyword research, site audit, rank tracking, PPC analysis, content tools, all in one platform",
    "Keyword Magic Tool is genuinely excellent for discovering long-tail keywords and content topics at scale",
    "Position tracking is more detailed than Ahrefs, with local tracking, device splits, and featured snippet monitoring",
    "The content writing assistant with AI suggestions actually helps optimize articles for target keywords",
  ],
  cons: [
    "The interface is overwhelming -- there are so many tools and reports that new users get lost fast",
    "Pricing is expensive and adds up quickly when you need extra users ($45-100/month per additional seat)",
    "Backlink data is noticeably less comprehensive than Ahrefs -- if link building is your focus, you'll feel the gap",
    "Many features feel like they exist to fill a checklist rather than being best-in-class at any single thing",
  ],
  knownIssues: [
    {
      description: "Traffic estimates for smaller sites can be wildly inaccurate -- sometimes showing 10x actual traffic",
      source: "Reddit r/SEO",
      date: "2026-03",
    },
    {
      description: "Site audit crawler sometimes flags false positives on redirect chains that resolve correctly",
      source: "SEMrush Community Forum",
      date: "2026-02",
    },
  ],
  bestFor: "Marketing teams and agencies who need one platform for SEO, PPC, and content marketing research.",
  notFor: "Solo operators who only need backlink analysis -- you'd pay for a lot of features you'll never touch.",
  verdict: "SEMrush is the most complete digital marketing toolkit available. If you need keyword research, rank tracking, site auditing, PPC intelligence, and content optimization all in one place, nothing else comes close to the breadth of features. The AI additions are practical rather than flashy. The main downsides are a cluttered interface that takes time to learn and pricing that escalates fast with extra users. For agencies managing multiple clients, the all-in-one value is hard to beat. For solo SEOs focused mainly on link building, Ahrefs is probably the better pick.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "SEMrush official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/SEO", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://www.semrush.com",
  status: "active",
  metaTitle: "SEMrush Review 2026: The All-in-One SEO Platform -- Worth the Price?",
  metaDescription: "SEMrush review. Full-suite SEO, PPC, and content marketing toolkit. Feature-packed but pricey. Honest scores, pricing breakdown, pros and cons. March 2026.",
};
