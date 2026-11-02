import { ToolReview } from "@/lib/types";

export const magnificAi: ToolReview = {
  slug: "magnific-ai",
  name: "Magnific (formerly Magnific AI / Freepik)",
  tagline: "AI image upscaler that hallucinates new detail into low-res images -- not just enlarging, but reimagining. Since Freepik rebranded to Magnific on 2026-04-28 the upscaler is one tool inside magnific.com, and the standalone magnific.ai site is a legacy service for existing users only. New users get it through Magnific plans from $20/month (Premium) to $110/month (Pro Starter), alongside image, video, audio, and stock tools",
  category: "ai-photo-editing",
  url: "https://www.magnific.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 4,
    features: 6,
    overall: 6.3,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Premium",
      price: "$20",
      period: "month",
      features: [
        "20K credits/month billed monthly; or $14.50/month billed annually with 240K credits/year",
        "Magnific image and video upscalers included",
        "Image, video, and audio models plus Spaces canvas",
        "Commercial AI license and 250M+ stock assets",
      ],
    },
    {
      plan: "Premium+",
      price: "$45",
      period: "month",
      features: [
        "45K credits/month billed monthly; or $33.75/month billed annually with 600K credits/year",
        "Unlimited generations on selected models",
        "Magnific and Topaz upscalers",
        "Commercial AI license plus music rights",
      ],
    },
    {
      plan: "Pro Starter",
      price: "$110",
      period: "month",
      features: [
        "112.5K credits/month billed monthly (300K tier also offered); or $82.50/month billed annually with 1.5M credits/year (4M tier also offered)",
        "Everything in Premium+",
        "Annual credits valid for 1 year, no monthly resets",
        "API access with credit-based usage",
      ],
    },
    {
      plan: "Legacy magnific.ai",
      price: "Existing subscribers only",
      features: [
        "magnific.ai still operates for existing accounts (gallery, tokens, subscription)",
        "No new sign-ups -- new registrations only on magnific.com",
        "magnific.ai root now 301-redirects to www.magnific.com",
        "The old standalone upscaler tiers are no longer offered to new users (see Known Issues)",
      ],
    },
  ],

  pros: [
    "The upscaling quality is genuinely impressive -- it adds realistic detail that didn't exist in the original image",
    "Best tool available for making AI-generated images look higher resolution and more detailed",
    "Web-based, no GPU required -- runs in your browser, which keeps the barrier to entry low",
    "Multiple creativity sliders let you control how much the AI invents vs. preserves",
    "Now bundled with a full creative suite -- every paid Magnific plan includes the Magnific image and video upscalers plus image, video, and audio models and 250M+ stock assets, starting at $20/month ($14.50/month billed annually)",
  ],
  cons: [
    "No free plan on the magnific.com pricing page -- the entry Premium plan is $20/month ($14.50/month billed annually), and you pay for a whole creative suite even if you only want upscaling",
    "Credit-based usage -- upscales draw from the same credit pool as every other Magnific tool; annual plans state credits stay valid for 1 year with no monthly resets, monthly plans grant credits each month",
    "Results on photorealistic portraits can look overcooked -- faces get weird artifacts",
    "Processing is slow during peak hours, even on paid plans",
    "Requires trial and error to dial in settings, which burns through credits fast",
  ],
  knownIssues: [
    {
      description: "Standalone magnific.ai withdrawn for new users (checked 2026-11-02): magnific.ai now 301-redirects to www.magnific.com, and magnific.ai/legacy says the old site 'is still fully operational for all existing users' but 'New registrations are only available on magnific.com.' The standalone upscaler tiers this page used to list (Pro $39, Premium $99, Business $299) are not sold to new users; new pricing is the unified Magnific lineup -- Premium $20, Premium+ $45, Pro Starter $110 per month, or $14.50 / $33.75 / $82.50 per month billed annually",
      source: "magnific.ai/legacy, magnific.com/pricing",
      date: "2026-11-02",
    },
    {
      description: "Freepik rebranded to Magnific on 2026-04-28, consolidating image generation, video, upscaling, audio, and collaboration into a single AI creative platform. Launch metrics per the press release: $230M ARR, 1M+ paid subscribers, more than 290 enterprise teams, more than 15 image generation models and over 12 video models. The pricing page now reads 'Magnific (formerly Freepik)' and freepik.com/pricing lands on magnific.com/pricing",
      source: "PRNewswire (Freepik becomes Magnific), magnific.com/pricing",
      date: "2026-04-28",
    },
    {
      description: "Legacy magnific.ai plans: unused tokens expired monthly with no rollover -- users reported feeling pressured to use credits they don't need",
      source: "Product Hunt Reviews",
      date: "2026-01",
    },
    {
      description: "Faces and small details in complex scenes get over-enhanced, producing uncanny artifacts that require manual cleanup",
      source: "Reddit r/StableDiffusion",
      date: "2025-12",
    },
    {
      description: "Slow processing at peak times -- users on the legacy magnific.ai Premium plan ($99/mo) reported waiting several minutes per upscale",
      source: "Trustpilot",
      date: "2026-02",
    },
  ],
  bestFor: "AI artists and designers who need to upscale AI-generated images to print resolution with added detail. If you're making art with Midjourney or Stable Diffusion, Magnific is the finishing step -- and it now makes most sense if you also want Magnific's image, video, and stock tools in the same subscription.",
  notFor: "Photographers looking for clean, faithful upscaling of real photos. Topaz gives you more accurate results (Topaz upscalers are also bundled in Magnific Premium+ and up). Also not worth it if you only upscale a few images a month.",
  verdict: "Magnific does something no other tool does as well: it invents plausible detail when upscaling, making low-res AI art look stunning at high resolution. The quality ceiling is high. Since the Freepik rebrand the upscaler is no longer sold as a standalone subscription to new users -- it comes bundled in Magnific suite plans from $20 to $110/month, with no free plan. If you're an AI artist producing work regularly, or you want the wider creative suite anyway, it's worth it. If you only want occasional upscaling, paying for the whole suite is hard to justify.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Magnific pricing (magnific.com, formerly Freepik)", url: "https://www.magnific.com/pricing", dateAccessed: "2026-11-02" },
    { name: "Magnific.ai legacy service notice", url: "https://magnific.ai/legacy/", dateAccessed: "2026-11-02" },
    { name: "PRNewswire: Freepik becomes Magnific (2026-04-28)", url: "https://www.prnewswire.com/news-releases/freepik-becomes-magnific-hits-230m-arr-and-introduces-the-no-collar-creative-economy-302755376.html", dateAccessed: "2026-11-02" },
    { name: "Product Hunt Reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/StableDiffusion", dateAccessed: "2026-04-02" },
    { name: "Trustpilot", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://www.magnific.com",
  status: "active",
  metaTitle: "Magnific Review 2026: The AI Upscaler, Now Inside Magnific (formerly Freepik)",
  metaDescription: "Magnific review after the Freepik rebrand. The detail-hallucinating upscaler now ships inside magnific.com plans from $20/mo; magnific.ai is legacy for existing users. No free plan. November 2026.",
};
