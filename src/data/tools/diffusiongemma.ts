import { ToolReview } from "@/lib/types";

export const diffusiongemma: ToolReview = {
  slug: "diffusiongemma",
  name: "DiffusionGemma (Google)",
  tagline: "Google DeepMind's experimental open-weights TEXT-DIFFUSION model (June 10, 2026) -- 26B MoE (3.8B active), Apache 2.0, generates 256-token blocks in parallel with bidirectional attention for up to 4x faster output (1,000+ tok/s on H100). Trades some quality vs Gemma 4 for raw speed",
  category: "ai-local-models",
  url: "https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/",

  scores: {
    easeOfUse: 6,
    outputQuality: 6.5,
    value: 9,
    features: 6,
    overall: 6.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (open weights)",
      price: "$0",
      features: [
        "Apache 2.0 license -- commercial use permitted",
        "Weights on Hugging Face; NVIDIA NIM container; Gemini Enterprise Model Garden",
        "~18GB VRAM quantized -- runs on RTX 5090-class consumer hardware (700+ tok/s)",
        "Works with vLLM, MLX, and llama.cpp",
      ],
    },
  ],

  pros: [
    "Text diffusion instead of autoregression: generates 256-token blocks in parallel with bidirectional attention -- up to 4x faster generation, 1,000+ tok/s on a single H100, 700+ tok/s on RTX 5090",
    "First open-weights text-diffusion model from a frontier lab at useful scale (26B MoE, 3.8B active) -- until now diffusion LLMs were research demos or closed previews",
    "Apache 2.0 with day-one ecosystem support (Hugging Face, NVIDIA NIM, vLLM, MLX, llama.cpp) -- you can actually deploy it, not just read the paper",
    "Latency profile is ideal for interactive local use: autocomplete, draft generation, agent inner-loops where tokens-per-second matters more than peak quality",
  ],
  cons: [
    "Quality trails Gemma 4 on standard benchmarks -- Google positions it as a speed play, not a flagship; don't swap it into quality-sensitive pipelines",
    "Speedup is hardware-dependent: much weaker on Apple Silicon unified memory, and the parallel-decode advantage shrinks at high-QPS server batch sizes",
    "Experimental release -- diffusion text models have different failure modes (block-level incoherence) and far less community tuning lore than autoregressive Gemma",
    "No hosted API tier at launch -- self-host or NIM only, so casual users have no easy way to try it",
  ],
  knownIssues: [
    {
      description: "LAUNCH (2026-06-10): DiffusionGemma released as an experimental open model. 26B-total / 3.8B-active MoE, Apache 2.0, text-diffusion architecture generating 256-token blocks in parallel with bidirectional attention. Vendor-claimed speeds: up to 4x faster than comparable autoregressive models, 1,000+ tok/s on H100, 700+ tok/s on RTX 5090, ~18GB VRAM quantized. Availability: Hugging Face weights, NVIDIA NIM, Gemini Enterprise Model Garden; vLLM/MLX/llama.cpp support at launch. Google's own caveats: trails Gemma 4 on quality benchmarks; speed advantage weaker on Apple Silicon and in high-QPS serving. Front-page Hacker News reception (226 points) on launch day",
      source: "Google blog (blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/), Google developers blog (developers.googleblog.com/en/diffusiongemma-the-developer-guide/), NVIDIA blog (RTX AI Garage)",
      date: "2026-06-10",
    },
  ],
  bestFor: "Developers who need fast local text generation -- autocomplete, drafting, high-volume agent inner-loops -- on a single GPU, and researchers who want a production-grade open diffusion LLM to build on.",
  notFor: "Quality-first workloads (use Gemma 4 or a frontier API model), Mac-only setups (the speedup mostly evaporates on Apple Silicon), or anyone wanting a hosted try-before-you-deploy API -- there isn't one yet.",
  verdict: "DiffusionGemma is the most interesting open-weights release of June 2026 not because it's the best model -- Google openly says Gemma 4 beats it on quality -- but because it's the first serious, deployable text-diffusion LLM from a frontier lab. The 4x generation-speed claim holds on the right hardware (H100/RTX-class GPUs), which makes it a genuine option for latency-sensitive local work like autocomplete and agent inner-loops. Treat it as a speed specialist and an architecture preview: if diffusion decoding keeps scaling, this is what the next generation of local models may look like. For now, pair it with a quality model rather than replacing one.",

  lastReviewedDate: "2026-06-10",
  dataSources: [
    { name: "Google blog: DiffusionGemma -- faster text generation (2026-06-10)", url: "https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/", dateAccessed: "2026-06-10" },
    { name: "Google developers blog: DiffusionGemma developer guide", url: "https://developers.googleblog.com/en/diffusiongemma-the-developer-guide/", dateAccessed: "2026-06-10" },
    { name: "NVIDIA blog: RTX AI Garage -- local Gemma Diffusion", url: "https://blogs.nvidia.com/blog/rtx-ai-garage-local-gemma-diffusion/", dateAccessed: "2026-06-10" },
    { name: "MarkTechPost: DiffusionGemma analysis", url: "https://www.marktechpost.com/2026/06/10/google-ai-releases-diffusiongemma-a-26b-moe-open-model-using-text-diffusion-for-up-to-4x-faster-generation/", dateAccessed: "2026-06-10" },
  ],
  affiliateUrl: "https://huggingface.co/google",
  status: "active",
  systemRequirements: [
    {
      variant: "DiffusionGemma 26B MoE (3.8B active)",
      min: "~18 GB VRAM quantized (RTX 4090/5090 tier)",
      max: "1x H100 for 1,000+ tok/s full-speed decode",
      notes: "Speedup is strongest on dedicated-VRAM NVIDIA GPUs; Apple Silicon unified memory sees much smaller gains.",
    },
  ],
  metaTitle: "DiffusionGemma Review (June 2026): Google's 4x-Faster Open Text-Diffusion Model",
  metaDescription: "DiffusionGemma review. Google DeepMind's experimental open-weights text-diffusion model (June 10, 2026) -- 26B MoE, Apache 2.0, 1,000+ tok/s on H100, ~18GB VRAM quantized. Speed vs quality trade-offs, system requirements, verdict.",
};
