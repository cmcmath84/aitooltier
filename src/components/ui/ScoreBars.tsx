import { ToolReview } from "@/lib/types";
import { getTierForScore } from "@/lib/tiers";

interface ScoreBarsProps {
  toolA: ToolReview;
  toolB: ToolReview;
}

const categories = [
  { key: "easeOfUse", label: "Ease of use" },
  { key: "outputQuality", label: "Output quality" },
  { key: "value", label: "Value" },
  { key: "features", label: "Features" },
  { key: "overall", label: "Overall" },
] as const;

export default function ScoreBars({ toolA, toolB }: ScoreBarsProps) {
  const tierA = getTierForScore(toolA.scores.overall);
  const tierB = getTierForScore(toolB.scores.overall);

  return (
    <div className="space-y-5">
      {categories.map(({ key, label }) => {
        const a = toolA.scores[key];
        const b = toolB.scores[key];
        const aWins = a > b;
        const bWins = b > a;
        const tie = a === b;
        const delta = Math.abs(a - b);
        const isOverall = key === "overall";

        return (
          <div
            key={key}
            className={
              isOverall
                ? "rounded-xl border border-border bg-muted/40 p-4 sm:p-5"
                : ""
            }
          >
            <div className="mb-2 flex items-baseline justify-between">
              <span
                className={
                  isOverall
                    ? "text-sm font-bold uppercase tracking-wide text-foreground"
                    : "text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                }
              >
                {label}
              </span>
              {!tie && (
                <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
                  +{delta.toFixed(1)} {aWins ? toolA.name : toolB.name}
                </span>
              )}
              {tie && (
                <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Tie
                </span>
              )}
            </div>

            <div className="space-y-2">
              {/* Tool A */}
              <div className="flex items-center gap-3">
                <span
                  className={`w-20 truncate text-xs font-medium sm:w-32 ${
                    aWins ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {toolA.name}
                </span>
                <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${
                      aWins
                        ? `${tierA.labelBg} shadow-sm`
                        : "bg-muted-foreground/30"
                    }`}
                    style={{ width: `${(a / 10) * 100}%` }}
                  />
                </div>
                <span
                  className={`w-10 text-right font-mono text-sm tabular-nums ${
                    aWins ? "font-bold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {a.toFixed(1)}
                </span>
              </div>

              {/* Tool B */}
              <div className="flex items-center gap-3">
                <span
                  className={`w-20 truncate text-xs font-medium sm:w-32 ${
                    bWins ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {toolB.name}
                </span>
                <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${
                      bWins
                        ? `${tierB.labelBg} shadow-sm`
                        : "bg-muted-foreground/30"
                    }`}
                    style={{ width: `${(b / 10) * 100}%` }}
                  />
                </div>
                <span
                  className={`w-10 text-right font-mono text-sm tabular-nums ${
                    bWins ? "font-bold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {b.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
