# Tahoe Regional Transit Funding Model: start here

This folder holds everything needed to continue the TRPA regional transit funding model. It covers RFP Task 4, Funding and Implementation Strategy. The model is one HTML page. It shows how transit operations in the Lake Tahoe Region are funded route by route, checks each use of funds against its rules, and projects agency balances five years out.

## Read in this order

1. `docs/Project Context Handoff.md`: purpose, work history, status against the RFP, decisions, and next steps.
2. `docs/Domain Lead Answers 2026-10-23.md`: the funding rules and data decisions TRPA made. Most of the model follows from these.
3. `docs/TRPA Answers 2026-11-13.md`: TRPA's answers to the Nov. 10 questions. Funding Model V1G became the source for existing transit data.
4. `docs/Model Logic.md`: how the page calculates, including known gaps.
5. `docs/Review Feedback 2026-10-27.md`: the Oct. 27 review and what changed.
6. `pipeline/README.md`: how the page is built from the workbooks.

Older working papers in `docs/` are dated records. Don't update them to match later decisions:

- **Rule Errors, Pitfalls, and Open Questions:** Oct. 19.
- **Funding App - Information Needed:** Oct. 20.
- **Questions for the Domain Lead:** Oct. 21.
- **The two Kira questionnaires:** Oct. 23.
- **Funding Model Questions 11.10.26 - Answered:** Nov. 13.
- **Overall Directive:** the original request and the RFP text.

## Folder map

| Path | What it is |
| --- | --- |
| `model/transit-funding-model.html` | The current model page. Built by the pipeline; never edit it by hand |
| `model/archive/` | Earlier versions of the page |
| `pipeline/` | Build: `etl/build_model_data.py`, `etl/config.yaml`, `etl/seed/*.yaml`, and the page template |
| `pipeline/editions/` | Builds the public page (Existing funding conditions only) and the full page from `model/`, then copies the public and full pages to `../docs/funding-model/` for GitHub Pages |
| `../docs/funding-model/` | Hosted copies, live at https://trpa-agency.github.io/TransitStudy/funding-model/. Written by the editions build; never edit them by hand |
| `source-data/workbooks/` | Copies of the four source workbooks. Funding Model V1G is the source of truth for existing transit data. The live copies are in the TRPA SharePoint folder "4. Funding Implementation Memo" |
| Fact sheets | Not in this repo. The model cites the newest versions on trpa.gov, dated Oct. 28, 2026: Federal Funds, State Funds, and Local Funds in three parts (sources 5 to 9). The links are in `sourceFileLinks` in `pipeline/etl/seed/model.yaml` and on the Sources and notes tab |
| `docs/` | Context, decisions, and working papers |
| `model/archive/mockups/` | The three Oct. 21 concept mockups, archived Nov. 16, 2026. Their figures predate the V1G update |
| `model/archive/prototype/` | An earlier prototype app (Oct. 20), archived Nov. 16, 2026. Its data predates the V1G update and it includes an optimizer TRPA chose not to use. Not used by the current page |

## Rules for working here

- **Change data in the workbooks or the seed, then rebuild.** Run `pipeline/build_data.bat` or `propy etl/build_model_data.py`. Read `pipeline/data/build-report.md`, then copy `pipeline/dist/transit-funding-model.html` to `model/`.
- **Change the page in `pipeline/template/transit-funding-model.template.html`.** Never edit `model/` directly; the next build overwrites it.
- **A decision that overrides a workbook value goes under `keep` in the seed,** with a `reason` and the `workbook` value at the time. Don't hardcode it anywhere else.
- **Verify with `--check`.** `propy etl/build_model_data.py --check` compares the build with the page in `model/` and lists every difference. Explain each one before replacing the page.
- **After a template change, test the page.** Open every tab, check for console errors, and confirm the key numbers in `docs/Model Logic.md` (Testing the page).
- **Keep the previous page.** Before replacing `model/transit-funding-model.html`, copy the old one to `model/archive/` with its date.
- **Python** runs in ArcGIS Pro's `arcgispro-py3` environment (`propy`). Settings live in `etl/config.yaml`. No secrets in code.

## Writing and design conventions

