"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerLenis, smoothScrollToId } from "@/lib/smooth-scroll";

export default function SmoothScrollProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.75,
      wheelMultiplier: 1.1,
      touchMultiplier: 1,
      syncTouch: false,
      autoRaf: false,
    });

    registerLenis(lenis);

    let frameId = 0;

    const onFrame = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(onFrame);
    };

    frameId = window.requestAnimationFrame(onFrame);

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || !href.startsWith("#")) {
        return;
      }

      const id = decodeURIComponent(href.slice(1));

      if (!id || !document.getElementById(id)) {
        return;
      }

      event.preventDefault();
      smoothScrollToId(id);
    };

    const handleHashChange = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));

      if (!id) {
        return;
      }

      smoothScrollToId(id, { updateHash: false });
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("hashchange", handleHashChange);
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
