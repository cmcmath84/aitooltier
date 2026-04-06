import { ToolReview } from "@/lib/types";

export const tailor: ToolReview = {
  slug: "tailor",
  name: "T-AI-LOR",
  tagline: "AI resume tailoring that matches your real experience to any job description in 30 seconds",
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
    { plan: "Free", price: "$0", features: ["5 tailored resumes/month", "Resume builder", "Upload 30 career docs", "Job finder", "PDF/Word export"] },
    { plan: "Standard", price: "$8", period: "month", features: ["Unlimited tailored resumes", "Resume builder", "Upload 30 career docs", "Job finder", "Priority generation", "7-day free trial"] },
  ],

  pros: [
    "Dead simple workflow -- upload resume, paste job description, get tailored version in 30 seconds",
    "ATS scoring tells you how well your resume matches before you submit",
    "Tailors based on your real experience instead of fabricating bullet points",
    "Free tier is generous enough for casual job seekers (5 resumes/month)",
    "Very affordable at $8/mo compared to resume writing services ($100+)",
  ],
  cons: [
    "Very narrow tool -- does one thing and nothing else",
    "Limited to resume tailoring; no cover letters, LinkedIn optimization, or interview prep",
    "Output quality depends heavily on how detailed your uploaded resume is",
    "Newer tool with a smaller user base, less battle-tested than established resume builders",
  ],
  knownIssues: [
    { description: "Free tier limited to 5 resumes/month which may not be enough during active job searches", source: "gettailor.ai/pricing", date: "2026-04" },
  ],
  bestFor: "Active job seekers who apply to multiple positions and need to quickly tailor their resume for each application. Especially useful for getting past ATS filters.",
  notFor: "People who need a resume written from scratch, or anyone looking for a full career platform with cover letters, interview prep, and networking features.",
  verdict: "T-AI-LOR does exactly one thing and does it well: take your existing resume and reshape it for a specific job posting in under a minute. The ATS scoring is a nice touch. It's not going to replace a career coach, but at $8/mo it's cheaper than a single professionally written resume. If you're in an active job hunt and applying to 10+ positions, the time savings alone justify it.",

  lastReviewedDate: "2026-04-06",
  dataSources: [
    { name: "gettailor.ai official site", dateAccessed: "2026-04-06" },
    { name: "gettailor.ai/pricing", dateAccessed: "2026-04-06" },
  ],
  affiliateUrl: "https://gettailor.ai",
  status: "active",
  metaTitle: "T-AI-LOR Review 2026: AI Resume Tailoring Tool Worth It?",
  metaDescription: "T-AI-LOR review. AI-powered resume tailoring that matches your experience to job descriptions in 30 seconds. Free tier, $8/mo paid. Honest scores and verdict.",
};
