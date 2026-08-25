import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { Timeline } from "@/components/sections/Timeline";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { process } from "@/content/process";
import { faq } from "@/content/faq";

const description =
  "Who should apply to the Forward Society, how the application runs, key dates, and answers to the questions people actually ask.";

export const metadata: Metadata = {
  title: "Join",
  description,
  openGraph: { title: "Join · The Forward Society", description },
};

// BACKGROUND INTENT: ink. This is the page the site is pushing people toward,
// and it holds the same register as the home hero so the arrival feels
// continuous rather than like a different site.
export default function Join() {
  return (
    <>
      <PageHero
        eyebrow="Join"
        title={<>Applications open in September.</>}
        standfirst="You do not need an idea, a technical background, or a plan. You need to be willing to have a belief taken apart in a room."
        tone="dark"
        curve
      />

      {/* -------------------------------------------------- who applies */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">Who should apply</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="font-display font-extrabold text-display-m max-w-[24ch]">
              People who can hold a problem open instead of closing it fast.
            </p>
            <p className="text-body-l text-ash-on-ink mt-8 max-w-[58ch]">
              Every major. Every year. If you have caught yourself arguing that
              a popular fix is aimed at the wrong thing, this is the room for
              that argument.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- the process */}
      {/* Rounds are read from content/process.ts — the count is never written
          into the copy, so a lighter fall process just renders fewer steps. */}
      <Section tone="ink">
        <Eyebrow tone="dark">The process</Eyebrow>
        <h2 className="font-display font-extrabold text-display-l mt-8 max-w-[16ch]">
          What happens after you apply.
        </h2>
        <ol className="mt-14 grid grid-cols-1 md:grid-cols-3">
          {process.map((step, i) => (
            <li
              key={step.index}
              className={`border-bone/15 border-t py-8 md:py-10 ${
                i === 0 ? "" : "md:border-l md:pl-8"
              } md:pr-8 ${i === 0 ? "md:pl-0" : ""}`}
            >
              <span className="font-display text-eyebrow font-bold text-ash-on-ink uppercase">
                {step.index}
              </span>
              <h3 className="font-display font-extrabold text-display-m mt-4">
                {step.title}
              </h3>
              <p className="text-body text-ash-on-ink mt-3 max-w-[34ch]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------ key dates */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">Key dates</Eyebrow>
            <p className="text-body text-ash-on-ink mt-5 max-w-[32ch]">
              Exact dates go up once the semester calendar is set.
            </p>
          </div>
          <div className="md:col-span-8">
            <Timeline tone="dark" />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------ FAQ */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="dark">Questions</Eyebrow>
            <h2 className="font-display font-extrabold text-display-m mt-6 max-w-[14ch]">
              What people ask.
            </h2>
          </div>
          <div className="md:col-span-8">
            <Accordion items={faq} tone="dark" defaultOpen={0} />
          </div>
        </div>
      </Section>

      <ClosingCTA tone="ink" />
    </>
  );
}
