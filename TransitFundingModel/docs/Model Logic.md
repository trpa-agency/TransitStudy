# Model logic

How the model page calculates, as of November 13, 2026. The code is the JavaScript at the bottom of `pipeline/template/transit-funding-model.template.html`. Section numbers in the code comments match the headings in parentheses below.

## Page and libraries

- **One self-contained HTML page.** The data is inlined as `window.TRANSIT_MODEL_DATA` by the pipeline. The template loads `data/model-data.js` instead.
- **Libraries (exact versions):** Plotly 2.35.2, AG Grid Community 33.3.2, and Calcite Components 5.0, all from CDNs. ExcelJS 4.4.0 loads from jsDelivr only when someone uses Export.
- **Colors:** every color comes from the Connecting Tahoe token block in the page head (`--ct-*` and `--c-*` variables). Charts read the same tokens through `TOK()`. To change the palette, edit that block only.
- **Scenario storage:** edits save to browser local storage under `trpa-transit-funding-model`. Every edit is logged in the change log. A scenario saved on an older data build is rebased onto the new build: the new values load, then the scenario's edits are applied on top.

## Tabs

| Group | Tab | Changes with inputs? |
| --- | --- | --- |
| | Overview | No. Navigation and a draft caveat |
| Today | Existing funding snapshot | No. Always the source data, FY 26-27 |
| Inputs users can change | Service and funding inputs | These are the inputs |
| Inputs users can change | Funding allocations by service | Shares are inputs; rule checks update |
| Results and future | One-year outlook, Five-year outlook, Agreements and risk | Yes |
| Reference | Sources and notes | No (source files only. Data notes and the agreements inventory stay in `etl/seed/notes.yaml`, and build details stay in `pipeline/data/build-report.md`, off the page since Nov. 20, 2026) |

## Services and cost (engine, section 5)

- **Annual cost:** vehicle service hours times the operator's cost per hour, both from Funding Model V1G. Route 30, Park & Ride, NLTE, and vanpools use the V1G route model cost instead. A service can override the rate or the annual cost.
- **Check against V1G:** every service's FY 26-27 cost equals its Per Route Model Clean cost (row 10). The Main Line cost is split across its three segments by service hours. Region cost is $22,699,948.
- **Service plan elements:** these use a five-year cost schedule from Tables A1 and A2. They count only when "Include" is checked.
- **Later years:** each operator's escalator applies (4 percent; TART Connect 5 percent; My Ride to Work 3 percent).
- **Jurisdiction miles:** annual service miles by jurisdiction set each service's California and Nevada portions. The engine reads them as weights and normalizes each row. Until miles by jurisdiction arrive, each service's total service miles are split evenly as a placeholder, by TRPA direction. Entering miles for a service replaces its placeholder.

**Service plan elements.** Rows not yet included are grayed out. For the study's plan rows, Starts in and Start-year cost come from the first year with a cost; operator and service hours show a dash because the plan gives only costs.

**New services (Service plan elements).** Besides the study's service plan rows, users can add a new service: name, agency, operator, start year, urban or rural, type, federalized, and jurisdictions served (even split). Cost is either an annual cost in start-year dollars, grown from the start year at the operator's escalator, or annual service hours priced at the operator rate in FY 26-27 dollars and escalated each year. The service is inactive before its start year. New services can be edited or removed in the grid. Added Nov. 20, 2026.

**Changing a service's agency.** Changing the Agency in Services and operating costs moves the service's cost. The model then offers to move the old agency's funding sources that pay only for that service (100 percent share, not the FTA 5307 split). Shared sources stay. Federal eligibility does not change. The "TTD absorbs Lake Link" preset remains for the full transfer, which also federalizes Lake Link and reallocates TTD's funding. Added Nov. 20, 2026.

