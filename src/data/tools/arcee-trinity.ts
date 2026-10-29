import { ToolReview } from "@/lib/types";

export const arceeTrinity: ToolReview = {
  slug: "arcee-trinity",
  name: "Arcee Trinity-Large-Thinking",
  tagline: "Arcee AI's US-made open-weight frontier reasoning model, launched 2026-04-01: 398B total parameters, about 13B active, sparse MoE with 256 experts and 4 active (1.56% routing), trained from scratch. The whole Trinity family moved to the Linux Foundation's OpenMDW-1.1 license on 2026-05-29 (no field-of-use restrictions). Arcee's own OpenAI-compatible API serves it at $0.25 / $0.80 per 1M input/output tokens",
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
      plan: "Self-hosted (OpenMDW-1.1)",
      price: "$0",
      features: [
        "Trained from scratch, not a fine-tune of an existing model",
        "OpenMDW-1.1 license: no field-of-use restrictions, no separate commercial license",
        "Weights on Hugging Face",
        "256-expert sparse MoE with 4 experts active (~1.56% routing)",
      ],
    },
    {
      plan: "Arcee API (Trinity-Large-Thinking)",
      price: "$0.25 / $0.80",
      period: "per 1M input / output tokens",
      features: [
        "OpenAI-compatible endpoint",
        "Served at 256K context at BF16",
        "Same API also serves DeepSeek, GLM, Kimi and Inkling models (beta since 2026-08-13)",
        "Pay-as-you-go",
      ],
    },
  ],

  pros: [
    "OpenMDW-1.1 (since 2026-05-29) covers weights, code, configs and documentation under one permissive license, with no field-of-use restrictions and no separate commercial license",
    "Arcee's own OpenAI-compatible API serves Trinity-Large-Thinking at $0.25 / $0.80 per 1M input/output tokens with 256K context at BF16",
    "Rare US-made frontier-tier open-weight reasoning model -- fills the gap that Reflection AI has been teasing but has not yet shipped. With Llama 5 still unconfirmed, Arcee Trinity is the strongest available US-made open frontier option as of April 2026",
    "Trained from scratch (not a fine-tune) at 398B total params with genuinely novel 256-expert MoE architecture. This is real frontier-scale training from a US startup, not a re-distillation -- a meaningful proof point for the US open-weight ecosystem",
    "#2 on PinchBench trailing only Claude 3.5 Opus. Beats DeepSeek, Qwen, and most other open-weight competitors on agentic reasoning in that specific evaluation. Third-party benchmarks beyond PinchBench are still landing through Q2 2026",
    "~96% cheaper than Claude Opus 4.6 on equivalent agentic tasks (per Arcee's own cost modeling) -- the sparse MoE routing is aggressive enough that per-token economics are closer to a 13B dense model than a 398B one",
  ],
  cons: [
    "OpenRouter listed no active endpoints for Trinity-Large-Thinking on 2026-10-29, so hosted access now runs mainly through Arcee's own API, which Arcee launched as a beta on 2026-08-13",
    "Fresh as of 2026-04-01 -- third-party benchmark verification beyond PinchBench is still lagging. The 'competitive with Opus' claim is plausible but not yet cross-validated by Artificial Analysis, LMArena, or major tier-1 press evaluations",
    "Arcee AI is a smaller US startup -- production-scale support, fine-tuning ecosystem, and community fine-tunes are thinner than what Llama, Qwen, or DeepSeek offer. Enterprise adoption will be gated by Arcee's ability to grow those resources",
    "Requires multi-GPU infrastructure to self-host at full capacity -- 398B total params means even with MoE routing, the inactive experts still need to fit in memory. Realistic self-hosting starts at 4× H100 or equivalent",
    "First-release model. Expect rough edges on instruction-following, long-horizon coherence, and multilingual performance versus more iterated families like Qwen 3.6 or GLM-5.1",
  ],
  knownIssues: [
    {
      description: "HOSTING AND FUNDING (2026-08-13 to 2026-09-16, checked 2026-10-29): Arcee's Open Models API beta (2026-08-13) prices trinity-large-thinking at $0.25 input and $0.80 output per 1M tokens and also serves DeepSeek, GLM, Kimi and Inkling models; Arcee's Trinity page says the API is OpenAI-compatible and serves Large at 256K context at BF16. OpenRouter still lists arcee-ai/trinity-large-thinking but showed no active endpoints on 2026-10-29, so the ~$0.90/M OpenRouter price on earlier versions of this page no longer applies. On 2026-09-16 Arcee announced a Series B; 'The round values Arcee at more than $1 billion', and the next Trinity generation is 'already in training'. No new arcee-ai Hugging Face repos had appeared since 2026-04-08.",
      source: "Arcee blog (arcee.ai/blog/open-models-api-beta, Aug 13, 2026; arcee.ai/blog/arcee-ai-raises-series-b-to-build-the-future-of-american-open-models, Sep 16, 2026) + arcee.ai/trinity + OpenRouter endpoints API + huggingface.co/arcee-ai, fetched 2026-10-29",
      date: "2026-09-16",
    },
    {
      description: "LICENSE MOVED TO OPENMDW-1.1 (2026-05-29, Arcee blog): 'Today we are moving the entire Trinity family to OpenMDW-1.1, the Linux Foundation's permissive license built for open AI model distributions', and 'we've updated previously released models to this license.' Arcee adds: 'There are no field-of-use restrictions and no separate commercial license requirement.' The Trinity-Large-Thinking Hugging Face card now lists license_name openmdw-1.1. Earlier versions of this page said Apache 2.0.",
      source: "Arcee blog (arcee.ai/blog/trinity-is-moving-to-openmdw-1-1, May 29, 2026) + huggingface.co/arcee-ai/Trinity-Large-Thinking model card, fetched 2026-10-29",
      date: "2026-05-29",
    },
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
  bestFor: "Teams that need a US-made, permissively licensed (OpenMDW-1.1) frontier-tier open-weight model and can either rent multi-GPU infrastructure or use Arcee's API at $0.25 / $0.80 per 1M input/output tokens. Particularly valuable for US government, defense, or regulated enterprise contexts where country-of-origin matters for procurement. Also good for agentic reasoning workloads where the ~96% cost savings vs Claude Opus actually changes what you can build.",
  notFor: "Absolute beginners or low-budget experimenters -- the 398B MoE needs real hardware or real API spend. Also not ideal if community ecosystem / fine-tune availability matters to you -- Qwen 3.6 and Llama 4 both have deeper third-party support. And not the right pick for multilingual or non-English use cases -- Arcee Trinity is English-first.",
  verdict: "Arcee Trinity-Large-Thinking is the most consequential US-made open-weight launch since Meta's Llama 4. A tiny US startup shipping a 398B-parameter sparse-MoE frontier reasoning model, trained from scratch, under a permissive license (OpenMDW-1.1 since 2026-05-29), priced ~96% below Claude Opus. That is genuinely a new category of competitor in the open-weight ecosystem. The third-party benchmark verification is still landing, so treat the 'Opus-tier' positioning as provisional through April 2026. But even if Trinity lands at 80% of the claimed quality, it is the strongest US-made open-weight frontier option available today, and for US procurement / country-of-origin-sensitive deployments it fills a real gap that nobody else had solved.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "Arcee AI: Trinity is moving to OpenMDW-1.1 (May 29, 2026)", url: "https://www.arcee.ai/blog/trinity-is-moving-to-openmdw-1-1", dateAccessed: "2026-10-29" },
    { name: "Arcee AI: Introducing the Arcee Open Models API Beta (Aug 13, 2026)", url: "https://www.arcee.ai/blog/open-models-api-beta", dateAccessed: "2026-10-29" },
    { name: "Arcee AI: Series B (Sep 16, 2026)", url: "https://www.arcee.ai/blog/arcee-ai-raises-series-b-to-build-the-future-of-american-open-models", dateAccessed: "2026-10-29" },
    { name: "Hugging Face arcee-ai models (Trinity-Large-Thinking card, license openmdw-1.1)", url: "https://huggingface.co/arcee-ai", dateAccessed: "2026-10-29" },
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
      notes: "OpenMDW-1.1 (since 2026-05-29). Trained from scratch by Arcee AI (US)",
    },
  ],
  metaTitle: "Arcee Trinity-Large-Thinking Review 2026: US-Made 398B Open Frontier",
  metaDescription: "Arcee Trinity review. US-made 398B sparse-MoE open-weight reasoning model (Apr 1 2026), trained from scratch. OpenMDW-1.1 license, Arcee API $0.25/$0.80 per 1M tokens, #2 on PinchBench per Arcee.",
};
