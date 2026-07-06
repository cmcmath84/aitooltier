import { ToolReview } from "@/lib/types";

export const gemini: ToolReview = {
  slug: "gemini",
  name: "Gemini (Google)",
  tagline: "Google's LLM with deep Google Workspace integration, 2M token context window, and native code execution -- Gemini 3.5 Flash GA 2026-05-19 (I/O 2026, now with native computer use), Gemini 3.5 Pro still unshipped as of July 2026 (slipped past its June window), Gemini Spark agent + Managed Agents public preview in the Gemini API",
  category: "ai-llms",
  url: "https://gemini.google.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Gemini 3.5 Flash (GA 2026-05-19)", "Basic features", "Google integration"],
    },
    {
      plan: "Google AI Pro",
      price: "$19.99",
      period: "month",
      features: ["Gemini 3.1 Ultra (Gemini 3.5 Pro expected but not yet shipped as of July 2026)", "2M token context", "Code Execution sandbox", "2TB Google storage", "Workspace integration", "Lyria 3 access"],
    },
    {
      plan: "Google AI Ultra",
      price: "$249.99",
      period: "month",
      features: ["Gemini 3.1 Ultra (max usage)", "Gemini 3.1 Flash Live audio", "Gemini Spark agent access (US 18+, rolling out post-I/O 2026)", "Lyria 3 Pro full access", "Highest API priority", "30TB Google storage"],
    },
    {
      plan: "API",
      price: "$0.075-5",
      period: "per 1M tokens",
      features: ["All models", "2M context", "Flash-Lite at $0.25/M input", "Grounding with Google Search", "Code Execution", "Mandatory spend caps (April 2026)"],
    },
  ],

  pros: [
    "2 million token context window is the largest available -- can process entire books and full codebases in one prompt",
    "Best Google Workspace integration (Gmail, Docs, Drive, Calendar)",
    "Free tier is more generous than Claude's",
    "Gemini Advanced includes 2TB Google One storage -- real added value",
    "API pricing is very competitive, especially for Flash model",
  ],
  cons: [
    "Output quality for creative writing is the weakest of the big three (GPT-4, Claude, Gemini)",
    "Hallucination rate is higher than Claude in our testing",
    "Google's track record of killing products makes long-term commitment feel risky",
    "The Gemini app UI feels like Google slapped AI onto an existing product",
  ],
  knownIssues: [
    {
      description: "GEMINI SPARK ON MACOS (2026-06-30/07-01): Google's agentic assistant Gemini Spark launched on the Mac Gemini app in beta -- Google AI Ultra subscribers, 18+, US only (gemini.google/mac). Local file automation, MCP support, and new connected apps: Canva, Dropbox, Instacart, OpenTable, Zillow Rentals, plus Google Tasks/Keep. Google's answer to Claude desktop agents and OpenAI's Codex/Operator surface war on the desktop",
      source: "blog.google (blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/), TechCrunch 2026-07-01",
      date: "2026-07-01",
    },
    {
      description: "NEW MEDIA MODELS (2026-06-30, vendor post): Google shipped **Nano Banana 2 Lite** (`gemini-3.1-flash-lite-image`) and **Gemini Omni Flash** (`gemini-omni-flash-preview`) to AI Studio, the Gemini API, and the Enterprise Agent Platform. Nano Banana 2 Lite is Google's 'fastest, most cost-efficient Gemini Image model' -- text-to-image in ~4 seconds at **$0.034 per 1K-resolution image** (coming to AI Mode in Search, the Gemini app, NotebookLM, and Google Photos). Gemini Omni Flash does video generation + conversational (natural-language) video editing and multimodal referencing at **$0.10 per second of video output** (10-second clips at launch, longer coming); SynthID watermarked. Both target high-volume, low-latency workflows. See the nano-banana and veo pages for detail.",
      source: "blog.google (blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/)",
      date: "2026-06-30",
    },
    {
      description: "API SHUTDOWNS NOW IN EFFECT (dates passed as of this review): the older media model IDs announced 6/15 have retired on schedule -- **Veo 2.0 + Veo 3.0 shut down 2026-06-30** (migrate to Veo 3.1) and the **Nano Banana preview image IDs `gemini-3.1-flash-image-preview` + `gemini-3-pro-image-preview` shut down 2026-06-25** (use the GA `gemini-3.1-flash-image` / `gemini-3-pro-image`). Pinned calls to any of these legacy IDs are now failing. **Imagen 4.0 models (`imagen-4.0-generate-001`, `-ultra-`, `-fast-`) still shut down 2026-08-17** (→ `gemini-3.1-flash-image`).",
      source: "Gemini API changelog + deprecations (ai.google.dev/gemini-api/docs/deprecations)",
      date: "2026-06-30",
    },
    {
      description: "AGENT CAPABILITY (2026-06-24): Google added **native computer use to Gemini 3.5 Flash** -- the model can see, reason, and act across desktop, mobile, and browser environments, aimed at building long-horizon enterprise automation agents. Puts Gemini 3.5 Flash into direct competition with Anthropic computer use and OpenAI's Operator/Codex computer-use tooling.",
      source: "blog.google (blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/)",
      date: "2026-06-24",
    },
    {
      description: "PRICE CUT (2026-06-09): **Google AI Plus dropped from $7.99 to $4.99/mo** and doubled storage 200GB → 400GB (US; tier includes Gemini Omni Flash video gen, Flow, and NotebookLM). TechCrunch framed it as 'a warning shot in the AI subscription price wars' -- it undercuts ChatGPT Go ($8/mo) by nearly half. Current Google AI plan ladder: Plus $4.99 / Pro $19.99 / Ultra 5x from $99.99 / Ultra 20x $199.99",
      source: "blog.google (Google One subscriptions post), TechCrunch (2026-06-09), Engadget",
      date: "2026-06-09",
    },
    {
      description: "PARTNERSHIP WIN (2026-06-08, WWDC): Apple's rebuilt **Siri AI** runs on next-generation Apple Foundation Models that Apple says were 'custom-built in collaboration with Google and its Gemini models' -- press reports the deal at ~$1B/year for a ~1.2T-parameter custom Gemini variant. This puts Gemini-derived models behind the default assistant on qualifying iPhones, iPads, and Macs when iOS 27 / macOS 27 ship this fall. Separately, iOS 27's Extensions framework lets users select Gemini itself as the system assistant behind Siri, Writing Tools, and Image Playground -- distribution ChatGPT used to hold exclusively. Arguably Google's biggest AI distribution win to date; see the siri-ai page for the Apple-side detail",
      source: "Apple newsroom (apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/), TechCrunch, CNBC, SiliconANGLE",
      date: "2026-06-08",
    },
    {
      description: "SHUTDOWN NOW IN EFFECT (2026-06-18, TODAY): As of today, **Gemini CLI and the Gemini Code Assist IDE extensions have stopped serving requests** for Google AI Pro & Ultra subscribers and free-tier Gemini Code Assist for individuals (per Google's vendor post: 'On June 18, 2026, Gemini CLI and Gemini Code Assist IDE extensions will stop serving requests for Google AI Pro and Ultra, as well as those using it free of charge'). 'Login with Google' auth for these consumer surfaces also stopped working, and there is no grace period -- any CI/CD or script calling `gemini` on a consumer plan breaks now. **Enterprise customers** (Gemini Code Assist Standard/Enterprise licenses, or Code Assist for GitHub via Google Cloud) are UNAFFECTED and keep access with ongoing model updates. Replacement: **Antigravity CLI** (available to everyone now) -- Google says 'there won't be 1:1 feature parity out of the gate' but it keeps the critical Gemini CLI features (Agent Skills, Hooks, Subagents, Extensions, now as Antigravity plugins). If you were scripting against Gemini CLI on a consumer plan, migrate immediately.",
      source: "Google Developers Blog (developers.googleblog.com/en/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), 9to5Google",
      date: "2026-06-18",
    },
    {
      description: "GEMINI API MODEL SHUTDOWNS (announced 2026-06-15, via the Gemini API changelog): a cluster of older media-generation model IDs are being retired. **Veo 2.0 + Veo 3.0 video models shut down 2026-06-30** (migrate to `veo-3.1-generate-preview` / `veo-3.1-fast-generate-preview` or the 3.1 GA models). **Nano Banana preview image IDs `gemini-3.1-flash-image-preview` + `gemini-3-pro-image-preview` shut down 2026-06-25** (migrate to the GA `gemini-3.1-flash-image` / `gemini-3-pro-image`, released 5/28). **Imagen 4.0 models (`imagen-4.0-generate-001`, `-ultra-`, `-fast-`) shut down 2026-08-17.** Only the model IDs change -- update integrations before each date to avoid service interruption. (Separately, the consumer Gemini CLI shutdown above is the 6/18 event.)",
      source: "Gemini API changelog (ai.google.dev/gemini-api/docs/changelog, 2026-06-15 entries)",
      date: "2026-06-15",
    },
    {
      description: "I/O 2026 SHIP (2026-05-19): **GEMINI OMNI** announced -- Google's natively multimodal video-generation model, first variant **Gemini Omni Flash**. Generates video from image / audio / video / text input, supports conversational editing inside the Gemini app, physics-grounded outputs, SynthID watermarking. Availability: Gemini app for AI Plus / Pro / Ultra subscribers globally; YouTube Shorts + YouTube Create app at no extra cost; Developer API 'in the coming weeks'. Direct competitive shot at OpenAI's Sora-2 (Sora 1 retired 2026-04-26) + Runway Gen-4.5 + Pika + Luma. The differentiator is in-conversation editing inside Gemini rather than a separate video-gen app. **Aggregator-circulated 'Veo 4' name is NOT this product** -- DeepMind models page still lists Veo 3.1 as current; no Veo 4 exists. Omni is the video-gen ship that Veo's lineup didn't get at I/O 2026.",
      source: "blog.google (blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)",
      date: "2026-05-19",
    },
    {
      description: "I/O 2026 SHIP (2026-05-19): GEMINI 3.5 FLASH GA. Available immediately in Gemini app (global), AI Mode in Google Search, Google Antigravity platform, Gemini API via Google AI Studio + Android Studio, Gemini Enterprise Agent Platform, and Gemini Enterprise. Vendor-published benchmarks: Terminal-Bench 2.1 = 76.2%, GDPval-AA = 1656 Elo, MCP Atlas = 83.6%, CharXiv Reasoning (multimodal) = 84.2%, claimed 4x faster than other frontier models. Vendor framing: 'outperforming Gemini 3.1 Pro on challenging coding and agentic benchmarks' with richer interactive web UIs and graphics vs. Gemini 3. Pricing not disclosed in launch post -- check ai.google.dev/pricing for canonical.",
      source: "blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/, ai.google.dev/gemini-api/docs/changelog (2026-05-19 entry releases gemini-3.5-flash GA)",
      date: "2026-05-19",
    },
    {
      description: "GEMINI 3.5 PRO -- STILL NOT SHIPPED as of 2026-07-04 (SLIPPED past its June window). At I/O (5/19) Google said 3.5 Pro was in internal testing with rollout 'next month' (June), but the Gemini API changelog runs through 6/30 with no 3.5 Pro entry and there is no blog.google GA post. Only Gemini 3.5 Flash is GA. Press now points to July 2026 -- treat that as unconfirmed/aggregator speculation, not a vendor date. When it lands, AI Pro subscribers will likely get 3.5 Pro as the in-tier flagship replacing 3.1 Ultra. Watch blog.google + ai.google.dev/gemini-api/docs/changelog.",
      source: "blog.google Gemini 3.5 announcement post (2026-05-19); ai.google.dev/gemini-api/docs/changelog (no 3.5 Pro entry through 2026-06-30)",
      date: "2026-05-19",
    },
    {
      description: "I/O 2026 SHIP (2026-05-19): MANAGED AGENTS IN THE GEMINI API now in public preview, including the general-purpose ANTIGRAVITY AGENT (model id: antigravity-preview-05-2026). New paradigm: stateful autonomous agents executing in Google-hosted sandbox environments via the Gemini API. Differentiates the Gemini API from a stateless completion endpoint -- competes structurally with OpenAI Responses API + Anthropic Managed Agents (Dreaming/Outcomes/Multiagent Orchestration shipped 2026-05-06).",
      source: "ai.google.dev/gemini-api/docs/changelog (2026-05-19 entries)",
      date: "2026-05-19",
    },
    {
      description: "I/O 2026 UPCOMING (2026-05-19): GEMINI SPARK announced -- Google's 24/7 proactive agent that 'takes action on your behalf' and runs in the background 'even if your phone and laptop are turned off'. Rolling out post-I/O to Google AI Ultra subscribers (18+, US-only at launch) plus 'select business users'. Powered by Gemini 3.5 Flash + Antigravity stack. Integrates Gmail, Calendar, Drive, Docs, Sheets, Slides, YouTube, Maps. Capabilities: task tracking, scheduled automation, custom reusable skills, file/workspace org, email categorization. Operates under user direction with approval gates for sensitive actions -- not continuous monitoring by default. Direct competitor to Anthropic Orbit (Code with Claude 5/6 announcement) and Microsoft Copilot Cowork.",
      source: "gemini.google/overview/agent/spark/ (vendor-primary), blog.google Sundar Pichai I/O 2026 keynote post",
      date: "2026-05-19",
    },
    {
      description: "GEMINI 3.1 FLASH-LITE GA (2026-05-07): Generally available on the Gemini Enterprise Agent Platform. Fastest + most cost-efficient Gemini 3 series model. **2.5x faster Time-to-First-Answer-Token vs Gemini 2.5 Flash; +45% output speed**. Pricing per third-party reference: $0.25/M input, $1.50/M output (vendor blog itself omits direct pricing -- check ai.google.dev/pricing for canonical). Customer signals at GA: Gladly reports ~60% lower cost vs thinking-tier models; OffDeal cites sub-second p95 for classifiers.",
      source: "Google Cloud blog (cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-flash-lite-is-now-generally-available), blog.google",
      date: "2026-05-07",
    },
    {
      description: "Gemini 2.5 family retirement dates EXTENDED (ai.google.dev deprecations page, checked 2026-04-24): Gemini 2.5 Pro, 2.5 Flash, AND 2.5 Flash-Lite now all retire 2026-10-16 (pushed out from original 2026-06-17 / 2026-07-22 dates). Gives ~6 more months to migrate to gemini-3.1-pro + gemini-3-flash. Production code still calling 2.5 model names continues to work through Oct 16, but do not ship new code on retiring endpoints",
      source: "ai.google.dev/gemini-api/docs/deprecations (verified 2026-04-24)",
      date: "2026-04-24",
    },
    {
      description: "Gemini 3.1 Flash TTS launched 2026-04-15 as a preview on Gemini API, AI Studio, Vertex AI, and Google Vids. 70+ languages, audio tags for vocal style/pace/delivery embedded in the text prompt, Elo 1,211 on Artificial Analysis TTS leaderboard. Positions Google as a direct competitor to ElevenLabs v3 on the TTS stack",
      source: "blog.google Gemini 3.1 Flash TTS, MarkTechPost",
      date: "2026-04",
    },
    {
      description: "Image generation of people was temporarily disabled after generating historically inaccurate results, partially restored but still limited",
      source: "The Verge, Google Blog",
      date: "2026-01",
    },
    {
      description: "Gemini Pro model access removed from free API tier on April 1, 2026 -- mandatory spend caps and prepaid billing now required for new accounts",
      source: "Google AI for Developers, FindSkill.ai",
      date: "2026-04",
    },
    {
      description: "Google AI Ultra at $249.99/mo is hard to justify against Claude Max ($200) and ChatGPT Pro ($200) unless you specifically need Lyria 3 Pro",
      source: "Reddit r/Bard",
      date: "2026-04",
    },
  ],
  bestFor: "Google Workspace power users. If you live in Gmail, Docs, and Drive, Gemini Advanced integrates directly into your workflow. Also great for developers who need the cheapest API with the longest context window.",
  notFor: "Anyone who needs the best raw output quality. Claude and GPT-4 both write better. Also not for anyone spooked by Google's history of abandoning products.",
  verdict: "Gemini's strength is the ecosystem play. The 1M context window is genuinely useful for long documents, and the Google Workspace integration is something neither OpenAI nor Anthropic can match. But purely as an LLM, the output quality is a step behind Claude and GPT-4. Pick Gemini if you're deep in Google's ecosystem. Otherwise, the other two are better standalone.",

  lastReviewedDate: "2026-07-05",
  dataSources: [
    { name: "Google Blog: Gemini Omni Flash + Nano Banana 2 Lite (2026-06-30)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/", dateAccessed: "2026-07-04" },
    { name: "Google Blog: Computer use in Gemini 3.5 Flash (2026-06-24)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/", dateAccessed: "2026-07-04" },
    { name: "Google Blog: Gemini Spark updates June 2026 (macOS beta)", url: "https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/", dateAccessed: "2026-07-05" },
    { name: "Google Developers Blog: Transitioning Gemini CLI to Antigravity CLI (shutdown took effect 2026-06-18)", url: "https://developers.googleblog.com/en/an-important-update-transitioning-gemini-cli-to-antigravity-cli/", dateAccessed: "2026-06-18" },
    { name: "Gemini API changelog: Veo 2.0/3.0 (6/30), Nano Banana preview (6/25), Imagen 4.0 (8/17) shutdowns", url: "https://ai.google.dev/gemini-api/docs/changelog", dateAccessed: "2026-06-18" },
    { name: "Google Blog: Gemini 3.5 frontier intelligence with action (2026-05-19)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/", dateAccessed: "2026-05-20" },
    { name: "Gemini API Changelog: 3.5 Flash GA + Managed Agents + Antigravity preview (2026-05-19)", url: "https://ai.google.dev/gemini-api/docs/changelog", dateAccessed: "2026-05-20" },
    { name: "Gemini Spark product page (vendor-primary)", url: "https://gemini.google/overview/agent/spark/", dateAccessed: "2026-05-20" },
    { name: "Google AI for Developers: deprecations", url: "https://ai.google.dev/gemini-api/docs/deprecations", dateAccessed: "2026-04-21" },
    { name: "Google Blog: Gemini 3.1 Flash TTS", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/", dateAccessed: "2026-04-21" },
    { name: "LMSYS Chatbot Arena rankings", dateAccessed: "2026-04-13" },
    { name: "Reddit r/Bard", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://gemini.google.com",
  status: "active",
  benchmarks: {
    modelName: "Gemini 3.5 Flash (vendor-published 2026-05-19; third-party verification pending) -- legacy 3.1 Ultra retained below for context",
    scores: [
      { name: "Terminal-Bench 2.1", score: 76.2, maxScore: 100, unit: "%" },
      { name: "MCP Atlas", score: 83.6, maxScore: 100, unit: "%" },
      { name: "CharXiv Reasoning (multimodal)", score: 84.2, maxScore: 100, unit: "%" },
      { name: "MMLU (3.1 Ultra baseline)", score: 90.5, maxScore: 100, unit: "%" },
      { name: "SWE-bench Verified (3.1 Ultra baseline)", score: 80.6, maxScore: 100, unit: "%" },
    ],
    chatbotArenaElo: 1500,
    lastUpdated: "2026-05-19",
  },
  personality: {
    oneLiner: "The Google research assistant",
    tone: "Neutral, thorough, and slightly corporate. Gemini leans academic, cites sources readily in Deep Research mode, and keeps its tone even across topics -- rarely funny, rarely snarky.",
    quirks: "Tightly integrated with Google products -- pulls from Search and Workspace by default, which is useful for grounded answers but means you hear Google's worldview. Can feel evasive or overly safe on opinionated or politically charged questions.",
  },
  metaTitle: "Gemini Review 2026: 3.5 Flash GA + Computer Use, 3.5 Pro Slipped, Nano Banana 2 Lite + Omni Flash",
  metaDescription: "Google Gemini review. Gemini 3.5 Flash GA (now with native computer use); 3.5 Pro still unshipped as of July 2026. New Nano Banana 2 Lite ($0.034/img) + Omni Flash video ($0.10/sec). Spark agent + Managed Agents API in preview.",
};
