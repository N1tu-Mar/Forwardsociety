import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrowthCurve } from "@/components/brand/GrowthCurve";
import { copy } from "@/content/copy";

// Montserrat carries every headline, the wordmark, and the utility labels.
// 800 is the display weight; 700 is the eyebrow weight.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theforwardsociety.org"),
  title: {
    default: "The Forward Society",
    template: "%s · The Forward Society",
  },
  description: copy.descriptor,
  openGraph: {
    siteName: "The Forward Society",
    type: "website",
    locale: "en_US",
    title: "The Forward Society",
    description: copy.descriptor,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-bone text-ink">
        <a
          href="#main"
          className="bg-scarlet text-bone focus:ring-bone sr-only px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to content
        </a>
        <Header />
        <GrowthCurve />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
