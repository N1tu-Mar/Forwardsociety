/**
 * HOW TO EDIT
 * Add a speaker only once they have confirmed. An empty list renders a
 * designed empty state, which is better than a name you have to take down.
 *
 * date is a display string — 'October 6, 2026' or 'Late October'.
 */

export interface Speaker {
  name: string;
  role: string;
  org: string;
  date: string;
}

export const speakers: readonly Speaker[] = [
  // { name: '…', role: '…', org: '…', date: '…' },
] as const;

export const speakersEmptyState =
  "First speakers announced before the semester opens.";
