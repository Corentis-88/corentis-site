const steps = [
  "Model and workflow inventory",
  "Scenario testing and policy evaluation",
  "Human approval on sensitive actions",
  "Runtime monitoring in production",
  "Exported evidence for assurance teams",
];

export function HeroArchitecture() {
  return (
    <div className="glass-panel relative overflow-hidden p-5 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,141,255,0.16),transparent_45%)]" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-electric-soft)]">
          Control Plane View
        </p>
        <div className="mt-6 grid gap-4">
          {steps.map((step, index) => (
            <div key={step} className="relative flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-3 py-3.5 sm:gap-4 sm:rounded-3xl sm:px-4 sm:py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(46,141,255,0.12)] text-sm font-semibold text-[var(--color-electric-soft)] sm:h-10 sm:w-10 sm:rounded-2xl">
                0{index + 1}
              </div>
              <p className="text-sm leading-6 text-white/88 sm:text-base">{step}</p>
              {index < steps.length - 1 ? (
                <div className="absolute -bottom-4 left-8 h-4 w-px bg-[linear-gradient(180deg,rgba(108,188,255,0.55),transparent)] sm:left-9" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
