import { ToolReview } from "@/lib/types";

export const aiva: ToolReview = {
  slug: "aiva",
  name: "AIVA",
  tagline: "AI music composer specializing in orchestral and cinematic scores -- one of the oldest players in AI music **Pricing is in euros and was verified 2026-10-06: Free (3 downloads a month, AIVA keeps the copyright, credit required), Standard EUR 11/month billed annually, Pro EUR 33/month billed annually for full copyright, 300 downloads and WAV export; monthly billing costs more, and AIVA now claims 250+ styles.**",
  category: "ai-music-generators",
  url: "https://www.aiva.ai",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 7.5,
    value: 6,
    features: 6.5,
    overall: 6.6,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free, Forever",
      price: "EUR 0",
      features: ["3 downloads per month", "Tracks up to 3 minutes", "MP3 and MIDI", "Copyright owned by AIVA, no monetization, credit to AIVA required"],
    },
    {
      plan: "Standard",
      price: "EUR 11",
      period: "month, billed annually (+VAT); monthly billing is higher (annual shown as 26% off)",
      features: ["15 downloads per month", "Tracks up to 5 minutes", "Limited monetization: YouTube, Twitch, TikTok, Instagram only", "No need to credit AIVA", "Copyright still owned by AIVA"],
    },
    {
      plan: "Pro",
      price: "EUR 33",
      period: "month, billed annually (+VAT); monthly billing is higher (annual shown as 33% off)",
      features: ["300 downloads per month", "Tracks up to 5 min 30 s", "Copyright owned by you, full monetization", "All file formats including high-quality WAV"],
    },
  ],

  pros: [
    "250+ styles, custom style models and audio or MIDI 'influence' uploads (vendor claims on the product page, checked October 2026) -- more steering than the orchestral-only reputation suggests",
    "Orchestral and cinematic compositions are genuinely impressive -- this is AIVA's sweet spot and it shows",
    "Full copyright ownership on Pro plan means you can use tracks commercially without licensing headaches",
    "Been around since 2016, so the model has had more training time on classical/film score music than newer competitors",
    "MIDI and sheet music export lets musicians actually edit and build on what the AI generates",
  ],
  cons: [
    "No vocal generation at all -- if you need lyrics or singing, you need a different tool entirely",
    "Editing is limited to MIDI and sheet music -- there's no waveform editor, so fine-tuning audio is clunky",
    "Generated tracks in the same genre start sounding samey after a while -- the variation pool isn't deep enough",
    "At EUR 33/month (billed annually, plus VAT) for copyright ownership, it's pricey compared to royalty-free stock music libraries -- and the Standard plan still leaves the copyright with AIVA",
  ],
  knownIssues: [
    {
      description: "PRICING IS IN EUROS AND BILLED ANNUALLY -- THE $11/$33 FIGURES THIS PAGE CARRIED WERE CURRENCY-MISLABELLED (verified 2026-10-06, vendor pricing page): aiva.ai/pricing lists **Free, Forever at EUR 0** ('No credit card required', copyright owned by AIVA, no monetization, credit to AIVA required, 3 downloads per month, tracks up to 3 minutes, MP3 and MIDI); **Standard at EUR 11/month + VAT, billed annually ('26% OFF!')** with limited monetization 'only on Youtube, Twitch, Tik Tok and Instagram', no credit required, 15 downloads per month, tracks up to 5 minutes, copyright still owned by AIVA; and **Pro at EUR 33/month + VAT, billed annually ('33% OFF!')** with 'Copyright owned by YOU', full monetization, 300 downloads per month, durations up to 5 minutes 30 seconds, all file formats and high-quality WAV export. A 'Billed monthly' toggle exists but its prices are not in the served HTML; the discount labels imply roughly EUR 15 and EUR 49 month-to-month, which is an inference, not a vendor figure. The product page also now claims 'more than 250 different styles', custom style models, audio or MIDI influence uploads and track editing. Student and school discounts are by request. Scores unchanged; the value score already treated Pro as expensive.",
      source: "AIVA (aiva.ai/pricing -- 'Pricing for Individuals', EUR 0 / EUR 11 / EUR 33 cards; aiva.ai product page copy) -- fetched 2026-10-06 via curl with browser UA",
      date: "2026-10-06",
    },
    {
      description: "Some users report that compositions in non-classical genres (pop, electronic) sound generic and lack the quality of the orchestral output",
      source: "Reddit r/WeAreTheMusicMakers",
      date: "2025-12",
    },
    {
      description: "The free tier's 3-download limit and no copyright makes it essentially a demo -- not usable for any real project",
      source: "Trustpilot reviews",
      date: "2026-01",
    },
  ],
  bestFor: "Indie filmmakers, game developers, and content creators who need orchestral or cinematic background music without hiring a composer or navigating stock music licensing.",
  notFor: "Musicians who want to generate pop, hip-hop, or vocal tracks -- Suno or Udio are better fits. Also not for producers who need fine-grained audio editing tools.",
  verdict: "AIVA carved out a niche in orchestral and cinematic AI music, and within that niche, it's solid. The compositions have a depth that newer AI music tools struggle to match for classical styles. But the $33/mo price tag for copyright ownership is steep when royalty-free libraries exist, and the lack of vocal generation or modern genre support limits its appeal. If you specifically need cinematic scores and want to own the rights, AIVA delivers. For everything else, look elsewhere.",

  lastReviewedDate: "2026-10-06",
  dataSources: [
    { name: "AIVA pricing page -- Free EUR 0, Standard EUR 11, Pro EUR 33 per month billed annually (verified 2026-10-06)", url: "https://www.aiva.ai/pricing", dateAccessed: "2026-10-06" },
    { name: "AIVA official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/WeAreTheMusicMakers", dateAccessed: "2026-03-31" },
    { name: "Trustpilot reviews", dateAccessed: "2026-03-31" },
    { name: "YouTube comparisons", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://www.aiva.ai",
  status: "active",
  metaTitle: "AIVA Review 2026: AI Music Composer for Orchestral and Cinematic Scores",
  metaDescription: "AIVA review. AI-generated orchestral and cinematic music in 250+ styles with full copyright on Pro (EUR 33/month billed annually; Standard EUR 11; Free with 3 downloads). How it compares to Suno and Udio. Scores, pricing. October 2026.",
};
