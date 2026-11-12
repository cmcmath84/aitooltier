import { ToolReview } from "@/lib/types";

export const elevenmusic: ToolReview = {
  slug: "elevenmusic",
  name: "ElevenMusic",
  tagline: "**Nov 6: original ElevenMusic tracks can now be published straight to a linked SoundCloud profile, and SoundCloud Artist Pro members get three months of ElevenMusic free before the $9.99 monthly price applies.** **Nov 2026: Free now 25 songs a day with commercial use, and Pro is 1,000 songs a month.**ElevenLabs' standalone AI music app at elevenmusic.io (iOS + web, still no Android) -- Music v2.5 is the default model since 2026-09-11, with Composer section editing, Vocals, References and Sounds, and ElevenLabs signed a multi-year licensing deal with Universal Music Group on 2026-09-10. Pro $9.99/mo or $7.99/mo billed yearly",
  category: "ai-music-generators",
  url: "https://elevenmusic.io",

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
        "25 songs a day",
        "Commercial use with a 'Made with ElevenMusic' credit",
        "Upload your own music; 5 downloads and 5 stem splits a day",
        "1 custom style or vocal",
        "iOS + web",
      ],
    },
    {
      plan: "Pro",
      price: "$9.99",
      period: "month",
      features: [
        "1,000 songs a month",
        "No credit needed; release original songs to Spotify and Apple Music",
        "Unlimited downloads; earn royalties from streams",
        "500 stem splits a month; 5 custom styles and vocals",
        "SoundCloud Artist Pro members: three months of ElevenMusic free, then $9.99/mo unless cancelled (18+, offer ends 31 Oct 2027, terms apply)",
      ],
    },
    {
      plan: "Pro (billed yearly)",
      price: "$7.99",
      period: "month, billed yearly",
      features: [
        "Same as Pro monthly",
        "ElevenMusic shows only the per-month rate ('$7.99/mo, billed yearly')",
      ],
    },
  ],

  pros: [
    "Built on licensed music -- ElevenMusic says its models are 'trained on licensed music with the permission of artists, labels and publishers', and ElevenLabs signed its first major-label deal, with Universal Music Group, on 2026-09-10. If you sell content, this matters a lot",
    "Voice is the differentiator: Vocals (2026-07-22) keeps your own voice -- or one from the Vocal Library -- consistent across tracks, and Voice to Song turns a rough phone recording into a finished track",
    "The free tier is genuinely usable: 25 songs a day with commercial use (with a credit), and $9.99/mo Pro adds 1,000 songs a month, streaming release and royalties",
    "Real editing tools: Composer (2026-08-25) regenerates one section without touching the rest, References matches an uploaded track's style, and Music v2.5 (2026-09-11) is the new default model",
    "Mobile-first UX is a clean fit for on-the-go content creators, and work picks up on the web where you left off on iPhone",
  ],
  cons: [
    "Android still missing as of 2026-11-05 -- iOS + web only (the site advertises 'ElevenMusic for iPhone')",
    "Free-tier songs need a 'Made with ElevenMusic' credit for commercial use, and only Pro songs can be released to Spotify and Apple Music",
    "Uploads are copyright-screened and tracks built on another artist's song cannot be downloaded -- 'Downloads are blocked on tracks that reference other artists' songs.'",
    "Three overlapping products: the same model family is sold as ElevenMusic (consumer), ElevenCreative Music (licensing and downloads for business) and the ElevenLabs API -- ElevenLabs points commercial content production to ElevenCreative, not ElevenMusic",
    "Head-to-head quality against Suno has not been re-tested since Music v2.5 (2026-09-11); earlier testing found it behind on complex vocal-instrument layering",
  ],
  knownIssues: [
    {
      description: "SOUNDCLOUD INTEGRATION -- PUBLISH ORIGINAL TRACKS STRAIGHT FROM ELEVENMUSIC, PLUS A THREE-MONTH OFFER FOR ARTIST PRO MEMBERS (2026-11-06, vendor-primary): 'We've launched a new integration with SoundCloud to help get your music heard. You can now create your track in ElevenMusic, and publish it on SoundCloud in a few simple steps.' Setup: 'Open your profile settings and go to Linked Accounts, then connect your SoundCloud account', then open an original track, add a description, genre and tags, and click Save to SoundCloud; the track 'uploads straight to your SoundCloud profile'. The post covers original tracks you created in ElevenMusic and does not say which plans can use the integration. **Offer:** 'If you're a SoundCloud Artist Pro member, you can unlock three months of ElevenMusic free, on us. Then it's $9.99/mo unless you cancel. 18+, ends 31 Oct 2027, terms apply.' That is a trial that converts to the standard Pro price, so set a reminder if you take it.",
      source: "ElevenLabs blog (elevenlabs.io/blog/soundcloud, RSS pubDate Fri, 06 Nov 2026) -- fetched 2026-11-11",
      date: "2026-11-06",
    },
    {
      description:
        "PRICING + LIMITS CHANGE (verified 2026-11-05, vendor-primary): elevenmusic.io/pricing now reads 'Free 25 songs a day.' with 'Commercial use with a “Made with ElevenMusic” credit', 5 downloads and 5 stem splits a day and 1 custom style or vocal. Pro is '$9.99 / month or $7.99/mo, billed yearly' with '1,000 songs a month', release to Spotify and Apple Music, unlimited downloads, royalties from streams, 500 stem splits a month and 5 custom styles and vocals. FAQ: 'Songs you make on Free can be used commercially with a “Made with ElevenMusic” credit.' The pricing page is undated; on 2026-09-11 ElevenLabs still described Pro as '400 lossless downloads per month', so the change landed after that. Android is still absent -- the site offers 'ElevenMusic for iPhone.'",
      source: "elevenmusic.io/pricing and elevenmusic.io (fetched 2026-11-05), elevenlabs.io/blog/music-v2-5-model (2026-09-11)",
      date: "2026-11-05",
    },
    {
      description:
        "CORRECTION (2026-11-05): this page listed the Free plan as 'Non-commercial personal use' at '7 songs/day', Pro as '500 tracks/mo' with '500+ GB cloud storage', and a 'Pro Annual $95.90/year' price. Vendor facts: Free allows commercial use with a 'Made with ElevenMusic' credit at 25 songs a day; Pro is 1,000 songs a month; no storage allowance appears on ElevenMusic's pricing page; and the yearly price is shown only as '$7.99/mo, billed yearly' with no annual total printed. The $95.90 figure came from press coverage, not ElevenLabs.",
      source: "elevenmusic.io/pricing (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description:
        "CORRECTION (2026-11-05): the product URL is elevenmusic.io, not elevenlabs.io/music. ElevenLabs: 'ElevenMusic is a standalone app available on iOS and web at elevenmusic.io' -- elevenlabs.io/music is the ElevenCreative music generator, a separate product aimed at business licensing and downloads.",
      source: "elevenlabs.io/blog/elevenmusic-elevencreative-music-and-elevenapi-understanding-the-difference (published 2026-06-16, updated 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description:
        "MUSIC v2.5 + UMG DEAL (2026-09-10 / 2026-09-11, vendor-primary): 'Music v2.5 is now the default for prompted and reference generation in ElevenMusic.' (2026-09-11; Music v2 stays available). A day earlier ElevenLabs announced a multi-year licensing and product deal with Universal Music Group -- 'This is our first agreement with a major label' -- including a new fan remix platform 'to be launched by ElevenLabs' and offered separately from ElevenMusic. ElevenLabs: 'This deal is separate from Music 2.5.'",
      source: "elevenlabs.io/blog/music-v2-5-model (JSON-LD 2026-09-11), elevenlabs.io/blog/umg (JSON-LD 2026-09-10)",
      date: "2026-09-11",
    },
    {
      description:
        "FEATURE RELEASES (Jun-Oct 2026, vendor-primary): Mixes (2026-06-18, a personalized 33-track playlist refreshed every Sunday), Tools (2026-07-02: Voice to Song, Loop Studio), Vocals and Styles (2026-07-22: 'a consistent voice', your own or from the Vocal Library), References (2026-07-23: upload a track to match its style; 'Uploads can range from 10 seconds to 5 minutes.'), Sounds (2026-08-13: 'a free library of AI sounds and loops'), Composer (2026-08-25: edit and regenerate one section without changing the rest) and Instant Soundtracks (2026-10-15, video scoring launched in ElevenCreative).",
      source: "elevenlabs.io/blog (introducing-mixes-on-elevenmusic, introducing-tools-on-elevenmusic, introducing-vocals-a-consistent-voice-for-your-elevenmusic-songs, introducing-references-sound-control-for-music-v2, sounds-on-elevenmusic-a-free-library-of-ai-sounds-and-loops, composer-section-by-section-song-editing-in-elevenmusic, introducing-instant-soundtracks; JSON-LD dates)",
      date: "2026-10-15",
    },
    {
      description:
        "VERSION BUMP (2026-05-26): **Music v2** launched -- genre switching mid-track, coherent fast rap delivery, and embedded sound effects composed into generated tracks (ElevenLabs: 'A single song can move from opera to heavy metal and back, sustain fast rap and dense lyrical delivery, and embed non-musical sound effects directly within the track'). Alongside it ElevenLabs cut Music v1 and v2 prices by up to 50% on the ElevenAPI and up to 40% for ElevenCreative self-serve customers",
      source: "ElevenLabs blog (elevenlabs.io/blog/introducing-music-v2), TechCrunch (2026-05-27)",
      date: "2026-05-26",
    },
    {
      description:
        "ElevenMusic web platform GA shipped 2026-04-29 (~4 weeks after the 2026-04-02 iOS launch). ElevenLabs disclosed launch metrics: $11M paid to creators via the voice library to date, 4,000+ independent and emerging artists creating on the platform, and Eleven Album Vol. 2 -- a curated label-style release featuring Danger Twins, Justin Love, and other artists. First named industry partner: Kevin Jonas Sr. (Founder & Chairman, Jonas Group Entertainment), who is quoted as a launch collaborator. Web GA closes the desktop-workflow gap that previously made apples-to-apples comparisons against Suno + Udio impossible. Android remains the only major-platform gap",
      source: "ElevenLabs blog (elevenlabs.io/blog/introducing-elevenmusic, 2026-04-29)",
      date: "2026-04-29",
    },
    {
      description:
        "Original iOS launch 2026-04-02 (press-reported). The launch-era plan details reported then (Free 7 songs/day, Pro $9.99/mo with 500 tracks) have since been superseded -- see the 2026-11-05 entries",
      source: "TechCrunch, Music Business Worldwide",
      date: "2026-04",
    },
    {
      description:
        "'Commercially safe' framing is the key product differentiator -- ElevenMusic's FAQ says 'Our models are trained on licensed music with the permission of artists, labels and publishers'. Check the plan a track was made on before using it in a brand campaign: free-tier songs need a 'Made with ElevenMusic' credit, and only Pro songs can go to streaming services",
      source: "elevenmusic.io/pricing FAQ (fetched 2026-11-05)",
      date: "2026-11-05",
    },
    {
      description:
        "Voice and music uploads are screened -- ElevenLabs: 'Every uploaded voice and music sample is screened for copyright compliance'. Same friction that exists on the ElevenLabs TTS side: you can't just upload any voice, and commercial publishing requires attestation",
      source: "elevenlabs.io/blog/introducing-vocals-a-consistent-voice-for-your-elevenmusic-songs, ElevenLabs terms of service",
      date: "2026-07-22",
    },
  ],
  bestFor:
    "Creators on iPhone or desktop who value a licensed-music model over raw track volume, want a usable free tier (25 songs a day, commercial use with a credit), and want their own voice on tracks via Vocals. Pro suits independent artists who want to release to Spotify and Apple Music and earn royalties.",
  notFor:
    "Android users (still no app), businesses licensing music for ads and video at scale (ElevenLabs points those to ElevenCreative Music or the API), and heavy producers who need more than 1,000 songs a month.",
  verdict:
    "ElevenMusic has become a much better deal since June. The free tier went from 7 songs a day for personal use to 25 songs a day with commercial use (with a 'Made with ElevenMusic' credit), and $9.99/mo Pro now covers 1,000 songs a month, streaming release and royalties. Music v2.5 is the default, Composer and Vocals make it a real editing tool rather than a one-shot generator, and the Universal Music Group deal strengthens the licensed-music pitch that is its main moat. Android is still missing, and businesses doing commercial content production are steered to ElevenCreative instead -- but for individual creators it is now one of the strongest-value AI music apps.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "ElevenLabs: Share your ElevenMusic creations directly to SoundCloud (2026-11-06)", url: "https://elevenlabs.io/blog/soundcloud", dateAccessed: "2026-11-11" },
    { name: "ElevenMusic official site", url: "https://elevenmusic.io", dateAccessed: "2026-11-05" },
    { name: "ElevenMusic pricing", url: "https://elevenmusic.io/pricing", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing Music v2.5 (2026-09-11)", url: "https://elevenlabs.io/blog/music-v2-5-model", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Universal Music Group and ElevenLabs strategic agreement (2026-09-10)", url: "https://elevenlabs.io/blog/umg", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: ElevenMusic, ElevenCreative Music, and ElevenAPI -- understanding the difference", url: "https://elevenlabs.io/blog/elevenmusic-elevencreative-music-and-elevenapi-understanding-the-difference", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Composer (2026-08-25)", url: "https://elevenlabs.io/blog/composer-section-by-section-song-editing-in-elevenmusic", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing Vocals (2026-07-22)", url: "https://elevenlabs.io/blog/introducing-vocals-a-consistent-voice-for-your-elevenmusic-songs", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing References (2026-07-23)", url: "https://elevenlabs.io/blog/introducing-references-sound-control-for-music-v2", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing Tools on ElevenMusic (2026-07-02)", url: "https://elevenlabs.io/blog/introducing-tools-on-elevenmusic", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing Mixes on ElevenMusic (2026-06-18)", url: "https://elevenlabs.io/blog/introducing-mixes-on-elevenmusic", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Sounds on ElevenMusic (2026-08-13)", url: "https://elevenlabs.io/blog/sounds-on-elevenmusic-a-free-library-of-ai-sounds-and-loops", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing Instant Soundtracks (2026-10-15)", url: "https://elevenlabs.io/blog/introducing-instant-soundtracks", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing Music v2 (2026-05-26)", url: "https://elevenlabs.io/blog/introducing-music-v2", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog: Introducing ElevenMusic (2026-04-29 web GA)", url: "https://elevenlabs.io/blog/introducing-elevenmusic", dateAccessed: "2026-11-05" },
    { name: "ElevenLabs blog RSS", url: "https://elevenlabs.io/blog/rss.xml", dateAccessed: "2026-11-05" },
    { name: "TechCrunch: ElevenLabs releases AI music app", url: "https://techcrunch.com/2026/04/02/elevenlabs-releases-a-new-ai-powered-music-generation-app/", dateAccessed: "2026-04-21" },
    { name: "Music Business Worldwide: ElevenMusic launch", url: "https://www.musicbusinessworldwide.com/elevenlabs-launches-elevenmusic-ios-app-taking-on-suno-and-udio-on-mobile/", dateAccessed: "2026-04-21" },
    { name: "ElevenLabs official site", url: "https://elevenlabs.io", dateAccessed: "2026-04-29" },
  ],
  affiliateUrl: "https://elevenmusic.io",
  status: "active",
  metaTitle: "ElevenMusic Review 2026: 25 Free Songs a Day, Music v2.5 and the UMG Deal",
  metaDescription:
    "ElevenMusic review (Nov 2026). Free: 25 songs/day with commercial use (credit required). Pro $9.99/mo or $7.99/mo yearly: 1,000 songs, Spotify/Apple Music release, royalties. Music v2.5 default, Composer, Vocals. iOS + web, no Android.",
};
