/**
 * HOW TO EDIT
 * These are the club's fixed lines. Change them here and they change
 * everywhere on the site at once.
 *
 * Lines written as { before, emphasis, after } are split so one word can be
 * set in scarlet. `emphasis` is the scarlet part. To move the emphasis, move
 * the words between the three fields — do not add HTML tags.
 */

export interface EmphasisLine {
  before: string;
  emphasis: string;
  after: string;
}

export const wordmark = {
  first: "The",
  middle: "Forward",
  last: "Society",
} as const;

export const copy = {
  tagline: "Ideas. People. Impact.",

  homeH1: {
    before: "Challenge what exists. Build what comes ",
    emphasis: "next",
    after: ".",
  } satisfies EmphasisLine,

  homeHeroSub:
    "We bring together students from every major to solve the problems that shape America and give you the skills, mentorship, and opportunities to make change.",

  altHeroLine: {
    before: "Don't just prepare for the future. ",
    emphasis: "Help build it.",
    after: "",
  } satisfies EmphasisLine,

  descriptor: "A student club for those who think ahead and take action.",

  overview:
    "The Forward Society brings students together to identify real problems, develop solutions, and turn strong ideas into real-world projects.",

  whoLine1:
    "Curious, driven students from every major who want to make a difference.",

  whoLine2: {
    before: "Different backgrounds. Different perspectives. ",
    emphasis: "One goal: moving ideas forward.",
    after: "",
  } satisfies EmphasisLine,

  // NOTE: the group has flagged this closing line for replacement but has not
  // agreed on the wording. Left as-is deliberately — it is the headline above
  // the Apply button on every page, so it cannot simply be deleted.
  closingH2: {
    before: "Are you ready to move ",
    emphasis: "Forward",
    after: "?",
  } satisfies EmphasisLine,

  closingSub:
    "Be part of something that builds more than resumes — it builds real change.",

  footerMeta: "Rutgers University · Launching Fall 2026",

  copyright: "© 2026 The Forward Society",
} as const;

/** What members get. Three items, fixed wording. */
export const memberBenefits: readonly string[] = [
  "Hear from founders, innovators, and leaders tackling real-world problems",
  "Develop and pitch your own ideas",
  "Build a network of driven students and changemakers",
] as const;

/** The method. An ordered sequence — the numbering is the point. */
export interface MethodStep {
  index: string;
  name: string;
  line: string;
}

export const methodSteps: readonly MethodStep[] = [
  { index: "01", name: "Explore", line: "Discover real challenges" },
  {
    index: "02",
    name: "Learn",
    line: "Build skills through workshops and mentors closer to the issue",
  },
  { index: "03", name: "Propose", line: "Develop your own solution" },
  { index: "04", name: "Plan", line: "Build a plan to make it happen" },
  { index: "05", name: "Execute", line: "Launch the project and create impact" },
] as const;
