import { ToolReview } from "@/lib/types";

export const lyria: ToolReview = {
  slug: "lyria",
  name: "Lyria 3 Pro (Google)",
  tagline: "Google DeepMind's music generation model -- 3-minute structured songs with intro, verse, chorus, and outro control",
  category: "ai-music-generators",
  url: "https://deepmind.google/models/lyria/",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 7,
    features: 8,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free (Google AI Studio)", price: "$0", features: ["Limited test generations", "Lyria 3 base model (30s clips)", "No commercial use"] },
    { plan: "Google AI Pro", price: "$19.99", period: "month", features: ["10 Lyria 3 tracks/day", "3-minute song generation", "Commercial use", "Bundled with Gemini 3.1 Ultra"] },
    { plan: "Gemini Pro", price: "$29.99", period: "month", features: ["20 Lyria 3 tracks/day", "Lyria 3 Pro full access", "Commercial use"] },
    { plan: "Gemini Ultra", price: "$99.99", period: "month", features: ["50 Lyria 3 tracks/day", "Lyria 3 Pro full access", "Highest priority queue"] },
    { plan: "Gemini API", price: "$0.08", period: "per song", features: ["Pay-per-song", "Lyria 3 Pro access", "Build into your own products"] },
  ],

  pros: [
    "Generates full 3-minute songs with real structural awareness -- intro, verse, chorus, bridge, outro all positioned correctly",
    "Lets you specify individual song elements (e.g., 'add a guitar solo at the bridge') unlike Suno's all-or-nothing approach",
    "API pricing at $0.08 per song is dramatically cheaper than Suno's credit system for high-volume use",
    "Tightly integrated with Google Vids, Google Workspace, and Gemini app for video soundtrack workflows",
    "Backed by Google DeepMind research -- audio quality is on par with Suno and Udio for most genres",
  ],
  cons: [
    "Free access is essentially gated -- Google AI Studio gives you tiny test generations, not real songs",
    "Pricing is fragmented across Google AI Pro, Gemini Pro, Gemini Ultra, and the API -- confusing for casual users",
    "The Lyria 3 Pro model is still in preview on Vertex AI as of April 2026 -- not all features are stable",
    "Vocal quality is decent but not as expressive as Suno v4 or Udio for pop and rock genres",
    "Locked into the Google ecosystem -- you need a Google account and probably a Workspace/Gemini subscription to use it productively",
  ],
  knownIssues: [
    {
      description: "Lyria 3 Pro is in preview on Vertex AI -- pricing for Vertex API access has not been officially disclosed as of April 2026",
      source: "Google Cloud blog, OpenRouter",
      date: "2026-04",
    },
    {
      description: "Daily track limits on the Google AI Pro plan (10 tracks/day) feel restrictive for active producers",
      source: "Reddit r/musicproduction",
      date: "2026-04",
    },
  ],
  bestFor: "Content creators who already pay for a Gemini or Google AI subscription and want longer, more structured AI music. Also great for developers building music features into their own apps via the $0.08/song API.",
  notFor: "Standalone music creators who don't use Google's ecosystem -- Suno or Udio give you a simpler workflow without subscription bundling.",
  verdict: "Lyria 3 Pro is Google's serious entry into the AI music race, and it shows -- 3-minute songs with structural control is a real step beyond Suno's 'one prompt, one song' approach. The $0.08/song API pricing is the most attractive part for developers. But for standalone creators, the fragmented subscription tiers and Google account lock-in make it less appealing than Suno or Udio. Worth it if you're already paying for Gemini Pro or Ultra. Otherwise, Suno is still the easier path.",

  lastReviewedDate: "2026-04-08",
  dataSources: [
    { name: "Google DeepMind Lyria page", dateAccessed: "2026-04-08" },
    { name: "Google blog: Lyria 3 Pro launch", dateAccessed: "2026-04-08" },
    { name: "TechCrunch coverage", dateAccessed: "2026-04-08" },
    { name: "Gemini AI music page", dateAccessed: "2026-04-08" },
  ],
  affiliateUrl: "https://deepmind.google/models/lyria/",
  status: "active",
  metaTitle: "Lyria 3 Pro Review 2026: Google's AI Music Generator vs Suno",
  metaDescription: "Lyria 3 Pro review. Google DeepMind's music model, 3-minute songs with structural control, $0.08/song API. How does it compare to Suno and Udio? April 2026.",
};
