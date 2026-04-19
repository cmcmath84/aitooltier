import { ToolReview } from "@/lib/types";

export const udio: ToolReview = {
  slug: "udio",
  name: "Udio",
  tagline: "AI music generation that leans harder into audio fidelity and sonic detail than the competition",
  category: "ai-music-generators",
  url: "https://udio.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 7,
    features: 7,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "10 credits/day",
        "Non-commercial use",
        "Standard queue",
      ],
    },
    {
      plan: "Standard",
      price: "$10",
      period: "month",
      features: [
        "1,200 credits/mo",
        "Commercial use",
        "Priority queue",
      ],
    },
    {
      plan: "Pro",
      price: "$30",
      period: "month",
      features: [
        "4,800 credits/mo",
        "Commercial use",
        "Top priority queue",
        "Early access to new features",
      ],
    },
  ],

  pros: [
    "Audio quality is noticeably better than Suno -- instruments sound more realistic and the mix is cleaner",
    "Handles complex genres like jazz, classical, and prog rock better than any other AI music tool",
    "The inpainting feature lets you regenerate just a section of a song instead of starting over",
    "Vocal clarity and pronunciation are a step above the competition, especially on English lyrics",
  ],
  cons: [
    "The interface is less intuitive than Suno -- more options but also more confusing for beginners",
    "Generation times are slower, especially during peak hours when the queue backs up",
    "Credit consumption feels aggressive -- extending and remixing songs eats through your monthly allotment fast",
    "Still no real mixing controls -- you can't adjust individual instrument levels or pan",
  ],
  knownIssues: [
    {
      description:
        "Udio signed a Kobalt licensing deal on 2026-04-10 -- now has licensing agreements with UMG, WMG, Merlin, and Kobalt. Next-gen platform announced with stem separation, no raw downloads, and a royalty-pool model for licensed-song training. Summer 2026 public release planned. Positioned as the 'artist-friendly' music-AI alternative to Suno's contested rollout",
      source: "Music Ally, CBC News",
      date: "2026-04",
    },
    {
      description:
        "Extend feature occasionally produces a jarring transition where the tempo shifts unexpectedly",
      source: "Reddit r/udio",
      date: "2026-02",
    },
    {
      description:
        "Some users report generations getting stuck in queue for 10+ minutes during peak usage",
      source: "Udio Discord",
      date: "2026-03",
    },
  ],
  bestFor:
    "Music enthusiasts and producers who want higher audio fidelity and more nuanced genre handling from AI.",
  notFor:
    "Casual users who just want the simplest path to a finished song without tweaking settings.",
  verdict:
    "Udio trades ease of use for better output quality, and if you care about how your AI-generated music actually sounds, that's a trade worth making. The inpainting feature is a genuine differentiator. But the slower generation times and aggressive credit usage mean you'll hit the limits of the free and Standard plans faster than you'd expect.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "Music Ally: Udio Kobalt deal 2026-04-10", url: "https://musically.com/2026/04/10/udio-signs-its-latest-ai-music-licensing-deal-with-kobalt/", dateAccessed: "2026-04-18" },
    { name: "CBC: Warner/Udio AI music", url: "https://www.cbc.ca/news/entertainment/warner-udio-ai-music-9.6986740", dateAccessed: "2026-04-18" },
    { name: "Reddit r/udio", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://udio.com",
  status: "active",
  metaTitle: "Udio Review 2026: Higher-Fidelity AI Music Generation",
  metaDescription:
    "Udio review. Better audio quality than Suno, inpainting for section editing, strong genre range. But slower and pricier per song. Scores, pricing. March 2026.",
};
