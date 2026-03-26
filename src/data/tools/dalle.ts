import { ToolReview } from "@/lib/types";

export const dalle: ToolReview = {
  slug: "dall-e",
  name: "DALL-E 3",
  tagline: "OpenAI's image generator built into ChatGPT -- the easiest way to create AI images",
  category: "ai-image-generators",
  url: "https://openai.com/dall-e-3",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 8,
    features: 7,
    overall: 8.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (via ChatGPT)",
      price: "$0",
      features: ["Limited generations per day", "Standard quality", "Basic editing"],
    },
    {
      plan: "ChatGPT Plus",
      price: "$20",
      period: "month",
      features: ["More generations", "Higher priority", "DALL-E 3 access"],
    },
    {
      plan: "API",
      price: "$0.04-0.08",
      period: "per image",
      features: ["Full API access", "Batch generation", "Multiple sizes"],
    },
  ],

  pros: [
    "Built right into ChatGPT -- no extra app needed",
    "Free tier available for casual use",
    "Best text rendering in images of any AI tool",
    "Natural language prompts work great, no prompt engineering needed",
    "API available for developers",
  ],
  cons: [
    "Image quality a step below Midjourney for artistic styles",
    "Heavy content filtering can block legitimate creative requests",
    "Limited control over artistic style compared to Stable Diffusion",
    "Free tier generations are very limited",
  ],
  knownIssues: [
    {
      description: "Content filter occasionally blocks non-offensive prompts, especially involving people",
      source: "Reddit r/ChatGPT",
      date: "2026-03",
    },
  ],
  bestFor: "Anyone who wants quick, easy AI image generation without learning a new tool. Great for non-designers who just need images.",
  notFor: "Professional artists who need fine control over style, or anyone doing high-volume generation on a budget.",
  verdict: "DALL-E 3 wins on accessibility. It's the easiest AI image generator to use because it's just ChatGPT. The quality is solid -- not quite Midjourney-level for art, but the best at rendering text in images. If you already pay for ChatGPT Plus, you already have it.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "OpenAI official docs", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Reddit r/ChatGPT", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://openai.com/dall-e-3",
  status: "active",

  metaTitle: "DALL-E 3 Review 2026: Free AI Image Generator Built Into ChatGPT",
  metaDescription: "Honest DALL-E 3 review with scores, pricing, pros and cons. Is OpenAI's free image generator good enough? Updated March 2026.",
};
