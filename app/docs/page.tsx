"use client";

import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Footer from "@/components/Footer";
import { playClickSound } from "@/components/ClickSound";
import { TableOfContents } from "@/components/TableOfContents";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="space-y-16">
          <Section title="Installation" id="installation">
            <div className="space-y-4">
              <CodeBlock code="npm install convergence-ui" language="bash" />
              <CodeBlock code="yarn add convergence-ui" language="bash" />
              <CodeBlock code="pnpm add convergence-ui" language="bash" />
            </div>
          </Section>

          <Section title="Usage" id="usage">
            <div className="space-y-8">
              <div>
                <h3
                  id="comparison-component"
                  className="text-xl font-semibold mb-3"
                >
                  1. The Comparison Component (Recommended)
                </h3>
                <p className="text-muted-foreground mb-4">
                  The easiest way to use Convergence is to drop the{" "}
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                    {"<Convergence />"}
                  </code>{" "}
                  component into your application's root layout or a specific
                  page. It provides a collapsible UI for tweaking your
                  application's design tokens in real-time.
                </p>
                <CodeBlock
                  language="tsx"
                  code={`import { Convergence } from "convergence-ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Add the Convergence overlay */}
        <Convergence />
      </body>
    </html>
  );
}`}
                />
                <p className="text-sm text-muted-foreground mt-3">
                  The component will appear as a floating toggle button in the
                  bottom-right corner of your screen.
                </p>
              </div>

              <div>
                <h3
                  id="programmatic-usage"
                  className="text-xl font-semibold mb-3"
                >
                  2. Programmatic Usage
                </h3>
                <p className="text-muted-foreground mb-4">
                  You can also use the underlying{" "}
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                    ConvergenceEngine
                  </code>{" "}
                  to manipulate themes programmatically.
                </p>
                <CodeBlock
                  language="tsx"
                  code={`import { ConvergenceEngine, ThemeConfig } from "convergence-ui";

const myTheme: ThemeConfig = {
  // define your oklch colors here
  primary: { l: 0.5, c: 0.2, h: 250 },
  // ...
};

// Initialize the engine
const engine = new ConvergenceEngine(myTheme, { autoApply: true });

// Update a specific color
engine.setOklch("primary", { l: 0.6, c: 0.2, h: 250 });`}
                />
              </div>
            </div>
          </Section>

          <Section title="Configuration" id="configuration">
            <p className="text-muted-foreground mb-6">
              The{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                {"<Convergence />"}
              </code>{" "}
              component accepts the following props:
            </p>
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 border-b border-border text-muted-foreground">
                  <tr>
                    <th className="p-4 font-medium">Prop</th>
                    <th className="p-4 font-medium">Type</th>
                    <th className="p-4 font-medium">Default</th>
                    <th className="p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <TableRow
                    prop="initialConfig"
                    type="ThemeConfig"
                    default="DARK_THEME"
                    desc="The starting configuration for the theme editor."
                  />
                  <TableRow
                    prop="syncStart"
                    type="boolean"
                    default="true"
                    desc="If true, the editor will read the current CSS variables from the DOM on mount."
                  />
                  <TableRow
                    prop="className"
                    type="string"
                    default="undefined"
                    desc="Optional CSS class for the wrapper element."
                  />
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Types" id="types">
            <p className="text-muted-foreground mb-4">
              convergence-ui is written in TypeScript and exports all necessary
              types relative to its operation.
            </p>
            <CodeBlock
              language="typescript"
              code={`import { OklchColor, ThemeConfig, ThemeKey } from "convergence-ui";

// OklchColor structure
// { l: number; c: number; h: number; }`}
            />
          </Section>

          <Section title="Presets" id="presets">
            <p className="text-muted-foreground pb-10">
              The package comes with standard Light and Dark presets out of the
              box.
            </p>
          </Section>
        </div>

        <Footer />
        <TableOfContents />
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id}>
      <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-muted/30 transition-all">
      <span className="text-2xl pt-1">{icon}</span>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </li>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    playClickSound();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg border border-border bg-muted/30 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 border-b border-border/50 bg-muted/50 text-xs text-muted-foreground select-none">
        <span className="uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed selection:bg-primary/20">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function TableRow({
  prop,
  type,
  default: def,
  desc,
}: {
  prop: string;
  type: string;
  default: string;
  desc: string;
}) {
  return (
    <tr className="group hover:bg-muted/30 transition-colors">
      <td className="p-4 font-mono text-primary font-medium">{prop}</td>
      <td className="p-4 font-mono text-muted-foreground">{type}</td>
      <td className="p-4 font-mono text-muted-foreground">{def}</td>
      <td className="p-4 text-muted-foreground">{desc}</td>
    </tr>
  );
}
