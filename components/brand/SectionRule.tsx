/**
 * The section divider: a hairline across the container width, sitting at the
 * top edge of the section it opens.
 *
 * It does two jobs, and the second is the load-bearing one. It marks where a
 * section starts, and — because it spans the full grid — it ties a section's
 * label column to the content column beside it. Without it the two columns
 * read as unrelated fragments floating on the background.
 *
 * Neutral by design. The weight matches RuledList (15% of the foreground) so
 * every rule on the site is the same colour. Scarlet is deliberately not used
 * here: the accent belongs to the growth curve, the asterisk, and one
 * emphasised word per headline, and a red line at every section boundary is
 * what made the page look busy rather than framed.
 *
 * A 1px background, not a border, so it stays hairline-thin at every device
 * pixel ratio.
 */
export function SectionRule({ tone = "light" }: { tone?: "light" | "dark" }) {
  const hairline = tone === "dark" ? "bg-bone/15" : "bg-ink/15";
  return <div aria-hidden="true" className={`h-px w-full ${hairline}`} />;
}
