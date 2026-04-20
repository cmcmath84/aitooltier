import { ToolReview } from "@/lib/types";

export const characterAi: ToolReview = {
  slug: "character-ai",
  name: "Character.AI",
  tagline: "AI-character roleplay chat platform -- once 200M+ monthly visitors, now in a prolonged user exodus after the 2026-02-18 'Moderatedpocalypse' mass-delete and escalating TRAIGA-compliance restrictions. The alternatives market (Janitor AI, Chai, DreamGen) is now the real story",
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
        "Unlimited message credits",
        "Heavily moderated Characters (post-Moderatedpocalypse)",
        "Ad-supported on consumer tiers",
      ],
    },
    {
      plan: "c.ai+",
      price: "$9.99",
      period: "month",
      features: [
        "Faster model responses",
        "Early access to new features",
        "Priority chat queue",
      ],
    },
    {
      plan: "c.ai+ Annual",
      price: "$120",
      period: "year",
      features: [
        "Same benefits as monthly, billed yearly",
        "Marginal discount vs monthly",
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
    "'Moderatedpocalypse' on 2026-02-18 -- an automated keyword + visual-signature sweep deleted entire fandom ecosystems (anime, celebrity-likeness, NSFW-adjacent bots) overnight. Users report Characters they built and trained over months wiped without notice",
    "TRAIGA (AI liability + copyright) enforcement layered on top of existing teen-safety restrictions -- the product is materially more restricted in 2026 than in 2024",
    "Traffic decline is real: Demandsage reports roughly 223M -> 153M monthly visits between Feb 2025 and Dec 2025, and the exodus has continued through Q1 2026",
    "Reddit r/CharacterAI_NSFW and r/CharacterAI subreddits are dominated by users migrating to Janitor AI, Chai AI, DreamGen, CrushOn, Spicychat. The competitive moat is gone",
    "Output quality is noticeably below frontier chatbots (ChatGPT, Claude, Grok) for anything non-roleplay -- this is a category-specific tool, not a general assistant",
  ],
  knownIssues: [
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
  notFor: "Long-time users who built custom Characters pre-2026 and lost them in the Moderatedpocalypse. Also not for anyone who values creative latitude, NSFW-adjacent roleplay, or frontier response quality. The migration destinations (Janitor AI, Chai, DreamGen) cover those use cases better in 2026.",
  verdict: "Character.AI in 2026 is a very different product from the one that hit 200M+ monthly visitors in 2023-2024. The 2026-02-18 mass-delete, layered TRAIGA restrictions, and resulting ~30%+ traffic decline leave the platform in an awkward middle: big enough to still dominate on Character catalog size, small enough to be actively losing ground every month to focused alternatives. If you're picking a Character-chat platform from scratch today, the honest answer is: try Character.AI's free tier first (network effect still counts), then immediately evaluate Janitor AI, Chai, and DreamGen based on your use case. The c.ai+ subscription is hard to justify -- it buys speed, not creative freedom.",

  lastReviewedDate: "2026-04-19",
  dataSources: [
    { name: "PiunikaWeb: Character.AI moderation wave 2026-02-18", url: "https://piunikaweb.com/2026/02/18/character-ai-moderation-wave-bots-removed-2026/", dateAccessed: "2026-04-19" },
    { name: "HackerNoon: How C.AI lost millions of users", url: "https://hackernoon.com/how-characterai-lost-millions-of-its-users-a-case-study-of-negligence", dateAccessed: "2026-04-19" },
    { name: "AI Insights: What happened to Character AI", url: "https://aiinsightsnews.net/what-happened-to-character-ai/", dateAccessed: "2026-04-19" },
    { name: "Demandsage: Character.AI Statistics 2026", url: "https://www.demandsage.com/character-ai-statistics/", dateAccessed: "2026-04-19" },
    { name: "Reddit r/CharacterAI, r/JanitorAI_Official", dateAccessed: "2026-04-19" },
  ],
  affiliateUrl: "https://character.ai",
  status: "active",
  metaTitle: "Character.AI Review 2026: After the Moderatedpocalypse + Best Alternatives",
  metaDescription: "Character.AI review 2026. The Feb 18 Moderatedpocalypse, 30% traffic decline, TRAIGA restrictions. Alternatives: Janitor AI, Chai, DreamGen. Honest scores + pricing.",
};
