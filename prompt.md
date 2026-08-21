# Claude Code build prompt — The Forward Society website

**How to use:** fill the `[[...]]` values in §12 first (or leave them; the prompt tells the agent to render them as visible TODOs rather than invent facts). Then paste everything from the horizontal rule down into Claude Code as your first message.

---

# BUILD BRIEF — theforwardsociety.org

You are building a production website for a real student organization that launches in three weeks. Read this entire brief before writing any code. At the end, restate §2 and §5 in your own words, list anything ambiguous or contradictory, then start at §11 step 1.

---

## 1. Hard constraints (violating any of these means the build is wrong)

- **Invent no facts.** No fake speakers, alumni, partner logos, member counts, testimonials, past events, statistics, or dates beyond what this brief states. Anything unknown becomes a placeholder in a content file (see §7) and renders as a visible TODO chip in development, and as `null`/omitted section in production.
- **The visual identity is already finished.** §5 is a specification, not a starting point. Do not substitute your own palette, typefaces, or motifs. Do not add gradients, drop shadows, glassmorphism, blur backdrops, card hover-lifts, or emoji.
- **No photographs anywhere.** The club has none. Every layout must work on typography and rules alone. Never insert a stock image, an `unsplash.com` URL, or a `<img>` with a placeholder service URL.
- **No component library.** No shadcn/ui, no MUI, no Headless UI, no Framer Motion, no GSAP. Tailwind + hand-written components + one small vanilla scroll hook. `lucide-react` is permitted but should appear at most twice in the whole site.
- **The build must pass** `npm run build` and `npx tsc --noEmit` with zero errors and zero warnings before you tell me a step is done.

---

## 2. What the club is

**The Forward Society** — a student club launching at Rutgers University in **Fall 2026**. Instagram: `@theforwardsocietyru`.

Members bring real societal problems to the room. The room interrogates them: is this the actual problem, is it defined granularly enough, what would have to be true for your solution to work. The club's founding belief is that most people skip straight to solutions, and that **identifying the correct problem is half the work**. Members spend the fall exploring and pitching; by the end of the fall the club converges on one or two proposals; those launch as real projects in the spring.

It is not a consulting case club, not a pre-professional networking club, and not major-gated. Members come from engineering, finance, public policy, life sciences, and the humanities.

**Locked copy — use these strings verbatim where indicated:**

| Slot                       | String                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Wordmark                   | The **Forward** Society ("Forward" in scarlet)                                                                                             |
| Tagline                    | Ideas. People. Impact.                                                                                                                     |
| Home H1                    | Built for students who want to do **more** than learn.                                                                                     |
| Home hero sub              | The Forward Society connects ambitious students with real projects, real problems, and real opportunities to build.                        |
| Alt hero line (about page) | Don't just prepare for the future. **Help build it.**                                                                                      |
| Descriptor                 | A student club for those who think ahead and take action.                                                                                  |
| Overview                   | The Forward Society brings students together to identify real problems, develop solutions, and turn strong ideas into real-world projects. |
| Who line 1                 | Curious, driven students from every major who want to make a difference.                                                                   |
| Who line 2                 | Different backgrounds. Different perspectives. **One goal: moving ideas forward.**                                                         |
| Closing H2                 | Are you ready to move **Forward**?                                                                                                         |
| Closing sub                | Be part of something that builds more than resumes — it builds real change.                                                                |
| Footer meta                | Rutgers University · Launching Fall 2026                                                                                                   |

**Members get** (three items, verbatim):

1. Hear from founders, innovators, and leaders tackling real-world problems
2. Develop and pitch your own ideas
3. Build a network of driven students and changemakers

**The method** — a genuine ordered sequence, so numbering it 01–04 is justified:
| # | Step | Line |
|---|---|---|
| 01 | Explore | Discover real challenges |
| 02 | Propose | Develop your own solution |
| 03 | Plan | Build a plan to make it happen |
| 04 | Execute | Launch the project and create impact |

---

## 3. Reference site

