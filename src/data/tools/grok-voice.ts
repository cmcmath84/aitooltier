import { ToolReview } from "@/lib/types";

export const grokVoice: ToolReview = {
  slug: "grok-voice",
  name: "Grok Speech (STT + TTS APIs)",
  tagline: "xAI's standalone voice APIs -- launched 2026-04-17. Built on the stack that powers Grok Voice, Tesla vehicles, and Starlink customer support. $0.10/hr STT batch, $4.20 per 1M characters TTS, 25+ languages. Now 26 flagship TTS voices (21 new added 2026-07-06), custom voice cloning from ~1 min of audio, and a no-code Grok Voice Agent Builder",
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
    "Still API/console-first -- no polished consumer web app for one-off podcast or audiobook production the way ElevenLabs Studio offers, even with the new no-code Voice Agent Builder",
  ],
  knownIssues: [
    {
      description: "THE `grok-voice-latest` REPOINT HAPPENED ON SCHEDULE 2026-08-05 -- AND IT IS A 1.6x PRICE INCREASE IF YOU DIDN'T PIN (verified against xAI's own models endpoint 2026-08-06): the alias migration announced on 7/29 executed as promised. xAI's live model catalogue now attaches **`aliases: [\"grok-voice-latest\"]` to `grok-voice-think-fast-2.0`** across every cluster it publishes (us-east-1, eu-west-1, us-saltlake-2), and **`grok-voice-think-fast-1.0` now carries no aliases at all**. So any integration still calling `grok-voice-latest` is on Think Fast 2.0 as of 8/05, with no code change and no deploy on your side. **THE PART XAI DID NOT PUT IN THE ANNOUNCEMENT: this alias move raised the per-audio-second rate by exactly 1.6x.** xAI's catalogue prices Think Fast 2.0's realtime audio at **1.6 times** Think Fast 1.0's (13,333,333 vs 8,333,333 in the endpoint's own units). Against the vendor-published **$0.08 per minute** headline for Think Fast 2.0, that puts Think Fast 1.0 at **$0.05 per minute** -- so unpinned callers went from roughly $3.00 to $4.80 per hour of audio overnight. The capability jump is real (AA Speech-to-Speech Quality Index 82.9% vs 75.7%, time-to-first-audio 0.70s vs 1.25s -- see the entry below), and 2.0 uses 0.4x the reasoning tokens of 1.0, so the effective cost story depends on your workload. But if you budgeted voice spend off the 1.0 rate and did not pin, **check your August bill** -- this is a silent 60% unit-price increase on a default alias. Pinning still works: `grok-voice-think-fast-1.0` remains callable, it simply is not what `latest` means any more",
      source: "xAI models catalogue (docs.x.ai/docs/models -- alias and per-second pricing read directly off the live endpoint payload, fetched 2026-08-06), x.ai/news/grok-voice-think-fast-2 (announcement, 2026-07-29)",
      date: "2026-08-05",
    },
    {
      description: "NEW MODEL -- GROK VOICE THINK FAST 2.0, AND `grok-voice-latest` REPOINTS ON 2026-08-05 (2026-07-29, vendor-primary): xAI shipped '**our most capable speech-to-speech voice model**', publishing third-party benchmarks from Artificial Analysis. **AA Speech-to-Speech Quality Index 82.9%** vs 75.7% for Think Fast 1.0, ahead of GPT-Realtime-2.1 High (79.1%) and Gemini 3.1 Flash High (69.5%). Component scores: Big Bench Audio 97.2%, **Full Duplex Bench 95.1%** (up from 77.8%, essentially closing the gap to GPT-Realtime-2.1's 95.7%), tau-voice Bench **56.5%** (vs 45.7% GPT-Realtime-2.1), and **time to first audio 0.70s** vs 1.25s for 1.0 and 2.98s for Gemini 3.1 Flash. Transcription: xAI claims a **1.5-2.0x accuracy improvement over Deepgram Nova 3 and ElevenLabs Scribe v2** across thousands of short phrases in 24 languages, widening to **~10x in noisy settings**. Architecture note worth understanding: these models **reason while speaking** -- 'reasoning in parallel with speech makes the model substantially smarter than other speech-to-speech models with no impact on latency' -- and 2.0 uses **0.4x the reasoning tokens** of 1.0, so tool calls typically fire before the agent finishes its first sentence. **PRICING: $0.08 per minute of audio.** **ACTION REQUIRED FOR API USERS: on August 5, 2026 the `grok-voice-latest` alias moves from `grok-voice-think-fast-1.0` to `grok-voice-think-fast-2.0`.** No action is needed to upgrade; to stay on 1.0 you must **pin `grok-voice-think-fast-1.0` before then**. xAI says the upgrade needs no prompt edits, and cites a Starlink support-line A/B test showing higher sales conversion and support containment. BRANDING NOTE: the vendor page is titled under **SpaceXAI** while the footer still reads (c) 2026 X.AI LLC -- the brand has shifted, the legal entity name has not",
      source: "xAI/SpaceXAI (x.ai/news/grok-voice-think-fast-2, fetched 2026-08-03 via curl -- x.ai 403s WebFetch)",
      date: "2026-07-29",
    },
    {
      description: "EXPANSION (2026-07-06): xAI released **21 new flagship TTS voices** (Lumen, Castor, Naksh, Atlas, Carina, Zagan, Helix, Orion, Luna, and more), bringing the lineup to 26 -- each cast for a specific job (support, characters, commentary, advertising, education) and natively multilingual across Grok Voice's 25+ languages. The original five (Ara, Eve, Leo, Rex, Sal) were retrained for more natural pacing/phrasing/emphasis. All are available in the realtime Voice Agent API, the Text-to-Speech API, and a **new no-code Grok Voice Agent Builder** in the xAI console. **Custom voice cloning from ~1 minute of audio is now exposed** (closes a prior gap vs ElevenLabs). Speech tags ([pause], <whisper>, <emphasis>, <soft>) control delivery",
      source: "xAI (x.ai/news/new-flagship-voices)",
      date: "2026-07-06",
    },
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
  notFor: "Consumer creators who want a polished web studio with voice presets and style sliders -- ElevenLabs Creator/Studio is still easier for one-off podcast or audiobook work. Enterprises in highly-regulated verticals should confirm the post-acquisition (SpaceX) vendor pathway works for them before committing.",
  verdict: "Grok Speech is xAI's clearest 'we are a platform, not just a chatbot' shot at the voice-API category, and on day-one pricing alone it's a credible threat to ElevenLabs, Deepgram, and AssemblyAI for production STT workloads. The published WER numbers are aggressive but plausible given the Tesla / Starlink deployment footprint. TTS at $4.20/1M char with real expressive tags undercuts ElevenLabs on price while narrowing the expressiveness gap. The open questions are (1) how it handles long-tail accents and non-English quality in practice, (2) whether the post-SpaceX procurement pathway slows enterprise adoption, and (3) how ElevenLabs responds on price. For new voice-API buyers shipping in Q2 2026, Grok Speech is now a first-call option alongside ElevenLabs and Deepgram.",

  lastReviewedDate: "2026-08-06",
  dataSources: [
    { name: "xAI models catalogue (grok-voice-latest alias now on Think Fast 2.0; per-audio-second pricing, verified 2026-08-06)", url: "https://docs.x.ai/docs/models", dateAccessed: "2026-08-06" },
    { name: "xAI: Grok Voice Think Fast 2.0 (2026-07-29, announced the 2026-08-05 alias repoint)", url: "https://x.ai/news/grok-voice-think-fast-2", dateAccessed: "2026-08-06" },
    { name: "xAI: 21 New Flagship Grok Voices (2026-07-06)", url: "https://x.ai/news/new-flagship-voices", dateAccessed: "2026-07-07" },
    { name: "xAI: Grok Speech to Text and Text to Speech APIs", url: "https://x.ai/news/grok-stt-and-tts-apis", dateAccessed: "2026-04-18" },
    { name: "xAI STT docs", url: "https://docs.x.ai/developers/model-capabilities/audio/speech-to-text", dateAccessed: "2026-04-18" },
    { name: "xAI TTS docs", url: "https://docs.x.ai/developers/model-capabilities/audio/text-to-speech", dateAccessed: "2026-04-18" },
    { name: "xAI joins SpaceX announcement", url: "https://x.ai/news/xai-joins-spacex", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://x.ai/news/grok-stt-and-tts-apis",
  status: "active",
  metaTitle: "Grok Speech Review 2026: `grok-voice-latest` Repointed Aug 5 (1.6x Price)",
  metaDescription: "Grok Speech review. On August 5, 2026 the `grok-voice-latest` alias moved to Think Fast 2.0 -- a silent 1.6x per-minute price increase ($0.05 to $0.08) for anyone who did not pin. Plus STT/TTS rates, 26 voices, cloning, and the Voice Agent Builder.",
};
