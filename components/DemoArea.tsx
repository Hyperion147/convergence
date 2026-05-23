"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Check,
  Bell,
  User,
  Settings,
  ArrowUpRight,
  Sparkles,
  Palette,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  Component,
  Info,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { EvilRadarChart } from "@/components/evilcharts/charts/radar-chart";
import { EvilSankeyChart } from "@/components/evilcharts/charts/sankey-chart";
import { playClickSound } from "@/components/ClickSound";

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
  nodes: [
    { name: "Source" },
    { name: "Direct" },
    { name: "Organic" },
    { name: "Referral" },
  ],
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
  const [sliderVal, setSliderVal] = useState([45]);
  const [toggleActive, setToggleActive] = useState(true);
  const [checkboxActive, setCheckboxActive] = useState(true);
  const [selectVal, setSelectVal] = useState("system");
  const [count, setCount] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto relative group">
      {/* Decorative background border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

      <div className="relative rounded-xl border border-border bg-card text-card-foreground shadow-md overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-primary/5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-lg flex items-center gap-2 tracking-tight">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                Live Sandbox & Playground
              </span>
              <Badge variant="secondary" className="px-2 py-0.5 text-[10px] rounded-full font-medium">
                Live Sandbox
              </Badge>
              <Badge variant="outline" className="px-2 py-0.5 text-[10px] rounded-full font-medium">
                v2.0.0
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Inspect, test, and live-edit shadcn/ui components. Tweak the Convergence tokens on the bottom-right to watch styles morph instantly.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={() => setCount(0)} className="h-8 text-xs gap-1.5 border border-border hover:bg-secondary">
              Reset Counter
            </Button>
            <Button size="sm" onClick={() => { setCount(count + 1); playClickSound(); }} className="h-8 text-xs gap-1.5 shadow-sm bg-primary text-primary-foreground hover:bg-primary/90">
              <Component className="size-3.5" /> Clicked: <span className="font-bold underline">{count}</span>
            </Button>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Live Token Palette Matrix */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-primary" /> Live Token Palette Matrix
              </h4>
              <span className="text-[10px] text-muted-foreground">Active DOM variable bindings</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { name: "Primary", var: "bg-primary", desc: "Main brand actions", bar: "bg-primary", shade: "bg-primary/20" },
                { name: "Secondary", var: "bg-secondary", desc: "Alternative surfaces", bar: "bg-secondary", shade: "bg-secondary/50" },
                { name: "Accent", var: "bg-accent", desc: "Hover and highlights", bar: "bg-accent", shade: "bg-accent/30" },
                { name: "Destructive", var: "bg-destructive", desc: "Errors and deletes", bar: "bg-destructive", shade: "bg-destructive/20" },
                { name: "Muted", var: "bg-muted", desc: "Subtle indicators", bar: "bg-muted", shade: "bg-muted/40" },
              ].map((color, i) => (
                <div key={i} className="p-3 rounded-lg border border-border bg-card text-card-foreground flex flex-col gap-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className={`size-2.5 rounded-full ${color.var}`} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider">{color.name}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-tight">{color.desc}</p>
                  <div className="mt-1.5 flex gap-1">
                    <div className={`h-4 w-full rounded-sm ${color.bar}`} />
                    <div className={`h-4 w-full rounded-sm ${color.shade}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Row */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                label: "Revenue",
                val: "$42.5k",
                color: "text-chart-1",
                diff: "+12%",
              },
              {
                label: "Users",
                val: "12,400",
                color: "text-chart-2",
                diff: "+24%",
              },
              {
                label: "Active",
                val: "1.2k",
                color: "text-chart-3",
                diff: "+4%",
              },
              {
                label: "Conversion",
                val: "4.3%",
                color: "text-chart-4",
                diff: "-1%",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-lg bg-primary/5 border border-border space-y-1.5 hover:bg-secondary/60 transition-colors duration-300 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                    {stat.label}
                  </p>
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary">
                    {stat.diff}
                  </span>
                </div>
                <p className={`text-xl font-bold ${stat.color} leading-none`}>
                  {stat.val}
                </p>
              </div>
            ))}
          </section>

          {/* Main Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Column 1: Buttons, Badges, Accordion & Tabs, Typography */}
            <div className="space-y-6">
              {/* Card: Buttons & Badges */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                    <Palette className="size-4 text-primary" /> Buttons & Badges
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Verifies color variants, border radii, and font weights.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    <Button variant="default" size="sm" onClick={playClickSound}>Default</Button>
                    <Button variant="secondary" size="sm" onClick={playClickSound}>Secondary</Button>
                    <Button variant="outline" size="sm" onClick={playClickSound}>Outline</Button>
                    <Button variant="ghost" size="sm" onClick={playClickSound}>Ghost</Button>
                    <Button variant="link" size="sm" className="h-auto p-0">Link</Button>
                    <Button variant="destructive" size="sm" onClick={playClickSound}>Destructive</Button>
                  </div>
                  <div className="border-t border-border/60 pt-3">
                    <Label className="text-[10px] text-muted-foreground block mb-2 font-mono uppercase tracking-wider">Badge States</Label>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 border-t border-border/60 px-4 py-2 text-[10px] text-muted-foreground">
                  Responds to background, foreground, ring, and border.
                </CardFooter>
              </Card>

              {/* Card: Disclosures (Accordion & Tabs) */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                    <Layers className="size-4 text-primary" /> Disclosures & Navigation
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Tests animations, transition triggers, and state classes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-4">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-8 p-1 bg-muted/60">
                      <TabsTrigger value="overview" className="text-[11px] py-1">Overview</TabsTrigger>
                      <TabsTrigger value="analytics" className="text-[11px] py-1">Analytics</TabsTrigger>
                      <TabsTrigger value="settings" className="text-[11px] py-1">Config</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="p-3 border border-border rounded-md mt-2 bg-card/50">
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Overview panel: Displays live platform variables. Updates style dynamically when theme variable coordinates change.
                      </p>
                    </TabsContent>
                    <TabsContent value="analytics" className="p-3 border border-border rounded-md mt-2 bg-card/50">
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Analytics panel: Monitor your metrics, traffic sources, and performance indexes.
                      </p>
                    </TabsContent>
                    <TabsContent value="settings" className="p-3 border border-border rounded-md mt-2 bg-card/50">
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Configuration workspace: Control features and operational tolerances.
                      </p>
                    </TabsContent>
                  </Tabs>

                  <div className="border-t border-border/60 pt-2">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-border/60">
                        <AccordionTrigger className="text-xs py-2 hover:no-underline text-foreground">Is it customized live?</AccordionTrigger>
                        <AccordionContent className="text-[11px] text-muted-foreground pb-2">
                          Yes! As soon as you shift the oklch coordinates in Convergence, this collapsible block will update its border colors and text immediately.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b-0">
                        <AccordionTrigger className="text-xs py-2 hover:no-underline text-foreground">Which tokens are tested?</AccordionTrigger>
                        <AccordionContent className="text-[11px] text-muted-foreground pb-1">
                          Primarily border, foreground, primary for highlights, and font properties.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>

              {/* Typography Preview */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-semibold">Typography & Font Tokens</CardTitle>
                  <CardDescription className="text-xs">Examines sans, serif, and mono typography styles.</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-3">
                  <div className="flex flex-col gap-1.5 p-3 rounded-md bg-primary/5 border border-border">
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-mono">Sans Serif</span>
                    <p className="font-sans text-xs leading-normal">
                      The quick brown fox jumps over the lazy dog perfectly.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-md bg-primary/5 border border-border">
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-mono">Serif</span>
                    <p className="font-serif text-xs leading-normal italic">
                      The quick brown fox jumps over the lazy dog perfectly.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-md bg-primary/5 border border-border">
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-mono">Monospace</span>
                    <p className="font-mono text-xs leading-normal text-primary">
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Column 2: Form Controls, User & Profile, Weekly Activity Chart, Release Calendar */}
            <div className="space-y-6">
              {/* Card: Form Controls */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                    <SlidersHorizontal className="size-4 text-primary" /> Form Controls
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Examines focus borders, ring indicators, select lists, and switches.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="input-demo" className="text-xs">Input Surface</Label>
                    <Input id="input-demo" placeholder="Type text to inspect outline-ring..." className="h-9 text-xs" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="select-theme" className="text-xs">Selection</Label>
                      <Select value={selectVal} onValueChange={setSelectVal}>
                        <SelectTrigger id="select-theme" className="h-9 text-xs">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light" className="text-xs">Light Mode</SelectItem>
                          <SelectItem value="dark" className="text-xs">Dark Mode</SelectItem>
                          <SelectItem value="system" className="text-xs">System Default</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col justify-end pb-1.5 space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="checkbox-demo"
                          checked={checkboxActive}
                          onCheckedChange={(checked) => setCheckboxActive(!!checked)}
                        />
                        <Label htmlFor="checkbox-demo" className="text-xs cursor-pointer font-medium">
                          Accept terms
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border/60 pt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="switch-demo" className="text-xs">Interactive Switch</Label>
                        <p className="text-[10px] text-muted-foreground">Triggers live states</p>
                      </div>
                      <Switch
                        id="switch-demo"
                        checked={toggleActive}
                        onCheckedChange={setToggleActive}
                      />
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="flex justify-between">
                        <Label className="text-xs">Slider Adjustment</Label>
                        <span className="text-[10px] font-mono font-bold bg-muted px-1.5 py-0.5 rounded">{sliderVal[0]}%</span>
                      </div>
                      <Slider
                        value={sliderVal}
                        onValueChange={setSliderVal}
                        max={100}
                        step={1}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card: Users & Profile */}
              <Card className="shadow-sm border border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10 ring-2 ring-primary/20">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback><User className="size-5" /></AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-0.5 min-w-0">
                      <h4 className="text-xs font-semibold truncate">Alex Rivers</h4>
                      <p className="text-[10px] text-muted-foreground truncate">Product Engineer & Themer</p>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="h-7 text-[10px] px-2.5">Options</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 p-3 text-xs">
                        <div className="grid gap-2">
                          <div className="space-y-1">
                            <h4 className="font-semibold leading-none">Popover details</h4>
                            <p className="text-[10px] text-muted-foreground">
                              Change popover tokens to adjust style.
                            </p>
                          </div>
                          <div className="grid gap-1.5 border-t border-border/60 pt-2">
                            <div className="flex justify-between text-[10px]">
                              <span className="text-muted-foreground">Status:</span>
                              <span className="font-medium text-emerald-500 flex items-center gap-1">
                                ● Connected
                              </span>
                            </div>
                            <div className="flex justify-between text-[10px]">
                              <span className="text-muted-foreground">Role:</span>
                              <span className="font-medium">Administrator</span>
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Activity Bar Chart */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-sm font-semibold">Weekly Activity</CardTitle>
                      <CardDescription className="text-xs">Live visualization of usage trends.</CardDescription>
                    </div>
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-1">
                  <div className="h-28 flex items-end gap-1 pb-1 border-b border-border/60 px-2 mt-4">
                    {[
                      0.8, 0.4, 0.6, 0.95, 0.2, 0.7, 0.85, 0.3,
                      0.65, 0.5, 0.9, 0.45,
                    ].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-xs hover:opacity-100 transition-all cursor-pointer relative group/bar border-t border-x border-primary/20"
                        style={{
                          height: `${h * 100}%`,
                          backgroundColor: `var(--chart-${(i % 5) + 1})`,
                          opacity: 0.85,
                        }}
                        whileHover={{ scaleY: 1.05 }}
                      >
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[8px] font-mono py-0.5 px-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-sm border border-border">
                          {Math.round(h * 100)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendar / Release Schedule */}
              <Card className="shadow-sm border border-border">
                <CardContent className="flex justify-center items-center">
                  <div className="w-full border-none bg-background rounded-l flex justify-center items-center shadow-xs">
                    {mounted ? (
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border-0 p-1 scale-90"
                      />
                    ) : (
                      <div className="text-[11px] text-muted-foreground py-10 animate-pulse">
                        Loading calendar...
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Column 3: Modals & Overlays, Radar Chart, Sankey Chart, Notifications List */}
            <div className="space-y-6">
              {/* Card: Modals & Dropdowns */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                    <Settings className="size-4 text-primary" /> Modals & Dropdowns
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Tests portal rendering, overlays, and dropdown positions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Dialog Demo */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full gap-1.5 justify-start text-xs h-9">
                          <span className="size-2 rounded-full bg-indigo-500" />
                          Open Dialog
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="p-6">
                        <DialogHeader>
                          <DialogTitle className="text-base">Theming Workspace</DialogTitle>
                          <DialogDescription className="text-xs">
                            This modal represents popover and card-like overlays. Try modifying layout border styles and overlay colors.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 border-y border-border space-y-3">
                          <p className="text-xs text-muted-foreground">
                            Dialog components are rendered via a portal outside the root HTML component but should inherit CSS variables.
                          </p>
                          <Input placeholder="Inspect modal focus style..." className="h-9 text-xs" />
                        </div>
                        <DialogFooter className="gap-2 sm:gap-0">
                          <Button size="sm" type="submit">Apply changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {/* Sheet Demo */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full gap-1.5 justify-start text-xs h-9">
                          <span className="size-2 rounded-full bg-amber-500" />
                          Open Sheet
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="p-6 w-80">
                        <SheetHeader>
                          <SheetTitle className="text-base">Configure Theme Drawer</SheetTitle>
                          <SheetDescription className="text-xs">
                            A slide-out layout commonly used for sidebar controls.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="mt-6 space-y-6">
                          <div className="rounded-lg border border-border p-4 bg-muted/20 space-y-2">
                            <h5 className="font-semibold text-[10px] uppercase tracking-wider">Drawer Context</h5>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                              Ideal for previewing sidebar parameters (`sidebar`, `sidebar-border`, `sidebar-accent`).
                            </p>
                          </div>
                          <div className="space-y-1.5">
                            <Label className="text-xs">Workspace Label</Label>
                            <Input placeholder="Enter workspace label..." className="h-9 text-xs" />
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>

                  <div className="border-t border-border/60 pt-3">
                    {/* Dropdown Menu Demo */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" className="w-full flex justify-between items-center bg-primary hover:bg-primary/95 text-primary-foreground shadow-sm h-9 text-xs">
                          <span>Theme Selection Menu</span>
                          <ChevronRight className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel className="text-xs">Design Controls</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-xs cursor-pointer" onClick={playClickSound}>
                          <Palette className="size-3.5" /> Toggle High Contrast
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-xs cursor-pointer" onClick={playClickSound}>
                          <SlidersHorizontal className="size-3.5" /> View OKLCH Values
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive gap-2 focus:bg-destructive/10 focus:text-destructive text-xs cursor-pointer" onClick={playClickSound}>
                          <Trash2 className="size-3.5" /> Reset Customizations
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>

              {/* Info panel */}
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-primary-foreground/90 flex gap-3">
                <Info className="size-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0">
                  <h5 className="font-semibold text-xs text-foreground">Next.js 16/React 19 Ready</h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Tailwind v4's CSS engine handles standard `@theme` configurations correctly. Local components will update when colors in `:root` change.
                  </p>
                </div>
              </div>

              {/* Performance Metrics Radar Chart */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-1">
                  <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="h-48 border border-border/60 rounded-md bg-background flex items-center justify-center p-1 relative">
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
                </CardContent>
              </Card>

              {/* Notifications list / Recent Activity */}
              <Card className="shadow-sm border border-border">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Bell className="w-3.5 h-3.5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0 space-y-2">
                  {[
                    {
                      title: "System Update",
                      desc: "Version 2.4 is live.",
                      time: "2h ago",
                    },
                    {
                      title: "New User Registration",
                      desc: "Alice joined the workspace.",
                      time: "5h ago",
                    },
                    {
                      title: "Build Successful",
                      desc: "Production bundle generated.",
                      time: "1d ago",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2 rounded-md border border-border/60 bg-card/50 hover:bg-muted/50 transition-colors duration-300"
                    >
                      <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium truncate">{item.title}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{item.desc}</p>
                      </div>
                      <span className="text-[9px] text-muted-foreground whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

          </div>

          {/* Data Grid: Tables & Contrast Testing */}
          <section className="pt-2">
            <Card className="shadow-sm border border-border">
              <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between flex-wrap gap-2">
                <div>
                  <CardTitle className="text-sm font-semibold">Live Table & Data Display</CardTitle>
                  <CardDescription className="text-xs">
                    Tests zebra striping, row hover accentuation, cell padding, and outline borders.
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-[10px] bg-card">
                  Table Row Count: 3
                </Badge>
              </CardHeader>
              <CardContent className="p-4 pt-1 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border/60 hover:bg-transparent">
                      <TableHead className="w-[120px] text-xs font-semibold">Token ID</TableHead>
                      <TableHead className="text-xs font-semibold">Semantic Role</TableHead>
                      <TableHead className="text-xs font-semibold">Default Color</TableHead>
                      <TableHead className="text-right text-xs font-semibold">Contrast Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-muted/40 transition-colors border-b border-border/60">
                      <TableCell className="font-mono text-xs font-semibold">--primary</TableCell>
                      <TableCell className="text-xs">Brand action buttons, active toggles, highlighted states</TableCell>
                      <TableCell><span className="text-xs font-mono">oklch(0.205 0 0)</span></TableCell>
                      <TableCell className="text-right">
                        <Badge className="bg-emerald-500 hover:bg-emerald-600 border-none text-white text-[9px] h-5">Passes AA</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/40 transition-colors border-b border-border/60">
                      <TableCell className="font-mono text-xs font-semibold">--secondary</TableCell>
                      <TableCell className="text-xs">Background surfaces, alternate badges, inactive borders</TableCell>
                      <TableCell><span className="text-xs font-mono">oklch(0.97 0 0)</span></TableCell>
                      <TableCell className="text-right">
                        <Badge className="bg-emerald-500 hover:bg-emerald-600 border-none text-white text-[9px] h-5">Passes AA</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/40 transition-colors border-b-0">
                      <TableCell className="font-mono text-xs font-semibold">--destructive</TableCell>
                      <TableCell className="text-xs">Danger notifications, deletion confirmation, negative tags</TableCell>
                      <TableCell><span className="text-xs font-mono">oklch(0.577 0.245 27.3)</span></TableCell>
                      <TableCell className="text-right">
                        <Badge className="bg-emerald-500 hover:bg-emerald-600 border-none text-white text-[9px] h-5">Passes AA</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  );
}
