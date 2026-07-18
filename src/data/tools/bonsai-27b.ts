import { ToolReview } from "@/lib/types";

export const bonsai27b: ToolReview = {
  slug: "bonsai-27b",
  name: "Bonsai 27B (PrismML)",
  tagline: "The first 27B-class model that runs on a phone (2026-07-14) -- ternary and 1-bit quantizations of Qwen3.6 27B squeeze a multimodal, tool-calling, 262K-context model into 3.9-5.9GB under Apache 2.0",
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
      plan: "Locally AI iOS app",
      price: "$0",
      features: ["Ships inside the 'Locally AI (Local AI Chat)' iOS app -- on-device, no server round-trip"],
    },
    {
      plan: "API preview",
      price: "$0 (limited time)",
      features: ["Free limited-time developer preview API", "Also served via Together.ai"],
    },
  ],

  pros: [
    "Genuine first: a 27B-class model running on a phone -- the 1-bit build is 3.9GB, small enough for recent iPhones via MLX",
    "Keeps the grown-up capabilities: multi-step reasoning, structured tool calls, vision input (compact 4-bit vision tower), and computer-use agentic loops -- not just chat",
    "262K context with speculative decoding support (DSpark drafter) -- unusually long for an on-device model",
    "Quality retention is honestly published: ternary keeps ~95% of the Qwen3.6-27B baseline (80.5 vs 85.0 across 15 benchmarks), 1-bit keeps ~90% (76.1)",
    "Apache 2.0 with zero usage friction -- weights on Hugging Face, free API preview, Together.ai hosting",
  ],
  cons: [
    "It is a quantization of Qwen3.6 27B, not a new base model -- capability ceiling is the Qwen baseline minus the quantization tax",
    "The 5-10% quality loss is real and shows up most on hard reasoning and edge-case coding -- for desktop-class hardware, run the full-precision Qwen3.6-27B instead",
    "PrismML is a new/unproven vendor -- long-term maintenance and update cadence are unknowns",
    "Phone thermals and battery limit sustained agentic loops in practice",
    "Free API is explicitly a limited-time preview -- no published pricing for what comes after",
  ],
  knownIssues: [
    {
      description: "LAUNCH (2026-07-14): PrismML released Bonsai 27B -- 'the first 27B-class model to run on a phone.' Two builds of Qwen3.6 27B: **ternary** (5.9GB, 1.71 effective bits/weight, retains ~95% of baseline -- 80.5 vs 85.0 aggregate across 15 math/coding/tool-calling/knowledge/vision/instruction benchmarks) and **1-bit** (3.9GB, 1.125 bits/weight, ~90% retention, 76.1 aggregate). Multimodal via a compact 4-bit vision tower; 262K context; DSpark speculative drafter; multi-step reasoning, structured tool calls, and computer-use loops preserved. Runs natively on Apple devices via MLX and NVIDIA via CUDA; ships in the 'Locally AI' iOS app; free limited-time developer API plus Together.ai hosting. Apache 2.0. Community reception: Hacker News + r/LocalLLaMA front pages",
      source: "PrismML (prismml.com/news/bonsai-27b), HuggingFace (prism-ml/Bonsai-27B-mlx-1bit), Hacker News (item 48910545), r/LocalLLaMA",
      date: "2026-07-14",
    },
  ],
  bestFor: "On-device AI builders and privacy-first users who want real reasoning, vision, and tool-calling on a phone or fanless laptop -- and local-AI hobbyists who want the best capability-per-gigabyte available.",
  notFor: "Anyone with a desktop GPU (run the full-precision Qwen3.6-27B or a bigger open model instead) or production workloads that can't tolerate the quantization quality tax and an unproven vendor.",
  verdict: "Bonsai 27B is the most interesting local-AI release of the summer: it moves the 'runs on a phone' frontier from 3-8B toys to a genuine 27B-class model with vision, tool calls, and 262K context, and it publishes its own quality losses instead of hiding them. The honest framing matters -- you're getting ~90-95% of Qwen3.6-27B, which was already the open-weights coding champion in its size class, in 3.9-5.9GB. If you build on-device AI experiences or just want capable private inference in your pocket, this is the new reference point. If you have real hardware, the full-precision base model remains the better tool.",

  lastReviewedDate: "2026-07-18",
  dataSources: [
    { name: "PrismML: Bonsai 27B announcement (2026-07-14)", url: "https://prismml.com/news/bonsai-27b", dateAccessed: "2026-07-18" },
    { name: "HuggingFace: prism-ml/Bonsai-27B-mlx-1bit", url: "https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit", dateAccessed: "2026-07-18" },
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
  metaDescription: "Bonsai 27B review. PrismML's ternary + 1-bit builds of Qwen3.6 27B (July 14, 2026): 3.9-5.9GB, vision, tool calls, 262K context, Apache 2.0, ~90-95% baseline quality. On-device AI's new reference point.",
};
