"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import ToolLogo from "./ToolLogo";
import TierBadge from "./TierBadge";
import CategoryIcon from "./CategoryIcon";

interface SearchResult {
  type: "tool" | "category" | "comparison";
  label: string;
  sublabel: string;
  href: string;
  slug?: string;
  score?: number;
  categorySlug?: string;
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const tool of tools) {
    results.push({
      type: "tool",
      label: tool.name,
      sublabel: tool.tagline.slice(0, 60) + (tool.tagline.length > 60 ? "..." : ""),
      href: `/tools/${tool.slug}`,
      slug: tool.slug,
      score: tool.scores.overall,
    });
  }

  for (const cat of categories) {
    const count = tools.filter((t) => t.category === cat.slug).length;
    if (count === 0) continue;
    results.push({
      type: "category",
      label: cat.name,
      sublabel: `${count} tools reviewed`,
      href: `/categories/${cat.slug}`,
      categorySlug: cat.slug,
    });
  }

  return results;
}

function matchScore(query: string, result: SearchResult): number {
  const q = query.toLowerCase();
  const label = result.label.toLowerCase();

  if (label === q) return 100;
  if (label.startsWith(q)) return 90;

  const words = label.split(/\s+/);
  for (const word of words) {
    if (word.startsWith(q)) return 80;
  }

  if (label.includes(q)) return 70;

  // fuzzy: check if all query chars appear in order
  let qi = 0;
  for (let i = 0; i < label.length && qi < q.length; i++) {
    if (label[i] === q[qi]) qi++;
  }
  if (qi === q.length) return 50;

  return 0;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    if (query.length < 1) return [];
    return searchIndex
      .map((r) => ({ result: r, score: matchScore(query, r) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.result);
  }, [query, searchIndex]);

  // Also generate comparison suggestions when query contains "vs"
  const comparisonResults = useMemo(() => {
    const q = query.toLowerCase();
    if (!q.includes(" vs ") && !q.includes(" vs")) return [];

    const parts = q.split(/\s+vs\s*/);
    if (parts.length < 2 || !parts[1]) return [];

    const toolA = tools.find(
      (t) => t.name.toLowerCase().startsWith(parts[0].trim())
    );
    if (!toolA) return [];

    return tools
      .filter((t) => t.slug !== toolA.slug && t.name.toLowerCase().startsWith(parts[1].trim()))
      .slice(0, 4)
      .map((toolB): SearchResult => ({
        type: "comparison",
        label: `${toolA.name} vs ${toolB.name}`,
        sublabel: "Head-to-head comparison",
        href: `/compare/${toolA.slug}-vs-${toolB.slug}`,
      }));
  }, [query]);

  const allResults = useMemo(() => {
    return comparisonResults.length > 0
      ? [...comparisonResults, ...results]
      : results;
  }, [results, comparisonResults]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigate(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, allResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && allResults[selectedIndex]) {
      e.preventDefault();
      navigate(allResults[selectedIndex].href);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  // Keyboard shortcut: / to focus search
  useEffect(() => {
    function handleGlobalKey(e: KeyboardEvent) {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search tools..."
          className="h-9 w-full rounded-lg border border-border bg-muted pl-9 pr-8 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:w-44 lg:w-56"
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-white px-1.5 text-[10px] font-medium text-muted-foreground sm:block">
          /
        </kbd>
      </div>

      {open && allResults.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-w-80 overflow-hidden rounded-lg border border-border bg-white shadow-lg md:left-auto">
          {allResults.map((result, i) => (
            <button
              key={result.href}
              className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition ${
                i === selectedIndex
                  ? "bg-primary/5 text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onMouseEnter={() => setSelectedIndex(i)}
              onClick={() => navigate(result.href)}
            >
              {result.type === "tool" && result.slug && (
                <ToolLogo slug={result.slug} name={result.label} size="sm" />
              )}
              {result.type === "category" && result.categorySlug && (
                <CategoryIcon slug={result.categorySlug} size="sm" />
              )}
              {result.type === "comparison" && (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">
                  VS
                </span>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate font-medium text-foreground">
                    {result.label}
                  </span>
                  {result.type === "tool" && result.score && (
                    <TierBadge score={result.score} size="sm" />
                  )}
                </div>
                <div className="truncate text-xs text-muted-foreground">
                  {result.sublabel}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {open && query.length >= 1 && allResults.length === 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-w-80 rounded-lg border border-border bg-white p-4 text-center text-sm text-muted-foreground shadow-lg md:left-auto">
          No results for &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}
