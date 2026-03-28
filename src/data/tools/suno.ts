import { ToolReview } from "@/lib/types";

export const suno: ToolReview = {
  slug: "suno",
  name: "Suno",
  tagline: "Type a sentence, get a full song back -- vocals, instruments, and all",
  category: "ai-music-generators",
  url: "https://suno.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 7,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "10 credits/day (5 songs)",
        "Non-commercial use only",
        "2 concurrent generations",
      ],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: [
        "500 credits/mo (~250 songs)",
        "Commercial use",
        "10 concurrent generations",
        "Priority queue",
      ],
    },
    {
      plan: "Premier",
      price: "$30",
      period: "month",
      features: [
        "2,000 credits/mo (~1,000 songs)",
        "Commercial use",
        "10 concurrent generations",
        "Priority queue",
      ],
    },
  ],

  pros: [
    "Absurdly easy to use -- type a prompt or paste lyrics and you get a full song in under a minute",
    "Vocal quality is surprisingly good for AI, especially on pop, folk, and hip-hop styles",
    "The free tier is generous enough to actually experiment and decide if it's worth paying for",
    "Covers a huge range of genres -- from country to death metal to lo-fi beats, it handles most styles",
  ],
  cons: [
    "Lyrics frequently have pronunciation issues or odd phrasing that breaks the illusion",
    "You have very limited control over arrangement -- can't say 'add a guitar solo at the bridge'",
    "Songs tend to follow predictable structures and rarely surprise you musically",
    "Audio quality tops out around demo-level -- don't expect anything you'd put on a commercial release without heavy post-production",
  ],
  knownIssues: [
    {
      description:
        "Songs occasionally cut off abruptly before the outro finishes, wasting credits",
      source: "Reddit r/SunoAI",
      date: "2026-03",
    },
    {
      description:
        "Extend feature sometimes generates a section that doesn't match the key or tempo of the original clip",
      source: "Reddit r/SunoAI",
      date: "2026-02",
    },
  ],
  bestFor:
    "Content creators who need background music or jingles fast without any music production knowledge.",
  notFor:
    "Serious musicians who want fine-grained control over arrangement, mixing, and mastering.",
  verdict:
    "Suno is the fastest way to go from an idea to a full song, and for casual use it's genuinely fun. But the lack of editing control and the inconsistent vocal quality mean it's better suited for content creators and hobbyists than anyone trying to produce polished tracks. The free tier is worth trying -- just don't expect studio quality.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Suno official site", dateAccessed: "2026-03-27" },
    { name: "Reddit r/SunoAI", dateAccessed: "2026-03-27" },
    { name: "YouTube creator reviews", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://suno.com",
  status: "active",
  metaTitle: "Suno Review 2026: AI Music Generator That Makes Full Songs From Text",
  metaDescription:
    "Suno review. Generate full songs with vocals from a text prompt. Great for content creators, limited for musicians. Scores, pricing, known issues. March 2026.",
};
