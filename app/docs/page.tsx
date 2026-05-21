"use client";

import Link from "next/link";
import { ArrowLeft, Check, Copy } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import { playClickSound } from "@/components/ClickSound";
import { TableOfContents } from "@/components/TableOfContents";

const themeShapeCode = `import type { ThemeDefinition } from "convergence-ui";

const theme: ThemeDefinition = {
  themes: {
    light: { /* semantic OKLCH tokens */ },
    dark: { /* semantic OKLCH tokens */ },
  },
  typography: {
    fontSans: "Inter, sans-serif",
    fontSerif: "Georgia, serif",
    fontMono: '"JetBrains Mono", monospace',
    letterSpacing: "0px",
  },
  layout: {
    radius: "0.75rem",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  shadows: {
    "shadow-color": { l: 0, c: 0, h: 0, a: 1 },
    "shadow-2xs": "0 1px 3px 0px oklch(0 0 0 / 0.05)",
    "shadow-xs": "0 1px 3px 0px oklch(0 0 0 / 0.05)",
    "shadow-sm": "0 1px 3px 0px oklch(0 0 0 / 0.10)",
    shadow: "0 1px 3px 0px oklch(0 0 0 / 0.10)",
    "shadow-md": "0 1px 3px 0px oklch(0 0 0 / 0.10)",
    "shadow-lg": "0 1px 3px 0px oklch(0 0 0 / 0.10)",
    "shadow-xl": "0 1px 3px 0px oklch(0 0 0 / 0.10)",
    "shadow-2xl": "0 1px 3px 0px oklch(0 0 0 / 0.25)",
  },
};`;

const editorCode = `import { Convergence } from "convergence-ui";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Convergence />
    </>
  );
}`;

const engineCode = `import {
  ConvergenceEngine,
  DEFAULT_THEME_DEFINITION,
  scoreThemeAccessibility,
} from "convergence-ui";

const engine = new ConvergenceEngine(DEFAULT_THEME_DEFINITION, {
  autoApply: false,
});

engine.setOklch("primary", { l: 0.64, c: 0.18, h: 262 }, { mode: "light" });
engine.setTypography({ fontSans: "Inter, sans-serif" });

const tailwindTheme = engine.export("tailwind-v4");
const jsonTheme = engine.export("json");
const report = scoreThemeAccessibility(engine.getDefinition().themes.light);`;

const ssrCode = `import {
  ConvergenceThemeStyle,
  DEFAULT_THEME_DEFINITION,
} from "convergence-ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ConvergenceThemeStyle definition={DEFAULT_THEME_DEFINITION} />
      </head>
      <body>{children}</body>
    </html>
  );
}`;

const importExportCode = `import { ConvergenceEngine, DEFAULT_THEME_DEFINITION } from "convergence-ui";

const engine = new ConvergenceEngine(DEFAULT_THEME_DEFINITION, {
  autoApply: false,
});

engine.export("css");
engine.export("tailwind-v4");
engine.export("json");
engine.export("shadcn");

engine.import(\`
  :root {
    --background: oklch(0.98 0 0);
    --foreground: oklch(0.14 0.01 260);
  }

  .dark {
    --background: oklch(0.10 0 0);
    --foreground: oklch(0.96 0 0);
  }
\`);`;

const componentCode = `import { createComponentThemeAttributes } from "convergence-ui";

const attrs = createComponentThemeAttributes("button");`;

const validationCode = `import {
  DEFAULT_THEME_DEFINITION,
  scoreThemeAccessibility,
  validateThemeDefinition,
} from "convergence-ui";

const validation = validateThemeDefinition(DEFAULT_THEME_DEFINITION);
const report = scoreThemeAccessibility(DEFAULT_THEME_DEFINITION.themes.light);`;

const apiHighlights = [
  "ConvergenceEngine",
  "Convergence",
  "ConvergenceThemeStyle",
  "DEFAULT_THEME_DEFINITION",
  "PRESETS",
  "validateThemeDefinition",
  "scoreThemeAccessibility",
  "defaultExportRegistry",
  "createThemeCss",
  "createComponentThemeAttributes",
];

