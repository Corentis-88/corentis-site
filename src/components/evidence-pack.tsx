export function EvidencePack() {
  return (
    <div className="glass-panel overflow-hidden p-6 sm:p-8">
      <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[1.75rem] sm:p-6">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Illustrative Evidence Pack</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Complaints Triage Oversight Export</h3>
          </div>
          <div className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Example output
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="product-tile p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Included</p>
              <ul className="mt-3 space-y-3 text-sm text-[var(--color-text-muted)]">
                <li>Test coverage across prompt variants, edge cases, and fallback behaviour</li>
                <li>Reviewer approvals with named decision owners and timestamps</li>
                <li>Runtime monitoring summary with triggered policy events</li>
                <li>Mapped controls and export metadata for governance workflows</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <MetricCard label="Tests passed" value="98.4%" />
              <MetricCard label="Approvals" value="12" />
              <MetricCard label="Policy alerts" value="2" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Approval state", "Named reviewer sign-off recorded"],
                ["Export bundle", "Governance pack ready to share"],
              ].map(([label, detail]) => (
                <div key={label} className="product-tile px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/82">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-[rgba(4,10,24,0.56)] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-white">Timeline</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Exported PDF / JSON</p>
            </div>
            <div className="space-y-4">
              <TimelineItem title="Test suite completed" detail="Bias, escalation, and explanation scenarios recorded." />
              <TimelineItem title="Human approval granted" detail="High-sensitivity communications approved by named reviewer." />
              <TimelineItem title="Runtime anomaly flagged" detail="Escalated automatically when risk threshold exceeded." />
              <TimelineItem title="Evidence bundle exported" detail="Structured package prepared for oversight and assurance teams." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="product-tile p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</p>
      <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">{value}</p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/40">Illustrative sample metric</p>
    </div>
  );
}

function TimelineItem({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{detail}</p>
    </div>
  );
}
