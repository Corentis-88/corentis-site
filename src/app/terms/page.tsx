import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Website Terms"
        title="Terms of Use"
        description="These terms set out the basis on which the Corentis website is made available."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-panel max-w-4xl p-8 sm:p-10">
            <div className="space-y-8 text-sm leading-7 text-[var(--color-text-muted)]">
              <section>
                <h2 className="text-xl font-semibold text-white">Website use</h2>
                <p className="mt-3">
                  This website is provided for general information about Corentis, its platform direction, and ways to
                  register interest or make contact. You may use the site for lawful purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">No reliance for regulated decisions</h2>
                <p className="mt-3">
                  The website is not intended to provide legal, regulatory, medical, investment, or other professional
                  advice. Information on the site should not be relied on as the sole basis for any decision.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Intellectual property</h2>
                <p className="mt-3">
                  Unless otherwise stated, the website content, branding, and materials are owned by Corentis or used
                  with permission. You may not reuse them in a way that suggests endorsement or ownership without
                  permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Availability and changes</h2>
                <p className="mt-3">
                  Corentis may update, suspend, or change the site and its content from time to time. We do not promise
                  that the site will always be available or free from errors.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Company details</h2>
                <p className="mt-3">
                  Formal company registration details are not yet shown on this website. If and when they are added,
                  this page and the footer can be updated with the appropriate information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Contact</h2>
                <p className="mt-3">
                  Questions about these terms can be sent to <a href="mailto:hello@corentis.co.uk" className="text-white underline decoration-white/20 underline-offset-4">hello@corentis.co.uk</a>.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
