import { Container } from "@/components/layout/Container";
import { SectionRule } from "@/components/brand/SectionRule";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { copy } from "@/content/copy";
import { links } from "@/content/links";

/**
 * The closing block. This is the one place on the site where text is centred,
 * and the one place the scroll-linked curve's sparkle is lit — the visitor has
 * reached the top of the climb.
 */
export function ClosingCTA({ tone = "ink" }: { tone?: "ink" | "bone" }) {
  const dark = tone === "ink";

  return (
    <section
      className={dark ? "bg-ink text-bone" : "bg-bone text-ink"}
      aria-labelledby="closing-heading"
    >
      <Container>
        <SectionRule tone={dark ? "dark" : "light"} />
        <div className="pt-section-tight pb-section flex flex-col items-center text-center">
          <h2
            id="closing-heading"
            className="font-display font-extrabold text-display-xl max-w-[16ch]"
          >
            {copy.closingH2.before}
            <span className="text-scarlet">{copy.closingH2.emphasis}</span>
            {copy.closingH2.after}
          </h2>
          <p
            className={`text-body-l mt-8 max-w-[46ch] ${
              dark ? "text-ash-on-ink" : "text-ash"
            }`}
          >
            {copy.closingSub}
          </p>
          <div className="mt-12">
            <ButtonLink
              href={links.apply}
              variant="primary"
              tone={dark ? "dark" : "light"}
            >
              Interest Form
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
