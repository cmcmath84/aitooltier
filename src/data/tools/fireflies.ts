import { ToolReview } from "@/lib/types";

export const fireflies: ToolReview = {
  slug: "fireflies",
  name: "Fireflies.ai",
  tagline: "AI meeting notetaker with 6,000+ integrations that records, transcribes, and summarizes your calls **Pricing refreshed 2026-10-06: Free now stores 400 minutes per team (was 800) with 20 AI credits; Pro is $18 monthly or $10 per seat on annual billing; Business $29 or $19 with unlimited storage; a new Enterprise tier at $39 per seat, annual only; plus Fireflies Talk, a free unlimited dictation tool.**",
  category: "ai-business-productivity",
  url: "https://fireflies.ai",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 7,
    value: 7.5,
    features: 9,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Unlimited transcription (asterisked on the vendor page)", "400 min of storage per team (was 800)", "20 AI credits", "Zoom, Google Meet, Teams"],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "per seat/month billed annually ($18 month-to-month)",
      features: ["Unlimited transcription and AI summaries", "8,000 min of storage per seat", "20 AI credits", "Unlimited integrations"],
    },
    {
      plan: "Business",
      price: "$19",
      period: "per seat/month billed annually ($29 month-to-month)",
      features: ["Unlimited storage", "30 AI credits", "Team analytics for admins", "Conversation intelligence"],
    },
    {
      plan: "Enterprise",
      price: "$39",
      period: "per seat/month, annual billing only",
      features: ["50 AI credits", "Everything in Business", "Enterprise controls"],
    },
  ],

  pros: [
    "Integration list is massive -- 6,000+ apps means it plugs into basically any workflow you already have",
    "60+ language support makes it one of the most globally accessible meeting tools available",
    "Action item extraction and meeting summaries save real time -- you can skip re-watching recordings",
    "Conversation intelligence features on Business plan are genuinely useful for sales teams tracking deal progress",
  ],
  cons: [
    "Transcription accuracy drops noticeably with heavy accents, background noise, or multiple people talking at once",
    "The free tier's storage cap was halved to 400 minutes per team, so it fills up within a couple of weeks of regular meetings -- and AI features are metered in 'AI credits' on every plan, including paid ones",
    "The bot occasionally fails to join meetings -- you show up expecting notes and get nothing",
    "Per-seat pricing adds up quickly for larger teams compared to alternatives like Otter.ai",
  ],
  knownIssues: [
    {
      description: "PRICING PAGE REFRESH -- FREE STORAGE HALVED TO 400 MINUTES PER TEAM, MONTHLY AND ANNUAL PRICES SPLIT, A $39 ENTERPRISE SEAT, AND 'AI CREDITS' ON EVERY PLAN (verified 2026-10-06, vendor pricing page): fireflies.ai/pricing now lists **Free** at $0 with 'Unlimited transcription*', **400 mins of storage/team** and 20 AI credits; **Pro** at **$18 month-to-month or $10 per seat/month billed annually** with 8,000 minutes of storage per seat and 20 AI credits; **Business** at **$29 or $19 annual** with unlimited storage, 30 AI credits and team analytics; and **Enterprise at $39 per seat/month, 'ANNUAL ONLY'**, with 50 AI credits. Against the March 2026 version of this page: the free storage allowance dropped from 800 to 400 minutes, the headline Pro and Business prices hold only if you pay annually (monthly is 80% and 53% higher), and the AI-credit meter is new to this page. The page also promotes **Fireflies Talk**, 'free, unlimited dictation wherever you type'. The asterisk on unlimited transcription is not expanded on the page. Scores unchanged; the value score already assumed annual pricing.",
      source: "Fireflies (fireflies.ai/pricing, plan cards and comparison table) -- fetched 2026-10-06 via curl with browser UA",
      date: "2026-10-06",
    },
    {
      description: "Bot sometimes doesn't join Zoom meetings when the meeting link format is non-standard or uses a passcode",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Speaker identification frequently misattributes dialogue when more than 4-5 people are on a call",
      source: "Reddit r/sales",
      date: "2026-01",
    },
  ],
  bestFor: "Sales teams that need CRM-integrated call recording, remote teams that want searchable meeting archives, and managers who sit in too many meetings to take notes manually.",
  notFor: "Small teams on a budget who just need basic transcription -- Otter.ai is cheaper. Also not ideal if your meetings regularly involve heavy crosstalk or non-English speakers with strong accents.",
  verdict: "Fireflies wins on breadth -- the integration count and language support are hard to beat. Where it falls short is transcription accuracy in less-than-ideal conditions, which is exactly when you need a notetaker most. The Pro plan at $10/seat is fair for what you get, but check whether the accuracy is good enough for your specific accent and meeting style before committing a whole team. The free tier is worth testing first.",

  lastReviewedDate: "2026-10-06",
  dataSources: [
    { name: "Fireflies.ai pricing page -- Free 400 min/team, Pro $18/$10, Business $29/$19, Enterprise $39 annual only (verified 2026-10-06)", url: "https://fireflies.ai/pricing", dateAccessed: "2026-10-06" },
    { name: "Fireflies.ai official site", dateAccessed: "2026-03-31" },
    { name: "G2 Reviews", dateAccessed: "2026-03-31" },
    { name: "Reddit r/sales", dateAccessed: "2026-03-31" },
    { name: "Capterra reviews", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://fireflies.ai",
  status: "active",
  metaTitle: "Fireflies.ai Review 2026: AI Meeting Notetaker With 6,000+ Integrations",
  metaDescription: "Fireflies.ai review. AI meeting assistant with transcription, summaries, CRM integration. October 2026 pricing: Free (400 min/team), Pro $10 annual or $18 monthly, Business $19/$29, Enterprise $39 annual-only. But how accurate is it really? Scores, pricing.",
};
