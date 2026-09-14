import { ToolReview } from "@/lib/types";

export const qwen: ToolReview = {
  slug: "qwen",
  name: "Qwen (Alibaba)",
  tagline: "Alibaba's open-weights + API family, and August 2026 was its biggest open-release month yet: **Qwen3.8-2.4T-A95B -- the Max-class flagship -- went open-weight on 2026-08-08** (custom Qwen3.8-Max licence), **Qwen3.8-27B** dense landed Apache 2.0 (8/05), and **Qwen3.8-Flash-Next** (8/24 weights, 8/26 blog) previews the Qwen4 architecture: 125B main + 51B n-gram embeddings with only 6B active, served as Qwen3.8-Flash at $0.15/$0.47 per 1M. Qwen 3.7 Max remains the GA API flagship ($2.50/$7.50)",
  category: "ai-local-models",
  url: "https://qwen.ai",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 10,
    features: 9,
    overall: 8.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["Apache 2.0 license on open weights", "Available on Hugging Face, ModelScope, Ollama", "Fine-tuning fully permitted"],
    },
    {
      plan: "API (OpenRouter / Alibaba Cloud)",
      price: "$0.12",
      period: "per 1M input tokens",
      features: ["Qwen3-Coder-Next 80B-A3B: $0.12 in / $0.60 out", "Qwen3.5-397B: $0.40 in / $2.40 out", "Qwen3-Max (API only): $0.78 in / $6.00 out"],
    },
    {
      plan: "API (Qwen 3.6-Plus flagship, Mar 30 2026)",
      price: "$0.90",
      period: "per 1M input tokens",
      features: [
        "Native 1M context window",
        "Always-on chain-of-thought reasoning",
        "Agentic tool-use baked in (matches Claude Opus 4.5 on SWE-bench per Alibaba Cloud)",
        "API-only (weights not released)",
      ],
    },
    {
      plan: "API (Qwen 3.7 Max flagship, May 20 2026 -- CLOSED WEIGHTS)",
      price: "$2.50 / $7.50",
      period: "per 1M tokens input/output (50% launch promo $1.25/$3.75 until 2026-06-22)",
      features: [
        "Vendor benchmarks: SWE-Bench Pro 60.6%, Terminal-Bench 2.0-Terminus 69.7%, GPQA 92.4%",
        "PROPRIETARY / API-only on DashScope + Model Studio",
        "Qwen3.7-Plus sibling (Jun 2): multimodal image/video input at $0.40/$1.60 per 1M",
      ],
    },
    {
      plan: "API (Qwen 3.6-Max-Preview, Apr 20 2026 -- CLOSED WEIGHTS)",
      price: "TBD",
      period: "per 1M tokens",
      features: [
        "#1 on SWE-bench Pro, Terminal-Bench 2.0, SciCode, QwenClawBench, QwenWebBench",
        "256K context window (text-only at launch, no vision)",
        "OpenAI- and Anthropic-API-compatible endpoints",
        "Alibaba's FIRST flagship shipped without open weights -- proprietary only",
        "Available via Qwen Studio + Alibaba Cloud Model Studio",
      ],
    },
    {
      plan: "Self-hosted (Qwen3.6-27B dense, Apr 22 2026)",
      price: "$0",
      features: [
        "Apache 2.0 open weights -- no commercial restrictions",
        "DENSE 27B (not MoE) -- all params active, simpler to deploy than sparse-MoE flagships",
        "Multimodal: text + image + video, 262K native context (extensible to ~1M)",
        "Runs on a single consumer-tier GPU (RTX 4090 or equivalent at FP16; smaller VRAM at quant)",
        "BEATS Qwen3.5-397B-A17B MoE flagship on coding while being ~15x smaller in active params",
      ],
    },
  ],

  pros: [
    "Qwen 3.6-Plus (launched Mar 30 2026) is Alibaba's answer to Claude Opus 4.5 on agentic coding -- native 1M context, always-on CoT reasoning, and tool-use baked into the base model. Matches Claude on SWE-bench per Alibaba Cloud's published benchmarks",
    "Qwen3.5 Small (0.8B / 2B / 4B / 9B) is the most capable sub-10B open-weight family in 2026 -- the 2B runs on iPhone in airplane mode, the 9B matches 120B-class models on reasoning benchmarks. Apache 2.0 on all of it",
    "Qwen3.5-Omni (Mar 30 2026) is the first native multimodal open-weight model with realtime text/audio/video inputs and outputs in one unified model -- displaces needing 3 separate models for voice + vision + text",
    "Full modality lineup Apache 2.0: text (Qwen3, 3.5), vision (Qwen3-VL), coder (Qwen3-Coder-Next), reasoning (Qwen3-Thinking), omni-multimodal (Qwen3.5-Omni)",
    "Qwen3-Coder-Next 80B-A3B runs on 8 GB VRAM and still posts top-tier coding benchmarks (sparse MoE activates only ~3B params)",
    "Massive ecosystem: Ollama, llama.cpp, vLLM, LM Studio, Hugging Face all ship first-class Qwen quants within days of release",
  ],
  cons: [
    "Qwen3-Max flagship is API-only -- you can't self-host the best Alibaba model",
    "Censorship on politically sensitive topics (PRC regulations apply)",
    "English writing style occasionally stilted compared to Claude or Mistral",
    "Rapid release cadence means model names (Qwen3, Qwen3.5, Qwen3-Next, Qwen3-Max-Thinking) are confusing",
  ],
  knownIssues: [
    {
      description: "STALENESS CATCH-UP -- THREE QWEN3.8 OPEN-WEIGHT RELEASES IN AUGUST, INCLUDING THE FIRST OPEN MAX-CLASS MODEL, AND THE QWEN4 ARCHITECTURE PREVIEW (2026-08-05, 2026-08-08 and 2026-08-24/26; vendor-primary via Qwen's blog and Qwen's own Hugging Face model cards; this page was last reviewed 2026-07-22 and had only the WAIC preview): **(1) Qwen3.8-27B (weights on HF 2026-08-05, Apache 2.0)** -- the dense successor to the Qwen3.6-27B this page already recommends for single-GPU self-hosting; FP8 build followed 8/13. **(2) Qwen3.8-2.4T-A95B (weights on HF 2026-08-08, custom 'qwen3.8-max' licence, NOT Apache)** -- 'For the first time, Qwen3.8 brings a **Qwen-Max-class model to open release**': a 2.4T-parameter MoE with 95B active, the open counterpart of the hosted **Qwen3.8-Max** (which adds vision input, non-thinking mode, 1M context by default and built-in tools on QwenCloud). Reasoning depth via `reasoning_effort`; `preserve_thinking` keeps prior reasoning context. **The licence is the catch:** it is a bespoke Qwen3.8-Max licence rather than Apache 2.0, so read it before commercial deployment -- this is the same pattern as Kimi's K3 licence. **(3) Qwen3.8-Flash-Next (weights 2026-08-24, blog 2026-08-26, 'Qwen Community 1.0' licence)** -- 'a multimodal MoE model that also serves as an **early preview of the architecture used in Qwen4**', playing the role Qwen3-Next played for Qwen3.5. Four architectural changes: **Gated DeltaNet + Qwen Sparse Attention (QSA)** hybrid, **Gated Residual** (4-branch residual stream with dynamic gates), **N-gram Embedding** (a 51B lookup table that can be offloaded to host memory), and the **Muon optimizer**. Shape: **125B main model + 51B n-gram embeddings, 6B active per token**; 262,144 native context, 1M with YaRN. Qwen says training cost about **1/9 of Qwen3.7-Plus** while beating it on coding and office tasks. **Vendor benchmarks vs Qwen3.8-27B / Qwen3.7-Plus / DeepSeek-V4-Flash-0731:** DeepSWE 1.1 **58.7** / 42.2 / 16.5 / 54.4; SWE-bench Pro **62.5** / 61.7 / 55.8 / 56.0; SWE-bench Multilingual **81.0**; NL2Repo 48.1 (DeepSeek 54.2 leads); CoWorkBench **73.9**; JobBench **55.7**; Toolathlon Verified **73.5**; IFBench 81.3. All first-party. **Hosted pricing:** the production version, **Qwen3.8-Flash** on QwenCloud (1M context default, built-in tools), is **$0.15 per 1M input / $0.47 per 1M output** -- undercutting DeepSeek's new V4.1-Flash on output ($0.60 off-peak) and matching it on input. **WHY THIS PAGE MISSED IT:** qwen.ai/blog is client-rendered and returns nothing to plain fetches; the fix is to enumerate the Qwen org on Hugging Face by createdAt, which is how all three were found. **ALSO ON HF:** Qwen-Drive-1.0-4B (8/27), an autonomous-driving model outside this page's scope.",
      source: "Qwen blog (qwen.ai/blog?id=qwen3.8-flash-next, dated '2026/08/26', rendered via Firecrawl); Hugging Face model cards Qwen/Qwen3.8-Flash-Next (created 2026-08-24, license qwen-community-1.0), Qwen/Qwen3.8-2.4T-A95B (created 2026-08-08, license qwen3.8-max), Qwen/Qwen3.8-27B (created 2026-08-05, apache-2.0) -- all fetched 2026-09-14",
      date: "2026-08-26",
    },
    {
      description: "FLAGSHIP PREVIEW -- QWEN3.8-MAX (2026-07-19 at WAIC Shanghai, press-reported): Alibaba previewed **Qwen3.8-Max**, a **2.4-trillion-parameter sparse-MoE multimodal model** (text/image/video/docs), days after Moonshot's Kimi K3 open-weights launch. Alibaba positions it as 'second only to [Claude] Fable 5.' Access at preview is CLOSED: via Alibaba's Token Plan subscription plus the Qoder / QoderWork agentic platforms, at roughly 10% of standard pricing; **open weights 'promised soon' with no date or license, and no model card, benchmark table, or third-party eval yet** -- treat the ranking claim as unverified vendor positioning. SEPARATELY (2026-07-21) the Qwen team released **Qwen-Image-3.0**, a 3rd-gen image model (up to ~4,500-token prompts, legible text down to ~10px, 12 languages, UI/web + live-data rendering) -- but a transparency regression: **Qwen Chat access only, no open weights, no benchmarks, no technical report** (a departure from Qwen's prior Apache-2.0 same-day-weights image releases)",
      source: "MarkTechPost (2026-07-19, Qwen3.8-Max preview), Unite.ai (2026-07-21, Qwen-Image-3.0)",
      date: "2026-07-19",
    },
    {
      description: "USER-CREATED AI AGENTS SHUT DOWN -- TOOK EFFECT 2026-07-15 (confirmed): Alibaba's Qwen app (and ByteDance's Doubao, simultaneously) **shut down user-created/custom AI agent features on July 15, 2026** as China's rules on 'humanlike AI interaction services' (the anthropomorphic-AI/companion rules) took effect that day; Qwen had already disabled humanlike interactive agents ~7/10 ahead of the broader cutoff. IMPORTANT DATA DETAIL: the platforms diverge -- **Doubao** offers read-only access to old agent data until **October 15, 2026** (unrecoverable after), but **Qwen offers no migration path at all**: agent configurations and conversation histories are permanently deleted. This is a consumer-app change -- the Qwen models/API are unaffected. Separately (SCMP, early July, press-reported): Alibaba cut Qwen3.7-Max by ~80% and Qwen3.7-Plus by ~60% for international users on the Qoder platform during off-peak hours (10pm-8am Beijing = US working hours) -- an explicit play for US developer demand amid a broader Chinese token price war",
      source: "SCMP (scmp.com/tech/big-tech/article/3359482), TechTimes (2026-07-15, effective-date confirmation), Bloomberg (2026-07-06), TechNode",
      date: "2026-07-15",
    },
    {
      description: "FLAGSHIP GA + VENDOR NUMBERS CONFIRMED (verified 2026-06-09): **Qwen 3.7 Max** shipped 2026-05-20 ('Qwen3.7: The Agent Frontier' on the official Qwen blog) -- the benchmark figures that circulated in aggregators are now vendor-published: **SWE-Bench Pro 60.6%, Terminal-Bench 2.0-Terminus 69.7%, GPQA 92.4%**, plus SWE-Multilingual 78.3%, SciCode 53.5%, QwenSVG 1608. PROPRIETARY / API-only on DashScope/Model Studio. Official pricing: **$2.50/M input, $7.50/M output list -- with a 50% launch promo ($1.25/$3.75) running until 2026-06-22**. Separately, **Qwen3.7-Plus** launched ~2026-06-02 on Bailian/Model Studio: multimodal (image + video input, text output) with GUI-agent, deep reasoning, and tool invocation at $0.40/$1.60 per 1M -- press-reported agent scores (ScreenSpot Pro 79.0, AndroidWorld 81.0) await vendor tables. Both models confirmed on Alibaba's official Model Studio model list",
      source: "Qwen blog (qwen.ai/blog?id=qwen3.7), Alibaba Cloud pricing campaign (alibabacloud.com/campaign/qwen-discount), Alibaba Model Studio model list (help.aliyun.com/zh/model-studio/models), VentureBeat (Qwen3.7-Plus)",
      date: "2026-06-09",
    },
    {
      description: "INTERPRETABILITY RELEASE (2026-05-01): Alibaba released **Qwen-Scope** -- an open-source suite of **sparse autoencoder (SAE) weights** for the Qwen3 and Qwen3.5 model families, plus inference + visualization tooling. SAEs decompose internal model activations into interpretable feature directions (Anthropic / Google DeepMind have been the highest-profile labs publishing this style of interpretability work; Alibaba is the first major Chinese lab to ship SAE weights openly). Practical implication: researchers and red-teamers can now probe Qwen3.5 internals (feature attribution, concept steering, refusal-circuit analysis) without training their own SAEs -- a multi-month / multi-GPU effort. Adds to Qwen's open-weights story even as the Qwen 3.6 flagship line goes closed-weights. Materially raises the floor for safety / alignment research on Chinese open-weight families.",
      source: "Qwen blog (qwen.ai/blog?id=qwen-scope)",
      date: "2026-05-01",
    },
    {
      description: "Qwen3.6-27B dropped 2026-04-22 (~48h after Max-Preview) as the new open-weights coding champion. DENSE 27B, NOT MoE -- all params active, simpler to deploy. Apache 2.0 open weights with no commercial restrictions. Multimodal: text + image + video. 262K native context (extensible to ~1M). Verified benchmarks: SWE-bench Verified 77.2%, SWE-bench Pro 53.5%, Terminal-Bench 2.0 59.3% (matches Claude Opus 4.5 exactly), MMLU-Pro 86.2%, GPQA Diamond 87.8%, AIME 2026 94.1%, MMMU-Pro 75.8%. Notably BEATS the Qwen3.5-397B-A17B MoE flagship on coding from a single consumer GPU -- this displaces the 35B-A3B as the open-weights centerpiece for most users. Quants from unsloth + mlx-community shipped same week",
      source: "qwen.ai/blog?id=qwen3.6-27b, HuggingFace Qwen/Qwen3.6-27B, implicator.ai analysis",
      date: "2026-04-22",
    },
    {
      description: "Qwen 3.6-Max-Preview launched 2026-04-20 as Alibaba's first flagship shipped WITHOUT open weights -- #1 across SWE-bench Pro, Terminal-Bench 2.0, SciCode, QwenClawBench, and QwenWebBench. 256K context, text-only (no vision at launch), APIs compatible with OpenAI + Anthropic SDKs for easy swap-in. Signals Alibaba's pivot toward closed flagships while keeping mid-size models open. If you picked Qwen for the 'best open weights' story, the best model is no longer open -- but the 3.6-27B Apache 2.0 dense released 48 hours later mostly closes that complaint for non-frontier coding workloads",
      source: "Decrypt, CNTechPost",
      date: "2026-04",
    },
    {
      description: "CRITICAL (2026-04-15): Qwen Code free OAuth tier discontinued. Alibaba throttled from 1,000 -> 100 free requests/day before fully cutting it. To keep using Qwen Code you now need an Alibaba Cloud Coding Plan (~$50/mo), BYOK via OpenRouter / Fireworks / Cerebras, or local inference on your own hardware via Ollama/vLLM. The 'free open-source AI' framing no longer applies to hosted access -- only to self-hosted deployment",
      source: "Decrypt, GitHub QwenLM/qwen-code issues #3316",
      date: "2026-04",
    },
    {
      description: "Qwen3.6-35B-A3B open-weights release on 2026-04-16 is the open-model story of April. Sparse MoE with 35B total / 3B active, vision-language multimodal, Apache 2.0, 262K native context (extensible to ~1M). Benchmarks are best-in-class for open weights: SWE-bench Verified 73.4% (vs Gemma 4-31B 52%), AIME 2026 92.7, GPQA Diamond 86.0, MMMU 81.7 (beats Claude Sonnet 4.5 at 79.6), Terminal-Bench 2.0 51.5%. Simon Willison's pelican-drawing test favored Qwen3.6-35B-A3B over Claude Opus 4.7 -- a high-signal community endorsement",
      source: "Hugging Face Qwen3.6-35B-A3B, Alibaba Cloud announcement, Simon Willison, MarkTechPost, buildfastwithai review",
      date: "2026-04",
    },
    {
      description: "Qwen3-Max and now Qwen 3.6-Max-Preview are both API-only -- the pattern suggests Alibaba has quietly adopted closed-weights for flagships while keeping sub-flagship sizes Apache 2.0. Confusing for users expecting Alibaba's best model to be self-hostable",
      source: "Reddit r/LocalLLaMA, Decrypt",
      date: "2026-04",
    },
    {
      description: "Refuses discussion of Tiananmen, Taiwan sovereignty, Xi Jinping -- same PRC content filters as DeepSeek",
      source: "Hugging Face discussions",
      date: "2026-01",
    },
  ],
  bestFor: "Developers who want frontier-tier open weights with Apache 2.0 licensing. Qwen3-Coder-Next is arguably the best local coding model; Qwen3.5-397B is a top-3 open generalist.",
  notFor: "Teams that need the Qwen3-Max flagship self-hostable (it's API-only), or use cases that touch Chinese-government-sensitive topics.",
  verdict: "Qwen is the most complete open-weights family in 2026. Alibaba ships Apache-2.0 weights across text, coding, vision, and reasoning -- every modality has a top-tier entry. Qwen3-Coder-Next is a standout: 3B active params but competitive with Claude Sonnet on coding. The catch is that Qwen3-Max, the absolute flagship, stays closed. If you can live with the PRC content filters and want the best open-weights ecosystem, Qwen is the S-tier pick.",

  lastReviewedDate: "2026-09-14",
  dataSources: [
    { name: "Qwen blog: Qwen3.8-Flash-Next -- A New Architecture, Towards Ultimate Cost-Efficiency (2026-08-26): Qwen4 architecture preview, benchmarks, Qwen3.8-Flash at $0.15/$0.47", url: "https://qwen.ai/blog?id=qwen3.8-flash-next", dateAccessed: "2026-09-14" },
    { name: "Hugging Face: Qwen/Qwen3.8-Flash-Next model card (created 2026-08-24, Qwen Community 1.0 licence)", url: "https://huggingface.co/Qwen/Qwen3.8-Flash-Next", dateAccessed: "2026-09-14" },
    { name: "Hugging Face: Qwen/Qwen3.8-2.4T-A95B -- open Max-class weights (created 2026-08-08, custom Qwen3.8-Max licence)", url: "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B", dateAccessed: "2026-09-14" },
    { name: "Hugging Face: Qwen/Qwen3.8-27B (created 2026-08-05, Apache 2.0)", url: "https://huggingface.co/Qwen/Qwen3.8-27B", dateAccessed: "2026-09-14" },
    { name: "MarkTechPost: Alibaba previews Qwen3.8-Max (2.4T multimodal, 2026-07-19)", url: "https://www.marktechpost.com/2026/07/19/alibaba-previews-qwen3-8-max-a-2-4-trillion-parameter-multimodal-model-days-after-moonshots-kimi-k3-open-weight-launch/", dateAccessed: "2026-07-22" },
    { name: "Unite.ai: Alibaba launches Qwen-Image-3.0 without benchmarks or weights (2026-07-21)", url: "https://www.unite.ai/alibaba-launches-qwen-image-3-0-without-benchmarks-or-weights/", dateAccessed: "2026-07-22" },
    { name: "Qwen blog: Qwen3.7 -- The Agent Frontier (vendor benchmarks)", url: "https://qwen.ai/blog?id=qwen3.7", dateAccessed: "2026-06-09" },
    { name: "Alibaba Cloud: Qwen 3.7 Max pricing + launch discount", url: "https://www.alibabacloud.com/campaign/qwen-discount", dateAccessed: "2026-06-09" },
    { name: "Alibaba Model Studio model list (qwen3.7-max + qwen3.7-plus)", url: "https://help.aliyun.com/zh/model-studio/models", dateAccessed: "2026-06-09" },
    { name: "Decrypt: Alibaba Qwen 3.7 Max preview review (2026-05)", url: "https://decrypt.co/368499/alibaba-qwen-3-7-max-preview-review", dateAccessed: "2026-05-26" },
    { name: "Qwen blog: Qwen3.6-27B dense Apache 2.0 (2026-04-22)", url: "https://qwen.ai/blog?id=qwen3.6-27b", dateAccessed: "2026-04-27" },
    { name: "HuggingFace Qwen/Qwen3.6-27B", url: "https://huggingface.co/Qwen/Qwen3.6-27B", dateAccessed: "2026-04-27" },
    { name: "Implicator.ai: Qwen3.6-27B beats 397B MoE on coding", url: "https://www.implicator.ai/alibaba-ships-qwen3-6-27b-an-open-weight-coding-model-that-beats-its-397b-moe/", dateAccessed: "2026-04-27" },
    { name: "Decrypt: Qwen 3.6-Max-Preview launch", url: "https://decrypt.co/364948/alibaba-qwen-3-6-max-preview-most-powerful-model", dateAccessed: "2026-04-21" },
    { name: "CNTechPost: Qwen3.6-Max-Preview release notes", url: "https://cntechpost.com/2026/04/20/alibaba-releases-qwen3-6-max-preview-stronger-instruction-following-capabilities/", dateAccessed: "2026-04-21" },
    { name: "Decrypt: Qwen Code free tier shutdown", url: "https://decrypt.co/364501/alibaba-shuts-down-free-tier-qwen-code", dateAccessed: "2026-04-21" },
    { name: "Qwen blog: Qwen 3.6-Plus towards real-world agents", url: "https://qwen.ai/blog?id=qwen3.6", dateAccessed: "2026-04-17" },
    { name: "Alibaba Cloud: Qwen 3.6-Plus for agentic AI", url: "https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-6-plus-to-accelerate-agentic-ai-deployment-for-enterprises-and-alibaba%E2%80%99s-ai-applications_603000", dateAccessed: "2026-04-17" },
    { name: "Hugging Face Qwen collection", dateAccessed: "2026-04-17" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://qwen.ai",
  status: "active",
  benchmarks: {
    modelName: "Qwen3.5-397B MoE",
    scores: [
      { name: "MMLU-Pro", score: 83.5, maxScore: 100, unit: "%" },
      { name: "GPQA Diamond", score: 78.2, maxScore: 100, unit: "%" },
      { name: "AIME 2025", score: 87.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 92.5, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Verified", score: 69.4, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-13",
  },
  systemRequirements: [
    {
      variant: "Qwen3-Coder-Next 80B-A3B (sparse MoE)",
      min: "8 GB VRAM Q4 (RTX 3060)",
      max: "1× A100 80 GB FP16",
    },
    {
      variant: "Qwen3.5 (397B MoE flagship)",
      min: "128 GB RAM + 24 GB GPU (Q3)",
      max: "4× H100 FP8",
    },
    {
      variant: "Qwen3-VL (vision flagship)",
      min: "24 GB VRAM (Q4)",
      max: "1× H100 FP16",
    },
    {
      variant: "Qwen3-Max",
      min: "API-only -- weights not released",
      max: "API-only -- weights not released",
    },
    {
      variant: "Qwen3.6-35B-A3B (sparse MoE, vision-language, Apr 16 2026)",
      min: "8 GB VRAM Q4 (RTX 3060 tier; ~3B active params keep inference cheap)",
      max: "1x A100 80 GB FP16 or 2x RTX 4090 for 262K+ context",
      notes: "Apache 2.0 open weights. SWE-bench 73.4% -- current best for open-weights coding.",
    },
  ],

  personality: {
    oneLiner: "The multilingual Alibaba all-rounder",
    tone: "Helpful, verbose, and notably strong in Chinese and other non-English languages. Qwen is chattier than Mistral or DeepSeek and tends toward structured, multi-section replies.",
    quirks: "Best-in-class at Chinese -- occasionally switches to Mandarin mid-response for technical or cultural topics even when prompted in English. Political refusal patterns mirror other Chinese models on China-specific topics.",
  },
  metaTitle: "Qwen Review 2026: Qwen3.8 Open Weights (2.4T Max-Class, 27B, Flash-Next Qwen4 Preview)",
  metaDescription: "Qwen review. August 2026: Alibaba open-sourced Qwen3.8-2.4T-A95B (Max-class, custom licence, Aug 8), Qwen3.8-27B (Apache 2.0, Aug 5) and Qwen3.8-Flash-Next (Aug 24), a Qwen4 architecture preview with 6B active params served as Qwen3.8-Flash at $0.15/$0.47 per 1M. Qwen 3.7 Max GA at $2.50/$7.50. Benchmarks, licences, self-hosting.",
};
