import { ToolReview } from "@/lib/types";

export const maiThinking1: ToolReview = {
  slug: "mai-thinking-1",
  name: "Microsoft MAI-Thinking-1",
  tagline: "**Nov 2026: public preview on Foundry since 2026-08-12, priced at $2 / $8 per 1M tokens.** Microsoft's first in-house reasoning model -- announced 2026-06-02 at Build as the flagship of seven new MAI models. 35B-active / ~1T-total sparse Mixture-of-Experts, 256K context. AIME 2025 97.0%, 52.8% on SWE-Bench Pro, and preferred over Claude Sonnet 4.6 in blind human side-by-sides. Foundry is the only confirmed route; Baseten, Fireworks and OpenRouter were announced as coming",
  category: "ai-llms",
  url: "https://microsoft.ai/news/introducing-mai-thinking-1/",

  scores: {
    easeOfUse: 6,
    outputQuality: 8.5,
    value: 7.5,
    features: 8,
    overall: 7.5,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Microsoft Foundry (Global deployment)",
      price: "$2.00 / $8.00 per 1M tokens",
      features: [
        "Input $2.00, cached input $0.20, output $8.00 per 1M tokens (Azure Foundry Models pricing page, fetched 2026-11-05)",
        "Public preview on Microsoft Foundry since 2026-08-12 (private preview at the 2026-06-02 launch)",
        "256K-token context window, function calling, developer instructions",
        "Chat Completions API compatible",
      ],
    },
    {
      plan: "Third-party inference (Baseten / Fireworks / OpenRouter)",
      price: "Announced, not confirmed live",
      features: [
        "Microsoft said on 2026-06-02 that its models are 'going to be widely available for developers on OpenRouter', Fireworks and Baseten",
        "Baseten's own 2026-06-02 post: 'MAI-Thinking-1 will be available on Baseten soon' (early-access application)",
        "Not listed in OpenRouter's public model catalog as of 2026-11-05",
        "No first-party consumer subscription -- API/developer access only",
      ],
    },
  ],

  pros: [
    "Microsoft's first in-house frontier-class reasoning model -- removes the OpenAI dependency for the reasoning tier the same way MAI-Voice/Image/Transcribe did for speech and vision",
    "Strong published reasoning numbers: AIME 2025 97.0% and AIME 2026 94.5%, plus 52.8% on SWE-Bench Pro, where Microsoft says it is 'toe-to-toe with Claude Opus 4.6' -- at a medium model size",
    "Sparse MoE design (35B active of ~1T total) is built for cost-efficiency, and the Foundry price is now published: $2 in / $0.20 cached / $8 out per 1M tokens",
    "256K context + Chat Completions API compatibility makes it a near drop-in for existing reasoning workloads, and Foundry access is now self-serve public preview rather than private preview",
  ],
  cons: [
    "Third-party availability lagged the announcement: Baseten, Fireworks and OpenRouter were announced as coming on 2026-06-02, and OpenRouter's catalog still had no MAI-Thinking-1 listing on 2026-11-05 -- in practice this is a Foundry model",
    "Still a preview: Foundry access is public preview, not general availability, five months after launch",
    "Microsoft's benchmark and preference numbers are self-reported; independent AIME / SWE-Bench Pro confirmation typically lags announcement by several weeks",
    "No open weights -- this is an API/Foundry model, not a self-hostable open-weight release like Phi or the local-LLM tier",
  ],
  knownIssues: [
    {
      description: "PUBLIC PREVIEW + PRICING (2026-08-12, verified 2026-11-05, vendor-primary): Microsoft updated its launch post -- 'Updated as of August 12, 2026' -- to say 'MAI-Thinking-1 is now available in public preview.' on Microsoft Foundry (it launched in private preview on 2026-06-02). Azure's Foundry Models pricing page lists 'MAI-Thinking-1 Global' at $2 input / $0.20 cached input / $8 output per 1M tokens. The model page says 'Build with MAI-Thinking-1 in public preview.' and points MAI Playground at 'all other MAI models', so the earlier 'MAI Playground public preview coming soon' line has been dropped. No MAI-Thinking-1.x or successor has shipped; Microsoft's 2026-10-15 lab notes say its next base model, MAI-Base-2 ('80 billion active and 2.8 trillion total parameters'), 'is currently undergoing post-training'.",
      source: "microsoft.ai/news/introducing-mai-thinking-1/ (JSON-LD 2026-08-12), microsoft.ai/models/mai-thinking-1/, azure.microsoft.com/en-us/pricing/details/ai-foundry-models/microsoft/, microsoft.ai/news/frontier-pre-training-at-microsoft-ai/ (2026-10-15), all fetched 2026-11-05",
      date: "2026-08-12",
    },
    {
      description: "CORRECTION (2026-11-05): this page said MAI-Thinking-1 was 'generally available at launch through OpenRouter, Fireworks, and Baseten'. Microsoft's 2026-06-02 launch post says its models are 'going to be widely available for developers on OpenRouter' as well as Fireworks and Baseten (future tense); Baseten's own 2026-06-02 post is titled 'MAI-Thinking-1 is coming to Baseten' and says 'MAI-Thinking-1 will be available on Baseten soon.'; and OpenRouter's public model catalog listed no MAI model on 2026-11-05. Do not restore the GA-on-third-parties claim without a provider listing.",
      source: "microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/, baseten.co/blog/mai-thinking-1/, openrouter.ai/api/v1/models (all fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "BENCHMARK ADDED (2026-06-02, vendor-primary): Microsoft's Build keynote transcript footnote reads 'Scored 52.8% on SWE Bench Pro', and the keynote says 'it’s at 53% on SWE Bench Pro, placing it right alongside Opus 4.6'. Added to the benchmark table as a vendor number.",
      source: "microsoft.ai/news/microsoft-build-2026-mai-keynote-transcript/ (fetched 2026-11-05)",
      date: "2026-06-02",
    },
    {
      description: "LAUNCH (2026-06-02, Microsoft Build): MAI-Thinking-1 is the flagship of the 'seven new MAI models' wave (alongside MAI-Code-1-Flash, MAI-Image-2.5 + Flash, MAI-Transcribe-1.5, MAI-Voice-2 + Flash). Microsoft describes it as 'a medium-sized model that stands among the strongest models in its weight class.' Vendor-published: AIME 2025 97.0%, AIME 2026 94.5%, matches leading models on SWE-Bench Pro, and in human-preference testing 'users preferred MAI-Thinking-1 over Claude Sonnet 4.6.' Architecture: 35B-active, ~1T-total sparse Mixture-of-Experts; 256K context; Chat Completions API compatible. Availability at launch: private preview on Microsoft Foundry; OpenRouter / Fireworks / Baseten announced as coming (see the CORRECTION above).",
      source: "Microsoft AI (microsoft.ai/news/introducing-mai-thinking-1/, microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/)",
      date: "2026-06-02",
    },
    {
      description: "Self-reported benchmarks pending third-party verification. Microsoft's AIME and SWE-Bench Pro figures and the Sonnet 4.6 preference-win claim are first-party. Treat as vendor numbers until Artificial Analysis / LMArena-style independent confirmation lands (typically 4-8 weeks).",
      source: "Microsoft model announcement",
      date: "2026-06",
    },
  ],
  bestFor: "Azure / Microsoft Foundry shops that want a first-party reasoning model without an OpenAI dependency, at a published $2 / $8 per 1M rate in Foundry public preview, with sparse-MoE efficiency and a 256K context window.",
  notFor: "Consumer users who want a chat UI (there is no claude.ai-style website -- this is API/Foundry only), teams that need open weights for self-hosting (use the local-LLM tier), anyone who needs a GA service level (still public preview), or teams that want to reach it through OpenRouter, Fireworks or Baseten today (announced, not confirmed live).",
  verdict: "MAI-Thinking-1 is the most strategically significant entry in Microsoft's June 2, 2026 Build model wave: it is Microsoft's first in-house reasoning model, and the published numbers (AIME 2025 97.0%, 52.8% on SWE-Bench Pro, a human-preference win over Claude Sonnet 4.6) are genuinely competitive for a 35B-active model. Five months on, the two big open questions have moved: pricing is now published ($2 in / $8 out per 1M on Foundry) and access is public preview. But the day-one third-party story did not materialise as described -- Baseten, Fireworks and OpenRouter were announced as coming, not live -- so for now this is a Foundry model for Azure customers. Benchmarks remain vendor-reported.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Microsoft AI: Introducing MAI-Thinking-1 (2026-06-02, updated 2026-08-12)", url: "https://microsoft.ai/news/introducing-mai-thinking-1/", dateAccessed: "2026-11-05" },
    { name: "Microsoft AI: Building a hill-climbing machine -- launching seven new MAI models (2026-06-02)", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/", dateAccessed: "2026-11-05" },
    { name: "Microsoft AI: MAI-Thinking-1 model page", url: "https://microsoft.ai/models/mai-thinking-1/", dateAccessed: "2026-11-05" },
    { name: "Microsoft Azure: Foundry Models pricing (Microsoft models)", url: "https://azure.microsoft.com/en-us/pricing/details/ai-foundry-models/microsoft/", dateAccessed: "2026-11-05" },
    { name: "Microsoft AI: Microsoft Build 2026 MAI keynote transcript (2026-06-02)", url: "https://microsoft.ai/news/microsoft-build-2026-mai-keynote-transcript/", dateAccessed: "2026-11-05" },
    { name: "Microsoft AI: Frontier Pre-training at Microsoft AI (2026-10-15)", url: "https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/", dateAccessed: "2026-11-05" },
    { name: "Microsoft AI: Blog index", url: "https://microsoft.ai/blog/", dateAccessed: "2026-11-05" },
    { name: "Baseten: MAI-Thinking-1 is coming to Baseten (2026-06-02)", url: "https://www.baseten.co/blog/mai-thinking-1/", dateAccessed: "2026-11-05" },
    { name: "OpenRouter: public model catalog API", url: "https://openrouter.ai/api/v1/models", dateAccessed: "2026-11-05" },
  ],
  affiliateUrl: "https://microsoft.ai/news/introducing-mai-thinking-1/",
  status: "active",
  benchmarks: {
    modelName: "MAI-Thinking-1 (vendor-published 2026-06-02; third-party verification pending)",
    scores: [
      { name: "AIME 2025", score: 97.0, maxScore: 100, unit: "%" },
      { name: "AIME 2026", score: 94.5, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Pro", score: 52.8, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-11-05",
  },
  metaTitle: "MAI-Thinking-1 Review 2026: Microsoft's First Reasoning Model, $2/$8 on Foundry",
  metaDescription: "MAI-Thinking-1 review. Microsoft's first in-house reasoning model (Build, June 2 2026), public preview on Foundry since Aug 12 at $2/$8 per 1M tokens. 35B-active/~1T MoE, 256K context, AIME 2025 97.0%, SWE-Bench Pro 52.8%.",
};
