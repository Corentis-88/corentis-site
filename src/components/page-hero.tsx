import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({ eyebrow, title, description, imageSrc, imageAlt, ctaHref, ctaLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,141,255,0.25),transparent_34%),radial-gradient(circle_at_top_right,rgba(11,27,79,0.8),transparent_45%)]" />
      <Container className="relative grid gap-8 py-14 sm:gap-10 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-electric-soft)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:mt-5 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
            {description}
          </p>
          {ctaHref && ctaLabel ? (
            <div className="mt-8">
              <Button href={ctaHref} className="w-full sm:w-auto">{ctaLabel}</Button>
            </div>
          ) : null}
        </div>

        {imageSrc ? (
          <div className="glass-panel overflow-hidden p-3">
            <div className="relative aspect-[1/1] overflow-hidden rounded-[1.4rem] sm:aspect-[1.2/1] sm:rounded-[1.75rem]">
              <Image src={imageSrc} alt={imageAlt ?? ""} fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,24,0.08),rgba(4,10,24,0.34))]" />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
