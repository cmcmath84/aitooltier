import { ToolReview } from "@/lib/types";

export const veo: ToolReview = {
  slug: "veo",
  name: "Google Veo 3.1",
  tagline: "Google's dominant AI video generator -- native 4K at 60fps with synchronized audio, now free to every Google account via Google Vids",
  category: "ai-video-generators",
  url: "https://deepmind.google/technologies/veo",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 9.5,
    value: 6.5,
    features: 8,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Google Vids (Free)",
      price: "$0",
      features: [
        "Veo 3.1 Lite free to every Google account (rolled out April 2026)",
        "Limited daily generations",
        "Native Google Vids integration for editing",
      ],
    },
    {
      plan: "Google AI Pro",
      price: "$19.99",
      period: "month",
      features: [
        "Full Veo 3.1 access via Gemini",
        "Higher generation limits",
        "4K 60fps output",
        "Synchronized native audio",
      ],
    },
    {
      plan: "Google AI Ultra",
      price: "$249.99",
      period: "month",
      features: [
        "Effectively unlimited Veo 3.1 generations",
        "Gemini 3.1 Pro with maximum limits, Nano Banana 2 included",
        "Project Mariner (10 parallel agentic browser tasks)",
        "30 TB storage, YouTube Premium",
      ],
    },
    {
      plan: "Vertex AI (Veo 3.1 Lite API)",
      price: "Usage-based",
      period: "per second of video",
      features: [
        "API access for developers",
        "Veo upscaling capability",
        "Commercial use licensing",
      ],
    },
  ],

  pros: [
    "Output quality is the clear leader after OpenAI shut down Sora in March 2026 -- native 4K at 60fps, motion coherence, and lighting are a generation ahead of what Kling, Runway, or Pika deliver in pure-quality tests",
    "Synchronized audio in a single pass is genuinely excellent -- dialogue, SFX, and ambient match the scene without post-hoc stitching, rivaling Seedance 2.0 for A/V unity",
    "Free rollout to every Google account via Google Vids (April 2026) is a major accessibility shift -- you no longer need a paid subscription to try best-in-class AI video, just a Google login",
    "Vertex AI API for Veo 3.1 Lite means developers can now build Veo into their own tools, which was a huge gap in the original Veo release",
  ],
  cons: [
    "Free tier limits on Google Vids are modest -- serious iteration or long-form work will push you to Google AI Pro ($19.99/mo) or Ultra ($249/mo) quickly",
    "Generation times are still slow -- expect 1-4 minutes per clip on Pro, which makes rapid iteration painful compared to Seedance 2.0 shipping inside CapCut",
    "Style diversity skews cinematic -- Veo 3.1 has a recognizable 'prestige commercial' look that is hard to push into stylized or experimental territory",
    "Google ecosystem lock-in remains -- your generations live inside Google Vids / Drive, and pulling them into Premiere or DaVinci workflows adds friction that Seedance + CapCut doesn't",
  ],
  knownIssues: [
    {
      description: "NEW SIBLING MODEL (2026-06-30): Google shipped **Gemini Omni Flash** (`gemini-omni-flash-preview`), a natively multimodal video-generation + conversational-editing model, to the Gemini API / AI Studio at **$0.10 per second of video output** (10-second clips at launch, longer coming). It sits alongside Veo 3.1 rather than replacing it -- Omni Flash targets fast, natural-language, in-conversation video editing, while Veo remains the peak-quality 4K/60fps cinematic model. Worth knowing if you're choosing a Google video API by cost vs. fidelity.",
      source: "blog.google (blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/)",
      date: "2026-06-30",
    },
    {
      description: "API MODEL-ID SHUTDOWN NOW IN EFFECT (2026-06-30): the older Veo API model IDs announced 6/15 have retired on schedule -- **Veo 2.0 and Veo 3.0 (`veo-2.0-generate-001`, `veo-3.0-generate-001`, `veo-3.0-fast-generate-001`) shut down 2026-06-30**. Pinned calls to these legacy endpoints are now failing; migrate to `veo-3.1-generate-preview` / `veo-3.1-fast-generate-preview` or the 3.1 GA models. Only affects direct API callers on the legacy 2.0/3.0 endpoints; consumer Veo 3.1 in Gemini / Google Vids is unaffected. (Separately, Google's older Imagen 4.0 image models shut down 2026-08-17.)",
      source: "Gemini API changelog + deprecations (ai.google.dev/gemini-api/docs/deprecations)",
      date: "2026-06-30",
    },
    {
      description: "Generated humans still occasionally exhibit uncanny-valley effects on micro-expressions, though 3.1 is noticeably better than 3.0 on eye contact and mouth shape",
      source: "Reddit r/aivideo",
      date: "2026-04",
    },
    {
      description: "Veo 3.1 Lite (free tier) defaults to 1080p and shorter clips -- the full 4K/60fps/long-clip experience still requires Pro or Ultra",
      source: "Google Vids help docs",
      date: "2026-04",
    },
    {
      description: "Style diversity concerns persist -- Veo defaults to 'cinematic commercial' aesthetic regardless of prompt, and pushing toward stylized or experimental looks remains hard",
      source: "YouTube creator reviews",
      date: "2026-04",
    },
  ],
  bestFor: "Creators who need the highest-quality AI video available and want free or low-cost access. The April 2026 free rollout to every Google account via Google Vids makes Veo 3.1 the new default starting point for anyone trying AI video seriously. Professional production teams benefit from Ultra's unlimited generations.",
  notFor: "High-volume TikTok / Reels creators where CapCut + Seedance 2.0 beats Veo on workflow friction. Also not ideal for anyone wanting strong stylistic control -- Veo's cinematic default is hard to escape.",
  verdict: "Veo 3.1 solidified Google's video lead after OpenAI shut down Sora in March 2026. Quality-wise it remains the benchmark -- 4K/60fps with synchronized audio, and the April 2026 free rollout to every Google account is a structural shift that puts best-in-class AI video in front of billions overnight. The remaining weaknesses are workflow friction (generation is slow, Google ecosystem lock-in) and stylistic narrowness. The honest read: for pure quality and accessibility, Veo 3.1 is the 2026 default. For short-form social workflows where speed matters more than peak quality, Seedance 2.0 inside CapCut is the more pragmatic choice.",

  lastReviewedDate: "2026-07-04",
  dataSources: [
    { name: "Google Blog: Gemini Omni Flash + Nano Banana 2 Lite (2026-06-30)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/", dateAccessed: "2026-07-04" },
    { name: "Gemini API deprecations: Veo 2.0/3.0 API shutdown took effect 2026-06-30", url: "https://ai.google.dev/gemini-api/docs/deprecations", dateAccessed: "2026-07-04" },
    { name: "Google Cloud: Veo 3.1 Lite on Vertex AI", url: "https://cloud.google.com/blog/products/ai-machine-learning/veo-3-1-lite-and-a-new-veo-upscaling-capability-on-vertex-ai", dateAccessed: "2026-04-16" },
    { name: "Bloomberg: AI Video Generators Replacing Sora", url: "https://www.bloomberg.com/news/articles/2026-04-01/kling-ai-runway-vidu-the-ai-video-generators-set-to-replace-openai-s-sora", dateAccessed: "2026-04-16" },
    { name: "Google Vids / Google One AI Pro pages", dateAccessed: "2026-04-16" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing via Gemini + Google Vids", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://deepmind.google/technologies/veo",
  status: "active",
  metaTitle: "Google Veo 3.1 Review 2026: Free AI Video for Every Google Account",
  metaDescription: "Google Veo 3.1 review. 4K/60fps AI video with native audio, now free via Google Vids. Pro + Ultra tiers, Vertex AI API. Scores, pricing. April 2026.",
};
