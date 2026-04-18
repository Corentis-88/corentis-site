import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Register Interest"
        title="Register for more information"
        description="We are building Corentis in conversation with investors, potential design partners, and organisations exploring governed AI deployment. If you would like to hear more, register your interest below."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <div className="grid gap-6">
            <div className="glass-panel overflow-hidden p-3">
              <div className="relative aspect-[1/1] overflow-hidden rounded-[1.4rem] sm:aspect-[1.08/1] sm:rounded-[1.75rem]">
                <Image
                  src="/images/contact-building.jpg"
                  alt="Modern reflective office building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,24,0.08),rgba(4,10,24,0.52))]" />
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">Who we would be glad to hear from</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
                <p>Teams exploring the platform for regulated AI deployment.</p>
                <p>Investors following the company and its early progress.</p>
                <p>Potential partners interested in design, ecosystem, or commercial conversations.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
