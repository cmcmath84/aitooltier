import { ToolReview } from "@/lib/types";

export const mistral: ToolReview = {
  slug: "mistral",
  name: "Mistral AI",
  tagline: "**Mistral Large 4 ('le Chonk', ML4) entered public preview on 2026-10-06: a 1T-parameter natively multimodal MoE with roughly 50B active parameters, a 1M context window, callable today as mistral-large-4 at $1.36 / $0.14 cached / $4.18 per 1M tokens (batch at half price), open weights promised by the end of October, and vendor-claimed open-weight leads in cyber (Cybench 93%), coding (DeepSWE v1.1 61.7%) and agentic work (AutomationBench 59.9%).** **Mistral opened a Munich hub for Physics AI and Industrial AI on 2026-09-28**, confirming the May 2026 acquisition of Emmi AI (30+ physicists and engineers in computational fluid dynamics, structural mechanics and multi-physics simulation), naming BMW (crash simulation) and Siemens Energy as partners, and committing to **build one gigawatt of European compute capacity by 2030**. **Mistral now powers Firefox Smart Window (2026-09-16)** -- Mozilla's beta AI browsing assistant runs on Mistral models for France and North America, UK and Germany later this year, with zero data retention. **EUR 3B Series D at a EUR 21B+ post-money (9/08, Samsung-led)**; Cloudera partnership (9/10); Medium 3 retired 8/31 in favour of Medium 3.5.",
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
        "Mistral Small 4 + Medium 3.5 available (Medium 3 retired 2026-08-31)",
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
      plan: "API (Mistral Medium 3 -- RETIRED 2026-08-31)",
      price: "$1",
      period: "per 1M tokens -- no longer available",
      features: [
        "Launched April 9, 2026",
        "EU AI Act compliance metadata",
        "**RETIRED 2026-08-31 alongside Medium 3.1** -- `mistral-medium-2505` was deprecated 2026-05-22 and reached retirement today; the vendor-listed replacement is **Mistral Medium 3.5**",
      ],
    },
    {
      plan: "API (Mistral Large 4 -- public preview)",
      price: "$1.36 / $4.18",
      period: "per 1M tokens (input/output); cached input $0.14; batch $0.68 / $2.09",
      features: [
        "Public preview from 2026-10-06 as mistral-large-4 (v26.10); weights promised by the end of October 2026",
        "1T-class granular MoE, roughly 50B active, 1.6B vision encoder, 1M context, natively multimodal",
        "Docs list the license only as 'Open' -- the exact weight license is not yet published",
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
    "Mistral Large 4 (public preview 2026-10-06) is the first Mistral flagship in the 1-trillion-parameter class and the first with a 1M context window; Mistral's own numbers put it ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max on its Coding Agent Index (49.8%) and claim the top score on the Artificial Analysis Cyber Index reproduce-and-patch test (82%) -- vendor-published, third-party verification pending",
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
      description: "MISTRAL LARGE 4 ('LE CHONK') -- PUBLIC PREVIEW OF A 1-TRILLION-PARAMETER OPEN-WEIGHT FLAGSHIP, WEIGHTS DUE BY THE END OF OCTOBER (2026-10-06, vendor-primary): Mistral launched a **public preview of Mistral Large 4** ('Unofficially ML4, very officially: le Chonk'), callable today on Mistral Studio as `mistral-large-4` (v26.10; the docs model page is dated October 6, 2026, status 'Public Preview', license shown only as 'Open'). **Architecture:** the launch post says 'a 1 trillion-parameter natively multimodal model with 49 billion active parameters'; the docs model card says '52B active parameters and 1.05T total parameters, and a 1.6B vision encoder' with a **1M context window** -- the two vendor figures disagree slightly and both are recorded. Trained 'from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own datacenters in Europe', with more than 160 languages in the training data. **Rate card (docs model page, per 1M tokens): $1.36 input, $0.14 cached input, $4.18 output; a second column at exactly half ($0.68 / $0.07 / $2.09) matches Mistral's standing 50% batch discount.** Neither the public pricing page nor the docs pricing table listed Large 4 at check time -- the model page is the only price source so far. **Weights: 'We will release the weights by the end of the month'**; until then Mistral is 'red-teaming the model in real-world settings with cybersecurity leaders, vetted partners, and state authorities, who will access the same model with reduced moderation and expanded cyber capabilities'. **Vendor benchmarks (all Mistral-published, no third-party verification yet):** DeepSWE v1.1 61.7%, SWE-Atlas-QnA 59.4%, Terminal-Bench 4 28.3%, Coding Agent Index 49.8% ('ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max'); AutomationBench 59.9%; AA-Briefcase 1,393 Elo; Cybench 93% of 40 challenges; the Artificial Analysis Cyber Index reproduce-and-patch test at 82% ('the highest of any model', with the note that Claude Opus 5.5 and GPT-6 Astra 'score near zero on the same test because they refuse to perform the task'); Lakera B3 attack resistance 93.3%; KORABench 1.691 of 2; Dense 200 visual grounding 42% vs 41% for GPT-6 Astra; a Surge AI blind human coding evaluation placed ML4 Preview second of five (3.74) behind Claude Opus 5 (4.22) and ahead of Kimi K3, GLM-5.3 and GLM-5.2. Mistral calls it 'competitive with the strongest open-source models globally, while significantly outperforming any open-weight model developed in the US or Europe'. **Positioning:** sovereignty and cyber -- 'provider-level refusals can block legitimate vulnerability research', so an open-weight, self-deployable model is pitched at security operations, served from a European deployment 'that Mistral operates end-to-end' plus other regions. **Not published yet:** the weight license, architecture details, the post-training write-up and 'additional benchmarks' are all promised 'as we work toward releasing the weights'; no Vibe availability was stated. **Watch: weights and license by 2026-10-31; a row on the public pricing page; day-one adds on GitHub Copilot or Cursor (none in either changelog as of 10/06).**",
      source: "Mistral (mistral.ai/news/mistral-large-4/, RSS pubDate 'Tue, 06 Oct 2026 12:00:27 GMT', JSON-LD datePublished 2026-10-06T12:00:27Z, on-page 'October 6, 2026'); Mistral docs model page (docs.mistral.ai/models/mistral-large-4-0 -- 'October 6, 2026', 'Public Preview', 'Open', v26.10, 1M context, $1.36 / $0.14 / $4.18 per 1M); Mistral docs models overview (docs.mistral.ai/getting-started/models/models_overview/ -- 'Mistral Large 4 | Open | v26.10') -- all fetched 2026-10-06 via curl with browser UA",
      date: "2026-10-06",
    },
    {
      description: "MUNICH HUB, THE EMMI AI ACQUISITION ON THE RECORD, AND A ONE-GIGAWATT EUROPEAN COMPUTE PLEDGE (2026-09-28, vendor-primary): 'Today, we are putting that conviction into practice by opening our new hub in Munich', housing 'specialised research teams dedicated to Physics AI and Industrial AI, alongside applied engineers serving our enterprise partners directly'. Two facts this page had not carried: (1) **'Following our acquisition of Emmi AI in May 2026, more than 30 physicists, researchers, and engineers with unique expertise in Physics and Engineering AI joined Mistral'** -- Emmi specialised in 'large-scale AI modelling of computational fluid dynamics, structural mechanics, and multi-physics simulations'; Mistral's pitch is replacing simulations that take 'days per run' with learned physics models, working 'with BMW on crash simulations and engineering AI, and with Siemens Energy on industrial AI applications'. (2) **'To secure Europe's AI sovereignty, Mistral will build one gigawatt of European compute capacity by 2030'**, on top of the in-region inference and sovereign infrastructure announced 8/20. The sovereignty argument is restated around open weights: 'Mistral's model weights are fully accessible to the customer. Our models run on the customer's own infrastructure, trained on their data, operated under European law'. Germany's digital minister Karsten Wildberger is quoted. No product, price or model change; recorded for the acquisition, the compute commitment and the Physics AI line, which is a new product category for Mistral.",
      source: "Mistral (mistral.ai/news/hallo-deutschland/, RSS pubDate Mon, 28 Sep 2026; on-page 'September 28, 2026') -- fetched 2026-09-28 via curl",
      date: "2026-09-28",
    },
    {
      description: "MISTRAL POWERS FIREFOX SMART WINDOW -- FIRST CONSUMER-BROWSER DISTRIBUTION FOR MISTRAL MODELS, WITH ZERO DATA RETENTION (2026-09-16, vendor-primary): Mistral and Mozilla announced a partnership under which **Firefox Smart Window (beta), Mozilla's AI browsing assistant, 'is now powered by Mistral models'**. Smart Window summarises complex searches, recalls things you clicked away from and sources information from your open tabs. **Regions: France and North America now; the United Kingdom and Germany 'expected to follow later this year'.** Privacy terms as stated: conversations 'aren't saved on Mozilla's servers by default, and partners like Mistral agree to zero data retention'. Mistral frames it as 'two open source advocates' pairing open weights with open distribution, and says the models are fine-tuned on regional languages and dialects so the browser assistant 'feels native'. **What it changes for this page:** Mistral's consumer reach has historically been Vibe (ex-Le Chat) only; Firefox is the first third-party consumer surface at scale, and the zero-retention clause is a concrete privacy commitment worth quoting against Chrome's Gemini integration. Not stated: which Mistral model, whether inference is local or cloud, or any commercial terms.",
      source: "Mistral (mistral.ai/news/mistral-x-mozilla/, RSS pubDate 'Wed, 16 Sep 2026 12:00:00 GMT', on-page 'September 16, 2026', by-line 'Mistral and Mozilla') -- fetched 2026-09-17 via curl with browser UA",
      date: "2026-09-16",
    },
    {
      description: "EUR 3 BILLION SERIES D AT MORE THAN EUR 21 BILLION POST-MONEY, LED BY SAMSUNG -- THE LARGEST EUROPEAN TECH EQUITY ROUND ON RECORD, PER MISTRAL (2026-09-08, vendor-primary): Mistral announced 'it has raised **EUR 3 billion in a Series D funding round at a post-money valuation of more than EUR 21 billion**, the largest equity fundraising round ever completed by a European technology company, three years after the company's launch.' **Samsung Electronics led**, with co-leads **Scaleup Europe Fund (managed by EQT)** and existing investor **PSG Equity**. **Stated use of funds:** expanding frontier research, scaling compute for training, building out infrastructure (the European sovereign-compute programme announced 8/11), and commercial and international growth; Mistral says it now operates across **20 countries** and supports **125+ global enterprises** including Airbus, ASML and HSBC. **WHY IT MATTERS ON THIS PAGE:** this roughly doubles the valuation from the September 2025 round and puts a strategic hardware investor at the top of the cap table -- Samsung is a memory and foundry supplier to every frontier lab, so the tie-up reads as a compute-and-distribution partnership as much as a financing. It also funds the open-weight strategy explicitly ('sovereign, open-weight AI'), which is the commercial bet that distinguishes Mistral from the closed US labs it competes with on Vibe and the API. **Same window, minor:** a **Cloudera partnership** (9/10) to run Mistral models inside customers' Cloudera environments for regulated industries, and a solutions post (9/09) on migrating 40,000 lines of Fortran 77 to C++ with agents for a European energy operator. Neither changes pricing or product availability. **No model releases from Mistral this window** -- newest model post remains Shieldstral (8/04).",
      source: "Mistral (mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/, RSS pubDate 'Tue, 08 Sep 2026 12:00:22 GMT'); Mistral (mistral.ai/news/mistral-x-cloudera/, RSS pubDate 'Thu, 10 Sep 2026 10:42:55 GMT') -- both fetched 2026-09-14",
      date: "2026-09-08",
    },
    {
      description: "TWO MISTRAL MEDIUM GENERATIONS RETIRE TODAY -- MEDIUM 3.1 AND MEDIUM 3 BOTH HIT END-OF-LIFE 2026-08-31 (verified on Mistral's model lifecycle table): both models now sit in the **'Deprecated & retired models'** section of Mistral's models overview with a retirement date of **8/31/2026**. Specifically: **Mistral Medium 3.1** (`mistral-medium-2508`, v25.08) -- deprecated **5/22/2026**, retired **8/31/2026**; and **Mistral Medium 3** (`mistral-medium-2505`, v25.05) -- deprecated **5/22/2026**, retired **8/31/2026**. **The vendor-listed alternative for both is Mistral Medium 3.5.** **Why this matters more than a routine EOL:** Medium is Mistral's volume commercial tier, and this retires **two consecutive generations on the same day**, roughly 100 days after a single joint deprecation notice. If you pinned a model string rather than tracking an alias, a `mistral-medium-2508` or `mistral-medium-2505` call breaks today, and the migration target is a different model with a different price -- **Medium 3.5 is $1.5/$7.5 per 1M**, against the **$1 per 1M** this page recorded for Medium 3. **So for anyone still on Medium 3 the retirement is also a price increase, which the lifecycle table does not tell you.** Note Mistral's deprecation-to-retirement gap here was about **three months**, shorter than the twelve months OpenAI gave the Assistants API -- worth knowing when you plan around Mistral model lifetimes generally. Same-day cohort from the same 5/22 notice: **Devstral 2**, **Magistral Medium 1.2**, **Magistral Small 1.2** and **Mistral Nemo 12B** were all retired on 7/31, so this 8/31 pair is the tail of that wave rather than a new announcement.",
      source: "Mistral (docs.mistral.ai/getting-started/models/models_overview/, 'Deprecated & retired models' table -- rows 'Mistral Medium 3.1 | 25.08 | mistral-medium-2508 | 5/22/2026 | 8/31/2026 | Mistral Medium 3.5' and 'Mistral Medium 3 | 25.05 | mistral-medium-2505 | 5/22/2026 | 8/31/2026 | Mistral Medium 3.5') -- fetched 2026-08-31 via curl",
      date: "2026-08-31",
    },
    {
      description: "AGENTIC SEARCH -- MISTRAL'S RETRIEVAL LAYER, WITH UNUSUALLY LARGE VENDOR BENCHMARK DELTAS (2026-08-20, vendor-primary): Mistral shipped **Agentic Search**, a multi-step retrieval loop positioned explicitly against one-shot RAG. Rather than handing a model a fixed set of retrieved chunks, it **navigates documents using five tools -- search, open, navigate, read and grep** -- and builds on your existing search index rather than requiring a new one. **AVAILABILITY:** through the **Mistral Search Toolkit**, and built into **Libraries in both Studio and Vibe**. Mistral stresses the deployment story for regulated buyers: 'portable and open tooling helps you unlock value from your data **without crossing your isolation boundaries** in the cloud or on-premises.' **THE VENDOR NUMBERS, QUOTED AND LABELLED AS VENDOR-MEASURED -- NO THIRD-PARTY VERIFICATION EXISTS YET:** on **FinanceBench**, correctness on financial filings goes **from 26.7% to 86%** (Mistral describes this as 'up to 3x correctness'); on **OfficeQA Pro**, table-heavy multi-document questions gain **+45.6 points, from 6.3% to 51.9%**; **p90 latency falls up to 39.6%** and token consumption drops '**by up to one-third**' from fewer repeated searches. **HOW TO READ THOSE DELTAS HONESTLY:** a 26.7% baseline is a one-shot RAG configuration Mistral chose, and the size of the gain is a statement about how badly chunk-based RAG performs on dense financial filings as much as about Agentic Search itself. The efficiency claims (latency, tokens) are the more transferable ones because they are architectural -- targeted navigation genuinely issues fewer retrieval calls. **NO PRICING IS PUBLISHED IN THE POST** and it does not state whether Agentic Search is metered separately from Search Toolkit usage; treat cost as unknown until Mistral's pricing page reflects it. **STRATEGIC READ:** this extends the 5/28 Search Toolkit into the agentic layer and pairs with the 8/11 in-region inference push -- Mistral is assembling a sovereignty-first enterprise stack where the differentiator is that the retrieval runs inside your boundary, not that the model is the smartest available",
      source: "Mistral AI (mistral.ai/news/agentic-search/, RSS pubDate 'Thu, 20 Aug 2026 12:00:17 GMT', fetched 2026-08-20 via curl)",
      date: "2026-08-20",
    },
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
  verdict: "Mistral is the scrappy underdog that keeps surprising people. Their models are impressively efficient -- you get frontier-adjacent quality at a fraction of the API cost, and Mistral Large 4 (public preview October 2026, open weights promised by the end of the month) puts a 1T-parameter flagship on that same cheap-and-open footing. But the consumer experience (Le Chat) is rough. This is primarily a developer's tool. If you're building AI applications on a budget, Mistral should be on your shortlist.",

  lastReviewedDate: "2026-10-06",
  dataSources: [
    { name: "Mistral: Introducing Mistral Large 4 -- public preview, 1T params / ~49B active, weights end of October, vendor benchmarks (2026-10-06)", url: "https://mistral.ai/news/mistral-large-4/", dateAccessed: "2026-10-06" },
    { name: "Mistral docs: Mistral Large 4 model page -- mistral-large-4, v26.10, Public Preview, 1M context, $1.36 / $0.14 / $4.18 per 1M (2026-10-06)", url: "https://docs.mistral.ai/models/mistral-large-4-0", dateAccessed: "2026-10-06" },
    { name: "Mistral docs: models overview -- Mistral Large 4 listed as Open, v26.10 (verified 2026-10-06)", url: "https://docs.mistral.ai/getting-started/models/models_overview/", dateAccessed: "2026-10-06" },
    { name: "Mistral: Hallo, Deutschland! -- Munich hub for Physics AI and Industrial AI, Emmi AI acquisition (May 2026), 1 GW European compute by 2030, BMW and Siemens Energy (2026-09-28)", url: "https://mistral.ai/news/hallo-deutschland/", dateAccessed: "2026-09-28" },
    { name: "Mistral: Mistral and Mozilla are bringing open, private and multilingual AI to your web browser -- Firefox Smart Window (2026-09-16)", url: "https://mistral.ai/news/mistral-x-mozilla/", dateAccessed: "2026-09-17" },
    { name: "Mistral: Mistral raises EUR 3B to make sovereign, open-weight AI the technology frontier -- Series D, >EUR 21B post-money, Samsung-led (2026-09-08)", url: "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/", dateAccessed: "2026-09-14" },
    { name: "Mistral: Cloudera and Mistral partner for sovereign enterprise AI (2026-09-10)", url: "https://mistral.ai/news/mistral-x-cloudera/", dateAccessed: "2026-09-14" },
    { name: "Mistral docs: models overview + deprecated/retired model lifecycle table -- Medium 3.1 and Medium 3 both retired 2026-08-31, replacement Medium 3.5 (verified 2026-08-31)", url: "https://docs.mistral.ai/getting-started/models/models_overview/", dateAccessed: "2026-08-31" },
    { name: "Mistral AI: Introducing Agentic Search -- FinanceBench 26.7% to 86%, OfficeQA Pro +45.6pt (2026-08-20)", url: "https://mistral.ai/news/agentic-search/", dateAccessed: "2026-08-20" },
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
    modelName: "Mistral Large 4 preview (vendor-published 2026-10-06; third-party verification pending)",
    scores: [
      { name: "DeepSWE v1.1", score: 61.7, maxScore: 100, unit: "%" },
      { name: "SWE-Atlas-QnA", score: 59.4, maxScore: 100, unit: "%" },
      { name: "Terminal-Bench 4", score: 28.3, maxScore: 100, unit: "%" },
      { name: "AutomationBench", score: 59.9, maxScore: 100, unit: "%" },
      { name: "Cybench", score: 93.0, maxScore: 100, unit: "%" },
    ],
    lastUpdated: "2026-10-06",
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
      variant: "Mistral Large 4 (1.05T total / roughly 50B active; weights due end of Oct 2026)",
      min: "Multi-GPU node -- about 525 GB of weights at 4-bit for 1.05T parameters (arithmetic, not a vendor spec); not a single-card model",
      max: "8x B200-class node at BF16; the API preview is the practical route until weights and license land",
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
  metaTitle: "Mistral AI Review 2026: Mistral Large 4 Preview at $1.36/$4.18 -- 1T-Parameter Open-Weight Flagship",
  metaDescription: "Mistral review. Mistral Large 4 ('le Chonk') entered public preview Oct 6, 2026: a 1T-parameter natively multimodal MoE with roughly 50B active parameters and 1M context, $1.36/$4.18 per 1M tokens on the API, open weights promised by end of October, with vendor-claimed open-weight leads in cyber, coding and agentic work. Also: Munich Physics AI hub, Firefox Smart Window, EUR 3B Series D at EUR 21B+, Vibe + Medium 3.5.",
};
