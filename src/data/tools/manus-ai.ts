import { ToolReview } from "@/lib/types";

export const manusAi: ToolReview = {
  slug: "manus-ai",
  name: "Manus AI",
  tagline: "**Independent again: Manus says it 'formally resumed independent operations' on 2026-09-01 after separating from Meta, then shipped Manus 2.0 (2026-09-28) -- a new agent harness, event-triggered Automations, Manus Studio with a Video Editor and Game Dev, and the Cue personal-agent app.** Hosted autonomous agent, the 'no DevOps' alternative to OpenClaw and Hermes; credit plans at $20 / $40 / $200 a month, and Manus Flex now lets you bring your own model API key",
  category: "ai-personal-agents",
  url: "https://manus.im/",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 7,
    features: 7.5,
    overall: 7.9,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      period: "month",
      features: [
        "Limited free access -- the live pricing page (checked 2026-11-12) lists only paid tiers and does not state the current free allowance",
        "Vendor's last published figure: one free daily task (300 credits), from the May 2025 updates entry",
      ],
    },
    {
      plan: "Entry paid tier (standard monthly usage)",
      price: "$20",
      period: "month (annual billing saves 17%)",
      features: [
        "4,000 credits per month",
        "300 refresh credits everyday",
        "Wide Research, early access to beta features",
        "20 concurrent tasks, 20 scheduled tasks",
      ],
    },
    {
      plan: "Mid paid tier (customizable monthly usage)",
      price: "$40",
      period: "month",
      features: [
        "8,000 credits per month (usage level is self-set)",
        "300 refresh credits everyday",
        "20 concurrent tasks, 20 scheduled tasks",
      ],
    },
    {
      plan: "Top paid tier (extended usage)",
      price: "$200",
      period: "month",
      features: [
        "40,000 credits per month",
        "300 refresh credits everyday",
        "Wide Research for sustained heavy use",
        "20 concurrent tasks, 20 scheduled tasks",
      ],
    },
    {
      plan: "Team",
      price: "$20",
      period: "month / seat (or $200 / seat / year)",
      features: [
        "Shared team pool: 4,000 credits per member per month",
        "Shared projects, skills, and instructions",
        "Admin dashboard with usage tracking and access control",
        "SSO included free for 30+ seats; flat US$150 add-on below that",
        "Free Guest User role (view, comment, download; cannot create tasks)",
      ],
    },
  ],

  pros: [
    "Zero setup -- sign up, connect Telegram, done, and that's the killer feature for anyone who doesn't want to run a server",
    "Hosted compute means the agent works even when your laptop is closed, which OpenClaw and Hermes can't match without paying for a VPS",
    "Real messaging-first UX that non-technical users can actually operate -- this is the agent you give to a spouse or business partner",
    "Browser automation and web actions work out of the box without configuring Docker, Playwright, or five environment variables",
  ],
  cons: [
    "Closed source and vendor-hosted -- your conversations, skills, and credentials live on someone else's servers, which is a hard no for some use cases",
    "Credit-metered subscription -- every paid tier is a monthly credit allowance (4,000 / 8,000 / 40,000), so the cost ceiling is less predictable than 'I pay Anthropic for tokens' with OpenClaw",
    "Governance history you should price in -- the Meta acquisition and its 2026 unwinding ended with some users' data from 2025-12-29 onward being deleted on August 23-24, 2026 and a two-day loss of access for affected accounts",
    "Model choice is still narrower than self-hosting -- Manus Flex (2026-09-29) adds bring-your-own-key through supported providers (OpenRouter, Fireworks, Modal at launch), but only for supported providers, and other services and infrastructure still consume Manus credits",
  ],
  knownIssues: [
    {
      description: "MANUS 2.0 (2026-09-28, vendor blog): 'a new architecture, new products, and new capabilities'. **Cascade**, the new in-house agent harness -- 'in one tested configuration, Cascade used 23.2% fewer tokens, finished tasks in 28.2% less time, and cost 32% less to run than our previous system'. **Cloud Computer** can now be purchased as a dedicated always-on environment; **Automations** extend Scheduled Tasks to event triggers (a new email, a Slack message, a calendar event, a Notion update, a change in ad performance). The desktop app becomes **Manus Studio**, with two new professional environments: **Video Editor** (an editable timeline of the clips, text, motion graphics and audio Manus generated, plus an 'Alchemy mode') and **Game Dev** (playable templates, an edit panel, one-link publishing and multiplayer on a Cloud Computer). **Remote Control and Computer Use** let you drive your own computer from your phone. **Cue** is a new standalone app for personal agents, each with its own email, phone number, wallet and computer. Next day (2026-09-29): **Manus Flex** -- bring your own API key from a supported inference provider (OpenRouter, Fireworks and Modal are the initial partners); model inference is billed by that provider while other services still consume Manus credits",
      source: "Manus blog (manus.im/blog/introducing-manus-2-0, manus.im/blog/introducing-manus-flex), manus.im/updates",
      date: "2026-09-28",
    },
    {
      description: "OWNERSHIP RESOLVED -- SEPARATED FROM META, INDEPENDENT AGAIN (2026-08-11 to 2026-09-01, vendor blog): on 2026-08-11 Manus told users it 'will soon return to operating as an independent company' and that, 'as part of our separation from Meta' and 'to comply with regulatory requirements in specific jurisdictions', data generated by certain users on or after December 29, 2025 (the date 'Meta acquired Manus') would be deleted from 8:00 a.m. on August 23 through August 24, 2026 (SGT). Affected users had a backup window until 7:59 a.m. SGT on August 23, lost access for two days, and could restore from 8:00 a.m. SGT on August 25; they were not charged during the backup period. Manus states this was not a security incident and that data is stored in the US and Singapore. On **2026-09-01** Manus posted that it 'has formally resumed independent operations' with the founding team continuing to lead; there is no deadline to restore backed-up data. This supersedes the earlier 'remains independent' wording below: the deal did close on 2025-12-29 and was later unwound",
      source: "Manus blog (manus.im/blog/a-note-to-our-users, manus.im/blog/manus-resumes-independent-operations)",
      date: "2026-09-01",
    },
    {
      description: "PRICING CHECK (2026-11-12, vendor pages): the live pricing page shows three paid individual tiers at **$20, $40 and $200 per month** with 4,000, 8,000 and 40,000 credits per month respectively, each with '300 refresh credits everyday', 20 concurrent tasks and 20 scheduled tasks (annual billing saves 17%). **Manus Team is US$20 per seat per month or US$200 per seat per year** with a pooled 4,000 credits per seat. Our earlier rows (Pro $20 with 'unlimited standard tasks', Team $60 per seat) did not match the vendor pages and have been replaced. Also shipped July 2026: Branch (2026-07-09), Auto-Publish (2026-07-13), PowerPoint Slides (2026-07-14) and Plan Mode (2026-07-22)",
      source: "manus.im/pricing, manus.im/team, manus.im/blog index (all fetched 2026-11-12)",
      date: "2026-11-12",
    },
    {
      description: "META ACQUISITION BLOCKED BY CHINA, THEN UNWOUND (2026): Meta had agreed to acquire Manus for ~$2B (announced Dec 2025), but China's National Development and Reform Commission opened an investigation in Jan 2026 and **prohibited the foreign acquisition in late April 2026**, ordering the parties to withdraw from the deal. By **June 2026 Meta began dismantling the deal** to comply -- completing an operational split, ordering employees to stop using Manus tools for internal projects, and blocking Manus staff from Meta's internal data systems. Manus (which had moved HQ from Beijing to Singapore in mid-2025) remains independent. Practical read for buyers: near-term ownership/roadmap uncertainty and a live signal of US-China AI decoupling around this vendor; it did NOT change Manus's product or pricing, but factor the governance overhang into any long-term dependency. **Update (2026-09-01):** resolved -- Manus's own posts confirm Meta had acquired it on 2025-12-29, the separation required deleting some users' post-acquisition data in August 2026, and Manus formally resumed independent operations on 2026-09-01 (see the entry above)",
      source: "CNBC (2026-04-27 block + 2026-06-12 dismantling), NPR, Fortune, The Register",
      date: "2026-06-12",
    },
    {
      description: "PRODUCT (2026-04-30): Manus shipped Cloud Computer -- 24/7 persistent virtual machines (Ubuntu, SSH + web terminal access) for autonomous agents. Unlike the prior temporary sandbox, file system + running processes + databases + scheduled jobs persist across sessions, enabling overnight work, long-running scrapes, and bot hosting that survives between chat turns. Manus auto-routes tasks to Cloud Computer when continuous uptime is needed; no manual provisioning. Tier-based pricing (Basic / Standard / Advanced) -- exact monthly costs not disclosed on launch blog. This is a meaningful capability upgrade against OpenClaw and Hermes (which both require user-provisioned infra to achieve the same persistence) and narrows the 'less powerful but easier' framing in our verdict",
      source: "Manus AI blog (manus.im/blog/manus-cloud-computer)",
      date: "2026-04-30",
    },
    {
      description: "Occasional rate-limiting on free tier during peak hours, tasks silently queue rather than error, which can look like a stall",
      source: "Reddit r/aiToolForBusiness",
      date: "2026-03",
    },
    {
      description: "Browser automation failures on sites with aggressive bot detection, support is to retry with different flows",
      source: "Manus community forum",
      date: "2026-04",
    },
  ],
  bestFor: "Non-technical users and small business operators who want an autonomous agent reachable from their phone without running any infrastructure. The right pick if 'I don't want to learn Docker' is a hard requirement and you can live with SaaS tradeoffs.",
  notFor: "Anyone who wants to own their agent's data and skills end-to-end, or who wants to run everything on their own hardware. If self-hosting is an option, OpenClaw or Hermes will give you more control for less ongoing cost.",
  verdict: "Manus AI is the hosted counterweight to the open-source wave, and after a turbulent 2026 it is an independent company again: the Meta acquisition was unwound and Manus formally resumed independent operations on 2026-09-01, at the cost of a forced data deletion for some users. Four weeks later Manus 2.0 widened the product well beyond chat-driven tasks -- a new harness, event-triggered Automations, purchasable Cloud Computers, Manus Studio with a video editor and game builder, and the Cue personal-agent app -- and Manus Flex opened the door to bring-your-own-key inference. It is still dramatically easier to adopt than OpenClaw or Hermes, and for 80% of would-be agent users that is the feature they actually need. The $20/month entry tier (4,000 credits) is fair if you'd otherwise spend a weekend on setup and $10/month on a VPS. Just go in knowing you're picking convenience and paying for it in credits, lock-in and control.",

  lastReviewedDate: "2026-11-12",
  dataSources: [
    { name: "Manus blog: Introducing Manus 2.0 (2026-09-28)", url: "https://manus.im/blog/introducing-manus-2-0", dateAccessed: "2026-11-12" },
    { name: "Manus blog: Introducing Manus Flex (2026-09-29)", url: "https://manus.im/blog/introducing-manus-flex", dateAccessed: "2026-11-12" },
    { name: "Manus blog: Manus Resumes Independent Operations (2026-09-01)", url: "https://manus.im/blog/manus-resumes-independent-operations", dateAccessed: "2026-11-12" },
    { name: "Manus blog: A Note to Our Users (2026-08-11)", url: "https://manus.im/blog/a-note-to-our-users", dateAccessed: "2026-11-12" },
    { name: "Manus Plans & Pricing", url: "https://manus.im/pricing", dateAccessed: "2026-11-12" },
    { name: "Manus for Teams and Enterprise (Team pricing + FAQ)", url: "https://manus.im/team", dateAccessed: "2026-11-12" },
    { name: "Manus Updates", url: "https://manus.im/updates", dateAccessed: "2026-11-12" },
    { name: "Manus blog index", url: "https://manus.im/blog", dateAccessed: "2026-11-12" },
    { name: "CNBC: China blocks Meta's $2B takeover of Manus (2026-04-27)", url: "https://www.cnbc.com/2026/04/27/meta-manus-china-blocks-acquisition-ai-startup.html", dateAccessed: "2026-07-07" },
    { name: "CNBC: Meta begins dismantling $2B Manus deal on Beijing's orders (2026-06-12)", url: "https://www.cnbc.com/2026/06/12/meta-reportedly-begins-dismantling-2-billion-manus-deal-on-beijings-orders.html", dateAccessed: "2026-07-07" },
    { name: "Manus AI: Manus Cloud Computer launch (2026-04-30)", url: "https://manus.im/blog/manus-cloud-computer", dateAccessed: "2026-05-04" },
    { name: "Manus AI official site", url: "https://manus.im/", dateAccessed: "2026-05-04" },
    { name: "Reddit r/aiToolForBusiness: OpenClaw alternatives", url: "https://www.reddit.com/r/aiToolForBusiness/comments/1rd8pww/50_openclaw_alternatives_for_business/", dateAccessed: "2026-04-13" },
  ],
  affiliateUrl: "https://manus.im/",
  status: "active",
  metaTitle: "Manus AI Review 2026: Manus 2.0, Independent After Meta",
  metaDescription: "Manus AI review. Hosted autonomous agent, independent again after the Meta deal was unwound. Manus 2.0, Flex BYO-key, plans at $20 / $40 / $200. Nov 2026.",
};
