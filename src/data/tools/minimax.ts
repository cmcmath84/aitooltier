import { ToolReview } from "@/lib/types";

export const minimax: ToolReview = {
  slug: "minimax",
  name: "MiniMax M3",
  tagline: "**MiniMax-H3's weights are public on Hugging Face (repo 2026-07-28, updated 2026-08-13) under a community licence whose open-weight grant is limited to the US, EU, UK and South Korea**, and **MiniMax Music 3 (2026-08-07)** ships open weights for five-minute full-song generation with a prominent-attribution commercial clause. MiniMax's coding/agent flagship -- M3 (June 1 2026): 1M-token context, MSA sparse attention (>15x decoding speedup at long context), SWE-Bench Pro 59.0%, Terminal-Bench 66.0%. OPEN WEIGHTS LIVE on HuggingFace since June 12 (~428B total / ~23B active, native multimodal, minimax-community license)",
  category: "ai-local-models",
  url: "https://www.minimax.io",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 9,
    value: 9.5,
    features: 8.5,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (Free)",
      price: "$0",
      features: ["MIT license on M2 / M2.5", "M2.7 license listed as 'Other' on HuggingFace -- verify before commercial use", "Weights on Hugging Face (MiniMaxAI/MiniMax-M2.7)"],
    },
    {
      plan: "API (M2 / M2.5 reference, MiniMax / OpenRouter)",
      price: "$0.30",
      period: "per 1M input tokens",
      features: ["M2: $0.30 in / $1.20 out", "192K+ context", "Native agentic + tool-use"],
    },
    {
      plan: "API (M2.7)",
      price: "Not yet published",
      features: ["M2.7 per-token pricing not posted on platform.minimax.io/subscribe/token-plan as of 2026-04-27 -- verify before quoting in production planning"],
    },
  ],

  pros: [
    "229B/10B-active MoE delivers Tier-1 agentic performance with the smallest active footprint in its class -- M2.7 hits 56.22% on SWE-Bench Pro and 57.0% on Terminal Bench 2",
    "Sparse MoE design: ~10B active params during inference means fast and cheap to run despite 229B total",
    "M2 / M2.5 (predecessors) carry true MIT licensing with zero commercial restrictions; M2.7 license needs verification (HF lists 'Other')",
    "Native agentic and tool-use training -- positioned as a 'self-evolving agent model'",
    "Per-layer QK-Norm + full-attention blocks make long-context stable",
    "Strong cost-to-performance ratio for agentic workloads vs closed frontier models",
  ],
  cons: [
    "Smaller Western community than Qwen/DeepSeek -- tutorials sparse",
    "Ollama support arrived late -- community relied on vLLM for months",
    "English writing tone is noticeably less polished than Claude or Mistral",
    "PRC content filters apply",
    "MiniMax as a lab is less well-known than Alibaba or DeepSeek -- some enterprise buyers hesitate",
  ],
  knownIssues: [
    {
      description: "MINIMAX-H3 WEIGHTS ARE PUBLIC -- BUT THE OPEN-WEIGHT GRANT IS LIMITED TO THE US, EU, UK AND SOUTH KOREA, WHICH THE 7/31 ENTRY BELOW COULD NOT HAVE KNOWN (weights on Hugging Face; repo created 2026-07-28, last modified 2026-08-13; verified 2026-09-17): the MiniMaxAI/MiniMax-H3 repository carries **104 safetensors shards** and about 4.6M downloads, so the 'weights not released as of 8/03' caveat on this page is retired. **Licence: 'MiniMax H3 Community License Agreement' (HF front matter `license: other`), with an application form 'only for USA/EU/UK/South Korea'.** MiniMax's own Q&A explains why: video models face 'a more complex and rapidly evolving regulatory environment', the EU AI Act is in enforcement, and 'in the US... MiniMax is also involved in ongoing copyright-related legal proceedings specifically concerning generative video AI'; the company chose to 'release the model now with a transparent license scope' and calls the limitation 'not yet, not not ever'. **The hosted API is global** because MiniMax can enforce safeguards on its own infrastructure. Model card specifics: general-purpose omni-modal system, unified text/image/video/audio context, video with native stereo audio up to 2K and 15 seconds, task tags covering T2V, I2V, V2V, audio-to-audio-video and reference-to-audio-video, diffusers integration, plus official prompt-writing skills on GitHub. **Practical read:** H3 is now the only roster video model with published weights at this capability level, but 'open-weight' here carries a geography clause -- a licence class of its own, distinct from GLM-5.3's custom licence or Qwen's Apache 2.0, and one to state explicitly rather than summarise as 'open'.",
      source: "Hugging Face (huggingface.co/MiniMaxAI/MiniMax-H3 -- API metadata createdAt 2026-07-28, lastModified 2026-08-13, 104 .safetensors; raw README.md front matter license_name minimax-h3-community-license-agreement; docs/QA-about-License.md) -- all fetched 2026-09-17",
      date: "2026-09-17",
    },
    {
      description: "MINIMAX MUSIC 3 -- OPEN WEIGHTS FOR FIVE-MINUTE FULL-SONG GENERATION UNDER A COMMUNITY LICENCE WITH AN ATTRIBUTION CLAUSE (2026-08-07 on Hugging Face; unrecorded until 2026-09-17): the MiniMaxAI/MiniMax-Music3 repo (created 2026-08-07, updated 2026-08-14, 56 safetensors shards) publishes **MiniMax Music 3**, 'a high-performance music generation model for creating complete songs up to five minutes long' from lyrics plus a music description. **Architecture per the model card:** an **8B Global LLM initialised from Qwen3-8B** for long-range structure, a **0.6B Local LLM** for frame-level acoustic detail, and continuous hidden-state synthesis via Flow Matching and a Flow-VAE; output is **32 kHz, 16-bit stereo WAV** at 25 frames per second. Lyrics accept explicit section tags ([Intro], [Verse], [Pre-Chorus], [Chorus], [Bridge], [Instrumental], [Solo], [Outro]); the description controls style, emotional progression, vocals, instrumentation and production. **Licence: 'MiniMax-Music3 COMMUNITY LICENSE' -- an MIT-style grant with an Acceptable Use Policy exhibit and Commercial Terms that require you to 'prominently display MiniMax-Music3 on the user interface' of any commercial product using it, plus a further clause requiring a separate prior written agreement whose scope was cut off in our fetch -- read the full LICENSE before commercial use.** No vendor benchmark table is in the card; no listening-test comparison against Suno v6 or Lyria 3.5 is published. **Why it matters:** with Suno v6 closed and label-partnered, Music 3 is the most capable open-weight song model on the roster's radar, and it is shipped by the same lab whose H3 video weights are geography-gated -- Music 3's licence carries no such territory clause in the portion read.",
      source: "Hugging Face (huggingface.co/MiniMaxAI/MiniMax-Music3 -- API metadata createdAt 2026-08-07, lastModified 2026-08-14, 56 .safetensors; raw README.md; raw LICENSE, first ~1,200 characters) -- all fetched 2026-09-17",
      date: "2026-08-07",
    },
    {
      description: "NEW MODEL -- MINIMAX H3 / HAILUO 3.0 (2026-07-31, vendor blog): MiniMax launched **H3**, a general-purpose **omni-modal** model that understands and generates across text, images, video and audio. Vendor-stated capability, verbatim: '**H3 understands unified context across text, images, video, and audio, generating video with native stereo sound, up to 15 seconds at 2K resolution**' -- plus instruction following, text rendering, V2V motion transfer, and multimodal editing. The headline is that audio is **jointly generated with the video** rather than added afterwards. On cost, MiniMax claims H3 runs at less than one-third the cost of mainstream models at 2K, though the post publishes no rate card. **IMPORTANT -- DO NOT LABEL THIS OPEN-WEIGHT YET.** MiniMax only *promises* weights: '**we plan to open up the model weights in the coming days**, subject to applicable laws and regulations.' As of 2026-08-03 the weights are not released, so H3 is currently a closed model from an otherwise open-weight-leaning vendor -- re-check before describing it as open. [SUPERSEDED 2026-09-17: the weights are live on Hugging Face under a community licence limited to the US, EU, UK and South Korea -- see the newer entry above]",
      source: "MiniMax (minimax.io/blog/minimax-h3, fetched 2026-08-03)",
      date: "2026-07-31",
    },
    {
      description: "INDEPENDENT BENCHMARK PUBLISHED (verified 2026-07-04): Artificial Analysis now has a citable M3 page (artificialanalysis.ai/models/minimax-m3, 'Released June 2026') showing an **Intelligence Index of 44**. This is lower than early social-media chatter had suggested (~55 circulated on X/LinkedIn but does not match the authoritative page) -- cite 44 as the independently-measured number. It keeps M3 solidly mid-pack among open-weights (below GLM-5.2's 51) despite the strong vendor SWE-Bench Pro 59% claim; treat vendor coding numbers and the AA general-intelligence number as measuring different things.",
      source: "Artificial Analysis (artificialanalysis.ai/models/minimax-m3)",
      date: "2026-07-04",
    },
    {
      description: "WEIGHTS SHIPPED (2026-06-12): **MiniMax-M3 open weights landed on HuggingFace** (MiniMaxAI/MiniMax-M3 + an MXFP8 quant) -- hitting the 'within 10 days of June 1' promise on day 10-11. Model-card specs: **~428B total / ~23B active params**, native multimodal (text/image/video input), MiniMax Sparse Attention, 1M-token context, 9x prefill / 15x decode speedup vs M2 at 1M ctx; tech report arXiv:2606.13392. LICENSE CAVEAT: **minimax-community license**, not MIT like the M2 line -- review terms before commercial self-hosting. Self-reported SWE-Bench Pro 59% now open to independent verification (Artificial Analysis pre-drop analysis pending update)",
      source: "HuggingFace (huggingface.co/MiniMaxAI/MiniMax-M3), Artificial Analysis (artificialanalysis.ai/articles/minimax-m3), The Decoder",
      date: "2026-06-12",
    },
    {
      description: "MODEL LAUNCH (2026-06-01): **MiniMax M3** -- coding/agent flagship with **1M-token context** (product page guarantees minimum 512K) and MSA sparse attention delivering vendor-claimed **>9x prefilling / >15x decoding speedups** at long context (per-token compute at 1M context = 1/20th of prior gen). Vendor-published benchmarks: SWE-Bench Pro 59.0%, Terminal-Bench 2.1 66.0%, BrowseComp 83.5 (above Opus 4.7's 79.3), PostTrainBench 37.1 (#3 behind Opus 4.7 and GPT-5.5), MCP Atlas 74.2%. WEIGHTS CAVEAT: announced as open-weight with release 'over the next 10 days,' but as of 6/10 there is NO M3 repo on HuggingFace (latest = M2.7) -- label it 'open-weight, release pending,' not available. Token Plan subscriptions: Plus $20/mo (~1.7B tokens), Max $50/mo (~5.1B), Ultra $120/mo (~9.8B)",
      source: "MiniMax blog (minimax.io/blog/minimax-m3), minimax.io/models/text/m3, HuggingFace MiniMaxAI (checked 2026-06-10)",
      date: "2026-06-01",
    },
    {
      description: "MiniMax-M2.7 (released 2026-03-18) supersedes M2.5 -- 229B total params, sparse MoE positioned by MiniMax as a 'self-evolving' agent model. Verified third-party benchmarks: SWE-Bench Pro 56.22%, Terminal Bench 2 57.0%, SWE Multilingual 76.5%, Multi SWE Bench 52.7%, VIBE-Pro 55.6%, GDPval-AA Elo 1495. The old 'first open-weight to hit 80.2% SWE-Bench Verified matching Opus 4.6' framing was an M2.5-on-different-bench claim and does NOT carry forward to M2.7 directly -- SWE-Bench Pro and SWE-Bench Verified are not comparable. License labeled 'Other' on HuggingFace (not MIT like M2 / M2.5) -- verify before commercial use",
      source: "MiniMax blog (minimax.io/news/minimax-m27-en), HuggingFace MiniMaxAI/MiniMax-M2.7, MarkTechPost",
      date: "2026-03-18",
    },
    {
      description: "M2 initial release required custom vLLM build -- community quants took 2-3 weeks to stabilize. M2.7 inherits the same architecture so the vLLM compatibility story carries forward",
      source: "GitHub MiniMax-AI/MiniMax-M2, Hugging Face discussions",
      date: "2026-02",
    },
    {
      description: "Per-layer QK-Norm is non-standard -- some inference backends had subtle bugs at long context",
      source: "Reddit r/LocalLLaMA",
      date: "2026-03",
    },
  ],
  bestFor: "Agentic coding and tool-use workflows on a budget. Best price-to-SWE-Bench ratio of any open-weights model in 2026.",
  notFor: "Teams that prioritize polished English writing (Mistral Large 3 or Claude are better), or anyone who needs the deepest ecosystem support (Llama is still that).",
  verdict: "MiniMax M2/M2.5 is the most cost-efficient frontier-tier open model in 2026. The 80.2% SWE-Bench Verified score is a genuine breakthrough -- matching Claude Opus 4.6 on real coding tasks at a tenth of the price. The sparse 10B-active MoE runs fast on moderate hardware. The main drawback is ecosystem: MiniMax has less Western infrastructure support than Alibaba or DeepSeek. If you're building an agentic product and want maximum value per token, M2.5 is an A-tier pick.",

  lastReviewedDate: "2026-09-17",
  dataSources: [
    { name: "Hugging Face: MiniMaxAI/MiniMax-H3 model card -- MiniMax H3 Community License, territory-limited open-weight grant (repo 2026-07-28, verified 2026-09-17)", url: "https://huggingface.co/MiniMaxAI/MiniMax-H3", dateAccessed: "2026-09-17" },
    { name: "Hugging Face: MiniMaxAI/MiniMax-H3 docs/QA-about-License.md -- why open weights are limited to the EU, UK, South Korea and US", url: "https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/docs/QA-about-License.md", dateAccessed: "2026-09-17" },
    { name: "Hugging Face: MiniMaxAI/MiniMax-Music3 model card -- 8B global + 0.6B local LLM, 5-minute songs, 32 kHz stereo (repo 2026-08-07)", url: "https://huggingface.co/MiniMaxAI/MiniMax-Music3", dateAccessed: "2026-09-17" },
    { name: "Hugging Face: MiniMaxAI/MiniMax-Music3 LICENSE -- community licence with prominent-attribution commercial term", url: "https://huggingface.co/MiniMaxAI/MiniMax-Music3/blob/main/LICENSE", dateAccessed: "2026-09-17" },
    { name: "Artificial Analysis: MiniMax M3 (Intelligence Index 44, released June 2026)", url: "https://artificialanalysis.ai/models/minimax-m3", dateAccessed: "2026-07-04" },
    { name: "MiniMax: M2.7 release blog (2026-03-18)", url: "https://www.minimax.io/news/minimax-m27-en", dateAccessed: "2026-04-27" },
    { name: "HuggingFace MiniMaxAI/MiniMax-M2.7", url: "https://huggingface.co/MiniMaxAI/MiniMax-M2.7", dateAccessed: "2026-04-27" },
    { name: "MarkTechPost: MiniMax M2.7 release coverage", url: "https://www.marktechpost.com/2026/04/12/minimax-just-open-sourced-minimax-m2-7-a-self-evolving-agent-model-that-scores-56-22-on-swe-pro-and-57-0-on-terminal-bench-2/", dateAccessed: "2026-04-27" },
    { name: "Artificial Analysis MiniMax M2 benchmarks", dateAccessed: "2026-04-13" },
    { name: "Bytebot MiniMax M2.5 analysis", dateAccessed: "2026-04-13" },
    { name: "Hugging Face MiniMaxAI collection", dateAccessed: "2026-04-13" },
    { name: "GitHub MiniMax-AI/MiniMax-M2", dateAccessed: "2026-04-13" },
    { name: "OpenRouter pricing", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://www.minimax.io",
  status: "active",
  benchmarks: {
    modelName: "MiniMax-M2.7 (229B total, ~10B active MoE) -- self-evolving agent positioning per vendor",
    scores: [
      { name: "SWE-Bench Pro", score: 56.22, maxScore: 100, unit: "%" },
      { name: "Terminal Bench 2", score: 57.0, maxScore: 100, unit: "%" },
      { name: "SWE Multilingual", score: 76.5, maxScore: 100, unit: "%" },
      { name: "Multi SWE Bench", score: 52.7, maxScore: 100, unit: "%" },
      { name: "VIBE-Pro", score: 55.6, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1495,
    lastUpdated: "2026-04-27",
  },
  systemRequirements: [
    {
      variant: "MiniMax M2 / M2.5 (230B total, ~10B active MoE)",
      min: "96 GB unified RAM Q3 (Mac M3 Ultra)",
      max: "4× A100 80 GB FP8",
      notes: "Sparse MoE activates only ~10B params during inference -- fast tok/s on moderate hardware",
    },
    {
      variant: "MiniMax M1 (hybrid-attention reasoning predecessor)",
      min: "96 GB unified RAM Q3",
      max: "4× A100 80 GB FP8",
    },
  ],

  personality: {
    oneLiner: "The Chinese multimodal generalist",
    tone: "Expressive and media-rich. MiniMax's chat models lean into long, formatted responses and handle voice and image prompts more naturally than most pure-text peers.",
    quirks: "Strong multimodal story; text-only quality is good but not class-leading versus DeepSeek or Qwen. Like other Chinese models, careful on domestic political topics.",
  },
  metaTitle: "MiniMax Review 2026: H3 Weights Public (Territory-Limited), Music 3 Open, M3 Coding Flagship",
  metaDescription: "MiniMax review. H3 omni-modal video weights are on Hugging Face under a community licence limited to the US, EU, UK and South Korea; Music 3 (Aug 7, 2026) open-weights five-minute song generation. M3 coding flagship: 1M context, SWE-Bench Pro 59%, open weights since June 12. Licences and gates explained.",
};
