import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Review AI Tools",
  description:
    "Our review methodology: scoring rubric, data sources, testing process, and how we keep reviews current.",
};

export default function HowWeReviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">
        How We Review AI Tools
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Transparency matters. Here&apos;s exactly how we evaluate every tool on
        AIToolTier.
      </p>

      {/* Scoring */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">Scoring Rubric</h2>
        <p className="mt-2 text-muted-foreground">
          Every tool is scored on four dimensions, each rated 1-10. The overall
          score is the average.
        </p>
        <div className="mt-4 space-y-3">
          {[
            {
              name: "Ease of Use",
              desc: "How quickly can a new user get value? Is the interface intuitive? Does it require technical knowledge?",
            },
            {
              name: "Output Quality",
              desc: "How good are the results? Compared to competitors, does this tool produce professional-grade output?",
            },
            {
              name: "Value",
              desc: "Is the pricing fair for what you get? How does the free tier compare? Are there hidden costs?",
            },
            {
              name: "Features",
              desc: "How complete is the feature set? API access, integrations, customization options, export formats.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-border bg-card p-4"
            >
              <h3 className="font-semibold text-foreground">{item.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Sources */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">
          Where We Get Our Data
        </h2>
        <p className="mt-2 text-muted-foreground">
          We don&apos;t just make up scores. Every review is informed by
          multiple sources:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Hands-on testing</strong> — We
              sign up and use the tool ourselves
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">G2 & Capterra reviews</strong>{" "}
              — Aggregated ratings from verified business users
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Reddit discussions</strong> —
              Real, unfiltered user opinions
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Product Hunt</strong> — Launch
              feedback and early adopter reviews
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Official documentation</strong>{" "}
              — Pricing, features, and changelogs
            </span>
          </li>
        </ul>
      </section>

      {/* Known Issues */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">
          Why We Report Known Issues
        </h2>
        <p className="mt-2 text-muted-foreground">
          Most review sites only talk about features. We also report bugs,
          outages, and common complaints — with the date and source, so you can
          judge if they&apos;re still relevant. If a tool has problems,
          you&apos;ll know before you pay.
        </p>
      </section>

      {/* Freshness */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">
          Keeping Reviews Current
        </h2>
        <p className="mt-2 text-muted-foreground">
          AI tools change fast. Every review shows a &quot;Last Updated&quot;
          date. We regularly re-check pricing, features, and user sentiment. If
          a review is more than 3 months old, we flag it for refresh.
        </p>
      </section>

      {/* Independence */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">Independence</h2>
        <p className="mt-2 text-muted-foreground">
          No tool can pay for a higher score. Our rankings are based entirely on
          our rubric. If we use affiliate links in the future, they will never
          influence our ratings or recommendations.
        </p>
      </section>
    </div>
  );
}
