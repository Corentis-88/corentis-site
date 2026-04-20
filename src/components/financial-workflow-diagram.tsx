const steps = [
  {
    title: "Case enters workflow",
    detail: "A complaint, draft communication, or escalation candidate enters an AI-enabled operational flow.",
  },
  {
    title: "AI proposes an output",
    detail: "An existing model or workflow engine suggests a category, route, draft, or summary.",
  },
  {
    title: "Corentis applies controls",
    detail: "Policy checks, review gates, escalation rules, and evidence capture are applied around the workflow.",
    active: true,
  },
  {
    title: "Human review where needed",
    detail: "Named reviewers approve, override, reject, or escalate cases that cross defined thresholds.",
  },
  {
    title: "Decision and evidence export",
    detail: "The workflow proceeds with a clearer record of checks, approvals, exceptions, and supporting evidence.",
  },
];

export function FinancialWorkflowDiagram() {
  return (
    <div className="glass-panel overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
            Illustrative workflow diagram
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            Where Corentis fits in an AI-enabled financial workflow
          </h3>
        </div>
        <div className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
          Prototype process view
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="product-tile p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
            Workflow roles
          </p>
          <div className="mt-4 space-y-3">
            {[
              "Operations team or service owner",
              "Existing AI-enabled workflow",
              "Corentis control layer",
              "Named reviewers and escalation owners",
            ].map((role) => (
              <div key={role} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/82">
                {role}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`rounded-3xl border p-5 ${
              step.active
                ? "border-[rgba(145,214,255,0.28)] bg-[linear-gradient(135deg,rgba(46,141,255,0.14),rgba(46,141,255,0.04))]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(46,141,255,0.12)] text-sm font-semibold text-[var(--color-electric-soft)]">
                0{index + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{step.detail}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Policy checks", "Configured around the workflow"],
          ["Review gates", "Triggered by threshold or case type"],
          ["Evidence export", "Supports QA, risk, and compliance review"],
        ].map(([label, detail]) => (
          <div key={label} className="product-tile px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">{label}</p>
            <p className="mt-2 text-sm leading-6 text-white/82">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
