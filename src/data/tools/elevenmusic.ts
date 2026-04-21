import { ToolReview } from "@/lib/types";

export const elevenmusic: ToolReview = {
  slug: "elevenmusic",
  name: "ElevenMusic",
  tagline: "ElevenLabs' iOS music app -- commercially licensed from day one, voice-cloning stack built in, free tier 7 songs/day. Launched 2026-04-02 as the first credible challenger to Suno's mobile dominance",
  category: "ai-music-generators",
  url: "https://elevenlabs.io/music",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "7 songs/day",
        "Full style/mood library",
        "Non-commercial personal use",
        "iOS only at launch",
      ],
    },
    {
      plan: "Pro",
      price: "$9.99",
      period: "month",
      features: [
        "500 tracks/mo",
        "500+ GB cloud storage",
        "Commercial licensing",
        "All styles/moods unlocked",
      ],
    },
    {
      plan: "Pro Annual",
      price: "$95.90",
      period: "year",
      features: [
        "Same as Pro monthly",
        "~$7.99 effective/mo when billed annually",
        "Commercial licensing",
      ],
    },
  ],

  pros: [
    "Commercially safe from launch -- ElevenLabs trained on licensed audio rather than the scraped catalog that has Suno tied up with UMG. If you sell content, this matters a lot",
    "Voice-cloning tech from ElevenLabs' existing TTS stack is the real differentiator -- you can bring your own voice onto the generated track in a way Suno and Udio cannot match",
    "Free tier at 7 songs/day is generous enough to actually evaluate before paying, and the $9.99 Pro tier is priced to undercut Suno Pro at $10",
    "Mobile-first UX is a clean fit for on-the-go content creators -- much snappier than Suno's web interface on a phone",
  ],
  cons: [
    "iOS only at launch -- Android and web are not available, which rules out most desktop-centric workflows",
    "Output quality trails Suno v5.5 on complex arrangements -- ElevenLabs' model is newer and still catching up on vocal-instrument layering",
    "The voice-cloning angle requires consent tooling for anything published commercially; this adds workflow friction vs. stock voices",
    "500 tracks/mo on Pro is lower than Suno Premier (2,000/mo) -- heavy producers will hit the ceiling",
  ],
  knownIssues: [
    {
      description:
        "Launched 2026-04-02 on iOS only. Android + web roadmap not yet announced. If you're producing on desktop (most music workflow is), you can't use it; that also means comparison against Suno/Udio is currently apples-to-oranges since those are web-first",
      source: "TechCrunch, Music Business Worldwide",
      date: "2026-04",
    },
    {
      description:
        "'Commercially safe from day one' framing is the key product differentiator -- ElevenLabs states training data is licensed, in contrast to Suno's ongoing UMG impasse and the broader AI-music lawsuits. Worth verifying the ElevenMusic commercial-use terms match your specific use case before betting a brand campaign on it",
      source: "TechCrunch, ElevenLabs blog",
      date: "2026-04",
    },
    {
      description:
        "Voice-cloning output requires acceptance of ElevenLabs' consent flow for any voice you submit. Same friction that exists on the ElevenLabs TTS side -- you can't just upload any voice, and commercial publishing requires attestation",
      source: "ElevenLabs terms of service",
      date: "2026-04",
    },
  ],
  bestFor:
    "Mobile content creators who value commercial safety over raw track volume, and anyone who wants to put their own voice on an AI-generated track without juggling multiple tools. Also the obvious pick for creators nervous about the Suno-UMG situation.",
  notFor:
    "Desktop producers, anyone needing Android access, and heavy users who need 1,000+ tracks/mo (Suno Premier still wins on raw output). Also not for users prioritizing cutting-edge vocal fidelity -- Suno v5.5 still leads on that.",
  verdict:
    "ElevenMusic is the first serious Suno challenger since Udio, and the commercial-safety angle is the real story. Most creators don't need the 'trained on licensed audio' differentiator today, but the moment a major label moves against an AI-music platform (Suno is the obvious target given UMG impasse), ElevenMusic becomes the low-risk default. For a $9.99/mo Pro tier, it's cheap insurance even if you also keep a Suno account. The iOS-only constraint is temporary; Android + web will ship within quarters based on ElevenLabs' release cadence.",

  lastReviewedDate: "2026-04-21",
  dataSources: [
    { name: "TechCrunch: ElevenLabs releases AI music app", url: "https://techcrunch.com/2026/04/02/elevenlabs-releases-a-new-ai-powered-music-generation-app/", dateAccessed: "2026-04-21" },
    { name: "Music Business Worldwide: ElevenMusic launch", url: "https://www.musicbusinessworldwide.com/elevenlabs-launches-elevenmusic-ios-app-taking-on-suno-and-udio-on-mobile/", dateAccessed: "2026-04-21" },
    { name: "ElevenLabs official site", url: "https://elevenlabs.io", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://elevenlabs.io/music",
  status: "active",
  metaTitle: "ElevenMusic Review 2026: ElevenLabs' Suno Competitor on iOS",
  metaDescription:
    "ElevenMusic review. ElevenLabs' iOS music app (2026-04-02). Commercially licensed, voice cloning built in. 7 songs/day free, $9.99/mo Pro. vs Suno + Udio.",
};
