import {
  Sparkles,
  Paintbrush,
  Camera,
  Layers,
  Flame,
  Type,
  Brain,
  MessageSquare,
  Globe,
  Server,
  Wind,
  PenLine,
  Copy,
  Clapperboard,
  Play,
  Code2,
  MousePointer2,
  Search,
  BarChart3,
  Mic,
  FileText,
  Wand2,
  Bot,
  Compass,
  Headphones,
  Scissors,
  Palette,
  Layout,
  type LucideIcon,
} from "lucide-react";

interface ToolIconConfig {
  icon: LucideIcon;
  bg: string;
  text: string;
}

const toolIcons: Record<string, ToolIconConfig> = {
  // Image Generators
  midjourney: { icon: Sparkles, bg: "bg-indigo-600", text: "text-white" },
  "dall-e": { icon: Paintbrush, bg: "bg-emerald-600", text: "text-white" },
  "stable-diffusion": { icon: Layers, bg: "bg-purple-700", text: "text-white" },
  "leonardo-ai": { icon: Camera, bg: "bg-violet-500", text: "text-white" },
  "adobe-firefly": { icon: Flame, bg: "bg-red-600", text: "text-white" },
  ideogram: { icon: Type, bg: "bg-sky-600", text: "text-white" },

  // LLMs
  claude: { icon: Brain, bg: "bg-orange-500", text: "text-white" },
  "gpt-4": { icon: MessageSquare, bg: "bg-teal-600", text: "text-white" },
  gemini: { icon: Globe, bg: "bg-blue-600", text: "text-white" },
  llama: { icon: Server, bg: "bg-blue-800", text: "text-white" },
  mistral: { icon: Wind, bg: "bg-orange-600", text: "text-white" },

  // Writing
  jasper: { icon: PenLine, bg: "bg-rose-600", text: "text-white" },
  "copy-ai": { icon: Copy, bg: "bg-fuchsia-600", text: "text-white" },
  grammarly: { icon: FileText, bg: "bg-green-600", text: "text-white" },
  writesonic: { icon: Wand2, bg: "bg-blue-500", text: "text-white" },

  // Video
  runway: { icon: Clapperboard, bg: "bg-cyan-700", text: "text-white" },
  pika: { icon: Play, bg: "bg-pink-500", text: "text-white" },
  sora: { icon: Clapperboard, bg: "bg-gray-800", text: "text-white" },

  // Code
  "github-copilot": { icon: Code2, bg: "bg-gray-800", text: "text-white" },
  cursor: { icon: MousePointer2, bg: "bg-blue-700", text: "text-white" },

  // Chatbots
  chatgpt: { icon: Bot, bg: "bg-teal-500", text: "text-white" },
  perplexity: { icon: Compass, bg: "bg-cyan-600", text: "text-white" },

  // Voice/Audio
  elevenlabs: { icon: Mic, bg: "bg-yellow-600", text: "text-white" },
  descript: { icon: Headphones, bg: "bg-green-700", text: "text-white" },

  // Marketing
  "surfer-seo": { icon: Search, bg: "bg-blue-500", text: "text-white" },
  "semrush-ai": { icon: BarChart3, bg: "bg-orange-500", text: "text-white" },

  // Design
  "canva-ai": { icon: Palette, bg: "bg-violet-600", text: "text-white" },
  "figma-ai": { icon: Layout, bg: "bg-rose-500", text: "text-white" },
};

interface ToolIconProps {
  slug: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { container: "h-7 w-7 rounded-lg text-[10px]", icon: 14 },
  md: { container: "h-9 w-9 rounded-xl text-xs", icon: 18 },
  lg: { container: "h-12 w-12 rounded-xl text-sm", icon: 24 },
};

export default function ToolIcon({ slug, name, size = "md" }: ToolIconProps) {
  const config = toolIcons[slug];
  const s = sizes[size];

  if (config) {
    const Icon = config.icon;
    return (
      <div
        className={`flex shrink-0 items-center justify-center shadow-sm ${config.bg} ${s.container}`}
      >
        <Icon size={s.icon} className={config.text} strokeWidth={2} />
      </div>
    );
  }

  // Fallback: colored initial badge
  const initial = name.charAt(0).toUpperCase();
  const colors = [
    "bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500",
    "bg-orange-500", "bg-teal-500", "bg-pink-500", "bg-indigo-500",
  ];
  const colorIndex = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % colors.length;

  return (
    <div
      className={`flex shrink-0 items-center justify-center font-bold text-white shadow-sm ${colors[colorIndex]} ${s.container}`}
    >
      {initial}
    </div>
  );
}
