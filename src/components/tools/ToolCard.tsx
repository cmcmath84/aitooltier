import Link from "next/link";
import { ToolReview } from "@/lib/types";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";

interface ToolCardProps {
  tool: ToolReview;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-1 items-start gap-3">
          <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
          <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {tool.tagline}
          </p>
          </div>
        </div>
        <TierBadge score={tool.scores.overall} size="md" showScore />
      </div>

      <div className="mt-4 flex items-center gap-3">
        {tool.hasFreeTier && (
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
            Free tier
          </span>
        )}
        <span className="text-xs text-muted-foreground">
          From {tool.pricing[0]?.price}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {tool.pros.slice(0, 2).map((pro, i) => (
          <span
            key={i}
            className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {pro.length > 40 ? pro.slice(0, 40) + "..." : pro}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 text-xs text-muted-foreground">
        Updated {tool.lastReviewedDate}
      </div>
    </Link>
  );
}
