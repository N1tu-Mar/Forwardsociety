import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/ButtonLink";
import { PlaceholderText } from "@/components/ui/TodoChip";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { team } from "@/content/team";
import { isReal, stripPlaceholders } from "@/lib/placeholder";

const description =
  "The founding team of the Forward Society at Rutgers University.";

export const metadata: Metadata = {
  title: "Team",
  description,
  openGraph: { title: "Team · The Forward Society", description },
};

// BACKGROUND INTENT: bone. A roster of people reads as a printed masthead, and
// a masthead is set on paper.
export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={<>The founding team.</>}
        standfirst="The people running the first year."
        tone="light"
      />

      {/* Hairline-separated roster. No photographs and no boxes — the weight
          comes from the name set large and heavy. */}
      <Section tone="bone">
        <ul className="border-ink/15 border-t">
          {team.map((member) => (
            <li
              key={stripPlaceholders(member.name)}
              className="border-ink/15 grid grid-cols-1 gap-4 border-b py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-9">
                <h2 className="font-display font-extrabold text-display-m">
                  <PlaceholderText value={member.name} />
                </h2>
              </div>
              {isReal(member.linkedin) ? (
                <div className="md:col-span-3 md:self-end">
                  <p className="text-caption">
                    <TextLink href={member.linkedin}>LinkedIn</TextLink>
                  </p>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------- joining it */}
      <Section tone="bone" divider={false}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Running the club</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-l max-w-[56ch]">
              Members who run a project team in the spring take on the same
              responsibilities the founding team has now. There is no separate
              track for leadership and no election to wait for.
            </p>
          </div>
        </div>
      </Section>

      <ClosingCTA tone="bone" />
    </>
  );
}
