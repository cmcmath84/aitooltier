import { ToolReview } from "@/lib/types";

export const claudeMythos: ToolReview = {
  slug: "claude-mythos",
  name: "Claude Mythos 5",
  tagline: "Anthropic's unrestricted frontier model -- launched June 9, 2026 alongside Claude Fable 5 (the same model made safe for general use). Mythos 5 itself stays gated to ~150 Project Glasswing orgs and select biology researchers; everyone else now gets Mythos-class capability through Fable 5.",
  category: "ai-llms",
  url: "https://red.anthropic.com/2026/mythos-preview/",

  scores: {
    easeOfUse: 2,
    outputQuality: 10,
    value: 5,
    features: 9,
    overall: 6.5,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Project Glasswing (Gated)",
      price: "Invite only",
      features: [
        "Mythos 5 (launched 2026-06-09) restricted to Project Glasswing partners -- expanded to ~150 orgs as of 2026-06-02 -- plus select biology researchers",
        "Mythos Preview users can upgrade to Mythos 5 immediately",
        "Founding partners: Amazon, Apple, Google, Cisco, CrowdStrike, JPMorgan, Microsoft, Nvidia",
        "Broader trusted-access program for cybersecurity + biomedical research planned",
        "Mandatory 30-day retention on all Mythos-class traffic (not used for training)",
      ],
    },
    {
      plan: "Public access (via Claude Fable 5)",
      price: "$10 / $50 per 1M tokens",
      features: [
        "Fable 5 (2026-06-09) is the same underlying model 'made safe for general use' -- classifiers route cyber/bio/chem requests to Opus 4.8 (<5% of sessions)",
        "Included on Claude Pro/Max/Team/Enterprise at no extra cost through 2026-06-22, usage credits after",
        "See /tools/claude for the full Fable 5 review",
      ],
    },
  ],

  pros: [
    "The most capable Anthropic model available -- meaningfully stronger than Opus 4.7 on cybersecurity reasoning, long-horizon autonomy, and multi-step attack/defense planning per Anthropic's published evaluations",
    "73% success rate on expert-level Capture-the-Flag tasks -- a benchmark other frontier models (GPT-5.x, Gemini 3.1 Pro, Opus 4.7) are well below",
    "Autonomously executes 32-step network attacks in Anthropic's red-team evals -- demonstrates sustained agentic capability on security tooling without losing track",
    "Paired with Project Glasswing: a coalition model where 8 founding enterprise partners get controlled access, $100M in credits, and shared threat intelligence",
  ],
  cons: [
    "Not available to the public. If you're reading this thinking you might use it: you probably can't. Invite-only rollout to ~50 orgs with active cybersecurity or research commitments",
    "Even if you are in a Glasswing partner org, access is heavily gated -- deployment requires explicit use-case approval and extensive safety review",
    "Specialized for security work. Anthropic explicitly notes Mythos is 'less broadly capable' than Opus 4.7 outside the cyber domain -- so it is NOT the answer for general coding, writing, or analysis work",
    "Anthropic withholding the weights and API access is a policy call, not a technical one. This is the first time a frontier Claude model has been deliberately kept out of the API, signaling a new safety/release posture you should expect to see repeat",
  ],
  knownIssues: [
    {
      description: "MODEL LAUNCH (2026-06-09): **Claude Mythos 5** replaces Mythos Preview as the Glasswing-track model -- same underlying model as the publicly available Claude Fable 5, with safeguards lifted in certain areas for vetted partners. Existing Mythos Preview users upgrade immediately. Anthropic simultaneously made the Mythos class public for the first time via Fable 5 ($10/$50 per 1M, plan-included through 6/22), with classifier fallback to Opus 4.8 on cybersecurity, bio/chem, and distillation-attempt requests. All Mythos-class traffic now carries mandatory 30-day retention, overriding zero-data-retention agreements (not used for training)",
      source: "Anthropic news (anthropic.com/news/claude-fable-5-mythos-5), TechCrunch, CNBC",
      date: "2026-06-09",
    },
    {
      description: "Mythos's cybersecurity capability is the reason for its gated release. Anthropic's red-team evaluations showed the model could plan end-to-end network intrusion chains, which Anthropic deemed too risky for open API access",
      source: "Anthropic Project Glasswing announcement, Axios, CNBC, Schneier on Security",
      date: "2026-04",
    },
    {
      description: "Naming history: 'Claude Mythos Preview' was the April 2026 product name (internal codename Capybara); the 'Mythos 5' name became official with the 2026-06-09 launch, aligning with Fable 5 (there was never a Mythos 1-4)",
      source: "Axios, Fortune, Anthropic news",
      date: "2026-06",
    },
    {
      description: "Access applications are not open -- Anthropic is approaching partner orgs directly rather than accepting inbound requests",
      source: "Anthropic Glasswing page",
      date: "2026-04",
    },
    {
      description: "Axios reported 2026-04-19 that the NSA is among the ~40 orgs with Mythos access, despite the Pentagon's formal supply-chain risk designation of Anthropic. Dario Amodei reportedly met with W.H. Chief of Staff Susie Wiles and Treasury Secretary Scott Bessent on 2026-04-17. Material context if you are evaluating Mythos / Glasswing in a federal or defense-adjacent procurement -- the political posture inside the US government is not uniform",
      source: "Axios, TechCrunch, Engadget",
      date: "2026-04",
    },
  ],
  bestFor: "Partner organizations in Project Glasswing doing cybersecurity research, defensive red-teaming, threat intelligence, or large-scale vulnerability triage. If your use case is legitimate cybersecurity and you have enterprise Anthropic contact, ask about Glasswing admission.",
  notFor: "Everyone else -- but as of June 9, 2026 'everyone else' gets Claude Fable 5 (see /tools/claude): the same Mythos-class model made safe for general use, on the API and included in paid plans through June 22.",
  verdict: "The Mythos story changed on June 9, 2026. What began in April as a deliberately withheld cybersecurity preview is now a two-track release: Mythos 5 for ~150 vetted Glasswing orgs and select biology researchers with safeguards lifted, and Claude Fable 5 for the public -- the same model with classifier-enforced fallbacks to Opus 4.8 on dangerous-capability requests. That makes this page's subject the gated track only. If you're in Glasswing, Mythos 5 is an immediate upgrade from Mythos Preview. If you're not, you no longer have to wonder what you're missing: Fable 5 IS the Mythos class, minus the <5% of sessions that touch cyber/bio/chem territory. The deeper signal stands -- Anthropic now ships its frontier in safety-differentiated tiers, and the 30-day mandatory retention on all Mythos-class traffic shows what public access to this capability level costs in privacy terms.",

  lastReviewedDate: "2026-06-09",
  dataSources: [
    { name: "Anthropic: Introducing Claude Fable 5 and Claude Mythos 5 (2026-06-09)", url: "https://www.anthropic.com/news/claude-fable-5-mythos-5", dateAccessed: "2026-06-09" },
    { name: "Anthropic: Project Glasswing", url: "https://www.anthropic.com/glasswing", dateAccessed: "2026-04-17" },
    { name: "Anthropic Red: Mythos Preview", url: "https://red.anthropic.com/2026/mythos-preview/", dateAccessed: "2026-04-17" },
    { name: "Fortune: Anthropic's Mythos model + Project Glasswing", url: "https://fortune.com/2026/04/07/anthropic-claude-mythos-model-project-glasswing-cybersecurity/", dateAccessed: "2026-04-17" },
    { name: "Axios: Anthropic releases Opus 4.7, concedes it trails unreleased Mythos", url: "https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos", dateAccessed: "2026-04-17" },
    { name: "Schneier on Security: On Mythos Preview and Project Glasswing", url: "https://www.schneier.com/blog/archives/2026/04/on-anthropics-mythos-preview-and-project-glasswing.html", dateAccessed: "2026-04-17" },
    { name: "CNBC: Anthropic Opus 4.7 less risky than Mythos", url: "https://www.cnbc.com/2026/04/16/anthropic-claude-opus-4-7-model-mythos.html", dateAccessed: "2026-04-17" },
    { name: "Axios: NSA uses Mythos despite Pentagon feud (2026-04-19)", url: "https://www.axios.com/2026/04/19/nsa-anthropic-mythos-pentagon", dateAccessed: "2026-04-20" },
    { name: "TechCrunch: NSA spies reportedly using Anthropic Mythos", url: "https://techcrunch.com/2026/04/20/nsa-spies-are-reportedly-using-anthropics-mythos-despite-pentagon-feud/", dateAccessed: "2026-04-20" },
  ],
  affiliateUrl: "https://red.anthropic.com/2026/mythos-preview/",
  status: "active",
  personality: {
    oneLiner: "The gated red-team specialist",
    tone: "When Anthropic does publish Mythos outputs (in sanitized research reports), the voice is careful, technically dense, and deliberately unperformed -- much more 'senior security researcher writing an internal memo' than Claude Opus's conversational style.",
    quirks: "Mythos is tuned to produce its cybersecurity reasoning with extensive show-your-work traces. Anthropic publishes some outputs with full CoT visible as evidence of capability claims. Outside of security tasks, the model reportedly sounds much like Opus 4.6 / 4.7 -- Anthropic hasn't published a distinct general-purpose voice for Mythos.",
  },
  metaTitle: "Claude Mythos 5 (June 2026): Anthropic's Gated Frontier Model + Fable 5 Public Twin",
  metaDescription: "Claude Mythos 5 launched June 9, 2026 -- gated to ~150 Project Glasswing orgs, safeguards lifted. Its public twin Claude Fable 5 brings Mythos-class capability to everyone. CTF 73%, 30-day retention policy.",
};
