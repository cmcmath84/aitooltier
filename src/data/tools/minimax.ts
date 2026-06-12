import { ToolReview } from "@/lib/types";

export const minimax: ToolReview = {
  slug: "minimax",
  name: "MiniMax M3",
  tagline: "MiniMax's coding/agent flagship -- M3 (June 1 2026): 1M-token context, MSA sparse attention (>15x decoding speedup at long context), SWE-Bench Pro 59.0%, Terminal-Bench 66.0%. OPEN WEIGHTS LIVE on HuggingFace since June 12 (~428B total / ~23B active, native multimodal, minimax-community license)",
  category: "ai-local-models",
  url: "https://www.minimax.io",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 9,
    value: 9.5,
    features: 8.5,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["MIT license on M2 / M2.5", "M2.7 license listed as 'Other' on HuggingFace -- verify before commercial use", "Weights on Hugging Face (MiniMaxAI/MiniMax-M2.7)"],
    },
    {
      plan: "API (M2 / M2.5 reference, MiniMax / OpenRouter)",
      price: "$0.30",
      period: "per 1M input tokens",
      features: ["M2: $0.30 in / $1.20 out", "192K+ context", "Native agentic + tool-use"],
    },
    {
      plan: "API (M2.7)",
      price: "Not yet published",
      features: ["M2.7 per-token pricing not posted on platform.minimax.io/subscribe/token-plan as of 2026-04-27 -- verify before quoting in production planning"],
    },
  ],

  pros: [
    "229B/10B-active MoE delivers Tier-1 agentic performance with the smallest active footprint in its class -- M2.7 hits 56.22% on SWE-Bench Pro and 57.0% on Terminal Bench 2",
    "Sparse MoE design: ~10B active params during inference means fast and cheap to run despite 229B total",
    "M2 / M2.5 (predecessors) carry true MIT licensing with zero commercial restrictions; M2.7 license needs verification (HF lists 'Other')",
    "Native agentic and tool-use training -- positioned as a 'self-evolving agent model'",
    "Per-layer QK-Norm + full-attention blocks make long-context stable",
    "Strong cost-to-performance ratio for agentic workloads vs closed frontier models",
  ],
  cons: [
    "Smaller Western community than Qwen/DeepSeek -- tutorials sparse",
    "Ollama support arrived late -- community relied on vLLM for months",
    "English writing tone is noticeably less polished than Claude or Mistral",
    "PRC content filters apply",
    "MiniMax as a lab is less well-known than Alibaba or DeepSeek -- some enterprise buyers hesitate",
  ],
  knownIssues: [
    {
      description: "WEIGHTS SHIPPED (2026-06-12): **MiniMax-M3 open weights landed on HuggingFace** (MiniMaxAI/MiniMax-M3 + an MXFP8 quant) -- hitting the 'within 10 days of June 1' promise on day 10-11. Model-card specs: **~428B total / ~23B active params**, native multimodal (text/image/video input), MiniMax Sparse Attention, 1M-token context, 9x prefill / 15x decode speedup vs M2 at 1M ctx; tech report arXiv:2606.13392. LICENSE CAVEAT: **minimax-community license**, not MIT like the M2 line -- review terms before commercial self-hosting. Self-reported SWE-Bench Pro 59% now open to independent verification (Artificial Analysis pre-drop analysis pending update)",
      source: "HuggingFace (huggingface.co/MiniMaxAI/MiniMax-M3), Artificial Analysis (artificialanalysis.ai/articles/minimax-m3), The Decoder",
      date: "2026-06-12",
    },
    {
      description: "MODEL LAUNCH (2026-06-01): **MiniMax M3** -- coding/agent flagship with **1M-token context** (product page guarantees minimum 512K) and MSA sparse attention delivering vendor-claimed **>9x prefilling / >15x decoding speedups** at long context (per-token compute at 1M context = 1/20th of prior gen). Vendor-published benchmarks: SWE-Bench Pro 59.0%, Terminal-Bench 2.1 66.0%, BrowseComp 83.5 (above Opus 4.7's 79.3), PostTrainBench 37.1 (#3 behind Opus 4.7 and GPT-5.5), MCP Atlas 74.2%. WEIGHTS CAVEAT: announced as open-weight with release 'over the next 10 days,' but as of 6/10 there is NO M3 repo on HuggingFace (latest = M2.7) -- label it 'open-weight, release pending,' not available. Token Plan subscriptions: Plus $20/mo (~1.7B tokens), Max $50/mo (~5.1B), Ultra $120/mo (~9.8B)",
      source: "MiniMax blog (minimax.io/blog/minimax-m3), minimax.io/models/text/m3, HuggingFace MiniMaxAI (checked 2026-06-10)",
      date: "2026-06-01",
    },
    {
      description: "MiniMax-M2.7 (released 2026-03-18) supersedes M2.5 -- 229B total params, sparse MoE positioned by MiniMax as a 'self-evolving' agent model. Verified third-party benchmarks: SWE-Bench Pro 56.22%, Terminal Bench 2 57.0%, SWE Multilingual 76.5%, Multi SWE Bench 52.7%, VIBE-Pro 55.6%, GDPval-AA Elo 1495. The old 'first open-weight to hit 80.2% SWE-Bench Verified matching Opus 4.6' framing was an M2.5-on-different-bench claim and does NOT carry forward to M2.7 directly -- SWE-Bench Pro and SWE-Bench Verified are not comparable. License labeled 'Other' on HuggingFace (not MIT like M2 / M2.5) -- verify before commercial use",
      source: "MiniMax blog (minimax.io/news/minimax-m27-en), HuggingFace MiniMaxAI/MiniMax-M2.7, MarkTechPost",
      date: "2026-03-18",
    },
    {
      description: "M2 initial release required custom vLLM build -- community quants took 2-3 weeks to stabilize. M2.7 inherits the same architecture so the vLLM compatibility story carries forward",
      source: "GitHub MiniMax-AI/MiniMax-M2, Hugging Face discussions",
      date: "2026-02",
    },
    {
      description: "Per-layer QK-Norm is non-standard -- some inference backends had subtle bugs at long context",
      source: "Reddit r/LocalLLaMA",
      date: "2026-03",
    },
  ],
  bestFor: "Agentic coding and tool-use workflows on a budget. Best price-to-SWE-Bench ratio of any open-weights model in 2026.",
  notFor: "Teams that prioritize polished English writing (Mistral Large 3 or Claude are better), or anyone who needs the deepest ecosystem support (Llama is still that).",
  verdict: "MiniMax M2/M2.5 is the most cost-efficient frontier-tier open model in 2026. The 80.2% SWE-Bench Verified score is a genuine breakthrough -- matching Claude Opus 4.6 on real coding tasks at a tenth of the price. The sparse 10B-active MoE runs fast on moderate hardware. The main drawback is ecosystem: MiniMax has less Western infrastructure support than Alibaba or DeepSeek. If you're building an agentic product and want maximum value per token, M2.5 is an A-tier pick.",

  lastReviewedDate: "2026-06-12",
  dataSources: [
    { name: "MiniMax: M2.7 release blog (2026-03-18)", url: "https://www.minimax.io/news/minimax-m27-en", dateAccessed: "2026-04-27" },
    { name: "HuggingFace MiniMaxAI/MiniMax-M2.7", url: "https://huggingface.co/MiniMaxAI/MiniMax-M2.7", dateAccessed: "2026-04-27" },
    { name: "MarkTechPost: MiniMax M2.7 release coverage", url: "https://www.marktechpost.com/2026/04/12/minimax-just-open-sourced-minimax-m2-7-a-self-evolving-agent-model-that-scores-56-22-on-swe-pro-and-57-0-on-terminal-bench-2/", dateAccessed: "2026-04-27" },
    { name: "Artificial Analysis MiniMax M2 benchmarks", dateAccessed: "2026-04-13" },
    { name: "Bytebot MiniMax M2.5 analysis", dateAccessed: "2026-04-13" },
    { name: "Hugging Face MiniMaxAI collection", dateAccessed: "2026-04-13" },
    { name: "GitHub MiniMax-AI/MiniMax-M2", dateAccessed: "2026-04-13" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.minimax.io",
  status: "active",
  benchmarks: {
    modelName: "MiniMax-M2.7 (229B total, ~10B active MoE) -- self-evolving agent positioning per vendor",
    scores: [
      { name: "SWE-Bench Pro", score: 56.22, maxScore: 100, unit: "%" },
      { name: "Terminal Bench 2", score: 57.0, maxScore: 100, unit: "%" },
      { name: "SWE Multilingual", score: 76.5, maxScore: 100, unit: "%" },
      { name: "Multi SWE Bench", score: 52.7, maxScore: 100, unit: "%" },
      { name: "VIBE-Pro", score: 55.6, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1495,
    lastUpdated: "2026-04-27",
  },
  systemRequirements: [
    {
      variant: "MiniMax M2 / M2.5 (230B total, ~10B active MoE)",
      min: "96 GB unified RAM Q3 (Mac M3 Ultra)",
      max: "4× A100 80 GB FP8",
      notes: "Sparse MoE activates only ~10B params during inference -- fast tok/s on moderate hardware",
    },
    {
      variant: "MiniMax M1 (hybrid-attention reasoning predecessor)",
      min: "96 GB unified RAM Q3",
      max: "4× A100 80 GB FP8",
    },
  ],

  personality: {
    oneLiner: "The Chinese multimodal generalist",
    tone: "Expressive and media-rich. MiniMax's chat models lean into long, formatted responses and handle voice and image prompts more naturally than most pure-text peers.",
    quirks: "Strong multimodal story; text-only quality is good but not class-leading versus DeepSeek or Qwen. Like other Chinese models, careful on domestic political topics.",
  },
  metaTitle: "MiniMax M2.7 Review 2026: 56.22% SWE-Pro Self-Evolving Agent Model",
  metaDescription: "MiniMax M2.7 review (released March 18 2026). 229B/10B-active MoE positioned as self-evolving agent. SWE-Bench Pro 56.22%, Terminal Bench 2 57.0%, GDPval-AA Elo 1495. License: 'Other' on HF (verify).",
};
