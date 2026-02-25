"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Detects when an element enters the viewport.
 * Fires once by default — useful for entrance animations.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit & { once?: boolean }
) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const { once = true, ...observerOptions } = options ?? {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: 0.1, ...observerOptions }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, observerOptions.threshold, observerOptions.rootMargin]);

  return { ref, isInView };
}
