import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center font-sans bg-background">
      <div className="max-w-5xl text-foreground text-7xl font-bold tracking-wide flex flex-col items-center cursor-default pt-20">
        <h2 className="bg-linear-to-r from-emerald-400 via-emerald-800 to-emerald-400 bg-clip-text text-transparent line leading-normal">
          Convergence-UI
        </h2>
        <p className="w-xl h-2 bg-linear-to-r from-emerald-800 via-emerald-400 to-emerald-800 rounded-sm"></p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="bg-background opacity-80 border px-4 rounded-sm">Demo website for convergence</p>
        <p className="text-xl text-accent tracking-wide">Transform your UI with custom color themes in real-time.</p>
      </div>
      <TextHoverEffect text="CONVERGENCE" />
    </div>
  );
}
