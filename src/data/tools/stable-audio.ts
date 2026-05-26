import { ToolReview } from "@/lib/types";

export const stableAudio: ToolReview = {
  slug: "stable-audio",
  name: "Stable Audio",
  tagline: "Stability AI's music + sound-effects model family -- Stable Audio 3.0 (2026-05-20) ships open weights on its small/medium models, generates full 6-minute compositions, and is trained on fully licensed Warner + Universal data",
  category: "ai-music-generators",
  url: "https://stableaudio.com",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 7.5,
    value: 8,
    features: 7.5,
    overall: 7.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Open Weights (Small SFX, Small, Medium)",
      price: "$0",
      features: [
        "Small SFX + Small (459M) and Medium (1.4B) released with open weights",
        "Small variants generate up to ~2 minutes and are light enough for on-device use",
        "Self-host and fine-tune; commercial use is subject to Stability's licensing terms",
      ],
    },
    {
      plan: "API / Large (2.7B)",
      price: "Usage-based",
      period: "via API partners",
      features: [
        "The Large model is API-only (via partners such as fal.ai) or paid self-hosting",
        "Generates full compositions up to 6 min 20 sec that hold musical structure",
        "Per-token / per-second pricing not disclosed at launch",
      ],
    },
    {
      plan: "Enterprise License",
      price: "Custom",
      features: [
        "Required for companies exceeding $1M in annual revenue",
        "Commercial self-hosting + enterprise terms",
        "Contact Stability AI",
      ],
    },
  ],

  pros: [
    "Trained on FULLY LICENSED data (Warner Music + Universal Music partnerships) -- the cleanest copyright story in AI music while Suno and Udio fight UMG/Sony litigation",
    "Open weights on the Small + Medium tiers means you can self-host and fine-tune -- rare in AI music, where Suno, Udio, and ElevenMusic are all closed",
    "Medium and Large generate full ~6:20 compositions that maintain structure and melodic tone, not just short loops",
    "Small variants (459M) are light enough to run on-device, opening up local/offline SFX and music generation",
  ],
  cons: [
    "The best model (Large 2.7B) is API-only -- the open-weight story doesn't extend to the flagship",
    "No vocal/lyric generation like Suno or Udio -- this is instrumental music plus sound effects, not 'type lyrics, get a sung song'",
    "Brand new (2026-05-20) -- independent quality benchmarking against established Suno/Udio output isn't available yet",
    "Companies over $1M in revenue need a paid enterprise license even for the open-weight models -- 'open' comes with commercial strings",
  ],
  knownIssues: [
    {
      description:
        "Stable Audio 3.0 launched 2026-05-20 as a family of four models: Small SFX and Small (459M), Medium (1.4B), and Large (2.7B). Medium and Large produce full compositions up to 6 minutes 20 seconds; the small models target up to ~2 minutes and on-device use. Small SFX, Small, and Medium ship with open weights; Large is restricted to API access, paid self-hosting, and enterprise licensing. Stability states the models are built on fully licensed data, backed by previously announced Warner Music Group and Universal Music Group partnerships. No public pricing was disclosed at launch",
      source: "TechCrunch (2026-05-20), The Decoder",
      date: "2026-05-20",
    },
    {
      description:
        "As a brand-new release, third-party quality comparisons vs Suno v5 / Udio are not yet available -- vendor demos look strong on structure and licensing is the headline differentiator, but independent evaluation is pending. Treat output-quality scoring here as preliminary",
      source: "AIToolTier editorial note",
      date: "2026-05",
    },
  ],
  bestFor:
    "Developers and music/SFX creators who want a copyright-clean, license-backed AI audio model -- especially anyone who needs to self-host or fine-tune (Small/Medium open weights), or who is wary of the UMG/Sony litigation hanging over Suno and Udio.",
  notFor:
    "Anyone who wants to type lyrics and get a finished vocal song -- Suno and Udio are built for that. Also not for users who need the top-quality model open-weight (Large is API-only) or a polished one-click consumer app over a developer-leaning toolset.",
  verdict:
    "Stable Audio 3.0 is the most interesting AI music release of the moment for one reason: it's built on fully licensed data and ships open weights on three of its four models -- the opposite of the closed, litigation-shadowed approach of Suno and Udio. Medium and Large generating coherent 6-minute compositions is a real step up from loop-length generation, and on-device-capable small models open up local workflows. The catches are that the flagship Large model stays API-only, there's no vocal-song generation, and as a brand-new release it hasn't been independently benchmarked yet. If copyright cleanliness, self-hosting, or fine-tuning matter to you, it's an immediate A-list option; if you want one-click vocal songs, stick with Suno.",

  lastReviewedDate: "2026-05-26",
  dataSources: [
    { name: "TechCrunch: Stability AI releases a new audio model that can create six-minute songs (2026-05-20)", url: "https://techcrunch.com/2026/05/20/stability-ai-release-a-new-audio-model-that-can-create-six-minute-songs/", dateAccessed: "2026-05-26" },
    { name: "The Decoder: Stability AI launches Stable Audio 3.0", url: "https://the-decoder.com/stability-ai-launches-stable-audio-3-0-with-up-to-six-minute-tracks-and-open-weights/", dateAccessed: "2026-05-26" },
    { name: "Stability AI official site", url: "https://stability.ai", dateAccessed: "2026-05-26" },
  ],
  affiliateUrl: "https://stableaudio.com",
  status: "active",
  metaTitle: "Stable Audio 3.0 Review 2026: Open-Weight, Licensed AI Music + SFX",
  metaDescription:
    "Stable Audio 3.0 review (May 2026). Stability AI's audio family: four models (459M-2.7B), 6-minute compositions, open weights on Small/Medium, trained on fully licensed Warner + Universal data. Scores, pricing.",
};
