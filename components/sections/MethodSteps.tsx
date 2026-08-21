import { methodSteps } from "@/content/copy";

/**
 * The method, 01–04. Four ruled columns on desktop, stacked on mobile.
 * The numbering is justified because the steps are a genuine sequence — you
 * cannot execute before you have proposed.
 */
export function MethodSteps({ tone = "light" }: { tone?: "light" | "dark" }) {
  const rule = tone === "dark" ? "border-bone/15" : "border-ink/15";
  const ash = tone === "dark" ? "text-ash-on-ink" : "text-ash";

  return (
    <ol className="grid grid-cols-1 md:grid-cols-4">
      {methodSteps.map((step, i) => (
        <li
          key={step.index}
          className={`border-t ${rule} py-8 md:py-10 ${
            i === 0 ? "" : "md:border-l"
          } md:pr-8 md:pl-6 ${i === 0 ? "md:pl-0" : ""}`}
        >
          <span className={`font-body text-eyebrow uppercase ${ash}`}>
            {step.index}
          </span>
          <h3 className="font-display text-display-m mt-4 italic">
            {step.name}
          </h3>
          <p className={`text-body mt-2 ${ash}`}>{step.line}</p>
        </li>
      ))}
    </ol>
  );
}
