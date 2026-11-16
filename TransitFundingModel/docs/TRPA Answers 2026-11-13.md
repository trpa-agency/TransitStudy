# TRPA answers to the Nov. 10 model questions

TRPA answered the Nov. 10, 2026 model questions on Nov. 13, 2026. The answered file is `docs/Funding Model Questions 11.10.26 - Answered.docx`. This page restates each answer and how the model applies it. In the model, these decisions are cited as "TRPA (Nov. 13, 2026)."

Confidence tags: [Certain] means checked against a source cell or file. [Likely] means strong evidence. [Guessing] means a gap was filled.

## Overall direction

Funding Model V1G overrides the earlier workbooks for existing transit data. The build now reads V1G for FY 26-27 costs, service statistics, operator rates, revenue amounts, route allocations, and the FTA split. [Certain]

V1G has no revenue conditions, no match notes, and no five-year revenue tables. The build still reads those from Financial PlanG. Route conditions still come from the scenario workbook. [Certain]

## Answers and how they are applied

| # | Question | Answer | Applied |
| --- | --- | --- | --- |
| 1 | Is the Lake Tahoe Visitors Authority money separate from the Tahoe Blue fee? | Separate sources. | LTVA stays its own source at the V1G amount, $61,700. |
| 2 | TTD SB 125: $500,000 or $825,000? | Use $500,000. | $500,000 from V1G. |
| 3 | Which Lake Link private partner amounts are current? | Use the V1G amounts. The partner funds pay for the Lake Link special summer service, so they may be left out unless the Round Hill summer service is added. | Left out. TRPA decided on Nov. 13 to omit the Lake Link summer service. Caesars ($70,000) and Round Hill Pines ($30,000) are turned off and can be turned back on to model the Round Hill summer service. Lake Link's FY 26-27 balance falls from $310,387 to $210,387. |
| 4 | Keep or remove five sources V1G leaves out? | Use whatever is in V1G. NTCA funding is Placer County TOT; NTCA only administers it. | TTD local appropriation, Emerald Bay Shuttle fares, TART FTA 5310, and Martis Zones of Benefit are $0 in FY 26-27. The NTCA line is removed, since the TOT lines already count that money. |
| 5 | Are the V1G TNT/TMA sources the same as the model's? | Yes for Visit Truckee Tahoe and for Northstar in the Park & Ride partners line. Use the V1G amount for Travel North Tahoe Nevada. | "Additional Truckee contribution" is renamed Visit Truckee Tahoe. Travel North Tahoe Nevada is $26,417. |
| 6 | Should Route 30 use the contract cost? | Use the V1G figures. | Route 30 costs $644,796. Its four revenue sources total $619,796, which leaves a $25,000 gap. |
| 7 | Is the NLTE cost of $694,260 the contract cost? | Not known yet. TRPA will follow up. | The model uses $694,260 and assumes it is the total contract cost, per TRPA (Nov. 13), while TRPA confirms. |
| 8 | Is the FY 24-25 route cost still used? | All V1G costs supersede earlier costs. | The FY 24-25 route costs are no longer read. The "Route model cost" column now shows the V1G FY 26-27 cost. |
| 9 | Can we get route costs and ridership from the same year? | Monthly ridership by route is on LT Info. TRPA will ask TNT/TMA for Park & Ride, NLTE, and vanpool ridership. | No change. Cost per rider stays off the model. |
| 10 | Should the model use the V1G route allocations? | Yes, for all inputs. | Every source's FY 26-27 shares come from Per Route Model Clean. Placer County TOT pays all of TART Connect ($2,932,112). |
| 11 | Should the build read V1G instead of the prior workbooks? | Yes. | Done, except for the items V1G does not have (see above). |
| 12 | Should "$26 million" describe spending or revenue? | Use the new costs from V1G. | Region cost is $22,699,948. Region revenue is $26,400,383. Both match V1G. |
| 13 | What year is the TART 30-minute peak cost priced in? | The improvement should not start in the current fiscal year. Users should turn it on or off and choose the first year. | The preset is off by default. When on, it starts in FY 27-28 unless the user picks another start year; FY 26-27 is unchanged. The cost is still treated as FY 26-27 dollars. The pricing year is still open. |
| 14 | How do the 16,100 added hours split across TART routes? | TRPA will work on getting the split. | No change. Split by service hours stays a placeholder. |
| 15 | Which TART Connect fare savings figure is correct? | Use the smaller figure, $758,000 a year, for now. | Recorded. No model input uses this figure yet. |
| 16 | Would TTD avoid the $92,490 Lake Link admin cost after a merger? | Assume the admin costs carry over to TTD. | The "SSTMA admin cost removed" input stays at $0, and the preset card says the costs carry over. |

## Effect on FY 26-27 (source data)

| Measure | Before (Nov. 10 build) | After (Nov. 13 build) |
| --- | --- | --- |
| Region operating cost | $22,119,270 | $22,699,948 |
| Region revenue (counting match-only credits) | $27,665,920 | $26,400,383 |
| Region ending balance | $4,543,011 | $2,688,806 |
| TTD ending balance | −$197,861 | −$936,184 |
| Lake Link ending balance | $360,787 | $310,387 |
| TART ending balance | $3,283,993 | $3,158,769 |
| TNT/TMA ending balance | $1,096,091 | $155,835 |
| Flags and notes | 12 and 6 | 12 and 10 |
| Region ending balance, FY 30-31 | −$522,092 | −$1,851,956 |

All values are from the built page, checked in a headless browser. [Certain]

The Lake Link and TNT/TMA balances match the V1G Per Route Model Clean totals (K63 and K65). TART's balance matches V1G revenue minus V1G cost for TART services. TTD's balance is V1G revenue less cost ($75,445 surplus), minus $8,000 in match-only credits and $1,003,629 in federal funds above the share cap. [Certain]

## What changed in the rule checks

- **New flag:** FTA 5311 (Caltrans) now has a share on TART Night service, which the model classes as urban. V1G puts part of the Night route outside the urbanized area (Operating Stats Q42). The urban or rural class of Night, Hwy 89, and Hwy 267 needs confirming. [Certain]
- **New notes:** TART TDA, State of Good Repair, and fixed-route TOT now reach the Main Line Nevada segment, because V1G spreads them across all of Main Line. These are "ideally used in California" or "ideally used in Placer County" notes. [Certain]
- **New match flags on TTD Routes 28 and 55:** V1G puts more FTA 5307 on these routes than the earlier shares did. [Certain]
- **Cleared flags:** the federal share cap flags on Hwy 89 and Hwy 267 and on TART ADA paratransit. [Certain]
