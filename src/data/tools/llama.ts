import { ToolReview } from "@/lib/types";

export const llama: ToolReview = {
  slug: "llama",
  name: "Llama 4 (Meta)",
  tagline: "Meta's open-weights flagship family -- Scout (10M context), Maverick (multimodal 400B MoE), Behemoth in preview",
  category: "ai-local-models",
  url: "https://llama.meta.com",

  scores: {
    easeOfUse: 5,
    outputQuality: 8.5,
    value: 9,
    features: 9,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["Llama 4 Community License", "Unlimited use", "Zero data sharing", "700M MAU clause + attribution required"],
    },
    {
      plan: "Cloud API (Together.ai, Fireworks, Groq)",
      price: "$3-8",
      period: "per 1M input tokens",
      features: ["Scout: $3 in / $7.50 out", "Maverick: $8 in / $20 out", "No hardware needed"],
    },
    {
      plan: "Self-hosted (Hardware)",
      price: "$0",
      features: [
        "Scout 109B MoE -- Min: 2× RTX 4090 48GB (Q4) | Mid: 1× H100 80GB | Max: 2× A100 80GB FP16",
        "Maverick 400B MoE -- Min: 128 GB Mac M3 Ultra (Q3) | Mid: 2× H100 80GB | Max: 4× H100 or 2× H200 FP8",
        "Llama 3.3 70B dense still popular -- Min: 1× RTX 3090/4090 24GB (Q4) | Mid: 2× RTX 4090 | Max: 1× H100 80GB FP16",
      ],
    },
  ],

  pros: [
    "Llama 4 Scout has a 10M token context window -- longest shipping open-weight model, ideal for RAG",
    "Llama 4 Maverick is natively multimodal (early-fusion) and hit Elo 1417 on LMArena experimental",
    "Permissive-enough license for most commercial use (700M MAU clause rarely binds)",
    "Biggest open-weights ecosystem by far -- Ollama, LM Studio, vLLM, llama.cpp, thousands of fine-tunes",
    "Meta invests heavily -- Behemoth (~2T) is in preview as the teacher model",
  ],
  cons: [
    "Llama 4 initial launch underdelivered on vibes vs. benchmark numbers per r/LocalLLaMA consensus",
    "Community License is not Apache/MIT -- the 700M MAU clause and attribution requirement rule out some commercial use",
    "Requires serious hardware to run the flagship sizes -- Maverick full-precision needs 4× H100",
    "DeepSeek V3.2 and Kimi K2.5 have surpassed Llama on many benchmarks at similar or lower cost",
  ],
  knownIssues: [
    {
      description: "Llama 4 Maverick scored Elo 1417 on a special 'experimental chat' variant on LMArena -- the released weights feel weaker than that number implies",
      source: "Reddit r/LocalLLaMA, LMArena notes",
      date: "2026-04",
    },
    {
      description: "Quantized versions of Scout at 10M context use enormous KV-cache memory -- full 10M is practically unreachable on consumer hardware",
      source: "Hugging Face discussions",
      date: "2026-03",
    },
  ],
  bestFor: "Developers and teams who need a permissively-licensed open-weights model with strong tooling, long context (Scout), or multimodal (Maverick). Safe default choice given the ecosystem.",
  notFor: "Teams chasing the absolute frontier on benchmarks -- DeepSeek V3.2 and Kimi K2.5 score higher. Also not ideal if you need true MIT/Apache licensing (use Qwen, GLM, or MiniMax instead).",
  verdict: "Llama 4 is the safe open-weights default in 2026. It has the biggest ecosystem, the longest context (Scout's 10M), and genuine multimodality (Maverick). But the frontier has moved -- DeepSeek V3.2 and Kimi K2.5 are stronger per-dollar, and the Llama 4 Community License is less permissive than Apache 2.0 alternatives from Alibaba and Z.ai. If you're building on open weights and want maximum compatibility, Llama 4 is still the right pick. If you want best-in-class performance per dollar, look at DeepSeek or Qwen.",

  lastReviewedDate: "2026-04-13",
  dataSources: [
    { name: "Meta Llama official site", dateAccessed: "2026-04-13" },
    { name: "Meta AI blog: Llama 4", dateAccessed: "2026-04-13" },
    { name: "Together.ai pricing", dateAccessed: "2026-04-13" },
    { name: "LMArena leaderboard", dateAccessed: "2026-04-13" },
    { name: "Reddit r/LocalLLaMA", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://llama.meta.com",
  status: "active",
  benchmarks: {
    modelName: "Llama 4 Maverick (17B/400B MoE)",
    scores: [
      { name: "MMLU-Pro", score: 80.5, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 69.8, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 88.0, maxScore: 100, unit: "%" },
      { name: "MMMU (multimodal)", score: 73.4, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1417,
    lastUpdated: "2026-04-13",
  },
  metaTitle: "Llama 4 Review 2026: Meta's Open-Weights Flagship (Scout, Maverick, Behemoth)",
  metaDescription: "Llama 4 review. Scout (10M context), Maverick (400B MoE multimodal), Behemoth in preview. Benchmarks, pricing, hardware requirements. April 2026.",
};
