/**
 * HOW TO EDIT
 * One entry per person, in the order you want them listed.
 *
 * name    full name. If a last name is unconfirmed, write '[[LAST_NAME]]'
 *         after the first name — do not guess.
 * role    the title. '[[ROLE]]' if unconfirmed.
 * focus   one line, lowercase-ish, no title case. What they actually work on.
 * linkedin optional full URL. Omit the line entirely if there isn't one.
 *
 * Anything written as '[[...]]' is hidden from visitors and shows as a red
 * TODO chip while running `npm run dev`.
 */

export interface TeamMember {
  name: string;
  role: string; // '[[ROLE]]' if unconfirmed
  focus: string; // one line, lowercase-ish, no title case
  linkedin?: string;
  photo?: never; // reserved — the card must upgrade gracefully if this becomes string
}

export const team: readonly TeamMember[] = [
  {
    name: "Nityanth Maramreddy",
    role: "[[ROLE]]",
    focus: "[[FOCUS]]",
  },
  {
    name: "Aarav Jain",
    role: "[[ROLE]]",
    focus: "[[FOCUS]]",
  },
  {
    name: "Cody Cardillo",
    role: "[[ROLE]]",
    focus: "[[FOCUS]]",
  },
  {
    name: "Mahmood [[LAST_NAME]]",
    role: "[[ROLE]]",
    focus: "[[FOCUS]]",
  },
  {
    name: "Parnika [[LAST_NAME]]",
    role: "[[ROLE]]",
    focus: "[[FOCUS]]",
  },
  {
    name: "Armand [[LAST_NAME]]",
    role: "[[ROLE]]",
    focus: "[[FOCUS]]",
  },
] as const;
