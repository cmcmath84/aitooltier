import { ToolReview } from "@/lib/types";

export const gemma: ToolReview = {
  slug: "gemma",
  name: "Gemma 4 (Google)",
  tagline: "Google DeepMind's open-weights model family -- multimodal, 256K context, runs on edge devices",
  category: "ai-llms",
  url: "https://deepmind.google/models/gemma/gemma-4/",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 10,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Self-hosted", price: "$0", features: ["Apache 2.0 license", "Free download from Hugging Face/Kaggle/Ollama", "Run on your own hardware"] },
    { plan: "API (OpenRouter, Gemma 4 31B)", price: "$0.14-0.40", period: "per 1M tokens", features: ["Hosted inference", "$0.14 input / $0.40 output", "No infrastructure setup"] },
    { plan: "Google AI Studio", price: "$0", features: ["Free tier for testing", "Web playground access"] },
  ],

  pros: [
    "Apache 2.0 license -- truly permissive, you can use it commercially without strings attached",
    "Multimodal: handles text + image input (audio on smaller models), generates text output",
    "256K token context window -- larger than most open models",
    "140+ language support -- one of the strongest multilingual open models available",
    "Four sizes (E2B, E4B, 26B MoE, 31B Dense) cover edge devices to data centers",
    "31B Dense scores 89% on AIME 2026 and 84% on GPQA Diamond -- competitive with frontier closed models",
    "26B MoE activates only 3.8B params during inference for fast tokens-per-second",
  ],
  cons: [
    "Requires technical setup unless you use a hosted API provider",
    "Quality still trails the very best closed models (GPT-5.4 Pro, Claude Mythos 5, Gemini 3.1 Ultra) on hardest reasoning tasks",
    "No native chat UI from Google -- you're either coding against an API or using a third-party frontend",
    "Smaller community than Llama -- fewer fine-tunes and tooling integrations exist",
  ],
  knownIssues: [
    {
      description: "Gemma 4 launched April 2, 2026 with improved licensing -- earlier Gemma versions had restrictive use clauses that confused developers",
      source: "The Register, Hugging Face",
      date: "2026-04",
    },
    {
      description: "Function calling support is new -- some users report inconsistent tool-use behavior compared to Llama 3 or Mistral",
      source: "Hugging Face discussions",
      date: "2026-04",
    },
  ],
  bestFor: "Developers and businesses who need a permissively licensed multimodal LLM they can self-host or fine-tune. Especially good for multilingual use cases and on-device deployment.",
  notFor: "Non-technical users who just want to chat with an AI -- there's no consumer-facing app. Use Gemini if you want a polished chat experience.",
  verdict: "Gemma 4 is Google's answer to the open-weights race against Meta's Llama and the wave of strong Chinese open models. The Apache 2.0 license is a big deal -- it removes the legal friction that made earlier Gemma adoption awkward. The 31B Dense model is genuinely competitive with frontier closed models on benchmarks while costing $0.14/M input via API. If you're building a product on open-weights LLMs and you need multimodal + multilingual + permissive licensing, Gemma 4 is now a top choice.",

  lastReviewedDate: "2026-04-08",
  dataSources: [
    { name: "Google DeepMind Gemma 4 page", dateAccessed: "2026-04-08" },
    { name: "Google blog: Gemma 4 launch", dateAccessed: "2026-04-08" },
    { name: "Artificial Analysis benchmarks", dateAccessed: "2026-04-08" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-08" },
    { name: "The Register coverage", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://deepmind.google/models/gemma/gemma-4/",
  status: "active",
  metaTitle: "Gemma 4 Review 2026: Google's Open-Weights Multimodal LLM",
  metaDescription: "Gemma 4 review. Google DeepMind's open-weights LLM, Apache 2.0, 256K context, 140+ languages, four model sizes. Scores, pricing, comparison. April 2026.",
};
