import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck, Siren, TestTubeDiagonal } from "lucide-react";

import { AudiencePathGrid } from "@/components/audience-path-grid";
import { StageGrid } from "@/components/stage-grid";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroArchitecture } from "@/components/hero-architecture";
import { EvidencePack } from "@/components/evidence-pack";
import { ProductSnapshot } from "@/components/product-snapshot";
import { getPackRequestHref, getRequestHref } from "@/lib/packs";

const whyPoints = [
  {
    icon: BadgeCheck,
    title: "Policy Composer",
    description:
      "Convert plain-English policy into structured controls: what the AI may do, what it must not do, when review is required, and what evidence must be recorded.",
  },
  {
    icon: TestTubeDiagonal,
    title: "Testing before operational use",
    description:
      "Check prompts, workflow paths, controls, and failure modes before a team depends on the output.",
  },
  {
    icon: ShieldCheck,
    title: "Human review where it matters",
    description:
      "Introduce approval gates, escalation rules, and sign-off points around sensitive AI-supported work.",
  },
  {
    icon: Siren,
    title: "Evidence that travels with the workflow",
    description:
      "Preserve what happened, what was checked, who approved, and what needs to be reviewed later.",
  },
];

const audiencePaths = [
  {
    audience: "For Investors",
    title: "Assess the company quickly",
    description:
      "See the market need, initial wedge, current build stage, and the route from early workflow adoption to broader platform value.",
    href: getPackRequestHref("investor-overview"),
    ctaLabel: "Request investor overview",
  },
  {
    audience: "For Financial Services",
    title: "See the workflow fit",
    description:
      "Explore how Corentis adds policy checks, review gates, exception handling, and evidence export around sensitive operational workflows.",
    href: getPackRequestHref("financial-services-workflow-brief"),
    ctaLabel: "Request financial-services walkthrough",
  },
  {
    audience: "For Life Sciences",
    title: "Explore bounded operational use",
    description:
      "Understand where Corentis fits in document-heavy, governed operational workflows without making diagnostic or treatment claims.",
    href: "/life-sciences/",
    ctaLabel: "Explore life sciences use cases",
  },
  {
    audience: "For Assurance Review",
    title: "Review the assurance case",
    description:
      "See how Corentis approaches oversight, review discipline, evidence production, and careful claim boundaries in practice.",
    href: getPackRequestHref("assurance-summary"),
    ctaLabel: "Request assurance summary",
  },
  {
    audience: "For Government / Funding",
    title: "Assess public value and readiness",
    description:
      "Review the responsible deployment case, UK regulated-sector adoption path, evidence generation, and current V1 stage without inflated funding claims.",
    href: getRequestHref("government-funding-readiness"),
    ctaLabel: "Request funding readiness overview",
  },
];

const stageItems = [
  {
    label: "Current stage",
    title: "Working V1 demo in financial services",
    description: "Corentis now has a local interactive V1 complaints-assistant demo that shows policy selection, control-plan application, review blocking, escalation, and evidence capture.",
  },
  {
    label: "Exists now",
    title: "Interactive workflow and evidence surfaces",
    description: "The current product story is grounded in an interactive V1 demo plus prototype workflow views, sample evidence outputs, and sector-specific walkthroughs.",
  },
  {
    label: "Being validated",
    title: "Complaints-assistant buyer fit and design-partner path",
    description: "Current work is focused on design-partner conversations, workflow fit in financial services, and what proof serious buyers and reviewers need next.",
  },
  {
    label: "Near-term path",
    title: "From one workflow to platform expansion",
    description: "The commercial route starts with one internally approved workflow and expands into adjacent use cases with similar control and evidence needs.",
  },
];

const quickOutcomes = [
  "faster internal approval of early AI pilots",
  "clearer governance around sensitive workflows",
  "safer rollout with defined review gates",
  "stronger audit and assurance trails",
];

