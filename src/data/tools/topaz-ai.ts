import { ToolReview } from "@/lib/types";

export const topazAi: ToolReview = {
  slug: "topaz-ai",
  name: "Topaz Labs",
  tagline: "**Now an Adobe company: Adobe completed its acquisition of Topaz Labs on Sept 23, 2026. Topaz keeps its brand and standalone apps, and its enhancement models are available in Adobe Firefly and Photoshop.** Desktop AI suite for photo and video enhancement -- upscaling, denoising, and sharpening that actually works",
  category: "ai-photo-editing",
  url: "https://www.topazlabs.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 5,
    features: 8,
    overall: 7.3,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Topaz Photo",
      price: "$199",
      period: "year",
      features: ["$39/mo month-to-month, or $25/mo with annual commitment", "Sharpen, denoise, upscale photos", "Unlimited local rendering and unlimited cloud image rendering", "Limited commercial use (orgs under $1M USD annual revenue)", "Sale: $169 for the first year"],
    },
    {
      plan: "Topaz Video",
      price: "$299",
      period: "year",
      features: ["$59/mo month-to-month, or $39/mo with annual commitment", "Video upscaling, frame interpolation, stabilization, SDR to HDR", "Unlimited local rendering", "25 monthly video cloud credits", "Sale: $254 for the first year"],
    },
    {
      plan: "Topaz Gigapixel",
      price: "$149",
      period: "year",
      features: ["$29/mo month-to-month, or $19/mo with annual commitment", "Single-purpose upscaler", "Local GPU processing", "Sale: $127 for the first year"],
    },
    {
      plan: "Topaz Studio (all apps)",
      price: "$499",
      period: "year",
      features: ["Topaz Video, Topaz Photo, Topaz Gigapixel, Topaz for Mobile, Topaz for Web", "Unlimited local rendering and unlimited cloud image rendering", "300 monthly cloud video credits (expire monthly)", "32MP cloud export limit on Web products", "Black Friday sale: $299 for the first year, $499/yr after that"],
    },
    {
      plan: "Topaz Studio Pro",
      price: "$799",
      period: "year",
      features: ["All the apps with Pro licenses and pro-exclusive models", "600 monthly cloud video credits", "256MP cloud export limit", "Full commercial use, seat management", "Sale: $499 for the first year"],
    },
    {
      plan: "Topaz for Web",
      price: "$19",
      period: "month",
      features: ["Browser-based: Image $19/mo, Video $29/mo (200 monthly cloud video credits), Pro $59/mo (400 credits, full commercial use)", "Includes Topaz for Mobile - Image"],
    },
  ],

  pros: [
    "Output quality is genuinely best-in-class for photo upscaling and noise reduction -- results speak for themselves",
    "Processes locally on your GPU, so your images never leave your machine -- important for client work",
    "Lightroom and Photoshop plugins integrate into existing photographer workflows seamlessly",
    "Video AI upscaling is one of the few tools that can make old footage look modern",
  ],
  cons: [
    "Switched from one-time purchase to subscription in late 2025 -- $149-499/year for the personal plans is a tough pill for hobbyists, and Pro licences run $499-799/year",
    "Requires a decent GPU to run at reasonable speed -- older machines will struggle badly",
    "Software is notoriously buggy -- regressions reappear across releases and updates frequently break things",
    "Personal plans carry a commercial-use cap (organisations under $1M USD annual revenue) and cloud video credits expire monthly; larger shops are pushed to the Pro tiers",
  ],
  knownIssues: [
    {
      description: "ADOBE ACQUISITION COMPLETED (2026-09-23): Adobe announced it has completed its acquisition of Topaz Labs. Per Adobe: 'Topaz Labs will continue as a standalone brand', its apps and models 'will continue to be available as standalone products', and Topaz technology is available in Adobe Firefly and Photoshop for upscaling and enhancement. CEO Eric Yang joins Adobe's Digital Video and Audio team. Supersedes the June entry below, which described the deal as pending and predicted consolidation -- Adobe's stated plan is to keep the standalone apps, though pricing after the deal is Adobe's to set",
      source: "Adobe blog (blog.adobe.com/en/publish/2026/09/23/adobe-completes-acquisition-of-topaz-labs)",
      date: "2026-09-23",
    },
    {
      description: "CORRECTION (2026-11-11): pricing re-read from topazlabs.com/pricing. Gigapixel was listed at $99/year; the page shows **$149/yr** ($127 first-year sale). The apps are now named Topaz Photo, Topaz Video and Topaz Gigapixel (no 'AI' suffix); Photo $199/yr, Video $299/yr and Studio $499/yr were confirmed, and a **Topaz Studio Pro** tier ($799/yr) plus browser-based **Topaz for Web** plans ($19-59/mo) and Topaz for Mobile now exist -- so the old 'no mobile or web option' con was removed. Prices marked SALE on the page are first-year Black Friday rates, not list prices",
      source: "Topaz Labs pricing page (topazlabs.com/pricing, fetched 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "ACQUISITION ANNOUNCED (2026-06-25; completed 2026-09-23, see above): **Adobe is acquiring Topaz Labs.** Adobe plans to fold Topaz's image/video enhancement tech (upscaling, denoising, sharpening) into Firefly, Photoshop, and Premiere; the deal is expected to close in H2 2026. Near-term the standalone Photo AI / Video AI / Gigapixel apps continue, but buyers weighing a multi-year subscription should factor in probable product consolidation into Adobe's Creative Cloud stack (and Adobe's own pricing/subscription posture) once the deal closes. Watch for roadmap clarity post-close.",
      source: "TechCrunch (techcrunch.com/2026/06/25/adobe-acquires-image-and-video-enhancement-tool-maker-topaz-labs/)",
      date: "2026-06-25",
    },
    {
      description: "Perpetual licenses killed in October 2025 -- longtime users who paid $299 once now face $199-399/year subscriptions, generating massive backlash",
      source: "DPReview Forums",
      date: "2025-10",
    },
    {
      description: "Persistent bugs that get fixed and then reappear in subsequent releases -- quality control is a recurring complaint",
      source: "Topaz Community Forums",
      date: "2026-02",
    },
    {
      description: "Some users report license/renewal confusion after the subscription transition -- unable to renew or access software they paid for",
      source: "Medium",
      date: "2026-01",
    },
  ],
  bestFor: "Professional photographers and videographers who need the absolute best AI enhancement quality and process locally. If you shoot in low light or need to upscale old footage, nothing else comes close.",
  notFor: "Hobbyists who can't justify $150-200+/year for photo enhancement, or anyone without a dedicated GPU. Free alternatives like Upscayl handle basic upscaling fine.",
  verdict: "Topaz still produces the best AI-enhanced images and video on the market -- that hasn't changed. What has changed is the pricing model. The shift from a one-time $299 purchase to a $149-499/year subscription alienated a huge chunk of their user base, and the persistent bug issues don't help. Since September 23, 2026 Topaz is owned by Adobe, which says the standalone apps will continue. If you're a working professional who bills clients, the cost is easy to justify. Everyone else should think hard about whether the quality bump over free alternatives is worth the annual fee.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Topaz Labs pricing page", url: "https://www.topazlabs.com/pricing", dateAccessed: "2026-11-11" },
    { name: "Adobe blog: Adobe completes acquisition of Topaz Labs (2026-09-23)", url: "https://blog.adobe.com/en/publish/2026/09/23/adobe-completes-acquisition-of-topaz-labs", dateAccessed: "2026-11-11" },
    { name: "TechCrunch: Adobe acquires Topaz Labs (2026-06-25)", url: "https://techcrunch.com/2026/06/25/adobe-acquires-image-and-video-enhancement-tool-maker-topaz-labs/", dateAccessed: "2026-07-04" },
    { name: "Topaz Labs official site", dateAccessed: "2026-04-02" },
    { name: "DPReview Forums", dateAccessed: "2026-04-02" },
    { name: "Topaz Community Forums", dateAccessed: "2026-04-02" },
    { name: "CG Channel", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.topazlabs.com",
  status: "active",
  metaTitle: "Topaz Labs Review 2026: AI Enhancement, Now Owned by Adobe",
  metaDescription: "Honest Topaz Labs review. Best-in-class AI upscaling and denoising, now an Adobe company (deal closed Sept 23, 2026). Photo $199/yr, Video $299/yr, Studio $499/yr.",
};
