import { Fragment } from "react";
import {
  placeholderLabel,
  isPlaceholder,
  splitPlaceholders,
} from "@/lib/placeholder";

/**
 * Renders an unconfirmed content value visibly while running `npm run dev`,
 * and renders nothing at all in production. This is the safety net behind the
 * rule that a visitor never sees raw [[BRACKETS]].
 *
 * Pass either a raw placeholder string ('[[CLUB_EMAIL]]') or a bare label
 * ('CLUB_EMAIL') — both work.
 */
export function TodoChip({ value }: { value: string }) {
  if (process.env.NODE_ENV !== "development") return null;

  const label = isPlaceholder(value) ? placeholderLabel(value) : value;

  return (
    <span className="text-caption border-scarlet text-scarlet mx-1 inline-block border px-1.5 py-0.5 align-middle font-mono text-[0.6875rem] tracking-[0.12em] uppercase">
      TODO · {label}
    </span>
  );
}

/**
 * Renders a string that may be partly unconfirmed — e.g. a name recorded as
 * 'Mahmood [[LAST_NAME]]'. The confirmed text renders normally; each
 * unconfirmed span becomes a TodoChip in development and disappears in
 * production, leaving clean text behind.
 */
export function PlaceholderText({ value }: { value: string }) {
  const segments = splitPlaceholders(value);

  return (
    <>
      {segments.map((segment, i) => (
        <Fragment key={i}>
          {segment.kind === "text" ? (
            segment.value
          ) : (
            <TodoChip value={segment.label} />
          )}
        </Fragment>
      ))}
    </>
  );
}
