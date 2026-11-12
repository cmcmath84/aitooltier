import { ToolReview } from "@/lib/types";

export const siriAi: ToolReview = {
  slug: "siri-ai",
  name: "Siri AI (Apple)",
  tagline: "**Shipped: Siri AI began rolling out on 2026-09-14 with iOS 27, iPadOS 27, macOS 27, watchOS 27 and visionOS 27 -- still labelled a beta by Apple, free with daily usage limits, and Apple says expanded access will be available for a fee in the future (no price given). The 27.2 updates on 2026-10-26 added French, Japanese, Korean, Portuguese and Spanish.** Apple's ground-up Siri rebuild, unveiled at WWDC 2026 (June 8) -- conversational, on-screen aware, searches your personal data across apps, gets its own app with synced history. Built on Apple Foundation Models custom-built in collaboration with Google and its Gemini models. Still not in the EU on iPhone, iPad or Apple Watch, and not in China.",
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
        "No subscription -- included with iOS 27 / iPadOS 27 / macOS 27 / watchOS 27 / visionOS 27, released 2026-09-14; Apple still labels Siri AI a beta",
        "Requires iPhone 16 or later, iPhone 15 Pro/Pro Max, iPad mini (A17 Pro), iPads and Macs with M1 or later, MacBook Neo (A18 Pro), Apple Vision Pro, or Apple Watch Series 9+/Ultra 2+/SE 3 paired with a qualifying iPhone",
        "Dedicated Siri app with conversation history synced via iCloud",
        "Languages as of iOS 27.2 (2026-10-26): English, French, Japanese, Korean, Portuguese, Spanish; Chinese (Traditional), Norwegian, Turkish and Vietnamese are due by the end of 2026",
        "Daily usage limits apply to Siri AI and other server-side features (Apple publishes no numbers; limits vary by feature, request complexity and system demand)",
        "Not available to users under 13",
      ],
    },
    {
      plan: "Expanded access (announced, not yet on sale)",
      price: "Not announced",
      features: [
        "Apple's launch-day and 27.2 footnotes both say expanded access to the usage-limited server-side features 'will be available for a fee in the future'",
        "No price, plan name or date on any Apple page as of 2026-11-12",
      ],
    },
  ],

  pros: [
    "Deep system integration no third-party assistant can match -- on-screen awareness, personal-context search across Messages/Mail/Photos, and system-wide actions on ~2 billion Apple devices",
    "Free with the OS -- no $20/mo subscription to get a frontier-class assistant on your phone (within Apple's unpublished daily usage limits)",
    "Apple Foundation Models were custom-built in collaboration with Google and its Gemini models (Apple repeated this wording at the 2026-09-14 launch; the ~$1B/yr figure is press-reported), a massive capability jump over the old Siri stack",
    "It actually shipped on schedule: iOS 27 on 2026-09-14, five more languages six weeks later, and Siri AI on the new Apple TV 4K announced 2026-10-13",
    "The Foundation Models framework is open to other providers -- Apple's developer page says it works with any model provider that ships a Swift package conforming to the Language Model protocol. (The WWDC promise that users could pick Claude or Gemini as the model behind Siri is not mentioned in Apple's September launch posts; we have not confirmed it shipped)",
    "Privacy posture carries over: on-device processing where possible, Private Cloud Compute for the rest",
  ],
  cons: [
    "Still a beta two months after release -- Apple's 27.2 notes (2026-10-26) say Siri AI 'is available in beta', and Siri Recap and Live Rewind on Apple Watch are only due in beta in late 2026",
    "Usage is capped: Siri AI is subject to daily limits Apple does not publish, and Apple has said expanded access will cost money later without naming a price",
    "EU users are still excluded on iPhone, iPad and Apple Watch as of the 27.2 release (Mac and Vision Pro are not on Apple's exclusion list); China is excluded entirely while Apple works through regulatory requirements",
    "Six languages so far (English plus French, Japanese, Korean, Portuguese, Spanish) -- German, Italian, Chinese and others that Apple Intelligence supports are not yet Siri AI languages",
    "Steep device floor: iPhone 15 Pro / iPhone 16+ or Apple Silicon -- a huge share of active iPhones won't qualify",
    "Apple's assistant track record demands skepticism -- the original 'smarter Siri' was announced at WWDC 2024 and slipped for two years before this rebuild",
  ],
  knownIssues: [
    {
      description: "CURRENT STATE (as of 2026-11-12): the shipping releases are iOS / iPadOS / macOS / watchOS / visionOS 27.2.1 (2026-11-09 on Apple's developer releases feed), with 27.3 in developer beta since 2026-11-03. Apple's Apple Intelligence page still says 'Siri AI is available in English' in its banner and still carries a 'Coming in a future software update' section. Nothing on Apple's pages yet prices the paid expanded-access tier, lifts the EU restriction on iPhone / iPad / Apple Watch, or opens China",
      source: "Apple Developer releases feed (developer.apple.com/news/releases), apple.com/apple-intelligence",
      date: "2026-11-09",
    },
    {
      description: "MORE LANGUAGES (2026-10-26): with the 27.2 software updates Siri AI added **French, Japanese, Korean, Portuguese and Spanish**. Apple says Chinese (Traditional), Norwegian, Turkish and Vietnamese are coming by the end of the year. Same post: Siri AI 'is available in beta', is 'currently unavailable in the EU in iOS, iPadOS, and watchOS' with Apple 'working constructively with the EU in an attempt to find a path forward', and is not available for users under 13",
      source: "Apple newsroom (apple.com/newsroom/2026/10/siri-ai-is-available-in-more-languages-starting-today/)",
      date: "2026-10-26",
    },
    {
      description: "SIRI AI ON APPLE TV (2026-10-13): Apple announced a new Apple TV 4K built around a full-screen Siri AI experience with built-in far-field microphones for hands-free use -- the first living-room device for the rebuilt assistant. Requests run on device or through Private Cloud Compute",
      source: "Apple newsroom (apple.com/newsroom/2026/10/apple-unveils-the-new-apple-tv-4k/)",
      date: "2026-10-13",
    },
    {
      description: "GENERAL RELEASE (2026-09-14): Apple released iOS 27, iPadOS 27, macOS 27, watchOS 27 and visionOS 27, and **Siri AI began rolling out the same day, in beta, in English**. What shipped per Apple: personal context across messages, emails and photos; onscreen awareness; web-backed world knowledge; systemwide app actions; the dedicated Siri app with iCloud-synced history; Siri mode in Camera; Visual Intelligence on iPad, Mac and Vision Pro; writing with Siri anywhere you type; Spotlight integration on iPad and Mac. Apple again credits 'the next generation of Apple Foundation Models, custom-built in collaboration with Google and its Gemini models', running on device and on Private Cloud Compute. **New at launch: daily usage limits** on server-side features including Siri AI, intelligent photo editing, Image Playground and AFM 3 Cloud models in Shortcuts, with the line 'Expanded access to such features will be available for a fee in the future' -- no price or date. The EU exclusion now reads iOS, iPadOS **and watchOS** (the June plan had Apple Watch included); China remains out. Expressive voices and improved dictation need the AFM Core Advanced on-device model (iPhone Duo, iPhone 18 Pro, iPhone Air, iPhone 17 Pro, or iPad M4 / Mac M3 or later with at least 12GB)",
      source: "Apple newsroom (apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/, apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/), Apple Support 148587 (Usage Terms, published 2026-09-09)",
      date: "2026-09-14",
    },
    {
      description: "PUBLIC BETA SHIPPED (2026-07-13/14): the **iOS 27 public beta is live**, and with it the first public access to the rebuilt Siri AI. Confirmed in the beta: **Siri ships as a standalone, preinstalled Home Screen app for the first time** -- chat-style interface, revisit all past Siri conversations and start new ones, iCloud sync across devices, on-screen awareness, and personal-context search of everything on the iPhone. Device floor holds: Apple Intelligence hardware required (iPhone 15 Pro or newer / iPhone Air). Caveats: some Siri AI features are reportedly **waitlist-gated even inside the beta** (per BGR/Mashable), and this was still a beta of an update at the time -- iOS 27 itself was released on 2026-09-14 (see the entry above). EU iPhone/iPad + China exclusions were unchanged at that point",
      source: "TechCrunch (techcrunch.com/2026/07/14/apple-opens-its-new-siri-ai-to-everyone-with-the-ios-27-public-beta/), 9to5Mac (2026-07-16, standalone app), MacRumors (public beta 7/13), BGR/Mashable (waitlist gating)",
      date: "2026-07-14",
    },
    {
      description: "LAUNCH TIMELINE (announced 2026-06-08 at WWDC): developer testing began immediately in the OS 27 developer betas; public beta was promised for July 2026 and general availability for the fall with iOS 27 / iPadOS 27 / macOS 27 / watchOS 27 / visionOS 27 (both happened: public beta in July, release on 2026-09-14). The Siri AI user-facing beta itself was to launch 'later this year,' initially in English. Apple's PR positions it as 'profoundly more intelligent, knowledgeable, and capable' -- understands on-screen content, searches personal data across apps, accesses web information, performs system-wide actions, and gets a dedicated Siri app with iCloud-synced conversation history",
      source: "Apple newsroom (apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/)",
      date: "2026-06-08",
    },
    {
      description: "GEMINI PARTNERSHIP: Apple's announcement states the next-generation Apple Foundation Models were 'custom-built in collaboration with Google and its Gemini models.' Press (TechCrunch, CNBC) reports the deal at roughly $1B/year for a ~1.2T-parameter custom Gemini variant (codename 'Project Campos' -- codename is press-reported, not Apple-confirmed). Apple did not disclose model size or deal terms on stage",
      source: "Apple newsroom, TechCrunch (techcrunch.com/2026/06/09/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/), CNBC",
      date: "2026-06-08",
    },
    {
      description: "THIRD-PARTY MODELS (iOS 27 Extensions): users will be able to select a third-party AI -- Apple's developer materials name Claude and Gemini, plus 'any other provider that implements the new language model protocol' -- as the assistant behind Siri, Writing Tools, and Image Playground. The Foundation Models framework adds image input, server-side models, and the public LanguageModel protocol so developers can swap providers without code changes. SiriKit is formally deprecated in favor of App Intents. Status after the September release: Apple's developer page confirms the Foundation Models framework accepts any provider with a Swift package conforming to the Language Model protocol; Apple's consumer launch posts do not mention choosing a third-party model for Siri itself, so that part is unconfirmed",
      source: "Apple newsroom (apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/), MacRumors",
      date: "2026-06-08",
    },
    {
      description: "REGIONAL EXCLUSIONS at launch: EU users don't get Siri AI on iPhone/iPad initially (Mac, Watch, and Vision Pro users get access with supported languages); China is excluded entirely pending regulatory approval. No committed dates for either region. Superseded in part: at the 2026-09-14 release Apple listed watchOS alongside iOS and iPadOS as excluded in the EU",
      source: "Apple newsroom",
      date: "2026-06-08",
    },
    {
      description: "EU DELAY IS DMA-DRIVEN, TALKS ONGOING: Apple's own newsroom post (2026-06-08) attributes the EU iPhone/iPad delay to the Digital Markets Act -- the European Commission rejected Apple's 'Trusted System Agent' proposal and its 18-month rollout plan. Follow-up (reported by FT, 2026-07-01): Tim Cook held a virtual meeting with EU tech chief Henna Virkkunen on June 30; an EU spokesperson called it a 'constructive exchange.' Still no committed EU date as of 2026-11-12 -- Apple's 2026-10-26 post says only that it is working constructively with the EU",
      source: "Apple newsroom (apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-for-ios-27-and-ipados-27/), FT via MacRumors 2026-07-01",
      date: "2026-07-01",
    },
  ],
  bestFor: "Anyone already in the Apple ecosystem with a qualifying device who wants a capable assistant woven into the OS rather than bolted on through an app. Since the 2026-09-14 release it is the default assistant on every qualifying iPhone, iPad, Mac, Apple Watch and Vision Pro outside the EU and China.",
  notFor: "EU iPhone, iPad and Apple Watch users, anyone in China, users under 13, older-device owners, heavy users who will hit the daily limits, or power users who want full control over model choice and parameters -- use ChatGPT, Claude, or Gemini apps directly instead.",
  verdict: "Apple finally did the Siri rebuild everyone has demanded since 2023 -- and did it by admitting it needed help, building its new foundation models in collaboration with Google's Gemini. The pitch is compelling: a frontier-class conversational assistant with on-screen awareness and personal-context search, free with the OS, plus an Extensions framework that lets you swap in Claude or Gemini as your system assistant. The catches: the device floor is steep, and the EU/China exclusions cut out two enormous markets. Update, November 2026: it shipped. Siri AI has been rolling out since 2026-09-14 with the OS 27 releases, gained five languages on 2026-10-26 and reached the new Apple TV 4K -- but Apple still calls it a beta, caps it with unpublished daily usage limits, and has said expanded access will be sold for a fee without naming a price. Our scores were set before release, on the announcement alone, and have not yet been re-tested against the shipping product.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "Apple newsroom: Siri AI, a profoundly more capable and personal assistant, is here (2026-09-14)", url: "https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/", dateAccessed: "2026-11-12" },
    { name: "Apple newsroom: Major updates for Apple's software platforms are now available (2026-09-14)", url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/", dateAccessed: "2026-11-12" },
    { name: "Apple newsroom: Siri AI is available in more languages starting today (2026-10-26)", url: "https://www.apple.com/newsroom/2026/10/siri-ai-is-available-in-more-languages-starting-today/", dateAccessed: "2026-11-12" },
    { name: "Apple newsroom: Apple unveils the new Apple TV 4K, supercharged by Siri AI (2026-10-13)", url: "https://www.apple.com/newsroom/2026/10/apple-unveils-the-new-apple-tv-4k/", dateAccessed: "2026-11-12" },
    { name: "Apple Support: Apple Intelligence Usage Terms (published 2026-09-09)", url: "https://support.apple.com/en-us/148587", dateAccessed: "2026-11-12" },
    { name: "Apple: Apple Intelligence and Siri", url: "https://www.apple.com/apple-intelligence/", dateAccessed: "2026-11-12" },
    { name: "Apple Developer: Releases feed (27.2.1 on 2026-11-09, 27.3 beta on 2026-11-03)", url: "https://developer.apple.com/news/releases/rss/releases.rss", dateAccessed: "2026-11-12" },
    { name: "Apple Developer: Apple Intelligence (Foundation Models framework, Language Model protocol)", url: "https://developer.apple.com/apple-intelligence/", dateAccessed: "2026-11-12" },
    { name: "9to5Mac: iOS 27 adds an all-new app to your iPhone's Home Screen (standalone Siri app, 2026-07-16)", url: "https://9to5mac.com/2026/07/16/ios-27-adds-an-all-new-app-to-your-iphones-home-screen/", dateAccessed: "2026-07-18" },
    { name: "TechCrunch: Apple opens its new Siri AI to everyone with the iOS 27 public beta (2026-07-14)", url: "https://techcrunch.com/2026/07/14/apple-opens-its-new-siri-ai-to-everyone-with-the-ios-27-public-beta/", dateAccessed: "2026-07-18" },
    { name: "Apple newsroom: Due to DMA, Siri AI delayed in EU for iOS 27 and iPadOS 27 (2026-06-08)", url: "https://www.apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-for-ios-27-and-ipados-27/", dateAccessed: "2026-07-05" },
    { name: "MacRumors: Cook 'constructive' EU talks on Siri AI launch (FT-sourced, 2026-07-01)", url: "https://www.macrumors.com/2026/07/01/tim-cook-constructive-talks-eu-siri-ai-launch/", dateAccessed: "2026-07-05" },
    { name: "Apple newsroom: Apple unveils next generation of Apple Intelligence, Siri AI, and more (2026-06-08)", url: "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/", dateAccessed: "2026-06-09" },
    { name: "Apple newsroom: New intelligence frameworks and advanced tools (2026-06-08)", url: "https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/", dateAccessed: "2026-06-09" },
    { name: "TechCrunch: WWDC 2026 -- everything announced", url: "https://techcrunch.com/2026/06/09/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/", dateAccessed: "2026-06-09" },
    { name: "MacRumors: iOS 27 third-party chatbots in Apple Intelligence", url: "https://www.macrumors.com/2026/05/05/ios-27-third-party-chatbots-apple-intelligence/", dateAccessed: "2026-06-09" },
  ],
  affiliateUrl: "https://www.apple.com/apple-intelligence/",
  status: "active",
  personality: {
    oneLiner: "The OS-native concierge (shipping, still in beta)",
    tone: "Apple demoed a conversational, context-aware voice that answers follow-ups naturally and acts on what's on screen -- closer to a capable human assistant than the command-and-control Siri of old.",
    quirks: "We have not re-tested the shipping release, so this description still rests on Apple's own demos and launch copy. Apple now lets you pick a voice and adjust its expressivity and pace on newer devices. Expect Apple-typical guardrails: polished, brief, and conservative compared to ChatGPT or Claude.",
  },
  metaTitle: "Siri AI Review 2026: Apple's Rebuilt Siri in iOS 27, Now Out",
  metaDescription: "Siri AI shipped Sept 14, 2026 with iOS 27, still in beta: free with daily limits, six languages, paid tier promised. Devices, EU/China exclusions.",
};