`https://www.rutgersvip.com/` is the bar for **structure and seriousness only** — a real org site with about / program / team / resources / contact and an unmissable apply CTA. Do not copy its visual language: it leans on headshot grids and a partner logo wall, and we have neither.

---

## 4. Stack and environment

```
Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS · pnpm or npm
```

Scaffold with:

```bash
npx create-next-app@latest forward-society --typescript --tailwind --app --eslint --src-dir=false --import-alias "@/*" --no-turbopack
```

**Version check before configuring anything.** Run `npm ls tailwindcss` and branch:

- **Tailwind v4** (likely): there is no `tailwind.config.ts`. Define all tokens in `app/globals.css` inside an `@theme { }` block using CSS custom properties (`--color-bone: #F5F0EA;` → generates `bg-bone`, `text-bone`). Import with `@import "tailwindcss";`.
- **Tailwind v3**: define the same tokens under `theme.extend` in `tailwind.config.ts` and use the three `@tailwind` directives.

Do not mix the two syntaxes. State which version you found before proceeding.

**next.config.ts:**

```ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
```

Static export means: no `next/image` optimization, no route handlers, no server actions, no middleware, no dynamic `params` without `generateStaticParams`. Everything is a static page.

**Fonts** — self-hosted via `next/font/google` in `app/layout.tsx`. Bodoni Moda is a variable font with an `opsz` axis; `next/font` requires non-weight axes to be declared explicitly or the build fails:

```ts
import { Bodoni_Moda, Inter } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
```

Apply `${bodoni.variable} ${inter.variable}` on `<html>`. Never load fonts via a `<link>` to `fonts.googleapis.com` — it is render-blocking and will cost the Lighthouse target.

Commit after each numbered step in §11 with a conventional message.

---

## 5. Design system — implement exactly

### 5.1 Color (five values, no others)

| Token        | Hex       | Use                                                                                                                                 |
| ------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `bone`       | `#F5F0EA` | primary light background, and text on ink                                                                                           |
| `ink`        | `#141210` | warm near-black; body text on bone, and full-bleed dark sections                                                                    |
| `ink-raised` | `#1C1815` | the slightly lifted dark used on dark editorial panels; the only permitted second dark                                              |
| `scarlet`    | `#CE1126` | the single accent — the middle wordmark word, hairlines, the asterisk, one emphasis word per headline, link underlines, focus rings |
| `ash`        | `#6B655F` | eyebrows, captions, metadata, secondary body                                                                                        |

Scarlet is never a large fill. It appears as 1px rules, small marks, and single words. If a screen looks like it has more than ~2% scarlet coverage, you have overused it.

Never introduce terracotta/warm-clay (`#D97757` and neighbors), acid green, or any blue. Border radius: `0` everywhere except `2px` on the apply button if it helps it read as a control.

### 5.2 Type

- **Display:** Bodoni Moda, **italic**, for every headline and the wordmark. High contrast Didone — that contrast is the personality.
- **Body:** Inter, regular, `line-height: 1.7`.
- **Eyebrow/utility:** Inter, uppercase, `letter-spacing: 0.18em`. Every major section opens with one of these labels — it is load-bearing, not decoration.

Scale (define as tokens, use nothing outside it):

```
display-xl  clamp(2.75rem, 7vw, 5.25rem)   lh 0.95  ls -0.02em  italic
display-l   clamp(2.125rem, 5vw, 3.5rem)   lh 1.02  ls -0.015em italic
display-m   clamp(1.5rem, 3vw, 2.25rem)    lh 1.1   ls -0.01em  italic
body-l      1.0625rem                       lh 1.7
body        0.9375rem                       lh 1.7
eyebrow     0.6875rem                       lh 1.2   ls 0.18em   uppercase
caption     0.8125rem                       lh 1.5
```

Body copy is small and quiet against very large italic headlines. Do not "balance" them.

### 5.3 Layout

