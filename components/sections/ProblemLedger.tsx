import { Asterisk } from "@/components/brand/Asterisk";
import { problems, problemsEmptyState } from "@/content/problems";

/**
 * The ledger. Problem statements typeset like a print journal's minutes —
 * asterisk, hairline, ordinal, the problem in large italic, then a
 * WHY IT'S HARD column under it.
 *
 * When the list is empty this renders a written empty state in the same
 * frame, not a blank space. Nothing here is ever invented to fill the layout.
 */
export function ProblemLedger({ tone = "light" }: { tone?: "light" | "dark" }) {
  const rule = tone === "dark" ? "border-bone/15" : "border-ink/15";
  const ash = tone === "dark" ? "text-ash-on-ink" : "text-ash";

  if (problems.length === 0) {
    return (
      <div>
        <div className="text-scarlet flex items-center gap-3">
          <Asterisk size={10} />
          <div className="bg-scarlet/70 h-px flex-1" />
        </div>
        <p className={`text-body-l mt-8 max-w-[52ch] ${ash}`}>
          {problemsEmptyState}
        </p>
        <div className={`mt-8 border-b ${rule}`} />
      </div>
    );
  }

  return (
    <ol>
      {problems.map((problem) => (
        <li key={problem.index} className="pt-8 first:pt-0">
          <div className="text-scarlet flex items-center gap-3">
            <Asterisk size={10} />
            <div className="bg-scarlet/70 h-px flex-1" />
          </div>

          <p className={`font-body text-eyebrow mt-6 uppercase ${ash}`}>
            Proposal {problem.index}
          </p>

          <h3 className="font-display text-display-l mt-5 max-w-[22ch] italic">
            {problem.statement}
          </h3>

          <div
            className={`mt-8 grid grid-cols-1 gap-2 border-b pb-8 md:grid-cols-12 md:gap-8 ${rule}`}
          >
            <p
              className={`font-body text-eyebrow uppercase md:col-span-3 ${ash}`}
            >
              Why it&rsquo;s hard
            </p>
            <p className="text-body md:col-span-8 md:col-start-5 max-w-[58ch]">
              {problem.whyHard}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
