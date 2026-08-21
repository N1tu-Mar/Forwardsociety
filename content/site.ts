/**
 * HOW TO EDIT
 * Loose values that do not belong to a list. Replace each '[[VALUE]]' with
 * the real text. Until you do, the section around it falls back to its
 * written empty state — no visitor ever sees the brackets.
 */

export const site = {
  /** Official mission statement, once the founding team ratifies it. */
  missionStatement: "[[MISSION_STATEMENT]]",
  missionFallback:
    "The official mission statement is being written by the founding team. What the club does in the meantime is on this page.",

  /** Involvement fair table location and date. */
  fairLocation: "[[FAIR_LOCATION]]",
  fairFallback:
    "Table location and date for the involvement fair are posted here once Rutgers assigns them.",

  /** The spring project, once selected. */
  firstProject: "[[FIRST_PROJECT]]",
  firstProjectFallback: "First cohort's project launches Spring 2027.",

  university: "Rutgers University",
  launchTerm: "Fall 2026",
} as const;
