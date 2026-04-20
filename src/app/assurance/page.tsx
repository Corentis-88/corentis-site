import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StageGrid } from "@/components/stage-grid";
import { ProductSnapshot } from "@/components/product-snapshot";

const assuranceFlow = [
  {
    label: "01",
    title: "Workflow is defined",
    description: "The use case, policy conditions, and points of human oversight are made explicit before live use begins.",
  },
  {
    label: "02",
    title: "Review and control logic is applied",
    description: "Testing, review gates, escalation rules, and deployment conditions are attached to the workflow rather than left implicit.",
  },
  {
    label: "03",
    title: "Live use remains visible",
    description: "Exceptions, approvals, overrides, and notable events are recorded as the workflow operates.",
  },
  {
    label: "04",
    title: "Evidence supports accountability",
    description: "Outputs can be exported in a form that supports governance meetings, assurance review, audit support, or procurement scrutiny.",
  },
];

const stageItems = [
  {
    label: "Current stage",
    title: "Early product direction",
    description: "Corentis is being presented at an early stage with a careful, bounded claim posture.",
  },
  {
    label: "Exists now",
    title: "Illustrative governance views",
    description: "The current materials show prototype process logic, worked examples, and sample evidence framing rather than claiming live customer deployment.",
  },
  {
    label: "Designed to do",
    title: "Support review and accountability",
    description: "The product direction is to make important workflows easier to inspect, review, and justify later.",
  },
  {
    label: "Claim discipline",
    title: "Deliberately careful scope",
    description: "The product is framed around bounded workflow control, not broad promises about automating regulation or removing human judgement.",
  },
];

const boundedUseCases = [
  "one workflow at a time rather than broad, unmanaged automation",
  "human oversight at points where review or escalation is required",
  "clear records of approvals, overrides, and notable exceptions",
  "review-ready outputs that support audit, assurance, and governance work",
];

export default function AssurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Assurance Overview"
        title="Responsible deployment needs operational control, not just good intentions."
        description="Corentis is being built to help organisations deploy AI in regulated workflows with clearer governance, human oversight, and evidence that can support practical accountability."
        ctaHref="/contact/"
        ctaLabel="Request governance summary"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">The Problem</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                As AI moves into more important work, organisations need more than raw capability. They need a way to
                make deployment visible, bounded, reviewable, and easier to justify.
              </p>
              <p>
                Without that structure, useful pilots can stall, governance teams struggle to assess what is happening,
                and evidence becomes fragmented across systems and teams.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What Corentis Adds</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is designed to add deployment discipline around AI-supported workflows through testing,
                approval steps, runtime visibility, and evidence generation.
              </p>
              <p>
                The aim is practical accountability: clearer control visibility for organisations and review-ready
                outputs for the people asked to assess what happened.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Bounded Deployment"
            title="The product is designed for controlled, reviewable use rather than open-ended automation."
            description="That matters for organisations, advisors, and public-support reviewers who need to assess seriousness, operational realism, and risk awareness."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {boundedUseCases.map((item) => (
              <div key={item} className="glass-panel reveal-card p-6">
                <p className="text-sm leading-7 text-[var(--color-text-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Oversight Flow"
            title="How control, review, and evidence connect in practice"
            description="This sequence is intended to show how governed deployment becomes reviewable operational behaviour rather than a vague governance claim."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {assuranceFlow.map((item) => (
              <div key={item.label} className="glass-panel reveal-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-electric-soft)]">
                  {item.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <ProductSnapshot
              eyebrow="Illustrative Oversight Output"
              title="A clearer view of what review-ready accountability can look like"
              description="Shown here as a prototype-style surface so the assurance case is easier to assess at a glance."
              statusLabel="Illustrative oversight view"
              items={[
                {
                  label: "Controls",
                  title: "Workflow conditions mapped",
                  detail: "Policy rules, review requirements, and escalation logic are attached to the workflow before live use.",
                  value: "Visible",
                },
                {
                  label: "Oversight",
                  title: "Human review stays explicit",
                  detail: "Named reviewers can approve, reject, override, or escalate outputs where scrutiny is needed.",
                  value: "Named owners",
                },
                {
                  label: "Runtime",
                  title: "Notable events remain legible",
                  detail: "Exceptions, overrides, and alerts are surfaced as operational events rather than left implicit.",
                  value: "Tracked",
                },
                {
                  label: "Evidence",
                  title: "Exports support later review",
                  detail: "Review packs can be shaped for governance meetings, procurement review, internal assurance, or audit support.",
                  value: "Review-ready",
                },
              ]}
              events={[
                "Sensitive action routed to approval gate",
                "Runtime exception preserved with review context",
                "Evidence bundle prepared for assurance discussion",
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <StageGrid
            eyebrow="Current Product Stage"
            title="What this page is showing and what it is not claiming"
            description="This page is intended to help reviewers understand the practical governance direction of Corentis without confusion about maturity or status."
            items={stageItems}
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What Corentis Is</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A governance and assurance layer around AI-supported workflows</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A way to add human oversight, review gates, and clearer deployment discipline</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A source of review-ready outputs that support accountability and audit support</li>
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What Corentis Is Not</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a claim that regulation can be automated away</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a generic promise that AI can be trusted without careful workflow design</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a substitute for human accountability in important deployment decisions</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Human Oversight</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is being built on the assumption that important AI-supported workflows still require human
                oversight. Review gates, escalation points, and approval logic are central to the product direction.
              </p>
              <p>
                That makes it easier to understand where judgement stayed with people rather than being obscured by the
                surrounding process.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Evidence And Audit Support</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is intended to generate evidence trails that support governance meetings, internal assurance,
                audit support, procurement review, and other scrutiny-facing processes.
              </p>
              <p>
                The goal is not to create more paperwork. It is to make the evidence that already matters easier to
                collect, structure, and reuse.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Public-Interest Framing</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              The public-interest case is practical rather than rhetorical.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                If advanced AI is going to be used in important workflows, organisations need better ways to understand
                how it is being deployed, where human oversight remains, and what evidence can be shown later.
              </p>
              <p>
                Corentis is being built to help meet that need in a way that is commercially useful, operationally
                grounded, and careful in its claims.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
