import { wordmark } from "@/content/copy";

type Size = "sm" | "md" | "lg";
type Theme = "light" | "dark";

// `light` means the mark sits on bone. `dark` means it sits on ink.
const themeClass: Record<Theme, string> = {
  light: "text-ink",
  dark: "text-bone",
};

const sizeClass: Record<Size, string> = {
  sm: "text-[1.0625rem] leading-none",
  md: "text-[1.5rem] leading-none",
  lg: "text-display-m",
};

/**
 * The wordmark. Bodoni Moda italic, middle word in scarlet.
 * `whitespace-nowrap` is load-bearing — the mark must never wrap, including
 * in the 375px header.
 */
export function Wordmark({
  size = "sm",
  theme = "light",
  className = "",
}: {
  size?: Size;
  theme?: Theme;
  className?: string;
}) {
  return (
    <span
      className={`font-display whitespace-nowrap italic ${sizeClass[size]} ${themeClass[theme]} ${className}`}
    >
      {wordmark.first} <span className="text-scarlet">{wordmark.middle}</span>{" "}
      {wordmark.last}
    </span>
  );
}
