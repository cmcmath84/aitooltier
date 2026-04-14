"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ToolLogo from "@/components/ui/ToolLogo";

interface ToolData {
  slug: string;
  name: string;
  category: string;
  scores: { overall: number };
}

interface CompareSearchProps {
  tools: ToolData[];
}

export default function CompareSearch({ tools }: CompareSearchProps) {
  const [query, setQuery] = useState("");

  // Generate all comparison pairs grouped by category
  const allPairsByCategory = useMemo(() => {
    const grouped: Record<string, { categoryName: string; pairs: [ToolData, ToolData][] }> = {};

    for (let i = 0; i < tools.length; i++) {
      for (let j = i + 1; j < tools.length; j++) {
        if (tools[i].category === tools[j].category) {
          const cat = tools[i].category;
          if (!grouped[cat]) {
            grouped[cat] = { categoryName: cat, pairs: [] };
          }
          grouped[cat].pairs.push([tools[i], tools[j]]);
        }
      }
    }

    return grouped;
  }, [tools]);

  // Count total pairs
  const totalPairs = useMemo(
    () => Object.values(allPairsByCategory).reduce((sum, g) => sum + g.pairs.length, 0),
    [allPairsByCategory]
  );

  // Filter based on search query
  const searchLower = query.trim().toLowerCase();

  const filteredPairs = useMemo(() => {
    if (!searchLower) return [];

    const results: [ToolData, ToolData][] = [];
    for (let i = 0; i < tools.length; i++) {
      for (let j = i + 1; j < tools.length; j++) {
        if (tools[i].category === tools[j].category) {
          if (
            tools[i].name.toLowerCase().includes(searchLower) ||
            tools[j].name.toLowerCase().includes(searchLower)
          ) {
            results.push([tools[i], tools[j]]);
          }
        }
      }
    }
    return results;
  }, [tools, searchLower]);

  const isSearching = searchLower.length > 0;
  const shownCount = isSearching ? filteredPairs.length : totalPairs;

  return (
    <div className="mt-12">
      {/* Search input */}
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-5 w-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools to compare..."
          className="w-full rounded-xl border border-border bg-white py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
        />
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-muted-foreground">
        Showing {shownCount} of {totalPairs} comparisons
      </p>

      {/* Results */}
      {isSearching ? (
        /* Flat list when searching */
        filteredPairs.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPairs.map(([toolA, toolB]) => (
              <CompareCardClient key={`${toolA.slug}-${toolB.slug}`} toolA={toolA} toolB={toolB} />
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-muted-foreground">
            No comparisons found for &ldquo;{query}&rdquo;
          </p>
        )
      ) : (
        /* Grouped by category when not searching */
        <div className="space-y-10">
          {Object.entries(allPairsByCategory).map(([cat, group]) => (
            <div key={cat}>
              <h2 className="mb-4 text-xl font-bold text-foreground capitalize">
                {group.categoryName.replace(/-/g, " ").replace(/^ai /, "AI ")}
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.pairs.map(([toolA, toolB]) => (
                  <CompareCardClient
                    key={`${toolA.slug}-${toolB.slug}`}
                    toolA={toolA}
                    toolB={toolB}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CompareCardClient({ toolA, toolB }: { toolA: ToolData; toolB: ToolData }) {
  return (
    <Link
      href={`/compare/${toolA.slug}-vs-${toolB.slug}`}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex flex-1 items-center gap-2 min-w-0">
        <ToolLogo slug={toolA.slug} name={toolA.name} size="sm" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{toolA.name}</p>
          <span className="text-xs font-bold text-muted-foreground">
            {toolA.scores.overall.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-black text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition">
          VS
        </span>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2 min-w-0">
        <div className="min-w-0 text-right">
          <p className="truncate text-sm font-semibold text-foreground">{toolB.name}</p>
          <span className="text-xs font-bold text-muted-foreground">
            {toolB.scores.overall.toFixed(1)}
          </span>
        </div>
        <ToolLogo slug={toolB.slug} name={toolB.name} size="sm" />
      </div>
    </Link>
  );
}
