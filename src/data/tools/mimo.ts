import { ToolReview } from "@/lib/types";

export const mimo: ToolReview = {
  slug: "mimo",
  name: "MiMo (Xiaomi)",
  tagline: "Xiaomi's MiMo-V2.5 family launched 2026-04-22 -- Pro (1T total / 42B active MoE, 1M context, native vision+audio reasoning), Multimodal base, TTS (3 sub-models: base, VoiceDesign, VoiceClone), and ASR (open-source, English + Chinese + major dialects). Full voice pipeline for the agent era. Extra-charge 1M-context tier removed at launch",
  category: "ai-llms",
  url: "https://mimo.xiaomi.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 9,
    features: 9,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (consumer)",
      price: "$0",
      features: [
        "Xiaomi consumer device integration (HyperOS, Mi AI)",
        "Web chat at mimo.xiaomi.com",
        "Basic usage limits apply",
      ],
    },
    {
      plan: "API (MiMo-V2.5-Pro)",
      price: "Pay-as-you-go",
      period: "per 1M tokens",
      features: [
        "1T total / 42B active MoE",
        "Native 1M context window with NO extra-charge tier (Xiaomi removed the surcharge for the full window at launch)",
        "Native multimodal: vision and audio reasoning in one model",
        "OpenAI- and Anthropic-API-compatible endpoints (the standard pattern Chinese frontier models adopted in 2025-26)",
      ],
    },
    {
      plan: "API (MiMo-V2.5 multimodal base)",
      price: "Pay-as-you-go",
      period: "per 1M tokens",
      features: [
        "Image + audio + video + text in a single API call",
        "Cheaper than Pro for workloads that don't need 1M context or 42B-active capacity",
      ],
    },
    {
      plan: "MiMo-V2.5-TTS (3 sub-models)",
      price: "Pay-as-you-go",
      features: [
        "Base TTS (general voice synthesis)",
        "VoiceDesign (designed-from-scratch synthetic voices)",
        "VoiceClone (replicate a target voice from a sample)",
      ],
    },
    {
      plan: "MiMo-V2.5-ASR (open-source)",
      price: "$0 + GPU costs",
      features: [
        "Open-source under a permissive license",
        "English + Mandarin Chinese + major Chinese dialects (Cantonese, Shanghainese, etc.)",
        "Self-hostable for privacy-sensitive transcription workloads",
      ],
    },
  ],

  pros: [
    "Full voice pipeline shipped together: a frontier reasoning model (Pro), a multimodal base, a TTS family, and an open-source ASR -- Xiaomi positions MiMo-V2.5 as 'voice for the agent era,' which is rare in 2026 (most vendors ship one of these and integrate the others later)",
    "Native multimodal in MiMo-V2.5-Pro is the differentiator -- vision and audio reasoning in one model, not bolted on after the fact. Closer to the Gemini 2.5 / GPT-5.5 design than to text-first models with separate vision adapters",
    "Removing the surcharge for the full 1M-context tier at launch is a real value move -- Alibaba, Anthropic, and OpenAI all charge meaningfully more per token for full-context windows. Xiaomi flattening this lowers the barrier to long-document and agentic workloads",
    "Open-source MiMo-V2.5-ASR is the practical takeaway for privacy-sensitive teams. Cohere Transcribe + Whisper had been the open-ASR options through 2025; MiMo-V2.5-ASR adds a Chinese-dialect-strong third entry",
    "Listed on Artificial Analysis at launch -- third-party verification path is open, even if scores are still being filled in",
  ],
  cons: [
    "Third-party benchmarks are still developing as of launch week -- Xiaomi's own published numbers are the dominant evidence, which warrants the usual self-reporting discount",
    "PRC content filters apply on Pro and Multimodal -- the same regulated-topic refusals that Hy3, DeepSeek, and Qwen exhibit. ASR is less affected by content filtering since it's transcription, not generation",
    "English creative-writing polish lags Western frontier models -- pick MiMo for Chinese-language work, multimodal reasoning, or voice pipelines first, English prose second",
    "Geo-availability: API access for non-Chinese developers may require an Xiaomi developer account and KYC; check the docs before assuming OpenAI-style account-creation friction",
  ],
  knownIssues: [
    {
      description: "MiMo-V2.5 family launched 2026-04-22 with four product lines released in parallel: Pro (1T/42B MoE, 1M context, native vision+audio), Multimodal base, TTS (Base + VoiceDesign + VoiceClone), and open-source ASR. This is Xiaomi's first explicit 'voice for the agent era' positioning and the first time it has shipped frontier-class reasoning + voice in a single coordinated launch",
      source: "Xiaomi product site (mimo.xiaomi.com), Gizmochina, Artificial Analysis listing",
      date: "2026-04-22",
    },
    {
      description: "1M-context surcharge removed at launch on Pro -- Xiaomi explicitly priced parity between short-context and full-context calls. Watch whether they reintroduce a tier later as adoption scales; the no-surcharge stance is unusual at this scale",
      source: "Xiaomi launch comms, Gizmochina",
      date: "2026-04",
    },
    {
      description: "ASR is open-source; TTS is API-only. If you need a fully self-hostable voice pipeline you can use ASR locally + a different TTS (ElevenLabs, Cohere, Murf) on top, or wait for Xiaomi to potentially open the TTS weights later",
      source: "Xiaomi announcement",
      date: "2026-04",
    },
    {
      description: "PRC content filtering applies on the reasoning/chat surfaces. Same regulated-topic pattern as Hy3, DeepSeek, Qwen, Kimi, GLM",
      source: "Pattern across Chinese frontier APIs",
      date: "2026-04",
    },
  ],
  bestFor:
    "Teams building voice-first agentic products that need a coordinated reasoning + TTS + ASR stack from a single vendor. Also Chinese-market builders and developers who need strong multimodal (vision + audio) inputs in one API call without stitching three providers together. The no-surcharge 1M-context stance makes MiMo-V2.5-Pro especially attractive for long-document agentic workloads.",
  notFor:
    "English-first creative writing (Claude / GPT-5.5 still lead), regulated geographies that block Chinese AI APIs, or teams whose only voice need is English TTS (ElevenLabs is more mature). Also not the right fit if you need fully proven third-party benchmark verification today -- that takes weeks post-launch.",
  verdict:
    "MiMo-V2.5 is Xiaomi treating voice as a first-class agentic surface, not an after-the-fact integration. Shipping Pro + Multimodal + TTS + open-source ASR together -- with native vision and audio reasoning baked into the flagship and the 1M-context surcharge removed -- is the most coordinated voice-stack launch from a Chinese frontier vendor in 2026. The benchmark story will fill in over the next few weeks; for now, treat MiMo as a serious option for voice-pipeline builds, multimodal Chinese-language workloads, and self-hosted dialect-strong ASR. For text-only English-first work, Claude / GPT / Gemini still lead and DeepSeek is still the cheapest text-first frontier alternative.",

  lastReviewedDate: "2026-04-25",
  dataSources: [
    { name: "Xiaomi: MiMo-V2.5-Pro product page", url: "https://mimo.xiaomi.com/mimo-v2-5-pro", dateAccessed: "2026-04-25" },
    { name: "Gizmochina: Xiaomi introduces MiMo-V2.5 TTS and ASR full voice pipeline", url: "https://www.gizmochina.com/2026/04/24/xiaomi-introduces-mimo-v2-5-tts-and-asr-as-a-full-voice-pipeline-for-the-agent-era/", dateAccessed: "2026-04-25" },
    { name: "Artificial Analysis: MiMo-V2.5-Pro listing", url: "https://artificialanalysis.ai/models/mimo-v2-5-pro", dateAccessed: "2026-04-25" },
    { name: "The Asian Mirror: Xiaomi MiMo V2.5 voice AI launch", url: "https://theasianmirror.com/latest/79214/xiaomi-mimo-v2-5-voice-ai-tts-asr-launch/", dateAccessed: "2026-04-25" },
  ],
  affiliateUrl: "https://mimo.xiaomi.com",
  status: "active",

  systemRequirements: [
    {
      variant: "MiMo-V2.5-Pro (1T total, 42B active MoE)",
      min: "API-only at launch -- weights not released for Pro",
      max: "API-only -- weights not released",
      notes: "API-only flagship pattern matches Qwen 3.6-Max-Preview and DeepSeek V4-Pro positioning. Xiaomi may or may not open Pro weights later",
    },
    {
      variant: "MiMo-V2.5-ASR (open-source)",
      min: "8 GB VRAM (RTX 3060 tier) for English + standard Mandarin",
      max: "1× A100 40 GB for full dialect coverage at production throughput",
      notes: "Open-source under a permissive license per Xiaomi's launch comms. Self-hostable for privacy-sensitive transcription. Strong specifically on Chinese dialects (Cantonese, Shanghainese)",
    },
  ],

  personality: {
    oneLiner: "Xiaomi's voice-first agentic stack",
    tone: "Direct, multimodal-aware. MiMo-V2.5-Pro is comfortable mixing image, audio, and text inputs in a single turn -- it's been trained for that, not retrofitted to it.",
    quirks: "Voice-pipeline orientation makes MiMo unusually expressive when audio is in the loop -- TTS variants (VoiceDesign, VoiceClone) and ASR are surfaced as first-class products, which most Chinese frontier vendors haven't done. PRC content filters apply on chat surfaces.",
  },
  metaTitle: "Xiaomi MiMo-V2.5 Review 2026: 1T MoE + Native Voice + Open-Source ASR",
  metaDescription: "Xiaomi MiMo-V2.5 review. Pro (1T/42B MoE, 1M context, native vision+audio) + TTS family + open-source ASR launched April 22 2026. No-surcharge 1M context. How it compares to DeepSeek V4 + Qwen.",
};
