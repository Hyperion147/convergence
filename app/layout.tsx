import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css"
import { Convergence } from "convergence-ui";
import ClickSpark from "@/components/ClickSpark";

import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairSerif = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://convergence.suryansu.pro"),
  title: {
    default: "Convergence UI",
    template: "%s | Convergence UI",
  },
  description:
    "Convergence UI is a live theme editor and UI kit for Next.js — tweak colors, typography, borders and radius in real time without touching code.",
  keywords: [
    "UI kit",
    "theme editor",
    "Next.js",
    "Tailwind CSS",
    "design system",
    "React components",
    "live theme",
    "CSS variables",
  ],
  authors: [{ name: "Suryansu", url: "https://suryansu.pro" }],
  openGraph: {
    title: "Convergence UI — Live Theme Editor for Next.js",
    description:
      "Tweak colors, typography, borders and radius in real time. No code changes needed.",
    url: "https://convergence.suryansu.pro",
    siteName: "Convergence UI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Convergence UI — Live Theme Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convergence UI — Live Theme Editor for Next.js",
    description:
      "Tweak colors, typography, borders and radius in real time. No code changes needed.",
    images: ["/og-image.png"],
    creator: "@suryansu.pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairSerif.variable} antialiased`}
      >
        <Convergence />
        <Toaster />

        <ClickSpark
          sparkColor="var(--primary)"
          sparkSize={12}
          sparkRadius={26}
          sparkCount={8}
          duration={500}
          easing="ease-out"
          extraScale={1}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
