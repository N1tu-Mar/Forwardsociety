/**
 * The static growth curve that sits lower-right of a hero. Same shape as the
 * scroll-linked one in GrowthCurve, always drawn complete. No hooks, so it is
 * a server component and costs nothing.
 */
export function HeroCurve({ className = "" }: { className?: string }) {
  return (
    <svg
      width="180"
      height="120"
      viewBox="0 0 180 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`text-scarlet overflow-visible ${className}`}
    >
      <path
        d="M 0 118 L 96 118 C 126 118 140 104 148 76 C 156 48 158 22 158 6"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="square"
      />
      <path
        d="M158 -2 C158 2.6 160.4 5 165 5 C160.4 5 158 7.4 158 12 C158 7.4 155.6 5 151 5 C155.6 5 158 2.6 158 -2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
