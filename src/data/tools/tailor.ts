import { ToolReview } from "@/lib/types";

export const tailor: ToolReview = {
  slug: "tailor",
  name: "T-AI-LOR",
  tagline: "T-AI-LOR (now styled TAILOR) builds a tailored resume for each job from up to 30 of your own career documents in under two minutes, and strips out job keywords your documents cannot back up. Free plan: 3 tailored resumes a month; Standard $11.99/month or $24.99 per quarter",
  category: "ai-writing-tools",
  url: "https://gettailor.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 8,
    features: 6,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["3 tailored resumes/month", "Resume editor", "Upload up to 30 career docs", "No card required", "Job finder not included"] },
    { plan: "Standard", price: "$11.99", period: "month", features: ["Unlimited resume generations", "Resume editor", "Job finder", "Upload up to 30 career docs", "7-day trial (card required)"] },
    { plan: "Standard (quarterly)", price: "$24.99", period: "3 months", features: ["Same features as Standard monthly", "Saves 30% vs monthly billing"] },
  ],

  pros: [
    "Simple workflow: upload up to 30 career documents, paste a job description, and get a tailored resume in under two minutes",
    "A job match score shows how well the tailored resume fits the posting before you submit, with PDF or Word export",
    "Tailors from your real experience instead of fabricating bullet points: each line traces to a source document, and job keywords your documents cannot support are removed",
    "Free plan covers casual job seekers (3 tailored resumes a month, no card required)",
    "Affordable at $11.99/mo, or $24.99 per quarter, compared to resume writing services ($100+)",
  ],
  cons: [
    "Standard now costs $11.99/mo (up from $8), its 7-day trial requires a card, and the free plan dropped from 5 to 3 tailored resumes a month without the job finder",
    "Very narrow tool -- does one thing and nothing else",
    "Limited to resume tailoring; no cover letters, LinkedIn optimization, or interview prep",
    "Output quality depends heavily on how detailed your uploaded resume is",
    "Newer tool with a smaller user base, less battle-tested than established resume builders",
  ],
  knownIssues: [
    {
      description: "PRICING AND PLAN CHANGES (checked 2026-10-29): gettailor.ai/pricing now lists Free at $0 with 3 tailored resumes a month (was 5), the resume editor and up to 30 career documents, without the job finder or unlimited generations. Standard costs $11.99 a month (was $8) or $24.99 per quarter ('Save 30% with quarterly billing') and adds unlimited resume generations and the job finder; 'Standard includes a 7-day trial (card required).' The site now styles the brand as TAILOR, and the home page shows a resume 'cut in about 1½ min' instead of the 30 seconds this page used to quote.",
      source: "gettailor.ai/pricing (page title 'Pricing: AI Resume Tailoring Plans | TAILOR', structured offers Free 0, Standard Monthly 11.99, Standard Quarterly 24.99) + gettailor.ai home page, fetched 2026-10-29",
      date: "2026-10-29",
    },
    { description: "Free tier limited to 5 resumes/month at the 2026-04 review, which may not be enough during active job searches; it has since dropped to 3 a month", source: "gettailor.ai/pricing", date: "2026-04" },
  ],
  bestFor: "Active job seekers who apply to many positions and want a resume tailored to each one, especially people whose experience is spread across old resumes, reviews, project write-ups and LinkedIn exports. Also useful for getting past ATS filters.",
  notFor: "People who need a resume written from scratch, or anyone looking for a full career platform with cover letters, interview prep, and networking features.",
  verdict: "T-AI-LOR (now styled TAILOR) does one thing and does it well: it reads your existing resumes and career documents and cuts a resume for a specific job posting in under two minutes, dropping keywords your record cannot support. The job match score is a nice touch. It's not going to replace a career coach, but at $11.99/mo (or $24.99 a quarter) it's still cheaper than a single professionally written resume. The free plan now stops at 3 tailored resumes a month, so if you're applying to 10+ positions you'll need Standard, and the time savings alone justify it.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "TAILOR pricing: Free 3 resumes/month, Standard $11.99/mo or $24.99/quarter", url: "https://www.gettailor.ai/pricing", dateAccessed: "2026-10-29" },
    { name: "TAILOR home page", url: "https://www.gettailor.ai/", dateAccessed: "2026-10-29" },
    { name: "gettailor.ai official site", dateAccessed: "2026-04-06" },
    { name: "gettailor.ai/pricing", dateAccessed: "2026-04-06" },
  ],
  affiliateUrl: "https://gettailor.ai",
  status: "active",
  metaTitle: "T-AI-LOR Review 2026: AI Resume Tailoring Tool Worth It?",
  metaDescription: "T-AI-LOR (TAILOR) review. AI resume tailoring built from your own career documents in under two minutes. Free plan with 3 tailored resumes a month, Standard $11.99/mo or $24.99 per quarter. Honest scores and verdict.",
};
