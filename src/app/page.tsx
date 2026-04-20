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

const whyPoints = [
  {
    icon: TestTubeDiagonal,
    title: "Testing before live use",
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
    href: "/investors/",
    ctaLabel: "View investor overview",
  },
  {
    audience: "For Financial Services",
    title: "See the workflow fit",
    description:
      "Explore how Corentis adds policy checks, review gates, exception handling, and evidence export around sensitive operational workflows.",
    href: "/financial-services/",
    ctaLabel: "See the financial services workflow",
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
    href: "/assurance/",
    ctaLabel: "Read assurance overview",
  },
];

const stageItems = [
  {
    label: "Current stage",
    title: "Prototype product direction",
    description: "Corentis is at an early build stage, refining the platform shape and how governed deployment should work in practice.",
  },
  {
    label: "Exists now",
    title: "Illustrative workflow and evidence modules",
    description: "The current site shows prototype workflow views, sample evidence outputs, and worked examples to make the product direction concrete.",
  },
  {
    label: "Being validated",
    title: "Initial workflow wedge and buyer fit",
    description: "Current work is focused on which bounded workflows land first, who needs them most, and what proof serious buyers require.",
  },
  {
    label: "Near-term path",
    title: "From one workflow to platform expansion",
    description: "The commercial route starts with one approved workflow and expands into adjacent use cases with similar control and evidence needs.",
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
    title: "Define the workflow",
    description: "Capture the use case, standards, owners, and points where human review is required.",
  },
  {
    label: "02",
    title: "Apply controls before launch",
    description: "Test prompts, check policy conditions, and make approval gates visible before live use.",
  },
  {
    label: "03",
    title: "Monitor in operation",
    description: "Track exceptions, overrides, alerts, and other runtime signals that matter in practice.",
  },
  {
    label: "04",
    title: "Export evidence",
    description: "Generate packs that support governance meetings, assurance review, procurement, or audit support.",
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
              Corentis is the control and assurance layer between advanced AI and the standards that govern its use.
              It helps organisations deploy AI in regulated workflows with testing, human approvals, runtime
              monitoring, and evidence people can review and trust.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              Move from pilot uncertainty to a workflow that can be reviewed, approved, and defended.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button href="/platform/" className="w-full sm:w-auto">
                Explore the platform
              </Button>
              <Button href="/contact/" variant="secondary" className="w-full sm:w-auto">
                Request an overview
              </Button>
            </div>
          </div>

          <HeroArchitecture />
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
              description="The important question is no longer whether advanced AI can produce a useful output. It is whether that output can be deployed responsibly in work that carries operational, regulatory, or public-interest consequences."
            />
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-[var(--color-text-muted)]">
              <p>
                In those environments, confidence does not come from model performance alone. Teams need to see what
                the workflow was meant to do, what checks were applied, where human review took place, and what
                evidence remains if the process is questioned later.
              </p>
              <p>
                Corentis is being built to provide that missing layer. Not another model, and not a consultancy
                wrapper, but a platform for governed deployment.
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
            title="Add control without turning every pilot into a major governance project."
            description="Corentis helps teams move from experimentation to governed use with a smaller set of visible, repeatable controls."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Pre-deployment testing",
                description: "Check prompts, workflow logic, and failure modes before important AI-supported work reaches production.",
              },
              {
                title: "Approval and escalation",
                description: "Introduce review gates, decision thresholds, and named sign-off where sensitive outputs need human judgement.",
              },
              {
                title: "Runtime visibility",
                description: "Monitor live behaviour, surface exceptions, and preserve context around overrides, alerts, and flagged events.",
              },
              {
                title: "Evidence export",
                description: "Generate review-ready packs for assurance, governance, procurement, audit, and internal oversight teams.",
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
              title="What the product direction already looks like on the page"
              description="These visual modules are intended to make the current prototype direction more concrete without implying live customer deployment."
              statusLabel="Prototype-stage outputs"
              items={[
                {
                  label: "Testing",
                  title: "Scenario checks captured",
                  detail: "Illustrative coverage for prompt variants, policy conditions, and expected failure handling.",
                  value: "Pre-launch",
                },
                {
                  label: "Approvals",
                  title: "Named review gates visible",
                  detail: "Important steps can be routed to specific reviewers with approval, override, or escalation paths.",
                  value: "Human-in-loop",
                },
                {
                  label: "Runtime",
                  title: "Events surfaced as the workflow runs",
                  detail: "Prototype views show alerts, overrides, and exceptions as workflow state rather than scattered notes.",
                  value: "Live visibility",
                },
                {
                  label: "Exports",
                  title: "Evidence shaped for review",
                  detail: "Illustrative exports are framed for governance meetings, assurance review, audit support, and procurement scrutiny.",
                  value: "PDF / JSON",
                },
              ]}
              events={[
                "Control mapping attached to workflow record",
                "Sensitive step routed to named approver",
                "Evidence pack generated for review-ready export",
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
              The first win is not total transformation. It is a workflow people are willing to let go live.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is designed for a practical adoption path: choose a bounded workflow, define the rules around
                it, test it before launch, add review gates, monitor it in operation, and export the evidence that
                helps teams stay aligned.
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
            description="Corentis is being presented honestly as an early product company. The goal here is to make the current stage legible rather than imply live customer deployment where none is being claimed."
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
                  Request an investor overview, an assurance summary, or a sector-specific walkthrough of the platform.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/contact/" className="w-full sm:w-auto">
                  Start the conversation
                </Button>
                <Button href="/assurance/" variant="secondary" className="w-full sm:w-auto">
                  Read assurance overview
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
