/**
 * HOW TO EDIT
 * Questions in the order a prospective member would ask them. Answers are
 * two or three sentences. Answer plainly — do not sell.
 * The first item is open by default on the Join page.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: readonly FaqItem[] = [
  {
    q: "Is the club restricted to certain majors?",
    a: "No. Members come from engineering, finance, public policy, life sciences, and the humanities. A room full of one major asks one kind of question, which is the opposite of what we want.",
  },
  {
    q: "Do I need an idea already?",
    a: "No. Most members arrive without one. The fall exists to find one, and plenty of people end up working on someone else's problem rather than their own.",
  },
  {
    q: "What if my idea isn't technical?",
    a: "Most of them aren't. Problems in housing, healthcare access, local government, and education come up as often as anything that needs code.",
  },
  {
    q: "What is the time commitment?",
    a: "One meeting a week, plus whatever your own proposal needs. Members who join a project team in the spring should expect that to grow.",
  },
  {
    q: "How are members selected?",
    a: "An application, a group interview, and a short individual conversation. We are reading for whether you can hold a problem open instead of closing it fast.",
  },
  {
    q: "What actually happens to the ideas?",
    a: "By the end of the fall the club converges on one or two proposals. Those become staffed project teams and launch in the spring.",
  },
] as const;
