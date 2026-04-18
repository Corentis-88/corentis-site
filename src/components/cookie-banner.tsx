"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const CONSENT_KEY = "corentis_cookie_pref";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = window.localStorage.getItem(CONSENT_KEY);
    if (!existing) {
      setVisible(true);
    }
  }, []);

  function setPreference(value: "essential" | "all") {
    window.localStorage.setItem(CONSENT_KEY, value);
    document.cookie = `corentis_cookie_pref=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-4xl sm:inset-x-4 sm:bottom-4">
      <div className="glass-panel border-[rgba(26,49,95,0.98)] p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-electric-soft)]">
              Cookie Preferences
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              Corentis currently uses only essential site functionality and a cookie to remember your consent
              preference. Optional analytics or other non-essential scripts should only be enabled after consent.
              Read the{" "}
              <Link href="/cookies/" className="text-white underline decoration-white/20 underline-offset-4">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="secondary" type="button" onClick={() => setPreference("essential")} className="w-full sm:w-auto">
              Use essential only
            </Button>
            <Button type="button" onClick={() => setPreference("all")} className="w-full sm:w-auto">
              Allow optional cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
