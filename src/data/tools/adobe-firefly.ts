import { ToolReview } from "@/lib/types";

export const adobeFirefly: ToolReview = {
  slug: "adobe-firefly",
  name: "Adobe Firefly",
  tagline: "Adobe's AI image generator -- commercially safe and baked into Creative Cloud",
  category: "ai-image-generators",
  url: "https://firefly.adobe.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 6,
    features: 7,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["25 credits/mo", "Basic generation", "Watermarked"],
    },
    {
      plan: "Premium",
      price: "$9.99",
      period: "month",
      features: ["100 credits/mo", "No watermarks", "Adobe Fonts"],
    },
    {
      plan: "Creative Cloud",
      price: "$54.99",
      period: "month",
      features: ["1,000 credits/mo", "All Adobe apps", "Full Firefly integration"],
    },
  ],

  pros: [
    "Trained on licensed content -- legally safe for commercial use",
    "Integrated directly into Photoshop, Illustrator, and other Adobe apps",
    "Generative Fill in Photoshop is genuinely useful for real work",
    "Very clean, intuitive web interface",
  ],
  cons: [
    "Image quality noticeably behind Midjourney and even DALL-E for standalone generation",
    "Credit system is stingy -- 25 free credits go fast",
    "Full value requires an expensive Creative Cloud subscription",
    "Limited style control compared to Stable Diffusion or Leonardo",
  ],
  knownIssues: [
    {
      description: "Generative Fill sometimes produces visible seams and color mismatches at edit boundaries",
      source: "Adobe Community Forums",
      date: "2026-03",
    },
    {
      description: "Free tier watermarks are aggressive and cover a large portion of the image",
      source: "Reddit r/adobefirefly",
      date: "2026-02",
    },
  ],
  bestFor: "Adobe Creative Cloud subscribers who want AI generation baked into their existing workflow. Designers who need commercially safe images.",
  notFor: "Anyone looking for the best standalone AI image generator. The quality doesn't justify the price on its own -- the value is in the Adobe integration.",
  verdict: "Firefly's real strength isn't as a standalone generator -- it's as a feature inside Photoshop. Generative Fill is a game-changer for photo editing. But if you're comparing it to Midjourney or DALL-E purely on image generation quality, it falls short. Worth it if you already pay for Creative Cloud. Hard to justify otherwise.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "Adobe Firefly official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Adobe Community Forums", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://firefly.adobe.com",
  status: "active",
  metaTitle: "Adobe Firefly Review 2026: Worth It Outside Creative Cloud?",
  metaDescription: "Honest Adobe Firefly review. Great inside Photoshop, underwhelming as a standalone generator. Scores, pricing, known issues. March 2026.",
};
