"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "corentis_cookie_pref";

export function OptionalScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.localStorage.getItem(CONSENT_KEY) === "all");
  }, []);

  const src = process.env.NEXT_PUBLIC_OPTIONAL_SCRIPT_SRC?.trim();

  // Future analytics or non-essential services should only be mounted through this gate.
  if (!enabled || !src) {
    return null;
  }

  return <Script src={src} strategy="afterInteractive" />;
}
