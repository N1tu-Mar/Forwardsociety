/**
 * HOW TO EDIT
 * One entry per person, in the order you want them listed.
 *
 * name    full name. If a last name is unconfirmed, write '[[LAST_NAME]]'
 *         after the first name — do not guess.
 * linkedin optional full URL. Omit the line entirely if there isn't one.
 *
 * Anything written as '[[...]]' is hidden from visitors and shows as a red
 * TODO chip while running `npm run dev`.
 */

export interface TeamMember {
  name: string;
  linkedin?: string;
  photo?: never; // reserved — the card must upgrade gracefully if this becomes string
}

export const team: readonly TeamMember[] = [
  { name: "Nityanth Maramreddy" },
  { name: "Aarav Jain" },
  { name: "Cody Cardillo" },
  { name: "Mahmood [[Selim]]" },
  { name: "Parnika Khanna" },
  { name: "Armaan Mehta" },
  { name: "Prabhjit Singh" },
] as const;
