"use client";

import type Lenis from "lenis";

const DEFAULT_OFFSET = 24;

let lenisInstance: Lenis | null = null;

type SmoothScrollOptions = {
  duration?: number;
  offset?: number;
  updateHash?: boolean;
};

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function smoothScrollTo(top: number, options: SmoothScrollOptions = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  const nextTop = Math.min(Math.max(top, 0), Math.max(maxScroll, 0));

  if (lenisInstance) {
    lenisInstance.scrollTo(nextTop, {
      immediate: false,
      duration: options.duration,
    });
    return;
  }

  window.scrollTo({ top: nextTop, behavior: "smooth" });
}

export function smoothScrollToId(
  id: string,
  {
    duration,
    offset = DEFAULT_OFFSET,
    updateHash = true,
  }: SmoothScrollOptions = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  if (updateHash) {
    window.history.pushState(null, "", `#${id}`);
  }

  if (lenisInstance) {
    lenisInstance.scrollTo(element, {
      offset: -offset,
      immediate: false,
      duration,
    });
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(top, { duration, offset, updateHash: false });
}
