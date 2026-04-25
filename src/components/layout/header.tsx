"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigation } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LogoImage } from "@/components/layout/logo-image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(26,49,95,0.88)] bg-[rgba(4,18,43,0.84)] backdrop-blur-xl">
      <Container className="flex min-h-14 items-center justify-between gap-4 sm:min-h-16 lg:min-h-18">
        <Link href="/" className="min-w-0 shrink">
          <LogoImage size="header" />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-near-white)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact/">Request overview</Button>
        </div>

        <div className="xl:hidden">
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[rgba(26,49,95,0.9)] bg-[rgba(10,30,70,0.55)] text-[var(--color-near-white)] transition hover:border-[rgba(73,166,255,0.35)] hover:bg-[rgba(10,30,70,0.72)]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen ? (
        <div className="border-t border-[rgba(26,49,95,0.88)] bg-[rgba(4,18,43,0.98)] xl:hidden">
          <Container className="py-4">
            <div className="glass-panel p-3">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-[var(--color-text-muted)] transition hover:bg-[rgba(10,30,70,0.65)] hover:text-[var(--color-near-white)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button href="/contact/" className="mt-2 w-full" onClick={() => setMobileMenuOpen(false)}>
                  Request overview
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
