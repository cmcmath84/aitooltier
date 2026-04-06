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
        "5 files in library",
        "Basic text-to-speech",
      ],
    },
    {
      plan: "Premium",
      price: "$139",
      period: "year",
      features: [
        "1,000+ natural AI voices",
        "60+ languages",
        "5x speed",
        "OCR scanning",
        "AI summaries",
        "Offline listening",
        "Unlimited storage",
      ],
    },
    {
      plan: "Studio Starter",
      price: "$19",
      period: "month",
      features: [
        "Voice cloning",
        "Content creation tools",
        "Commercial use license",
      ],
    },
    {
      plan: "Studio Creator",
      price: "$49",
      period: "month",
      features: [
        "Advanced voice cloning",
        "Priority rendering",
        "Full commercial rights",
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
    "Free tier is almost useless -- 10 robotic voices and a 5-file cap pushes you to pay quickly",
    "Annual billing is marketed as monthly ($11.58/mo) but charges $139 upfront with no monthly option at that rate",
    "Frequently bugs out at higher speeds, pausing after every line on imported documents",
    "The 5x speed claim is technically true but practically useless -- nobody can comprehend 900 WPM",
    "Trial-to-paid conversion catches people off guard; 3-day trial is too short and cancellation is clunky",
  ],
  knownIssues: [
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
    "Casual users who just want to hear the occasional article. The free tier is too limited and $139/year is steep if you won't use it daily.",
  verdict:
    "Speechify's premium voices are genuinely good and the cross-platform support is solid. But the aggressive monetization leaves a bad taste -- the free tier is deliberately crippled, the trial is too short, and the annual-only billing catches people off guard. If you'll use it daily for work or accessibility, the $139/year is reasonable. If you're just curious, the free tier won't tell you much.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Speechify official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/speechify", dateAccessed: "2026-04-02" },
    { name: "RoboRhythms review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://speechify.com",
  status: "active",
  metaTitle: "Speechify Review 2026: Premium TTS Worth $139/Year?",
  metaDescription:
    "Honest Speechify review. 1,000+ AI voices, OCR scanning, but aggressive billing and weak free tier. Full pricing, known issues, and verdict. April 2026.",
};
