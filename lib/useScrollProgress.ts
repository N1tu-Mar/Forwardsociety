"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Document scroll progress, 0 at the top and 1 at the bottom.
 *
 * window is read only inside useEffect — never during render — so the server
 * and first client render agree and there is no hydration mismatch.
 * The listener is rAF-throttled, passive, and removed on unmount.
 *
 * Returns null while the value is unknown (server render, first paint, or
 * reduced motion). Callers render the finished state when it is null.
 */
export function useScrollProgress(enabled: boolean): number | null {
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(1);
        return;
      }
      const next = window.scrollY / scrollable;
      setProgress(next < 0 ? 0 : next > 1 ? 1 : next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    // Seed the first value on the next frame rather than synchronously, so
    // the effect never sets state during its own run.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  return progress;
}

/**
 * Subscribes to a media query through useSyncExternalStore.
 *
 * The server snapshot is always null, meaning "not measured yet". Callers
 * treat null as the safe, still, fully-rendered case — so the markup React
 * produces on the server matches the first client render exactly.
 */
function useMediaQuery(query: string): boolean | null {
  return useSyncExternalStore(
    (onStoreChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onStoreChange);
      return () => list.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => null,
  );
}

/** True when the visitor has asked for reduced motion. Null until measured. */
export function usePrefersReducedMotion(): boolean | null {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True at >= 1180px, where the scroll-linked curve is allowed to run. */
export function useIsWideViewport(): boolean | null {
  return useMediaQuery("(min-width: 1180px)");
}
