import { ToolReview } from "@/lib/types";

export const maiImage2: ToolReview = {
  slug: "mai-image-2",
  name: "Microsoft MAI-Image-2",
  tagline: "Microsoft's first in-house diffusion image model -- launched 2026-04-02, debuted #3 on Arena.ai leaderboard for image model families. Public preview on Azure Foundry. Powers Copilot, Bing Image Creator, and PowerPoint. Efficient variant (MAI-Image-2-Efficient) shipped 2026-04-14",
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
      plan: "Azure Foundry API",
      price: "$5 input / $33 output",
      period: "per 1M tokens",
      features: [
        "Text input: $5/1M tokens",
        "Image output: $33/1M tokens",
        "Public preview on Azure Foundry",
        "Global standard deployment in US regions + West Europe + Sweden Central + South India",
      ],
    },
    {
      plan: "MAI-Image-2-Efficient (variant, shipped 2026-04-14)",
      price: "Reduced rates",
      features: [
        "22% faster than MAI-Image-2",
        "4x more compute-efficient",
        "Same architecture, tuned for throughput",
        "Same category availability",
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
  verdict: "MAI-Image-2 is the most surprising entry in Microsoft's 2026-04-02 MAI model release. Debuting #3 on Arena.ai on their first attempt -- against Nano Banana 2, Midjourney, and Flux -- suggests Microsoft's internal imaging research (part of the Inflection / Mustafa Suleyman-era buildout) was further along than publicly known. For Azure customers this is a real alternative to third-party APIs. For everyone else, the three standalone winners (Nano Banana 2, Midjourney, Flux) remain the answer depending on your use case -- but expect Microsoft to catch up on multi-reference and stylization features through Q2/Q3 2026.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "Microsoft Foundry model catalog: MAI-Image-2", url: "https://ai.azure.com/catalog/models/MAI-Image-2", dateAccessed: "2026-04-17" },
    { name: "Microsoft Community Hub: MAI-Image-2-Efficient", url: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-mai-image-2-efficient-faster-more-efficient-image-generation/4510918", dateAccessed: "2026-04-17" },
    { name: "Microsoft Learn: Foundry Models docs", url: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-mai", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://ai.azure.com/catalog/models/MAI-Image-2",
  status: "active",
  metaTitle: "MAI-Image-2 Review 2026: Microsoft's First In-House Image Model",
  metaDescription: "MAI-Image-2 review. Microsoft's diffusion image model (Apr 2 2026). #3 on Arena.ai at launch. Azure Foundry $5/$33 per 1M tokens. Powers Copilot + Bing + PowerPoint. Efficient variant Apr 14.",
};
