import Link from "next/link";
import type { ReactNode } from "react";
import { isReal } from "@/lib/placeholder";
import { TodoChip } from "@/components/ui/TodoChip";

type Variant = "primary" | "ghost";
type Tone = "light" | "dark";

const base =
  "inline-flex items-center justify-center font-display text-eyebrow font-bold uppercase px-6 py-3.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-scarlet";

const variantClass: Record<Variant, Record<Tone, string>> = {
  primary: {
    // on bone
    light: "rounded-control bg-scarlet text-bone hover:bg-ink",
    // on ink
    dark: "rounded-control bg-scarlet text-bone hover:bg-bone hover:text-ink",
  },
  ghost: {
    light: "border border-ink/25 text-ink hover:border-ink",
    dark: "border border-bone/25 text-bone hover:border-bone",
  },
};

/**
 * The only button in the system. Buttons name what happens — 'Interest Form',
 * not 'Learn more'.
 *
 * If `href` is still an unconfirmed placeholder the control does not render as
 * a dead link: in development it shows a TODO chip, and in production it is
 * omitted entirely.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  tone = "light",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  external?: boolean;
  className?: string;
}) {
  if (!isReal(href)) {
    return <TodoChip value={href} />;
  }

  const classes = `${base} ${variantClass[variant][tone]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/**
 * A text link with the underline-draw hover. The one permitted link
 * micro-interaction.
 */
export function TextLink({
  href,
  children,
  tone = "light",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
}) {
  if (!isReal(href)) {
    return (
      <span className={className}>
        {children}
        <TodoChip value={href} />
      </span>
    );
  }

  const classes = `group relative inline-block ${
    tone === "dark" ? "text-bone" : "text-ink"
  } focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-scarlet ${className}`;

  const inner = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="bg-scarlet absolute right-0 bottom-[-3px] left-0 h-px origin-right scale-x-0 transition-transform duration-200 ease-out group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100"
      />
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
