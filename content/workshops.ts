/**
 * HOW TO EDIT
 * Workshops are the skill sessions inside a semester — how to scope a
 * problem, how to run a user interview, how to size a market.
 * Empty until the schedule is set. Do not pad it.
 */

export interface Workshop {
  title: string;
  body: string;
  window: string; // 'Week 3', 'October'
}

export const workshops: readonly Workshop[] = [
  // { title: '…', body: '…', window: '…' },
] as const;

export const workshopsEmptyState = "Schedule posted before the semester opens.";
