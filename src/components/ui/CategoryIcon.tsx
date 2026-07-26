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
  Languages,
  ShieldCheck,
  Presentation,
  Globe,
  Camera,
  Workflow,
  Phone,
  Bot,
  Network,
  HardDrive,
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
    bg: "bg-violet-400/10",
    text: "text-violet-400",
    ring: "ring-violet-400/20",
  },
  "ai-video-generators": {
    icon: Video,
    bg: "bg-rose-400/10",
    text: "text-rose-400",
    ring: "ring-rose-400/20",
  },
  "ai-writing-tools": {
    icon: PenTool,
    bg: "bg-sky-400/10",
    text: "text-sky-400",
    ring: "ring-sky-400/20",
  },
  "ai-llms": {
    icon: Brain,
    bg: "bg-purple-400/10",
    text: "text-purple-400",
    ring: "ring-purple-400/20",
  },
  "ai-chatbots": {
    icon: MessageCircle,
    bg: "bg-emerald-400/10",
    text: "text-emerald-400",
    ring: "ring-emerald-400/20",
  },
  "ai-code-assistants": {
    icon: Code2,
    bg: "bg-amber-400/10",
    text: "text-amber-400",
    ring: "ring-amber-400/20",
  },
  "ai-voice-audio": {
    icon: Mic,
    bg: "bg-pink-400/10",
    text: "text-pink-400",
    ring: "ring-pink-400/20",
  },
  "ai-marketing-tools": {
    icon: TrendingUp,
    bg: "bg-orange-400/10",
    text: "text-orange-400",
    ring: "ring-orange-400/20",
  },
  "ai-design-tools": {
    icon: Palette,
    bg: "bg-fuchsia-400/10",
    text: "text-fuchsia-400",
    ring: "ring-fuchsia-400/20",
  },
  "ai-business-productivity": {
    icon: Zap,
    bg: "bg-yellow-400/10",
    text: "text-yellow-400",
    ring: "ring-yellow-400/20",
  },
  "ai-seo-tools": {
    icon: Search,
    bg: "bg-teal-400/10",
    text: "text-teal-400",
    ring: "ring-teal-400/20",
  },
  "ai-music-generators": {
    icon: Music,
    bg: "bg-indigo-400/10",
    text: "text-indigo-400",
    ring: "ring-indigo-400/20",
  },
  "ai-data-analytics": {
    icon: BarChart3,
    bg: "bg-cyan-400/10",
    text: "text-cyan-400",
    ring: "ring-cyan-400/20",
  },
  "ai-translation": {
    icon: Languages,
    bg: "bg-lime-400/10",
    text: "text-lime-400",
    ring: "ring-lime-400/20",
  },
  "ai-detection-tools": {
    icon: ShieldCheck,
    bg: "bg-red-400/10",
    text: "text-red-400",
    ring: "ring-red-400/20",
  },
  "ai-presentation-tools": {
    icon: Presentation,
    bg: "bg-blue-400/10",
    text: "text-blue-400",
    ring: "ring-blue-400/20",
  },
  "ai-website-builders": {
    icon: Globe,
    bg: "bg-green-400/10",
    text: "text-green-400",
    ring: "ring-green-400/20",
  },
  "ai-photo-editing": {
    icon: Camera,
    bg: "bg-rose-400/10",
    text: "text-rose-400",
    ring: "ring-rose-400/20",
  },
  "ai-automation-workflow": {
    icon: Workflow,
    bg: "bg-violet-400/10",
    text: "text-violet-400",
    ring: "ring-violet-400/20",
  },
  "ai-voice-agents": {
    icon: Phone,
    bg: "bg-emerald-400/10",
    text: "text-emerald-400",
    ring: "ring-emerald-400/20",
  },
  "ai-personal-agents": {
    icon: Bot,
    bg: "bg-cyan-400/10",
    text: "text-cyan-400",
    ring: "ring-cyan-400/20",
  },
  "ai-agent-orchestration": {
    icon: Network,
    bg: "bg-orange-400/10",
    text: "text-orange-400",
    ring: "ring-orange-400/20",
  },
  "ai-local-models": {
    icon: HardDrive,
    bg: "bg-indigo-400/10",
    text: "text-indigo-400",
    ring: "ring-indigo-400/20",
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
  return iconMap[slug] || { bg: "bg-gray-400/10", text: "text-gray-400", ring: "ring-gray-400/20" };
}