- Container `max-width: 1180px`, centered. Gutters: `24px` mobile, `40px` ≥768px, `56px` ≥1280px.
- Section vertical padding: `clamp(4.5rem, 9vw, 8rem)`.
- Breakpoints: design at **375px** first, then 768, then 1180.
- Grid is 12-column on desktop; most content sits in an asymmetric 5/7 or 4/8 split, not centered. Centered text is reserved for the closing CTA only.
- **CSS specificity warning:** do not create both a generic `.section` padding rule and element-scoped overrides that cancel it. Handle all spacing with Tailwind utilities on the component; do not write global element selectors for margin/padding.

### 5.4 Motifs (reuse these, invent no new ones)

1. **Section frame** — a 1px scarlet hairline across the top of a section, anchored at its left end by a small scarlet six-point asterisk/starburst, and a matching hairline closing the bottom. Build once as `<SectionRule position="top" | "bottom" />`.
2. **The growth curve** — a thin scarlet path that runs flat along the bottom then sweeps up into a vertical stroke topped by a four-point sparkle. Inline SVG, `aria-hidden="true"`, `vector-effect="non-scaling-stroke"`, `stroke-width: 1`. Sits lower-right of hero areas.
3. **Register flip** — pages alternate bone-on-ink and ink-on-bone. Home hero is ink; About is bone; use the flip to mark a change of register, not at random. Every page must state its background intent in a comment.

### 5.5 Signature element — spend all boldness here

The growth curve is the club's argument made visual: flat, flat, flat, then vertical. Implement it as a **scroll-linked stroke**:

- A fixed-position, 1px scarlet SVG path in the right margin on `≥1180px`; on smaller screens it degrades to a static section-top rule and does **not** animate.
- Drive `stroke-dashoffset` from document scroll progress via a `useScrollProgress()` hook: `requestAnimationFrame`-throttled `scroll` listener, `{ passive: true }`, cleaned up on unmount.
- The four-point sparkle at the apex gets `opacity` 0 → 1 only when progress > 0.92, i.e. when the visitor reaches the closing CTA.
- **`prefers-reduced-motion: reduce` → render the completed curve statically, attach no scroll listener at all.**
- The hook lives in a `'use client'` component. Read `window` only inside `useEffect`, never during render, or you will get a hydration mismatch.

Everything else on the site is still. No fade-up-on-scroll on every block, no parallax, no animated counters, no typewriter effects. Permitted micro-interactions: link underline draw on hover, apply-button background transition, accordion height transition.

### 5.6 The one risk

Where the site shows the kinds of problems members pitch, set them as a **ledger of problem statements**, typeset like a print journal:

```
┌──────────────────────────────────────────────┐
│ ✳ ────────────────────────────────────────── │
│ PROPOSAL 01                                  │
│                                              │
│ Large italic display: the problem, one line  │
│                                              │
│ WHY IT'S HARD    body copy, one or two lines │
│ ──────────────────────────────────────────── │
└──────────────────────────────────────────────┘
```

It should read like the club's actual meeting minutes, set beautifully. This is the section a visitor remembers.

---

## 6. File tree — build to this shape

```
app/
  layout.tsx                 root: fonts, <Header>, <Footer>, <GrowthCurve>, metadata base
  globals.css                @theme tokens (v4) or @tailwind directives (v3)
  page.tsx                   /
  about/page.tsx
  program/page.tsx
  projects/page.tsx
  speakers/page.tsx
  team/page.tsx
  join/page.tsx
  newsletter/page.tsx
  contact/page.tsx
  not-found.tsx
  opengraph-image.tsx        wordmark on ink, ImageResponse
components/
  layout/Header.tsx          'use client' (scroll state + mobile menu)
  layout/Footer.tsx
  layout/Container.tsx
  layout/Section.tsx         wraps content in SectionRule top/bottom + padding
  brand/Wordmark.tsx         size: 'sm' | 'md' | 'lg', theme: 'light' | 'dark'
  brand/Asterisk.tsx
  brand/GrowthCurve.tsx      'use client'
  brand/SectionRule.tsx
  ui/Eyebrow.tsx
  ui/ButtonLink.tsx          variant: 'primary' | 'ghost'
  ui/Accordion.tsx           'use client', one open at a time, keyboard accessible
  ui/RuledList.tsx           hairline-separated rows (used for members-get, team, speakers)
  ui/TodoChip.tsx            renders placeholders visibly in dev, null in prod
  sections/MethodSteps.tsx
  sections/ProblemLedger.tsx
  sections/Timeline.tsx
  sections/ClosingCTA.tsx
content/
  links.ts  team.ts  faq.ts  timeline.ts  speakers.ts  workshops.ts
  problems.ts  process.ts  dispatch.ts  nav.ts
lib/
  useScrollProgress.ts
  placeholder.ts             isPlaceholder(v): v startsWith '[[' && endsWith ']]'
```

