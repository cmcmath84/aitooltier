import { ToolReview } from "@/lib/types";

export const gemma: ToolReview = {
  slug: "gemma",
  name: "Gemma 4 (Google)",
  tagline: "Google DeepMind's open-weights model family -- multimodal, 256K context, runs on edge devices **EmbeddingGemma 2 (announced 2026-10-06; weights on Hugging Face since 9/14) adds a 740M-parameter Apache 2.0 embedding model built on Gemma 4 that maps text, code, images, video and audio into one 768-dimensional space, with an 8K context, Matryoshka truncation down to 128 dimensions and about 191 MB of RAM for text-only use on a Pixel 11 Pro.**",
  category: "ai-local-models",
  url: "https://deepmind.google/models/gemma/gemma-4/",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 10,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Self-hosted", price: "$0", features: ["Apache 2.0 license", "Free download from Hugging Face/Kaggle/Ollama", "Run on your own hardware"] },
    { plan: "API (OpenRouter, Gemma 4 31B)", price: "$0.14-0.40", period: "per 1M tokens", features: ["Hosted inference", "$0.14 input / $0.40 output", "No infrastructure setup"] },
    { plan: "Google AI Studio", price: "$0", features: ["Free tier for testing", "Web playground access"] },
  ],

  pros: [
    "Apache 2.0 license -- truly permissive, you can use it commercially without strings attached",
    "Multimodal: handles text + image input (audio on smaller models), generates text output",
    "256K token context window -- larger than most open models",
    "140+ language support -- one of the strongest multilingual open models available",
    "Four sizes (E2B, E4B, 26B MoE, 31B Dense) cover edge devices to data centers",
    "31B Dense scores 89% on AIME 2026 and 84% on GPQA Diamond -- competitive with frontier closed models",
    "31B Dense currently ranks #3 among open models on the LMArena text leaderboard (26B MoE ranks #6) -- genuinely competitive with the top Chinese and Meta open-weight families",
    "26B MoE activates only 3.8B params during inference for fast tokens-per-second",
  ],
  cons: [
    "Requires technical setup unless you use a hosted API provider",
    "Quality still trails the very best closed models (GPT-6 Astra, Claude Opus 5.5, Gemini 3.8) on hardest reasoning tasks",
    "No native chat UI from Google -- you're either coding against an API or using a third-party frontend",
    "Smaller community than Llama -- fewer fine-tunes and tooling integrations exist",
  ],
  knownIssues: [
    {
      description: "EMBEDDINGGEMMA 2 -- A 740M OPEN MULTIMODAL EMBEDDING MODEL ON THE GEMMA 4 ARCHITECTURE (2026-10-06 blog; Hugging Face repo created 2026-09-14; vendor-primary): Google announced **EmbeddingGemma 2**, 'the most capable model for on-device multimodal embeddings', which maps 'text (incl. code), images, video, and audio inputs -- and combinations thereof -- into a single, unified 768-dimensional vector space'. **Specs (model card):** 740M total parameters = a 270M text model (130M transformer + 140M embedder) plus selectively loadable vision (170M) and audio (300M) encoders; **Apache 2.0** (the card states Apache 2.0 while linking Google's Gemma 4 license page); 100+ languages; **8K token context** ('4x larger than EmbeddingGemma 1', enough for about 5.5 minutes of audio, 29 images or 58 video frames); **Matryoshka Representation Learning** lets you truncate 768-d vectors to 512, 256 or 128 for up to 6x storage reduction; task-steered instruction prefixes. **On-device footprint:** with quantization on a Pixel 11 Pro, about 191 MB of active RAM for text-only weights and about 567 MB for the full multimodal model. **Vendor benchmarks:** MTEB Code 78.68 (from 68.76 for EmbeddingGemma 1, a 9.92-point gain), 'leading scores among sub-1B multimodal embedders' on MTEB Code and MAEB, 'matching or outperforming many larger models'. Because it 'shares its text tokenizer and audio encoder' with Gemma 4, Google pitches a combined on-device RAG stack with a lower total memory footprint. Context: the first EmbeddingGemma passed 20 million downloads. **Timing note:** the Hugging Face repo google/embeddinggemma-2 was created 2026-09-14, three weeks before the blog post -- weights before write-up, the pattern this site has seen with Qwen. Not a Gemma 4 LLM revision; recorded here because this is the Gemma family page and the model is the retrieval half of Google's on-device open stack.",
      source: "Google (blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/, root RSS pubDate Tue, 06 Oct 2026, on-page 'Oct 06, 2026'); Hugging Face model card (huggingface.co/google/embeddinggemma-2/raw/main/README.md -- 'license: apache-2.0', 740M, 768-d, 8K; API createdAt 2026-09-14) -- both fetched 2026-10-06 via curl",
      date: "2026-10-06",
    },
    {
      description: "2026-04-18 BF16 stability refresh -- Google re-released Gemma 4 multimodal checkpoints in BF16 format focused on truthfulness, JSON / tool-call formatting, long-context extraction reliability, and loop resistance. Not a new model version; a quality refresh that fixes specific failure modes developers were hitting in production. If you pulled weights before 2026-04-18, consider re-downloading for the new checkpoints",
      source: "Google DeepMind Gemma page, Hugging Face",
      date: "2026-04",
    },
    {
      description: "Gemma 4 launched April 2, 2026 with improved licensing -- earlier Gemma versions had restrictive use clauses that confused developers",
      source: "The Register, Hugging Face",
      date: "2026-04",
    },
    {
      description: "Function calling support is new -- some users report inconsistent tool-use behavior compared to Llama 3 or Mistral",
      source: "Hugging Face discussions",
      date: "2026-04",
    },
  ],
  bestFor: "Developers and businesses who need a permissively licensed multimodal LLM they can self-host or fine-tune. Especially good for multilingual use cases and on-device deployment.",
  notFor: "Non-technical users who just want to chat with an AI -- there's no consumer-facing app. Use Gemini if you want a polished chat experience.",
  verdict: "Gemma 4 is Google's answer to the open-weights race against Meta's Llama and the wave of strong Chinese open models. The Apache 2.0 license is a big deal -- it removes the legal friction that made earlier Gemma adoption awkward. The 31B Dense model is genuinely competitive with frontier closed models on benchmarks while costing $0.14/M input via API. If you're building a product on open-weights LLMs and you need multimodal + multilingual + permissive licensing, Gemma 4 is now a top choice.",

  lastReviewedDate: "2026-10-06",
  dataSources: [
    { name: "Google: EmbeddingGemma 2 -- an open, lightweight multimodal embedding model (2026-10-06)", url: "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/", dateAccessed: "2026-10-06" },
    { name: "Hugging Face: google/embeddinggemma-2 model card -- Apache 2.0, 740M, 768-d, 8K context (repo created 2026-09-14)", url: "https://huggingface.co/google/embeddinggemma-2", dateAccessed: "2026-10-06" },
    { name: "Google DeepMind Gemma 4 page", dateAccessed: "2026-04-08" },
    { name: "Google blog: Gemma 4 launch", dateAccessed: "2026-04-08" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-04-08" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-08" },
    { name: "The Register coverage", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://deepmind.google/models/gemma/gemma-4/",
  status: "active",
  benchmarks: {
    modelName: "Gemma 4 31B",
    scores: [
      { name: "MMLU", score: 83.0, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 84.3, maxScore: 100, unit: "%" },
      { name: "AIME 2026", score: 89.2, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 85.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  systemRequirements: [
    {
      variant: "Gemma 4 E2B / E4B (edge-class)",
      min: "2-3 GB VRAM Q4 (runs on phones and laptops)",
      max: "8-12 GB VRAM FP16",
    },
    {
      variant: "Gemma 4 26B MoE",
      min: "8 GB VRAM (Q4)",
      max: "32 GB VRAM FP16",
    },
    {
      variant: "Gemma 4 31B Dense (flagship)",
      min: "12 GB VRAM Q4 (RTX 4070)",
      max: "1× A100 40 GB FP16",
    },
  ],

  personality: {
    oneLiner: "The compact Google cousin",
    tone: "Similar corporate-Google tone as Gemini but smaller and less polished. Gemma's chat replies are short, cautious, and structured -- closer to a careful intern than a peer.",
    quirks: "Inherits a Gemini-like safety bias, so refusals appear on prompts Mistral or DeepSeek would answer. Best used as a cheap local fallback or on-device model, not as a personality play.",
  },
  metaTitle: "Gemma 4 Review 2026: Google's Open-Weights Multimodal LLM",
  metaDescription: "Gemma 4 review. Google DeepMind's open-weights LLM, Apache 2.0, 256K context, 140+ languages, four model sizes -- plus EmbeddingGemma 2 (Oct 2026), a 740M Apache 2.0 multimodal embedding model for text, code, images, video and audio on-device. Scores, pricing, comparison.",
};
