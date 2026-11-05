import { ToolReview } from "@/lib/types";

export const pika: ToolReview = {
  slug: "pika",
  name: "Pika",
  tagline: "**Nov 2026: Pika relaunched as a multi-model creative platform with new Free, Starter, Creator and Fancy plans.** AI video, image and audio generator running Pika's own models (Pika H3 Flex with open weights from 2026-10-29, Pika 2.5, Pika audio models) alongside Seedance, Kling, Veo, Wan and MiniMax. Starter $10/mo, Creator $35/mo, Fancy from $95/mo; Free has no watermark but no monthly credits",
  category: "ai-video-generators",
  url: "https://pika.art",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["No monthly credits -- credit packs only (60 credits per $1)", "All models", "No watermark", "No commercial license"],
    },
    {
      plan: "Starter",
      price: "$10",
      period: "month",
      features: ["$8/mo billed annually ($96/year)", "900 credits/mo", "Commercial license, no watermark", "2 video + 8 image/audio generations in parallel"],
    },
    {
      plan: "Creator",
      price: "$35",
      period: "month",
      features: ["$28/mo billed annually ($336/year)", "3,150 credits/mo", "Commercial license, no watermark", "Limited time: free Pika H3 Flex generations every day"],
    },
    {
      plan: "Fancy",
      price: "From $95",
      period: "month",
      features: ["From $76/mo billed annually (from $912/year)", "8,550+ credits/mo", "Unlimited parallel generations, priority queue", "Early access to new models (from $440/mo)"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Custom credits/month", "Unlimited parallel generations", "Dedicated support"],
    },
  ],

  pros: [
    "One subscription covers many models: Pika's own (H3 Flex, Pika 2.5, Pika audio) plus Seedance 2.5, Kling 4.0, Veo 3.1, Wan 3.0, MiniMax H3 and Gemini Omni",
    "Still simple to use -- the relaunched Pika has 25+ focused creative apps (Video Studio, Product Shot, Camera Director and more) that pick a model for you, or you can choose one yourself",
    "Pika H3 Flex (2026-10-29) is fast and open: a post-trained MiniMax H3 that can make a 15-second 768p clip with audio 'in as little as seven seconds of transformer computation', with adapters and inference code released",
    "Free exports are no longer watermarked, and every plan includes every model",
    "Low per-generation pricing -- Pika says 'Seedance generations on Pika are half the price of other creation platforms' (as of 2026-09-17)",
  ],
  cons: [
    "The free tier is much weaker than before: no monthly credits at all (credit packs only) and no commercial license",
    "Credits burn fast on premium video models -- a 5-second 720p Seedance 2.5 clip costs 122 credits, so Starter's 900 credits is about 7 clips a month",
    "Much of the value now comes from other labs' models (Seedance, Kling, Veo), so part of what you pay for is Pika's front end",
    "Plan credits do not roll over, and payments are non-refundable",
    "Legacy plan holders (Basic, Standard, Pro, Unlimited) keep older terms that Pika no longer publishes",
  ],
  knownIssues: [
    {
      description: "PLAN OVERHAUL (page updated 2026-10-28, vendor-primary): pika.art/pricing now lists Free, Starter, Creator and Fancy. 'Starter: $10/month billed monthly or $8/month billed annually ($96/year); 900 credits per month; no watermark; commercial license included.' Creator is $35/mo or $28/mo yearly ($336/year) with 3,150 credits; Fancy is from $95/mo or from $76/mo yearly (from $912/year) with 8,550+ credits; Enterprise is custom. Free is '$0; credit packs available; no watermark.' with 'Monthly credits 0 · credit packs only' and no commercial license. Top-ups are 60 credits per $1. 'Basic, Standard, Pro and Unlimited are legacy individual plan names.'",
      source: "pika.art/pricing ('Last updated: October 28, 2026', fetched 2026-11-05)",
      date: "2026-10-28",
    },
    {
      description: "PIKA H3 FLEX (2026-10-29, vendor-primary): 'our post-trained MiniMax H3 model' -- six sampling steps instead of 50, up to 12 reference files, five separate audio stems and a 4K finish. Pika says 'we’re releasing open weights': the generator adapters and inference code are on GitHub, under the model's license terms. For a limited time Creator and Fancy include free daily H3 Flex generations.",
      source: "pika.art/blog/pika-h3-flex (JSON-LD 2026-10-29), github.com/Pika-Labs/Pika-H3-Flex, pika.art/pricing (fetched 2026-11-05)",
      date: "2026-10-29",
    },
    {
      description: "THE NEW PIKA (2026-09-17, vendor-primary): Pika relaunched as 'an AI creative platform made for and by Creatives' with 25+ apps across video, image and sound, running Seedance, GPT Image, MiniMax H3 and Pika's own models; apps pick the model automatically unless you choose one. Pika Audio (Soundtrack, Music, SFX, Speech) launched 2026-08-14, initially 'exclusively through the Pika API Club'.",
      source: "pika.art/blog/welcome-to-the-new-pika (JSON-LD 2026-09-17), pika.art/blog/pika-audio-models (JSON-LD 2026-08-14)",
      date: "2026-09-17",
    },
    {
      description: "CORRECTION (2026-11-05): this page listed 'Basic (Free) -- 80 video credits/mo, Pika 2.5 access at 480p only, Watermarked' and paid tiers Standard / Pro / Fancy at $8 / $28 / $76 billed yearly with 700 / 2,300 / 6,000 credits. Pika's pricing page now shows a Free plan with 'Monthly credits 0 · credit packs only' and no watermark, and paid plans Starter / Creator / Fancy with 900 / 3,150 / 8,550+ credits (see the plan entry above).",
      source: "pika.art/pricing (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "PIKAFORMANCE NO LONGER FEATURED (2026-11-05, vendor-primary): Pikaformance was this page's headline feature on 2026-05-26 but is not mentioned on pika.art's homepage or pricing page as of 2026-11-05; Pika's own current models are Pika H3 Flex and Pika 2.5 plus the Pika audio models.",
      source: "pika.art, pika.art/pricing (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description: "Pika's featured product on 2026-05-26 was the Pikaformance model -- image-to-video with hyper-real expressions synced to audio (sing, speak, rap, etc.) at near real-time speed. Vendor specs then: 720p output, 3 credits/second, audio up to 10s or 30s depending on tier. The general model was Pika 2.5. (Plan details from that date are superseded -- see the 2026-10-28 entry.)",
      source: "pika.art + pika.art/pricing (vendor)",
      date: "2026-05-26",
    },
    {
      description: "Lip sync feature produces uncanny results on real human faces",
      source: "Reddit r/pika",
      date: "2026-03",
    },
  ],
  bestFor: "Social creators and small brands who want many video, image and audio models behind one simple app and one credit balance, starting at $10/mo with a commercial license.",
  notFor: "Anyone who wants a free monthly allowance (Free now has no monthly credits), heavy users of premium video models on Starter (about 7 Seedance 2.5 720p clips a month), and filmmakers who want the deepest single-model control.",
  verdict: "Pika is no longer just a cheap Pika-model video generator: since the 2026-09-17 relaunch it is a multi-model creative platform that wraps Seedance, Kling, Veo, Wan and MiniMax alongside its own Pika 2.5, the open H3 Flex and new audio models, with simple apps on top. That makes it a convenient one-subscription front end from $10/mo, and Free exports lost the watermark. The catch is the free tier -- it no longer includes any monthly credits -- and premium video models eat credits quickly on the smaller plans. Start on Starter if you want to test it seriously.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Pika official site", url: "https://pika.art", dateAccessed: "2026-11-05" },
    { name: "Pika pricing page (last updated 2026-10-28)", url: "https://pika.art/pricing", dateAccessed: "2026-11-05" },
    { name: "Pika blog: Introducing Pika H3 Flex (2026-10-29)", url: "https://pika.art/blog/pika-h3-flex", dateAccessed: "2026-11-05" },
    { name: "Pika blog: Welcome to the New Pika (2026-09-17)", url: "https://pika.art/blog/welcome-to-the-new-pika", dateAccessed: "2026-11-05" },
    { name: "Pika blog: Introducing Pika Audio (2026-08-14)", url: "https://pika.art/blog/pika-audio-models", dateAccessed: "2026-11-05" },
    { name: "Pika sitemap", url: "https://pika.art/sitemap.xml", dateAccessed: "2026-11-05" },
    { name: "GitHub: Pika-Labs/Pika-H3-Flex (repo metadata)", url: "https://api.github.com/repos/Pika-Labs/Pika-H3-Flex", dateAccessed: "2026-11-05" },
    { name: "Reddit r/pika", dateAccessed: "2026-05-02" },
  ],
  affiliateUrl: "https://pika.art",
  status: "active",
  metaTitle: "Pika Review 2026: Multi-Model AI Video Platform, Pika H3 Flex and New Plans",
  metaDescription: "Pika review (Nov 2026). Relaunched as a multi-model platform: Pika H3 Flex (open weights), Pika 2.5, Seedance, Kling, Veo. Free (credit packs only, no watermark), Starter $10/mo, Creator $35/mo, Fancy from $95/mo.",
};
