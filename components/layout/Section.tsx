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
 * A page section: background tone, the divider that opens it, and the vertical
 * rhythm. All spacing is a utility on this component — there are no global
 * element selectors for section padding anywhere in the project.
 *
 * The padding is asymmetric on purpose. A ruled section hugs its rule
 * (`pt-section-tight`) and leaves the generous gap below its content
 * (`pb-section`), so each section reads as a unit that begins at its rule
 * rather than as an evenly spaced block floating between two others.
 *
 * `divider={false}` is for a section that continues the one above it, or that
 * already announces itself with a change of background tone — a rule there
 * would be marking a boundary the colour has already marked. Those sections
 * keep symmetric padding, since there is no rule for them to hug.
 */
export function Section({
  children,
  tone = "bone",
  divider = true,
  className = "",
  id,
  as: Tag = "section",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  divider?: boolean;
  className?: string;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
  labelledBy?: string;
}) {
  const padding = divider ? "pt-section-tight pb-section" : "py-section";

  return (
    <Tag id={id} aria-labelledby={labelledBy} className={toneClass[tone]}>
      <Container>
        {divider ? <SectionRule tone={tone === "bone" ? "light" : "dark"} /> : null}
        <div className={`${padding} ${className}`}>{children}</div>
      </Container>
    </Tag>
  );
}
