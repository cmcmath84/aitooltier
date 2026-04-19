import { ToolReview } from "@/lib/types";

export const notionAi: ToolReview = {
  slug: "notion-ai",
  name: "Notion AI",
  tagline: "AI built into the workspace you already use -- summarize, draft, and brainstorm without leaving Notion",
  category: "ai-business-productivity",
  url: "https://notion.so",

  scores: {
    easeOfUse: 9,
    outputQuality: 6,
    value: 6,
    features: 7,
    overall: 7.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Notion Free + AI",
      price: "$10",
      period: "month",
      features: [
        "AI add-on per member",
        "Summarize pages",
        "Draft content",
        "Q&A across workspace",
      ],
    },
    {
      plan: "Notion Plus + AI",
      price: "$18",
      period: "month",
      features: [
        "Everything in Plus plan",
        "AI included",
        "Unlimited blocks",
        "30-day page history",
      ],
    },
    {
      plan: "Notion Business + AI",
      price: "$28",
      period: "month",
      features: [
        "Everything in Business plan",
        "AI included",
        "SAML SSO",
        "Advanced permissions",
      ],
    },
  ],

  pros: [
    "Zero friction if you already use Notion -- AI is right there in your existing documents and databases",
    "Q&A across your workspace is genuinely useful for finding information buried in old pages",
    "Summarizing long meeting notes and project docs into action items works well and saves real time",
    "Autofill for database properties is a quiet killer feature -- it can tag, categorize, and extract data automatically",
  ],
  cons: [
    "The writing quality is generic ChatGPT-level output -- fine for first drafts but needs heavy editing",
    "Pricing feels steep at $10/member/month on top of an already paid plan",
    "AI features only work within Notion -- no way to connect it to external tools or data sources",
    "Q&A sometimes confidently returns wrong answers based on outdated or irrelevant pages in your workspace",
  ],
  knownIssues: [
    {
      description:
        "Notion's April 2026 release (2026-04-14) introduced Agent integrations -- Notion Agent can now connect Calendar, Mail, and Slack to read and summarize across systems. Custom Agents with Skills framework (free through 2026-05-03). AI Meeting Notes now live in Command Search with custom formatting. n8n integration for building custom agents against Notion data",
      source: "Notion releases (2026-04-14), Fazm Blog",
      date: "2026-04",
    },
    {
      description:
        "AI Q&A occasionally cites the wrong source page, leading users to incorrect information",
      source: "Reddit r/Notion",
      date: "2026-02",
    },
    {
      description:
        "Autofill on large databases can be slow and sometimes times out without completing",
      source: "Notion Community Forum",
      date: "2026-03",
    },
  ],
  bestFor:
    "Teams already deep in Notion who want AI assistance without adding another tool to the stack.",
  notFor:
    "Anyone not already using Notion -- the AI alone isn't a reason to switch workspace tools.",
  verdict:
    "Notion AI is convenient, not exceptional. If Notion is already your team's brain, the AI features add genuine value for summarization and workspace search. But the writing output is mediocre, the per-member pricing adds up fast, and you can get better AI writing from dedicated tools. It's a nice-to-have, not a must-have.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "Notion releases 2026-04-14", url: "https://www.notion.com/releases/2026-04-14", dateAccessed: "2026-04-18" },
    { name: "Fazm Blog: Notion AI April 2026", url: "https://fazm.ai/blog/notion-ai-releases-april-2026-complete-list-of-every-ai-feature-shipped", dateAccessed: "2026-04-18" },
    { name: "Reddit r/Notion", dateAccessed: "2026-04-18" },
    { name: "G2 Reviews", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://notion.so",
  status: "active",
  metaTitle: "Notion AI Review 2026: Useful Add-On or Overpriced Extra?",
  metaDescription:
    "Notion AI review. Workspace Q&A, summarization, and drafting built into Notion. Convenient but pricey per member. Scores, pricing, honest take. March 2026.",
};
