import { ToolReview } from "@/lib/types";

export const speechify: ToolReview = {
  slug: "speechify",
  name: "Speechify",
  tagline: "Text-to-speech reader that turns articles, docs, and PDFs into natural-sounding audio",
  category: "ai-voice-audio",
  url: "https://speechify.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
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
        "10 robotic voices",
        "1.5x max speed",
        "Text-to-speech features only",
      ],
    },
    {
      plan: "Premium",
      price: "$29",
      period: "month (billed monthly; yearly billing advertised as 'save 60%')",
      features: [
        "1,000+ natural AI voices",
        "60+ languages",
        "5x speed",
        "Scan & Listen (OCR)",
        "AI summaries and chats",
        "Voice Typing dictation, AI Podcasts, Voice AI Assistant",
        "Google Drive, Dropbox and OneDrive integrations",
      ],
    },
    {
      plan: "Studio Starter",
      price: "$100",
      period: "year",
      features: [
        "86,400 Studio credits (voiceover 1 credit/sec, dubbing 3/sec, avatar 30/sec)",
        "Voiceover, Dubbing and Voice Changer studios",
        "Stock music, video, images and sound effects",
        "Commercial usage rights",
      ],
    },
    {
      plan: "Studio Creator",
      price: "$300",
      period: "year",
      features: [
        "345,600 Studio credits",
        "Everything in Studio Starter",
        "Studio also has a free plan: 600 credits, no commercial rights",
      ],
    },
  ],

  pros: [
    "Premium voices sound genuinely natural -- among the best TTS quality available for reading",
    "Works across platforms: browser extension, mobile app, desktop, and PDF/doc imports",
    "OCR scanning lets you listen to physical documents and images with text",
    "60+ language support makes it useful for language learners and multilingual users",
  ],
  cons: [
    "Free tier is almost useless -- 10 robotic voices and a 1.5x speed cap push you to pay quickly",
    "Month-to-month Premium is $29, and the cheaper rate needs yearly billing charged upfront (advertised as 'save 60%'; the $139/year figure this page has carried since April was not re-verified in October 2026)",
    "Frequently bugs out at higher speeds, pausing after every line on imported documents",
    "The 5x speed claim is technically true but practically useless -- nobody can comprehend 900 WPM",
    "Trial-to-paid conversion catches people off guard; 3-day trial is too short and cancellation is clunky",
  ],
  knownIssues: [
    {
      description: "PRICING CHECK (2026-10-19): speechify.com/pricing now shows the reader's Premium plan at **$29/month billed monthly**, with a Yearly toggle advertised as 'save 60%'; the yearly figure did not render in our fetch, so the $139/year this page has carried since April is not re-verified. Premium now bundles Voice Typing dictation (which Speechify is promoting as a launch), AI Podcasts and a Voice AI Assistant alongside the reader. Speechify Studio is a separate subscription billed yearly: Free (600 credits, no commercial rights), Studio Starter $100/year (86,400 credits) and Studio Creator $300/year (345,600 credits), at 1 credit per second of voiceover, 3 for dubbing and 30 for avatars -- replacing the $19 / $49 monthly Studio rows this page showed.",
      source: "speechify.com/pricing, speechify.com/pricing-studio",
      date: "2026-10-19",
    },
    {
      description:
        "Users report being charged the full $139 annual fee after a 3-day free trial with no clear cancellation confirmation, especially through iOS App Store",
      source: "Trustpilot, Reddit",
      date: "2026-02",
    },
    {
      description:
        "App pauses after every line when reading imported documents or web links, making longer content frustrating to listen to",
      source: "Reddit, App Store reviews",
      date: "2026-01",
    },
    {
      description:
        "Kindle book reading is broken -- stops every couple of sentences and loses position",
      source: "Reddit r/speechify",
      date: "2025-12",
    },
  ],
  bestFor:
    "People with dyslexia, ADHD, or anyone who genuinely prefers audio over reading. The premium voices are excellent for turning articles and docs into listenable content.",
  notFor:
    "Casual users who just want to hear the occasional article. The free tier is too limited, and Premium at $29/month (or an upfront yearly payment) is steep if you won't use it daily.",
  verdict:
    "Speechify's premium voices are genuinely good and the cross-platform support is solid. But the aggressive monetization leaves a bad taste -- the free tier is deliberately crippled, the trial is too short, and the upfront yearly charge catches people off guard (a $29 month-to-month option now exists, at roughly double the effective yearly rate). If you'll use it daily for work or accessibility, the yearly plan is reasonable. If you're just curious, the free tier won't tell you much.",

  lastReviewedDate: "2026-10-19",
  dataSources: [
    { name: "Speechify pricing", url: "https://speechify.com/pricing/", dateAccessed: "2026-10-19" },
    { name: "Speechify Studio pricing", url: "https://speechify.com/pricing-studio/", dateAccessed: "2026-10-19" },
    { name: "Speechify official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/speechify", dateAccessed: "2026-04-02" },
    { name: "RoboRhythms review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://speechify.com",
  status: "active",
  metaTitle: "Speechify Review 2026: Is Premium TTS Worth $29/Month?",
  metaDescription:
    "Honest Speechify review. 1,000+ AI voices, OCR scanning, but aggressive billing and weak free tier. Full pricing, known issues, and verdict. Updated October 2026.",
};
