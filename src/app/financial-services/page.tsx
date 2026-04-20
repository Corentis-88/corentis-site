import { FaqList } from "@/components/faq-list";
import { FinancialWorkflowDiagram } from "@/components/financial-workflow-diagram";
import { WorkflowExample } from "@/components/workflow-example";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ComparisonGrid } from "@/components/comparison-grid";

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

const faqs = [
  {
    question: "Where does Corentis sit in the stack?",
    answer:
      "Corentis is designed to sit around an AI-enabled workflow. It does not replace the underlying model or case-management system. It adds policy checks, approval steps, monitoring, and evidence around the process.",
  },
  {
    question: "Does Corentis replace existing AI systems?",
    answer:
      "No. The platform is intended to govern how an existing AI-assisted workflow is deployed and reviewed, rather than act as a substitute for the model or the operational system already in place.",
  },
  {
    question: "What does it log?",
    answer:
      "Corentis is designed to record workflow events such as tests, approvals, overrides, exceptions, escalation triggers, and other review-relevant activity around the workflow.",
  },
  {
    question: "What does it export?",
    answer:
      "The platform is intended to export review-ready evidence packs including workflow context, control mappings, approval history, notable exceptions, and monitoring snapshots.",
  },
  {
    question: "How do thresholds and escalations work?",
    answer:
      "Thresholds and escalation paths are expected to be configurable around the workflow so teams can route sensitive outputs to the right reviewers or trigger additional checks when conditions are met.",
  },
  {
    question: "How do teams interact with it day to day?",
    answer:
      "Operations, risk, compliance, and review teams are expected to use Corentis to define workflow controls, review flagged outputs, inspect exceptions, and export evidence when needed.",
  },
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
        ctaLabel="Request financial services overview"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="First Use Cases"
            title="Start where the operational pain is real and the workflow is clear"
            description="Corentis is designed for teams that already know where AI could help, but need a safer way to deploy it in work that carries compliance, conduct, and operational consequences."
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">How Corentis Fits</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is designed to sit around an AI-assisted workflow rather than replace the model or the
                operational system already in use.
              </p>
              <p>
                Teams can define policy checks, set review gates, route sensitive cases to the right people, monitor
                runtime exceptions, and export the evidence needed by operations, risk, and compliance stakeholders.
              </p>
              <p>
                That makes early rollout more practical for middle-management owners as well as technical and control
                teams who need to live with the process once it is in use.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Why It Matters</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>In financial services, even useful AI creates hesitation when teams cannot clearly explain:</p>
              <ul className="space-y-2 pl-5">
                <li>what the workflow did</li>
                <li>what inputs mattered</li>
                <li>where human review happened</li>
                <li>how exceptions were handled</li>
                <li>and what evidence can be shown later</li>
              </ul>
              <p>
                Corentis helps close that gap by turning AI-assisted work into a process that is easier to govern,
                easier to review, and easier to trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <FinancialWorkflowDiagram />
        </Container>
      </section>

      <section className="py-20 sm:py-24 pt-0 sm:pt-0">
        <Container>
          <WorkflowExample
            eyebrow="Worked Example"
            title="Complaints triage with review gates and evidence export"
            summary="One practical starting point is complaints triage: a workflow where speed matters, but review discipline and traceability matter just as much."
            note="Illustrative workflow"
            steps={[
              {
                label: "Workflow trigger",
                detail:
                  "A new complaint enters the triage queue and an AI-assisted workflow proposes a category, urgency level, and handling route.",
              },
              {
                label: "Policy checks",
                detail:
                  "Corentis applies workflow-level rules such as vulnerable-customer indicators, escalation thresholds, or required explanation fields before the case moves forward.",
              },
              {
                label: "Review gates and approvals",
                detail:
                  "Cases that cross defined thresholds are routed to named reviewers who can approve, override, reject, or escalate the recommendation.",
              },
              {
                label: "Exception handling and evidence",
                detail:
                  "Overrides, alerts, approval history, and notable exceptions are recorded so operations, risk, and compliance teams can inspect the process afterwards.",
              },
            ]}
            outcomes={[
              "clearer operational rollout for middle-management owners",
              "review gates for sensitive or ambiguous cases",
              "exception handling and escalation logic around the workflow",
              "evidence export for governance, QA, risk, and compliance teams",
            ]}
          />
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <ComparisonGrid
            eyebrow="Operational Comparison"
            title="What changes when the workflow is governed"
            left={{
              title: "Without Corentis",
              points: [
                "policy checks live in scattered documents or tribal knowledge",
                "review gates are hard to see and inconsistent between teams",
                "exceptions and overrides are difficult to track later",
                "evidence gathering becomes a manual exercise",
              ],
            }}
            right={{
              title: "With Corentis",
              points: [
                "workflow controls are configured around the process",
                "review gates and escalation points are easier to see",
                "exceptions, approvals, and overrides are recorded in one flow",
                "evidence export is easier for operations, risk, and compliance teams",
              ],
            }}
          />
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Buyer FAQ"
            title="Questions likely teams ask early"
            description="These are the practical questions operations, risk, and technical stakeholders usually need answered before a workflow can move forward."
          />
          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Request a sector walkthrough built around one operational workflow.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
              Corentis is not built for flashy demos. It is built for real operating environments where careful deployment matters.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
