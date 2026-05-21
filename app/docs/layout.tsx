import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to use Convergence UI 2.0, a headless OKLCH theme engine with a React editor for semantic design tokens.",
  keywords: [
    "documentation",
    "guide",
    "tutorial",
    "API reference",
    "Convergence UI",
    "OKLCH theme engine",
    "design tokens",
    "Tailwind v4",
  ],
  openGraph: {
    title: "Convergence UI 2.0 Documentation",
    description:
      "Headless OKLCH theme engine docs with React editor, SSR helpers, import/export flows, and API examples.",
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
    title: "Convergence UI 2.0 Documentation",
    description:
      "Headless OKLCH theme engine docs with React editor, SSR helpers, import/export flows, and API examples.",
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
