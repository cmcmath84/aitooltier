import { ToolReview } from "@/lib/types";

export const maiTranscribe1: ToolReview = {
  slug: "mai-transcribe-1",
  name: "Microsoft MAI-Transcribe-1.5",
  tagline: "Microsoft's in-house speech-recognition model -- MAI-Transcribe-1.5 launched 2026-06-02 at Build: 43 languages (up from 25), best-in-class FLEURS WER, transcribes 1hr of audio in under 15s (was 53s), and new keyword-biasing cuts WER ~30%. #3 on Artificial Analysis at 2.4% WER. Now integrated into Copilot, Teams, GitHub, and Dynamics 365 Contact Center. Original MAI-Transcribe-1 shipped 2026-04-02 at $0.36/hr",
  category: "ai-business-productivity",
  url: "https://microsoft.ai/news/state-of-the-art-speech-recognition-with-mai-transcribe-1/",

  scores: {
    easeOfUse: 6,
    outputQuality: 9.5,
    value: 9,
    features: 7,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "MAI-Transcribe-1.5 (Azure Foundry, launched 2026-06-02)",
      price: "Not disclosed",
      period: "per hour of audio",
      features: [
        "43 supported languages (up from 25)",
        "Best-in-class FLEURS WER; #3 on Artificial Analysis at 2.4% WER",
        "Transcribes 1 hour of audio in under 15s (was 53s)",
        "Keyword biasing: ~30% WER reduction on FLEURS for domain terms",
        "Microsoft: 'most cost-effective transcription model of any hyperscaler'",
      ],
    },
    {
      plan: "MAI-Transcribe-1 (original, 2026-04-02)",
      price: "$0.36",
      period: "per hour of audio",
      features: [
        "25 supported languages",
        "~3.8% average WER across FLEURS benchmark",
        "2.5x faster than Azure Fast transcription",
        "Reference price point for the 1.5 generation pending vendor disclosure",
      ],
    },
    {
      plan: "MAI Playground (Free preview)",
      price: "$0",
      features: [
        "US-only web playground for testing",
        "Rate-limited preview",
        "Evaluation only -- no commercial use",
      ],
    },
  ],

  pros: [
    "#1 on FLEURS WER overall is a genuinely significant benchmark result -- beats Whisper-large-v3, ElevenLabs Scribe v2, OpenAI gpt-4o-transcribe, and Gemini 3.1 Flash-Lite per Microsoft's published comparisons. Expect third-party verification through Q2 2026",
    "Handles noise, overlapping speech, and accented / code-switched audio noticeably better than Whisper in Microsoft's published evaluations -- the real-world robustness story matters more than the headline WER for meeting transcription and IVR workflows",
    "Pricing at $0.36/hour of audio is competitive with Whisper-as-a-service pricing on most providers and substantially cheaper than ElevenLabs Scribe v2 for high-volume use cases",
    "25 language support with #1 WER in 11 top languages means this is a real global product, not just an English-first model with a long tail of poorly-supported locales",
  ],
  cons: [
    "Competes with the raw-model tier (Whisper, gpt-4o-transcribe, Scribe v2, Gemini Flash-Lite) -- NOT with meeting apps like Otter, Fireflies, or Descript, which sit higher in the stack and would likely adopt MAI-Transcribe-1 as a backend option rather than compete with it. If you want a meeting UX, stay with your current app",
    "Foundry-only at launch means you need an Azure account and engineering work. No consumer-facing UI. Otter.ai, Fireflies, and Descript remain the right answer for end-user transcription workflows",
    "Microsoft's published benchmarks are self-reported. Independent FLEURS-leaderboard confirmation is still pending -- third-party verification typically lags announcement by 4-8 weeks",
    "MAI Playground access is US-only during public preview. International evaluators must use the API",
  ],
  knownIssues: [
    {
      description: "VERSION BUMP (2026-06-02, Microsoft Build): MAI-Transcribe-1.5 launched in the 'seven new MAI models' wave. Vendor-published changes vs 1.0: language coverage expanded from 25 to 43; speed improved to under 15 seconds per hour of audio (from 53s); new keyword-biasing feature delivers a ~30% WER reduction on the FLEURS multilingual benchmark by applying domain terminology intelligently (context-aware, not blind keyword forcing). Microsoft claims 'best-in-class Word Error Rate across 43 languages' and #3 on the Artificial Analysis leaderboard at 2.4% WER, describing it as 'the fastest, most efficient and most cost-effective transcription model of any hyperscaler.' Now being integrated into Copilot, Teams, GitHub, and Dynamics 365 Contact Center; available through Foundry. Per-hour pricing not disclosed at launch.",
      source: "Microsoft AI (microsoft.ai/news/mai-transcribe-1-5more-accurate-context-aware-and-built-for-production/, microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/)",
      date: "2026-06-02",
    },
    {
      description: "Public preview in US only for MAI Playground. Foundry API works globally but you need an Azure subscription to evaluate",
      source: "Microsoft AI launch post",
      date: "2026-04",
    },
    {
      description: "Competitor positioning on the site: MAI-Transcribe-1 is a backend model, not a meeting-transcription product. Do not position it as an Otter.ai competitor -- it competes with Whisper and would typically be adopted BY meeting apps, not replace them",
      source: "Microsoft model card + tech analysis",
      date: "2026-04",
    },
  ],
  bestFor: "Developers and enterprises who need best-in-class multilingual speech-to-text for high-volume use cases (meeting recording pipelines, call-center transcription, accessibility captioning at scale, multilingual audio indexing). Especially relevant for Azure shops already on Microsoft infrastructure.",
  notFor: "End-user meeting transcription -- use Otter.ai, Fireflies, or Descript for that. Also not the right answer for on-device / edge transcription -- use Whisper-tiny or a compressed local model there. MAI-Transcribe-1 is a cloud-API tier-1 accuracy play.",
  verdict: "MAI-Transcribe-1.5 (2026-06-02) widens the lead Microsoft opened in April. Going from 25 to 43 languages while pushing transcription speed to under 15 seconds per audio hour -- a 3.5x speedup -- and adding context-aware keyword biasing (a ~30% WER cut on domain terms) makes this a serious production backend, not just a benchmark flex. The #3 Artificial Analysis placement at 2.4% WER and the 'most cost-effective of any hyperscaler' framing position it as the default speech-to-text layer for Azure shops. It is now baked into Copilot, Teams, GitHub, and Dynamics 365 Contact Center, so most Microsoft customers get it without a separate integration. For consumer meeting transcription, Otter/Fireflies/Descript remain the right end-user products -- but their Whisper-based backends now have a faster, cheaper, more multilingual alternative to evaluate. Per-hour pricing for 1.5 is still undisclosed; that is the one open question.",

  lastReviewedDate: "2026-06-02",
  dataSources: [
    { name: "Microsoft AI: MAI-Transcribe-1.5 -- more accurate, context-aware, built for production (2026-06-02)", url: "https://microsoft.ai/news/mai-transcribe-1-5more-accurate-context-aware-and-built-for-production/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: Launching seven new MAI models (2026-06-02)", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: State-of-the-art speech recognition with MAI-Transcribe-1", url: "https://microsoft.ai/news/state-of-the-art-speech-recognition-with-mai-transcribe-1/", dateAccessed: "2026-04-17" },
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "MAI-Transcribe-1 model card PDF", url: "https://microsoft.ai/pdf/MAI-Transcribe-1-Model-Card.pdf", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://microsoft.ai/news/state-of-the-art-speech-recognition-with-mai-transcribe-1/",
  status: "active",
  metaTitle: "MAI-Transcribe-1.5 Review 2026: Microsoft's 43-Language Speech-to-Text Model",
  metaDescription: "MAI-Transcribe-1.5 review. Microsoft's ASR (Build, June 2 2026). 43 languages, best-in-class FLEURS WER, 1hr audio in under 15s, keyword biasing. #3 Artificial Analysis at 2.4% WER. Azure Foundry.",
};
