import { ToolReview } from "@/lib/types";

export const elevenlabs: ToolReview = {
  slug: "elevenlabs",
  name: "ElevenLabs",
  tagline: "Best-in-class AI voice generation -- text-to-speech that sounds genuinely human",
  category: "ai-voice-audio",
  url: "https://elevenlabs.io",

  scores: {
    easeOfUse: 8,
    outputQuality: 10,
    value: 7,
    features: 9,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["10,000 characters/mo", "3 custom voices", "Personal use only"] },
    { plan: "Starter", price: "$5", period: "month", features: ["30,000 chars/mo", "10 custom voices", "Commercial license"] },
    { plan: "Creator", price: "$22", period: "month", features: ["100,000 chars/mo", "30 custom voices", "Professional Voice Cloning"] },
  ],

  pros: [
    "Voice quality is the best available -- output is nearly indistinguishable from real human speech",
    "Voice cloning from just a few minutes of audio is shockingly accurate",
    "Multilingual support with natural accent handling",
    "API is well-documented and easy to integrate",
  ],
  cons: [
    "Character limits mean costs add up fast for long-form content (audiobooks, podcasts)",
    "Free tier restricts you to personal use -- need to pay for commercial",
    "Voice cloning raises ethical concerns that ElevenLabs addresses but hasn't fully solved",
    "Occasional odd pronunciation of technical terms or proper nouns",
  ],
  knownIssues: [
    { description: "Platform has been used for deepfake audio, leading to stricter verification requirements for voice cloning", source: "The Verge", date: "2026-01" },
  ],
  bestFor: "Content creators who need high-quality voiceovers, audiobook producers, developers building voice-enabled apps, and anyone doing video narration.",
  notFor: "Users who only need occasional text-to-speech -- the free tier is tight and your browser's built-in TTS might be enough.",
  verdict: "ElevenLabs is to AI voice what Midjourney is to AI images -- clearly the quality leader. The voices sound real. If you produce any kind of audio content, this tool will save you thousands in voiceover costs. The pricing is fair for what you get, though heavy users will want the Creator plan or higher.",

  lastReviewedDate: "2026-03-26",
  dataSources: [
    { name: "ElevenLabs official site", dateAccessed: "2026-03-26" },
    { name: "G2 Reviews", dateAccessed: "2026-03-26" },
    { name: "Product Hunt", dateAccessed: "2026-03-26" },
    { name: "Hands-on testing", dateAccessed: "2026-03-26" },
  ],
  affiliateUrl: "https://elevenlabs.io",
  status: "active",
  metaTitle: "ElevenLabs Review 2026: Best AI Voice Generator?",
  metaDescription: "ElevenLabs review. Best AI text-to-speech quality available, voice cloning, multilingual. Pricing, scores, known issues. March 2026.",
};
