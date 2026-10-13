import { ToolReview } from "@/lib/types";

export const nanoBanana: ToolReview = {
  slug: "nano-banana",
  name: "Nano Banana 2.1 (Gemini Nano Banana 2.1, formerly Nano Banana 2)",
  tagline: "**Nano Banana 2.1 went GA on the Gemini API on 2026-10-06 as the update to Nano Banana 2, with better visual quality, prompt adherence, multi-turn character consistency and text rendering, new 1:4 to 8:1 panoramic ratios, and a lower price -- $0.0336 per 1K image versus $0.067 -- while Google is retiring gemini-3.1-flash-image in its favour (no end date yet).** Google's Gemini 3.1 Flash Image model -- the best-in-class text-in-image renderer, now the default across the Gemini app",
  category: "ai-image-generators",
  url: "https://gemini.google.com/",

  scores: {
    easeOfUse: 9.5,
    outputQuality: 9.5,
    value: 8.5,
    features: 8,
    overall: 8.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Gemini Free",
      price: "$0",
      features: [
        "Nano Banana 2 on Gemini app Fast tier",
        "Rate-limited daily generations",
        "Basic multi-reference support",
      ],
    },
    {
      plan: "Google AI Pro",
      price: "$19.99",
      period: "month",
      features: [
        "Gemini Thinking tier with Nano Banana 2",
        "Higher generation limits",
        "Multi-reference up to 6 images",
      ],
    },
    {
      plan: "Google AI Ultra",
      price: "$249.99",
      period: "month",
      features: [
        "Gemini 3.1 Pro with maximum limits",
        "Veo 3.1 video generation included",
        "Project Mariner (10 parallel agentic browser tasks)",
        "30 TB cloud storage, YouTube Premium",
      ],
    },
    {
      plan: "API (Nano Banana 2.1, GA 2026-10-06)",
      price: "$0.0336",
      period: "per 1K image",
      features: [
        "Standard: $0.0336 (1K) / $0.0504 (2K) / $0.113 (4K) per image",
        "Batch: $0.0168 (1K) / $0.0252 (2K) / $0.0567 (4K)",
        "$1.50/1M input (text, image, video), $7.50/1M text and thinking output, $30/1M image output",
        "No free API tier; Search grounding 5,000 free requests/month then $14 per 1,000",
      ],
    },
    {
      plan: "API (Gemini 3.1 Flash Image -- deprecated 2026-10-06)",
      price: "$0.067",
      period: "per 1K image",
      features: [
        "Standard: $0.045 (512px) / $0.067 (1K) / $0.101 (2K) / $0.151 (4K)",
        "Batch: $0.022 (512px) / $0.034 (1K) / $0.050 (2K) / $0.076 (4K)",
        "$0.50/1M input tokens, $3/1M text output, $60/1M image output tokens (rate card checked 2026-10-12)", "Deprecated 2026-10-06 with no shutdown date -- Google says migrate to gemini-nano-banana-2.1",
        "Commercial use rights",
      ],
    },
  ],

  pros: [
    "Text-in-image rendering is genuinely best-in-class -- signs, posters, book covers, infographics, and typography compositions come out readable and correctly spelled in a way no other model nails yet in 2026",
    "Multi-image reference (up to 6 reference images) preserves character identity, style, or product consistency across an entire campaign -- this is the practical feature most agencies were waiting for",
    "Bundled into the existing Gemini app -- if you already have a Google One or Gemini subscription, Nano Banana 2 is a mode toggle rather than a separate tool to learn and pay for",
    "Massive branded search volume for 'Nano Banana' shows Google is explicitly marketing this as a consumer product, not just a model release, which means ongoing investment and rapid iteration",
  ],
  cons: [
    "Confusing branding -- 'Nano Banana' is the nickname, 'Gemini 3.1 Flash Image' is the actual model name, and the Gemini app interface is inconsistent about which one it surfaces to users",
    "Rate limits on the free tier are tight -- iterative prompt design will push you into a paid tier faster than you might expect for a model positioned as 'free'",
    "Loses to Midjourney on purely artistic or stylized generation -- Nano Banana 2 feels clean and literal where Midjourney feels interpretive and atmospheric",
    "API cost still adds up at volume: Nano Banana 2.1 halves the 1K price to $0.0336 but input tokens cost three times Nano Banana 2's ($1.50 vs $0.50 per 1M), so reference-image-heavy edits narrow the saving, and open-weight FLUX models remain cheaper to self-host",
  ],
  knownIssues: [
    {
      description: "NANO BANANA 2.1 IS GA AND NANO BANANA 2 IS DEPRECATED (2026-10-06, vendor-primary): the Gemini API changelog: 'Released Gemini Nano Banana 2.1 (gemini-nano-banana-2.1), the latest high-efficiency image generation and conversational editing model. An update to Nano Banana 2 (gemini-3.1-flash-image), it maintains Flash-level speed and cost efficiency while delivering significant improvements in visual quality, prompt adherence, multi-turn character consistency, text rendering, and wide and panoramic aspect ratio generation (1:4, 4:1, 1:8, 8:1) across 1K, 2K, and 4K resolutions.' Same day: **'The gemini-3.1-flash-image model is deprecated (no shutdown date announced). Migrate to gemini-nano-banana-2.1.'** **Rate card (ai.google.dev pricing, Standard per 1M tokens): $1.50 input (text/image/video), $7.50 text and thinking output, $30 image output = $0.0336 per 1K image, $0.0504 per 2K, $0.113 per 4K (1,120 / 1,680 / 3,780 tokens per image); Batch half ($0.0168 / $0.0252 / $0.0567).** That puts 2.1's 1K image at the same price as Nano Banana 2 Lite and half of Nano Banana 2's $0.067, though its input rate is three times higher. No free API tier. **Corrections made on this page in the same pass (it was last reviewed 2026-07-04):** Nano Banana 2's input rate on the rate card is $0.50 per 1M, not the $0.25 this page carried; the Lite 1K price is listed as $0.0336 (rounded to $0.034 earlier). Google published no blog post for 2.1 in the blog.google feed for 10/06; the Gemini API changelog and model page are the launch record, and this page does not yet confirm which Gemini app tier uses 2.1.",
      source: "Gemini API changelog (ai.google.dev/gemini-api/docs/changelog, 'October 6, 2026' entry) and Gemini API pricing (ai.google.dev/gemini-api/docs/pricing, 'Gemini Nano Banana 2.1' and 'Gemini 3.1 Flash Image' sections) -- both fetched 2026-10-12 via Firecrawl (maxAge 0)",
      date: "2026-10-06",
    },
    {
      description: "NEW LITE VARIANT (2026-06-30): Google shipped **Nano Banana 2 Lite** (`gemini-3.1-flash-lite-image`) -- its 'fastest, most cost-efficient Gemini Image model,' delivering text-to-image in ~4 seconds at **$0.034 per 1K-resolution image** (roughly half the standard gemini-3.1-flash-image 1K rate of $0.067). Google says it 'retains reliable prompt adherence, strong character consistency and legible in-image text rendering' while prioritizing speed for high-volume workflows. Available in AI Studio, the Gemini API, and the Enterprise Agent Platform, and rolling out to consumer surfaces (AI Mode in Search, Gemini app, NotebookLM, Google Photos). For batch/high-volume production this is the new value pick; the full model still wins on peak fidelity.",
      source: "blog.google (blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/)",
      date: "2026-06-30",
    },
    {
      description: "GA + VIDEO-TO-IMAGE (2026-05-28, vendor changelog): **gemini-3.1-flash-image (Nano Banana 2) and gemini-3-pro-image (Nano Banana Pro) hit GA** on the Gemini API. New capability: **video-to-image generation** -- pass a video file (upload or public YouTube URL) as context and generate thumbnails, posters, or infographics from it; works ONLY with gemini-3.1-flash-image, not the Pro model. MIGRATION NOTE (now in effect): the `-preview` model versions (`gemini-3.1-flash-image-preview`, `gemini-3-pro-image-preview`) **shut down 2026-06-25** -- pinned preview ids are now failing; use the GA ids",
      source: "Gemini API changelog (ai.google.dev/gemini-api/docs/changelog -- 2026-05-28 entry) + deprecations",
      date: "2026-05-28",
    },
    {
      description: "Multi-reference mode occasionally blends source images inconsistently when the references are stylistically divergent",
      source: "Reddit r/GeminiAI",
      date: "2026-03",
    },
    {
      description: "Text rendering in non-Latin scripts (Arabic, Chinese, Korean) lags Latin-script quality noticeably, with character shape errors that Latin text rarely shows",
      source: "Google Japan developer forums",
      date: "2026-02",
    },
  ],
  bestFor: "Designers, marketers, and content creators who need readable text in images (social posts, ad creative, book covers, infographics, event flyers) and who are already using or willing to pay for Gemini. If any part of your commercial design work requires typography to look right, Nano Banana 2 is the 2026 leader.",
  notFor: "Pure artistic or stylized image generation -- Midjourney's aesthetic wins there. Also not for anyone deeply in the open-weight camp; FLUX.2 [klein] is free to self-host and almost as good for text-free images with better control.",
  verdict: "Nano Banana 2 earned its viral branded search volume honestly -- it's the best commercial-use image model in 2026 for any workflow that requires readable text or consistent branding across multiple images. Google's decision to roll it into the default Gemini app experience (instead of shipping yet another product) is smart: it puts best-in-class image gen in front of everyone with a Gemini account with zero onboarding. The honest read: for design and marketing work in 2026, Nano Banana 2 is the default answer. For artistic exploration, stick with Midjourney.",

  lastReviewedDate: "2026-10-12",
  dataSources: [
    { name: "Gemini API changelog -- Oct 6, 2026: Nano Banana 2.1 GA, gemini-3.1-flash-image deprecated", url: "https://ai.google.dev/gemini-api/docs/changelog", dateAccessed: "2026-10-12" },
    { name: "Gemini API pricing -- Nano Banana 2.1, Nano Banana 2 and Nano Banana 2 Lite rate cards", url: "https://ai.google.dev/gemini-api/docs/pricing", dateAccessed: "2026-10-12" },
    { name: "Google Blog: Nano Banana 2 Lite + Gemini Omni Flash (2026-06-30)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/", dateAccessed: "2026-07-04" },
    { name: "Google Blog: Nano Banana 2", url: "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/", dateAccessed: "2026-04-16" },
    { name: "Google Cloud: Nano Banana Pro for enterprise", url: "https://cloud.google.com/blog/products/ai-machine-learning/nano-banana-pro-available-for-enterprise", dateAccessed: "2026-04-16" },
    { name: "Gemini API pricing page", dateAccessed: "2026-04-16" },
    { name: "Reddit r/GeminiAI community reports", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing via Gemini app", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://gemini.google.com/",
  status: "active",
  metaTitle: "Nano Banana 2.1 Review 2026: Google's New Gemini Image Model at $0.0336 per Image (Nano Banana 2 Deprecated)",
  metaDescription: "Nano Banana 2.1 review. Google's Gemini Nano Banana 2.1 went GA on Oct 6, 2026: better text rendering, prompt adherence and character consistency, panoramic ratios up to 8:1, and $0.0336 per 1K image (half Nano Banana 2's $0.067). Nano Banana 2 (Gemini 3.1 Flash Image) is deprecated. Gemini app plans, API pricing and Lite variant compared.",
};
