import { ToolReview } from "@/lib/types";

export const mistral: ToolReview = {
  slug: "mistral",
  name: "Mistral AI",
  tagline: "European AI lab with open and commercial models -- Mistral Small 4 (Mar 2026, 119B MoE Apache 2.0 unified model), Medium 3 (Apr 9 2026), and Voxtral TTS (open-source speech, Mar 2026)",
  category: "ai-local-models",
  url: "https://mistral.ai",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 9,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Le Chat (Free)",
      price: "$0",
      features: [
        "Web chat interface with Mistral models",
        "Mistral Small 4 + Medium 3 available",
        "Basic features, limited rate",
      ],
    },
    {
      plan: "API (Mistral Small 4)",
      price: "$0.20",
      period: "per 1M tokens",
      features: [
        "119B MoE, Apache 2.0 open-weight",
        "Unifies Small/Magistral/Pixtral/Devstral into one model",
        "Fast, efficient, 128K context",
      ],
    },
    {
      plan: "API (Mistral Medium 3)",
      price: "$1",
      period: "per 1M tokens",
      features: [
        "Launched April 9, 2026",
        "EU AI Act compliance metadata",
        "Balanced price/performance",
      ],
    },
    {
      plan: "API (Mistral Large 3)",
      price: "$2",
      period: "per 1M tokens",
      features: [
        "Flagship sparse MoE",
        "256K context",
        "MRL license (paid for commercial self-hosting)",
      ],
    },
    {
      plan: "Voxtral TTS",
      price: "$0",
      features: [
        "4B-param open-source speech model, March 2026",
        "9 languages, runs on consumer hardware",
        "Apache 2.0",
      ],
    },
  ],

  pros: [
    "Mistral Small 4 (March 2026) unifies the previously-split Small/Magistral/Pixtral/Devstral lines into one 119B MoE Apache-2.0 model -- easier to deploy, same quality across the board",
    "Voxtral TTS (March 2026) fills the one gap in Mistral's lineup -- a competent open-source speech model that actually runs on consumer hardware, a real alternative to ElevenLabs for developers who care about self-hosting",
    "Mistral Medium 3 (April 9 2026) ships with EU AI Act compliance metadata baked in -- the first frontier model to do this, which matters increasingly for European enterprise buyers",
    "Extremely competitive API pricing -- Small 4 at $0.20/1M tokens and Medium 3 at $1/1M tokens remain the best price/performance in the category",
  ],
  cons: [
    "Le Chat web interface is bare-bones compared to ChatGPT or Claude",
    "Smaller ecosystem -- fewer integrations and community resources",
    "Less brand recognition means less community help when you get stuck",
    "Documentation could be better, especially for newer models",
  ],
  knownIssues: [
    {
      description: "Le Chat occasionally slower than competitors during European business hours",
      source: "Reddit r/MistralAI",
      date: "2026-03",
    },
    {
      description: "Voxtral TTS English output is competent but trails ElevenLabs v3 on expressiveness -- it's positioned as an open-source alternative, not a quality leader",
      source: "TechCrunch Voxtral coverage",
      date: "2026-03",
    },
  ],
  bestFor: "Developers who want cheap, high-quality API access. Also strong for multilingual applications and European companies that prefer an EU-based AI provider for data residency.",
  notFor: "Non-technical users looking for a polished chat experience. ChatGPT and Claude are much better as consumer products.",
  verdict: "Mistral is the scrappy underdog that keeps surprising people. Their models are impressively efficient -- you get near-GPT-4 quality at a fraction of the API cost. But the consumer experience (Le Chat) is rough. This is primarily a developer's tool. If you're building AI applications on a budget, Mistral should be on your shortlist.",

  lastReviewedDate: "2026-04-16",
  dataSources: [
    { name: "Mistral AI official site", url: "https://mistral.ai", dateAccessed: "2026-04-16" },
    { name: "TechCrunch: Mistral releases Voxtral TTS", url: "https://techcrunch.com/2026/03/26/mistral-releases-a-new-open-source-model-for-speech-generation/", dateAccessed: "2026-04-16" },
    { name: "SiliconANGLE: hardware-efficient language models", url: "https://siliconangle.com/2026/03/17/openai-mistral-ai-release-new-hardware-efficient-language-models/", dateAccessed: "2026-04-16" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-16" },
    { name: "API testing", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://mistral.ai",
  status: "active",
  benchmarks: {
    modelName: "Mistral Large 3 / Small 4",
    scores: [
      { name: "MMLU", score: 86.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 92.0, maxScore: 100, unit: "%" },
      { name: "MATH", score: 69.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-16",
  },
  systemRequirements: [
    {
      variant: "Mistral Small 3 / Devstral 2 (24B dense, Apache 2.0)",
      min: "10 GB VRAM (Q4)",
      max: "1× A100 40 GB FP16",
    },
    {
      variant: "Mistral 14B / 8B / 3B (Apache 2.0)",
      min: "6 / 4 / 2 GB VRAM (Q4)",
      max: "24 / 16 / 8 GB VRAM FP16",
    },
    {
      variant: "Mixtral 8x22B (legacy)",
      min: "64 GB RAM + 24 GB GPU (Q3)",
      max: "2× A100 80 GB FP16",
    },
    {
      variant: "Mistral Large 3 (flagship)",
      min: "Not self-hostable under free terms -- MRL license",
      max: "Requires paid commercial license to self-host",
    },
  ],

  personality: {
    oneLiner: "The European pragmatist",
    tone: "Efficient, terse, and slightly blunt. Mistral answers in fewer words than Claude or ChatGPT, especially on factual questions, and rarely hedges or softens its take.",
    quirks: "Trained with less Anglocentric data than Llama, so it handles French, German, and Spanish notably better than US-origin models. Refusal rates are lower than ChatGPT or Gemini on most gray-area prompts.",
  },
  metaTitle: "Mistral AI Review 2026: Small 4, Medium 3, Voxtral TTS, Large 3",
  metaDescription: "Mistral review. Small 4 (March 2026 unified 119B MoE), Medium 3 (April 9 EU-compliant), Voxtral TTS (open-source speech). Cheap API. Scores + pricing. April 2026.",
};
