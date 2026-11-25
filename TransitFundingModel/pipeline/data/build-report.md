# Data build 20261125a

Built 2026-11-25T00:43:45.

## Workbooks

- Funding Model V1G.xlsx, saved 2026-11-10T23:43:05, sha256 5b92e571c1b4be49
- Example Transit Financial Scenario Workbook.xlsx, saved 2026-10-28T02:17:15, sha256 fccb9a121a47afb6
- Financial PlanG.xlsx, saved 2026-10-28T02:17:15, sha256 8e0aa78245720af0

## Warnings (0)

None.

## Workbook values that differ from the seed (0)

These came from the workbooks and replace the values stored in etl/seed. Copy them into the seed when you agree with them, so the seed stays a true record.

None.

## Seed values held over the workbook (15)

- Service 30: `dataYear` = '26-27 estimate' (workbook '26-27'). Data year label marks the estimate
- Service TART-WS: `stateCond` = 'California route' (workbook 'Califorrnia route'). Spelling fixed; the workbook reads 'Califorrnia route'
- Source ttd-5310: `matchText` = '20% non-federal' (workbook '50% non-federal'). 20 percent non-federal match per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent
- Source ttd-5310: `fedShare` = 0.8 (workbook 0.5). 80 percent federal share per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent. Confirm with FTA
- Source ttd-5310co: `matchText` = '20% non-federal' (workbook '50% non-federal'). 20 percent non-federal match per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent
- Source ttd-5310co: `fedShare` = 0.8 (workbook 0.5). 80 percent federal share per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent. Confirm with FTA
- Source ttd-ltf: `amount` = 1,263,326 (workbook 1,263,326). Calculated by the TDA split on Service and funding inputs from TRPA's FY 26-27 allocation (Nov. 2026). The seed amount is unused
- Source ttd-sta: `amount` = 581,801 (workbook 581,801). Calculated by the TDA split on Service and funding inputs from TRPA's FY 26-27 allocation (Nov. 2026). The seed amount is unused
- Source ttd-fares30: `amount` = 25,000 (workbook 0). TTD FY 2027 farebox budget, per TRPA (Nov. 24, 2026). V1G shows $0
- Source tart-5310: `matchText` = '20% non-federal' (workbook '50% non-federal'). 20 percent non-federal match per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent
- Source tart-5310: `fedShare` = 0.8 (workbook 0.5). 80 percent federal share per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent. Confirm with FTA
- Source tart-ltf-trpa: `amount` = 913,053 (workbook 913,053). Calculated by the TDA split on Service and funding inputs from TRPA's FY 26-27 allocation (Nov. 2026). The seed amount is unused
- Source tart-sta-trpa: `amount` = 510,729 (workbook 510,729). Calculated by the TDA split on Service and funding inputs from TRPA's FY 26-27 allocation (Nov. 2026). The seed amount is unused
- Source tart-sgr: `amount` = 102,483 (workbook 100,084). TRPA FY 26-27 SGR allocation to TART (Attachment D). Capital, so it is outside operating revenue
- Source tart-washoe: shares held in the seed. The route model puts Washoe RTC on Main Line; the model places it on the Main Line Nevada segment, the only service Washoe RTC funds