**Revenue by funding level (Existing funding snapshot).** Selecting a bar, or a level button above the chart, drills into that level. Local revenue shows by the jurisdiction picked as each source's funding level in Details, with untagged sources as "Other local or more than one." Passenger fares show by fare source. Other levels show by program, grouped with `sourceGroups` (State changed from by state to by program on Nov. 24, 2026). Each drill-down sums to the level total. "All levels" returns to the overview. On the full and public pages. Added Nov. 20, 2026.

**Lake Link zones.** Lake Link is three services, per TRPA (Nov. 20, 2026): Zone 1 is mostly City of South Lake Tahoe and partly Douglas County (placeholder split 75 and 25 percent), Zone 2 is Douglas County, and Zone 3 is City of South Lake Tahoe. Hours, miles, and cost come from V1G Operating Stats rows LL Z1 to Z3, which the workbook marks as an example one-third split of the 47,002 contract hours. Source shares come from V1G Per Route Model Clean columns S to U (most sources 50, 25, and 25 percent). Trips by zone are not available. The split adds three flags in FY 26-27: Douglas County funds on Zone 3 and City of South Lake Tahoe funds on Zone 2 break their jurisdiction restrictions, and Douglas County funds on Zone 1 exceed its Douglas share.

**Five-year outlook.** A how-to section and the User input changes card open the page. The cost lines are operating cost in the source data (dashed) and operating cost with the user's changes (solid); with no changes, one line shows. The all-service-plan-elements line was removed. Ending balance by agency shows one small table per agency under its chart, plus a region table.

**Agreements and risk.** "Risks and considerations for this scenario" is generated from the current scenario: cross-agency funding, uncommitted partners, time-limited funds, and local shares not matched by contributions. The FTA sub-allocation item was removed because an MOU documents the method. The FTA 5307 section on Service and funding inputs links the 2016 TMPO, TTD, and Placer County MOU and the FY 26 sub-allocation sheet, both linked to their copies on trpa.gov (Nov. 24, 2026). The MOU's Exhibit A adds a base allocation per operator before the earned share. The FY 26 split and the model leave it out. This is an open question for TRPA.

**Fiscal year menu.** The header menu was removed (Nov. 20, 2026). One-year outlook and Funding allocations by service each have a Fiscal year menu; they share one year and stay in sync. The header flag count follows that year and names it. Agreements and risk, Service and funding inputs, and Existing funding snapshot always show FY 26-27. Five-year outlook's Effect of user inputs table compares FY 26-27 with FY 30-31.

**Own-agency rule (fundamental).** A source pays only for services run by the agency that receives it (TRPA, Nov. 20, 2026). Shares on another agency's services are ignored, and those Allocation cells are gray and not editable. The old Cross-agency use note no longer appears. If a service moves to another agency and its funding does not, the service shows a funding gap and the money stays unspent with the original agency.

**State that pays.** State-level sources have a paying state, picked under State in the Funding level dropdown (California or Nevada). The default reads the source's grantor. Revenue by funding level drills State revenue down by program (changed from by state on Nov. 24, 2026).

**Nov. 24, 2026 review changes (Kira).** Tabs renamed: Service and funding inputs, and Funding allocations by service. SSTMA shows as "SSTMA" (agency), not "Lake Link" (the service). Service plan elements opens with "Add a new service" (with its own grid of added services), then "Tahoe Transit Study service plan elements" with the TART peak route split inside. Funding source groups: Transient occupancy tax shows as "Placer County TOT"; Lake Link funding agreement, Lake Link partner contribution, Resort contribution, and County contribution list line by line (`ungroupPrograms` in `etl/seed/model.yaml`). The allocation grid has an operating cost row at the top. The move-funding prompt states that funding sources stay with the old agency and where to change a source's receiving agency.

**Federal funds for other eligible uses (Nov. 24, 2026).** What the model used to call "federal funds above the share cap" is now labeled "Federal funds for other eligible uses (capital or administration)." It is still left out of the operating balance by default and is not a rule-check flag. This follows LSC's financial plan (TTD LL Costs), which applies NDOT 5311 at 50 percent of route cost ($912,053 of $1,798,577) and asks how much 5307 and 5311 goes to capital. The study snapshot (Per Route Model Clean) applies all $1,798,577 to Routes 19X and 22, more than they cost.

