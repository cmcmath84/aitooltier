import { ToolReview } from "@/lib/types";

export const museImage: ToolReview = {
  slug: "muse-image",
  name: "Meta Muse (Image + Video)",
  tagline: "Meta Superintelligence Labs' first media-generation models (launched 2026-07-07) -- Muse Image is GA across the Meta AI app, Instagram, and WhatsApp (Arena #2 for text-to-image); Muse Video is in preview (Arena #3 for text-to-video). Instruction-faithful editing, multi-reference composition, tool use, and Content Seal provenance watermarking",
  category: "ai-image-generators",
  url: "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",

  scores: {
    easeOfUse: 9,
    outputQuality: 8.5,
    value: 9,
    features: 7.5,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (in Meta apps)",
      price: "$0",
      features: [
        "Muse Image available in the Meta AI app + meta.ai, Instagram Stories (US), WhatsApp (limited countries); Facebook coming soon",
        "Muse Video in preview -- coming soon to creators and Meta AI",
        "No standalone pricing or public API disclosed at launch",
        "Meta AI app usage limits apply",
      ],
    },
  ],

  pros: [
    "Frontier-lab quality on day one: Muse Image ranks #2 on Arena for text-to-image, single-image editing, AND multi-image editing (as of 2026-07-05) -- a strong debut for Meta's first media model",
    "Instruction-faithful editing + multi-reference composition: it follows edit instructions precisely and composes from multiple reference images, the practical features that matter for campaign/brand consistency",
    "Genuinely free and where people already are -- built into the Meta AI app, Instagram Stories, and WhatsApp rather than a separate paid product to learn",
    "Provenance built in: images carry a hidden Content Seal watermark (a step ahead of most consumer image tools on AI-content transparency)",
  ],
  cons: [
    "Muse Video is preview-only at launch ('coming soon to creators and Meta AI') -- you cannot rely on it for production video yet",
    "No public API or pricing disclosed -- developers can't build on it, and there's no paid tier for higher limits or commercial guarantees yet",
    "Arena #2 (image) / #3 (video) means it trails the current leaders -- it's excellent, not the outright best in either category on launch day",
    "Rollout is uneven and region-gated (Instagram Stories US-only, WhatsApp 'limited countries,' Facebook 'coming soon') -- availability depends heavily on where you are",
  ],
  knownIssues: [
    {
      description: "LAUNCH (2026-07-07): Meta Superintelligence Labs (led by Alexandr Wang) launched its first media-generation models. **Muse Image is generally available** across the Meta AI app, meta.ai, Instagram Stories (US), and WhatsApp (limited countries), coming soon to Facebook -- capabilities include instruction-faithful editing, multi-reference composition, tool use (coding + web search), self-refinement, and test-time compute scaling. It ranks #2 on Arena for text-to-image, single-image editing, and multi-image editing (as of 2026-07-05). **Muse Video is in preview** ('exceptional visual fidelity with native audio support,' Arena #3 for text-to-video), coming soon to creators and Meta AI. Images carry a hidden Content Seal provenance watermark. No pricing, benchmarks beyond Arena placement, or public API were disclosed at launch",
      source: "Meta AI blog (ai.meta.com/blog/introducing-muse-image-muse-video-msl/), Meta newsroom (about.fb.com), Reuters, CNBC",
      date: "2026-07-07",
    },
  ],
  bestFor: "Anyone already in Meta's apps (Instagram, WhatsApp, Meta AI) who wants free, high-quality image generation and editing with strong instruction-following -- especially for social content where the tool lives right where you post.",
  notFor: "Developers who need an API (there isn't one yet), teams that need production video today (Muse Video is preview-only), or anyone outside the launch regions. For a public API or top-of-Arena fidelity, use Nano Banana 2 or a dedicated provider.",
  verdict: "Meta Muse is a serious debut: a frontier lab's first image model landing at #2 on Arena across text-to-image and both editing tracks, free, and embedded directly in the apps where billions of people already share photos. The instruction-following and multi-reference composition are the features that make it useful beyond novelty, and shipping Content Seal provenance from day one is the right call. The caveats are real -- Muse Video is preview-only, there's no API or pricing, and the rollout is region-gated -- so treat this as an excellent in-app consumer tool today rather than a production or developer platform. If you live in Instagram/WhatsApp, it's an easy default; if you need an API or the outright quality ceiling, look at Nano Banana 2.",

  lastReviewedDate: "2026-07-07",
  dataSources: [
    { name: "Meta AI blog: Introducing Muse Image + Muse Video (2026-07-07)", url: "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/", dateAccessed: "2026-07-07" },
    { name: "Meta newsroom: Introducing Muse Image", url: "https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/", dateAccessed: "2026-07-07" },
    { name: "Reuters: Meta expands generative AI tools with Muse Image rollout", url: "https://www.reuters.com/technology/meta-expands-generative-ai-tools-with-muse-image-rollout-2026-07-07/", dateAccessed: "2026-07-07" },
    { name: "CNBC: Meta AI Muse Image", url: "https://www.cnbc.com/2026/07/07/meta-ai-muse-image.html", dateAccessed: "2026-07-07" },
  ],
  affiliateUrl: "https://ai.meta.com/",
  status: "active",
  metaTitle: "Meta Muse Review (2026): Muse Image + Muse Video, Tested",
  metaDescription: "Meta Muse review. Meta Superintelligence Labs' first media models (July 7, 2026): Muse Image GA (Arena #2 text-to-image) in Instagram/WhatsApp/Meta AI, Muse Video preview. Free, Content Seal watermarking, capabilities, trade-offs.",
};
