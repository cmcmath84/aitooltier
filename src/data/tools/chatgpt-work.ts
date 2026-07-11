import { ToolReview } from "@/lib/types";

export const chatgptWork: ToolReview = {
  slug: "chatgpt-work",
  name: "ChatGPT Work",
  tagline: "OpenAI's long-running work agent (launched 2026-07-09) -- gathers context across your apps via plugins, stays on a project for hours, and returns finished docs/sheets/slides/web apps. Built on Codex technology, powered by GPT-5.6, with Scheduled Tasks and a new unified ChatGPT desktop app",
  category: "ai-personal-agents",
  url: "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",

  scores: {
    easeOfUse: 8,
    outputQuality: 8.5,
    value: 8.5,
    features: 9,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Included in ChatGPT plans (no separate price)",
      price: "$0 extra",
      features: [
        "Web + mobile: rolling out 2026-07-09 to Pro, Enterprise, and Edu first; Plus + Business 'over the next few days'",
        "Desktop app (Mac + Windows): Chat, Work, and Codex available on EVERY plan including Free, globally, day one",
        "Usage is metered like Codex -- complex tasks draw more of your plan's included usage (same structure as Codex per OpenAI's help docs)",
        "Free/Go users get GPT-5.6 Terra in Work; Plus and up can pick Sol/Terra/Luna + effort level; `ultra` (4 parallel agents) is Pro/Enterprise in Work",
        "Enterprise/Edu admins get spend controls, group limits, and per-user overrides in the Admin Console",
      ],
    },
  ],

  pros: [
    "Genuinely long-horizon: it breaks a goal into steps and works independently for hours, checking in for approvals -- this is the Codex agent loop generalized beyond code",
    "The unified plugins directory (Google Drive, SharePoint, Slack, Teams, Gmail, Outlook, Salesforce, Adobe, Zoom, GitHub, Canva, Dropbox...) plus @-mentioning a specific app gives it real context from where your work already lives",
    "Scheduled Tasks turn it into standing automation -- monitor Slack/email/dashboards on a schedule and keep docs, decks, and reports current without prompting",
    "Sites (public beta) publishes interactive dashboards, trackers, and web apps to a shareable URL -- and ChatGPT can keep them updated as the underlying data changes",
    "Desktop app goes further than web: built-in browser, local file + app access, and Computer Use that clicks/types across your desktop in the background",
    "Aggressively distributed: the desktop app with Work + Codex is free on every plan from day one",
  ],
  cons: [
    "Web/mobile rollout is staged -- Plus and Business users wait days behind Pro/Enterprise/Edu at launch",
    "Usage-metered like Codex, so a long multi-hour run can eat a meaningful chunk of a $20 Plus plan's included usage -- the experience is tier-dependent",
    "An agent that reads your CRM, email, and files and then acts on them is a large trust surface -- OpenAI's own mitigation (auto-review of important actions) blocked 100% of red-team exfiltration attempts, but prompt-injection risk on connected-tool agents is structural, not solved",
    "Ships with a casualty: OpenAI is sunsetting the standalone Atlas browser in favor of the ChatGPT desktop app's built-in browser + a Chrome-sidebar extension",
    "Brand-new product surface -- expect the usual v1 roughness on long runs, plugin auth, and hand-offs between web, mobile, and desktop",
  ],
  knownIssues: [
    {
      description: "ROLLOUT + USAGE-POOL GOTCHA (2026-07-10, press): the **Plus/Business rollout began 7/10** (day after Pro/Enterprise/Edu), on track with the 'coming days' guidance. Biggest early complaint (analyst-reported): **ChatGPT Work and Codex draw from the SAME usage pool** -- a long Work run can silently consume your Codex weekly limits, which surprised teams using both. Enterprise admins got per-user monthly limits + workspace overage caps in response. Also note desktop/cloud Work conversations didn't sync at launch",
      source: "Dataconomy (2026-07-10), The Tech Portal (2026-07-10), digitalapplied.com week-one recap",
      date: "2026-07-10",
    },
    {
      description: "LAUNCH (2026-07-09): OpenAI launched **ChatGPT Work**, an agent that takes goals ('analyze month-end budget variance,' 'turn research into a campaign brief') and works for hours across connected apps to return finished sheets/slides/docs/web apps. Built on **Codex technology** (5M+ weekly Codex users, 1M+ using it for non-dev work) and powered by **GPT-5.6** (GA the same day). Key surfaces: **unified plugins directory** (Drive, SharePoint, Slack, Teams, Gmail, Outlook, Salesforce, Adobe, Zoom, LinkedIn, GitHub, Canva, Dropbox), **Scheduled Tasks** (recurring/event-driven runs), **Sites in public beta** (publish interactive dashboards/web apps to a URL), and a **new unified ChatGPT desktop app** (Mac/Windows, all plans incl. Free) with built-in browser and desktop Computer Use. The **Codex app merges into the new desktop app** (developers can keep Codex as the default view); the old ChatGPT desktop app is renamed **ChatGPT Classic**; the standalone **Atlas browser will be sunset** in favor of the built-in browser + an updated Chrome sidebar extension. Rollout: web/mobile Pro/Enterprise/Edu 7/9, Plus/Business over the following days; desktop everywhere day one. Usage follows the Codex metering structure; Enterprise admins get spend controls + Compliance API visibility. Security: 'auto-review' inspects important connected-tool actions before execution -- OpenAI says it blocked 100% of adversarial data-exfiltration attempts in red teaming",
      source: "OpenAI (openai.com/index/chatgpt-for-your-most-ambitious-work/), Bloomberg, The Decoder, VentureBeat",
      date: "2026-07-09",
    },
  ],
  bestFor: "Knowledge workers with recurring, multi-source deliverables -- month-end close, launch checklists, account plans, competitive research -- who already live in ChatGPT and want the agent to assemble the finished artifact rather than a draft answer. Desktop users get the most complete version.",
  notFor: "Anyone who needs deterministic, auditable automation today (this is a v1 agent with staged rollout), teams on non-OpenAI stacks, or privacy-sensitive orgs not ready to hand an agent connected-app access. For pure coding, Codex/Claude Code/Cursor remain the sharper tools.",
  verdict: "ChatGPT Work is OpenAI generalizing the Codex playbook to all knowledge work, and it's the most credible 'agent that finishes the job' launch yet from a consumer-scale vendor: real app connections through one plugins directory, hours-long autonomous runs with approval gates, scheduled automations, and publishable Sites -- distributed free on every desktop plan from day one. The bet is distribution plus GPT-5.6's template-following gains, and the honest caveats are the usual agent ones: usage metering makes heavy runs tier-dependent, connected-tool agents carry structural prompt-injection risk, and v1 roughness is guaranteed. If you're a Pro/Enterprise user it's an immediate try; Plus users should test it the week it lands for them.",

  lastReviewedDate: "2026-07-10",
  dataSources: [
    { name: "OpenAI: ChatGPT is now a partner for your most ambitious work (2026-07-09)", url: "https://openai.com/index/chatgpt-for-your-most-ambitious-work/", dateAccessed: "2026-07-09" },
    { name: "OpenAI: GPT-5.6 GA (powers ChatGPT Work)", url: "https://openai.com/index/gpt-5-6/", dateAccessed: "2026-07-09" },
    { name: "Bloomberg: OpenAI unveils ChatGPT Work agent to field tasks for hours", url: "https://www.bloomberg.com/news/articles/2026-07-09/openai-unveils-chatgpt-work-agent-to-field-tasks-for-hours", dateAccessed: "2026-07-09" },
    { name: "The Decoder: OpenAI pairs GPT-5.6 rollout with ChatGPT Work", url: "https://the-decoder.com/openai-pairs-its-gpt-5-6-public-rollout-with-chatgpt-work-a-new-agent-that-handles-entire-workflows/", dateAccessed: "2026-07-09" },
  ],
  affiliateUrl: "https://chatgpt.com/download/",
  status: "active",
  poweredBy: "GPT-5.6 (Sol/Terra/Luna, user-selectable on paid plans)",
  metaTitle: "ChatGPT Work Review (2026): OpenAI's Hours-Long Work Agent, Tested",
  metaDescription: "ChatGPT Work review. OpenAI's new agent (July 9, 2026) works for hours across Slack, Drive, Salesforce + more via plugins, returns finished docs/sheets/slides, adds Scheduled Tasks + Sites. Free desktop app on every plan. What's good, what's risky.",
};
