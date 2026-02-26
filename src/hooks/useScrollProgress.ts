"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks scroll progress through a tall container with sticky content.
 * Returns a normalized 0→1 value as the user scrolls through the section.
 *
 * Usage: wrap a tall container (e.g. 250vh) around sticky content (100vh).
 * Progress goes from 0 when the section top reaches the viewport top,
 * to 1 when the section bottom reaches the viewport bottom.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId: number;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = rect.height - viewportHeight;

      if (scrollableDistance <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollableDistance)));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { ref, progress };
}
