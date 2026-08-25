import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TodoChip } from "@/components/ui/TodoChip";
import { Asterisk } from "@/components/brand/Asterisk";
import { ProblemLedger } from "@/components/sections/ProblemLedger";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { site } from "@/content/site";
import { isReal } from "@/lib/placeholder";

const description =
  "How a proposal becomes a project: the club votes, one or two are selected a year, teams are staffed from members who showed up, and something real ships in the spring.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  openGraph: { title: "Projects · The Forward Society", description },
};

// BACKGROUND INTENT: bone. Nothing has shipped yet, so this page is honest and
// forward-looking rather than a portfolio. It stays light on purpose — a dark
// page here would be dressing an empty room.
export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>From a proposal to a thing that exists.</>}
        standfirst="The club launches in Fall 2026, so nothing has shipped yet. This is how it will work and how it will be judged."
        tone="light"
      />

      {/* ------------------------------------------- how selection works */}
      <Section tone="bone">
        <Eyebrow>Selection</Eyebrow>
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
            <p className="text-body-l text-ash max-w-[38ch]">
              Teams are staffed from members who showed up consistently. Not
              from whoever pitched loudest, and not from whoever has the most
              relevant major.
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="text-body-l text-ash max-w-[38ch]">
              The member who brought the problem does not automatically lead the
              team, and does not have to be on it.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------ what launched means */}
      <Section tone="bone">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>What launched means</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="font-display font-extrabold text-display-m max-w-[22ch]">
              Something real ships in the spring.
            </p>
            <p className="text-body-l text-ash mt-8 max-w-[58ch]">
              A pilot running with actual users, a policy brief in front of
              someone who can act on it, a service operating on a campus. A
              slide deck is not a launch, and neither is a prototype nobody
              outside the club has touched.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- the candidates */}
      <Section tone="bone">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>In the running</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-l text-ash max-w-[54ch]">
              Problems the room is currently working through. Whichever survives
              the vote becomes the spring project.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <ProblemLedger tone="light" />
        </div>
      </Section>

      {/* ---------------------------------------------- the first project */}
      <Section tone="bone">
        <div className="border-ink/15 border-t border-b py-14">
          <div className="text-scarlet mb-8 flex items-center gap-3">
            <Asterisk size={12} />
            <div className="bg-scarlet/70 h-px w-16" />
          </div>
          <Eyebrow>The first project</Eyebrow>
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

      <ClosingCTA tone="bone" />
    </>
  );
}