- **Style:** Microsoft Writing Style Guide. Plain language for committee, board, and leadership audiences, including elected officials.
- **Sentences:** one idea per sentence. No em dashes. Oxford commas. No filler or hype. Don't tack a justifying clause onto a sentence after a comma.
- **Citations:** cite TRPA decisions as "per TRPA (Oct. 23, 2026)" or "per TRPA (Nov. 13, 2026)." The page turns both into numbered sources. Never cite a staff member by name. In the page, sources are numbered on the Sources and notes tab and cited with superscripts. Don't repeat file names in the page.
- **Figures:** every figure traces to a workbook tab and cell. That detail lives in the seed and in each source's Details dialog.
- **Confidence tags** in analysis and handoff notes: [Certain] means checked against a source; [Likely] means strong evidence; [Guessing] means a gap was filled.
- **Palette:** the page uses the Connecting Tahoe palette (token block in the template head). For other TRPA work, use the trpa-claude-skills repo (github.com/trpa-agency/trpa-claude-skills): `trpa-brand`, `trpa-dashboard-stack`, and `trpa-dashboard-qa`. The page follows the dashboard stack: Plotly, Calcite, and AG Grid.

## Decisions in force (Oct. 23 to Nov. 13, 2026)

- **Source data:** Funding Model V1G overrides the earlier workbooks for existing transit data (Nov. 13). The build reads FY 26-27 costs, service statistics, rates, revenue, route allocations, and the FTA split from V1G. Financial PlanG still supplies revenue conditions, match notes, and the five-year revenue tables. The scenario workbook still supplies route conditions.
- **Audience and horizon:** TRPA first, to make the case for a regional funding source. Also a standard budgeting method other operators can use, and a starting point for cost-share talks. Results go to elected officials. The horizon is the fiscal year and five years.
- **No optimizer:** the tool flags problems and shows trade-offs.
- **Federal shares:** NDOT 5311 and 5307 operating at 50 percent; 5310 at 80 percent, to confirm with FTA. No toll credits.
- **Fares and preferences:** fares count as local match. "Ideally used in" conditions are preferences: warn and total them, but allow.
- **Placeholders and scope:** jurisdiction shares stay even-split placeholders. Operating only; capital is out. Planning and administration funds are in.
- **TART 5307:** $2,660,000, which V1G also uses.
- **Sources V1G leaves out:** $0 in FY 26-27 (Nov. 13). This covers the TTD local appropriation, Emerald Bay Shuttle fares, TART FTA 5310, and Martis Zones of Benefit. NTCA money is Placer County TOT, so the separate NTCA line is gone.
- **Private partners:** Lake Link partners use the V1G amounts (Nov. 13). LTVA is separate from the Tahoe Blue fee.
- **Presets:** the TART 30-minute peak preset starts in a year the user picks, FY 27-28 by default. Under TTD absorbs Lake Link, SSTMA admin costs carry over to TTD (Nov. 13).
- **JPA and service status:** the South Tahoe Transit JPA is not an operator. Lake Link, My Ride to Work, and vanpools are non-federalized.
- **Federal funds and surpluses:** federal funds above the share cap are left out of balances. Agency surpluses do not carry into the next year by default (Oct. 30, 2026). Carryover is a setting.

## Open items

- **Match testing:** TRPA chose per grant, per recipient. The engine still tests per service. This is the largest gap between the decisions and the code.
- **Missing data:** revenue miles by route, jurisdiction, state, and UZA; actual FY 26-27 FTA apportionments; the private and non-federalized operator list; and the actual agreements for Task 4c.
- **NLTE cost:** the model uses $694,260 from V1G. TRPA has not confirmed it is the contract cost.
- **Lake Link summer partners:** Caesars and Round Hill Pines pay for the special summer service. TRPA may drop them unless the Round Hill summer service is added.
- **Urban or rural class:** V1G treats part of TART Night, Hwy 89, and Hwy 267 as outside the urbanized area. The model classes Night as urban, which flags the FTA 5311 share on it.
- **TART 30-minute peak:** the pricing year of the $2,683,400 cost and its split by route are still open.
- **FTA confirmations:** the 5310 federal share and the NDOT 5311 operating rate.
- **Stakeholder review:** no partner has reviewed or endorsed the model yet.
- **Test question:** TRPA's own test for any version is "Where are the biggest gaps in funding?"
