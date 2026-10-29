import { ToolReview } from "@/lib/types";

export const stepfun: ToolReview = {
  slug: "stepfun",
  name: "StepFun Step 5 Preview",
  tagline: "StepFun's (China) agent-focused open-weight family. Step 5 Preview (2026-09-20) is the new flagship: 600B sparse MoE with 27B active, up to 1M context, text and image input (video too on the API), open weights under the StepFun Model License 1.0, API $1.00 input / $2.70 output per 1M tokens. Step 3.7 Flash (198B MoE, Apache 2.0) remains the smaller open model",
  category: "ai-local-models",
  url: "https://stepfun.ai/research/en/step3",

  scores: {
    easeOfUse: 6,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Self-hosted (open weights)",
      price: "$0",
      features: [
        "Step 5 Preview: StepFun Model License 1.0, an Apache-2.0-style licence with attribution and commercial-licence conditions",
        "Powered by StepFun AI attribution required once a commercial product passes 100M monthly active users or US$20M revenue in a month",
        "Separate commercial licence required for hardware makers shipping the model's capabilities and for MaaS providers above US$20M revenue over twelve months",
        "Step 5 Preview weights on Hugging Face in FP8, BF16 and NVFP4",
        "Step 3.7 Flash, Step 3 and Step3-VL-10B stay Apache 2.0",
        "Agent-focused tuning: tool use, planning, multi-step reasoning",
      ],
    },
    {
      plan: "API (StepFun / OpenRouter)",
      price: "$1.00 / $2.70",
      period: "per 1M tokens (Step 5 Preview input / output)",
      features: [
        "Step 5 Preview: $1.00 input (cache miss), $0.10 cached input, $2.70 output per 1M tokens",
        "Output tokens include reasoning; API max output 64K tokens within a 1M-token context",
        "Step 3.7 Flash: $0.20 input, $0.04 cached input, $1.15 output per 1M tokens",
        "Available on OpenRouter and select hosted providers",
      ],
    },
  ],

  pros: [
    "Step 5 Preview puts a 600B-class open-weight flagship (27B active, up to 1M context) on a single node: StepFun's card documents FP8 serving on 4 B300 GPUs or 8 H200 GPUs with vLLM or SGLang",
    "Step 3.5 Flash at 196B total / 11B active beats DeepSeek V3.2 on several mainstream benchmarks at 3x smaller total parameter count -- an efficient architecture result that suggests StepFun's MoE routing is unusually well-tuned for agentic workloads",
    "Agent-focused tuning explicitly -- tool use, function calling, and multi-step planning are prioritized in training objectives, not just general chat. For teams building agent systems with Chinese open-weight models, Step 3.5 Flash is a stronger starting point than general-purpose DeepSeek or Qwen base models",
    "Fills an important gap in the site's Chinese open-weight roster (already have DeepSeek, Qwen, GLM, Kimi, MiniMax -- StepFun was the notable absence). StepFun has real traction in the China market and growing Western mindshare through OpenRouter",
    "Step3-VL-10B multimodal variant provides a small-footprint vision option in the same family -- 10B size is realistic for consumer GPUs and the vision tower is competitive with Qwen3-VL-10B on standard benchmarks",
  ],
  cons: [
    "Step 5 Preview is not Apache 2.0. The StepFun Model License 1.0 adds attribution above 100M monthly users or US$20M monthly revenue and a separate commercial licence for device makers and large MaaS providers. The Hugging Face card also shows its benchmark results only as an image",
    "Smaller Western community than DeepSeek or Qwen -- fewer tutorials, quants, and third-party fine-tunes. Production adoption outside China is still early, which means less Stack Overflow coverage when you hit edge cases",
    "PRC content filters apply -- same category of refusals on politically sensitive topics as DeepSeek, Qwen, GLM. Not a dealbreaker for most commercial work but worth flagging",
    "Step 3.5 Flash's benchmark wins are strongest on Chinese-heavy evaluations and lighter on purely-English benchmarks versus comparably-sized Western models. English writing quality trails Claude / Mistral / Llama meaningfully",
    "Release cadence is fast (Step 3 → Step 3.5 in months) but model naming / versioning is confusing -- expect churn in which specific variant is the 'current best' through Q2 2026",
  ],
  knownIssues: [
    {
      description: "VERSION BUMP (2026-09-20): Step 5 Preview released on Hugging Face (FP8 and BF16 repos; NVFP4 added 2026-10-14) as StepFun's flagship for agentic work, with particular strength in finance per the card. Sparse MoE, 600B total / 27B active, up to 1M context. The card's spec table lists text and image input with text output, while its prose and the API docs also list video. Licence: StepFun Model License 1.0, not Apache 2.0. API: $1.00 input, $0.10 cached input, $2.70 output per 1M tokens, 64K max output",
      source: "Hugging Face (stepfun-ai/Step-5-Preview card and LICENSE.txt), StepFun platform docs and pricing",
      date: "2026-09-20",
    },
    {
      description: "Step 5 Preview is labelled a preview. The card's benchmark chart uses the High reasoning setting and is published only as an image, and StepFun notes that the full BF16 Transformers shard workflow has not yet been validated end to end",
      source: "Hugging Face (stepfun-ai/Step-5-Preview card)",
      date: "2026-10-29",
    },
    {
      description: "VERSION BUMP (2026-05-28): **Step 3.7 Flash** released -- 198B-parameter sparse MoE vision-language model (HF auto-counter shows 201B; vendor model card says 198B), ~11B active per token, 1.8B vision encoder + 196B language backbone, **256K context**, Apache 2.0 open weights (main + FP8 + NVFP4 + GGUF variants on HuggingFace), up to ~400 tok/s, three selectable reasoning levels, agent-focused. Model-card benchmarks: SWE-Bench Pro 56.3, Terminal-Bench 2.1 59.5, Toolathlon 49.5, ClawEval-1.1 67.1, SimpleVQA-Search 79.2. API pricing: $0.20/M input (cache miss), $0.04/M (cache hit), $1.15/M output",
      source: "HuggingFace (huggingface.co/stepfun-ai/Step-3.7-Flash model card)",
      date: "2026-05-28",
    },
    {
      description: "Step 3.5 Flash was released 2026-02-01 with initial quantization issues for Q3 and below -- community Q5 quants are the practical deployment target as of April 2026. Full FP16 weights require significant multi-GPU setup (196B total params even with 11B active)",
      source: "Hugging Face discussions, Reddit r/LocalLLaMA",
      date: "2026-02",
    },
    {
      description: "Refuses discussion of Tiananmen, Taiwan sovereignty, Xi Jinping, and other politically sensitive topics per PRC regulations -- same content filters as other Chinese open-weight models",
      source: "Hugging Face discussions, user reports",
      date: "2026-02",
    },
  ],
  bestFor: "Teams building agent systems on Chinese open-weight foundations who want something other than DeepSeek or Qwen, especially if agentic tool-use is the primary workload. Also good for Chinese-market products where StepFun's domestic tuning advantages matter. And for anyone looking to add diversity to their open-weight evaluation matrix beyond the top-3 Chinese labs. Step 5 Preview's card singles out finance tasks that combine quantitative reasoning with financial documents.",
  notFor: "English-first creative writing, non-technical users, or workflows that touch politically sensitive topics (PRC content filters apply). Also not the right pick if you need the absolute best Western-community ecosystem -- Llama, Qwen, or DeepSeek will have more third-party tooling.",
  verdict: "StepFun is the notable Chinese open-weight lab outside the top three (DeepSeek, Alibaba/Qwen, Zhipu/GLM). Step 5 Preview (September 2026) moves it into the 600B-class flagship tier with 27B active parameters, up to 1M context and open weights, priced at $1.00 input / $2.70 output per 1M tokens on StepFun's API. The licence is the catch: it is Apache-2.0-style but adds attribution and commercial-licence conditions at large scale, so teams that need plain Apache 2.0 should look at Step 3.7 Flash. The Hugging Face card publishes benchmarks only as a chart, and Western community adoption is still early. Worth adding to any Chinese open-weight shortlist alongside DeepSeek and Qwen.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "Hugging Face: stepfun-ai/Step-5-Preview model card", url: "https://huggingface.co/stepfun-ai/Step-5-Preview", dateAccessed: "2026-10-29" },
    { name: "Hugging Face: Step 5 Preview LICENSE.txt (StepFun Model License 1.0)", url: "https://huggingface.co/stepfun-ai/Step-5-Preview/blob/main/LICENSE.txt", dateAccessed: "2026-10-29" },
    { name: "StepFun docs: Step 5 Preview", url: "https://platform.stepfun.ai/docs/en/guides/models/step-5-preview", dateAccessed: "2026-10-29" },
    { name: "StepFun docs: Pricing details", url: "https://platform.stepfun.ai/docs/en/guides/pricing/details", dateAccessed: "2026-10-29" },
    { name: "StepFun research: Step 3", url: "https://stepfun.ai/research/en/step3", dateAccessed: "2026-04-17" },
    { name: "Hugging Face: stepfun-ai/step3", url: "https://huggingface.co/stepfun-ai/step3", dateAccessed: "2026-04-17" },
    { name: "aibase news: Step 3.5 Flash", url: "https://news.aibase.com/news/25147", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://stepfun.ai/research/en/step3",
  status: "active",
  systemRequirements: [
    {
      variant: "Step 5 Preview (600B total / 27B active MoE)",
      min: "FP8: one node with 4× B300 or 8× H200 (StepFun vLLM / SGLang configs)",
      max: "BF16: one node with 8× B300 or two nodes with 16× H200",
      notes: "StepFun Model License 1.0. FP8, BF16 and NVFP4 checkpoints. StepFun says these configs load the weights but do not guarantee memory for a full 1M-token request",
    },
    {
      variant: "Step 3.5 Flash (196B total / 11B active MoE)",
      min: "64 GB RAM + 16 GB GPU (Q3 offload)",
      max: "4× H100 FP8",
      notes: "Agent-focused tuning; MoE routing activates ~11B params per token",
    },
    {
      variant: "Step 3 (321B total / 38B active, Apache 2.0)",
      min: "128 GB RAM + 24 GB GPU (Q3)",
      max: "4× H100 FP8",
    },
    {
      variant: "Step3-VL-10B (multimodal)",
      min: "12 GB VRAM Q4 (RTX 3060 / 4070)",
      max: "1× A100 40 GB FP16",
    },
  ],
  metaTitle: "StepFun Step 5 Preview Review 2026: 600B Open-Weight Agent Model, 1M Context",
  metaDescription: "StepFun Step 5 Preview review (Sep 2026). 600B MoE with 27B active, up to 1M context, open weights under the StepFun Model License 1.0. API $1.00 / $2.70 per 1M tokens. Step 3.7 Flash stays Apache 2.0.",
};
