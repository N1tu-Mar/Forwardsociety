import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RuledList, RuledRow } from "@/components/ui/RuledList";
import { Timeline } from "@/components/sections/Timeline";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { workshops, workshopsEmptyState } from "@/content/workshops";

const description =
  "How a semester runs: weekly meetings, the pitch and pressure-test format, workshops, directed problem-definition exercises, and project teams forming in late fall.";

export const metadata: Metadata = {
  title: "Program",
  description,
  openGraph: { title: "Program · The Forward Society", description },
};

// BACKGROUND INTENT: ink. This is the machinery of the club, and it reads
// better as a dark technical document than as a bright brochure.
export default function Program() {
  return (
    <>
      <PageHero
        eyebrow="Program"
        title={<>How a semester actually runs.</>}
        standfirst="One meeting a week, a fixed format, and a year that ends with something built."
        tone="dark"
        curve
      />

      {/* -------------------------------------------------- the meeting */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">The weekly meeting</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-display-m max-w-[22ch] italic">
              Mondays. Ninety minutes. Same shape every week.
            </p>
            <p className="text-body-l text-ash-on-ink mt-8 max-w-[58ch]">
              One or two members bring a problem. They get five minutes to state
              it — not to pitch a solution, to state the problem. Then the room
              has thirty minutes to take it apart.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------ pressure-test format */}
      <Section tone="ink" rule="top">
        <Eyebrow tone="dark">The pressure test</Eyebrow>
        <h2 className="font-display text-display-l mt-8 max-w-[18ch] italic">
          Three questions, asked every time.
        </h2>
        <div className="mt-14">
          <RuledList tone="dark">
            <RuledRow tone="dark" index="01">
              <p className="text-body-l max-w-[46ch]">
                Is this the actual problem, or a symptom of one underneath it?
              </p>
            </RuledRow>
            <RuledRow tone="dark" index="02">
              <p className="text-body-l max-w-[46ch]">
                Is it defined granularly enough that someone could act on it
                this semester?
              </p>
            </RuledRow>
            <RuledRow tone="dark" index="03">
              <p className="text-body-l max-w-[46ch]">
                What would have to be true for your solution to work — and how
                would you find out?
              </p>
            </RuledRow>
          </RuledList>
          <p className="text-body text-ash-on-ink mt-8 max-w-[56ch]">
            A problem that survives all three goes on the board. Most do not
            survive the first pass, and the member who brought it comes back the
            next week with a better version.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------- workshops */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">Workshops</Eyebrow>
            <p className="text-body text-ash-on-ink mt-5 max-w-[34ch]">
              Skill sessions run alongside the meetings — scoping a problem,
              interviewing the people who have it, sizing what you are looking
              at.
            </p>
          </div>
          <div className="md:col-span-8">
            {workshops.length === 0 ? (
              <div className="border-bone/15 border-t border-b py-10">
                <p className="text-body-l text-ash-on-ink max-w-[46ch]">
                  {workshopsEmptyState}
                </p>
              </div>
            ) : (
              <RuledList tone="dark">
                {workshops.map((workshop) => (
                  <RuledRow
                    key={workshop.title}
                    tone="dark"
                    index={workshop.window}
                  >
                    <h3 className="font-display text-display-m italic">
                      {workshop.title}
                    </h3>
                    <p className="text-body text-ash-on-ink mt-2 max-w-[52ch]">
                      {workshop.body}
                    </p>
                  </RuledRow>
                ))}
              </RuledList>
            )}
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------- case exercises */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow tone="dark">Case exercises</Eyebrow>
            <p className="font-display text-display-m mt-6 max-w-[16ch] italic">
              Directed problem-definition exercises.
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-body-l max-w-[54ch]">
              Not traditional consulting cases. There is no prompt with a
              defensible answer and no interviewer keeping score. A situation is
              handed to a group with the problem deliberately left unstated, and
              the exercise is to arrive at one the group can defend.
            </p>
            <p className="text-body text-ash-on-ink mt-6 max-w-[54ch]">
              They exist to make the weekly format automatic, so that by
              November nobody needs to be reminded to ask the three questions.
            </p>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- speakers */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">Guest sessions</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-l max-w-[56ch]">
              Founders, operators, professors, and people running nonprofits
              come in to talk about a problem they are dealing with now — not a
              retrospective on how they succeeded. Members get the same thirty
              minutes with them that a member gets with the room.
            </p>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- timeline */}
      <Section tone="ink" rule="top">
        <Eyebrow tone="dark">The year</Eyebrow>
        <h2 className="font-display text-display-l mt-8 max-w-[16ch] italic">
          Fall explores. Spring builds.
        </h2>
        <div className="mt-14">
          <Timeline tone="dark" />
        </div>
      </Section>

      <ClosingCTA tone="ink" />
    </>
  );
}
