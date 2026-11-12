import { ToolReview } from "@/lib/types";

export const characterAi: ToolReview = {
  slug: "character-ai",
  name: "Character.AI",
  tagline: "**In Chapter 11 since Oct 12, 2026: Character.AI is running a court-supervised sale with Disney as stalking-horse bidder for certain assets, bids due Nov 24 and an auction set for Dec 1. The app stays online and subscriptions keep billing, but the company says the platform will be wound down if no workable bid emerges -- do not prepay for a year.** AI-character roleplay chat platform -- once 200M+ monthly visitors, now in a prolonged user exodus after the 2026-02-18 'Moderatedpocalypse' mass-delete and escalating TRAIGA-compliance restrictions. The alternatives market (Janitor AI, Chai, DreamGen) is now the real story",
  category: "ai-chatbots",
  url: "https://character.ai",

  scores: {
    easeOfUse: 8,
    outputQuality: 6,
    value: 6,
    features: 6,
    overall: 6.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "Unlimited messaging",
        "PipSqueak 3 and ShortSqueak chat styles",
        "Full ads, slow mode at busy times",
        "15 memory pins",
      ],
    },
    {
      plan: "c.ai lite (new 2026-09-28)",
      price: "$4.99",
      period: "month",
      features: [
        "Or $2.49 USD/week; pricing varies by region",
        "A daily amount of messages on premium chat styles (DeepSqueak, LongSqueak)",
        "No banner ads, fewer interstitial ads, less slow mode",
        "30 memory pins plus a Memory Usage bar",
      ],
    },
    {
      plan: "c.ai+",
      price: "$9.99",
      period: "month",
      features: [
        "Unlimited premium chat styles",
        "Zero ads, no slow mode",
        "Best memory, advanced Lorebook, Style Control",
        "Priority feature access",
      ],
    },
    {
      plan: "c.ai+ Annual",
      price: "$94.99",
      period: "year",
      features: [
        "Shown on character.ai/subscribe against a struck-through $119.88 (save 21%)",
        "Same benefits as monthly, auto-renews yearly",
        "Caution: the company is in Chapter 11 with a sale hearing set for Dec 3-4, 2026",
      ],
    },
  ],

  pros: [
    "Still the largest Character-chat platform by raw user count -- network-effect advantage on ready-made Characters even as usage erodes",
    "Mobile apps on iOS and Android are polished and snappy for casual roleplay",
    "Voice mode (Character Calls) works well for short conversations",
    "Persistent memory across sessions for registered users",
  ],
  cons: [
    "The company is in Chapter 11 (filed 2026-10-12) and its CEO left for Disney in September -- Character.AI itself says the platform will be wound down if the sale process produces no actionable bid, so the future of your Characters and chats depends on who buys what",
    "'Moderatedpocalypse' on 2026-02-18 -- an automated keyword + visual-signature sweep deleted entire fandom ecosystems (anime, celebrity-likeness, NSFW-adjacent bots) overnight. Users report Characters they built and trained over months wiped without notice",
    "TRAIGA (AI liability + copyright) enforcement layered on top of existing teen-safety restrictions -- the product is materially more restricted in 2026 than in 2024",
    "Traffic decline is real: Demandsage reports roughly 223M -> 153M monthly visits between Feb 2025 and Dec 2025, and the exodus has continued through Q1 2026",
    "Reddit r/CharacterAI_NSFW and r/CharacterAI subreddits are dominated by users migrating to Janitor AI, Chai AI, DreamGen, CrushOn, Spicychat. The competitive moat is gone",
    "Output quality is noticeably below frontier chatbots (ChatGPT, Claude, Grok) for anything non-roleplay -- this is a category-specific tool, not a general assistant",
  ],
  knownIssues: [
    {
      description: "CHAPTER 11 BANKRUPTCY + COURT-SUPERVISED SALE (filed 2026-10-12): Character Technologies, Inc. filed a voluntary Chapter 11 petition in the U.S. Bankruptcy Court for the District of Delaware (Case No. 26-11603) 'to facilitate a court-supervised sale of the company', citing 'significant legal, regulatory, and operational headwinds'. The company says the platform remains up, subscriptions remain active with billing unchanged for now, and users can export or delete their data -- but also: 'If such a bid is unavailable, however, the platform will be wound down.' On 2026-11-04 the court approved bidding procedures with **Disney Worldwide Services, Inc. as stalking-horse purchaser for certain assets** (agreement dated Oct 13; a transition services agreement with Disney dates to Sept 18). Key dates: sale objections due **Nov 18**, bids due **Nov 24**, auction **Dec 1**, sale hearing **Dec 3-4, 2026**. Character.AI expects the process to finish by the end of November or early December",
      source: "Character.AI blog (blog.character.ai/an-update-on-character-ai/, 2026-10-13 UTC; blog.character.ai/chapter-11-update-and-transaction-notice/, 2026-11-05)",
      date: "2026-10-12",
    },
    {
      description: "CEO TO DISNEY (2026-09-18): Character.AI announced that CEO Karandeep Anand is joining Disney in a newly created role as Senior Executive Vice President and Chief Technology Officer, and 'expects to be joined by members of Character's technical team'. The post said the app remained live; the Chapter 11 filing followed 24 days later",
      source: "Character.AI blog (blog.character.ai/the-next-chapter-of-entertainment-and-fandom/, 2026-09-18)",
      date: "2026-09-18",
    },
    {
      description: "PIPSQUEAK 3, SHORTSQUEAK + C.AI LITE (2026-09-28): two new free chat styles -- PipSqueak 3 (the new default for general roleplay, replacing PipSqueak 2, which moved to the Legacy menu with Rawr) and ShortSqueak (short, texting-style replies) -- plus a cheaper paid tier, **(c.ai) lite at $4.99 USD/month or $2.49 USD/week**, with a daily allowance of premium-style messages (DeepSqueak, LongSqueak), fewer ads and more memory pins. Unlimited messaging stays on every tier",
      source: "Character.AI blog (blog.character.ai/new-styles-new-plan/, 2026-09-28)",
      date: "2026-09-28",
    },
    {
      description: "CORRECTION (2026-11-11): the pricing block listed c.ai+ Annual at $120/year with a 'marginal discount'. Character.AI's subscribe page shows the yearly plan at **$94.99 per year** against a struck-through $119.88 ('save 21%'). The page was captured on its Yearly tab, so the $9.99 monthly figure is carried over from the previous review (it matches $119.88 / 12) rather than read off the page. The free tier is no longer best described as 'heavily moderated Characters' only -- the vendor comparison table lists ads, slow mode, basic memory and 15 pins as the free-plan limits",
      source: "Character.AI subscribe page (character.ai/subscribe, fetched 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "PENNSYLVANIA LAWSUIT -- UNAUTHORIZED PRACTICE OF MEDICINE (2026-05-05): The Shapiro Administration (PA Department of State) sued Character Technologies, Inc. under Pennsylvania's Medical Practice Act -- the first enforcement action of its kind by a US governor. Investigators documented a bot ('Emilie') that claimed to be a licensed psychiatrist, cited Imperial College London training, claimed UK and PA licensure, and produced a fake Pennsylvania medical license number. The state seeks a preliminary injunction stopping bots from misrepresenting themselves as licensed medical professionals. Adds regulatory risk on top of the existing TRAIGA-compliance burden",
      source: "PA Governor's newsroom (pa.gov, 2026-05-05), NPR, The Hill, NBC",
      date: "2026-05-05",
    },
    {
      description: "MEMORY UPGRADE + MODEL CONSOLIDATION (April-May 2026; PipSqueak 2 has since been replaced as default by PipSqueak 3, see 2026-09-28): **5/21 'Smarter Memory for Smarter Chats'** (vendor blog) -- Story Memory, Facts, and Memory Usage shipped, running on PipSqueak 2 (free tier) and DeepSqueak. CONSOLIDATION: legacy chat styles were retired around **May 8** (Roar and Pawly killed immediately; Meow and others moved to a Legacy menu then retired) with chats consolidated onto PipSqueak 2 -- announced ~4/28, drew significant community backlash. **Soft Launch came BACK as a c.ai+ exclusive** (paywalled behind the standing $9.99/mo subscription -- note c.ai+ has been $9.99 since 2023; this is NOT a price change, just a newly gated style). The 'cheaper model' rationale circulating on Reddit is community speculation, not vendor-stated",
      source: "Character.AI blog (blog.character.ai/memory/ 2026-05-21, blog.character.ai/pipsqueak2-and-more/ 2026-04-14), r/CharacterAI staff posts, PiunikaWeb",
      date: "2026-05-21",
    },
    {
      description: "2026-02-18 automated moderation sweep (the 'Moderatedpocalypse') removed large numbers of user-created Characters without warning or appeal. Affected bots spanned anime IP, celebrity likenesses, mature-adjacent personas, and miscellaneous content flagged by visual-signature + keyword matching. The subreddits and X discourse around the wipe still drives branded-search demand months later",
      source: "PiunikaWeb, AI Insights, HackerNoon, Storychat",
      date: "2026-02",
    },
    {
      description: "Teen safety restrictions + TRAIGA compliance introduced in late 2025 and tightened through 2026 mean the product is significantly more restrictive than the 2023-2024 version most existing users remember. Long-time users describe the current product as a 'shell' of what it was",
      source: "Reddit r/CharacterAI, HackerNoon case study",
      date: "2026-Q1",
    },
    {
      description: "Monthly visits dropped from ~223M (Feb 2025) to ~153M (Dec 2025) per Demandsage, a roughly 31% decline. Trajectory has not reversed in Q1 2026",
      source: "Demandsage Character AI statistics 2026",
      date: "2026-04",
    },
    {
      description: "User migration is visible on Reddit -- top posts in CharacterAI-adjacent subs are 'best alternatives' threads. Janitor AI (fewer restrictions, user-hosted API keys), Chai AI (mobile-first), DreamGen (writing-focused) and CrushOn/Spicychat (NSFW-permissive) are the most-cited migration destinations",
      source: "Reddit r/JanitorAI_Official, r/CharacterAI, Google Trends 'character ai alternatives'",
      date: "2026-04",
    },
  ],
  bestFor: "Casual users on the free tier who just want to chat with pre-made Characters and aren't attached to the older, less-moderated version of the product. Also still reasonable if you're new to AI-roleplay chat and don't know what you're missing.",
  notFor: "Anyone who needs a platform that will certainly exist in three months -- the company is mid-bankruptcy sale. Long-time users who built custom Characters pre-2026 and lost them in the Moderatedpocalypse. Also not for anyone who values creative latitude, NSFW-adjacent roleplay, or frontier response quality. The migration destinations (Janitor AI, Chai, DreamGen) cover those use cases better in 2026.",
  verdict: "Character.AI in 2026 is a very different product from the one that hit 200M+ monthly visitors in 2023-2024. The 2026-02-18 mass-delete, layered TRAIGA restrictions, and resulting ~30%+ traffic decline leave the platform in an awkward middle: big enough to still dominate on Character catalog size, small enough to be actively losing ground every month to focused alternatives. If you're picking a Character-chat platform from scratch today, the honest answer is: try Character.AI's free tier first (network effect still counts), then immediately evaluate Janitor AI, Chai, and DreamGen based on your use case. The c.ai+ subscription is hard to justify -- it buys speed, not creative freedom. UPDATE November 2026: all of that now sits under a bigger question. Character.AI filed for Chapter 11 on October 12, its CEO has gone to Disney, and a court-supervised auction is scheduled for December 1 with Disney as stalking-horse bidder for certain assets. The service is still running, but the company's own FAQ says it will be wound down if no workable bid appears. Use the free tier if you enjoy it, export anything you care about, and do not buy an annual plan until the sale outcome is known.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Character.AI blog: An Update on Character.ai (Chapter 11 filing)", url: "https://blog.character.ai/an-update-on-character-ai/", dateAccessed: "2026-11-11" },
    { name: "Character.AI blog: Chapter 11 Update and Transaction Notice (2026-11-05)", url: "https://blog.character.ai/chapter-11-update-and-transaction-notice/", dateAccessed: "2026-11-11" },
    { name: "Character.AI blog: The Next Chapter of Entertainment and Fandom (2026-09-18)", url: "https://blog.character.ai/the-next-chapter-of-entertainment-and-fandom/", dateAccessed: "2026-11-11" },
    { name: "Character.AI blog: introducing PipSqueak 3, ShortSqueak, and (c.ai) lite (2026-09-28)", url: "https://blog.character.ai/new-styles-new-plan/", dateAccessed: "2026-11-11" },
    { name: "Character.AI subscribe page", url: "https://character.ai/subscribe", dateAccessed: "2026-11-11" },
    { name: "PA Governor's newsroom: Shapiro Administration sues Character.AI over fake medical claim", url: "https://www.pa.gov/governor/newsroom/2026-press-releases/shapiro-administration-sues-character-ai-over-fake-medical-claim", dateAccessed: "2026-07-05" },
    { name: "PiunikaWeb: Character.AI moderation wave 2026-02-18", url: "https://piunikaweb.com/2026/02/18/character-ai-moderation-wave-bots-removed-2026/", dateAccessed: "2026-04-19" },
    { name: "HackerNoon: How C.AI lost millions of users", url: "https://hackernoon.com/how-characterai-lost-millions-of-its-users-a-case-study-of-negligence", dateAccessed: "2026-04-19" },
    { name: "AI Insights: What happened to Character AI", url: "https://aiinsightsnews.net/what-happened-to-character-ai/", dateAccessed: "2026-04-19" },
    { name: "Demandsage: Character.AI Statistics 2026", url: "https://www.demandsage.com/character-ai-statistics/", dateAccessed: "2026-04-19" },
    { name: "Reddit r/CharacterAI, r/JanitorAI_Official", dateAccessed: "2026-04-19" },
  ],
  affiliateUrl: "https://character.ai",
  status: "active",
  metaTitle: "Character.AI Review 2026: Chapter 11 Sale + Alternatives",
  metaDescription: "Character.AI review 2026. In Chapter 11 since Oct 12 with a Dec 1 auction and Disney as stalking-horse bidder. What it means for users, plus alternatives.",
};
