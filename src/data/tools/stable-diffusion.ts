import { ToolReview } from "@/lib/types";

export const stableDiffusion: ToolReview = {
  slug: "stable-diffusion",
  name: "Stable Diffusion",
  tagline: "Open-source AI image generation with unlimited free local use and full customization",
  category: "ai-image-generators",
  url: "https://stability.ai",

  scores: {
    easeOfUse: 4,
    outputQuality: 9,
    value: 10,
    features: 9,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Local (Free)",
      price: "$0",
      features: ["Unlimited generations", "Full model access", "Requires GPU (6GB+ VRAM)"],
    },
    {
      plan: "Stability AI API",
      price: "$0.01-0.05",
      period: "per image",
      features: ["Cloud-based", "No GPU needed", "Multiple models"],
    },
    {
      plan: "Brand Studio (replaced DreamStudio)",
      price: "Free tier + enterprise",
      period: "contact sales for Brand ID models",
      features: ["DreamStudio is RETIRED -- dreamstudio.ai now 301-redirects to brandstudio.com", "Web creative production platform (launched 2026-04-08)", "Enterprise adds Brand Central / Brand ID models, Producer Mode, Curated Model Routing, Precision Inpainting"],
    },
  ],

  pros: [
    "Completely free if you run it locally",
    "Open source -- full control, no restrictions",
    "Massive ecosystem of custom models, LoRAs, and extensions",
    "Best option for developers and technical users",
    "No content filtering (when running locally)",
  ],
  cons: [
    "Steep learning curve for local setup (ComfyUI, Automatic1111)",
    "Needs a decent GPU to run locally -- not laptop-friendly",
    "Official web tooling has pivoted away from hobbyists -- DreamStudio is retired and Brand Studio targets enterprise creative teams",
    "Stability's own image line has been parked on SD 3.5 since late 2024 -- momentum in open image models has moved to FLUX, Qwen-Image and Krea 2",
  ],
  knownIssues: [
    {
      description: "DREAMSTUDIO IS RETIRED -- AND STABILITY IS NOT THE DISTRESSED COMPANY OUR OLDER COPY DESCRIBED (checked 2026-08-03): **dreamstudio.ai now 301-redirects to brandstudio.com** (verified directly this sweep), so the DreamStudio credit packs we previously listed are for a product that no longer exists. The flagship app is now **Brand Studio** (launched 2026-04-08): 'the end-to-end creative production platform powered by your brand', built around **Brand Central** (custom Brand ID models trained on your photography style, colour palette, design motifs, logo placement and composition, plus Campaigns), **Producer Mode** ('Turn prompts into step-by-step production plans'), **Curated Model Routing**, and **Precision Inpainting**. On company health: the 2024-era 'financial instability' framing is stale. Stability's 2026 newsroom shows a functioning, partnership-led business -- EA (2025-10-23), a Universal Music Group strategic alliance (2025-10-30), Warner Music Group (2025-11-19), Stable Image Services on Amazon Bedrock, SOC 2 Type II and SOC 3, WPP investment, James Cameron on the board, and joining the Tech Coalition (2026-02-11) -- with **no layoff, funding-crisis or leadership-exit item anywhere in 2026**. What genuinely changed is direction: Stability is now an enterprise creative-tools and licensed-audio company rather than a consumer image-gen company. Latest model ship is **Stable Audio 3.0 (2026-05-20)**, open-weight and trained on fully licensed data. Licensing: the **Community License is free under $1M annual revenue** (covering the Stable Diffusion 3.5 Suite, SDXL Turbo, Stable Audio 3.0, Stable Fast 3D); above that you need an Enterprise License",
      source: "Stability AI newsroom (stability.ai/news-updates), stability.ai/license, Brand Studio launch post (stability.ai/news-updates/brand-studio-by-stability-ai-creative-production-platform-for-brands); dreamstudio.ai 301 redirect verified 2026-08-03",
      date: "2026-08-03",
    },
    {
      description: "THERE IS NO 'STABLE DIFFUSION 4' (re-checked 2026-08-03, second sweep in a row): the name circulates widely on aggregator sites that cite each other and nothing else. It appears **nowhere** in Stability's newsroom (all 239 sitemap URLs enumerated), nowhere in their research index, and the licensing page still names the **Stable Diffusion 3.5 Suite** as the current image family alongside SDXL Turbo, Stable Audio 3.0 and Stable Fast 3D. SD 3.5 shipped October 2024 and remains the newest Stability image model. **Treat any 'SD4' benchmark table, feature list or download link as fabricated.** Recording this explicitly so a future refresh does not 'correct' the page by adding a model that does not exist",
      source: "stability.ai/sitemap.xml + stability.ai/news-updates + stability.ai/license (all checked 2026-08-03)",
      date: "2026-08-03",
    },
    {
      description: "Stability AI layoffs and leadership changes have raised concerns about long-term support",
      source: "TechCrunch, The Verge",
      date: "2026-01",
    },
    {
      description: "SDXL Turbo can produce lower quality results vs full SDXL pipeline",
      source: "Reddit r/StableDiffusion",
      date: "2026-02",
    },
  ],
  bestFor: "Developers, tinkerers, and power users who want full control and are comfortable with technical setup. Also anyone on a budget -- it's genuinely free.",
  notFor: "Non-technical users who want a simple web app experience. If Terminal scares you, this isn't it.",
  verdict: "Stable Diffusion is the most powerful and flexible AI image generator -- if you're willing to put in the work. The local setup lets you generate unlimited images for free with zero restrictions. But it's not for everyone. If you just want to type a prompt and get an image, use DALL-E or Midjourney instead.",

  lastReviewedDate: "2026-08-03",
  dataSources: [
    { name: "Stability AI official site", dateAccessed: "2026-03-26" },
    { name: "Reddit r/StableDiffusion", dateAccessed: "2026-03-26" },
    { name: "GitHub repository", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://stability.ai",
  status: "active",

  metaTitle: "Stable Diffusion Review 2026: The Free Open-Source AI Image Generator",
  metaDescription: "Honest Stable Diffusion review. Free, open-source, and powerful -- but is it too technical? Scores, pricing, pros and cons. Updated March 2026.",
};
