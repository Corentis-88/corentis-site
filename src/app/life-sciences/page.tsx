import { FaqList } from "@/components/faq-list";
import { WorkflowExample } from "@/components/workflow-example";
import { PageHero } from "@/components/page-hero";
import { ProductSnapshot } from "@/components/product-snapshot";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ComparisonGrid } from "@/components/comparison-grid";

const workflows = [
  {
    title: "Trial document review",
    description:
      "Support document-heavy operational review with clearer visibility, stronger controls, and audit-friendly outputs.",
  },
  {
    title: "Protocol-deviation triage",
    description:
      "Help teams organise and assess deviation-related information while preserving human review and sign-off.",
  },
  {
    title: "Safety-case summarisation support",
    description:
      "Support bounded summarisation workflows with oversight, review steps, and evidence around the process.",
  },
];

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Corentis is designed for operational, quality, governance, and document-heavy review teams working around regulated life sciences processes where oversight and evidence matter.",
  },
  {
    question: "Is this a diagnostic or treatment product?",
    answer:
      "No. Corentis is positioned as a governance and oversight layer for bounded operational AI workflows. It is not presented as a diagnostic, treatment, or clinical decision system.",
  },
  {
    question: "What kind of workflows are in scope?",
    answer:
      "The focus is on bounded operational workflows such as document review, protocol-deviation triage, or summarisation support where human sign-off and process visibility remain essential.",
  },
  {
    question: "What does Corentis add?",
    answer:
      "The platform is designed to add testing, control mapping, review gates, runtime visibility, and evidence generation around a workflow rather than replace the underlying tools already in use.",
  },
  {
    question: "Why does evidence matter here?",
    answer:
      "In regulated environments, confidence depends on more than output quality. Teams need to know what was checked, who reviewed it, what exceptions arose, and what record remains afterwards.",
  },
];

export default function LifeSciencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Life Sciences"
        title="Governed AI for bounded life sciences workflows"
        description="Life sciences teams work in environments where rigour, traceability, and careful review matter. Corentis helps organisations introduce AI into selected operational workflows with testing, oversight, and evidence around the process."
        imageSrc="/images/clinical-lab.jpg"
        imageAlt="Researchers working in a clinical laboratory"
        ctaHref="/contact/"
        ctaLabel="Request sector overview"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who It Is For"
            title="Operational teams that need support without losing process discipline"
            description="Corentis is aimed at teams working around regulated operational workflows, including document-heavy review processes, governance functions, QA-linked activities, and other bounded areas where oversight matters."
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
                In life sciences operations, the question is not simply whether AI can save time. The deeper question
                is whether the surrounding process remains transparent, reviewable, and appropriate for a regulated
                environment.
              </p>
              <p>
                Corentis helps teams build that surrounding structure so operational gains do not come at the cost of
                confidence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What Corentis Is</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A governance layer for bounded operational AI workflows</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A way to add review discipline, sign-off steps, and evidence generation around document-heavy processes</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A platform intended to support operational oversight rather than replace regulated scientific judgement</li>
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What Corentis Is Not</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a diagnostic product</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a treatment system or clinical decision replacement</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a claim that sensitive regulated workflows should run without human sign-off</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <ProductSnapshot
            eyebrow="Bounded Workflow View"
            title="A deliberate operational shape for life sciences oversight"
            description="This prototype-style module is intended to show bounded workflow support rather than broad automation claims."
            statusLabel="Non-diagnostic product direction"
            items={[
              {
                label: "Intake",
                title: "Operational material enters review",
                detail: "Documents, deviations, or summarisation inputs are gathered in a workflow that still expects oversight.",
                value: "Bounded",
              },
              {
                label: "Controls",
                title: "Checks sit around the process",
                detail: "Completeness checks, sign-off requirements, and escalation rules are attached before outputs are relied on.",
                value: "Governed",
              },
              {
                label: "Review",
                title: "Human sign-off stays visible",
                detail: "Named reviewers remain central wherever the workflow crosses a threshold or requires judgement.",
                value: "Required",
              },
              {
                label: "Evidence",
                title: "Record remains after the event",
                detail: "Approval history, exceptions, and supporting materials are preserved to support later review.",
                value: "Retained",
              },
            ]}
            events={[
              "Deviation material structured for review rather than auto-actioned",
              "Named reviewer sign-off recorded before workflow progresses",
              "Evidence retained for QA and governance inspection",
            ]}
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24 pt-0 sm:pt-0">
        <Container>
          <WorkflowExample
            eyebrow="Detailed Example"
            title="Protocol-deviation triage with human sign-off"
            summary="A practical starting point is protocol-deviation triage: a bounded operational workflow where AI may help organise information, but human judgement and review remain central."
            note="Non-diagnostic example"
            steps={[
              {
                label: "Workflow trigger",
                detail:
                  "Deviation-related information is gathered and an AI-supported process helps structure, summarise, or classify the material for review.",
              },
              {
                label: "Controls and oversight",
                detail:
                  "Corentis applies workflow rules around required checks, completeness, escalation conditions, and who must review outputs before they are relied on.",
              },
              {
                label: "Human sign-off",
                detail:
                  "Named reviewers assess the output, approve it, request changes, or escalate it when the workflow crosses defined thresholds.",
              },
              {
                label: "Evidence generation",
                detail:
                  "The workflow retains approval history, exceptions, and supporting materials so teams have a clearer record of what happened around the process.",
              },
            ]}
            outcomes={[
              "bounded operational use rather than diagnostic or treatment positioning",
              "review support for QA, governance, and operations teams",
              "clearer sign-off and escalation discipline",
              "evidence that can support regulated review processes",
            ]}
          />
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <ComparisonGrid
            eyebrow="Bounded Adoption"
            title="Why careful scope is a strength"
            left={{
              title: "Overstated AI positioning",
              points: [
                "blurs the line between operational support and regulated judgement",
                "creates uncertainty about who remains accountable",
                "makes cautious teams less likely to adopt",
              ],
            }}
            right={{
              title: "Corentis approach",
              points: [
                "focuses on bounded operational workflows",
                "keeps human sign-off visible in the process",
                "makes oversight, evidence, and scope easier to understand",
              ],
            }}
          />
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Practical FAQ"
            title="Questions cautious teams often ask first"
            description="These questions matter because careful adoption in life sciences depends on scope, review discipline, and clarity about what the system is and is not intended to do."
          />
          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
