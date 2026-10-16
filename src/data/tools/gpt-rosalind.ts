import { ToolReview } from "@/lib/types";

export const gptRosalind: ToolReview = {
  slug: "gpt-rosalind",
  name: "GPT-Rosalind (OpenAI)",
  tagline: "**Since 2026-10-15 US university labs can apply for the Rosalind Academic Plan: up to 30 ChatGPT Business Standard seats free for up to 12 months, with GPT-Rosalind and Rosalind Workbench behind trusted-access approval.** OpenAI's first domain-specific model -- life sciences, drug discovery, translational medicine. Launched 2026-04-16 as a Trusted Access research preview. Launch partners: Amgen, Moderna, Allen Institute, Thermo Fisher. Paired with a Life Sciences Codex plugin (50+ scientific tool integrations)",
  category: "ai-llms",
  url: "https://openai.com/index/introducing-gpt-rosalind/",

  scores: {
    easeOfUse: 3,
    outputQuality: 9,
    value: 7,
    features: 8,
    overall: 6.8,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Rosalind Academic Plan (from 2026-10-15)",
      price: "$0",
      period: "per seat per month, up to 30 seats for up to 12 months",
      features: ["US university labs only; the PI or lab lead applies and OpenAI vets the institution, the lead and the intended use", "GPT-Rosalind access subject to trusted-access approval, plus all commercially available frontier OpenAI models within plan limits", "Rosalind Workbench tool orchestration (medicinal chemistry, genomics, wet-lab assistance)", "No API access; research data not used for training by default; universities with an OpenAI Enterprise agreement apply through it"],
    },
    {
      plan: "Trusted Access (gated)",
      price: "Invite only",
      features: [
        "Research preview limited to partner organizations",
        "Launch partners: Amgen, Moderna, Allen Institute for Cell Science, Thermo Fisher",
        "Application required via OpenAI enterprise sales",
        "Not available to consumer ChatGPT users",
      ],
    },
    {
      plan: "Life Sciences Codex Plugin",
      price: "Included with ChatGPT Pro / Business",
      features: [
        "50+ scientific tool integrations (PubMed, BioRxiv, UniProt, etc.)",
        "Works with Codex cloud agent for multi-step research workflows",
        "Available in ChatGPT Pro ($100/mo) and Business tiers",
      ],
    },
    {
      plan: "Public access",
      price: "Not available",
      features: [
        "Not being released publicly as a standalone product",
        "Consumer use case unclear -- this is an enterprise / research tool",
      ],
    },
  ],

  pros: [
    "Since 2026-10-15 a vetted US university lab can get GPT-Rosalind at no cost: the Rosalind Academic Plan gives up to 30 Business Standard seats free for up to 12 months, with the other frontier OpenAI models included",
    "OpenAI's first named vertical/domain-specific model -- signals a new strategy beyond general-purpose GPT-5.x. The pattern (vertical + gated rollout + blue-chip launch partners) echoes the 2026-04-07 Anthropic Mythos Preview / Project Glasswing model and suggests how frontier-lab productization will work in 2026 and beyond",
    "Launch partners Amgen, Moderna, Allen Institute, Thermo Fisher are credible biotech and research institutions -- not just splashy logos. Suggests the model has been meaningfully trained/tuned on real biology data with real domain expertise in the loop",
    "Life Sciences Codex plugin is the practical hook -- 50+ scientific tool integrations (PubMed, BioRxiv, UniProt, scientific Python libraries) mean Codex can now run multi-step research workflows: literature search, protein lookup, reagent ordering scripts, experimental design in one chain",
    "OpenAI is now playing in the space Anthropic's Mythos targets (gated domain models) with Nvidia's vertical strategy (BioNeMo, Evo) and Google's Med-PaLM lineage. Competition drives rapid improvement",
  ],
  cons: [
    "Not available to anyone reading this unless your org is already a Trusted Access partner. If you are at Amgen or Moderna, ask internally. Everyone else: wait and see",
    "Domain-specific model, so for general-purpose work Claude Opus 5.5, GPT-6 or Gemini 4 Argon remain the right answer -- GPT-Rosalind will be narrower in scope even once broadly available",
    "Trusted Access means OpenAI controls who uses it. Unlike consumer ChatGPT, there is no path from 'I am curious' to 'I am using it' without an enterprise sales conversation",
    "Claims need third-party verification. At launch, OpenAI has not published open benchmarks. Expect published drug-discovery / biology evals from neutral sources over next 3-6 months",
  ],
  knownIssues: [
    {
      description: "ROSALIND ACADEMIC PLAN -- FREE SEATS FOR US ACADEMIC LABS, STILL BEHIND TRUSTED ACCESS (2026-10-15, vendor-primary): OpenAI introduced the Rosalind Academic Plan 'to help more academic scientists access GPT-Rosalind, our dedicated life sciences model, which combines frontier reasoning with Rosalind workbench that enables specialized tool orchestration across medicinal chemistry, genomics, wet-lab assistance, and other scientific applications'. **Terms:** 'Up to 30 Business Standard seats at $0 per user per month for up to 12 months'; 'Access to all commercially available frontier OpenAI models, subject to plan usage limits'; research data 'not used to train our models by default'; 'API access is not included at this time.' **Eligibility:** 'currently available to academic labs at U.S. universities'; PIs and lab leads at universities without an Enterprise agreement apply through OpenAI's trusted access process, those with one go through the university. OpenAI verifies the institution and the lead's identity and appointment and reviews research activities and intended use; applying 'doesn't give your lab immediate access'. Quoted users include labs at UCSF. **What changed for this page:** GPT-Rosalind is no longer limited to a handful of named enterprise partners -- a vetted academic lab can now get it at no cost -- but it is still not self-serve and there is still no public benchmark or consumer access. Separately, OpenAI's Enterprise token rate card (early October) lists GPT-Rosalind-Research for select Enterprise plans (see the ChatGPT page).",
      source: "OpenAI (openai.com/index/introducing-the-rosalind-academic-plan/, publicationDateText 'October 15, 2026') + ChatGPT release notes 'October 15, 2026' -- fetched 2026-10-15 via curl with browser UA",
      date: "2026-10-15",
    },
    {
      description: "Trusted Access rollout -- not open for self-serve signup. Launched 2026-04-16 with fewer than 10 named partners. Broader access timeline not announced",
      source: "OpenAI launch post",
      date: "2026-04",
    },
    {
      description: "No independently-published benchmark results yet. OpenAI's claims (life-science reasoning superiority over general-purpose GPT-5.x) rely on internal evaluations. Wait for neutral published comparisons over Q2/Q3 2026",
      source: "VentureBeat, OpenAI launch coverage",
      date: "2026-04",
    },
  ],
  bestFor: "Researchers and enterprises in biology, drug discovery, protein science, translational medicine, or adjacent life-sciences domains who can get Trusted Access. Also relevant to anyone building life-sciences AI products who needs to understand where OpenAI's vertical strategy is heading.",
  notFor: "General-purpose use (use GPT-6, Claude Opus 5.5 or Gemini 4 Argon). Consumer users outside a partner org or an approved US academic lab (no self-serve access). Anyone expecting standalone consumer pricing -- this is an enterprise / research play only.",
  verdict: "GPT-Rosalind is OpenAI's first named vertical model, launched 2026-04-16 as a Trusted Access preview with Amgen, Moderna, Allen Institute, and Thermo Fisher as launch partners. The parallel to Anthropic's Mythos Preview (2026-04-07) is clear: frontier labs are shipping gated domain-specific models while keeping their general-purpose models (GPT-5.x, Opus 4.x) publicly accessible. For life-sciences researchers in those partner orgs, this is a real capability upgrade worth exploring. For everyone else, it is a strategic signal: expect GPT-[domain] models in law, finance, defense, and other verticals through 2026, and expect broad availability never to materialize for the most capable tiers. The bundled Life Sciences Codex plugin (50+ scientific tool integrations) is the more immediately actionable item -- ChatGPT Pro and Business users can run multi-step life-sciences research workflows with it starting today.",

  lastReviewedDate: "2026-10-15",
  dataSources: [
    { name: "OpenAI: Bringing GPT-Rosalind to academic research labs -- Rosalind Academic Plan (2026-10-15)", url: "https://openai.com/index/introducing-the-rosalind-academic-plan/", dateAccessed: "2026-10-15" },
    { name: "OpenAI ChatGPT release notes -- October 15, 2026: applications for the Rosalind Academic Plan", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes", dateAccessed: "2026-10-15" },
    { name: "OpenAI: Introducing GPT-Rosalind", url: "https://openai.com/index/introducing-gpt-rosalind/", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: OpenAI debuts GPT-Rosalind + Codex plugin", url: "https://venturebeat.com/technology/openai-debuts-gpt-rosalind-a-new-limited-access-model-for-life-sciences-and-broader-codex-plugin-on-github", dateAccessed: "2026-04-17" },
    { name: "Industry analysis of vertical AI strategy", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openai.com/index/introducing-gpt-rosalind/",
  status: "active",
  metaTitle: "GPT-Rosalind Review 2026: OpenAI's Life Sciences Model, Now Free for US Academic Labs",
  metaDescription: "GPT-Rosalind review. OpenAI's life sciences model, launched April 16, 2026 under Trusted Access. Since Oct 15, 2026 US university labs can apply for the Rosalind Academic Plan: up to 30 free ChatGPT Business seats for 12 months with GPT-Rosalind and Rosalind Workbench, no API. Still vetted, still no public benchmarks.",
};
