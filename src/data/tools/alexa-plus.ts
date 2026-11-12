import { ToolReview } from "@/lib/types";

export const alexaPlus: ToolReview = {
  slug: "alexa-plus",
  name: "Alexa+",
  tagline: "**Oct 28-29: Amazon unveiled a new Echo lineup built for Alexa+ (Echo Show 16, Echo Time, Alexa Photo Frame, new Echo Dot and Echo Studio with Home Camera) plus the 3D Alexa Home Map, and Alexa+ began Early Access in Japan -- its 13th country.** Amazon's reborn consumer AI assistant -- rolls out to every Alexa device with memory, multi-turn agent tasks, and Fire TV navigation",
  category: "ai-chatbots",
  url: "https://www.amazon.com/alexaplus",

  scores: {
    easeOfUse: 9.5,
    outputQuality: 7,
    value: 8.5,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free (limited)",
      price: "$0",
      features: [
        "Limited Alexa+ experience on Alexa.com, in the Alexa app, on compatible Fire TV devices and Amazon Alexa Tablets",
        "Alexa+ on Echo devices requires Prime or the Standard plan",
      ],
    },
    {
      plan: "Prime Included",
      price: "$0",
      features: [
        "Full access free with a Prime membership (Prime is $14.99/month after any free trial)",
        "Works on compatible Echo devices, Fire TV, the Alexa app and Alexa.com",
        "Multi-turn agent tasks, memory, cross-app chaining",
      ],
    },
    {
      plan: "Standard",
      price: "$19.99",
      period: "month",
      features: [
        "For non-Prime households",
        "Alexa+ on compatible Echo devices plus full access to Alexa.com and the Alexa app",
        "No Prime benefits bundled",
      ],
    },
  ],

  pros: [
    "Actually useful on-device now -- multi-turn conversations on Echo that don't reset every query, Fire TV navigation that works, and task chaining across apps (book a reservation while setting a timer)",
    "Free for Prime members -- if you already pay for Prime ($14.99/month), you're getting a major AI assistant rollout at no additional cost, which is structurally hard to beat on value",
    "Install base is unmatched -- hundreds of millions of existing Alexa devices auto-upgraded to Alexa+ on rollout, so the ecosystem is there from day one without anyone needing to buy new hardware",
    "Smart home and device control is still the best in class -- this is the use case where voice-first actually makes sense, and Alexa+ keeps the lead over Google Assistant and Siri",
  ],
  cons: [
    "Output quality lags ChatGPT/Gemini for knowledge tasks -- ask it something nuanced and you'll feel the gap immediately, this is not GPT-5-class reasoning",
    "Amazon ecosystem lock-in (Prime Video over Netflix, Whole Foods over other delivery, Kindle over other e-books) makes some responses feel commercial rather than genuinely helpful",
    "Privacy concerns persist -- always-on microphones in your house remain Amazon's data, and the company's track record on voice recording retention and review has been mixed",
    "Multi-turn agent tasks still break on edge cases -- anything sophisticated that works reliably in ChatGPT often stumbles on Alexa+, especially when it spans more than two apps",
  ],
  knownIssues: [
    {
      description: "NEW ECHO LINEUP + HOME MAP + JAPAN (2026-10-28 / 10-29): Amazon announced five devices 'powered by the latest Alexa' -- **Echo Show 16** (16-inch full HD screen, Fire TV built in), **Echo Time** (a nightstand smart clock), **Alexa Photo Frame**, a next-generation **Echo Dot** (built-in smart home hub, eero Wi-Fi extender, AZ3 silicon with an AI Accelerator) and **Echo Studio with Home Camera** (visual context for Alexa). **Alexa Home Map** is a new interactive 3D map of the home showing and controlling connected devices. Internationally, Alexa+ began rolling out in Japan on October 29, 2026 under Early Access (free during Early Access, then free for Prime members or 3,000 yen per month); Amazon lists the U.S., UK, Canada, Mexico, India, Italy, Spain, Germany, Austria, Brazil, France and Australia as already live and says more than 10 additional countries follow in 2027. Canada has left Early Access at $27.99 CAD per month for non-Prime members",
      source: "Amazon newsroom (aboutamazon.com/news/devices/new-alexa-devices-2026, /alexa-home-map-3d-smart-home-view, /alexa-plus-international-launch)",
      date: "2026-10-29",
    },
    {
      description: "CORRECTION (2026-11-11): the pricing block showed two tiers and quoted Prime at '$149/year'. Amazon's Alexa+ page lists three: a **Free** limited experience on Alexa.com, the Alexa app, compatible Fire TV devices and Amazon Alexa Tablets; **free with Prime**; and a **Standard** plan at $19.99/month for non-Prime households. The page states Prime as $14.99/month; no annual Prime price appears there, so the $149/year figure was removed rather than re-asserted",
      source: "Amazon Alexa+ page (amazon.com/alexaplus, fetched 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "ALEXA PODCASTS SHIPPED (2026-05-18): Alexa+ can now generate on-demand podcast episodes on any topic, with two AI co-host voices. Users preview the episode plan and adjust length and tone before generation; content is sourced from 200+ licensed publications (AP, Reuters, Washington Post, TIME, Forbes, local papers). US Alexa+ customers only; included with Prime, $19.99/mo otherwise",
      source: "Amazon newsroom (aboutamazon.com), TechCrunch 2026-05-18",
      date: "2026-05-18",
    },
    {
      description: "Cross-device conversation handoff occasionally drops context when moving from Echo to Fire TV mid-task, forcing users to repeat prompts",
      source: "Reddit r/alexa",
      date: "2026-03",
    },
    {
      description: "Non-Prime $19.99 pricing feels steep next to free basic Alexa, especially since new capabilities roll out unevenly across older devices",
      source: "The Verge Alexa+ review",
      date: "2026-02",
    },
  ],
  bestFor: "Households already in the Amazon ecosystem (Prime, multiple Echo devices, Fire TV, Ring) -- especially families who use voice assistants for everyday tasks. If you're a Prime subscriber with Alexa hardware, Alexa+ is essentially a free major upgrade that lands where you already are.",
  notFor: "Users outside the Amazon ecosystem, privacy-conscious users who don't want always-on microphones, or anyone who wants the smartest AI assistant available. ChatGPT on iOS and Gemini on Android both produce noticeably better outputs and don't require hardware investment.",
  verdict: "Alexa+ is Amazon's overdue upgrade to what voice assistants should have been three years ago -- genuine multi-turn agent capability, persistent memory, and task chaining across your home ecosystem. It's not ChatGPT-smart, but for Prime households the value math is hard to beat: every Echo device in the house just got materially more capable for zero additional cost. The honest read: if you already own Alexa hardware and pay for Prime, Alexa+ is a no-brainer starting today. If you're picking a single AI assistant in 2026 and starting from zero, Gemini on Android or ChatGPT on iOS offers better intelligence for free.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Amazon newsroom: Amazon unveils its newest lineup of Alexa devices (2026-10-28)", url: "https://www.aboutamazon.com/news/devices/new-alexa-devices-2026", dateAccessed: "2026-11-11" },
    { name: "Amazon newsroom: Alexa Home Map (2026-10-28)", url: "https://www.aboutamazon.com/news/devices/alexa-home-map-3d-smart-home-view", dateAccessed: "2026-11-11" },
    { name: "Amazon newsroom: Alexa+ international launch (updated 2026-10-28)", url: "https://www.aboutamazon.com/news/devices/alexa-plus-international-launch", dateAccessed: "2026-11-11" },
    { name: "Amazon newsroom: Alexa Podcasts", url: "https://www.aboutamazon.com/news/devices/alexa-podcasts-ai-generated-audio-episodes", dateAccessed: "2026-07-05" },
    { name: "Amazon Alexa+ product page", url: "https://www.amazon.com/alexaplus", dateAccessed: "2026-11-11" },
    { name: "TechCrunch: Alexa+ available to everyone in the U.S.", url: "https://techcrunch.com/2026/02/04/alexa-amazons-ai-assistant-is-now-available-to-everyone-in-the-u-s/", dateAccessed: "2026-04-16" },
    { name: "CNBC: Alexa+ US release", url: "https://www.cnbc.com/2026/02/04/amazon-alexa-plus-us-releas.html", dateAccessed: "2026-04-16" },
    { name: "The Verge Alexa+ review", dateAccessed: "2026-04-16" },
    { name: "Reddit r/alexa user reports", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://www.amazon.com/alexaplus",
  status: "active",
  personality: {
    oneLiner: "The reborn voice assistant",
    tone: "Warm, casual, consumer-friendly. Alexa+ sounds like the same helpful-family-helper voice as classic Alexa, just now with the capability to actually follow through on complex multi-step tasks. Responses are concise and spoken-first, optimized for hearing rather than reading on a screen.",
    quirks: "Defaults toward Amazon ecosystem actions when ambiguous (Prime Video over Netflix, Whole Foods over other grocery). Occasionally references things it did 'for you' in shopping assistant mode. Still has the classic Alexa habit of asking clarifying questions out loud instead of making assumptions.",
  },
  metaTitle: "Alexa+ Review 2026: Amazon's Rebuilt AI Assistant, Tested",
  metaDescription: "Alexa+ review. Amazon's AI assistant across Echo and Fire TV: new Echo lineup and Home Map (Oct 2026), free with Prime, $19.99 Standard plan. Pros, cons.",
};
