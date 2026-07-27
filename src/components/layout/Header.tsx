"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { categories } from "@/data/categories";
import CategoryIcon from "@/components/ui/CategoryIcon";
import SearchBar from "@/components/ui/SearchBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-dark.png"
            alt="AIToolTier"
            width={160}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Categories
              <svg className={`h-3.5 w-3.5 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {categoriesOpen && (
              <>
                {/* Invisible bridge so mouse doesn't lose hover crossing the gap */}
                <div className="absolute left-0 top-full h-3 w-full" />
                <div className="absolute -left-4 top-[calc(100%+0.75rem)] z-50 w-[640px] rounded-xl border border-border bg-card p-3">
                  <div className="grid grid-cols-3 gap-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/categories/${cat.slug}`}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-primary-soft hover:text-foreground"
                        onClick={() => setCategoriesOpen(false)}
                      >
                        <CategoryIcon slug={cat.slug} size="sm" />
                        <span className="truncate">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <Link
            href="/leaderboard"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Rankings
          </Link>
          <Link
            href="/for-task"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            By Task
          </Link>
          <Link
            href="/compare"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Compare
          </Link>
          <Link
            href="/how-we-review"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            How We Review
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <div className="mb-3">
            <SearchBar />
          </div>
          <div className="eyebrow mb-2">
            Categories
          </div>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="flex items-center gap-3 py-2 text-sm text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CategoryIcon slug={cat.slug} size="sm" />
              <span>{cat.name}</span>
            </Link>
          ))}
          <div className="mt-3 border-t border-border pt-3">
            <Link
              href="/leaderboard"
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rankings
            </Link>
            <Link
              href="/for-task"
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              By Task
            </Link>
            <Link
              href="/benchmarks"
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benchmarks
            </Link>
            <Link
              href="/compare"
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compare
            </Link>
            <Link
              href="/how-we-review"
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How We Review
            </Link>
            <Link
              href="/submit"
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submit a Tool
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
