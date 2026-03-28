import { ToolReview } from "@/lib/types";

export const descript: ToolReview = {
  slug: "descript",
  name: "Descript",
  tagline: "Edit audio and video by editing text -- the 'Google Docs of media editing' actually lives up to the hype",
  category: "ai-voice-audio",
  url: "https://www.descript.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 8,
    features: 9,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["1 hour transcription/mo", "720p export", "Basic editing"],
    },
    {
      plan: "Hobbyist",
      price: "$24",
      period: "month",
      features: ["10 hours transcription/mo", "4K export", "Filler word removal"],
    },
    {
      plan: "Pro",
      price: "$33",
      period: "month",
      features: ["30 hours transcription/mo", "AI voice cloning", "Green screen", "Studio sound"],
    },
  ],

  pros: [
    "Text-based editing is a genuine breakthrough -- delete a word from the transcript and it disappears from the video",
    "Filler word removal works shockingly well, it cleaned up an interview in seconds that would've taken an hour manually",
    "Studio Sound feature can make a laptop mic recording sound like it was done in a treated room",
    "Screen recording, transcription, and editing all in one app -- no more juggling three different tools",
  ],
  cons: [
    "The app is resource-heavy -- expect lag and fan noise on anything less than a modern machine with 16GB RAM",
    "AI voice clone (Overdub) still sounds noticeably synthetic for longer passages, especially with emotional content",
    "Collaboration features are solid but the real-time sync can be flaky with larger projects",
    "Export times are slow compared to traditional editors like Premiere or DaVinci Resolve",
  ],
  knownIssues: [
    {
      description: "Projects over 2 hours sometimes experience timeline sync issues where transcript and media drift apart",
      source: "Descript Community Forum",
      date: "2026-03",
    },
    {
      description: "Overdub voice clone occasionally mispronounces common words after recent updates",
      source: "Reddit r/descript",
      date: "2026-02",
    },
  ],
  bestFor: "Podcasters, YouTubers, and content teams who want fast, intuitive editing without learning a traditional NLE.",
  notFor: "Professional video editors who need precise frame-level control and complex compositing.",
  verdict: "Descript genuinely changed how I think about editing. The text-based approach isn't a gimmick -- it's a fundamentally faster way to cut podcasts and talking-head videos. The AI features like filler word removal and Studio Sound save real time. It's not going to replace Premiere for cinematic work, but for content creators who spend most of their time cutting interviews and cleaning up audio, it's the best tool available right now.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Descript official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/descript", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://www.descript.com",
  status: "active",
  metaTitle: "Descript Review 2026: Edit Video by Editing Text -- Does It Actually Work?",
  metaDescription: "Descript review. Text-based audio and video editing with AI filler removal, Studio Sound, and voice cloning. Scores, pricing, honest pros and cons. March 2026.",
};
