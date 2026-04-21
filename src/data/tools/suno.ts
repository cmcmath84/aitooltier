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
        "ElevenLabs launched ElevenMusic on iOS 2026-04-02 as a direct Suno/Udio competitor -- 7 free songs/day, Pro $9.99/mo or $95.90/yr, commercially licensed from day one, with ElevenLabs' voice-cloning stack as the differentiator. This is the first credible challenger to Suno's free-tier economics in 2026",
      source: "TechCrunch, Music Business Worldwide",
      date: "2026-04",
    },
    {
      description:
        "Suno v5.5 shipped 2026-03-27 with three major personalization features: Voices (voice capture/cloning with anti-impersonation verification), Custom Models (train on 6+ of your own songs), and My Taste (passive preference learning). Marks a shift from generic to identity-driven music generation",
      source: "Suno blog (suno.com/blog/v5-5), Music Business Worldwide",
      date: "2026-03",
    },
    {
      description:
        "Warner Music licensing deal (announced Dec 2025) is triggering a major policy shift in 2026: free-tier downloads removed, current pre-Warner models scheduled for deprecation later in 2026 when new licensed-only models ship. Universal Music Group and Sony talks reportedly at impasse as of 2026-04-09 -- ongoing litigation pressure. Udio took the opposite path -- settled with Universal + Warner + Merlin accepting no-download restriction. Plan for download/model changes in H2 2026",
      source: "Digital Music News, WinBuzzer",
      date: "2026-04",
    },
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

  lastReviewedDate: "2026-04-21",
  dataSources: [
    { name: "Suno blog: v5.5", url: "https://suno.com/blog/v5-5", dateAccessed: "2026-04-18" },
    { name: "Music Business Worldwide: Suno v5.5", url: "https://www.musicbusinessworldwide.com/suno-launches-v5-5-ai-model-with-voice-capture-and-personalization-features/", dateAccessed: "2026-04-18" },
    { name: "Digital Music News: Suno-UMG impasse", url: "https://www.digitalmusicnews.com/2026/04/09/suno-universal-music-lawsuit-settlement-impasse/", dateAccessed: "2026-04-18" },
    { name: "Reddit r/SunoAI", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://suno.com",
  status: "active",
  metaTitle: "Suno Review 2026: AI Music Generator That Makes Full Songs From Text",
  metaDescription:
    "Suno review. Generate full songs with vocals from a text prompt. Great for content creators, limited for musicians. Scores, pricing, known issues. March 2026.",
};
