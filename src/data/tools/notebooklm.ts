import { ToolReview } from "@/lib/types";

export const notebookLm: ToolReview = {
  slug: "notebooklm",
  name: "NotebookLM",
  tagline: "Google's free research assistant that turns your documents into an AI you can query -- and a podcast you can listen to",
  category: "ai-chatbots",
  url: "https://notebooklm.google.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 9.5,
    features: 6.5,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Unlimited notebooks", "50 sources per notebook", "Audio Overviews", "Full AI chat"],
    },
  ],

  pros: [
    "Completely free with no catch -- no credit limits, no trials, no paywalls hiding the good features",
    "Audio Overview feature is genuinely unique -- it generates surprisingly listenable podcast-style summaries of your sources",
    "Grounded in your documents only, so it doesn't hallucinate from general knowledge -- every answer cites your sources",
    "Great for students and researchers who need to synthesize information from multiple PDFs, articles, or notes",
  ],
  cons: [
    "Limited to your uploaded sources -- it can't pull in general knowledge, so it's useless without documents loaded",
    "Audio Overviews still have a slightly robotic cadence that gives away they're AI-generated",
    "50-source limit per notebook is restrictive on the free tier (Education Plus and Workspace Teaching & Learning add-on lift it; standalone free is the constraint)",
    "Collaboration is improving via the new Notebooks-in-Gemini integration but team workflows are still thinner than in dedicated research tools",
  ],
  knownIssues: [
    {
      description: "Notebooks-in-Gemini integration shipped April 2026: Google merged the NotebookLM workflow into the Gemini app under a new 'Notebooks' surface that cross-syncs with notebooklm.google.com. If you live in Gemini, you can now build and query source-grounded notebooks without leaving the app -- same source ingestion, same Audio Overviews, shared library across both surfaces",
      source: "blog.google: Notebooks in Gemini and NotebookLM, Google Workspace Updates",
      date: "2026-04",
    },
    {
      description: "EPUB file support added in Q1-Q2 2026 alongside the prior PDF / DOCX / Google Docs / web-URL ingestion paths -- ebooks finally drop in cleanly. Useful if you're synthesizing across long-form non-fiction without first ripping epubs to text",
      source: "Google Workspace Updates",
      date: "2026-04",
    },
    {
      description: "Cinematic Video Overviews (2026-Q2 rollout) extends the 'two-AI-hosts-discussing-your-source' Audio Overview format to a video format -- generated visuals, on-screen citations, and the same banter cadence. Treat as a beta-quality feature, but the UX upgrade for visual learners is real",
      source: "blog.google",
      date: "2026-04",
    },
    {
      description: "Education Plus tier (and Teaching & Learning add-on) got expanded NotebookLM limits in 2026-04 -- higher per-notebook source caps and audio-generation quotas than the standalone free tier. The 'restrictive 50-source limit' caveat applies to free-tier users only; institutional Workspace customers should reference the Education Plus quota sheet",
      source: "workspaceupdates.googleblog.com",
      date: "2026-04",
    },
    {
      description: "Audio Overview generation sometimes fails silently on longer documents, requiring the user to retry",
      source: "Reddit r/NotebookLM",
      date: "2026-02",
    },
    {
      description: "Source parsing can struggle with complex PDF layouts -- tables and multi-column formats often get garbled",
      source: "Reddit r/NotebookLM",
      date: "2026-03",
    },
  ],
  bestFor: "Students researching papers, professionals who need to quickly digest long documents, and anyone who wants to turn a pile of PDFs into something they can query and listen to.",
  notFor: "People who want a general-purpose AI chatbot -- NotebookLM deliberately won't answer questions outside your uploaded sources. Also not for teams needing shared workspaces.",
  verdict: "NotebookLM is the rare Google product that's both free and genuinely useful. The source-grounded approach means you can trust the answers more than a general chatbot, and Audio Overviews are a legitimately novel feature. The limitations are real -- the 50-source cap, no collaboration, and no general knowledge -- but for individual research and document synthesis, nothing else is this good at this price (free). It feels like Google's loss leader for Workspace AI, so enjoy it while it lasts.",

  lastReviewedDate: "2026-04-25",
  dataSources: [
    { name: "blog.google: Notebooks in Gemini + NotebookLM (Apr 2026)", url: "https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/", dateAccessed: "2026-04-25" },
    { name: "Google Workspace Updates: Expanded NotebookLM for Education Plus + Teaching and Learning", url: "https://workspaceupdates.googleblog.com/2026/04/expanded-notebooklm-capabilities-for-Education-Plus-and-Teaching-and-Learning-add-on-customers.html", dateAccessed: "2026-04-25" },
    { name: "NotebookLM official site", dateAccessed: "2026-04-25" },
    { name: "Reddit r/NotebookLM", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-04-25" },
  ],
  affiliateUrl: "https://notebooklm.google.com",
  status: "active",
  personality: {
    oneLiner: "The source-bound study partner",
    tone: "Careful and citation-only. NotebookLM only answers from the documents you upload -- if the source does not say it, NotebookLM will not make it up, and it will tell you when the corpus is silent.",
    quirks: "Refuses to speculate beyond your notebook, which makes it the least 'personality'-driven chatbot on this list. The Audio Overview feature is genuinely different though -- two synthetic podcast hosts summarize your docs with real banter.",
  },
  metaTitle: "NotebookLM Review 2026: Google's Free AI Research Tool With Audio Overviews",
  metaDescription: "NotebookLM review. Free AI tool that queries your documents and generates podcast summaries. No hallucinations from outside sources. Scores, features. March 2026.",
};
