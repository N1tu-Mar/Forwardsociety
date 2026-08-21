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
    before: "Built for students who want to do ",
    emphasis: "more",
    after: " than learn.",
  } satisfies EmphasisLine,

  homeHeroSub:
    "The Forward Society connects ambitious students with real projects, real problems, and real opportunities to build.",

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
  { index: "02", name: "Propose", line: "Develop your own solution" },
  { index: "03", name: "Plan", line: "Build a plan to make it happen" },
  { index: "04", name: "Execute", line: "Launch the project and create impact" },
] as const;
