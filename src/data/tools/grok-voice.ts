import { ToolReview } from "@/lib/types";

export const grokVoice: ToolReview = {
  slug: "grok-voice",
  name: "Grok Speech (STT + TTS APIs)",
  tagline: "**Grok Voice 3.0, xAI's new speech-to-speech model, shipped 2026-10-14 at the same $0.08 per minute as 2.0, which xAI's rate card now flags as on its way out; grok-voice-latest switched over automatically, and xAI cites a #1 score of 86.9 on Artificial Analysis' Speech-to-Speech Index.** xAI's standalone voice APIs. **Grok Voice Transcribe 2.0 shipped 2026-09-18** -- xAI calls it twice as accurate as 1.0 at the same $0.10/hr batch and $0.20/hr streaming, ranks it first for accuracy among 32 streaming models on Artificial Analysis, and has already made it the default STT model; **1.0 is being retired in the coming weeks, so pin grok-voice-transcribe-1.0 if you need it**. **PRICE CORRECTION: text-to-speech is $15.00 per 1M characters on xAI's live rate card (verified 2026-09-21), not the $4.20 this page carried since April.** Speech-to-speech agent $0.08/min, 26 flagship voices, ~1-minute voice cloning, no-code Voice Agent Builder",
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
      plan: "Voice Agent API (Grok Voice 3.0, 2026-10-14)",
      price: "$0.08",
      period: "per minute ($4.80/hr) + $0.004 per text input",
      features: ["grok-voice-3.0; grok-voice-latest moved to it automatically on launch day", "Same price as grok-voice-2.0, which the docs pricing table now labels Deprecated", "Sub-second latency claimed; powers Grok in Tesla vehicles, Grok Bot voice mode and Starlink support lines"],
    },
    {
      plan: "Speech to Text (batch)",
      price: "$0.10",
      period: "per hour",
      features: [
        "Grok Voice Transcribe 2.0 (2026-09-18) is now the default model; pin grok-voice-transcribe-1.0 to stay on the original during its retirement window",
        "Key term biasing (up to 100 terms per request), filler-word removal, smart turn detection, up to 8 channels",
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
      price: "$15.00",
      period: "per 1M characters",
      features: [
        "Verified 2026-09-21 on docs.x.ai/docs/pricing and x.ai/api (model grok-tts); this page previously listed $4.20, which no vendor page now supports",
        "Natural expressive voices (ARA voice etc.)",
        "Speech tags: [laugh], [sigh], [whisper], <emphasis>, <slow>, <pause>",
        "REST + WebSocket streaming",
        "Usage-based billing, no hidden fees",
      ],
    },
  ],

  pros: [
    "Grok Voice 3.0 (2026-10-14) upgraded the voice agent at no extra cost: still $0.08 per minute, with xAI citing #1 on Artificial Analysis' Speech-to-Speech Index (86.9, as of 10/13) and 74% on ServiceNow's EVA-Bench",
    "Published word-error-rate benchmark puts Grok STT ahead of ElevenLabs, Deepgram, and AssemblyAI across phone calls, meetings, podcasts, and telephony (6.9% overall WER vs. ElevenLabs 9.0%, Deepgram 11.0%, AssemblyAI 12.9%)",
    "STT pricing is aggressive and has not moved across two model generations -- $0.10/hr batch and $0.20/hr streaming for Transcribe 2.0, the same as 1.0, with diarization, timestamps and key terms included rather than billed as add-ons",
    "Speech tags ([laugh], [sigh], [whisper], <emphasis>, <slow>, <pause>) give expressive TTS control without SSML -- genuinely closer to ElevenLabs v3's emotional range than anything else at this price point",
    "Same stack that powers Grok Voice, Tesla in-car voice, and Starlink customer support -- this is not a research preview, it's a production-scale system exposed as an API",
  ],
  cons: [
    "Text-to-speech is $15.00 per 1M characters on the current rate card -- no longer a price advantage over ElevenLabs on TTS, and this page carried a $4.20 figure for five months that no vendor page now supports, so re-check the rate card before budgeting",
    "xAI's post-SpaceX-acquisition status (SpaceX bought xAI, announced 2026-02-02) means procurement teams at US-regulated orgs may need to re-run vendor-approval workflows. Bring that up early with your security team if you're enterprise",
    "No consumer web UI -- this is API-only. ElevenLabs' Creator/Studio web apps remain easier for one-off podcast or audiobook work",
    "Still API/console-first -- no polished consumer web app for one-off podcast or audiobook production the way ElevenLabs Studio offers, even with the new no-code Voice Agent Builder",
  ],
  knownIssues: [
    {
      description: "GROK VOICE 3.0 -- NEW SPEECH-TO-SPEECH MODEL AT THE SAME $0.08/MIN, 2.0 MARKED DEPRECATED, AND `grok-voice-latest` ALREADY MOVED (2026-10-14, vendor-primary): xAI announced 'Grok Voice 3.0, the world's most intelligent speech-to-speech model', 'available today in the API at the same price as its predecessor'. **Price:** 'available today in the Voice Agent API at $0.08 / min ($4.80 / hr), the same price as Grok Voice 2.0. Agents using grok-voice-latest have already been switched over automatically, with no changes needed.' docs.x.ai/docs/pricing (fetched 10/15) lists 'Speech to Speech (grok-voice-3.0) $0.08 / min ($4.80 / hr) $0.004 / text input' and **'Speech to Speech (grok-voice-2.0) Deprecated'** at the same rate -- no removal date given, so pin 2.0 only knowing it is on the way out. Unlike the 8/05 repoint (a 1.6x increase, entry below), this alias move does not change the bill. **Claims:** #1 on Artificial Analysis' Speech-to-Speech Index at **86.9** ('Source: Artificial Analysis, October 13, 2026' -- a dated third-party snapshot as reported by xAI); **97% on Full Duplex Bench**; **71.6% on tau-Voice**, 'comparable with GPT-Live-1 (Astra), but at 40% lower latency'; **74% accuracy on ServiceNow's EVA-Bench**, the highest; lower cost per task than GPT-Live-1 (Astra, Medium) and GPT-Realtime-2.1 on AA's Big Bench Audio run (chart only). **Deployment:** 'millions of conversations a day' in Tesla vehicles and Grok Bot voice mode; Starlink call centres take 20,000 calls a day with ~70% resolved without a human. Leaderboard positions decay -- treat the AA rank as of 2026-10-13.",
      source: "xAI / SpaceXSI (x.ai/news/grok-voice-3, JSON-LD datePublished 2026-10-14) + docs.x.ai/docs/pricing (Voice API table) -- fetched 2026-10-15 via curl with browser UA",
      date: "2026-10-14",
    },
    {
      description: "GROK VOICE TRANSCRIBE 2.0 -- TWICE THE ACCURACY AT THE SAME PRICE, ALREADY THE DEFAULT, AND 1.0 IS ON ITS WAY OUT (2026-09-18, vendor-primary): xAI released its next speech-to-text model, 'one of the most accurate transcription models available today and **twice as accurate as Grok Voice Transcribe 1.0, at the same price**'. It is built on the audio foundation model behind Grok Voice and trained 'on a unique dataset of live, noisy, multilingual audio'. **Claims, and where they come from:** on the public **Artificial Analysis leaderboard it 'ranks first for accuracy among 32 streaming models'** (third-party, but the ranking is a dated snapshot -- as of 2026-09-18); on four **internal** production sets (customer-support telephony, Grok conversations, spoken credentials such as account codes and emails, short voice commands in 19 languages) it beats 1.0 on all four and 'on telephony it leads every model we tested' -- vendor-run, no table published. The one hard number: on xAI's short-phrase set **word error rate drops from 20.6% to 6.8%**. Multilingual accuracy is 'its largest improvement': dozens of languages, automatic detection, mid-recording language switches in a single pass. **API features:** batch and streaming; word-level timestamps with confidence scores; **speaker diarization at no additional cost**; up to 8-channel multichannel; **key term biasing up to 100 terms per request**; written-form formatting of numbers, dates, currencies, phone numbers and emails; filler-word removal; smart turn detection for voice agents. **PRICING IS IDENTICAL TO 1.0:** $0.10 per hour batch, $0.20 per hour streaming -- confirmed against xAI's live model catalogue, where both models carry the same per-audio-second rate. **MIGRATION:** existing integrations 'get the accuracy improvement with no code changes'; the post says 2.0 'will soon be the default' and that **1.0 'will be deprecated in the coming weeks'** -- and by 2026-09-21 the STT docs already list **grok-voice-transcribe-2.0 as 'Default when model is omitted'** and 1.0 as 'Original model. Pin this slug to keep it.' So the default flip has effectively executed; only 1.0's removal date is open. Atlassian is named as a customer: Loom now uses Transcribe 2.0, with a workflow that pipes Loom transcripts into Cursor.",
      source: "SpaceXAI (x.ai/news/grok-voice-transcribe-2, JSON-LD datePublished 2026-09-18); xAI STT docs (docs.x.ai/developers/model-capabilities/audio/speech-to-text -- 2.0 'Default when model is omitted'); xAI models catalogue (docs.x.ai/docs/models, per-audio-second pricing identical for 1.0 and 2.0) -- all fetched 2026-09-21 via curl with browser UA",
      date: "2026-09-18",
    },
    {
      description: "PRICE CORRECTION -- TEXT-TO-SPEECH IS $15.00 PER 1M CHARACTERS ON XAI'S LIVE RATE CARD, NOT $4.20 (verified 2026-09-21): while checking Transcribe 2.0 we re-read xAI's pricing page and API landing page, and both state '**Text to Speech $15.00 / 1M characters**'; the machine-readable model catalogue prices `grok-tts` at 150,000 per character in the same units that give $0.10/hr for batch STT, which also works out to $15.00 per 1M. **This page had carried $4.20 per 1M characters since the 2026-04-17 launch.** We re-fetched that launch post today: its text states the STT rates ($0.10 and $0.20 per hour) in words but presents TTS cost only as a chart titled 'Cost per million characters', so **the $4.20 figure cannot be re-verified against any vendor page** -- either xAI raised the rate at some point between April and September without an announcement we found, or the original figure was read off a chart incorrectly. We ship the number the vendor publishes today and flag the history honestly. **Consequence for the comparison:** at $15 per 1M characters Grok TTS is no longer cheaper than ElevenLabs' effective rates on most tiers, so the 'undercuts ElevenLabs on price' framing in this review's April narrative applied to STT only; the pro and con lines have been corrected. The speech-to-speech agent rate ($0.08/min, $4.80/hr, plus $0.004 per 1M text input) and both STT rates are unchanged.",
      source: "xAI docs pricing page (docs.x.ai/docs/pricing -- 'Text to Speech $15.00 / 1M chars'), x.ai/api ('Text to Speech $15.00 / 1M characters'), docs.x.ai/docs/models (grok-tts perCharacter 150000), and x.ai/news/grok-stt-and-tts-apis (launch post re-read: TTS price appears only in a chart) -- all fetched 2026-09-21 via curl with browser UA",
      date: "2026-09-21",
    },
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
  verdict: "Grok Speech is xAI's clearest 'we are a platform, not just a chatbot' shot at the voice-API category, and on day-one pricing alone it's a credible threat to ElevenLabs, Deepgram, and AssemblyAI for production STT workloads. The published WER numbers are aggressive but plausible given the Tesla / Starlink deployment footprint. TTS at $15 per 1M characters (the rate xAI publishes as of 2026-09-21; this review previously said $4.20) no longer undercuts ElevenLabs on price, though the expressive tags still narrow the quality gap. With Transcribe 2.0 (2026-09-18) xAI held the STT price flat while claiming a 2x accuracy gain and a first-place Artificial Analysis streaming rank, so STT is where the value case lives. The open questions are (1) how it handles long-tail accents and non-English quality in practice, (2) whether the post-SpaceX procurement pathway slows enterprise adoption, and (3) how ElevenLabs responds on price. For new voice-API buyers shipping in Q2 2026, Grok Speech is now a first-call option alongside ElevenLabs and Deepgram.",

  lastReviewedDate: "2026-10-15",
  dataSources: [
    { name: "xAI: Introducing Grok Voice 3.0 (2026-10-14) -- $0.08/min, grok-voice-latest switched, AA S2S Index 86.9", url: "https://x.ai/news/grok-voice-3", dateAccessed: "2026-10-15" },
    { name: "xAI docs pricing -- grok-voice-3.0 $0.08/min; grok-voice-2.0 marked Deprecated; TTS $15/1M chars; STT $0.10/$0.20 per hr (verified 2026-10-15)", url: "https://docs.x.ai/docs/pricing", dateAccessed: "2026-10-15" },
    { name: "SpaceXAI: Introducing Grok Voice Transcribe 2.0 (2026-09-18) -- same $0.10/$0.20 per hour, AA #1 of 32 streaming models, 1.0 retiring", url: "https://x.ai/news/grok-voice-transcribe-2", dateAccessed: "2026-09-21" },
    { name: "xAI STT docs -- grok-voice-transcribe-2.0 default when model omitted; pin 1.0 to keep it (verified 2026-09-21)", url: "https://docs.x.ai/developers/model-capabilities/audio/speech-to-text", dateAccessed: "2026-09-21" },
    { name: "xAI docs pricing -- Text to Speech $15.00 / 1M chars; STT $0.10 / $0.20 per hour; speech-to-speech $0.08/min (verified 2026-09-21)", url: "https://docs.x.ai/docs/pricing", dateAccessed: "2026-09-21" },
    { name: "xAI API landing page -- Text to Speech $15.00 / 1M characters (verified 2026-09-21)", url: "https://x.ai/api", dateAccessed: "2026-09-21" },
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
  metaTitle: "Grok Speech Review 2026: Grok Voice 3.0 at $0.08/min, Transcribe 2.0 at $0.10/hr, TTS $15 per 1M Characters",
  metaDescription: "Grok Speech review. Grok Voice 3.0 (Oct 14, 2026) replaces 2.0 in xAI's voice agent API at the same $0.08 per minute, with grok-voice-latest switched automatically and a #1 Artificial Analysis speech-to-speech score claimed. Grok Voice Transcribe 2.0 costs $0.10/hr batch, $0.20/hr streaming; text-to-speech is $15.00 per 1M characters.",
};
