import { WorkflowExample } from "@/components/workflow-example";
import { StageGrid } from "@/components/stage-grid";
import { PageHero } from "@/components/page-hero";
import { ProductSnapshot } from "@/components/product-snapshot";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const corePlatform = [
  {
    title: "Policy Composer",
    description: "Convert plain-English policy into structured control plans covering allowed actions, blocked actions, review gates, escalation logic, and evidence requirements.",
  },
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
    title: "Interactive V1 demo and evidence model",
    description: "The current product direction includes an interactive V1 complaints-assistant demo, defined workflow controls, illustrative evidence outputs, and sector-shaped deployment examples.",
  },
  {
    label: "Prototype focus",
    title: "Policy-to-control logic",
    description: "The present focus is on how Policy Composer, review gates, runtime visibility, and evidence exports fit together as one product.",
  },
  {
    label: "Designed to do",
    title: "Reusable platform work",
    description: "The aim is a repeatable control layer that can support more than one workflow rather than a bespoke wrapper around a single use case.",
  },
  {
    label: "Near-term path",
    title: "One workflow to wider adoption",
    description: "The product is intended to land with one internally approved workflow, then extend into adjacent processes with similar governance needs.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Policy Composer turns written policy into workflow control."
        description="Corentis is the policy-control and evidence layer for AI-assisted regulated workflows. It converts plain-English policy into allowed actions, blocked actions, review gates, escalation triggers, and evidence requirements."
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
            description="Corentis is designed to become infrastructure for governed deployment, not a one-off wrapper around a single use case. Policy Composer is the entry point: it turns written standards into operational workflow logic before customer-facing outputs or internal review."
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
            title="A product-shaped view of policy, control, review, and evidence"
            description="This is intended to make the current platform direction easier to picture as software infrastructure rather than a set of abstract governance ideas."
            statusLabel="Interactive V1 direction"
            items={[
              {
                label: "Policy Composer",
                title: "Plain-English policy becomes a control plan",
                detail: "The platform can identify the relevant policy, attach workflow constraints, and define what must be reviewed or recorded.",
                value: "Policy to controls",
              },
              {
                label: "Controls",
                title: "Review and escalation logic",
                detail: "Attach approval conditions, escalation thresholds, direct-send blocking, and required checks around sensitive steps.",
                value: "Configured",
              },
              {
                label: "Monitoring",
                title: "Advisor guidance and runtime events",
                detail: "Surface policy guidance, blocked actions, escalations, overrides, and notable review activity in one operational picture.",
                value: "Visible",
              },
              {
                label: "Evidence Vault",
                title: "Structured evidence outputs",
                detail: "Prepare review packs and persisted evidence artefacts that can be reused by governance, assurance, and audit-facing teams.",
                value: "Structured record",
              },
            ]}
            events={[
              "Relevant policy identified for the workflow",
              "Structured control plan attached before advisor action",
              "Evidence artefacts prepared for Evidence Vault and export",
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
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Can we turn plain-English policy into workflow rules without manual rework?</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Are the right approvals in place?</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">What evidence would we show if asked to justify this process?</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">How do exceptions, overrides, or escalations show up during operational use?</li>
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
                Corentis is designed to make the middle path workable at platform level: policy translated into
                workflow controls, human accountability kept explicit, and evidence that can travel with the workflow.
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
            summary="Corentis is designed to sit around a workflow rather than replace the model or system already in use. The platform adds policy-derived controls, review points, and evidence structure that make deployment easier to manage."
            note="Illustrative example"
            steps={[
              {
                label: "A team defines the workflow and policy source",
                detail:
                  "The organisation captures what the workflow is for, where AI is being used, which policy applies, and where human oversight is required.",
              },
              {
                label: "Policy Composer and controls are applied",
                detail:
                  "The workflow is shaped with allowed actions, blocked actions, escalation conditions, and evidence requirements before operational use begins.",
              },
              {
                label: "Live activity is guided and monitored",
                detail:
                  "Corentis guides the operator, records blocked actions, exceptions, review decisions, and runtime alerts as the workflow operates.",
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
