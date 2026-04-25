import { ToolReview } from "@/lib/types";

export const sora: ToolReview = {
  slug: "sora",
  name: "Sora (Discontinued)",
  tagline: "OpenAI's text-to-video model -- DISCONTINUED March 24, 2026. Web/app shuts down April 26, 2026. API sunsets September 24, 2026. See alternatives: Veo 3.1, Kling 3.0, Seedance 2.0",
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
      plan: "DISCONTINUED",
      price: "N/A",
      features: [
        "OpenAI announced shutdown on 2026-03-24",
        "Sora web and app experiences end 2026-04-26",
        "Sora API sunsets 2026-09-24",
        "Sora 1 no longer available in the US since 2026-03-13",
        "No new signups accepted",
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
    "DISCONTINUED -- OpenAI shut Sora down effective April 26, 2026 after approximately 6 months of public availability. Users must export data before the sunset date",
    "No free tier ever existed -- $20/month ChatGPT Plus minimum, and the 50-video limit was tight for casual use, which contributed to low adoption",
    "The $200/month ChatGPT Pro requirement for full features (longer clips, no watermark) priced out the hobbyist market that Kling and Pika captured instead",
    "Per TechCrunch and WSJ reporting: Sora was a 'money pit that nobody was using.' Peak worldwide users were around 1 million, then collapsed to fewer than 500,000. Daily compute burn was roughly 1 million USD per day. Video generation's chip-level compute cost drove the decision, freeing capacity for higher-priority OpenAI work. Disney's planned 1 billion USD partnership terminated alongside the product",
  ],
  knownIssues: [
    {
      description: "TOMORROW (T-1, as of 2026-04-25). The Sora consumer web + app shut down hard-dates to 2026-04-26 -- if you still have generated videos in your account, export them today via sora.chatgpt.com/exports/me. No delay or extension announced. The API continues until 2026-09-24 for existing API customers, but no new signups are accepted",
      source: "OpenAI Help Center: Sora discontinuation (rechecked 2026-04-25)",
      date: "2026-04-25",
    },
    {
      description: "Sora is being shut down. OpenAI announced the discontinuation on 2026-03-24. Web and app experiences end 2026-04-26, API sunsets 2026-09-24. Users should export their generated videos before then. OpenAI cited unsustainable compute costs, low adoption, and a strategic pivot to enterprise AI",
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
  bestFor: "Historical context. Anyone researching the AI-video space needs to understand why Sora failed -- it's a case study in how consumer-pricing + compute economics can kill a product even when the underlying tech is impressive. If you're looking for a working video generator today, skip Sora and go to Veo 3.1 (best quality, now free via Google Vids), Kling 3.0 (best value, free 66 credits/day), or Seedance 2.0 (best workflow if you already use CapCut).",
  notFor: "Anyone trying to use Sora as a working tool in April 2026 or later. The product is sunsetting within days of this review's publication. Export your data if you have existing work. For any new AI video project, pick one of the alternatives above.",
  verdict: "Sora is a cautionary tale rather than a product recommendation as of April 2026. OpenAI sunset the consumer video app on March 24, 2026 after a roughly six-month public run. The WSJ's investigation produced the specific numbers: peak of about 1 million worldwide users that collapsed to fewer than 500,000, while the product burned through roughly $1 million per day in compute -- video generation was consuming finite AI chip capacity that OpenAI chose to redirect to higher-priority work. The underlying video tech was genuinely strong -- physical realism and multi-shot coherence were state of the art when Sora launched -- but the $20-and-up pricing with tight limits never found a viable consumer market, and Disney's $1 billion partnership terminated alongside the product (Disney learned less than an hour before the public announcement). If you were exploring Sora, use this as your pointer to the actual working 2026 video tools: Veo 3.1 for quality (free tier now), Kling 3.0 for budget-conscious creators, Seedance 2.0 for short-form social workflows inside CapCut.",

  lastReviewedDate: "2026-04-25",
  dataSources: [
    { name: "OpenAI Help Center: Sora discontinuation (T-1 confirmed 2026-04-25)", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation", dateAccessed: "2026-04-25" },
    { name: "The Decoder: Two-stage Sora shutdown", url: "https://the-decoder.com/openai-sets-two-stage-sora-shutdown-with-app-closing-april-2026-and-api-following-in-september/", dateAccessed: "2026-04-25" },
    { name: "OpenAI Help Center: Sora 1 Sunset FAQ", url: "https://help.openai.com/en/articles/20001071-sora-1-sunset-faq", dateAccessed: "2026-04-16" },
    { name: "TechCrunch: Why OpenAI really shut down Sora", url: "https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/", dateAccessed: "2026-04-16" },
    { name: "CNN Business: OpenAI is shutting down its Sora video app", url: "https://edition.cnn.com/2026/03/24/tech/openai-sora-video-app-shutting-down", dateAccessed: "2026-04-16" },
    { name: "Variety: OpenAI Will Shut Down Sora; Disney Drops $1 Billion Investment", url: "https://variety.com/2026/digital/news/openai-shutting-down-sora-video-disney-1236698277/", dateAccessed: "2026-04-16" },
    { name: "Wikipedia: Sora (text-to-video model)", url: "https://en.wikipedia.org/wiki/Sora_(text-to-video_model)", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://sora.com",
  status: "deprecated",
  metaTitle: "Sora Shutdown (April 2026): Why OpenAI Killed It + Best Alternatives",
  metaDescription: "Sora is shutting down April 26, 2026. OpenAI announced the discontinuation on March 24 due to compute costs + low adoption. What happened + best alternatives (Veo 3.1, Kling 3.0, Seedance 2.0).",
};
