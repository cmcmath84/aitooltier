import { ToolReview } from "@/lib/types";

export const aiva: ToolReview = {
  slug: "aiva",
  name: "AIVA",
  tagline: "AI music composer specializing in orchestral and cinematic scores -- one of the oldest players in AI music",
  category: "ai-music-generators",
  url: "https://www.aiva.ai",

  scores: {
    easeOfUse: 6.5,
    outputQuality: 7.5,
    value: 6,
    features: 6.5,
    overall: 6.6,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["3 downloads/mo", "No copyright ownership", "Limited instruments"],
    },
    {
      plan: "Standard",
      price: "$11",
      period: "month",
      features: ["15 downloads/mo", "Monetize on socials", "More instruments"],
    },
    {
      plan: "Pro",
      price: "$33",
      period: "month",
      features: ["300 downloads/mo", "Full copyright ownership", "All instruments and styles"],
    },
  ],

  pros: [
    "Orchestral and cinematic compositions are genuinely impressive -- this is AIVA's sweet spot and it shows",
    "Full copyright ownership on Pro plan means you can use tracks commercially without licensing headaches",
    "Been around since 2016, so the model has had more training time on classical/film score music than newer competitors",
    "MIDI and sheet music export lets musicians actually edit and build on what the AI generates",
  ],
  cons: [
    "No vocal generation at all -- if you need lyrics or singing, you need a different tool entirely",
    "Editing is limited to MIDI and sheet music -- there's no waveform editor, so fine-tuning audio is clunky",
    "Generated tracks in the same genre start sounding samey after a while -- the variation pool isn't deep enough",
    "At $33/mo for copyright ownership, it's pricey compared to royalty-free stock music libraries",
  ],
  knownIssues: [
    {
      description: "Some users report that compositions in non-classical genres (pop, electronic) sound generic and lack the quality of the orchestral output",
      source: "Reddit r/WeAreTheMusicMakers",
      date: "2025-12",
    },
    {
      description: "The free tier's 3-download limit and no copyright makes it essentially a demo -- not usable for any real project",
      source: "Trustpilot reviews",
      date: "2026-01",
    },
  ],
  bestFor: "Indie filmmakers, game developers, and content creators who need orchestral or cinematic background music without hiring a composer or navigating stock music licensing.",
  notFor: "Musicians who want to generate pop, hip-hop, or vocal tracks -- Suno or Udio are better fits. Also not for producers who need fine-grained audio editing tools.",
  verdict: "AIVA carved out a niche in orchestral and cinematic AI music, and within that niche, it's solid. The compositions have a depth that newer AI music tools struggle to match for classical styles. But the $33/mo price tag for copyright ownership is steep when royalty-free libraries exist, and the lack of vocal generation or modern genre support limits its appeal. If you specifically need cinematic scores and want to own the rights, AIVA delivers. For everything else, look elsewhere.",

  lastReviewedDate: "2026-03-31",
  dataSources: [
    { name: "AIVA official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/WeAreTheMusicMakers", dateAccessed: "2026-03-31" },
    { name: "Trustpilot reviews", dateAccessed: "2026-03-31" },
    { name: "YouTube comparisons", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://www.aiva.ai",
  status: "active",
  metaTitle: "AIVA Review 2026: AI Music Composer for Orchestral and Cinematic Scores",
  metaDescription: "AIVA review. AI-generated orchestral and cinematic music with full copyright on Pro. How it compares to Suno and Udio. Scores, pricing. March 2026.",
};
