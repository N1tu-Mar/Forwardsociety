/**
 * HOW TO EDIT
 * These are real problem statements members brought to the room. Three is
 * the right number for the home page — more and it stops reading like a
 * shortlist.
 *
 * `statement` is the PROBLEM, not the solution. One sentence. If it contains
 * the word "app", "platform", or "we should", it is a solution and belongs in
 * `whyHard` or nowhere.
 *
 * `whyHard` is one or two lines on what makes it resist an obvious fix.
 *
 * Leave the array empty rather than inventing entries. An empty array renders
 * a designed empty state, not a blank space.
 */

export interface Problem {
  index: string; // '01'
  statement: string; // one sentence, the problem not the solution
  whyHard: string; // one or two lines
}

export const problems: readonly Problem[] = [
  // Fill these in from real member pitches. Delete this comment when you do.
  // { index: '01', statement: '…', whyHard: '…' },
] as const;

export const problemsEmptyState =
  "The first proposals come out of fall pitch sessions. They are posted here once the room has selected them.";