## Funding source amounts

The FY 26-27 amount comes from Funding Model V1G, Per Route Model Clean, or from the V1G FTA 5307 split for TTD's 5307. Region revenue is $26,400,383, matching V1G, before later TRPA changes. On Nov. 24, 2026 it rose by $25,000: Emerald Bay Shuttle fares use TTD's board-approved FY 2027 farebox budget of $25,000 (TTD Finance and Personnel Committee packet, Nov. 4, 2026), where V1G shows $0 (kept in the seed with `keep.amount`, whose optional `cite` replaces the workbook citation). Later years follow the source's rule: growth rate, end year, cap, or a year value typed in, in that order of precedence. Year values still come from the financial plan's Tables A1 and A2, because V1G has no five-year revenue tables.

**Funding sources grid (Service and funding inputs).** Each line is still one source as received by one agency, and the engine checks each line on its own. The grid groups lines by program into collapsible rows, collapsed by default. A program row shows the total amount, the receiving agencies, and any value its lines share. Amounts are edited on the lines. `sourceGroups` in `etl/seed/model.yaml` maps related program names into one group, for example FTA 5307 carryover and flexed CMAQ under FTA 5307. The CSV exports every line and leaves out program rows. Added Nov. 20, 2026.

## Allocation

- **Shares:** each source is split across services by shares. Starting shares are the FY 26-27 route allocations in V1G, Per Route Model Clean, per TRPA (Nov. 13, 2026). Most split a source by share of service hours or miles. Users can change them. An automatic split divides the source by service hours, cost, ridership, service miles, or equally among the services its rules allow.
- **Unallocated money:** whatever is not applied stays with the receiving agency.
- **Fixed across years:** shares do not change by year. Check later years with the Fiscal year selector.
- **Suggest allocation:** a rules-based default, not an optimizer. Earmarked sources and fares go first. Federal funds follow, up to each route's share cap. Flexible funds then go to each route's remaining cost, most restricted first. Funds never move to another agency's services. A confirmation dialog explains this before it runs and says Reset undoes it (added Nov. 20, 2026).

## Rule checks

| Check | Level | Rule |
| --- | --- | --- |
| Route, operator, urban or rural, service type, state, or jurisdiction restriction | Flag | Hard rules on the source (`rules` in the seed) |
| Federal eligibility | Flag | Federal money on a non-federalized service |
| Eligible portion | Flag | More than the California or Nevada (or jurisdiction) share of a partly eligible route |
| Over-allocated | Flag | Shares total more than 100 percent |
| Federal share cap | Flag | Federal funds on a service exceed the highest federal share among its federal sources, times net cost. ADA paratransit uses the ADA share (80 percent for 5307) |
| Local match | Flag | Non-federal match applied to the service is less than federal × (1 − share) / share |
| Intended use, state preference, jurisdiction preference | Note | "Ideally" conditions. TRPA allows these and wants them highlighted |
| Cross-agency use (removed Nov. 20, 2026) | None | Replaced by the own-agency rule: a source cannot pay for another agency's services |
| Unallocated, funding gap | Info | Money not applied; route cost with no funding |

Fares count as local match by TRPA direction. A fare line with "Counts as match" unchecked is treated as fare replacement: it lowers net cost instead.

**Known gap:** TRPA chose per-grant, per-recipient match testing (Oct. 23). The engine still tests match per service. Per-route testing can report shortfalls that a grant-level test would not. A grant-level test means summing each federal source's required match against the eligible non-federal funds of the same recipient. That change belongs in the `compute()` function.

## Agency balances

- **Revenue:** everything a receiving agency gets, applied to a service or not. Match-only credits are not revenue.
- **Federal funds above the share cap:**
  - Each federal source can pay at most its federal share times the net cost of the eligible services of the agency that receives it.
  - Sources are placed most-restricted first, and whatever cannot be placed has no eligible operating use.
  - That excess is left out of the balance by default. The Inputs page can switch this to "count."
  - In FY 26-27 this is $1,003,629 at TTD, mostly NDOT 5311 above what Routes 19X and 22 can use.
