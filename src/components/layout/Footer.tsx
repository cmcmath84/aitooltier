import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import NewsletterSignup from "@/components/ui/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="AIToolTier"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Honest, data-backed AI tool reviews. We test everything and report
              what we find — the good, the bad, and the bugs.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Top Categories
            </h3>
            <ul className="mt-3 space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Site</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-review"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  How We Review
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  Compare Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/all-tools"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  All Tools Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/trending"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  Trending Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Affiliate Disclosure
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Terms of Use
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 border-t border-border pt-8">
          <div className="mx-auto max-w-md">
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AIToolTier. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
