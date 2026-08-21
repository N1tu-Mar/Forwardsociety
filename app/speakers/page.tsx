import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { speakers, speakersEmptyState } from "@/content/speakers";
import { links } from "@/content/links";
import { isReal } from "@/lib/placeholder";
import { TodoChip } from "@/components/ui/TodoChip";

const description =
  "Speakers talk about their own path and current work, or a societal problem they are working on and how students can contribute.";

export const metadata: Metadata = {
  title: "Speakers",
  description,
  openGraph: { title: "Speakers · The Forward Society", description },
};

/**
 * A speaker card. No headshot — the club has no photographs, so the mark is a
 * scarlet monogram inside a 1px-ruled square.
 */
function SpeakerCard({
  name,
  role,
  org,
  date,
}: {
  name: string;
  role: string;
  org: string;
  date: string;
}) {
  return (
    <li className="border-bone/15 border-t py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-2">
          <span
            aria-hidden="true"
            className="border-bone/25 text-scarlet font-display font-extrabold flex h-14 w-14 items-center justify-center border text-[1.5rem]"
          >
            {name.trim().charAt(0)}
          </span>
        </div>
        <div className="md:col-span-7">
          <h3 className="font-display font-extrabold text-display-m">{name}</h3>
          <p className="text-body text-ash-on-ink mt-2">
            {role}, {org}
          </p>
        </div>
        <div className="md:col-span-3 md:text-right">
          <p className="font-display text-eyebrow font-bold text-ash-on-ink uppercase">
            {date}
          </p>
        </div>
      </div>
    </li>
  );
}

// BACKGROUND INTENT: ink. The speaker roster is the one page where a scarlet
// monogram on a dark ground has to carry a section on its own.
export default function Speakers() {
  return (
    <>
      <PageHero
        eyebrow="Speakers"
        title={<>People working on the problem right now.</>}
        standfirst="Guests come in to talk about what they are dealing with this month, not a retrospective on how they succeeded."
        tone="dark"
        curve
      />

      {/* --------------------------------------------- what they talk about */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">What a session is</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-l max-w-[56ch]">
              A speaker takes one of two shapes. Either their own path and the
              work they are doing now, or a societal problem they are working on
              and where students could actually contribute to it.
            </p>
            <p className="text-body text-ash-on-ink mt-6 max-w-[56ch]">
              Both end the same way: thirty minutes of the room asking the same
              three questions it asks a member.
            </p>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------- the roster */}
      <Section tone="ink" rule="top">
        <Eyebrow tone="dark">This semester</Eyebrow>
        <div className="mt-12">
          {speakers.length === 0 ? (
            <div className="border-bone/15 border-t border-b py-14">
              <p className="font-display font-extrabold text-display-m max-w-[24ch]">
                {speakersEmptyState}
              </p>
            </div>
          ) : (
            <ul>
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.name} {...speaker} />
              ))}
            </ul>
          )}
        </div>
      </Section>

      {/* -------------------------------------------------- speak with us */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow tone="dark">For speakers</Eyebrow>
            <h2 className="font-display font-extrabold text-display-l mt-6 max-w-[16ch]">
              Speak at the Forward Society.
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-body-l max-w-[52ch]">
              Founders, operators, professors, and people running nonprofits.
              The ask is one evening, no prepared deck required, and a problem
              you have not finished solving.
            </p>
            <div className="mt-10">
              {isReal(links.email) ? (
                <ButtonLink
                  href={`mailto:${links.email}?subject=Speaking at the Forward Society`}
                  variant="primary"
                  tone="dark"
                >
                  Email us
                </ButtonLink>
              ) : (
                <TodoChip value={links.email} />
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
