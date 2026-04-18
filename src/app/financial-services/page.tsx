import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const workflows = [
  {
    title: "Complaints triage",
    description:
      "Use AI to support complaint review while keeping rationale, controls, and approvals visible throughout the process.",
  },
  {
    title: "Vulnerable-customer escalation",
    description:
      "Add stronger oversight and evidence where customer circumstances call for extra care and human judgement.",
  },
  {
    title: "Customer-communication review",
    description:
      "Support drafting or review with checks, approvals, and monitoring around the final communication workflow.",
  },
];

const gains = [
  "test workflows before rollout",
  "introduce clear approval points",
  "monitor exceptions and overrides",
  "create review-ready evidence",
  "improve internal confidence around deployment",
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Services"
        title="Governed AI for financial-services workflows"
        description="Financial institutions are under pressure to improve efficiency, consistency, and service quality without weakening accountability. Corentis helps teams introduce AI into sensitive workflows while keeping control, traceability, and review in place."
        imageSrc="/images/financial-services-canary-wharf.jpg"
        imageAlt="Modern office building in Canary Wharf"
        ctaHref="/contact/"
        ctaLabel="Register interest"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="First Use Cases"
            title="Start where the need is real and the workflow is clear"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {workflows.map((workflow) => (
              <div key={workflow.title} className="glass-panel reveal-card p-6">
                <h2 className="text-xl font-semibold text-white">{workflow.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{workflow.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Why It Matters</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>In financial services, even useful AI creates hesitation when teams cannot clearly explain:</p>
              <ul className="space-y-2 pl-5">
                <li>what the workflow did</li>
                <li>what inputs mattered</li>
                <li>where human review happened</li>
                <li>and how the process can be checked later</li>
              </ul>
              <p>
                Corentis helps close that gap by turning AI-assisted work into a process that is easier to govern,
                easier to review, and easier to trust.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What Teams Gain</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {gains.map((gain) => (
                <li key={gain} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  {gain}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Practical, Not Theatrical
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Corentis is not built for flashy demos. It is built for real operating environments where careful deployment matters.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
              The goal is straightforward: help financial-services teams adopt AI in ways that feel responsible,
              reviewable, and commercially useful.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
