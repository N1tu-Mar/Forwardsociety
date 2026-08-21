import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

// Bodoni Moda is a variable font with an `opsz` axis. next/font requires
// non-weight axes to be declared explicitly or the build fails.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
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
  title: "The Forward Society",
  description:
    "A student club for those who think ahead and take action. Rutgers University, launching Fall 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${inter.variable}`}>
      <body className="bg-bone text-ink">{children}</body>
    </html>
  );
}
