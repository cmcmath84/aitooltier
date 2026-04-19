import { ToolReview } from "@/lib/types";

export const grokVoice: ToolReview = {
  slug: "grok-voice",
  name: "Grok Speech (STT + TTS APIs)",
  tagline: "xAI's standalone voice APIs -- launched 2026-04-17. Built on the stack that powers Grok Voice, Tesla vehicles, and Starlink customer support. $0.10/hr STT batch, $4.20 per 1M characters TTS, 25+ languages, word-level timestamps + speaker diarization",
  category: "ai-voice-audio",
  url: "https://x.ai/news/grok-stt-and-tts-apis",

  scores: {
    easeOfUse: 7,
    outputQuality: 8.5,
    value: 9,
    features: 8,
    overall: 8.1,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Speech to Text (batch)",
      price: "$0.10",
      period: "per hour",
      features: [
        "REST API for large audio files",
        "Word-level timestamps",
        "Speaker diarization",
        "Multichannel support",
        "Inverse Text Normalization (numbers, dates, currencies)",
      ],
    },
    {
      plan: "Speech to Text (streaming)",
      price: "$0.20",
      period: "per hour",
      features: [
        "Lowest-latency WebSocket API",
        "Real-time speaker ID",
        "Same accuracy as batch",
        "Supports 25+ languages seamlessly",
      ],
    },
    {
      plan: "Text to Speech",
      price: "$4.20",
      period: "per 1M characters",
      features: [
        "Natural expressive voices (ARA voice etc.)",
        "Speech tags: [laugh], [sigh], [whisper], <emphasis>, <slow>, <pause>",
        "REST + WebSocket streaming",
        "Usage-based billing, no hidden fees",
      ],
    },
  ],

  pros: [
    "Published word-error-rate benchmark puts Grok STT ahead of ElevenLabs, Deepgram, and AssemblyAI across phone calls, meetings, podcasts, and telephony (6.9% overall WER vs. ElevenLabs 9.0%, Deepgram 11.0%, AssemblyAI 12.9%)",
    "Pricing is aggressive -- $0.10/hr batch STT undercuts Deepgram's $0.0043/min ($0.258/hr) and ElevenLabs Scribe v2 on most real-world workloads, and $4.20 per 1M char TTS is roughly half ElevenLabs' Creator-tier effective rate",
    "Speech tags ([laugh], [sigh], [whisper], <emphasis>, <slow>, <pause>) give expressive TTS control without SSML -- genuinely closer to ElevenLabs v3's emotional range than anything else at this price point",
    "Same stack that powers Grok Voice, Tesla in-car voice, and Starlink customer support -- this is not a research preview, it's a production-scale system exposed as an API",
  ],
  cons: [
    "Brand-new (launched 2026-04-17) -- expect early rough edges in non-English accents and in the streaming WebSocket API as the infrastructure scales",
    "xAI's post-SpaceX-acquisition status (SpaceX bought xAI, announced 2026-02-02) means procurement teams at US-regulated orgs may need to re-run vendor-approval workflows. Bring that up early with your security team if you're enterprise",
    "No consumer web UI -- this is API-only. ElevenLabs' Creator/Studio web apps remain easier for one-off podcast or audiobook work",
    "Voice cloning from a few seconds of input isn't exposed in this release -- the TTS voices are xAI-provided presets. If custom-voice cloning is the requirement, ElevenLabs or Microsoft MAI-Voice-1 (Azure Foundry) still win",
  ],
  knownIssues: [
    {
      description: "Launched 2026-04-17 -- expect first-week rate-limit surprises and occasional multilingual hiccups in the streaming path. xAI's console rate limits are documented but may be adjusted during the shakedown period",
      source: "xAI STT/TTS announcement",
      date: "2026-04",
    },
    {
      description: "The xAI-to-SpaceX acquisition (2026-02-02) means billing, compliance, and procurement flow through SpaceX. For US-regulated customers (healthcare, finance, defense) the vendor-approval pathway is new and may take longer than with a standalone AI vendor",
      source: "xAI announcement, x.ai/news/xai-joins-spacex",
      date: "2026-02",
    },
    {
      description: "Speech tag control is powerful but underdocumented at launch -- expect trial-and-error to dial in the right [laugh]/[whisper]/<pause> mix for conversational TTS",
      source: "xAI STT/TTS docs, BuildFastWithAI reviews",
      date: "2026-04",
    },
  ],
  bestFor: "Developers building voice agents, real-time transcription tools, accessibility features, or high-volume TTS workloads where the cost per hour of audio actually matters at scale. Strong fit for phone-call and meeting transcription use cases where xAI's published WER advantage (5.0% on phone-call entities vs. ElevenLabs 12.0%) compounds quickly.",
  notFor: "Consumer creators who want a web UI with voice presets and style sliders -- use ElevenLabs Creator. Also not the right pick if custom voice cloning is the requirement (use ElevenLabs or Microsoft MAI-Voice-1). Enterprises in highly-regulated verticals should confirm the post-acquisition vendor pathway works for them before committing.",
  verdict: "Grok Speech is xAI's clearest 'we are a platform, not just a chatbot' shot at the voice-API category, and on day-one pricing alone it's a credible threat to ElevenLabs, Deepgram, and AssemblyAI for production STT workloads. The published WER numbers are aggressive but plausible given the Tesla / Starlink deployment footprint. TTS at $4.20/1M char with real expressive tags undercuts ElevenLabs on price while narrowing the expressiveness gap. The open questions are (1) how it handles long-tail accents and non-English quality in practice, (2) whether the post-SpaceX procurement pathway slows enterprise adoption, and (3) how ElevenLabs responds on price. For new voice-API buyers shipping in Q2 2026, Grok Speech is now a first-call option alongside ElevenLabs and Deepgram.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "xAI: Grok Speech to Text and Text to Speech APIs", url: "https://x.ai/news/grok-stt-and-tts-apis", dateAccessed: "2026-04-18" },
    { name: "xAI STT docs", url: "https://docs.x.ai/developers/model-capabilities/audio/speech-to-text", dateAccessed: "2026-04-18" },
    { name: "xAI TTS docs", url: "https://docs.x.ai/developers/model-capabilities/audio/text-to-speech", dateAccessed: "2026-04-18" },
    { name: "xAI joins SpaceX announcement", url: "https://x.ai/news/xai-joins-spacex", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://x.ai/news/grok-stt-and-tts-apis",
  status: "active",
  metaTitle: "Grok Speech (STT + TTS) Review 2026: xAI Voice APIs Launched April 17",
  metaDescription: "Grok Speech review. xAI's new STT + TTS APIs launched Apr 17 2026. $0.10/hr STT batch, $4.20 per 1M char TTS, 25+ languages, beats ElevenLabs + Deepgram on WER.",
};
