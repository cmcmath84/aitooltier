import { Metadata } from "next";
import Link from "next/link";
import { safeJsonLd } from "@/lib/structured-data";
import SubmitForm from "./SubmitForm";

const BASE_URL = "https://aitooltier.com";

export const metadata: Metadata = {
  title: "Submit an AI Tool for Review -- AIToolTier",
  description:
    "Suggest an AI tool for AIToolTier to review. Tool vendors, power users, and anyone who found something we haven't covered -- submit a tool and we'll consider it in the next editorial sweep.",
};

export default function SubmitPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Submit a Tool",
        item: `${BASE_URL}/submit`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Submit an AI tool
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Tool we haven&apos;t reviewed yet? Vendor wanting to be considered?
          Submit below. The form opens a tracked issue on our public GitHub
          repo -- we review submissions in the next editorial sweep.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-foreground">
          How this works
        </h2>
        <ul className="space-y-1.5">
          <li>
            <strong className="text-foreground">Free.</strong> Submissions
            cost nothing. We do not sell tier placements.
          </li>
          <li>
            <strong className="text-foreground">Public.</strong> When you
            submit, the form opens a GitHub issue on our public repo. Anyone
            can see it and track status.
          </li>
          <li>
            <strong className="text-foreground">Editorial.</strong> We
            research the tool ourselves using public data. A submission
            doesn&apos;t guarantee a listing or a favorable tier.
          </li>
          <li>
            <strong className="text-foreground">Review policy.</strong> See{" "}
            <Link href="/how-we-review" className="underline">
              how we review
            </Link>{" "}
            and{" "}
            <Link href="/methodology" className="underline">
              methodology
            </Link>
            .
          </li>
        </ul>
      </div>

      <SubmitForm />

      <div className="mt-8 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-foreground">
          No GitHub account?
        </h2>
        <p>
          Email the same information to{" "}
          <a
            href="mailto:hello@aitooltier.com?subject=Tool%20Submission"
            className="text-foreground underline"
          >
            hello@aitooltier.com
          </a>{" "}
          and we&apos;ll file the issue on your behalf. GitHub sign-up takes
          about 30 seconds though, and you&apos;ll get notified when we
          research the tool.
        </p>
      </div>
    </div>
  );
}
