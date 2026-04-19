import { ToolReview } from "@/lib/types";

export const deepl: ToolReview = {
  slug: "deepl",
  name: "DeepL",
  tagline: "DeepL expanded from text-only to Voice-to-Voice on 2026-04-16 -- real-time spoken translation across 40+ languages for meetings (Zoom/Teams), conversations, and enterprise API. 96% linguist preference vs Google/Microsoft/Zoom in blind evaluation",
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
      plan: "Starter",
      price: "$8.74",
      period: "month",
      features: ["Unlimited text translation", "5 document translations/mo", "1 glossary"],
    },
    {
      plan: "Advanced",
      price: "$28.74",
      period: "month",
      features: ["Unlimited documents", "20 glossaries", "CAT tool integration"],
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
    "Voice-to-Voice is brand new (launched 2026-04-16) -- expect first-weeks rough edges in low-resource language pairs and in noisy conference-room audio before DeepL's ASR front-end tunes",
  ],
  knownIssues: [
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
  verdict: "DeepL earned its reputation honestly -- for European language pairs, the translation quality is measurably better than the competition. It reads like a human translated it, not a machine. The gap narrows significantly for Asian languages, though, where Google has invested more heavily. At $8.74/mo the Starter plan is reasonable, but the free tier is too limited to be useful for regular work. If you translate European languages professionally, DeepL is the obvious choice.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "DeepL: Voice-to-Voice press release", url: "https://www.deepl.com/en/press-release/deepl-unveils-real-time-spoken-translation-breaking-the-next-language-barrier-with-voice-to-voice", dateAccessed: "2026-04-18" },
    { name: "DeepL Voice product page", url: "https://www.deepl.com/en/products/voice", dateAccessed: "2026-04-18" },
    { name: "TechCrunch: DeepL voice translation", url: "https://techcrunch.com/2026/04/16/deepl-known-for-text-translation-now-wants-to-translate-your-voice/", dateAccessed: "2026-04-18" },
    { name: "G2 Reviews", dateAccessed: "2026-04-18" },
    { name: "Reddit r/TranslationStudies", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://www.deepl.com",
  status: "active",
  metaTitle: "DeepL Review 2026: Voice-to-Voice Translation Launched April 16",
  metaDescription: "DeepL review. Voice-to-Voice real-time spoken translation launched Apr 16 2026 across 40+ languages (Zoom/Teams/API). 96% linguist preference vs Google/Microsoft/Zoom.",
};
