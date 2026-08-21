# The Forward Society — theforwardsociety.org

Static marketing site for a student club launching at Rutgers University in
Fall 2026.

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 ·
static export.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site, written to out/
```

`npm run build` produces a folder called `out/` containing plain HTML. That
folder is the whole site — there is no server, no database, and no API.

---

## Editing the content (no coding required)

**Every word a founder might want to change lives in `content/`.** Nothing is
typed directly into the page files, so you never have to touch React to change
copy.

Each file opens with a HOW TO EDIT comment explaining what goes in it. Open the
file, change the text between the quote marks, save, and the site updates.

| File | What it controls |
| --- | --- |
| `content/copy.ts` | The club's fixed lines — tagline, headlines, the closing CTA, what members get, the four method steps |
| `content/links.ts` | Application form, newsletter signup, club email, Instagram |
| `content/nav.ts` | What appears in the header and footer menus |
| `content/problems.ts` | The problem ledger on the home page and the projects page |
| `content/team.ts` | The team roster |
| `content/faq.ts` | The FAQ accordion on the Join page |
| `content/timeline.ts` | The year timeline (used on Program and Join) |
| `content/process.ts` | The application steps on the Join page |
| `content/speakers.ts` | The speaker roster |
| `content/workshops.ts` | The workshop schedule on the Program page |
| `content/dispatch.ts` | The newsletter archive |
| `content/site.ts` | Mission statement, involvement fair details, the first project |

### The two rules

1. **Keep the quote marks and the commas.** Change what is *inside* the quotes,
   not the punctuation around them.
2. **Do not invent entries to fill a section.** An empty list is designed —
   it shows a written sentence explaining what is coming. A fabricated speaker
   is worse than an honest empty state.

---

## Placeholders — the `[[LIKE_THIS]]` values

Anything the founding team has not confirmed is written in double square
brackets, for example `[[CLUB_EMAIL]]`.

- While running `npm run dev`, a placeholder shows up as a **red TODO chip** so
  you can see at a glance what is still missing.
- In the built site, it renders as **nothing at all**. The element is dropped,
  or the section falls back to its written empty state.

A visitor never sees the brackets. Replacing a placeholder is just deleting the
`[[BRACKETED_TEXT]]` and typing the real value in its place.

### Everything still outstanding

| Placeholder | Lives in | What it needs |
| --- | --- | --- |
| `[[GOOGLE_FORM_URL]]` | `content/links.ts` | Application form link. **Highest priority** — until it is set, every Apply button on the site is hidden. |
| `[[NEWSLETTER_SIGNUP_URL]]` | `content/links.ts` | Newsletter signup link (hides the Subscribe button) |
| `[[CLUB_EMAIL]]` | `content/links.ts` | Club email (hides the email link in the footer, on Contact, and on Speakers) |
| `[[MISSION_STATEMENT]]` | `content/site.ts` | Official mission statement, once ratified |
| `[[FAIR_LOCATION]]` | `content/site.ts` | Involvement fair table location and date |
| `[[FIRST_PROJECT]]` | `content/site.ts` | The spring project, once selected |
| `[[ROLE]]`, `[[FOCUS]]`, `[[LAST_NAME]]` | `content/team.ts` | One per team member — role, one-line focus, and four surnames |
| Problem statements | `content/problems.ts` | The array is **empty**. Three real problems from member pitches, each with a "why it's hard" line. |
| Speakers | `content/speakers.ts` | Empty until speakers confirm |
| Workshops | `content/workshops.ts` | Empty until the schedule is set |

---

## Design rules the site is built on

Worth knowing before commissioning changes, because breaking these is what
makes a site look generic:

- **Five colours.** Bone, ink, ink-raised, scarlet, ash. Defined once at the top
  of `app/globals.css`. A sixth, `ash-on-ink`, exists only because plain ash
  fails contrast requirements on a dark background.
- **Scarlet is never a large fill.** Hairlines, the asterisk, one emphasised
  word per headline. If a screen looks more than about 2% red, something is
  wrong.
- **No photographs.** The layouts are built to work on type and rules alone,
  which is why they still look finished with no images to add.
- **Square corners.** The only exception is the apply button.
- **Pages alternate light and dark.** Every page file states its background
  intent in a comment at the top. Home, Program, Speakers, and Join are dark;
  About, Projects, Team, Contact, and Newsletter are light.
- **Nothing animates on scroll** except the single scarlet growth curve in the
  right margin, and that stops entirely for visitors who have asked their
  operating system for reduced motion.

---

## Deploying to Vercel

```bash
npx vercel link     # once
npx vercel --prod
```

The site is a static export, so there is nothing else to configure — no
environment variables and no secrets.
