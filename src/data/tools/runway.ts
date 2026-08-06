import { ToolReview } from "@/lib/types";

export const runway: ToolReview = {
  slug: "runway",
  name: "Runway",
  tagline: "Runway Gen-4.5 (shipped 2025-12-01) -- #1 on Artificial Analysis text-to-video leaderboard at 1,247 Elo. **GWM-1 (General World Model family) announced May 2026** for Worlds / Avatars / Robotics, built on Gen-4.5. Gen-4.5 also gained **native audio generation + native audio editing** (May 2026). Gen-4 Turbo supports native 4K. The most capable professional AI video generator available in 2026",
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
      description: "STALENESS FIX -- RUNWAY AGENT IS ON 2.0, AND IT IS NOW A MARKETING TOOL (2026-06-25, vendor; this page still described only the 5/13 Agent 1.0 launch): Runway shipped **Agent 2.0**, and the repositioning is the story. Agent 1.0 (5/13) was pitched as a general 'conversational AI creative partner' for planning and iterating video projects. **Agent 2.0 is explicitly aimed at marketers** -- vendor framing: 'Agent 2.0 helps marketers make more of what works: ads, videos and full campaigns that drive revenue.' Four named workflows: **performance marketers** upload existing creative plus ad metrics from **Meta, YouTube, TikTok or Google**, and Agent analyses what converted and generates the next set of ads to test; **social marketers** hand over a week of engagement data and get the next week of posts, auto-cut to **9:16 for Reels and Stories, 16:9 for YouTube, 1:1 for feed**; **brand marketers** develop campaign concepts conversationally and get localised copy and swapped visuals for new markets rather than rebuilding assets per region; **product marketers** work out positioning angles and then build campaign assets around the strongest messages. Read: Runway is moving Agent from 'creative tool' toward 'performance-marketing loop', which puts it against ad-creative platforms rather than only against other video models. Availability and pricing were not restated in the launch post -- Agent 1.0 was on all plans, and we have not found a first-party statement changing that, so do not assume 2.0 carries the same entitlement without checking",
      source: "Runway (runwayml.com/news/introducing-agent-2, datePublished 2026-06-25T10:00:00Z, fetched 2026-08-06)",
      date: "2026-06-25",
    },
    {
      description: "PLATFORM LAUNCH -- RUNWAY DEV + MEDIA ROUTER (2026-07-23, vendor; DATE CORRECTED 2026-08-03 -- this entry previously carried 2026-07-08, which was wrong: the vendor post is dated July 23, 2026). Alongside Dev, Runway shipped **Runway Media Router**, described by the vendor as 'the world's first model router for generative media models' -- it automatically picks the best video, image or audio model per request against user-defined preferences for cost, quality and latency. Runway launched **Runway Dev**, 'the AI media platform for developers: one API to integrate the best image, video, audio and real-time character models.' Four surfaces: **Models** (first-party Gen-4.5, Aleph 2.0, Act-Two PLUS third-party models incl. Seedance, GPT Image 2, ElevenLabs -- 'swap between them by changing one line of code'), **Recipes** (prebuilt endpoints: Ad Localization, Product Ad, Product Swap, Multi-Shot Video, Marketing Stock Image), **Workflows** (custom multi-model pipelines behind private API endpoints), and **Characters** (interactive avatars with voice, tool calling, knowledge bases). Enterprise posture: SOC 2 Type II, IP indemnification, no-training terms, 99.9% uptime, per-model cost visibility. Named customers: Adobe, ElevenLabs, Shutterstock, Figma Weave, Gamma. Pricing not in the launch post",
      source: "Runway news (runway.com/news/introducing-runway-dev, fetched 2026-08-03 -- publication date on page reads July 23, 2026)",
      date: "2026-07-23",
    },
    {
      description: "MODEL SUNSETS -- ALL EXECUTED, THE API CALLS NOW FAIL (updated 2026-08-03): the sunsets are done, not upcoming. **Gen-3 Alpha went offline July 8, 2026** and **Gen-3 Alpha Turbo (`gen3a_turbo`) + Gen-4 Aleph (`gen4_aleph`) were removed on July 30, 2026** -- these are two separate dates, don't collapse them. Runway's API changelog, verbatim: 'July 30th, 2026 - Gen-3 Alpha Turbo (`gen3a_turbo`) and Gen-4 Aleph (`gen4_aleph`) are no longer available via the Runway API. Requests that use these model identifiers will fail.' The help center confirms: 'Gen-3 Alpha was retired on July 8, 2026, and Gen-3 Alpha Turbo was retired on July 30, 2026.' Both identifiers are now absent from Runway's live model list (verified 2026-08-03). Migration targets per vendor: **Gen-3 Alpha Turbo -> Gen-4.5** and **Gen-4 Aleph -> Aleph 2.0 (`aleph2`)** -- note there is **no 'Gen-5'** in Runway's docs, so ignore any source claiming one. If you still have pipelines pinned to Gen-3-era model ids, they are already broken",
      source: "Runway API changelog (docs.dev.runwayml.com/api-details/api_changelog/, fetched 2026-08-03), Runway help center (help.runwayml.com/hc/en-us/articles/30266515017875), Runway dev docs model list (docs.dev.runwayml.com)",
      date: "2026-07-30",
    },
    {
      description: "LATE-MAY/JUNE CLUSTER (all vendor-primary, runwayml.com/news): **5/26 Project Luxo** ('Crossing the Uncanny Valley of AI Media' -- research direction post), **5/27 Runway MCP** (drive Runway generation/editing from Claude, Cursor, and other MCP clients -- significant for agentic video pipelines), **6/1 Cosmos Coalition** launch, and **6/1 London HQ** opening as a world-model research hub for the UK/Europe. The MCP ship is the practical one: Runway becomes scriptable from inside coding agents, which no other major video platform offered as of early June",
      source: "Runway news (runwayml.com/news/project-luxo, /mcp, /introducing-cosmos-coalition, /runway-opens-london-hq)",
      date: "2026-06-01",
    },
    {
      description: "PRODUCT (2026-05-13 + 2026-05-21 TODAY): Runway shipped two material features in 8 days. **5/13 Runway Agent**: conversational AI creative partner inside the Runway app -- chat with the agent in natural language to plan, generate, edit, and iterate video projects across multiple Runway models (Gen-4.5, Aleph). All plans get access. Mirrors the agentic-app pattern Gemini Omni + ChatGPT image/video flows opened up. **5/21 (TODAY) Aleph 2.0 + Edit Studio**: upgraded Aleph video-editing model paired with a new Edit Studio surface (paid plans only). Closes the editing-vs-generation gap that **Gemini Omni's** in-conversation editing put pressure on (5/19 Google I/O reveal -- see gemini.ts entry). Runway's response is to make editing a first-class agentic surface inside Aleph rather than splitting gen+edit across separate models.",
      source: "Runway changelog (runwayml.com/changelog) -- 2026-05-13 Agent + 2026-05-21 Aleph 2.0 + Edit Studio",
      date: "2026-05-21",
    },
    {
      description: "PRODUCT (May 2026): Runway announced **GWM-1** -- the General World Model family for Worlds / Avatars / Robotics, built on top of Gen-4.5. GWM-1 expands Runway from a pure video-generation tool to a broader world-model platform (3D environment synthesis, embodied-agent training, robotics simulation). Same window: **Gen-4.5 gained native audio generation + native audio editing** -- previously audio had to be added post-gen via third-party tools; now Gen-4.5 outputs synchronized audio in the same generation pass and lets you edit it without re-rendering video. Material because (a) audio-native generation closes a known gap vs Veo 3 (which has had native audio since launch), (b) GWM-1 positions Runway against world-model entrants like Genie / Cosmos for the spatial AI use case rather than just T2V leaderboard competition.",
      source: "Runway changelog (runwayml.com/changelog)",
      date: "2026-05",
    },
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

  lastReviewedDate: "2026-08-06",
  dataSources: [
    { name: "Runway: Introducing Agent 2.0 (2026-06-25)", url: "https://runwayml.com/news/introducing-agent-2", dateAccessed: "2026-08-06" },
    { name: "Runway news: Introducing Runway Dev (2026-07-08)", url: "https://runwayml.com/news/company-news/introducing-runway-dev", dateAccessed: "2026-07-18" },
    { name: "Runway help center: Gen-3 Alpha / Turbo availability dates", url: "https://help.runwayml.com/hc/en-us/articles/30266515017875-Creating-with-Gen-3-Alpha-and-Gen-3-Alpha-Turbo", dateAccessed: "2026-07-18" },
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
