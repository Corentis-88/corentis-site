import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPackRequestHref, getRequestHref } from "@/lib/packs";

const readinessPoints = [
  {
    title: "Responsible deployment",
    description:
      "Corentis is focused on helping regulated teams use AI with visible controls, human review, and evidence rather than unmanaged automation.",
  },
  {
    title: "UK regulated-sector adoption",
    description:
      "The initial wedge is financial services complaints handling, with a repeatable control layer that can extend into other review-heavy workflows.",
  },
  {
    title: "Evidence generation",
    description:
      "The product direction makes policy decisions, approval gates, simulations, escalation events, and evidence artefacts easier to inspect.",
  },
  {
    title: "Public-interest alignment",
    description:
      "The aim is practical accountability: helping organisations adopt useful AI while keeping human judgement, auditability, and oversight visible.",
  },
];

const stageItems = [
  "Working local V1 prototype/demo for a financial-services complaints workflow",
  "Policy Composer that turns plain-English policy into operational controls",
  "Approval blocking where human review is required",
  "Vulnerable-customer escalation logic in the V1 demo flow",
  "Evidence Vault concept for persisted policy, control, simulation, and evidence records",
  "No claim of live customer deployment, public funding award, regulatory approval, or certification",
];

export default function GovernmentFundingPage() {
  return (
    <>
      <PageHero
        eyebrow="Government / Funding Readiness"
        title="Responsible AI deployment with practical evidence."
        description="Corentis is being built as UK AI assurance infrastructure for regulated sectors. It helps teams turn policy into controls, approvals, simulations, escalation logic, and evidence so AI adoption can be assessed with greater confidence."
        ctaHref={getRequestHref("government-funding-readiness")}
        ctaLabel="Request funding readiness overview"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Public Value"
            title="Corentis supports useful AI adoption without weakening accountability."
            description="The opportunity is not just faster AI output. It is a better route from promising pilots to governed deployment in sectors where review, evidence, and public trust matter."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {readinessPoints.map((item) => (
              <div key={item.title} className="glass-panel reveal-card p-6">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              What The Product Adds
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Policy becomes a visible operating layer.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Policy Composer converts plain-English policy into structured controls: what the AI may do, what it
                must not do, when human review is required, when escalation is triggered, and what evidence must be
                recorded.
              </p>
              <p>
                That makes Corentis useful to buyers, boards, auditors, funders, and assurance teams who need to see
                how AI-supported work is being controlled.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Current Stage
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {stageItems.map((item) => (
                <li key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Funding-Relevant Case
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is aligned with the need for UK strategic AI capability, practical AI assurance, and adoption
                in regulated sectors. The product is designed to reduce duplicated governance effort and make evidence
                easier to reuse across buyers, boards, auditors, and assurance teams.
              </p>
              <p>
                The current work is early and careful: it is focused on a narrow financial-services wedge, design
                partner validation, and a repeatable control layer rather than broad claims of deployment maturity.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              Useful Next Steps
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Review the assurance and funding-readiness story together.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--color-text-muted)]">
              For public funding, advisory, or assessment conversations, the most helpful next discussion is usually
              around the current V1 demo, evidence outputs, design-partner path, and careful claim posture.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={getRequestHref("government-funding-readiness")} className="w-full sm:w-auto">
                Request funding readiness overview
              </Button>
              <Button href={getPackRequestHref("assurance-summary")} variant="secondary" className="w-full sm:w-auto">
                Request assurance summary
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
