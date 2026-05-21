"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { DemoArea } from "@/components/DemoArea";
import Link from "next/link";
import {
    Copy,
    RefreshCw,
    Palette,
    Layout,
    MousePointer2,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import { playClickSound } from "@/components/ClickSound";
import SquigglyArrow from "@/components/SquigglyArrow";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export default function Home() {
    return (
        <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[50vh] pt-10">
                {/* 2.0 Announcement Badge with Tooltip */}
                <div className="mb-4">
                    <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-primary/20 bg-primary/20 hover:bg-primary/30 text-foreground text-xs font-medium transition-all duration-300 cursor-help shadow-sm animate-fade-in-up">
                                <Badge variant="secondary" className="px-1.5 py-0 rounded-full text-[9px] uppercase tracking-wider font-bold bg-primary text-primary-foreground border-none">
                                    v2.0
                                </Badge>
                                <span className="flex items-center gap-1">
                                    Convergence 2.0 is live! <Sparkles className="size-3 text-primary animate-pulse" />
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs p-3 bg-background text-primary border border-border">
                            <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                                <li>React 19 & Next.js 16 Ready</li>
                                <li>Tailwind CSS v4 engine alignment</li>
                                <li>Advanced dynamic spacing, borders, & shadows</li>
                            </ul>
                        </TooltipContent>
                    </Tooltip>
                </div>

                <div className="w-full max-w-5xl">
                    <h1 className="sr-only">Convergence UI</h1>
                    <TextHoverEffect text="CONVERGENCE" />
                </div>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    A dynamic theming engine for modern web applications. Inject
                    OKLCH colors directly into your DOM and transform your UI in
                    real-time.
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
                            playClickSound();
                            navigator.clipboard.writeText(
                                "npm install convergence-ui",
                            );
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
                        className="flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:bg-secondary shadow-[2px_2px_4px_rgba(0,0,0,0.4)] transition-colors cursor-pointer active:scale-95"
                    >
                        <Copy className="w-5 h-4" />
                        <span className="font-mono">
                            npm install convergence-ui
                        </span>
                    </div>
                    <Link
                        href="https://www.npmjs.com/package/convergence-ui"
                        target="_blank"
                        className="flex gap-1 px-6 py-3 rounded-md border border-border hover:bg-secondary transition-colors cursor-pointer active:scale-95"
                    >
                        <ArrowUpRight className="w-5 h-5 pt-0.5" />
                        View on NPM
                    </Link>
                </div>
            </section>

            {/* Feature Showcase Grid */}
            <section className="px-4 py-20 bg-muted/30 border-y border-border">
                <div className="w-full flex items-center justify-center">
                    <DemoArea />
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
                                style={{
                                    backgroundColor: `var(--${token.var})`,
                                }}
                            />

                            <div className="space-y-1">
                                <span className="block font-medium text-sm">
                                    {token.name}
                                </span>
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
            <SquigglyArrow />
        </div>
    );
}
