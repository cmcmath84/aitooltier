import { ToolReview } from "@/lib/types";

export const cohereTranscribe: ToolReview = {
  slug: "cohere-transcribe",
  name: "Cohere Transcribe",
  tagline: "**Nov 2026: an Arabic fine-tune (cohere-transcribe-arabic-07-2026) shipped on 2026-07-07 with Arabic-English code-switching, Model Vault now publishes per-GPU hourly prices, and Cohere signed its Aleph Alpha combination agreement on 2026-09-16 (closing pending).** Cohere's first audio model -- launched 2026-03-26 under Apache 2.0, 2B parameters, #1 on the Hugging Face Open ASR Leaderboard at launch (5.42 avg WER as of 2026-03-26), 14 enterprise-critical languages. Free trial API (rate-limited, non-commercial); Model Vault for production",
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
        "Arabic fine-tune (cohere-transcribe-arabic-07-2026) also Apache 2.0",
      ],
    },
    {
      plan: "Cohere API (trial key)",
      price: "$0",
      features: [
        "Hosted inference via the V2 Audio Transcriptions API",
        "Trial limit for Audio Transcriptions: 5 requests/min",
        "Trial keys may not be used for production or commercial purposes",
        "Production keys are pay-as-you-go; production transcription limits via Cohere sales",
      ],
    },
    {
      plan: "Cohere Model Vault (production)",
      price: "Per GPU-hour",
      features: [
        "Dedicated deployment, priced by GPU type and number of replicas",
        "Published on-demand rates, e.g. H100 80GB $6.25/GPU-hr (promotional $4.25 through 2027-03-31)",
        "Fixed or Flex plans; monthly and annual commit pricing via sales",
        "Cohere North enterprise platform integration",
      ],
    },
  ],

  pros: [
    "#1 on Hugging Face Open ASR Leaderboard as of 2026-03-26 -- 5.42 average WER across 8 English benchmarks, beating IBM Granite 4.0 1B Speech (5.52), NVIDIA Canary Qwen 2.5B (5.63), ElevenLabs Scribe v2 (5.83), and OpenAI Whisper Large v3 (7.44) -- a launch-date snapshot; the leaderboard has since changed its default datasets and added newer models",
    "Apache 2.0 open weights mean you can self-host without license fees -- rare for production-grade ASR at this accuracy tier. vLLM integration was contributed upstream so production serving works out of the box",
    "Encoder-heavy architecture (90%+ of parameters in encoder, lightweight decoder) is explicitly optimized for serving efficiency -- offline throughput is 3x higher than comparable open-source models at similar WER",
    "Trained on 14 enterprise-critical languages: English, German, French, Italian, Spanish, Portuguese, Greek, Dutch, Polish, Arabic, Vietnamese, Mandarin, Japanese, Korean -- positioned squarely for European and APAC enterprise transcription",
  ],
  cons: [
    "No speaker diarization, word-level timestamps, or streaming WebSocket API -- this is a transcription-only model, not a full ASR platform like Grok Speech or Deepgram. Build those features yourself",
    "Trained to expect a language tag and monolingual audio -- code-switched (En, X) transcription works sometimes but is not a first-class use case (the separate Arabic fine-tune is built for Arabic-English code-switched speech)",
    "Like most AED speech models, 'eager to transcribe' -- background noise and silence can turn into hallucinations without a VAD (voice activity detection) front-end",
    "Text-to-speech is NOT in this release -- Cohere Transcribe is STT only. If you need both, pair with Grok TTS, ElevenLabs, or Microsoft MAI-Voice-1",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-05): this page stated the leaderboard rank in the present tense -- '#1 Open ASR Model' (metaTitle) and accuracy 'now best-in-class for open models' (bestFor). Cohere's own model card dates the ranking: 'English ASR Leaderboard (as of 03.26.2026)'. The leaderboard has since changed its default datasets and added newer models, and we could not read the current results, so this page now states the rank as at launch.",
      source: "Hugging Face model card CohereLabs/cohere-transcribe-03-2026 (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "PRICING: MODEL VAULT RATES PUBLISHED, TRIAL API LIMITS (checked 2026-11-05, vendor-primary): cohere.com/pricing says of Model Vault 'Pricing is based on the GPUs your model runs on and the number of replicas.' and lists on-demand hourly rates per GPU (e.g. A100 80GB $3.50, H100 80GB $6.25, B200 192GB $9.75) with lower promotional rates through March 31, 2027 (H100 80GB $4.25); 'Fixed or Flex pricing plans available'. Trial keys: 'API calls made from a Trial API key are free. However, trial keys are rate limited and are not permitted to be used for production or commercial purposes.' The rate-limits doc gives Audio Transcriptions a trial limit of '5 req / min'; production limits go through sales.",
      source: "cohere.com/pricing, docs.cohere.com/docs/rate-limits (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "LEADERBOARD CONTEXT: METHOD CHANGED, NEW ENTRANTS (2026-11-02, Hugging Face leaderboard source): the Open ASR Leaderboard's version registry shows the 02-11-2026 version 'Remove Librispeech Clean and Other from default datasets.' and recent additions including 'Add nvidia/Nemotron-3.5-Transcribe-30B-A4B.' and 'Add ibm-granite/granite-speech-5.0-2b.' The 5.42 average WER and #1 rank on this page are the 2026-03-26 snapshot under the older dataset mix. The results dataset requires a login, so Cohere Transcribe's current rank is unconfirmed.",
      source: "huggingface.co/spaces/hf-audio/open_asr_leaderboard (init.py version registry)",
      date: "2026-11-02",
    },
    {
      description: "OWNERSHIP: DEFINITIVE COHERE + ALEPH ALPHA AGREEMENT SIGNED, CLOSING PENDING (2026-09-16, vendor-primary): Cohere announced 'the signing of a definitive business combination agreement with Aleph Alpha'. The combined company will operate globally as Cohere and be 'dual-headquartered in Berlin and in Toronto'; 'The transaction remains subject to final regulatory approvals.' and is 'expected to close later this year'. No Transcribe product change has been announced, and the Hugging Face listing still shows license apache-2.0 (checked 2026-11-05).",
      source: "Cohere blog: Cohere and Aleph Alpha sign agreement (cohere.com/blog/cohere-and-aleph-alpha-sign-agreement), vendor-primary",
      date: "2026-09-16",
    },
    {
      description: "PRODUCT: COHERE TRANSCRIBE ARABIC (2026-07-07, vendor-primary): Cohere's release notes: 'This open-source speech-to-text model is a fine-tune of Cohere Transcribe using Arabic speech data.' Model cohere-transcribe-arabic-07-2026: 2B parameters, conformer encoder-decoder, Apache 2.0. Model card: 'It is optimized for Arabic, Arabic Dialects, English, and Arabic-English code-switched speech.' Available through the V2 Audio Transcriptions API, as open weights on Hugging Face, and on Model Vault. Cohere's docs also list the base model on Microsoft Foundry; 'Cohere Transcribe Arabic is not yet available on other platforms.'",
      source: "docs.cohere.com/changelog, Hugging Face CohereLabs/cohere-transcribe-arabic-07-2026, docs.cohere.com/docs/models (vendor-primary)",
      date: "2026-07-07",
    },
    {
      description: "OWNERSHIP-CHANGE WATCH (2026-04-24): Cohere announced it is 'joining forces' with Aleph Alpha. Vendor blog (cohere.com/blog/cohere-alephalpha-join-forces) frames this as a merger / strategic combination rather than a clean acquisition, backed by Schwarz Group as lead investor with EUR 500M (USD 600M) Series E structured financing. STACKIT (Schwarz Digits' sovereign cloud) will serve as the 'technical backbone of this transatlantic AI initiative', targeting regulated sectors (public sector, finance, defense, energy, manufacturing, telecom, healthcare). Effective date / closing date not specified; deal announced as planned/pending. No immediate product or pricing changes for Cohere Transcribe customers, but a future combined-entity roadmap may reshape model lineup, support guarantees, and pricing -- worth tracking before any new long-term Cohere Model Vault commitment.",
      source: "Cohere blog: Cohere and Aleph Alpha join forces (cohere.com/blog/cohere-alephalpha-join-forces), TechCrunch, CNBC",
      date: "2026-04-24",
    },
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
  bestFor: "Enterprise teams transcribing English, European, and major APAC languages at scale who want open weights they can self-host, fine-tune, or deploy on-prem. The Apache 2.0 license removes a major procurement blocker compared to proprietary ASR, and its accuracy topped the open-model field at launch (Open ASR Leaderboard, 2026-03-26).",
  notFor: "Call-center and meeting-transcription products that need speaker diarization and streaming out of the box -- Grok STT, Deepgram, or AssemblyAI ship those features. Also not ideal for rare-language workloads (sub-Saharan African languages, indigenous languages) where Whisper Large's 99-language coverage is still hard to beat.",
  verdict: "At launch (2026-03-26) Cohere Transcribe topped the Hugging Face Open ASR Leaderboard as an open-weights model, and the Apache 2.0 license makes it a real procurement unlock for enterprises that couldn't self-host Whisper at the accuracy tier they needed. The limitations (no diarization, no timestamps, no streaming, no TTS counterpart) mean it won't replace full ASR platforms for call-center or meeting products -- but for batch enterprise transcription (document pipelines, media indexing, compliance recording) it remains a strong default open-source pick, and the July Arabic fine-tune extends it to Arabic dialects and Arabic-English code-switching. The leaderboard has changed its default datasets and added newer models since launch, so recheck the live rankings before a long-term bet. Pair it with a TTS model on the output side for a complete voice stack.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Hugging Face model card: CohereLabs/cohere-transcribe-03-2026", url: "https://huggingface.co/CohereLabs/cohere-transcribe-03-2026", dateAccessed: "2026-11-05" },
    { name: "Hugging Face model card: CohereLabs/cohere-transcribe-arabic-07-2026", url: "https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026", dateAccessed: "2026-11-05" },
    { name: "Cohere release notes (Transcribe Arabic, 2026-07-07)", url: "https://docs.cohere.com/changelog", dateAccessed: "2026-11-05" },
    { name: "Cohere docs: models overview (Audio)", url: "https://docs.cohere.com/docs/models", dateAccessed: "2026-11-05" },
    { name: "Cohere docs: rate limits", url: "https://docs.cohere.com/docs/rate-limits", dateAccessed: "2026-11-05" },
    { name: "Cohere pricing (Model Vault GPU rates, trial keys)", url: "https://cohere.com/pricing", dateAccessed: "2026-11-05" },
    { name: "Cohere blog: Cohere and Aleph Alpha sign agreement (2026-09-16)", url: "https://cohere.com/blog/cohere-and-aleph-alpha-sign-agreement", dateAccessed: "2026-11-05" },
    { name: "Open ASR Leaderboard version registry (init.py)", url: "https://huggingface.co/spaces/hf-audio/open_asr_leaderboard/raw/main/init.py", dateAccessed: "2026-11-05" },
    { name: "Cohere Labs: Introducing Cohere-transcribe", url: "https://huggingface.co/blog/CohereLabs/cohere-transcribe-03-2026-release", dateAccessed: "2026-04-18" },
    { name: "TechCrunch: Cohere open-source voice transcription", url: "https://techcrunch.com/2026/03/26/cohere-launches-an-open-source-voice-model-specifically-for-transcription/", dateAccessed: "2026-04-18" },
    { name: "MarkTechPost coverage", url: "https://www.marktechpost.com/2026/03/26/cohere-ai-releases-cohere-transcribe-a-sota-automatic-speech-recognition-asr-model-powering-enterprise-speech-intelligence/", dateAccessed: "2026-04-18" },
    { name: "Hugging Face Open ASR Leaderboard", url: "https://huggingface.co/spaces/hf-audio/open_asr_leaderboard", dateAccessed: "2026-11-05" },
  ],
  affiliateUrl: "https://huggingface.co/CohereLabs/cohere-transcribe-03-2026",
  status: "active",
  metaTitle: "Cohere Transcribe Review 2026: Open ASR Leader at Launch, Apache 2.0, 14 Languages",
  metaDescription: "Cohere Transcribe review. Launched Mar 26 2026, 2B params Apache 2.0, #1 on the Open ASR Leaderboard at launch (5.42 WER), 14 languages plus an Arabic fine-tune. Free trial API, self-host, or Model Vault per GPU-hour.",
};
