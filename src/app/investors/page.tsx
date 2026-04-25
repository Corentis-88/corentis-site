import { PageHero } from "@/components/page-hero";
import { ProductSnapshot } from "@/components/product-snapshot";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getPackRequestHref } from "@/lib/packs";

const theses = [
  {
    title: "A real category need",
    description:
      "As regulated organisations move beyond experimentation, governed AI deployment becomes a repeatable product need rather than a bespoke consulting problem.",
  },
  {
    title: "An initial wedge with clear pain",
    description:
      "Corentis can land with one workflow in sectors where approvals, escalation, and evidence are already part of the operating model, starting with complaints handling in financial services.",
  },
  {
    title: "A route to expansion",
    description:
      "Once one workflow is approved for operational use, the platform can expand into adjacent processes, growing from a single use case into a broader control layer.",
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
      "The current product direction includes a working local V1 complaints-assistant demo, workflow control framing, illustrative oversight flows, sample evidence outputs, and sector-specific deployment narratives.",
  },
  {
    title: "What is being validated now",
    description:
      "Current validation is focused on first workflow wedge clarity, design-partner fit, buyer relevance, and the practical shape of evidence, review, and approval requirements.",
  },
  {
    title: "Near-term milestones",
    description:
      "Near-term priorities include tightening the complaints-assistant workflow, converting conversations into design-partner learning, and sharpening the route from pilot to revenue.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="A policy-control layer for regulated AI deployment"
        description="Corentis is being built for a market that is becoming easier to see: organisations want to use advanced AI in meaningful work, but they need a safer path from pilot to deployment. Corentis aims to provide the policy-control and evidence layer that makes that path more workable."
        ctaHref={getPackRequestHref("investor-overview")}
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
                visible: complaints handling is review-heavy, policy-laden, operationally valuable, and often slowed
                by fragmented approvals and evidence gathering.
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Not Another Chatbot</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Corentis does not sell more AI. It helps organisations approve AI-assisted work.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                The product thesis is that regulated organisations will not be blocked by a lack of AI capability alone.
                They will be blocked by whether policy, human review, escalation, and evidence can be made operational.
              </p>
              <p>
                That makes Corentis a deployment-control proposition: software that sits around AI-assisted workflows
                and makes them easier to assess, approve, supervise, and review.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Current Build Progress</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Working local V1 prototype/demo</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Policy-to-control composition through Policy Composer</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Governed complaint walkthrough with advisor guidance</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Blocked direct-send path and vulnerable-customer escalation logic</li>
              <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">Evidence Vault lineage for policy, control, simulation, and evidence records</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Initial Wedge</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Start with one governed complaints workflow in a regulated operating environment.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis is not trying to solve every AI risk question at once. The first repeatable use case is a
                workflow where AI is already attractive, but deployment is slowed by policy interpretation, review
                gates, escalation logic, and evidence requirements.
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
            description="Corentis is being presented with deliberate stage honesty. The current build direction is product-shaped, interactive, and still early."
            statusLabel="Current build focus"
            items={[
              {
                label: "Exists now",
                title: "Working V1 financial-services demo",
                detail: "A local complaints-assistant demo now shows policy identification, structured control plans, advisor guidance, blocked direct send, escalation, and Evidence Vault capture.",
                value: "Interactive V1",
              },
              {
                label: "Commercial wedge",
                title: "Complaints handling first",
                detail: "The first deployment path is a governed complaints workflow where internal approval friction, policy interpretation, and evidence demands are already visible.",
                value: "Focused",
              },
              {
                label: "Expansion path",
                title: "Shared control layer across workflows",
                detail: "Once one workflow lands, the same policy-composer, monitoring, approval, and evidence logic can expand into adjacent processes.",
                value: "Platform route",
              },
              {
                label: "Now validating",
                title: "Buyer and design-partner fit",
                detail: "Current work is centred on design-partner conversations, what proof serious buyers need, and how a first workflow turns into revenue.",
                value: "In validation",
              },
            ]}
            events={[
              "Complaints-assistant V1 demo now anchors the product story",
              "Prototype evidence and oversight outputs shaped for serious buyers",
              "Near-term goal is design-partner learning that sharpens pilot-to-revenue path",
            ]}
          />
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What the current build proves</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Corentis can now show a coherent product loop rather than thesis alone: a complaint enters, the
                relevant policy is identified, the control plan is applied, direct send is blocked where required,
                escalation is triggered, and evidence is retained.
              </p>
              <p>
                That does not imply production deployment or live customer use. It does make the commercial conversation more concrete.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">What should happen next</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                The next meaningful validation step is design-partner engagement around one workflow, one policy source,
                and one evidence requirement set.
              </p>
              <p>
                That path is commercially legible because it connects product usage, workflow relevance, and a practical route from pilot to recurring software value.
              </p>
            </div>
          </div>
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

      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Next Step</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Continue the investor conversation on product substance, wedge, and validation path.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
              The most useful next discussion is usually about the first workflow wedge, what the V1 demo already proves, and how design-partner learning turns into a credible route to revenue.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={getPackRequestHref("investor-overview")} className="w-full sm:w-auto">
                Request investor overview
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
