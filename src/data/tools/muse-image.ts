import { ToolReview } from "@/lib/types";

export const museImage: ToolReview = {
  slug: "muse-image",
  name: "Meta Muse (Image + Video)",
  tagline: "**Muse Image reached developers on the Meta Model API on 2026-08-25 at a flat $0.01 per image** (built-in web and image search included; failed or safety-filtered images are not billed), and Meta One's Core ($7.99/mo) and Premium ($19.99/mo) bundles (2026-09-15) add more Muse-powered image and video generation in Meta's apps. Meta Superintelligence Labs' first media-generation models (launched 2026-07-07) -- Muse Image is GA across the Meta AI app, Instagram, and WhatsApp (Arena #2 for text-to-image); Muse Video is in preview (Arena #3 for text-to-video). Instruction-faithful editing, multi-reference composition, tool use, and Content Seal provenance watermarking",
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
        "Developer API available since 2026-08-25 (see Meta Model API row)",
        "Meta AI app usage limits apply",
      ],
    },
    {
      plan: "Meta Model API",
      price: "$0.01",
      period: "image",
      features: ["Flat per generated image regardless of prompt length, reasoning_strength or tools used", "Built-in web and image search included in the price", "n images returned = n billed; failed or safety-filtered images not counted", "Anchored composition across a series of generations (launched 2026-08-25)"],
    },
    {
      plan: "Meta One Core / Premium",
      price: "$7.99 / $19.99",
      period: "month",
      features: ["More image and video generation with Meta AI, powered by Muse models", "Core also bundles Instagram Plus, WhatsApp Plus and Facebook Plus", "Premium adds the most room to create with Meta AI (launched 2026-09-15)"],
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
    "Muse Video still has no public API price -- only Muse Image is on the Meta Model API ($0.01/image)",
    "Arena #2 (image) / #3 (video) means it trails the current leaders -- it's excellent, not the outright best in either category on launch day",
    "Rollout is uneven and region-gated (Instagram Stories US-only, WhatsApp 'limited countries,' Facebook 'coming soon') -- availability depends heavily on where you are",
  ],
  knownIssues: [
    {
      description: "API + SUBSCRIPTIONS (2026-08-25 and 2026-09-15): **Muse Image is on the Meta Model API at $0.01 per image** (2026-08-25) -- a reasoning model that plans layout before drawing, with anchored composition (a small set of reference images keeps character, style and setting consistent across a series) and multi-part reasoning edits; its built-in web and image search is part of the per-image price, and images that fail or are removed by safety filtering are not billed. On 2026-09-15 Meta launched **Meta One** subscriptions: Core ($7.99/mo) and Premium ($19.99/mo) bundles include more image and video generation with Meta AI powered by Muse models; Meta AI stays free for everyday use.",
      source: "dev.meta.ai/resources/blog/build-with-muse-Image, dev.meta.ai/docs/pricing-rate-limits, about.fb.com/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/",
      date: "2026-10-17",
    },
    {
      description: "FEATURE PULLED AFTER BACKLASH (~2026-07-10): Meta discontinued the Instagram feature that let users **generate AI images using photos from other people's public Instagram accounts**, days after it launched with the Muse rollout. The default was automatic opt-in, which drew immediate criticism from entertainment-industry figures and SAG-AFTRA ('Anything other than a clear and conspicuous opt-in for these types of uses of Instagram users' images is unacceptable'). Meta's statement: 'We've heard the feedback that this feature missed the mark, so it's no longer available.' IMPORTANT SCOPE: this kills only the public-photos remix feature -- **the Muse Image model itself remains live** in the Meta AI app, Instagram Stories, and WhatsApp. Worth knowing as a consent/provenance signal when evaluating Meta's media tools",
      source: "Reuters (2026-07-10), Meta statement, SAG-AFTRA statement, Benzinga, Medianama",
      date: "2026-07-10",
    },
    {
      description: "LAUNCH (2026-07-07): Meta Superintelligence Labs (led by Alexandr Wang) launched its first media-generation models. **Muse Image is generally available** across the Meta AI app, meta.ai, Instagram Stories (US), and WhatsApp (limited countries), coming soon to Facebook -- capabilities include instruction-faithful editing, multi-reference composition, tool use (coding + web search), self-refinement, and test-time compute scaling. It ranks #2 on Arena for text-to-image, single-image editing, and multi-image editing (as of 2026-07-05). **Muse Video is in preview** ('exceptional visual fidelity with native audio support,' Arena #3 for text-to-video), coming soon to creators and Meta AI. Images carry a hidden Content Seal provenance watermark. No pricing, benchmarks beyond Arena placement, or public API were disclosed at launch",
      source: "Meta AI blog (ai.meta.com/blog/introducing-muse-image-muse-video-msl/), Meta newsroom (about.fb.com), Reuters, CNBC",
      date: "2026-07-07",
    },
  ],
  bestFor: "Anyone already in Meta's apps (Instagram, WhatsApp, Meta AI) who wants free, high-quality image generation and editing with strong instruction-following -- especially for social content where the tool lives right where you post.",
  notFor: "Developers who need a video API (only Muse Image is on the Meta Model API), teams that need production video today (Muse Video is preview-only), or anyone outside the launch regions. For a public API or top-of-Arena fidelity, use Nano Banana 2 or a dedicated provider.",
  verdict: "Meta Muse is a serious debut: a frontier lab's first image model landing at #2 on Arena across text-to-image and both editing tracks, free, and embedded directly in the apps where billions of people already share photos. The instruction-following and multi-reference composition are the features that make it useful beyond novelty, and shipping Content Seal provenance from day one is the right call. The caveats are real -- Muse Video is preview-only and has no API price (Muse Image is on the Meta Model API at a flat cent per image), and the rollout is region-gated -- so treat this as an excellent in-app consumer tool today rather than a production or developer platform. If you live in Instagram/WhatsApp, it's an easy default; if you need an API or the outright quality ceiling, look at Nano Banana 2.",

  lastReviewedDate: "2026-10-17",
  dataSources: [
    { name: "Meta AI Developers: Build with Muse Image on Meta Model API (2026-08-25)", url: "https://dev.meta.ai/resources/blog/build-with-muse-Image", dateAccessed: "2026-10-17" },
    { name: "Meta Model API: Pricing and rate limits", url: "https://dev.meta.ai/docs/pricing-rate-limits", dateAccessed: "2026-10-17" },
    { name: "Meta Newsroom: Introducing Meta One (2026-09-15)", url: "https://about.fb.com/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/", dateAccessed: "2026-10-17" },
    { name: "Reuters (via AOL): Meta discontinues AI image feature days after launch (2026-07-10)", url: "https://www.aol.com/articles/meta-discontinues-ai-image-feature-233135000.html", dateAccessed: "2026-07-18" },
    { name: "Meta AI blog: Introducing Muse Image + Muse Video (2026-07-07)", url: "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/", dateAccessed: "2026-07-07" },
    { name: "Meta newsroom: Introducing Muse Image", url: "https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/", dateAccessed: "2026-07-07" },
    { name: "Reuters: Meta expands generative AI tools with Muse Image rollout", url: "https://www.reuters.com/technology/meta-expands-generative-ai-tools-with-muse-image-rollout-2026-07-07/", dateAccessed: "2026-07-07" },
    { name: "CNBC: Meta AI Muse Image", url: "https://www.cnbc.com/2026/07/07/meta-ai-muse-image.html", dateAccessed: "2026-07-07" },
  ],
  affiliateUrl: "https://ai.meta.com/",
  status: "active",
  metaTitle: "Meta Muse Review (2026): Muse Image + Muse Video, Tested",
  metaDescription: "Meta Muse review. Muse Image (July 7, 2026; Arena #2 text-to-image) is now on the Meta Model API at $0.01 per image (Aug 25) and in Meta One Core/Premium bundles; Muse Video in preview. Content Seal watermarking, capabilities, trade-offs.",
};
