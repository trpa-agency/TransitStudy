# Public and full editions

Builds two pages from the vetted model page in `model/transit-funding-model.html`:

| File | What it holds |
| --- | --- |
| `dist/transit-funding-public.html` | The Existing funding conditions page alone, fixed to the source data, with an "Open the full model" link in the header. No tabs, inputs, scenarios, export, import, reset, or source superscripts. Nothing is read from or saved to browser storage. |
| `dist/transit-funding-full.html` | The model page, with the same Existing funding conditions heading and note as the public page. Password protection is not set up yet. |

The public page links to the full page by file name, so host the two files in the same folder.

## Run it

1. Run the main build (`build_data.bat`) and copy `dist/transit-funding-model.html` to `model/`.
2. Double-click `build_editions.bat`, or run `propy editions/build_editions.py` from `pipeline/`.
3. The build also copies the public and full pages to `../docs/funding-model/` (set by `publish_folder` in `config.yaml`). GitHub Pages serves them at https://trpa-agency.github.io/TransitStudy/funding-model/ once they're committed to `main`.

Settings, including the file names, the link text, and the Existing funding conditions heading and note, are in `config.yaml`.

## Passphrase on the full page

The full page opens behind a passphrase box, adapted from the TRPA Tools QA gate (trpa-agency/tools, `assets/qa-gate.js`). The public page stays open, and its "Open the full model" button leads to the box. Visitors who enter the passphrase stay unlocked in that browser for 30 days. "Request the passphrase" emails rshaw@trpa.gov.

1. Double-click `set_passphrase.bat` in `pipeline/`. Type the passphrase twice. It is never shown or saved; only its SHA-256 hash, salted with `full.gate.salt`, goes into `config.yaml`.
2. Run `build_editions.bat` and commit. Changing the passphrase asks everyone for the new one on their next visit.

The build stops if no passphrase is set. Settings (request email, wording, 30-day unlock) are in the `full.gate` block of `config.yaml`. The gate script is `gate.js`; the build inlines it at the top of the full page.

This keeps casual visitors out. It is not security: the page and its data still download to the browser, and the repo is public.

## When it stops

The public page is cut from the model page at fixed markers: section comments, element IDs, the citation superscripts, and a few sentences. If the template changes one of them, the build stops and names it. Update `build_editions.py` to match.

## Limits

- The public page still carries the full source data, because Existing funding conditions is drawn from it. It removes the tools, not the data.
- While the TransitStudy repo is public, the pages and the workbooks can be downloaded from GitHub.
