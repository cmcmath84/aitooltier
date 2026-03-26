import { ToolReview } from "@/lib/types";

export const surferSeo: ToolReview = {
  slug: "surfer-seo",
  name: "Surfer SEO",
  tagline: "AI-powered content optimization that tells you exactly what to write to rank on Google",
  category: "ai-seo-tools",
  url: "https://surferseo.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 7,
    features: 8,
    overall: 7.8,
  },

  hasFreeTier: false,
  pricing: [
    { plan: "Essential", price: "$89", period: "month", features: ["30 articles/mo", "Content editor", "SERP analyzer"] },
    { plan: "Scale", price: "$129", period: "month", features: ["100 articles/mo", "AI writing", "Audit tool", "API"] },
    { plan: "Enterprise", price: "Custom", features: ["Unlimited articles", "Custom AI models", "Priority support"] },
  ],

  pros: [
    "Content Editor gives you a real-time score as you write, showing exactly what Google wants",
    "SERP Analyzer breaks down what's working for competitors on page 1",
    "AI writing assistant produces SEO-optimized content that actually reads well",
    "Audit feature identifies quick wins on existing content",
  ],
  cons: [
    "Expensive -- $89/mo minimum puts it out of reach for solo bloggers",
    "Can lead to over-optimized, formulaic content if you follow scores too literally",
    "AI writer is decent but not as good as just using Claude with Surfer's guidelines",
    "Keyword research features are basic compared to dedicated tools like Ahrefs",
  ],
  knownIssues: [
    { description: "Content Score sometimes gives conflicting recommendations (add more words vs. reduce fluff)", source: "G2 Reviews", date: "2026-02" },
  ],
  bestFor: "Content teams and SEO agencies producing high volumes of search-optimized content. The Content Editor workflow is genuinely useful for improving rankings.",
  notFor: "Solo bloggers or small businesses on a budget. You can get 80% of the value from free tools and ChatGPT/Claude.",
  verdict: "Surfer SEO works. Content written with the Content Editor does rank better in our experience. The question is whether the price is worth it for your situation. For agencies and content teams, absolutely. For individual creators, the ROI is harder to justify at $89/mo. The AI writer is decent but you'll get better results writing yourself with Surfer's guidelines.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Surfer SEO official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing with live content", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://surferseo.com",
  status: "active",
  metaTitle: "Surfer SEO Review 2026: AI Content Optimization That Works",
  metaDescription: "Surfer SEO review. Content Editor improves rankings, but is it worth $89/mo? Honest scores, pricing breakdown, pros and cons. March 2026.",
};
