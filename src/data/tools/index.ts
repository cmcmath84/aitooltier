import { ToolReview } from "@/lib/types";

// AI Image Generators
import { midjourney } from "./midjourney";
import { dalle } from "./dalle";
import { stableDiffusion } from "./stable-diffusion";
import { leonardoAi } from "./leonardo-ai";
import { adobeFirefly } from "./adobe-firefly";
import { ideogram } from "./ideogram";

// AI LLMs & Models
import { claude } from "./claude";
import { gpt4 } from "./gpt4";
import { gemini } from "./gemini";
import { llama } from "./llama";
import { mistral } from "./mistral";

// AI Writing Tools
import { jasper } from "./jasper";
import { copyAi } from "./copy-ai";
import { grammarly } from "./grammarly";

// AI Video Generators
import { runway } from "./runway";
import { pika } from "./pika";

// AI Code Assistants
import { githubCopilot } from "./github-copilot";
import { cursor } from "./cursor";

// AI Chatbots & Assistants
import { chatgpt } from "./chatgpt";
import { perplexity } from "./perplexity";

// AI Voice & Audio
import { elevenlabs } from "./elevenlabs";

// AI Design Tools
import { canvaAi } from "./canva-ai";

// AI SEO Tools
import { surferSeo } from "./surfer-seo";

export const tools: ToolReview[] = [
  // Image Generators
  midjourney,
  dalle,
  stableDiffusion,
  leonardoAi,
  adobeFirefly,
  ideogram,
  // LLMs
  claude,
  gpt4,
  gemini,
  llama,
  mistral,
  // Writing
  jasper,
  copyAi,
  grammarly,
  // Video
  runway,
  pika,
  // Code
  githubCopilot,
  cursor,
  // Chatbots
  chatgpt,
  perplexity,
  // Voice
  elevenlabs,
  // Design
  canvaAi,
  // SEO
  surferSeo,
];

export function getToolBySlug(slug: string): ToolReview | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): ToolReview[] {
  return tools.filter((t) => t.category === categorySlug);
}

export function getAllToolSlugs(): string[] {
  return tools.map((t) => t.slug);
}
