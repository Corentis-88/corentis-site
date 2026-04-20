type SnapshotItem = {
  label: string;
  title: string;
  detail: string;
  value?: string;
};

export function ProductSnapshot({
  eyebrow,
  title,
  description,
  statusLabel,
  items,
  events,
}: {
  eyebrow: string;
  title: string;
  description: string;
  statusLabel: string;
  items: SnapshotItem[];
  events: string[];
}) {
  return (
    <div className="glass-panel overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
        </div>
        <div className="status-pill w-fit">{statusLabel}</div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="product-tile p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
                {item.label}
              </p>
              {item.value ? (
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/72">
                  {item.value}
                </div>
              ) : null}
            </div>
            <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 product-tile p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
              Prototype event trail
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
              Intended to show the kind of reviewable workflow state Corentis is being built to expose.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/65">
            Illustrative output
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {events.map((event, index) => (
            <div key={event} className="rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">0{index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-white/82">{event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
