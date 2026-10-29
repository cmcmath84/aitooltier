import { ToolReview } from "@/lib/types";

export const falcon: ToolReview = {
  slug: "falcon",
  name: "Falcon (TII)",
  tagline: "UAE Technology Innovation Institute's open-weights family, now led by the hybrid Transformer and Mamba Falcon-H1 line (Falcon-H1R 7B for reasoning, Falcon-H1-Arabic, Falcon-H1-Tiny models from 90M parameters) alongside Falcon 3 and Falcon-E. On 2026-10-06 TII announced Falcon-Emirati (7B), Falcon-ASR (1.6B) and Falcon-OCR-Arabic. Licensed under the TII Falcon License (based on Apache 2.0 with modifications, plus an Acceptable Use Policy)",
  category: "ai-local-models",
  url: "https://falconllm.tii.ae",

  scores: {
    easeOfUse: 7,
    outputQuality: 6.5,
    value: 9,
    features: 6,
    overall: 7.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["TII Falcon License (based on Apache 2.0 with modifications, plus an Acceptable Use Policy)", "Royalty-free license to use, modify and redistribute, subject to the Acceptable Use Policy", "Weights on Hugging Face (tiiuae)"],
    },
    {
      plan: "API (Hugging Face Inference, third-party)",
      price: "varies",
      period: "per 1M tokens",
      features: ["Hosted via HF Inference Endpoints", "Together.ai partial support", "Small community of API hosts"],
    },
  ],

  pros: [
    "Falcon-H1R 7B (2026-01-05) brings reasoning to a 7B hybrid Transformer and Mamba model, and TII says it in many cases outperforms larger models such as Phi 4 Reasoning Plus 14B, Qwen3 32B and Nemotron H 47B",
    "Royalty-free TII Falcon License, based on Apache 2.0, though TII adds modifications and an Acceptable Use Policy that every use must follow",
    "Sub-10B sizes run on any consumer GPU or even CPU with acceptable speed",
    "Falcon 3 Mamba variant offers state-space architecture for cheap long-context inference",
    "Backed by UAE government funding -- long-term viability is strong",
    "Strong multilingual performance including Arabic (a gap in most Western open-weights models)",
  ],
  cons: [
    "The 2026-10-06 models (Falcon-Emirati, Falcon-ASR, Falcon-OCR-Arabic) were not on TII's Hugging Face org as of 2026-10-29, and Falcon-Emirati is slated for a Falcon Chat platform rather than a confirmed weights download",
    "Not frontier quality -- Falcon 3 10B is B/C-tier vs. Qwen3, Gemma 4, Llama 4 in the same size class",
    "Smaller community than Llama, Qwen, Mistral -- fewer fine-tunes and tools",
    "Original Falcon 180B (2023) was hyped but quickly obsoleted -- damaged reputation somewhat",
    "Falcon 3 release cadence has slowed since 2025",
    "No flagship frontier-size model in 2026 -- TII is focused on efficient small models",
  ],
  knownIssues: [
    {
      description: "THREE NEW MODELS ANNOUNCED (2026-10-06, TII press release): TII announced Falcon-Emirati, a 7B model for Emirati Arabic 'Built on Falcon-H1-Arabic' that scored 84.83% on the Alyah Emirati benchmark (TII's figure) and 'will be available through a Falcon Chat platform'; Falcon-ASR, a 1.6B model that transcribes Standard and Emirati Arabic, English, French, Spanish and Portuguese; and Falcon-OCR-Arabic for extracting Arabic text from images and documents. None of the three was on the tiiuae Hugging Face org on 2026-10-29, where the newest repos were Falcon3-10B-Base-1.58bit-prequantized (2026-04-30) and Falcon-E-3B-Base-prequantized (2026-04-22).",
      source: "TII press release (Abu Dhabi, 6 October 2026) linked from falconllm.tii.ae + huggingface.co/tiiuae model list, fetched 2026-10-29",
      date: "2026-10-06",
    },
    {
      description: "LICENSE CORRECTION (checked 2026-10-29): earlier versions of this page called Falcon 3 Apache 2.0. The Falcon 3 and Falcon-H1R 7B model cards list license_name falcon-llm-license, and TII's terms state 'This license is, in part, based on the Apache License Version 2.0 ..., with a series of modifications', with every use of the model or its derivatives required to comply with TII's Acceptable Use Policy. Treat it as a custom license and read the terms before shipping a product.",
      source: "Hugging Face model cards (tiiuae/Falcon3-10B-Instruct, tiiuae/Falcon-H1R-7B) + falconllm.tii.ae/falcon-terms-and-conditions.html, fetched 2026-10-29",
      date: "2026-10-29",
    },
    {
      description: "Falcon 3 10B trails similarly-sized Qwen3 and Gemma 4 on most benchmarks -- pick it for licensing/multilingual, not peak quality",
      source: "Artificial Analysis, Hugging Face discussions",
      date: "2026-03",
    },
    {
      description: "Falcon 3 Mamba 7B has limited llama.cpp support vs. standard transformer variants",
      source: "GitHub ggerganov/llama.cpp issues",
      date: "2026-02",
    },
  ],
  bestFor: "Developers who want a small open-weights model for on-device or edge deployment under a royalty-free license (the TII Falcon License, based on Apache 2.0 with modifications and an Acceptable Use Policy), or who need strong Arabic/multilingual support.",
  notFor: "Anyone chasing peak benchmark quality -- Qwen3, Gemma 4, Llama 3.3 all beat Falcon 3 in their respective size classes. Also not ideal for agentic or tool-use workflows.",
  verdict: "Falcon is the niche-but-viable choice in 2026. TII has carved out a sensible position: efficient small models, now led by the hybrid Falcon-H1 line (H1R 7B for reasoning, H1-Arabic, H1-Tiny) next to Falcon 3, with strong Arabic support and Emirati, speech and OCR models announced in October 2026. The license is TII's own Falcon License, built on Apache 2.0 but modified and tied to an Acceptable Use Policy, so do not treat it as plain Apache 2.0. TII is not trying to compete with DeepSeek or Qwen at the frontier, and that's fine. If you need a small model for edge deployment and the Arabic or multilingual mix matters, Falcon is a real option. For most other use cases, Qwen3 or Gemma 4 in the same size class outperform Falcon 3.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "Falcon LLM official site (TII): Falcon-H1, Falcon-E and the Falcon-Emirati, ASR and OCR-Arabic announcement", url: "https://falconllm.tii.ae/", dateAccessed: "2026-10-29" },
    { name: "Hugging Face tiiuae models (newest repo 2026-04-30)", url: "https://huggingface.co/tiiuae", dateAccessed: "2026-10-29" },
    { name: "TII Falcon License terms and Acceptable Use Policy", url: "https://falconllm.tii.ae/falcon-terms-and-conditions.html", dateAccessed: "2026-10-29" },
    { name: "Falcon LLM official site (TII)", dateAccessed: "2026-04-13" },
    { name: "Hugging Face blog: Falcon 3", dateAccessed: "2026-04-13" },
    { name: "Hugging Face tiiuae collection", dateAccessed: "2026-04-13" },
    { name: "Artificial Analysis open-weights leaderboard", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://falconllm.tii.ae",
  status: "active",
  benchmarks: {
    modelName: "Falcon 3 10B",
    scores: [
      { name: "MMLU", score: 73.1, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 42.5, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 73.8, maxScore: 100, unit: "%" },
      { name: "MATH", score: 55.4, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  systemRequirements: [
    {
      variant: "Falcon 3 7B / 10B (dense)",
      min: "4 GB VRAM (Q4)",
      max: "16 GB VRAM FP16",
    },
    {
      variant: "Falcon 3 Mamba 7B (state-space hybrid)",
      min: "4 GB VRAM (Q4)",
      max: "16 GB VRAM FP16",
      notes: "Mamba architecture gives cheap long-context inference",
    },
  ],

  personality: {
    oneLiner: "The TII research release",
    tone: "Workmanlike and neutral. Falcon reads more like an academic reference than a chatbot -- answers are straight, structured, and unremarkable in voice.",
    quirks: "Built as a research artifact from UAE's TII, not a consumer product. Less instruction-tuning polish than Llama 4 or Qwen and a smaller community of fine-tunes, so the base model is effectively what you use.",
  },
  metaTitle: "Falcon Review 2026: TII's Falcon-H1 and Falcon 3 Open-Weights LLMs",
  metaDescription: "Falcon review. UAE Technology Innovation Institute open-weights LLMs: Falcon-H1 hybrids (H1R 7B reasoning, H1-Arabic, H1-Tiny), Falcon 3 7B/10B and the Falcon-Emirati, ASR and OCR-Arabic models announced Oct 6 2026. TII Falcon License, strong Arabic, hardware requirements.",
};
