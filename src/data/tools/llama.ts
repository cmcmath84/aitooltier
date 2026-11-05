import { ToolReview } from "@/lib/types";

export const llama: ToolReview = {
  slug: "llama",
  name: "Llama 4 (Meta)",
  tagline: "**Nov 2026: no new Llama since April 2025 -- Meta now ships open weights as Muse.** Meta's Llama 4 open-weights family -- Scout (10M context) and Maverick (multimodal 400B MoE) -- is still downloadable and documented at dev.meta.ai/llama, where Llama 4 is still labelled LATEST. Meta's current open weights are Muse Glimmer (30B, Apache 2.0, 2026-08-10) and Muse Spark Open (816B, 2026-10-15), covered on the Muse Spark page",
  category: "ai-local-models",
  url: "https://dev.meta.ai/llama",

  scores: {
    easeOfUse: 5,
    outputQuality: 8.5,
    value: 9,
    features: 8,
    overall: 7.6,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["Llama 4 Community License", "Unlimited use", "Zero data sharing", "700M MAU clause + attribution required"],
    },
    {
      plan: "Hosted inference (third-party providers)",
      price: "From $0.10",
      period: "per 1M input tokens",
      features: [
        "Llama 4 Scout: OpenRouter lists $0.10 in / $0.30 out per 1M tokens (2026-11-05)",
        "Llama 4 Maverick: OpenRouter lists $0.35 in / $1.00 out per 1M tokens (2026-11-05)",
        "Meta's own Meta Model API serves Muse models, not Llama",
        "No hardware needed",
      ],
    },
  ],

  pros: [
    "Llama 4 Scout has a 10M token context window -- Meta still calls it 'the longest context length available in the industry' -- ideal for RAG",
    "Llama 4 Maverick is natively multimodal (early-fusion) and hit Elo 1417 on LMArena experimental",
    "Permissive-enough license for most commercial use (700M MAU clause rarely binds)",
    "Biggest open-weights ecosystem by far -- Ollama, LM Studio, vLLM, llama.cpp, thousands of fine-tunes",
    "Cheap to rent: OpenRouter lists Scout at $0.10 / $0.30 and Maverick at $0.35 / $1.00 per 1M tokens",
  ],
  cons: [
    "Llama 4 initial launch underdelivered on vibes vs. benchmark numbers per r/LocalLLaMA consensus",
    "Community License is not Apache/MIT -- the 700M MAU clause and attribution requirement rule out some commercial use (Meta's newer Muse Glimmer is Apache 2.0)",
    "Requires serious hardware to run the flagship sizes -- Maverick full-precision needs 4× H100",
    "No new Llama model since April 2025 -- newer open-weight models, including Meta's own Muse Spark Open and Muse Glimmer, have moved past Llama 4",
    "The standalone Llama site is gone: llama.meta.com and llama.com now redirect to Meta's developer site, dev.meta.ai",
  ],
  knownIssues: [
    {
      description: "NO NEW LLAMA + SITE FOLDED INTO DEV.META.AI (verified 2026-11-05, vendor-primary): llama.meta.com and llama.com now 301-redirect to dev.meta.ai, and the Llama docs live at dev.meta.ai/llama, which still says 'Download models LATEST Llama 4 models'. The newest model repo in Meta's meta-llama Hugging Face org was created 2025-04-28 (Llama Prompt Guard 2; the Llama 4 repos date from 2025-04-01 to 2025-04-04), research.meta.ai's blog has no Llama posts, and the latest Meta Newsroom post matching 'llama' is from 2025-12-19. Meta's Model API docs list Muse models, not Llama. Llama is still documented and downloadable (Llama 4, 3 and 2 licences and model cards remain), but no new Llama has shipped in 19 months.",
      source: "dev.meta.ai/llama, dev.meta.ai/llama/models/llama-4, dev.meta.ai/docs/models, huggingface.co/api/models?author=meta-llama, research.meta.ai/blog, about.fb.com/wp-json search (all fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "META'S OPEN WEIGHTS NOW SHIP AS MUSE (2026-08-10 / 2026-10-15, vendor-primary): Meta resumed open-weight releases under the Muse name rather than Llama. Muse Glimmer (30B, 2026-08-10) is open-sourced 'under a permissive Apache 2.0 license' -- 'Muse Glimmer is available now, and you can download the weights on Hugging Face'. Muse Spark Open (2026-10-15) is 'a natively multimodal model with 816B total parameters (42B active) and a 1M-token context window'. Both sit in the meta-models Hugging Face org. For a new self-hosted project, compare those first -- full coverage is on the Muse Spark page (/tools/muse-spark).",
      source: "research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model (JSON-LD 2026-08-10), research.meta.ai/blog/muse-spark-open (JSON-LD 2026-10-15), huggingface.co/api/models?author=meta-models (fetched 2026-11-05)",
      date: "2026-10-15",
    },
    {
      description: "CORRECTION (2026-11-05): this page priced Llama 4 cloud APIs at 'Scout: $3 in / $7.50 out' and 'Maverick: $8 in / $20 out' per 1M tokens. OpenRouter's live catalog lists Llama 4 Scout at $0.10 in / $0.30 out and Maverick at $0.35 in / $1.00 out per 1M. Together AI's pricing page now lists Llama 4 only under fine-tuning (Maverick '$5.60 $14.00' per 1M training tokens), not serverless inference. Do not restore the $3-$8 figures.",
      source: "openrouter.ai/api/v1/models, together.ai/pricing (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "CORRECTION (2026-11-05): this page said 'Behemoth (~2T) is in preview as the teacher model'. Meta's current Llama pages (dev.meta.ai/llama, the Llama 4 model page and the Llama 4 model card) do not mention Behemoth at all, and no Behemoth repo exists in the meta-llama Hugging Face org. Claim removed; do not restore without a Meta source. Score change on 2026-11-05: features 9 -> 8 and overall 7.9 -> 7.6, because the features score rested partly on Behemoth and on continued Llama investment, and no Llama has shipped since April 2025.",
      source: "dev.meta.ai/llama, dev.meta.ai/llama/models/llama-4, dev.meta.ai/llama/docs/model-cards-and-prompt-formats/llama4, huggingface.co/api/models?author=meta-llama (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "STRATEGIC SHIFT (2026-04-08): Meta's frontier development moved OFF the Llama line. Meta Superintelligence Labs launched **Muse Spark** -- Meta's first proprietary, closed-source frontier model (see the muse-spark page) -- and tier-1 coverage framed it as the Llama successor ('Goodbye Llama,' per VentureBeat). Llama was NOT formally retired: existing models stay downloadable and documented, and Bloomberg-sourced reports said open derivatives of future models were under consideration -- which arrived as Muse Glimmer and Muse Spark Open, not as a new Llama (see entries above). 'Llama 5' claims circulating on low-quality aggregators are fabricated; no vendor announcement exists.",
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
  bestFor: "Teams already standardized on Llama 4 tooling who want a known, widely supported open-weight model -- especially Scout's 10M context for long-document RAG -- with cheap hosted inference from third-party providers.",
  notFor: "New self-hosted projects that want Meta's current open weights (use Muse Glimmer or Muse Spark Open -- see the Muse Spark page), teams chasing the frontier on benchmarks, and anyone who needs true MIT/Apache licensing from Llama itself (Muse Glimmer is Apache 2.0; Qwen, GLM and MiniMax are other options).",
  verdict: "Llama 4 is still the compatibility king of open weights -- biggest ecosystem, longest context (Scout's 10M), genuine multimodality (Maverick) -- and it is cheap to rent. But it is now a finished line: there has been no new Llama since April 2025, the standalone Llama site has been folded into dev.meta.ai, and when Meta returned to open weights in 2026 it did so under the Muse name (Muse Glimmer, Apache 2.0; Muse Spark Open, 816B). Existing Llama 4 weights aren't going anywhere and remain a safe pick for tooling compatibility, but new projects should evaluate Meta's Muse open models first.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Meta: Llama docs and downloads (dev.meta.ai/llama)", url: "https://dev.meta.ai/llama", dateAccessed: "2026-11-05" },
    { name: "Meta: Llama 4 model page", url: "https://dev.meta.ai/llama/models/llama-4", dateAccessed: "2026-11-05" },
    { name: "Meta: Llama 4 model card and prompt formats", url: "https://dev.meta.ai/llama/docs/model-cards-and-prompt-formats/llama4", dateAccessed: "2026-11-05" },
    { name: "Meta: llama.meta.com (redirects to dev.meta.ai)", url: "https://llama.meta.com", dateAccessed: "2026-11-05" },
    { name: "Meta Model API: Models", url: "https://dev.meta.ai/docs/models", dateAccessed: "2026-11-05" },
    { name: "Hugging Face: meta-llama models (API listing)", url: "https://huggingface.co/api/models?author=meta-llama&sort=createdAt&direction=-1&limit=15", dateAccessed: "2026-11-05" },
    { name: "Hugging Face: meta-models (Muse) models (API listing)", url: "https://huggingface.co/api/models?author=meta-models&sort=createdAt&direction=-1&limit=15", dateAccessed: "2026-11-05" },
    { name: "Meta AI Research blog", url: "https://research.meta.ai/blog", dateAccessed: "2026-11-05" },
    { name: "Meta AI Research: Introducing Muse Glimmer (2026-08-10)", url: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model", dateAccessed: "2026-11-05" },
    { name: "Meta AI Research: Muse Spark Open (2026-10-15)", url: "https://research.meta.ai/blog/muse-spark-open", dateAccessed: "2026-11-05" },
    { name: "Meta Newsroom: post search for 'llama'", url: "https://about.fb.com/wp-json/wp/v2/posts?search=llama&per_page=10&_fields=date,link,title", dateAccessed: "2026-11-05" },
    { name: "OpenRouter: public model catalog API", url: "https://openrouter.ai/api/v1/models", dateAccessed: "2026-11-05" },
    { name: "Together AI pricing", url: "https://www.together.ai/pricing", dateAccessed: "2026-11-05" },
    { name: "LMArena leaderboard", dateAccessed: "2026-04-13" },
    { name: "Reddit r/LocalLLaMA", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://dev.meta.ai/llama",
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
  metaTitle: "Llama 4 Review 2026: Meta's Last Llama (Scout, Maverick) vs Muse Open Weights",
  metaDescription: "Llama 4 review (Nov 2026). Scout (10M context) and Maverick (400B MoE multimodal) are still downloadable, but no new Llama since April 2025 -- Meta now ships open weights as Muse Glimmer and Muse Spark Open. Hosted pricing, hardware, license.",
};
