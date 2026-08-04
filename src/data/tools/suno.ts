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
        "SOURCE-CODE LEAK + DATA BREACH EXPOSES TRAINING-DATA SCRAPING (mid-July 2026, first reported by 404 Media ~7/15, covered by TechCrunch): a hacker leaked Suno source code after a **November 2025 supply-chain compromise** (traced to the Shai-Hulud npm attack) that captured an employee's credentials. The code allegedly documents mass scraping of copyrighted audio -- **YouTube Music (~113,879 hrs), Genius (~17,615 hrs), Deezer (~12,287 hrs)**, plus Pond5/Jamendo/Freesound/IMSLP, podcast RSS feeds, and stock libraries (hours per Music Business Worldwide / 404 Media). A parallel **user-data breach** reportedly exposed data on tens of millions of accounts (~55M cited), including emails, phone numbers, and partial credit-card / Stripe payment metadata. Suno characterized it as a 'limited security incident that was quickly contained,' said the exposed code was 'outdated / no longer in use,' and reportedly did not notify customers of the Nov 2025 breach. LEGAL WEIGHT: labels argue the scraping deliberately circumvented YouTube's protections (a DMCA / terms-of-service violation) -- potentially a 'smoking gun' that undercuts Suno's fair-use defense in the pending GEMA and UMG/Sony cases",
      source: "404 Media (404media.co/hack-reveals-suno-ai-music-generator-scraped-youtube-deezer-and-genius/), TechCrunch (2026-07-15), Music Business Worldwide",
      date: "2026-07-15",
    },
    {
      description:
        "SUNO LOST THE GEMA CASE -- FIRST EUROPEAN RULING THAT AI MUSIC TRAINING NEEDS A LICENCE (verdict delivered 2026-07-31, **Landgericht München I (Munich I Regional Court), 42nd Civil Chamber, case 42 O 763/25**, presiding judge Elke Schwager): the court ruled **against Suno**, finding that its models reproduce GEMA's repertoire and that both the **training in the USA** and the **storage and reproduction of the outputs in Europe** infringe copyright. The court's central factual finding, verbatim: **'The musical pieces in question are reproducibly contained in the defendant's models, versions v3.5 and v4'** -- and that 'randomness as the cause of their playback can be ruled out.' Six works were tested: **'Atemlos durch die Nacht', 'Rasputin', 'Big in Japan', 'Forever Young', the refrain of 'Mambo No. 5', and 'Daddy Cool'** (the case covered musical compositions, not lyrics). The court also found the training involved **stream-ripping from YouTube while circumventing technical protection measures** -- which connects directly to the mid-July source-code leak described above. GEMA was awarded **injunctive relief, disclosure (to calculate damages), and damages -- with the amount not yet determined**. The significance is the extraterritorial reach: this is the first European decision holding that training on protected works without a licence can infringe **even though the training happened outside the EU**, with the court stating that even under US copyright law AI providers need a GEMA licence. **The judgment is NOT final and IS appealable** -- the court's own press release states 'Das Urteil ist nicht rechtskräftig' (the judgment is not legally final). Suno's statement, verbatim: 'We trained our models to create new songs, not reproduce existing ones, and built protections into our platform. We disagree with today's ruling...and are evaluating all available options, including an appeal.' GEMA CEO Dr. Tobias Holzmüller: 'AI models built on stolen intellectual property have no protection under the law.' This is GEMA's **second** win in the same court, after its November 2025 judgment against OpenAI. PRACTICAL READ FOR USERS: nothing changes in the product today, but if the ruling survives appeal, German/EU commercial use of Suno output carries real licensing risk, and Suno's economics change if it must licence European repertoire",
      source: "Landgericht München I press release (justiz.bayern.de, case 42 O 763/25), GEMA (gema.de/de/w/suno-entscheidung-2026), JUVE Patent, Music Ally (2026-07-31), Music Week (2026-07-31)",
      date: "2026-07-31",
    },
    {
      description:
        "US CASE IS A 2027 TIMELINE, NOT IMMINENT (corrected 2026-07-22, still accurate 2026-08-03): **UMG/Sony v. Suno (D. Mass., Chief Judge F. Dennis Saylor IV) is NOT near a ruling** -- CORRECTION to earlier 'July 2026 summary-judgment hearing' reporting: the court **reset its schedule on 2026-06-30, with dispositive (summary-judgment) motions now due April 9, 2027**. So the Munich verdict above is the only decided case; the US fair-use question remains open into 2027+. The mid-July source-code leak (see entry above) is likely to feature in the US proceeding",
      source: "CourtListener docket 68878608 (UMG Recordings v. Suno, schedule reset), TechTimes (2026-07-10)",
      date: "2026-08-03",
    },
    {
      description:
        "FUNDING + LICENSED MODEL (2026-06-03): Suno raised **$400M+ Series D at a $5.4B post-money valuation**, led by Bond Capital (IVP, Forerunner, USV, Alkeon, Lightspeed, Menlo, Matrix + unnamed artists/songwriters participating) -- more than doubling the $2.45B valuation from ~6 months prior. CEO Mikey Shulman confirmed the first industry-sanctioned model is a **Warner Music Group partnership**, currently in testing, rolling out 'in the coming months' -- note this is WMG-specific (post-settlement), NOT a blanket music-industry license; Sony and UMG litigation continues with a summary-judgment hearing set for July 2026. **Suno v6 remains unreleased** -- vendor model timeline still tops out at V5.5; treat v6 release-date claims as rumor",
      source: "Hollywood Reporter (suno-announces-400m-funding-round-5-4b-valuation), Billboard, Suno help center model timeline",
      date: "2026-06-03",
    },
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

  lastReviewedDate: "2026-08-03",
  dataSources: [
    { name: "TechCrunch: Hack suggests Suno scraped YouTube for training data (2026-07-15)", url: "https://techcrunch.com/2026/07/15/hack-suggests-ai-music-generator-suno-scraped-youtube-for-training-data/", dateAccessed: "2026-07-22" },
    { name: "404 Media: Hack reveals Suno scraped YouTube, Deezer, and Genius", url: "https://www.404media.co/hack-reveals-suno-ai-music-generator-scraped-youtube-deezer-and-genius/", dateAccessed: "2026-07-22" },
    { name: "MLex: GEMA-Suno copyright ruling postponed to July 31", url: "https://www.mlex.com/mlex/articles/2481789/gema-suno-copyright-ruling-postponed-by-munich-court-to-july-31", dateAccessed: "2026-07-22" },
    { name: "CourtListener: UMG Recordings v. Suno docket (schedule reset, motions due April 2027)", url: "https://www.courtlistener.com/docket/68878608/umg-recordings-inc-v-suno-inc/", dateAccessed: "2026-07-22" },
    { name: "Suno blog: v5.5", url: "https://suno.com/blog/v5-5", dateAccessed: "2026-04-18" },
    { name: "Music Business Worldwide: Suno v5.5", url: "https://www.musicbusinessworldwide.com/suno-launches-v5-5-ai-model-with-voice-capture-and-personalization-features/", dateAccessed: "2026-04-18" },
    { name: "Digital Music News: Suno-UMG impasse", url: "https://www.digitalmusicnews.com/2026/04/09/suno-universal-music-lawsuit-settlement-impasse/", dateAccessed: "2026-04-18" },
    { name: "Reddit r/SunoAI", dateAccessed: "2026-04-18" },
    { name: "Landgericht München I: press release on the Suno judgment (case 42 O 763/25, 2026-07-31)", url: "https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2026/16.php", dateAccessed: "2026-08-03" },
    { name: "GEMA: Suno decision (2026-07-31)", url: "https://www.gema.de/de/w/suno-entscheidung-2026", dateAccessed: "2026-08-03" },
    { name: "JUVE Patent: Munich Regional Court stops Suno using GEMA-protected music", url: "https://www.juve-patent.com/cases/munich-regional-court-stops-suno-using-gema-protected-music/", dateAccessed: "2026-08-03" },
    { name: "Music Ally: GEMA wins its copyright-infringement lawsuit against Suno (2026-07-31)", url: "https://musically.com/2026/07/31/german-collecting-society-gema-wins-its-copyright-infringement-lawsuit-against-suno/", dateAccessed: "2026-08-03" },
    { name: "Music Week: GEMA wins court ruling on breach of copyright by Suno (2026-07-31)", url: "https://www.musicweek.com/publishing/read/gema-wins-court-ruling-on-breach-of-copyright-by-ai-music-firm-suno/094644", dateAccessed: "2026-08-03" },
    { name: "Variety: Suno loses landmark AI lawsuit to GEMA (2026-07-31)", url: "https://variety.com/2026/digital/news/suno-loses-ai-lawsuit-gema-1236825010/", dateAccessed: "2026-08-03" },
    { name: "Deadline: German court rules against Suno (2026-07-31)", url: "https://deadline.com/2026/07/ai-copyright-lawsuit-germany-suno-1237014566/", dateAccessed: "2026-08-03" },
  ],
  affiliateUrl: "https://suno.com",
  status: "active",
  metaTitle: "Suno Review 2026: AI Music Generator + Suno Lost the GEMA Copyright Case (July 31)",
  metaDescription:
    "Suno review. Generate full songs with vocals from a text prompt. Plus the July 31, 2026 Munich ruling that Suno infringed copyright -- injunction, disclosure and damages -- the source-code leak, and where the US case stands. Scores, pricing, known issues.",
};
