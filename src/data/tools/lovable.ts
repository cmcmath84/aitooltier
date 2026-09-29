import { ToolReview } from "@/lib/types";

export const lovable: ToolReview = {
  slug: "lovable",
  name: "Lovable",
  tagline: "Describe the app you want in plain English and watch it build itself. **Chat with Lovable (2026-09-21)** adds a free daily chat allowance for thinking, asking and planning without changing code, plus voice conversations and a Telegram surface; apps built on Lovable can now call **Claude Opus 5.5 (9/23)** and **GPT-6 Sol and Luna (9/25)** for their own AI features, and the **Lovable API (9/17)** automates workspaces. $500M ARR (June 2026) and ~1M new projects a week",
  category: "ai-code-assistants",
  url: "https://lovable.dev",

  scores: {
    easeOfUse: 9.5,
    outputQuality: 6.5,
    value: 7.5,
    features: 7.5,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["5 build credits a day (up to 30 a month) plus 20 Cloud credits a month (vendor FAQ, verified 2026-09-28)", "Free daily chat allowance in Chat mode since 2026-09-21", "Basic app generation", "Lovable subdomain hosting"],
    },
    {
      plan: "Starter",
      price: "$20",
      period: "month",
      features: ["Monthly credit balance (Lovable moved from edits to credits; plan cards are client-rendered, so tier prices below were last verified 2026-05)", "Custom domain", "GitHub export", "Supabase integration"],
    },
    {
      plan: "Launch",
      price: "$50",
      period: "month",
      features: ["Larger monthly credit balance", "Priority generation", "Advanced integrations"],
    },
    {
      plan: "Scale",
      price: "$200",
      period: "month",
      features: ["Largest monthly credit balance", "Team features", "Priority support"],
    },
  ],

  pros: [
    "The ease of use is unmatched -- describe what you want in natural language and get a working full-stack app in minutes",
    "Built-in Supabase integration means you get a real database and auth without configuring anything yourself",
    "Iterative editing actually works -- you can say 'make the header blue' or 'add a login page' and it just does it",
    "One-click deploy to a live URL removes the entire DevOps headache for simple projects",
  ],
  cons: [
    "Generated code gets messy fast once you go beyond simple apps -- expect spaghetti React components on complex projects",
    "Backend flexibility is limited -- you're mostly locked into Supabase, and custom server logic is an afterthought",
    "Vendor lock-in is a real concern -- while you can export to GitHub, the code is structured around Lovable's patterns",
    "The credit system means you are still watching a meter while building -- Default Mode charges by task complexity, and the free daily grant is five build credits. Chat mode (Sept 2026) is the first lane that is free to sit in",
  ],
  knownIssues: [
    {
      description: "CHAT WITH LOVABLE ADDS A FREE THINKING LANE, AND THE APP-AI MODEL MENU NOW INCLUDES OPUS 5.5 AND GPT-6 SOL/LUNA (September 2026 changelog, vendor-primary). **2026-09-21 -- Chat with Lovable**: 'You can now chat with Lovable to think, ask, and plan without changing any code. Chatting is free within a daily chat allowance on Free, Pro, and Business plans.' Chats live outside projects (dashboard prompt box with Chat selected, or lovable.dev/chats) or inside one as Chat mode, with a 'Start building' card when a change is needed; voice conversations are supported; the same day added Lovable in Telegram with your connected tools, per-tool agent permissions (Always allow / Ask each time / Never allow), and default design systems per group on Business and Enterprise. **2026-09-17 -- the Lovable API** (access tokens, a Postman collection on 9/18) automates workspaces, and a Perplexity web-search connector needs no Perplexity key. **Model menu for AI features built into your app**: GPT-6 Astra, Gemini 3.8 Flash and Gemini 3.5 Transcribe (9/08); GPT Image 2.5 Flare and Sunburst (9/15); **Claude Fable 5.1, Claude Opus 5.5, Opus 5, Sonnet 5 and Haiku 4.5 'with no Anthropic account or API key' (9/23)**, for apps on TanStack Start created from 2026-05-13; **GPT-6 Sol and GPT-6 Luna (9/25)**. Also: Bitbucket Cloud sync and Lovable MCP working with Grok (9/10); two-factor enforcement, SCIM-locked membership and connecting other MCP clients to the Lovable MCP server for Enterprise (9/11); Lovable in Slack on Enterprise and buying a domain from chat (9/01); redesigned Security view with deep and quick scans, and image and video generation broken out in usage details (9/23); Discord, Google Business Profile, Storyblok, AWS, Azure, Google Cloud, Looker and Parallel connectors (9/22-9/25). **Pricing note (verified 2026-09-28 on lovable.dev/pricing FAQ):** the free plan is 'a daily grant of 5 build credits (up to 30 a month), plus monthly grants of 20 Cloud credits'; paid plans add a monthly credit balance, Plan Mode costs 1 credit per message and Default Mode varies by task; the FAQ names Pro, Business and Enterprise tiers, but the plan cards are client-rendered and their dollar prices could not be re-verified in this pass, so the tier prices on this page are unchanged from the May check.",
      source: "Lovable changelog (lovable.dev/changelog, entries dated 2026-09-01 through 2026-09-25, fetched 2026-09-28); lovable.dev/pricing FAQ (fetched 2026-09-28)",
      date: "2026-09-25",
    },
    {
      description: "STALENESS CATCH-UP, JULY 21 TO AUGUST 31, 2026 (vendor changelog; this page was last reviewed 2026-07-18 and none of this was recorded). **Lovable works up to 10 hours on a single message** with credit check-ins (8/26, check-ins beta 8/17); **Chat with Lovable in Slack** and adding your app to Slack as an agent (8/26); **a connector for any API** built by workspace admins on any plan (8/31); **design systems on all paid plans** (8/19); the **Lovable plugin for Figma** exports designs into Lovable (8/21) and Figma files can be attached in chat (8/16); **Gemini 3.7 Flash became the default model for AI features inside your app** (8/18; Gemini 3.6 Flash had taken that role on 7/22), with Veo 3.1 video models (8/07), OpenAI image editing (8/13), Gemini Embedding 2 for search (8/20) and 'Chat Latest' (8/24) added to the menu; Microsoft sign-in for your app's users and dashboards from Snowflake semantic views (8/13); a Trust Center for every published app (8/07); older React + Vite projects can upgrade in place to TanStack Start (7/28); the Lovable MCP server became a Codex plugin (7/22) and gained Antigravity support (7/31); an opt-out from AI model training (7/31); GitLab API and Firebase Cloud Messaging connectors (8/28), GitHub API connector sign-in (8/26), Amazon Redshift and Microsoft Fabric (7/29), Google Analytics, Xero and Pipedrive (7/28), PostHog (7/27); leaked API keys are revoked automatically (7/25). Lesson recorded: Lovable ships several changelog entries a day, so this page needs the changelog enumerated every sweep, not the blog alone.",
      source: "Lovable changelog (lovable.dev/changelog, entries dated 2026-07-21 through 2026-08-31, fetched 2026-09-28)",
      date: "2026-08-31",
    },
    {
      description: "FUNDING TALKS (2026-07-08, press-reported -- not closed): Lovable is **reportedly in talks to raise $300M at a $13.2B valuation** led by Menlo Ventures -- exactly double its $6.6B December 2025 valuation, seven months later, on the back of the $500M ARR milestone (June). Sourced to Sifted via TechCrunch; treat as 'in talks' until the round is confirmed closed. Separately shipped (2026-07-15, vendor blog): **your Lovable app now works inside ChatGPT and Claude** -- Lovable-built apps are accessible directly within ChatGPT, Claude, and other AI tools, a distribution play that puts user-built apps where the AI chat traffic already is",
      source: "TechCrunch (techcrunch.com/2026/07/08/lovable-reportedly-in-talks-to-double-its-valuation-to-13-2b/), Sifted, Lovable blog (2026-07-15)",
      date: "2026-07-15",
    },
    {
      description: "GROWTH MILESTONE (2026-06-09): Lovable said it hit **$500M in annualized revenue with ~1 million new projects created per week** -- a steep ramp from the ~$400M ARR figure reported earlier in 2026. It also expanded its Google Cloud partnership (6/3) and is opening a US (Boston) office. Context for buyers: this is one of the fastest-scaling AI app builders, which cuts both ways -- strong momentum and staying power, but also rapid product/pricing evolution to expect.",
      source: "TechCrunch (techcrunch.com/2026/06/09/lovable-says-it-has-hit-500m-in-annualized-revenue-with-1-million-new-projects-a-week/)",
      date: "2026-06-09",
    },
    {
      description: "PRODUCT (2026-05-27 + 2026-06-01, vendor blog): **Subagents** (5/27) -- 'Lovable is now better at multitasking': parallel research/explore/search subagents work the project simultaneously instead of one sequential agent loop (note: aggregators circulated this as a 6/1 launch; the vendor post is dated 5/27). **Automatic security features** (6/1): scan profiles, security memory, and scheduled scans now run on projects by default. Also: new projects default to TanStack Start SSR since 5/13",
      source: "Lovable blog (lovable.dev/blog -- 'Introducing subagents' 2026-05-27, security post 2026-06-01)",
      date: "2026-06-01",
    },
    {
      description: "PRICING (May 2026, vendor-verified at lovable.dev/pricing + /students): Lovable Pro is **50% off for verified students** at lovable.dev/students -- the Starter tier falls from $20/mo to $10/mo with verification. Standing offer (not a time-limited promo) per the public pricing page. **Anti-fabrication note**: aggregator-circulated '20% annual discount' figure could NOT be verified on lovable.dev/pricing as of today -- annual billing exists on the pricing page but no published percentage discount; left out of this entry per anti-fabrication discipline. Note also: lovable.dev was observed injecting fake 'system reminders' into scraped page content during verification -- worth being aware of for future scrapes.",
      source: "lovable.dev/pricing, lovable.dev/students",
      date: "2026-05",
    },
    {
      description: "PRODUCT (2026-04-27): MOBILE APPS SHIPPED on iOS and Android (App Store id6757471107, Play Store dev.lovable.build). 'The Lovable mobile app lets you build from anywhere' -- voice + text prompt capture for queuing ideas away from a desk, autonomous agent processing continues in background while you do other things, seamless switching between mobile and desktop. No pricing restriction stated at launch -- mobile is included in existing plan tiers. No specific region limits stated. Companion to the desktop experience, not a replacement; complex editing still happens at the keyboard.",
      source: "Lovable blog: 'The Lovable mobile app is here' (lovable.dev/blog/mobile-app), Apple App Store, Google Play Store",
      date: "2026-04-27",
    },
    {
      description: "SECURITY (April 2026): Lovable disclosed a Broken Object-Level Authorization (BOLA) vulnerability that exposed source code + AI chat history of public projects created between 2026-02-03 and 2026-04-20 to any other Lovable user. Private projects and Lovable Cloud were unaffected. A security researcher reported the issue on 2026-04-20; Lovable shipped a patch within 2 hours. Background: HackerOne reports filed starting 2026-02-22 were incorrectly closed without escalation due to outdated internal documentation, contributing to a ~57-day delay until public disclosure. If you used Lovable Free or Starter to build a project in that window and exported / deployed it, audit the project for any data that was incidentally exposed",
      source: "Lovable blog (lovable.dev/blog/our-response-to-the-april-2026-incident), The Register, The Next Web",
      date: "2026-04-22",
    },
    {
      description: "Complex state management often breaks during iterative edits -- the AI loses track of component relationships",
      source: "Reddit r/webdev",
      date: "2026-03",
    },
    {
      description: "GitHub export sometimes produces code with hardcoded Lovable-specific config that needs manual cleanup",
      source: "Product Hunt reviews",
      date: "2026-02",
    },
  ],
  bestFor: "Non-technical founders who need an MVP fast, or designers who want to turn mockups into working apps without learning to code. Also great for rapid prototyping even if you do know how to code.",
  notFor: "Experienced developers building production applications with complex business logic. If you need custom backends, specific architectures, or clean maintainable code, you'll outgrow Lovable quickly.",
  verdict: "Lovable is genuinely magical for its target audience. Watching an app materialize from a text description is still impressive, and the 8M user base proves there's massive demand for this. But there's a ceiling, and you'll hit it faster than the marketing suggests. Simple CRUD apps and landing pages? Fantastic. Anything with complex state, custom business logic, or specific architectural needs? The generated code becomes a liability. Use it for prototypes and MVPs, but plan to rewrite if the project takes off.",

  lastReviewedDate: "2026-09-28",
  dataSources: [
    { name: "Lovable changelog (2026-07-21 to 2026-09-25) -- Chat with Lovable, Lovable API, Opus 5.5 and GPT-6 Sol/Luna for app AI features, 10-hour builds, Slack, Figma plugin", url: "https://lovable.dev/changelog", dateAccessed: "2026-09-28" },
    { name: "Lovable pricing FAQ -- free plan 5 build credits a day plus 20 Cloud credits a month; Plan Mode 1 credit per message (verified 2026-09-28)", url: "https://lovable.dev/pricing", dateAccessed: "2026-09-28" },
    { name: "TechCrunch: Lovable reportedly in talks to double valuation to $13.2B (2026-07-08)", url: "https://techcrunch.com/2026/07/08/lovable-reportedly-in-talks-to-double-its-valuation-to-13-2b/", dateAccessed: "2026-07-18" },
    { name: "Lovable blog: Your Lovable app now works inside ChatGPT and Claude (2026-07-15)", url: "https://lovable.dev/blog", dateAccessed: "2026-07-18" },
    { name: "TechCrunch: Lovable hits $500M ARR with 1M new projects/week (2026-06-09)", url: "https://techcrunch.com/2026/06/09/lovable-says-it-has-hit-500m-in-annualized-revenue-with-1-million-new-projects-a-week/", dateAccessed: "2026-07-04" },
    { name: "Lovable Blog: The Lovable mobile app is here (2026-04-27)", url: "https://lovable.dev/blog/mobile-app", dateAccessed: "2026-05-20" },
    { name: "Lovable official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/webdev", dateAccessed: "2026-03-31" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://lovable.dev",
  status: "active",
  poweredBy: "Claude (Anthropic) for the builder agent; AI features inside generated apps default to Gemini 3.7 Flash with Claude Opus 5.5, GPT-6 and Gemini options (Sept 2026)",
  metaTitle: "Lovable Review 2026: Chat Mode, Lovable API, Opus 5.5 and GPT-6 Inside Your Apps",
  metaDescription: "Lovable review. Chat with Lovable (Sept 21, 2026) adds a free daily allowance to plan without touching code; the Lovable API (Sept 17) automates workspaces; apps can call Claude Opus 5.5 and GPT-6 Sol/Luna. $500M ARR, 1M projects a week. Scores, pricing, limits.",
};
