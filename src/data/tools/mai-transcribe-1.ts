import { ToolReview } from "@/lib/types";

export const maiTranscribe1: ToolReview = {
  slug: "mai-transcribe-1",
  name: "Microsoft MAI-Transcribe-1.5",
  tagline: "Microsoft's in-house speech-recognition model. **SUPERSEDED BY MAI-TRANSCRIBE-2 ON 2026-09-03** -- the new model adds diarization, configurable styles and word-level timestamps at **$0.10 per hour of audio**, ranks No. 1 on FLEURS across 60 languages (5.2% average WER) and No. 2 on the Artificial Analysis WER leaderboard. No retirement date has been published for 1.5. MAI-Transcribe-1.5 launched 2026-06-02 at Build: 43 languages (up from 25), best-in-class FLEURS WER, transcribes 1hr of audio in under 15s (was 53s), and new keyword-biasing cuts WER ~30%. #3 on Artificial Analysis at 2.4% WER. Now integrated into Copilot, Teams, GitHub, and Dynamics 365 Contact Center. Original MAI-Transcribe-1 shipped 2026-04-02 at $0.36/hr",
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
      description: "MAI-TRANSCRIBE-2 SUPERSEDES THIS MODEL -- AND THE PRICE IS THE HEADLINE, NOT THE ACCURACY (2026-09-03, vendor-primary): Microsoft launched **MAI-Transcribe-2**, calling it 'not only our most capable transcription model yet, but the most capable and efficient amongst our competitors'. **THE NUMBER THAT MATTERS: $0.10 per hour of audio**, which Microsoft calls 'the best price on the market'. **NEW CAPABILITIES OVER 1.5:** **diarization** (speaker separation), **configurable transcription styles**, and **word-level timestamps** -- the diarization addition is the significant one, because its absence is what pushed transcription buyers toward competitors regardless of raw WER. **ACCURACY, VENDOR-PUBLISHED:** ranks **first on the FLEURS benchmark across 60 languages with an average Word-Error-Rate of 5.2%**, defines the Pareto frontier for accuracy and latency on **Artificial Analysis**, and ranks **second on the Artificial Analysis WER leaderboard**. Microsoft names the models it says it beats: **Gemini 3.5 Transcribe, GPT-Transcribe, Whisper V3-Large and ScribeV2**. **READ THE TWO WER FIGURES CAREFULLY BEFORE COMPARING THEM TO THIS PAGE'S 1.5 NUMBERS -- THEY ARE DIFFERENT BENCHMARKS.** The 5.2% is a **60-language FLEURS average**; the 2.4% recorded on this page for MAI-Transcribe-1.5 is an **Artificial Analysis** figure. A higher headline number across sixty languages is not a regression against a narrower English-weighted benchmark, and Microsoft claims a rank improvement on Artificial Analysis (No. 3 for 1.5, No. 2 for 2) rather than a decline. **Language coverage also expands: 43 languages on 1.5, 60 evaluated on 2.** **STATUS OF THIS PAGE'S MODEL:** Microsoft's own model index now lists MAI-Transcribe-2 as the current transcription model; **no retirement date has been published for MAI-Transcribe-1.5**, so this page is not marking it deprecated -- but new deployments should be evaluated against 2, and the 1.5 integrations into Copilot, Teams, GitHub and Dynamics 365 Contact Center should be expected to migrate.",
      source: "Microsoft AI (microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/, JSON-LD datePublished 2026-09-03) -- fetched 2026-09-05 via curl with browser UA",
      date: "2026-09-03",
    },
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

  lastReviewedDate: "2026-09-05",
  dataSources: [
    { name: "Microsoft AI: MAI-Transcribe-2 (2026-09-03) -- $0.10/hr audio, FLEURS No. 1 across 60 languages at 5.2% WER, adds diarization and word-level timestamps", url: "https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/", dateAccessed: "2026-09-05" },
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
