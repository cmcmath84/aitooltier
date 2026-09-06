import { ToolReview } from "@/lib/types";

export const claudeMythos: ToolReview = {
  slug: "claude-mythos",
  name: "Claude Mythos 5.1",
  tagline: "Anthropic's trusted-access frontier model. **Mythos 5.1 launched 2026-09-01** alongside Fable 5.1, and Anthropic now states outright that they are **the same model with different safeguards** -- the 5.1-cycle gap is 60.9% vs 55.8% on Terminal-Bench 4.0, which Anthropic attributes to safeguard interventions rather than capability and expects to shrink. Originally launched June 9, 2026 alongside Claude Fable 5. Suspended June 12 by a US export-control order, then PARTIALLY RESTORED July 1, 2026 (US government lifted controls June 30): Mythos 5 is back for a set of US organizations with government approval, while Anthropic works to re-expand the broader Glasswing program. Public Fable 5 returned globally the same day. Gated to Project Glasswing orgs + select biology researchers.",
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
      description: "MYTHOS 5.1 SHIPS -- AND ANTHROPIC NOW SAYS IN WRITING THAT MYTHOS AND FABLE ARE THE SAME MODEL (2026-09-01, vendor-primary): Anthropic launched **Claude Mythos 5.1** alongside the generally-available **Claude Fable 5.1**, and stated the relationship explicitly for the first time: '**Claude Fable 5.1 and Claude Mythos 5.1 are the same model, but with different levels of safeguards. Fable 5.1 is generally available, while Mythos 5.1 is available only through our trusted access programs; its safeguards are specifically designed to support work in cybersecurity and the life sciences.**' **THIS RESOLVES WHAT THIS PAGE HAS HAD TO INFER SINCE JUNE.** The Mythos line is not a separate, more capable model -- it is the same weights with a looser safeguard configuration, and Anthropic has now published the quantitative gap. **THE MEASURED SAFEGUARD TAX, FOR THE FIRST TIME:** on Terminal-Bench 4.0, Mythos 5.1 scores **60.9%** against Fable 5.1's **55.8%**. Anthropic is unusually direct that this five-point spread is **not capability**: 'the gap between them reflects the tasks on which our earlier, less precise cyber safeguards intervened. With the improvements we're making to these safeguards today, we expect the difference between the models to be much smaller.' **So the headline reason to want Mythos access is shrinking by Anthropic's own account** -- the 5.1 cycle narrows rather than widens the Fable/Mythos gap, because the fix was applied to the safeguards rather than to the model. **WHAT ACTUALLY CHANGES ACCESS:** cybersecurity safeguards now produce **60% fewer false positives**, and Anthropic says **Fable 5.1 -- the public model -- can now be used to discover software vulnerabilities, though not to develop exploits for them.** That is capability moving out of the gated tier and into the general one. For biology, Anthropic has established an access program **developed in partnership with the US government** to reach Mythos 5.1's advanced biology capabilities, with enrollment to 'open for scientists soon' -- still gated, but a different and more formal gate than the Project Glasswing arrangement this page has tracked. **PRICING IS IDENTICAL TO FABLE 5.1** and is published on the public rate card: $10/MTok input, $12.50 5-minute cache write, $20 1-hour cache write, **$0.25/MTok cache hits** (a 0.025x multiplier, versus 0.1x on every other Claude model), $50/MTok output; Batch $5/$25. Mythos 5.1 is listed as 'limited availability' via anthropic.com/glasswing. **The practical read: if you were pursuing Mythos access purely for benchmark headroom, the case is weaker than it was in June; if you were pursuing it for cyber or life-sciences scope, the gate is still there but the public model now covers vulnerability discovery.**",
      source: "Anthropic (anthropic.com/claude-fable-and-mythos-5-1 -- post is at the site ROOT, not under /news/) + platform.claude.com/docs/en/about-claude/pricing.md -- both fetched 2026-09-05 via curl with browser UA",
      date: "2026-09-01",
    },
    {
      description: "PARTIALLY RESTORED (2026-07-01): The US government **lifted the export controls on June 30**. Anthropic redeployed the public **Fable 5 globally on July 1**, but **Mythos 5 came back only partially** -- 'restored access to Mythos 5 for a set of US organizations, following the US government's approval.' Anthropic says it is continuing efforts to 'expand access to the broader set of domestic and international partners in the Glasswing program,' so non-US and many international Glasswing partners may still be waiting. The re-launch shipped a new safety classifier that blocks the reported jailbreak technique in >99% of cases. Net: Mythos 5 is available again, but on a narrower, government-approved US footprint than before the suspension.",
      source: "Anthropic (anthropic.com/news/redeploying-fable-5), CNBC (2026-06-30)",
      date: "2026-07-01",
    },
    {
      description: "MYTHOS PREVIEW RETIRED (2026-06-30): Per Anthropic's deprecations page, **Claude Mythos Preview reached its retirement date on June 30, 2026** -- Glasswing partners still on the Preview snapshot must now use `claude-mythos-5`. With Fable 5 public and Mythos 5 live, the Preview era is formally closed.",
      source: "Anthropic model deprecations page (platform.claude.com/docs/en/about-claude/model-deprecations)",
      date: "2026-06-30",
    },
    {
      description: "ACCESS SUSPENDED BY US GOVERNMENT (2026-06-12; RESOLVED 2026-07-01 -- see restoration entry above): A US government export-control directive ordered Anthropic to **suspend all access to Claude Mythos 5 and Claude Fable 5** for any foreign national (inside or outside the US, including foreign-national Anthropic employees). To comply, Anthropic **disabled both models for all customers** -- including, per the directive's scope, Project Glasswing partners. Access to all other Anthropic models is unaffected. The Commerce Department acted after another company claimed it had 'jailbroken' Mythos, raising national-security concerns; Anthropic disagrees and met with the Trump administration on 2026-06-15 to contest the order. This is the first frontier model pulled from access by US-government directive -- a landmark moment for AI export control and the open-vs-closed debate (CNBC framed it as 'a big moment for open-source AI'). Watch for restoration or appeal terms.",
      source: "Anthropic (anthropic.com/news/fable-mythos-access), CNBC (2026-06-12, 2026-06-15, 2026-06-16), TechCrunch, Axios",
      date: "2026-06-12",
    },
    {
      description: "RETIREMENT DATE SET (verified 2026-06-11): **Claude Mythos Preview retires June 30, 2026** per Anthropic's deprecations page -- Glasswing partners still on the Preview snapshot must migrate to claude-mythos-5 before then. With Fable 5 public and Mythos 5 live, the Preview era formally closes out at the end of the month",
      source: "Anthropic model deprecations page (platform.claude.com/docs/en/about-claude/model-deprecations)",
      date: "2026-06-11",
    },
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
  verdict: "UPDATE (July 1, 2026): the suspension is over. The US government lifted the export controls on June 30; public Fable 5 returned globally on July 1, and Mythos 5 was restored -- but only partially, to a set of US organizations with government approval, while Anthropic works to re-admit the broader (and international) Glasswing base. So Mythos 5 is available again, on a narrower footprint than before, and Mythos Preview formally retired June 30. The pre-suspension picture, for context: the Mythos story changed on June 9, 2026. What began in April as a deliberately withheld cybersecurity preview is now a two-track release: Mythos 5 for ~150 vetted Glasswing orgs and select biology researchers with safeguards lifted, and Claude Fable 5 for the public -- the same model with classifier-enforced fallbacks to Opus 4.8 on dangerous-capability requests. That makes this page's subject the gated track only. If you're in Glasswing, Mythos 5 is an immediate upgrade from Mythos Preview. If you're not, you no longer have to wonder what you're missing: Fable 5 IS the Mythos class, minus the <5% of sessions that touch cyber/bio/chem territory. The deeper signal stands -- Anthropic now ships its frontier in safety-differentiated tiers, and the 30-day mandatory retention on all Mythos-class traffic shows what public access to this capability level costs in privacy terms.",

  lastReviewedDate: "2026-09-05",
  dataSources: [
    { name: "Anthropic: Introducing Claude Fable 5.1 and Claude Mythos 5.1 (2026-09-01) -- same model, different safeguards", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1", dateAccessed: "2026-09-05" },
    { name: "Anthropic pricing docs: Mythos 5.1 at $10/$50 with $0.25/MTok cache hits, limited availability via Glasswing (verified 2026-09-05)", url: "https://platform.claude.com/docs/en/about-claude/pricing", dateAccessed: "2026-09-05" },
    { name: "Anthropic: Redeploying Fable 5 (Mythos 5 partially restored 2026-07-01)", url: "https://www.anthropic.com/news/redeploying-fable-5", dateAccessed: "2026-07-04" },
    { name: "Anthropic: Statement on the US government directive to suspend access to Fable 5 and Mythos 5 (2026-06-12)", url: "https://www.anthropic.com/news/fable-mythos-access", dateAccessed: "2026-06-18" },
    { name: "CNBC: Anthropic's Fable shutdown is a big moment for open-source AI (2026-06-16)", url: "https://www.cnbc.com/2026/06/16/anthropics-fable-shutdown-is-a-big-moment-for-open-source-ai.html", dateAccessed: "2026-06-18" },
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
  metaTitle: "Claude Mythos 5.1 (2026): Same Model as Fable 5.1, Different Safeguards",
  metaDescription: "Claude Mythos 5 launched June 9, 2026, was suspended June 12 by a US export-control order, and was partially restored July 1 (US orgs with government approval) after controls lifted June 30. Gated red-team model; CTF 73%, 30-day retention.",
};
