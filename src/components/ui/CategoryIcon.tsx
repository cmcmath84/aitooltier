import {
  ImageIcon,
  Video,
  PenTool,
  Brain,
  MessageCircle,
  Code2,
  Mic,
  TrendingUp,
  Palette,
  Zap,
  Search,
  Music,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface CategoryIconConfig {
  icon: LucideIcon;
  bg: string;
  text: string;
  ring: string;
}

const iconMap: Record<string, CategoryIconConfig> = {
  "ai-image-generators": {
    icon: ImageIcon,
    bg: "bg-violet-100",
    text: "text-violet-600",
    ring: "ring-violet-200",
  },
  "ai-video-generators": {
    icon: Video,
    bg: "bg-rose-100",
    text: "text-rose-600",
    ring: "ring-rose-200",
  },
  "ai-writing-tools": {
    icon: PenTool,
    bg: "bg-sky-100",
    text: "text-sky-600",
    ring: "ring-sky-200",
  },
  "ai-llms": {
    icon: Brain,
    bg: "bg-purple-100",
    text: "text-purple-600",
    ring: "ring-purple-200",
  },
  "ai-chatbots": {
    icon: MessageCircle,
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    ring: "ring-emerald-200",
  },
  "ai-code-assistants": {
    icon: Code2,
    bg: "bg-amber-100",
    text: "text-amber-600",
    ring: "ring-amber-200",
  },
  "ai-voice-audio": {
    icon: Mic,
    bg: "bg-pink-100",
    text: "text-pink-600",
    ring: "ring-pink-200",
  },
  "ai-marketing-tools": {
    icon: TrendingUp,
    bg: "bg-orange-100",
    text: "text-orange-600",
    ring: "ring-orange-200",
  },
  "ai-design-tools": {
    icon: Palette,
    bg: "bg-fuchsia-100",
    text: "text-fuchsia-600",
    ring: "ring-fuchsia-200",
  },
  "ai-business-productivity": {
    icon: Zap,
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    ring: "ring-yellow-200",
  },
  "ai-seo-tools": {
    icon: Search,
    bg: "bg-teal-100",
    text: "text-teal-600",
    ring: "ring-teal-200",
  },
  "ai-music-generators": {
    icon: Music,
    bg: "bg-indigo-100",
    text: "text-indigo-600",
    ring: "ring-indigo-200",
  },
  "ai-data-analytics": {
    icon: BarChart3,
    bg: "bg-cyan-100",
    text: "text-cyan-600",
    ring: "ring-cyan-200",
  },
};

interface CategoryIconProps {
  slug: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { container: "h-8 w-8", icon: 16 },
  md: { container: "h-10 w-10", icon: 20 },
  lg: { container: "h-14 w-14", icon: 28 },
};

export default function CategoryIcon({
  slug,
  size = "md",
}: CategoryIconProps) {
  const config = iconMap[slug];
  if (!config) return null;

  const Icon = config.icon;
  const s = sizes[size];

  return (
    <div
      className={`flex items-center justify-center rounded-xl ring-1 ${config.bg} ${config.ring} ${s.container}`}
    >
      <Icon size={s.icon} className={config.text} strokeWidth={1.75} />
    </div>
  );
}

export function getCategoryColors(slug: string) {
  return iconMap[slug] || { bg: "bg-gray-100", text: "text-gray-600", ring: "ring-gray-200" };
}
