import type { ReactNode } from "react";

/**
 * Hairline-separated rows. Used for members-get, the team roster, and the
 * speaker roster. Deliberately not cards — the site has no images, so weight
 * comes from rules and type, never from boxes.
 *
 * `tone` selects the hairline colour for the background it sits on.
 */
export function RuledList({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const border = tone === "dark" ? "border-bone/15" : "border-ink/15";
  return (
    <ul className={`border-t ${border} ${className}`}>{children}</ul>
  );
}

export function RuledRow({
  children,
  tone = "light",
  index,
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  /** Optional ordinal shown in ash at the left. Pass '01', not 1. */
  index?: string;
  className?: string;
}) {
  const border = tone === "dark" ? "border-bone/15" : "border-ink/15";
  const ash = tone === "dark" ? "text-ash-on-ink" : "text-ash";

  return (
    <li
      className={`border-b ${border} grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:gap-8 ${className}`}
    >
      {index ? (
        <span
          className={`font-display text-eyebrow font-bold uppercase ${ash} md:col-span-2 md:pt-1.5`}
        >
          {index}
        </span>
      ) : null}
      <div className={index ? "md:col-span-10" : "md:col-span-12"}>
        {children}
      </div>
    </li>
  );
}
