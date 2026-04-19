import { ToolReview } from "@/lib/types";

export const perplexity: ToolReview = {
  slug: "perplexity",
  name: "Perplexity AI",
  tagline: "AI-powered search engine that gives cited answers instead of a list of links",
  category: "ai-chatbots",
  url: "https://perplexity.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Unlimited quick searches", "5 Pro searches/day", "Basic AI model"] },
    { plan: "Pro", price: "$20", period: "month", features: ["600 Pro searches/day", "GPT-5.4 & Claude Opus 4.7 access", "File uploads (PDF/DOC/DOCX/TXT/RTF)", "API access + official Python/TypeScript SDKs", "Pro Search GA with multi-step reasoning"] },
    { plan: "Max", price: "$200", period: "month", features: ["Personal Computer for Mac (rolled out 2026-04-16)", "Highest priority queue", "All frontier models", "Always-on agent orchestrates Mail, Notes, iMessage, Safari, local files"] },
  ],

  pros: [
    "Every answer includes numbered citations to real sources -- you can verify claims",
    "Pro search mode deeply researches your question across multiple sources before answering",
    "Faster than ChatGPT for factual research and current events",
    "Free tier is surprisingly generous for casual research",
  ],
  cons: [
    "Not great for creative tasks -- it's a research tool, not a creative partner",
    "Citations sometimes link to low-quality or paywalled sources",
    "Writing quality is functional but bland compared to Claude",
    "Pro searches are limited even on the paid plan",
  ],
  knownIssues: [
    { description: "Personal Computer for Mac launched to Perplexity Max ($200/mo) on 2026-04-16 -- first 'always-on' personal AI agent productized as a native Mac app. Press both Command keys to activate. Optimized to run 24/7 on a Mac mini. Broader rollout to Pro ($20/mo) tier 'coming soon' (estimated May-June 2026)", source: "Engadget, MacRumors, 9to5Mac", date: "2026-04" },
    { description: "Pro Search reached GA in April 2026 with multi-step reasoning across sources. Official Python and TypeScript SDKs also released. File attachment support (PDF/DOC/DOCX/TXT/RTF) rolled out in the same window", source: "TechBriefly, Perplexity blog", date: "2026-04" },
    { description: "Occasionally cites sources that don't actually support the claim being made", source: "Reddit r/perplexity_ai", date: "2026-03" },
  ],
  bestFor: "Researchers, students, professionals, and anyone who needs factual answers with sources. It's what Google should have become.",
  notFor: "Creative writing, brainstorming, or tasks where you need a conversational AI partner. Use Claude or ChatGPT for that.",
  verdict: "Perplexity is the best AI tool for research, period. The citation system means you can actually trust and verify answers instead of blindly hoping the AI didn't hallucinate. It's not trying to be ChatGPT -- it's trying to replace Google for research queries, and it's succeeding. If you do any kind of research work, the Pro plan is worth it.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "Perplexity official site", dateAccessed: "2026-04-18" },
    { name: "Engadget: Perplexity Personal Computer for Mac", url: "https://www.engadget.com/ai/perplexity-brings-its-personal-computer-ai-assistant-to-mac-202045969.html", dateAccessed: "2026-04-18" },
    { name: "MacRumors: Perplexity Personal Computer for Mac", url: "https://www.macrumors.com/2026/04/16/perplexity-personal-computer-for-mac/", dateAccessed: "2026-04-18" },
    { name: "Reddit r/perplexity_ai", dateAccessed: "2026-04-18" },
    { name: "Hands-on testing", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://perplexity.ai",
  status: "active",
  personality: {
    oneLiner: "The citation-first researcher",
    tone: "Clean, web-grounded, and clinical. Perplexity treats every answer like a research brief -- short intro, bullet findings, inline citations -- rather than a conversation.",
    quirks: "Hedges less than Claude because it is citing sources rather than stating opinions. Pro Search and Deep Research modes sound almost academic; casual chat feels stiff compared to ChatGPT.",
  },
  metaTitle: "Perplexity AI Review 2026: Personal Computer for Mac, Pro Search GA",
  metaDescription: "Perplexity AI review. Personal Computer for Mac launched Apr 16 2026 on Max ($200/mo), Pro Search GA, Python/TS SDKs. Best AI search with citations. April 2026.",
};
