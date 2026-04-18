import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Infrastructure for safer AI deployment"
        description="Corentis is building the policy plane for regulated AI: infrastructure that helps organisations deploy advanced AI in high-stakes workflows with greater visibility, stronger oversight, and clearer evidence."
        ctaHref="/contact/"
        ctaLabel="Register interest"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-3">
          <div className="glass-panel p-6 sm:p-8 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Our View</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>We believe the next phase of AI adoption will be defined not only by capability, but by confidence.</p>
              <p>
                Organisations will need infrastructure that helps them test, approve, monitor, and evidence how AI is
                used in important work. That need is especially clear in regulated environments, where trust cannot
                rest on good intentions alone.
              </p>
              <p>Corentis exists to help meet that need in a form that is practical enough to use and strong enough to scale.</p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              What Kind Of Company We Are Building
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>commercially serious</p>
              <p>product-led and practically useful</p>
              <p>aligned with the public interest</p>
            </div>
            <p className="mt-6 text-sm leading-7 text-[var(--color-text-muted)]">
              Our goal is to build a company that helps organisations adopt AI in ways that are more thoughtful, more
              accountable, and easier to defend under scrutiny.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container>
          <div className="glass-panel max-w-4xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">Long-Term Vision</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>Our long-term vision is to help make governed AI deployment normal rather than exceptional.</p>
              <p>
                That means building infrastructure that can support safer workflow adoption, stronger assurance
                practices, clearer evidence standards, and better operational confidence across regulated sectors.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
