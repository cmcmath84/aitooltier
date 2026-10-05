import { ToolReview } from "@/lib/types";

export const otterAi: ToolReview = {
  slug: "otter-ai",
  name: "Otter.ai",
  tagline: "Joins your meetings, transcribes everything, and gives you a summary so you can actually pay attention. **Pricing re-verified 2026-10-05: Basic stays free at 300 minutes/month with a 30-minute cap per conversation; Pro is $16.99/user/month monthly and annual billing drops Pro to $8.33; Business is $30 monthly or $19.99 annual and now advertises unlimited meetings and imports instead of a 6,000-minute cap.**",
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
      plan: "Basic (free, verified 2026-10-05)",
      price: "$0",
      features: [
        "300 monthly transcription minutes",
        "30-minute per conversation limit",
        "3 lifetime audio/video file imports",
        "AI Chat: 20 queries per user",
      ],
    },
    {
      plan: "Pro (verified 2026-10-05)",
      price: "$16.99",
      period: "user/month billed monthly ($8.33/user/month billed annually, 51% off)",
      features: [
        "1,200 in-app recording minutes per month",
        "90-minute per meeting cap",
        "10 monthly audio/video file imports",
        "Unlimited storage",
        "Advanced AI workflows and Salesforce, HubSpot and Zapier integrations",
      ],
    },
    {
      plan: "Business (verified 2026-10-05)",
      price: "$30",
      period: "user/month billed monthly ($19.99/user/month billed annually, 33% off)",
      features: [
        "Unlimited meetings and in-app recordings",
        "Unlimited audio/video file imports",
        "4-hour per meeting cap",
        "Join up to 3 concurrent meetings",
        "Admin analytics",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Business",
        "Unlimited custom AI workflows",
        "SSO and SCIM",
        "HIPAA add-on",
        "API and webhooks access",
      ],
    },
  ],

  pros: [
    "Auto-joins Zoom, Google Meet, and Teams calls -- no manual recording or setup needed",
    "Speaker identification works surprisingly well, even in meetings with 5+ participants",
    "Post-meeting summaries with action items are accurate enough to replace manual note-taking for most meetings",
    "Search across all your transcripts is powerful -- find that thing someone said three months ago in seconds",
    "Annual Pro at $8.33/user/month is one of the cheapest paid meeting-transcription tiers around",
  ],
  cons: [
    "Transcription accuracy drops noticeably with accents, crosstalk, or poor audio quality",
    "The free tier's 30-minute limit per conversation makes it nearly useless for real meetings, and the 3-lifetime-import cap means you cannot even test it on old recordings",
    "Monthly billing costs roughly twice the annual rate (Pro $16.99 vs $8.33), so the headline price depends entirely on committing for a year",
    "Having an AI bot visibly join your meeting can be awkward, especially with external clients",
    "Editing transcripts after the fact is clunky -- the editor feels like an afterthought",
  ],
  knownIssues: [
    {
      description: "PRICING RE-VERIFIED (2026-10-05, vendor-primary): otter.ai/pricing lists Basic (free: 300 monthly transcription minutes, 3 lifetime audio/video imports, AI Chat 20 queries/user, 30-minute conversations), Pro ($16.99/user/month monthly or $8.33/user/month annual, 'save 51%'; 1,200 in-app recording minutes, 10 monthly imports, 90 minutes per meeting, unlimited storage), Business ('Best Value', $30/user/month monthly or $19.99 annual, 'save 33%'; unlimited meetings and in-app recordings, unlimited imports, 4 hours per meeting, 3 concurrent meetings) and Enterprise (custom; unlimited custom AI workflows, SSO, SCIM, HIPAA add-on, API/webhooks). All paid plans include 'Advanced AI workflows' and Salesforce, HubSpot and Zapier integrations. Versus this page's March 2026 review: Pro moved from a flat $17 to a $16.99 monthly / $8.33 annual split, and Business dropped its 6,000-minute cap for 'unlimited'. No rename or ownership change on the vendor page.",
      source: "Otter.ai pricing page (otter.ai/pricing) -- fetched 2026-10-05 via WebFetch",
      date: "2026-10-05",
    },
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
    "Remote teams who live in meetings and want automatic transcription, summaries, and searchable records -- especially on the $8.33 annual Pro tier or the unlimited Business tier.",
  notFor:
    "People in industries with strict confidentiality requirements who can't send meeting audio to a third party, or anyone expecting the free tier to cover real meetings.",
  verdict:
    "Otter.ai solves a real problem -- nobody wants to take meeting notes. The auto-join and summary features work well enough that you can stop worrying about capturing everything, and the annual Pro price is hard to beat. But the accuracy isn't perfect, the free tier is too limited, monthly billing doubles the cost, and you'll want to double-check important action items rather than blindly trusting the AI summary.",

  lastReviewedDate: "2026-10-05",
  dataSources: [
    { name: "Otter.ai pricing page -- Basic free, Pro $16.99/$8.33, Business $30/$19.99, Enterprise custom (fetched 2026-10-05)", url: "https://otter.ai/pricing", dateAccessed: "2026-10-05" },
    { name: "Otter.ai official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/productivity", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://otter.ai",
  status: "active",
  metaTitle: "Otter.ai Review 2026: Pricing ($8.33 Annual Pro), Free Tier Limits, Accuracy",
  metaDescription:
    "Otter.ai review, October 2026. Auto-joins meetings, transcribes with speaker ID, generates summaries. Pro is $16.99/month or $8.33 annual, Business $30 or $19.99 annual with unlimited meetings; the free tier caps conversations at 30 minutes. Scores, pricing, known issues.",
};
