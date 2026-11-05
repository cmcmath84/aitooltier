import { ToolReview } from "@/lib/types";

export const veo: ToolReview = {
  slug: "veo",
  name: "Google Veo 3.1",
  tagline: "**Gemini Omni 1.2 Flash went generally available on 2026-11-05, the first GA Omni model: native 15-second clips (up from 10), multi-turn conversational editing across the whole clip and up to six reference images, at about $0.07 per second of 720p video in the Gemini API, 30% below Omni 1.1 Flash. Calls to gemini-omni-1.1-flash route to 1.2 from 2026-12-03, and Google Vids makes 15-second clips at no extra cost.** Google's AI video stack -- Veo 3.1 (native 4K at 60fps with synchronized audio) plus the newer Gemini Omni 1.1 Flash, which from **2026-09-23 generates free 1080p scenes for any Google account inside Google Vids** (extend scenes, set exact clip durations, upscale, templates, SynthID watermark) after landing in Google Flow on 8/27. Also 9/23: **Google Flow Tools** -- describe a workflow and Flow builds a reusable custom tool; six creator-built tools shipped (ambient sound and foley stems, multilingual captions, social thumbnails, architectural textures, animated collages, Swiss-style motion graphics), each duplicable and remixable.",
  category: "ai-video-generators",
  url: "https://deepmind.google/technologies/veo",

  scores: {
    easeOfUse: 7.5,
    outputQuality: 9.5,
    value: 6.5,
    features: 8,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Google Vids (Free)",
      price: "$0",
      features: [
        "Gemini Omni 1.1 Flash in Google Vids at no cost for any Google or Workspace account (2026-09-23): new 1080p scenes, scene extension, exact clip durations, upscaling, templates, SynthID watermark; free-tier limits not published",
        "Veo 3.1 Lite free to every Google account (rolled out April 2026)",
        "Limited daily generations",
        "Native Google Vids integration for editing",
      ],
    },
    {
      plan: "Google AI Pro",
      price: "$19.99",
      period: "month",
      features: [
        "Full Veo 3.1 access via Gemini",
        "Higher generation limits",
        "4K 60fps output",
        "Synchronized native audio",
      ],
    },
    {
      plan: "Google AI Ultra",
      price: "$249.99",
      period: "month",
      features: [
        "Effectively unlimited Veo 3.1 generations",
        "Gemini 3.1 Pro with maximum limits, Nano Banana 2 included",
        "Project Mariner (10 parallel agentic browser tasks)",
        "30 TB storage, YouTube Premium",
      ],
    },
    {
      plan: "Gemini API (Gemini Omni 1.2 Flash)",
      price: "$12 per 1M video tokens",
      period: "about $0.07 per second at 720p",
      features: [
        "gemini-omni-1.2-flash, GA 2026-11-05 on the paid tier: $1.50 per 1M input tokens, $9.00 text output, $12.00 video output",
        "Billed at 5,792 tokens per second of 720p: about $0.70 for a 10s clip and $1.04 for 15s; 360p $0.023/s, 1080p (upsampled) $0.104/s, 4K (upsampled) $0.209/s",
        "Omni 1.1 Flash was $17.50 per 1M video tokens (about $0.10/s); its API calls route to 1.2 at 1.2 rates from 2026-12-03",
        "Not available on the free tier; SynthID watermark on every output",
      ],
    },
    {
      plan: "Vertex AI (Veo 3.1 Lite API)",
      price: "Usage-based",
      period: "per second of video",
      features: [
        "API access for developers",
        "Gemini API preview IDs veo-3.1-generate-preview, -fast and -lite reached their 2026-10-22 shutdown date; on the Gemini API the replacement is gemini-omni-1.1-flash, which itself routes to gemini-omni-1.2-flash from 2026-12-03",
        "Veo upscaling capability",
        "Commercial use licensing",
      ],
    },
  ],

  pros: [
    "Output quality is the clear leader after OpenAI shut down Sora in March 2026 -- native 4K at 60fps, motion coherence, and lighting are a generation ahead of what Kling, Runway, or Pika deliver in pure-quality tests",
    "Synchronized audio in a single pass is genuinely excellent -- dialogue, SFX, and ambient match the scene without post-hoc stitching, rivaling Seedance 2.0 for A/V unity",
    "Free rollout to every Google account via Google Vids (April 2026) is a major accessibility shift -- you no longer need a paid subscription to try best-in-class AI video, just a Google login",
    "Vertex AI API for Veo 3.1 Lite means developers can now build Veo into their own tools, which was a huge gap in the original Veo release",
  ],
  cons: [
    "Free tier limits on Google Vids are modest -- serious iteration or long-form work will push you to Google AI Pro ($19.99/mo) or Ultra ($249/mo) quickly",
    "Generation times are still slow -- expect 1-4 minutes per clip on Pro, which makes rapid iteration painful compared to Seedance 2.0 shipping inside CapCut",
    "Style diversity skews cinematic -- Veo 3.1 has a recognizable 'prestige commercial' look that is hard to push into stylized or experimental territory",
    "Google ecosystem lock-in remains -- your generations live inside Google Vids / Drive, and pulling them into Premiere or DaVinci workflows adds friction that Seedance + CapCut doesn't",
  ],
  knownIssues: [
    {
      description: "GEMINI OMNI 1.2 FLASH IS GENERALLY AVAILABLE -- 15-SECOND CLIPS, MULTI-TURN EDITING, 30% CHEAPER, AND OMNI 1.1 AUTO-ROUTES TO IT ON DEC 3 (2026-11-05, vendor-primary): Google says it is 'making it generally available across the Gemini API and Gemini for business', and that 'for the first time, Gemini Omni is now generally available, backed by Google Cloud's enterprise-grade infrastructure and security', with Provisioned Throughput. **What changed:** native video 'up to 15 seconds long, up from 10 seconds with Omni 1.1', durations in one-second steps from 3 to 15; multi-turn conversational editing that 'works across full 15-second clips' (swap a product or background, change lighting or aspect ratio without regenerating); better reference adherence with up to six reference images plus short motion clips and audio cues; clearer multi-speaker lip-sync; fewer unwanted jump cuts on continuous camera moves. Per the API changelog, first-and-last-frame interpolation and per-turn extension stay at 3 to 10 seconds, with extension up to 30 seconds total. **Price (Gemini API rate card, checked 2026-11-05):** $1.50 per 1M input, $9.00 text output, **$12.00 per 1M video output tokens**, which Google converts at 5,792 tokens per second of 720p to about **$0.07/s** (~$0.70 per 10s, ~$1.04 per 15s); 360p $0.023/s, 1080p $0.104/s and 4K $0.209/s with upsampling. Omni 1.1 Flash is $17.50 per 1M (about $0.10/s), and 'effective December 3, 2026, all API requests to gemini-omni-1.1-flash automatically route to gemini-omni-1.2-flash' at 1.2 rates -- a price cut, not a rise, for anyone who does nothing. Paid-tier rate limits doubled. **Apps:** multi-turn edits in Flow, '15-second clips at no additional cost in Google Vids with a Google account or Google Workspace subscription', 15-second videos in the Gemini app 'rolling out to Google AI Ultra subscribers', and Google Ads. Google's own caveat: fast sports action, rapid script changes and complex physics are still being worked on.",
      source: "Google (blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/, RSS pubDate Thu, 05 Nov 2026; ai.google.dev Gemini API changelog 'November 5, 2026' and pricing page, via Firecrawl) -- fetched 2026-11-05",
      date: "2026-11-05",
    },
    {
      description: "GEMINI API PREVIEW IDS FOR VEO 3.1 AND OMNI FLASH REACHED THEIR SHUTDOWN DATE (2026-10-22, vendor-primary): Google's deprecations table lists veo-3.1-generate-preview, veo-3.1-fast-generate-preview, veo-3.1-lite-generate-preview and gemini-omni-flash-preview with a shutdown date of October 22, 2026, and names gemini-omni-1.1-flash as the replacement for all four. This supersedes our 2026-06-30 advice below to migrate the old Veo 2.0 and 3.0 IDs onto the 3.1 preview IDs: on the Gemini API, use gemini-omni-1.1-flash, or the GA Veo models on the Gemini Enterprise Agent Platform. Consumer Veo 3.1 in the Gemini app and Omni 1.1 Flash in Google Vids and Flow are not affected.",
      source: "Gemini API deprecations table (ai.google.dev/gemini-api/docs/deprecations, 'Last updated 2026-10-22 UTC', fetched 2026-10-29 via Firecrawl)",
      date: "2026-10-22",
    },
    {
      description: "OMNI 1.1 FLASH IN GOOGLE VIDS AT NO COST FOR ANY GOOGLE ACCOUNT, WITH 1080P, SCENE EXTENSION AND EXACT DURATIONS (2026-09-23, vendor-primary): 'We're bringing the magic of video creation to everyone by expanding access to Google Vids. Now anyone with a Google or Google Workspace account can generate high-quality videos at no cost using our latest Gemini Omni 1.1 Flash model and new creative controls.' Entry point: vids.new on desktop, then 'Create AI videos'. Controls: **extend scenes** with smooth transitions 'while keeping the visual context, lighting, characters' appearance, and the environment consistent'; **set super-specific durations** so a clip aligns with a voiceover; **generate in HD** -- 'brand-new AI video scenes in full 1080p HD, or upscale existing AI clips'; templates for product launches, promo videos from a few photos, landing-page and event-signage clips. Every generated clip includes an imperceptible SynthID watermark. What Google does not state: per-account generation limits for the free tier, whether the Omni output in Vids matches the Flow resolution ladder recorded on 8/27, or any change to Veo 3.1 Lite's role in Vids -- so the pricing rows below keep both models. Related the same day: Gemini 3.8 Flash-Lite TTS is rolling into Google Vids 'for everyone' for voiceover (see gemini.ts).",
      source: "Google (blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/, on-page 'Sep 23, 2026') -- fetched 2026-09-28 via curl with browser UA",
      date: "2026-09-23",
    },
    {
      description: "GOOGLE FLOW TOOLS -- BUILD A CUSTOM WORKFLOW BY DESCRIBING IT, AND SIX CREATOR-BUILT TOOLS TO START FROM (2026-09-23, vendor-primary): Google Labs confirmed the feature the 9/18 fashion-week story only hinted at: 'with Google Flow Tools, you can build custom workflows simply by describing what you need', and 'open Google Flow, describe the task, and build your own tool today'. Six tools built with industry creatives shipped: **Mondo Sonico** (custom background ambiance, foley and contextual sound effects synchronized across separate editable tracks with exportable stems -- Ricardo Villavicencio and Sebastian Carvallo), **CaptionCast** (single-pass multilingual caption transcription, styling and animation -- Jay Pirabakaran), **ThumbnailForge** (photorealistic social thumbnails from one image, headline and prompt), **Surface** (generated architectural textures mapped in real time onto 3D walls, ceilings and floors -- Vojtek Morsztyn), **CollageMotion Pro** (animated mixed-media collages from text -- Hashem Al-Ghaili) and **SwissFlow Studio** (scripts to Swiss-style motion graphics). Any tool can be tried, duplicated and remixed. Why it matters here: Flow is the Veo/Omni creative surface, and 'tools' turns it from a prompt box into a small app platform on top of the video and music models; the sound-design tool is the first Google-shipped audio-stems workflow we have seen on Flow. Pricing and plan gating for Flow Tools are not stated in the post.",
      source: "Google Labs (blog.google/innovation-and-ai/models-and-research/google-labs/six-new-tools-built-by-creatives/, on-page 'Sep 23, 2026') -- fetched 2026-09-28 via curl with browser UA",
      date: "2026-09-23",
    },
    {
      description: "GOOGLE FLOW GETS OMNI 1.1 CREATIVE CONTROLS -- AND NOTE THE RESOLUTION LADDER, IT IS THE PRICING STORY (2026-08-27, vendor-primary): Google rolled Gemini Omni 1.1 Flash into **Google Flow**, its filmmaking front-end, '**starting today**' (i.e. live, not staged). **What creators get:** (1) **start and end frame control**, to keep characters and narrative consistent across a transition; (2) **export in 1080p or 4K** for broadcast/social finishing; (3) a **360p draft tier at explicitly 'lower-credit' cost** to test concepts and compositions before committing to a full render, after which you download at 720p. **THE 360p DRAFT TIER IS THE MOST PRACTICALLY USEFUL PART AND IT IS A COST MECHANIC, NOT A QUALITY ONE** -- Google is telling you iteration was the thing burning credits, and it is now separable from final render. Google calls this out as especially useful in the **Flow mobile app**: draft on a phone, upscale the keepers. **Relationship to this page: Flow is the consumer/creator surface for the same Omni 1.1 Flash model that shipped to developers via the Gemini API the same day** -- one story, two doors.",
      source: "Google (blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/, on-page 'Aug 27, 2026', RSS pubDate 'Thu, 27 Aug 2026 16:00:00 +0000'); developer-side counterpart blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/ -- both fetched 2026-08-28 via curl",
      date: "2026-08-27",
    },
    {
      description: "NEW SIBLING MODEL (2026-06-30): Google shipped **Gemini Omni Flash** (`gemini-omni-flash-preview`), a natively multimodal video-generation + conversational-editing model, to the Gemini API / AI Studio at **$0.10 per second of video output** (10-second clips at launch, longer coming). It sits alongside Veo 3.1 rather than replacing it -- Omni Flash targets fast, natural-language, in-conversation video editing, while Veo remains the peak-quality 4K/60fps cinematic model. Worth knowing if you're choosing a Google video API by cost vs. fidelity.",
      source: "blog.google (blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/)",
      date: "2026-06-30",
    },
    {
      description: "API MODEL-ID SHUTDOWN NOW IN EFFECT (2026-06-30): the older Veo API model IDs announced 6/15 have retired on schedule -- **Veo 2.0 and Veo 3.0 (`veo-2.0-generate-001`, `veo-3.0-generate-001`, `veo-3.0-fast-generate-001`) shut down 2026-06-30**. Pinned calls to these legacy endpoints are now failing; migrate to the 3.1 GA models (the `veo-3.1-generate-preview` / `veo-3.1-fast-generate-preview` IDs suggested at the time were themselves shut down on 2026-10-22; see the newer entry). Only affects direct API callers on the legacy 2.0/3.0 endpoints; consumer Veo 3.1 in Gemini / Google Vids is unaffected. (Separately, Google's older Imagen 4.0 image models shut down 2026-08-17.)",
      source: "Gemini API changelog + deprecations (ai.google.dev/gemini-api/docs/deprecations)",
      date: "2026-06-30",
    },
    {
      description: "Generated humans still occasionally exhibit uncanny-valley effects on micro-expressions, though 3.1 is noticeably better than 3.0 on eye contact and mouth shape",
      source: "Reddit r/aivideo",
      date: "2026-04",
    },
    {
      description: "Veo 3.1 Lite (free tier) defaults to 1080p and shorter clips -- the full 4K/60fps/long-clip experience still requires Pro or Ultra",
      source: "Google Vids help docs",
      date: "2026-04",
    },
    {
      description: "Style diversity concerns persist -- Veo defaults to 'cinematic commercial' aesthetic regardless of prompt, and pushing toward stylized or experimental looks remains hard",
      source: "YouTube creator reviews",
      date: "2026-04",
    },
  ],
  bestFor: "Creators who need the highest-quality AI video available and want free or low-cost access. The April 2026 free rollout to every Google account via Google Vids makes Veo 3.1 the new default starting point for anyone trying AI video seriously. Professional production teams benefit from Ultra's unlimited generations.",
  notFor: "High-volume TikTok / Reels creators where CapCut + Seedance 2.0 beats Veo on workflow friction. Also not ideal for anyone wanting strong stylistic control -- Veo's cinematic default is hard to escape.",
  verdict: "Update 2026-11-05: Gemini Omni 1.2 Flash (GA on Nov 5) is now the cheaper, more editable half of this stack -- 15-second clips you can revise turn by turn at about $0.07 per second in the API -- while Veo 3.1 remains the 4K/60fps quality option. Veo 3.1 solidified Google's video lead after OpenAI shut down Sora in March 2026. Quality-wise it remains the benchmark -- 4K/60fps with synchronized audio, and the April 2026 free rollout to every Google account is a structural shift that puts best-in-class AI video in front of billions overnight. The remaining weaknesses are workflow friction (generation is slow, Google ecosystem lock-in) and stylistic narrowness. The honest read: for pure quality and accessibility, Veo 3.1 is the 2026 default. For short-form social workflows where speed matters more than peak quality, Seedance 2.0 inside CapCut is the more pragmatic choice.",

  lastReviewedDate: "2026-11-05",
  dataSources: [
    { name: "Google: Gemini Omni 1.2 Flash -- 15-second video and lower pricing (2026-11-05)", url: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/", dateAccessed: "2026-11-05" },
    { name: "Gemini API changelog (November 5, 2026): Omni 1.2 Flash GA, Omni 1.1 Flash routing from 2026-12-03", url: "https://ai.google.dev/gemini-api/docs/changelog", dateAccessed: "2026-11-05" },
    { name: "Gemini Developer API pricing: Gemini Omni 1.2 Flash and 1.1 Flash rate cards", url: "https://ai.google.dev/gemini-api/docs/pricing", dateAccessed: "2026-11-05" },
    { name: "Gemini API deprecations table (last updated 2026-10-22): Veo 3.1 preview IDs and gemini-omni-flash-preview shutdown 2026-10-22, replacement gemini-omni-1.1-flash", url: "https://ai.google.dev/gemini-api/docs/deprecations", dateAccessed: "2026-10-29" },
    { name: "Google: Anyone can make stunning HD videos with Gemini Omni in Google Vids (2026-09-23) -- Omni 1.1 Flash free for any Google account, 1080p, scene extension, durations, SynthID", url: "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/", dateAccessed: "2026-09-28" },
    { name: "Google Labs: 6 new Google Flow Tools built by industry creatives (2026-09-23) -- describe a workflow to build a tool; six creator-built tools", url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/six-new-tools-built-by-creatives/", dateAccessed: "2026-09-28" },
    { name: "Google: Gemini Omni 1.1 Flash (2026-08-27)", url: "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/", dateAccessed: "2026-08-28" },
    { name: "Google: New creative controls in Google Flow (2026-08-27)", url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/", dateAccessed: "2026-08-28" },
    { name: "Google Blog: Gemini Omni Flash + Nano Banana 2 Lite (2026-06-30)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/", dateAccessed: "2026-07-04" },
    { name: "Gemini API deprecations: Veo 2.0/3.0 API shutdown took effect 2026-06-30", url: "https://ai.google.dev/gemini-api/docs/deprecations", dateAccessed: "2026-07-04" },
    { name: "Google Cloud: Veo 3.1 Lite on Vertex AI", url: "https://cloud.google.com/blog/products/ai-machine-learning/veo-3-1-lite-and-a-new-veo-upscaling-capability-on-vertex-ai", dateAccessed: "2026-04-16" },
    { name: "Bloomberg: AI Video Generators Replacing Sora", url: "https://www.bloomberg.com/news/articles/2026-04-01/kling-ai-runway-vidu-the-ai-video-generators-set-to-replace-openai-s-sora", dateAccessed: "2026-04-16" },
    { name: "Google Vids / Google One AI Pro pages", dateAccessed: "2026-04-16" },
    { name: "Reddit r/aivideo", dateAccessed: "2026-04-16" },
    { name: "Hands-on testing via Gemini + Google Vids", dateAccessed: "2026-04-16" },
  ],
  affiliateUrl: "https://deepmind.google/technologies/veo",
  status: "active",
  metaTitle: "Google Veo and Omni Review 2026: Omni 1.2 Flash GA, 15s Clips at $0.07/s, Free in Vids",
  metaDescription: "Google Veo 3.1 and Gemini Omni review. Omni 1.2 Flash went GA on Nov 5, 2026: native 15-second clips, multi-turn editing, up to six reference images, about $0.07/s for 720p in the Gemini API (30% below Omni 1.1, which routes to 1.2 on Dec 3). 15-second clips at no extra cost in Google Vids, Flow and the Gemini app for AI Ultra. Veo 3.1 4K/60fps, pricing, limits.",
};
