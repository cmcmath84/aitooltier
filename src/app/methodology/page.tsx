import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Methodology: How We Score AI Tools",
  description:
    "How AIToolTier reviews and scores AI tools. Our 4-criteria scoring system, tier rankings, data sources, and editorial process explained.",
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Methodology</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground">
        How We Score AI Tools
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Every tool on AIToolTier gets the same treatment. Here is exactly how we
        evaluate, score, and rank them.
      </p>

      {/* Scoring system */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">
          The 4-Criteria Scoring System
        </h2>
        <p className="mt-2 text-muted-foreground">
          Each tool is scored on four criteria, each rated 1-10. The Overall
          score is the average of all four.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Ease of Use (1-10)
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              How quickly can a new user get value? We test onboarding flow,
              interface clarity, documentation quality, and learning curve. A
              tool that requires a PhD to operate scores lower than one you can
              figure out in 5 minutes.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Output Quality (1-10)
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              How good is what it produces? For image generators, we look at
              visual fidelity and prompt adherence. For code tools, correctness
              and usefulness. For writing tools, coherence and style. We compare
              outputs against competitors in the same category.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">Value (1-10)</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Is it worth the money? We weigh the free tier generosity, paid
              plan pricing relative to competitors, and whether the output
              quality justifies the cost. A free tool that&apos;s decent can
              outscore an expensive tool that&apos;s slightly better.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">Features (1-10)</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              What can it do? We evaluate the breadth and depth of features,
              integrations, API access, export options, and platform support. A
              tool with deep functionality in its niche scores higher than a
              shallow tool that tries to do everything.
            </p>
          </div>
        </div>
      </section>

      {/* Tier system */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">
          The Tier System (S through F)
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Overall score maps automatically to a tier. No manual overrides,
          no favoritism.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Tier</th>
                <th className="px-4 py-2 text-left font-semibold">
                  Score Range
                </th>
                <th className="px-4 py-2 text-left font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-2">
                  <span className="inline-block rounded bg-gradient-to-br from-red-500 to-rose-600 px-2 py-0.5 text-xs font-bold text-white">
                    S
                  </span>
                </td>
                <td className="px-4 py-2 font-medium">9.0+</td>
                <td className="px-4 py-2 text-muted-foreground">
                  Best in class. Exceptional across every criterion.
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">
                  <span className="inline-block rounded bg-gradient-to-br from-orange-500 to-amber-500 px-2 py-0.5 text-xs font-bold text-white">
                    A
                  </span>
                </td>
                <td className="px-4 py-2 font-medium">8.0 &ndash; 8.9</td>
                <td className="px-4 py-2 text-muted-foreground">
                  Excellent. Strong recommendation with minor tradeoffs.
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">
                  <span className="inline-block rounded bg-gradient-to-br from-yellow-400 to-amber-400 px-2 py-0.5 text-xs font-bold text-white">
                    B
                  </span>
                </td>
                <td className="px-4 py-2 font-medium">7.0 &ndash; 7.9</td>
                <td className="px-4 py-2 text-muted-foreground">
                  Good. Solid choice for most users. Some notable weaknesses.
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">
                  <span className="inline-block rounded bg-gradient-to-br from-green-500 to-emerald-500 px-2 py-0.5 text-xs font-bold text-white">
                    C
                  </span>
                </td>
                <td className="px-4 py-2 font-medium">6.0 &ndash; 6.9</td>
                <td className="px-4 py-2 text-muted-foreground">
                  Average. Works, but better alternatives probably exist.
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">
                  <span className="inline-block rounded bg-gradient-to-br from-blue-500 to-indigo-500 px-2 py-0.5 text-xs font-bold text-white">
                    D
                  </span>
                </td>
                <td className="px-4 py-2 font-medium">5.0 &ndash; 5.9</td>
                <td className="px-4 py-2 text-muted-foreground">
                  Below average. Significant issues. Consider alternatives.
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">
                  <span className="inline-block rounded bg-gradient-to-br from-gray-400 to-gray-500 px-2 py-0.5 text-xs font-bold text-white">
                    F
                  </span>
                </td>
                <td className="px-4 py-2 font-medium">Below 5.0</td>
                <td className="px-4 py-2 text-muted-foreground">
                  Not recommended. Major problems across multiple criteria.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Data sources */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">
          Where We Get Our Data
        </h2>
        <p className="mt-2 text-muted-foreground">
          Every review cites its sources. We pull from:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Official sites</strong> —
              pricing pages, feature lists, documentation, and changelogs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">User forums</strong> — Reddit,
              GitHub Issues, Discord servers, and product communities for
              real-world complaints and praise.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Review platforms</strong> — G2,
              Capterra, Product Hunt, and TrustPilot for aggregated user
              sentiment.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Benchmarks</strong> — LMSYS
              Arena, Artificial Analysis, and published benchmark results where
              applicable.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">Hands-on testing</strong> — We
              use the tools ourselves. No tool gets a review without someone
              actually using it.
            </span>
          </li>
        </ul>
      </section>

      {/* Known Issues */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">
          The Known Issues Section
        </h2>
        <p className="mt-2 text-muted-foreground">
          Every review includes a Known Issues section that tracks real problems
          reported by users. Each issue is sourced (Reddit, GitHub, G2, etc.)
          and date-stamped so you know when it was reported. This is not a
          negative hit piece — it is context that helps you make a better
          decision.
        </p>
      </section>

      {/* No paid placements */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">
          No Paid Placements
        </h2>
        <p className="mt-2 text-muted-foreground">
          Tools cannot pay to get on this site. They cannot pay for higher
          scores, better placement, or favorable reviews. We may use affiliate
          links (clearly disclosed) to fund the site, but affiliate partnerships
          never influence scores or rankings. A tool with an affiliate program
          gets the same scoring treatment as one without.
        </p>
      </section>

      {/* Update process */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">
          How We Stay Current
        </h2>
        <p className="mt-2 text-muted-foreground">
          AI tools change fast. We run an automated daily check across every
          tool we cover, looking for pricing changes, new features, new known
          issues, and score-affecting updates. When something changes, we update
          the review. Every review shows a &quot;Last updated&quot; date so you
          know how fresh the data is.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10 rounded-lg border border-border bg-muted/30 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Questions about how we review?{" "}
          <Link href="/about" className="font-medium text-primary hover:underline">
            Learn more about us
          </Link>{" "}
          or{" "}
          <Link href="/all-tools" className="font-medium text-primary hover:underline">
            browse all tools
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
