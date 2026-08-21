/**
 * HOW TO EDIT
 * The newsletter archive. One entry per issue that has actually gone out.
 * `summary` is one line — what the issue was about, not a teaser.
 * Add `url` once issues are hosted somewhere linkable.
 */

export interface DispatchIssue {
  number: string; // '01'
  title: string;
  date: string; // 'October 2026'
  summary: string;
  url?: string;
}

export const dispatch: readonly DispatchIssue[] = [
  // { number: '01', title: '…', date: '…', summary: '…' },
] as const;

export const dispatchEmptyState =
  "The first issue goes out once the semester opens. Past issues are collected here.";
