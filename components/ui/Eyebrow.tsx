import type { ReactNode } from "react";

/**
 * The utility label that opens every major section. It is load-bearing
 * navigation for a page with no images, not decoration — every section gets
 * one, and no section gets two.
 *
 * `tone` picks the ash variant with enough contrast for its background.
 */
export function Eyebrow({
  children,
  tone = "light",
  as: Tag = "p",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "scarlet";
  as?: "p" | "h2" | "span" | "div";
  id?: string;
  className?: string;
}) {
  const toneClass =
    tone === "scarlet"
      ? "text-scarlet"
      : tone === "dark"
        ? "text-ash-on-ink"
        : "text-ash";

  return (
    <Tag
      id={id}
      className={`font-display text-eyebrow font-bold uppercase ${toneClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
