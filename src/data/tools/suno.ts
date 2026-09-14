import { ToolReview } from "@/lib/types";

export const suno: ToolReview = {
  slug: "suno",
  name: "Suno",
  tagline: "Type a sentence, get a full song back -- vocals, instruments, and all. **Suno v6 launched 2026-09-09**: the first model generation developed with industry partners (Warner Music Group, BMG, Believe), in three variants -- **v6** (Pro/Premier), **v6-wild** (Pro/Premier, more varied) and **v6-mini** (everyone, now the free model). Section-level edits, mashups and sampling by plain-language prompt; text/audio/image/video input. **All previous models (v4-v5.5) will be retired as v6 rolls out.** Download caps and a new ToS took effect 2026-09-03: Free 7 lifetime trial downloads, Pro 20/month, Premier 60/month (unlimited via Suno Studio), retroactive",
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
        "50 credits renew daily (10 songs) -- v6-mini is the free model since 2026-09-09 (pricing page: 'Best free model (v6-mini)'; v6 and v6-wild are Pro/Premier only)",
        "**No monthly song downloads** -- 7 lifetime trial downloads only, personal use (since 2026-09-03)",
        "Non-commercial use only",
        "4 concurrent generations (shared queue)",
        "No stem separation, no add-on credit purchases",
      ],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: [
        "**$8/mo billed annually (save 20%)** -- the pricing page renders the annual view by default",
        "2,500 credits/mo (up to 500 songs) -- v6 and v6-wild (since 2026-09-09); v5.5 and earlier still listed but being retired",
        "**20 song downloads per month** (since 2026-09-03)",
        "Commercial use rights for new songs made",
        "2 stem separation types; upload up to 30 min of audio; custom models",
        "10 concurrent generations, priority queue",
      ],
    },
    {
      plan: "Premier",
      price: "$30",
      period: "month",
      features: [
        "**$24/mo billed annually (save 20%)** -- the pricing page renders the annual view by default",
        "10,000 credits/mo (up to 2,000 songs) -- v6 and v6-wild (since 2026-09-09); v5.5 and earlier still listed but being retired",
        "**60 song downloads per month** -- unlimited when downloading via Suno Studio (since 2026-09-03)",
        "Access to Suno Studio 2.0 (MIDI, effects, automation, custom plugins)",
        "Commercial use rights for new songs made",
        "3 stem separation types; upload up to 30 min of audio; custom models",
        "10 concurrent generations, priority queue",
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
        "SUNO v6 SHIPS -- THE INDUSTRY-PARTNERED GENERATION THIS PAGE HAS BEEN WAITING ON SINCE APRIL, IN THREE MODELS, AND IT RETIRES EVERYTHING BEFORE IT (2026-09-09, vendor-primary, by CEO Mikey Shulman): Suno introduced **v6**, 'a new generation of music models developed with our industry partners, including **Warner Music Group, BMG and Believe**'. **THREE MODELS, TIERED BY PLAN:** **v6** -- the flagship, Pro and Premier only, 'reliable, precise and consistently delivers polished music across every genre and style'; **v6-wild** -- Pro and Premier, 'less predictable and more varied, producing unexpected, textured and ambitious results', pitched as an ideation model you refine back in v6; **v6-mini** -- 'a faster, more efficient version **available to everyone**', which Suno claims 'delivers better, faster results than any free model on any music creation platform'. **Verified on suno.com/pricing the same week: the Free tier now lists 'Best free model (v6-mini)' and Pro/Premier list 'Advanced models (v6 and v6-wild)'.** **NEW CAPABILITIES, ALL PROMPT-DRIVEN:** section-level editing of an existing song in plain language ('change the chorus so it's sung by a gospel choir') while preserving the rest; **mashups from multiple sources in one request** ('take the vocals from x, drums from y, and add new lyrics...'); **sample, isolate and build a beat in one workflow** ('sample the riff at 0:45, isolate the guitar, build a beat around it'); creation from a vibe or reference; **multimodal input -- text, audio, images and video**; and single-lyric edits without regenerating the song. **THE RETIREMENT IS NOW EXPLICIT AND TIED TO THE ROLLOUT:** '**As v6 rolls out, we will retire our previous models and move Suno entirely onto the v6 generation.**' Still no hard date, but this converts the 8/10 promise from 'when the new models launch' into an active process -- v4, v4.5, v4.5+, v5 and v5.5 are on their way out now, not later. **WHAT SUNO SAYS SHIPPED WITH IT ON THE SAFETY SIDE:** screening of uploaded audio and lyrics for unauthorized use, AI-use transparency, and (per the Believe post) audio watermarking and fingerprinting to identify Suno songs off-platform -- which, together with the 9/03 download caps, is the enforcement layer the label deals presumably required. **WHAT COMES NEXT, VENDOR ROADMAP:** 'opt-in experiences built around individual artists, where artists can choose to participate and get paid when they do' -- the same artist-licensing product ElevenLabs announced with UMG on 9/10, so this is now a two-horse race for the licensed-fan-remix category. **KEEP THE CLAIMS CALIBRATED:** every quality statement above is Suno's; there is no benchmark, no third-party listening test, and no published training-data disclosure for v6. 'Developed with' three partners is not the same as 'trained only on licensed material', and Suno does not say the latter. UMG and Sony litigation remains live and the Munich GEMA judgment still stands (see below). **PRACTICAL:** if you have Custom Models or a signature sound on v5.5, the export window is closing; the monthly download cap is now the binding constraint on getting your catalogue out before the old models disappear.",
      source: "Suno blog (suno.com/blog/introducing-v6, JSON-LD datePublished 2026-09-09, by-lined Mikey Shulman); Suno pricing page (suno.com/pricing, showing v6-mini free and v6/v6-wild on Pro/Premier) -- both fetched 2026-09-14",
      date: "2026-09-09",
    },
    {
      description:
        "BELIEVE + TUNECORE PARTNERSHIP -- INDEPENDENT-ARTIST DISTRIBUTION OPENS TO SUNO OUTPUT, FROM A DISTRIBUTOR THAT HAD REFUSED IT (2026-09-08, vendor-primary): the day before v6, Suno announced 'a global strategic partnership with global artist development company **Believe** and **TuneCore**, its platform for self-releasing artists'. Believe is named as a partner in the v6 model generation, and **'all tracks created by artists using Suno's new industry partner model will also become eligible to distribute through Believe and TuneCore'** to Spotify, Apple Music, Amazon Music and YouTube -- the first direct create-to-DSP path Suno has had. **THE REVERSAL IS THE NOTABLE PART, AND SUNO SAYS IT OPENLY:** 'Earlier this year, Believe and TuneCore said they would not distribute music made with models that did not meet their standards, including Suno's models at the time.' The partnership also states that the new **download limits were 'designed to prevent mass distribution to streaming services'** and that Suno 'recently introduced **audio watermarking and fingerprinting** to help identify Suno songs off-platform' -- both of which now apply to Believe/TuneCore-distributed tracks. **Scope check:** this is a distribution and product partnership for the v6 generation with one independent-sector distributor; it is not a settlement of the UMG/Sony cases and does not touch the GEMA judgment.",
      source: "Suno blog (suno.com/blog/believe-partnership, JSON-LD datePublished 2026-09-08) -- fetched 2026-09-14",
      date: "2026-09-08",
    },
    {
      description:
        "DOWNLOAD LIMITS AND A NEW TERMS OF SERVICE TOOK EFFECT 2026-09-03 -- VERIFIED LIVE ON THE VENDOR'S OWN PAGES (announced 2026-08-10, effective 2026-09-03, confirmed on suno.com/terms and suno.com/pricing on 2026-09-07): this is the single biggest change to what a Suno subscription actually buys since the free tier launched, and it executed on schedule. **THE DOWNLOAD CAPS, VERBATIM FROM THE ANNOUNCEMENT:** '**Free: Up to 7 (lifetime) trial downloads. Pro: 20 downloads per month. Premier: 60 downloads per month.**' Confirmed live on the pricing page, which now reads '**No monthly song downloads**' for Free, '**20 song downloads per month**' for Pro and '**60 song downloads per month**' for Premier. **For Premier subscribers using Suno Studio there are NO download limits** -- so Studio is now the unlimited-export route and the practical reason to be on Premier. Additional downloads beyond the cap are **available for purchase**. **THE PART THAT WILL SURPRISE EXISTING USERS, AND SUNO SAYS IT PLAINLY:** '**Limits apply to all downloads starting September 3, including songs created before that date.**' The caps are **retroactive to your whole back catalogue** -- a library of a thousand songs made under the old unlimited-download regime is now gated behind 20 or 60 exports a month. Everything stays playable and shareable on the platform; it is specifically *export* that is metered. **TRIAL DOWNLOADS ARE ONE-TIME AND NON-COMMERCIAL:** 'Trial downloads don\u2019t reset monthly, they are a one-time allowance', and 'commercial rights apply to songs downloaded on paid plans' -- so a free user's 7 downloads carry **no commercial rights at all**. **THE NEW TERMS OF SERVICE, EFFECTIVE THE SAME DAY (suno.com/terms now reads 'Effective Date: September 3, 2026'):** two substantive changes. (1) **Content and commercial use** -- Suno 'clarified the rights you have in your content and how commercial use of music generated with Suno works'; songs downloaded on paid plans 'remain yours to use commercially or personally'. (2) **Dispute resolution** -- updates to the **Arbitration Agreement and provisions governing mass arbitrations**. That second one is the one to read closely if you are a commercial user: mass-arbitration provisions are specifically designed to blunt coordinated claims, and Suno is currently a defendant in active copyright litigation on two continents (see the GEMA and UMG/Sony entries below). **SUNO'S STATED RATIONALE:** 'limiting downloads will make it harder for bad actors to mass-export music' and ensures 'the platform is used for intentional music creation'. **THIS EXECUTES THE POLICY SHIFT THIS PAGE HAS FLAGGED AS A WATCH ITEM SINCE APRIL** -- the 2026-04 entry below predicted 'free-tier downloads removed, current pre-Warner models scheduled for deprecation later in 2026'. Half of that has now happened on the record; the model retirement has not (see the next entry)",
      source: "Suno blog (suno.com/blog/suno-updates-tos, by-lined Aug 10, 2026, changes effective September 3, 2026); Suno Terms of Service (suno.com/terms, reading 'Effective Date: September 3, 2026'); Suno pricing page (suno.com/pricing) -- all three fetched 2026-09-07",
      date: "2026-09-03",
    },
    {
      description:
        "**[SUPERSEDED 2026-09-09 -- the new generation is v6, launched that day; see the v6 entry above. Retirement of v4-v5.5 is now tied to the v6 rollout ('As v6 rolls out, we will retire our previous models'), still with no hard date. Kept for the record of what was promised.]** SUNO HAS CONFIRMED THAT ALL CURRENT MODELS WILL BE RETIRED -- NO DATE, AND THIS IS THE BIGGEST UNPRICED RISK ON THE PLATFORM (stated 2026-08-10, still undated as of 2026-09-07): in the same post that set the download caps, Suno announced a coming '**new generation of Suno models, developed in partnership with the music industry**' and stated, verbatim: '**When the new models launch, all prior models will be retired.**' That means **v5.5, v5, v4.5+, v4.5 and v4 are all scheduled to disappear**, not be kept as legacy options. **WHAT SUNO PROMISES IS PRESERVED IS NARROWER THAN IT FIRST READS:** 'everything you\u2019ve already made will remain in your library. Every song will continue to be playable and shareable, and you can still use existing songs as the basis for covers and remixes.' So **your outputs survive; your ability to generate new material in the current models' voice does not.** If you have built a sound around a specific model version -- or a Custom Model tuned on your own audio under v5.5 -- there is no vendor commitment that it survives the transition. **THE CLAIMS ABOUT THE NEW MODELS ARE VENDOR-ONLY AND UNQUANTIFIED:** 'better than anything we\u2019ve ever released - on every metric we\u2019ve ever measured', generating 'outputs faster', 'higher fidelity audio', and 'more control'. **No benchmark, no sample, no date, and no third-party evaluation exists** -- treat all of it as marketing until the models ship. **WHY THIS CONNECTS TO THE LITIGATION:** these are the industry-partnered models trailed since the Warner deal (Dec 2025) and the BMG partnership (2026-08-12), so the retirement is very likely the point at which Suno stops serving models trained on the disputed corpus. **PRACTICAL ADVICE: if you rely on a current model, export what you need while your monthly download allowance is the only constraint** -- once the models are retired, regeneration is not an option",
      source: "Suno blog (suno.com/blog/suno-updates-tos, 'New models coming soon' section) -- fetched 2026-09-07",
      date: "2026-09-03",
    },
    {
      description:
        "SUNO STUDIO 2.0 SHIPPED 2026-08-13 -- AND IT IS NOW THE ONLY UNLIMITED-DOWNLOAD PATH (vendor-primary, caught 2026-09-07 on a staleness check; this page had never recorded it): Studio 2.0 is a Premier-tier DAW upgrade that materially changes who Suno is for. **MIDI, described by Suno as 'the most requested addition to Studio'** -- import, record and edit MIDI directly on the timeline, plus a **new wavetable synth** for sound design, and a genuinely novel touch: **MIDI clips can be used as a prompt for new audio generations**. You can play notes from a typing keyboard if you have no controller. **CHAT BAR (BETA)** -- a conversational production assistant that can 'create instruments and vocals from scratch' and **design new plugins**, and will tidy up a session on request. **ADVANCED STEM SEPARATION** -- you can bring in audio from outside Suno, split it into stems and rearrange it in Studio, which makes Studio useful on material Suno did not generate. **AUDIO EFFECTS AND USER-DESIGNED PLUGINS.** **WHY IT MATTERS MORE NOW THAN IT DID IN AUGUST:** the 2026-09-03 download caps exempt Premier subscribers downloading through Studio, so Studio 2.0 went from 'nice extra on the top tier' to **the mechanism that avoids a hard export cap**. Read the Premier tier as a Studio subscription with generation attached, not the other way round",
      source: "Suno blog (suno.com/blog/studio-2, by-lined Aug 13, 2026) -- fetched 2026-09-07",
      date: "2026-08-13",
    },
    {
      description:
        "LANDMARK GLOBAL PARTNERSHIP WITH BMG (2026-08-12, vendor-primary; recorded 2026-09-07): CEO Mikey Shulman announced a global partnership with **BMG, one of the largest music companies**, and stated explicitly that the deal '**is part of our upcoming launch of our first music model developed with the music industry**'. This is the second major-label agreement after the Warner deal (Dec 2025) and it dates the licensed-model programme: BMG is a named partner in the model generation that will **retire all current models** (see the entry above). Suno frames the economics as opt-in -- 'new economic opportunities for artists and songwriters that **opt-in** to them' -- which is the structural difference from the training practices at issue in the GEMA and UMG/Sony cases. **KEEP THE SCOPE HONEST: this is BMG, not a blanket industry licence.** Universal and Sony litigation is still live (see below), and the Munich GEMA judgment still stands against Suno pending appeal. A partnership with one major does not resolve either",
      source: "Suno blog (suno.com/blog/suno-partnership-bmg, by-lined Aug 12, 2026, by Mikey Shulman) -- fetched 2026-09-07",
      date: "2026-08-12",
    },
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
    "Update 2026-09-14: v6 (Sept 9) is the industry-partnered generation Suno promised, and the first time the free tier gets a current-generation model (v6-mini); the editing, mashup and sampling prompts address the control complaint below head-on, but they are vendor claims until independently tested, and the v4-v5.5 retirement is now in motion. Original verdict: Suno is the fastest way to go from an idea to a full song, and for casual use it's genuinely fun. But the lack of editing control and the inconsistent vocal quality mean it's better suited for content creators and hobbyists than anyone trying to produce polished tracks. The free tier is worth trying -- just don't expect studio quality.",

  lastReviewedDate: "2026-09-14",
  dataSources: [
    { name: "Suno blog: Introducing v6 -- v6 / v6-wild / v6-mini, industry-partnered generation, prior models to be retired as it rolls out (2026-09-09)", url: "https://suno.com/blog/introducing-v6", dateAccessed: "2026-09-14" },
    { name: "Suno blog: A New Partnership with Believe and TuneCore -- distribution eligibility for v6 output, watermarking (2026-09-08)", url: "https://suno.com/blog/believe-partnership", dateAccessed: "2026-09-14" },
    { name: "Suno pricing page -- v6-mini listed as the free model, v6 + v6-wild on Pro/Premier (verified 2026-09-14)", url: "https://suno.com/pricing", dateAccessed: "2026-09-14" },
    { name: "Suno blog: An update to our downloads policy and Terms of Service (by-lined 2026-08-10, effective 2026-09-03)", url: "https://suno.com/blog/suno-updates-tos", dateAccessed: "2026-09-07" },
    { name: "Suno Terms of Service -- reads 'Effective Date: September 3, 2026'", url: "https://suno.com/terms", dateAccessed: "2026-09-07" },
    { name: "Suno pricing page -- live per-tier download caps and credit allowances", url: "https://suno.com/pricing", dateAccessed: "2026-09-07" },
    { name: "Suno blog: Introducing Studio 2.0 (2026-08-13)", url: "https://suno.com/blog/studio-2", dateAccessed: "2026-09-07" },
    { name: "Suno blog: Announcing a Landmark Global Partnership with BMG (2026-08-12)", url: "https://suno.com/blog/suno-partnership-bmg", dateAccessed: "2026-09-07" },
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
  metaTitle: "Suno Review 2026: v6 Launches Sept 9 (v6, v6-wild, v6-mini) + Download Limits",
  metaDescription: "Suno review. Suno v6 launched September 9 2026 -- the industry-partnered generation (Warner, BMG, Believe) in three models: v6 and v6-wild for Pro/Premier, v6-mini free for everyone. Prompt-based section edits, mashups and sampling; all older models to be retired. Download limits since Sept 3: Free 7 lifetime, Pro 20/mo, Premier 60/mo. Plus the GEMA ruling.",
};
