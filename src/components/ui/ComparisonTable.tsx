import Link from "next/link";
import { ToolReview } from "@/lib/types";
import ScoreBadge from "./ScoreBadge";
import ToolLogo from "./ToolLogo";

interface ComparisonTableProps {
  tools: ToolReview[];
  showCategory?: boolean;
}

export default function ComparisonTable({
  tools,
  showCategory = false,
}: ComparisonTableProps) {
  const sorted = [...tools].sort(
    (a, b) => b.scores.overall - a.scores.overall
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              #
            </th>
            <th className="px-4 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Tool
            </th>
            <th className="px-4 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Score
            </th>
            <th className="hidden px-4 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
              Best For
            </th>
            <th className="px-4 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Price
            </th>
            <th className="hidden px-4 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
              Free Tier
            </th>
            <th className="px-4 py-3 text-right font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((tool, index) => (
            <tr
              key={tool.slug}
              className="border-t border-border transition hover:bg-primary-soft"
            >
              <td className="px-4 py-4 font-medium text-muted-foreground">
                {index + 1}
              </td>
              <td className="px-4 py-4">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="flex items-center gap-2 font-medium text-foreground hover:text-primary"
                >
                  <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
                  {tool.name}
                </Link>
                {showCategory && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    {tool.category}
                  </span>
                )}
              </td>
              <td className="px-4 py-4">
                <div className="flex justify-center">
                  <ScoreBadge score={tool.scores.overall} size="sm" />
                </div>
              </td>
              <td className="hidden px-4 py-4 text-muted-foreground sm:table-cell">
                {tool.bestFor.length > 60
                  ? tool.bestFor.slice(0, 60) + "..."
                  : tool.bestFor}
              </td>
              <td className="px-4 py-4 text-muted-foreground">
                {tool.hasFreeTier
                  ? "Free / " + tool.pricing[1]?.price
                  : tool.pricing[0]?.price + "/" + tool.pricing[0]?.period}
              </td>
              <td className="hidden px-4 py-4 text-center sm:table-cell">
                {tool.hasFreeTier ? (
                  <span className="inline-flex items-center rounded-full bg-go-bg px-2 py-0.5 font-mono text-xs font-medium text-go">
                    Yes
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-tier-f-bg px-2 py-0.5 font-mono text-xs font-medium text-tier-f">
                    No
                  </span>
                )}
              </td>
              <td className="px-4 py-4 text-right">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white transition hover:bg-primary-hover"
                >
                  Review
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
