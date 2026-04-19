import { ToolReview } from "@/lib/types";

export const cohereTranscribe: ToolReview = {
  slug: "cohere-transcribe",
  name: "Cohere Transcribe",
  tagline: "Cohere's first audio model -- launched 2026-03-26 under Apache 2.0, 2B parameters, #1 on Hugging Face Open ASR Leaderboard (5.42 avg WER), 14 enterprise-critical languages. Free API with rate limits; Model Vault for production",
  category: "ai-voice-audio",
  url: "https://huggingface.co/CohereLabs/cohere-transcribe-03-2026",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 9,
    features: 7,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Open-weights (Apache 2.0)",
      price: "$0",
      features: [
        "Self-host the 2B-parameter model from Hugging Face",
        "Commercial use allowed, no license fee",
        "vLLM production-serving support (merged upstream)",
        "3x higher offline throughput vs. similarly-sized models",
      ],
    },
    {
      plan: "Cohere API (free tier)",
      price: "$0",
      features: [
        "Hosted inference for low-setup experimentation",
        "Rate-limited (see Cohere docs)",
        "No commercial SLA",
      ],
    },
    {
      plan: "Cohere Model Vault (production)",
      price: "Custom",
      features: [
        "Dedicated deployment, no rate limits",
        "Per-hour instance pricing",
        "Discounted plans for longer-term commitments",
        "Cohere North enterprise platform integration",
      ],
    },
  ],

  pros: [
    "#1 on Hugging Face Open ASR Leaderboard as of 2026-03-26 -- 5.42 average WER across 8 English benchmarks, beating IBM Granite 4.0 1B Speech (5.52), NVIDIA Canary Qwen 2.5B (5.63), ElevenLabs Scribe v2 (5.83), and OpenAI Whisper Large v3 (7.44)",
    "Apache 2.0 open weights mean you can self-host without license fees -- rare for production-grade ASR at this accuracy tier. vLLM integration was contributed upstream so production serving works out of the box",
    "Encoder-heavy architecture (90%+ of parameters in encoder, lightweight decoder) is explicitly optimized for serving efficiency -- offline throughput is 3x higher than comparable open-source models at similar WER",
    "Trained on 14 enterprise-critical languages: English, German, French, Italian, Spanish, Portuguese, Greek, Dutch, Polish, Arabic, Vietnamese, Mandarin, Japanese, Korean -- positioned squarely for European and APAC enterprise transcription",
  ],
  cons: [
    "No speaker diarization, word-level timestamps, or streaming WebSocket API -- this is a transcription-only model, not a full ASR platform like Grok Speech or Deepgram. Build those features yourself",
    "Trained to expect a language tag and monolingual audio -- code-switched (En, X) transcription works sometimes but is not a first-class use case",
    "Like most AED speech models, 'eager to transcribe' -- background noise and silence can turn into hallucinations without a VAD (voice activity detection) front-end",
    "Text-to-speech is NOT in this release -- Cohere Transcribe is STT only. If you need both, pair with Grok TTS, ElevenLabs, or Microsoft MAI-Voice-1",
  ],
  knownIssues: [
    {
      description: "No speaker diarization or word-level timestamps at launch. If your product needs multi-speaker separation (call centers, meetings) you'll need to add a diarization model on top or choose Grok STT / Deepgram / AssemblyAI",
      source: "Cohere Hugging Face blog",
      date: "2026-03",
    },
    {
      description: "Model 'eagerly' transcribes non-speech audio -- prepend a VAD or noise gate for production use to avoid hallucinations on floor noise",
      source: "Cohere Labs limitations note",
      date: "2026-03",
    },
    {
      description: "Only 14 languages supported -- narrower than Whisper Large v3 (99 languages) or Grok STT (25+). For rare-language workloads, open-source Whisper or proprietary APIs still win",
      source: "Cohere Labs model card",
      date: "2026-03",
    },
  ],
  bestFor: "Enterprise teams transcribing English, European, and major APAC languages at scale who want open weights they can self-host, fine-tune, or deploy on-prem. The Apache 2.0 license removes a major procurement blocker compared to proprietary ASR, and the accuracy tier is now best-in-class for open models.",
  notFor: "Call-center and meeting-transcription products that need speaker diarization and streaming out of the box -- Grok STT, Deepgram, or AssemblyAI ship those features. Also not ideal for rare-language workloads (sub-Saharan African languages, indigenous languages) where Whisper Large's 99-language coverage is still hard to beat.",
  verdict: "Cohere Transcribe is the first time an open-weights ASR model has genuinely topped the Open ASR Leaderboard in head-to-head benchmark terms, and the Apache 2.0 license makes it a real procurement unlock for enterprises that couldn't self-host Whisper at the accuracy tier they needed. The limitations (no diarization, no streaming, no TTS counterpart) mean it won't replace full ASR platforms for call-center or meeting products -- but for batch enterprise transcription (document pipelines, media indexing, compliance recording) it's now the default open-source pick. Pair with Grok TTS or ElevenLabs on the output side and you have a fully-open voice stack for the first time.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "Cohere Labs: Introducing Cohere-transcribe", url: "https://huggingface.co/blog/CohereLabs/cohere-transcribe-03-2026-release", dateAccessed: "2026-04-18" },
    { name: "TechCrunch: Cohere open-source voice transcription", url: "https://techcrunch.com/2026/03/26/cohere-launches-an-open-source-voice-model-specifically-for-transcription/", dateAccessed: "2026-04-18" },
    { name: "MarkTechPost coverage", url: "https://www.marktechpost.com/2026/03/26/cohere-ai-releases-cohere-transcribe-a-sota-automatic-speech-recognition-asr-model-powering-enterprise-speech-intelligence/", dateAccessed: "2026-04-18" },
    { name: "Hugging Face Open ASR Leaderboard", url: "https://huggingface.co/spaces/hf-audio/open_asr_leaderboard", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://huggingface.co/CohereLabs/cohere-transcribe-03-2026",
  status: "active",
  metaTitle: "Cohere Transcribe Review 2026: #1 Open ASR Model, Apache 2.0, 14 Languages",
  metaDescription: "Cohere Transcribe review. Launched Mar 26 2026, 2B params Apache 2.0, #1 on Open ASR Leaderboard (5.42 WER), 14 languages. Free API + self-host. Beats Whisper v3.",
};
