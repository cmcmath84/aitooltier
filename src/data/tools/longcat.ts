import { ToolReview } from "@/lib/types";

export const longcat: ToolReview = {
  slug: "longcat",
  name: "LongCat-2.0 (Meituan)",
  tagline: "Meituan's open-source 1.6T-parameter MoE (~48B active) with native 1M-token context, MIT license -- trained entirely on domestic Chinese AI ASICs and revealed as the stealth 'Owl Alpha' model that had been topping OpenRouter",
  category: "ai-local-models",
  url: "https://huggingface.co/meituan-longcat/LongCat-2.0",

  scores: {
    easeOfUse: 6,
    outputQuality: 8.5,
    value: 9,
    features: 8,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (open weights)",
      price: "$0",
      features: [
        "MIT license -- commercial use permitted",
        "Weights on Hugging Face (meituan-longcat/LongCat-2.0)",
        "1.6T total params -- datacenter-scale deployment only",
      ],
    },
    {
      plan: "API",
      price: "$0.75 / $2.95",
      period: "per 1M tokens in/out",
      features: [
        "Pricing as reported by VentureBeat at launch -- verify on vendor platform before building",
        "Also available via OpenRouter (previously as stealth 'Owl Alpha')",
      ],
    },
  ],

  pros: [
    "Genuinely open frontier scale: 1.6T total / ~48B active per token under MIT -- the largest permissively-licensed model released to date",
    "Native long context: LongCat Sparse Attention trained on hundreds of billions of tokens of 1M-context data, not a post-hoc context extension",
    "Self-reported coding results in frontier territory: SWE-bench Pro 59.5 (above GPT-5.5's 58.6 and Gemini 3.1 Pro's 54.2 on the same table), Terminal-Bench 2.1 70.8",
    "Proof that the domestic-Chinese-silicon stack works at frontier scale: full 35T+-token pretraining run and deployment on AI ASIC superpods with, per Meituan, no rollbacks or irrecoverable loss spikes",
  ],
  cons: [
    "1.6T total parameters puts self-hosting out of reach for everyone but datacenter operators -- 'open weights' here means auditable and API-competitive, not local",
    "Benchmark numbers are self-published by Meituan; independent verification (Artificial Analysis etc.) still pending, and its own table shows Claude Opus 4.8 well ahead (SWE-bench Pro 69.2, Terminal-Bench 78.9)",
    "Meituan is a food-delivery giant, not a dedicated AI lab -- long-term model-line commitment and Western enterprise support are unproven",
    "US/EU enterprises may face procurement friction on a Chinese-trained model regardless of the MIT license",
  ],
  knownIssues: [
    {
      description: "LAUNCH (2026-06-30): Meituan open-sourced LongCat-2.0 -- 1.6T-parameter MoE (~48B activated per token), MIT license, native 1M-token context via LongCat Sparse Attention. Trained on 35T+ tokens entirely on domestic Chinese AI ASIC 'superpods' (no Nvidia), which is the geopolitical headline. Revealed as the stealth 'Owl Alpha' model that had been leading OpenRouter rankings. Self-reported benchmarks: SWE-bench Pro 59.5, Terminal-Bench 2.1 70.8, SWE-bench Multilingual 77.3. API pricing per VentureBeat: $0.75/$2.95 per 1M tokens in/out. Weights verified live on Hugging Face (safetensors present) as of 2026-07-05",
      source: "Hugging Face model card (huggingface.co/meituan-longcat/LongCat-2.0), VentureBeat, SiliconANGLE (2026-06-30)",
      date: "2026-06-30",
    },
  ],
  bestFor: "Teams that want frontier-class open weights for audit, fine-tuning research, or API use at aggressive pricing -- especially agentic-coding workloads where its SWE-bench Pro showing and 1M context matter.",
  notFor: "Anyone hoping to run it locally (1.6T params is datacenter-only), or enterprises that need vendor-grade support and independently verified benchmarks before adopting.",
  verdict: "LongCat-2.0 is the most consequential open-weights release since GLM-5.2 -- not because it beats the closed frontier (Meituan's own table shows Opus 4.8 comfortably ahead) but because of what it represents: a 1.6T-parameter MIT-licensed model trained end-to-end on Chinese ASICs, from a company best known for food delivery, quietly topping OpenRouter under a pseudonym before launch. If you consume models by API, the reported $0.75/$2.95 pricing makes it worth benchmarking against your current stack. If you're tracking the open-vs-closed race, this is the data point that says frontier-scale training no longer requires Nvidia -- or a US lab.",

  lastReviewedDate: "2026-07-05",
  dataSources: [
    { name: "Hugging Face: meituan-longcat/LongCat-2.0 model card", url: "https://huggingface.co/meituan-longcat/LongCat-2.0", dateAccessed: "2026-07-05" },
    { name: "VentureBeat: Meituan open-sources LongCat-2.0", url: "https://venturebeat.com/technology/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips", dateAccessed: "2026-07-05" },
    { name: "SiliconANGLE: Meituan open-sources massive LongCat-2.0", url: "https://siliconangle.com/2026/06/30/chinas-meituan-open-sources-massive-longcat-2-0-ai-model-saying-trained-domestic-chips/", dateAccessed: "2026-07-05" },
  ],
  affiliateUrl: "https://huggingface.co/meituan-longcat/LongCat-2.0",
  status: "active",
  benchmarks: {
    modelName: "LongCat-2.0 (self-reported, third-party verification pending)",
    scores: [
      { name: "SWE-bench Pro", score: 59.5, maxScore: 100, unit: "%" },
      { name: "Terminal-Bench 2.1", score: 70.8, maxScore: 100, unit: "%" },
      { name: "SWE-bench Multilingual", score: 77.3, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-07-05",
  },
  systemRequirements: [
    {
      variant: "LongCat-2.0 (1.6T MoE, ~48B active)",
      min: "Datacenter multi-node GPU/ASIC cluster",
      max: "ASIC superpod (Meituan's own deployment)",
      notes: "Not practical to self-host below datacenter scale -- consume via API or OpenRouter instead.",
    },
  ],
  metaTitle: "LongCat-2.0 Review (2026): Meituan's 1.6T Open MoE, MIT License",
  metaDescription: "LongCat-2.0 review. Meituan's open-source 1.6T MoE (~48B active), MIT license, 1M context, trained on Chinese ASICs. SWE-bench Pro 59.5, reported $0.75/$2.95 API pricing. July 2026.",
};
