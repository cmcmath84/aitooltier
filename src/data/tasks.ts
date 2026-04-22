import { ToolReview } from "@/lib/types";
import { tools } from "./tools";

export type TaskIntent =
  | "write"
  | "code"
  | "design"
  | "create-media"
  | "analyze"
  | "automate";

export const INTENT_LABELS: Record<TaskIntent, string> = {
  write: "Write",
  code: "Code",
  design: "Design",
  "create-media": "Create Media",
  analyze: "Analyze",
  automate: "Automate",
};

export interface Task {
  slug: string;
  name: string;
  searchHeadline: string;
  description: string;
  intent: TaskIntent;
  primaryCategories: string[];
  includeTools?: string[];
  excludeTools?: string[];
}

// Initial task set: each task maps to one or more AIToolTier categories,
// plus optional per-tool overrides when the category itself is too broad or
// too narrow for the search intent.
export const tasks: Task[] = [
  // ---------------- Write ----------------
  {
    slug: "write-a-cold-email",
    name: "Write a cold email",
    searchHeadline: "AI to write cold emails",
    description:
      "Tools that draft outbound sales, partnership, or pitch emails with the right tone, hooks, and personalization.",
    intent: "write",
    primaryCategories: ["ai-writing-tools", "ai-marketing-tools"],
    includeTools: ["chatgpt", "claude", "gemini"],
  },
  {
    slug: "write-a-blog-post",
    name: "Write a blog post",
    searchHeadline: "AI to write blog posts",
    description:
      "Long-form writing assistants that draft full articles from an outline, brief, or research notes.",
    intent: "write",
    primaryCategories: ["ai-writing-tools", "ai-seo-tools"],
    includeTools: ["chatgpt", "claude", "gemini"],
  },
  {
    slug: "summarize-a-pdf",
    name: "Summarize a PDF",
    searchHeadline: "AI to summarize PDFs",
    description:
      "Tools that read a document and return key findings, executive summaries, or structured notes.",
    intent: "write",
    primaryCategories: ["ai-business-productivity"],
    includeTools: ["chatgpt", "claude", "gemini", "notebooklm"],
  },
  {
    slug: "rewrite-text",
    name: "Rewrite text",
    searchHeadline: "AI to rewrite or paraphrase text",
    description:
      "Paraphrasing and tone-adjustment tools for tightening, simplifying, or rephrasing existing writing.",
    intent: "write",
    primaryCategories: ["ai-writing-tools"],
    includeTools: ["chatgpt", "claude"],
  },
  {
    slug: "write-a-resume",
    name: "Write a resume",
    searchHeadline: "AI to write and tailor resumes",
    description:
      "Resume and cover-letter writers, including tools that tailor content to a specific job description.",
    intent: "write",
    primaryCategories: ["ai-writing-tools"],
    includeTools: ["chatgpt", "claude", "gemini", "tailor"],
  },
  {
    slug: "write-seo-content",
    name: "Write SEO content",
    searchHeadline: "AI to write SEO-optimized content",
    description:
      "Content tools that target search keywords, generate briefs, and optimize for SERP performance.",
    intent: "write",
    primaryCategories: ["ai-seo-tools", "ai-writing-tools"],
  },
  {
    slug: "proofread-text",
    name: "Proofread text",
    searchHeadline: "AI to proofread writing",
    description:
      "Grammar, style, and clarity checkers that go beyond spell-check to catch logic and consistency issues.",
    intent: "write",
    primaryCategories: ["ai-writing-tools"],
    includeTools: ["chatgpt", "claude"],
  },

  // ---------------- Code ----------------
  {
    slug: "debug-code",
    name: "Debug code",
    searchHeadline: "AI to debug code",
    description:
      "Coding assistants that read a stack trace or failing test and propose a fix with a reasoned explanation.",
    intent: "code",
    primaryCategories: ["ai-code-assistants"],
    includeTools: ["chatgpt", "claude", "gemini"],
  },
  {
    slug: "explain-code",
    name: "Explain code",
    searchHeadline: "AI to explain unfamiliar code",
    description:
      "Tools that walk through what a function, file, or repo actually does in plain English.",
    intent: "code",
    primaryCategories: ["ai-code-assistants"],
    includeTools: ["chatgpt", "claude", "gemini"],
  },
  {
    slug: "write-unit-tests",
    name: "Write unit tests",
    searchHeadline: "AI to write unit tests",
    description:
      "Tools that generate unit tests, including edge cases and mocks, from existing source code.",
    intent: "code",
    primaryCategories: ["ai-code-assistants"],
  },
  {
    slug: "refactor-code",
    name: "Refactor code",
    searchHeadline: "AI to refactor code",
    description:
      "Assistants for renaming, extracting, and restructuring code without changing its behavior.",
    intent: "code",
    primaryCategories: ["ai-code-assistants"],
  },
  {
    slug: "autocomplete-code",
    name: "Autocomplete code",
    searchHeadline: "AI code autocomplete",
    description:
      "Inline completion engines that suggest the next few tokens, lines, or whole functions while you type.",
    intent: "code",
    primaryCategories: ["ai-code-assistants"],
  },
  {
    slug: "build-a-web-app",
    name: "Build a web app",
    searchHeadline: "AI to build a web app from scratch",
    description:
      "Agentic builders that go from prompt to shipped full-stack app, including auth, database, and deploy.",
    intent: "code",
    primaryCategories: ["ai-website-builders", "ai-code-assistants"],
  },
  {
    slug: "review-a-pull-request",
    name: "Review a pull request",
    searchHeadline: "AI to review a pull request",
    description:
      "Code-review copilots that critique a diff for correctness, style, security, and missing tests.",
    intent: "code",
    primaryCategories: ["ai-code-assistants"],
  },
  {
    slug: "build-an-ai-chatbot",
    name: "Build an AI chatbot",
    searchHeadline: "AI to build a chatbot",
    description:
      "Platforms for wiring an LLM into a custom chatbot with knowledge, tools, and deployment surfaces.",
    intent: "code",
    primaryCategories: ["ai-code-assistants", "ai-automation-workflow"],
  },

  // ---------------- Design ----------------
  {
    slug: "generate-a-logo",
    name: "Generate a logo",
    searchHeadline: "AI to generate a logo",
    description:
      "Tools that create logo concepts from a brand brief or prompt, including vector-ready outputs.",
    intent: "design",
    primaryCategories: ["ai-image-generators", "ai-design-tools"],
    includeTools: ["looka", "canva-ai"],
  },
  {
    slug: "design-a-poster",
    name: "Design a poster",
    searchHeadline: "AI to design a poster",
    description:
      "Tools that produce layout-aware posters and flyers with legible typography and on-brand styling.",
    intent: "design",
    primaryCategories: ["ai-design-tools", "ai-image-generators"],
  },
  {
    slug: "create-social-media-graphics",
    name: "Create social media graphics",
    searchHeadline: "AI to create social media graphics",
    description:
      "Tools for Instagram, LinkedIn, X, and TikTok post graphics with platform-appropriate aspect ratios.",
    intent: "design",
    primaryCategories: ["ai-design-tools", "ai-image-generators"],
  },
  {
    slug: "edit-photos",
    name: "Edit photos",
    searchHeadline: "AI to edit photos",
    description:
      "Tools for retouching, inpainting, removing backgrounds, and fixing lighting on real photos.",
    intent: "design",
    primaryCategories: ["ai-photo-editing"],
  },
  {
    slug: "upscale-an-image",
    name: "Upscale an image",
    searchHeadline: "AI image upscalers",
    description:
      "Super-resolution tools that enlarge and sharpen low-resolution images without visible artifacts.",
    intent: "design",
    primaryCategories: ["ai-photo-editing"],
    includeTools: ["topaz-ai", "magnific-ai"],
  },
  {
    slug: "generate-a-presentation",
    name: "Generate a presentation",
    searchHeadline: "AI to generate a presentation",
    description:
      "Slide-deck builders that turn a prompt or outline into a full presentation with design, text, and layout.",
    intent: "design",
    primaryCategories: ["ai-presentation-tools"],
  },

  // ---------------- Create Media ----------------
  {
    slug: "generate-a-video",
    name: "Generate a video",
    searchHeadline: "AI to generate a video",
    description:
      "Text-to-video and image-to-video models that produce short clips from a prompt or reference frame.",
    intent: "create-media",
    primaryCategories: ["ai-video-generators"],
  },
  {
    slug: "dub-a-video",
    name: "Dub a video",
    searchHeadline: "AI to dub videos in another language",
    description:
      "Tools that translate and lip-sync video narration into a different language while preserving voice.",
    intent: "create-media",
    primaryCategories: ["ai-voice-audio", "ai-video-generators"],
    includeTools: ["elevenlabs", "heygen"],
  },
  {
    slug: "clone-a-voice",
    name: "Clone a voice",
    searchHeadline: "AI to clone a voice",
    description:
      "Voice-cloning tools that reproduce a target speaker from a short audio sample, with consent controls.",
    intent: "create-media",
    primaryCategories: ["ai-voice-audio"],
  },
  {
    slug: "transcribe-audio",
    name: "Transcribe audio",
    searchHeadline: "AI to transcribe audio",
    description:
      "Speech-to-text tools with speaker separation, punctuation, and timestamped output.",
    intent: "analyze",
    primaryCategories: ["ai-voice-audio", "ai-business-productivity"],
  },
  {
    slug: "generate-music",
    name: "Generate music",
    searchHeadline: "AI to generate music",
    description:
      "Music-generation models that produce original tracks with lyrics, vocals, or instrumental stems.",
    intent: "create-media",
    primaryCategories: ["ai-music-generators"],
  },
  {
    slug: "create-an-avatar-video",
    name: "Create an avatar video",
    searchHeadline: "AI to create avatar videos",
    description:
      "Tools that combine a text script with a synthetic presenter to generate a talking-head video.",
    intent: "create-media",
    primaryCategories: ["ai-video-generators"],
    includeTools: ["heygen", "synthesia", "captions-ai"],
  },

  // ---------------- Analyze ----------------
  {
    slug: "research-a-topic",
    name: "Research a topic",
    searchHeadline: "AI to research a topic",
    description:
      "Research assistants that gather, cite, and synthesize sources across the web into a structured answer.",
    intent: "analyze",
    primaryCategories: ["ai-chatbots", "ai-llms"],
    includeTools: ["perplexity", "notebooklm", "chatgpt", "claude", "gemini"],
  },
  {
    slug: "analyze-a-spreadsheet",
    name: "Analyze a spreadsheet",
    searchHeadline: "AI to analyze a spreadsheet",
    description:
      "Tools that answer natural-language questions about tabular data and produce charts or pivots.",
    intent: "analyze",
    primaryCategories: ["ai-data-analytics", "ai-business-productivity"],
    includeTools: ["julius-ai", "chatgpt", "claude"],
  },
  {
    slug: "answer-questions-from-documents",
    name: "Answer questions from documents",
    searchHeadline: "AI to answer questions from documents",
    description:
      "Chat-with-your-docs tools that build a retrieval layer over PDFs, transcripts, and knowledge bases.",
    intent: "analyze",
    primaryCategories: ["ai-business-productivity", "ai-llms"],
    includeTools: ["notebooklm", "chatgpt", "claude"],
  },
  {
    slug: "translate-text",
    name: "Translate text",
    searchHeadline: "AI to translate text and documents",
    description:
      "Machine-translation tools with context-aware wording, formatting preservation, and multi-language support.",
    intent: "analyze",
    primaryCategories: ["ai-translation"],
    includeTools: ["deepl", "chatgpt", "claude", "gemini"],
  },
  {
    slug: "detect-ai-written-text",
    name: "Detect AI-written text",
    searchHeadline: "AI to detect AI-written text",
    description:
      "Classifiers that estimate whether a given passage was written by a human or generated by an LLM.",
    intent: "analyze",
    primaryCategories: ["ai-detection-tools"],
  },

  // ---------------- Automate ----------------
  {
    slug: "automate-workflows",
    name: "Automate workflows",
    searchHeadline: "AI to automate workflows",
    description:
      "Workflow builders that chain triggers, actions, and AI steps to automate recurring business tasks.",
    intent: "automate",
    primaryCategories: ["ai-automation-workflow"],
  },
  {
    slug: "run-a-research-agent",
    name: "Run a research agent",
    searchHeadline: "AI research agent",
    description:
      "Autonomous agents that plan, browse, synthesize, and report on a multi-step research question.",
    intent: "automate",
    primaryCategories: ["ai-personal-agents", "ai-agent-orchestration"],
  },
  {
    slug: "browse-the-web",
    name: "Browse the web",
    searchHeadline: "AI browser agents",
    description:
      "Agents that drive a real or headless browser to click, fill, and complete multi-step web tasks.",
    intent: "automate",
    primaryCategories: ["ai-personal-agents"],
  },
  {
    slug: "make-phone-calls",
    name: "Make phone calls",
    searchHeadline: "AI to make phone calls",
    description:
      "Voice-agent platforms that call real phone numbers, run a conversation, and hand off or log outcomes.",
    intent: "automate",
    primaryCategories: ["ai-voice-agents"],
  },
  {
    slug: "orchestrate-agents",
    name: "Orchestrate multiple agents",
    searchHeadline: "AI to orchestrate multiple agents",
    description:
      "Frameworks for coordinating teams of specialized agents on a shared plan or task graph.",
    intent: "automate",
    primaryCategories: ["ai-agent-orchestration"],
  },
];

export function getTaskBySlug(slug: string): Task | undefined {
  return tasks.find((t) => t.slug === slug);
}

export function getToolsForTask(task: Task): ToolReview[] {
  const matches = new Map<string, ToolReview>();

  // Category-driven matches
  for (const tool of tools) {
    if (tool.status === "deprecated") continue;
    const inCategory =
      task.primaryCategories.includes(tool.category) ||
      tool.subcategories?.some((sc) => task.primaryCategories.includes(sc));
    if (inCategory) matches.set(tool.slug, tool);
  }

  // Explicit additions
  if (task.includeTools) {
    for (const slug of task.includeTools) {
      const t = tools.find((x) => x.slug === slug);
      if (t && t.status !== "deprecated") matches.set(t.slug, t);
    }
  }

  // Explicit exclusions
  if (task.excludeTools) {
    for (const slug of task.excludeTools) matches.delete(slug);
  }

  return Array.from(matches.values()).sort(
    (a, b) => b.scores.overall - a.scores.overall,
  );
}

export function getTasksByIntent(intent: TaskIntent): Task[] {
  return tasks.filter((t) => t.intent === intent);
}