const featureHighlights = [
  "Typed ThemeDefinition model for light and dark themes",
  "Headless engine for reading, updating, validating, importing, and exporting theme tokens",
  "Floating React editor for live token editing, presets, saved workspaces, and accessibility QA",
  "CSS import support for :root, .dark, and Tailwind-style token variables",
  "Export support for Tailwind v4 and JSON in the editor",
  "SSR-friendly <ConvergenceThemeStyle /> helper for Next.js and other React SSR setups",
  "Per-component theme overrides through data-convergence-component",
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <p className="text-sm font-medium text-muted-foreground">v2.0</p>
        </div>

        <div className="space-y-16">
          <section className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary">
                Convergence UI 2.0
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Headless OKLCH theme tooling for Tailwind v4 and modern React apps
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                Convergence UI 2.0 pairs a typed theme engine with a floating React
                editor so teams can ship semantic CSS-variable themes, import
                existing token sets, validate accessibility, and export clean theme
                artifacts.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {featureHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Section title="Installation" id="installation">
            <div className="space-y-4">
              <CodeBlock code="npm install convergence-ui" language="bash" />
              <CodeBlock code="yarn add convergence-ui" language="bash" />
              <CodeBlock code="pnpm add convergence-ui" language="bash" />
            </div>
          </Section>

          <Section title="Quick Start" id="quick-start">
            <div className="space-y-10">
              <div id="add-the-editor" className="space-y-4">
                <h3 className="text-xl font-semibold">1. Add the editor</h3>
                <p className="text-muted-foreground">
                  Drop the floating editor into your shell to edit semantic theme
                  tokens live inside your app.
                </p>
                <CodeBlock code={editorCode} language="tsx" />
              </div>

              <div id="use-the-engine-directly" className="space-y-4">
                <h3 className="text-xl font-semibold">2. Use the engine directly</h3>
                <p className="text-muted-foreground">
                  Use the headless engine in scripts, tooling, tests, or custom app
                  flows when you want to read, update, validate, import, or export
                  themes without mounting the editor.
                </p>
                <CodeBlock code={engineCode} language="ts" />
              </div>

              <div id="render-theme-css-during-ssr" className="space-y-4">
                <h3 className="text-xl font-semibold">
                  3. Render theme CSS during SSR
                </h3>
                <p className="text-muted-foreground">
                  Use the SSR helper to emit theme CSS from the server for Next.js
                  and other React SSR setups.
                </p>
                <CodeBlock code={ssrCode} language="tsx" />
              </div>
            </div>
          </Section>

          <Section title="Theme Shape" id="theme-shape">
            <p className="mb-4 text-muted-foreground">
              Themes are defined with a typed{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                ThemeDefinition
              </code>{" "}
              that stores semantic light and dark tokens alongside typography,
              layout, and shadow settings.
            </p>
            <CodeBlock code={themeShapeCode} language="ts" />
          </Section>

          <Section title="Import and Export" id="import-and-export">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The editor exposes two export targets today:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                    tailwind-v4
                  </code>
                </li>
                <li>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                    json
                  </code>
                </li>
              </ul>
              <p className="text-muted-foreground">
                The headless engine still supports the full export registry and can
                import existing CSS variables from{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                  :root
                </code>
                ,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                  .dark
                </code>
                , and Tailwind-style token definitions.
              </p>
              <CodeBlock code={importExportCode} language="ts" />
            </div>
          </Section>

          <Section title="Component Overrides" id="component-overrides">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Convergence can scope token overrides to a specific component via{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                  data-convergence-component
                </code>
                .
              </p>
              <CodeBlock
                code={`<button data-convergence-component="button">Save</button>`}
                language="html"
              />
              <p className="text-muted-foreground">
                Use the helper to keep the attribute naming consistent across your
                app code.
              </p>
              <CodeBlock code={componentCode} language="ts" />
            </div>
          </Section>

          <Section title="Validation and QA" id="validation-and-qa">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Validation checks theme structure and token shapes. Accessibility
                scoring reports contrast outcomes for the main semantic
                foreground/background pairs.
              </p>
              <CodeBlock code={validationCode} language="ts" />
            </div>
          </Section>

          <Section title="Public API" id="public-api">
            <ul className="grid gap-3 sm:grid-cols-2">
              {apiHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-card/50 px-4 py-3 font-mono text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Notes" id="notes">
            <ul className="space-y-2 text-muted-foreground">
              <li>The editor is a client component.</li>
              <li>
                The engine can run without the editor in build-time or server-side
                flows.
              </li>
              <li>
                The editor includes local saved workspaces, undo/redo history, and
                hidden-scrollbar contained scrolling.
              </li>
              <li>
                Fonts are loaded lazily in the editor when supported Google Fonts
                are selected.
              </li>
              <li>
                Local <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">yalc</code>{" "}
                testing steps live in{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                  X:\webdev\package-convergence\LOCAL_TESTING.md
                </code>
                .
              </li>
            </ul>
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
      <h2 className="mb-6 text-2xl font-bold text-foreground">{title}</h2>
      {children}
    </section>
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
    <div className="group relative overflow-hidden rounded-lg border border-border bg-muted/30">
      <div className="flex items-center justify-between border-b border-border/50 bg-muted/50 px-4 py-2 text-xs text-muted-foreground select-none">
        <span className="uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed selection:bg-primary/20">
        <code>{code}</code>
      </pre>
    </div>
  );
}
