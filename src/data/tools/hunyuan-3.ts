import { ToolReview } from "@/lib/types";

export const hunyuan3: ToolReview = {
  slug: "hunyuan-3",
  name: "Tencent Hy3 / Hy4 preview (formerly Hunyuan)",
  tagline: "Tencent Hy (formerly Hunyuan) open-weight MoE family -- Hy4 preview (2026-08-28) is the new flagship at 770B total and 49B active with a 1M-token context, Apache 2.0, at $0.834 in / $2.501 out per 1M tokens on Tencent Cloud TokenHub. Hy3 (GA 2026-07-06; 295B total / 21B active, 256K context, Apache 2.0) remains the budget pick at $0.132 / $0.528. Integrated into Yuanbao, WorkBuddy, CodeBuddy, and ima",
  category: "ai-llms",
  url: "https://aistudio.tencent.com/",

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
        "Yuanbao app (Tencent's consumer chatbot), including its free Agent function",
        "WorkBuddy and CodeBuddy (Hy4 preview was free there for two weeks after launch)",
        "ima and other Tencent products",
        "Basic usage limits apply",
      ],
    },
    {
      plan: "API (Hy4 preview)",
      price: "$0.834",
      period: "per 1M input tokens",
      features: [
        "$2.501 per 1M output tokens, $0.042 per 1M cache-hit tokens (Tencent Cloud TokenHub, international pricing updated 2026-11-01)",
        "770B total / 49B active MoE, 1M-token context",
        "Also on OpenRouter (tencent/hy4-preview, $0.7506 in / $2.2509 out list price)",
      ],
    },
    {
      plan: "API (Hy3)",
      price: "$0.132",
      period: "per 1M input tokens",
      features: [
        "$0.528 per 1M output tokens, $0.033 per 1M cache-hit tokens (Tencent Cloud TokenHub, international pricing)",
        "295B total / 21B active MoE, 256K context",
        "OpenRouter lists tencent/hy3 at $0.0825 in / $0.33 out",
      ],
    },
    {
      plan: "Self-hosted (open-source)",
      price: "$0 + GPU costs",
      features: [
        "Open weights on Hugging Face and ModelScope: tencent/Hy3 and tencent/Hy4-preview (plus FP8 builds)",
        "Apache 2.0 for both Hy3 and Hy4 preview",
        "Hy3: Tencent recommends 8 GPUs such as H20-3e or larger-memory GPUs; Hy4 preview reference commands use 8-way tensor parallel on the FP8 build",
      ],
    },
  ],

  pros: [
    "Open weights from a top-3 Chinese tech company is itself the headline -- Tencent had been a notable holdout while DeepSeek, Alibaba, Moonshot, MiniMax, and Z.ai shipped open-weight flagships through 2024-25",
    "Pricing is aggressive -- Hy3 lists at $0.132 in / $0.528 out per 1M tokens on Tencent Cloud TokenHub, and even the much larger Hy4 preview is $0.834 / $2.501",
    "Context is comfortable for retrieval-heavy and agentic workflows -- 256K on Hy3 and a 1M-token window on Hy4 preview",
    "Distribution moat: Tencent already runs Hy3 across Yuanbao, WorkBuddy / CodeBuddy, ima, Marvis, Weixin Official Account assistants, and games. The model meets users where they already are, which matters in the Chinese market more than benchmarks",
    "The family is moving fast -- the April preview, Hy3 GA on 2026-07-06, then Hy4 preview on 2026-08-28 -- and Tencent says the next batch of Hy4-series models is expected to roll out soon",
  ],
  cons: [
    "Much of the headline evidence is Tencent-run: Hy3's 270-expert blind evaluation (2.67/4 vs GLM-5.1 at 2.51/4) and Hy4 preview's 163-expert evaluation (2.99/4 vs GLM-5.3 at 2.92 and Kimi K3 at 2.94) are internal -- treat them with the usual self-reporting discount until independent runs corroborate",
    "PRC content filters apply -- expect refusals or blandness on Tiananmen, Taiwan sovereignty, Xi Jinping, and other politically sensitive topics. Pattern matches DeepSeek and Qwen",
    "Geo-availability improved: both current releases (Hy3 and Hy4 preview) ship under Apache 2.0, so the preview-era community license's EU / UK / South Korea exclusion no longer applies to current weights. Developers should still check local data-residency rules before deploying via API; self-hosted open-weights deployment remains the fallback",
    "English-language polish lags Claude and GPT for nuanced writing tasks -- this is a coding / reasoning / Chinese-language pick first, prose-quality pick second",
    "Hy4 preview is explicitly early -- Tencent's model card lists known issues including spending longer than necessary reasoning through complex tasks and a tendency to over-verify its own work, and 770B / 49B-active weights need datacenter-class multi-GPU serving",
  ],
  knownIssues: [
    {
      description: "HY4 PREVIEW RELEASED (2026-08-28): Tencent released and open-sourced Hy4 preview -- 770B total / 49B active MoE with a context window exceeding 1M tokens, Apache 2.0 weights on Hugging Face (tencent/Hy4-preview, plus Hy4-preview-FP8) and ModelScope. API via Tencent Cloud TokenHub at USD 0.834 per 1M input tokens, 2.501 per 1M output and 0.042 for cache hits, and via OpenRouter. Tencent's model card flags known issues (over-long reasoning, over-verification) and Tencent says the next batch of Hy4-series models is expected soon. Hy3 remains the cheaper, stable option",
      source: "Tencent: Tencent Releases and Open-Sources Tencent Hy4 preview (2026-08-28); huggingface.co/tencent/Hy4-preview",
      date: "2026-08-28",
    },
    {
      description: "Naming and official site: Tencent now refers to 'Tencent Hunyuan (now known as Tencent Hy)'. The official site per Tencent's Hugging Face model cards is aistudio.tencent.com (Hy AI Studio). hy3ai.com, previously listed on this page as the product site and as a web-access route, is a third-party community information page about Hy3 Preview, not a Tencent property",
      source: "Tencent Hy3 announcement (tencent.com), huggingface.co/tencent/Hy3, hy3ai.com footer",
      date: "2026-11-02",
    },
    {
      description: "HY3 REACHED GA (2026-07-06): Tencent officially released the final Hy3 model, upgrading the preview launched on 23 April with strengthened reinforcement learning and higher-quality data. Same architecture (295B total / 21B active MoE, 256K context) but two material changes: (1) it ships under **Apache 2.0** with the preview's **EU / UK / South Korea use restriction lifted**, open-weights day-one on Hugging Face + ModelScope; (2) heavily strengthened autonomous-agent capability -- Caixin reported a **~90% task-completion rate** across several Tencent internal applications, and Yuanbao added a free Agent function. API is served via **Tencent Cloud's TokenHub** platform",
      source: "Tencent (tencent.com/en-us/articles/2202386.html), Caixin Global (2026-07-06), TechNode (2026-07-07), Pandaily",
      date: "2026-07-06",
    },
    {
      description: "Current list pricing (Tencent Cloud International model pricing, page updated 2026-11-01, USD per 1M tokens): Hy3 0.132 input / 0.528 output / 0.033 cache; Hy4 preview 0.834 / 2.501 / 0.042. Hy3 Preview no longer appears in that price list. Earlier versions of this page quoted ~1.2 RMB per 1M input tokens for Hy3 Preview; mainland CNY pricing was not re-checked",
      source: "Tencent Cloud: Model pricing (tencentcloud.com/document/product/1300/78937)",
      date: "2026-11-01",
    },
    {
      description: "PRC content filtering applies. Hy3 declines to engage on Tiananmen Square, Taiwan sovereignty, and other regulated topics. Same operating reality as DeepSeek, Qwen, Kimi, GLM -- if your use case needs unfiltered geopolitics, choose a Western frontier model or a community-tuned open-weights variant",
      source: "Pattern from DeepSeek/Qwen; Hy3 follows the same regulatory regime",
      date: "2026-04",
    },
  ],
  bestFor:
    "Chinese-market builders, multilingual products that need strong CN performance, and cost-sensitive developers who want a cheap open-weight MoE API (Hy3 at $0.132 per 1M input tokens) or a 1M-context open flagship (Hy4 preview). Also anyone watching the open-weights field who wants Tencent's distribution-backed entry on the bench.",
  notFor:
    "English-first creative writing (Claude or GPT are stronger), use cases that touch Chinese-government-sensitive topics, or teams that need a fully proven track record of third-party benchmark verification. Hy4 preview is explicitly preview-stage; Hy3 is the stable release.",
  verdict:
    "Tencent Hy has gone from open-weights holdout to a fast-shipping lab. Hy3 (GA July 2026, 295B / 21B active, Apache 2.0) is a cheap, stable production option at $0.132 / $0.528 per 1M tokens, and Hy4 preview (August 2026, 770B / 49B active, 1M context) is, by Tencent's account, among the top tier of open-source models at $0.834 / $2.501. Distribution through Yuanbao, WorkBuddy, CodeBuddy, and Weixin is a structural advantage Western developers tend to under-weight. Caveats: the strongest evidence is still Tencent-run, Hy4 is a preview with known over-reasoning issues, and PRC content filters apply. Worth a spot on the bench for any team comparison-shopping cheap open-weight MoE APIs, especially if Chinese market reach matters.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Tencent: Tencent Releases and Open-Sources Tencent Hy4 preview (2026-08-28)", url: "https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/", dateAccessed: "2026-11-02" },
    { name: "Tencent: Hunyuan officially releases Hy3 (GA, 2026-07-06)", url: "https://www.tencent.com/en-us/articles/2202386.html", dateAccessed: "2026-11-02" },
    { name: "Hugging Face: tencent/Hy4-preview model card", url: "https://huggingface.co/tencent/Hy4-preview/raw/main/README.md", dateAccessed: "2026-11-02" },
    { name: "Hugging Face: tencent/Hy3 model card", url: "https://huggingface.co/tencent/Hy3/raw/main/README.md", dateAccessed: "2026-11-02" },
    { name: "Tencent Cloud: Model pricing (TokenHub, international)", url: "https://www.tencentcloud.com/document/product/1300/78937", dateAccessed: "2026-11-02" },
    { name: "OpenRouter models API (tencent/hy3, tencent/hy4-preview)", url: "https://openrouter.ai/api/v1/models", dateAccessed: "2026-11-02" },
    { name: "Hy AI Studio (Tencent official site)", url: "https://aistudio.tencent.com/", dateAccessed: "2026-11-02" },
    { name: "Caixin Global: Tencent launches final Hunyuan 3 model with free AI-agent feature (2026-07-06)", url: "https://www.caixinglobal.com/2026-07-06/tencent-launches-upgraded-hunyuan-3-ai-model-with-free-agent-feature-102461489.html", dateAccessed: "2026-07-22" },
    { name: "TechNode: Tencent launches Hunyuan Hy3, integrates across products (2026-07-07)", url: "https://technode.com/2026/07/07/tencent-launches-hunyuan-hy3-integrates-model-across-multiple-products/", dateAccessed: "2026-07-22" },
    { name: "Caixin Global: Tencent unveils new AI model to close gap with rivals (2026-04-23)", url: "https://www.caixinglobal.com/2026-04-23/tencent-unveils-new-ai-model-to-close-gap-with-rivals-102437241.html", dateAccessed: "2026-04-25" },
    { name: "HuggingFace: tencent/Hy3-preview", url: "https://huggingface.co/tencent/Hy3-preview", dateAccessed: "2026-04-25" },
    { name: "Pandaily: How Tencent is building its global AI moat", url: "https://pandaily.com/beyond-the-model-race-how-tencent-is-building-its-global-ai-moat", dateAccessed: "2026-04-25" },
    { name: "Dataconomy: Tencent uses product rollout to define Hy3 Preview", url: "https://dataconomy.com/2026/04/24/tencent-uses-product-rollout-not-just-benchmarks-to-define-hy3-preview/", dateAccessed: "2026-04-25" },
    { name: "hy3ai.com (third-party community information page, not Tencent)", url: "https://hy3ai.com/", dateAccessed: "2026-11-02" },
  ],
  affiliateUrl: "https://aistudio.tencent.com/",
  status: "active",

  systemRequirements: [
    {
      variant: "Hy3 (295B total, 21B active MoE)",
      min: "8 GPUs -- Tencent recommends H20-3e or other GPUs with larger memory",
      max: "8-GPU datacenter node (BF16; Hy3-FP8 build also published)",
      notes: "Apache 2.0. Weights: tencent/Hy3 and tencent/Hy3-FP8 on Hugging Face. 21B-active means inference is cheaper than the 295B total suggests, but production serving wants datacenter GPUs",
    },
    {
      variant: "Hy4 preview (770B total, 49B active MoE)",
      min: "8 GPUs with tensor parallel 8 on the FP8 build (Tencent vLLM / SGLang reference commands)",
      max: "Multi-GPU datacenter node for the 1M-token context",
      notes: "Apache 2.0. Weights: tencent/Hy4-preview and tencent/Hy4-preview-FP8. Built-in MTP layer for speculative decoding",
    },
  ],

  personality: {
    oneLiner: "Tencent's first serious open-weights LLM",
    tone: "Direct and structured, similar to DeepSeek's chat tone -- compact answers in technical domains, reasonable Chinese-language polish, English noticeably less expressive than Claude or GPT.",
    quirks: "PRC content filters apply across the same set of regulated topics as DeepSeek and Qwen. Distribution via Yuanbao, WorkBuddy, CodeBuddy, and Weixin means many Hy users in the wild are talking to it through Tencent app surfaces rather than a developer console.",
  },
  metaTitle: "Tencent Hy3 and Hy4 Preview Review 2026: Apache 2.0 Open-Weights MoE (formerly Hunyuan)",
  metaDescription: "Tencent Hy review. Hy4 preview (Aug 28 2026): 770B/49B MoE, 1M context, $0.834/$2.501 per 1M. Hy3 (GA Jul 6 2026): 295B/21B, 256K, $0.132/$0.528. Apache 2.0 open weights on Hugging Face + ModelScope.",
};
