/**
 * HOW TO EDIT
 * The application process, in order. The number of rounds is data-driven on
 * purpose — if the fall runs a lighter process, delete a step here and the
 * Join page renumbers itself. Do not hardcode '3 rounds' anywhere in copy.
 */

export interface ProcessStep {
  index: string;
  title: string;
  body: string;
}

export const process: readonly ProcessStep[] = [
  {
    index: "01",
    title: "Application",
    body: "A short written form. We ask what problem you have been thinking about and why it has not been solved already.",
  },
  {
    index: "02",
    title: "Group interview",
    body: "Six to eight applicants work a problem together for half an hour. We are watching how you argue, not whether you win.",
  },
  {
    index: "03",
    title: "Individual conversation",
    body: "Fifteen minutes with a member of the founding team. Mostly your questions about the club.",
  },
] as const;
