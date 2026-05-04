import { ToolReview } from "@/lib/types";

export const mistral: ToolReview = {
  slug: "mistral",
  name: "Mistral AI",
  tagline: "European AI lab with open and commercial models -- Mistral Medium 3.5 SHIPPED 2026-04-29 (128B dense, 256k context, 77.6% SWE-Bench Verified) plus Vibe Remote Agents + Le Chat Work Mode. Earlier 2026 line: Small 4 (Mar 2026 119B MoE Apache 2.0 unified), Medium 3 (Apr 9 2026), Voxtral TTS (Mar 2026 open-source speech)",
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
      plan: "API (Mistral Medium 3.5)",
      price: "$1.5 / $7.5",
      period: "per 1M tokens (input/output)",
      features: [
        "Public preview SHIPPED 2026-04-29 -- Mistral's first 'flagship merged' model",
        "128B dense, 256k context, 77.6% SWE-Bench Verified",
        "Underlies new Vibe Remote Agents + Le Chat Work Mode",
      ],
    },
    {
      plan: "API (Mistral Medium 3 -- predecessor)",
      price: "$1",
      period: "per 1M tokens",
      features: [
        "Launched April 9, 2026",
        "EU AI Act compliance metadata",
        "Balanced price/performance, superseded by 3.5 for new workloads",
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
    "Mistral Medium 3.5 (April 29 2026) is Mistral's first 'flagship merged' model -- 128B dense, 256k context, 77.6% on SWE-Bench Verified, in public preview at $1.5/$7.5 per million tokens. Closes most of the coding-benchmark gap to Claude Opus / GPT-5.5 at materially lower API cost",
    "Vibe Remote Agents (also 4/29) lets you launch cloud-based coding sessions that run asynchronously and in parallel via CLI or Le Chat -- file diffs, tool calls, and the ability to teleport a local session to the cloud while preserving history and approval state. Unique in the category as of today",
    "Le Chat Work Mode (4/29) is the first agentic mode shipped at the consumer-chat tier -- multi-step task completion, cross-tool workflows, research synthesis, inbox triage, with explicit approval gates for sensitive operations",
    "Mistral Small 4 (March 2026) unifies the previously-split Small/Magistral/Pixtral/Devstral lines into one 119B MoE Apache-2.0 model. Voxtral TTS (March 2026) fills the speech gap with a competent open-source 4B-param model that runs on consumer hardware",
    "Extremely competitive API pricing remains the moat -- Small 4 at $0.20/1M tokens, Medium 3.5 at $1.5/$7.5 per million tokens, against frontier-class quality",
  ],
  cons: [
    "Le Chat web interface is bare-bones compared to ChatGPT or Claude",
    "Smaller ecosystem -- fewer integrations and community resources",
    "Less brand recognition means less community help when you get stuck",
    "Documentation could be better, especially for newer models",
  ],
  knownIssues: [
    {
      description: "ENTERPRISE PRODUCT (2026-04-28 public preview): Mistral Workflows -- a Temporal-powered durable orchestration engine for AI workloads. Built on the same Temporal core that backs Netflix / Stripe / Salesforce, with Mistral-added streaming, payload handling, multi-tenancy, and observability. Python SDK v3.0, Helm-deployable workers, customer-perimeter data residency. Human-in-the-loop approvals via simple Python (wait_for_input()), full execution tracking in Studio, deploys cloud / on-prem / hybrid. Distinct from Vibe Remote Agents (the consumer-facing async coding sessions); Workflows is the enterprise infra layer that makes them and other AI workloads durable at scale. Live customers cited at preview: ASML, ABANCA, CMA-CGM, France Travail, La Banque Postale, Moeve. Pricing during preview not disclosed",
      source: "Mistral AI blog (mistral.ai/news/workflows)",
      date: "2026-04-28",
    },
    {
      description: "Mistral Medium 3.5 SHIPPED 2026-04-29 in public preview, accompanied by two net-new agentic offerings: Vibe Remote Agents (cloud-based coding sessions, async + parallel, CLI or Le Chat entry) and Le Chat Work Mode (agentic chat for multi-step tasks across tools). The model is 128B dense, 256k context, and posts 77.6% on SWE-Bench Verified. Pricing is $1.5/$7.5 per million tokens (input/output). 'Flagship merged' framing means Medium 3.5 supersedes Medium 3 for new workloads -- existing Medium 3 deployments continue to work",
      source: "Mistral AI blog (mistral.ai/news/vibe-remote-agents-mistral-medium-3-5)",
      date: "2026-04-29",
    },
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

  lastReviewedDate: "2026-05-04",
  dataSources: [
    { name: "Mistral AI: Workflows public preview (2026-04-28)", url: "https://mistral.ai/news/workflows", dateAccessed: "2026-05-04" },
    { name: "Mistral AI: Vibe Remote Agents + Mistral Medium 3.5 (2026-04-29)", url: "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5", dateAccessed: "2026-04-30" },
    { name: "Mistral AI official site", url: "https://mistral.ai", dateAccessed: "2026-04-30" },
    { name: "TechCrunch: Mistral releases Voxtral TTS", url: "https://techcrunch.com/2026/03/26/mistral-releases-a-new-open-source-model-for-speech-generation/", dateAccessed: "2026-04-16" },
    { name: "SiliconANGLE: hardware-efficient language models", url: "https://siliconangle.com/2026/03/17/openai-mistral-ai-release-new-hardware-efficient-language-models/", dateAccessed: "2026-04-16" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-16" },
    { name: "API testing", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://mistral.ai",
  status: "active",
  benchmarks: {
    modelName: "Mistral Medium 3.5 (vendor-published; third-party verification pending)",
    scores: [
      { name: "MMLU", score: 86.0, maxScore: 100, unit: "%" },
      { name: "HumanEval", score: 92.0, maxScore: 100, unit: "%" },
      { name: "MATH", score: 69.0, maxScore: 100, unit: "%" },
      { name: "SWE-Bench Verified", score: 77.6, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-04-29",
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
  metaTitle: "Mistral AI Review 2026: Medium 3.5 + Vibe Remote Agents + Le Chat Work Mode",
  metaDescription: "Mistral review. Medium 3.5 (Apr 29 2026, 128B dense, 256k, SWE-Bench 77.6%) + Vibe Remote Agents + Le Chat Work Mode. Plus Small 4, Medium 3, Voxtral TTS. Cheap API at $1.5/$7.5 per 1M.",
};
