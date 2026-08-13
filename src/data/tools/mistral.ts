import { ToolReview } from "@/lib/types";

export const mistral: ToolReview = {
  slug: "mistral",
  name: "Mistral AI",
  tagline: "European AI lab with open and commercial models -- Le Chat is now **Vibe** (May 28 2026): one agent across Work Mode + Code Mode with a VS Code extension and CLI, powered by Mistral Medium 3.5 (128B dense, 256k context, 77.6% SWE-Bench Verified). Newest release: **Shieldstral 1.0** (Aug 4 2026), a 3B Apache 2.0 multimodal safety classifier that runs on one 16GB GPU. Earlier 2026 line: Small 4 (119B MoE Apache 2.0), Medium 3, Voxtral TTS",
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
      description: "REGIONAL ENDPOINTS GO GA, A PRIORITY TIER ENTERS PREVIEW, AND MISTRAL STARTS HOSTING SOMEONE ELSE'S OPEN MODEL (2026-08-11, vendor post): three changes, two of them concrete product news. **(1) Mistral Regional Endpoints are now generally available** -- customers 'choose whether their inference runs in Europe or the US', aligning inference location with data-residency, regulatory and latency requirements. Read the carve-out Mistral itself states rather than the headline: processing happens in the selected region **'subject to limited, safeguarded transfers to sub-processors that may occur outside that region'** -- so this is regional control, not an absolute guarantee that no byte leaves. **(2) Mistral Priority Tier, public preview** -- committed service levels for mission-critical workloads, custom rate limits, backed by an **uptime SLA**. Mistral's claim: it is 'the only European AI lab to offer both' region choice and a committed SLA-backed service level. No pricing published for either. **(3) The genuinely surprising one: Mistral's platform will serve third-party open models, starting with Z.ai's GLM-5.2**, running on 'the same infrastructure, regional controls, and service commitments as Mistral models.' A frontier lab reselling a Chinese lab's open weights under its own sovereignty guarantees is a real strategic shift -- it concedes that customers want model choice more than they want Mistral-only, and it turns Mistral's European infrastructure into the product rather than the models alone. **USEFUL CROSS-CHECK: this vendor page names GLM-5.2 as the current Z.ai model**, which independently corroborates our standing decision not to ship the unsourced 'GLM-5.5' claim that has circulated on aggregators. **(4) Company/roadmap, not a product:** Mistral is assembling an anchor group of enterprises (**ASML, Amadeus** among the quoted participants) whose multi-year commitments fund European infrastructure, sold as **European Compute Units (ECUs)**, targeting **up to 1 GW of capacity by 2030**. That is a financing structure and a 2030 ambition -- no capacity exists today on the strength of this post, and it should not be read as shipped infrastructure",
      source: "Mistral AI (mistral.ai/news/regional-inference-open-models-new-compute/, RSS pubDate Tue, 11 Aug 2026 12:00:27 GMT, on-page date August 11, 2026, fetched 2026-08-13)",
      date: "2026-08-11",
    },
    {
      description: "SHIELDSTRAL RELEASED (2026-08-04, vendor-primary): Mistral shipped **Shieldstral 1.0**, a **3B-parameter, Apache 2.0 open-weights, policy-adaptive multimodal safety classifier** -- a guard model that screens prompts, responses, and **images** for harmful content. The design point is that it treats moderation as question-answering: you supply your **safety policy in plain language at inference time**, with **no retraining or fine-tuning**, and it returns a **calibrated yes/no probability from a single forward pass**. Mistral's claim is that it **matches or beats guard models up to 7x its size** on text safety, refusal detection, policy adaptability, and multimodal safety. Practical appeal: it runs on **a single 16GB NVIDIA GPU**, so self-hosters and small teams can put a real moderation layer in front of an open model without renting a second big box. Weights are on Hugging Face as **mistralai/Shieldstral-1.0-3B**; no pricing (open weights, free to download). Caveats worth knowing before you deploy it: **all comparative benchmark numbers are vendor-published and not yet third-party verified**, and **multilingual coverage is listed as future work** -- Mistral did not claim non-English safety performance at launch, which is a notable gap for a lab whose main differentiator is multilingual strength. Context: guard models are becoming table stakes as the **EU AI Act's Article 50 transparency duties went enforceable 2026-08-02**, and an EU-hosted, open-weights, self-deployable classifier is a pointed answer to US-hosted moderation APIs",
      source: "Mistral AI (mistral.ai/news/shieldstral/), Mistral AI news RSS (pubDate 2026-08-04), Hugging Face (mistralai/Shieldstral-1.0-3B)",
      date: "2026-08-04",
    },
    {
      description: "MICROSOFT PARTNERSHIP EXPANDED -- MULTIBILLION-DOLLAR DEAL (2026-07-21, Microsoft newsroom): Microsoft and Mistral announced a major expansion of their strategic partnership aimed at enterprises and regulated industries (finance, healthcare, manufacturing). Terms: **thousands of NVIDIA Vera Rubin GPUs** allocated for EU-based compute, and **Mistral Medium 3.5 + Mistral OCR 4 now available in Microsoft Foundry and Copilot Studio**. The pitch is control/sovereignty -- cloud, Azure Local, and fully air-gapped/disconnected deployment so regulated customers can run frontier Mistral models on their own terms. Strategically this deepens Mistral's distribution on Azure (Microsoft is also a Mistral investor) and gives European enterprises a non-US-lab frontier option inside the Microsoft stack. Not a new base model -- an availability + partnership expansion",
      source: "Microsoft (news.microsoft.com/source/2026/07/21/microsoft-and-mistral-expand-strategic-partnership-to-give-enterprises-and-regulated-industries-frontier-ai-they-can-control/)",
      date: "2026-07-21",
    },
    {
      description: "ROBOSTRAL NAVIGATE (2026-07-08, vendor-primary): Mistral's first **embodied-AI navigation model** -- an 8B-param model, built in-house and trained entirely in simulation (400K trajectories across 6K simulated environments, RL via CISPO), that guides **wheeled, legged, and flying robots** using just a single RGB camera + a plain-language instruction (no LiDAR/depth sensors). Vendor benchmarks: **R2R-CE 79.4% success (seen) / 76.6% (unseen)** -- +9.7 pts over the best single-camera approach and +4.5 over the best depth/multi-camera system. Caveats: all results are simulation-only, the pointing-based approach can't handle targets outside the camera's field of view, and **no weights, API, or license were published** -- access is 'talk with our team.' A research/enterprise play, not a product you can use today; notable as Mistral's entry into robotics. Same week (7/9): **Prompt & Skills Management** shipped in Mistral Studio -- a versioned system-of-record for prompts and skills",
      source: "Mistral AI (mistral.ai/news/robostral-navigate/), Mistral AI news (Studio prompt management, 2026-07-09)",
      date: "2026-07-08",
    },
    {
      description: "LEANSTRAL 1.5 RELEASED (2026-07-02, hit #1 on Hacker News 7/4): a formal-verification / Lean 4 theorem-proving model -- 119B total / 6B active params, Apache 2.0 open weights (mistralai/Leanstral-1.5-119B-A6B on Hugging Face) plus a FREE API endpoint (leanstral-1-5). Vendor-reported results: saturates miniF2F (100%), 587/672 on PutnamBench, 87% FATE-H / 34% FATE-X. Niche (math/proof engineering) but notable as a genuinely open frontier release in a specialty domain where closed labs dominate",
      source: "Mistral AI blog (mistral.ai/news/leanstral-1-5)",
      date: "2026-07-02",
    },
    {
      description: "REBRAND (2026-05-28): **Le Chat is now 'Vibe'** -- Mistral merged its consumer chat product into a single agent brand spanning Work Mode and Code Mode, with a new VS Code extension and CLI. Mistral Medium 3.5 (public preview since 4/29, broader rollout 5/22) is the default model powering Vibe's remote coding agents. Adjacent late-May moves: Emmi AI (physics/industrial simulation, via acquisition) added to the enterprise platform and a new Search Toolkit (5/28). If you bookmarked chat.mistral.ai as 'Le Chat,' it's the same product under the new name -- pricing tiers unchanged",
      source: "Mistral AI blog (mistral.ai/news/vibe-agent, mistral.ai/news/vibe-remote-agents-mistral-medium-3-5)",
      date: "2026-05-28",
    },
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

  lastReviewedDate: "2026-08-13",
  dataSources: [
    { name: "Mistral AI: In-region inference, open models, and new European infrastructure for sovereign AI -- Regional Endpoints GA, Priority Tier preview, GLM-5.2 hosting, ECUs (2026-08-11)", url: "https://mistral.ai/news/regional-inference-open-models-new-compute/", dateAccessed: "2026-08-13" },
    { name: "Mistral AI: Introducing Shieldstral (2026-08-04)", url: "https://mistral.ai/news/shieldstral/", dateAccessed: "2026-08-04" },
    { name: "Hugging Face: mistralai/Shieldstral-1.0-3B", url: "https://huggingface.co/mistralai/Shieldstral-1.0-3B", dateAccessed: "2026-08-04" },
    { name: "Microsoft: Microsoft and Mistral expand strategic partnership (2026-07-21)", url: "https://news.microsoft.com/source/2026/07/21/microsoft-and-mistral-expand-strategic-partnership-to-give-enterprises-and-regulated-industries-frontier-ai-they-can-control/", dateAccessed: "2026-07-22" },
    { name: "Mistral AI: Leanstral 1.5 (2026-07-02)", url: "https://mistral.ai/news/leanstral-1-5", dateAccessed: "2026-07-05" },
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
  metaTitle: "Mistral AI Review 2026: Le Chat Becomes Vibe + Medium 3.5 Default",
  metaDescription: "Mistral review. Medium 3.5 (Apr 29 2026, 128B dense, 256k, SWE-Bench 77.6%) + Vibe Remote Agents + Le Chat Work Mode. Plus Small 4, Medium 3, Voxtral TTS. Cheap API at $1.5/$7.5 per 1M.",
};
