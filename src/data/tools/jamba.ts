import { ToolReview } from "@/lib/types";

export const jamba: ToolReview = {
  slug: "jamba",
  name: "AI21 Jamba2",
  tagline: "AI21 Labs' hybrid SSM-Transformer (Mamba-style) open-weight family -- Jamba2 launched 2026-01-08. Two sizes: 3B dense (runs on phones / laptops) and Jamba2 Mini MoE (12B active / 52B total). Apache 2.0, 256K context, mid-trained on 500B tokens",
  category: "ai-local-models",
  url: "https://www.ai21.com/blog/introducing-jamba2/",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 8,
    value: 9,
    features: 8.5,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Apache 2.0)",
      price: "$0",
      features: [
        "Apache 2.0 license, unrestricted commercial use",
        "Weights on Hugging Face (ai21labs/AI21-Jamba2-Mini)",
        "Two sizes: Jamba2 3B dense + Jamba2 Mini MoE (12B active / 52B total)",
        "256K context natively supported",
      ],
    },
    {
      plan: "AI21 API",
      price: "Usage-based",
      period: "per 1M tokens",
      features: [
        "Hosted inference via AI21's API",
        "Enterprise SLAs available",
        "Fine-tuning as a service offered for enterprise customers",
      ],
    },
  ],

  pros: [
    "Hybrid SSM-Transformer (Mamba-style) architecture is one of only two serious open-weight hybrid families in 2026, alongside IBM Granite 4. The memory-per-token efficiency at 256K context is materially better than pure transformers at similar scale -- critical for long-document / codebase / RAG workflows",
    "Jamba2 3B dense runs realistically on iPhone / Android / Apple Silicon laptops -- genuine edge-deployable reasoning without the quality collapse that smaller dense transformers often show. Pairs well with on-device RAG pipelines",
    "Jamba2 Mini MoE (52B total, 12B active) delivers competitive quality at consumer-GPU (24GB VRAM) deployment costs. A strong mid-tier option for teams that don't have H100 infrastructure",
    "AI21 Labs is a credible Israeli research lab with durable funding (not one of the startup-of-the-month entries) -- Jamba has real ongoing development and research velocity, not a one-off release",
  ],
  cons: [
    "AI21 ecosystem is smaller than Qwen, Llama, or DeepSeek -- fewer third-party fine-tunes, Ollama/llama.cpp support is improving but lags. If your tooling is rigidly locked to pure-transformer pipelines, Jamba's hybrid SSM layers will require runtime work",
    "Absolute quality is not frontier-tier -- Jamba2 Mini at 52B total does not match DeepSeek V3.2, GLM-5.1, or Qwen 3.6 on mainstream reasoning benchmarks. Its win is efficiency and edge-deployability, not peak scores",
    "Mid-trained on 500B tokens (vs trillions for top open-weight models) -- this is reflected in general-knowledge breadth and multilingual coverage. English is strong; some other languages are thinner",
    "AI21's brand recognition in the open-weight community is weaker than major competitors -- a lot of developers haven't tried Jamba because they haven't heard of AI21. That's a marketing gap, not a quality gap, but it affects adoption velocity",
  ],
  knownIssues: [
    {
      description: "SSM / Mamba-hybrid layers need compatible runtimes. Ollama support was added post-launch but has had intermittent issues with the hybrid attention-SSM attention switching -- check the latest Ollama release notes before deploying",
      source: "Hugging Face discussions, Ollama release notes",
      date: "2026-01",
    },
    {
      description: "Jamba2 3B is genuinely small and appropriate for edge, but users coming from 7B-14B dense models often report needing different prompting patterns (more explicit instructions, shorter CoT) to match their previous quality expectations",
      source: "Reddit r/LocalLLaMA",
      date: "2026-02",
    },
  ],
  bestFor: "Developers building long-context RAG systems (256K context with manageable memory is the sweet spot), mobile/edge deployments where Jamba2 3B's hybrid efficiency shines, and teams that want to experiment with non-transformer architectures while staying in Apache-2.0 territory. Also good for Israeli + EU enterprise procurement where AI21's geography / GDPR posture matters.",
  notFor: "Absolute peak-quality use cases where DeepSeek, GLM, or Qwen score higher. Also not for teams unwilling to deal with hybrid SSM-Transformer runtime quirks in their inference stack. And not ideal for heavy multilingual use cases -- Jamba is English-first.",
  verdict: "AI21 Jamba2 (January 2026) is the strongest pure-play hybrid SSM-Transformer open-weight release in 2026 outside of IBM Granite 4, and one of the few open-weight options where the 3B-dense variant is genuinely deployable on phones and laptops without major quality compromise. The architectural efficiency at 256K context is real and matters for long-document workflows. Absolute benchmarks lag the top Chinese models at comparable sizes, so pick Jamba for its architecture and edge story, not for peak score chasing.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "AI21: Introducing Jamba2", url: "https://www.ai21.com/blog/introducing-jamba2/", dateAccessed: "2026-04-17" },
    { name: "Hugging Face: AI21-Jamba2-Mini", url: "https://huggingface.co/ai21labs/AI21-Jamba2-Mini", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.ai21.com/blog/introducing-jamba2/",
  status: "active",
  systemRequirements: [
    {
      variant: "Jamba2 3B dense",
      min: "2-4 GB VRAM Q4 (phones, laptops, Apple Silicon)",
      max: "12 GB VRAM FP16",
      notes: "Apache 2.0. Edge-deployable",
    },
    {
      variant: "Jamba2 Mini MoE (52B total / 12B active)",
      min: "16 GB VRAM Q4 (RTX 4080 / 4090)",
      max: "1× A100 80 GB FP16",
      notes: "Hybrid SSM-Transformer. Memory-efficient at 256K context",
    },
  ],
  metaTitle: "AI21 Jamba2 Review 2026: Hybrid SSM-Transformer, 3B Edge + 52B MoE",
  metaDescription: "AI21 Jamba2 review (Jan 2026). Hybrid SSM-Transformer open-weight family. 3B dense runs on phones, Mini MoE 12B/52B on consumer GPUs. Apache 2.0, 256K context.",
};
