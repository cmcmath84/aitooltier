export type TierRank = "S" | "A" | "B" | "C" | "D" | "F";

export interface TierConfig {
  rank: TierRank;
  label: string;
  minScore: number;
  bg: string;
  labelBg: string;
  labelText: string;
  solid: string;
  border: string;
  glow: string;
}

// Artifact chip language: the tier color lives in the tag (soft tinted
// bg + tier-colored text); surfaces stay flat panels. No gradients.
export const tiers: TierConfig[] = [
  {
    rank: "S",
    label: "S Tier",
    minScore: 9.0,
    bg: "bg-card",
    labelBg: "bg-tier-s-bg",
    labelText: "text-tier-s",
    solid: "bg-tier-s",
    border: "border-border",
    glow: "",
  },
  {
    rank: "A",
    label: "A Tier",
    minScore: 8.0,
    bg: "bg-card",
    labelBg: "bg-tier-a-bg",
    labelText: "text-tier-a",
    solid: "bg-tier-a",
    border: "border-border",
    glow: "",
  },
  {
    rank: "B",
    label: "B Tier",
    minScore: 7.0,
    bg: "bg-card",
    labelBg: "bg-tier-b-bg",
    labelText: "text-tier-b",
    solid: "bg-tier-b",
    border: "border-border",
    glow: "",
  },
  {
    rank: "C",
    label: "C Tier",
    minScore: 6.0,
    bg: "bg-card",
    labelBg: "bg-tier-c-bg",
    labelText: "text-tier-c",
    solid: "bg-tier-c",
    border: "border-border",
    glow: "",
  },
  {
    rank: "D",
    label: "D Tier",
    minScore: 5.0,
    bg: "bg-card",
    labelBg: "bg-tier-d-bg",
    labelText: "text-tier-d",
    solid: "bg-tier-d",
    border: "border-border",
    glow: "",
  },
  {
    rank: "F",
    label: "F Tier",
    minScore: 0,
    bg: "bg-card",
    labelBg: "bg-tier-f-bg",
    labelText: "text-tier-f",
    solid: "bg-tier-f",
    border: "border-border",
    glow: "",
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
