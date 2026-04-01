import { ToolReview } from "@/lib/types";

// AI Image Generators
import { midjourney } from "./midjourney";
import { dalle } from "./dalle";
import { stableDiffusion } from "./stable-diffusion";
import { leonardoAi } from "./leonardo-ai";
import { adobeFirefly } from "./adobe-firefly";
import { ideogram } from "./ideogram";
import { flux } from "./flux";

// AI LLMs & Models
import { claude } from "./claude";
import { gemini } from "./gemini";
import { llama } from "./llama";
import { mistral } from "./mistral";
import { deepseek } from "./deepseek";
import { grok } from "./grok";

// AI Writing Tools
import { jasper } from "./jasper";
import { copyAi } from "./copy-ai";
import { grammarly } from "./grammarly";

// AI Video Generators
import { runway } from "./runway";
import { pika } from "./pika";
import { sora } from "./sora";
import { heygen } from "./heygen";
import { klingAi } from "./kling-ai";
import { veo } from "./veo";
import { luma } from "./luma";

// AI Code Assistants
import { githubCopilot } from "./github-copilot";
import { cursor } from "./cursor";
import { windsurf } from "./windsurf";
import { tabnine } from "./tabnine";
import { claudeCode } from "./claude-code";
import { lovable } from "./lovable";
import { devin } from "./devin";

// AI Chatbots & Assistants
import { chatgpt } from "./chatgpt";
import { perplexity } from "./perplexity";
import { microsoftCopilot } from "./microsoft-copilot";
import { poe } from "./poe";
import { notebookLm } from "./notebooklm";

// AI Voice & Audio
import { elevenlabs } from "./elevenlabs";
import { murfAi } from "./murf-ai";
import { descript } from "./descript";

// AI Music Generators
import { suno } from "./suno";
import { udio } from "./udio";
import { aiva } from "./aiva";

// AI Business Productivity
import { notionAi } from "./notion-ai";
import { otterAi } from "./otter-ai";
import { fireflies } from "./fireflies";

// AI Marketing Tools
import { hubspotAi } from "./hubspot-ai";
import { synthesia } from "./synthesia";

// AI Data Analytics
import { juliusAi } from "./julius-ai";
import { tableauAi } from "./tableau-ai";
import { powerBi } from "./power-bi";

// AI Design Tools
import { canvaAi } from "./canva-ai";
import { figmaAi } from "./figma-ai";
import { looka } from "./looka";
import { gamma } from "./gamma";

// AI SEO Tools
import { surferSeo } from "./surfer-seo";
import { ahrefs } from "./ahrefs";
import { semrush } from "./semrush";

// AI Translation
import { deepl } from "./deepl";

export const tools: ToolReview[] = [
  // Image Generators
  midjourney,
  dalle,
  stableDiffusion,
  leonardoAi,
  adobeFirefly,
  ideogram,
  flux,
  // LLMs
  claude,
  gemini,
  llama,
  mistral,
  deepseek,
  grok,
  // Writing
  jasper,
  copyAi,
  grammarly,
  // Video
  runway,
  pika,
  sora,
  heygen,
  klingAi,
  veo,
  luma,
  // Code
  githubCopilot,
  cursor,
  windsurf,
  tabnine,
  claudeCode,
  lovable,
  devin,
  // Chatbots
  chatgpt,
  perplexity,
  microsoftCopilot,
  poe,
  notebookLm,
  // Voice
  elevenlabs,
  murfAi,
  descript,
  // Music
  suno,
  udio,
  aiva,
  // Business Productivity
  notionAi,
  otterAi,
  fireflies,
  // Marketing
  hubspotAi,
  synthesia,
  // Data Analytics
  juliusAi,
  tableauAi,
  powerBi,
  // Design
  canvaAi,
  figmaAi,
  looka,
  gamma,
  // SEO
  surferSeo,
  ahrefs,
  semrush,
  // Translation
  deepl,
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
