import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroCurve } from "@/components/brand/HeroCurve";

/**
 * The masthead every page below the home page opens with. One h1, an eyebrow,
 * and an optional standfirst. Sits in the same place on every page so the
 * site has a fixed horizon line.
 */
export function PageHero({
  eyebrow,
  title,
  standfirst,
  tone = "light",
  curve = false,
}: {
  eyebrow: string;
  title: ReactNode;
  standfirst?: string;
  tone?: "light" | "dark";
  curve?: boolean;
}) {
  const dark = tone === "dark";

  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-ink text-bone" : "bg-bone text-ink"
      }`}
    >
      <Container>
        <div className="relative pt-36 pb-16 md:pt-44 md:pb-20">
          <Eyebrow tone={dark ? "dark" : "light"}>{eyebrow}</Eyebrow>
          <h1 className="font-display font-extrabold text-display-xl mt-8 max-w-[16ch]">
            {title}
          </h1>
          {standfirst ? (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-12">
              <p
                className={`text-body-l max-w-[54ch] md:col-span-7 ${
                  dark ? "text-ash-on-ink" : "text-ash"
                }`}
              >
                {standfirst}
              </p>
            </div>
          ) : null}
          {/* bottom-10, not -bottom-2: the curve used to hang past the hero edge
              and let the section rule below supply its clipped-off baseline,
              which only worked while that rule was scarlet. It is neutral now,
              so the curve has to clear it and carry its own flat baseline. */}
          {curve ? (
            <HeroCurve className="pointer-events-none absolute right-0 bottom-10 hidden md:block" />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
