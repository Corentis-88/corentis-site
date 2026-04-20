type ComparisonItem = {
  title: string;
  points: string[];
};

export function ComparisonGrid({
  eyebrow,
  title,
  left,
  right,
}: {
  eyebrow: string;
  title: string;
  left: ComparisonItem;
  right: ComparisonItem;
}) {
  return (
    <div className="glass-panel p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {[left, right].map((column, index) => (
          <div
            key={column.title}
            className={`rounded-3xl border p-5 ${
              index === 1
                ? "border-[rgba(145,214,255,0.28)] bg-[linear-gradient(135deg,rgba(46,141,255,0.14),rgba(46,141,255,0.04))]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <h4 className="text-xl font-semibold text-white">{column.title}</h4>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {column.points.map((point) => (
                <li key={point} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
