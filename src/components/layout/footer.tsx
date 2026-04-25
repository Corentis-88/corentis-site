import Link from "next/link";

import { Container } from "@/components/ui/container";
import { LogoImage } from "@/components/layout/logo-image";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/platform/", label: "Platform" },
  { href: "/financial-services/", label: "Financial Services" },
  { href: "/life-sciences/", label: "Life Sciences" },
  { href: "/investors/", label: "Investors" },
  { href: "/assurance/", label: "Assurance Overview" },
  { href: "/government-funding/", label: "Government / Funding" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy Notice" },
  { href: "/cookies/", label: "Cookie Policy" },
  { href: "/terms/", label: "Terms of Use" },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(26,49,95,0.88)] bg-[linear-gradient(180deg,rgba(4,18,43,0.96),rgba(10,30,70,0.9))]">
      <Container className="grid gap-10 py-10 sm:py-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <LogoImage size="footer" className="max-w-full" />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            Policy-control and evidence infrastructure for AI-assisted regulated workflows.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>United Kingdom</li>
              <li>Built for serious deployment where review and accountability matter.</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
