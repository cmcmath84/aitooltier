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
    { plan: "Pro", price: "$20", period: "month", features: ["600 Pro searches/day", "Frontier model access", "File uploads (PDF/DOC/DOCX/TXT/RTF)", "API access + official Python/TypeScript SDKs", "**Personal Computer included since 2026-05-07** via the Perplexity Mac app (was Max-only at April launch)"] },
    { plan: "Max", price: "$200", period: "month", features: ["Personal Computer (first access 2026-04-16)", "Highest priority queue", "All frontier models", "Always-on agent orchestrates Mail, Notes, iMessage, Safari, local files"] },
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
    {
      description: "PERSONAL COMPUTER FOR WINDOWS (2026-07-28, vendor-primary): Perplexity's agent platform came to Windows -- 'Today we're launching Personal Computer for Windows, bringing Perplexity's agent platform to more than a billion devices globally.' It works on local files (create and edit Word/Excel, find files and file them in Explorer), moves between local files and the web, connects to Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams) plus 400+ App Connectors, supports voice mode, and hands tasks off from phone to desktop. **AVAILABILITY CORRECTION -- this is NOT Max-gated, contrary to some coverage.** The vendor page states plainly: '**Personal Computer is available now for Pro, Max, and Enterprise subscribers on Windows 10 and 11**' (verified by direct fetch 2026-08-03). Safety posture: it 'always alerts a user before it takes a sensitive action like sending an email or deleting a file', files are created in a secure sandbox, and actions are auditable. Perplexity's own scale claim: Computer has performed 'more than $9.4B in labor-equivalent work' since launching earlier this year. This closes the Mac-only gap the April 2026 launch left open",
      source: "Perplexity blog (perplexity.ai/hub/blog/personal-computer-on-windows, fetched 2026-08-03 via curl -- perplexity.ai 403s WebFetch)",
      date: "2026-07-28",
    },
    {
      description: "BRAIN MEMORY + CLAUDE OPUS 5 UNDERNEATH (2026-07-13 and 2026-07-27, vendor changelog): **Brain**, Perplexity's self-improving memory system, launched in Computer on 7/13 -- it builds a private context graph across sessions, connectors, files and past decisions, refreshes nightly, links every memory back to its source, and can be switched off. Vendor-reported effect: it 'lifted answer correctness 25% and recall 16% while cutting cost 13% on tasks with prior context.' On **7/27 Brain went global for Max subscribers** in 15 languages. Same day, **Claude Opus 5 went live across Perplexity Search and Computer** -- vendor wording: 'On the WANDR benchmark, it outperformed every model tested except Fable 5, while costing 57% less per task.' Also in this window: mid-task orchestrator model switching, one-click website publishing to pplx.app or your own domain via Vercel, and Agent API Skills. Treat the Brain and WANDR figures as first-party",
      source: "Perplexity changelog (perplexity.ai/changelog, entries 2026-07-13 and 2026-07-27)",
      date: "2026-07-27",
    },
    { description: "PERSONAL COMPUTER EXPANSION (2026-05-07, vendor-confirmed): 'Personal Computer is Available to All Mac Users' -- the always-on agent rolled out to **Pro ($20/mo) and Max subscribers via the new Perplexity Mac app**, ending the Max-only gate from the April 16 launch. Runs locally and autonomously (optimized for Mac/Mac mini), 400+ connectors, credit usage tied to subscription tier. Since then: a hybrid local-server inference orchestrator (~2026-06-05, automatic on-device vs cloud task routing, shown at Computex 2026) and an announced **Windows version** (~2026-06-04, orchestrates local apps, files, and 20+ AI models -- not yet shipped)", source: "Perplexity blog (perplexity.ai/hub/blog/personal-computer-is-available-to-all-mac-users), VentureBeat (Computex hybrid inference), heise (Windows version)", date: "2026-06" },
    { description: "Pro Search reached GA in April 2026 with multi-step reasoning across sources. Official Python and TypeScript SDKs also released. File attachment support (PDF/DOC/DOCX/TXT/RTF) rolled out in the same window", source: "TechBriefly, Perplexity blog", date: "2026-04" },
    { description: "Occasionally cites sources that don't actually support the claim being made", source: "Reddit r/perplexity_ai", date: "2026-03" },
  ],
  bestFor: "Researchers, students, professionals, and anyone who needs factual answers with sources. It's what Google should have become.",
  notFor: "Creative writing, brainstorming, or tasks where you need a conversational AI partner. Use Claude or ChatGPT for that.",
  verdict: "Perplexity is the best AI tool for research, period. The citation system means you can actually trust and verify answers instead of blindly hoping the AI didn't hallucinate. It's not trying to be ChatGPT -- it's trying to replace Google for research queries, and it's succeeding. If you do any kind of research work, the Pro plan is worth it.",

  lastReviewedDate: "2026-08-03",
  dataSources: [
    { name: "Perplexity blog: Personal Computer is Available to All Mac Users (2026-05-07)", url: "https://www.perplexity.ai/hub/blog/personal-computer-is-available-to-all-mac-users", dateAccessed: "2026-06-09" },
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
  metaTitle: "Perplexity AI Review 2026: Personal Computer Now on Pro $20/mo, Windows Coming",
  metaDescription: "Perplexity AI review. Personal Computer agent now included with Pro ($20/mo) via the Mac app since May 7 2026 -- Windows version announced. Pro Search GA, citations-first AI search. June 2026.",
};
