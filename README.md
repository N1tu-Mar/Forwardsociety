# The Forward Society — theforwardsociety.org

Static marketing site for a student club launching at Rutgers University in
Fall 2026.

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 ·
static export.

---

## Setting up

### 1. Install Node

You need **Node 20.9 or newer**. Check what you have:

```bash
node --version
```

If that prints nothing, or a number below 20.9, install the LTS release from
[nodejs.org](https://nodejs.org). `npm` comes with it — you do not install that
separately.

### 2. Get the code and install dependencies

```bash
cd forward-society
npm install
```

This reads `package.json` and downloads everything into `node_modules/`. It
takes about a minute the first time and prints a warning or two, which is
normal. You only rerun it when someone adds a new dependency.

### 3. Start the dev server

```bash
npm run dev
```

Open **http://localhost:3000**. Edit any file in `content/`, save, and the page
updates in the browser without a refresh. Stop the server with `Ctrl+C`.

Use dev mode while you are editing — it is the only mode that shows the red
TODO chips marking unfinished content.

### 4. Build the real site

```bash
npm run build
```

This writes the finished site to a folder called **`out/`** — plain HTML, CSS,
and images with no server, no database, and no API behind them. `out/` is what
gets deployed.

### 5. Preview the built site before you ship it

The build behaves slightly differently from dev mode: TODO chips disappear and
unconfirmed links vanish. Always look at it before deploying.

```bash
npx serve out
```

Open the address it prints (usually http://localhost:3000).

> Do **not** use `npx serve -s out`. The `-s` flag makes every URL serve the
> homepage, so every page looks fine even when it is broken.

### Checking your work

```bash
npm run build       # fails loudly if anything is broken
npx tsc --noEmit    # type errors
npm run lint        # code style
```

If `npm run build` succeeds, the site is deployable.

### If something goes wrong

| Symptom | Fix |
| --- | --- |
| `command not found: npm` | Node is not installed. Go back to step 1. |
| `Cannot find module` on `npm run dev` | Run `npm install` again. |
| Port 3000 already in use | Something else is running. `npm run dev -- -p 3001`. |
| A change is not showing up | Confirm you saved the file, then stop the server and start it again. |
| Weird stale errors after pulling changes | `rm -rf .next` then rerun. |

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

- **Two typefaces.** Montserrat at weight 800 for every headline, the wordmark,
  and the uppercase labels; Inter for body copy. This is the same pairing
  rutgersvip.com uses. Both are declared once in `app/layout.tsx` and never
  loaded from a `<link>` tag.
- **Five colours.** Bone, ink, ink-raised, scarlet, ash. Defined once at the top
  of `app/globals.css`. A sixth, `ash-on-ink`, exists only because plain ash
  fails contrast requirements on a dark background.
- **Scarlet is never a large fill.** The growth curve, the asterisk, one emphasised
  word per headline. If a screen looks more than about 2% red, something is
  wrong.
- **Sections open with a neutral hairline, never a scarlet one.** The rule
  spans both grid columns, which is what ties a section's label to the content
  beside it — without it the two columns read as unrelated fragments. Its
  weight matches the ruled lists, so every rule on the site is one colour.
- **Section padding is asymmetric, and that is deliberate.** More space below a
  section's content than above it, so the rule reads as belonging to the
  section it opens rather than floating halfway between two of them. Do not
  "tidy" `pt-section-tight pb-section` back into a symmetric `py-section`.
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
