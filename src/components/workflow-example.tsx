type WorkflowStep = {
  label: string;
  detail: string;
};

export function WorkflowExample({
  eyebrow,
  title,
  summary,
  steps,
  outcomes,
  note,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  steps: WorkflowStep[];
  outcomes: string[];
  note?: string;
}) {
  return (
    <div className="glass-panel overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">{summary}</p>
        </div>
        {note ? (
          <div className="status-pill w-fit">
            {note}
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div key={step.label} className="product-tile relative p-5">
              {index < steps.length - 1 ? (
                <div className="absolute bottom-[-18px] left-9 hidden h-[18px] w-px bg-[linear-gradient(180deg,rgba(108,188,255,0.55),transparent)] lg:block" />
              ) : null}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[rgba(46,141,255,0.12)] text-sm font-semibold text-[var(--color-electric-soft)]">
                  0{index + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
                    Step {index + 1}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-white">{step.label}</h4>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-[rgba(145,214,255,0.2)] bg-[linear-gradient(180deg,rgba(8,16,34,0.88),rgba(8,16,34,0.58))] p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
                What Corentis Adds
              </p>
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/65">
                Product direction
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {outcomes.map((outcome) => (
                <li key={outcome} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="product-tile p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
              Review snapshot
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                "Policy checks attached",
                "Named review gate visible",
                "Evidence ready for export",
              ].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">0{index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
