import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TodoChip } from "@/components/ui/TodoChip";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { isReal } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "About",
  description: copy.overview,
  openGraph: { title: "About · The Forward Society", description: copy.overview },
};

// BACKGROUND INTENT: bone throughout. The home page argues in the dark; this
// page explains in the light. The one ink panel is the founding belief, which
// is the page's centre of gravity.
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>What this club is.</>}
        standfirst={copy.overview}
        tone="light"
      />

      {/* ------------------------------------------------------- mission */}
      <Section tone="bone">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Mission</Eyebrow>
          </div>
          <div className="md:col-span-8">
            {isReal(site.missionStatement) ? (
              <p className="font-display font-extrabold text-display-m max-w-[26ch]">
                {site.missionStatement}
              </p>
            ) : (
              <>
                <p className="text-body-l text-ash max-w-[58ch]">
                  {site.missionFallback}
                </p>
                <TodoChip value={site.missionStatement} />
              </>
            )}
          </div>
        </div>
      </Section>

      {/* ------------------------------- the founding belief — ink panel */}
      {/* Given a full section and its own background because it is the
          differentiator, not a bullet. */}
      <section className="bg-ink-raised text-bone">
        <Container>
          <div className="py-section">
            <Eyebrow tone="dark">The founding belief</Eyebrow>
            <p className="font-display font-extrabold text-display-l mt-8 max-w-[20ch]">
              Most people skip straight to solutions.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
              <p className="text-body-l md:col-span-6 max-w-[54ch]">
                A problem arrives and the room fills with fixes before anyone
                has agreed what is actually broken. The fix is then built, and
                it works, and it solves something nobody needed solved.
              </p>
              <p className="text-body-l text-ash-on-ink md:col-span-6 max-w-[54ch]">
                So members get asked three questions instead. Is this the actual
                problem. Is it defined granularly enough to act on. What would
                have to be true for your solution to work. Getting through those
                takes weeks, and it is the whole point.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------- what it is not */}
      <Section tone="bone">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>What it is not</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <dl className="space-y-10">
              <div>
                <dt className="font-display font-extrabold text-display-m">
                  Not a case club.
                </dt>
                <dd className="text-body-l text-ash mt-3 max-w-[56ch]">
                  A case gives you the problem and grades the answer. Here the
                  problem is the assignment, and finding out you had the wrong
                  one is a good week, not a failed one.
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold text-display-m">
                  Not a consulting club.
                </dt>
                <dd className="text-body-l text-ash mt-3 max-w-[56ch]">
                  Nobody is advising a client. Members work on problems they
                  chose, and in the spring they build the solution themselves
                  rather than hand it over in a deck.
                </dd>
              </div>
              <div>
                <dt className="font-display font-extrabold text-display-m">
                  Not major-gated.
                </dt>
                <dd className="text-body-l text-ash mt-3 max-w-[56ch]">
                  Members come from engineering, finance, public policy, life
                  sciences, and the humanities. A room of one major asks one
                  kind of question.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------- the year, in prose */}
      <Section tone="bone">
        <Eyebrow>The arc of the year</Eyebrow>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <p className="text-body-l md:col-span-5 max-w-[52ch]">
            The fall is for exploring and pitching. Members bring problems
            weekly, the room pressure-tests them, and the weak ones fall away
            in public. Nobody is protecting an idea by keeping it vague.
          </p>
          <p className="text-body-l text-ash md:col-span-6 md:col-start-7 max-w-[52ch]">
            By the end of the fall the club converges on one or two proposals
            and votes. Those become staffed teams and launch as real projects in
            the spring. One year, one or two things that actually exist at the
            end of it.
          </p>
        </div>
      </Section>

      {/* --------------------------------------------------- who joins */}
      <Section tone="bone">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Who should join</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="font-display font-extrabold text-display-m max-w-[24ch]">
              {copy.whoLine1}
            </p>
            <p className="text-body-l text-ash mt-8 max-w-[56ch]">
              You do not need an idea, a technical background, or a plan. You
              need to be willing to have a belief taken apart in front of other
              people and to keep going afterwards.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- the closing moment */}
      <section className="bg-ink text-bone">
        <Container>
          <div className="py-section">
            {/* display-l, not xl: at xl the scarlet clause runs to two full
                lines and blows past the 2% scarlet ceiling. */}
            <p className="font-display font-extrabold text-display-l max-w-[20ch]">
              {copy.altHeroLine.before}
              <span className="text-scarlet">{copy.altHeroLine.emphasis}</span>
            </p>
          </div>
        </Container>
      </section>

      <ClosingCTA tone="bone" />
    </>
  );
}
