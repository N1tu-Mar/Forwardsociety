import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/ButtonLink";
import { TodoChip } from "@/components/ui/TodoChip";
import { links, instagramHandle } from "@/content/links";
import { site } from "@/content/site";
import { isReal } from "@/lib/placeholder";

const description =
  "How to reach the Forward Society — email, Instagram, and where to find us at the involvement fair.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: { title: "Contact · The Forward Society", description },
};

// BACKGROUND INTENT: bone. Contact details are reference material and want the
// legibility of the light register.
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Get in touch.</>}
        tone="light"
      />

      {/* ------------------------------------------------------ channels */}
      <Section tone="bone" rule="top">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Email</Eyebrow>
            <p className="font-display text-display-m mt-5 italic">
              {isReal(links.email) ? (
                <TextLink href={`mailto:${links.email}`}>
                  {links.email}
                </TextLink>
              ) : (
                <TodoChip value={links.email} />
              )}
            </p>
          </div>

          <div className="md:col-span-4">
            <Eyebrow>Instagram</Eyebrow>
            <p className="font-display text-display-m mt-5 italic">
              <TextLink href={links.instagram}>{instagramHandle}</TextLink>
            </p>
          </div>

          <div className="md:col-span-4">
            <Eyebrow>Involvement fair</Eyebrow>
            {isReal(site.fairLocation) ? (
              <p className="font-display text-display-m mt-5 max-w-[16ch] italic">
                {site.fairLocation}
              </p>
            ) : (
              <>
                <p className="text-body-l text-ash mt-5 max-w-[34ch]">
                  {site.fairFallback}
                </p>
                <TodoChip value={site.fairLocation} />
              </>
            )}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- who you might be */}
      <Section tone="bone" rule="top">
        <Eyebrow>Write to us if you are</Eyebrow>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-display-m italic">A student</h2>
            <p className="text-body-l text-ash mt-4 max-w-[36ch]">
              Ask anything the Join page did not answer. If applications have
              closed, say so and we will tell you when the next round opens.
            </p>
          </div>
          <div className="md:col-span-4">
            <h2 className="font-display text-display-m italic">A speaker</h2>
            <p className="text-body-l text-ash mt-4 max-w-[36ch]">
              Tell us the problem you are working on rather than your title. One
              evening, no prepared deck required.
            </p>
          </div>
          <div className="md:col-span-4">
            <h2 className="font-display text-display-m italic">
              Faculty or a department
            </h2>
            <p className="text-body-l text-ash mt-4 max-w-[36ch]">
              If you have a problem inside the university that students could
              usefully work on, bring it. That is exactly the input we want.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
