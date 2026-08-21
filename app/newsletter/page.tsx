import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, TextLink } from "@/components/ui/ButtonLink";
import { RuledList, RuledRow } from "@/components/ui/RuledList";
import { dispatch, dispatchEmptyState } from "@/content/dispatch";
import { links } from "@/content/links";
import { isReal } from "@/lib/placeholder";

const description =
  "Problems the club is chewing on, speaker recaps, and project updates. Sent during the semester.";

export const metadata: Metadata = {
  title: "Newsletter",
  description,
  openGraph: { title: "Newsletter · The Forward Society", description },
};

// BACKGROUND INTENT: bone. It is a reading page, so it is set on paper.
export default function Newsletter() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title={<>What the room is arguing about.</>}
        tone="light"
      />

      {/* --------------------------------------------------- what goes out */}
      <Section tone="bone" rule="top">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>What you get</Eyebrow>
            <div className="mt-8">
              <ButtonLink href={links.newsletter} variant="primary">
                Subscribe
              </ButtonLink>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-body-l max-w-[56ch]">
              Problems the club is chewing on, recaps of what speakers said,
              and updates on the projects as they get built. Sent during the
              semester, not over the summer, and never more than once a week.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- archive */}
      <Section tone="bone" rule="top">
        <Eyebrow>Past issues</Eyebrow>
        <div className="mt-12">
          {dispatch.length === 0 ? (
            <div className="border-ink/15 border-t border-b py-14">
              <p className="font-display font-extrabold text-display-m max-w-[26ch]">
                {dispatchEmptyState}
              </p>
            </div>
          ) : (
            <RuledList>
              {dispatch.map((issue) => (
                <RuledRow key={issue.number} index={issue.number}>
                  <h2 className="font-display font-extrabold text-display-m">
                    {isReal(issue.url) ? (
                      <TextLink href={issue.url}>{issue.title}</TextLink>
                    ) : (
                      issue.title
                    )}
                  </h2>
                  <p className="text-body text-ash mt-2 max-w-[52ch]">
                    {issue.summary}
                  </p>
                  <p className="font-display text-eyebrow font-bold text-ash mt-4 uppercase">
                    {issue.date}
                  </p>
                </RuledRow>
              ))}
            </RuledList>
          )}
        </div>
      </Section>
    </>
  );
}
