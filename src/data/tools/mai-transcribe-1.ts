import { ToolReview } from "@/lib/types";

export const maiTranscribe1: ToolReview = {
  slug: "mai-transcribe-1",
  name: "Microsoft MAI-Transcribe-1",
  tagline: "Microsoft's first in-house speech-recognition model -- launched 2026-04-02. #1 on FLEURS WER overall, #1 by FLEURS WER in 11 of the top 25 global languages. Beats Whisper-large-v3, Scribe v2, GPT-Transcribe, Gemini 3.1 Flash-Lite. $0.36/hour of audio on Azure Foundry",
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
      plan: "Azure Foundry API",
      price: "$0.36",
      period: "per hour of audio",
      features: [
        "Public preview on Microsoft Foundry",
        "25 supported languages",
        "~3.8% average WER across FLEURS benchmark",
        "2.5x faster than Azure Fast transcription",
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
  verdict: "MAI-Transcribe-1 is the sleeper hit of Microsoft's 2026-04-02 MAI release. #1 on FLEURS WER at a $0.36/hour price point positions it as the new default backend for anyone building speech-to-text pipelines at scale -- existing meeting-app vendors (Otter, Fireflies, Descript) will likely evaluate it against their current Whisper-based stacks over Q2 2026. For developers shipping multilingual audio products, this is the cleanest upgrade path available. For consumer meeting transcription, your existing app is still the right answer -- but its backend may quietly switch to this model in the next two quarters.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Microsoft AI: State-of-the-art speech recognition with MAI-Transcribe-1", url: "https://microsoft.ai/news/state-of-the-art-speech-recognition-with-mai-transcribe-1/", dateAccessed: "2026-04-17" },
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "MAI-Transcribe-1 model card PDF", url: "https://microsoft.ai/pdf/MAI-Transcribe-1-Model-Card.pdf", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://microsoft.ai/news/state-of-the-art-speech-recognition-with-mai-transcribe-1/",
  status: "active",
  metaTitle: "MAI-Transcribe-1 Review 2026: Microsoft's #1 FLEURS WER Transcription Model",
  metaDescription: "MAI-Transcribe-1 review. Microsoft's in-house ASR (Apr 2 2026). #1 on FLEURS WER, 25 languages, $0.36/hr. Beats Whisper-large-v3, Scribe v2, GPT-Transcribe. Azure Foundry.",
};
