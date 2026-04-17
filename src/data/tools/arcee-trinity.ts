import { ToolReview } from "@/lib/types";

export const arceeTrinity: ToolReview = {
  slug: "arcee-trinity",
  name: "Arcee Trinity-Large-Thinking",
  tagline: "Arcee AI's US-made open-weight frontier reasoning model -- launched 2026-04-01. 398B total params, ~13B active. Sparse MoE (256 experts, 4 active = 1.56% routing). Apache 2.0, trained from scratch. #2 on PinchBench trailing only Claude 3.5 Opus. ~96% cheaper than Opus-4.6 on agentic tasks",
  category: "ai-local-models",
  url: "https://www.arcee.ai/trinity",

  scores: {
    easeOfUse: 6,
    outputQuality: 9,
    value: 9.5,
    features: 8,
    overall: 8.1,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Apache 2.0)",
      price: "$0",
      features: [
        "Trained from scratch, not a fine-tune of an existing model",
        "Apache 2.0 license, unrestricted commercial use",
        "Weights on Hugging Face",
        "256-expert sparse MoE with 4 experts active (~1.56% routing)",
      ],
    },
    {
      plan: "API (OpenRouter, Trinity-Large-Thinking)",
      price: "$0.90",
      period: "per 1M output tokens",
      features: [
        "Available on OpenRouter for hosted inference",
        "~96% cheaper than Claude Opus 4.6 at the same quality tier on agentic tasks",
        "Pay-as-you-go",
      ],
    },
  ],

  pros: [
    "Rare US-made frontier-tier open-weight reasoning model -- fills the gap that Reflection AI has been teasing but has not yet shipped. With Llama 5 still unconfirmed, Arcee Trinity is the strongest available US-made open frontier option as of April 2026",
    "Trained from scratch (not a fine-tune) at 398B total params with genuinely novel 256-expert MoE architecture. This is real frontier-scale training from a US startup, not a re-distillation -- a meaningful proof point for the US open-weight ecosystem",
    "#2 on PinchBench trailing only Claude 3.5 Opus. Beats DeepSeek, Qwen, and most other open-weight competitors on agentic reasoning in that specific evaluation. Third-party benchmarks beyond PinchBench are still landing through Q2 2026",
    "~96% cheaper than Claude Opus 4.6 on equivalent agentic tasks (per Arcee's own cost modeling) -- the sparse MoE routing is aggressive enough that per-token economics are closer to a 13B dense model than a 398B one",
  ],
  cons: [
    "Fresh as of 2026-04-01 -- third-party benchmark verification beyond PinchBench is still lagging. The 'competitive with Opus' claim is plausible but not yet cross-validated by Artificial Analysis, LMArena, or major tier-1 press evaluations",
    "Arcee AI is a smaller US startup -- production-scale support, fine-tuning ecosystem, and community fine-tunes are thinner than what Llama, Qwen, or DeepSeek offer. Enterprise adoption will be gated by Arcee's ability to grow those resources",
    "Requires multi-GPU infrastructure to self-host at full capacity -- 398B total params means even with MoE routing, the inactive experts still need to fit in memory. Realistic self-hosting starts at 4× H100 or equivalent",
    "First-release model. Expect rough edges on instruction-following, long-horizon coherence, and multilingual performance versus more iterated families like Qwen 3.6 or GLM-5.1",
  ],
  knownIssues: [
    {
      description: "Third-party benchmark cross-validation still landing. PinchBench #2 ranking is Arcee's own evaluation -- Artificial Analysis, LMArena, and similar independent leaderboards are still adding Trinity through April-May 2026. Treat the 'Opus-tier' claim as provisional",
      source: "Arcee launch announcement, VentureBeat coverage",
      date: "2026-04",
    },
    {
      description: "Community quantizations for the 256-expert MoE routing layers showed issues at Q3 and below during the first week post-launch. Q5 is the practical sweet spot as of mid-April 2026",
      source: "Reddit r/LocalLLaMA, Hugging Face discussions",
      date: "2026-04",
    },
  ],
  bestFor: "Teams that need a US-made, Apache 2.0, frontier-tier open-weight model and can either rent multi-GPU infrastructure or pay OpenRouter API pricing at ~$0.90/M output tokens. Particularly valuable for US government, defense, or regulated enterprise contexts where country-of-origin matters for procurement. Also good for agentic reasoning workloads where the ~96% cost savings vs Claude Opus actually changes what you can build.",
  notFor: "Absolute beginners or low-budget experimenters -- the 398B MoE needs real hardware or real API spend. Also not ideal if community ecosystem / fine-tune availability matters to you -- Qwen 3.6 and Llama 4 both have deeper third-party support. And not the right pick for multilingual or non-English use cases -- Arcee Trinity is English-first.",
  verdict: "Arcee Trinity-Large-Thinking is the most consequential US-made open-weight launch since Meta's Llama 4. A tiny US startup shipping a 398B-parameter sparse-MoE frontier reasoning model, trained from scratch, under Apache 2.0, priced ~96% below Claude Opus -- that is genuinely a new category of competitor in the open-weight ecosystem. The third-party benchmark verification is still landing, so treat the 'Opus-tier' positioning as provisional through April 2026. But even if Trinity lands at 80% of the claimed quality, it is the strongest US-made open-weight frontier option available today, and for US procurement / country-of-origin-sensitive deployments it fills a real gap that nobody else had solved.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Arcee AI: Trinity-Large-Thinking", url: "https://www.arcee.ai/trinity", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: Arcee's open-source Trinity", url: "https://venturebeat.com/technology/arcees-new-open-source-trinity-large-thinking-is-the-rare-powerful-u-s-made", dateAccessed: "2026-04-17" },
    { name: "TechCrunch: Arcee AI 400B open-source LLM from scratch", url: "https://techcrunch.com/2026/01/28/tiny-startup-arcee-ai-built-a-400b-open-source-llm-from-scratch-to-best-metas-llama/", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.arcee.ai/trinity",
  status: "active",
  systemRequirements: [
    {
      variant: "Arcee Trinity-Large-Thinking (398B total / 13B active MoE)",
      min: "4× H100 80 GB or equivalent (256-expert MoE needs inactive experts in memory too)",
      max: "8× H100 or 4× H200 for production serving",
      notes: "Apache 2.0. Trained from scratch by Arcee AI (US)",
    },
  ],
  metaTitle: "Arcee Trinity-Large-Thinking Review 2026: US-Made 398B Open Frontier",
  metaDescription: "Arcee Trinity review (Apr 1 2026). US-made 398B sparse-MoE open frontier. Apache 2.0, trained from scratch, #2 PinchBench trailing only Claude Opus, 96% cheaper.",
};
