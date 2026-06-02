import { ToolReview } from "@/lib/types";

export const maiThinking1: ToolReview = {
  slug: "mai-thinking-1",
  name: "Microsoft MAI-Thinking-1",
  tagline: "Microsoft's first in-house reasoning model -- launched 2026-06-02 at Build as the flagship of seven new MAI models. 35B-active / ~1T-total sparse Mixture-of-Experts, 256K context. AIME 2025 97.0%, matches leading models on SWE-Bench Pro, and beat Claude Sonnet 4.6 in human-preference testing. Available on Microsoft Foundry + OpenRouter / Fireworks / Baseten",
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
      plan: "Microsoft Foundry",
      price: "Not disclosed",
      features: [
        "Launched 2026-06-02 (Microsoft Build) -- private preview on Foundry at launch",
        "256K-token context window",
        "Chat Completions API compatible",
        "Public preview on MAI Playground coming soon",
      ],
    },
    {
      plan: "Third-party inference (OpenRouter / Fireworks / Baseten)",
      price: "Provider-set",
      features: [
        "Generally available at launch through OpenRouter, Fireworks, and Baseten",
        "Pay-as-you-go at each provider's per-token rate",
        "No first-party consumer subscription -- API/developer access only",
      ],
    },
  ],

  pros: [
    "Microsoft's first in-house frontier-class reasoning model -- removes the OpenAI dependency for the reasoning tier the same way MAI-Voice/Image/Transcribe did for speech and vision",
    "Strong published reasoning numbers: AIME 2025 97.0% and AIME 2026 94.5%, plus it 'matches leading models on key software engineering benchmarks' (SWE-Bench Pro) at a medium model size",
    "Sparse MoE design (35B active of ~1T total) is built for cost-efficiency -- Microsoft is positioning it as strong reasoning per dollar rather than a max-size flagship",
    "256K context + Chat Completions API compatibility makes it a near drop-in for existing reasoning workloads, and it shipped with day-one availability on OpenRouter, Fireworks, and Baseten",
  ],
  cons: [
    "Pricing not disclosed at launch -- you cannot yet model cost vs Claude / Gemini / GPT reasoning tiers without going through a third-party inference provider's published rate",
    "Foundry access is private preview at launch (MAI Playground public preview is 'coming soon') -- broad self-serve evaluation is not open yet",
    "Microsoft's benchmark and preference numbers are self-reported; independent AIME / SWE-Bench Pro confirmation typically lags announcement by several weeks",
    "No open weights -- this is an API/Foundry model, not a self-hostable open-weight release like Phi or the local-LLM tier",
  ],
  knownIssues: [
    {
      description: "LAUNCH (2026-06-02, Microsoft Build): MAI-Thinking-1 is the flagship of the 'seven new MAI models' wave (alongside MAI-Code-1-Flash, MAI-Image-2.5 + Flash, MAI-Transcribe-1.5, MAI-Voice-2 + Flash). Microsoft describes it as 'a medium-sized model that stands among the strongest models in its weight class.' Vendor-published: AIME 2025 97.0%, AIME 2026 94.5%, matches leading models on SWE-Bench Pro, and in human-preference testing 'users preferred MAI-Thinking-1 over Claude Sonnet 4.6.' Architecture: 35B-active, ~1T-total sparse Mixture-of-Experts; 256K context; Chat Completions API compatible. Availability: private preview on Microsoft Foundry at launch + GA through OpenRouter / Fireworks / Baseten; MAI Playground public preview coming soon.",
      source: "Microsoft AI (microsoft.ai/news/introducing-mai-thinking-1/, microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/)",
      date: "2026-06-02",
    },
    {
      description: "Self-reported benchmarks pending third-party verification. Microsoft's AIME and SWE-Bench Pro figures and the Sonnet 4.6 preference-win claim are first-party. Treat as vendor numbers until Artificial Analysis / LMArena-style independent confirmation lands (typically 4-8 weeks).",
      source: "Microsoft model announcement",
      date: "2026-06",
    },
  ],
  bestFor: "Azure / Microsoft Foundry shops that want a first-party reasoning model without an OpenAI dependency, and developers who want a cost-efficient reasoning tier (sparse MoE, 256K context) accessible today through OpenRouter, Fireworks, or Baseten.",
  notFor: "Consumer users who want a chat UI (there is no claude.ai-style website -- this is API/Foundry only), teams that need open weights for self-hosting (use the local-LLM tier), or anyone who needs published per-token pricing before committing.",
  verdict: "MAI-Thinking-1 is the most strategically significant entry in Microsoft's June 2, 2026 Build model wave: it is Microsoft's first in-house reasoning model, and the published numbers (AIME 2025 97.0%, SWE-Bench Pro parity with leading models, a human-preference win over Claude Sonnet 4.6) are genuinely competitive for a 35B-active model. Combined with MAI-Code, MAI-Image, MAI-Voice, and MAI-Transcribe, it completes Microsoft's in-house coverage of every major modality and removes the last big OpenAI dependency at the reasoning tier. The open questions are pricing (undisclosed) and independent verification of the benchmarks -- but for Foundry customers this is now a real first-party reasoning option, and the day-one OpenRouter/Fireworks/Baseten availability makes it easy to try.",

  lastReviewedDate: "2026-06-02",
  dataSources: [
    { name: "Microsoft AI: Introducing MAI-Thinking-1 (2026-06-02)", url: "https://microsoft.ai/news/introducing-mai-thinking-1/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: Building a hill-climbing machine -- launching seven new MAI models (2026-06-02)", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/", dateAccessed: "2026-06-02" },
  ],
  affiliateUrl: "https://microsoft.ai/news/introducing-mai-thinking-1/",
  status: "active",
  benchmarks: {
    modelName: "MAI-Thinking-1 (vendor-published 2026-06-02; third-party verification pending)",
    scores: [
      { name: "AIME 2025", score: 97.0, maxScore: 100, unit: "%" },
      { name: "AIME 2026", score: 94.5, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-06-02",
  },
  metaTitle: "MAI-Thinking-1 Review 2026: Microsoft's First In-House Reasoning Model",
  metaDescription: "MAI-Thinking-1 review. Microsoft's first reasoning model (Build, June 2 2026). 35B-active/~1T MoE, 256K context, AIME 2025 97.0%, beat Claude Sonnet 4.6 in preference tests. Foundry + OpenRouter/Fireworks/Baseten.",
};
