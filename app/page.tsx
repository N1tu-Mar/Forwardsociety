import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RuledList, RuledRow } from "@/components/ui/RuledList";
import { HeroCurve } from "@/components/brand/HeroCurve";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { ProblemLedger } from "@/components/sections/ProblemLedger";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { copy, memberBenefits } from "@/content/copy";
import { links } from "@/content/links";

export const metadata: Metadata = {
  title: "The Forward Society",
  description: copy.homeHeroSub,
  openGraph: {
    title: "The Forward Society",
    description: copy.homeHeroSub,
  },
};

// BACKGROUND INTENT: opens on ink and holds it through the method, then flips
// to bone for the ledger onward. The flip marks the change from what the club
// believes to what the club is actually doing.
export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------- hero — ink */}
      <section className="bg-ink text-bone relative overflow-hidden">
        <Container>
          <div className="relative pt-40 pb-24 md:pt-52 md:pb-32">
            <Eyebrow tone="scarlet">{copy.tagline}</Eyebrow>

            <h1 className="font-display text-display-xl mt-8 max-w-[15ch] italic">
              {copy.homeH1.before}
              <span className="text-scarlet">{copy.homeH1.emphasis}</span>
              {copy.homeH1.after}
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-12">
              <p className="text-body-l text-ash-on-ink max-w-[52ch] md:col-span-7">
                {copy.homeHeroSub}
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <ButtonLink href={links.apply} variant="primary" tone="dark">
                Apply to join
              </ButtonLink>
              <ButtonLink href="/program" variant="ghost" tone="dark">
                How it works
              </ButtonLink>
            </div>

            <HeroCurve className="pointer-events-none absolute right-0 -bottom-2 hidden md:block" />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------- premise — ink */}
      {/* 5/7 split: label left, argument right. */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">The premise</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-display-m max-w-[24ch] italic">
              Identifying the correct problem is half the work.
            </p>
            <p className="text-body-l text-ash-on-ink mt-8 max-w-[62ch]">
              Most people meet a problem and start solving it immediately. This
              club does the opposite. The first weeks go on arguing about
              whether the problem is the real one, whether it is defined
              granularly enough to act on, and what would have to be true for a
              proposed solution to work. It is slower. It is also why the
              proposals that survive the fall are worth building.
            </p>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- method — ink */}
      {/* Four ruled columns — deliberately a different skeleton to the 4/8
          splits above and below it. */}
      <Section tone="ink" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">The method</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-display-l max-w-[18ch] italic">
              Four steps, in order.
            </h2>
          </div>
        </div>
        <div className="mt-16">
          <MethodSteps tone="dark" />
        </div>
      </Section>

      {/* ------------------------------------------- problem ledger — bone */}
      {/* THE FLIP. Belief becomes practice. */}
      <Section tone="bone" rule="none" className="pb-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>What we&rsquo;re working on</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-l text-ash max-w-[56ch]">
              Problems members brought to the room, written as problems rather
              than as pitches. The room decides which of them is worth a
              semester.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <ProblemLedger tone="light" />
        </div>
      </Section>

      {/* ------------------------------------------- members get — bone */}
      <Section tone="bone" rule="none">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>What members get</Eyebrow>
            <h2 className="font-display text-display-l mt-6 max-w-[12ch] italic">
              Three things, plainly.
            </h2>
          </div>
          <div className="md:col-span-7">
            <RuledList>
              {memberBenefits.map((benefit, i) => (
                <RuledRow
                  key={benefit}
                  index={String(i + 1).padStart(2, "0")}
                >
                  <p className="text-body-l max-w-[42ch]">{benefit}</p>
                </RuledRow>
              ))}
            </RuledList>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- who — bone */}
      {/* Full-bleed statement, no column split — the last change of skeleton
          before the centred close. */}
      <Section tone="bone" rule="top">
        <Eyebrow>Who we&rsquo;re looking for</Eyebrow>
        <p className="font-display text-display-l mt-8 max-w-[20ch] italic">
          {copy.whoLine1}
        </p>
        <p className="text-body-l text-ash mt-10 max-w-[54ch]">
          {copy.whoLine2.before}
          <span className="text-scarlet">{copy.whoLine2.emphasis}</span>
        </p>
      </Section>

      <ClosingCTA tone="bone" />
    </>
  );
}
