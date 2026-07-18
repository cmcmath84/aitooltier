import { ToolReview } from "@/lib/types";

export const grammarly: ToolReview = {
  slug: "grammarly",
  name: "Grammarly (by Superhuman)",
  tagline: "AI writing assistant that catches errors everywhere you type -- now with full AI rewriting. The company behind it renamed itself Superhuman in November 2025 (the Grammarly product keeps its name), alongside sibling products Coda, Superhuman Mail, and the Superhuman Go proactive AI assistant",
  category: "ai-writing-tools",
  url: "https://grammarly.com",

  scores: {
    easeOfUse: 10,
    outputQuality: 7,
    value: 7,
    features: 8,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Basic grammar/spelling", "Tone detection", "100 AI prompts/mo"] },
    { plan: "Premium", price: "$12", period: "month", features: ["Advanced suggestions", "Plagiarism detection", "1,000 AI prompts/mo", "Full rewriting"] },
    { plan: "Business", price: "$15", period: "user/month", features: ["Brand tones", "Analytics", "Admin controls", "2,000 AI prompts/mo"] },
  ],

  pros: [
    "Works everywhere -- browser extension, desktop app, mobile keyboard, Google Docs, Office",
    "Grammar and spelling correction is the best available, period",
    "Tone and clarity suggestions genuinely improve writing",
    "The AI rewriting feature is useful for polishing, not just generating from scratch",
  ],
  cons: [
    "AI writing capabilities are basic compared to Claude or ChatGPT",
    "Premium feels necessary -- the free tier misses too many suggestions",
    "Can be overly aggressive with suggestions, making writing feel generic",
    "Desktop app is heavy and can slow down your system",
  ],
  knownIssues: [
    {
      description: "PARENT-COMPANY LAUNCH (2026-07-08): Superhuman (the company formerly known as Grammarly) launched **Superhuman Docs** -- a collaborative document platform built on the acquired Coda technology, merging writing, AI, and structured data. Features: AI-drafting from prompts, structured tables + interactive data views, a Docs AI assistant (drafting, table creation, comment resolution, cross-document retrieval), AI Views in private beta (describe a custom interface, the system builds it on live data), Superhuman Databases private beta (up to 1M rows), and an MCP connector linking Docs to ChatGPT, Claude, and Cursor. Early users: Figma, DoorDash, The New York Times. No pricing disclosed at launch. Relevance for Grammarly users: the writing assistant is now one product in a growing Superhuman suite (Mail, Go, Docs, Coda), and suite-level bundling/pricing changes are worth watching",
      source: "SiliconANGLE (siliconangle.com/2026/07/08/superhuman-launches-docs-merging-writing-ai-data-document-collaboration/)",
      date: "2026-07-08",
    },
    { description: "COMPANY REBRAND (2025-11-05, catalogued late -- our miss): **Grammarly the company renamed itself Superhuman.** The Grammarly writing product keeps its name, but it now sits inside a multi-product AI productivity company: Grammarly (writing), **Coda** (collaborative workspace), **Superhuman Mail** (the email client it acquired), and **Superhuman Go** -- a new proactive AI assistant that launched with agents from partners including Google Workspace, Microsoft Outlook, and Atlassian (Go features were free for all users through 2026-02-01). Vendor framing: 'AI should amplify human capability, not replace it.' Practical read: expect the standalone Grammarly experience to keep converging with the Go assistant and the broader Superhuman suite -- if you only want the grammar net, watch for bundle upsells", source: "Superhuman/Grammarly blog (grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/)", date: "2025-11" },
    { description: "Browser extension occasionally conflicts with web-based editors (Notion, Confluence), causing formatting issues", source: "Grammarly Community", date: "2026-03" },
  ],
  bestFor: "Non-native English speakers, professionals who write lots of emails, and anyone who wants a passive grammar net running in the background. It catches things you'd miss.",
  notFor: "Creative writers who have a deliberate style (Grammarly will try to 'fix' it) or anyone who just needs AI content generation (use Claude/ChatGPT).",
  verdict: "Grammarly is less of an AI tool and more of a writing safety net that now has AI features bolted on. It's excellent at what it was built for -- catching errors and improving clarity. The AI rewriting is fine but not why you'd buy it. Think of it as spell-check on steroids, not an AI writer. One structural note: the company behind it renamed itself Superhuman (November 2025) and is assembling a productivity suite around the writing product -- Coda, Superhuman Mail, and the Superhuman Go assistant -- so expect the standalone Grammarly experience to keep drifting toward that bundle.",

  lastReviewedDate: "2026-07-18",
  dataSources: [
    { name: "SiliconANGLE: Superhuman launches Docs (2026-07-08)", url: "https://siliconangle.com/2026/07/08/superhuman-launches-docs-merging-writing-ai-data-document-collaboration/", dateAccessed: "2026-07-18" },
    { name: "Superhuman: Announcing our company rebrand to Superhuman (2025-11-05)", url: "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/", dateAccessed: "2026-07-04" },
    { name: "Grammarly official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Daily use testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://grammarly.com",
  status: "active",
  metaTitle: "Grammarly Review 2026: Now Part of Superhuman -- AI Writing Assistant or Just Spell Check?",
  metaDescription: "Grammarly review. Best grammar checker available, now with AI rewriting -- and the company rebranded to Superhuman (Nov 2025) with Coda, Superhuman Mail + Go assistant. Is it worth paying for? Scores, pricing, honest take.",
};
