import { timeline } from "@/content/timeline";

/**
 * Vertical ruled timeline. The rule runs down the left of the window column
 * and each entry hangs off it. No dots, no icons — the hairline is the spine.
 */
export function Timeline({ tone = "light" }: { tone?: "light" | "dark" }) {
  const rule = tone === "dark" ? "border-bone/15" : "border-ink/15";
  const ash = tone === "dark" ? "text-ash-on-ink" : "text-ash";

  return (
    <ol className={`border-l ${rule}`}>
      {timeline.map((entry) => (
        <li
          key={entry.window}
          className="relative grid grid-cols-1 gap-2 py-8 pl-6 md:grid-cols-12 md:gap-8 md:pl-10"
        >
          {/* the tick where this entry meets the spine */}
          <span
            aria-hidden="true"
            className="bg-scarlet absolute top-[2.6rem] left-0 h-px w-3"
          />
          <p className={`font-body text-eyebrow uppercase md:col-span-3 ${ash}`}>
            {entry.window}
          </p>
          <div className="md:col-span-8 md:col-start-5">
            <h3 className="font-display text-display-m italic">{entry.title}</h3>
            <p className={`text-body mt-3 max-w-[56ch] ${ash}`}>{entry.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
