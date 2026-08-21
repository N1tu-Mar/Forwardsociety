import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionRule } from "@/components/brand/SectionRule";

type Tone = "bone" | "ink" | "ink-raised";

const toneClass: Record<Tone, string> = {
  bone: "bg-bone text-ink",
  ink: "bg-ink text-bone",
  "ink-raised": "bg-ink-raised text-bone",
};

/**
 * A page section: background tone, the scarlet frame, and the vertical
 * rhythm. All spacing is a utility on this component — there are no global
 * element selectors for section padding anywhere in the project.
 *
 * `rule` controls the frame. Consecutive sections on the same background
 * should use 'top' only, so the rules do not double up into a 2px line.
 */
export function Section({
  children,
  tone = "bone",
  rule = "top",
  className = "",
  id,
  as: Tag = "section",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  rule?: "top" | "bottom" | "both" | "none";
  className?: string;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
  labelledBy?: string;
}) {
  const showTop = rule === "top" || rule === "both";
  const showBottom = rule === "bottom" || rule === "both";

  return (
    <Tag id={id} aria-labelledby={labelledBy} className={toneClass[tone]}>
      <Container>
        {showTop ? <SectionRule position="top" /> : null}
        <div className={`py-section ${className}`}>{children}</div>
        {showBottom ? <SectionRule position="bottom" /> : null}
      </Container>
    </Tag>
  );
}
