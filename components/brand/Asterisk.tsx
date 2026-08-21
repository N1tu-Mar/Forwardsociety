/**
 * Six-point scarlet asterisk. Anchors the left end of every section rule and
 * opens each entry in the problem ledger.
 *
 * Drawn as three crossed strokes rather than a glyph so it stays identical at
 * every size and never depends on a font being loaded.
 */
export function Asterisk({
  size = 10,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="butt"
      >
        <line x1="5" y1="0.5" x2="5" y2="9.5" />
        <line x1="1.1" y1="2.75" x2="8.9" y2="7.25" />
        <line x1="1.1" y1="7.25" x2="8.9" y2="2.75" />
      </g>
    </svg>
  );
}

/**
 * Four-point sparkle. Sits at the apex of the growth curve and nowhere else —
 * it means "this is the top of the climb", so do not scatter it around.
 */
export function Sparkle({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M7 0 C7 4.2 9.8 7 14 7 C9.8 7 7 9.8 7 14 C7 9.8 4.2 7 0 7 C4.2 7 7 4.2 7 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}
