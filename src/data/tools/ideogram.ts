import { ToolReview } from "@/lib/types";

export const ideogram: ToolReview = {
  slug: "ideogram",
  name: "Ideogram",
  tagline: "**Nov 2026: Ideogram 4.5 is the new headline model and the plans were rebuilt around credits.** AI image platform known for text rendering -- Ideogram 4.5 (precise multi-turn editing, native 2K, API from $0.03/image), Ideogram 4.0 open weights (9.3B DiT, 0.97 X-Omni OCR; the free download is non-commercial, commercial self-hosting from $300/mo), Ideogram Vector SVG output, and other labs' image and video models on one credit balance. Plus $20/mo ($15 billed yearly), Pro $60/mo, Team $30/user",
  category: "ai-image-generators",
  url: "https://ideogram.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 8,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (weekly credits)",
      price: "$0",
      features: [
        "Eligible free accounts get weekly credits when signing in with Google, Apple or Microsoft; the amount may vary",
        "No free trials of paid plans",
        "Priority credits only come with paid plans or top-ups",
      ],
    },
    {
      plan: "Plus",
      price: "$20",
      period: "month",
      features: ["$15/mo billed yearly ($180/yr)", "2,400 priority credits/mo", "Unlimited slow credits", "Private generation, all image & video models"],
    },
    {
      plan: "Pro",
      price: "$60",
      period: "month",
      features: ["$42/mo billed yearly ($504/yr)", "7,500 priority credits/mo", "Batch generation, largest queue", "Limited custom model training"],
    },
    {
      plan: "Team",
      price: "$30",
      period: "user/month",
      features: ["$20/user/mo billed yearly ($240/yr per user)", "3,600 priority credits per user/mo", "Central billing and administration", "Early access to collaboration features"],
    },
    {
      plan: "Pay as you go",
      price: "1 cent",
      period: "per credit",
      features: ["Credits work across all apps and models", "API access with credit-based usage", "Ideogram 4.5 API: $0.03 / $0.06 / $0.10 per image (Low / Medium / High); $0.22 for High with references or Precise Edit High"],
    },
    {
      plan: "Ideogram 4 self-hosting (commercial license)",
      price: "$300",
      period: "month",
      features: ["Self-Serve Commercial License for the public, quantized weights", "10,000 images/month allowance (larger allowances at checkout)", "The free Hugging Face download is research/personal use only (Non-Commercial Model Agreement)", "Full-precision weights only through Enterprise"],
    },
  ],

  pros: [
    "Still the text-rendering specialist -- Ideogram 4.0 scores 0.97 on X-Omni English OCR, and Ideogram pitches 4.5 on 'readable type in every layout'",
    "Ideogram 4.5 is built for iterative editing: Ideogram says it 'eliminates artifact buildup, making multi-turn editing possible', at native 2K in four quality modes",
    "Open weights for Ideogram 4.0 (9.3B DiT, released 2026-06-03) with Apache 2.0 inference code -- research and fine-tuning are possible, and commercial self-hosting is a published $300/mo license",
    "One credit balance covers Ideogram's own models plus GPT Image, Nano Banana, Seedance, Kling and MiniMax video, through the app, the API and MCP",
    "Simple fixed per-image API pricing -- 'Each image has a fixed price. It does not change with prompt length, the number of reference images, or the output resolution'",
  ],
  cons: [
    "The old free plan (10 prompts a day) is gone -- free accounts now get an unspecified weekly credit allowance ('the amount may vary')",
    "The cheapest paid plan is now Plus at $20/mo ($15 billed yearly); the $8 Basic plan no longer exists",
    "'Open weights' has fine print: the free download is non-commercial and quantized, commercial self-hosting costs from $300/mo, and full precision is Enterprise-only",
    "Overall artistic quality still behind Midjourney for non-text images",
    "Custom model training is listed as 'Limited' on Pro and Team and costs $40 per self-serve training run; full custom models are an Enterprise feature",
  ],
  knownIssues: [
    {
      description: "IDEOGRAM 4.5 + PLAN OVERHAUL (verified 2026-11-05, vendor-primary): Ideogram's homepage now leads with 'Introducing Ideogram 4.5 Our most capable model yet.' -- a precise-edit model 'Live in the Ideogram App, MCP, and the API in four quality modes at native 2K resolution.' API: $0.03 / $0.06 / $0.10 per image (Low / Medium / High), $0.22 for High with references or Precise Edit High. Subscriptions are now credit-based: Plus $20/mo or 'per month, $180 billed annually' (2,400 priority credits), Pro $60/mo or 'per month, $504 billed annually' (7,500), Team $30/user/mo or 'per user/month, $240 billed annually' (3,600 per user), pay-as-you-go at 1 cent per credit, and Enterprise. Ideogram Vector 1 generates SVGs from $0.13. Ideogram now calls itself 'a generative media platform' and also sells access to GPT Image, Nano Banana, Seedance, Kling and MiniMax video models. Ideogram has not published a 4.5 launch date; its earliest dated vendor mention is a 2026-10-14 how-to post.",
      source: "ideogram.ai, ideogram.ai/pricing, ideogram.ai/models/4.5/, ideogram.ai/blog/ideogram-4-5-product-photo-editing/ (JSON-LD 2026-10-14), all fetched 2026-11-05",
      date: "2026-11-05",
    },
    {
      description: "CORRECTION (2026-11-05): this page listed 'Free $0 -- 10 prompts/day', 'Basic $8/mo -- 400 prompts/mo' and 'Plus $20/mo -- 1,000 prompts/mo, API access'. Ideogram's pricing page now has no Basic plan, sells priority credits (Plus 2,400/mo), offers API access on every plan including pay-as-you-go, and says 'Eligible free accounts receive weekly credits when signing in with Google, Apple, or Microsoft; the amount may vary.'",
      source: "ideogram.ai/pricing (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "CORRECTION (2026-11-05): 'open-weight with a commercial license' needs the fine print. Ideogram's licensing page says the downloadable weights are 'Free under the Ideogram Non-Commercial Model Agreement.' (public, quantized FP8/NF4 checkpoints on Hugging Face, with 'Apache 2.0 inference code on GitHub'). Commercial self-hosting needs the Self-Serve Commercial License -- 'Buy commercial-use rights for self-hosting Ideogram 4 public, quantized weights on your own infrastructure.' -- at $300/mo for 10,000 images/month, and full-precision weights are Enterprise-only.",
      source: "ideogram.ai/licensing/, huggingface.co/ideogram-ai (API listing), github.com/ideogram-oss/ideogram-4 (all fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "MAJOR RELEASE (2026-06-03): **Ideogram 4.0** shipped as an OPEN-WEIGHT model -- a first for the company and a structural shift in the image-gen market. Specs per the vendor announcement: 9.3B-parameter single-stream DiT architecture, 0.97 on X-Omni OCR text rendering (extending its signature text-in-image lead), bounding-box layout control, and 2K photorealistic output. Self-hosting and fine-tuning are now on the table (license tiers in the CORRECTION above), putting direct pressure on FLUX's open-weight niche while keeping the hosted product as the easy path. Ideogram 4.0 is also already available inside Krea (6/3)",
      source: "Ideogram (ideogram.ai/news/ideogram-4.0, ideogram.ai/blog/ideogram-4.0/)",
      date: "2026-06-03",
    },
    {
      description: "Custom Models (April 2026) lets you train brand-specific image models on your own images for typography, characters, or visual style. As of 2026-11-05 Ideogram's plan table lists custom model training as 'Limited' on Pro and Team, a self-serve training run costs $40, and Enterprise gets private custom models trained on your visual data. Caveat: early adopters report overfitting on tight datasets (single-character archetypes, narrow style ranges) and the trained models don't always generalize beyond training-set composition",
      source: "Ideogram product page (ideogram.ai/features/custom-models), ideogram.ai/pricing (fetched 2026-11-05)",
      date: "2026-04",
    },
    {
      description: "Queue times during peak hours can stretch to several minutes even on paid plans",
      source: "Reddit r/ideogram",
      date: "2026-03",
    },
  ],
  bestFor: "Anyone who needs readable text in AI images -- logos, posters, packaging, social graphics, mockups -- and teams that refine the same image over many rounds with Ideogram 4.5 Precise Edit. Also developers who want self-hostable open weights for research, or a fixed per-image API.",
  notFor: "Users who want a free daily allowance they can count on (free credits are weekly and variable), buyers expecting free commercial open weights (commercial self-hosting starts at $300/mo), and pure artistic image work where Midjourney still leads.",
  verdict: "Ideogram is still the best at putting readable text in images, and 2026 made it a much broader product: Ideogram 4.0 opened its weights in June, Ideogram 4.5 added genuinely useful multi-turn precise editing, and the platform now bundles other labs' image and video models on one credit balance. The trade-off is price of entry -- the generous 10-prompts-a-day free plan and the $8 Basic tier are gone, so Plus at $20/mo ($15 yearly) is the real starting point, and the open weights are non-commercial unless you buy a license. For typography-heavy marketing work and iterative edits it remains a clear B-tier-or-better pick; pure artistic image work still favors Midjourney.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Ideogram official site", url: "https://ideogram.ai", dateAccessed: "2026-11-05" },
    { name: "Ideogram pricing (subscription, credits, API)", url: "https://ideogram.ai/pricing/", dateAccessed: "2026-11-05" },
    { name: "Ideogram 4.5 model page", url: "https://ideogram.ai/models/4.5/", dateAccessed: "2026-11-05" },
    { name: "Ideogram licensing (open weights tiers)", url: "https://ideogram.ai/licensing/", dateAccessed: "2026-11-05" },
    { name: "Ideogram blog index", url: "https://ideogram.ai/blog/", dateAccessed: "2026-11-05" },
    { name: "Ideogram blog: How to edit product photos with Ideogram 4.5 (2026-10-14)", url: "https://ideogram.ai/blog/ideogram-4-5-product-photo-editing/", dateAccessed: "2026-11-05" },
    { name: "Ideogram blog: Ideogram 4.0 Technical Details (2026-06-03)", url: "https://ideogram.ai/blog/ideogram-4.0/", dateAccessed: "2026-11-05" },
    { name: "Ideogram: Ideogram 4.0 announcement (2026-06-03)", url: "https://ideogram.ai/news/ideogram-4.0", dateAccessed: "2026-11-05" },
    { name: "Ideogram API docs: API Overview", url: "https://developer.ideogram.ai/ideogram-api/api-overview", dateAccessed: "2026-11-05" },
    { name: "Hugging Face: ideogram-ai models (API listing)", url: "https://huggingface.co/api/models?author=ideogram-ai&sort=createdAt&direction=-1&limit=20", dateAccessed: "2026-11-05" },
    { name: "GitHub: ideogram-oss/ideogram-4 (repo metadata)", url: "https://api.github.com/repos/ideogram-oss/ideogram-4", dateAccessed: "2026-11-05" },
    { name: "Ideogram Custom Models product page", url: "https://ideogram.ai/features/custom-models", dateAccessed: "2026-04-27" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/ideogram", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://ideogram.ai",
  status: "active",
  metaTitle: "Ideogram Review (Nov 2026): Ideogram 4.5, 4.0 Open Weights and New Credit Plans",
  metaDescription: "Ideogram review. Ideogram 4.5 precise-edit model (native 2K, API $0.03-$0.22/image), 4.0 open weights (free download non-commercial; commercial self-hosting from $300/mo). Plus $20/mo ($15 yearly), Pro $60, Team $30/user. Best text-in-image generator.",
};
