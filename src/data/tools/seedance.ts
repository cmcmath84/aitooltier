import { ToolReview } from "@/lib/types";

export const seedance: ToolReview = {
  slug: "seedance",
  name: "Seedance 2.5 (ByteDance)",
  tagline: "ByteDance's unified audio and video generator. Seedance 2.5 (2026-07-31) makes 30-second clips with synchronized audio in a single pass, extends them over multiple rounds and accepts up to 30 images, 10 video clips and 10 audio clips as references. Its API is live on BytePlus ModelArk at $1.156 per 5-second 720p clip, and Dreamina now offers it to US visitors. Seedance 2.0, 2.0 Fast and 2.0 Mini remain on the API, with 4K only on 2.0",
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
      plan: "Dreamina Free Tier",
      price: "$0",
      features: [
        "225 daily free tokens (shared across all Dreamina tools)",
        "Roughly 1-2 short Seedance clips per day",
        "Note: CapCut free tier does NOT include Seedance",
      ],
    },
    {
      plan: "CapCut Pro",
      price: "$9.99",
      period: "month",
      features: [
        "Seedance 2.0 generations (required tier - Pro-only)",
        "Full 4K / 15s clip length, Identity Lock",
        "Native CapCut timeline integration, no watermark",
        "Availability limited to select markets (Indonesia, Philippines, Thailand, Vietnam, Malaysia, Brazil, Mexico, etc.)",
        "Price and market list last verified 2026-04-16",
      ],
    },
    {
      plan: "Dreamina Basic",
      price: "$18",
      period: "month",
      features: [
        "Credit-based plan, international markets",
        "Dedicated Seedance web interface",
        "Higher monthly generation quotas than free tier",
        "Price last verified 2026-04-16 (Dreamina's pricing page did not render on 2026-10-29)",
      ],
    },
    {
      plan: "Dreamina Pro / Max",
      price: "$41-$167",
      period: "month",
      features: [
        "Pro tier and Max tier for heavy production use",
        "Expanded credit allotments",
        "Batch generation and campaign tools",
        "Prices last verified 2026-04-16 (Dreamina's pricing page did not render on 2026-10-29)",
      ],
    },
    {
      plan: "BytePlus ModelArk API",
      price: "$1.156",
      period: "per 5s 720p clip (Seedance 2.5)",
      features: [
        "Seedance 2.5: about $0.231/s at 720p, $0.103/s at 480p, $0.569/s at 1080p; no 4K",
        "Seedance 2.0: $0.76 per 5s 720p clip, $3.89 per 5s 4K clip",
        "Seedance 2.0 Fast and 2.0 Mini cost less",
        "Token-based billing; per-clip prices are BytePlus examples",
      ],
    },
  ],

  pros: [
    "Seedance 2.5 takes up to 30 images, 10 video clips and 10 audio clips as references in one pass and adds timestamp-level editing of audio and video",
    "Audio and video are generated in a single unified model -- dialogue lip-sync, background music, and ambient SFX all match the scene without post-hoc stitching, which is the first time any AI video tool has truly pulled this off in 2026",
    "Identity Lock keeps characters consistent across shots and across generations -- the missing piece every AI video tool failed at through 2025, now solved well enough to carry a multi-shot short-form narrative",
    "Native CapCut integration means if you already edit video on your phone (and you're in one of the 8+ supported markets), Seedance clips drop into your timeline with zero friction -- no export, no file transfer, no separate app",
    "Seedance 2.5 generates 30-second clips in a single pass and extends them over multiple rounds, so short-form content (TikTok, Reels, Shorts) rarely needs stitched generations; 4K output remains available on Seedance 2.0 through the API",
  ],
  cons: [
    "On the BytePlus API, Seedance 2.5 costs about $0.231 per second at 720p versus $0.15 for Seedance 2.0, and it has no 4K option",
    "CapCut integration is geofenced to select markets (Indonesia, Philippines, Thailand, Vietnam, Malaysia, Brazil, Mexico + expanding) -- US and European creators either can't access it yet or need to use Dreamina web interface separately",
    "ByteDance ownership and data-practice concerns remain real for many Western users -- if Seedance usage triggers the same regulatory scrutiny TikTok did, access policies could change fast and unpredictably",
    "Generation quality is noticeably better with Chinese-language prompts -- English prompts work but the model was trained on a Chinese-dominant corpus, and the gap is visible in detail and coherence",
    "Style diversity is narrower than Veo 3.1 -- Seedance has a recognizable 'look' and fighting it in prompts is difficult, which limits its range for anything outside social-content aesthetics",
    "Character consistency via Identity Lock occasionally produces uncanny effects at shot seams -- the face is the same, but micro-expressions between shots can read as slightly off",
  ],
  knownIssues: [
    {
      description: "API PRICE CORRECTION AND DREAMINA PROMO (checked 2026-10-29): our earlier API row said $0.15 per 5-second clip and projected about $150 a month for 1,000 clips. $0.15 is BytePlus's per-second rate for Seedance 2.0 at 720p ($0.76 per 5-second clip). BytePlus ModelArk now says 'Official Dreamina Seedance 2.5 API is now live' and gives 5-second examples for 2.5 of $0.514 at 480p, $1.156 at 720p and $2.843 at 1080p, with 4K not supported; Seedance 2.0 is $3.89 per 5-second 4K clip, and 2.0 Fast and 2.0 Mini cost less. Billing is token-based, so these are estimates. Dreamina's US site showed an early Black Friday offer: 'Upgrade from just $0.29 and get up to 500 free Seedance 2.5 videos' with 2.5 at 720p 'from $0.01/sec' (promotional). Its pricing page did not render, so the Dreamina Basic, Pro/Max and CapCut Pro prices on this page were last verified 2026-04-16.",
      source: "BytePlus ModelArk model pricing (docs.byteplus.com/en/docs/modelark/model-pricing) + dreamina.capcut.com (US fetch), fetched 2026-10-29",
      date: "2026-10-29",
    },
    {
      description: "SEEDANCE 2.5 LAUNCH (2026-07-31, ByteDance Seed): 'Today, we are officially launching Seedance 2.5.' It 'can generate high-quality, 30-second audio-video clips in a single pass and supports multiple rounds of extension' (Seedance 2.0 topped out at 15 seconds), takes 'up to 30 images, 10 video clips, and 10 audio clips' as references, and adds timestamp-level editing. It rolled out first on Jimeng AI and Doubao Pro, with API access via BytePlus ModelArk following.",
      source: "ByteDance Seed blog (seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5, dated 2026-07-31), fetched 2026-10-29",
      date: "2026-07-31",
    },
    {
      description: "GLOBAL ROLLOUT PAUSED: ByteDance paused Seedance 2.0's international rollout on 2026-03-15 after the Disney cease-and-desist (2026-02) and a formal US Senate letter (Senators Blackburn + Welch, 2026-03-17) demanding an outright shutdown over copyright-infringement claims. China + existing CapCut-integrated markets (Indonesia, Philippines, Thailand, Vietnam, Malaysia, Brazil, Mexico) still have access. Standalone Dreamina Western-market rollout is now indefinite. Update 2026-10-29: Dreamina's site now advertises Seedance 2.5 to US visitors; we found no ByteDance statement formally ending the pause",
      source: "TechCrunch, Senator Blackburn press release",
      date: "2026-03",
    },
    {
      description: "English-voice audio dubbing occasionally has an artificial cadence or mispronounced words that Veo 3.1's native English audio does not exhibit",
      source: "Reddit r/aivideo",
      date: "2026-03",
    },
  ],
  bestFor: "Short-form content creators already using CapCut (TikTok, Instagram Reels, YouTube Shorts). If you're producing high-volume social video where character consistency matters and you need audio synced to the shot, Seedance inside CapCut (Seedance 2.0 at our April check) or on Dreamina (Seedance 2.5) is friction-free and the output quality is a real jump over everything that came before in 2025.",
  notFor: "Professional film or TV production where the 'AI video look' is a liability. Also not for anyone who won't use ByteDance apps on principle, or whose workflow is already committed to Adobe Premiere / Final Cut / DaVinci (Seedance's main advantage is the native CapCut integration that assumes you're editing inside it already).",
  verdict: "Seedance is the first AI video tool where the audio and video feel like one thing instead of two stapled together. The unified multimodal architecture actually produces synchronized dialogue, music, and SFX that land in the same scene, not a silent clip with music pasted on top. Shipping inside CapCut is the move that could make this category-defining for short-form social content: no export, no stitching, no separate app, no learning curve. Seedance 2.5 (2026-07-31) doubles single-pass length to 30 seconds and adds multi-round extension. The honest read: for TikTok and Reels creators in 2026, Seedance beats every alternative on pure workflow friction. For creators uncomfortable with ByteDance or working in professional pipelines, Veo 3.1 remains the quality leader and the more flexible tool.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "ByteDance Seed: Introducing Seedance 2.5 (2026-07-31)", url: "https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5", dateAccessed: "2026-10-29" },
    { name: "BytePlus ModelArk model pricing (Seedance 2.5 and 2.0 series)", url: "https://docs.byteplus.com/en/docs/modelark/model-pricing", dateAccessed: "2026-10-29" },
    { name: "Dreamina home page (US fetch, Seedance 2.5 promotion)", url: "https://dreamina.capcut.com/", dateAccessed: "2026-10-29" },
    { name: "TechCrunch: Seedance 2.0 comes to CapCut", url: "https://techcrunch.com/2026/03/26/bytedances-new-ai-video-generation-model-dreamina-seedance-2-0-comes-to-capcut/", dateAccessed: "2026-04-16" },
    { name: "ByteDance Seed: Official launch of Seedance 2.0", url: "https://seed.bytedance.com/en/blog/official-launch-of-seedance-2-0", dateAccessed: "2026-04-16" },
    { name: "Dreamina product page", url: "https://dreamina.capcut.com/", dateAccessed: "2026-04-16" },
    { name: "Reddit r/aivideo community reports", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing via CapCut mobile", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://dreamina.capcut.com/",
  status: "active",
  metaTitle: "Seedance 2.5 Review 2026: ByteDance's Unified AI Video + Audio Generator",
  metaDescription: "Seedance 2.5 review. ByteDance's unified audio and video generator: 30-second clips with multi-round extension, up to 30 image references, Identity Lock, CapCut and Dreamina access. BytePlus API from $1.156 per 5s 720p clip. Pros, cons, vs Veo.",
};
