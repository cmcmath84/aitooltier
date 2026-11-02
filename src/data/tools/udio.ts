import { ToolReview } from "@/lib/types";

export const udio: ToolReview = {
  slug: "udio",
  name: "Udio",
  tagline: "AI music generation that leans harder into audio fidelity and sonic detail than the competition -- but under its transition terms since 2025-10-29 it is personal, non-commercial use only, with songs kept on-platform and downloads disabled",
  category: "ai-music-generators",
  url: "https://udio.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 5,
    features: 7,
    overall: 6.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "10 credits/day and 100 credits/month (no rollovers)",
        "Up to 4 songs generating at the same time",
        "Limit of 3 full-length (2:10) song generations per day",
        "Personal, non-commercial use only; downloads disabled",
      ],
    },
    {
      plan: "Standard",
      price: "$10",
      period: "month",
      features: [
        "$8/month billed annually ($96/year)",
        "2,400 credits/mo (monthly credit limit, no rollovers)",
        "2-minute generations without the 3-per-day limit; up to 6 songs at the same time",
        "Voice Control, music and lyric editing, songs from uploaded audio, style references, custom cover art",
        "Personal, non-commercial use only; no downloads (transition terms)",
      ],
    },
    {
      plan: "Pro",
      price: "$30",
      period: "month",
      features: [
        "$24/month billed annually ($288/year)",
        "6,000 credits/mo (monthly credit limit, no rollovers)",
        "Up to 10 songs generating at the same time",
        "All features from other plans",
        "Personal, non-commercial use only; no downloads (transition terms)",
      ],
    },
  ],

  pros: [
    "Audio quality is noticeably better than Suno -- instruments sound more realistic and the mix is cleaner",
    "Handles complex genres like jazz, classical, and prog rock better than any other AI music tool",
    "The inpainting feature lets you regenerate just a section of a song instead of starting over",
    "Vocal clarity and pronunciation are a step above the competition, especially on English lyrics",
    "Licensed footing: partnerships with Universal Music Group (2025-10-29) and Warner Music Group (2025-11-19, which also resolved WMG's copyright litigation), and paid credit limits were raised at the UMG switch-over (Standard 1,200 to 2,400; Pro 4,800 to 6,000)",
  ],
  cons: [
    "You cannot download what you make: Udio disabled downloading of audio, video, and stems on 2025-10-29, and its terms limit Output to 'personal and non-commercial purposes'. Songs can only be shared via udio.com links -- a dealbreaker for anyone who wants tracks for videos, streaming, or client work",
    "The interface is less intuitive than Suno -- more options but also more confusing for beginners",
    "Generation times are slower, especially during peak hours when the queue backs up",
    "Still no real mixing controls -- you can't adjust individual instrument levels or pan",
    "The licensed next-generation platform promised alongside the label deals had not appeared on udio.com as of 2026-11-02 -- the service still runs the v1, v1.5, and v1.5 Allegro models under transition terms",
  ],
  knownIssues: [
    {
      description:
        "TRANSITION TERMS: NO DOWNLOADS, NO COMMERCIAL USE (since 2025-10-29). Udio's UMG help article: 'On October 29, 2025, Udio entered into a partnership with Universal Music Group... Note that downloading of audio, video, and stems has been disabled.' The Terms of Service (Last Revised on November 12, 2025) say 'you may use Output solely for your personal and non-commercial purposes, provided that you may not download any copies of your Output from the App for any purpose.' Earlier versions of this page listed 'Commercial use' on Standard and Pro -- that is no longer true. The WMG help article confirms 'Udio is still governed by our transition ToS that was put into place on 29 October' On 2026-11-02 this page's value score was lowered from 7 to 5 (overall 7.3 to 6.8): it had assumed paid plans included downloads and commercial use.",
      source: "Udio Help Center: Changes associated with the UMG partnership (modified 2026-02-17); Udio Terms of Service (last revised 2025-11-12); Udio Help Center: Udio-WMG partnership",
      date: "2025-10-29",
    },
    {
      description:
        "Credit limits raised at the UMG switch-over: 'The Standard subscription monthly credit limit has been increased from 1200 to 2400. The Pro subscription monthly credit limit has been increased from 4800 to 6000.' All subscribers also got 'a one-time grant of 1000 extra, non-expiring credits'. Current pricing page: Standard $10/mo ($8/mo billed annually, $96/yr) with 2,400 credits; Pro $30/mo ($24/mo billed annually, $288/yr) with 6,000 credits; Free 10 credits/day and 100/month; add-on credits 100 for $3.00 or 1,000 for $25.00",
      source: "Udio Help Center: Changes associated with the UMG partnership; udio.com/pricing",
      date: "2026-11-02",
    },
    {
      description:
        "Udio signed a Kobalt licensing deal on 2026-04-10 -- now has licensing agreements with UMG, WMG, Merlin, and Kobalt. Next-gen platform announced with stem separation, no raw downloads, and a royalty-pool model for licensed-song training, with a Summer 2026 public release planned. As of 2026-11-02 no launch is visible on udio.com: the blog's newest post is 2025-11-19 and the help center still describes the transition-era v1, v1.5, and v1.5 Allegro models",
      source: "Music Ally, CBC News (Kobalt deal); udio.com/blog and Udio Help Center (status check 2026-11-02)",
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
    "Hobbyists and music enthusiasts who want higher audio fidelity and nuanced genre handling for personal listening and sharing via udio.com links -- not for anything you need to download or use commercially.",
  notFor:
    "Creators who need downloadable audio, stems, or commercial rights (YouTube background music, client work, releases) -- Udio's transition terms allow personal, non-commercial use only with downloads disabled. Also not for casual users who just want the simplest path to a finished song without tweaking settings.",
  verdict:
    "Udio still trades ease of use for better output quality, and the inpainting feature is a genuine differentiator. But since 2025-10-29 it has been a personal, non-commercial, on-platform service: downloads of audio, video, and stems are disabled and the terms bar commercial use, while the licensed next-gen platform tied to its UMG and WMG deals has not shown up on udio.com as of November 2026. The paid plans now include more credits (2,400 on Standard, 6,000 on Pro) at the same $10 and $30 prices, but if you need files you can actually use outside Udio, look elsewhere.",

  lastReviewedDate: "2026-11-02",
  dataSources: [
    { name: "Udio pricing page", url: "https://www.udio.com/pricing", dateAccessed: "2026-11-02" },
    { name: "Udio Help Center: Changes associated with the UMG partnership", url: "https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership", dateAccessed: "2026-11-02" },
    { name: "Udio Help Center: Udio-WMG partnership", url: "https://help.udio.com/en/articles/12874375-udio-warner-music-group-wmg-partnership", dateAccessed: "2026-11-02" },
    { name: "Udio Terms of Service (last revised 2025-11-12)", url: "https://www.udio.com/terms-of-service", dateAccessed: "2026-11-02" },
    { name: "Udio Help Center: Credits and credit limits", url: "https://help.udio.com/en/articles/10739134-credits-and-credit-limits", dateAccessed: "2026-11-02" },
    { name: "Udio blog", url: "https://www.udio.com/blog", dateAccessed: "2026-11-02" },
    { name: "Music Ally: Udio Kobalt deal 2026-04-10", url: "https://musically.com/2026/04/10/udio-signs-its-latest-ai-music-licensing-deal-with-kobalt/", dateAccessed: "2026-04-18" },
    { name: "CBC: Warner/Udio AI music", url: "https://www.cbc.ca/news/entertainment/warner-udio-ai-music-9.6986740", dateAccessed: "2026-04-18" },
    { name: "Reddit r/udio", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://udio.com",
  status: "active",
  metaTitle: "Udio Review 2026: Higher-Fidelity AI Music, No Downloads",
  metaDescription:
    "Udio review. Better audio quality than Suno and inpainting for section editing, but personal non-commercial use only with downloads disabled since Oct 2025. Standard $10 (2,400 credits), Pro $30 (6,000 credits).",
};
