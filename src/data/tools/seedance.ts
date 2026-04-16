import { ToolReview } from "@/lib/types";

export const seedance: ToolReview = {
  slug: "seedance",
  name: "Seedance 2.0",
  tagline: "ByteDance's unified audio+video generator -- 15-second 4K clips with synchronized dialogue, music, and SFX, now shipping inside CapCut",
  category: "ai-video-generators",
  url: "https://dreamina.capcut.com/",

  scores: {
    easeOfUse: 9,
    outputQuality: 9,
    value: 8.5,
    features: 9,
    overall: 8.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "CapCut Free",
      price: "$0",
      features: [
        "Limited daily Seedance generations",
        "Native CapCut timeline integration",
        "Watermarked outputs on free exports",
      ],
    },
    {
      plan: "CapCut Pro",
      price: "$7.99",
      period: "month",
      features: [
        "Expanded Seedance 2.0 generations",
        "Full 4K / 15s clip length",
        "Identity Lock for character consistency",
        "No watermark",
      ],
    },
    {
      plan: "Dreamina Standalone",
      price: "$9.90",
      period: "month",
      features: [
        "Dedicated Seedance web interface",
        "Batch generation and campaign tools",
        "Higher monthly generation quotas",
      ],
    },
    {
      plan: "Volcengine Enterprise / API",
      price: "Custom",
      period: "usage",
      features: [
        "Direct model API access",
        "Commercial licensing",
        "Volume pricing",
      ],
    },
  ],

  pros: [
    "Audio and video are generated in a single unified model -- dialogue lip-sync, background music, and ambient SFX all match the scene without post-hoc stitching, which is the first time any AI video tool has truly pulled this off in 2026",
    "Identity Lock keeps characters consistent across shots and across generations -- the missing piece every AI video tool failed at through 2025, now solved well enough to carry a multi-shot short-form narrative",
    "Native CapCut integration means if you already edit video on your phone, Seedance clips drop into your timeline with zero friction -- no export, no file transfer, no separate app",
    "15-second clips are long enough for actual short-form content (TikTok, Reels, Shorts) without chaining multiple generations, and the 4K output holds up when someone watches on a big screen",
  ],
  cons: [
    "ByteDance ownership and data-practice concerns remain real for many Western users -- if Seedance usage triggers the same regulatory scrutiny TikTok did, access policies could change fast and unpredictably",
    "Generation quality is noticeably better with Chinese-language prompts -- English prompts work but the model was trained on a Chinese-dominant corpus, and the gap is visible in detail and coherence",
    "Style diversity is narrower than Veo 3.1 -- Seedance has a recognizable 'look' and fighting it in prompts is difficult, which limits its range for anything outside social-content aesthetics",
    "Character consistency via Identity Lock occasionally produces uncanny effects at shot seams -- the face is the same, but micro-expressions between shots can read as slightly off",
  ],
  knownIssues: [
    {
      description: "Disney sent a cease-and-desist over character generation capabilities reproducing copyrighted characters. Model has since been fine-tuned to refuse specific franchise and character names, but workarounds still circulate",
      source: "TechCrunch",
      date: "2026-02",
    },
    {
      description: "English-voice audio dubbing occasionally has an artificial cadence or mispronounced words that Veo 3.1's native English audio does not exhibit",
      source: "Reddit r/aivideo",
      date: "2026-03",
    },
  ],
  bestFor: "Short-form content creators already using CapCut (TikTok, Instagram Reels, YouTube Shorts). If you're producing high-volume social video where character consistency matters and you need audio synced to the shot, Seedance 2.0 inside CapCut is friction-free and the output quality is a real jump over everything that came before in 2025.",
  notFor: "Professional film or TV production where the 'AI video look' is a liability. Also not for anyone who won't use ByteDance apps on principle, or whose workflow is already committed to Adobe Premiere / Final Cut / DaVinci (Seedance's main advantage is the native CapCut integration that assumes you're editing inside it already).",
  verdict: "Seedance 2.0 is the first AI video tool where the audio and video feel like one thing instead of two stapled together. The unified multimodal architecture actually produces synchronized dialogue, music, and SFX that land in the same scene, not a silent clip with music pasted on top. Shipping inside CapCut is the move that could make this category-defining for short-form social content -- no export, no stitching, no separate app, no learning curve. The honest read: for TikTok and Reels creators in 2026, Seedance 2.0 beats every alternative on pure workflow friction. For creators uncomfortable with ByteDance or working in professional pipelines, Veo 3.1 remains the quality leader and the more flexible tool.",

  lastReviewedDate: "2026-04-16",
  dataSources: [
    { name: "TechCrunch: Seedance 2.0 comes to CapCut", url: "https://techcrunch.com/2026/03/26/bytedances-new-ai-video-generation-model-dreamina-seedance-2-0-comes-to-capcut/", dateAccessed: "2026-04-16" },
    { name: "ByteDance Seed: Official launch of Seedance 2.0", url: "https://seed.bytedance.com/en/blog/official-launch-of-seedance-2-0", dateAccessed: "2026-04-16" },
    { name: "Dreamina product page", url: "https://dreamina.capcut.com/", dateAccessed: "2026-04-16" },
    { name: "Reddit r/aivideo community reports", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing via CapCut mobile", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://dreamina.capcut.com/",
  status: "active",
  metaTitle: "Seedance 2.0 Review 2026: ByteDance's Unified AI Video + Audio Generator",
  metaDescription: "Seedance 2.0 review. ByteDance's unified A/V video generator with Identity Lock and native CapCut integration. 15s 4K clips. Pros, cons, vs Veo. April 2026.",
};
