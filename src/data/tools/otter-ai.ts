import { ToolReview } from "@/lib/types";

export const otterAi: ToolReview = {
  slug: "otter-ai",
  name: "Otter.ai",
  tagline: "Joins your meetings, transcribes everything, and gives you a summary so you can actually pay attention",
  category: "ai-business-productivity",
  url: "https://otter.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 7,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: [
        "300 monthly transcription minutes",
        "30-min per conversation limit",
        "AI chat",
      ],
    },
    {
      plan: "Pro",
      price: "$17",
      period: "month",
      features: [
        "1,200 monthly minutes",
        "90-min per conversation",
        "OtterPilot for meetings",
        "AI meeting summaries",
      ],
    },
    {
      plan: "Business",
      price: "$30",
      period: "month",
      features: [
        "6,000 monthly minutes",
        "4-hour per conversation",
        "Admin analytics",
        "OtterPilot + action items",
      ],
    },
  ],

  pros: [
    "OtterPilot auto-joins Zoom, Google Meet, and Teams calls -- no manual recording or setup needed",
    "Speaker identification works surprisingly well, even in meetings with 5+ participants",
    "Post-meeting summaries with action items are accurate enough to replace manual note-taking for most meetings",
    "Search across all your transcripts is powerful -- find that thing someone said three months ago in seconds",
  ],
  cons: [
    "Transcription accuracy drops noticeably with accents, crosstalk, or poor audio quality",
    "The free tier's 30-minute limit per conversation makes it nearly useless for real meetings",
    "Having an AI bot visibly join your meeting can be awkward, especially with external clients",
    "Editing transcripts after the fact is clunky -- the editor feels like an afterthought",
  ],
  knownIssues: [
    {
      description:
        "OtterPilot occasionally fails to join scheduled meetings, requiring manual recording instead",
      source: "Reddit r/productivity",
      date: "2026-03",
    },
    {
      description:
        "Transcripts sometimes merge two speakers into one when they talk at similar volumes",
      source: "G2 Reviews",
      date: "2026-02",
    },
  ],
  bestFor:
    "Remote teams who live in meetings and want automatic transcription, summaries, and searchable records.",
  notFor:
    "People in industries with strict confidentiality requirements who can't send meeting audio to a third party.",
  verdict:
    "Otter.ai solves a real problem -- nobody wants to take meeting notes. The auto-join and summary features work well enough that you can stop worrying about capturing everything. But the accuracy isn't perfect, the free tier is too limited, and you'll want to double-check important action items rather than blindly trusting the AI summary.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Otter.ai official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/productivity", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://otter.ai",
  status: "active",
  metaTitle: "Otter.ai Review 2026: AI Meeting Transcription That Actually Works",
  metaDescription:
    "Otter.ai review. Auto-joins meetings, transcribes with speaker ID, generates summaries. Good but not perfect. Scores, pricing, issues. March 2026.",
};
