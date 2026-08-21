import type { ReactNode } from "react";

/**
 * The one horizontal shell. max-width 1180px, gutters 24 / 40 / 56.
 * Nothing else in the codebase should set page-level horizontal padding.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-shell px-6 md:px-10 xl:px-14 ${className}`}
    >
      {children}
    </div>
  );
}
