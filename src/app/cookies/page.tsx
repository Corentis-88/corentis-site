import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookie Policy"
        title="Cookie Policy"
        description="This page explains the limited way Corentis currently uses cookies and how consent preferences are handled on the website."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="glass-panel max-w-4xl p-8 sm:p-10">
            <div className="space-y-8 text-sm leading-7 text-[var(--color-text-muted)]">
              <section>
                <h2 className="text-xl font-semibold text-white">Current approach</h2>
                <p className="mt-3">
                  Corentis currently keeps website cookie use minimal. At launch, the site uses a consent-preference
                  cookie so your choice can be remembered. No non-essential analytics or marketing scripts are loaded
                  unless they are configured in future and you have given consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Essential cookies</h2>
                <p className="mt-3">
                  The website may store a small cookie that records whether you chose essential-only use or allowed
                  optional cookies. This supports the operation of the consent banner and is treated as necessary for
                  managing preferences.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Optional cookies and scripts</h2>
                <p className="mt-3">
                  Corentis does not currently enable optional analytics or advertising services by default. If optional
                  services are added later, they should only run after consent has been given through the site banner.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Managing preferences</h2>
                <p className="mt-3">
                  You can clear your browser cookies or local storage for this site if you want to reset your choice.
                  If a fuller preference centre is added later, details will be updated here.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">Updates</h2>
                <p className="mt-3">
                  This policy may be updated as the website and company operations develop.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
