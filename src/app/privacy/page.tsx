import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Notice"
        title="Privacy Notice"
        description="This privacy notice explains how Corentis handles personal information submitted through this website."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-panel max-w-4xl p-8 sm:p-10">
            <div className="space-y-8 text-sm leading-7 text-[var(--color-text-muted)]">
              <section>
                <h2 className="text-xl font-semibold text-white">What we collect</h2>
                <p className="mt-3">
                  If you register for more information, we may collect your name, work email address, organisation
                  name, interest type, and any message you choose to send.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Why we collect it</h2>
                <p className="mt-3">
                  We collect this information to respond to enquiries, keep a record of interest in Corentis, share
                  occasional updates where you have agreed to receive them, and support early conversations with
                  potential customers, investors, and partners.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Legal basis</h2>
                <p className="mt-3">
                  Where you choose to register for updates, we process your information on the basis of your consent.
                </p>
                <p className="mt-3">
                  Where you contact us directly for a business enquiry, we may process your information where it is
                  necessary for legitimate interests related to responding to that enquiry and developing the business
                  in a proportionate way.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">How long we keep it</h2>
                <p className="mt-3">
                  We keep personal information only for as long as it is reasonably needed for the purposes described
                  above, or until you ask us to delete it, subject to any legal or administrative requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Sharing</h2>
                <p className="mt-3">We do not sell your personal information.</p>
                <p className="mt-3">
                  We may use carefully selected service providers to help operate the website or manage communications.
                  Where we do, we aim to use providers that are appropriate for a professional business environment.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Your rights</h2>
                <p className="mt-3">
                  Depending on your circumstances, you may have rights to access your information, correct inaccurate
                  information, ask for deletion, object to certain processing, or withdraw consent where consent is the
                  basis for processing.
                </p>
                <p className="mt-3">
                  To make a request, please contact us using the details provided on this website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Updates</h2>
                <p className="mt-3">
                  We may update this privacy notice from time to time as the business develops. Please check this page
                  occasionally for the latest version.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
