import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

const requestTypes = [
  {
    title: "Investor overview",
    description: "A concise company and market overview for investors, angels, and advisors.",
  },
  {
    title: "Assurance summary",
    description: "A low-hype overview of the governance and public-interest case for Corentis.",
  },
  {
    title: "Sector walkthrough",
    description: "A workflow-focused conversation for financial services or life sciences teams exploring fit.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would be glad to hear from you"
        description="We are building Corentis in conversation with investors, potential design partners, and organisations exploring governed AI deployment. Use this page to request the overview or sector walkthrough most relevant to you."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <div className="grid gap-6">
            <div className="glass-panel p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">Choose the conversation you need</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
                {requestTypes.map((item) => (
                  <div key={item.title} className="product-tile px-4 py-4">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">What to expect</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    Keep this simple. Share what you are exploring and we can respond with the most relevant overview, workflow discussion, or assurance context.
                  </p>
                </div>
                <div className="status-pill w-fit">Early conversations</div>
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  ["01", "Tell us what would be useful", "Use the form to indicate whether you need an investor view, assurance summary, sector walkthrough, or partnership conversation."],
                  ["02", "We respond with the right material", "That may be a company overview, a governance-focused summary, or a more practical workflow discussion."],
                  ["03", "Continue from there", "If the fit looks promising, the next step is a more focused conversation around your role, workflow, or review needs."],
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
