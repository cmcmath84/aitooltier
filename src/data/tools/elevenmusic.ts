import { ToolReview } from "@/lib/types";

export const elevenmusic: ToolReview = {
  slug: "elevenmusic",
  name: "ElevenMusic",
  tagline: "ElevenLabs' AI music platform -- commercially licensed from day one, voice-cloning stack built in. Web platform launched 2026-04-29 alongside iOS (originally iOS-only at 2026-04-02 launch). $11M paid to creators via the ElevenLabs voice library, 4,000+ independent artists creating on the platform, and Eleven Album Vol. 2 curated release with Danger Twins, Justin Love, and partner Jonas Group Entertainment",
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
        "iOS + web (web GA 2026-04-29)",
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
    "Android still missing as of 2026-04-29 -- iOS + web only, which rules out the largest mobile platform globally",
    "Output quality trails Suno v5.5 on complex arrangements -- ElevenLabs' model is newer and still catching up on vocal-instrument layering",
    "The voice-cloning angle requires consent tooling for anything published commercially; this adds workflow friction vs. stock voices",
    "500 tracks/mo on Pro is lower than Suno Premier (2,000/mo) -- heavy producers will hit the ceiling",
  ],
  knownIssues: [
    {
      description:
        "ElevenMusic web platform GA shipped 2026-04-29 (~4 weeks after the 2026-04-02 iOS launch). ElevenLabs disclosed launch metrics: $11M paid to creators via the voice library to date, 4,000+ independent and emerging artists creating on the platform, and Eleven Album Vol. 2 -- a curated label-style release featuring Danger Twins, Justin Love, and other artists. First named industry partner: Kevin Jonas Sr. (Founder & Chairman, Jonas Group Entertainment), who is quoted as a launch collaborator. Web GA closes the desktop-workflow gap that previously made apples-to-apples comparisons against Suno + Udio impossible. Android remains the only major-platform gap",
      source: "ElevenLabs blog (elevenlabs.io/blog/introducing-elevenmusic, 2026-04-29)",
      date: "2026-04-29",
    },
    {
      description:
        "Original iOS launch 2026-04-02. Pricing tiers (Free 7 songs/day, Pro $9.99/mo, Pro Annual $95.90/yr) carried over to web at GA without changes",
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
    "Content creators (now desktop AND mobile) who value commercial safety over raw track volume, and anyone who wants to put their own voice on an AI-generated track without juggling multiple tools. The web GA on 2026-04-29 makes it the obvious pick for creators nervous about the Suno-UMG situation who couldn't use the iOS-only version before.",
  notFor:
    "Android users (still the biggest platform gap) and heavy users who need 1,000+ tracks/mo (Suno Premier still wins on raw output). Also not for users prioritizing cutting-edge vocal fidelity -- Suno v5.5 still leads on that.",
  verdict:
    "ElevenMusic is the first serious Suno challenger since Udio, and the commercial-safety angle is the real story. With web GA shipped 2026-04-29, the desktop-workflow gap is closed -- this is now a head-to-head vs. Suno on Suno's home turf, with the licensed-audio differentiator and the voice-cloning angle as the moats. Most creators don't need 'trained on licensed audio' today, but the moment a major label moves against an AI-music platform (Suno is the obvious target given UMG impasse), ElevenMusic becomes the low-risk default. For a $9.99/mo Pro tier, it's cheap insurance even if you also keep a Suno account. Android remains the only major missing platform.",

  lastReviewedDate: "2026-04-29",
  dataSources: [
    { name: "ElevenLabs blog: Introducing ElevenMusic (2026-04-29 web GA)", url: "https://elevenlabs.io/blog/introducing-elevenmusic", dateAccessed: "2026-04-29" },
    { name: "TechCrunch: ElevenLabs releases AI music app", url: "https://techcrunch.com/2026/04/02/elevenlabs-releases-a-new-ai-powered-music-generation-app/", dateAccessed: "2026-04-21" },
    { name: "Music Business Worldwide: ElevenMusic launch", url: "https://www.musicbusinessworldwide.com/elevenlabs-launches-elevenmusic-ios-app-taking-on-suno-and-udio-on-mobile/", dateAccessed: "2026-04-21" },
    { name: "ElevenLabs official site", url: "https://elevenlabs.io", dateAccessed: "2026-04-29" },
  ],
  affiliateUrl: "https://elevenlabs.io/music",
  status: "active",
  metaTitle: "ElevenMusic Review 2026: Web GA April 29 + ElevenLabs' Suno Competitor",
  metaDescription:
    "ElevenMusic review. Web platform GA 2026-04-29 (iOS shipped 2026-04-02). Commercially licensed, voice cloning built in. 7 songs/day free, $9.99/mo Pro. $11M creator payouts, 4K+ artists. vs Suno + Udio.",
};
