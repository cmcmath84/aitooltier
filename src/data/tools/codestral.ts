import { ToolReview } from "@/lib/types";

export const codestral: ToolReview = {
  slug: "codestral",
  name: "Codestral 2 (Mistral)",
  tagline: "Mistral's dedicated code model -- Codestral 2 (launched 2026-04-08) relicensed under Apache 2.0, removing the commercial-use restrictions of the original. 22B dense, strong FIM (fill-in-middle), available via Mistral API + Hugging Face",
  category: "ai-code-assistants",
  url: "https://mistral.ai/news",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 9,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Open weights (Apache 2.0)",
      price: "$0",
      features: [
        "22B dense model on Hugging Face",
        "Commercial use allowed (new in Codestral 2; original Codestral required Mistral Non-Production license)",
        "Self-host on your own infrastructure",
        "Fine-tune without license fees",
      ],
    },
    {
      plan: "Mistral La Plateforme (hosted API)",
      price: "$0.30 / $0.90",
      period: "per 1M tokens (input/output)",
      features: [
        "Pay-as-you-go API access",
        "FIM (fill-in-middle) endpoint for IDE autocomplete",
        "Chat + completion endpoints",
        "Consistent with Mistral Small/Medium tier pricing",
      ],
    },
    {
      plan: "Self-hosted (Hardware)",
      price: "Hardware only",
      features: [
        "Min: 48 GB VRAM (1x RTX 6000 Ada or 2x RTX 3090 with tensor parallelism)",
        "Mid: 1x H100 80GB for production throughput",
        "Max: 2x H100 for batched serving + low latency",
        "Quantized (GGUF Q4_K_M) runs on a 24GB card for experimentation",
      ],
    },
  ],

  pros: [
    "Relicensing to Apache 2.0 is the real news -- the original Codestral required a Mistral Non-Production license for any commercial use, which blocked adoption in-product. Codestral 2 is immediately usable in commercial IDEs, coding assistants, and CI tooling",
    "FIM (fill-in-middle) performance is class-leading for open models -- purpose-built for IDE autocomplete in a way that general-purpose models (Llama, DeepSeek V3) aren't. Competitive with GitHub Copilot's underlying model for inline completions",
    "22B dense (not MoE) means predictable VRAM requirements and throughput -- easier to deploy than DeepSeek's 671B MoE or Qwen's sparse 35B-A3B for teams that want certainty",
    "Available via Mistral's EU-hosted API for customers who need GDPR-native inference -- rare combination of 'open weights + EU vendor' in the code-model category",
  ],
  cons: [
    "22B parameters put it behind frontier closed models (Claude Opus 4.7, GPT-5.4, Gemini 3.1 Pro) on complex multi-file reasoning and agentic coding. This is a fast, cheap inline-completion model, not a frontier coding agent",
    "No multimodal or tool-use baked in -- if your workflow needs screenshot-to-code or terminal tool execution, Claude Code, Cursor Composer 2, or Devin cover that ground better",
    "Benchmark transparency could be stronger -- Mistral publishes MBPP / HumanEval numbers but third-party SWE-bench or LiveCodeBench verification is thinner than for DeepSeek, Qwen Coder, or the frontier models",
    "SWE-bench Verified performance trails the top open-weight coding specialists (Qwen Coder 3.5, DeepSeek V3 Coder variants) by several points in independent testing",
  ],
  knownIssues: [
    {
      description: "Codestral 2 is Apache 2.0, but the ORIGINAL Codestral (2024) is still under Mistral Non-Production License -- if you pulled older weights before 2026-04-08, verify you're on Codestral 2 before shipping commercial use",
      source: "Mistral release notes",
      date: "2026-04",
    },
    {
      description: "EU-hosted API infrastructure can have higher latency than US-based DeepSeek or GitHub Copilot backends for North American developers",
      source: "Developer reports on Mistral Discord",
      date: "2026-04",
    },
  ],
  bestFor: "Developers and teams who want a legally-clean open-weights code model they can self-host OR hit via API, particularly those with EU data-residency requirements. Ideal for building in-house IDE extensions, code-review bots, or CI/CD AI integrations where the Apache 2.0 license removes procurement friction.",
  notFor: "Developers who want frontier-quality agentic coding -- Cursor Composer 2, Claude Code, or Devin will outperform on complex multi-file tasks. Also not ideal if you only need hosted inference and don't care about self-hosting -- DeepSeek V3.2 and Qwen3.6-Plus offer stronger benchmarks at competitive pricing.",
  verdict: "Codestral 2's Apache 2.0 relicensing is the biggest licensing unlock in open-source coding models since Meta released Llama 2 commercially. The model itself is solid-not-frontier (22B dense, fast, predictable), but the license change is what matters -- teams that couldn't touch the original Codestral because of commercial restrictions can now ship it in products. For IDE-style inline autocomplete on owned infrastructure, or for EU-data-residency use cases, this is now a first-tier option. For agentic or frontier coding work, keep using Claude Opus 4.7 via Claude Code or Composer 2 in Cursor.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "Mistral news", url: "https://mistral.ai/news", dateAccessed: "2026-04-18" },
    { name: "ReleaseBot: Mistral updates", url: "https://releasebot.io/updates/mistral", dateAccessed: "2026-04-18" },
    { name: "fazm.ai: April 2026 open model releases", url: "https://fazm.ai/blog/new-ai-model-releases-april-2026", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://mistral.ai",
  status: "active",
  systemRequirements: [
    {
      variant: "Codestral 2 22B dense (Apache 2.0)",
      min: "48 GB VRAM -- 1x RTX 6000 Ada or 2x RTX 3090 tensor parallel (or quantized GGUF Q4_K_M on a 24GB card)",
      max: "1x H100 80GB for production FP16 throughput; 2x H100 for batched serving",
      notes: "Apache 2.0 commercial use OK. Original Codestral (2024) still under Mistral Non-Production License -- verify you are on Codestral 2.",
    },
  ],
  metaTitle: "Codestral 2 Review 2026: Mistral's 22B Code Model Now Apache 2.0",
  metaDescription: "Codestral 2 review. Mistral's 22B dense code model (Apr 8 2026) relicensed to Apache 2.0. Strong FIM, $0.30/$0.90 per 1M tokens hosted. Self-host commercial-ready.",
};
