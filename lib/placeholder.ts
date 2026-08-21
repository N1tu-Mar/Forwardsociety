/**
 * Placeholder detection.
 *
 * Any value in content/ that the founding team has not confirmed is written
 * as '[[SOME_NAME]]'. That string must never reach a visitor. Use
 * isPlaceholder() to gate rendering: in development the value renders as a
 * <TodoChip>, in production the element is omitted entirely.
 */

export function isPlaceholder(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.startsWith("[[") &&
    value.endsWith("]]")
  );
}

/** True when the value is present, a real string, and not a placeholder. */
export function isReal(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && !isPlaceholder(value);
}

/** '[[GOOGLE_FORM_URL]]' -> 'GOOGLE_FORM_URL'. Used by TodoChip labels. */
export function placeholderLabel(value: string): string {
  return value.replace(/^\[\[/, "").replace(/\]\]$/, "");
}

export type Segment =
  | { kind: "text"; value: string }
  | { kind: "placeholder"; label: string };

/**
 * Splits a string that may contain placeholders *inline* — e.g. a name
 * recorded as 'Mahmood [[LAST_NAME]]' where only part is unconfirmed. Text
 * segments render normally; placeholder segments become a TodoChip in dev and
 * vanish in production, so brackets never reach a visitor.
 */
export function splitPlaceholders(value: string): Segment[] {
  const segments: Segment[] = [];
  const pattern = /\[\[([A-Z0-9_]+)\]\]/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(value)) !== null) {
    if (match.index > cursor) {
      segments.push({ kind: "text", value: value.slice(cursor, match.index) });
    }
    segments.push({ kind: "placeholder", label: match[1] });
    cursor = match.index + match[0].length;
  }
  if (cursor < value.length) {
    segments.push({ kind: "text", value: value.slice(cursor) });
  }
  return segments;
}

/** True when any part of the string is an unconfirmed placeholder. */
export function hasPlaceholder(value: string): boolean {
  return /\[\[[A-Z0-9_]+\]\]/.test(value);
}

export const IS_DEV = process.env.NODE_ENV === "development";

/**
 * The confirmed part of a string, with unconfirmed spans removed.
 * Use this for React keys and anchors so a placeholder never ends up in the
 * shipped markup, not even inside a key attribute.
 */
export function stripPlaceholders(value: string): string {
  return value.replace(/\[\[[A-Z0-9_]+\]\]/g, "").replace(/\s+/g, " ").trim();
}
