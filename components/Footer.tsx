import { Github, Layout } from "lucide-react"

const Footer = () => {
    return (
        <footer className="border-t border-border bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-linear-to-br from-primary to-accent">
                    <img src="/convergence.svg" alt="" className="p-1" />
                </div>
                <span className="font-bold text-2xl tracking-tight">
                  Convergence
                </span>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                The next-generation theming engine for React and Next applications. Built
                with OKLCH for perceptual uniformity and accessibility.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">
                Quick Links
              </h3>
              <ul className="space-y-3 grid grid-cols-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://www.npmjs.com/package/convergence-ui"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    NPM Package
                  </a>
                </li>
                <li>
                  <a href="https://suryansu.pro" target="_blank" className="hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hyperion147" target="_blank" className="hover:text-primary transition-colors">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Hyperion9913" target="_blank" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Convergence UI. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              System Operational
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer