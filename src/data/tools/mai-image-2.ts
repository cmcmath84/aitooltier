import { ToolReview } from "@/lib/types";

export const maiImage2: ToolReview = {
  slug: "mai-image-2",
  name: "Microsoft MAI-Image-2.6",
  tagline: "Microsoft's in-house image model -- **MAI-Image-2.6 launched 2026-08-10: No. 2 on Arena text-to-image (+79 Elo over 2.5, text rendering +91), and as of the 8/18 update No. 3 on Arena image editing, ahead of Google's Nano Banana family and Meta's Muse Image. Currently MAI Playground + Private Preview on Microsoft Foundry -- no public rate card yet.** The prior MAI-Image-2.5 launched 2026-06-02 at Build (#2 image editing, #3 text-to-image on Arena, surpassing Nano Banana Pro's Arena score; +75 overall vs MAI-Image-2). Live in PowerPoint + OneDrive, on Azure Foundry, MAI Playground, and OpenRouter. Ultra-efficient MAI-Image-2.5-Flash now LIVE in Foundry ($1.75/$1.75/$19.50 per 1M). Original MAI-Image-2 shipped 2026-04-02",
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
      plan: "MAI-Image-2.6 (2026-08-10) -- MAI Playground + PRIVATE PREVIEW on Foundry",
      price: "Not published",
      features: [
        "**Microsoft has published NO rate card for 2.6** -- the launch post states only 'available in MAI Playground and in Private Preview on Microsoft Foundry'. Do not assume it inherits 2.5's $5/$8/$47",
        "No. 2 on the Arena text-to-image leaderboard at launch; **+79 Elo over MAI-Image-2.5** overall, with gains in every text-to-image category",
        "**Text rendering +91 Elo** vs 2.5 -- the single largest category gain",
        "Update 2026-08-18: **No. 3 on Arena image editing**, up from No. 5, **+19 points** vs 2.5 -- biggest gains Text Rendering (+43) and Product, Branding & Commercial Design (+38)",
        "Access is gated -- Private Preview means request-based, not self-serve",
      ],
    },
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
      plan: "MAI-Image-2.5-Flash (LIVE)",
      price: "$1.75 text / $1.75 image-in / $19.50 image-out",
      period: "per 1M tokens",
      features: [
        "Ultra-efficient variant of MAI-Image-2.5",
        "~2.4x cheaper image output than full 2.5",
        "For high-volume / latency-sensitive workloads",
        "NOW AVAILABLE in Foundry (vendor post: 'now available to developers in Foundry today', verified 2026-06-09) + OpenRouter",
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
    "Photorealism-first diffusion approach. **The 'Nano Banana wins on text rendering' line no longer holds as of MAI-Image-2.6 (2026-08-10): text rendering gained +91 Elo on text-to-image and +43 on editing, and Microsoft places 2.6 ahead of the Nano Banana family on the Arena editing board.** Midjourney still wins on stylized artistic output. Flux still wins on fine-grained open-source control",
    "Not yet available as a consumer web tool -- Bing Image Creator is the closest consumer surface but it has its own UX constraints and limits",
    "Azure Foundry token-based pricing ($33/M image output tokens) requires computing effective per-image cost at your resolution. Comparing directly to Nano Banana 2's $0.067/image at 1K is not one-to-one",
    "Microsoft has not yet shipped an equivalent of Nano Banana 2's multi-image reference mode, which is the most-requested feature for brand-consistent commercial work",
  ],
  knownIssues: [
    {
      description: "STALENESS CATCH -- MAI-IMAGE-2.6 SHIPPED 2026-08-10 AND THIS PAGE HAD NEVER MENTIONED IT (recorded 2026-08-20, vendor-primary): a ten-day gap that three consecutive sweeps missed, because the vendor is Microsoft AI (microsoft.ai/news) rather than one of the newsrooms enumerated by default. **WHAT LAUNCHED:** MAI-Image-2.6, announced **2026-08-10**, '**ranked second on the Arena text-to-image leaderboard**', improving '**+79 Elo over MAI-Image-2.5 overall, with gains across every Arena text-to-image category**'. **Text rendering alone improves by +91 Elo.** Microsoft's own framing: the result 'firmly establishes MAI-Image ahead of leading models from Meta, Google and xAI'. **THE 2026-08-18 UPDATE TO THE SAME POST:** 2.6 also reached '**No. 3 on Arena's image editing leaderboard, ahead of Google's Nano Banana family and Meta's Muse Image**', a **+19 point gain over 2.5**, climbing **from No. 5 to No. 3**, with its biggest improvements in **Text Rendering (+43)** and **Product, Branding & Commercial Design (+38)**. **A DETAIL WORTH READING CAREFULLY RATHER THAN CELEBRATING:** this page previously described MAI-Image-2.5 as '**#2 image editing**' -- a June snapshot. The 8/18 update reveals 2.5 had **slipped to No. 5 on editing** before 2.6 pulled the family back to No. 3. So the leaderboard position in our old copy had silently decayed, and **2.6 on editing (No. 3) is a recovery to below where 2.5 originally sat, not a new high**. Text-to-image is the genuine improvement: No. 3 to No. 2. **AVAILABILITY IS NARROWER THAN 2.5's:** '**MAI-Image-2.6 is now available in MAI Playground and in Private Preview on Microsoft Foundry**' -- so unlike 2.5 it is **not** generally available on Foundry, and there is no mention of OpenRouter, PowerPoint, OneDrive or Bing Image Creator carrying it. **NO PRICING IS PUBLISHED ANYWHERE IN THE POST** -- treat 2.5's $5/$8/$47 as applying to 2.5 only. **BENCHMARK CAVEAT:** every number here is Arena Elo as reported by Microsoft in its own launch post; Arena is a third-party leaderboard, but the deltas and category breakdowns are Microsoft's presentation of it and no independent write-up is cited",
      source: "Microsoft AI (microsoft.ai/news/mai-image-2-6-launches-at-no-2-on-arena-ahead-of-google-meta-and-xai/, dated August 10, 2026, carrying an 'Updated as of August 18th, 2026' block, fetched 2026-08-20 via curl)",
      date: "2026-08-10",
    },
    {
      description: "VERSION BUMP (2026-06-02, Microsoft Build): MAI-Image-2.5 launched as part of the 'seven new MAI models' wave. Vendor-published Arena results: #2 for image editing and #3 for text-to-image, with an overall Arena score 'surpassing Nano Banana Pro' and +75 points over MAI-Image-2 (text rendering +107, cartoon/anime/fantasy +90). New capabilities: advanced visual reasoning for scene understanding, fine-grained localized edit control, and face/identity consistency preservation across edits. Now live in PowerPoint and OneDrive (presentation visuals + photo editing), on Azure Foundry, MAI Playground, and via OpenRouter. Pricing: $5/1M text, $8/1M image-in, $47/1M image-out. The ultra-efficient MAI-Image-2.5-Flash ($1.75/$1.75/$19.50 per 1M) is NOW LIVE in Foundry alongside it (verified vendor-primary 2026-06-09).",
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
  verdict: "MAI-Image-2.5 (2026-06-02) is the version bump that closes the gap. Where MAI-Image-2 debuted #3 on Arena as a surprise, 2.5 now ranks #2 for image editing and #3 for text-to-image, with an overall Arena score Microsoft says surpasses Nano Banana Pro -- and the +107-point text-rendering jump directly targets the one area where Nano Banana used to win. The new fine-grained localized editing and face/identity consistency make it genuinely competitive for commercial work, and being live in PowerPoint + OneDrive means most Microsoft 365 users already have it. For Azure customers this is now a first-tier image option, not just a no-OpenAI-dependency fallback. Midjourney still wins on stylized art and Flux on open-weight control, but the gap is much smaller than it was in April. The cheaper MAI-Image-2.5-Flash is now live in Foundry for high-volume use.",

  lastReviewedDate: "2026-08-20",
  dataSources: [
    { name: "Microsoft AI: MAI-Image-2.6 launches at No. 2 on Arena, ahead of Google, Meta and xAI (2026-08-10, updated 2026-08-18)", url: "https://microsoft.ai/news/mai-image-2-6-launches-at-no-2-on-arena-ahead-of-google-meta-and-xai/", dateAccessed: "2026-08-20" },
    { name: "Microsoft AI: Introducing MAI-Image-2.5 (2026-06-02)", url: "https://microsoft.ai/news/introducing-mai-image-2-5/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: Launching seven new MAI models (2026-06-02)", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/", dateAccessed: "2026-06-02" },
    { name: "Microsoft AI: 3 new MAI models in Foundry", url: "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/", dateAccessed: "2026-04-17" },
    { name: "Microsoft Foundry model catalog: MAI-Image-2", url: "https://ai.azure.com/catalog/models/MAI-Image-2", dateAccessed: "2026-04-17" },
    { name: "Microsoft Community Hub: MAI-Image-2-Efficient", url: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-mai-image-2-efficient-faster-more-efficient-image-generation/4510918", dateAccessed: "2026-04-17" },
    { name: "Microsoft Learn: Foundry Models docs", url: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-mai", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://ai.azure.com/catalog/models/MAI-Image-2",
  status: "active",
  metaTitle: "MAI-Image-2.6 Review 2026: No. 2 on Arena Text-to-Image, Ahead of Nano Banana",
  metaDescription: "MAI-Image-2.6 review. Microsoft's image model (August 10, 2026): No. 2 on Arena text-to-image, +79 Elo over 2.5, text rendering +91; No. 3 image editing ahead of Nano Banana and Muse Image. MAI Playground + Foundry private preview, no published pricing. Plus MAI-Image-2.5 rates.",
};
