import { WorkflowExample } from "@/components/workflow-example";
import { StageGrid } from "@/components/stage-grid";
import { PageHero } from "@/components/page-hero";
import { ProductSnapshot } from "@/components/product-snapshot";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const corePlatform = [
  {
    title: "Workflow inventory",
    description: "Record what each AI-supported workflow does, where it is used, who owns it, and why it matters.",
  },
  {
    title: "Testing and evaluation",
    description: "Run structured checks before release, including scenario testing, failure-mode review, and control verification.",
  },
  {
    title: "Approval workflows",
    description: "Add the right review gates for sensitive steps, with named approvers, escalation logic, and recorded decisions.",
  },
  {
    title: "Runtime monitoring",
    description: "Track live activity, exception patterns, drift, overrides, and other signals that matter in operation.",
  },
  {
    title: "Evidence generation",
    description: "Export review-ready materials that support governance, assurance, audit, and procurement processes.",
  },
  {
    title: "Control mapping",
    description: "Translate policy requirements and operating rules into practical configuration around each workflow.",
  },
];

const platformStage = [
  {
    label: "Exists now",
    title: "Workflow and evidence model",
    description: "The current product direction includes defined workflow controls, illustrative evidence outputs, and sector-shaped deployment examples.",
  },
  {
    label: "Prototype focus",
    title: "Governed deployment logic",
    description: "The present focus is on how testing, review gates, runtime visibility, and exports fit together as one product.",
  },
  {
    label: "Designed to do",
    title: "Reusable platform work",
    description: "The aim is a repeatable control layer that can support more than one workflow rather than a bespoke wrapper around a single use case.",
  },
  {
    label: "Near-term path",
    title: "One workflow to wider adoption",
    description: "The product is intended to land with one approved workflow, then extend into adjacent processes with similar governance needs.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="A platform for governed AI deployment"
        description="Corentis is a platform for governing how advanced AI is used in important workflows. It helps teams test before launch, apply human oversight where needed, monitor live behaviour, and produce evidence that stands up to review."
        imageSrc="/images/platform-architecture.jpg"
        imageAlt="Modern reflective office building"
        ctaHref="/contact/"
        ctaLabel="Request platform overview"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Core Platform"
            title="A reusable control layer around the workflows that matter most"
            description="Corentis is designed to become infrastructure for governed deployment, not a one-off wrapper around a single use case."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {corePlatform.map((module) => (
              <div key={module.title} className="glass-panel reveal-card p-6">
                <h2 className="text-xl font-semibold text-white">{module.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{module.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <ProductSnapshot
            eyebrow="Illustrative Platform Surface"
            title="A product-shaped view of the control layer"
            description="This is intended to make the platform easier to picture as software infrastructure rather than a set of abstract ideas."
            statusLabel="Illustrative platform view"
            items={[
              {
                label: "Inventory",
                title: "Workflow record",
                detail: "Capture what the workflow does, where it runs, who owns it, and which standards apply.",
                value: "1 workflow",
              },
              {
                label: "Controls",
                title: "Policy and review logic",
                detail: "Attach approval conditions, escalation thresholds, and required checks around sensitive steps.",
                value: "Configured",
              },
              {
                label: "Monitoring",
                title: "Runtime event view",
                detail: "Surface overrides, exceptions, alerts, and notable review activity in one operational picture.",
                value: "Visible",
              },
              {
                label: "Evidence",
                title: "Export-ready outputs",
                detail: "Prepare review packs that can be reused by governance, assurance, and audit-facing teams.",
                value: "Structured",
              },
            ]}
            events={[
              "Workflow owner and policy context recorded",
              "Named approval gate added before live use",
              "Monitoring snapshot prepared for export",
            ]}
          />
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <StageGrid
            eyebrow="Platform Stage"
            title="What exists now and what the platform is designed to become"
            description="This is intended to make the product feel legible as product infrastructure without overstating maturity."
            items={platformStage}
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              What Serious Organisations Need
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Can we see how this workflow behaved?</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Are the right approvals in place?</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">What evidence would we show if asked to justify this process?</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">How do exceptions, overrides, or escalations show up in live use?</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">How do we adopt AI without creating a new layer of operational opacity?</li>
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Why The Platform Matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              AI adoption does not need to mean blind trust or total paralysis.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Too often, teams are left with two poor options: move quickly without enough control, or delay useful
                adoption because no one is comfortable with the risk.
              </p>
              <p>
                Corentis is designed to make the middle path workable at platform level: thoughtful deployment, human
                accountability, and evidence that can travel with the workflow.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <WorkflowExample
            eyebrow="Illustrative Platform Flow"
            title="What governed deployment looks like in practice"
            summary="Corentis is designed to sit around a workflow rather than replace the model or system already in use. The platform adds the controls, review points, and evidence structure that make deployment easier to manage."
            note="Illustrative example"
            steps={[
              {
                label: "A team defines the workflow",
                detail:
                  "The organisation captures what the workflow is for, where AI is being used, what standards apply, and where human oversight is required.",
              },
              {
                label: "The workflow is tested before release",
                detail:
                  "Scenario checks, control verification, and expected-behaviour tests are run before live use begins.",
              },
              {
                label: "Live activity is monitored",
                detail:
                  "Corentis records exceptions, overrides, review decisions, and runtime alerts as the workflow operates.",
              },
              {
                label: "Evidence is exported when needed",
                detail:
                  "Teams can generate review-ready outputs for governance meetings, internal assurance, procurement, audit, or external scrutiny.",
              },
            ]}
            outcomes={[
              "configuration around the workflow, not a replacement for the underlying AI system",
              "review gates that can be shaped by risk level or policy conditions",
              "clearer visibility for operations, risk, compliance, and assurance teams",
              "evidence that is easier to reuse across multiple stakeholders",
            ]}
          />
        </Container>
      </section>
    </>
  );
}
