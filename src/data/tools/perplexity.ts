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
    { plan: "Pro", price: "$20", period: "month", features: ["600 Pro searches/day", "GPT-4o & Claude access", "File uploads", "API access"] },
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
    { description: "Occasionally cites sources that don't actually support the claim being made", source: "Reddit r/perplexity_ai", date: "2026-03" },
  ],
  bestFor: "Researchers, students, professionals, and anyone who needs factual answers with sources. It's what Google should have become.",
  notFor: "Creative writing, brainstorming, or tasks where you need a conversational AI partner. Use Claude or ChatGPT for that.",
  verdict: "Perplexity is the best AI tool for research, period. The citation system means you can actually trust and verify answers instead of blindly hoping the AI didn't hallucinate. It's not trying to be ChatGPT -- it's trying to replace Google for research queries, and it's succeeding. If you do any kind of research work, the Pro plan is worth it.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Perplexity official site", dateAccessed: "2026-03-26" },
    { name: "Reddit r/perplexity_ai", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://perplexity.ai",
  status: "active",
  metaTitle: "Perplexity AI Review 2026: The AI Search Engine That Cites Its Sources",
  metaDescription: "Perplexity AI review. Best AI for research with real citations. Is it better than ChatGPT for finding answers? Scores, pricing. March 2026.",
};
