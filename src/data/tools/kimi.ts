import { ToolReview } from "@/lib/types";

export const kimi: ToolReview = {
  slug: "kimi",
  name: "Kimi K3 (Moonshot)",
  tagline: "Moonshot's 2.8T-parameter Kimi K3 (launched 2026-07-16/17) is the largest open-weight model ever released -- 1M context, multimodal, $3/$15 per 1M via API, ranked best-available on Arena.AI at launch. WEIGHTS SHIPPED ~2026-07-26/27 on Hugging Face (2.8T total / 104B activated, safetensors) under a custom Kimi K3 License, not the Modified MIT of the K2 line",
  category: "ai-local-models",
  url: "https://www.moonshot.cn",

  scores: {
    easeOfUse: 6,
    outputQuality: 9,
    value: 8.5,
    features: 9,
    overall: 8.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "API (Kimi K3)",
      price: "$3 / $15",
      period: "per 1M tokens (input/output)",
      features: ["K3 (launched 2026-07-16): 2.8T-param open-weight multimodal reasoning model", "1M token context window", "Reasoning effort currently supports only 'max'", "Live on kimi.com, Kimi app, Moonshot API, and OpenRouter; capacity-limited at launch (frequent 429s)"],
    },
    {
      plan: "Self-hosted (Free -- K2.6/K2.7 line)",
      price: "$0",
      features: ["K3 WEIGHTS PUBLISHED ~2026-07-26/27 at huggingface.co/moonshotai/Kimi-K3 -- safetensors, 2.8T total params, 104B activated, 1,048,576-token context", "K3 ships under its own **Kimi K3 License**, NOT the Modified MIT used for K2 -- read the license terms before commercial use", "K2.6 + K2.7-Code weights remain on Hugging Face under Modified MIT", "Fine-tuning permitted"],
    },
    {
      plan: "API (Moonshot direct, K2.6)",
      price: "$0.60",
      period: "per 1M input tokens",
      features: ["K2.6: $0.60 in / $2.50 out (Moonshot direct)", "256K context", "Native video input (mp4/mov/avi/webm)"],
    },
  ],

  pros: [
    "Frontier-tier performance -- Elo 1309 on GDPval-AA, behind only OpenAI and Anthropic flagships",
    "Beats Claude Opus 4.5 on several coding benchmarks per community testing",
    "Unified thinking + non-thinking modes in one model (no need to swap)",
    "256K context window handles large codebases for agentic coding",
    "Weights are genuinely downloadable -- K2.6/K2.7-Code under Modified MIT, and K3 under its own Kimi K3 License (check its terms before commercial use)",
    "Native tool-use and agentic planning trained in -- not bolted on",
  ],
  cons: [
    "Self-hosting is datacenter-only -- K3 is 2.8T params (104B activated) and even the older K2 line needs 4+ H100-class GPUs",
    "Moonshot is a smaller lab than DeepSeek/Alibaba -- less Western infrastructure support",
    "API pricing ($0.60 in / $3.00 out) is higher than DeepSeek V3.2 ($0.28 in / $0.42 out)",
    "PRC content filters apply (Tiananmen, Taiwan, etc.)",
    "Documentation is heavily Chinese-first -- English docs trail releases",
  ],
  knownIssues: [
    {
      description: "OPEN WEIGHTS SHIPPED (~2026-07-26/27 -- Moonshot announced 7/27 and reporting puts the actual drop a day earlier, so treat the exact day as approximate): Moonshot published **Kimi K3's weights** to Hugging Face at `moonshotai/Kimi-K3`, resolving the open question this page carried since launch. The model card confirms **2.8T total parameters with 104B activated** (the ~50B active figure that circulated in aggregator coverage was wrong), a **1,048,576-token context window**, and safetensors in F32 / BF16 / U8. **License is the bespoke 'Kimi K3 License', NOT the Modified MIT that covers K2.6 and K2.7-Code** -- the card states 'Both the code repository and the model weights are released under the Kimi K3 License', so anyone planning commercial use or a derivative needs to read those terms rather than assuming K2 permissions carry over. Practical effect: K3 becomes the largest open-weight model actually downloadable, though at 2.8T params it is a datacenter-class deployment, not a local one",
      source: "Hugging Face model card (huggingface.co/moonshotai/Kimi-K3, fetched 2026-07-29)",
      date: "2026-07-27",
    },
    {
      description: "MODEL LAUNCH -- KIMI K3 (2026-07-16/17): Moonshot shipped **Kimi K3**, billed as the largest open-weight model ever announced -- **2.8T total parameters**, multimodal reasoning, **1M token context**, live immediately on kimi.com, the Kimi app, the Moonshot API, and OpenRouter at **$3/M input, $15/M output** (vs Fable 5's $50/M output). Unveiled at the World AI Conference in Shanghai 7/17 after appearing on platforms 7/16; the stealth Arena model 'Kivine' was K3 in testing, and Arena.AI ranked it the best available model at launch. Vendor claims it performs competitively with Claude Fable 5 and 'substantially outperforms' Opus 4.8 and GPT-5.6 Sol -- third-party verification pending; treat vendor benchmark claims accordingly. Market reaction was dubbed a 'second DeepSeek shock': TSMC fell 7%, SoftBank 9%, Nasdaq 100 ~1% on 7/17. CAVEATS (updated 2026-07-29 -- (a) and (d) are now RESOLVED, see the weights-release entry above): (a) weights shipped ~2026-07-26/27; (b) API capacity is limited at launch -- OpenRouter flags frequent 429 errors; (c) reasoning effort currently supports only 'max'; (d) the aggregator-reported ~50B active-parameter figure was WRONG -- the model card publishes **104B activated**",
      source: "OpenRouter (openrouter.ai/moonshotai/kimi-k3), Fortune (2026-07-17), Reuters, CNBC, r/LocalLLaMA",
      date: "2026-07-17",
    },
    {
      description: "MODEL LAUNCH (2026-06-12): **Kimi K2.7-Code** -- Moonshot's code-specialized variant dropped on HuggingFace (moonshotai/Kimi-K2.7-Code, HN front page 333 points). Specs: 1T-param MoE with 32B active (384 experts), 256K context, Modified MIT license, MoonViT 400M vision encoder, built on K2.6, ~30% fewer thinking tokens than K2.6, forces thinking mode on. API via platform.moonshot.ai (OpenAI- and Anthropic-compatible endpoints). Notably honest self-published benchmarks show it TRAILING the frontier: Kimi Code Bench v2 62.0 vs GPT-5.5's 69.0 and Opus 4.8's 67.4 -- Moonshot is positioning on open-weights value, not SOTA claims. API pricing circulating in aggregators (~$0.19 cached/$0.95 in/$4.00 out per 1M) -- verify on the vendor pricing page before relying on it",
      source: "HuggingFace (huggingface.co/moonshotai/Kimi-K2.7-Code), Hacker News, platform.moonshot.ai",
      date: "2026-06-12",
    },
    {
      description: "API DEPRECATION (2026-05-25, vendor docs verbatim: 'The kimi-k2 series models were officially discontinued on May 25, 2026'): retired model ids -- kimi-k2-0905-preview, kimi-k2-0711-preview, kimi-k2-turbo-preview, kimi-k2-thinking, kimi-k2-thinking-turbo. If your code pins any of these, requests now fail; migrate to kimi-k2.6 (or kimi-k2.5, which remains an active model alongside it). K2.6 detail confirmed on the vendor blog: open weights on HuggingFace (moonshotai/Kimi-K2.6), 256K context (262,144 default), agent swarm scaling to **300 sub-agents / 4,000 coordinated steps** (up from K2.5's 100/1,500)",
      source: "Moonshot platform docs (platform.kimi.ai/docs/models), kimi.com/blog/kimi-k2-6, HuggingFace moonshotai/Kimi-K2.6",
      date: "2026-05-25",
    },
    {
      description: "SUPERSEDED (2026-07-16): the June-era 'K3 never shipped / treat K3 claims as fabrication' guidance no longer holds -- Kimi K3 is real and launched July 16-17, 2026 (see the K3 launch entry above). The May Manifold window did resolve NO (K3 missed May by six weeks), and the skepticism was correct at the time; the launch simply came later than the rumor mill claimed. Retained for history: the K2-series API deprecation (5/25) and K2.6 investment preceded K3 rather than replacing it.",
      source: "kimi.com, OpenRouter (openrouter.ai/moonshotai/kimi-k3), Fortune (2026-07-17)",
      date: "2026-07-16",
    },
    {
      description: "Kimi K2.6 (GA 2026-04-20) supersedes K2.5 -- 1T total / 32B active MoE, 256K context, adds native video input (mp4/mov/avi/webm). Scores 54 on Artificial Analysis Intelligence Index v4.0, ranked #1 open-weights and #4 overall (three points behind Claude Opus 4.7 / Gemini 3.1 Pro / OpenAI flagships at 57). SWE-Bench Pro 58.6%. Modified MIT license unchanged. Moonshot direct API: $0.60 in / $2.50 out per 1M tokens. OpenRouter blended: ~$0.95 in / $4.00 out. If you were on K2.5, the upgrade is non-breaking on the API side -- Moonshot routes the K2.6 model under the same endpoint family",
      source: "Moonshot Kimi blog (kimi.com/blog/kimi-k2-6), HuggingFace moonshotai/Kimi-K2.6, Artificial Analysis, OpenRouter, SiliconANGLE",
      date: "2026-04-20",
    },
    {
      description: "Self-hosting K2.5 / K2.6 at usable speed requires $30K+ in enterprise GPU hardware (8x H200 FP8 or 16x H100 production-grade) -- realistically this is a hosted-API model. Mac Studio M3 Ultra 256 GB unified RAM at Q2 quantization runs the model but at ~3 tok/s",
      source: "Reddit r/LocalLLaMA, llm-stats.com",
      date: "2026-03",
    },
    {
      description: "Early K2.5 releases had inconsistent tool-calling when quantized below Q4 -- community fixes landed March 2026; K2.6 inherits the same tool-use stack so quant guidance carries forward",
      source: "Hugging Face discussions",
      date: "2026-03",
    },
  ],
  bestFor: "Agentic coding workflows, tool-use agents, long-horizon repository work (1M context), and teams who want frontier-tier quality at a fraction of frontier pricing ($15/M output vs Fable 5's $50/M).",
  notFor: "Solo developers or hobbyists who want to run models locally -- the K3 weights are public now, but 2.8T parameters is datacenter territory, far beyond consumer hardware. Use Qwen3-Coder-Next or DeepSeek for self-hosting today.",
  verdict: "Kimi K3 (July 16-17, 2026) vaulted Moonshot from 'best open-weights value' to genuine frontier contention: 2.8T parameters, 1M context, multimodal, ranked best-available on Arena.AI at launch, and priced at $3/$15 per 1M -- a fifth of Anthropic's Fable 5 output rate. The launch rattled markets enough to be called a second DeepSeek shock. The caveats matter, though: the 'open-weight' branding is a promise, not a shipped artifact (weights due late July, license unconfirmed), vendor benchmark claims await third-party verification, and the API is visibly capacity-strained. If you want maximum capability per dollar via hosted API, K3 is now the pick to test first. If you need weights you can actually download today, that's still K2.6/K2.7-Code -- or watch for the K3 drop.",

  lastReviewedDate: "2026-07-29",
  dataSources: [
    { name: "Hugging Face: moonshotai/Kimi-K3 model card (weights published 2026-07-27; 2.8T total / 104B activated; Kimi K3 License)", url: "https://huggingface.co/moonshotai/Kimi-K3", dateAccessed: "2026-07-29" },
    { name: "OpenRouter: Kimi K3 (pricing, context, capacity notes)", url: "https://openrouter.ai/moonshotai/kimi-k3", dateAccessed: "2026-07-18" },
    { name: "Fortune: Moonshot Kimi K3 rattles markets (2026-07-17)", url: "https://fortune.com/2026/07/17/china-moonshot-kimi-k3-markets-china-ai/", dateAccessed: "2026-07-18" },
    { name: "Moonshot Kimi K2.6 blog (GA 2026-04-20)", url: "https://www.kimi.com/blog/kimi-k2-6", dateAccessed: "2026-04-27" },
    { name: "HuggingFace moonshotai/Kimi-K2.6", url: "https://huggingface.co/moonshotai/Kimi-K2.6", dateAccessed: "2026-04-27" },
    { name: "Artificial Analysis: Kimi K2.6 leading open weights", url: "https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model", dateAccessed: "2026-04-27" },
    { name: "SiliconANGLE: Kimi K2.6 release", url: "https://siliconangle.com/2026/04/20/moonshot-ai-releases-kimi-k2-6-model-1t-parameters-attention-optimizations/", dateAccessed: "2026-04-27" },
    { name: "OpenRouter Kimi K2.6 pricing", url: "https://openrouter.ai/moonshotai/kimi-k2.6", dateAccessed: "2026-04-27" },
    { name: "llm-stats.com", dateAccessed: "2026-04-13" },
    { name: "Reddit r/singularity, r/LocalLLaMA", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.moonshot.cn",
  status: "active",
  benchmarks: {
    modelName: "Kimi K3 (2.8T, launched 2026-07-16) -- Arena.AI ranked it best-available at launch; vendor claims parity with Fable 5, third-party suites pending. Scores below are K2.6/K2.5-era baselines retained until K3 third-party runs publish",
    scores: [
      { name: "SWE-Bench Pro", score: 58.6, maxScore: 100, unit: "%" },
      { name: "MMLU-Pro (K2.5 baseline)", score: 84.8, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond (K2.5 baseline)", score: 80.5, maxScore: 100, unit: "%" },
      { name: "AIME 2025 (K2.5 baseline)", score: 91.2, maxScore: 100, unit: "%" },
      { name: "LiveCodeBench (K2.5 baseline)", score: 74.1, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-27",
  },
  systemRequirements: [
    {
      variant: "Kimi K2.5 (1T total, 32B active MoE)",
      min: "256 GB unified RAM Mac Studio M3 Ultra (Q2, ~3 tok/s)",
      max: "8× H200 141 GB FP8 or 16× H100 (production-grade)",
      notes: "Practically a hosted-only model for most users -- self-hosting requires enterprise hardware",
    },
  ],

  personality: {
    oneLiner: "The long-context note-taker",
    tone: "Careful and document-focused. Kimi K2.5 shines when you dump a long document in -- replies read as summary-and-citation rather than open chat, leaning on the source material rather than the model's opinions.",
    quirks: "Context handling is the whole pitch. Without a document to anchor to, replies feel plainer than Qwen or DeepSeek. Native Chinese quality is very strong; English is decent but not class-leading.",
  },
  metaTitle: "Kimi K3 Review 2026: Moonshot's 2.8T 'Second DeepSeek Shock' Model",
  metaDescription: "Kimi K3 review. Launched July 16-17 2026: 2.8T parameters, 1M context, multimodal, $3/$15 per 1M -- ranked best-available on Arena.AI at launch. Weights promised late July. K2.6/K2.7-Code remain the downloadable line.",
};
