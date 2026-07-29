import { ToolReview } from "@/lib/types";

export const surferSeo: ToolReview = {
  slug: "surfer-seo",
  name: "Surfer SEO",
  tagline: "AI-powered content optimization that tells you exactly what to write to rank on Google -- and, since the 2026 repricing, an AI-visibility tracker for ChatGPT and other LLMs. Plans restructured to Discovery $49 / Standard $99 / Pro $182 / Peace of Mind $299 (annual), with AI Search Analytics sold standalone at $158",
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
    { plan: "Discovery", price: "$49", period: "month (billed annually)", features: ["Create or optimize 120 documents", "Track 10 pages", "Entry tier -- no AI-visibility tracking"] },
    { plan: "Standard", price: "$99", period: "month (billed annually)", features: ["Create or optimize 360 documents", "Adds AI visibility tracking across ChatGPT"] },
    { plan: "Pro", price: "$182", period: "month (billed annually)", features: ["Create or optimize 360 documents", "Track 50 AI prompts daily across multiple LLMs"] },
    { plan: "Peace of Mind", price: "$299", period: "month (billed annually)", features: ["Unlimited document creation/optimization", "Track 100 AI prompts daily"] },
    { plan: "AI Search Analytics (standalone)", price: "$158", period: "month (billed annually)", features: ["Sold separately from the writing tiers", "Tracks 100 AI prompts refreshed daily across key LLMs"] },
    { plan: "Enterprise", price: "$999", period: "month (custom)", features: ["Advisory-led strategy", "Automation", "Enterprise-grade controls"] },
  ],

  pros: [
    "Content Editor gives you a real-time score as you write, showing exactly what Google wants",
    "SERP Analyzer breaks down what's working for competitors on page 1",
    "AI writing assistant produces SEO-optimized content that actually reads well",
    "Audit feature identifies quick wins on existing content",
  ],
  cons: [
    "Still pricey, though the floor dropped -- entry is now $49/mo on annual billing (Discovery), and the AI-prompt tracking that justifies the tool in 2026 starts at $99",
    "Can lead to over-optimized, formulaic content if you follow scores too literally",
    "AI writer is decent but not as good as just using Claude with Surfer's guidelines",
    "Keyword research features are basic compared to dedicated tools like Ahrefs",
  ],
  knownIssues: [
    { description: "Content Score sometimes gives conflicting recommendations (add more words vs. reduce fluff)", source: "G2 Reviews", date: "2026-02" },
  ],
  bestFor: "Content teams and SEO agencies producing high volumes of search-optimized content. The Content Editor workflow is genuinely useful for improving rankings.",
  notFor: "Solo bloggers or small businesses on a budget. You can get 80% of the value from free tools and ChatGPT/Claude.",
  verdict: "Surfer SEO works. Content written with the Content Editor does rank better in our experience. The question is whether the price is worth it for your situation. For agencies and content teams, absolutely. For individual creators the ROI is easier than it used to be now that Discovery starts at $49/mo on annual billing, though prompt-level AI tracking means stepping up to $99 or more. The AI writer is decent but you'll get better results writing yourself with Surfer's guidelines.",

  lastReviewedDate: "2026-07-29",
  dataSources: [
    { name: "Surfer SEO pricing page (2026 plan restructure: Discovery/Standard/Pro/Peace of Mind + standalone AI Search Analytics)", url: "https://surferseo.com/pricing/", dateAccessed: "2026-07-29" },
    { name: "Surfer SEO official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing with live content", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://surferseo.com",
  status: "active",
  metaTitle: "Surfer SEO Review 2026: AI Content Optimization That Works",
  metaDescription: "Surfer SEO review. 2026 pricing rebuilt: Discovery $49, Standard $99, Pro $182, Peace of Mind $299 annually, plus standalone AI Search Analytics at $158. Honest scores, AI-visibility features, pros and cons.",
};
