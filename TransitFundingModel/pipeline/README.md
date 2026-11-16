# Transit funding model: data pipeline

Builds `model/transit-funding-model.html` from the source workbooks and the seed files. The workbooks stay the source of truth for amounts, hours, rates, shares, and match notes. The seed holds the judgment calls.

Since November 13, 2026, Funding Model V1G is the source for existing transit data, per TRPA direction:

| Workbook | What the build reads |
| --- | --- |
| Funding Model V1G | Per Route Model Clean: FY 26-27 revenue by source and agency, each source's route allocation, TTD cost per VSH, and cost by route. Operating Stats: trips, VSH, VSM, and data year. VRH Rates: operator rates. FTA Allocation Split (26-27) |
| Financial PlanG | Revenue %s columns B and C (conditions and match notes), and the five-year revenue tables (Tables A1 and A2) for year values. V1G has neither |
| Example Transit Financial Scenario Workbook | costs tab: state and local route conditions. V1G does not have them |

Rebuilt October 27, 2026. The October 22 pipeline was never saved to the repo. This version reproduces the page as of October 27 field for field. The only change is that TART 5307 now reads Table A2, which TRPA chose on October 23.

## Run it

1. Save the workbooks. By default the build reads `source-data/workbooks/`. To read the live copies, set `workbook_folder` in `etl/config.yaml` to the synced SharePoint folder "4. Funding Implementation Memo".
2. Double-click `build_data.bat`, or run `propy etl\build_model_data.py` from this folder.
3. Read `data/build-report.md`.
4. Copy `dist/transit-funding-model.html` to `model/transit-funding-model.html`, then upload it to the claude.ai Project.

Options: `--strict` fails the build when there are warnings. `--check` compares the build with `model/transit-funding-model.html` and lists every difference.

## Folders

| Path | What it is |
| --- | --- |
| `etl/build_model_data.py` | The build |
| `etl/config.yaml` | Workbook folder, file names, the costs tab and Revenue %s layout, and output paths |
| `etl/seed/services.yaml` | Services. Trips, hours, miles, and route conditions come from the costs tab |
| `etl/seed/operators.yaml` | Operator cost rates, from the VRH Rates tab |
| `etl/seed/sources.yaml` | Funding sources: amounts, year values, Revenue %s shares and match notes, plus every rule and note |
| `etl/seed/fta.yaml` | FTA 5307 split inputs, from the FTA Allocation Split (26-27) tab |
| `etl/seed/model.yaml` | Agencies, jurisdictions, and source file names |
| `etl/seed/notes.yaml` | Data notes and the agreements inventory |
| `template/transit-funding-model.template.html` | The page without data. It loads `data/model-data.js` |
| `data/` | Build output: `model-data.json`, `model-data.js`, `build-report.md` |
| `dist/` | Build output: the single-file page |

## How a value is found

### Route model rows

Most sources read their FY 26-27 amount and route shares from one row of Per Route Model Clean:

```yaml
from:
  route: {row: TDA LTF (TRPA)}
```

- The amount is the agency's column in that row: D for TTD, E for TART, F for Lake Link, and G for TNT/TMA.
- The shares are the row's route cells for that agency's services, divided by their total.
- `only` or `except` keeps some services, and the amount becomes the sum of those cells. Placer County TOT uses this to split TART Connect from the fixed routes.
- `amount: false` reads only the shares. `minus` subtracts other sources' amounts, as TTD 5307 carryover does.
- The Main Line column is split across West Shore, North Shore, and Nevada by service hours (`route_model.columns` in `etl/config.yaml`).
- A service with `from.routeCost` gets its route model cost (row 10) as its reference cost. With `useAsCost: true`, that cost replaces VSH times rate. Route 30, Park & Ride, NLTE, and vanpools use it.
- The build warns when an agency column and its route cells disagree by more than $1.

### Other locators

Each workbook value has a `from` entry in the seed. For example:

```yaml
from:
  amount: {wb: plan, sheet: T2-4 A1 TTD LL Costs, row: FTA 5307 (Formally CMAQ Funds)1, near: 61, col: G}
```

- `row` is the label text in that row. The build searches for it, so inserting rows is safe.
- `occurrence` picks the nth match from the top when a label repeats, as in the route cost model.
- `near` is the row number when the seed was written. It only breaks ties.
- `cols` reads several columns: the five plan years G to K, or a range to sum with `sum: true`.
- If a label is renamed in the workbook, the build stops and names it. Update `row` in the seed.

## Holding a value over the workbook

A decision that overrides the workbook goes under `keep`:

```yaml
keep:
  amount:
    reason: Carried steady at the FY 25-26 amount per TRPA (Oct. 23, 2026); the plan shows $0 for FY 26-27
    workbook: 0.0
```

The build uses the seed value. `workbook` records what the workbook said when the decision was made. If the workbook later changes, the build warns so someone can decide again. The report lists every held value with its reason.

Current held values: 9. They cover the 5310 federal share and match text (TRPA, Oct. 23, 2026), Washoe RTC on the Main Line Nevada segment, and two text fixes.

## What the build checks

- Operating Stats rows and Revenue %s rows that no seed entry reads
- Route model columns with no service mapping, and route model rows whose agency column and route cells disagree
- Revenue %s route columns with no service mapping
- Unknown agencies, operators, jurisdictions, or services named in rules and shares
- Shares above 100 percent, and jurisdiction shares that do not total 100 percent

## Changing the page

Edit `template/transit-funding-model.template.html`, then rebuild. Don't edit `model/transit-funding-model.html` directly. The next build replaces it.
