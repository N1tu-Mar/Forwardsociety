"use client";

import { useId, useRef, useState } from "react";

export interface AccordionItem {
  q: string;
  a: string;
}

/**
 * One open at a time. Keyboard: Enter/Space toggles (native <button>), Up/Down
 * move between headers, Home/End jump to the ends.
 *
 * The panel animates on grid-template-rows rather than height so the content
 * is never measured in JavaScript. Under prefers-reduced-motion the global
 * rule in globals.css collapses the transition to zero.
 */
export function Accordion({
  items,
  tone = "light",
  defaultOpen = 0,
}: {
  items: readonly AccordionItem[];
  tone?: "light" | "dark";
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const headerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const border = tone === "dark" ? "border-bone/15" : "border-ink/15";
  const ash = tone === "dark" ? "text-ash-on-ink" : "text-ash";
  const heading = tone === "dark" ? "text-bone" : "text-ink";

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const last = items.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      headerRefs.current[next]?.focus();
    }
  }

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-h-${i}`;
        const panelId = `${baseId}-p-${i}`;

        return (
          <div key={item.q} className={`border-b ${border}`}>
            <h3>
              <button
                ref={(el) => {
                  headerRefs.current[i] = el;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`focus-visible:outline-scarlet flex w-full items-start justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 ${heading}`}
              >
                <span className="font-body text-body-l">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`text-scarlet relative mt-2 block h-3 w-3 shrink-0`}
                >
                  <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-200 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            {/* Animates on grid-template-rows so no height is measured in JS.
                `invisible` when collapsed keeps the copy out of the
                accessibility tree and out of the tab order. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                isOpen
                  ? "grid-rows-[1fr]"
                  : "invisible grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`text-body max-w-[60ch] pb-6 ${ash}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
