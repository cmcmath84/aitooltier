export interface UseCase {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  /** Category slugs to pull tools from */
  categories: string[];
  /** Specific tool slugs to always include (even if from other categories) */
  featuredTools?: string[];
}

export const useCases: UseCase[] = [
  {
    slug: "coding",
    title: "Best AI for Coding",
    description:
      "AI tools that help developers write, debug, review, and ship code faster. From inline autocomplete to full autonomous agents.",
    metaTitle: "Best AI for Coding (2026): Top Tools Ranked & Compared",
    metaDescription:
      "The best AI coding tools in 2026, ranked by real scores. GitHub Copilot, Cursor, Claude Code, and more compared side by side.",
    categories: ["ai-code-assistants"],
    featuredTools: ["chatgpt", "claude"],
  },
  {
    slug: "writing",
    title: "Best AI for Writing",
    description:
      "AI writing assistants for articles, marketing copy, emails, fiction, and more. Ranked by output quality, ease of use, and value.",
    metaTitle: "Best AI for Writing (2026): Top Writing Tools Ranked",
    metaDescription:
      "Compare the best AI writing tools in 2026. Jasper, Copy.ai, Grammarly, QuillBot and more — honest reviews and scores.",
    categories: ["ai-writing-tools"],
    featuredTools: ["chatgpt", "claude", "gemini"],
  },
  {
    slug: "image-generation",
    title: "Best AI Image Generators",
    description:
      "Create images, art, and graphics from text prompts. The top AI image generators ranked by output quality, features, and price.",
    metaTitle: "Best AI Image Generators (2026): Top Picks Ranked",
    metaDescription:
      "The best AI image generators in 2026. Midjourney, DALL-E, Stable Diffusion and more compared with real scores and pricing.",
    categories: ["ai-image-generators"],
  },
  {
    slug: "video-creation",
    title: "Best AI Video Generators",
    description:
      "AI video creation tools for marketing, social media, and content. From text-to-video to AI editing and clipping.",
    metaTitle: "Best AI Video Generators (2026): Top Tools Compared",
    metaDescription:
      "Compare the best AI video generators. Runway, Sora, Kling AI, Opus Clip, and more — ranked by quality and value.",
    categories: ["ai-video-generators"],
  },
  {
    slug: "presentations",
    title: "Best AI for Presentations",
    description:
      "AI presentation makers that turn ideas into polished slide decks in minutes. Ranked by design quality, speed, and ease of use.",
    metaTitle: "Best AI for Presentations (2026): Slide Makers Ranked",
    metaDescription:
      "The best AI presentation tools in 2026. Gamma, Beautiful.ai, Napkin AI, and more compared with honest scores.",
    categories: ["ai-presentation-tools", "ai-design-tools"],
  },
  {
    slug: "music",
    title: "Best AI Music Generators",
    description:
      "Create music, beats, and soundtracks with AI. No musical experience needed. Ranked by output quality and licensing terms.",
    metaTitle: "Best AI Music Generators (2026): Top Tools Ranked",
    metaDescription:
      "Compare the best AI music generators. Suno, Udio, AIVA, and more ranked with real scores and pricing.",
    categories: ["ai-music-generators"],
  },
  {
    slug: "chatbots",
    title: "Best AI Chatbots",
    description:
      "General-purpose AI chatbots for conversation, research, brainstorming, and daily tasks. Ranked by intelligence, speed, and value.",
    metaTitle: "Best AI Chatbots (2026): Top Assistants Ranked",
    metaDescription:
      "The best AI chatbots in 2026. ChatGPT, Claude, Gemini, Perplexity and more — compared with real scores.",
    categories: ["ai-chatbots", "ai-llms"],
  },
  {
    slug: "seo",
    title: "Best AI SEO Tools",
    description:
      "AI-powered SEO tools for keyword research, content optimization, rank tracking, and competitive analysis.",
    metaTitle: "Best AI SEO Tools (2026): Top Picks for Rankings",
    metaDescription:
      "Compare the best AI SEO tools. Surfer SEO, Ahrefs, SEMrush and more ranked by features, accuracy, and value.",
    categories: ["ai-seo-tools"],
  },
  {
    slug: "voice-audio",
    title: "Best AI Voice & Audio Tools",
    description:
      "Text-to-speech, voice cloning, transcription, and audio editing powered by AI. Ranked by voice quality and features.",
    metaTitle: "Best AI Voice & Audio Tools (2026): Top Picks Ranked",
    metaDescription:
      "The best AI voice and audio tools in 2026. ElevenLabs, Speechify, Descript, and more compared.",
    categories: ["ai-voice-audio"],
  },
  {
    slug: "photo-editing",
    title: "Best AI Photo Editing Tools",
    description:
      "AI-powered photo enhancement, upscaling, background removal, and editing tools. Ranked by output quality and ease of use.",
    metaTitle: "Best AI Photo Editing Tools (2026): Top Picks Ranked",
    metaDescription:
      "The best AI photo editing tools. Topaz AI, Magnific AI, PhotoRoom, and more compared with real scores.",
    categories: ["ai-photo-editing"],
  },
  {
    slug: "website-building",
    title: "Best AI Website Builders",
    description:
      "Build websites and web apps with AI in minutes. From landing pages to full-stack applications. No coding required.",
    metaTitle: "Best AI Website Builders (2026): Top Tools Ranked",
    metaDescription:
      "The best AI website builders. Bolt.new, v0, Framer AI, and more compared by features, ease of use, and output quality.",
    categories: ["ai-website-builders"],
  },
  {
    slug: "automation",
    title: "Best AI Automation & Workflow Tools",
    description:
      "Automate repetitive tasks and build complex workflows with AI. Connect apps, trigger actions, and save hours every week.",
    metaTitle: "Best AI Automation Tools (2026): Workflow Tools Ranked",
    metaDescription:
      "The best AI automation tools in 2026. n8n, Zapier AI, and more compared by features, pricing, and ease of use.",
    categories: ["ai-automation-workflow"],
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}
