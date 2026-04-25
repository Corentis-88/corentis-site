import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { getPackRequestHref, getRequestHref, requestOptions } from "@/lib/packs";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would be glad to hear from you"
        description="We are building Corentis in conversation with investors, potential design partners, and organisations exploring governed AI deployment. Request the overview, walkthrough, assurance summary, or design-partner conversation most relevant to you, and after submission we will route you to the right material here."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Suspense
            fallback={
              <div className="glass-panel p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">Request a Corentis overview</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
                  Loading the request form.
                </p>
              </div>
            }
          >
            <ContactForm />
          </Suspense>

          <div className="grid gap-6">
            <div className="glass-panel p-6 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">Choose the pack or conversation you need</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
                    Each request uses the same form-first path so Corentis can route the right material to the right reader.
                  </p>
                </div>
                <div className="status-pill w-fit">Form-first access</div>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
                {requestOptions.map((item) => (
                  <div key={item.requestType} className="product-tile px-4 py-4">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2">{item.description}</p>
                    <div className="mt-4">
                      <Button
                        href={item.packSlug ? getPackRequestHref(item.packSlug) : getRequestHref(item.requestSlug)}
                        variant="secondary"
                        className="w-full sm:w-auto"
                      >
                        {item.ctaLabel}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">What to expect</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    Keep this simple. Share what you are exploring and, after a successful submission, the relevant pack will be available immediately here on the page when one applies.
                  </p>
                </div>
                <div className="status-pill w-fit">Early conversations</div>
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  ["01", "Choose the right request", "Select the pack or conversation that best matches your role so Corentis can route the material cleanly."],
                  ["02", "Submit once", "When a pack applies, the matching download will appear immediately after a successful submission."],
                  ["03", "Continue the conversation", "If the fit looks promising, the next step is a more focused discussion around your workflow, review needs, or investor questions."],
                ].map(([step, title, detail]) => (
                  <div key={step} className="product-tile p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[rgba(46,141,255,0.12)] text-sm font-semibold text-[var(--color-electric-soft)]">
                        {step}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">{detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
