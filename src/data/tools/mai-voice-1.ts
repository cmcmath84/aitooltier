import { ToolReview } from "@/lib/types";

export const maiVoice1: ToolReview = {
  slug: "mai-voice-1",
  name: "Microsoft MAI-Voice-1",
  tagline: "Microsoft's first in-house expressive TTS model -- launched 2026-04-02 on Azure Foundry. Generates 60s of audio in ~1s on a single GPU. Custom voice cloning from a few seconds of input. Powers Copilot, Bing, PowerPoint, and Azure Speech",
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
      plan: "Azure Foundry API",
      price: "$22",
      period: "per 1M characters",
      features: [
        "Pay-as-you-go on Azure Foundry",
        "Public preview in Microsoft Foundry + MAI Playground (US only for Playground)",
        "Custom voice cloning from ~few seconds of audio",
        "~60s of audio generated in ~1s on a single GPU",
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
    "Expressiveness trails ElevenLabs v3 on emotional range, laughter, sighs, and extended dramatic reading. MAI-Voice-1 optimizes for speed and scale, not nuance",
    "Voice cloning raises the same policy concerns as ElevenLabs -- Microsoft has enterprise guardrails but you should still be careful about consent and deepfake risk",
  ],
  knownIssues: [
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
  verdict: "MAI-Voice-1 is Microsoft's first named TTS model in the post-OpenAI-exclusivity era, and it signals how Microsoft plans to differentiate: speed and Azure-native integration over raw expressiveness. The 60s-in-1s throughput is legitimately class-leading, and for any Microsoft shop doing high-volume voice generation it removes the ElevenLabs line item. For consumer creators, ElevenLabs v3 remains the better product. For enterprise or scale workflows on Azure, MAI-Voice-1 is now the default answer.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "Microsoft Community Hub: MAI models in Foundry", url: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-mai-transcribe-1-mai-voice-1-and-mai-image-2-in-microsoft-foundry/4507787", dateAccessed: "2026-04-17" },
    { name: "MAI-Voice-1 Foundry model card", url: "https://aka.ms/mai-voice-1-foundrycard", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/",
  status: "active",
  metaTitle: "MAI-Voice-1 Review 2026: Microsoft's First In-House TTS Model",
  metaDescription: "MAI-Voice-1 review. Microsoft's expressive TTS (Apr 2 2026), 60s audio in 1s on a single GPU. Azure Foundry, $22/1M chars. Powers Copilot + Bing. vs ElevenLabs / Voxtral.",
};
