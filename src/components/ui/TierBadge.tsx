import { getTierForScore, type TierRank } from "@/lib/tiers";

interface TierBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg" | "xl";
  showScore?: boolean;
}

const sizes = {
  sm: "h-7 w-7 text-xs font-bold rounded-md",
  md: "h-10 w-10 text-base font-black rounded-lg",
  lg: "h-14 w-14 text-xl font-black rounded-xl",
  xl: "h-20 w-20 text-3xl font-black rounded-2xl",
};

export default function TierBadge({
  score,
  size = "md",
  showScore = false,
}: TierBadgeProps) {
  const tier = getTierForScore(score);

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`flex items-center justify-center ${tier.labelBg} ${tier.labelText} ${sizes[size]} shadow-lg ${tier.glow}`}
      >
        {tier.rank}
      </div>
      {showScore && (
        <span className="text-xs font-semibold text-muted-foreground">
          {score.toFixed(1)}/10
        </span>
      )}
    </div>
  );
}
