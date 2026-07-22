import { ToolReview } from "@/lib/types";

export const gptLive: ToolReview = {
  slug: "gpt-live",
  name: "GPT-Live (ChatGPT Voice)",
  tagline: "OpenAI's full-duplex voice models (launched 2026-07-08) now powering ChatGPT Voice -- listens and speaks at the same time, backchannels naturally, and delegates hard questions to GPT-5.5 in the background while keeping the conversation going. GPT-Live-1 for paid tiers, GPT-Live-1 mini for Free",
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
        "No API at launch -- OpenAI says API access is 'coming soon' (sign-up form for developers/enterprises)",
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
    "No API at launch -- developers can't build on GPT-Live yet (sign-up form only), so it's a ChatGPT feature today, not a platform",
    "No video or screen-share support at launch -- you have to fall back to legacy Standard/Advanced Voice Mode for those",
    "Predefined voices only (nine, remastered) -- deliberately no voice cloning, so ElevenLabs/Grok Voice keep that use case",
    "Optimized for ChatGPT's most popular languages; OpenAI concedes non-native accents and fluency gaps in others",
    "Delegation quality depends on the background model tier you can access -- Free users on mini get the smallest slice of the experience",
  ],
  knownIssues: [
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
  notFor: "Developers (no API yet), anyone needing voice cloning or custom voices (ElevenLabs, Grok Voice), video/screen-share workflows (stay on legacy Advanced Voice Mode until GPT-Live adds it), or heavy non-English users in less-supported languages.",
  verdict: "GPT-Live is the biggest step-change in consumer voice AI since Advanced Voice Mode shipped: full-duplex conversation that finally stops feeling like walkie-talkie turns, plus a delegation trick that quietly gives your voice assistant frontier-model intelligence without breaking flow. The GPQA and BrowseComp deltas over AVM are not incremental -- they're a different class. What keeps it from a higher score is scope: no API, no video/screen-share, no custom voices. As a ChatGPT feature it's excellent and free; as a platform it hasn't started yet. If the API lands at reasonable pricing, this becomes a direct threat to every voice-agent stack.",

  lastReviewedDate: "2026-07-22",
  dataSources: [
    { name: "OpenAI API deprecations: legacy audio/realtime/transcription removal 2027-01-20 (announced 2026-07-20)", url: "https://developers.openai.com/api/docs/deprecations", dateAccessed: "2026-07-22" },
    { name: "OpenAI: Introducing GPT-Live (2026-07-08)", url: "https://openai.com/index/introducing-gpt-live/", dateAccessed: "2026-07-09" },
    { name: "OpenAI GPT-Live system card", url: "https://deploymentsafety.openai.com/gpt-live", dateAccessed: "2026-07-09" },
    { name: "OpenAI: GPT-Live API notification form", url: "https://openai.com/form/gpt-live-1-in-the-api/", dateAccessed: "2026-07-09" },
  ],
  affiliateUrl: "https://chatgpt.com",
  status: "active",
  poweredBy: "GPT-Live-1 / GPT-Live-1 mini (delegating to GPT-5.5 Instant/Thinking)",
  metaTitle: "GPT-Live Review (2026): OpenAI's Full-Duplex ChatGPT Voice, Tested",
  metaDescription: "GPT-Live review. OpenAI's new full-duplex voice models (July 8, 2026) replace ChatGPT Voice -- simultaneous listening/speaking, GPT-5.5 delegation, GPQA 84.2% vs AVM's 45.3%. Free in every tier. No API or video yet.",
};
