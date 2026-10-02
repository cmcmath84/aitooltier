import { ToolReview } from "@/lib/types";

export const maiVoice1: ToolReview = {
  slug: "mai-voice-1",
  name: "Microsoft MAI-Voice-2",
  tagline: "Microsoft's in-house expressive TTS line. **MAI-Voice-2.1 and MAI-Voice-2.1-Flash launched 2026-10-01: 23 languages and 26 locales with one voice that keeps the same speaker and a native accent across languages, voice cloning from a few seconds of reference audio with consent guardrails, priced at $22 per 1M characters for 2.1 and $15 per 1M characters for Flash, which generates 45 seconds of audio at 150 ms end-to-end latency and is pitched at voice agents alongside MAI-Transcribe-2-Streaming.** These supersede **MAI-Voice-2 (Build, 2026-06-02)**: 15 languages, emotion tags, zero-shot cloning from a 5-60 s clip, preferred over MAI-Voice-1 72% of the time. Microsoft also shipped a MAI-Voice-2-Flash and MAI-Image-2.5-Pro in July that this page had not recorded -- see the Oct 2 note.",
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
      plan: "MAI-Voice-2.1 (launched 2026-10-01)",
      price: "$22",
      period: "per 1M characters",
      features: [
        "23 languages and 26 locales; a single voice speaks every language with a native accent (English, then Mandarin, then German, same speaker)",
        "Voice cloning across all supported languages from a few seconds of reference audio, with built-in consent guardrails",
        "Microsoft's strongest multilingual TTS to date per the launch post",
        "Available through OpenRouter at launch (other channels listed in the post)",
      ],
    },
    {
      plan: "MAI-Voice-2.1-Flash (launched 2026-10-01)",
      price: "$15",
      period: "per 1M characters",
      features: [
        "Same languages and cross-language speakers as 2.1, tuned for high-volume, latency-sensitive workloads",
        "Generates 45 seconds of audio with 150 ms end-to-end latency",
        "Microsoft claims 55% faster inference and about 60% cheaper than comparable models",
        "Positioned as the speech half of a voice agent next to MAI-Transcribe-2-Streaming ($0.54/hr)",
      ],
    },
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
      description: "MAI-VOICE-2.1 AND 2.1-FLASH -- 23 LANGUAGES ON ONE VOICE, $22 AND $15 PER 1M CHARACTERS, AND THE FIRST PUBLISHED PRICES FOR THIS LINE (2026-10-01, vendor-primary): alongside MAI-Transcribe-2-Streaming, Microsoft AI announced 'two new voice models: MAI-Voice-2.1 and our blazing-fast variant, MAI-Voice-2.1-Flash'. **MAI-Voice-2.1** is 'our strongest multilingual text-to-speech model yet', expanded to **23 languages and 26 locales** 'while enabling one single voice to use all languages with a truly native accent' -- the same speaker stays recognisable when switching from English to Mandarin to German -- and is **'priced at $22 per 1M characters'**. **MAI-Voice-2.1-Flash** keeps the languages and cross-language speakers but is 'leveled up for high-volume, latency-sensitive workloads': **45 s of audio at 150 ms end-to-end latency**, '55% faster model inference and ~60% cheaper than comparable models', **'best-in-class pricing of $15 per 1M characters'** (comparable-model claims are Microsoft's, unnamed). Both support **voice cloning across all supported languages 'using just a few seconds of reference audio'** with 'built-in consent guardrails'. Distribution: 'You can get to work with MAI-Voice-2.1 and MAI-Voice-2.1-Flash through OpenRouter, and all three models through' a list our extract truncated -- Azure Foundry is likely from precedent but not verified here. **Price context for this page:** this is the first dollar figure Microsoft has published for MAI-Voice (the June MAI-Voice-2 entry below says 'Not disclosed'); ElevenLabs' Eleven v4 is sold by plan credits, Gemini 3.8 Flash TTS is $0.50/$9.00 per 1M tokens (not characters), and xAI's grok-tts is $15 per 1M characters -- so Flash matches xAI's rate and 2.1 sits above it. **Staleness note:** Microsoft's blog index also lists 'Introducing MAI-Image-2.5-Pro and MAI-Voice-2-Flash' (July 2026), which this page never recorded; 2.1-Flash now supersedes it, so the July post was not separately opened this sweep.",
      source: "Microsoft AI (microsoft.ai/news/our-first-streaming-transcription-model/, JSON-LD datePublished 2026-10-01T16:00Z) + microsoft.ai/blog/ index via Firecrawl (lists the July MAI-Voice-2-Flash post) -- fetched 2026-10-02",
      date: "2026-10-01",
    },
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

  lastReviewedDate: "2026-10-02",
  dataSources: [
    { name: "Microsoft AI: Our first streaming transcription model debuts at no. 1 on Artificial Analysis (2026-10-01) -- MAI-Voice-2.1 at $22/1M characters, MAI-Voice-2.1-Flash at $15/1M characters, cloning with consent guardrails", url: "https://microsoft.ai/news/our-first-streaming-transcription-model/", dateAccessed: "2026-10-02" },
    { name: "Microsoft AI: MAI-Voice-2 -- expressive speech in 15 languages (2026-06-02)", url: "https://microsoft.ai/news/mai-voice-2expressive-speech-in-10-languages/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: Launching seven new MAI models (2026-06-02)", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "Microsoft Community Hub: MAI models in Foundry", url: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-mai-transcribe-1-mai-voice-1-and-mai-image-2-in-microsoft-foundry/4507787", dateAccessed: "2026-04-17" },
    { name: "MAI-Voice-1 Foundry model card", url: "https://aka.ms/mai-voice-1-foundrycard", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/",
  status: "active",
  metaTitle: "MAI-Voice Review 2026: MAI-Voice-2.1 at $22/1M Characters, 2.1-Flash at $15, 23 Languages on One Voice",
  metaDescription: "MAI-Voice review. MAI-Voice-2.1 and MAI-Voice-2.1-Flash (Oct 1, 2026) speak 23 languages and 26 locales with one consistent voice and a native accent, clone a voice from a few seconds of audio with consent guardrails, and are priced at $22 and $15 per 1M characters; Flash generates 45 seconds of audio at 150 ms latency for voice agents. Supersedes MAI-Voice-2 (June 2026, 15 languages, emotion tags). vs ElevenLabs and Gemini 3.8 Flash TTS.",
};
