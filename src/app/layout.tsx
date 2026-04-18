import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";

import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { OptionalScripts } from "@/components/optional-scripts";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/brand/corentis-mark-icon.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/brand/corentis-logo-light.png",
        width: 2220,
        height: 660,
        alt: "Corentis",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <OptionalScripts />
      </body>
    </html>
  );
}
