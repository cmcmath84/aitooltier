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
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
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
            <button className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Categories
            </button>
            {categoriesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-72 rounded-lg border border-border bg-white p-2 shadow-lg">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categories/${cat.slug}`}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    <CategoryIcon slug={cat.slug} size="sm" />
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            About
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
        <div className="border-t border-border bg-white px-4 py-3 md:hidden">
          <div className="mb-3">
            <SearchBar />
          </div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
