"use client";

import {
  useScrollProgress,
  usePrefersReducedMotion,
  useIsWideViewport,
} from "@/lib/useScrollProgress";

// The path length below is fixed because the path is drawn in a fixed
// viewBox. Measured once rather than read from the DOM every frame.
const PATH = "M 2 236 L 2 150 C 2 150 30 148 46 122 C 62 96 62 40 62 2";
const PATH_LENGTH = 300;

/**
 * The club's argument made visual: flat, flat, flat, then vertical.
 *
 * Runs as a fixed 1px scarlet stroke in the right margin at >= 1180px, driven
 * off document scroll progress. Below that width, and under reduced motion,
 * it renders complete and still — and in the reduced-motion case no scroll
 * listener is attached at all.
 *
 * The sparkle at the apex ignites only past 92% progress, which is where the
 * closing CTA sits.
 */
export function GrowthCurve() {
  const reducedMotion = usePrefersReducedMotion();
  const isWide = useIsWideViewport();

  // Animate only once we know both answers and both say yes.
  const shouldAnimate = reducedMotion === false && isWide === true;
  const progress = useScrollProgress(shouldAnimate);

  // Anything other than a live measurement renders the finished curve.
  const value = shouldAnimate && progress !== null ? progress : 1;
  const dashOffset = PATH_LENGTH * (1 - value);
  const sparkleLit = value > 0.92;

  if (isWide === false) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-6 bottom-24 z-0 hidden wide:block"
    >
      <svg
        width="64"
        height="238"
        viewBox="0 0 64 238"
        fill="none"
        className="text-scarlet overflow-visible"
      >
        <path
          d={PATH}
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="square"
          strokeDasharray={PATH_LENGTH}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 120ms linear" }}
        />
        <g
          transform="translate(62 2)"
          style={{
            opacity: sparkleLit ? 1 : 0,
            transition: "opacity 400ms ease-out",
          }}
        >
          <path
            d="M0 -7 C0 -2.8 2.8 0 7 0 C2.8 0 0 2.8 0 7 C0 2.8 -2.8 0 -7 0 C-2.8 0 0 -2.8 0 -7 Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}
