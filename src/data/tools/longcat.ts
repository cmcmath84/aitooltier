import { ToolReview } from "@/lib/types";

export const longcat: ToolReview = {
  slug: "longcat",
  name: "LongCat-2.5 / LongCat-2.0 (Meituan)",
  tagline: "**LongCat-2.5 (Hugging Face, 2026-11-04) keeps the 1.6T-total / 48B-active size and MIT licence but adds native visual understanding and much stronger agentic coding -- Meituan reports Terminal Bench v2.1 at 88.4, up from 70.8 for LongCat-2.0 -- plus a 4-bit W4A4 build; no API price for 2.5 is published yet.** Meituan's open-source 1.6T-parameter MoE (~48B active) with native 1M-token context, MIT license -- trained entirely on domestic Chinese AI ASICs and revealed as the stealth 'Owl Alpha' model that had been topping OpenRouter",
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
        "Weights on Hugging Face (meituan-longcat/LongCat-2.0; LongCat-2.5 and LongCat-2.5-W4A4 added 2026-11-04, also MIT)",
        "1.6T total params -- datacenter-scale deployment only",
      ],
    },
    {
      plan: "API",
      price: "$0.75 / $2.95",
      period: "per 1M tokens in/out",
      features: [
        "Pricing as reported by VentureBeat at the LongCat-2.0 launch -- verify on vendor platform before building; no LongCat-2.5 price is published as of 2026-11-11",
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
      description: "LONGCAT-2.5 -- SAME 1.6T / 48B-ACTIVE SIZE, NOW NATIVELY MULTIMODAL, MIT WEIGHTS ON HUGGING FACE (repos created 2026-11-04, vendor-primary): the model card describes LongCat-2.5 as 'a native multimodal MoE model for long-horizon agentic tasks, with 1.6 trillion total parameters and approximately 48 billion activated per token', which 'combines visual understanding with agentic coding for complex codebase development, full-project builds, creative design, and 3D tasks'. Images are turned into discrete tokens aligned with text in one vocabulary; training added large-scale long-horizon agentic RL and multi-teacher distillation. It is a hybrid model with thinking on or off. **Licence:** 'The model weights are released under the MIT License.' **Two repos:** meituan-longcat/LongCat-2.5 and LongCat-2.5-W4A4, a 4-bit weight-and-activation quantization for 'native INT4 computation on domestic AI accelerators' that Meituan says keeps 'accuracy comparable to the unquantized model on evaluated benchmarks' with 43.3% higher prefill throughput and 42.77% higher decode throughput than a W8A8 baseline. **Self-reported results (in-house unless starred on the card; 'indicative only'):** Terminal Bench v2.1 88.4 (LongCat-2.0: 70.8), Terminal Bench v4.0 38.5 (3.0), DeepSWE v1.1 64.6 (9.7), BrowseComp 91.9 (79.9), MCP Atlas 83.1 (61.8), HLE with tools 63.1 (37.5), VideoMME 85.2. Meituan's own table still shows rivals ahead on several rows: DeepSWE v1.1 lists DeepSeek-V4.1-Flash at 74.2 and GPT-5.6-Sol at 72.7, and Terminal Bench v4.0 lists Claude-Opus-5 at 53.9. **Access:** chat at longcat.ai and an API platform with OpenAI- and Anthropic-format endpoints; the vendor blog says GitHub code is 'Coming soon'. **Not published:** no API price for 2.5 appears on the model card, the launch blog or the API quick-start page (checked 2026-11-11), so the $0.75 / $2.95 figure on this page remains the press-reported LongCat-2.0 price. The vendor blog header prints the date as '2026-11-1'; we date the release by the Hugging Face repository creation.",
      source: "Hugging Face (meituan-longcat/LongCat-2.5 raw README.md, license: mit; org API listing createdAt 2026-11-04 for LongCat-2.5 and LongCat-2.5-W4A4); Meituan LongCat blog (longcat.ai/blog/longcat-2.5/) and API docs (longcat.ai/platform/docs/) -- fetched 2026-11-11",
      date: "2026-11-04",
    },
    {
      description: "LAUNCH (2026-06-30): Meituan open-sourced LongCat-2.0 -- 1.6T-parameter MoE (~48B activated per token), MIT license, native 1M-token context via LongCat Sparse Attention. Trained on 35T+ tokens entirely on domestic Chinese AI ASIC 'superpods' (no Nvidia), which is the geopolitical headline. Revealed as the stealth 'Owl Alpha' model that had been leading OpenRouter rankings. Self-reported benchmarks: SWE-bench Pro 59.5, Terminal-Bench 2.1 70.8, SWE-bench Multilingual 77.3. API pricing per VentureBeat: $0.75/$2.95 per 1M tokens in/out. Weights verified live on Hugging Face (safetensors present) as of 2026-07-05",
      source: "Hugging Face model card (huggingface.co/meituan-longcat/LongCat-2.0), VentureBeat, SiliconANGLE (2026-06-30)",
      date: "2026-06-30",
    },
  ],
  bestFor: "Teams that want frontier-class open weights for audit, fine-tuning research, or API use at aggressive pricing -- especially agentic-coding workloads where its SWE-bench Pro showing and 1M context matter.",
  notFor: "Anyone hoping to run it locally (1.6T params is datacenter-only), or enterprises that need vendor-grade support and independently verified benchmarks before adopting.",
  verdict: "LongCat-2.0 is the most consequential open-weights release since GLM-5.2 -- not because it beats the closed frontier (Meituan's own table shows Opus 4.8 comfortably ahead) but because of what it represents: a 1.6T-parameter MIT-licensed model trained end-to-end on Chinese ASICs, from a company best known for food delivery, quietly topping OpenRouter under a pseudonym before launch. If you consume models by API, the reported $0.75/$2.95 pricing makes it worth benchmarking against your current stack. If you're tracking the open-vs-closed race, this is the data point that says frontier-scale training no longer requires Nvidia -- or a US lab.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Hugging Face: meituan-longcat/LongCat-2.5 model card (MIT, 1.6T / 48B active, native multimodal, W4A4)", url: "https://huggingface.co/meituan-longcat/LongCat-2.5/raw/main/README.md", dateAccessed: "2026-11-11" },
    { name: "Meituan LongCat: Introducing LongCat-2.5", url: "https://longcat.ai/blog/longcat-2.5/", dateAccessed: "2026-11-11" },
    { name: "LongCat API Platform quick start (no pricing published)", url: "https://longcat.ai/platform/docs/", dateAccessed: "2026-11-11" },
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
  metaTitle: "LongCat Review (2026): Meituan's 1.6T Open MoE, 2.5 Out",
  metaDescription: "LongCat review. Meituan's MIT-licensed 1.6T MoE (~48B active), trained on Chinese ASICs. LongCat-2.5 (Nov 2026) adds native multimodality; Terminal Bench v2.1 88.4.",
};
