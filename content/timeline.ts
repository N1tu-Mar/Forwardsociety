/**
 * HOW TO EDIT
 * One entry per phase of the year, in order. `window` is a rough period, not
 * a precise date — 'September', 'Late fall', 'Spring 2027'. Add exact dates
 * only once they are locked.
 *
 * The Join page reads the same list for key dates, so keep it accurate.
 */

export interface TimelineEntry {
  window: string; // 'September', 'Late fall', 'Spring 2027'
  title: string;
  body: string;
}

export const timeline: readonly TimelineEntry[] = [
  {
    window: "September 2026",
    title: "Involvement fair and first meetings",
    body: "The club opens at the involvement fair and the first meetings set the format for the semester.",
  },
  {
    window: "Fall 2026",
    title: "Explore and pitch",
    body: "Weekly meetings. Members bring problems, the room pressure-tests them, and guest speakers work through problems they are dealing with now.",
  },
  {
    window: "Late fall 2026",
    title: "Applications and converge",
    body: "Applications open. The club votes, one or two proposals are selected, and project teams are staffed from members who showed up consistently.",
  },
  {
    window: "Spring 2027",
    title: "Build and launch",
    body: "The selected teams execute. Launched means something real ships, not a deck.",
  },
] as const;