**Server/client rule:** `export const metadata` only works in server components. Any page needing a hook must isolate the interactive part into its own `'use client'` child. Do not put `'use client'` at the top of a `page.tsx`.

---

## 7. Content layer — typed, editable by a non-developer

Every string a founder might change lives in `content/`. No hardcoded copy in JSX except structural labels. Each file exports a typed const with a comment at the top explaining how to edit it.

```ts
// content/team.ts
export interface TeamMember {
  name: string;
  role: string; // '[[ROLE]]' if unconfirmed
  focus: string; // one line, lowercase-ish, no title case
  linkedin?: string;
  photo?: never; // reserved — the card must upgrade gracefully if this becomes string
}
```

```ts
// content/problems.ts
export interface Problem {
  index: string; // '01'
  statement: string; // one sentence, the problem not the solution
  whyHard: string; // one or two lines
}
```

```ts
// content/timeline.ts
export interface TimelineEntry {
  window: string; // 'September', 'Late fall', 'Spring 2027'
  title: string;
  body: string;
}
```

```ts
// content/speakers.ts
export interface Speaker {
  name: string;
  role: string;
  org: string;
  date: string;
}
```

```ts
// content/faq.ts
export interface FaqItem {
  q: string;
  a: string;
}
```

```ts
// content/process.ts — number of rounds must be data-driven; founders may run a
// lighter process in the fall and launch the full one in the spring.
export interface ProcessStep {
  index: string;
  title: string;
  body: string;
}
```

```ts
// content/links.ts
export const links = {
  apply: "[[GOOGLE_FORM_URL]]",
  newsletter: "[[NEWSLETTER_SIGNUP_URL]]",
  email: "[[CLUB_EMAIL]]",
  instagram: "https://instagram.com/theforwardsocietyru",
} as const;
```

**Placeholder handling:** `isPlaceholder()` gates rendering. In `NODE_ENV === 'development'` a placeholder renders as a `<TodoChip>` — scarlet 1px outline, uppercase caption, e.g. `TODO · GOOGLE_FORM_URL`. In production the element is omitted or the section falls back to its empty state. A placeholder must never render raw `[[BRACKETS]]` to a visitor.

**Empty states are designed, not accidental.** An empty `speakers` array renders a ruled block reading `First speakers announced before the semester opens.` — not a blank grid, not a spinner, not "coming soon!!".

---

## 8. Page specifications

Shared **Header**: wordmark left; nav right (`About · Program · Projects · Speakers · Team · Join`); the apply link is scarlet and becomes a filled button once scrolled past 80px. Below 768px it collapses to a full-screen overlay menu — focus trapped, `Escape` closes, body scroll locked, `aria-expanded` on the trigger.

Shared **Footer**: wordmark, the Overview line, nav column, Instagram + email, `Rutgers University · Launching Fall 2026`, `© 2026 The Forward Society`.

### `/` Home — background: **ink**, flipping to bone after the method

1. **Hero** — small wordmark, H1 (locked string, "more" in scarlet italic), hero sub, two CTAs: `Apply to join` (primary) / `How it works` → `/program` (ghost). Growth curve lower-right.
2. **The premise** — 60–80 words on the founding belief: most people jump to solutions; this club starts by getting the problem right. Eyebrow: `THE PREMISE`.
3. **The method** — `MethodSteps`: four ruled columns desktop / stacked mobile, `01–04`, step name in display-m italic, line beneath.
4. **Problem ledger** — three entries from `content/problems.ts` in the §5.6 treatment. Eyebrow: `WHAT WE'RE WORKING ON`.
5. **What members get** — the three verbatim items as a `RuledList`. Not cards.
6. **Who we're looking for** — Who line 1, then Who line 2 with its final clause in scarlet.
7. **ClosingCTA** — Closing H2 + Closing sub + apply button, centered, sparkle ignites here.

