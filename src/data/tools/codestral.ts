import { ToolReview } from "@/lib/types";

export const codestral: ToolReview = {
  slug: "codestral",
  name: "Codestral (Mistral)",
  tagline: "Mistral's FIM-focused code-completion model -- Codestral 25.08 is a proprietary Premier API model (API id codestral-2508, GA 2025-07-30) at $0.30 in / $0.90 out per 1M tokens with a 128k context, also sold for VPC and on-prem deployment. The only open-weight Codestral is the 2024 Codestral-22B-v0.1 under the Mistral Non-Production License; older API versions codestral-2501 and codestral-2405 are retired",
  category: "ai-code-assistants",
  url: "https://docs.mistral.ai/models/codestral-25-08",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 7,
    features: 7,
    overall: 7.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Codestral 25.08 API (codestral-2508)",
      price: "$0.30 / $0.90",
      period: "per 1M tokens (input/output)",
      features: [
        "Cached input $0.03 per 1M tokens",
        "128k context window",
        "Built for fill-in-the-middle (FIM) and code generation; function calling and structured outputs supported",
        "Mistral labels it Premier (proprietary model, no downloadable weights)",
      ],
    },
    {
      plan: "Enterprise self-deployment",
      price: "Contact sales",
      features: [
        "Mistral says Codestral 25.08 is deployable across cloud, VPC, or on-prem environments",
        "Sold as part of Mistral's enterprise coding stack (Codestral, Codestral Embed, Devstral, Mistral Code IDE extension)",
        "On-prem / pilot requests go through Mistral's demand form",
      ],
    },
    {
      plan: "Open weights: Codestral-22B-v0.1 (2024, MNPL)",
      price: "$0",
      features: [
        "22B model on Hugging Face (mistralai/Codestral-22B-v0.1)",
        "Mistral AI Non-Production License -- testing, research, personal, or evaluation use in non-production environments only",
        "No commercial or hosted-service use under MNPL",
        "Older than Codestral 25.08; the API version of it (codestral-2405) was retired 2025-06-16",
      ],
    },
    {
      plan: "Self-hosted hardware (22B v0.1 weights)",
      price: "Hardware only",
      features: [
        "Min: 48 GB VRAM (1x RTX 6000 Ada or 2x RTX 3090 with tensor parallelism)",
        "Mid: 1x H100 80GB for throughput",
        "Max: 2x H100 for batched serving + low latency",
        "Quantized (GGUF Q4_K_M) runs on a 24GB card for experimentation",
      ],
    },
  ],

  pros: [
    "Purpose-built for IDE autocomplete -- Mistral positions Codestral for 'low-latency, high-frequency tasks such as fill-in-the-middle (FIM) and code generation', which general-purpose chat models are not tuned for",
    "Codestral 25.08 brought measurable upgrades over prior versions per Mistral: +30% accepted completions, +10% more retained code after suggestion, and 50% fewer runaway generations in live IDE usage",
    "Cheap hosted pricing -- $0.30 input / $0.90 output per 1M tokens, with cached input at $0.03 -- makes high-frequency completion traffic affordable",
    "Deployment flexibility for regulated teams -- Mistral sells Codestral for cloud, self-managed VPC, or fully on-prem deployment, and as an EU vendor it documents regional inference options",
  ],
  cons: [
    "Not open weights -- Codestral 25.08 is a Premier (proprietary) model. The only downloadable Codestral is the 2024 22B v0.1, and its Mistral Non-Production License bars commercial production use",
    "A completion model, not a frontier coding agent -- it trails frontier closed models from Anthropic, OpenAI, and Google on complex multi-file reasoning and agentic coding",
    "No multimodal or tool-execution workflow baked in -- if your workflow needs screenshot-to-code or terminal tool execution, Claude Code, Cursor, or Devin cover that ground better",
    "Benchmark transparency could be stronger -- Mistral reports its own completion metrics, but third-party SWE-bench or LiveCodeBench verification is thinner than for DeepSeek, Qwen Coder, or the frontier models",
    "Version churn -- codestral-2501 was retired on 2025-11-30 and codestral-2405 on 2025-06-16, so integrations pinned to old model IDs must move to codestral-2508",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-02): from 2026-04-18 this page said 'Codestral 2 (2026-04-08) relicensed under Apache 2.0' as a 22B open-weight model. That claim came from aggregator sources (fazm.ai, now HTTP 410 Gone; ReleaseBot), and no Mistral primary source has any Codestral 2: the Mistral news RSS, the docs models and pricing pages, and the mistralai Hugging Face org all show none. Current is Codestral 25.08 (codestral-2508, GA 2025-07-30, $0.30 input / $0.03 cached input / $0.90 output per 1M tokens, labelled Premier). The only open weights are Codestral-22B-v0.1 under the Mistral Non-Production License (MNPL). Do not re-add a Codestral 2 or Apache 2.0 claim without a Mistral primary source The value score was lowered from 9 to 7 (overall 7.5 to 7.0) on the same date, because the 9 assumed free commercial-use weights that do not exist.",
      source: "Mistral news RSS, docs.mistral.ai/models, docs.mistral.ai/inference/pricing, huggingface.co/mistralai",
      date: "2026-11-02",
    },
    {
      description: "Retired API versions: Mistral deprecated codestral-2501 on 2025-11-06 and retired it on 2025-11-30; codestral-2405 was deprecated on 2024-12-02 and retired on 2025-06-16. The docs list Codestral (25.08) as the alternative for both",
      source: "Mistral docs: Deprecated & retired models",
      date: "2025-11-30",
    },
    {
      description: "Codestral-22B-v0.1 weights on Hugging Face remain under the Mistral AI Non-Production License (license_name: mnpl), which limits use to testing, research, personal, or evaluation purposes in non-production environments and forbids supplying the model in a commercial activity, including hosted services. Mistral's open-weight coding model with a permissive license is Devstral Small 2 (24B), not Codestral",
      source: "Hugging Face mistralai/Codestral-22B-v0.1 model card; mistral.ai MNPL-0.1",
      date: "2026-11-02",
    },
    {
      description: "EU-hosted API infrastructure can have higher latency than US-based DeepSeek or GitHub Copilot backends for North American developers",
      source: "Developer reports on Mistral Discord",
      date: "2026-04",
    },
  ],
  bestFor: "Developers and teams who want a cheap, low-latency FIM model for IDE autocomplete via API, or enterprises that want Mistral's coding stack deployed in their own VPC or on-prem, particularly those with EU vendor or data-residency preferences. Good for in-house IDE extensions, code-review bots, or CI/CD AI integrations.",
  notFor: "Developers who want frontier-quality agentic coding -- Claude Code, Cursor, or Devin will outperform on complex multi-file tasks. Also not for teams that need commercially usable downloadable weights: Codestral 25.08 is API / enterprise only and the 22B v0.1 weights are non-production; Mistral's open-weight coding option is Devstral Small 2 (24B).",
  verdict: "Codestral is Mistral's specialist autocomplete model. Codestral 25.08 (July 2025) is fast, FIM-tuned, and cheap at $0.30 / $0.90 per 1M tokens, with VPC and on-prem deployment available through Mistral's enterprise coding stack. It is not open weights -- the only downloadable Codestral is the 2024 22B v0.1 under a non-production license -- and it is not a frontier coding agent. For IDE-style inline completion where an EU vendor or self-managed deployment matters, it is a solid pick; for agentic or frontier coding work, use a frontier agent such as Claude Code or Cursor.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Mistral docs: Codestral 25.08 model page", url: "https://docs.mistral.ai/models/codestral-25-08", dateAccessed: "2026-11-02" },
    { name: "Mistral: Announcing Codestral 25.08 (2025-07-30)", url: "https://mistral.ai/news/codestral-25-08/", dateAccessed: "2026-11-02" },
    { name: "Mistral docs: Models overview (incl. deprecated & retired models)", url: "https://docs.mistral.ai/models", dateAccessed: "2026-11-02" },
    { name: "Mistral docs: API pricing", url: "https://docs.mistral.ai/inference/pricing", dateAccessed: "2026-11-02" },
    { name: "Mistral news RSS", url: "https://mistral.ai/news/rss", dateAccessed: "2026-11-02" },
    { name: "Mistral news", url: "https://mistral.ai/news", dateAccessed: "2026-11-02" },
    { name: "Hugging Face: mistralai/Codestral-22B-v0.1 model card", url: "https://huggingface.co/mistralai/Codestral-22B-v0.1/raw/main/README.md", dateAccessed: "2026-11-02" },
    { name: "Mistral AI Non-Production License (MNPL-0.1)", url: "https://mistral.ai/licences/MNPL-0.1.md", dateAccessed: "2026-11-02" },
  ],
  affiliateUrl: "https://mistral.ai",
  status: "active",
  systemRequirements: [
    {
      variant: "Codestral-22B-v0.1 (2024 open weights, Mistral Non-Production License)",
      min: "48 GB VRAM -- 1x RTX 6000 Ada or 2x RTX 3090 tensor parallel (or quantized GGUF Q4_K_M on a 24GB card)",
      max: "1x H100 80GB for FP16 throughput; 2x H100 for batched serving",
      notes: "Non-production license: testing, research, personal, or evaluation use only. Codestral 25.08 has no downloadable weights (API or enterprise deployment only).",
    },
  ],
  metaTitle: "Codestral Review 2026: Mistral's FIM Code-Completion Model (Codestral 25.08)",
  metaDescription: "Codestral review. Mistral's code-completion model Codestral 25.08 (Jul 2025, codestral-2508): $0.30/$0.90 per 1M tokens, 128k context, proprietary Premier model. Open weights only for the 2024 22B (non-production).",
};
