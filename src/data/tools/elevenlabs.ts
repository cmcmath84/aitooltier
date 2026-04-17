import { ToolReview } from "@/lib/types";

export const elevenlabs: ToolReview = {
  slug: "elevenlabs",
  name: "ElevenLabs",
  tagline: "Best-in-class AI voice generation -- now includes 11.ai (MCP-based voice assistant), Eleven v3 expressive speech, and IBM watsonx partnership. $500M raise at $11B valuation (Feb 2026)",
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
    { plan: "Free", price: "$0", features: ["10,000 characters/mo", "3 custom voices", "Eleven v3 access", "Personal use only"] },
    { plan: "Starter", price: "$5", period: "month", features: ["30,000 chars/mo", "10 custom voices", "Commercial license", "Pricing cut ~50% in Feb 2026"] },
    { plan: "Creator", price: "$22", period: "month", features: ["100,000 chars/mo", "30 custom voices", "Professional Voice Cloning", "Eleven v3 expressive speech"] },
    { plan: "11.ai (Alpha)", price: "Included", features: ["MCP-based voice-first personal assistant", "Persistent context across tasks", "Currently in alpha rollout, March 2026"] },
    { plan: "Enterprise (IBM watsonx)", price: "Custom", features: ["Agentic voice for enterprise via IBM partnership (March 25 2026)", "Regulated-industry voice cloning", "Volume pricing"] },
  ],

  pros: [
    "Voice quality is still the best available -- Eleven v3 (2026) adds expressive speech with laughter, sighs, emotional inflection that no competitor matches",
    "11.ai alpha (March 2026) is the first serious MCP-based voice-first personal assistant -- persistent context across tasks, talk-not-type agent workflows",
    "Voice cloning from just a few minutes of audio remains shockingly accurate, now with stronger consent/verification after 2025 deepfake incidents",
    "~50% pricing cut in February 2026 (post-$500M raise at $11B valuation) makes the Starter and Creator tiers significantly more affordable than in 2025",
  ],
  cons: [
    "Character limits mean costs still add up fast for long-form content (audiobooks, podcasts) even after the 2026 price cut",
    "Free tier restricts you to personal use -- need to pay for commercial",
    "11.ai is alpha-only -- not yet GA and access is gated",
    "Mistral Voxtral TTS (March 2026) now offers open-source 4B-param speech for free -- the gap has narrowed for self-hosting use cases",
  ],
  knownIssues: [
    { description: "Platform continues to face deepfake-abuse pressure -- voice cloning requires verified identity for new accounts as of 2026", source: "The Verge", date: "2026-01" },
    { description: "11.ai alpha has intermittent latency issues on longer agentic chains -- still maturing", source: "Product Hunt 11.ai threads", date: "2026-03" },
  ],
  bestFor: "Content creators who need the highest-quality voiceovers, audiobook producers, developers building voice-enabled apps, and enterprises using IBM watsonx wanting premium agentic voice. 11.ai alpha users who want voice-first AI assistants.",
  notFor: "Users who only need occasional text-to-speech (browser TTS is free), or open-source purists (Mistral Voxtral fills that niche now).",
  verdict: "ElevenLabs remained the clear voice-quality leader through 2026 and extended its lead with Eleven v3 expressive speech plus the 11.ai MCP-based voice assistant (alpha). The February 2026 $500M raise at $11B and subsequent ~50% pricing cut made the consumer tiers meaningfully cheaper. The IBM watsonx partnership unlocks regulated-industry enterprise voice. If you produce any serious audio content, this is still the default. The only real competitive pressure is from Mistral's Voxtral TTS on the open-source side and from Google/Meta native voice models bundled into Gemini/Llama.",

  lastReviewedDate: "2026-04-16",
  dataSources: [
    { name: "ElevenLabs official site", url: "https://elevenlabs.io", dateAccessed: "2026-04-16" },
    { name: "Voice.ai: ElevenLabs debuts 11.ai", url: "https://voice.ai/hub/ai-voice-agents/11-ai/", dateAccessed: "2026-04-16" },
    { name: "IBM Newsroom: ElevenLabs + IBM watsonx", url: "https://newsroom.ibm.com/2026-03-25-enterprise-ai-finds-its-voice-elevenlabs-and-ibm-bring-premium-voice-capabilities-to-agentic-ai", dateAccessed: "2026-04-16" },
    { name: "G2 Reviews", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing (including 11.ai alpha)", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://elevenlabs.io",
  status: "active",
  metaTitle: "ElevenLabs Review 2026: 11.ai Voice Assistant, Eleven v3, IBM Partnership",
  metaDescription: "ElevenLabs review. Best AI voice, now with 11.ai (MCP voice assistant), Eleven v3 expressive speech, IBM watsonx. ~50% pricing cut Feb 2026. April 2026.",
};