### `/about` — background: bone

Mission, then the founding belief given real estate (it is the differentiator — a full section, not a bullet), then how the club differs from a case club or a consulting club, then the fall→spring arc in prose, then who should join. Include a clearly marked `[[MISSION_STATEMENT]]` block — the founding team has not finalized the official wording. Use the _Don't just prepare for the future. Help build it._ line as the page's closing display moment.

### `/program` — background: ink

The operating rhythm of a semester: weekly Monday meetings; the pitch-and-pressure-test format described concretely; workshops (`content/workshops.ts`, empty state: `Schedule posted before the semester opens.`); case exercises — state plainly that these are **directed problem-definition exercises, not traditional consulting cases**; guest speaker sessions; project teams forming late fall and launching in spring. Ends with the `Timeline` component: vertical ruled timeline from `content/timeline.ts`.

### `/projects` — background: bone

How a proposal becomes a project: the club votes, one to two are selected per year, teams are staffed from members who showed up consistently, "launched" means something real ships in the spring. Nothing has shipped yet, so this page is honest and forward-looking. Ends with a `[[FIRST_PROJECT]]` slot whose empty state reads as intent: `First cohort's project launches Spring 2027.` **Do not fabricate past projects.**

### `/speakers` — background: ink

What speakers talk about: their own path and current work, _or_ a societal problem they're working on and how students can contribute. Roster from `content/speakers.ts` as typographic cards — **no headshots**; a scarlet monogram initial inside a 1px-ruled square. Then a `Speak at the Forward Society` section with a `mailto:` CTA aimed at founders, operators, professors, and nonprofit leaders.

### `/team` — background: bone

Typographic roster, no photographs: large italic name, wide-tracked role label, one-line focus, optional LinkedIn. Hairline rules between entries, no grid of boxes. Expected entries (last names and roles need confirming — render unknowns as `TodoChip`, do not guess): Nityanth Maramreddy, Aarav Jain, Cody Cardillo, Mahmood, Parnika, Armand, Roy.

### `/join` — background: ink

Who should apply; the process from `content/process.ts` as `01 Application → 02 Group interview → 03 Individual conversation`; key dates from `content/timeline.ts`; FAQ accordion from `content/faq.ts` covering at minimum: is it major-restricted (no), time commitment, _do I need an idea already_ (no), _what if my idea isn't technical_ (most aren't), how members are selected. Large apply CTA.

### `/contact` — background: bone

Email, Instagram, involvement fair `[[FAIR_LOCATION]]`, and three short addressed blocks: students, potential speakers, faculty and departments.

### `/newsletter` — background: bone

Signup CTA → `links.newsletter`; one paragraph on what goes out (problems the club is chewing on, speaker recaps, project updates); archive from `content/dispatch.ts` with a real empty state.

### `/not-found` — background: ink

Wordmark, one italic display line, link home. No jokes.

---

## 9. Copy voice

Plain, declarative, confident. Sentence case in body. Short sentences, active voice, no filler.

**Banned:** "empower", "passionate about", "cutting-edge", "leverage", "synergy", "journey", "unlock", "we believe that", "in today's world", exclamation points, rhetorical questions other than the locked Closing H2, and any sentence that would appear unchanged on another club's website.

Buttons name what happens: `Apply to join`, `Read the method`, `Email us`. The same action keeps the same name everywhere.

---

## 10. Quality floor

