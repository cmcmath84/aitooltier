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
  {
    slug: "ai-translation",
    name: "AI Translation",
    description:
      "AI-powered translation tools for documents, websites, and real-time communication.",
    icon: "🌐",
  },
  {
    slug: "ai-detection-tools",
    name: "AI Detection Tools",
    description:
      "AI content detectors and plagiarism checkers. Identify AI-generated text with accuracy scores and reports.",
    icon: "🔎",
  },
  {
    slug: "ai-presentation-tools",
    name: "AI Presentation Tools",
    description:
      "Create slides, decks, and visual presentations with AI. Turn ideas into polished presentations in minutes.",
    icon: "📽️",
  },
  {
    slug: "ai-website-builders",
    name: "AI Website Builders",
    description:
      "Build websites and web apps with AI. From landing pages to full-stack applications, no coding required.",
    icon: "🌍",
  },
  {
    slug: "ai-photo-editing",
    name: "AI Photo Editing",
    description:
      "AI-powered photo enhancement, upscaling, background removal, and editing tools.",
    icon: "📸",
  },
  {
    slug: "ai-automation-workflow",
    name: "AI Automation & Workflow",
    description:
      "Automate tasks and build workflows with AI. Connect apps, trigger actions, and eliminate repetitive work.",
    icon: "🔄",
  },
  {
    slug: "ai-voice-agents",
    name: "AI Voice & Phone Agents",
    description:
      "AI-powered phone agents, receptionists, and voice bots that handle calls and appointments automatically.",
    icon: "📞",
  },
  {
    slug: "ai-local-models",
    name: "Local & Open-Weight LLMs",
    description:
      "Open-weight and self-hostable large language models. Chinese and American labs compared — Qwen, DeepSeek, GLM, Kimi, Llama, Gemma, Mistral, Nemotron, MiniMax, Falcon. Benchmarks, pricing, and hardware requirements (min/mid/max) for running each model locally.",
    icon: "💾",
    metaTitle: "Best Local & Open-Weight LLMs 2026: Qwen, DeepSeek, Llama, GLM Compared",
    metaDescription: "Tier-ranked open-weight LLMs for 2026. DeepSeek V3.2, Qwen3, Kimi K2.5, GLM-4.6, Llama 4, Gemma 4, Mistral, Nemotron, MiniMax, Falcon. Hardware requirements, benchmarks, pricing.",
  },
  {
    slug: "ai-personal-agents",
    name: "AI Personal Agents",
    description:
      "Persistent personal AI agents that you talk to over messaging (Telegram, Discord, Signal, WhatsApp) or Max-tier browsers. They remember context across sessions, use tools on your behalf, and run tasks unattended. Self-hosted (OpenClaw, Hermes) or hosted (Manus AI, Perplexity Computer).",
    icon: "🤖",
    metaTitle: "AI Personal Agents 2026: OpenClaw, Hermes, Manus, Perplexity Computer Compared",
    metaDescription: "Tier-ranked personal AI agents for 2026. OpenClaw, Hermes Agent, Manus AI, Perplexity Computer. Scores, pricing, security, self-hosted vs hosted trade-offs.",
  },
  {
    slug: "ai-agent-orchestration",
    name: "AI Agent Orchestration",
    description:
      "Frameworks and runtimes for coordinating multiple AI agents. Build multi-agent systems, run an 'AI company' with budgets and governance, or design stateful human-in-the-loop workflows. Covers Paperclip, CrewAI, and LangGraph.",
    icon: "🕸️",
    metaTitle: "AI Agent Orchestration 2026: Paperclip, CrewAI, LangGraph Compared",
    metaDescription: "Tier-ranked AI agent orchestration frameworks for 2026. Paperclip, CrewAI, LangGraph. Multi-agent systems, budgets, governance, stateful workflows. Real trade-offs.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