- **Ending balance:** surplus carried from the prior year, plus revenue, minus federal funds above the cap, minus the cost of services operated.
- **Carryover:** an ending surplus becomes revenue the next year, and deficits do not carry. The setting is off by default (TRPA review, Oct. 30, 2026), because modeled TART and TNT/TMA costs appear understated. Each agency has an opening balance for FY 26-27, default $0.
- **Region:** the sum of agency balances. It nets one agency's surplus against another's deficit, so findings report deficits by agency.

## Jurisdiction results

- **Cost:** service cost is split by jurisdiction shares.
- **Need:** each jurisdiction's need is its cost share minus the federal, state, private, and fare funds applied to that share.
- **Nevada County and Town of Truckee:** results by jurisdiction show them as one group, with each one's contribution listed in the card and the chart hover. Routes to Truckee carry a Nevada County share until miles by jurisdiction arrive, so Truckee alone had no service cost. Set by `resultsWith` and `resultsName` in `model.yaml`. Added Nov. 24, 2026.
- **Contributions:** local sources tagged with a contributing jurisdiction. In Details, Funding level lists each jurisdiction under a Local heading, plus Other local or more than one. Picking one sets the level to local and the contributor together. Changed Nov. 20, 2026, replacing the separate contributing jurisdiction dropdown. The level label "Local public" became "Local" the same day.
- **Draft status:** these are drafts until real shares replace the placeholders.

## Scenario presets (Service and funding inputs)

All presets were removed Nov. 20, 2026, per TRPA. The rows below are a record. Plan services and the TART peak are rows in Service plan elements. A service's agency is changed in Services and operating costs, with a prompt to move its funding. Federalizing a moved service and reallocating its funding are done by hand (Federalized checkbox, Suggest allocation).

Each preset lists the values it sets. Checking it applies them as logged edits. Unchecking returns those values to the source data. Each card shows its effect against the source data before it is applied.

