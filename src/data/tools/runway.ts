import { ToolReview } from "@/lib/types";

export const runway: ToolReview = {
  slug: "runway",
  name: "Runway",
  tagline: "Runway Gen-4.5 (shipped 2025-12-01) -- #1 on Artificial Analysis text-to-video leaderboard at 1,247 Elo. Gen-4 Turbo supports native 4K. The most capable professional AI video generator available in 2026",
  category: "ai-video-generators",
  url: "https://runwayml.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 9,
    value: 6,
    features: 9,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["125 credits", "3 projects", "720p export", "Watermarked"],
    },
    {
      plan: "Standard",
      price: "$15",
      period: "month",
      features: ["625 credits/mo", "Unlimited projects", "4K upscale"],
    },
    {
      plan: "Pro",
      price: "$35",
      period: "month",
      features: ["2,250 credits/mo", "No watermarks", "Custom models"],
    },
  ],

  pros: [
    "Gen-4.5 holds #1 on Artificial Analysis text-to-video leaderboard (1,247 Elo as of 2026-04) -- ahead of Kling, Pika, Runway Gen-4, and Veo 3.0",
    "Gen-4 Turbo ships native 4K output (Gen-3 topped out at 720p native / 4K upscale)",
    "Full creative suite -- not just text-to-video but also inpainting, motion brush, image-to-video, video-to-video",
    "Motion and physics are substantially improved over Gen-3 -- fewer hand/face distortions",
    "The web editor is professional-grade with timeline, layers, masking",
    "Available on all paid plans (Standard / Pro / Unlimited) -- Gen-4.5 isn't gated to top tier",
  ],
  cons: [
    "Credits still burn fast at premium resolutions -- a 4K Gen-4.5 clip can cost 100+ credits",
    "Generation times are longer at 4K; lower-resolution output is much faster",
    "Free tier is still basically a demo -- 125 credits gets you maybe 2-3 clips",
    "Generated videos max out at about 10 seconds before quality degrades, same as Gen-3",
    "Competition is closing -- Kling 3.0 and Veo 3.1 are both credible alternatives at similar price points",
  ],
  knownIssues: [
    {
      description: "Gen-4.5 released 2025-12-01 (replacing Gen-3 Alpha as flagship). Native 4K output via Gen-4 Turbo, substantially improved motion/physics, #1 on Artificial Analysis T2V leaderboard at 1,247 Elo. If your stack was pinned to specific Gen-3 behaviors, audit before upgrading -- some generation quirks have changed",
      source: "runwayml.com/research, CNBC, Artificial Analysis",
      date: "2025-12",
    },
    {
      description: "Gen-4.5 still struggles with multi-character scenes where characters interact -- tends to blend features or lose one character mid-shot. Single-character clips are where it shines",
      source: "Reddit r/runwayml, hands-on testing",
      date: "2026-04",
    },
    {
      description: "Credit costs for 4K generation are meaningfully higher than 720p -- a 10-second 4K Gen-4.5 clip can cost 100+ credits vs ~50 credits at 720p. Budget for resolution accordingly",
      source: "Runway pricing docs, community reports",
      date: "2026-04",
    },
  ],
  bestFor: "Video creators, filmmakers, and agencies who need top AI video quality with the full creative suite (inpainting, motion brush, video-to-video). Gen-4.5 at #1 on the Artificial Analysis leaderboard makes it the benchmark pick for professional work in 2026.",
  notFor: "Casual users or anyone on a tight budget. Credits disappear fast (especially at 4K), and the free tier barely lets you try it. For experimentation, Pika or Kling at similar price points are more forgiving.",
  verdict: "Runway remains the professional-tier pick for AI video in 2026. Gen-4.5 (shipped 2025-12-01) holds #1 on Artificial Analysis's text-to-video leaderboard at 1,247 Elo, with native 4K via Gen-4 Turbo and meaningful improvements in motion and physics over Gen-3. The creative suite -- inpainting, motion brush, video-to-video -- is still the widest in the market. Downsides are unchanged from Gen-3: credits burn fast (worse at 4K), 10-second clip cap, competition from Kling 3.0 and Veo 3.1 is tightening. If you need the best available quality or the full creative toolset, Runway. If you're budget-conscious or experimenting, Pika or Kling first.",

  lastReviewedDate: "2026-04-24",
  dataSources: [
    { name: "Runway Research: Introducing Runway Gen-4.5", url: "https://runwayml.com/research/introducing-runway-gen-4.5", dateAccessed: "2026-04-24" },
    { name: "CNBC: Runway Gen-4.5 video model (2025-12-01)", url: "https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html", dateAccessed: "2026-04-24" },
    { name: "Artificial Analysis text-to-video leaderboard", url: "https://artificialanalysis.ai/text-to-video/arena", dateAccessed: "2026-04-24" },
    { name: "Runway official site + pricing", dateAccessed: "2026-04-24" },
    { name: "Reddit r/runwayml", dateAccessed: "2026-04-24" },
    { name: "Hands-on testing", dateAccessed: "2026-04-24" },
  ],
  affiliateUrl: "https://runwayml.com",
  status: "active",
  metaTitle: "Runway Gen-4.5 Review 2026: #1 AI Video Generator, Native 4K",
  metaDescription: "Runway Gen-4.5 review. Shipped Dec 2025, holds #1 on Artificial Analysis T2V leaderboard (1,247 Elo). Native 4K via Gen-4 Turbo, improved motion/physics vs Gen-3. $15-$35/mo plans.",
};
