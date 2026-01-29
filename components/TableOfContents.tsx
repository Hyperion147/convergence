"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { playClickSound } from "./ClickSound";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tocItems: TocItem[] = [
  { id: "installation", title: "Installation", level: 2 },
  { id: "usage", title: "Usage", level: 2 },
  { id: "comparison-component", title: "The Comparison Component", level: 3 },
  { id: "programmatic-usage", title: "Programmatic Usage", level: 3 },
  { id: "configuration", title: "Configuration", level: 2 },
  { id: "types", title: "Types", level: 2 },
  { id: "presets", title: "Presets", level: 2 },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" },
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      tocItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <nav className="fixed left-8 top-24 hidden xl:block w-64 p-4">
      <ul className="space-y-2 text-sm">
        {tocItems.map((item) => (
          <li
            key={item.id}
            className={cn(
              "transition-all duration-300 ease-in-out border-l-2 pl-4",
              item.level === 3 && "pl-8",
              activeId === item.id
                ? "border-primary text-primary opacity-100 font-medium scale-105 origin-left"
                : "border-transparent text-muted-foreground opacity-50 hover:opacity-100 hover:text-foreground hover:border-border",
            )}
            onClick={playClickSound}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="block py-1"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
