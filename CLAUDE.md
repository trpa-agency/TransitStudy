# CLAUDE.md

Context for Claude when working in this repo. Read this before editing anything.

## What this is

The public website for the Tahoe Transit Study, a Tahoe Regional Planning Agency (TRPA) project. The study includes an operational analysis plus service, governance, and funding recommendations for transit in the Lake Tahoe Basin.

- Live site: https://trpa-agency.github.io/TransitStudy/ (GitHub Pages, deployed from `main`, `/docs` folder)
- Replaces: https://tahoetransitstudy.squarespace.com/. Nothing on the site loads from Squarespace anymore. Keep it that way.
- Owner: Rachael Shaw, Transportation Planning Analyst, TRPA
- Public contact on the site: Kira Richardson, Senior Transportation Planner, krichardson@trpa.gov
- Keep this repo small. Don't add large source files, PDFs, or raw data here. PDFs are hosted on trpa.gov.

## Rules for working here

- Don't commit, push, or merge. The owner reviews and commits from GitHub Desktop.
- Ask before acting when directions conflict or a choice is the owner's to make. Ask one question at a time.
- Don't redesign or "improve" sections that weren't part of the request. Several sections went through many rounds of review (the historic timeline, the project timeline, the matrix). Change only what was asked.
- Put links, paths, dates, embed IDs, and contacts in `docs/config/site-config.js` or the `docs/data/` files, never hardcoded in `docs/index.html`.
- No build step, no framework, no npm. Plain HTML, CSS, and JavaScript, with libraries from a CDN at pinned versions.
- Never guess at facts (meeting dates, dollar amounts, agency roles, history). Cite a source or ask.

## Files

| Path | What it is |
|---|---|
| `docs/index.html` | The whole site: markup, inline CSS (design tokens on `:root`), and the inline script that renders everything from config and data. |
| `docs/config/site-config.js` | `window.SITE_CONFIG`: contact, survey, reports, funding tables, Flourish ID, images, partners, AG Grid URL, and meetings. |
| `docs/data/recommendations-matrix.js` | `window.REC_MATRIX`: agencies (`AG`) and recommendations (`recs`) for the responsibility matrix. |
| `docs/data/project-timeline.js` | `window.PROJECT_TIMELINE`: Gantt lanes and items for the Home tab, from Project_Timeline.xlsx. Months are `YYYY-MM`. |
| `docs/data/historic-timeline.js` | `window.HISTORIC_TIMELINE`: historic transit events for the Existing conditions tab. |
| `docs/assets/img/` | Photos, maps, governance chart, TRPA logos, favicon. Partner logos are in `docs/assets/img/partners/`, trimmed and no larger than 320 by 160 pixels. |
| `docs/.nojekyll` | Tells Pages to skip Jekyll. Keep it. |

Pages publishes only `docs/`. Files outside it get no website URL, but they are still public on github.com because the repo is public. `README.md` and this file stay at the repo root.
| `TransitFundingModel/` | The Regional Transit Funding Model, moved from the Transportation repo on Nov. 10, 2026. It has its own `CLAUDE.md`; read that before editing it. Its four source workbooks in `source-data/workbooks/` (about 17 MB) are an approved exception to the keep-small rule, because the build reads them. Its fact sheet PDFs are linked from trpa.gov, not stored here. |

## Page structure

One page with hash-routed tabs: `#home`, `#recommendations`, `#existing-conditions`, `#get-involved`, `#partners`. Any inner id also works as a link and opens its tab, for example `#reports`, `#timeline`, `#faq`, `#contact`, `#responsibility`, `#service-map`, `#services`, `#governance`, `#history`, `#funding`, `#survey`, and `#meetings`. Don't rename these ids. Other pages and emails link to them.

- **Home:** hero, about and objectives, reports, project timeline (CSS-grid Gantt with a today line), FAQ, contact. Centered layout except the hero.
- **Draft recommendations:** responsibility matrix (AG Grid, loaded lazily), then the recommended service strategies map.
- **Existing conditions:** existing services map, governance chart, historic timeline (scrollable box with decade markers), funding Sankey (Flourish), and funding fact sheet cards.
- **Get involved:** action cards, Survey123 click-to-load embed, upcoming and past meetings sorted by date.
- **Project partners:** steering committee (TRPA first), then the project team.

## Data notes

- **Matrix, agencies and roles:** the current source is the responsibility matrix spreadsheet with Kira Richardson's edits (Nov. 13, 2026). It replaced the Executive Summary's lead and partner lists and added specific agencies where the tables said "local jurisdictions" or "TMAs." Service and governance wording still follows the Executive Summary, Tables 3 and 4. The final study will be updated to match this spreadsheet. When it is published, check the matrix against it.
- **Matrix, funding rows:** from the same spreadsheet. They have no timeframe on purpose. Leave `term` blank unless the owner provides one.
- **Timeframes:** `term` values like "Short to medium" render as dots in the Short, Medium, and Long columns. CSV export writes X for each dot.
- **Agencies:** add a new agency to `AG` (with its group) before using its key in `lead` or `partners`.
- **Meetings:** each entry has `date` (YYYY-MM-DD), `body`, `time`, `place`, and an optional `link`. The page splits Upcoming and Past by today's date, so past meetings don't need to be moved.
- **Survey:** Survey123 item `d49378edcde44d33ad51f498b09e4c4c`, embedded with `embed=fullscreen&hide=footer`. The survey closes Jan. 31, 2027. The date is `survey.closes` in the config.

## Brand

- **Shell** (header, tabs, footer): TRPA agency look. White header, color logo, TRPA blue #0072CE, navy #003B71, Open Sans.
- **Content:** Connecting Tahoe palette on the EIP system. Lexend Deca, Montserrat for small uppercase labels, pill buttons, 10px cards.
  - Blue #2B94D1 (text #2273A3), deep teal #044554, red #BA5B53, sage #54746A, green #98CA4D (text #5D7B2F), gold #E4CB3F (text #807223).
  - Blue, green, and gold are fills only at text size. Use the text step for words.
- The governance chart uses blue, green, sage, and red with their own meanings. Use color coding sparingly elsewhere to avoid confusion. The historic timeline uses neutral cards and icons for this reason.
- Source: the TRPA design system (`trpa-agency/tools`, `assets/trpa-tokens.css`, Connecting Tahoe layer).

## Writing style

Copy on the site follows TRPA and Microsoft Writing Style Guide rules.

- Sentence case for headings and buttons.
- No em-dashes. Use the Oxford comma.
- Dates like Oct. 29, 2026. Times like 9 a.m. and 3 p.m.
- Spell out acronyms on first use, for example South Shore Transportation Management Association (SSTMA).
- Plain, direct language for a public audience. One idea per sentence. No filler or hype.
- Use "Lake Tahoe Basin" and "the basin" (lowercase).

## Preview and checks

- Serve locally with `python -m http.server 8000` from the `docs` folder, then open http://localhost:8000/. The data files load best from a server. In VS Code, open this repo as the workspace folder and trust it, or Live Preview returns "Forbidden."
- Before handing off a change, check every tab at desktop width and at 375 pixels wide, check that the matrix loads and filters, and confirm there are no console errors.
