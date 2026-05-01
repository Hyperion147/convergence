import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to use Convergence UI - a live theme editor and UI kit for Next.js. Installation guide, API reference, and code examples.",
  keywords: [
    "documentation",
    "guide",
    "tutorial",
    "API reference",
    "Convergence UI",
    "theme editor",
  ],
  openGraph: {
    title: "Convergence UI Documentation",
    description:
      "Learn how to use Convergence UI - a live theme editor and UI kit for Next.js.",
    url: "https://convergence.suryansu.pro/docs",
    type: "website",
    images: [
      {
        url: "/docs/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Convergence UI Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convergence UI Documentation",
    description:
      "Learn how to use Convergence UI - a live theme editor and UI kit for Next.js.",
    images: ["/docs/opengraph-image.png"],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
