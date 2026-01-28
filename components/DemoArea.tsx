"use client";

import React from "react";
import { BarChart3, Check } from "lucide-react";

export function DemoArea() {
  return (
    <div className="w-full max-w-md mx-auto relative group">
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary/50 to-accent/50 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

      <div className="relative rounded-xl border border-border bg-card text-card-foreground shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20">
          <div className="space-y-1">
            <h3 className="font-semibold text-base">Dashboard Preview</h3>
            <p className="text-xs text-muted-foreground">
              Changes reflect in real-time
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-red-400/50"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400/50"></div>
            <div className="h-2 w-2 rounded-full bg-green-400/50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Revenue", val: "$12.5k", color: "text-chart-1" },
              { label: "Users", val: "+24%", color: "text-chart-2" },
              { label: "Active", val: "1.2k", color: "text-chart-3" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-secondary/10 border border-border space-y-1"
              >
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                  {stat.label}
                </p>
                <p className={`text-lg font-bold ${stat.color}`}>{stat.val}</p>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Weekly Activity</label>
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="h-24 flex items-end gap-2 pb-2 border-b border-border">
              {[0.3, 0.5, 0.4, 0.8, 0.6, 0.9, 0.7].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[2px] hover:opacity-80 transition-all cursor-pointer relative group/bar"
                  style={{
                    height: `${h * 100}%`,
                    backgroundColor: `var(--chart-${(i % 5) + 1})`,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap shadow-sm border border-border">
                    Value: {Math.round(h * 100)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Name</label>
              <div className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                Convergence UI
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full flex gap-2">
                <Check className="w-4 h-4" /> Save
              </button>
              <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                Cancel
              </button>
            </div>
          </div>

          {/* Typography Preview */}
          <div className="space-y-3 pt-4 border-t border-border/50">
            <label className="text-sm font-medium">Typography Styles</label>
            <div className="space-y-2">
              <div className="flex flex-col gap-1 p-3 rounded-md bg-muted/20 border border-border">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                  Sans Serif
                </span>
                <p className="font-sans text-sm">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-md bg-muted/20 border border-border">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                  Serif
                </span>
                <p className="font-serif text-sm">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-md bg-muted/20 border border-border">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                  Monospace
                </span>
                <p className="font-mono text-sm">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