| Preset | What it sets |
| --- | --- |
| Meyers paratransit and microtransit pilot (removed Nov. 20, 2026) | No longer a preset. Check Include on the SP-MEY row in Service plan elements. Its cost starts in FY 27-28 |
| TTD absorbs Lake Link | Lake Link services and all SSTMA sources move to TTD. Lake Link becomes federalized. TTD's combined sources are reallocated with the rules-based allocation, computed on the source data. Three assumptions apply only while the preset is on: SSTMA admin cost removed, the share of Lake Link private partner funds kept, and added federal compliance cost. Defaults ($0, 100 percent, $0) change nothing. SSTMA admin costs carry over to TTD by default, per TRPA (Nov. 13, 2026). The card compares separate and consolidated cases, both under the rules-based allocation: flags, notes, TTD federal funds above the share cap, and the combined TTD and Lake Link balance |
| TART fixed routes at 30-minute peak frequency (moved Nov. 20, 2026) | No longer a preset. It is a row in Service plan elements with Include, Starts in (`assume.peak30Start`, default FY 27-28), and an editable start-year cost (`assume.peak30Cost`, stored in FY 26-27 dollars; blank uses the TART 2025 Systems Plan's $2,683,400). Include sets `peak30` on the TART Main Line (West Shore, North Shore, Nevada), Hwy 89, and Hwy 267. The cost is split by each route's service hours, shown in Peak frequency inputs, and grows at TART's escalator |

The TDA and SB 125 California-only preset and the Lake Link federalized preset were removed on October 30, 2026, per TRPA review.

## Export

- **Export to Excel:** writes ten readable sheets: Scenario, Outlook by agency, Results by service, Results by jurisdiction, Funding sources, Allocation shares, Services, Rule checks, Changes, and Sources.
- **No import:** Import was removed on Nov. 20, 2026, per TRPA. Exported workbooks are one-way snapshots.
- **Submit Data Updates:** a header button, always active (renamed from "Submit updates or feedback" on Nov. 24, 2026). The popup lists the net changes and asks for name, agency, and "Any additional comments or feedback on the model" (stored in the survey's `notes` field). A submission needs at least one change or a comment, so users can send feedback without changing any inputs. A feedback-only submission posts the main record with change_count 0 and no repeat rows, and its success screen offers Close. Renamed from "Submit a data update" on Nov. 24, 2026. Funding split edits are listed one row per service whose share changed, with the percent and FY 26-27 dollars ("Share to Route 50: none to 48.1% ($4,000)"), plus a Split method row when the method changed. Each survey row's item_id is the item ID and field path, such as `ttd-ktb|alloc.pct.50`. A share cell on Funding allocations by service blocks any entry that would take the source's row past 100 percent. A popup explains why, lists the other services' shares, and gives the most that can be entered now. Submit to TRPA posts to the Survey123 survey "Funding Model Data Update Request" (ArcGIS Online) with applyEdits: one record on the main layer and one row per change in the "changes" repeat. Settings are `dataUpdates` in `etl/seed/model.yaml` (serviceUrl, layerId, tableId, contact). After a successful submit, the user chooses Keep my edits or Reset to source data. If a submit fails, the edits stay and a Copy change list button appears. Replaced the email version on Nov. 23, 2026.

## Citations

- **Numbered sources:** sources are numbered once, on Sources and notes. `sourceFileGroups` in `etl/seed/model.yaml` combines related files into one numbered source, and every citation to a member shows the group's number. The data still names the file, tab, and cell behind each value, and the build report traces every value. As of Nov. 24, 2026: 1 is "Transit Study Funding Memo Inputs" (Financial PlanG, the Example Transit Financial Scenario Workbook, and Funding Model V1G; no link). 2 is "Transit Study Funding Fact Sheets," which lists the five Oct. 28, 2026 fact sheets with links. 3 is "TART 2025 Systems Plan Update," which lists the Board presentation and the staff report with links. 4 to 6 are the FY 26 FTA sub-allocation, the 2016 transit MOU, and the TTD Finance and Personnel Committee packet of Nov. 4, 2026 (`references`). Source dates show month and year only. The SSTMA working model was removed as a source on Nov. 24, 2026: the model took no values from it.
- **TRPA staff direction is back end only (Nov. 24, 2026).** TRPA's direction of Oct. 23, 2026 and answers of Nov. 13, 2026 are no longer numbered sources. The seed, data, and docs keep every dated TRPA attribution, such as "per TRPA (Oct. 23, 2026)." On load, the page drops them from notes, citations, and data notes (`dropStaffRefs` in the template). "TRPA (Nov. 13, 2026): use the plan amount" shows as "Use the plan amount." The decision records are in `docs/Domain Lead Answers 2026-10-23.md` and `docs/TRPA Answers 2026-11-13.md`.
- **Seed text stays verbatim:** cite strings in the seed keep the full file name, tab, and cell. The page swaps the file name for a superscript number when it draws them: `citeHtml`, `citeText`, and `textHtml`.
- **TRPA direction:** write it in seed text as "per TRPA (Oct. 23, 2026)" or "(TRPA, Oct. 23, 2026)" and it becomes superscript 10. The same forms with Nov. 13, 2026 become superscript 11.

## Testing the page

- **Headless test:** the page needs its CDN libraries. In a sandbox without CDN access, install the same versions from npm and route the CDN URLs to the local files. Then open the page with Playwright and run every tab.
- **Checks:** look for console errors. Compare `window.__model.SERIES()[0].tot` with the expected numbers.
- **Expected FY 26-27 values (source data, build 20261113a):** 12 flags and 10 notes. Region cost $22,699,948 and ending balance $2,688,806. TTD ending balance −$936,184 with $1,003,629 federal above the cap. Lake Link $310,387, TART $3,158,769, and TNT/TMA $155,835. Region FY 30-31 balance −$1,851,956.
