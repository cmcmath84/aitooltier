export type TierRank = "S" | "A" | "B" | "C" | "D" | "F";

export interface TierConfig {
  rank: TierRank;
  label: string;
  minScore: number;
  bg: string;
  labelBg: string;
  labelText: string;
  border: string;
  glow: string;
}

export const tiers: TierConfig[] = [
  {
    rank: "S",
    label: "S Tier",
    minScore: 9.0,
    bg: "bg-red-50",
    labelBg: "bg-gradient-to-br from-red-500 to-rose-600",
    labelText: "text-white",
    border: "border-red-200",
    glow: "shadow-red-200/50",
  },
  {
    rank: "A",
    label: "A Tier",
    minScore: 8.0,
    bg: "bg-orange-50",
    labelBg: "bg-gradient-to-br from-orange-500 to-amber-500",
    labelText: "text-white",
    border: "border-orange-200",
    glow: "shadow-orange-200/50",
  },
  {
    rank: "B",
    label: "B Tier",
    minScore: 7.0,
    bg: "bg-yellow-50",
    labelBg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
    labelText: "text-yellow-900",
    border: "border-yellow-200",
    glow: "shadow-yellow-200/50",
  },
  {
    rank: "C",
    label: "C Tier",
    minScore: 6.0,
    bg: "bg-green-50",
    labelBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    labelText: "text-white",
    border: "border-green-200",
    glow: "shadow-green-200/50",
  },
  {
    rank: "D",
    label: "D Tier",
    minScore: 5.0,
    bg: "bg-blue-50",
    labelBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    labelText: "text-white",
    border: "border-blue-200",
    glow: "shadow-blue-200/50",
  },
  {
    rank: "F",
    label: "F Tier",
    minScore: 0,
    bg: "bg-gray-50",
    labelBg: "bg-gradient-to-br from-gray-500 to-gray-600",
    labelText: "text-white",
    border: "border-gray-200",
    glow: "shadow-gray-200/50",
  },
];

export function getTierForScore(score: number): TierConfig {
  for (const tier of tiers) {
    if (score >= tier.minScore) return tier;
  }
  return tiers[tiers.length - 1];
}

export function getTierRank(score: number): TierRank {
  return getTierForScore(score).rank;
}
