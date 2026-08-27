import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RuledList, RuledRow } from "@/components/ui/RuledList";
import { TextLink } from "@/components/ui/ButtonLink";
import { TodoChip } from "@/components/ui/TodoChip";
import { Timeline } from "@/components/sections/Timeline";
import { ProblemLedger } from "@/components/sections/ProblemLedger";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { workshops, workshopsEmptyState } from "@/content/workshops";
import { site } from "@/content/site";
import { isReal } from "@/lib/placeholder";

const description =
  "How a semester runs: weekly meetings, workshops, guest sessions, directed problem-definition exercises, how projects get selected, and what launching one actually means.";

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
        standfirst="One meeting a week of guest speakers, workshops, discussions, and member proposals, and a year that ends with something built."
        tone="dark"
        curve
      />

      {/* -------------------------------------------------- the meeting */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">The weekly meeting</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="font-display font-extrabold text-display-m max-w-[22ch]">
              Mondays at 7:30 PM. Ninety minutes. Same shape every week.
            </p>
            <p className="text-body-l text-ash-on-ink mt-8 max-w-[58ch]">
              One or two members bring a problem. They get five minutes to state
              it. Not to pitch a solution, to state the problem. Then the room
              has thirty minutes to take it apart.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- workshops */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">Workshops</Eyebrow>
            <p className="text-body text-ash-on-ink mt-5 max-w-[34ch]">
              Skill sessions run alongside the meetings. Scoping a problem,
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
                    <h3 className="font-display font-extrabold text-display-m">
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
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow tone="dark">Case exercises</Eyebrow>
            <p className="font-display font-extrabold text-display-m mt-6 max-w-[16ch]">
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
              November nobody needs reminding how to take a problem apart.
            </p>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- speakers */}
      {/* Full-width statement rather than another 4/8 split — this page had
          three of those in a row and they had stopped reading as separate
          sections. */}
      <Section tone="ink">
        <Eyebrow tone="dark">Guest sessions</Eyebrow>
        <p className="font-display font-extrabold text-display-l mt-8 max-w-[22ch]">
          Guests bring a problem they have not finished solving.
        </p>
        <p className="text-body-l text-ash-on-ink mt-10 max-w-[58ch]">
          Founders, operators, professors, and people running nonprofits. Not a
          retrospective on how they succeeded. The room gets the same thirty
          minutes with them that it gets with a member.{" "}
          <TextLink href="/speakers" tone="dark">
            See who is speaking
          </TextLink>
          .
        </p>
      </Section>

      {/* ------------------------------------------- how selection works */}
      {/* Moved here from the Projects page, which was merged into Program. */}
      <Section tone="ink">
        <Eyebrow tone="dark">Selection</Eyebrow>
        <h2 className="font-display font-extrabold text-display-l mt-8 max-w-[18ch]">
          The club votes. One or two make it.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-body-l max-w-[38ch]">
              Every proposal that survived the fall goes to a vote of the whole
              club. One or two are selected per year.
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="text-body-l text-ash-on-ink max-w-[38ch]">
              Teams are staffed from members who showed up consistently. Not
              from whoever pitched loudest, and not from whoever has the most
              relevant major.
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="text-body-l text-ash-on-ink max-w-[38ch]">
              The member who brought the problem does not automatically lead the
              team, and does not have to be on it.
            </p>
          </div>
        </div>
        {/* The problem ledger lives here now — it is the list the vote above
            chooses from, and this is the only place it appears on the site. */}
        <div className="mt-16">
          <ProblemLedger tone="dark" />
        </div>
      </Section>

      {/* ------------------------------------------ what launched means */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">What launched means</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="font-display font-extrabold text-display-m max-w-[22ch]">
              Something real ships in the spring.
            </p>
            <p className="text-body-l text-ash-on-ink mt-8 max-w-[58ch]">
              A pilot running with actual users, a policy brief in front of
              someone who can act on it, a service operating on a campus. A
              slide deck is not a launch, and neither is a prototype nobody
              outside the club has touched.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------- the first project */}
      <Section tone="ink">
        <div className="border-bone/15 border-t border-b py-14">
          <Eyebrow tone="dark">The first project</Eyebrow>
          {isReal(site.firstProject) ? (
            <p className="font-display font-extrabold text-display-l mt-6 max-w-[20ch]">
              {site.firstProject}
            </p>
          ) : (
            <>
              <p className="font-display font-extrabold text-display-l mt-6 max-w-[20ch]">
                {site.firstProjectFallback}
              </p>
              <TodoChip value={site.firstProject} />
            </>
          )}
        </div>
      </Section>

      {/* -------------------------------------------------- timeline */}
      <Section tone="ink">
        <Eyebrow tone="dark">The year</Eyebrow>
        <h2 className="font-display font-extrabold text-display-l mt-8 max-w-[16ch]">
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
