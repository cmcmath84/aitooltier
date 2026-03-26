import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "ai-image-generators",
    name: "AI Image Generators",
    description:
      "Create images, art, and graphics from text prompts. Compare the best AI image generation tools.",
    icon: "🎨",
  },
  {
    slug: "ai-video-generators",
    name: "AI Video Generators",
    description:
      "Generate and edit videos with AI. From text-to-video to AI-powered editing tools.",
    icon: "🎬",
  },
  {
    slug: "ai-writing-tools",
    name: "AI Writing Tools",
    description:
      "AI-powered writing assistants for content, copy, emails, and more.",
    icon: "✍️",
  },
  {
    slug: "ai-llms",
    name: "AI LLMs & Models",
    description:
      "Large language models compared. Claude, GPT, Gemini, Llama, Mistral and more — benchmarks, pricing, and real-world performance.",
    icon: "🧠",
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots & Assistants",
    description:
      "General-purpose AI chatbots for conversation, research, and productivity.",
    icon: "💬",
  },
  {
    slug: "ai-code-assistants",
    name: "AI Code Assistants",
    description:
      "AI tools that help you write, debug, and review code faster.",
    icon: "💻",
  },
  {
    slug: "ai-voice-audio",
    name: "AI Voice & Audio",
    description:
      "Text-to-speech, voice cloning, transcription, and audio generation tools.",
    icon: "🎙️",
  },
  {
    slug: "ai-marketing-tools",
    name: "AI Marketing Tools",
    description:
      "AI-powered tools for SEO, ads, social media, and email marketing.",
    icon: "📈",
  },
  {
    slug: "ai-design-tools",
    name: "AI Design Tools",
    description:
      "AI tools for graphic design, UI/UX, presentations, and creative work.",
    icon: "🎨",
  },
  {
    slug: "ai-business-productivity",
    name: "AI Business & Productivity",
    description:
      "AI tools for project management, automation, meetings, and workflows.",
    icon: "⚡",
  },
  {
    slug: "ai-seo-tools",
    name: "AI SEO Tools",
    description:
      "AI-powered tools for keyword research, content optimization, and rank tracking.",
    icon: "🔍",
  },
  {
    slug: "ai-music-generators",
    name: "AI Music Generators",
    description:
      "Create music, beats, and soundtracks with AI. No musical experience needed.",
    icon: "🎵",
  },
  {
    slug: "ai-data-analytics",
    name: "AI Data & Analytics",
    description:
      "AI tools for data analysis, visualization, and business intelligence.",
    icon: "📊",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
