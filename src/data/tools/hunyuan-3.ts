import { ToolReview } from "@/lib/types";

export const hunyuan3: ToolReview = {
  slug: "hunyuan-3",
  name: "Hunyuan 3 (Tencent Hy3)",
  tagline: "Tencent's Hy3 reached GA 2026-07-06 (upgraded from the April preview) -- 295B total / 21B active MoE, 256K context, now Apache 2.0 open weights on HuggingFace + ModelScope with the EU/UK/South Korea restriction lifted. ~90% agent-task completion on Tencent's internal apps; API via Tencent Cloud TokenHub. Integrated into Yuanbao, WeChat, QQ",
  category: "ai-llms",
  url: "https://hy3ai.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 9.5,
    features: 8,
    overall: 8.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (consumer)",
      price: "$0",
      features: [
        "Yuanbao app (Tencent's consumer chatbot)",
        "Inside WeChat + QQ via Tencent's AI integrations",
        "Web access via hy3ai.com",
        "Basic usage limits apply",
      ],
    },
    {
      plan: "API (Hy3 Preview)",
      price: "~1.2 RMB",
      period: "per 1M input tokens",
      features: [
        "Roughly $0.16 USD/M input at April 2026 exchange rates -- among the cheapest frontier-class APIs on the market",
        "295B total / 21B active MoE",
        "256K context window",
        "Pricing position is closer to DeepSeek V4-Flash than to GPT-5.5 or Claude Opus 4.7",
      ],
    },
    {
      plan: "Self-hosted (open-source)",
      price: "$0 + GPU costs",
      features: [
        "Open weights on Hugging Face (tencent/Hy3-preview)",
        "Permits self-hosting and fine-tuning per the published license",
        "21B-active MoE means inference is feasible on multi-GPU consumer-tier setups for testing; production deployments still want H100/H200",
      ],
    },
  ],

  pros: [
    "Open weights from a top-3 Chinese tech company is itself the headline -- Tencent had been a notable holdout while DeepSeek, Alibaba, Moonshot, MiniMap, and Z.ai shipped open-weight flagships through 2024-25",
    "Pricing is aggressive. ~1.2 RMB per million input tokens puts Hy3 in the same value bracket as DeepSeek V4-Flash and well below Western frontier models",
    "256K context is comfortable for retrieval-heavy and agentic workflows -- not as long as the 1M-context cohort (DeepSeek V4, Qwen 3.6-Plus, Gemini 2.5) but ample for most real workloads",
    "Distribution moat: Tencent already has Yuanbao + WeChat + QQ surfaces with hundreds of millions of MAUs. The model meets users where they already are, which matters in the Chinese market more than benchmarks",
    "Hy3 is the start of a multi-model family per Tencent's launch comms -- expect Pro / Flash / multimodal variants in coming months along the DeepSeek and Alibaba pattern",
  ],
  cons: [
    "Third-party benchmarks (Artificial Analysis, LMSYS, SWE-bench) are still spotty as of launch week -- treat Tencent's own benchmark claims with the usual self-reporting discount until independent runs corroborate",
    "PRC content filters apply -- expect refusals or blandness on Tiananmen, Taiwan sovereignty, Xi Jinping, and other politically sensitive topics. Pattern matches DeepSeek and Qwen",
    "Geo-availability improved at GA: the preview license's explicit EU / UK / South Korea exclusion was lifted with the Apache 2.0 GA release (2026-07-06). Developers should still check local data-residency rules before deploying via API; self-hosted open-weights deployment remains the fallback",
    "English-language polish lags Claude and GPT for nuanced writing tasks -- this is a coding / reasoning / Chinese-language pick first, prose-quality pick second",
  ],
  knownIssues: [
    {
      description: "HY3 REACHED GA (2026-07-06): Tencent officially released the final Hunyuan Hy3 model, upgrading the April preview with more post-training compute and higher-quality data. Same architecture (295B total / 21B active MoE, 256K context) but two material changes: (1) it now ships under **Apache 2.0** with the preview's **EU / UK / South Korea use restriction lifted**, open-weights day-one on Hugging Face + ModelScope; (2) heavily strengthened autonomous-agent capability -- Tencent claims a **~90% task-completion rate** across several of its internal applications, and bundled a free AI-agent feature into the consumer apps. API is now served via **Tencent Cloud's TokenHub** platform. This flips the earlier 'preview-stage, not GA' caveat -- Hy3 is now a stable, production-oriented release",
      source: "Tencent (tencent.com/en-us/articles/2202386.html), Caixin Global (2026-07-06), TechNode (2026-07-07), Pandaily",
      date: "2026-07-06",
    },
    {
      description: "Pricing in RMB is the published number -- USD pricing depends on FX and may move. ~1.2 RMB/M input ≈ $0.16 USD at April 2026 rates. Output token pricing is published separately; check api docs before forecasting cost",
      source: "Caixin Global, Tencent product page",
      date: "2026-04",
    },
    {
      description: "PRC content filtering applies. Hy3 declines to engage on Tiananmen Square, Taiwan sovereignty, and other regulated topics. Same operating reality as DeepSeek, Qwen, Kimi, GLM -- if your use case needs unfiltered geopolitics, choose a Western frontier model or a community-tuned open-weights variant",
      source: "Pattern from DeepSeek/Qwen; Hy3 follows the same regulatory regime",
      date: "2026-04",
    },
  ],
  bestFor:
    "Chinese-market builders, multilingual products that need strong CN performance, and cost-sensitive developers who want frontier-class quality at sub-DeepSeek pricing. Also anyone watching the open-weights field who wants Tencent's distribution-backed entry on the bench.",
  notFor:
    "English-first creative writing (Claude or GPT-5.5 are stronger), use cases that touch Chinese-government-sensitive topics, or teams that need a fully proven track record of third-party benchmark verification. As preview-stage software it is genuinely 'preview.'",
  verdict:
    "Hy3 is Tencent finally entering the open-weights race with a serious model and aggressive pricing. The 295B / 21B-active MoE design is aligned with what Alibaba and DeepSeek have shown works at scale, and the ~1.2 RMB/M-token list price puts Hy3 in real competition with DeepSeek V4-Flash for the cost-per-token crown. Distribution through Yuanbao + WeChat + QQ is a structural advantage Western developers tend to under-weight. Caveats: it's preview-stage, third-party benchmarks are still incoming, PRC content filters apply. For a US/EU developer comparison-shopping a cheap frontier-class API right now, DeepSeek V4-Flash is still the safer first stop -- but Hy3 deserves a spot on the bench, especially if Chinese market reach matters.",

  lastReviewedDate: "2026-07-22",
  dataSources: [
    { name: "Tencent: Hunyuan officially releases Hy3 (GA, 2026-07-06)", url: "https://www.tencent.com/en-us/articles/2202386.html", dateAccessed: "2026-07-22" },
    { name: "Caixin Global: Tencent launches final Hunyuan 3 model with free AI-agent feature (2026-07-06)", url: "https://www.caixinglobal.com/2026-07-06/tencent-launches-upgraded-hunyuan-3-ai-model-with-free-agent-feature-102461489.html", dateAccessed: "2026-07-22" },
    { name: "TechNode: Tencent launches Hunyuan Hy3, integrates across products (2026-07-07)", url: "https://technode.com/2026/07/07/tencent-launches-hunyuan-hy3-integrates-model-across-multiple-products/", dateAccessed: "2026-07-22" },
    { name: "Caixin Global: Tencent unveils new AI model to close gap with rivals (2026-04-23)", url: "https://www.caixinglobal.com/2026-04-23/tencent-unveils-new-ai-model-to-close-gap-with-rivals-102437241.html", dateAccessed: "2026-04-25" },
    { name: "HuggingFace: tencent/Hy3-preview", url: "https://huggingface.co/tencent/Hy3-preview", dateAccessed: "2026-04-25" },
    { name: "Pandaily: How Tencent is building its global AI moat", url: "https://pandaily.com/beyond-the-model-race-how-tencent-is-building-its-global-ai-moat", dateAccessed: "2026-04-25" },
    { name: "Dataconomy: Tencent uses product rollout to define Hy3 Preview", url: "https://dataconomy.com/2026/04/24/tencent-uses-product-rollout-not-just-benchmarks-to-define-hy3-preview/", dateAccessed: "2026-04-25" },
    { name: "Hy3 product site", url: "https://hy3ai.com/", dateAccessed: "2026-04-25" },
  ],
  affiliateUrl: "https://hy3ai.com",
  status: "active",

  systemRequirements: [
    {
      variant: "Hy3 Preview (295B total, 21B active MoE)",
      min: "128 GB RAM + 1× RTX 4090 (severe quantization, experimental)",
      max: "4× H100 FP8 or 2× H200 (production)",
      notes: "Open weights on HuggingFace (tencent/Hy3-preview). 21B-active means inference is cheaper than the 295B total suggests; multi-GPU desktop setups are feasible for evaluation, production wants datacenter GPUs",
    },
  ],

  personality: {
    oneLiner: "Tencent's first serious open-weights LLM",
    tone: "Direct and structured, similar to DeepSeek's chat tone -- compact answers in technical domains, reasonable Chinese-language polish, English noticeably less expressive than Claude or GPT.",
    quirks: "PRC content filters apply across the same set of regulated topics as DeepSeek and Qwen. Distribution via Yuanbao + WeChat + QQ means many Hy3 users in the wild are talking to it through chat-app surfaces rather than a developer console.",
  },
  metaTitle: "Tencent Hy3 (Hunyuan 3) Review 2026: Apache 2.0 Open-Weights MoE, Now GA",
  metaDescription: "Tencent Hy3 review. 295B/21B MoE reached GA July 6 2026 under Apache 2.0 (EU/UK/SK restriction lifted), 256K context, ~90% agent-task completion, open weights on HuggingFace + ModelScope. How it stacks up vs DeepSeek V4 + Qwen 3.6.",
};
