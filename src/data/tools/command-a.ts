import { ToolReview } from "@/lib/types";

export const commandA: ToolReview = {
  slug: "command-a",
  name: "Cohere Command A",
  tagline: "Cohere's enterprise-multilingual Command A family. Command A+ (2026-05-20) is the Apache 2.0 successor: a 218B total / 25B active MoE covering 48 languages, with vision input, reasoning and translation in one model that runs on 2x H100 (or 1x B200), priced at $2.50 / $10 per 1M tokens on Cohere's API. The original 111B Command A (256K context, 23 languages) keeps CC-BY-NC 4.0 weights, so commercial self-hosting of that model requires a Cohere enterprise contract",
  category: "ai-local-models",
  url: "https://docs.cohere.com/docs/models",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 8.5,
    value: 7,
    features: 8,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted Command A+ (Apache 2.0)",
      price: "$0",
      features: [
        "Apache 2.0, commercial use allowed",
        "Weights on Hugging Face (CohereLabs; bf16, fp8 and w4a4)",
        "218B total / 25B active MoE; runs on 2x H100 or 1x B200",
        "128K input / 64K output context, 48 languages",
      ],
    },
    {
      plan: "Self-hosted Command A 111B (CC-BY-NC 4.0, research only)",
      price: "$0",
      features: [
        "Research + non-commercial use only",
        "Weights on Hugging Face",
        "2x H100 minimum for full-capability deployment",
        "Fine-tuning permitted for research purposes",
      ],
    },
    {
      plan: "Cohere API (Command A+)",
      price: "$2.50 / $10.00",
      period: "per 1M input / output tokens",
      features: [
        "Model ID command-a-plus-05-2026",
        "Vision input, reasoning, translation and tool use in one model",
        "128K input, 64K output context",
        "Private deployment options for enterprise customers",
      ],
    },
    {
      plan: "Cohere API (Command A and 2025 variants)",
      price: "Usage-based",
      period: "per 1M tokens",
      features: [
        "Full commercial deployment via Cohere's hosted API",
        "Enterprise SLAs, data residency, private deployments available",
        "Command A Reasoning and Command A Vision (2025) still listed as Live",
      ],
    },
    {
      plan: "Cohere Enterprise contract",
      price: "Custom",
      features: [
        "Required for commercial self-hosting of the CC-BY-NC Command A weights",
        "Private cloud / air-gapped options available",
        "Governance + compliance add-ons for regulated industries",
      ],
    },
  ],

  pros: [
    "Command A+ is Apache 2.0 (2026-05-20), so the newest Command model can be self-hosted commercially without a Cohere contract, on as little as 2x H100 or 1x B200",
    "Best-in-class multilingual open-weight family for enterprise: Command A+ covers 48 languages including all official EU languages, and the original Command A's 23-language coverage (including Arabic, Korean, Japanese and Hindi) already beat Mistral and Llama for global enterprise deployment",
    "Runs on just 2x H100 at FP16 for the full 111B model -- much lower infrastructure bar than DeepSeek V3.2 (671B MoE needs 8x H100) or GLM-5.1 (744B MoE). Makes 'run your own frontier model on-prem' realistically achievable for mid-size enterprises",
    "256K context on the original Command A (Command A+ offers 128K input and 64K output), strong retrieval-augmented generation tuning, and enterprise-grade tool use. Cohere's enterprise heritage shows: the model is tuned for real business workflows (RAG over internal docs, multi-language customer support, structured extraction) rather than consumer chat",
    "Command A+ puts vision input, reasoning, translation and agentic tool use in one set of weights, so teams no longer need separate Command A Reasoning and Command A Vision deployments. One model to evaluate, procure and support",
  ],
  cons: [
    "The original 111B Command A weights are CC-BY-NC 4.0, so free self-hosting of that model is research / non-commercial only and commercial deployment requires a Cohere enterprise contract. Command A+ (Apache 2.0) removes that limit for the newest model, but check which checkpoint you deploy; other permissive options include Qwen, GLM, Granite, gpt-oss and Arcee Trinity (OpenMDW-1.1)",
    "Cohere has pivoted away from the consumer chatbot market -- there is no Cohere consumer product that competes with ChatGPT / Claude / Gemini. Command A is positioned squarely for enterprise developers, which means less community buzz and fewer third-party fine-tunes",
    "Absolute benchmarks don't top DeepSeek, GLM, or Qwen flagships -- Command A is optimized for enterprise multilingual RAG, not for peak reasoning or code benchmarks. Pick on fit, not on leaderboard",
    "Smaller open-source community than Llama or Qwen. Ollama / llama.cpp support is present but less aggressively optimized. Cohere's own API is the polished path",
  ],
  knownIssues: [
    {
      description: "LICENSE SCOPE (checked 2026-10-29): the original command-a-03-2025 is still Live in Cohere's docs with 256K context, and its Hugging Face weights remain CC-BY-NC 4.0. Command A Reasoning and Command A Vision are also still listed as Live, but Command A+ now covers vision and reasoning in one model. Earlier versions of this page framed CC-BY-NC as covering the whole family.",
      source: "docs.cohere.com/docs/models + huggingface.co/CohereLabs/command-a-03-2025 (license cc-by-nc-4.0), fetched 2026-10-29",
      date: "2026-10-29",
    },
    {
      description: "COMMAND A+ RELEASED UNDER APACHE 2.0 (2026-05-20, Cohere changelog): Cohere released 'Command A+, the last model in the Command A family of models, combining support for vision inputs, reasoning capabilities, translation capabilities, and agentic tasks all within the same model.' It is Cohere's first mixture-of-experts model, 25B active / 218B total parameters (128 experts, 8 active per token), with 48 languages, 128K input and 64K output context, and it deploys on '1 x B200 or 2 x H100s'. License: Apache 2.0, with bf16, fp8 and w4a4 weights on Hugging Face (CohereLabs). Cohere's pricing page lists it at $2.50 input and $10.00 output per 1M tokens. Model ID: command-a-plus-05-2026.",
      source: "Cohere changelog (docs.cohere.com/changelog, May 20, 2026) + cohere.com/pricing + huggingface.co/CohereLabs command-a-plus model card, fetched 2026-10-29",
      date: "2026-05-20",
    },
    {
      description: "CC-BY-NC 4.0 licensing creates commercial-use ambiguity: research and evaluation are fine on self-hosted weights, but production / revenue-generating deployment requires a Cohere enterprise contract. Many open-weight-adopters miss this and assume the model is Apache-2.0-equivalent. It is not (this applies to the original command-a-03-2025 weights; Command A+, released 2026-05-20, is Apache 2.0)",
      source: "Cohere model documentation",
      date: "2025-12",
    },
    {
      description: "Command A's multilingual strength sometimes surprises Western teams -- quality in languages like Korean, Arabic, Hindi is genuinely better than Llama or Mistral at comparable sizes. Worth testing specifically if multilingual is a requirement rather than trusting general benchmarks",
      source: "Enterprise customer reports, Cohere docs",
      date: "2025-11",
    },
  ],
  bestFor: "Mid-size to large enterprises needing a multilingual open-weight model with low-ish infrastructure requirements (2x H100 for full model). Especially good for retrieval-augmented generation over internal document stores, multi-language customer support, and workflows touching Asian / Middle Eastern / African languages where Command A's coverage materially beats Llama or Mistral. Also a strong pick for teams already in Cohere's enterprise ecosystem. Pick Command A+ if you need Apache 2.0 weights for commercial self-hosting or 48-language coverage.",
  notFor: "Teams that require Apache-2.0 / MIT licensing should skip the original Command A and use Command A+ or other permissive models (Qwen, GLM, Granite, gpt-oss, or Arcee Trinity under OpenMDW-1.1). Also not the right pick for consumer chat or for peak-benchmark chasing; Command A optimizes for enterprise fit, not leaderboard position.",
  verdict: "Cohere Command A is the most credible enterprise-multilingual open-weight family in 2026, and Command A+ (2026-05-20) fixed its biggest weakness. The original 111B model covers 23 languages and deploys on 2x H100, but its weights are CC-BY-NC 4.0, so commercial self-hosting needs a Cohere enterprise contract. Command A+ is Apache 2.0, covers 48 languages, folds vision and reasoning into one 218B-total / 25B-active MoE that still fits on 2x H100, and costs $2.50 / $10 per 1M tokens on Cohere's API. For new deployments, start with Command A+; the original remains the choice only if you need its 256K context.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "Cohere changelog: Announcing Command A+ (May 20, 2026)", url: "https://docs.cohere.com/changelog", dateAccessed: "2026-10-29" },
    { name: "Cohere pricing: Command A+ $2.50 / $10.00 per 1M tokens", url: "https://cohere.com/pricing", dateAccessed: "2026-10-29" },
    { name: "Hugging Face CohereLabs (command-a-plus-05-2026 apache-2.0; command-a-03-2025 cc-by-nc-4.0)", url: "https://huggingface.co/CohereLabs", dateAccessed: "2026-10-29" },
    { name: "Cohere: Command A model documentation", url: "https://docs.cohere.com/docs/models", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: Cohere Command A launches", url: "https://venturebeat.com/ai/cohere-targets-global-enterprises-with-new-highly-multilingual-command-a-model-requiring-only-2-gpus", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://docs.cohere.com/docs/models",
  status: "active",
  systemRequirements: [
    {
      variant: "Command A+ (218B total / 25B active MoE)",
      min: "2× H100 or 1× B200 (Cohere's stated minimum)",
      max: "Not published; fp8 and w4a4 quantized weights are on Hugging Face",
      notes: "Apache 2.0. 128 experts, 8 active per token. 128K input / 64K output",
    },
    {
      variant: "Command A (111B)",
      min: "2× H100 80 GB FP16",
      max: "4× H100 for production serving with multi-tenant load",
      notes: "CC-BY-NC 4.0 on weights (research only). Commercial requires Cohere enterprise contract",
    },
  ],
  metaTitle: "Cohere Command A and A+ Review 2026: Enterprise-Multilingual Open-Weight LLM",
  metaDescription: "Cohere Command A review. Command A+ (May 2026): Apache 2.0, 218B MoE with 25B active, 48 languages, vision and reasoning in one model, 2x H100, $2.50/$10 per 1M tokens. Original 111B Command A: 256K context, CC-BY-NC 4.0.",
};
