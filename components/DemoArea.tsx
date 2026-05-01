"use client";

import React from "react";
import { BarChart3, Check, Bell, User, Settings, ArrowUpRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { EvilRadarChart } from "@/components/evilcharts/charts/radar-chart";
import { EvilSankeyChart } from "@/components/evilcharts/charts/sankey-chart";

const radarData = [
  { metric: "Design", value: 80 },
  { metric: "Code", value: 90 },
  { metric: "UX", value: 70 },
  { metric: "Speed", value: 85 },
  { metric: "SEO", value: 65 },
];
const radarConfig = {
  value: { label: "Score", color: "var(--chart-1)" },
};

const sankeyData = {
  nodes: [{ name: "Source" }, { name: "Direct" }, { name: "Organic" }, { name: "Referral" }],
  links: [
    { source: 0, target: 1, value: 40 },
    { source: 0, target: 2, value: 60 },
    { source: 0, target: 3, value: 20 },
  ],
};
const sankeyConfig = {
  Source: { label: "Traffic", color: "var(--chart-1)" },
  Direct: { label: "Direct", color: "var(--chart-2)" },
  Organic: { label: "Organic", color: "var(--chart-3)" },
  Referral: { label: "Referral", color: "var(--chart-4)" },
};

export function DemoArea() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [volume, setVolume] = React.useState(75);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto relative group">
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary/50 to-accent/50 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

      <div className="relative rounded-xl border border-border bg-card text-card-foreground shadow-md overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-primary/5">
          <div className="space-y-1">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <Settings className="w-4 h-4 text-muted-foreground" />
              Dashboard Preview
            </h3>
            <p className="text-xs text-muted-foreground">
              A comprehensive view of the theme applied to various complex components.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-red-400/50"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400/50"></div>
            <div className="h-2 w-2 rounded-full bg-green-400/50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-10">
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Revenue", val: "$42.5k", color: "text-chart-1", diff: "+12%" },
              { label: "Users", val: "12,400", color: "text-chart-2", diff: "+24%" },
              { label: "Active", val: "1.2k", color: "text-chart-3", diff: "+4%" },
              { label: "Conversion", val: "4.3%", color: "text-chart-4", diff: "-1%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-primary/5 border border-border space-y-2 hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                    {stat.label}
                  </p>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary">
                    {stat.diff}
                  </span>
                </div>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Charts, Activity, Typography */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Activity Chart */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Weekly Activity</label>
                  <BarChart3 className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="h-32 flex items-end gap-2 pb-2 border-b border-border px-2">
                  {[0.3, 0.5, 0.4, 0.8, 0.6, 0.9, 0.7, 0.4, 0.5, 0.8, 0.9, 0.6].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm hover:opacity-80 transition-all cursor-pointer relative group/bar border-t border-x border-primary/20"
                      style={{
                        height: `${h * 100}%`,
                        backgroundColor: `var(--chart-${(i % 5) + 1})`,
                        opacity: 0.8,
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap shadow-sm border border-border">
                        Value: {Math.round(h * 100)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side-by-Side Charts Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Performance Metrics</label>
                  <div className="h-56 border border-border rounded-lg bg-background flex items-center justify-center p-2 relative">
                    <EvilRadarChart 
                      data={radarData} 
                      dataKey="metric" 
                      chartConfig={radarConfig} 
                      className="w-full h-full"
                      hideLegend
                      hideGrid={false}
                      variant="filled"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">Traffic Flow</label>
                  <div className="h-56 border border-border rounded-lg bg-background flex items-center justify-center p-2">
                    <EvilSankeyChart 
                      data={sankeyData} 
                      chartConfig={sankeyConfig} 
                      className="w-full h-full"
                      linkVariant="gradient"
                    />
                  </div>
                  <div className="flex justify-end text-xs">
                    <p className="text-muted-foreground">Charts by- &nbsp;</p><a className="text-primary" href="https://evilcharts.com" target="_blank" rel="noopener noreferrer">evilcharts.com</a>
                  </div>
                </div>
              </div>

              {/* Typography Preview */}
              <div className="space-y-4 pt-6 border-t border-border/50 p-4">
                <label className="text-sm font-medium">Typography & Content Styles</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2 p-4 rounded-md bg-primary/5 border border-border">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                      Sans Serif
                    </span>
                    <p className="font-sans text-sm leading-relaxed">
                      The quick brown fox jumps over the lazy dog perfectly.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-md bg-primary/5 border border-border">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                      Serif
                    </span>
                    <p className="font-serif text-sm leading-relaxed italic">
                      The quick brown fox jumps over the lazy dog perfectly.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-md bg-primary/5 border border-border">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                      Monospace
                    </span>
                    <p className="font-mono text-sm leading-relaxed text-primary">
                      The quick brown fox jumps over the lazy dog perfectly.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Forms, Calendar, Notifications */}
            <div className="space-y-8">
              
              {/* Form Elements */}
              <div className="p-5 rounded-lg border border-border bg-primary/5 space-y-6">
                <h4 className="font-medium text-sm border-b border-border">Settings</h4>
                
                <div className="space-y-3">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Project Name</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Convergence UI
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Volume</label>
                      <span className="text-xs font-mono bg-primary/10 px-1.5 py-0.5 rounded text-primary">{volume}%</span>
                    </div>
                    <Slider
                      value={[volume]}
                      onValueChange={(val) => setVolume(val[0])}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full flex gap-2 shadow-sm">
                    <Check className="w-4 h-4" /> Save Configuration
                  </button>
                </div>
              </div>

              {/* Calendar */}
              <div className="space-y-3">
                <label className="text-sm font-medium block">Release Schedule</label>
                <div className="border border-border rounded-lg bg-background p-3 flex justify-center items-center w-full shadow-sm min-h-[300px]">
                  {mounted ? (
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border-none"
                    />
                  ) : (
                    <div className="text-sm text-muted-foreground animate-pulse">Loading calendar...</div>
                  )}
                </div>
              </div>

              {/* Notifications */}
              <div className="space-y-3">
                 <label className="text-sm font-medium block flex items-center gap-2">
                   <Bell className="w-4 h-4 text-muted-foreground" />
                   Recent Activity
                 </label>
                 <div className="space-y-2">
                   {[
                     { title: "System Update", desc: "Version 2.4 is live.", time: "2h ago", color: "bg-primary/10 text-primary" },
                     { title: "New User", desc: "Alice joined the team.", time: "5h ago", color: "bg-primary/10 text-primary" },
                     { title: "Deployment", desc: "Production build successful.", time: "1d ago", color: "bg-primary/10 text-primary" },
                   ].map((item, i) => (
                     <div key={i} className="flex items-start gap-3 p-3 rounded-md border border-border bg-card/50 hover:bg-muted/50 transition-colors">
                       <div className={`p-1.5 rounded-full mt-1.5 ${item.color}`}>
                         <ArrowUpRight className="w-3 h-3" />
                       </div>
                       <div>
                         <p className="text-sm font-medium">{item.title}</p>
                         <p className="text-xs text-muted-foreground">{item.desc}</p>
                       </div>
                       <span className="text-[10px] text-muted-foreground ml-auto whitespace-nowrap mt-1">{item.time}</span>
                     </div>
                   ))}
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
