const steps = [
  {
    title: "Case enters workflow",
    detail: "A customer complaint enters the workflow and the assistant prepares an initial handling path.",
  },
  {
    title: "Relevant policy is identified",
    detail: "Corentis identifies the complaints policy that applies to the case instead of leaving that interpretation implicit.",
  },
  {
    title: "Structured control plan is applied",
    detail: "Policy checks, advisor guidance, review gates, escalation logic, and evidence requirements are attached to the workflow.",
    active: true,
  },
  {
    title: "Unsafe direct send is blocked",
    detail: "Where human approval is required, the workflow stops, routes to a named reviewer, and surfaces the reason clearly.",
  },
  {
    title: "Escalation and Evidence Vault update",
    detail: "Vulnerable-customer escalation is triggered where needed and the evidence trail is persisted for later review.",
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
            Where Corentis fits in the V1 complaints-assistant walkthrough
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
              "AI-assisted complaints workflow",
              "Corentis policy and control layer",
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
          ["Policy Composer", "Turns plain-English complaints policy into workflow controls"],
          ["Approval block", "Direct send is stopped where human review is required"],
          ["Evidence Vault", "Persists review-ready artefacts for later scrutiny"],
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
