import { Asterisk } from "@/components/brand/Asterisk";

/**
 * The section frame: a 1px scarlet hairline across the full width, anchored at
 * its left end by the asterisk on `top` rules. The `bottom` rule closes the
 * section and carries no mark.
 *
 * The hairline is a 1px border, not a filled div, so it stays hairline-thin at
 * every device pixel ratio.
 */
export function SectionRule({
  position = "top",
}: {
  position?: "top" | "bottom";
}) {
  if (position === "bottom") {
    return <div aria-hidden="true" className="h-px w-full bg-scarlet/70" />;
  }

  return (
    <div aria-hidden="true" className="flex w-full items-center gap-3">
      <Asterisk size={10} className="text-scarlet" />
      <div className="h-px flex-1 bg-scarlet/70" />
    </div>
  );
}
