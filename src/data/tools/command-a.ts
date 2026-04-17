import { ToolReview } from "@/lib/types";

export const commandA: ToolReview = {
  slug: "command-a",
  name: "Cohere Command A",
  tagline: "Cohere's enterprise-multilingual flagship -- 111B params, 256K context, runs on 2x H100. 23 languages. CC-BY-NC 4.0 on weights (research / non-commercial), commercial requires Cohere enterprise contract. Follow-ups: Command A Reasoning + Command A Vision",
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
      plan: "Self-hosted (CC-BY-NC 4.0, research only)",
      price: "$0",
      features: [
        "Research + non-commercial use only",
        "Weights on Hugging Face",
        "2x H100 minimum for full-capability deployment",
        "Fine-tuning permitted for research purposes",
      ],
    },
    {
      plan: "Cohere API",
      price: "Usage-based",
      period: "per 1M tokens",
      features: [
        "Full commercial deployment via Cohere's hosted API",
        "Enterprise SLAs, data residency, private deployments available",
        "Command A Reasoning + Command A Vision sold as part of the family",
      ],
    },
    {
      plan: "Cohere Enterprise contract",
      price: "Custom",
      features: [
        "Required for commercial self-hosting / on-premises deployment",
        "Private cloud / air-gapped options available",
        "Governance + compliance add-ons for regulated industries",
      ],
    },
  ],

  pros: [
    "Best-in-class multilingual open-weight model for enterprise -- 23-language coverage with consistent quality (including Arabic, Korean, Japanese, Hindi, European languages) beats Mistral and Llama for genuinely global enterprise deployment",
    "Runs on just 2x H100 at FP16 for the full 111B model -- much lower infrastructure bar than DeepSeek V3.2 (671B MoE needs 8x H100) or GLM-5.1 (744B MoE). Makes 'run your own frontier model on-prem' realistically achievable for mid-size enterprises",
    "256K context natively, strong retrieval-augmented generation tuning, and enterprise-grade tool use. Cohere's enterprise heritage shows -- the model is tuned for real business workflows (RAG over internal docs, multi-language customer support, structured extraction) rather than consumer chat",
    "Command A Reasoning + Command A Vision ship as family members, not separate products -- one evaluation / one procurement / one support contract covers reasoning, vision, and multilingual coverage. Simpler enterprise procurement story than piecing together three different vendors",
  ],
  cons: [
    "CC-BY-NC 4.0 on weights means the free self-hosted version is research / non-commercial only -- commercial deployment requires a Cohere enterprise contract. This is a material difference versus Apache-2.0 competitors (Llama, Qwen, GLM, Granite, Arcee Trinity, gpt-oss). Worth flagging clearly for procurement",
    "Cohere has pivoted away from the consumer chatbot market -- there is no Cohere consumer product that competes with ChatGPT / Claude / Gemini. Command A is positioned squarely for enterprise developers, which means less community buzz and fewer third-party fine-tunes",
    "Absolute benchmarks don't top DeepSeek, GLM, or Qwen flagships -- Command A is optimized for enterprise multilingual RAG, not for peak reasoning or code benchmarks. Pick on fit, not on leaderboard",
    "Smaller open-source community than Llama or Qwen. Ollama / llama.cpp support is present but less aggressively optimized. Cohere's own API is the polished path",
  ],
  knownIssues: [
    {
      description: "CC-BY-NC 4.0 licensing creates commercial-use ambiguity -- research and evaluation are fine on self-hosted weights, but production / revenue-generating deployment requires a Cohere enterprise contract. Many open-weight-adopters miss this and assume the model is Apache-2.0-equivalent. It is not",
      source: "Cohere model documentation",
      date: "2025-12",
    },
    {
      description: "Command A's multilingual strength sometimes surprises Western teams -- quality in languages like Korean, Arabic, Hindi is genuinely better than Llama or Mistral at comparable sizes. Worth testing specifically if multilingual is a requirement rather than trusting general benchmarks",
      source: "Enterprise customer reports, Cohere docs",
      date: "2025-11",
    },
  ],
  bestFor: "Mid-size to large enterprises needing a multilingual open-weight model with low-ish infrastructure requirements (2x H100 for full model). Especially good for retrieval-augmented generation over internal document stores, multi-language customer support, and workflows touching Asian / Middle Eastern / African languages where Command A's coverage materially beats Llama or Mistral. Also a strong pick for teams already in Cohere's enterprise ecosystem.",
  notFor: "Teams that require strict Apache-2.0 / MIT licensing for commercial self-hosting (go with Llama, Qwen, GLM, Granite, Arcee Trinity, gpt-oss instead). Also not the right pick for consumer chat or for peak-benchmark chasing -- Command A optimizes for enterprise fit, not leaderboard position.",
  verdict: "Cohere Command A is the most credible enterprise-multilingual open-weight option in 2026. The 23-language coverage is genuinely best-in-class at the 111B size, the 2x H100 deployment bar is realistic for serious mid-size enterprises, and the Reasoning + Vision siblings simplify procurement. The major caveat is CC-BY-NC 4.0 licensing -- commercial self-hosting requires a Cohere enterprise contract, not just a weights download. For research and evaluation, it's free. For production revenue, you're in a Cohere contract either way, which is fine if you were heading there anyway and a dealbreaker if you strictly need Apache-2.0 freedom.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Cohere: Command A model documentation", url: "https://docs.cohere.com/docs/models", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: Cohere Command A launches", url: "https://venturebeat.com/ai/cohere-targets-global-enterprises-with-new-highly-multilingual-command-a-model-requiring-only-2-gpus", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://docs.cohere.com/docs/models",
  status: "active",
  systemRequirements: [
    {
      variant: "Command A (111B)",
      min: "2× H100 80 GB FP16",
      max: "4× H100 for production serving with multi-tenant load",
      notes: "CC-BY-NC 4.0 on weights (research only). Commercial requires Cohere enterprise contract",
    },
  ],
  metaTitle: "Cohere Command A Review 2026: Enterprise-Multilingual Open-Weight LLM",
  metaDescription: "Cohere Command A review. 111B params, 23 languages, 256K context, runs on 2x H100. CC-BY-NC 4.0 (research only). Reasoning + Vision variants. Enterprise multilingual.",
};
