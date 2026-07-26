interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  label?: string;
}

function getScoreColor(score: number): string {
  if (score >= 8) return "bg-go-bg text-go border-border";
  if (score >= 6) return "bg-tier-d-bg text-tier-d border-border";
  if (score >= 4) return "bg-warn-bg text-warn border-border";
  return "bg-stop-bg text-stop border-border";
}

function getScoreLabel(score: number): string {
  if (score >= 9) return "Excellent";
  if (score >= 8) return "Great";
  if (score >= 7) return "Good";
  if (score >= 6) return "Decent";
  if (score >= 5) return "Average";
  if (score >= 4) return "Below Avg";
  return "Poor";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-12 w-12 text-base",
  lg: "h-16 w-16 text-xl",
};

export default function ScoreBadge({
  score,
  size = "md",
  label,
}: ScoreBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`tabular flex items-center justify-center rounded-lg border font-mono font-bold ${getScoreColor(score)} ${sizes[size]}`}
      >
        {score.toFixed(1)}
      </div>
      {label && (
        <span className="text-xs text-muted-foreground">{label}</span>
      )}
      {!label && size !== "sm" && (
        <span className="text-xs text-muted-foreground">
          {getScoreLabel(score)}
        </span>
      )}
    </div>
  );
}
