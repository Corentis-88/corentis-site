import Link from "next/link";
import { ArrowRight } from "lucide-react";

type AudiencePath = {
  title: string;
  audience: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export function AudiencePathGrid({ items }: { items: AudiencePath[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Link key={item.title} href={item.href} className="glass-panel reveal-card group p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-electric-soft)]">
            {item.audience}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-electric-soft)]">
            {item.ctaLabel}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
