import { ToolReview } from "@/lib/types";

export const gptOss: ToolReview = {
  slug: "gpt-oss",
  name: "gpt-oss (OpenAI)",
  tagline: "OpenAI's FIRST open-weight models -- gpt-oss-120b (runs within 80GB of memory, near parity with o4-mini on core reasoning) and gpt-oss-20b (runs on 16GB edge devices). Apache 2.0, weights natively quantized in MXFP4. Launched 2025-08-05; gpt-oss-safeguard (2025-10-29 research preview) adds policy-following safety classifiers. Still no gpt-oss successor as of November 2026",
  category: "ai-local-models",
  url: "https://openai.com/open-models/",

  scores: {
    easeOfUse: 7,
    outputQuality: 8.5,
    value: 10,
    features: 7,
    overall: 8.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free, Apache 2.0)",
      price: "$0",
      features: [
        "First OpenAI open-weight release ever",
        "Weights on Hugging Face + Ollama + llama.cpp + vLLM",
        "Apache 2.0 license -- unrestricted commercial use",
        "No telemetry, no phone-home, runs fully offline",
      ],
    },
    {
      plan: "API (OpenRouter / Together)",
      price: "$0.15",
      period: "per 1M input tokens (120b tier)",
      features: [
        "gpt-oss-120b: $0.15 in / $0.60 out (OpenRouter list price; Together serverless lists the same)",
        "gpt-oss-20b: $0.018 in / $0.09 out (OpenRouter list price)",
        "gpt-oss-safeguard-20b: $0.075 in / $0.30 out (OpenRouter list price)",
        "Competitive per-token pricing across hosted providers",
      ],
    },
  ],

  pros: [
    "First-ever OpenAI open-weight release -- the brand halo alone makes this a mandatory evaluation for anyone working with open weights. The fact that OpenAI shipped it (after years of 'open-ness' debates) is itself historically significant",
    "gpt-oss-120b achieves near-parity with o4-mini on core reasoning benchmarks while running within 80GB of memory (per OpenAI) -- one of the best single-GPU frontier reasoning options available in the open-weight category",
    "gpt-oss-20b needs only 16GB of memory (runs on consumer RTX 4080 / Apple Silicon / similar) while delivering results similar to o3-mini on common benchmarks per OpenAI -- a uniquely strong edge-deployable reasoning model",
    "Apache 2.0 license with no 'acceptable use policy' carve-outs -- genuinely permissive, unlike Llama's terms. Commercial deployments face zero licensing friction",
  ],
  cons: [
    "Released 2025-08-05 and not refreshed since -- by April 2026 DeepSeek V3.2, Qwen 3.5/3.6, GLM-5.1, and Granite 4 had already shipped later iterations. gpt-oss is still excellent but is no longer front-page hot",
    "No multimodal inputs -- text only. For vision or audio, pair with Qwen3.5-Omni, Llama 4 multimodal, or a separate vision model",
    "OpenAI has not published a follow-up chat/reasoning model (no gpt-oss-v2 or similar as of 2026-11-02 -- the newest gpt-oss repos on Hugging Face are the 2025 safeguard pair). Its only later open-weight release is OpenAI Privacy Filter (2026-04-22, Apache 2.0, 1.5B total / 50M active), a PII token classifier rather than a chat model",
    "gpt-oss-safeguard (2025-10-29 research preview, 120b and 20b) is not a general-purpose variant -- it is fine-tuned to classify content against a developer-supplied policy at inference time. For reasoning, chat, or agent work, use the base gpt-oss models",
  ],
  knownIssues: [
    {
      description: "Initial community quantizations (Q4 and below) showed degradation on reasoning tasks versus higher-precision builds -- the MoE routing layers are sensitive to quantization. Q5/Q6 is the practical sweet spot for gpt-oss-120b community GGUF builds. Note that OpenAI ships the official weights natively quantized in MXFP4, so this applies to community re-quantizations, not the official release",
      source: "Reddit r/LocalLLaMA, Hugging Face discussions; OpenAI: Introducing gpt-oss (MXFP4)",
      date: "2025-09",
    },
    {
      description: "gpt-oss uses the o200k_harmony tokenizer, which OpenAI describes as a superset of the tokenizer used for o4-mini and GPT-4o and open-sourced alongside the models. Prompts should follow OpenAI's harmony response format (OpenAI publishes a harmony guide on the open-models hub)",
      source: "OpenAI: Introducing gpt-oss; OpenAI open-models hub",
      date: "2025-08",
    },
    {
      description: "Date correction (2026-11-02): earlier versions of this page said gpt-oss-safeguard shipped in 2026. OpenAI released it on 2025-10-29 as a research preview of open-weight reasoning models for safety classification (gpt-oss-safeguard-120b and gpt-oss-safeguard-20b), fine-tuned from gpt-oss and released under the same Apache 2.0 license",
      source: "OpenAI: Introducing gpt-oss-safeguard; OpenAI news RSS",
      date: "2025-10-29",
    },
  ],
  bestFor: "Developers who want OpenAI-brand open-weight reasoning models for self-hosting or fine-tuning. Particularly good for single-GPU deployments (gpt-oss-120b within 80GB) or edge-device reasoning (gpt-oss-20b on 16GB consumer GPUs / Apple Silicon). Also good as a reliable baseline when comparing newer open-weight releases.",
  notFor: "Anyone needing absolute bleeding-edge quality (DeepSeek V3.2 / V4, GLM-5.1, Qwen 3.6 were all stronger on most benchmarks by April 2026). Also not for multimodal use cases -- gpt-oss is text-only.",
  verdict: "gpt-oss remains historically important as the first OpenAI open-weight release (August 2025), and the 120b model within 80GB of memory is still one of the cleanest single-card frontier-reasoning options in the open-weight category. It is no longer the bleeding edge -- DeepSeek, GLM, and Qwen have all shipped stronger models -- and OpenAI has not refreshed it, but gpt-oss's combination of OpenAI brand + genuine Apache 2.0 + single-GPU 120b sizing makes it a durable default in any open-weight evaluation matrix. Worth adding to any shortlist; probably not first pick unless the OpenAI brand association matters for your stack.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "OpenAI: Introducing gpt-oss", url: "https://openai.com/index/introducing-gpt-oss/", dateAccessed: "2026-11-02" },
    { name: "OpenAI Open Models hub", url: "https://openai.com/open-models/", dateAccessed: "2026-11-02" },
    { name: "OpenAI: Introducing gpt-oss-safeguard (2025-10-29)", url: "https://openai.com/index/introducing-gpt-oss-safeguard/", dateAccessed: "2026-11-02" },
    { name: "OpenAI news RSS (gpt-oss, gpt-oss-safeguard, Privacy Filter dates)", url: "https://openai.com/news/rss.xml", dateAccessed: "2026-11-02" },
    { name: "Hugging Face: openai/privacy-filter model card", url: "https://huggingface.co/openai/privacy-filter/raw/main/README.md", dateAccessed: "2026-11-02" },
    { name: "OpenRouter models API (gpt-oss list prices)", url: "https://openrouter.ai/api/v1/models", dateAccessed: "2026-11-02" },
    { name: "Together AI pricing", url: "https://www.together.ai/pricing", dateAccessed: "2026-11-02" },
    { name: "Hugging Face: Welcome OpenAI gpt-oss", url: "https://huggingface.co/blog/welcome-openai-gpt-oss", dateAccessed: "2026-11-02" },
  ],
  affiliateUrl: "https://openai.com/open-models/",
  status: "active",
  systemRequirements: [
    {
      variant: "gpt-oss-120b (flagship reasoning)",
      min: "1× 80 GB GPU (H100 / A100) -- weights ship natively in MXFP4",
      max: "2× H100 for production serving",
      notes: "Apache 2.0 -- unrestricted commercial use. OpenAI: runs within 80GB of memory",
    },
    {
      variant: "gpt-oss-20b (edge reasoning)",
      min: "16 GB VRAM (RTX 4080) or 32 GB Apple Silicon unified memory",
      max: "1× A100 40 GB",
      notes: "OpenAI: requires only 16GB of memory; runs locally on a decent consumer setup",
    },
    {
      variant: "gpt-oss-safeguard (2025-10-29 research preview, 120b / 20b)",
      min: "Same as base (120b or 20b)",
      max: "Same as base",
      notes: "Safety classifier fine-tuned from gpt-oss: reads a developer-supplied policy at inference time and labels content against it. Not a general chat model",
    },
  ],
  metaTitle: "gpt-oss Review 2026: OpenAI's First-Ever Open-Weight Models",
  metaDescription: "gpt-oss review. OpenAI's first open-weight release (Aug 2025). gpt-oss-120b near o4-mini within 80GB, gpt-oss-20b runs in 16GB. Apache 2.0. Safeguard classifier preview Oct 2025.",
};
