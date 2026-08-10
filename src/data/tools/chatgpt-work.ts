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
      description: "A $125 PREMIUM BUSINESS SEAT IS COMING, AND IT TARGETS THE USAGE-POOL PAIN ON THIS PAGE (2026-08-10, vendor-primary, WAITLIST -- not GA): OpenAI announced **Premium seats for ChatGPT Business** at **$125 per user per month, or $100 per user per month billed annually**, alongside the existing **Standard seat at $25 monthly / $20 annual**. The two features that matter for Work specifically are '**5x more usage than Standard seats**' and removal of '**the five-hour usage limit**', with predictable weekly usage resets. **Why this is relevant here and not just on the pricing page:** the loudest early complaint about Work -- recorded further down this list -- is that **Work and Codex draw from the same usage pool**, so a long Work run can silently eat your Codex limits. A 5x-usage seat you can assign to individual heavy users is the first direct answer OpenAI has offered to that, and workspaces can **mix Standard and Premium seats** rather than upgrading everyone. If you still hit a limit, shared workspace credits are available to the workspace owner. **STATUS -- DO NOT QUOTE THIS AS SHIPPED:** the post is headlined 'Premium seats are **coming** to ChatGPT Business' with a **waitlist**, and OpenAI says some customers may get early access 'before Premium becomes generally available'. There is a launch promo of **$100 in workspace credits (2,500) per Premium seat, capped at $500 / 5 seats, for the first 10,000 eligible customers, ending 2026-08-20**. Full pricing detail on /tools/chatgpt",
      source: "OpenAI (openai.com/index/premium-seats-chatgpt-business/, publicationDateText 'August 10, 2026', fetched 2026-08-10 via curl -- openai.com 403s WebFetch)",
      date: "2026-08-10",
    },
    {
      description: "ROLLOUT STATUS (as of 2026-07-22): OpenAI's business release notes (7/9) say Work launched on 'all paid plans except Free and Go,' with Pro/Pro Lite/Enterprise/Edu first and 'Plus and Business users will follow over the coming days' -- no vendor confirmation of full-completion has been posted, so treat Plus/Business availability as rolling out, not formally done. **The two-week Enterprise/Edu preview -- off by default -- AUTO-ENABLES for any non-opted-out workspace on July 23, 2026** (tomorrow, as of this review): admins who want Work kept off for their org must act before the 23rd. Also confirmed at launch: ChatGPT Sites public publishing is NOT available in the EEA/Switzerland/UK, and legacy group chats began retiring 7/9. Week-two incident worth knowing (single-source, TechTimes 7/12 -- flagged as such): reports that GPT-5.6 Sol deleted user files during the Work launch, a failure mode OpenAI's own System Card documented pre-release; treat cautiously pending wider confirmation. ATLAS SHUTDOWN EXECUTED: the Atlas browser announced for sunset on 7/9 **stopped working August 9, 2026** -- now confirmed against OpenAI's own release notes ('Atlas is scheduled to stop working on August 9, 2026'), not just the earlier TechRadar report, and **verified executed on 2026-08-10** (chatgpt.com/atlas 301s to /download/; the Atlas help-centre collection 404s). Browsing/agent features folded into the unified desktop app + Chrome extension as planned. Atlas bookmarks, open tabs and history did **not** transfer automatically and the export deadline has passed -- full detail on /tools/chatgpt",
      source: "OpenAI business release notes (help.openai.com/en/articles/11391654), InfoWorld (2026, ChatGPT Work / GPT-5.6 rollout + 7/23 auto-enable), TechCrunch (2026-07-09, Atlas), TechRadar (Aug 9 stop-work date), TechTimes (2026-07-12, single-source file-deletion reports)",
      date: "2026-07-22",
    },
    {
      description: "THREE EDUCATION PLUGINS FOR CHATGPT WORK AND CODEX (2026-08-04, vendor-primary): OpenAI shipped its first vertical plugin bundle, aimed at the fall term. A plugin here is '**a package of apps, role-specific skills, instructions, and common workflows**' -- the point is to skip prompt engineering, not to add a model. **Three plugins: College Student, K-12 Educator, and College Educator.** **DISTRIBUTION IS THE CATCH:** they are available '**through both ChatGPT Edu and ChatGPT for Teachers district deployments**' -- i.e. institution-managed workspaces, not individual Plus/Pro accounts. ChatGPT for Teachers is free for verified US K-12 educators and districts, so the K-12 path has no licence cost, but it does require a district or domain claim. **K-12 Educator plugin:** built with K-12 teachers to create differentiated resources, design interactive visuals and surface classroom insights; it integrates with **Learning Commons**, a philanthropic organisation building public AI datasets, which lets teachers generate material aligned to local academic standards and the learning progressions underneath them, while keeping pedagogical decisions, grading and agentic actions under teacher control. **College Educator plugin:** syllabus updates, interactive teaching sites, multimedia assessments, adapting materials for diverse learners, LMS packaging, and course calendaring against connected calendars and documents. **College Student plugin:** guided tutoring, practice on difficult concepts, study guides, quizzes, flashcards and interactive visual explanations, generated from sources the student chooses; OpenAI says it 'draws on learning science to prioritize deeper understanding' rather than answer-generation. Institutional framing, verbatim: '**AI should support learning, not shortcut it.**' Context: OpenAI is the founding partner of the **National Academy for AI Instruction** with the American Federation of Teachers, a five-year effort to train 400,000 US K-12 educators (about one in ten). Read: this is the first sign that ChatGPT Work's plugin directory is becoming a vertical distribution channel rather than a generic connector list",
      source: "OpenAI (openai.com/index/learn-teach-chatgpt-work-codex/, fetched 2026-08-06 via curl -- openai.com 403s WebFetch)",
      date: "2026-08-04",
    },
    {
      description: "ROLLOUT + USAGE-POOL GOTCHA (2026-07-10, press): the **Plus/Business rollout began 7/10** (day after Pro/Enterprise/Edu), on track with the 'coming days' guidance. Biggest early complaint (analyst-reported): **ChatGPT Work and Codex draw from the SAME usage pool** -- a long Work run can silently consume your Codex weekly limits, which surprised teams using both. Enterprise admins got per-user monthly limits + workspace overage caps in response. Also note desktop/cloud Work conversations didn't sync at launch",
      source: "Dataconomy (2026-07-10), The Tech Portal (2026-07-10), digitalapplied.com week-one recap",
      date: "2026-07-10",
    },
    {
      description: "LAUNCH (2026-07-09): OpenAI launched **ChatGPT Work**, an agent that takes goals ('analyze month-end budget variance,' 'turn research into a campaign brief') and works for hours across connected apps to return finished sheets/slides/docs/web apps. Built on **Codex technology** (5M+ weekly Codex users, 1M+ using it for non-dev work) and powered by **GPT-5.6** (GA the same day). Key surfaces: **unified plugins directory** (Drive, SharePoint, Slack, Teams, Gmail, Outlook, Salesforce, Adobe, Zoom, LinkedIn, GitHub, Canva, Dropbox), **Scheduled Tasks** (recurring/event-driven runs), **Sites in public beta** (publish interactive dashboards/web apps to a URL), and a **new unified ChatGPT desktop app** (Mac/Windows, all plans incl. Free) with built-in browser and desktop Computer Use. The **Codex app merges into the new desktop app** (developers can keep Codex as the default view); the old ChatGPT desktop app is renamed **ChatGPT Classic**; the standalone **Atlas browser will be sunset** in favor of the built-in browser + an updated Chrome sidebar extension (**this executed 2026-08-09**). Rollout: web/mobile Pro/Enterprise/Edu 7/9, Plus/Business over the following days; desktop everywhere day one. Usage follows the Codex metering structure; Enterprise admins get spend controls + Compliance API visibility. Security: 'auto-review' inspects important connected-tool actions before execution -- OpenAI says it blocked 100% of adversarial data-exfiltration attempts in red teaming",
      source: "OpenAI (openai.com/index/chatgpt-for-your-most-ambitious-work/), Bloomberg, The Decoder, VentureBeat",
      date: "2026-07-09",
    },
  ],
  bestFor: "Knowledge workers with recurring, multi-source deliverables -- month-end close, launch checklists, account plans, competitive research -- who already live in ChatGPT and want the agent to assemble the finished artifact rather than a draft answer. Desktop users get the most complete version.",
  notFor: "Anyone who needs deterministic, auditable automation today (this is a v1 agent with staged rollout), teams on non-OpenAI stacks, or privacy-sensitive orgs not ready to hand an agent connected-app access. For pure coding, Codex/Claude Code/Cursor remain the sharper tools.",
  verdict: "ChatGPT Work is OpenAI generalizing the Codex playbook to all knowledge work, and it's the most credible 'agent that finishes the job' launch yet from a consumer-scale vendor: real app connections through one plugins directory, hours-long autonomous runs with approval gates, scheduled automations, and publishable Sites -- distributed free on every desktop plan from day one. The bet is distribution plus GPT-5.6's template-following gains, and the honest caveats are the usual agent ones: usage metering makes heavy runs tier-dependent, connected-tool agents carry structural prompt-injection risk, and v1 roughness is guaranteed. If you're a Pro/Enterprise user it's an immediate try; Plus users should test it the week it lands for them.",

  lastReviewedDate: "2026-08-10",
  dataSources: [
    { name: "OpenAI: Premium seats are coming to ChatGPT Business -- $125/mo, 5x usage, no five-hour limit, waitlist (2026-08-10)", url: "https://openai.com/index/premium-seats-chatgpt-business/", dateAccessed: "2026-08-10" },
    { name: "OpenAI: ChatGPT release notes -- 'Retiring Atlas', stops working August 9, 2026", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes", dateAccessed: "2026-08-10" },
    { name: "OpenAI: New ways to learn and teach with ChatGPT Work and Codex (education plugins, 2026-08-04)", url: "https://openai.com/index/learn-teach-chatgpt-work-codex/", dateAccessed: "2026-08-06" },
    { name: "OpenAI business release notes (Work rollout terms + 7/23 Enterprise auto-enable)", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes", dateAccessed: "2026-07-22" },
    { name: "TechCrunch: OpenAI is shutting down Atlas (2026-07-09)", url: "https://techcrunch.com/2026/07/09/openai-is-shutting-down-atlas-but-its-ai-browser-ambitions-are-still-growing/", dateAccessed: "2026-07-18" },
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
