import { ToolReview } from "@/lib/types";

export const murfAi: ToolReview = {
  slug: "murf-ai",
  name: "Murf AI",
  tagline: "Text-to-speech that actually sounds like a real person read your script -- not a robot trying its best",
  category: "ai-voice-audio",
  url: "https://murf.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 6,
    features: 7,
    overall: 7,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Studio Free",
      price: "$0",
      features: ["10 minutes of voice generation, 10 projects, 1 editor", "Try Business features with no downloads", "No commercial rights"],
    },
    {
      plan: "Studio Creator",
      price: "$19",
      period: "month, billed annually ($228/yr)",
      features: ["24 hours/year of voice generation, 100 projects", "200+ voices, styles and tonalities; unlimited downloads", "Commercial rights, Canva integration"],
    },
    {
      plan: "Studio Business",
      price: "$66",
      period: "month, billed annually ($792/yr)",
      features: ["96 hours/year of voice generation, 500 projects", "Business licence, emphasis, variability, Say It My Way", "48 hours transcription, PowerPoint and Google Slides plugins"],
    },
    {
      plan: "Studio Enterprise",
      price: "Custom",
      features: ["Unlimited generation, 5+ editors, unlimited viewers", "SSO, AI translation, MSA, no training on your data", "Custom voice clones as an add-on"],
    },
    {
      plan: "Murf API (pay as you go)",
      price: "$0.01",
      period: "per 1,000 characters (Falcon)",
      features: ["Falcon TTS for real-time agents (under 100 ms to first audio) $0.01 / 1K chars; Gen2 studio TTS $0.03 / 1K chars", "Voice changer $0.10 / minute; translation $0.02 / 1K chars", "$10 free API credit on the trial; purchased credit never expires"],
    },
  ],

  pros: [
    "Voice quality is genuinely impressive -- most listeners can't tell it's AI on the first listen",
    "The editor is simple and intuitive, you paste text and start tweaking pitch and pacing right away",
    "Good selection of accents and languages -- useful if you're producing content for different markets",
    "Emphasis and pause controls let you fine-tune delivery so it doesn't sound flat or monotone",
  ],
  cons: [
    "Generation is capped by the year, not the month: Creator's 24 hours and Business's 96 hours per year run out fast for weekly producers, and the advertised $19 and $66 prices assume annual billing",
    "Some voices still have an uncanny quality, especially with technical jargon or unusual names",
    "Free tier is basically a demo -- no downloads means you can't actually use the output for anything",
    "Voice cloning is not on any self-serve Studio plan -- custom voice clones are an Enterprise add-on, so small creators who need their own voice have to look at ElevenLabs or the API route",
  ],
  knownIssues: [
    {
      description: "PRICING REFRESH -- STUDIO PRICES LOWER BUT ANNUAL, CLONING MOVED TO ENTERPRISE, AND A PAY-AS-YOU-GO API (murf.ai/pricing checked 2026-10-12, vendor-primary; this page was last reviewed 2026-03-27): the pricing page now has API, Studio and Dub tabs and Murf brands itself a 'Voice and Conversational Agent Platform'. **Studio:** Free (10 minutes, 10 projects, no downloads, no commercial rights); **Creator $19 per month billed annually ($228/year)**, 24 hours/year of generation, 100 projects, 200+ voices, commercial rights; **Business $66 per month billed annually ($792/year)**, 96 hours/year, 500 projects, business licence, 48 hours of transcription, PowerPoint/Slides plugins; Enterprise custom with SSO, AI translation and **custom voice clones as an add-on**. This page previously listed Creator $29 and Business $79 per month and said cloning came with Business; the monthly-billing prices were not rendered on the page (a 'Saved 33%' toggle implies higher month-to-month rates), so only the annual figures are quoted here. **API:** $10 free trial credit; pay as you go at **$0.01 per 1,000 characters for Falcon** (built for voice agents, under 100 ms to first audio) and **$0.03 per 1,000 for Gen2**; voice changer $0.10/minute; translation $0.02 per 1,000 characters; credit never expires; Enterprise adds data residency and on-premise deployment. No ownership change found.",
      source: "Murf pricing page (murf.ai/pricing, API tab and Studio tab) -- fetched 2026-10-12 via Firecrawl, Studio tab rendered with a scripted tab click (plain curl returns a client-rendered shell)",
      date: "2026-10-12",
    },
    {
      description: "Long-form scripts (10+ minutes) sometimes produce audio with inconsistent pacing between sections",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Exported audio occasionally has slight clipping at the beginning of sentences after pauses",
      source: "Reddit r/voiceover",
      date: "2026-01",
    },
  ],
  bestFor: "Content creators and course builders who need professional voiceovers without hiring voice talent.",
  notFor: "Anyone who needs truly emotional or nuanced delivery -- AI voice still can't match a skilled human narrator.",
  verdict: "Murf AI delivers solid text-to-speech that's good enough for explainer videos, e-learning, and podcasts. The voices are natural-sounding and the editor is easy to use. But the pricing feels aggressive for the generation limits you get, and the free tier is too restricted to properly evaluate the product. If you're producing a lot of audio content, the per-hour cost adds up quickly compared to alternatives like ElevenLabs.",

  lastReviewedDate: "2026-10-12",
  dataSources: [
    { name: "Murf AI: Pricing -- Studio, API and Dub tabs", url: "https://murf.ai/pricing", dateAccessed: "2026-10-12" },
    { name: "Murf AI official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/voiceover", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://murf.ai",
  status: "active",
  metaTitle: "Murf AI Review 2026: Studio From $19/mo (Annual), $0.01 Falcon TTS API, Voice Agents",
  metaDescription: "Murf AI review. Natural-sounding text-to-speech with 200+ voices: Studio Creator $19/mo and Business $66/mo billed annually, custom voice clones only on Enterprise, and a pay-as-you-go API at $0.01 per 1,000 characters for the low-latency Falcon model. Honest scores, pros and cons. Pricing checked October 2026.",
};
