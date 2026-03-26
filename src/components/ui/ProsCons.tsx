interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Pros */}
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-emerald-800">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          What we like
        </h3>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex gap-2 text-sm text-emerald-900">
              <span className="mt-0.5 shrink-0 text-emerald-500">+</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-800">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          What could be better
        </h3>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex gap-2 text-sm text-red-900">
              <span className="mt-0.5 shrink-0 text-red-500">&minus;</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
