import { ToolReview } from "@/lib/types";

export const maiImage2: ToolReview = {
  slug: "mai-image-2",
  name: "Microsoft MAI-Image-2.5",
  tagline: "Microsoft's in-house image model -- MAI-Image-2.5 launched 2026-06-02 at Build (#2 image editing, #3 text-to-image on Arena, surpassing Nano Banana Pro's Arena score; +75 overall vs MAI-Image-2). Live in PowerPoint + OneDrive, on Azure Foundry, MAI Playground, and OpenRouter. Ultra-efficient MAI-Image-2.5-Flash rolling out next. Original MAI-Image-2 shipped 2026-04-02",
  category: "ai-image-generators",
  url: "https://ai.azure.com/catalog/models/MAI-Image-2",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 8.5,
    value: 7.5,
    features: 7,
    overall: 7.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "MAI-Image-2.5 (Azure Foundry / OpenRouter, launched 2026-06-02)",
      price: "$5 text / $8 image-in / $47 image-out",
      period: "per 1M tokens",
      features: [
        "Text input: $5/1M tokens",
        "Image input: $8/1M tokens",
        "Image output: $47/1M tokens",
        "#2 image editing + #3 text-to-image on Arena; surpasses Nano Banana Pro's Arena score",
      ],
    },
    {
      plan: "MAI-Image-2.5-Flash (rolling out next)",
      price: "$1.75 text / $1.75 image-in / $19.50 image-out",
      period: "per 1M tokens",
      features: [
        "Ultra-efficient variant of MAI-Image-2.5",
        "~2.4x cheaper image output than full 2.5",
        "For high-volume / latency-sensitive workloads",
        "Announced 2026-06-02, rolling out soon",
      ],
    },
    {
      plan: "MAI-Image-2 (original, 2026-04-02) + Efficient variant",
      price: "$5 input / $33 output per 1M",
      features: [
        "Debuted #3 on Arena.ai image families at launch",
        "MAI-Image-2-Efficient (2026-04-14): 22% faster, 4x more compute-efficient",
        "Global standard deployment in US + West Europe + Sweden Central + South India",
      ],
    },
    {
      plan: "Bundled (Copilot / Bing Image Creator / PowerPoint)",
      price: "Included",
      features: [
        "Existing Microsoft 365 Copilot subscriptions use MAI-Image-2 under the hood",
        "Bing Image Creator is the consumer-facing surface",
        "No separate pricing or config required for existing Microsoft customers",
      ],
    },
  ],

  pros: [
    "Debuted #3 on the Arena.ai image model families leaderboard at launch -- a genuinely competitive result against Nano Banana 2, Midjourney, and Flux without Microsoft having shipped an image model before 2026",
    "32K-token text input means richer prompts than Nano Banana 2's standard input window -- good for detailed commercial design briefs and multi-element compositions",
    "Azure Foundry native -- Microsoft enterprise customers get a first-party image option without an OpenAI dependency, same pattern as MAI-Voice-1 and MAI-Transcribe-1",
    "MAI-Image-2-Efficient (2026-04-14 variant) is 22% faster and 4x more efficient -- makes high-volume use cases (batch ad creative, programmatic imagery) materially cheaper without changing the architecture",
  ],
  cons: [
    "Photorealism-first diffusion approach. Nano Banana 2 still wins on text-in-image rendering. Midjourney still wins on stylized artistic output. Flux still wins on fine-grained open-source control",
    "Not yet available as a consumer web tool -- Bing Image Creator is the closest consumer surface but it has its own UX constraints and limits",
    "Azure Foundry token-based pricing ($33/M image output tokens) requires computing effective per-image cost at your resolution. Comparing directly to Nano Banana 2's $0.067/image at 1K is not one-to-one",
    "Microsoft has not yet shipped an equivalent of Nano Banana 2's multi-image reference mode, which is the most-requested feature for brand-consistent commercial work",
  ],
  knownIssues: [
    {
      description: "VERSION BUMP (2026-06-02, Microsoft Build): MAI-Image-2.5 launched as part of the 'seven new MAI models' wave. Vendor-published Arena results: #2 for image editing and #3 for text-to-image, with an overall Arena score 'surpassing Nano Banana Pro' and +75 points over MAI-Image-2 (text rendering +107, cartoon/anime/fantasy +90). New capabilities: advanced visual reasoning for scene understanding, fine-grained localized edit control, and face/identity consistency preservation across edits. Now live in PowerPoint and OneDrive (presentation visuals + photo editing), on Azure Foundry, MAI Playground, and via OpenRouter. Pricing: $5/1M text, $8/1M image-in, $47/1M image-out. An ultra-efficient MAI-Image-2.5-Flash ($1.75/$1.75/$19.50) is rolling out next.",
      source: "Microsoft AI (microsoft.ai/news/introducing-mai-image-2-5/, microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/)",
      date: "2026-06-02",
    },
    {
      description: "Public preview on Azure Foundry -- availability is region-dependent. Global Standard deployment covers US + West Europe + Sweden Central + South India at launch. Other regions need to fall back to nearest available",
      source: "Microsoft Foundry catalog, Microsoft AI blog",
      date: "2026-04",
    },
    {
      description: "Model card dated 2026-03-18 internally, publicly announced 2026-04-02 -- Microsoft has been running the model internally for several weeks before opening public preview, which explains the scale of Copilot/Bing integration at launch",
      source: "Microsoft model card PDF",
      date: "2026-04",
    },
  ],
  bestFor: "Microsoft shops already on Azure or M365 Copilot who need a first-party image model without an OpenAI dependency. Also good for any high-volume programmatic image workflow (ad creative, product photography variations) where MAI-Image-2-Efficient's 4x cost efficiency materially changes the economics.",
  notFor: "Text-heavy commercial design (use Nano Banana 2). Stylized artistic work (use Midjourney). Open-weight self-hosting requirements (use FLUX.2 [klein]). Consumer creators who want a simple web UI -- the Foundry workflow is developer-facing.",
  verdict: "MAI-Image-2.5 (2026-06-02) is the version bump that closes the gap. Where MAI-Image-2 debuted #3 on Arena as a surprise, 2.5 now ranks #2 for image editing and #3 for text-to-image, with an overall Arena score Microsoft says surpasses Nano Banana Pro -- and the +107-point text-rendering jump directly targets the one area where Nano Banana used to win. The new fine-grained localized editing and face/identity consistency make it genuinely competitive for commercial work, and being live in PowerPoint + OneDrive means most Microsoft 365 users already have it. For Azure customers this is now a first-tier image option, not just a no-OpenAI-dependency fallback. Midjourney still wins on stylized art and Flux on open-weight control, but the gap is much smaller than it was in April. Watch for the cheaper MAI-Image-2.5-Flash to land for high-volume use.",

  lastReviewedDate: "2026-06-02",
  dataSources: [
    { name: "Microsoft AI: Introducing MAI-Image-2.5 (2026-06-02)", url: "https://microsoft.ai/news/introducing-mai-image-2-5/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: Launching seven new MAI models (2026-06-02)", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "Microsoft Foundry model catalog: MAI-Image-2", url: "https://ai.azure.com/catalog/models/MAI-Image-2", dateAccessed: "2026-04-17" },
    { name: "Microsoft Community Hub: MAI-Image-2-Efficient", url: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-mai-image-2-efficient-faster-more-efficient-image-generation/4510918", dateAccessed: "2026-04-17" },
    { name: "Microsoft Learn: Foundry Models docs", url: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-mai", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://ai.azure.com/catalog/models/MAI-Image-2",
  status: "active",
  metaTitle: "MAI-Image-2.5 Review 2026: Microsoft's Image Model Tops Nano Banana Pro on Arena",
  metaDescription: "MAI-Image-2.5 review. Microsoft's image model (Build, June 2 2026). #2 image editing / #3 text-to-image on Arena, surpasses Nano Banana Pro. Live in PowerPoint + OneDrive. Foundry $5/$8/$47 per 1M. Flash variant coming.",
};
