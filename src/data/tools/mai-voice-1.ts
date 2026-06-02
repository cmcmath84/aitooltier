import { ToolReview } from "@/lib/types";

export const maiVoice1: ToolReview = {
  slug: "mai-voice-1",
  name: "Microsoft MAI-Voice-2",
  tagline: "Microsoft's in-house expressive TTS model -- MAI-Voice-2 launched 2026-06-02 at Build: 15 languages (up from English-only), granular emotion-tag control, zero-shot voice cloning from a 5-60s clip, and preferred over MAI-Voice-1 72% of the time. In speaker-similarity tests its speech is 'indistinguishable' from real recordings. On Azure Foundry + integrated into VS Code and Dynamics 365 Contact Center; lower-cost MAI-Voice-2-Flash coming. Original MAI-Voice-1 shipped 2026-04-02",
  category: "ai-voice-audio",
  url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 8,
    features: 7,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "MAI-Voice-2 (Azure Foundry, launched 2026-06-02)",
      price: "Not disclosed",
      period: "per 1M characters",
      features: [
        "15 languages with code-switching (Hindi-English, Spanish-English)",
        "Granular emotion control via tags (sad, whispered, excited, etc.)",
        "Zero-shot voice prompting from a 5-60s reference clip",
        "Preferred over MAI-Voice-1 72% of the time; speaker similarity rated 'indistinguishable' from real recordings",
        "Integrated into VS Code + Dynamics 365 Contact Center",
      ],
    },
    {
      plan: "MAI-Voice-2-Flash (coming soon)",
      price: "Lower-cost",
      features: [
        "Efficient, lower-cost variant of MAI-Voice-2",
        "Announced 2026-06-02, not yet available",
      ],
    },
    {
      plan: "MAI-Voice-1 (original, 2026-04-02)",
      price: "$22",
      period: "per 1M characters",
      features: [
        "English-only expressive TTS",
        "~60s of audio generated in ~1s on a single GPU",
        "Reference price point for the generation pending 2.0 disclosure",
      ],
    },
    {
      plan: "MAI Playground (Free preview)",
      price: "$0",
      features: [
        "US-only web playground for testing",
        "Rate-limited preview access",
        "No commercial use -- evaluation only",
      ],
    },
    {
      plan: "Bundled (Copilot / Bing / PowerPoint / Azure Speech)",
      price: "Included",
      features: [
        "Existing Microsoft 365 Copilot subscriptions use MAI-Voice-1 under the hood",
        "No separate configuration or pricing required for existing Microsoft customers",
      ],
    },
  ],

  pros: [
    "Speed is the real headline -- 60 seconds of audio generated in about 1 second on a single GPU. That is a different class from ElevenLabs or Voxtral for high-volume workflows where throughput beats the last ~5% of expressiveness",
    "First-party Azure Foundry integration means Microsoft customers get a TTS option that doesn't involve an OpenAI dependency. For enterprises managing AI vendor concentration, this is a real unlock",
    "Already in production at scale -- powers Copilot, Bing voice, PowerPoint narration, and Azure Speech as of launch. Not a research preview that might never ship",
    "Custom voice cloning from a few seconds of input is competitive with ElevenLabs, inside an Azure-native security and compliance envelope that enterprise buyers actually need",
  ],
  cons: [
    "Not available as a consumer subscription. API-only pay-as-you-go on Foundry means you need an Azure account and engineering work to use it -- no claude.ai-style website for casual use",
    "MAI Playground is US-only at public-preview launch -- international users get pushed straight to the API",
    "MAI-Voice-2 narrowed the expressiveness gap with emotion tags and 15-language support, but ElevenLabs v3 still has the deeper preset library, finer style controls, and a polished consumer UI",
    "Voice cloning raises the same policy concerns as ElevenLabs -- Microsoft has enterprise guardrails but you should still be careful about consent and deepfake risk",
  ],
  knownIssues: [
    {
      description: "VERSION BUMP (2026-06-02, Microsoft Build): MAI-Voice-2 launched in the 'seven new MAI models' wave. Vendor-published changes vs 1.0: expanded from English-only to 15 languages (incl. code-switching for Hindi-English and Spanish-English); granular emotion control via inline tags (sad, whispered, excited, etc.); zero-shot voice prompting from a 5-60s reference clip; improved speaker consistency across long-form content. Preference testing: listeners preferred MAI-Voice-2 over MAI-Voice-1 72% of the time, and in speaker-similarity evaluation its output was rated 'indistinguishable from recordings of the same voice' -- across 11 languages 45.5% of listeners preferred the synthetic speech vs 44% for human recordings. Now on Azure Foundry and being integrated into VS Code and the Dynamics 365 Contact Center. A lower-cost MAI-Voice-2-Flash is coming soon. Per-character pricing not disclosed at launch.",
      source: "Microsoft AI (microsoft.ai/news/mai-voice-2expressive-speech-in-10-languages/, microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/)",
      date: "2026-06-02",
    },
    {
      description: "Public preview in US only for MAI Playground. International Foundry API access works but you need an Azure subscription to test",
      source: "Microsoft AI launch post, Tech Community blog",
      date: "2026-04",
    },
    {
      description: "Prior-sweep research incorrectly attributed a FLEURS WER #1 claim to MAI-Voice-1. That claim applies to MAI-Transcribe-1 (transcription), not Voice-1 (TTS). Voice-1's headline is speed, not WER",
      source: "Microsoft model card corrections",
      date: "2026-04",
    },
  ],
  bestFor: "Microsoft shops already on Azure who want a TTS option without an OpenAI dependency. Also good for any high-volume TTS workflow (audiobook batch generation, voicemail systems, IVR, bulk narration) where the 60x-faster-than-realtime speed beats ElevenLabs v3's slightly more expressive output.",
  notFor: "Consumer creators who want a polished web UI with presets and style controls -- use ElevenLabs. Also not ideal if top-quartile emotional expressiveness (laughter, sighs, dramatic reading) is your requirement -- v3 still wins there.",
  verdict: "MAI-Voice-2 (2026-06-02) turns Microsoft's speed-first TTS into a genuinely well-rounded one. The April MAI-Voice-1 traded expressiveness for throughput; 2.0 keeps the speed story but adds 15 languages, inline emotion tags, and 5-60s zero-shot voice cloning -- and the preference data is striking: listeners picked it over MAI-Voice-1 72% of the time, and across 11 languages slightly preferred its synthetic speech (45.5%) to actual human recordings (44%). With integration into VS Code and Dynamics 365 Contact Center, it is now Microsoft's default voice layer. ElevenLabs v3 still wins on preset depth and a polished consumer UI, but for Azure shops the case for a third-party TTS line item keeps shrinking. The open question is per-character pricing, which Microsoft did not disclose at launch -- and the cheaper MAI-Voice-2-Flash is still to come.",

  lastReviewedDate: "2026-06-02",
  dataSources: [
    { name: "Microsoft AI: MAI-Voice-2 -- expressive speech in 15 languages (2026-06-02)", url: "https://microsoft.ai/news/mai-voice-2expressive-speech-in-10-languages/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: Launching seven new MAI models (2026-06-02)", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "Microsoft Community Hub: MAI models in Foundry", url: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-mai-transcribe-1-mai-voice-1-and-mai-image-2-in-microsoft-foundry/4507787", dateAccessed: "2026-04-17" },
    { name: "MAI-Voice-1 Foundry model card", url: "https://aka.ms/mai-voice-1-foundrycard", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/",
  status: "active",
  metaTitle: "MAI-Voice-2 Review 2026: Microsoft's 15-Language Expressive TTS Model",
  metaDescription: "MAI-Voice-2 review. Microsoft's expressive TTS (Build, June 2 2026). 15 languages, emotion tags, zero-shot voice cloning, preferred over MAI-Voice-1 72% of the time. Azure Foundry + VS Code + Dynamics 365. vs ElevenLabs.",
};
