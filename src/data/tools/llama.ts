import { ToolReview } from "@/lib/types";

export const llama: ToolReview = {
  slug: "llama",
  name: "Llama 4 (Meta)",
  tagline: "Meta's open-weights family -- Scout (10M context), Maverick (multimodal 400B MoE). NOTE: Meta's frontier work moved to the proprietary Muse Spark line in April 2026; Llama remains downloadable and supported but is effectively in maintenance mode",
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
      description: "STRATEGIC SHIFT (2026-04-08): Meta's frontier development has moved OFF the Llama line. Meta Superintelligence Labs launched **Muse Spark** -- Meta's first proprietary, closed-source frontier model (see the muse-spark page) -- and tier-1 coverage frames it as the Llama successor ('Goodbye Llama,' per VentureBeat). Llama has NOT been formally discontinued: existing models stay downloadable and supported, and Bloomberg-sourced reports say open derivatives of future models are under consideration. But community consensus is Llama-4-era weights are now in maintenance mode -- 'Llama 5' claims circulating on low-quality aggregators are fabricated; no vendor announcement exists. If you're betting a product on continued frontier open-weight releases from Meta, that bet now looks shaky -- Qwen, DeepSeek, and GLM are the active open-weight frontier",
      source: "VentureBeat (Muse Spark launch), The New Stack, understandingai.org",
      date: "2026-04-08",
    },
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
  verdict: "Llama 4 is still the compatibility king of open weights -- biggest ecosystem, longest context (Scout's 10M), genuine multimodality (Maverick). But two things changed in 2026: the open-weight frontier moved to Qwen, DeepSeek, and GLM on performance per dollar, and in April Meta itself moved on -- its frontier development now lives in the proprietary Muse Spark line, leaving Llama in de facto maintenance mode. Existing weights aren't going anywhere, and for maximum tooling compatibility Llama 4 remains a safe pick today. Just don't build a roadmap that assumes a frontier-class open Llama 5 -- there is currently no vendor signal one is coming.",

  lastReviewedDate: "2026-06-09",
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
  systemRequirements: [
    {
      variant: "Llama 4 Scout (109B MoE, 17B active, 10M context)",
      min: "2× RTX 4090 48 GB total (Q4 quantization)",
      max: "2× A100 80 GB FP16",
      notes: "Full 10M context is practically unreachable on consumer hardware due to KV-cache size",
    },
    {
      variant: "Llama 4 Maverick (400B MoE, multimodal)",
      min: "128 GB unified RAM Mac Studio M3 Ultra (Q3)",
      max: "4× H100 80 GB or 2× H200 FP8",
    },
    {
      variant: "Llama 3.3 70B (dense, still popular)",
      min: "1× RTX 3090/4090 24 GB (Q4)",
      max: "1× H100 80 GB FP16",
    },
  ],

  personality: {
    oneLiner: "The open-weight workhorse",
    tone: "Plain, helpful, and neutral. Meta's instruction-tuned Llama 4 reads like a sanitized ChatGPT -- useful for general tasks but without a strong persona of its own.",
    quirks: "The 'real' personality depends on the checkpoint you run. Base Llama 4 is bland by design; the interesting behaviors come from community fine-tunes (Nous, Hermes, Dolphin, etc.) that give it different voices and refusal patterns.",
  },
  metaTitle: "Llama 4 Review 2026: Meta's Open-Weights Flagship (Scout, Maverick, Behemoth)",
  metaDescription: "Llama 4 review. Scout (10M context), Maverick (400B MoE multimodal), Behemoth in preview. Benchmarks, pricing, hardware requirements. April 2026.",
};
