export interface Profession {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  /** Category slugs most relevant to this profession */
  categories: string[];
  /** Specific tool slugs to feature for this profession */
  featuredTools?: string[];
}

export const professions: Profession[] = [
  {
    slug: "developers",
    title: "AI Tools for Developers",
    description:
      "AI tools that help software engineers code faster, debug smarter, and ship more. From autocomplete to autonomous agents.",
    metaTitle: "Best AI Tools for Developers (2026): Top Picks Ranked",
    metaDescription:
      "The best AI tools for developers in 2026. Code assistants, chatbots, website builders, and more — ranked with real scores.",
    categories: ["ai-code-assistants", "ai-chatbots", "ai-website-builders"],
  },
  {
    slug: "marketers",
    title: "AI Tools for Marketers",
    description:
      "AI tools for content creation, SEO, social media, email marketing, video production, and campaign analytics.",
    metaTitle: "Best AI Tools for Marketers (2026): Top Picks Ranked",
    metaDescription:
      "The best AI marketing tools in 2026. Writing, SEO, video, design, and analytics tools ranked by real scores.",
    categories: [
      "ai-marketing-tools",
      "ai-seo-tools",
      "ai-writing-tools",
      "ai-video-generators",
      "ai-design-tools",
    ],
  },
  {
    slug: "students",
    title: "AI Tools for Students",
    description:
      "AI tools that help students research, write papers, study, create presentations, and learn faster.",
    metaTitle: "Best AI Tools for Students (2026): Top Picks Ranked",
    metaDescription:
      "The best AI tools for students in 2026. Chatbots, writing tools, presentation makers, and more compared.",
    categories: [
      "ai-chatbots",
      "ai-writing-tools",
      "ai-presentation-tools",
      "ai-translation",
    ],
    featuredTools: ["chatgpt", "claude", "perplexity", "grammarly", "deepl"],
  },
  {
    slug: "small-business",
    title: "AI Tools for Small Business",
    description:
      "AI tools that help small businesses automate tasks, create content, manage customers, and grow without a big team.",
    metaTitle: "Best AI Tools for Small Business (2026): Top Picks",
    metaDescription:
      "The best AI tools for small businesses. Automation, marketing, design, and productivity tools ranked.",
    categories: [
      "ai-business-productivity",
      "ai-marketing-tools",
      "ai-automation-workflow",
      "ai-design-tools",
      "ai-website-builders",
    ],
  },
  {
    slug: "content-creators",
    title: "AI Tools for Content Creators",
    description:
      "AI tools for video production, image creation, music, writing, and social media content at scale.",
    metaTitle: "Best AI Tools for Content Creators (2026): Top Picks",
    metaDescription:
      "The best AI tools for content creators. Video, image, music, and writing tools ranked with real scores.",
    categories: [
      "ai-video-generators",
      "ai-image-generators",
      "ai-music-generators",
      "ai-writing-tools",
      "ai-voice-audio",
    ],
  },
  {
    slug: "designers",
    title: "AI Tools for Designers",
    description:
      "AI design tools for graphics, UI/UX, presentations, photo editing, and image generation.",
    metaTitle: "Best AI Tools for Designers (2026): Top Picks Ranked",
    metaDescription:
      "The best AI design tools in 2026. Image generators, photo editors, presentation makers, and more compared.",
    categories: [
      "ai-design-tools",
      "ai-image-generators",
      "ai-photo-editing",
      "ai-presentation-tools",
    ],
  },
  {
    slug: "writers",
    title: "AI Tools for Writers",
    description:
      "AI writing assistants for fiction, copywriting, journalism, blogging, and academic writing. Grammar, style, and full generation.",
    metaTitle: "Best AI Tools for Writers (2026): Top Picks Ranked",
    metaDescription:
      "The best AI writing tools in 2026. From grammar checkers to full AI ghostwriters — ranked with honest scores.",
    categories: ["ai-writing-tools", "ai-chatbots"],
    featuredTools: ["chatgpt", "claude", "grammarly"],
  },
  {
    slug: "sales",
    title: "AI Tools for Sales Teams",
    description:
      "AI tools for prospecting, outreach, call handling, CRM automation, and deal closing.",
    metaTitle: "Best AI Tools for Sales (2026): Top Picks Ranked",
    metaDescription:
      "The best AI sales tools in 2026. Voice agents, chatbots, automation, and productivity tools compared.",
    categories: [
      "ai-voice-agents",
      "ai-automation-workflow",
      "ai-business-productivity",
      "ai-chatbots",
    ],
  },
  {
    slug: "educators",
    title: "AI Tools for Teachers & Educators",
    description:
      "AI tools that help teachers create lesson plans, grade work, build presentations, and engage students.",
    metaTitle: "Best AI Tools for Teachers (2026): Top Education Picks",
    metaDescription:
      "The best AI tools for teachers and educators. Presentation, writing, chatbot, and content creation tools ranked.",
    categories: [
      "ai-presentation-tools",
      "ai-writing-tools",
      "ai-chatbots",
      "ai-video-generators",
    ],
    featuredTools: ["chatgpt", "claude", "grammarly", "gamma"],
  },
  {
    slug: "data-analysts",
    title: "AI Tools for Data Analysts",
    description:
      "AI tools for data analysis, visualization, reporting, and business intelligence. Work with data faster and smarter.",
    metaTitle: "Best AI Tools for Data Analysts (2026): Top Picks",
    metaDescription:
      "The best AI data analytics tools. Tableau AI, Power BI, Julius AI, and more compared with real scores.",
    categories: ["ai-data-analytics", "ai-chatbots", "ai-business-productivity"],
  },
  {
    slug: "ecommerce",
    title: "AI Tools for E-commerce",
    description:
      "AI tools for product photography, copywriting, customer service, marketing, and store optimization.",
    metaTitle: "Best AI Tools for E-commerce (2026): Top Picks",
    metaDescription:
      "The best AI tools for e-commerce. Photo editing, copywriting, SEO, and automation tools ranked.",
    categories: [
      "ai-photo-editing",
      "ai-writing-tools",
      "ai-seo-tools",
      "ai-marketing-tools",
      "ai-design-tools",
    ],
  },
  {
    slug: "hr",
    title: "AI Tools for HR & Recruiting",
    description:
      "AI tools for hiring, onboarding, employee engagement, scheduling, and HR automation.",
    metaTitle: "Best AI Tools for HR (2026): Top Recruiting & HR Picks",
    metaDescription:
      "The best AI tools for HR and recruiting in 2026. Automation, scheduling, writing, and voice tools compared.",
    categories: [
      "ai-business-productivity",
      "ai-automation-workflow",
      "ai-writing-tools",
      "ai-voice-agents",
    ],
  },
];

export function getProfessionBySlug(slug: string): Profession | undefined {
  return professions.find((p) => p.slug === slug);
}
