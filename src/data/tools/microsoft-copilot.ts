import { ToolReview } from "@/lib/types";

export const microsoftCopilot: ToolReview = {
  slug: "microsoft-copilot",
  name: "Microsoft Copilot",
  tagline: "**Sept 25: Microsoft introduced 'the new Copilot' -- Home (Chat and Cowork together, with Word, Excel and PowerPoint built in), Code (build apps in natural language on GitHub Copilot technology) and Autopilot (the persistent agent previously called Scout), rolling out through the Frontier program. On the consumer side the paid tier is now Microsoft 365 Premium at $19.99 a month -- Copilot Pro is no longer on Microsoft's plan comparison page.** Microsoft's answer to ChatGPT -- a free chat assistant with web search built in, but it feels like a corporate product",
  category: "ai-chatbots",
  url: "https://copilot.microsoft.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Copilot chat", "Image generation", "Web search grounding"],
    },
    {
      plan: "Microsoft 365 Premium (consumer; Copilot Pro no longer listed)",
      price: "$19.99",
      period: "month",
      features: ["$199.99/year", "Advanced Copilot chat with extensive usage", "Extensive usage for AI image creation in Copilot", "Copilot in Word, Excel, PowerPoint for the subscription owner", "Everything in Microsoft 365 Family (which is $12.99/month)", "Limited-time offer: $13.99 first month"],
    },
    {
      plan: "Microsoft 365 Copilot Business (add-on)",
      price: "$21",
      period: "user/month, paid yearly",
      features: ["Discounted to $18.00 user/month between July 1 and December 31, 2026", "$25.20 user/month on monthly billing", "Requires an eligible Microsoft 365 Business plan", "Bundles: Business Standard with Copilot $23.50, Business Premium with Copilot $32.00 user/month paid yearly"],
    },
    {
      plan: "Microsoft 365 Copilot (enterprise add-on)",
      price: "$30",
      period: "user/month, paid yearly",
      features: ["Copilot in Chat and across Word, Excel, PowerPoint, Outlook and Teams", "Enterprise data protection", "Model selection with Auto routing", "Cowork, Code, Autopilot and frontier models run on usage-based billing (Copilot Credits) on top of the licence"],
    },
  ],

  pros: [
    "Free tier gives you a capable chat model with web search grounding -- genuinely useful for research questions with current data",
    "Deep integration with Windows, Edge, and Microsoft 365 means it's always one click away if you're in that ecosystem",
    "Image generation is included free -- you get solid AI art without paying for a separate tool",
    "Web search grounding means answers include citations and links, which ChatGPT's free tier doesn't offer",
  ],
  cons: [
    "The personality is aggressively safe and corporate -- it hedges everything and refuses more requests than ChatGPT",
    "Conversation quality drops off after a few turns -- it loses context and starts giving generic responses",
    "The UI changes frequently and Microsoft can't seem to decide what Copilot actually is or where it lives",
    "Microsoft 365 Premium at $19.99/month only makes sense if you want the Office apps and storage too -- ChatGPT Plus costs about the same and offers a better chat experience -- and at work the agentic features (Cowork, Code, Autopilot) are metered in Copilot Credits on top of the $30 licence",
  ],
  knownIssues: [
    {
      description: "CLAUDE IN THE EU DATA BOUNDARY (2026-11-05): Microsoft announced that Claude models by Anthropic in Microsoft Copilot are coming into the EU Data Boundary by the end of 2026, so EU and EFTA organizations no longer have to choose between Claude access and Microsoft's regional data-processing commitments. The post confirms Claude models already power Chat, Copilot in the Microsoft 365 apps, Copilot Cowork and Copilot Code. Microsoft Ignite runs November 17-20",
      source: "Microsoft Copilot Blog (microsoft.com/en-us/copilot/blog/2026/11/05/bringing-claude-models-in-microsoft-copilot-into-the-eu-data-boundary/)",
      date: "2026-11-05",
    },
    {
      description: "THE NEW COPILOT -- HOME, CODE, AUTOPILOT (2026-09-25): the 'super app' previewed at Build arrived as a redesigned Copilot app. **Home** brings Chat and Cowork together and adds Office in Copilot (real, editable Word, Excel and PowerPoint files created inside the conversation). **Code** builds apps, dashboards and automations from natural language on the same underlying technology as GitHub Copilot, hosted in the new Copilot Managed Runtime (preview). **Autopilot** -- 'previously called Scout' -- is a cloud-hosted persistent agent with its own identity and memory. Rollout at announcement: Home and Code through the Frontier program, Autopilot expanding to private preview, Code in preview for Microsoft 365 Premium and Pro subscribers 'later this year'. Pricing: the user licence covers Chat and the Office apps with Auto model routing; **Cowork, Code, Autopilot and frontier models run on usage-based billing**",
      source: "The Official Microsoft Blog (blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)",
      date: "2026-09-25",
    },
    {
      description: "CORRECTION (2026-11-11): the pricing block still listed 'Copilot Pro' at $20/month with 'Priority GPT-4 Turbo' and '100 image generations/day', and a free tier with 'GPT-4 access' and DALL-E 3. Microsoft's consumer plan comparison page no longer lists Copilot Pro at all -- the tiers are Microsoft 365 Personal ($9.99/month), Family ($12.99/month) and **Microsoft 365 Premium ($19.99/month or $199.99/year)**, and the old Copilot Pro store URL redirects to the Microsoft 365 Premium product page. The GPT-4 / GPT-4 Turbo / DALL-E 3 model names and the 100-per-day image figure could not be found on any current Microsoft page and were removed. Business pricing was also wrong for small firms: Microsoft 365 Copilot Business is a $21.00 add-on (promo $18.00 through 2026-12-31) and the enterprise Microsoft 365 Copilot add-on is $30.00, both per user per month paid yearly",
      source: "Microsoft Store plan comparison (microsoft.com/en-us/microsoft-365/buy/compare-all-microsoft-365-products), Copilot pricing pages (microsoft.com/en-us/copilot/pricing/business and /enterprise), all fetched 2026-11-11",
      date: "2026-11-11",
    },
    {
      description: "COWORK GA + CONSUMPTION BILLING (2026-06-16): **Microsoft Copilot Cowork is now generally available** -- the agentic system for long-running, multi-tool tasks (the piece Nadella slotted into the 'Chat, Cowork, Code' super-app vision). Critically it introduces **usage-based billing via 'Copilot Credits'**: it requires a base M365 Copilot USL, then charges by consumption -- cost is driven by the model, context retrieval, tool calls, and runtime, with PayGo priced at **$0.01 per credit** (light/medium/heavy task tiers). Frontier-program tenants got a grace period, but **usage-based billing had to be configured by 2026-07-01 or Cowork access is suspended.** This is a genuine pricing/policy shift -- Cowork is no longer flat-rate bundled; budget for metered agent runs before rolling it out org-wide.",
      source: "Microsoft 365 blog (microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/), Microsoft Learn (usage-based billing / Copilot Credits, 2026-06-26)",
      date: "2026-06-16",
    },
    {
      description: "MICROSOFT BUILD DAY 2 (2026-06-03): the Windows-side AI platform drops. **Aion 1.0 Instruct** -- Microsoft's new on-device SLM family, in preview now powering text intelligence in the Windows AI APIs + Edge, with open weights promised. **Aion 1.0 Plan** -- a 14B reasoning/tool-calling model (32K context) that will ship in-box with Windows for fully local agentic workflows ('coming months,' not GA). **Microsoft Execution Containers (MXC)** -- sandboxed agent code execution across Windows/Linux/macOS, with NVIDIA's OpenShell agent runtime coming to Windows on it. **Surface RTX Spark Dev Box** -- Arm-based compact AI workstation (~1 petaflop, 128GB unified memory, runs 120B+ models locally), waitlist-only with no price or date. **Project Solara** -- an Android-based OS for AI-first devices (reference designs only; Microsoft won't sell the hardware). Note: the 'Surface Axion' name that circulated pre-Build does not exist in any Microsoft material -- the real product is the RTX Spark Dev Box",
      source: "Windows Developer Blog (blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development/), blogs.windows.com/devices (Surface RTX Spark), The Register, The Tech Portal",
      date: "2026-06-03",
    },
    {
      description: "MICROSOFT BUILD (2026-06-02): Microsoft introduced **Scout** -- an always-on personal agent that watches your inbox/Teams and acts proactively (widely compared to the open-source OpenClaw assistant) -- and **Autopilots**, a layer of long-running autonomous agents, both framed as the foundation of a coming unified Copilot 'super app' that merges Copilot chat, GitHub Copilot coding, and Cowork into one experience (reported target: end of summer 2026; Nadella: 'Chat, Cowork, and Code all in Copilot'). Also at Build: a new GitHub Copilot desktop app for agent-native development, Microsoft Discovery general availability, and the broader agent-first platform push (Project Solara reference OS, Surface RTX Spark Dev Box). Microsoft's own MAI models (MAI-Thinking-1, MAI-Code-1-Flash, MAI-Image-2.5, MAI-Transcribe-1.5, MAI-Voice-2) increasingly back these Copilot surfaces, reducing the OpenAI dependency. Most super-app pieces are announced/preview rather than GA today.",
      source: "Microsoft Build 2026 newsroom (news.microsoft.com/build-2026/), TechCrunch (Scout), Fortune (Copilot super app)",
      date: "2026-06-02",
    },
    {
      description: "Microsoft 365 pricing update hits all purchasing channels on 2026-07-01 -- confirmed in the 2026-04-16 Partner Center announcement referencing the December 2025 blog post. Copilot Business bundles are specifically called out as lockable at current pricing pre-7/1. If you plan to deploy M365 Copilot to a mid-size org, renewing or purchasing before 2026-06-30 locks current rates; anything after ticks into the new pricing schedule. Microsoft 365 E7 SKU also launches 2026-05-01 bundling E5 + Entra Suite + Copilot + Agent 365 with 10-15% CSP promotional discounts through 2026-12-31",
      source: "Microsoft Partner Center 2026-04-16 announcement, Microsoft 365 blog (2025-12-04)",
      date: "2026-04",
    },
    {
      description: "Copilot Chat access in Word/Excel/PowerPoint/OneNote is being restricted for large enterprise tenants (reportedly 2000+ seats) without a paid M365 Copilot license as of mid-April 2026. Smaller tenants see throttling during peak hours. Free Copilot in Edge and copilot.microsoft.com still open. If you've been relying on free Chat inside Office, check whether your tenant is affected before building workflows on it",
      source: "Microsoft Learn partner announcements, Primend blog",
      date: "2026-04",
    },
    {
      description: "Copilot in Edge sidebar sometimes provides outdated information from cached Bing results instead of live data",
      source: "Reddit r/MicrosoftCopilot",
      date: "2026-03",
    },
    {
      description: "Microsoft 365 Copilot integration in Excel sometimes generates formulas that reference wrong cell ranges",
      source: "Microsoft Tech Community",
      date: "2026-02",
    },
  ],
  bestFor: "Users already deep in the Microsoft ecosystem who want a free chat assistant with web search built in, and Microsoft 365 organizations ready to pilot the new Home, Code and Autopilot experiences.",
  notFor: "Anyone who wants the best conversational AI experience -- ChatGPT and Claude both feel more natural to talk to.",
  verdict: "Microsoft Copilot's biggest selling point is that it's free and it's everywhere in Windows and Edge. The free chat with web search grounding is genuinely useful for quick research. But as a conversational AI, it feels like talking to a corporate chatbot -- overly cautious, context-limited, and bland. The paid tiers are where it gets complicated: the consumer upgrade is now Microsoft 365 Premium at $19.99/month, which competes with ChatGPT Plus mostly on bundled Office apps and storage, while Microsoft 365 Copilot ($30 per user at enterprise scale, $21 for small business) is powerful but requires an existing M365 subscription and meters its agentic features (Cowork, Code, Autopilot) separately. It's a solid free option, but not the best at anything.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "The Official Microsoft Blog: Introducing the new Copilot with Home, Code and Autopilot (2026-09-25)", url: "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/", dateAccessed: "2026-11-11" },
    { name: "Microsoft Copilot Blog: Claude models into the EU Data Boundary (2026-11-05)", url: "https://www.microsoft.com/en-us/copilot/blog/2026/11/05/bringing-claude-models-in-microsoft-copilot-into-the-eu-data-boundary/", dateAccessed: "2026-11-11" },
    { name: "Microsoft Copilot plans and pricing -- business", url: "https://www.microsoft.com/en-us/copilot/pricing/business", dateAccessed: "2026-11-11" },
    { name: "Microsoft Copilot plans and pricing -- enterprise", url: "https://www.microsoft.com/en-us/copilot/pricing/enterprise", dateAccessed: "2026-11-11" },
    { name: "Microsoft Store: compare Microsoft 365 plans (Personal, Family, Premium)", url: "https://www.microsoft.com/en-us/microsoft-365/buy/compare-all-microsoft-365-products", dateAccessed: "2026-11-11" },
    { name: "Microsoft 365 blog: Copilot Cowork is now GA (2026-06-16, usage-based Copilot Credits)", url: "https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/", dateAccessed: "2026-07-04" },
    { name: "Microsoft Build 2026 newsroom (Scout, Autopilots, Copilot, GitHub app)", url: "https://news.microsoft.com/build-2026/", dateAccessed: "2026-06-02" },
    { name: "Microsoft Partner Center April 2026 announcements", url: "https://learn.microsoft.com/en-us/partner-center/announcements/2026-april", dateAccessed: "2026-04-21" },
    { name: "Microsoft 365 blog: pricing + packaging update (Dec 2025)", url: "https://www.microsoft.com/microsoft-365/blog/2025/12/04/advancing-microsoft-365-new-capabilities-and-pricing-update/", dateAccessed: "2026-04-21" },
    { name: "Microsoft Copilot official site", dateAccessed: "2026-04-21" },
    { name: "Reddit r/MicrosoftCopilot", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://copilot.microsoft.com",
  status: "active",
  personality: {
    oneLiner: "The work-safe assistant",
    tone: "Friendly-professional and cautious. Copilot keeps the ChatGPT-style voice but dials down personality for workplace contexts, with more hedging and disclaimers on anything sensitive.",
    quirks: "Tightly integrated with Microsoft 365 -- will pull context from your Outlook, Word, and Teams when enabled. Stricter refusals than consumer ChatGPT on the same prompts, especially inside the enterprise tenant.",
  },
  metaTitle: "Microsoft Copilot Review 2026: Home, Code and Autopilot",
  metaDescription: "Microsoft Copilot review. The new Copilot (Sept 25): Home, Code and Autopilot. Microsoft 365 Premium $19.99/mo for consumers; M365 Copilot $30/user.",
};
