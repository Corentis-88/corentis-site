import { FaqList } from "@/components/faq-list";
import { FinancialWorkflowDiagram } from "@/components/financial-workflow-diagram";
import { WorkflowExample } from "@/components/workflow-example";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ComparisonGrid } from "@/components/comparison-grid";
import { Button } from "@/components/ui/button";
import { getPackRequestHref } from "@/lib/packs";

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

const valueStats = [
  {
    value: "1.85m",
    label: "complaints in 2025 H1",
    detail:
      "FCA data shows complaint volumes remain consistently high across UK financial services, keeping pressure on service quality and operational control.",
    implication: "Corentis helps firms apply the same policy logic and evidence discipline across repeatable complaint workflows.",
    source: "FCA complaints data",
    href: "https://www.fca.org.uk/firms/complaints-data",
  },
  {
    value: "£235.9m",
    label: "redress paid in 2024 H2",
    detail:
      "Complaint handling is not only a service issue. It can create material redress, remediation, and conduct exposure when processes are inconsistent.",
    implication: "Corentis is designed to make review gates, escalation triggers, and decision evidence visible before issues become harder to reconstruct.",
    source: "FCA aggregate complaints data 2024 H2",
    href: "https://www.fca.org.uk/data/complaints-data/aggregate-complaints-data-2024-h2",
  },
  {
    value: "$200bn-$340bn",
    label: "annual gen-AI value in banking",
    detail:
      "McKinsey estimates banking is one of the largest gen-AI opportunities, largely through productivity gains across operations and customer-facing work.",
    implication: "The commercial pressure to adopt AI is real. Corentis helps teams move faster without treating control and evidence as afterthoughts.",
    source: "McKinsey, generative AI in banking",
    href: "https://www.mckinsey.com/industries/financial-services/our-insights/capturing-the-full-value-of-generative-ai-in-banking",
  },
  {
    value: "3,000+",
    label: "regulated firms in FCA aggregate complaints data",
    detail:
      "The operating challenge is broad: many firms need more consistent ways to handle, evidence, and improve customer processes.",
    implication: "A reusable policy-control layer can reduce duplicated governance work as AI-assisted workflows expand.",
    source: "FCA complaints data",
    href: "https://www.fca.org.uk/firms/complaints-data",
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
        title="Governed complaints AI with policy, review, escalation, and evidence."
        description="Financial institutions are under pressure to improve efficiency, consistency, and service quality without weakening accountability. Corentis helps teams introduce AI into complaints and customer operations by turning policy into operational controls, advisor guidance, approval gates, escalation logic, and evidence."
        imageSrc="/images/financial-services-canary-wharf.jpg"
        imageAlt="Modern office building in Canary Wharf"
        ctaHref={getPackRequestHref("financial-services-workflow-brief")}
        ctaLabel="Request financial-services walkthrough"
      />

      <section className="border-b border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where The Value Lies"
            title="The commercial case is speed with control, not speed instead of control"
            description="Complaints and customer operations carry cost, conduct, service, and reputation pressure at the same time. Corentis is shaped for teams that want AI efficiency without losing the evidence trail buyers, boards, auditors, and regulators may later ask to see."
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
            eyebrow="First Use Cases"
            title="Start where the operational pain is real and the workflow is clear"
            description="Corentis is designed for teams that already know where AI could help, but need a safer way to deploy it in work that carries compliance, conduct, and operational consequences. The current V1 demo is shaped around complaints handling."
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
                In a complaints workflow, Corentis works with your existing CRM or case-management process:
                identifying the relevant policy, applying controls, guiding the advisor, blocking unsafe send where
                needed, and preserving the evidence trail alongside the customer record.
              </p>
              <p>
                This supports increased productivity, better customer experience, and more effective complaints
                handling across teams while keeping review, escalation, and evidence visible.
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
                <li>which policy applied to the case</li>
                <li>what the workflow did</li>
                <li>what controls and review gates were triggered</li>
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
            title="Complaints assistant walkthrough with policy, blocking, escalation, and evidence"
            summary="The current V1 walkthrough is shaped around complaints triage: a workflow where speed matters, but review discipline, vulnerable-customer handling, and traceability matter just as much."
            note="Illustrative V1 walkthrough"
            steps={[
              {
                label: "Workflow trigger",
                detail:
                  "A new complaint enters the workflow and Corentis begins by identifying the relevant complaints policy for the case.",
              },
              {
                label: "Policy Composer and control plan",
                detail:
                  "Corentis converts the policy into a structured control plan covering what the assistant may do, what it must not do, when direct send must be blocked, and what evidence must be captured.",
              },
              {
                label: "Advisor guidance and human approval",
                detail:
                  "The advisor is guided through the workflow, and where human approval is required Corentis blocks unsafe direct send and routes the case to a named reviewer.",
              },
              {
                label: "Escalation and Evidence Vault",
                detail:
                  "Vulnerable-customer escalation is triggered where needed, and evidence artefacts are persisted and surfaced in Evidence Vault for later inspection.",
              },
            ]}
            outcomes={[
              "policy turned into visible workflow logic rather than tribal knowledge",
              "review gates for sensitive or ambiguous complaints",
              "unsafe direct send blocked where human approval is required",
              "evidence persisted for governance, QA, risk, and compliance teams",
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
              title: "Before Corentis",
              points: [
                "policy lives in documents and is interpreted manually at the point of work",
                "advisors apply controls inconsistently across similar complaints",
                "review gates and customer-communication approval paths are hard to evidence",
                "vulnerable-customer or hardship escalation logic can be fragmented",
                "evidence gathering is manual, retrospective, and time-consuming",
              ],
            }}
            right={{
              title: "With Corentis",
              points: [
                "the relevant policy is matched to the workflow",
                "Policy Composer generates and applies a structured control plan",
                "unsafe direct send is blocked where human approval is required",
                "escalation is triggered where customer circumstances require extra care",
                "advisor next steps and evidence are captured as the work happens",
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
              Request a financial-services walkthrough built around one complaints workflow.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
              The current V1 demo is local and early, not live customer deployment, but it already makes the workflow, review logic, and evidence story much easier to assess.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={getPackRequestHref("financial-services-workflow-brief")} className="w-full sm:w-auto">
                Request financial-services walkthrough
              </Button>
              <Button href="/contact/" variant="secondary" className="w-full sm:w-auto">
                Discuss design partnership
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
