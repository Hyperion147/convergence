"use client";

import Link from "next/link";
import { ArrowLeft, Copy, Check, Palette, Type, Layout, Database, Zap, Globe, Sparkles } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import { playClickSound } from "@/components/ClickSound";
import { TableOfContents } from "@/components/TableOfContents";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8 flex justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">v1.5</p>
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

          <Section title="Typography & Layout Support" id="typography-layout">
            <p className="text-muted-foreground mb-4">
              Convergence UI provides built-in support for managing global typography and layout variables. It injects a style tag to apply chosen fonts and letter-spacing across your application, and outputs common design system layout variables.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Typography</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                  <li><strong className="text-foreground font-medium">Sans-Serif</strong>: Inter, Poppins, Roboto, Open Sans.</li>
                  <li><strong className="text-foreground font-medium">Serif</strong>: Georgia, Merriweather, Playfair Display, Garamond.</li>
                  <li><strong className="text-foreground font-medium">Monospace</strong>: Menlo, JetBrains Mono, Fira Code, Courier.</li>
                  <li><strong className="text-foreground font-medium">Letter Spacing</strong>: Fine-grained control with real-world units (px/em).</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Layout</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                  <li><strong className="text-foreground font-medium">Border Radius</strong> (<code className="text-xs bg-muted px-1 py-0.5 rounded">--radius</code>): Controlled in <code className="text-xs bg-muted px-1 py-0.5 rounded">rem</code> units for accessible, scalable rounding.</li>
                  <li><strong className="text-foreground font-medium">Border Width</strong> (<code className="text-xs bg-muted px-1 py-0.5 rounded">--border-width</code>): Controlled in exact <code className="text-xs bg-muted px-1 py-0.5 rounded">px</code> units for sharp strokes.</li>
                  <li><strong className="text-foreground font-medium">Border Style</strong> (<code className="text-xs bg-muted px-1 py-0.5 rounded">--border-style</code>): Toggle between <code className="text-xs bg-muted px-1 py-0.5 rounded">solid</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">dashed</code>, and <code className="text-xs bg-muted px-1 py-0.5 rounded">dotted</code> borders.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Presets" id="presets">
            <p className="text-muted-foreground mb-4">
              The package comes with several curated presets out of the box:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li><strong className="text-foreground font-medium">Light</strong>: Minimalist, clean light theme.</li>
              <li><strong className="text-foreground font-medium">Dark</strong>: Deep zinc-based dark mode.</li>
              <li><strong className="text-foreground font-medium">Cold</strong>: A professional blue-toned "oceanic" theme.</li>
              <li><strong className="text-foreground font-medium">Warm</strong>: A cozy, red-tinted "sunset" theme.</li>
            </ul>
          </Section>

          <Section title="Types" id="types">
            <p className="text-muted-foreground mb-4">
              Convergence UI is fully type safe. Key interfaces include <code className="bg-muted px-1 py-0.5 rounded text-xs">ThemeConfig</code>
            </p>
            <CodeBlock
              language="typescript"
              code={`import { OklchColor, ThemeConfig, ThemeKey } from "convergence-ui";

// OklchColor { l: number; c: number; h: number; }

// ThemeConfig includes:
// background, foreground, primary, secondary, 
// OklchColor represents a color in the OKLCH color space.
// { l: number; c: number; h: number; }
// 'l' (lightness): 0-1 (0% to 100%)
// 'c' (chroma): 0-0.4 (0% to 40%)
// 'h' (hue): 0-360 (degrees)

// ThemeConfig is the main interface for defining your theme.
// It includes all the CSS variable keys that Convergence UI manages.
// Example keys:
// background, foreground, primary, secondary,
// accent, muted, destructive, border, input, ring,
// chart-1...5, sidebar, and more.`}
            />
          </Section>

          <Section title="How it Works" id="how-it-works">
            <div className="space-y-12 mb-12">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Convergence UI operates by dynamically creating, updating, and synchronizing a set of CSS Custom Properties (CSS variables) right in the browser's Document Object Model (DOM).
              </p>

              {/* 1. Colors */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary text-sm font-bold">1</span>
                    Colors
                  </h3>
                  <p className="text-muted-foreground">
                    The engine standardizes all color manipulation around the <strong className="text-foreground font-medium">OKLCH</strong> color space to guarantee perceptual uniformity (meaning changes in lightness are perceived consistently across different hues).
                  </p>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2">
                  <FeatureItem
                    icon={<Database className="w-5 h-5" />}
                    title="State Management"
                    desc="Colors are stored internally as simple objects: { l: number, c: number, h: number }."
                  />
                  <FeatureItem
                    icon={<Palette className="w-5 h-5" />}
                    title="Conversion"
                    desc="Hex inputs from native pickers are intercepted and mathematically converted to OKLCH on the fly."
                  />
                  <FeatureItem
                    icon={<Type className="w-5 h-5" />}
                    title="DOM Injection"
                    desc="Adjusting a color calls setProperty('--color-name', ...) directly on the documentRoot."
                  />
                  <FeatureItem
                    icon={<Zap className="w-5 h-5" />}
                    title="Instant Updates"
                    desc="UI elements using var(--color-name) update instantly without requiring page reloads."
                  />
                </ul>
              </div>

              {/* 2. Typography */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary text-sm font-bold">2</span>
                    Typography
                  </h3>
                  <p className="text-muted-foreground">
                    Typography manages global font families and letter spacing across your entire application.
                  </p>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2">
                  <FeatureItem
                    icon={<Globe className="w-5 h-5" />}
                    title="Global Style Interception"
                    desc="A global <style> tag is injected on mount to apply CSS variables to base elements like body and button."
                  />
                  <FeatureItem
                    icon={<Sparkles className="w-5 h-5" />}
                    title="Dynamic Fonts"
                    desc="Google Fonts (like Inter or Poppins) are dynamically fetched and appended to the document head."
                  />
                  <FeatureItem
                    icon={<Type className="w-5 h-5" />}
                    title="CSS Variables"
                    desc="Changes to settings like letter-spacing immediately update root variables, ensuring cascading updates."
                  />
                </ul>
              </div>

              {/* 3. Layout */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary text-sm font-bold">3</span>
                    Layout (Borders & Spacing)
                  </h3>
                  <p className="text-muted-foreground">
                    The Layout tab manipulates the core structural tokens defining your design system—specifically Border Radius, Border Width, and Border Style.
                  </p>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2">
                  <FeatureItem
                    icon={<Layout className="w-5 h-5" />}
                    title="Immediate Injection"
                    desc="Utility overrides (like .border and .rounded-*) are injected into a style block on mount."
                  />
                  <FeatureItem
                    icon={<Type className="w-5 h-5" />}
                    title="Class Hijacking"
                    desc="Standard utility toolkits (like Tailwind CSS) are mathematically overridden to use dynamic tokens."
                  />
                  <FeatureItem
                    icon={<Type className="w-5 h-5" />}
                    title="Property Updates"
                    desc="Sliders update underlying rem and px variables, while styling tabs toggle border-style."
                  />
                  <FeatureItem
                    icon={<Layout className="w-5 h-5" />}
                    title="Instant Repaint"
                    desc="Adjusting any layout control triggers an instant global UI repaint based on your new settings."
                  />
                </ul>
              </div>
            </div>
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
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-muted/30 transition-all">
      <div className="pt-0.5 text-primary">{icon}</div>
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
