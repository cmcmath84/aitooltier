import { ToolReview } from "@/lib/types";

export const dalle: ToolReview = {
  slug: "dall-e",
  name: "DALL-E (Shut Down)",
  tagline: "**Nov 2026: the migration targets moved again -- gpt-image-1 was shut down on 2026-10-23, and gpt-image-1.5 and gpt-image-1-mini (which this page used to recommend) are deprecated with removal on 2026-12-01; since 2026-11-05 OpenAI's deprecations table names the new gpt-image-2.6-sunburst / gpt-image-2.6-flare (released 2026-11-04) as the replacement, where it previously named the 2.5 pair.** OpenAI's DALL-E 2 and DALL-E 3 -- SHUT DOWN. Both APIs were retired on 2026-05-12. Existing integrations now fail; the GPT Image request shape differs (not a drop-in swap). Tier-list alternatives: Nano Banana 2, Midjourney, FLUX.2 [klein], Ideogram",
  category: "ai-image-generators",
  url: "https://openai.com/dall-e-3",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 1,
    features: 3,
    overall: 5.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "DEPRECATED",
      price: "N/A",
      features: [
        "OpenAI notified API developers on 2025-11-14",
        "DALL-E 3 removed from ChatGPT December 2025 (replaced by native GPT Image inside GPT-5.x)",
        "DALL-E 2 + DALL-E 3 API both shut down 2026-05-12",
        "Deprecation reminder posted 2026-04-09 by OpenAI",
        "Follow-on: gpt-image-1 shut down 2026-10-23; gpt-image-1.5, gpt-image-1-mini and chatgpt-image-latest deprecated 2026-06-02 with removal 2026-12-01",
      ],
    },
    {
      plan: "Alternatives (recommended)",
      price: "$0 - $249.99",
      period: "month",
      features: [
        "ChatGPT Images (inside ChatGPT) -- OpenAI's consumer replacement; the archived DALL-E 3 page now points to ChatGPT Images 2.5",
        "API: gpt-image-2.5 or gpt-image-2.6 (Sunburst or Flare) -- $8 input / $30 output per 1M image tokens",
        "Nano Banana 2 -- best text-in-image (see /tools/nano-banana)",
        "Midjourney -- best artistic quality (see /tools/midjourney)",
        "FLUX.2 [klein] -- best open-weight, free to self-host (see /tools/flux)",
        "Ideogram -- strong text rendering (see /tools/ideogram)",
      ],
    },
  ],

  pros: [
    "Was the default mainstream AI image generator through 2024-2025 -- the ChatGPT integration set the UX bar for everyday access",
    "DALL-E 3 introduced best-in-class text rendering in images (mostly-correct spelling) in its era -- a capability competitors took a full year to match",
    "Research contributions (diffusion scaling, alignment techniques, prompt understanding) shaped the entire image-generation field through 2024",
    "Seamless in-ChatGPT integration while it lasted -- you could generate images from inside a chat with no separate tool or account",
  ],
  cons: [
    "DEPRECATED -- DALL-E 2 and DALL-E 3 APIs both sunset May 12, 2026. DALL-E 3 was already pulled from the consumer ChatGPT product in December 2025 in favor of GPT Image native multimodal generation",
    "Image quality lagged Midjourney on artistic styles and Nano Banana 2 on text-heavy commercial work during the product's last 12 months",
    "OpenAI replaced standalone DALL-E with the GPT Image line, which keeps turning over itself: GPT Image 2 (2026-04-21), GPT Image 2.5 Sunburst / Flare (2026-09-08), GPT Image 2.6 Sunburst / Flare (2026-11-04) -- the DALL-E deprecation was telegraphed well in advance",
    "API users had to migrate before 2026-05-12 -- existing DALL-E integrations now fail hard, and anyone who moved to gpt-image-1.5 or gpt-image-1-mini has to migrate again before those are removed on 2026-12-01",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-05): from 2026-05-13 this page said 'Migration target per OpenAI is gpt-image-1.5 / gpt-image-1-mini' and attributed it to OpenAI's deprecations page. That page, and OpenAI's 2026-05-12 changelog entry, actually list the DALL-E replacements as '`gpt-image-2`, `gpt-image-1`, or `gpt-image-1-mini`'. The gpt-image-1.5 wording came from a 2026-04-09 community-forum reminder post ('explore gpt-image-1.5 or gpt-image-1- mini'). GPT Image 2 had been released on 2026-04-21, before our May review. Also removed: our claim that the 6-month notice window was the longest OpenAI had given for an image API -- the deprecations page states a standard minimum of 'At least 6 months' for generally available models.",
      source: "OpenAI deprecations page + API changelog (developers.openai.com/api/docs/deprecations, developers.openai.com/api/docs/changelog), community.openai.com/t/1378754 (vendor-primary)",
      date: "2026-11-05",
    },
    {
      description: "GPT IMAGE 2.6 RELEASED -- THE CURRENT DALL-E MIGRATION TARGET (2026-11-04, vendor-primary): OpenAI's API changelog for Nov 4 lists GPT-Image-2.6 Sunburst and GPT-Image-2.6 Flare 'for image generation and editing, with adjustable complexity, SVG generation, and animated GIF generation', plus markup-guided editing for supported GPT Image 2.5 and 2.6 models. API pricing matches GPT Image 2 and 2.5: $8.00 input / $30.00 output / $2.00 cached input per 1M image tokens (standard tier). GPT Image 2.5 Sunburst and Flare shipped on 2026-09-08 ('Use Sunburst for workflows where editing precision matters most, or Flare for fast, high-quality everyday image generation'), and the image generation guide's examples still use 2.5. For consumers, OpenAI's archived DALL-E 3 page now ends 'Explore ChatGPT Images 2.5.'",
      source: "OpenAI API changelog (developers.openai.com/api/docs/changelog), API pricing (developers.openai.com/api/docs/pricing), image generation guide, openai.com/index/dall-e-3/ (vendor-primary)",
      date: "2026-11-04",
    },
    {
      description: "GPT-IMAGE-1 SHUT DOWN (2026-10-23, vendor-primary): OpenAI's image generation guide: '`gpt-image-1` was shut down on October 23, 2026.' It was part of the 2026-04-22 legacy-snapshot batch, and OpenAI's recommended replacement is gpt-image-2.5-sunburst or gpt-image-2.5-flare. One of the three DALL-E replacements OpenAI listed in May is therefore already gone.",
      source: "OpenAI image generation guide + deprecations page (developers.openai.com/api/docs), vendor-primary",
      date: "2026-10-23",
    },
    {
      description: "GPT IMAGE 1.5 AND 1-MINI DEPRECATED, REMOVAL 2026-12-01 (announced 2026-06-02, vendor-primary): OpenAI's deprecations page: 'On June 2, 2026, we notified developers using older GPT Image models of their deprecation and removal from the API on December 1, 2026.' Affected: gpt-image-1-mini, gpt-image-1.5 (gpt-image-1.5-2025-12-16) and chatgpt-image-latest; the recommended replacement for each is gpt-image-2.5-sunburst or gpt-image-2.5-flare. Anyone who followed this page's earlier advice and moved DALL-E traffic to gpt-image-1.5 or gpt-image-1-mini must migrate again.",
      source: "OpenAI API deprecations page (developers.openai.com/api/docs/deprecations), vendor-primary",
      date: "2026-06-02",
    },
    {
      description: "DALL-E 2 and DALL-E 3 APIs were SHUT DOWN on 2026-05-12. OpenAI's deprecations page now lists both `dall-e-2` and `dall-e-3` past their retirement date. API calls to either endpoint now fail. No extension was granted. OpenAI's deprecations page lists the replacements as gpt-image-2, gpt-image-1, or gpt-image-1-mini (gpt-image-1 has since been shut down and gpt-image-1-mini is itself deprecated -- see the newer entries above); request shape differs (not a drop-in swap, response format and parameters changed). DALL-E 3 was already removed from the consumer ChatGPT product in December 2025 in favor of GPT Image native multimodal. This closes out the first wave of standalone AI image APIs.",
      source: "OpenAI API deprecations page (developers.openai.com/api/docs/deprecations)",
      date: "2026-05-12",
    },
    {
      description: "Pre-shutdown timeline: OpenAI notified API developers 2025-11-14, posted a reminder 2026-04-09, and stuck to the 2026-05-12 retirement date. Six months matches OpenAI's stated minimum notice for generally available models ('At least 6 months').",
      source: "OpenAI Community / Developer Deprecations page",
      date: "2026-04",
    },
    {
      description: "During product life: content filter regularly blocked non-offensive prompts (especially involving people), sending legitimate commercial users to Midjourney or Flux",
      source: "Reddit r/ChatGPT",
      date: "2026-03",
    },
  ],
  bestFor: "Historical context only. If you still have a DALL-E integration, it is failing now -- migrate to OpenAI's gpt-image-2.5 or gpt-image-2.6 (Sunburst for editing precision, Flare for fast everyday generation), ChatGPT Images for consumer use, Nano Banana 2 (best text-in-image), Midjourney (best artistic), FLUX.2 [klein] (best open-weight), or Ideogram (strong text). Do not migrate to gpt-image-1.5 or gpt-image-1-mini -- OpenAI removes both on 2026-12-01.",
  notFor: "Any active production workload. The endpoints are dead. Existing API users have been forced to migrate; there is no path back.",
  verdict: "DALL-E's shutdown on 2026-05-12 marks the end of the first wave of standalone AI image APIs. OpenAI quietly removed DALL-E 3 from ChatGPT in December 2025, moved image generation to its GPT Image models, and ended both DALL-E 2 and DALL-E 3 APIs on the scheduled date. For developers caught with live DALL-E integrations, the in-ecosystem path is now gpt-image-2.5 or gpt-image-2.6 (Sunburst or Flare) -- not gpt-image-1.5 / gpt-image-1-mini, which OpenAI removes on 2026-12-01, and not gpt-image-1, which was shut down on 2026-10-23. Nano Banana 2 (Google) and FLUX.2 [klein] (Black Forest Labs) remain better on specific axes -- text-in-image and open-weight self-hosting respectively. For most consumer use, ChatGPT Images inside ChatGPT is how OpenAI wants you to generate images.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "OpenAI deprecations (Dec 1, 2026 image removals now point to gpt-image-2.6-sunburst / -flare)", url: "https://platform.openai.com/docs/deprecations", dateAccessed: "2026-11-05" },
    { name: "OpenAI API changelog (GPT Image 2 / 2.5 / 2.6 releases)", url: "https://developers.openai.com/api/docs/changelog", dateAccessed: "2026-11-05" },
    { name: "OpenAI API pricing (image generation models)", url: "https://developers.openai.com/api/docs/pricing", dateAccessed: "2026-11-05" },
    { name: "OpenAI image generation guide", url: "https://developers.openai.com/api/docs/guides/image-generation", dateAccessed: "2026-11-05" },
    { name: "OpenAI: Introducing ChatGPT Images 2.5 (2026-09-08)", url: "https://openai.com/index/introducing-chatgpt-images-2-5/", dateAccessed: "2026-11-05" },
    { name: "OpenAI API deprecations page", url: "https://developers.openai.com/api/docs/deprecations", dateAccessed: "2026-11-05" },
    { name: "OpenAI Community: DALL-E deprecation reminder", url: "https://community.openai.com/t/deprecation-reminder-dall-e-will-be-shut-down-on-may-12-2026/1378754", dateAccessed: "2026-11-05" },
    { name: "OpenAI DALL-E 3 product page (archival; redirects to openai.com/index/dall-e-3/)", url: "https://openai.com/index/dall-e-3/", dateAccessed: "2026-11-05" },
    { name: "Hands-on comparison: DALL-E 3 vs Nano Banana 2 vs FLUX.2 [klein]", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openai.com/dall-e-3",
  status: "deprecated",
  metaTitle: "DALL-E Shutdown Complete (May 12 2026): APIs Retired + Best Alternatives",
  metaDescription: "DALL-E shutdown complete. OpenAI retired DALL-E 2 + DALL-E 3 APIs on 2026-05-12. Migrate to gpt-image-2.5 / 2.6 (gpt-image-1.5 and 1-mini go on 2026-12-01), Nano Banana 2, Midjourney, FLUX.2 [klein], Ideogram.",
};
