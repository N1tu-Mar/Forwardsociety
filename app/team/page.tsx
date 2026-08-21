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
        standfirst="The people running the first year. Roles are still settling as the club takes shape."
        tone="light"
      />

      {/* Hairline-separated roster. No photographs and no boxes — the weight
          comes from the name set large in italic. */}
      <Section tone="bone" rule="top">
        <ul className="border-ink/15 border-t">
          {team.map((member) => (
            <li
              key={stripPlaceholders(member.name)}
              className="border-ink/15 grid grid-cols-1 gap-4 border-b py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-6">
                <h2 className="font-display text-display-m italic">
                  <PlaceholderText value={member.name} />
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="font-body text-eyebrow text-ash uppercase">
                  <PlaceholderText value={member.role} />
                </p>
              </div>
              <div className="md:col-span-3">
                <p className="text-body text-ash">
                  <PlaceholderText value={member.focus} />
                </p>
                {isReal(member.linkedin) ? (
                  <p className="text-caption mt-3">
                    <TextLink href={member.linkedin}>LinkedIn</TextLink>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------- joining it */}
      <Section tone="bone" rule="none">
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
