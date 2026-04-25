import { FaqList } from "@/components/faq-list";
import { WorkflowExample } from "@/components/workflow-example";
import { PageHero } from "@/components/page-hero";
import { ProductSnapshot } from "@/components/product-snapshot";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ComparisonGrid } from "@/components/comparison-grid";
import { getPackRequestHref } from "@/lib/packs";

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

const valueStats = [
  {
    value: "$60bn-$110bn",
    label: "annual gen-AI value potential",
    detail:
      "McKinsey estimates generative AI could create significant annual value across pharma and medical products, with R&D and clinical development among the areas of interest.",
    implication: "The adoption pressure is real, but life sciences teams need controlled workflows rather than broad automation promises.",
    source: "McKinsey, generative AI in pharma",
    href: "https://www.mckinsey.com/industries/life-sciences/our-insights/generative-ai-in-the-pharmaceutical-industry-moving-from-hype-to-reality",
  },
  {
    value: "57%",
    label: "of protocols had a substantial amendment",
    detail:
      "Tufts CSDD research found substantial protocol amendments were common, and nearly half were deemed avoidable by sponsors.",
    implication: "Better structure around review, escalation, and evidence can reduce friction when operational changes need to be understood later.",
    source: "Tufts CSDD protocol amendment analysis",
    href: "https://www.globenewswire.com/news-release/2016/01/14/1187511/0/en/Protocol-Amendments-Improve-Elements-of-Clinical-Trial-Feasibility-But-at-High-Economic-and-Cycle-Time-Cost-According-to-the-Tufts-Center-for-the-Study-of-Drug-Development.html",
  },
  {
    value: "$141k-$535k",
    label: "median direct amendment cost",
    detail:
      "The same Tufts CSDD analysis reported median direct costs of $141k for Phase II and $535k for Phase III substantial amendments.",
    implication: "Corentis does not prevent protocol change, but it can help teams keep operational review, sign-off, and evidence clearer around bounded workflows.",
    source: "Tufts CSDD protocol amendment analysis",
    href: "https://www.globenewswire.com/news-release/2016/01/14/1187511/0/en/Protocol-Amendments-Improve-Elements-of-Clinical-Trial-Feasibility-But-at-High-Economic-and-Cycle-Time-Cost-According-to-the-Tufts-Center-for-the-Study-of-Drug-Development.html",
  },
  {
    value: "Audit trails",
    label: "must stay interpretable",
    detail:
      "ICH E6(R3) data-governance guidance emphasises traceability, metadata, review of audit trails, and documented processes across the data lifecycle.",
    implication: "That is the environment Corentis is designed for: AI-supported work with visible controls, human review, and evidence that can be inspected.",
    source: "ICH E6(R3) Step 4 final guideline",
    href: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
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
        ctaHref={getPackRequestHref("life-sciences-brief")}
        ctaLabel="Request life sciences brief"
      />

      <section className="border-b border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where The Value Lies"
            title="Useful AI still needs review, traceability, and evidence"
            description="Life sciences organisations are under pressure to use AI in practical operational work, but the value only lands when the surrounding process remains bounded, reviewable, and suitable for regulated environments."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {valueStats.map((item) => (
              <article key={item.label} className="glass-panel reveal-card flex h-full flex-col p-6">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                <h2 className="mt-3 text-base font-semibold text-[var(--color-near-white)]">{item.label}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.detail}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-electric-soft)]">{item.implication}</p>
                <a
                  href={item.href}
                  className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 transition hover:text-[var(--color-electric)]"
                >
                  Source: {item.source}
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

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
