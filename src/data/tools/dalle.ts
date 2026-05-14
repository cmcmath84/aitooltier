import { ToolReview } from "@/lib/types";

export const dalle: ToolReview = {
  slug: "dall-e",
  name: "DALL-E (Shut Down)",
  tagline: "OpenAI's DALL-E 2 and DALL-E 3 -- SHUT DOWN. Both APIs were retired on 2026-05-12 (yesterday). DALL-E 3 was already removed from ChatGPT in December 2025. Existing integrations now fail; migrate to gpt-image-1.5 / gpt-image-1-mini (request shape differs -- not a drop-in swap). Tier-list alternatives: Nano Banana 2, Midjourney, FLUX.2 [klein], Ideogram",
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
      ],
    },
    {
      plan: "Alternatives (recommended)",
      price: "$0 - $249.99",
      period: "month",
      features: [
        "GPT Image (inside ChatGPT) -- OpenAI's direct replacement, already live",
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
    "OpenAI's strategic pivot is to fold image generation into GPT-5.x (as 'GPT Image 1.5') rather than maintain standalone DALL-E -- the deprecation was telegraphed well in advance",
    "API users must migrate workflows before 2026-05-12 -- after that, existing DALL-E integrations fail hard",
  ],
  knownIssues: [
    {
      description: "DALL-E 2 and DALL-E 3 APIs were SHUT DOWN on 2026-05-12 (yesterday). OpenAI's deprecations page now lists both `dall-e-2` and `dall-e-3` past their retirement date. API calls to either endpoint now fail. No extension was granted. Migration target per OpenAI is gpt-image-1.5 / gpt-image-1-mini -- request shape differs (not a drop-in swap, response format and parameters changed). DALL-E 3 was already removed from the consumer ChatGPT product in December 2025 in favor of GPT Image native multimodal. This closes out the first wave of standalone AI image APIs.",
      source: "OpenAI API deprecations page (developers.openai.com/api/docs/deprecations)",
      date: "2026-05-12",
    },
    {
      description: "Pre-shutdown timeline: OpenAI notified API developers 2025-11-14, posted a reminder 2026-04-09, and stuck to the 2026-05-12 retirement date. The 6-month notice window was the longest OpenAI has given for an image-API sunset to date.",
      source: "OpenAI Community / Developer Deprecations page",
      date: "2026-04",
    },
    {
      description: "During product life: content filter regularly blocked non-offensive prompts (especially involving people), sending legitimate commercial users to Midjourney or Flux",
      source: "Reddit r/ChatGPT",
      date: "2026-03",
    },
  ],
  bestFor: "Historical context only. If you still have a DALL-E integration, it is failing now -- migrate immediately to GPT Image inside ChatGPT (direct replacement), Nano Banana 2 (best text-in-image), Midjourney (best artistic), FLUX.2 [klein] (best open-weight), or Ideogram (strong text).",
  notFor: "Any active production workload. The endpoints are dead. Existing API users have been forced to migrate; there is no path back.",
  verdict: "DALL-E's shutdown on 2026-05-12 marks the end of the first wave of standalone AI image APIs. OpenAI quietly removed DALL-E 3 from ChatGPT in December 2025, folded image generation into GPT-5.x native multimodal as 'GPT Image', and ended both DALL-E 2 and DALL-E 3 APIs on the scheduled date. For developers caught with live DALL-E integrations, the cleanest in-ecosystem path is OpenAI's own gpt-image-1.5 / gpt-image-1-mini endpoints, but Nano Banana 2 (Google) and FLUX.2 [klein] (Black Forest Labs) are legitimately better on specific axes -- text-in-image and open-weight self-hosting respectively. For most consumer use, the in-ChatGPT GPT Image surface is already how OpenAI wants you to generate images.",

  lastReviewedDate: "2026-05-13",
  dataSources: [
    { name: "OpenAI API deprecations page", url: "https://developers.openai.com/api/docs/deprecations", dateAccessed: "2026-05-13" },
    { name: "OpenAI Community: DALL-E deprecation reminder", url: "https://community.openai.com/t/deprecation-reminder-dall-e-will-be-shut-down-on-may-12-2026/1378754", dateAccessed: "2026-04-17" },
    { name: "OpenAI DALL-E 3 product page (archival)", url: "https://openai.com/dall-e-3", dateAccessed: "2026-04-17" },
    { name: "Hands-on comparison: DALL-E 3 vs Nano Banana 2 vs FLUX.2 [klein]", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://openai.com/dall-e-3",
  status: "deprecated",
  metaTitle: "DALL-E Shutdown Complete (May 12 2026): APIs Retired + Best Alternatives",
  metaDescription: "DALL-E shutdown complete. OpenAI retired DALL-E 2 + DALL-E 3 APIs on 2026-05-12. Existing integrations now fail. Migrate to GPT Image, Nano Banana 2, Midjourney, FLUX.2 [klein], Ideogram.",
};
