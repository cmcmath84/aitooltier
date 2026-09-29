import { ToolReview } from "@/lib/types";

export const sora: ToolReview = {
  slug: "sora",
  name: "Sora (Discontinued)",
  tagline: "OpenAI's text-to-video model -- consumer web + iOS + Android SHUT DOWN as of 2026-04-26 (sora.com + sora.chatgpt.com return 403). The API followed: Sora 2 models and the Videos API were shut down on 2026-09-24 -- the API shutdown executed on schedule, and OpenAI states there is no one-to-one replacement API. See alternatives: Veo 3.1, Kling 3.0, Seedance 2.0, Runway Gen-4.5",
  category: "ai-video-generators",
  url: "https://sora.com",

  scores: {
    easeOfUse: 7,
    outputQuality: 8,
    value: 1,
    features: 4,
    overall: 5.0,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "DISCONTINUED (consumer)",
      price: "N/A",
      features: [
        "OpenAI announced shutdown on 2026-03-24",
        "Sora web and app SHUT DOWN 2026-04-26 (today) -- sora.com + sora.chatgpt.com confirmed returning HTTP 403",
        "Sora 2 models and the Videos API SHUT DOWN 2026-09-24 (confirmed on OpenAI's sora-2 model page 2026-09-28: 'no longer available', 'no one-to-one replacement API')",
        "Sora 1 was unavailable in the US since 2026-03-13",
        "Generated-video exports were available until 2026-04-26 at sora.chatgpt.com/exports/me",
      ],
    },
    {
      plan: "Alternatives (recommended)",
      price: "$0 - $249.99",
      period: "month",
      features: [
        "Google Veo 3.1 -- free via Google Vids, best quality + audio (see /tools/veo)",
        "Kling 3.0 -- free 66 credits/day, native 4K (see /tools/kling-ai)",
        "Seedance 2.0 (CapCut) -- $9.99/mo, unified A/V, Identity Lock (see /tools/seedance)",
        "Runway Gen-3 -- pro-grade cinematic tool (see /tools/runway)",
      ],
    },
  ],

  pros: [
    "Visual quality and physical realism were among the best in AI video during the product's brief run -- motion and lighting looked natural, and Sora 2 storyboard mode introduced several ideas competitors adopted",
    "Understood spatial relationships and physics better than its 2024 contemporaries -- objects interacted more believably than in Runway Gen-2 or Kling 1.x of the same era",
    "Sora's research informed the entire AI-video field -- multi-shot coherence, character consistency, and extended-duration generation were problems Sora helped define benchmarks for",
    "Integrated into ChatGPT while it lasted -- users didn't need a separate platform or account to try it",
  ],
  cons: [
    "DISCONTINUED -- OpenAI shut down the consumer Sora web + iOS + Android experiences on 2026-04-26 after approximately six months of public availability. Both sora.com and sora.chatgpt.com now return HTTP 403. The API was shut down on 2026-09-24 as scheduled -- no one-to-one replacement",
    "No free tier ever existed -- $20/month ChatGPT Plus minimum, and the 50-video limit was tight for casual use, which contributed to low adoption",
    "The $200/month ChatGPT Pro requirement for full features (longer clips, no watermark) priced out the hobbyist market that Kling and Pika captured instead",
    "Per TechCrunch and WSJ reporting: Sora was a 'money pit that nobody was using.' Peak worldwide users were around 1 million, then collapsed to fewer than 500,000. Daily compute burn was roughly 1 million USD per day. Video generation's chip-level compute cost drove the decision, freeing capacity for higher-priority OpenAI work. Disney's planned 1 billion USD partnership terminated alongside the product",
  ],
  knownIssues: [
    {
      description: "DATED FLIP EXECUTED -- SORA 2 MODELS AND THE VIDEOS API SHUT DOWN ON 2026-09-24, NO REPLACEMENT (verified 2026-09-28, vendor-primary): OpenAI's model page for `sora-2` now reads: 'The Sora 2 models and Videos API were shut down on September 24, 2026 and are no longer available. There is no one-to-one replacement API.' The deprecations document still lists the six rows (`Videos API`, `sora-2`, `sora-2-pro`, `sora-2-2025-10-06`, `sora-2-2025-12-08`, `sora-2-pro-2025-10-06`) under the 2026-03-24 notice with shutdown date 2026-09-24 and replacement '---'; as of 9/28 that section had not yet been moved to 'Past deprecations', so the model page is the primary confirmation of execution. This closes the last live Sora surface: consumer web and apps ended 2026-04-26, the API ended 2026-09-24, six months apart exactly as announced on 2026-03-24. For developers who were still calling the Videos API, OpenAI names no successor; the on-site alternatives below (Veo 3.1 / Omni 1.1 via Vertex AI and Google Vids, Kling, Seedance, Runway) are the practical migration paths.",
      source: "OpenAI API docs (developers.openai.com/api/docs/models/sora-2.md -- 'shut down on September 24, 2026'; platform.openai.com/docs/deprecations.md -- rows still under the 2026-03-24 notice) -- fetched 2026-09-28 via curl with browser UA",
      date: "2026-09-24",
    },
    {
      description: "T-0 CONFIRMED 2026-04-26: the Sora consumer experience is dead as of today. sora.com and sora.chatgpt.com both return HTTP 403, the iOS and Android apps were pulled, and OpenAI's help center confirms 'sora.com, the iOS app, and the Android app are discontinued April 26, 2026.' No 11th-hour delay or extension. The user-facing product is gone -- only the API remains, and only for existing API customers until 2026-09-24. Anyone Googling 'sora alternatives' or 'sora replacement' today should be redirected to Veo 3.1 (free via Google Vids), Kling 3.0 (free 66 credits/day), or Runway Gen-4.5 (current AA leaderboard #1 at 1247 Elo)",
      source: "OpenAI Help Center: Sora discontinuation, The Decoder, direct curl on sora.com/sora.chatgpt.com (HTTP 403, verified 2026-04-26)",
      date: "2026-04-26",
    },
    {
      description: "OpenAI announced the discontinuation on 2026-03-24, gave users one month to export their videos via sora.chatgpt.com/exports/me, and held the line on the date despite pushback. The export window closed alongside the consumer shutdown today. OpenAI cited unsustainable compute costs (~$1M/day), low adoption (<500K MAU at end of life from a peak ~1M), and a strategic pivot to enterprise AI",
      source: "OpenAI Help Center, CNN, TechCrunch, Variety",
      date: "2026-03",
    },
    {
      description: "Disney, which was reportedly committing $1 billion to a Sora partnership, learned of the shutdown less than an hour before the public announcement. The deal had not formally closed so no money changed hands, but the trust signal was bad for OpenAI's enterprise pitch",
      source: "Variety, WSJ",
      date: "2026-03",
    },
    {
      description: "During its active period: characters sometimes changed appearance between cuts when generating multi-scene videos with storyboard mode, and generation queue times exceeded 10 minutes during peak hours for Plus subscribers",
      source: "Reddit r/OpenAI",
      date: "2026-03",
    },
  ],
  bestFor: "Historical context only -- the consumer product is shut down as of 2026-04-26. Anyone researching the AI-video space needs to understand why Sora failed: it's a case study in how consumer-pricing + compute economics can kill a product even when the underlying tech is impressive. For a working video generator today, go to Veo 3.1 (best quality, free via Google Vids), Kling 3.0 (best value, free 66 credits/day), Seedance 2.0 (best workflow inside CapCut), or Runway Gen-4.5 (current AA leaderboard #1).",
  notFor: "Any new project. The consumer experience is gone (HTTP 403 confirmed 2026-04-26) and the API was shut down on 2026-09-24. For any new AI video project pick one of the alternatives above.",
  verdict: "Sora is now a cautionary tale rather than a product recommendation. OpenAI announced the consumer shutdown on 2026-03-24 and held the line: as of 2026-04-26, sora.com and sora.chatgpt.com both return HTTP 403 and the iOS + Android apps are pulled. The API was shut down on 2026-09-24, on schedule, with no replacement API. The WSJ's investigation produced the numbers that drove the decision -- peak ~1 million worldwide users that collapsed to fewer than 500,000, while the product burned through roughly $1 million per day in compute. Video generation was consuming finite AI chip capacity that OpenAI chose to redirect to higher-priority work. The underlying video tech was genuinely strong -- physical realism and multi-shot coherence were state of the art when Sora launched -- but the $20-and-up pricing with tight limits never found a viable consumer market, and Disney's $1 billion partnership terminated alongside the product (Disney learned less than an hour before the public announcement). If you were a Sora user, this is your pointer to the actual working 2026 video tools: Veo 3.1 for quality (free tier now), Kling 3.0 for budget-conscious creators, Seedance 2.0 for short-form social workflows inside CapCut, Runway Gen-4.5 for cinematic work.",

  lastReviewedDate: "2026-09-28",
  dataSources: [
    { name: "OpenAI API docs: Sora 2 model page -- 'shut down on September 24, 2026 and are no longer available', no one-to-one replacement (fetched 2026-09-28)", url: "https://developers.openai.com/api/docs/models/sora-2", dateAccessed: "2026-09-28" },
    { name: "OpenAI API docs: Deprecations -- 2026-03-24 Sora 2 / Videos API notice with 2026-09-24 shutdown rows (fetched 2026-09-28)", url: "https://platform.openai.com/docs/deprecations", dateAccessed: "2026-09-28" },
    { name: "OpenAI Help Center: Sora discontinuation (T-0 confirmed 2026-04-26)", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation", dateAccessed: "2026-04-26" },
    { name: "The Decoder: Two-stage Sora shutdown", url: "https://the-decoder.com/openai-sets-two-stage-sora-shutdown-with-app-closing-april-2026-and-api-following-in-september/", dateAccessed: "2026-04-26" },
    { name: "Direct curl confirmation -- sora.com + sora.chatgpt.com both return HTTP 403 on 2026-04-26", dateAccessed: "2026-04-26" },
    { name: "OpenAI Help Center: Sora 1 Sunset FAQ", url: "https://help.openai.com/en/articles/20001071-sora-1-sunset-faq", dateAccessed: "2026-04-16" },
    { name: "TechCrunch: Why OpenAI really shut down Sora", url: "https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/", dateAccessed: "2026-04-16" },
    { name: "CNN Business: OpenAI is shutting down its Sora video app", url: "https://edition.cnn.com/2026/03/24/tech/openai-sora-video-app-shutting-down", dateAccessed: "2026-04-16" },
    { name: "Variety: OpenAI Will Shut Down Sora; Disney Drops $1 Billion Investment", url: "https://variety.com/2026/digital/news/openai-shutting-down-sora-video-disney-1236698277/", dateAccessed: "2026-04-16" },
    { name: "Wikipedia: Sora (text-to-video model)", url: "https://en.wikipedia.org/wiki/Sora_(text-to-video_model)", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://sora.com",
  status: "deprecated",
  metaTitle: "Sora Shut Down: Consumer App 2026-04-26, API 2026-09-24 -- Why OpenAI Killed It + Best Alternatives",
  metaDescription: "Sora is fully shut down. OpenAI closed the consumer app on April 26, 2026 (HTTP 403) and the Sora 2 models and Videos API on Sept 24, 2026 with no replacement API. Compute hit $1M/day and MAU collapsed. Best alternatives: Veo 3.1 and Omni 1.1 (free in Google Vids), Kling 3.0, Runway Gen-4.5.",
};
