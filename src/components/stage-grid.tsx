type StageItem = {
  label: string;
  title: string;
  description: string;
};

export function StageGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: StageItem[];
}) {
  return (
    <div className="glass-panel p-6 sm:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
        </div>
        <div className="status-pill w-fit">Current stage framing</div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <div key={item.title} className="product-tile p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
                {item.label}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/38">0{index + 1}</p>
            </div>
            <h4 className="mt-3 text-lg font-semibold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
