import { ToolReview } from "@/lib/types";

export const gptOss: ToolReview = {
  slug: "gpt-oss",
  name: "gpt-oss (OpenAI)",
  tagline: "OpenAI's FIRST open-weight models -- gpt-oss-120b (single 80GB GPU, near parity with o4-mini on reasoning) and gpt-oss-20b (runs on 16GB edge devices). Apache 2.0. Launched 2025-08-05. gpt-oss-safeguard ships in 2026 as the safety-tuned variant",
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
      plan: "API (OpenRouter / Together / Fireworks)",
      price: "$0.15",
      period: "per 1M input tokens (120b tier)",
      features: [
        "gpt-oss-120b: ~$0.15 in / $0.60 out",
        "gpt-oss-20b: ~$0.07 in / $0.30 out",
        "Competitive per-token pricing across hosted providers",
      ],
    },
  ],

  pros: [
    "First-ever OpenAI open-weight release -- the brand halo alone makes this a mandatory evaluation for anyone working with open weights. The fact that OpenAI shipped it (after years of 'open-ness' debates) is itself historically significant",
    "gpt-oss-120b approaches o4-mini on reasoning benchmarks while running on a single 80GB GPU -- one of the best single-GPU frontier reasoning options available in the open-weight category",
    "gpt-oss-20b hits 16GB VRAM requirements (runs on consumer RTX 4080 / Apple Silicon M3 Ultra / similar) while roughly matching o3-mini -- a uniquely strong edge-deployable reasoning model",
    "Apache 2.0 license with no 'acceptable use policy' carve-outs -- genuinely permissive, unlike Llama's terms. Commercial deployments face zero licensing friction",
  ],
  cons: [
    "Released 2025-08-05, so by April 2026 it is not the newest open-weight option -- DeepSeek V3.2, Qwen 3.5/3.6, GLM-5.1, and Granite 4 have all shipped later iterations. gpt-oss is still excellent but is no longer front-page hot",
    "No multimodal inputs -- text only. For vision or audio, pair with Qwen3.5-Omni, Llama 4 multimodal, or a separate vision model",
    "OpenAI has not published a follow-up to gpt-oss (no gpt-oss-v2 or similar as of April 2026). Single release, unclear if more is coming -- could be a one-time brand move rather than ongoing commitment",
    "gpt-oss-safeguard (the safety-tuned variant, 2026 release) is narrower in capability than the base models -- for research / red-team / full-capability work, use the original releases",
  ],
  knownIssues: [
    {
      description: "Initial community quantizations (Q4 and below) showed degradation on reasoning tasks versus FP16 -- the MoE routing layers are sensitive to quantization. Q5/Q6 is the practical sweet spot for gpt-oss-120b",
      source: "Reddit r/LocalLLaMA, Hugging Face discussions",
      date: "2025-09",
    },
    {
      description: "gpt-oss did not make the transition to OpenAI's GPT-5.x tokenizer -- still uses the older tokenizer from the GPT-4 era. Compatible with existing tooling but slightly less token-efficient than frontier OpenAI API models",
      source: "OpenAI open-models docs",
      date: "2025-08",
    },
  ],
  bestFor: "Developers who want OpenAI-brand open-weight reasoning models for self-hosting or fine-tuning. Particularly good for single-GPU deployments (gpt-oss-120b on one 80GB card) or edge-device reasoning (gpt-oss-20b on 16GB consumer GPUs / Apple Silicon). Also good as a reliable baseline when comparing newer open-weight releases.",
  notFor: "Anyone needing absolute bleeding-edge quality (DeepSeek V3.2 / V4, GLM-5.1, Qwen 3.6 are all stronger on most benchmarks as of April 2026). Also not for multimodal use cases -- gpt-oss is text-only.",
  verdict: "gpt-oss remains historically important as the first OpenAI open-weight release (August 2025), and the 120b model on a single 80GB GPU is still one of the cleanest single-card frontier-reasoning options in the open-weight category. By April 2026 it is no longer the bleeding edge -- DeepSeek V3.2, GLM-5.1, and Qwen 3.6 have all shipped stronger models -- but gpt-oss's combination of OpenAI brand + genuine Apache 2.0 + single-GPU 120b sizing makes it a durable default in any open-weight evaluation matrix. Worth adding to any shortlist; probably not first pick unless the OpenAI brand association matters for your stack.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "OpenAI: Introducing gpt-oss", url: "https://openai.com/index/introducing-gpt-oss/", dateAccessed: "2026-04-17" },
    { name: "OpenAI Open Models hub", url: "https://openai.com/open-models/", dateAccessed: "2026-04-17" },
    { name: "Hugging Face: Welcome OpenAI gpt-oss", url: "https://huggingface.co/blog/welcome-openai-gpt-oss", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openai.com/open-models/",
  status: "active",
  systemRequirements: [
    {
      variant: "gpt-oss-120b (flagship reasoning)",
      min: "1× 80 GB GPU (H100 / A100 FP16)",
      max: "2× H100 for production serving",
      notes: "Apache 2.0 -- unrestricted commercial use",
    },
    {
      variant: "gpt-oss-20b (edge reasoning)",
      min: "16 GB VRAM (RTX 4080) or 32 GB Apple Silicon unified memory",
      max: "1× A100 40 GB FP16",
      notes: "Runs locally on a decent consumer setup; Apple M3 Ultra handles it well",
    },
    {
      variant: "gpt-oss-safeguard (2026 safety-tuned variant)",
      min: "Same as base (120b or 20b)",
      max: "Same as base",
      notes: "Narrower capability than base; tuned for deployment in safety-sensitive contexts",
    },
  ],
  metaTitle: "gpt-oss Review 2026: OpenAI's First-Ever Open-Weight Models",
  metaDescription: "gpt-oss review. OpenAI's first open-weight release (Aug 2025). gpt-oss-120b near o4-mini on 1 GPU, gpt-oss-20b runs on 16GB VRAM. Apache 2.0. Safeguard variant 2026.",
};
