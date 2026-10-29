import { ToolReview } from "@/lib/types";

export const mimo: ToolReview = {
  slug: "mimo",
  name: "MiMo (Xiaomi)",
  tagline: "Xiaomi's MiMo family. MiMo-V2.6 (2026-09-22) open-sources Pro (1.02T total / 42B active MoE) and Flash (309B / 15B active) under MIT, both natively omnimodal (text, image, video, audio) with 1M context. API prices unchanged from V2.5: Pro $0.435 input / $0.87 output per 1M tokens, Flash $0.14 / $0.28. MiMo-V2.5 TTS and open-source ASR round out the voice stack",
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
      plan: "API (MiMo-V2.6-Pro)",
      price: "$0.435 / $0.87",
      period: "per 1M tokens (input / output)",
      features: [
        "1.02T total / 42B active MoE; text, image, video and audio input; 1M context",
        "Cache-hit input $0.0036 per 1M tokens; cache writes free for a limited time",
        "One price across the full 1M context in Xiaomi's V2.6 price table",
        "Pro-UltraSpeed mode: up to 20x output speed at $4.35 input / $8.7 output per 1M tokens",
        "OpenAI- and Anthropic-API-compatible endpoints (the standard pattern Chinese frontier models adopted in 2025-26)",
        "Token Plan available for predictable high-volume use",
      ],
    },
    {
      plan: "API (MiMo-V2.6-Flash)",
      price: "$0.14 / $0.28",
      period: "per 1M tokens (input / output)",
      features: [
        "309B total / 15B active MoE with the same omnimodal input and 1M context as Pro",
        "Cache-hit input $0.0028 per 1M tokens",
        "About a third of Pro's price; vendor-reported DeepSWE v1.1 67.9 vs 71.9 for Pro",
      ],
    },
    {
      plan: "Self-hosted MiMo-V2.6 (MIT open weights)",
      price: "$0 + GPU costs",
      features: [
        "Pro and Flash weights on Hugging Face and ModelScope, as RL and MOPD checkpoints",
        "MOPD checkpoints (2026-09-27) mitigate tool-call repetition in agent loops",
        "MiMo-V2.6-Distill-Qwen-9B: a 9B SFT checkpoint on Qwen3.5-9B for agentic RL research",
        "Technical report, training environments and RL code released",
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
        "Open-source under the MIT licence (Hugging Face, 2026-04-23)",
        "English + Mandarin Chinese + major Chinese dialects (Cantonese, Shanghainese, etc.)",
        "Self-hostable for privacy-sensitive transcription workloads",
      ],
    },
  ],

  pros: [
    "Open weights at the flagship tier: MiMo-V2.6-Pro and Flash ship under MIT on Hugging Face, with the technical report, training environments and RL code also released",
    "Vendor-reported agent scores put V2.6-Pro close to closed frontier models: DeepSWE v1.1 71.9, Terminal Bench 2.1 89.9, OSWorld-Verified 82.0 and Toolathlon-Verified 76.9, against 74.0, 89.1, 83.4 and 80.6 for Claude Opus 5 in the same table",
    "Full voice pipeline shipped together: a frontier reasoning model (Pro), a multimodal base, a TTS family, and an open-source ASR -- Xiaomi positions MiMo-V2.5 as 'voice for the agent era,' which is rare in 2026 (most vendors ship one of these and integrate the others later)",
    "Native omnimodal input in MiMo-V2.5-Pro and both V2.6 models is the differentiator: text, image, video and audio in one model, not bolted on after the fact. Closer to the Gemini 2.5 / GPT-5.5 design than to text-first models with separate vision adapters",
    "Removing the surcharge for the full 1M-context tier at launch is a real value move -- Alibaba, Anthropic, and OpenAI all charge meaningfully more per token for full-context windows. Xiaomi flattening this lowers the barrier to long-document and agentic workloads",
    "Open-source MiMo-V2.5-ASR is the practical takeaway for privacy-sensitive teams. Cohere Transcribe + Whisper had been the open-ASR options through 2025; MiMo-V2.5-ASR adds a Chinese-dialect-strong third entry",
    "Xiaomi cites an Artificial Analysis Intelligence Index score of 46.32 for MiMo-V2.6-Pro (v4.3, September 2026), which it calls the highest of any open-source model",
  ],
  cons: [
    "Xiaomi's own table shows clear gaps on harder terminal and exploit tasks: Terminal Bench 4.0 34.9 and ExploitBench 47.9 for V2.6-Pro, against 49.0 and 70.0 for Claude Opus 5",
    "Self-hosting Pro needs a large multi-GPU setup: Xiaomi's vLLM example uses 8-way tensor parallel and its SGLang example runs 2 nodes at 16-way. Flash is lighter, with 4-way (vLLM) and 8-way (SGLang) tensor-parallel examples. The cards do not state GPU models or VRAM",
    "Most V2.6 benchmark numbers come from Xiaomi, and several are in-house suites (MiMo Code Bench, MiMo Visual Coding, MiMo Cyber Bench), which warrants the usual self-reporting discount",
    "PRC content filters apply on Pro and Multimodal -- the same regulated-topic refusals that Hy3, DeepSeek, and Qwen exhibit. ASR is less affected by content filtering since it's transcription, not generation",
    "English creative-writing polish lags Western frontier models -- pick MiMo for Chinese-language work, multimodal reasoning, or voice pipelines first, English prose second",
    "Geo-availability: API access for non-Chinese developers may require an Xiaomi developer account and KYC; check the docs before assuming OpenAI-style account-creation friction",
  ],
  knownIssues: [
    {
      description: "VERSION BUMP (2026-09-22): Xiaomi released and open-sourced the MiMo-V2.6 series under MIT (Hugging Face repos created 2026-09-21): Pro (1.02T total / 42B active MoE) and Flash (309B / 15B active), both natively omnimodal with 1M context. API pricing is unchanged from V2.5: Pro $0.435 input / $0.87 output, Flash $0.14 / $0.28 per 1M tokens, plus Pro-UltraSpeed at up to 20x output speed for $4.35 / $8.7. MiMo Desktop left early access with both models built in. Correction: this page previously called MiMo-V2.5-Pro API-only, but its weights have been on Hugging Face under MIT since 2026-04-27",
      source: "Xiaomi MiMo blog (mimo.xiaomi.com/mimo-v2-6), Hugging Face XiaomiMiMo model cards and model list",
      date: "2026-09-22",
    },
    {
      description: "Tool-call repetition: Xiaomi says that after the V2.6 release, repeated identical or near-identical tool calls became one of the most noticeable issues in agentic use, consuming time and context without progress. The MiMo-V2.6-Pro-MOPD and Flash-MOPD checkpoints (2026-09-27) mitigate it, so self-hosters running agents should use them over the RL checkpoints",
      source: "Hugging Face (XiaomiMiMo/MiMo-V2.6-Pro-MOPD card)",
      date: "2026-09-27",
    },
    {
      description: "OLDER SERIES RETIRED (2026-06-30): Xiaomi fully deprecated the prior **MiMo-V2 series** (V2-Pro / V2-Omni / V2-Flash) on 2026-06-30 -- migrate to the MiMo-V2.5 family this page covers, which is the designated replacement. If you pinned a `mimo-v2-*` model id, it's now failing; the V2.5 line is current. (Reinforces V2.5 as the live family; no change to our review scope.)",
      source: "Xiaomi MiMo docs (mimo.mi.com/docs updates), 36Kr, Hacker News",
      date: "2026-06-30",
    },
    {
      description: "NEW PRODUCT (2026-06-11): **MiMo Code v0.1.0** -- Xiaomi's open-source terminal AI coding agent (MIT license, TypeScript, built on OpenCode tech), 4,300+ GitHub stars on launch day and a top Hacker News story (357 points). MiMo-V2.5 model built in FREE; also supports DeepSeek and Kimi models. Differentiators: persistent memory system (project memory + session checkpoints + task progress), a '/dream' weekly self-maintenance agent, Compose mode (idea → design/plan/code/test/review pipeline), voice control, and curl/npm install (`mimo` command, Windows via npm). Vendor benchmark claims (UNVERIFIED third-party): SWE-Bench Pro 62% vs Claude Code 57%, Terminal-Bench 73% vs 68%. It's a v0.1.0 -- expect churn -- but a free, open-source, frontier-backed CLI agent is direct pressure on Claude Code / Codex CLI / Grok Build pricing. Standalone review page candidate once it stabilizes past 0.x",
      source: "GitHub (github.com/XiaomiMiMo/MiMo-Code), mimo.xiaomi.com/mimocode, Hacker News, Gizmochina",
      date: "2026-06-11",
    },
    {
      description: "MIMO CODE DAY-2 CAVEATS (2026-06-12, press analysis): the launch benchmarks deserve skepticism -- they're self-reported, and the 'beats Claude Code' comparison pits MiMo Code + MiMo-V2.5 against Claude Code running **Sonnet 4.6**, not the flagship models. VentureBeat's hands-on found genuine strength on ultra-long 200+ step tasks. Privacy note: the 'free for a limited time' model routes your code through Xiaomi servers -- a data-residency consideration for commercial codebases. v0.1.0 remains the only release (no hotfixes yet)",
      source: "TechTimes (2026-06-12), VentureBeat (2026-06-11), GitHub releases",
      date: "2026-06-12",
    },
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
    "Teams building voice-first agentic products that need a coordinated reasoning + TTS + ASR stack from a single vendor. Also Chinese-market builders and developers who need strong multimodal (vision + audio) inputs in one API call without stitching three providers together. MiMo-V2.6-Pro's single price across 1M context suits long-document agentic workloads, and its MIT open weights suit teams that want to self-host a flagship-class omnimodal model.",
  notFor:
    "English-first creative writing (Claude / GPT-5.5 still lead), regulated geographies that block Chinese AI APIs, or teams whose only voice need is English TTS (ElevenLabs is more mature). Also not the right fit if you need independent benchmark verification, since most V2.6 numbers are Xiaomi's own.",
  verdict:
    "MiMo is Xiaomi treating voice as a first-class agentic surface, not an after-the-fact integration. Shipping V2.5 Pro + Multimodal + TTS + open-source ASR together -- with native vision and audio reasoning baked into the flagship and the 1M-context surcharge removed -- is the most coordinated voice-stack launch from a Chinese frontier vendor in 2026. MiMo-V2.6 (September 2026) adds MIT open weights for Pro and Flash at unchanged API prices, and Xiaomi's own tables put V2.6-Pro near Claude Opus 5 on several agent benchmarks while trailing on Terminal Bench 4.0 and exploit tasks. Treat MiMo as a serious option for voice-pipeline builds, multimodal Chinese-language workloads, low-cost agentic API use, self-hosted open-weight deployments, and dialect-strong ASR. For text-only English-first work, Claude / GPT / Gemini still lead and DeepSeek is still the cheapest text-first frontier alternative.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "Xiaomi MiMo blog: Introducing MiMo-V2.6 series (2026-09-22)", url: "https://mimo.xiaomi.com/mimo-v2-6", dateAccessed: "2026-10-29" },
    { name: "Hugging Face: XiaomiMiMo/MiMo-V2.6-Pro-RL", url: "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL", dateAccessed: "2026-10-29" },
    { name: "Hugging Face: XiaomiMiMo/MiMo-V2.6-Flash-RL", url: "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL", dateAccessed: "2026-10-29" },
    { name: "Hugging Face: XiaomiMiMo/MiMo-V2.6-Pro-MOPD", url: "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD", dateAccessed: "2026-10-29" },
    { name: "Hugging Face: XiaomiMiMo models", url: "https://huggingface.co/XiaomiMiMo", dateAccessed: "2026-10-29" },
    { name: "Xiaomi MiMo docs: MiMo-V2 series deprecation (2026-06-30)", url: "https://mimo.mi.com/docs/en-US/updates/model", dateAccessed: "2026-07-04" },
    { name: "Xiaomi: MiMo-V2.5-Pro product page", url: "https://mimo.xiaomi.com/mimo-v2-5-pro", dateAccessed: "2026-04-25" },
    { name: "Gizmochina: Xiaomi introduces MiMo-V2.5 TTS and ASR full voice pipeline", url: "https://www.gizmochina.com/2026/04/24/xiaomi-introduces-mimo-v2-5-tts-and-asr-as-a-full-voice-pipeline-for-the-agent-era/", dateAccessed: "2026-04-25" },
    { name: "Artificial Analysis: MiMo-V2.5-Pro listing", url: "https://artificialanalysis.ai/models/mimo-v2-5-pro", dateAccessed: "2026-04-25" },
    { name: "The Asian Mirror: Xiaomi MiMo V2.5 voice AI launch", url: "https://theasianmirror.com/latest/79214/xiaomi-mimo-v2-5-voice-ai-tts-asr-launch/", dateAccessed: "2026-04-25" },
  ],
  affiliateUrl: "https://mimo.xiaomi.com",
  status: "active",

  systemRequirements: [
    {
      variant: "MiMo-V2.6-Pro (1.02T total / 42B active MoE)",
      min: "vLLM example: 8-way tensor parallel",
      max: "SGLang example: 2 nodes, 16-way tensor parallel",
      notes: "MIT open weights (RL and MOPD checkpoints). Text, image, video and audio input, 1M context. The card does not state GPU model or VRAM",
    },
    {
      variant: "MiMo-V2.6-Flash (309B total / 15B active MoE)",
      min: "vLLM example: 4-way tensor parallel",
      max: "SGLang example: 8-way tensor parallel",
      notes: "MIT open weights (RL and MOPD checkpoints). The card does not state GPU model or VRAM",
    },
    {
      variant: "MiMo-V2.5-ASR (open-source)",
      min: "8 GB VRAM (RTX 3060 tier) for English + standard Mandarin",
      max: "1× A100 40 GB for full dialect coverage at production throughput",
      notes: "MIT licence on Hugging Face. Self-hostable for privacy-sensitive transcription. Strong specifically on Chinese dialects (Cantonese, Shanghainese)",
    },
  ],

  personality: {
    oneLiner: "Xiaomi's voice-first agentic stack",
    tone: "Direct, multimodal-aware. MiMo-V2.5-Pro is comfortable mixing image, audio, and text inputs in a single turn -- it's been trained for that, not retrofitted to it.",
    quirks: "Voice-pipeline orientation makes MiMo unusually expressive when audio is in the loop -- TTS variants (VoiceDesign, VoiceClone) and ASR are surfaced as first-class products, which most Chinese frontier vendors haven't done. PRC content filters apply on chat surfaces.",
  },
  metaTitle: "Xiaomi MiMo-V2.6 Review 2026: Open-Weight Omnimodal MoE, 1M Context, Voice Stack",
  metaDescription: "Xiaomi MiMo-V2.6 review. Pro (1.02T/42B MoE) and Flash (309B/15B) with MIT open weights, native text, image, video and audio, 1M context. API from $0.14/$0.28 per 1M tokens. Plus V2.5 TTS and open-source ASR.",
};