- Semantic HTML: one `<h1>` per page, real `<nav>` / `<main>` / `<footer>`, heading levels never skipped.
- Every interactive element has a visible `focus-visible` ring in scarlet with sufficient offset. Never `outline: none` without a replacement.
- Contrast: verify `ash` on `bone` and `ash` on `ink` reach 4.5:1 — if a pairing fails, lighten/darken `ash` for that context rather than shipping it.
- Accordion: `<button aria-expanded aria-controls>`, panel `role="region"`, arrow-key nav optional, Enter/Space required.
- `prefers-reduced-motion` respected globally, not just on the curve.
- Per-page `metadata` with title, description, and OpenGraph. `metadataBase` set in root layout.
- Mobile: test at **375px**. The wordmark must never wrap — check it in the header, the footer, and the hero.
- Target Lighthouse ≥95 performance and ≥95 accessibility on the home page.

---

## 11. Build order — stop where told

1. **Scaffold.** Run `create-next-app`, report the Tailwind major version, wire the five colors and the type scale as tokens, wire both fonts, delete all boilerplate (the default `page.tsx`, the Next logo SVGs, the sample CSS). Verify `npm run dev` renders a blank bone page in the right typeface. Commit.
2. **Content layer.** All `content/*.ts` files with interfaces, real values where §2 gives them, placeholders elsewhere. `lib/placeholder.ts`. Commit.
3. **Primitives.** `Container`, `Section`, `SectionRule`, `Asterisk`, `Wordmark`, `Eyebrow`, `ButtonLink`, `TodoChip`. Build a temporary `/kitchen-sink` route that renders every primitive at every variant on both backgrounds. Show me a screenshot of it. **Stop.**
4. **Header, Footer, GrowthCurve.** Verify the mobile menu keyboard behavior and that the curve does not animate under reduced motion. Commit.
5. **Home, end to end.** Screenshot at 1440px and 375px. **Stop and wait for my approval before continuing.**
6. Remaining pages in this order: `/join`, `/program`, `/about`, `/team`, `/projects`, `/speakers`, `/contact`, `/newsletter`, `/not-found`.
7. **Self-critique pass.** Open every page. For each: remove one element that isn't earning its place; confirm no two sections share the same layout skeleton; confirm scarlet coverage is still minimal; confirm no page has an unstyled empty state. Report what you removed and why.
8. **Verify.** `npx tsc --noEmit`, `npm run lint`, `npm run build`, then serve `out/` and check every route loads. Delete `/kitchen-sink`. Write a `README.md` explaining how a non-developer edits `content/` and where each placeholder lives.

---

## 12. Values to fill in

| Placeholder                 | What it is                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------- |
| `[[GOOGLE_FORM_URL]]`       | application form link                                                               |
| `[[NEWSLETTER_SIGNUP_URL]]` | newsletter signup link                                                              |
| `[[CLUB_EMAIL]]`            | club email address                                                                  |
| `[[MISSION_STATEMENT]]`     | official mission statement, once the founding team ratifies it                      |
| `[[PROBLEM_1..3]]`          | three real problem statements from member pitches, each with a "why it's hard" line |
| `[[TEAM_MEMBERS]]`          | full names, roles, one-line focus areas, LinkedIn URLs                              |
| `[[FAIR_LOCATION]]`         | involvement fair table location and date                                            |
| `[[WORKSHOP_SCHEDULE]]`     | semester workshop schedule, once finalized                                          |
| `[[FIRST_PROJECT]]`         | the spring project, once selected                                                   |

---

## 13. Known failure modes — avoid these specifically

- Mixing Tailwind v3 config syntax with a v4 install (or vice versa). Check first.
- `next/font` failing to build Bodoni Moda because the `opsz` axis wasn't declared.
- `export const metadata` in a file that also has `'use client'` — build error.
- Reading `window`/`document` during render instead of inside `useEffect` — hydration mismatch.
- A `scroll` listener without `{ passive: true }`, without rAF throttling, or without cleanup.
- `output: 'export'` combined with `next/image` optimization, route handlers, or dynamic routes lacking `generateStaticParams`.
- Global element selectors for section padding fighting Tailwind utilities.
- Quietly inventing content to fill a layout that looks empty. If a section has no data, redesign the section — do not invent the data.
