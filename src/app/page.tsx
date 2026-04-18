import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck, Siren, TestTubeDiagonal } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroArchitecture } from "@/components/hero-architecture";
import { EvidencePack } from "@/components/evidence-pack";
import { platformModules } from "@/lib/site";

const whyPoints = [
  {
    icon: TestTubeDiagonal,
    title: "What the system was asked to do",
    description:
      "Capture the use case, prompts, workflow boundaries, and the role AI is supposed to play before the workflow goes live.",
  },
  {
    icon: ShieldCheck,
    title: "What checks were applied",
    description:
      "Record the testing, control checks, and review points that shape whether a workflow is ready for regulated use.",
  },
  {
    icon: Siren,
    title: "Where human approval happened",
    description:
      "Show where people approved, rejected, overrode, or escalated outputs, and preserve what evidence remains afterwards.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-building.jpg"
            alt="Reflective glass facade of a modern office building"
            fill
            className="object-cover opacity-28"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,24,0.95),rgba(4,10,24,0.8),rgba(4,10,24,0.58))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(46,141,255,0.22),transparent_28%)]" />
        </div>

        <Container className="relative grid gap-10 py-14 sm:gap-12 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-4xl font-semibold tracking-[-0.07em] text-white sm:mt-6 sm:text-6xl lg:text-7xl">
              Corentis
            </h1>
            <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-white/86 sm:mt-4 sm:text-2xl">
              The policy plane for regulated AI
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
              Corentis is the control layer between advanced AI and the standards that govern its use. It helps
              organisations deploy AI in regulated workflows with testing, approvals, runtime monitoring, and evidence
              people can review and trust.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button href="/contact/" className="w-full sm:w-auto">Register for more information</Button>
              <Button href="/platform/" variant="secondary" className="w-full sm:w-auto">
                Explore the platform
              </Button>
            </div>
          </div>

          <HeroArchitecture />
        </Container>
      </section>

      <section className="border-b border-white/8 py-6">
        <Container>
          <p className="text-center text-sm font-medium tracking-[0.04em] text-[var(--color-text-muted)]">
            Built for organisations that need AI to be useful, accountable, and ready for scrutiny.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Corentis"
            title="AI is getting stronger. Trust is not keeping up."
            description="Many organisations can see where modern AI could help. The harder step is moving from experiments to live use without losing visibility, control, or confidence."
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-[var(--color-text-muted)]">
            <p>In regulated environments, teams need to know:</p>
            <ul className="space-y-2 pl-5">
              <li>what the system was asked to do</li>
              <li>what information it used</li>
              <li>what checks were applied</li>
              <li>where human approval happened</li>
              <li>and what evidence exists if a decision is ever questioned later</li>
            </ul>
            <p>
              Corentis is built for that moment. It turns high-stakes AI workflows into governed processes that are
              easier to test, monitor, review, and defend.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {whyPoints.map((item) => (
              <div key={item.title} className="glass-panel reveal-card p-6">
                <item.icon className="h-6 w-6 text-[var(--color-electric-soft)]" />
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What The Platform Does"
            title="A control layer for high-stakes AI work"
            description="Corentis sits around important AI workflows and adds the structure needed for safe deployment."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Pre-deployment testing",
                description: "Assess prompts, workflow logic, controls, and failure modes before important AI work reaches production.",
              },
              {
                title: "Human approvals",
                description: "Introduce clear review points where people can approve, reject, escalate, or override important outputs.",
              },
              {
                title: "Runtime monitoring",
                description: "Track how workflows behave over time, including exceptions, overrides, drift, and other events worth attention.",
              },
              {
                title: "Exported evidence",
                description: "Generate structured evidence for governance, assurance, procurement, audits, and external review.",
              },
            ].map((module) => (
              <div key={module.title} className="glass-panel reveal-card p-6">
                <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{module.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Built For High-Stakes Workflows"
            title="Start with one workflow. Build confidence from there."
            description="Corentis is designed for organisations working in environments where accuracy, accountability, and review carry real weight."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SectorCard
              href="/financial-services/"
              imageSrc="/images/financial-services-canary-wharf.jpg"
              title="Financial Services"
              description="Support AI use in complaints handling, vulnerable-customer escalation, and customer-communication review with stronger control and traceability."
              ctaLabel="Explore Financial Services"
            />
            <SectorCard
              href="/clinical-trials/"
              imageSrc="/images/clinical-lab.jpg"
              title="Clinical Trials"
              description="Support trial document review, protocol-deviation triage, and safety-case summarisation with human sign-off and clear evidence."
              ctaLabel="Explore Clinical Trials"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From AI output to governed process"
            description="Corentis helps teams move from isolated AI outputs to workflows that can be reviewed, managed, and defended."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel p-6 sm:p-8">
              <div className="grid gap-4">
                <FlowStep
                  title="1. Define the workflow"
                  description="Capture the use case, the rules that apply, and where human oversight is required."
                />
                <FlowStep
                  title="2. Test before deployment"
                  description="Check the workflow against scenarios, controls, and expected behaviours before live use."
                />
                <FlowStep
                  title="3. Run with guardrails"
                  description="Monitor the workflow in operation, record what happened, and surface issues that need attention."
                />
                <FlowStep
                  title="4. Export evidence"
                  description="Produce a clear record of decisions, approvals, exceptions, and supporting materials."
                />
              </div>
            </div>
            <div className="glass-panel p-6 sm:p-8">
              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,34,0.88),rgba(8,16,34,0.58))] p-6">
                <div className="grid gap-4">
                  <ArchitectureLane title="Workflow" items={["AI-assisted complaint draft", "Protocol deviation review"]} />
                  <ArchitectureLane title="Policy plane" items={["Risk thresholds", "Approval rules", "Escalation triggers"]} active />
                  <ArchitectureLane title="Oversight" items={["Human reviewers", "Runtime checks", "Exception handling"]} />
                  <ArchitectureLane title="Evidence" items={["Decision trail", "Test pack", "Audit export"]} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Evidence Pack"
            title="Evidence people can work with"
            description="Corentis creates clear, structured records that help teams understand how a workflow behaved and what happened around it."
          />
          <div className="mt-8 max-w-3xl space-y-3 text-base leading-8 text-[var(--color-text-muted)]">
            <p>A typical evidence pack can include:</p>
            <ul className="space-y-2 pl-5">
              <li>workflow summary</li>
              <li>relevant controls and policies</li>
              <li>test results</li>
              <li>approval history</li>
              <li>notable exceptions</li>
              <li>monitoring snapshot</li>
              <li>review-ready export for governance or assurance teams</li>
            </ul>
          </div>
          <div className="mt-12">
            <EvidencePack />
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Now"
            title="The next phase of AI is not just more capability. It is safer deployment."
            description="As AI becomes more capable, more organisations want to use it in real work. The harder question is no longer whether AI can produce an output. It is whether that output can be used responsibly where standards, scrutiny, and trust matter."
          />
          <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
            Corentis is being built for that next stage of adoption: useful systems, stronger oversight, and clearer evidence.
          </p>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="glass-panel overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-electric-soft)]">Final CTA</p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Move from AI experiments to governed deployment
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
                  Register for more information and follow the early development of the platform.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/contact/" className="w-full sm:w-auto">Register for more information</Button>
                <Button href="/privacy/" variant="secondary" className="w-full sm:w-auto">
                  View privacy notice
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function SectorCard({
  href,
  imageSrc,
  title,
  description,
  ctaLabel,
}: {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
  ctaLabel: string;
}) {
  return (
    <Link href={href} className="glass-panel reveal-card group overflow-hidden p-3">
      <div className="relative aspect-[1.4/1] overflow-hidden rounded-[1.6rem]">
        <Image src={imageSrc} alt={title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,24,0.05),rgba(4,10,24,0.72))]" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-electric-soft)]">
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function FlowStep({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
    </div>
  );
}

function ArchitectureLane({
  title,
  items,
  active = false,
}: {
  title: string;
  items: string[];
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-5 ${
        active
          ? "border-[rgba(145,214,255,0.28)] bg-[linear-gradient(135deg,rgba(46,141,255,0.14),rgba(46,141,255,0.04))]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">{title}</h3>
        {active ? <BadgeCheck className="h-5 w-5 text-[var(--color-electric-soft)]" /> : null}
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[var(--color-text-muted)]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
