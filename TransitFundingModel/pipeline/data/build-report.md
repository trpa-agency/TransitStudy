# Data build 20261114a

Built 2026-11-14T00:27:25.

## Workbooks

- Funding Model V1G.xlsx, saved 2026-11-10T23:43:05, sha256 5b92e571c1b4be49
- Example Transit Financial Scenario Workbook.xlsx, saved 2026-10-28T02:17:15, sha256 fccb9a121a47afb6
- Financial PlanG.xlsx, saved 2026-10-28T02:17:15, sha256 8e0aa78245720af0

## Warnings (0)

None.

## Workbook values that differ from the seed (0)

These came from the workbooks and replace the values stored in etl/seed. Copy them into the seed when you agree with them, so the seed stays a true record.

None.

## Seed values held over the workbook (9)

- Service 30: `dataYear` = '26-27 estimate' (workbook '26-27'). Data year label marks the estimate
- Service TART-WS: `stateCond` = 'California route' (workbook 'Califorrnia route'). Spelling fixed; the workbook reads 'Califorrnia route'
- Source ttd-5310: `matchText` = '20% non-federal' (workbook '50% non-federal'). 20 percent non-federal match per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent
- Source ttd-5310: `fedShare` = 0.8 (workbook 0.5). 80 percent federal share per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent. Confirm with FTA
- Source ttd-5310co: `matchText` = '20% non-federal' (workbook '50% non-federal'). 20 percent non-federal match per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent
- Source ttd-5310co: `fedShare` = 0.8 (workbook 0.5). 80 percent federal share per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent. Confirm with FTA
- Source tart-5310: `matchText` = '20% non-federal' (workbook '50% non-federal'). 20 percent non-federal match per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent
- Source tart-5310: `fedShare` = 0.8 (workbook 0.5). 80 percent federal share per TRPA (Oct. 23, 2026); Revenue %s lists 50 percent. Confirm with FTA
- Source tart-washoe: shares held in the seed. The route model puts Washoe RTC on Main Line; the model places it on the Main Line Nevada segment, the only service Washoe RTC funds
