import { ToolReview } from "@/lib/types";

export const deepl: ToolReview = {
  slug: "deepl",
  name: "DeepL",
  tagline: "**Nov 11: DeepL unveiled Aure, a Voice AI model that adapts translated speech to a speaker's shifting tone, emphasis and pace in real time -- two months after voice-to-voice translation went generally available with voice preservation in 12 languages.** DeepL expanded from text-only to Voice-to-Voice on 2026-04-16 -- real-time spoken translation across 40+ languages for meetings (Zoom/Teams), conversations, and enterprise API. 96% linguist preference vs Google/Microsoft/Zoom in blind evaluation",
  category: "ai-translation",
  url: "https://www.deepl.com",

  scores: {
    easeOfUse: 8.5,
    outputQuality: 9.5,
    value: 8,
    features: 7.5,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Limited characters", "3 document translations/mo", "Basic web translator"],
    },
    {
      plan: "Individual",
      price: "EUR 7.49",
      period: "month, billed annually (EUR list price as served on deepl.com/en/pro; USD not shown to our fetch)",
      features: ["300,000 characters per month", "3 file translations per month, up to 30 MB per file", "1 glossary", "30 min of DeepL Voice per month", "No data training", "30-day free trial"],
    },
    {
      plan: "Team",
      price: "EUR 24.99",
      period: "user/month, billed annually",
      features: ["1,000,000 characters per user/month", "20 file translations per month", "5 glossaries", "Team administration, analytics and reporting", "Single sign-on (SSO)"],
    },
    {
      plan: "Business",
      price: "EUR 49.99",
      period: "user/month, billed annually",
      features: ["Unlimited characters (fair usage policy)", "100 file translations per month, up to 100 MB per file", "Unlimited glossaries and translation memory", "User provisioning (SCIM)", "Translation Flow add-on available"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Custom file translation limits", "Bring your own key", "99.9% availability", "Dedicated account team"],
    },
  ],

  pros: [
    "Translation quality for European languages is noticeably better than Google Translate -- it captures nuance and tone",
    "The glossary feature lets you lock in specific terminology, which is a must for professional translation work",
    "Browser extensions and Office integration make it frictionless to use in your existing workflow",
    "API is well-documented and reasonably priced for developers building translation into their products",
  ],
  cons: [
    "Asian language accuracy (Chinese, Japanese, Korean) still lags behind its European language performance",
    "Free tier character limits are stingy -- you'll hit them fast if you're translating anything longer than emails",
    "Document translation can mangle complex formatting, especially tables and multi-column layouts",
    "Voice is still young (launched 2026-04-16, generally available September 2026) -- voice preservation covers 12 languages so far, and every paid plan includes only 30 minutes of DeepL Voice per user per month",
  ],
  knownIssues: [
    {
      description: "AURE VOICE MODEL (2026-11-11): DeepL unveiled **Aure**, which it calls its most dynamic and lifelike Voice AI model yet. Powering DeepL Voice, Aure analyzes incoming speech continuously -- using both the translated words and the source audio -- so the translated voice follows changes in tone, emotion, emphasis and pace instead of a fixed snapshot taken from the opening moments of a conversation. It builds on the September voice-preservation launch. The press release gives no separate price or language list for Aure",
      source: "DeepL press release (deepl.com/en/press-release/aure-voice-ai-model, 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "CORRECTION (2026-11-11): this page listed 'Starter' at $8.74/month and 'Advanced' at $28.74/month. DeepL's live Pro page no longer uses those plan names. The plans are **Individual** (300,000 characters and 3 file translations a month, 1 glossary), **Team** (1,000,000 characters per user, 20 file translations, 5 glossaries, SSO), **Business** (unlimited characters under a fair usage policy, 100 file translations, translation memory, SCIM) and **Enterprise** (custom). The page served EUR prices to every fetch we made (7.49 / 24.99 / 49.99 per user per month, billed annually) and no USD figures, so the old dollar prices are unverified and were removed; each paid plan now includes 30 minutes of DeepL Voice per user per month. Do not restore the Starter / Advanced rows without a vendor page that shows them",
      source: "DeepL Pro pricing page (deepl.com/en/pro, fetched 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "VOICE GA + MCP + TRANSLATION FLOW (July-October 2026, vendor blog): **Sept 15** -- new Voice models preserve each speaker's own voice and delivery across languages (initially 12 languages), a DeepL Voice desktop app for Windows and Mac works across Zoom, Microsoft Teams and Google Meet, and voice-to-voice translation became generally available. **Sept 22** -- a DeepL-hosted MCP server makes DeepL usable inside Microsoft Copilot, ChatGPT and Claude for text and whole-document translation with company glossaries and style rules. **July 7** -- Translation Flow, which automates localization workflows end-to-end from tools such as Google Drive and Contentful (sold as an add-on on Business and Enterprise). **Oct 6** -- DeepL for Sovereign Markets, hosted and operated entirely in the EU under EU jurisdiction",
      source: "DeepL blog (deepl.com/en/blog/deepl-voice-preserves-your-voice-across-languages, /deepl-available-in-microsoft-copilot-chatgpt-claude-mcp, /discover-translation-flow, /building-for-europes-sovereignty-needs)",
      date: "2026-09-22",
    },
    {
      description: "ACQUISITION (2026-06-17): **DeepL acquired Mixhalo**, a live-event low-latency audio-streaming company (founded 2016 by Incubus guitarist Mike Einziger), to push its Voice-to-Voice translation into live-event and in-venue settings -- real-time translated audio streamed to attendees' phones at conferences, sports, and shows. Mixhalo was already a DeepL customer before the deal. Pairs with DeepL's April Voice launch and a broader push beyond text, including opening a San Francisco office. Signals DeepL is serious about owning real-time spoken translation, not just document/text.",
      source: "TechCrunch (techcrunch.com/2026/06/17/deepl-acquires-mixhalo-for-live-event-audio-streaming-and-translation/)",
      date: "2026-06-17",
    },
    {
      description: "DeepL Voice-to-Voice launched 2026-04-16 as a full real-time spoken translation suite -- Zoom and Microsoft Teams add-ons for meetings, a conversation mode for group settings, and an enterprise Voice API. 40+ languages including EU languages plus Vietnamese, Thai, Arabic, Hebrew, Bengali, Tagalog. DeepL reports 96% linguist preference over Google/Microsoft/Zoom in blind evaluation. Major strategic expansion beyond text-only translation",
      source: "DeepL press release, TechCrunch, The Next Web",
      date: "2026-04",
    },
    {
      description: "PDF translations sometimes drop footnotes and headers, producing incomplete output",
      source: "Reddit r/TranslationStudies",
      date: "2026-02",
    },
    {
      description: "Glossary enforcement is inconsistent -- custom terms are sometimes ignored in longer documents",
      source: "ProZ.com forums",
      date: "2026-01",
    },
  ],
  bestFor: "Professional translators working with European languages, businesses localizing content, and anyone who needs translation quality a clear step above Google Translate.",
  notFor: "Casual users who just need quick gist translations (Google Translate is free and good enough), or teams needing Asian language pairs as their primary use case.",
  verdict: "DeepL earned its reputation honestly -- for European language pairs, the translation quality is measurably better than the competition. It reads like a human translated it, not a machine. The gap narrows significantly for Asian languages, though, where Google has invested more heavily. The entry-level Individual plan (EUR 7.49 a month on annual billing, 300,000 characters) is reasonable, but the free tier is too limited to be useful for regular work. If you translate European languages professionally, DeepL is the obvious choice.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "DeepL Pro plans and pricing", url: "https://www.deepl.com/en/pro", dateAccessed: "2026-11-11" },
    { name: "DeepL press release: Aure Voice AI model (2026-11-11)", url: "https://www.deepl.com/en/press-release/aure-voice-ai-model", dateAccessed: "2026-11-11" },
    { name: "DeepL blog: DeepL Voice now preserves your voice (2026-09-15)", url: "https://www.deepl.com/en/blog/deepl-voice-preserves-your-voice-across-languages", dateAccessed: "2026-11-11" },
    { name: "DeepL blog: DeepL in Microsoft Copilot, ChatGPT and Claude via MCP (2026-09-22)", url: "https://www.deepl.com/en/blog/deepl-available-in-microsoft-copilot-chatgpt-claude-mcp", dateAccessed: "2026-11-11" },
    { name: "DeepL blog: Discover Translation Flow (2026-07-07)", url: "https://www.deepl.com/en/blog/discover-translation-flow", dateAccessed: "2026-11-11" },
    { name: "DeepL blog: Building for Europe's sovereignty needs (2026-10-06)", url: "https://www.deepl.com/en/blog/building-for-europes-sovereignty-needs", dateAccessed: "2026-11-11" },
    { name: "TechCrunch: DeepL acquires Mixhalo (2026-06-17)", url: "https://techcrunch.com/2026/06/17/deepl-acquires-mixhalo-for-live-event-audio-streaming-and-translation/", dateAccessed: "2026-07-04" },
    { name: "DeepL: Voice-to-Voice press release", url: "https://www.deepl.com/en/press-release/deepl-unveils-real-time-spoken-translation-breaking-the-next-language-barrier-with-voice-to-voice", dateAccessed: "2026-04-18" },
    { name: "DeepL Voice product page", url: "https://www.deepl.com/en/products/voice", dateAccessed: "2026-04-18" },
    { name: "TechCrunch: DeepL voice translation", url: "https://techcrunch.com/2026/04/16/deepl-known-for-text-translation-now-wants-to-translate-your-voice/", dateAccessed: "2026-04-18" },
    { name: "G2 Reviews", dateAccessed: "2026-04-18" },
    { name: "Reddit r/TranslationStudies", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://www.deepl.com",
  status: "active",
  metaTitle: "DeepL Review 2026: Aure Voice Model, New Plans, MCP Access",
  metaDescription: "DeepL review. Aure Voice AI model (Nov 11 2026), voice-to-voice translation now GA, MCP access in Copilot, ChatGPT and Claude. Plans compared.",
};