const howItWorks = [
  {
    label: "01",
    title: "Policy Composer identifies the rulebook",
    description: "Plain-English policy is turned into operational controls around one AI-assisted workflow.",
  },
  {
    label: "02",
    title: "Control plan is applied",
    description: "Corentis defines what the workflow may do, what it must not do, when review is required, and what evidence must be captured.",
  },
  {
    label: "03",
    title: "Unsafe actions are blocked or escalated",
    description: "Where direct send is not acceptable, the workflow stops, routes to a named reviewer, and triggers escalation when needed.",
  },
  {
    label: "04",
    title: "Evidence Vault keeps the record",
    description: "Evidence artefacts are persisted and surfaced so later review does not depend on reconstruction.",
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

        <Container className="relative grid gap-10 py-14 sm:gap-12 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14 lg:py-28 xl:py-30">
          <div className="max-w-4xl lg:pt-10 xl:pt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-electric-soft)]">
              Corentis
            </p>
            <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-4xl font-semibold tracking-[-0.07em] text-white sm:mt-6 sm:text-6xl lg:text-7xl">
              Turn AI policy into governed action.
            </h1>
            <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-white/86 sm:mt-4 sm:text-2xl">
              The policy-control and evidence layer for regulated workflows.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
              Corentis makes AI policy operational.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              It turns plain-English governance into live controls, review gates, escalation rules, and evidence trails that guide AI-assisted work as it happens.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              That means teams can adopt AI faster, reduce training burden, improve consistency, handle more work safely, and stay firmly inside regulatory expectations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button href="/platform/" className="w-full sm:w-auto">
                Explore the platform
              </Button>
              <Button href={getPackRequestHref("financial-services-workflow-brief")} variant="secondary" className="w-full sm:w-auto">
                Request financial-services walkthrough
              </Button>
            </div>
          </div>

          <div className="lg:pt-6 xl:pt-8">
            <HeroArchitecture />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/8 py-6">
        <Container>
          <p className="text-center text-sm font-medium tracking-[0.04em] text-[var(--color-text-muted)]">
            Built for organisations that need AI to be useful, governed, and ready for scrutiny.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Choose Your Path"
            title="One platform, clearer journeys for the people who need to assess it."
            description="Corentis speaks to investors, sector buyers, and assurance-focused reviewers through one coherent proposition: safer deployment of regulated AI."
          />
          <div className="mt-12">
            <AudiencePathGrid items={audiencePaths} />
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why Corentis"
              title="The AI question has changed."
              description="The important question is no longer whether advanced AI can produce a useful output. It is whether policy can be turned into operational control in work that carries regulatory, conduct, or public-interest consequences."
            />
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-[var(--color-text-muted)]">
              <p>
                In those environments, confidence does not come from model performance alone. Teams need to see which
                policy applied, what controls were triggered, where human review took place, and what evidence remains
                if the process is questioned later.
              </p>
              <p>
                Corentis is being built to provide that missing layer. Not another model, and not a consultancy
                wrapper, but a policy-control and evidence layer for governed deployment.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
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

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What Corentis Helps Teams Do"
            title="Policy Composer is the heart of the product."
            description="Policy Composer converts plain-English policy into structured control plans: allowed actions, blocked actions, review gates, escalation triggers, and evidence requirements."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Policy Composer",
                description: "Convert plain-English policy into structured control plans: allowed actions, blocked actions, review gates, escalation logic, and evidence requirements.",
              },
              {
                title: "Advisor guidance",
                description: "Guide the person using the workflow with the relevant policy, required checks, and visible constraints at the point of action.",
              },
              {
                title: "Approval and escalation",
                description: "Block unsafe direct send, introduce named review gates, and trigger escalation where the workflow requires human judgement.",
              },
              {
                title: "Evidence Vault",
                description: "Persist evidence artefacts and review-ready outputs so governance, assurance, and audit-facing teams can inspect what happened later.",
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

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="A fast view of how Corentis wraps a workflow."
            description="The product direction is straightforward: define the workflow, attach controls, keep live activity visible, and make evidence easier to export."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <div key={step.label} className="glass-panel reveal-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-electric-soft)]">
                  {step.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <ProductSnapshot
              eyebrow="Current Prototype Outputs"
              title="What the current V1 direction already shows"
              description="These visual modules are intended to reflect the current interactive demo direction without implying live customer deployment."
              statusLabel="Interactive V1 demo direction"
              items={[
                {
                  label: "Policy Composer",
                  title: "Relevant policy is identified",
                  detail: "The workflow can identify the applicable complaints policy and turn it into an operational control plan.",
                  value: "Policy to controls",
                },
                {
                  label: "Approvals",
                  title: "Direct send can be blocked",
                  detail: "Where human approval is required, the workflow stops, routes to a reviewer, and makes the reason visible.",
                  value: "Human review",
                },
                {
                  label: "Escalation",
                  title: "Vulnerable-customer logic is triggered",
                  detail: "Sensitive complaints can be escalated through visible workflow rules rather than handled ad hoc.",
                  value: "Triggered by policy",
                },
                {
                  label: "Evidence Vault",
                  title: "Evidence artefacts are persisted",
                  detail: "Review artefacts are surfaced in one place so later assurance, governance, and audit work is easier.",
                  value: "Structured record",
                },
              ]}
              events={[
                "Relevant complaints policy identified at workflow start",
                "Unsafe direct send blocked pending human review",
                "Evidence artefacts persisted in Evidence Vault",
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Start With One Workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              The first win is not total transformation. It is one workflow people can understand, approve, and defend.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is designed for a practical adoption path: choose a bounded workflow, turn policy into a
                control plan, guide the advisor, block unsafe actions, trigger review and escalation where needed, and
                keep the evidence trail intact.
              </p>
              <p>
                That makes early deployment easier to approve internally, easier to explain to stakeholders, and easier
                to extend into neighbouring workflows later.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Outcomes Teams Care About
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {quickOutcomes.map((outcome) => (
                <li key={outcome} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Built For High-Stakes Workflows"
            title="Start in the sectors where workflow discipline already matters."
            description="Corentis is being shaped around regulated environments where documentation, approvals, and review are already part of the operating model."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SectorCard
              href="/financial-services/"
              imageSrc="/images/financial-services-canary-wharf.jpg"
              title="Financial Services"
              description="Complaints handling, vulnerable-customer escalation, and customer-communication review with clearer policy checks, approval steps, and evidence export."
              ctaLabel="See the financial services workflow"
            />
            <SectorCard
              href="/life-sciences/"
              imageSrc="/images/clinical-lab.jpg"
              title="Life Sciences"
              description="Bounded operational workflows such as document review, protocol-deviation triage, and summarisation support with human sign-off and non-diagnostic positioning."
              ctaLabel="Explore bounded use cases"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-24">
        <Container>
          <StageGrid
            eyebrow="Current Product Stage"
            title="What exists now, what is illustrative, and what comes next"
            description="Corentis is being presented honestly as an early product company with a working V1 local demo. The goal here is to make the current stage legible rather than imply live customer deployment where none is being claimed."
            items={stageItems}
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Proof Framing"
            title="Illustrative outputs, labeled clearly."
            description="These modules show the kind of structured oversight Corentis is designed to produce. They are illustrative of the product direction, not presented as live customer data."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <HeroArchitecture />
            <EvidencePack />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={getPackRequestHref("sample-evidence-pack")} className="w-full sm:w-auto">
              Request sample evidence pack
            </Button>
            <Button href={getPackRequestHref("assurance-summary")} variant="secondary" className="w-full sm:w-auto">
              Request assurance summary
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Now"
            title="Governed deployment is becoming a category need."
            description="As organisations move beyond AI experiments, the bottleneck shifts from raw capability to deployment discipline. The teams that can test, approve, monitor, and evidence AI use will be the teams that can adopt it with confidence."
          />
          <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
            That makes Corentis relevant commercially, operationally, and from a public-interest perspective at the same time.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              What Corentis Is
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A policy-control and evidence layer for AI-assisted regulated workflows</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A way to connect policy, controls, human review, escalation, and evidence in one governed workflow</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">A reviewable operating layer around sensitive workflow steps, not a replacement for the underlying AI system</li>
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              What Corentis Is Not
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a generic chatbot or a promise of more AI for its own sake</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a substitute for legal, compliance, regulatory, or human judgement</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Not a guarantee that AI is automatically safe or that regulation can be automated away</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="glass-panel overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-electric-soft)]">
                  Next Step
                </p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Choose the conversation that fits your role.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
                  Request an investor overview, an assurance summary, a financial-services walkthrough, or a design-partner conversation.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/contact/" className="w-full sm:w-auto">
                  Discuss design partnership
                </Button>
                <Button href={getPackRequestHref("assurance-summary")} variant="secondary" className="w-full sm:w-auto">
                  Request assurance summary
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
