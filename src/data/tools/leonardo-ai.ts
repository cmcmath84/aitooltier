import { ToolReview } from "@/lib/types";

export const leonardoAi: ToolReview = {
  slug: "leonardo-ai",
  name: "Leonardo AI",
  tagline: "Versatile AI image generator with fine-tuned models and a generous free tier",
  category: "ai-image-generators",
  url: "https://leonardo.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["150 tokens/day", "Basic models", "Community features"],
    },
    {
      plan: "Apprentice",
      price: "$12",
      period: "month",
      features: ["8,500 tokens/mo", "All models", "Private generations"],
    },
    {
      plan: "Artisan",
      price: "$30",
      period: "month",
      features: ["25,000 tokens/mo", "Priority processing", "API access"],
    },
  ],

  pros: [
    "Genuinely useful free tier -- 150 tokens daily is enough to experiment",
    "Great web UI with real-time canvas, image-to-image, and inpainting",
    "Fine-tuned models for specific styles (photorealism, anime, game assets)",
    "Training your own models on custom datasets is straightforward",
  ],
  cons: [
    "Token system is confusing -- different features burn tokens at different rates",
    "Quality doesn't quite reach Midjourney for artistic compositions",
    "Some fine-tuned community models produce inconsistent results",
    "The UI can feel overwhelming with all the options",
  ],
  knownIssues: [
    {
      description: "PLAN RENAME + A NEW TOP TIER -- OUR OLD PLAN NAMES NO LONGER EXIST (checked 2026-08-03, vendor pricing page): the Apprentice and Artisan tiers are gone. Solo tiers are now **Free / Essential $12 / Premium $30 / Ultimate $60** per month (ex. tax), with annual billing up to 20% off. The $12 and $30 price points survived the rename but the allowances are now explicit: **8,500 / 25,000 / 60,000 fast tokens per month** against token banks of 25,500 / 75,000 / 180,000, and 10 / 20 / 50 personal AI models. **Premium and above get unlimited relaxed-pace image generation; only Ultimate gets unlimited relaxed-pace video.** Team plans start at **Starter $72/mo ($24/seat)** and **Growth $144/mo ($48/seat)**, plus a separate API tier. One thing the page now states plainly: **Essential is 'Included with Canva Business'** -- Leonardo is a Canva property, so if your organisation already pays for Canva Business you may already have this",
      source: "Leonardo AI pricing page (leonardo.ai/pricing)",
      date: "2026-08-03",
    },
    {
      description: "Token consumption rates changed without clear notice, some users reported using tokens faster than expected",
      source: "Reddit r/leonardoai",
      date: "2026-02",
    },
  ],
  bestFor: "Anyone who wants a capable image generator without paying upfront. The free tier is real, not a 3-image trial. Great for game devs and content creators who need specific styles.",
  notFor: "If you only care about the absolute best image quality and don't mind paying, Midjourney still edges it out.",
  verdict: "Leonardo AI hits a sweet spot that most competitors miss. The free tier is genuinely useful, the web interface is polished, and the fine-tuned models give you more control than DALL-E. It's not quite Midjourney quality, but it's close -- and you can actually try it before paying.",

  lastReviewedDate: "2026-08-03",
  dataSources: [
    { name: "Leonardo AI official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/leonardoai", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://leonardo.ai",
  status: "active",
  metaTitle: "Leonardo AI Review 2026: Best Free AI Image Generator?",
  metaDescription: "Leonardo AI review with real scores and pricing. Generous free tier, fine-tuned models, and solid quality. Updated March 2026.",
};
