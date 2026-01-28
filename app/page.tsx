"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { DemoArea } from "@/components/DemoArea";
import Link from "next/link";
import { Copy, RefreshCw, Palette, Layout, MousePointer2 } from "lucide-react";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-full max-w-5xl">
          <h1 className="sr-only">Convergence UI</h1>
          <TextHoverEffect text="CONVERGENCE" />
        </div>
        <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
          A dynamic theming engine for modern web applications. Inject OKLCH
          colors directly into your DOM and transform your UI in real-time.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/docs"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/20"
          >
            <Layout className="w-5 h-5" />
            Get Started
          </Link>
          <div
            onClick={() => {
              navigator.clipboard.writeText("npm install convergence-ui");
              toast.success("Command copied to clipboard", {
                style: {
                  background: "var(--card)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                },
                iconTheme: {
                  primary: "var(--primary)",
                  secondary: "var(--primary-foreground)",
                },
              });
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card text-card-foreground hover:bg-muted transition-colors cursor-pointer active:scale-95"
          >
            <Copy className="w-4 h-4" />
            <span className="font-mono">npm install convergence-ui</span>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section className="px-4 py-20 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                Real-time Color Manipulation
              </h2>
              <p className="text-muted-foreground text-lg">
                Built on the OKLCH color space for perceptual uniformity.
                Convergence automatically handles contrast ratios and semantic
                mapping across your entire application.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  { icon: Palette, text: "Dynamic Theme Generation" },
                  { icon: RefreshCw, text: "Live DOM Injection" },
                  { icon: MousePointer2, text: "Framework Agnostic Core" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50"
                  >
                    <div className="p-2 rounded-md bg-secondary/10 text-secondary">
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Preview Card Mockup */}
            <div className="flex items-center justify-center">
              <DemoArea />
            </div>
          </div>
        </div>
      </section>

      {/* Palette Grid */}
      <section className="px-4 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-2">
          <h2 className="text-3xl font-bold font-serif tracking-tight">
            System Tokens
          </h2>
          <p className="text-muted-foreground">
            Semantic color mappings derived from your palette.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-dashed border-primary/20 bg-background/50 backdrop-blur-sm">
          {[
            { name: "Background", var: "background" },
            { name: "Foreground", var: "foreground" },
            { name: "Primary", var: "primary" },
            { name: "Secondary", var: "secondary" },
            { name: "Accent", var: "accent" },
            { name: "Destructive", var: "destructive" },
            { name: "Muted", var: "muted" },
            { name: "Border", var: "border" },
            { name: "Input", var: "input" },
            { name: "Card", var: "card" },
            { name: "Chart 1", var: "chart-1" },
            { name: "Chart 2", var: "chart-2" },
            { name: "Chart 3", var: "chart-3" },
            { name: "Chart 4", var: "chart-4" },
            { name: "Chart 5", var: "chart-5" },
            { name: "Ring", var: "ring" },
            { name: "Sidebar", var: "sidebar" },
            { name: "Popover", var: "popover" },
          ].map((token) => (
            <div
              key={token.var}
              className="group relative p-4 flex gap-4 items-start border-b border-r border-dashed border-primary/20 hover:bg-primary/5 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-lg shadow-sm transition-transform group-hover:scale-105 duration-300"
                style={{ backgroundColor: `var(--${token.var})` }}
              />

              <div className="space-y-1">
                <span className="block font-medium text-sm">{token.name}</span>
                <code className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-sm">
                  --{token.var}
                </code>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/20"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
