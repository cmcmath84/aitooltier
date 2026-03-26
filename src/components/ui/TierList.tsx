import Link from "next/link";
import { ToolReview } from "@/lib/types";
import { tiers, getTierForScore } from "@/lib/tiers";
import ToolLogo from "./ToolLogo";

interface TierListProps {
  tools: ToolReview[];
}

export default function TierList({ tools }: TierListProps) {
  // Group tools by tier
  const grouped = tiers
    .map((tier) => ({
      tier,
      tools: tools
        .filter((t) => getTierForScore(t.scores.overall).rank === tier.rank)
        .sort((a, b) => b.scores.overall - a.scores.overall),
    }))
    .filter((group) => group.tools.length > 0);

  return (
    <div className="space-y-2">
      {grouped.map(({ tier, tools: tierTools }) => (
        <div
          key={tier.rank}
          className={`flex rounded-xl border ${tier.border} ${tier.bg} overflow-hidden`}
        >
          {/* Tier label */}
          <div
            className={`flex w-16 shrink-0 items-center justify-center ${tier.labelBg} sm:w-20`}
          >
            <span
              className={`text-2xl font-black ${tier.labelText} sm:text-3xl`}
            >
              {tier.rank}
            </span>
          </div>

          {/* Tools in this tier */}
          <div className="flex flex-1 flex-wrap items-center gap-2 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4">
            {tierTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex items-center gap-2 rounded-lg border border-white/80 bg-white/90 px-3 py-2 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:bg-white sm:gap-3 sm:px-4 sm:py-3"
              >
                <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {tool.name}
                  </div>
                  <div className="text-xs text-muted-foreground hidden sm:block">
                    {tool.scores.overall.toFixed(1)}/10
                    {tool.hasFreeTier && (
                      <span className="ml-2 text-emerald-600">Free tier</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
