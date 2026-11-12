import { ToolReview } from "@/lib/types";

export const bonsai27b: ToolReview = {
  slug: "bonsai-27b",
  name: "Bonsai 27B (PrismML)",
  tagline: "**Superseded in place: on 2026-09-17 PrismML released Ternary Bonsai 2 27B (rebuilt on Qwen3.8 27B, same 5.9GB, 98.2% of full-precision quality versus about 95% here), and its docs now say Bonsai 2 supersedes the first generation -- these July weights stay downloadable, and the 3.9GB 1-bit build has no Bonsai 2 successor yet.** The first 27B-class model that runs on a phone (2026-07-14) -- ternary and 1-bit quantizations of Qwen3.6 27B squeeze a multimodal, tool-calling, 262K-context model into 3.9-5.9GB under Apache 2.0",
  category: "ai-local-models",
  url: "https://prismml.com/news/bonsai-27b",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 9.5,
    features: 7.5,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: [
        "Apache 2.0 -- commercial use allowed",
        "Ternary variant: 5.9GB ({-1,0,+1} weights, 1.71 effective bits/weight, ~95% of baseline quality)",
        "1-bit variant: 3.9GB ({-1,+1} weights, 1.125 effective bits/weight, ~90% of baseline quality)",
        "Native MLX (Mac/iPhone/iPad) + CUDA (NVIDIA) support",
      ],
    },
    {
      plan: "Self-hosted -- Bonsai 2 family (successor, from 2026-09-17)",
      price: "$0",
      features: [
        "Ternary Bonsai 2 27B: 5.9GB, based on Qwen3.8 27B, Apache 2.0 -- vendor says it retains 98.2% of the full-precision model (83.9 vs 85.4 across a 20-benchmark suite)",
        "Ternary Bonsai 2 9B / 4B / 2B (2026-10-15, based on Qwen3.5): 2.00GB / 0.95GB / 0.43GB, Apache 2.0",
        "GGUF packings for llama.cpp (CUDA, Metal, CPU) plus MLX builds; a Q2_0 packing (7.63GB for the 27B) runs on stock llama.cpp from release b11556",
        "Ternary only -- no 1-bit Bonsai 2 build is listed on the prism-ml Hugging Face org as of 2026-11-12",
      ],
    },
    {
      plan: "Locally AI iOS app",
      price: "$0",
      features: ["Ships inside the 'Locally AI (Local AI Chat)' iOS app -- on-device, no server round-trip"],
    },
    {
      plan: "API preview",
      price: "$0 (limited time)",
      features: [
        "Free limited-time developer preview API, announced in the 2026-07-14 launch post -- no paid pricing has been published",
        "PrismML's current docs list a hosted Hugging Face Space demo, in-browser WebGPU, a Colab notebook and the Locally AI iOS app as the no-install options; they do not list a hosted API",
      ],
    },
  ],

  pros: [
    "Genuine first: a 27B-class model running on a phone -- the 1-bit build is 3.9GB, small enough for recent iPhones via MLX",
    "Keeps the grown-up capabilities: multi-step reasoning, structured tool calls, vision input (compact 4-bit vision tower), and computer-use agentic loops -- not just chat",
    "262K context with speculative decoding support (DSpark drafter) -- unusually long for an on-device model",
    "Quality retention is honestly published: ternary keeps ~95% of the Qwen3.6-27B baseline (80.5 vs 85.0 across 15 benchmarks), 1-bit keeps ~90% (76.1)",
    "Apache 2.0 with zero usage friction -- weights on Hugging Face and a free limited-time API preview at launch",
    "The vendor followed through quickly: a second generation (Bonsai 2 27B, 2026-09-17) closed the quality gap to 98.2% of full precision at the same 5.9GB, and 2B / 4B / 9B siblings followed on 2026-10-15",
  ],
  cons: [
    "It is a quantization of Qwen3.6 27B, not a new base model -- capability ceiling is the Qwen baseline minus the quantization tax",
    "The 5-10% quality loss is real and shows up most on hard reasoning and edge-case coding -- for desktop-class hardware, run the full-precision Qwen3.6-27B instead",
    "Already superseded: PrismML's docs say Bonsai 2 supersedes this first generation, so new projects should start from Ternary Bonsai 2 27B -- the exception is the 3.9GB 1-bit build, which has no Bonsai 2 equivalent yet",
    "PrismML is a young vendor -- it has now shipped two generations in about two months, but long-term maintenance of the older weights is an unknown",
    "Phone thermals and battery limit sustained agentic loops in practice",
    "Free API is explicitly a limited-time preview -- no published pricing for what comes after",
  ],
  knownIssues: [
    {
      description: "BONSAI 2 FAMILY COMPLETED (2026-10-15): PrismML added **Ternary Bonsai 2 2B, 4B and 9B**, based on Qwen3.5, with footprints of 0.43GB, 0.95GB and 2.00GB. The Bonsai 2 family now spans four sizes from 2B to 27B, all ternary, multimodal and Apache 2.0. Vendor claims: up to 124 tokens/s for the 9B and 276 for the 2B on desktop-class hardware, and up to 34 and 120 tokens/s respectively on an iPhone 18 Pro Max. PrismML's docs now state that **Bonsai 2 supersedes the first Bonsai generation** (the 1-bit and ternary families at 27B, 8B, 4B and 1.7B); the older weights stay available under the prism-ml Hugging Face org",
      source: "PrismML (prismml.com/news/prismml-expands-bonsai-2-family-with-2b-4b-and-9b-models-for-on-device-ai, docs.prismml.com)",
      date: "2026-10-15",
    },
    {
      description: "SMART GLASSES DEMO (2026-09-23): at the Snapdragon Summit PrismML showed a 1-bit Bonsai vision-language model (a 2B model built on first-generation Bonsai 1.7B) running locally on AI smart glasses powered by Qualcomm's Snapdragon AR1 Gen 1. Qualcomm's own test figures in the release: 0.43GB of LLM weights versus 1.66GB for the 4-bit equivalent, and 15.36 tokens/s versus 7.44. A demo and a partnership statement, not a shipping product",
      source: "PrismML (prismml.com/news/prismml-brings-1-bit-bonsai-models-to-ai-smart-glasses-powered-by-snapdragon)",
      date: "2026-09-23",
    },
    {
      description: "SUCCESSOR RELEASED (2026-09-17): PrismML launched **Bonsai 2 27B**, a new flagship rebuilt on Qwen3.8 27B (the model on this page is built on Qwen3.6 27B). It ships as a ternary model only: 5.9GB, more than 9x smaller than full precision, and the vendor says it retains **98.2%** of the full-precision baseline (83.9 vs 85.4 across a 20-benchmark suite) where the original ternary build retained about 95%. Up to 143 tokens/s on an RTX 5090 per the release. The Hugging Face card reports the same 98.2% on a different cut (84.78 average across 14 thinking-mode benchmarks), keeps the 262K context, and adds a Q2_0 packing that runs on stock llama.cpp. Free under Apache 2.0. There is no 1-bit Bonsai 2 27B, so the 3.9GB phone-sized build described on this page is still the only 27B-class option at that footprint. The card's known-issues file (last checked 2026-09-23) lists open problems including empty answers when the output limit is too small for the reasoning phase and an HTTP 500 on reasoning_effort 'high'",
      source: "PrismML (prismml.com/news/prismml-launches-bonsai-2-27b), HuggingFace (prism-ml/Ternary-Bonsai-2-27B-gguf README + KNOWN_ISSUES.md)",
      date: "2026-09-17",
    },
    {
      description: "LAUNCH (2026-07-14): PrismML released Bonsai 27B -- 'the first 27B-class model to run on a phone.' Two builds of Qwen3.6 27B: **ternary** (5.9GB, 1.71 effective bits/weight, retains ~95% of baseline -- 80.5 vs 85.0 aggregate across 15 math/coding/tool-calling/knowledge/vision/instruction benchmarks) and **1-bit** (3.9GB, 1.125 bits/weight, ~90% retention, 76.1 aggregate). Multimodal via a compact 4-bit vision tower; 262K context; DSpark speculative drafter; multi-step reasoning, structured tool calls, and computer-use loops preserved. Runs natively on Apple devices via MLX and NVIDIA via CUDA; ships in the 'Locally AI' iOS app; free limited-time developer preview API. The vendor press release gives 11 tokens/s on an iPhone 17 Pro for the 1-bit build, and the model card says agentic coding is not yet a strong target of this release. Apache 2.0. Community reception: Hacker News + r/LocalLLaMA front pages",
      source: "PrismML (prismml.com/news/bonsai-27b), HuggingFace (prism-ml/Bonsai-27B-mlx-1bit), Hacker News (item 48910545), r/LocalLLaMA",
      date: "2026-07-14",
    },
  ],
  bestFor: "On-device AI builders and privacy-first users who want real reasoning, vision, and tool-calling on a phone or fanless laptop -- and local-AI hobbyists who want the best capability-per-gigabyte available.",
  notFor: "Anyone with a desktop GPU (run the full-precision Qwen3.6-27B or a bigger open model instead) or production workloads that can't tolerate the quantization quality tax and an unproven vendor.",
  verdict: "Bonsai 27B is the most interesting local-AI release of the summer: it moves the 'runs on a phone' frontier from 3-8B toys to a genuine 27B-class model with vision, tool calls, and 262K context, and it publishes its own quality losses instead of hiding them. The honest framing matters -- you're getting ~90-95% of Qwen3.6-27B, which was already the open-weights coding champion in its size class, in 3.9-5.9GB. If you build on-device AI experiences or just want capable private inference in your pocket, this is the new reference point. If you have real hardware, the full-precision base model remains the better tool. Update, November 2026: PrismML has since shipped Bonsai 2 27B (2026-09-17), which keeps the 5.9GB ternary footprint but moves to a newer base model and retains 98.2% of full-precision quality by the vendor's measure, and its docs describe this first generation as superseded. For laptop and GPU use, start with Bonsai 2; reach for this page's 1-bit build only when the 3.9GB phone budget is the constraint.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "PrismML: PrismML Launches Bonsai 2 27B (2026-09-17)", url: "https://prismml.com/news/prismml-launches-bonsai-2-27b", dateAccessed: "2026-11-12" },
    { name: "PrismML: Bonsai 2 family expands with 2B, 4B and 9B (2026-10-15)", url: "https://prismml.com/news/prismml-expands-bonsai-2-family-with-2b-4b-and-9b-models-for-on-device-ai", dateAccessed: "2026-11-12" },
    { name: "PrismML: 1-bit Bonsai on Snapdragon smart glasses (2026-09-23)", url: "https://prismml.com/news/prismml-brings-1-bit-bonsai-models-to-ai-smart-glasses-powered-by-snapdragon", dateAccessed: "2026-11-12" },
    { name: "PrismML docs: Introduction (Bonsai 2 supersedes the first generation)", url: "https://docs.prismml.com/", dateAccessed: "2026-11-12" },
    { name: "HuggingFace: prism-ml/Ternary-Bonsai-2-27B-gguf (model card)", url: "https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf", dateAccessed: "2026-11-12" },
    { name: "PrismML: press release, 1-bit Bonsai 27B (2026-07-14)", url: "https://prismml.com/news/prismml-releases-bonsai-27b", dateAccessed: "2026-11-12" },
    { name: "PrismML news index", url: "https://prismml.com/news", dateAccessed: "2026-11-12" },
    { name: "PrismML: Bonsai 27B announcement (2026-07-14)", url: "https://prismml.com/news/bonsai-27b", dateAccessed: "2026-11-12" },
    { name: "HuggingFace: prism-ml/Bonsai-27B-mlx-1bit", url: "https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit", dateAccessed: "2026-11-12" },
    { name: "Hacker News discussion", url: "https://news.ycombinator.com/item?id=48910545", dateAccessed: "2026-07-18" },
  ],
  affiliateUrl: "https://prismml.com/news/bonsai-27b",
  status: "active",
  benchmarks: {
    modelName: "Bonsai 27B (ternary + 1-bit builds of Qwen3.6 27B) -- vendor-published aggregate across 15 benchmarks vs the full-precision baseline (85.0)",
    scores: [
      { name: "Aggregate (Ternary, 15-benchmark avg)", score: 80.5, maxScore: 100, unit: "" },
      { name: "Aggregate (1-bit, 15-benchmark avg)", score: 76.1, maxScore: 100, unit: "" },
      { name: "Quality retention vs baseline (Ternary)", score: 95, maxScore: 100, unit: "%" },
      { name: "Quality retention vs baseline (1-bit)", score: 90, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-07-18",
  },
  systemRequirements: [
    {
      variant: "Bonsai 27B 1-bit (3.9GB)",
      min: "Recent iPhone / iPad / Apple Silicon Mac via MLX (ships in the Locally AI iOS app)",
      max: "Any NVIDIA GPU via CUDA",
      notes: "Ternary build (5.9GB) needs a bit more headroom; both run fully on-device",
    },
  ],
  metaTitle: "Bonsai 27B Review 2026: A 27B Model That Runs on Your Phone",
  metaDescription: "Bonsai 27B review: PrismML's 3.9-5.9GB ternary + 1-bit builds of Qwen3.6 27B, Apache 2.0. Superseded Sept 2026 by Bonsai 2 27B (98.2% of full precision).",
};
