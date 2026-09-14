import { ToolReview } from "@/lib/types";

export const gptLive: ToolReview = {
  slug: "gpt-live",
  name: "GPT-Live (ChatGPT Voice)",
  tagline: "OpenAI's full-duplex voice models (launched in ChatGPT 2026-07-08) -- listens and speaks at the same time, backchannels naturally, and delegates hard questions to a backend model while keeping the conversation going. **GPT-Live-1 reached the API on 2026-09-10 at $0.05 per minute** for the voice layer, with telephony support, keyword biasing, delegation to any backend model (GPT-6 Astra, Luna, or a third-party model) and a wider voice set. In ChatGPT: GPT-Live-1 for paid tiers, GPT-Live-1 mini for Free",
  category: "ai-voice-audio",
  url: "https://openai.com/index/introducing-gpt-live/",

  scores: {
    easeOfUse: 10,
    outputQuality: 8.5,
    value: 9,
    features: 7.5,
    overall: 8.6,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Included in ChatGPT (no separate price)",
      price: "$0 extra",
      features: [
        "GPT-Live-1: default ChatGPT Voice model for Go, Plus, and Pro users",
        "GPT-Live-1 mini: default for Free users",
        "Reasoning-effort choice per conversation: Instant (GPT-5.5 Instant behind the scenes) or Medium/High (GPT-5.5 Thinking)",
        "Rolling out globally 2026-07-08 across iOS, Android, and chatgpt.com",
        "No API at the July launch -- resolved 2026-09-10, see the API plan below",
      ],
    },
    {
      plan: "API -- GPT-Live-1 (since 2026-09-10)",
      price: "$0.05",
      period: "per minute for the front-end voice layer",
      features: [
        "Full-duplex voice model in the API: listens and speaks simultaneously, handles interruptions, backchannels and silence in one model",
        "Delegates reasoning and tool calls to a backend text model you choose -- GPT-6 Astra, Luna, or a third-party model -- so backend token costs are billed separately on top of the per-minute rate",
        "Telephony support for phone-call agents; native ASR transcripts + response text; alphanumeric understanding and keyword biasing; native turn detection for apps built around turn boundaries",
        "Tone, pace and style steerable via the system prompt; expanded voice set across accents, dialects and languages, with more promised over the coming months",
        "Custom voice access is by application through sales, not self-serve",
        "Also sold packaged as OpenAI Presence (enterprise voice agents) through account directors",
      ],
    },
  ],

  pros: [
    "Full-duplex architecture is a real generational change -- it processes input while generating output, so it can backchannel ('mhmm'), handle interruptions, wait while you think, and even do live translation instead of rigid turn-taking",
    "Delegation is the clever part: hard questions route to GPT-5.5 (Instant or Thinking) in the background while the voice keeps talking -- frontier-model answers without killing conversational flow",
    "The benchmark deltas over Advanced Voice Mode are enormous: GPQA 84.2% vs 45.3%, BrowseComp (agentic search) 75.2% vs 0.7% at high effort; humans preferred it over AVM in ~70-76% of matched conversations",
    "Visual answer cards (weather, stocks, sports, maps) render while you talk -- voice plus glanceable UI beats voice alone for a lot of everyday queries",
    "Voice-specific safety was built in from day one: real-time steering of unsafe output, adapted crisis-support flows, teen protections with parental notifications",
  ],
  cons: [
    "The API arrived two months after the consumer launch (2026-09-10) and the $0.05/minute rate is only the voice layer -- every delegated reasoning or tool call bills the backend model on top, so real per-minute cost depends heavily on how much you route to Astra-class models",
    "No video or screen-share support at launch -- you have to fall back to legacy Standard/Advanced Voice Mode for those",
    "Predefined voices only (nine, remastered) -- deliberately no voice cloning, so ElevenLabs/Grok Voice keep that use case",
    "Optimized for ChatGPT's most popular languages; OpenAI concedes non-native accents and fluency gaps in others",
    "Delegation quality depends on the background model tier you can access -- Free users on mini get the smallest slice of the experience",
  ],
  knownIssues: [
    {
      description: "GPT-LIVE-1 REACHES THE API -- $0.05 PER MINUTE FOR THE VOICE LAYER, BACKEND BILLED SEPARATELY, AND THE 'COMING SOON' THIS PAGE HAS CARRIED SINCE JULY IS CLOSED (2026-09-10, vendor-primary): OpenAI launched **GPT-Live-1 in the API**, bringing the full-duplex model that replaced ChatGPT Voice on 7/08 to developers. **What is new for the API version rather than a port:** (1) **delegation is open** -- GPT-Live-1 'can delegate reasoning and tool calls to a backend text model like GPT-6 Astra **or a third-party model**', so the voice layer is decoupled from OpenAI's reasoning models (OpenAI's own example pairs it with Luna for scheduling/order updates and Astra for complex issues); (2) **telephony support** for phone-call agents; (3) tone, pace and style steerable via the system prompt; (4) native ASR transcripts and response text, alphanumeric understanding, keyword biasing; (5) native **turn detection** despite not being turn-based, so existing turn-boundary architectures still work; (6) a **wider voice set** across accents, dialects and languages, expanding 'over the coming months'; (7) custom voices by application through sales. **PRICING: $0.05 per minute for the front-end voice layer.** Read that carefully -- it excludes the backend: 'Pair it with the backend model and agent harness that fit your product', which means every delegated reasoning call bills the backend at that model's token rates on top of the per-minute charge. There is no bundled all-in rate. **VENDOR BENCHMARKS (first-party):** Full Duplex Bench **+30 percentage points over GPT-Realtime-2.1**; paired with GPT-6 Astra at medium effort it 'ranks #1 on Tau3' (a voice-agent task suite spanning airline, retail, telecom and banking); other evals ran with Terra (low) as the backend. No absolute scores are given in text, only the chart. **CUSTOMER CLAIMS, ALL VENDOR-SELECTED:** Speak says it cut interruptions during thinking pauses by 'almost 80%' vs turn-based systems; an unnamed healthcare CTO says the cascaded build shrank by 80% and 23K lines; Yelp Host reports better call-handling rates; Intercom's Fin and Cognition's Devin are quoted as integrations. **WHY THIS MATTERS FOR THE COMPETITIVE MAP:** this is OpenAI selling directly into the cascaded STT -> LLM -> TTS voice-agent market that ElevenLabs Agents, Deepgram and the realtime-API integrators occupy, with a single-model pitch on latency and interruption handling. **WHAT DID NOT CHANGE:** the consumer ChatGPT product still lacks video/screen-share and custom voices; the July page text saying 'no API' is superseded by this entry and has been corrected in tagline, pricing, cons, notFor and verdict.",
      source: "OpenAI (openai.com/index/introducing-gpt-live-1-in-the-api/, publicationDateText 'September 10, 2026'; checked for 'Originally published on' / 'Update on' blocks -- none, genuine new post) -- fetched 2026-09-14 via curl with browser UA",
      date: "2026-09-10",
    },
    {
      description: "A SECOND TRANSCRIPTION DEPRECATION WAVE -- WHISPER-1 AND THE ENTIRE GPT-4o-TRANSCRIBE FAMILY GO ON 2027-02-26 (announced 2026-08-26, vendor-primary): five weeks after the 7/20 legacy-audio notice below, OpenAI opened a **separate, larger** deprecation. Verbatim: '**On August 26, 2026, we notified developers using `whisper-1`, `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `gpt-4o-transcribe-diarize` of their deprecation and removal from the API on February 26, 2027.**' **Replacements for all four are `gpt-live-transcribe` or `gpt-transcribe`.** **THE HEADLINE IS WHISPER.** `whisper-1` has been OpenAI's speech-to-text endpoint since 2023 and is embedded in an enormous amount of third-party tooling, much of it written by people who have not looked at OpenAI's deprecation ledger since. **This is the retirement of the default answer to 'how do I transcribe audio with OpenAI'**, and it gets six months' notice. Note the open-weight Whisper models on Hugging Face are a separate artefact and are not affected by an API deprecation -- **what is ending is the hosted `whisper-1` endpoint**, and self-hosted Whisper keeps working. **READ THE TWO WAVES TOGETHER, BECAUSE THEY OVERLAP CONFUSINGLY:** the 7/20 notice below retires the legacy realtime/audio families on **2027-01-20** and moves `gpt-4o-mini-transcribe-2025-03-20` to a **December 2025 snapshot of the same model** -- and this 8/26 notice then retires that whole `gpt-4o-*-transcribe` line outright on **2027-02-26**. **So if you migrated in July onto a gpt-4o-mini-transcribe snapshot, you migrated onto something that has now itself been deprecated, and you get five extra weeks for the trouble.** The durable target is the `gpt-transcribe` / `gpt-live-transcribe` pair, not any `gpt-4o` transcription ID. **This was announced two days before our 8/28 sweep and we missed it; caught on the 8/31 pass by reading the deprecations doc rather than the newsroom** -- deprecations frequently never get a blog post at all.",
      source: "OpenAI (platform.openai.com/docs/deprecations, fetched as .md -- section '2026-08-26: Transcription models' plus its four-row shutdown table) -- fetched 2026-08-31 via curl",
      date: "2026-08-26",
    },
    {
      description: "LEGACY AUDIO/REALTIME/TRANSCRIPTION MODELS DEPRECATED (2026-07-20, vendor-primary; removal 2027-01-20): OpenAI notified developers that its legacy audio, realtime, and transcription model families are deprecated and **will be removed from the API on January 20, 2027**. Affected IDs and their replacements: `gpt-realtime` -> `gpt-realtime-2.1`; `gpt-4o-realtime` -> `gpt-realtime-2.1`; `gpt-realtime-mini` / `gpt-4o-mini-realtime` -> `gpt-realtime-2.1-mini`; `gpt-audio`, `gpt-4o-audio`, `gpt-audio-mini`, `gpt-4o-mini-audio` -> `gpt-audio-1.5`; `gpt-4o-mini-transcribe-2025-03-20` -> `gpt-4o-mini-transcribe-2025-12-15`. This is the developer-API voice stack (distinct from the consumer GPT-Live experience below, which has no public API yet). If you build on OpenAI voice/realtime today, plan the migration before the Jan 2027 cutoff -- `gpt-realtime-2.1` / `-mini` are the current GA developer path while the consumer GPT-Live API remains 'coming soon'",
      source: "OpenAI API deprecations (developers.openai.com/api/docs/deprecations)",
      date: "2026-07-20",
    },
    {
      description: "LAUNCH (2026-07-08): OpenAI launched **GPT-Live**, a new generation of full-duplex voice models that replaces the default ChatGPT Voice experience (150M+ weekly voice users). **GPT-Live-1** becomes the default for Go/Plus/Pro; **GPT-Live-1 mini** for Free; rolling out globally across iOS/Android/web. Architecture: continuous listen-while-speaking (interaction decisions many times per second) + **delegation** -- search/reasoning/agentic work is handed to GPT-5.5 (Instant, or Thinking at Medium/High effort) in the background while the conversation continues; OpenAI says the background model will track its latest frontier releases. Vendor benchmarks vs Advanced Voice Mode: **GPQA 76.5-84.2% (by effort) vs 45.3%; BrowseComp 35.1-75.2% vs 0.7%**; preferred over AVM in 75.7% (Live-1) / 69.2% (mini) of matched 5-10 min conversations. Also: visual answer cards (weather/stocks/sports/maps), nine remastered predefined voices (no cloning by design), voice-adapted safety stack (real-time steering, crisis flows, teen protections + parental notifications, system card at deploymentsafety.openai.com/gpt-live). Launch limitations: **no API yet** ('coming soon,' sign-up form live), **no video/screen-share** (legacy Standard/Advanced Voice Mode remain available for those), uneven fluency outside major languages",
      source: "OpenAI (openai.com/index/introducing-gpt-live/), TechCrunch, MacRumors",
      date: "2026-07-08",
    },
  ],
  bestFor: "Anyone who talks to ChatGPT -- commute Q&A, language practice, hands-free help, kids' stories. It's the new default, free with every tier, and the conversational feel is the best shipping voice AI experience right now.",
  notFor: "Anyone needing self-serve voice cloning or custom voices (ElevenLabs, Grok Voice -- OpenAI's custom voices are sales-gated), video/screen-share workflows in ChatGPT (stay on legacy Advanced Voice Mode until GPT-Live adds it), heavy non-English users in less-supported languages, or developers who need a single-model turn-based stack with predictable per-token pricing rather than per-minute voice plus a separately billed backend.",
  verdict: "GPT-Live is the biggest step-change in consumer voice AI since Advanced Voice Mode shipped: full-duplex conversation that finally stops feeling like walkie-talkie turns, plus a delegation trick that quietly gives your voice assistant frontier-model intelligence without breaking flow. The GPQA and BrowseComp deltas over AVM are not incremental -- they're a different class. What kept it from a higher score at launch was scope: no API, no video/screen-share, no custom voices. The API gap closed on 2026-09-10 at $0.05 per minute for the voice layer, with telephony and delegation to any backend model -- which makes it a direct threat to every cascaded STT-LLM-TTS voice-agent stack, and the customer quotes (Yelp, Speak, Intercom's Fin, Cognition) are exactly that market. Still missing in ChatGPT: video/screen-share and custom voices.",

  lastReviewedDate: "2026-09-14",
  dataSources: [
    { name: "OpenAI: Build more natural voice experiences with GPT-Live-1 in the API -- $0.05/min voice layer, telephony, backend delegation, Full Duplex Bench +30pts vs GPT-Realtime-2.1 (2026-09-10)", url: "https://openai.com/index/introducing-gpt-live-1-in-the-api/", dateAccessed: "2026-09-14" },
    { name: "OpenAI deprecations: 2026-08-26 Transcription models -- whisper-1, gpt-4o-transcribe, gpt-4o-mini-transcribe, gpt-4o-transcribe-diarize removed from the API 2027-02-26", url: "https://platform.openai.com/docs/deprecations", dateAccessed: "2026-08-31" },
    { name: "OpenAI API deprecations: legacy audio/realtime/transcription removal 2027-01-20 (announced 2026-07-20)", url: "https://developers.openai.com/api/docs/deprecations", dateAccessed: "2026-07-22" },
    { name: "OpenAI: Introducing GPT-Live (2026-07-08)", url: "https://openai.com/index/introducing-gpt-live/", dateAccessed: "2026-07-09" },
    { name: "OpenAI GPT-Live system card", url: "https://deploymentsafety.openai.com/gpt-live", dateAccessed: "2026-07-09" },
    { name: "OpenAI: GPT-Live API notification form", url: "https://openai.com/form/gpt-live-1-in-the-api/", dateAccessed: "2026-07-09" },
  ],
  affiliateUrl: "https://chatgpt.com",
  status: "active",
  poweredBy: "GPT-Live-1 / GPT-Live-1 mini (delegating to a backend model -- GPT-6 Astra, Luna, or third-party via the API)",
  metaTitle: "GPT-Live Review (2026): Full-Duplex Voice, Now in the API at $0.05/min",
  metaDescription: "GPT-Live review. OpenAI's full-duplex voice model replaced ChatGPT Voice on July 8, 2026 and reached the API on September 10 at $0.05 per minute for the voice layer -- backend reasoning (GPT-6 Astra, Luna or third-party) billed separately. Telephony, interruption handling, +30pts on Full Duplex Bench vs GPT-Realtime-2.1. Free in every ChatGPT tier.",
};
