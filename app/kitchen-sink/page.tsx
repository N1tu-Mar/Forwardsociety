// TEMPORARY. Deleted in build step 8.
// Renders every primitive at every variant on both backgrounds.
import { Section } from "@/components/layout/Section";
import { Wordmark } from "@/components/brand/Wordmark";
import { Asterisk, Sparkle } from "@/components/brand/Asterisk";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, TextLink } from "@/components/ui/ButtonLink";
import { RuledList, RuledRow } from "@/components/ui/RuledList";
import { TodoChip, PlaceholderText } from "@/components/ui/TodoChip";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/content/faq";
import { memberBenefits } from "@/content/copy";

export const metadata = { title: "Kitchen sink" };

function Swatches() {
  const swatches = [
    ["bone", "bg-bone"],
    ["ink", "bg-ink"],
    ["ink-raised", "bg-ink-raised"],
    ["scarlet", "bg-scarlet"],
    ["ash", "bg-ash"],
  ] as const;
  return (
    <div className="flex flex-wrap gap-6">
      {swatches.map(([name, cls]) => (
        <div key={name}>
          <div className={`h-16 w-24 border border-current/20 ${cls}`} />
          <p className="text-caption mt-2">{name}</p>
        </div>
      ))}
    </div>
  );
}

function TypeScale({ tone }: { tone: "light" | "dark" }) {
  const ash = tone === "dark" ? "text-ash-on-ink" : "text-ash";
  return (
    <div className="space-y-6">
      <p className="font-display text-display-xl italic">display-xl italic</p>
      <p className="font-display text-display-l italic">display-l italic</p>
      <p className="font-display text-display-m italic">display-m italic</p>
      <p className="text-body-l max-w-[60ch]">
        body-l — The Forward Society brings students together to identify real
        problems, develop solutions, and turn strong ideas into real-world
        projects.
      </p>
      <p className={`text-body max-w-[60ch] ${ash}`}>
        body — secondary copy set in ash. Small and quiet against very large
        italic headlines, on purpose.
      </p>
      <Eyebrow tone={tone}>eyebrow · section label</Eyebrow>
      <p className={`text-caption ${ash}`}>caption — metadata and footnotes</p>
    </div>
  );
}

function Primitives({ tone }: { tone: "light" | "dark" }) {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-end gap-8">
        <Wordmark size="sm" theme={tone} />
        <Wordmark size="md" theme={tone} />
        <Wordmark size="lg" theme={tone} />
      </div>

      <div className="text-scarlet flex items-center gap-6">
        <Asterisk size={10} />
        <Asterisk size={16} />
        <Asterisk size={24} />
        <Sparkle size={12} />
        <Sparkle size={18} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <ButtonLink href="/join" variant="primary" tone={tone}>
          Apply to join
        </ButtonLink>
        <ButtonLink href="/program" variant="ghost" tone={tone}>
          Read the method
        </ButtonLink>
        <ButtonLink href="[[GOOGLE_FORM_URL]]" variant="primary" tone={tone}>
          Unconfirmed link
        </ButtonLink>
      </div>

      <p className="text-body-l">
        A sentence with a <TextLink href="/about" tone={tone}>text link</TextLink>{" "}
        in it, and a chip: <TodoChip value="[[CLUB_EMAIL]]" />
      </p>

      <p className="font-display text-display-m italic">
        <PlaceholderText value="Mahmood [[LAST_NAME]]" />
      </p>

      <RuledList tone={tone}>
        {memberBenefits.map((benefit, i) => (
          <RuledRow
            key={benefit}
            tone={tone}
            index={String(i + 1).padStart(2, "0")}
          >
            <p className="text-body-l max-w-[46ch]">{benefit}</p>
          </RuledRow>
        ))}
      </RuledList>

      <Accordion items={faq.slice(0, 3)} tone={tone} />
    </div>
  );
}

export default function KitchenSink() {
  return (
    <main>
      <Section tone="bone" rule="top">
        <h1 className="font-display text-display-l mb-10 italic">
          Kitchen sink — bone
        </h1>
        <div className="space-y-16">
          <Swatches />
          <TypeScale tone="light" />
          <Primitives tone="light" />
        </div>
      </Section>

      <Section tone="ink" rule="top">
        <h2 className="font-display text-display-l mb-10 italic">
          Kitchen sink — ink
        </h2>
        <div className="space-y-16">
          <TypeScale tone="dark" />
          <Primitives tone="dark" />
        </div>
      </Section>

      <Section tone="ink-raised" rule="both">
        <h2 className="font-display text-display-m mb-6 italic">
          ink-raised panel
        </h2>
        <p className="text-body-l max-w-[60ch]">
          The only permitted second dark. Used for editorial panels sitting
          inside an ink page, never as a page background on its own.
        </p>
      </Section>
    </main>
  );
}
