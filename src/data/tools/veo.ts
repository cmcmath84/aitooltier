import { ToolReview } from "@/lib/types";

export const veo: ToolReview = {
  slug: "veo",
  name: "Google Veo",
  tagline: "Google's best-in-class AI video generator -- native 4K with audio that actually sounds like it belongs",
  category: "ai-video-generators",
  url: "https://deepmind.google/technologies/veo",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 9.5,
    value: 6.5,
    features: 8,
    overall: 7.9,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Gemini Advanced",
      price: "$19.99",
      period: "month",
      features: ["Veo 3 access via Gemini", "Limited generations/day", "4K output", "Audio generation"],
    },
    {
      plan: "Google One AI Premium",
      price: "$19.99",
      period: "month",
      features: ["Bundled with 2TB storage", "Gemini Advanced included", "Veo access included"],
    },
  ],

  pros: [
    "Output quality is the best we've seen in AI video as of early 2026 -- motion coherence, lighting, and detail are a clear step above competitors",
    "Native audio generation is impressively good -- ambient sounds, music, and even dialogue sync naturally with the video",
    "4K resolution output means you can actually use these in professional contexts without obvious quality loss",
    "Camera motion understanding is excellent -- dolly shots, pans, and zooms look intentional rather than AI-generated",
  ],
  cons: [
    "Locked inside the Google ecosystem -- you need a Gemini Advanced subscription and there's no standalone Veo product",
    "No public API for most users yet -- developers who want to integrate Veo into their own tools are mostly out of luck",
    "Generation times are slow -- expect 2-5 minutes per clip, which makes rapid iteration painful",
    "Daily generation limits on Gemini Advanced are restrictive for anyone doing serious video production work",
  ],
  knownIssues: [
    {
      description: "Generated humans sometimes exhibit the 'uncanny valley' effect with unnatural micro-expressions and eye movement",
      source: "Reddit r/aivideo",
      date: "2026-03",
    },
    {
      description: "Veo occasionally ignores specific style directions in prompts, defaulting to a 'cinematic' look regardless of instructions",
      source: "YouTube creator reviews",
      date: "2026-03",
    },
  ],
  bestFor: "Creators who need the highest-quality AI video available today and are already in the Google ecosystem. If output quality is your top priority and you don't mind the generation limits, Veo 3 is the benchmark.",
  notFor: "High-volume video producers who need fast turnaround and API access. Also not for anyone who doesn't want another Google subscription -- the lack of a standalone product is a real limitation.",
  verdict: "Veo 3 is the quality leader in AI video generation, full stop. The combined video and audio output is remarkably polished, and the 4K resolution makes it viable for professional use in a way that earlier AI video tools weren't. The problem is access and flexibility -- being locked into Gemini Advanced with daily limits and no real API means you're playing by Google's rules entirely. For occasional high-quality video generation, it's the best option. For production workflows, the limitations add up fast.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "Google DeepMind official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-03-31" },
    { name: "YouTube creator reviews", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing via Gemini", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://deepmind.google/technologies/veo",
  status: "active",
  metaTitle: "Google Veo 3 Review 2026: The Best AI Video Generator Available Right Now",
  metaDescription: "Google Veo 3 review. Best-in-class AI video with native 4K and audio, but locked in Google ecosystem. Worth the Gemini sub? Scores, pricing. March 2026.",
};
