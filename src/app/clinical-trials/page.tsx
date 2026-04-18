import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const workflows = [
  {
    title: "Trial document review",
    description:
      "Support the review of operational documents with clearer visibility, stronger controls, and audit-friendly outputs.",
  },
  {
    title: "Protocol-deviation triage",
    description:
      "Help teams organise and assess deviation-related information while preserving human review and sign-off.",
  },
  {
    title: "Safety-case summarisation",
    description:
      "Support summarisation in bounded operational contexts, with clear oversight and evidence around the workflow.",
  },
];

export default function ClinicalTrialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Trials"
        title="Governed AI for clinical-trial operations"
        description="Clinical-trial work depends on rigour, traceability, and careful review. Corentis helps teams introduce AI into selected operational workflows with testing, oversight, and evidence around the process."
        imageSrc="/images/clinical-lab.jpg"
        imageAlt="Researchers working in a clinical laboratory"
        ctaHref="/contact/"
        ctaLabel="Register interest"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="First Use Cases" title="AI support where structure matters" />
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
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What Corentis Is For</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is designed for operational and governance support around regulated workflows. It is not
                presented as a diagnostic or treatment tool.
              </p>
              <p>
                Its purpose is to help organisations introduce AI into selected processes in a way that is easier to
                monitor, review, and evidence over time.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Why This Matters</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                In clinical-trial operations, the question is not simply whether AI can save time. The deeper question
                is whether the surrounding process remains transparent, reviewable, and appropriate for a regulated
                environment.
              </p>
              <p>Corentis helps teams build that surrounding structure so operational gains do not come at the cost of confidence.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              A Careful Route To Adoption
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Confidence grows when people can see what happened around the workflow.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>AI can support operational work, but confidence grows only when people can see:</p>
              <ul className="space-y-2 pl-5">
                <li>what the system produced</li>
                <li>what checks were applied</li>
                <li>where human review took place</li>
                <li>and what evidence remains afterwards</li>
              </ul>
              <p>That is the role Corentis is being built to play.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
