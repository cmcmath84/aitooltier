import { ToolReview } from "@/lib/types";

export const notebookLm: ToolReview = {
  slug: "notebooklm",
  name: "Gemini Notebook (formerly NotebookLM)",
  tagline: "Google's free research assistant that turns your documents into an AI you can query -- and a podcast you can listen to. **Renamed from NotebookLM to Gemini Notebook on 2026-07-16**, still a standalone product, now with in-notebook code execution and syncing across the Gemini app and Search. **Expert Intelligence (2026-08-27) makes purchased Play Books ebooks a first-class source**; compute-weighted usage limits that refresh every 5 hours roll out 2026-09-02",
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
      description: "THE PRODUCT WAS RENAMED TO GEMINI NOTEBOOK ON 2026-07-16 AND THIS PAGE MISSED IT FOR SIX WEEKS (2026-07-16, vendor-primary -- staleness catch, recorded 2026-08-28): Google renamed **NotebookLM to Gemini Notebook**. This review was last checked 2026-07-04, twelve days before the rename, and four subsequent sweeps did not catch it -- the same failure class as the Grammarly/Superhuman miss. **It is explicitly still a standalone product**, not a feature folded into the Gemini app: Google's wording is 'It remains a standalone product focused on being your premier research tool.' What changed alongside the name: **code execution inside notebooks** for deeper data analysis (rolling out to Pro users), a **secure cloud computer** behind it, and **notebooks syncing across the Gemini app and Google Search**. Scale figures Google published at the rename: **more than 30 million people and over 600,000 organizations**. **We keep the /notebooklm URL deliberately** -- the old name still carries the search demand, and the page now serves both queries.",
      source: "Google (blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/, on-page 'Jul 16, 2026') -- fetched 2026-08-28 via curl",
      date: "2026-07-16",
    },
    {
      description: "EXPERT INTELLIGENCE -- PURCHASED BOOKS BECOME NOTEBOOK SOURCES (2026-08-27, vendor-primary): Google launched Expert Intelligence, a cross-Google initiative that lets you pull '**insights from leading authors, publications, and domain experts**' into Gemini Notebook, **including from titles you have purchased**. Concretely: **select ebooks bought from Google Play Books can be added directly to a notebook**, and answers are grounded in that book. This is a genuine change to the sourcing model -- Gemini Notebook has always been strictly bring-your-own-documents, and this is the first time licensed third-party commercial content is a first-class source. **Gemini Notebook is the launch surface, with 'more products from across Google joining soon'** -- so expect this in the Gemini app and Search later. **CAVEAT WORTH KEEPING: it is limited to *select* purchased titles, so it is a publisher-by-publisher licensing rollout, not your whole Play Books library.**",
      source: "Google (blog.google/innovation-and-ai/products/gemini-notebook/expert-intelligence-leading-sources/, on-page 'Aug 27, 2026', RSS pubDate 'Thu, 27 Aug 2026 19:30:00 +0000') -- fetched 2026-08-28 via curl",
      date: "2026-08-27",
    },
    {
      description: "FLEXIBLE, COMPUTE-WEIGHTED USAGE LIMITS -- ANNOUNCED 8/28, ROLLING OUT 9/2 (2026-08-28, vendor-primary): Google is replacing Gemini Notebook's flat daily caps with '**compute-specific**' limits. **The two changes that actually matter to a heavy user point in opposite directions.** (1) **Limits refresh every five hours rather than daily** -- strictly better; you are no longer locked out for a full day after one heavy session. (2) **Your overall limit now factors in prompt complexity, chat length, number of sources, and which features you use** -- so an identical number of prompts can consume materially different amounts of quota, and the ceiling becomes harder to predict than a plain daily count. Google frames this as 'more control over your compute budget'; the honest read is that it is **metering that tracks cost rather than actions**. The notebook surfaces your usage and will suggest cheaper alternative outputs when a request would exceed the limit, and expensive artefacts (**Video Overviews, Slide Decks**) can be **deferred to generate automatically later** with a notification. **DATED WATCH -- these are rolling out to consumer accounts on web and mobile starting 2026-09-02, so as of this review they are announced and not yet live.** Google states all existing features remain accessible.",
      source: "Google (blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/, on-page 'Aug 28, 2026', RSS pubDate 'Fri, 28 Aug 2026 17:00:00 +0000') -- fetched 2026-08-28 via curl",
      date: "2026-08-28",
    },
    {
      description: "NEW FEATURE (2026-07-01): NotebookLM added **Short Video Overviews** -- it generates ~60-second vertical (Shorts/Reels/TikTok-style) videos from your uploaded documents, extending the two-host Audio/Video Overview format into a social-native short clip. Pairs with the June Gemini 3.5 upgrade and the longer Cinematic Video Overviews already in the product. Practical use: turn a source doc into a shareable short without a separate video tool.",
      source: "The Verge (theverge.com/tech/959778/google-notebooklm-ai-clips)",
      date: "2026-07-01",
    },
    {
      description: "MAJOR UPDATE (2026-06-08): NotebookLM became an agentic analysis surface -- **Gemini 3.5 is now the default model**, each workspace gets a **virtual machine where NotebookLM writes and RUNS code** for data analysis (powered by Antigravity, with 100+ pre-packaged 'software skills'), chat-driven source building (it suggests and gathers sources via research skills + Google Search instead of manual-upload-only), and custom output formats (.png/.svg charts, PDF/.docx/Markdown, .csv/.json, Excel, PowerPoint -- editable after generation). ROLLOUT CAVEAT: Google AI **Ultra** subscribers + Workspace AI Ultra/Expanded Access tiers FIRST, broader rollout later -- most free/Plus users don't have this yet. PRICING CONTEXT (Google AI plans, reshuffled at I/O 5/19, verified on one.google.com 6/10): AI Plus $4.99/mo, AI Pro $19.99/mo, AI Ultra 5x from $99.99/mo, AI Ultra 20x $199.99/mo -- NotebookLM capability scales with these plans; there is no NotebookLM-specific price list",
      source: "TechCrunch (2026-06-08), SiliconAngle, one.google.com/about/google-ai-plans (verified 2026-06-10), blog.google (I/O pricing)",
      date: "2026-06-08",
    },
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

  lastReviewedDate: "2026-08-28",
  dataSources: [
    { name: "Google: NotebookLM is now Gemini Notebook (2026-07-16)", url: "https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/", dateAccessed: "2026-08-28" },
    { name: "Google: Expert Intelligence (2026-08-27)", url: "https://blog.google/innovation-and-ai/products/gemini-notebook/expert-intelligence-leading-sources/", dateAccessed: "2026-08-28" },
    { name: "Google: Flexible usage limits for Gemini Notebook (2026-08-28)", url: "https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/", dateAccessed: "2026-08-28" },
    { name: "The Verge: NotebookLM Short Video Overviews (2026-07-01)", url: "https://www.theverge.com/tech/959778/google-notebooklm-ai-clips", dateAccessed: "2026-07-04" },
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
  metaTitle: "Gemini Notebook (formerly NotebookLM) Review 2026: Rename, Expert Intelligence + New Usage Limits",
  metaDescription: "Gemini Notebook review -- NotebookLM was renamed on 2026-07-16. Free source-grounded research AI with Audio Overviews, now with code execution, Expert Intelligence ebook sources, and 5-hourly compute-weighted limits from 2026-09-02.",
};
