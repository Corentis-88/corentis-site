import { PageHero } from "@/components/page-hero";
import { ProductSnapshot } from "@/components/product-snapshot";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const theses = [
  {
    title: "A real category need",
    description:
      "As regulated organisations move beyond experimentation, governed AI deployment becomes a repeatable product need rather than a bespoke consulting problem.",
  },
  {
    title: "An initial wedge with clear pain",
    description:
      "Corentis can land with one workflow in sectors where approvals, escalation, and evidence are already part of the operating model.",
  },
  {
    title: "A route to expansion",
    description:
      "Once one workflow is live, the platform can expand into adjacent processes, growing from a single use case into a broader control layer.",
  },
];

const credibility = [
  {
    title: "Founder and company seriousness",
    description:
      "Corentis is being built as a product company with a clear category thesis, regulated-sector focus, and disciplined claim posture.",
  },
  {
    title: "Current stage of build",
    description:
      "The company is at an early product stage, shaping a repeatable governed-deployment platform rather than claiming mature enterprise rollouts before they exist.",
  },
  {
    title: "What has already been built",
    description:
      "The current product direction includes workflow control framing, illustrative oversight flows, sample evidence outputs, and sector-specific deployment narratives.",
  },
  {
    title: "What is being validated now",
    description:
      "Current validation is focused on first workflow wedge clarity, sector fit, buyer relevance, and the practical shape of evidence, review, and approval requirements.",
  },
  {
    title: "Near-term milestones",
    description:
      "Near-term priorities include tightening the first repeatable workflow, converting conversations into design-partner learning, and sharpening the route from pilot to revenue.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="A category-defining control layer for regulated AI deployment"
        description="Corentis is being built for a market that is becoming easier to see: organisations want to use advanced AI in meaningful work, but they need a safer path from pilot to deployment. Corentis aims to provide that control and assurance layer."
        ctaHref="/contact/"
        ctaLabel="Request investor overview"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Market Thesis"
            title="The next AI bottleneck is not capability. It is deployment discipline."
            description="Large organisations increasingly believe AI can be useful. What slows them down is the practical work of testing, approvals, oversight, evidence, and internal confidence."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {theses.map((item) => (
              <div key={item.title} className="glass-panel reveal-card p-6">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Why Now</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Market timing is improving because the AI conversation inside serious organisations is changing. The
                central question is increasingly about whether AI can be deployed safely in work that matters, not
                whether a model can produce impressive outputs.
              </p>
              <p>
                That creates space for infrastructure that helps organisations govern deployment rather than just
                generate output.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Commercial Logic</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                The commercial model begins with one repeatable workflow where the enterprise pain point is already
                visible: approvals are slow, evidence gathering is fragmented, and teams struggle to move from pilot to
                deployment.
              </p>
              <p>
                From there, Corentis can expand into adjacent workflows and become a broader governed-deployment layer
                across the organisation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Initial Wedge</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Start with one governed workflow in a regulated operating environment.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is not trying to solve every AI risk question at once. The first repeatable use case is a
                workflow where AI is already attractive, but deployment is slowed by the need for review gates,
                escalation logic, and evidence.
              </p>
              <p>
                That makes the product easier to land, easier to explain, and more realistic as an enterprise buying
                path.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Route To Scale</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Once one workflow is governed successfully, the same control layer can extend into neighbouring
                workflows with similar needs for approvals, oversight, exception handling, and evidence reuse.
              </p>
              <p>
                That gives Corentis a practical expansion path rather than a single-point solution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <ProductSnapshot
            eyebrow="Current Product Substance"
            title="What exists now, and what investors are actually being shown"
            description="Corentis is being presented with deliberate stage honesty. The current build direction is product-shaped, but still early."
            statusLabel="Current build focus"
            items={[
              {
                label: "Exists now",
                title: "Workflow control framing",
                detail: "Prototype views already make testing, review gates, runtime visibility, and evidence export legible as one product.",
                value: "Illustrative",
              },
              {
                label: "Commercial wedge",
                title: "One repeatable workflow first",
                detail: "The first deployment path is a governed workflow where internal approval friction and evidence demands are already visible.",
                value: "Focused",
              },
              {
                label: "Expansion path",
                title: "Shared control layer across workflows",
                detail: "Once one workflow lands, the same policy, monitoring, and evidence logic can expand into adjacent processes.",
                value: "Platform route",
              },
              {
                label: "Now validating",
                title: "Buyer and design-partner fit",
                detail: "Current work is centred on which workflow lands first, what proof serious buyers need, and how that turns into revenue.",
                value: "In validation",
              },
            ]}
            events={[
              "Initial workflow wedge defined around regulated operating pain",
              "Prototype evidence and oversight outputs shaped for serious buyers",
              "Near-term goal is design-partner learning that sharpens pilot-to-revenue path",
            ]}
          />
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Credibility"
            title="A clearer view of stage, substance, and near-term progress"
            description="This section is intended to make the company legible to investor readers without overstating maturity or traction."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {credibility.map((item) => (
              <div key={item.title} className="glass-panel reveal-card p-6">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
