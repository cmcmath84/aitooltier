import { ToolReview } from "@/lib/types";

export const siriAi: ToolReview = {
  slug: "siri-ai",
  name: "Siri AI (Apple)",
  tagline: "Apple's ground-up Siri rebuild, unveiled at WWDC 2026 (June 8) -- conversational, on-screen aware, searches your personal data across apps, gets its own app with synced history. Built on Apple Foundation Models developed in collaboration with Google's Gemini. Developer betas now; public beta in July; ships this fall with iOS 27. Not in the EU (iPhone/iPad) or China at launch.",
  category: "ai-chatbots",
  url: "https://www.apple.com/apple-intelligence/",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Included with supported devices",
      price: "$0",
      features: [
        "No subscription -- ships free with iOS 27 / iPadOS 27 / macOS 27 / watchOS 27 / visionOS 27 (fall 2026)",
        "Requires iPhone 16 or newer, iPhone 15 Pro/Pro Max, A17 Pro iPad mini, M1+ iPads and Macs, Apple Vision Pro, Apple Watch Series 9+/Ultra 2/SE 3",
        "Dedicated Siri app with conversation history synced via iCloud",
        "English-only at launch; user beta 'later this year'",
      ],
    },
  ],

  pros: [
    "Deep system integration no third-party assistant can match -- on-screen awareness, personal-context search across Messages/Mail/Photos, and system-wide actions on ~2 billion Apple devices",
    "Free with the OS -- no $20/mo subscription to get a frontier-class assistant on your phone",
    "Apple Foundation Models were custom-built in collaboration with Google and its Gemini models (reported ~$1B/yr deal), a massive capability jump over the old Siri stack",
    "iOS 27 'Extensions' means Siri is no longer a walled garden -- you can set Claude, Gemini, or any provider implementing Apple's LanguageModel protocol as the model behind Siri, Writing Tools, and Image Playground",
    "Privacy posture carries over: on-device processing where possible, Private Cloud Compute for the rest",
  ],
  cons: [
    "Not actually available to regular users yet -- developer betas only since June 8, public beta in July, general availability this fall; treat every capability claim as unverified until then",
    "EU iPhone/iPad users excluded at launch (Mac, Watch, Vision Pro get it with supported languages); China excluded entirely pending regulatory approval",
    "English-only at launch",
    "Steep device floor: iPhone 15 Pro / iPhone 16+ or Apple Silicon -- a huge share of active iPhones won't qualify",
    "Apple's assistant track record demands skepticism -- the original 'smarter Siri' was announced at WWDC 2024 and slipped for two years before this rebuild",
  ],
  knownIssues: [
    {
      description: "LAUNCH TIMELINE (announced 2026-06-08 at WWDC): developer testing began immediately in the OS 27 developer betas; public beta arrives in July 2026; general availability comes this fall with iOS 27 / iPadOS 27 / macOS 27 / watchOS 27 / visionOS 27. The Siri AI user-facing beta itself launches 'later this year,' initially in English. Apple's PR positions it as 'profoundly more intelligent, knowledgeable, and capable' -- understands on-screen content, searches personal data across apps, accesses web information, performs system-wide actions, and gets a dedicated Siri app with iCloud-synced conversation history",
      source: "Apple newsroom (apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/)",
      date: "2026-06-08",
    },
    {
      description: "GEMINI PARTNERSHIP: Apple's announcement states the next-generation Apple Foundation Models were 'custom-built in collaboration with Google and its Gemini models.' Press (TechCrunch, CNBC) reports the deal at roughly $1B/year for a ~1.2T-parameter custom Gemini variant (codename 'Project Campos' -- codename is press-reported, not Apple-confirmed). Apple did not disclose model size or deal terms on stage",
      source: "Apple newsroom, TechCrunch (techcrunch.com/2026/06/09/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/), CNBC",
      date: "2026-06-08",
    },
    {
      description: "THIRD-PARTY MODELS (iOS 27 Extensions): users will be able to select a third-party AI -- Apple's developer materials name Claude and Gemini, plus 'any other provider that implements the new language model protocol' -- as the assistant behind Siri, Writing Tools, and Image Playground. The Foundation Models framework adds image input, server-side models, and the public LanguageModel protocol so developers can swap providers without code changes. SiriKit is formally deprecated in favor of App Intents. Ships with the fall releases",
      source: "Apple newsroom (apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/), MacRumors",
      date: "2026-06-08",
    },
    {
      description: "REGIONAL EXCLUSIONS at launch: EU users don't get Siri AI on iPhone/iPad initially (Mac, Watch, and Vision Pro users get access with supported languages); China is excluded entirely pending regulatory approval. No committed dates for either region",
      source: "Apple newsroom",
      date: "2026-06-08",
    },
  ],
  bestFor: "Anyone already in the Apple ecosystem with a qualifying device who wants a capable assistant woven into the OS rather than bolted on through an app. Come fall, this is the default AI for hundreds of millions of iPhones.",
  notFor: "Anyone who needs it today (it's developer-beta only), EU iPhone users, anyone in China, older-device owners, or power users who want full control over model choice and parameters -- use ChatGPT, Claude, or Gemini apps directly instead.",
  verdict: "Apple finally did the Siri rebuild everyone has demanded since 2023 -- and did it by admitting it needed help, building its new foundation models in collaboration with Google's Gemini. The pitch is compelling: a frontier-class conversational assistant with on-screen awareness and personal-context search, free with the OS, plus an Extensions framework that lets you swap in Claude or Gemini as your system assistant. The catch is that none of it reaches regular users until the public beta in July and the fall OS releases, the device floor is steep, and the EU/China exclusions cut out two enormous markets. We're listing it now because the announcement reshapes the assistant landscape -- but score it as a promise, not a product, until the fall ships.",

  lastReviewedDate: "2026-06-09",
  dataSources: [
    { name: "Apple newsroom: Apple unveils next generation of Apple Intelligence, Siri AI, and more (2026-06-08)", url: "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/", dateAccessed: "2026-06-09" },
    { name: "Apple newsroom: New intelligence frameworks and advanced tools (2026-06-08)", url: "https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/", dateAccessed: "2026-06-09" },
    { name: "TechCrunch: WWDC 2026 -- everything announced", url: "https://techcrunch.com/2026/06/09/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/", dateAccessed: "2026-06-09" },
    { name: "MacRumors: iOS 27 third-party chatbots in Apple Intelligence", url: "https://www.macrumors.com/2026/05/05/ios-27-third-party-chatbots-apple-intelligence/", dateAccessed: "2026-06-09" },
  ],
  affiliateUrl: "https://www.apple.com/apple-intelligence/",
  status: "active",
  personality: {
    oneLiner: "The OS-native concierge (in waiting)",
    tone: "Apple demoed a conversational, context-aware voice that answers follow-ups naturally and acts on what's on screen -- closer to a capable human assistant than the command-and-control Siri of old.",
    quirks: "Until the public beta ships, everything about Siri AI's actual personality is stage-demo evidence only. Expect Apple-typical guardrails: polished, brief, and conservative compared to ChatGPT or Claude.",
  },
  metaTitle: "Siri AI Review (WWDC 2026): Apple's Gemini-Backed Siri Rebuild, iOS 27, Fall Release",
  metaDescription: "Siri AI announced June 8, 2026 at WWDC -- Apple's rebuilt assistant on Gemini-backed Apple Foundation Models. Dev beta now, public beta July, ships fall with iOS 27. Device requirements, EU/China exclusions, third-party AI Extensions.",
};
