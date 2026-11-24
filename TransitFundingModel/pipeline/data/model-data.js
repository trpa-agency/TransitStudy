window.TRANSIT_MODEL_DATA = {
 "schema": "tahoe-transit-funding-data/1",
 "modelVersion": "tahoe-transit-funding-1.0",
 "sourceFiles": {
  "scen": "Example Transit Financial Scenario Workbook.xlsx",
  "plan": "Financial PlanG.xlsx",
  "v1g": "Funding Model V1G.xlsx",
  "fed": "Federal Funds, Oct. 28, 2026.pdf",
  "state": "State Funds, Oct. 28, 2026.pdf",
  "loc1": "Local Funds 1 of 3, Oct. 28, 2026.pdf",
  "loc2": "Local Funds 2 of 3, Oct. 28, 2026.pdf",
  "loc3": "Local Funds 3 of 3, Oct. 28, 2026.pdf"
 },
 "sourceFileNotes": {
  "scen": "State and local route conditions (costs tab). Its costs and rates are replaced by Funding Model V1G.",
  "plan": "Revenue conditions and match notes (Revenue %s, columns B and C) and the five-year revenue tables (Tables A1 and A2). Its FY 26-27 amounts and shares are replaced by Funding Model V1G.",
  "v1g": "Source of truth for existing transit data since Nov. 13, 2026: FY 26-27 revenue by source and agency, route allocations, and operating cost by route (Per Route Model Clean), service statistics (Operating Stats), operator rates (VRH Rates), and the FTA split.",
  "fed": "Federal funding fact sheet (FY 25-26 budgeted amounts, purpose, match, restrictions).",
  "state": "State funding fact sheet.",
  "loc1": "Local funding fact sheet, part 1 of 3 (TART partners, Placer County TOT, Washoe RTC, Town of Truckee, TTD local appropriation).",
  "loc2": "Local funding fact sheet, part 2 of 3 (Nevada State Parks, Tahoe Douglas Visitor Authority, NLTE partners, Lake Link public partners).",
  "loc3": "Local funding fact sheet, part 3 of 3 (Lake Link private partners)."
 },
 "sourceFileUrls": {
  "fed": "https://www.trpa.gov/wp-content/uploads/FederalFunds-10.28.2026.pdf",
  "state": "https://www.trpa.gov/wp-content/uploads/StateFunds-10.28.2026.pdf",
  "loc1": "https://www.trpa.gov/wp-content/uploads/LocalFunds1of3-7columns-10.28.2026.pdf",
  "loc2": "https://www.trpa.gov/wp-content/uploads/LocalFunds2of3-7columns-10.28.2026.pdf",
  "loc3": "https://www.trpa.gov/wp-content/uploads/LocalFunds3of3-6columns-10.28.2026.pdf",
  "trpa": "https://github.com/trpa-agency/TransitStudy/blob/main/TransitFundingModel/docs/Domain%20Lead%20Answers%202026-10-23.md",
  "trpa2": "https://github.com/trpa-agency/TransitStudy/blob/main/TransitFundingModel/docs/TRPA%20Answers%202026-11-13.md"
 },
 "sourceFileGroups": [
  {
   "key": "memo",
   "name": "Transit Study Funding Memo Inputs",
   "note": "Working files prepared for the Tahoe Transit Study funding memo. They provide FY 26-27 operating costs, service statistics, operator rates, revenue amounts, and route allocations. They also provide the FTA split, match requirements, five-year revenue projections, and the state and local conditions on each route.",
   "members": [
    "plan",
    "scen",
    "v1g"
   ]
  },
  {
   "key": "factSheets",
   "name": "Transit Study Funding Fact Sheets",
   "note": "TRPA's transit funding fact sheets, Oct. 28, 2026 versions. They give the amount, purpose, match, and restrictions for each federal, state, and local source.",
   "members": [
    "fed",
    "state",
    "loc1",
    "loc2",
    "loc3"
   ],
   "listMembers": true
  },
  {
   "key": "tartSystemsPlan",
   "name": "TART 2025 Systems Plan Update",
   "note": "Placer County, November 18, 2025. Current TART frequency, the preferred service scenario, and the cost of 30-minute peak service.",
   "members": [
    "tartPlan",
    "tartMemo"
   ],
   "listMembers": true
  }
 ],
 "references": {
  "tartPlan": {
   "name": "TART 2025 Systems Plan Update, Board presentation, Item 04A, Placer County Board of Supervisors, November 18, 2025",
   "note": "Preferred service scenario and the cost of 30-minute peak service on TART fixed routes (slides 30 and 31).",
   "url": "https://www.placer.ca.gov/DocumentCenter/View/99365/2025-111825-PowerPoint-Item-04A-DPW---Tahoe-Truckee-Area-Regional-Transit-2025-Systems-Plan-Update"
  },
  "tartMemo": {
   "name": "TART 2025 Systems Plan Update, staff report, Placer County Public Works, November 18, 2025",
   "note": "Current 60-minute frequency on all TART fixed routes, and the peak-season and year-round 30-minute options.",
   "url": "https://www.placer.ca.gov/DocumentCenter/View/99284/04A"
  },
  "ftaSplit": {
   "name": "Lake Tahoe FTA Sub-Allocation (5307, 5339, 5310), FY 26 full-year apportionments, TRPA",
   "note": "Earned-share split of the Lake Tahoe UZA apportionment by urban revenue miles, population, and ridership, and the 75 percent operations share of 5307. Same inputs as the V1G FTA Allocation Split tab.",
   "url": "https://www.trpa.gov/wp-content/uploads/FY26FTA-Full-Year-5307_5339_5310-ApportionmentFINAL.pdf"
  },
  "ftaMou": {
   "name": "Memorandum of Understanding between TMPO, Tahoe Transportation District, and Placer County on transit planning and programming of federal funds, 2016",
   "note": "Section 3 and Exhibit A set the 5307 and 5339 sub-allocation method. Exhibit A adds a base allocation per operator before the earned share. The FY 26 split uses earned share only.",
   "url": "https://www.trpa.gov/wp-content/uploads/Tahoe_Transit_MOU_Final-2017.pdf"
  },
  "ttdFpc20261104": {
   "name": "TTD Finance and Personnel Committee meeting packet, November 4, 2026",
   "note": "Attachment A, Transit Fund statement of operations for July and August 2026. Emerald Bay Shuttle (micro-transit) farebox revenue of $12,740 year to date against a board-approved FY 2027 budget of $25,000.",
   "url": "https://tahoetransportation.org/wp-content/uploads/2026/10/TTD-Finance-Comm-Mtg-Agenda-Packet-2026-11-4.pdf"
  }
 },
 "scenarios": {
  "peak30": {
   "cost": 2683400,
   "hours": 16100,
   "miles": 318200,
   "riders": 153000,
   "routes": [
    "TART-WS",
    "TART-NS",
    "TART-NV",
    "89",
    "267"
   ],
   "split": "Placeholder. The plan gives a systemwide total. The model splits it across routes by each route's annual service hours.",
   "cite": [
    "tartPlan",
    "tartMemo"
   ]
  }
 },
 "sourceGroups": {
  "FTA 5307 (flexed CMAQ)": "FTA 5307 Urbanized Area Formula",
  "FTA 5307 carryover": "FTA 5307 Urbanized Area Formula",
  "FTA 5310 carryover": "FTA 5310",
  "FTA 5339 (Lake Tahoe UZA and NV DOT)": "FTA 5339 Bus and Bus Facilities",
  "FTA 5339 (Lake Tahoe UZA)": "FTA 5339 Bus and Bus Facilities",
  "TDA LTF, TRPA apportionment": "TDA Local Transportation Fund",
  "TDA STA, TRPA apportionment": "TDA State Transit Assistance",
  "Transient occupancy tax": "Placer County TOT"
 },
 "ungroupPrograms": [
  "Emerald Bay Shuttle pilot",
  "Lake Link funding agreement",
  "Lake Link partner contribution",
  "Resort contribution",
  "County contribution"
 ],
 "dataUpdates": {
  "serviceUrl": "https://services5.arcgis.com/fXXSUzHD5JjcOt1v/arcgis/rest/services/service_97add89ea7044725abf93da481f35bfa_form/FeatureServer",
  "layerId": 0,
  "tableId": 1,
  "contact": "rshaw@trpa.gov"
 },
 "agencies": [
  {
   "id": "TTD",
   "name": "Tahoe Transportation District",
   "short": "TTD"
  },
  {
   "id": "SSTMA",
   "name": "South Shore Transportation Management Association (SSTMA)",
   "short": "SSTMA"
  },
  {
   "id": "TART",
   "name": "Placer County TART",
   "short": "TART"
  },
  {
   "id": "TNTTMA",
   "name": "Truckee North Tahoe TMA",
   "short": "TNT/TMA"
  },
  {
   "id": "REGION",
   "name": "Regional or new (not yet assigned)",
   "short": "Regional"
  }
 ],
 "jurisdictions": [
  {
   "id": "CSLT",
   "name": "City of South Lake Tahoe",
   "short": "CSLT",
   "state": "CA"
  },
  {
   "id": "ELD",
   "name": "El Dorado County",
   "short": "El Dorado",
   "state": "CA"
  },
  {
   "id": "PLA",
   "name": "Placer County",
   "short": "Placer",
   "state": "CA"
  },
  {
   "id": "NEV",
   "name": "Nevada County",
   "short": "Nevada Co.",
   "state": "CA",
   "resultsName": "Nevada County and Town of Truckee",
   "resultsShort": "Nevada Co. and Truckee"
  },
  {
   "id": "TRK",
   "name": "Town of Truckee",
   "short": "Truckee",
   "state": "CA",
   "resultsWith": "NEV"
  },
  {
   "id": "DOU",
   "name": "Douglas County",
   "short": "Douglas",
   "state": "NV"
  },
  {
   "id": "WAS",
   "name": "Washoe County",
   "short": "Washoe",
   "state": "NV"
  },
  {
   "id": "CC",
   "name": "Carson City",
   "short": "Carson City",
   "state": "NV"
  }
 ],
 "services": [
  {
   "id": "19X",
   "name": "Route 19X",
   "short": "19X",
   "agency": "TTD",
   "operator": "TTD",
   "group": "TTD",
   "stateCond": "Nevada Route",
   "localCond": "Carson City, Douglas County",
   "area": "rural",
   "type": "fixed",
   "federalized": true,
   "trips": 10747.0,
   "vsh": 2250.4,
   "vsm": 61381.0,
   "dataYear": "24-25",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "CC": 0.5,
    "DOU": 0.5
   },
   "refCost": 537223,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean K10",
   "note": "",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 7",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 4"
  },
  {
   "id": "22",
   "name": "Route 22",
   "short": "22",
   "agency": "TTD",
   "operator": "TTD",
   "group": "TTD",
   "stateCond": "Nevada Route",
   "localCond": "Douglas County",
   "area": "rural",
   "type": "fixed",
   "federalized": true,
   "trips": 18457.0,
   "vsh": 4409.6,
   "vsm": 121654.0,
   "dataYear": "24-25",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "DOU": 1
   },
   "refCost": 1052674,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean L10",
   "note": "",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 8",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 5"
  },
  {
   "id": "28",
   "name": "Route 28 (East Shore Express)",
   "short": "28",
   "agency": "TTD",
   "operator": "TTD",
   "group": "TTD",
   "stateCond": "Nevada Seasonal Route",
   "localCond": "Washoe County",
   "area": "urban",
   "type": "seasonal",
   "federalized": true,
   "trips": 24699.0,
   "vsh": 1192.7,
   "vsm": 22330.0,
   "dataYear": "24-25",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "WAS": 1
   },
   "refCost": 284725,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean M10",
   "note": "",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 9",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 6"
  },
  {
   "id": "30",
   "name": "Route 30 (Emerald Bay Shuttle)",
   "short": "30",
   "agency": "TTD",
   "operator": "Via",
   "group": "TTD",
   "stateCond": "California Seasonal Route",
   "localCond": "El Dorado County",
   "area": "urban",
   "type": "seasonal",
   "federalized": true,
   "trips": 10700.0,
   "vsh": 3500.0,
   "vsm": 9850.0,
   "dataYear": "26-27 estimate",
   "rateOverride": null,
   "costOverride": 644796.0,
   "costSchedule": null,
   "activeYears": [
    true,
    true,
    false,
    false,
    false
   ],
   "include": true,
   "plan": false,
   "juris": {
    "ELD": 1
   },
   "refCost": 644796,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean R10",
   "note": "Pilot funded through FY 27-28. FY 26-27 cost is the contract cost in Funding Model V1G ($644,796, about $184.23 per service hour), per TRPA (Nov. 13, 2026). It replaces the $147.80 per hour rate used since Oct. 23, 2026.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 10",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 7"
  },
  {
   "id": "50",
   "name": "Route 50",
   "short": "50",
   "agency": "TTD",
   "operator": "TTD",
   "group": "TTD",
   "stateCond": "California Route (portion in NV)",
   "localCond": "CSLT, El Dorado County, Douglas County",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": 170332.0,
   "vsh": 9418.6,
   "vsm": 134562.0,
   "dataYear": "24-25",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "CSLT": 0.3333333333333333,
    "ELD": 0.3333333333333333,
    "DOU": 0.3333333333333333
   },
   "refCost": 2248438,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean N10",
   "note": "",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 11",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 8"
  },
  {
   "id": "51",
   "name": "Route 51",
   "short": "51",
   "agency": "TTD",
   "operator": "TTD",
   "group": "TTD",
   "stateCond": "California Route (portion in NV)",
   "localCond": "CSLT, El Dorado County, Douglas County",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": 115.0,
   "vsh": 167.0,
   "vsm": 1700.0,
   "dataYear": "24-25",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "CSLT": 0.3333333333333333,
    "ELD": 0.3333333333333333,
    "DOU": 0.3333333333333333
   },
   "refCost": 39867,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean P10",
   "note": "TTD expanded operations supported by the Tahoe Douglas Visitor Authority (Local Funds fact sheet).",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 12",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 9"
  },
  {
   "id": "55",
   "name": "Route 55",
   "short": "55",
   "agency": "TTD",
   "operator": "TTD",
   "group": "TTD",
   "stateCond": "California Route",
   "localCond": "CSLT, El Dorado County",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": 55609.0,
   "vsh": 9312.2,
   "vsm": 111689.0,
   "dataYear": "24-25",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "CSLT": 0.5,
    "ELD": 0.5
   },
   "refCost": 2223038,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean O10",
   "note": "",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 13",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 10"
  },
  {
   "id": "ADA-TTD",
   "name": "TTD ADA paratransit",
   "short": "ADA (TTD)",
   "agency": "TTD",
   "operator": "TTD",
   "group": "TTD",
   "stateCond": "CA/NV",
   "localCond": "(none listed)",
   "area": "urban",
   "type": "paratransit",
   "federalized": true,
   "trips": 14556.0,
   "vsh": 5429.0,
   "vsm": 71677.0,
   "dataYear": "24-25",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "CSLT": 0.3333333333333333,
    "ELD": 0.3333333333333333,
    "DOU": 0.3333333333333333
   },
   "refCost": 1296028,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean Q10",
   "note": "Costs tab lists CA/NV with no local conditions. Jurisdiction shares are a placeholder that follows Route 50.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 14",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 11"
  },
  {
   "id": "LL-Z1",
   "name": "Lake Link Zone 1",
   "short": "LL Zone 1",
   "agency": "SSTMA",
   "operator": "Via",
   "group": "Lake Link",
   "stateCond": "CA/NV",
   "localCond": "Zone 1 (City of South Lake Tahoe and Douglas County)",
   "area": "urban",
   "type": "microtransit",
   "federalized": false,
   "trips": null,
   "vsh": 15667.333333333334,
   "vsm": 122107.33333333333,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "CSLT": 0.75,
    "DOU": 0.25
   },
   "refCost": 1076346,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean S10",
   "note": "Mostly City of South Lake Tahoe, partly Douglas County, per TRPA (Nov. 20, 2026). The 75 percent and 25 percent split is a placeholder until miles by jurisdiction are entered. Zone hours and miles are the funding model's example one-third split of Lake Link's 47,002 contract hours. Trips by zone are not available; Lake Link carried 223,047 trips in FY 25-26. Non-federalized per TRPA (Oct. 23, 2026).",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 16",
   "condCite": "Per TRPA (Nov. 20, 2026)"
  },
  {
   "id": "LL-Z2",
   "name": "Lake Link Zone 2",
   "short": "LL Zone 2",
   "agency": "SSTMA",
   "operator": "Via",
   "group": "Lake Link",
   "stateCond": "Nevada",
   "localCond": "Zone 2 (Douglas County)",
   "area": "urban",
   "type": "microtransit",
   "federalized": false,
   "trips": null,
   "vsh": 15667.333333333334,
   "vsm": 122107.33333333333,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "DOU": 1.0
   },
   "refCost": 1076346,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean T10",
   "note": "Douglas County, per TRPA (Nov. 20, 2026). Zone hours and miles are the funding model's example one-third split of Lake Link's 47,002 contract hours. Trips by zone are not available; Lake Link carried 223,047 trips in FY 25-26. Non-federalized per TRPA (Oct. 23, 2026).",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 17",
   "condCite": "Per TRPA (Nov. 20, 2026)"
  },
  {
   "id": "LL-Z3",
   "name": "Lake Link Zone 3",
   "short": "LL Zone 3",
   "agency": "SSTMA",
   "operator": "Via",
   "group": "Lake Link",
   "stateCond": "California",
   "localCond": "Zone 3 (City of South Lake Tahoe)",
   "area": "urban",
   "type": "microtransit",
   "federalized": false,
   "trips": null,
   "vsh": 15667.333333333334,
   "vsm": 122107.33333333333,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "CSLT": 1.0
   },
   "refCost": 1076346,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean U10",
   "note": "City of South Lake Tahoe, per TRPA (Nov. 20, 2026). Zone hours and miles are the funding model's example one-third split of Lake Link's 47,002 contract hours. Trips by zone are not available; Lake Link carried 223,047 trips in FY 25-26. Non-federalized per TRPA (Oct. 23, 2026).",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 18",
   "condCite": "Per TRPA (Nov. 20, 2026)"
  },
  {
   "id": "TART-WS",
   "name": "Main Line – West Shore",
   "short": "West Shore",
   "agency": "TART",
   "operator": "TART",
   "group": "Main Line",
   "stateCond": "California route",
   "localCond": "Placer County",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": 21205.0,
   "vsh": 4237.5,
   "vsm": 82391.09999999998,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 1
   },
   "refCost": 787455,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean V10 (Main Line cost split by service hours)",
   "note": "Main Line segment. The costs tab Main Line subtotal (row 16) is not counted again.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 19",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 13"
  },
  {
   "id": "TART-NS",
   "name": "Main Line – North Shore",
   "short": "North Shore",
   "agency": "TART",
   "operator": "TART",
   "group": "Main Line",
   "stateCond": "California route",
   "localCond": "Placer County",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": 92011.0,
   "vsh": 4983.5,
   "vsm": 113132.10000000002,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 1
   },
   "refCost": 926084,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean V10 (Main Line cost split by service hours)",
   "note": "Main Line segment.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 20",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 14"
  },
  {
   "id": "TART-NV",
   "name": "Main Line – Nevada",
   "short": "Nevada",
   "agency": "TART",
   "operator": "TART",
   "group": "Main Line",
   "stateCond": "Nevada route",
   "localCond": "Washoe County",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": 34977.0,
   "vsh": 4219.3125,
   "vsm": 63697.0,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "WAS": 1
   },
   "refCost": 784075,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean V10 (Main Line cost split by service hours)",
   "note": "Main Line segment in Washoe County; supported by Washoe RTC.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 21",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 15"
  },
  {
   "id": "89",
   "name": "Hwy 89 (Tahoe City–Truckee)",
   "short": "Hwy 89",
   "agency": "TART",
   "operator": "TART",
   "group": "TART",
   "stateCond": "California route",
   "localCond": "Placer County, Nevada County",
   "area": "mixed",
   "type": "fixed",
   "federalized": true,
   "trips": 71136.0,
   "vsh": 8331.75,
   "vsm": 167948.69999999998,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 0.5,
    "NEV": 0.5
   },
   "refCost": 1548289,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean W10",
   "note": "Urban and rural class is a placeholder: the Truckee end lies outside the Lake Tahoe UZA.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 23",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 17"
  },
  {
   "id": "267",
   "name": "Hwy 267 (Kings Beach–Truckee)",
   "short": "Hwy 267",
   "agency": "TART",
   "operator": "TART",
   "group": "TART",
   "stateCond": "California route",
   "localCond": "Placer County, Nevada County",
   "area": "mixed",
   "type": "fixed",
   "federalized": true,
   "trips": 73556.0,
   "vsh": 8420.233333333334,
   "vsm": 176999.30000000002,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 0.5,
    "NEV": 0.5
   },
   "refCost": 1564732,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean X10",
   "note": "Urban and rural class is a placeholder.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 24",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 18"
  },
  {
   "id": "NIGHT",
   "name": "Night service",
   "short": "Night",
   "agency": "TART",
   "operator": "TART",
   "group": "TART",
   "stateCond": "California route",
   "localCond": "Placer County",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": 4725.0,
   "vsh": 2985.0,
   "vsm": 57781.19999999999,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 1
   },
   "refCost": 554703,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean Y10",
   "note": "",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 25",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 19"
  },
  {
   "id": "ADA-PLA",
   "name": "TART ADA paratransit",
   "short": "ADA (TART)",
   "agency": "TART",
   "operator": "Truckee",
   "group": "TART",
   "stateCond": "California route",
   "localCond": "(none listed)",
   "area": "urban",
   "type": "paratransit",
   "federalized": true,
   "trips": 3573.0,
   "vsh": 1951.6499999999996,
   "vsm": 34749.0,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 1
   },
   "refCost": 262554,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean Z10",
   "note": "No local conditions listed; Placer County is a placeholder.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 26",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 20"
  },
  {
   "id": "TC",
   "name": "TART Connect microtransit",
   "short": "TART Connect",
   "agency": "TART",
   "operator": "Placer Via",
   "group": "TART",
   "stateCond": "California route",
   "localCond": "Placer County",
   "area": "urban",
   "type": "microtransit",
   "federalized": true,
   "trips": 157369.0,
   "vsh": 27342.510000000006,
   "vsm": 544888.7100000003,
   "dataYear": "25-26",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 1
   },
   "refCost": 2931937,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean AA10",
   "note": "",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 27",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 21"
  },
  {
   "id": "PR-W",
   "name": "Park & Ride shuttle (winter)",
   "short": "P&R winter",
   "agency": "TNTTMA",
   "operator": "MRTW",
   "group": "TNT/TMA",
   "stateCond": "California route",
   "localCond": "Placer County, Nevada County",
   "area": "mixed",
   "type": "seasonal",
   "federalized": false,
   "trips": null,
   "vsh": 2500.0,
   "vsm": null,
   "dataYear": "estimate",
   "rateOverride": null,
   "costOverride": 715386.4,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 0.5,
    "NEV": 0.5
   },
   "refCost": 715386,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean AE10",
   "note": "Annual cost is 80 percent of the TNT/TMA Park & Ride contract cost of $894,233 for both seasons (Funding Model V1G.xlsx › Per Route Model Clean AE10, Nov. 10, 2026). Service hours are the costs tab estimate (2,500 VSH). Non-federalized per TRPA (Oct. 23, 2026).",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 32",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 22"
  },
  {
   "id": "PR-S",
   "name": "Park & Ride shuttle (summer)",
   "short": "P&R summer",
   "agency": "TNTTMA",
   "operator": "MRTW",
   "group": "TNT/TMA",
   "stateCond": "California route",
   "localCond": "Placer County, Nevada County",
   "area": "mixed",
   "type": "seasonal",
   "federalized": false,
   "trips": null,
   "vsh": 500.0,
   "vsm": null,
   "dataYear": "estimate",
   "rateOverride": null,
   "costOverride": 178846.6,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 0.5,
    "NEV": 0.5
   },
   "refCost": 178847,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean AF10",
   "note": "Annual cost is 20 percent of the TNT/TMA Park & Ride contract cost of $894,233 for both seasons (Funding Model V1G.xlsx › Per Route Model Clean AF10, Nov. 10, 2026). Service hours are the costs tab estimate (500 VSH). Non-federalized per TRPA (Oct. 23, 2026).",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 33",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 23"
  },
  {
   "id": "NLTE",
   "name": "North Lake Tahoe Express (airport)",
   "short": "NLTE",
   "agency": "TNTTMA",
   "operator": "MRTW",
   "group": "TNT/TMA",
   "stateCond": "CA/NV",
   "localCond": "Placer County, Nevada County, Washoe County",
   "area": "mixed",
   "type": "airport",
   "federalized": false,
   "trips": null,
   "vsh": 1200.0,
   "vsm": null,
   "dataYear": "estimate",
   "rateOverride": null,
   "costOverride": 694260.0,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 0.3333333333333333,
    "NEV": 0.3333333333333333,
    "WAS": 0.3333333333333333
   },
   "refCost": 694260,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean AG10",
   "note": "FY 26-27 cost is $694,260 from Funding Model V1G. Assumed to be the total contract cost per TRPA (Nov. 13, 2026), pending confirmation. It works out to $578.55 per estimated service hour.",
   "cite": "Funding Model V1G.xlsx › Operating Stats row 34",
   "condCite": "Example Transit Financial Scenario Workbook.xlsx › costs row 24"
  },
  {
   "id": "VAN",
   "name": "Vanpools (TNT/TMA)",
   "short": "Vanpools",
   "agency": "TNTTMA",
   "operator": "BUDGET",
   "group": "TNT/TMA",
   "stateCond": "CA/NV",
   "localCond": "Placer County, Washoe County",
   "area": "mixed",
   "type": "vanpool",
   "federalized": false,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "26-27 budget",
   "rateOverride": null,
   "costOverride": 195800.0,
   "costSchedule": null,
   "activeYears": null,
   "include": true,
   "plan": false,
   "juris": {
    "PLA": 0.5,
    "WAS": 0.5
   },
   "refCost": 195800,
   "refCite": "Funding Model V1G.xlsx › Per Route Model Clean AH10",
   "note": "Not in the costs tab. Included because Revenue %s has a Vanpools column; cost is the TNT/TMA FY 26-27 vanpool budget. Non-federalized per TRPA (Oct. 23, 2026).",
   "cite": "Financial PlanG.xlsx › TNTTMA $ K36:K43"
  },
  {
   "id": "SP-US50",
   "name": "Replace 19X with US 50 service (4 round trips)",
   "short": "US 50 service",
   "agency": "TTD",
   "operator": "BUDGET",
   "group": "",
   "stateCond": "",
   "localCond": "",
   "area": "rural",
   "type": "fixed",
   "federalized": true,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": [
    476500.0,
    495600.0,
    514600.0,
    533700.0,
    552700.0
   ],
   "activeYears": null,
   "include": false,
   "plan": true,
   "juris": {
    "CC": 0.5,
    "DOU": 0.5
   },
   "refCost": null,
   "refCite": "",
   "note": "The financial plan adds this cost without removing Route 19X. Uncheck Route 19X to model the replacement.",
   "cite": "Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 29"
  },
  {
   "id": "SP-28",
   "name": "Seasonal Route 28 extension to Spooner Mobility Hub",
   "short": "28 to Spooner",
   "agency": "TTD",
   "operator": "BUDGET",
   "group": "",
   "stateCond": "",
   "localCond": "",
   "area": "urban",
   "type": "seasonal",
   "federalized": true,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": [
    0.0,
    137200.0,
    142400.0,
    147700.0,
    153000.0
   ],
   "activeYears": null,
   "include": false,
   "plan": true,
   "juris": {
    "WAS": 0.5,
    "DOU": 0.5
   },
   "refCost": null,
   "refCite": "",
   "note": "Jurisdiction split is a placeholder.",
   "cite": "Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 30"
  },
  {
   "id": "SP-EBS",
   "name": "Continue Emerald Bay Shuttle (Route 30) beyond the pilot",
   "short": "30 after pilot",
   "agency": "TTD",
   "operator": "BUDGET",
   "group": "",
   "stateCond": "",
   "localCond": "",
   "area": "urban",
   "type": "seasonal",
   "federalized": true,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": [
    0.0,
    0.0,
    558700.0,
    579400.0,
    600100.0
   ],
   "activeYears": null,
   "include": false,
   "plan": true,
   "juris": {
    "ELD": 1
   },
   "refCost": null,
   "refCite": "",
   "note": "",
   "cite": "Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 31"
  },
  {
   "id": "SP-MEY",
   "name": "Pilot co-mingled paratransit and microtransit to Meyers",
   "short": "Meyers pilot",
   "agency": "SSTMA",
   "operator": "BUDGET",
   "group": "",
   "stateCond": "",
   "localCond": "",
   "area": "urban",
   "type": "microtransit",
   "federalized": true,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": [
    0.0,
    357300.0,
    371000.0,
    384800.0,
    398500.0
   ],
   "activeYears": null,
   "include": false,
   "plan": true,
   "juris": {
    "ELD": 1
   },
   "refCost": null,
   "refCite": "",
   "note": "Assumes a third-party contractor at Lake Link costs (Table 2 note 4).",
   "cite": "Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 32"
  },
  {
   "id": "SP-LTCC",
   "name": "Discontinue Route 50 summer deviation to LTCC",
   "short": "50 LTCC change",
   "agency": "TTD",
   "operator": "BUDGET",
   "group": "",
   "stateCond": "",
   "localCond": "",
   "area": "urban",
   "type": "fixed",
   "federalized": true,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": [
    -10600.0,
    -11000.0,
    -11400.0,
    -11800.0,
    -12300.0
   ],
   "activeYears": null,
   "include": false,
   "plan": true,
   "juris": {
    "CSLT": 0.3333333333333333,
    "ELD": 0.3333333333333333,
    "DOU": 0.3333333333333333
   },
   "refCost": null,
   "refCite": "",
   "note": "Cost reduction.",
   "cite": "Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 33"
  },
  {
   "id": "SP-INC",
   "name": "Reinstate TART Connect in Incline Village",
   "short": "Incline Connect",
   "agency": "TART",
   "operator": "BUDGET",
   "group": "",
   "stateCond": "",
   "localCond": "",
   "area": "urban",
   "type": "microtransit",
   "federalized": true,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": [
    0.0,
    1044400.0,
    1086200.0,
    1129600.0,
    1402800.0
   ],
   "activeYears": null,
   "include": false,
   "plan": true,
   "juris": {
    "WAS": 1
   },
   "refCost": null,
   "refCite": "",
   "note": "",
   "cite": "Financial PlanG.xlsx › T5-7 TART TNTTMA FinancialPlan row 36"
  },
  {
   "id": "SP-VAN",
   "name": "Add vanpools between Reno and Truckee/North Lake Tahoe",
   "short": "More vanpools",
   "agency": "TNTTMA",
   "operator": "BUDGET",
   "group": "",
   "stateCond": "",
   "localCond": "",
   "area": "mixed",
   "type": "vanpool",
   "federalized": true,
   "trips": null,
   "vsh": null,
   "vsm": null,
   "dataYear": "",
   "rateOverride": null,
   "costOverride": null,
   "costSchedule": [
    25000.0,
    26000.0,
    0.0,
    0.0,
    0.0
   ],
   "activeYears": null,
   "include": false,
   "plan": true,
   "juris": {
    "WAS": 0.5,
    "NEV": 0.5
   },
   "refCost": null,
   "refCite": "",
   "note": "Two vans per year at $12,000 per van (TNTTMA $ J45:J46).",
   "cite": "Financial PlanG.xlsx › T5-7 TART TNTTMA FinancialPlan row 37"
  }
 ],
 "operators": [
  {
   "id": "TTD",
   "name": "TTD (directly operated)",
   "escal": 0.04,
   "basis": "FY 26-27 total operating cost per VSH, excluding the Emerald Bay Shuttle ($7,681,993 over 32,179.5 VSH, VRH Rates K36), with the higher inflation escalator agreed with TTD",
   "rate": 238.72319333737317,
   "cite": "Funding Model V1G.xlsx › Per Route Model Clean K9"
  },
  {
   "id": "Via",
   "name": "Via (SSTMA Lake Link contract)",
   "escal": 0.04,
   "basis": "SSTMA Lake Link contract costs for 2027 plus fixed admin costs",
   "rate": 68.7,
   "cite": "Funding Model V1G.xlsx › VRH Rates I9"
  },
  {
   "id": "TART",
   "name": "TART (Placer County)",
   "escal": 0.04,
   "basis": "FY 24-25 actuals cost model, Existing Conditions report, plus 4% per year",
   "rate": 185.83,
   "cite": "Funding Model V1G.xlsx › VRH Rates I14"
  },
  {
   "id": "Placer Via",
   "name": "Placer Via / Downtowner (TART Connect)",
   "escal": 0.05,
   "basis": "FY 24-25 actuals plus 5% per year, the contract escalation rate",
   "rate": 107.23,
   "cite": "Funding Model V1G.xlsx › VRH Rates I15"
  },
  {
   "id": "Truckee",
   "name": "Truckee (TART paratransit)",
   "escal": 0.04,
   "basis": "FY 24-25 actuals cost model plus 4% per year",
   "rate": 134.52932651755168,
   "cite": "Funding Model V1G.xlsx › VRH Rates I16"
  },
  {
   "id": "MRTW",
   "name": "My Ride to Work (TNT/TMA contract)",
   "escal": 0.03,
   "basis": "Park and Ride bus contract cost FY 25-26 plus 3%; costs tab uses the bus rate for all MRTW service",
   "rate": 200.9839,
   "cite": "Funding Model V1G.xlsx › VRH Rates I20"
  },
  {
   "id": "BUDGET",
   "name": "Budget amount (no hourly rate)",
   "rate": 0,
   "escal": 0.04,
   "basis": "Annual cost entered directly; escalated at the financial plan general inflation rate",
   "cite": "Financial PlanG.xlsx › T2-4 O1 (4% general escalator)"
  }
 ],
 "lines": [
  {
   "id": "ttd-5307",
   "name": "FTA 5307 formula (TTD)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FTA 5307 Urbanized Area Formula",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "fta5307",
   "amount": 1569548.0510082091,
   "prior": 2400000,
   "growth": 0.01,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.5,
   "fedShareADA": 0.8,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "areas": [
     "urban",
     "mixed"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "28": 0.033715590748,
     "50": 0.485219387717,
     "55": 0.221409003291,
     "51": 0.004903523973,
     "ADA-TTD": 0.25475249427
    }
   },
   "commitment": "formula",
   "commitNote": "Annual FTA apportionment to the Lake Tahoe UZA, split between TTD and Placer County by the earned-share worksheet.",
   "contributor": null,
   "matchText": "50% non-federal",
   "conditionText": "Can be used to cover 50% of operating costs (urban routes), 80% ADA.",
   "restrictionText": "Lake Tahoe UZA and Nevada",
   "purpose": "Urbanized area operating, capital, and transportation-related planning.",
   "grantor": "Federal Transit Administration",
   "notes": "",
   "cites": {
    "amount": "Financial PlanG.xlsx › Per Route Model D12 = FTA Allocation Split (26-27) G34 (75% of TTD earned share)",
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 3 C3, AE3",
    "restrictions": "Federal Funds, Oct. 28, 2026.pdf › FTA 5307",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 12 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 O60: 1% increase annually",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › FTA Allocation Split (26-27) G34 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 12 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 3, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-5307cmaq",
   "name": "FTA 5307, formerly CMAQ (TTD)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FTA 5307 (flexed CMAQ)",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 596121.0,
   "prior": null,
   "growth": 0.01,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.5,
   "fedShareADA": 0.8,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "areas": [
     "urban",
     "mixed"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "28": 0.033715590748,
     "50": 0.485219387717,
     "55": 0.221409003291,
     "51": 0.004903523973,
     "ADA-TTD": 0.25475249427
    }
   },
   "commitment": "formula",
   "commitNote": "Programmed annually; partner notes say more CMAQ grants are coming (Revenue %s D55).",
   "contributor": null,
   "matchText": "50% non-federal",
   "conditionText": "",
   "restrictionText": "Lake Tahoe UZA and Nevada",
   "purpose": "CMAQ funds transferred to FTA 5307 for operations.",
   "grantor": "Federal Transit Administration",
   "notes": "",
   "cites": {
    "amount": "Financial PlanG.xlsx › T2-4 Table A1 G61. Funding Model V1G.xlsx › Per Route Model Clean D12 includes the same $596,121 (=596121+2515830).",
    "match": "Financial PlanG.xlsx › Revenue %s row 4 C4",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 12 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 O61: 1% increase annually",
    "build": "FY 26-27 amount: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs G61 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 12 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 4, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-5307co",
   "name": "FTA 5307 carryover (TTD)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FTA 5307 carryover",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 946281.9489917909,
   "prior": null,
   "growth": 0,
   "lastYear": 0,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.5,
   "fedShareADA": 0.8,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "areas": [
     "urban",
     "mixed"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "28": 0.033715590748,
     "50": 0.485219387717,
     "55": 0.221409003291,
     "51": 0.004903523973,
     "ADA-TTD": 0.25475249427
    }
   },
   "commitment": "onetime",
   "commitNote": "One-time. Summary table notes the drop in 5307 funds once carryover ends in FY 27-28.",
   "contributor": null,
   "matchText": "50% non-federal",
   "conditionText": "",
   "restrictionText": "Lake Tahoe UZA and Nevada",
   "purpose": "Prior-year 5307 balance applied to operations.",
   "grantor": "Federal Transit Administration",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D12; minus ttd-5307, ttd-5307cmaq",
    "match": "Financial PlanG.xlsx › Revenue %s row 5 C5",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 12 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T1 Summary Table M32",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D12 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 12 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 5, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-5311nv",
   "name": "FTA 5311 rural (NDOT)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FTA 5311 Rural Area Formula",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 1798577.0,
   "prior": 1669792,
   "growth": 0.01,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.5,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "states": [
     "NV"
    ],
    "areas": [
     "rural",
     "mixed"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "19X": 0.339211981,
     "22": 0.660788019
    }
   },
   "commitment": "formula",
   "commitNote": "NDOT subrecipient award. Partner notes: NDOT match is 20% for admin, 40% for operating, 5% for capital (Revenue %s F64). Nevada receives $9.8 million in total FTA 5311 (Table A1 O65).",
   "contributor": null,
   "matchText": "50% non-federal",
   "conditionText": "Can only be applied to rural routes (19x and 22)",
   "restrictionText": "Nevada only; rural component",
   "purpose": "Rural operating, capital, and planning assistance.",
   "grantor": "FTA through Nevada DOT",
   "notes": "TRPA (Oct. 23, 2026): use a 50 percent non-federal match for now; change later if NDOT confirms the 40 percent operating rate in the partner notes.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D13",
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 6 B6, C6",
    "restrictions": "Federal Funds, Oct. 28, 2026.pdf › FTA 5311 (NV DOT)",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 13 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 O65: 1% increase yearly",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D13 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 13 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 6, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-5310",
   "name": "FTA 5310 seniors and disabilities (TTD)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FTA 5310",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 0.0,
   "prior": 27000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    76000.0,
    0.0,
    78300.0,
    0.0
   ],
   "fedShare": 0.8,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "types": [
     "paratransit"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "ADA-TTD": 1.0
    }
   },
   "commitment": "formula",
   "commitNote": "Alternates with Placer County: the FY 26-27 apportionment goes to Placer (FTA Allocation Split J35); TTD in FY 27-28 and FY 29-30.",
   "contributor": null,
   "matchText": "20% non-federal",
   "conditionText": "Can only be applied to ADA routes",
   "restrictionText": "ADA services and capital only",
   "purpose": "Urbanized area funding to meet the needs of older adults and people with disabilities.",
   "grantor": "Federal Transit Administration",
   "notes": "Federal share set to 80 percent per TRPA (Oct. 23, 2026): 5310 might require a 20 percent non-federal match; confirm with FTA. Revenue %s row 8 lists 50 percent.",
   "cites": {
    "amount": "Financial PlanG.xlsx › T2-4 Table A1 G63:K63; Financial PlanG.xlsx › Per Route Model D17",
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 8 B8, C8",
    "restrictions": "Federal Funds, Oct. 28, 2026.pdf › FTA 5310",
    "alloc": "Financial PlanG.xlsx › Revenue %s row 8",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 H63, J63",
    "build": "FY 26-27 amount: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs G63 | Year values: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 63 (H, I, J, K) | Shares: Financial PlanG.xlsx › Revenue %s row 8 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 8, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-5310co",
   "name": "FTA 5310 carryover (TTD)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FTA 5310 carryover",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 30277.0,
   "prior": null,
   "growth": 0,
   "lastYear": 0,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.8,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "types": [
     "paratransit"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "ADA-TTD": 1.0
    }
   },
   "commitment": "onetime",
   "commitNote": "",
   "contributor": null,
   "matchText": "20% non-federal",
   "conditionText": "Can only be applied to ADA routes",
   "restrictionText": "ADA services and capital only",
   "purpose": "",
   "grantor": "Federal Transit Administration",
   "notes": "Federal share set to 80 percent per TRPA (Oct. 23, 2026): 5310 might require a 20 percent non-federal match; confirm with FTA. Revenue %s row 8 lists 50 percent.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D15",
    "match": "Financial PlanG.xlsx › Revenue %s row 9",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 15 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D15 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 15 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 9, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-ltf",
   "name": "TDA Local Transportation Fund (TTD)",
   "level": "state",
   "recipient": "TTD",
   "program": "TDA LTF, TRPA apportionment",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 1263326.0,
   "prior": 1200000,
   "growth": 0.00025,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "19X": 0.116046049938,
     "22": 0.226049452013,
     "28": 0.00037902423,
     "50": 0.354211289698,
     "55": 0.169283678807,
     "51": 0.011628129524,
     "ADA-TTD": 0.12240237579
    }
   },
   "commitment": "formula",
   "commitNote": "TRPA apportionment; no change assumed in the TRPA TDA split (Table A1 note 2). TTD applies one-third to rural and two-thirds to urban routes (Revenue %s AE10). Per TRPA (Nov. 20, 2026), the TRPA TDA split stays the same.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA and NV (operations only)",
   "purpose": "Operating, capital, and planning funds from a quarter-cent of the general sales tax collected in California.",
   "grantor": "State of California (sales tax), apportioned by TRPA",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D16",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 10 B10, C10",
    "restrictions": "State Funds, Oct. 28, 2026.pdf › Local Transportation Funds (LTF)",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 16 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 note 2: RTP projected population change, 0.025% per year",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D16 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 16 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 10, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-sta",
   "name": "TDA State Transit Assistance (TTD)",
   "level": "state",
   "recipient": "TTD",
   "program": "TDA STA, TRPA apportionment",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 581801.0,
   "prior": 400000,
   "growth": 0.00025,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "19X": 0.116046049938,
     "22": 0.226049452013,
     "28": 0.00037902423,
     "50": 0.354211289698,
     "55": 0.169283678807,
     "51": 0.011628129524,
     "ADA-TTD": 0.12240237579
    }
   },
   "commitment": "formula",
   "commitNote": "Per TRPA (Nov. 20, 2026), the TRPA TDA split stays the same.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA and NV (operations only)",
   "purpose": "Transit purposes only.",
   "grantor": "State of California (fuel sales tax), apportioned by TRPA",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D18",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 12",
    "restrictions": "State Funds, Oct. 28, 2026.pdf › State Transportation Assistance (STA)",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 18 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 note 2",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D18 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 18 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 12, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-lctop",
   "name": "Low Carbon Transit Operations Program (TTD)",
   "level": "state",
   "recipient": "TTD",
   "program": "LCTOP",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 265506.0,
   "prior": 0,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    0.0,
    265500.0,
    0.0,
    265500.0
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "states": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "19X": 0.069932721142,
     "22": 0.137031339828,
     "28": 0.037063969297,
     "50": 0.292689445144,
     "55": 0.289382992278,
     "51": 0.005189639367,
     "ADA-TTD": 0.168709892944
    }
   },
   "commitment": "formula",
   "commitNote": "TTD receives LCTOP every other year; it alternates with TART based on ridership (Revenue %s D67). Confirmed by TRPA (Nov. 20, 2026).",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA only",
   "purpose": "Operating and capital assistance to reduce greenhouse gas emissions and improve mobility.",
   "grantor": "State of California (5% of cap-and-trade proceeds)",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D21",
    "prior": "State Funds, Oct. 28, 2026.pdf › LCTOP (used for capital, FY 25-26)",
    "match": "Financial PlanG.xlsx › Revenue %s row 15",
    "restrictions": "State Funds, Oct. 28, 2026.pdf › LCTOP: \"CA only\"",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 21 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 O73: TTD gets every other year",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D21 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 21 | Year values: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 73 (H, I, J, K) | Conditions and match: Financial PlanG.xlsx › Revenue %s row 15, columns B and C"
   },
   "user": false
  },
  {
   "id": "tart-lctop",
   "name": "Low Carbon Transit Operations Program (TART)",
   "level": "state",
   "recipient": "TART",
   "program": "LCTOP",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 0,
   "prior": 0,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    265500.0,
    0.0,
    265500.0,
    0.0
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "states": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "auto",
    "basis": "vsh"
   },
   "commitment": "formula",
   "commitNote": "TART receives LCTOP in the years TTD does not; the two alternate based on ridership (Revenue %s D67), confirmed by TRPA (Nov. 20, 2026). Placeholder amount, to be verified.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA only",
   "purpose": "Operating and capital assistance to reduce greenhouse gas emissions and improve mobility.",
   "grantor": "State of California (5% of cap-and-trade proceeds)",
   "notes": "Added Nov. 20, 2026. No workbook gives TART's LCTOP amount, so it uses TTD's amount ($265,500) in FY 27-28 and FY 29-30 as a placeholder. Shares follow TART service hours.",
   "cites": {
    "amount": "Placeholder: TTD's LCTOP amount in its years (Financial PlanG.xlsx › T2-4 Table A1 row 73), pending TART's figure",
    "projection": "Alternates with TTD every other year, per TRPA (Nov. 20, 2026)"
   },
   "user": false
  },
  {
   "id": "ttd-elec",
   "name": "Electrification credits (TTD)",
   "level": "state",
   "recipient": "TTD",
   "program": "Electrification credits",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 8000.0,
   "prior": 8000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": true,
   "rules": {},
   "alloc": {
    "mode": "manual",
    "pct": {
     "19X": 0.114170917172,
     "22": 0.225059336468,
     "28": 0.030768177311,
     "50": 0.306914291528,
     "55": 0.170251735377,
     "51": 0.021536572704,
     "ADA-TTD": 0.131298969441
    }
   },
   "commitment": "earned",
   "commitNote": "",
   "contributor": null,
   "matchText": "Not real money only used as match for other sources",
   "conditionText": "Not real money",
   "restrictionText": "–",
   "purpose": "Reimbursement for electrification credits earned through use of the electric fleet.",
   "grantor": "State of California",
   "notes": "Counted toward local match only, not toward funding the cost, per the Revenue %s notes. The State Funds fact sheet lists $8,000 budgeted for TTD operations; switch off \"Match-only credit\" to count it as cash.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D22",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 16 B16, C16",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 22 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D22 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 22 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 16, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-sb125",
   "name": "SB 125 operating (TTD)",
   "level": "state",
   "recipient": "TTD",
   "program": "SB 125",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 500000.0,
   "prior": 1000000,
   "growth": 0,
   "lastYear": 0,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "50": 0.52584056,
     "55": 0.42491482,
     "51": 0.04924462
    }
   },
   "commitment": "onetime",
   "commitNote": "Table A1 assumes no SB 125 after FY 26-27.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "Existing STA recipients only",
   "purpose": "Operating, capital, and planning.",
   "grantor": "State of California",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D23",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 17",
    "restrictions": "State Funds, Oct. 28, 2026.pdf › SB 125 Operating",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 23 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 H75:K75 = 0",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D23 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 23 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 17, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-nvparks",
   "name": "Nevada State Parks (Route 28)",
   "level": "state",
   "recipient": "TTD",
   "program": "Nevada State Parks",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 85000.0,
   "prior": 85000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "28"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "28": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "Only applied to Route 28",
   "restrictionText": "East Shore Express",
   "purpose": "Operating, capital, and administrative support for the East Shore Express.",
   "grantor": "State of Nevada",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D24",
    "prior": "Local Funds 2 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 18",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Nevada State Parks",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 24 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 note 4: no annual change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D24 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 24 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 18, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-nvstate",
   "name": "Nevada State allocation to TTD general fund",
   "level": "state",
   "recipient": "TTD",
   "program": "Nevada State",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 0,
   "prior": 346500,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "states": [
     "NV"
    ]
   },
   "alloc": {
    "mode": "auto",
    "basis": "vsh"
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "NV",
   "purpose": "Budget allocation to TTD general fund.",
   "grantor": "FTA, State of Nevada",
   "notes": "On the State Funds fact sheet for FY 25-26 but not in the FY 26-27 financial plan. Enter an amount if it is still expected.",
   "cites": {
    "amount": "Not in Financial PlanG FY 26-27 tables",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "State Funds, Oct. 28, 2026.pdf › Nevada State"
   },
   "user": false
  },
  {
   "id": "ttd-localapp",
   "name": "Local appropriation (Douglas, Washoe, Placer, Carson City)",
   "level": "local",
   "recipient": "TTD",
   "program": "Local appropriation",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 0.0,
   "prior": 232235,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {},
   "alloc": {
    "mode": "auto",
    "basis": "vsh"
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Planning and administrative support",
   "purpose": "TTD general fund planning and administration.",
   "grantor": "Douglas, Washoe, Placer, Carson City",
   "notes": "Not in Funding Model V1G, so FY 26-27 is $0 per TRPA (Nov. 13, 2026). The FY 25-26 fact sheet amount was $232,235. Planning and administration funds stay in scope per TRPA (Oct. 23, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean (not listed); FY 25-26 amount from Local Funds 1 of 3, Oct. 28, 2026.pdf",
    "prior": "Local Funds 1 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › Local Appropriation"
   },
   "user": false
  },
  {
   "id": "ttd-tdva",
   "name": "Tahoe Douglas Visitor Authority",
   "level": "local",
   "recipient": "TTD",
   "program": "TDVA contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 120000.0,
   "prior": 65000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "NV"
    ],
    "preferRoutes": [
     "51"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "51": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "Ideally applied only to NV routes",
   "restrictionText": "TTD expanded operations (Route 51)",
   "purpose": "Budget contribution for expanded operations (Route 51).",
   "grantor": "Tahoe Douglas Visitor Authority",
   "notes": "Per Route Model row 28 multiplies the Nevada State Parks amount ($85,000) instead of the TDVA amount ($120,000).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D25",
    "prior": "Local Funds 2 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 19",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Tahoe Douglas Visitor Authority",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 25 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 note 4",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D25 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 25 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 19, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-interest",
   "name": "Interest revenue (TTD)",
   "level": "other",
   "recipient": "TTD",
   "program": "Interest",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 18000.0,
   "prior": null,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {},
   "alloc": {
    "mode": "manual",
    "pct": {
     "19X": 0.069932721142,
     "22": 0.137031339828,
     "28": 0.037063969297,
     "50": 0.292689445144,
     "55": 0.289382992278,
     "51": 0.005189639367,
     "ADA-TTD": 0.168709892944
    }
   },
   "commitment": "earned",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "TTD",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D26",
    "match": "Financial PlanG.xlsx › Revenue %s row 20",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 26 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 note 4",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D26 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 26 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 20, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-ktb",
   "name": "Keep Tahoe Blue (Emerald Bay Shuttle)",
   "level": "private",
   "recipient": "TTD",
   "program": "Emerald Bay Shuttle pilot",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 8322.0,
   "prior": null,
   "growth": 0,
   "lastYear": 1,
   "cap": null,
   "overrides": [
    null,
    29678.0,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "30"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "30": 1.0
    }
   },
   "commitment": "onetime",
   "commitNote": "Total allocated through FY 27-28: $38,000. Per TRPA (Nov. 20, 2026), pilot funds cover two years, summer 2026 and summer 2027 service, and do not extend beyond that.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "League to Save Lake Tahoe (Keep Tahoe Blue)",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D27",
    "match": "Financial PlanG.xlsx › Revenue %s row 21",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 27 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D27 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 27 | Year values: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 79 (H) | Conditions and match: Financial PlanG.xlsx › Revenue %s row 21, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-crp",
   "name": "Carbon Reduction Program (Emerald Bay Shuttle)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FHWA Carbon Reduction Program",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 271910.0,
   "prior": null,
   "growth": 0,
   "lastYear": 1,
   "cap": null,
   "overrides": [
    null,
    537090.0,
    null,
    null,
    null
   ],
   "fedShare": 0.8853,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "30"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "30": 1.0
    }
   },
   "commitment": "onetime",
   "commitNote": "Total allocated through FY 27-28: $809,000. Per TRPA (Nov. 20, 2026), pilot funds cover two years, summer 2026 and summer 2027 service, and do not extend beyond that.",
   "contributor": null,
   "matchText": "11.47% non-federal",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Federal Highway Administration",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D28",
    "match": "Financial PlanG.xlsx › Revenue %s row 22 C22",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 28 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D28 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 28 | Year values: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 80 (H) | Conditions and match: Financial PlanG.xlsx › Revenue %s row 22, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-eldebs",
   "name": "El Dorado County (Emerald Bay Shuttle)",
   "level": "local",
   "recipient": "TTD",
   "program": "Emerald Bay Shuttle pilot",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 331240.0,
   "prior": null,
   "growth": 0,
   "lastYear": 1,
   "cap": null,
   "overrides": [
    null,
    100155.0,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "30"
    ],
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "30": 1.0
    }
   },
   "commitment": "onetime",
   "commitNote": "Total allocated through FY 27-28: $431,395. Per TRPA (Nov. 20, 2026), pilot funds cover two years, summer 2026 and summer 2027 service, and do not extend beyond that.",
   "contributor": "ELD",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in CA",
   "restrictionText": "",
   "purpose": "",
   "grantor": "El Dorado County (AQMD, VMT Reduction Fund)",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D29",
    "match": "Financial PlanG.xlsx › Revenue %s row 23 B23",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 29 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D29 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 29 | Year values: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 81 (H) | Conditions and match: Financial PlanG.xlsx › Revenue %s row 23, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-plaebs",
   "name": "Placer County (Emerald Bay Shuttle)",
   "level": "local",
   "recipient": "TTD",
   "program": "Emerald Bay Shuttle pilot",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 8324.0,
   "prior": null,
   "growth": 0,
   "lastYear": 1,
   "cap": null,
   "overrides": [
    null,
    29676.0,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "30"
    ],
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "30": 1.0
    }
   },
   "commitment": "onetime",
   "commitNote": "Total allocated through FY 27-28: $38,000. Per TRPA (Nov. 20, 2026), pilot funds cover two years, summer 2026 and summer 2027 service, and do not extend beyond that.",
   "contributor": "PLA",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in CA",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Placer County",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean D30",
    "match": "Financial PlanG.xlsx › Revenue %s row 24",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 30 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean D30 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 30 | Year values: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 82 (H) | Conditions and match: Financial PlanG.xlsx › Revenue %s row 24, columns B and C"
   },
   "user": false
  },
  {
   "id": "ttd-fares30",
   "name": "Emerald Bay Shuttle fares",
   "level": "fare",
   "recipient": "TTD",
   "program": "Passenger fares",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 25000.0,
   "prior": null,
   "growth": 0.02,
   "lastYear": 1,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": false,
   "matchOnly": false,
   "rules": {
    "routes": [
     "30"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "30": 1
    }
   },
   "commitment": "earned",
   "commitNote": "",
   "contributor": null,
   "matchText": "",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Riders ($5 one-way)",
   "notes": "FY 26-27 fares are TTD's board-approved FY 2027 farebox budget of $25,000 for the Emerald Bay Shuttle, per TRPA (Nov. 24, 2026). Source: TTD July to August 2026 statement of operations (TTD Finance Committee packet, Nov. 4, 2026), which shows $12,740 collected in July 2026. August fares were not yet booked. Funding Model V1G shows $0 (Fare Revenue, D51). Route 30 charges $5 one way (Fare Rates tab).",
   "cites": {
    "amount": "TTD Finance and Personnel Committee meeting packet, November 4, 2026 › Attachment A, Transit Fund statement of operations, FareBox Revenue budget",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 G135: 2% base ridership growth",
    "build": "FY 26-27 amount: TTD Finance and Personnel Committee meeting packet, November 4, 2026 › Attachment A, Transit Fund statement of operations, FareBox Revenue budget"
   },
   "user": false
  },
  {
   "id": "ttd-5339",
   "name": "FTA 5339 bus and facilities (TTD)",
   "level": "federal",
   "recipient": "TTD",
   "program": "FTA 5339 (Lake Tahoe UZA and NV DOT)",
   "enabled": true,
   "status": "capital",
   "amountMode": "manual",
   "amount": 0,
   "prior": 0,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.8,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {},
   "alloc": {
    "mode": "manual",
    "pct": {}
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "Yes (capital)",
   "conditionText": "",
   "restrictionText": "Lake Tahoe UZA and Nevada; Nevada facilities, bi-state fleet OK",
   "purpose": "Capital funds to replace, rehabilitate, and purchase buses and equipment, and to build bus facilities.",
   "grantor": "FTA; Nevada DOT",
   "notes": "Capital program, outside this operating model. FY 26-27 example UZA split: TTD $197,361 (FTA Allocation Split I34).",
   "cites": {
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "amount": "Financial PlanG.xlsx › FTA Allocation Split (26-27) I34"
   },
   "user": false
  },
  {
   "id": "ll-sb125",
   "name": "SB 125 operating (Lake Link)",
   "level": "state",
   "recipient": "SSTMA",
   "program": "SB 125",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 750000.0,
   "prior": 750000,
   "growth": 0,
   "lastYear": 0,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ],
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.333333333333,
     "LL-Z2": 0.333333333333,
     "LL-Z3": 0.333333333333
    }
   },
   "commitment": "onetime",
   "commitNote": "Assumes an SB 125 allocation in FY 26-27 only (Table A1 O85).",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Existing STA recipients only",
   "purpose": "",
   "grantor": "State of California",
   "notes": "Not allocated to Lake Link zones on Revenue %s; applied to Lake Link here.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F23",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F85",
    "restrictions": "State Funds, Oct. 28, 2026.pdf › SB 125 Operating",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F23 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 23",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 23 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "ll-douglas",
   "name": "Douglas County (Lake Link)",
   "level": "local",
   "recipient": "SSTMA",
   "program": "Lake Link funding agreement",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 750000.0,
   "prior": 650000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    850000.0,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ],
    "jurisdiction": "DOU"
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "agreement",
   "commitNote": "Written agreement; one of only two written Lake Link contracts (Per Route Model D88). Table A1 note 6 assumes support at existing levels beyond the end of current agreements. Per TRPA (Nov. 20, 2026), the agreement does not renew or escalate on its own.",
   "contributor": "DOU",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in Douglas County",
   "restrictionText": "Lake Link in Douglas County",
   "purpose": "Contribution for Lake Link operations in Douglas County.",
   "grantor": "Douglas County (TLRT)",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F41",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F86",
    "match": "Financial PlanG.xlsx › Revenue %s row 34",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Douglas County",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 41 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F41 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 41 | Year values: Financial PlanG.xlsx › T2-4 A1 TTD LL Costs row 86 (H) | Conditions and match: Financial PlanG.xlsx › Revenue %s row 34, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-cslt",
   "name": "City of South Lake Tahoe (Lake Link)",
   "level": "local",
   "recipient": "SSTMA",
   "program": "Lake Link funding agreement",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 1100000.0,
   "prior": 850000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ],
    "jurisdiction": "CSLT"
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "agreement",
   "commitNote": "Written agreement (Per Route Model D88). Table A1 note 6 assumes support at existing levels beyond current agreements. Per TRPA (Nov. 20, 2026), the agreement does not renew or escalate on its own.",
   "contributor": "CSLT",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in the City of South Lake Tahoe",
   "restrictionText": "Lake Link in City of SLT",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "City of South Lake Tahoe",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F42",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F87",
    "match": "Financial PlanG.xlsx › Revenue %s row 35",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › City of South Lake Tahoe",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 42 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F42 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 42 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 35, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-tahoeblue",
   "name": "Tahoe Blue Events Center mitigation fee",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Transportation mitigation fee",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 687724.0,
   "prior": 613053,
   "growth": 0.06,
   "lastYear": null,
   "cap": 750000,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "agreement",
   "commitNote": "Assumes the $3 surcharge goes to transit and no increase in the annual attendee cap (Table A1 note 7).",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations in Stateline and South Lake Tahoe from a transportation mitigation fee on event tickets.",
   "grantor": "Ticket surcharge, Tahoe Blue Events Center",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F43",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F88",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Tahoe Blue Events Center Mitigation Fee",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 43 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T2-4 Table A1 H88: 6% per year, capped at $750,000",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F43 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 43 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 36, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-slttid",
   "name": "South Lake Tahoe Tourism Improvement District",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Lake Link partner contribution",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 25000.0,
   "prior": 25000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "none",
   "commitNote": "Listed in the FY 26-27 route model; no written commitment on file.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "South Lake Tahoe Tourism Improvement District",
   "notes": "FY 26-27 amount from Funding Model V1G per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F44",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F89; Local Funds 3 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 3 of 3, Oct. 28, 2026.pdf › South Lake Tahoe Tourism Improvement District",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 44 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F44 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 44 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 37, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-heavenly",
   "name": "Heavenly",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Lake Link partner contribution",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 15000.0,
   "prior": 15000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "none",
   "commitNote": "Listed in the FY 26-27 route model; no written commitment on file.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "Heavenly",
   "notes": "FY 26-27 amount from Funding Model V1G per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F45",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F90; Local Funds 3 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 3 of 3, Oct. 28, 2026.pdf › Heavenly",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 45 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F45 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 45 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 38, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-caesars",
   "name": "Caesars Entertainment",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Lake Link partner contribution",
   "enabled": false,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 70000.0,
   "prior": 65000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "none",
   "commitNote": "Listed in the FY 26-27 route model; no written commitment on file.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "Caesars Entertainment",
   "notes": "Left out of the model per TRPA (Nov. 13, 2026). These partner funds pay for the Lake Link special summer service, not regular microtransit. Turn this source on to model the Round Hill summer service. FY 26-27 amount from Funding Model V1G.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F46",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F91; Local Funds 3 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 3 of 3, Oct. 28, 2026.pdf › Caesars Entertainment",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 46 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F46 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 46 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 39, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-roundhill",
   "name": "Round Hill Pines Resort",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Lake Link partner contribution",
   "enabled": false,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 30000.0,
   "prior": 85000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "none",
   "commitNote": "Listed in the FY 26-27 route model; no written commitment on file.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "Round Hill Pines Resort",
   "notes": "Left out of the model per TRPA (Nov. 13, 2026). These partner funds pay for the Lake Link special summer service, not regular microtransit. Turn this source on to model the Round Hill summer service. FY 26-27 amount from Funding Model V1G.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F47",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F92; Local Funds 3 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 3 of 3, Oct. 28, 2026.pdf › Round Hill Pines Resort",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 47 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F47 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 47 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 40, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-advlearn",
   "name": "Advance Learning",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Lake Link partner contribution",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 25000.0,
   "prior": 25000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "none",
   "commitNote": "Listed in the FY 26-27 route model; no written commitment on file.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "Advance Learning",
   "notes": "FY 26-27 amount from Funding Model V1G per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F48",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F93; Local Funds 3 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 3 of 3, Oct. 28, 2026.pdf › Advance Learning",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 48 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F48 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 48 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 41, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-ltva",
   "name": "Lake Tahoe Visitors Authority",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Lake Link partner contribution",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 61700.0,
   "prior": 62100,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "none",
   "commitNote": "Listed in the FY 26-27 route model; no written commitment on file.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "Lake Tahoe Visitors Authority",
   "notes": "FY 26-27 amount from Funding Model V1G per TRPA (Nov. 13, 2026). Separate from the Tahoe Blue Events Center mitigation fee per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F49",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F94; Local Funds 2 of 3, Oct. 28, 2026.pdf › Tahoe Blue Events Center Mitigation Fee",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Tahoe Blue Events Center Mitigation Fee",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 49 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F49 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 49 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 42, columns B and C"
   },
   "user": false
  },
  {
   "id": "ll-ltcc",
   "name": "Lake Tahoe Community College",
   "level": "private",
   "recipient": "SSTMA",
   "program": "Lake Link partner contribution",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 25000.0,
   "prior": 25000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "LL-Z1",
     "LL-Z2",
     "LL-Z3"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "LL-Z1": 0.5,
     "LL-Z2": 0.25,
     "LL-Z3": 0.25
    }
   },
   "commitment": "none",
   "commitNote": "Listed in the FY 26-27 route model; no written commitment on file.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Lake Link Service",
   "purpose": "Contribution for Lake Link operations.",
   "grantor": "Lake Tahoe Community College",
   "notes": "FY 26-27 amount from Funding Model V1G per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean F50",
    "prior": "Financial PlanG.xlsx › T2-4 Table A1 F95; Local Funds 3 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 3 of 3, Oct. 28, 2026.pdf › Lake Tahoe Community College",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 50 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean F50 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 50 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 43, columns B and C"
   },
   "user": false
  },
  {
   "id": "tart-5307",
   "name": "FTA 5307 formula (TART)",
   "level": "federal",
   "recipient": "TART",
   "program": "FTA 5307 Urbanized Area Formula",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 2660000.0,
   "prior": 2500000,
   "growth": 0.01,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.5,
   "fedShareADA": 0.8,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "areas": [
     "urban",
     "mixed"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-WS": 0.120627018531,
     "TART-NS": 0.141863067103,
     "TART-NV": 0.120109283097,
     "89": 0.237176203338,
     "267": 0.23969501884,
     "NIGHT": 0.084972660841,
     "ADA-PLA": 0.055556748251
    }
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "50% non-federal",
   "conditionText": "",
   "restrictionText": "Lake Tahoe UZA and Nevada",
   "purpose": "Urbanized area operating, capital, and transportation-related planning.",
   "grantor": "Federal Transit Administration",
   "notes": "Set to TART's own plan amount per TRPA (Oct. 23, 2026): TART receives additional 5307 directed through PCTPA, so the UZA earned-share split ($1,653,136) understates it. No longer follows the FTA sub-allocation worksheet.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E12",
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 3",
    "restrictions": "Federal Funds, Oct. 28, 2026.pdf › FTA 5307",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 12 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 O59: 1% increase yearly",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E12 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 12 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 3, columns B and C"
   },
   "user": false
  },
  {
   "id": "tart-5310",
   "name": "FTA 5310 seniors and disabilities (TART)",
   "level": "federal",
   "recipient": "TART",
   "program": "FTA 5310",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 0.0,
   "prior": 0,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    0.0,
    77000.0,
    0.0,
    79100.0
   ],
   "fedShare": 0.8,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "types": [
     "paratransit"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "ADA-PLA": 1
    }
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "20% non-federal",
   "conditionText": "Can only be applied to ADA routes",
   "restrictionText": "ADA services and capital only",
   "purpose": "",
   "grantor": "Federal Transit Administration",
   "notes": "Funding Model V1G gives the FY 26-27 5310 money to TTD ($30,277) and $0 to TART, so the model uses $0 for TART in FY 26-27 per TRPA (Nov. 13, 2026). The alternation with TTD in later years still follows the financial plan. Federal share set to 80 percent per TRPA (Oct. 23, 2026); confirm with FTA.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E15",
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 8",
    "restrictions": "Federal Funds, Oct. 28, 2026.pdf › FTA 5310",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E15 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 8, columns B and C",
    "projection": "Alternation per TRPA (Oct. 23, 2026); FY 28-29 and FY 30-31 estimated at ~1% growth (Financial PlanG.xlsx › T2-4 O2 FTA rule)"
   },
   "user": false
  },
  {
   "id": "tart-5311ca",
   "name": "FTA 5311 rural (Caltrans)",
   "level": "federal",
   "recipient": "TART",
   "program": "FTA 5311 Rural Area Formula",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 290000.0,
   "prior": 450000,
   "growth": 0.01,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.5,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "states": [
     "CA"
    ],
    "areas": [
     "rural",
     "mixed"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "89": 0.490566037736,
     "267": 0.377358490566,
     "NIGHT": 0.132075471698
    }
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "50% non-federal",
   "conditionText": "Can only be applied to rural routes",
   "restrictionText": "California only; rural component",
   "purpose": "Rural operating, capital, and planning assistance.",
   "grantor": "FTA through Caltrans",
   "notes": "Not allocated on Revenue %s. Placeholder: split by service hours among eligible TART routes.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E14",
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 7 B7, C7",
    "restrictions": "Federal Funds, Oct. 28, 2026.pdf › FTA 5311 (Cal Trans)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 1% increase yearly",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E14 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 14 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 7, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 14 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-ltf-trpa",
   "name": "TDA LTF, TRPA apportionment (TART)",
   "level": "state",
   "recipient": "TART",
   "program": "TDA Local Transportation Fund",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 913053.0,
   "prior": null,
   "growth": 0.00025,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-WS": 0.120627018531,
     "TART-NS": 0.141863067103,
     "TART-NV": 0.120109283097,
     "89": 0.237176203338,
     "267": 0.23969501884,
     "NIGHT": 0.084972660841,
     "ADA-PLA": 0.055556748251
    }
   },
   "commitment": "formula",
   "commitNote": "Per TRPA (Nov. 20, 2026), the TRPA TDA split stays the same.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA and NV (operations only)",
   "purpose": "",
   "grantor": "State of California, apportioned by TRPA",
   "notes": "Fact sheet FY 25-26 TART totals: LTF $2,023,819 and STA $1,110,118 (TRPA and PCTPA combined). Not allocated on Revenue %s; placeholder split by service hours on TART fixed routes and paratransit in California.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E16",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 11",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 note 2: population change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E16 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 16 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 10, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 16 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-ltf-pctpa",
   "name": "TDA LTF, PCTPA apportionment (TART)",
   "level": "state",
   "recipient": "TART",
   "program": "TDA Local Transportation Fund",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 1675000.0,
   "prior": null,
   "growth": 0.00025,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "89": 0.490566037736,
     "267": 0.377358490566,
     "NIGHT": 0.132075471698
    }
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA and NV (operations only)",
   "purpose": "",
   "grantor": "State of California, apportioned by PCTPA",
   "notes": "Fact sheet FY 25-26 TART totals: LTF $2,023,819 and STA $1,110,118 (TRPA and PCTPA combined). Not allocated on Revenue %s; placeholder split by service hours on TART fixed routes and paratransit in California.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E17",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 11",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 note 2: population change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E17 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 17 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 11, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 17 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-sta-trpa",
   "name": "TDA STA, TRPA apportionment (TART)",
   "level": "state",
   "recipient": "TART",
   "program": "TDA State Transit Assistance",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 510729.0,
   "prior": null,
   "growth": 0.00025,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-WS": 0.120627018531,
     "TART-NS": 0.141863067103,
     "TART-NV": 0.120109283097,
     "89": 0.237176203338,
     "267": 0.23969501884,
     "NIGHT": 0.084972660841,
     "ADA-PLA": 0.055556748251
    }
   },
   "commitment": "formula",
   "commitNote": "Per TRPA (Nov. 20, 2026), the TRPA TDA split stays the same.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA and NV (operations only)",
   "purpose": "",
   "grantor": "State of California, apportioned by TRPA",
   "notes": "Fact sheet FY 25-26 TART totals: LTF $2,023,819 and STA $1,110,118 (TRPA and PCTPA combined). Not allocated on Revenue %s; placeholder split by service hours on TART fixed routes and paratransit in California.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E18",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 13",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 note 2: population change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E18 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 18 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 12, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 18 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-sta-pctpa",
   "name": "TDA STA, PCTPA apportionment (TART)",
   "level": "state",
   "recipient": "TART",
   "program": "TDA State Transit Assistance",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 308898.0,
   "prior": null,
   "growth": 0.00025,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "89": 0.490566037736,
     "267": 0.377358490566,
     "NIGHT": 0.132075471698
    }
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "CA and NV (operations only)",
   "purpose": "",
   "grantor": "State of California, apportioned by PCTPA",
   "notes": "Fact sheet FY 25-26 TART totals: LTF $2,023,819 and STA $1,110,118 (TRPA and PCTPA combined). Not allocated on Revenue %s; placeholder split by service hours on TART fixed routes and paratransit in California.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E19",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 13",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 note 2: population change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E19 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 19 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 13, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 19 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-sgr",
   "name": "State of Good Repair (TART)",
   "level": "state",
   "recipient": "TART",
   "program": "SGR",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 100084.0,
   "prior": 102929,
   "growth": 0.00025,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferStates": [
     "CA"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-WS": 0.120627018531,
     "TART-NS": 0.141863067103,
     "TART-NV": 0.120109283097,
     "89": 0.237176203338,
     "267": 0.23969501884,
     "NIGHT": 0.084972660841,
     "ADA-PLA": 0.055556748251
    }
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "California funding ideally used in CA, but can be used as federal match",
   "restrictionText": "Eligible transit maintenance and match for capital projects",
   "purpose": "Transit infrastructure repair and service improvements.",
   "grantor": "State of California (gas tax and vehicle fees)",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E20",
    "prior": "State Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 14",
    "restrictions": "State Funds, Oct. 28, 2026.pdf › State of Good Repair (SGR)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E20 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 20 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 14, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 20 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-tot-tc",
   "name": "Placer County TOT – TART Connect",
   "level": "local",
   "recipient": "TART",
   "program": "Transient occupancy tax",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 2932112.0,
   "prior": null,
   "growth": 0.04,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "TC"
    ],
    "preferJurisdiction": "PLA"
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TC": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "PLA",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in Placer County",
   "restrictionText": "Various usage restrictions based on funding subcategory",
   "purpose": "Budget contribution for TART Connect.",
   "grantor": "Placer County",
   "notes": "Funding Model V1G assumes Placer County TOT pays all of TART Connect ($2,932,112).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean row 34, AA, AB, AC, AD",
    "match": "Financial PlanG.xlsx › Revenue %s row 28",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › Placer County (Transient Occupancy Tax)",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 34 (FY 26-27 route allocations)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 O68: 4% annually with inflation",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean row 34, AA, AB, AC, AD | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 34 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 28, columns B and C"
   },
   "user": false
  },
  {
   "id": "tart-tot-fr",
   "name": "Placer County TOT – TART fixed route and paratransit",
   "level": "local",
   "recipient": "TART",
   "program": "Transient occupancy tax",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 2415288.0,
   "prior": 2563510,
   "growth": 0.04,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "preferJurisdiction": "PLA"
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-WS": 0.120627018531,
     "TART-NS": 0.141863067103,
     "TART-NV": 0.120109283097,
     "89": 0.237176203338,
     "267": 0.23969501884,
     "NIGHT": 0.084972660841,
     "ADA-PLA": 0.055556748251
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "PLA",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in Placer County",
   "restrictionText": "Various usage restrictions based on funding subcategory",
   "purpose": "",
   "grantor": "Placer County",
   "notes": "FY 26-27 TART TOT totals $5,347,400 in Funding Model V1G. The route model gives TART Connect $2,932,112 and spreads the rest ($2,415,288) across fixed routes and paratransit by share of miles.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean row 34, V, W, X, Y, Z",
    "prior": "Local Funds 1 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 28",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › Placer County (Transient Occupancy Tax)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 O68: 4% annually",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean row 34, V, W, X, Y, Z | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 34 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 28, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 34 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-washoe",
   "name": "Washoe RTC (TART Nevada service)",
   "level": "local",
   "recipient": "TART",
   "program": "RTC Washoe contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 296055.0,
   "prior": 288746,
   "growth": 0.02,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "TART-NV"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-NV": 1
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "WAS",
   "matchText": "No match requirement",
   "conditionText": "Only applied to TART NV route",
   "restrictionText": "Fixed route service in Nevada; airport shuttle service in Tahoe in Washoe County",
   "purpose": "Operations in Nevada.",
   "grantor": "Regional Transportation Commission of Washoe County",
   "notes": "Funding Model V1G puts all of it on Main Line. The model applies it to the Main Line Nevada segment, the part of Main Line in Washoe County. NLTE Washoe support is budgeted separately by TNT/TMA ($12,500).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E31",
    "prior": "Local Funds 1 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 25 B25",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › Washoe RTC",
    "alloc": "Financial PlanG.xlsx › Revenue %s row 25",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 O69: 2% annual increase",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E31 | Shares: seed allocation (route model row 31 overridden; see build report) | Conditions and match: Financial PlanG.xlsx › Revenue %s row 25, columns B and C"
   },
   "user": false
  },
  {
   "id": "tart-truckee",
   "name": "Town of Truckee (TART)",
   "level": "local",
   "recipient": "TART",
   "program": "Town of Truckee contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 230478.0,
   "prior": 256402,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "89",
     "267",
     "NLTE"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "89": 0.5,
     "267": 0.5
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "TRK",
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "TART Hwy 89 and Hwy 267 fixed route service, and NLTE services in Truckee",
   "purpose": "TART Hwy 89 and Hwy 267 service; NLTE operations.",
   "grantor": "Town of Truckee (LTF)",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E35",
    "prior": "Local Funds 1 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 29",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › Town of Truckee",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 O70: no change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E35 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 35 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 29, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 35 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-nsrp",
   "name": "North Shore Resort Partners",
   "level": "private",
   "recipient": "TART",
   "program": "Resort contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 47900.0,
   "prior": 60000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "agencies": [
     "TART"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-WS": 0.120627018531,
     "TART-NS": 0.141863067103,
     "TART-NV": 0.120109283097,
     "89": 0.237176203338,
     "267": 0.23969501884,
     "NIGHT": 0.084972660841,
     "ADA-PLA": 0.055556748251
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "TART operating only; operation contribution earmarked for winter service",
   "purpose": "Operating support for TART service and winter Park and Ride.",
   "grantor": "Private resorts",
   "notes": "Not allocated on Revenue %s; placeholder split by service hours on TART fixed routes.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E38",
    "prior": "Local Funds 1 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 31",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › North Shore Resort Partners",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 O71: no change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E38 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 38 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 31, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 38 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-nslp",
   "name": "North Shore Local Partners (free fares)",
   "level": "local",
   "recipient": "TART",
   "program": "Free-fare partnership",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 139000.0,
   "prior": 148500,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "agencies": [
     "TART"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "TART-WS": 0.120627018531,
     "TART-NS": 0.141863067103,
     "TART-NV": 0.120109283097,
     "89": 0.237176203338,
     "267": 0.23969501884,
     "NIGHT": 0.084972660841,
     "ADA-PLA": 0.055556748251
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "TART operations; free fares",
   "purpose": "Contribution to TART for operating free fares and winter Park and Ride shuttles.",
   "grantor": "Tahoe Truckee Airport District, resorts, Town of Truckee",
   "notes": "Not allocated on Revenue %s; placeholder split by service hours on TART fixed routes.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E39",
    "prior": "Local Funds 1 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 32",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › North Shore Resort Partners (Free Fares)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 O72: no change",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E39 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 39 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 32, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 39 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tart-martis",
   "name": "Martis Zones of Benefit",
   "level": "local",
   "recipient": "TART",
   "program": "Zone of benefit",
   "enabled": true,
   "status": "factsheet",
   "amountMode": "manual",
   "amount": 0.0,
   "prior": 50000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "267"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "267": 1
    }
   },
   "commitment": "none",
   "commitNote": "FY 25-26 $50,000; $0 in FY 26-27.",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Hwy 267 TART service only",
   "purpose": "Budget contribution for Hwy 267 operations.",
   "grantor": "Martis Zone of Benefit",
   "notes": "FY 26-27 is $0 in Funding Model V1G, so the model uses $0 per TRPA (Nov. 13, 2026). FY 25-26 was $50,000.",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean E40",
    "prior": "Local Funds 1 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › Martis Zones of Benefit",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean E40 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 33, columns B and C"
   },
   "user": false
  },
  {
   "id": "tart-5339",
   "name": "FTA 5339 bus and facilities (TART)",
   "level": "federal",
   "recipient": "TART",
   "program": "FTA 5339 (Lake Tahoe UZA)",
   "enabled": true,
   "status": "capital",
   "amountMode": "manual",
   "amount": 0,
   "prior": 0,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": 0.8,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {},
   "alloc": {
    "mode": "manual",
    "pct": {}
   },
   "commitment": "formula",
   "commitNote": "",
   "contributor": null,
   "matchText": "Yes (capital)",
   "conditionText": "",
   "restrictionText": "Lake Tahoe UZA and Nevada",
   "purpose": "Capital funds for buses, equipment, and bus facilities.",
   "grantor": "Federal Transit Administration",
   "notes": "Capital program, outside this operating model. FY 26-27 example UZA split: Placer $207,871 (FTA Allocation Split I35).",
   "cites": {
    "prior": "Federal Funds, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "amount": "Financial PlanG.xlsx › FTA Allocation Split (26-27) I35"
   },
   "user": false
  },
  {
   "id": "tnt-tot-nlte",
   "name": "Placer County TOT – NLTE",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "Transient occupancy tax",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 162595.0,
   "prior": null,
   "growth": 0.04,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "NLTE"
    ],
    "preferJurisdiction": "PLA"
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "PLA",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in Placer County",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Placer County",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean row 34, AG",
    "match": "Financial PlanG.xlsx › Revenue %s row 28",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 4% annually",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean row 34, AG | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 34 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 28, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 34 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tnt-tot-pr",
   "name": "Placer County TOT – Park & Ride",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "Transient occupancy tax",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 749956.0,
   "prior": 128580,
   "growth": 0.04,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "PR-W",
     "PR-S"
    ],
    "preferJurisdiction": "PLA"
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "PR-W": 0.8,
     "PR-S": 0.2
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "PLA",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in Placer County",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Placer County",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean row 34, AE, AF",
    "prior": "Financial PlanG.xlsx › TNTTMA $ E29 (FY 25-26)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 4% annually",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean row 34, AE, AF | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 34 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 28, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 34 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tnt-tot-van",
   "name": "Placer County TOT – Vanpools",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "Transient occupancy tax",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 195800.0,
   "prior": 220818,
   "growth": 0.04,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "VAN"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "VAN": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "PLA",
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in Placer County",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Placer County",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean row 34, AH",
    "prior": "Financial PlanG.xlsx › TNTTMA $ J29 (FY 25-26)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 4% annually",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean row 34, AH | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 34 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 28, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 34 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tnt-tntn",
   "name": "Travel North Tahoe Nevada (NLTE)",
   "level": "private",
   "recipient": "TNTTMA",
   "program": "Visitor bureau contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 26417.0,
   "prior": 30390,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "NLTE"
    ],
    "preferStates": [
     "NV"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "Ideally used only in NV",
   "restrictionText": "Airport shuttle service in CA/NV",
   "purpose": "Contribution for NLTE operations.",
   "grantor": "Travel North Tahoe Nevada",
   "notes": "The Local Funds fact sheet card shows \"TTD budgeted $8,000,\" although the funded system is NLTE. FY 26-27 amount from Funding Model V1G ($26,417; the financial plan showed $26,421).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G32",
    "prior": "Financial PlanG.xlsx › TNTTMA $ E10 (FY 25-26)",
    "match": "Financial PlanG.xlsx › Revenue %s row 26",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Travel North Tahoe Nevada",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 32 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean G32 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 32 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 26, columns B and C"
   },
   "user": false
  },
  {
   "id": "tnt-washoe",
   "name": "Washoe County (NLTE)",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "County contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 12500.0,
   "prior": 25000,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "NLTE"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "WAS",
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Washoe County",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G31",
    "prior": "Financial PlanG.xlsx › TNTTMA $ E11 (FY 25-26)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean G31 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 31",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 31 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tnt-rtaa",
   "name": "Reno-Tahoe Airport Authority (NLTE)",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "Airport authority contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 12500.0,
   "prior": 0,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "NLTE"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "Airport shuttle service in CA/NV",
   "purpose": "Contribution for NLTE operations.",
   "grantor": "Reno-Tahoe Airport Authority",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G33",
    "prior": "Local Funds 2 of 3, Oct. 28, 2026.pdf › FY 25-26 budgeted for operations",
    "match": "Financial PlanG.xlsx › Revenue %s row 27",
    "restrictions": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Reno-Tahoe Airport Authority",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 33 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean G33 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 33 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 27, columns B and C"
   },
   "user": false
  },
  {
   "id": "tnt-truckee",
   "name": "Town of Truckee (NLTE)",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "Town of Truckee contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 15500.0,
   "prior": 15500,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "89",
     "267",
     "NLTE"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "TRK",
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Town of Truckee",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G35",
    "prior": "Financial PlanG.xlsx › TNTTMA $ E13 (FY 25-26)",
    "restrictions": "Local Funds 1 of 3, Oct. 28, 2026.pdf › Town of Truckee",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean G35 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 35 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 29, columns B and C",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 35 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tnt-truckee2",
   "name": "Visit Truckee Tahoe (NLTE)",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "Truckee contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 2927.0,
   "prior": null,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "NLTE"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Truckee (not specified)",
   "notes": "Same contribution as the earlier \"Additional Truckee contribution\" per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G36",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 36 (FY 26-27 route allocations)",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean G36 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 36 | Conditions and match: Financial PlanG.xlsx › Revenue %s row 30, columns B and C"
   },
   "user": false
  },
  {
   "id": "tnt-nevco",
   "name": "Nevada County (Park & Ride)",
   "level": "local",
   "recipient": "TNTTMA",
   "program": "County contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 16339.0,
   "prior": null,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "PR-W",
     "PR-S"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "PR-W": 0.8,
     "PR-S": 0.2
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": "NEV",
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Nevada County",
   "notes": "Part of the Park and Ride Shuttle Partners line in Funding Model V1G ($144,277 for Nevada County, Northstar, and Palisades), per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G37 (=16339+3862+124076: Nevada County, Northstar, and Palisades)",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 37 (FY 26-27 route allocations)",
    "build": "Shares: Funding Model V1G.xlsx › Per Route Model Clean row 37"
   },
   "user": false
  },
  {
   "id": "tnt-northstar",
   "name": "Northstar (Park & Ride)",
   "level": "private",
   "recipient": "TNTTMA",
   "program": "Resort contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 3862.0,
   "prior": 21413,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "PR-W",
     "PR-S"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "PR-W": 0.8,
     "PR-S": 0.2
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Northstar",
   "notes": "Part of the Park and Ride Shuttle Partners line in Funding Model V1G ($144,277 for Nevada County, Northstar, and Palisades), per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G37 (=16339+3862+124076: Nevada County, Northstar, and Palisades)",
    "prior": "Financial PlanG.xlsx › TNTTMA $ E32 (FY 25-26)",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 37 (FY 26-27 route allocations)",
    "build": "Shares: Funding Model V1G.xlsx › Per Route Model Clean row 37"
   },
   "user": false
  },
  {
   "id": "tnt-palisades",
   "name": "Palisades Tahoe (Park & Ride)",
   "level": "private",
   "recipient": "TNTTMA",
   "program": "Resort contribution",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 124076.0,
   "prior": 119304,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "PR-W",
     "PR-S"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "PR-W": 0.8,
     "PR-S": 0.2
    }
   },
   "commitment": "budget",
   "commitNote": "",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Palisades Tahoe",
   "notes": "Part of the Park and Ride Shuttle Partners line in Funding Model V1G ($144,277 for Nevada County, Northstar, and Palisades), per TRPA (Nov. 13, 2026).",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G37 (=16339+3862+124076: Nevada County, Northstar, and Palisades)",
    "prior": "Financial PlanG.xlsx › TNTTMA $ E33 (FY 25-26)",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 37 (FY 26-27 route allocations)",
    "build": "Shares: Funding Model V1G.xlsx › Per Route Model Clean row 37"
   },
   "user": false
  },
  {
   "id": "tnt-fares",
   "name": "North Lake Tahoe Express fares",
   "level": "fare",
   "recipient": "TNTTMA",
   "program": "Passenger fares",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 377656.0,
   "prior": 445263,
   "growth": 0,
   "lastYear": null,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": false,
   "matchOnly": false,
   "rules": {
    "routes": [
     "NLTE"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "earned",
   "commitNote": "",
   "contributor": null,
   "matchText": "",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "Riders",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G51",
    "prior": "Financial PlanG.xlsx › TNTTMA $ E15 (FY 25-26)",
    "projection": "Financial PlanG.xlsx › T5-7 Table A2 G87: flat",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean G51 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 51",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 51 (FY 26-27 route allocations)"
   },
   "user": false
  },
  {
   "id": "tnt-reserve",
   "name": "NLTE reserve",
   "level": "other",
   "recipient": "TNTTMA",
   "program": "Reserve draw",
   "enabled": true,
   "status": "budgeted",
   "amountMode": "manual",
   "amount": 240000.0,
   "prior": null,
   "growth": 0,
   "lastYear": 0,
   "cap": null,
   "overrides": [
    null,
    null,
    null,
    null,
    null
   ],
   "fedShare": null,
   "fedShareADA": null,
   "matchEligible": true,
   "matchOnly": false,
   "rules": {
    "routes": [
     "NLTE"
    ]
   },
   "alloc": {
    "mode": "manual",
    "pct": {
     "NLTE": 1.0
    }
   },
   "commitment": "onetime",
   "commitNote": "Included so the NLTE FY 26-27 budget balances (Table 7 note).",
   "contributor": null,
   "matchText": "No match requirement",
   "conditionText": "",
   "restrictionText": "",
   "purpose": "",
   "grantor": "TNT/TMA",
   "notes": "",
   "cites": {
    "amount": "Funding Model V1G.xlsx › Per Route Model Clean G52",
    "build": "FY 26-27 amount: Funding Model V1G.xlsx › Per Route Model Clean G52 | Shares: Funding Model V1G.xlsx › Per Route Model Clean row 52",
    "alloc": "Funding Model V1G.xlsx › Per Route Model Clean row 52 (FY 26-27 route allocations)"
   },
   "user": false
  }
 ],
 "fta": {
  "apport5307": 4296912.69,
  "apport5339": 405232.2,
  "apport5310": 75224.8,
  "opsShare": 0.75,
  "weights": {
   "miles": 1,
   "pop": 1,
   "riders": 1
  },
  "ttd": {
   "miles": 803084.0,
   "pop": 31420.0,
   "riders": 489907.0
  },
  "tart": {
   "miles": 1408116.0,
   "pop": 16643.0,
   "riders": 613042.0
  }
 },
 "dataNotes": [
  {
   "title": "Costs tab total double-counts TART Main Line",
   "text": "The costs tab total ($23.08 million, K25) sums the Main Line subtotal (row 16) and its three segments (rows 13–15), counting about $2.50 million twice. This model counts the segments once.",
   "cite": "Example Transit Financial Scenario Workbook.xlsx › costs K25, K13:K16"
  },
  {
   "title": "Route 30 cost",
   "text": "The model uses the Route 30 contract cost in the funding model, $644,796 (about $184.23 per service hour), per TRPA (Nov. 13, 2026). It replaces $147.80 per hour (about $517,300), which TRPA set on Oct. 23, 2026 to match the Emerald Bay Shuttle budget. The four Emerald Bay Shuttle revenue sources total $619,796, which leaves a $25,000 gap.",
   "cite": "Funding Model V1G.xlsx › VRH Rates K29; Per Route Model Clean R10, R56:R57"
  },
  {
   "title": "Route shares",
   "text": "Route shares come from the FY 26-27 route allocations in the funding model, per TRPA (Nov. 13, 2026). Most sources are split by share of service hours or miles. The model splits the funding model's single Main Line column across West Shore, North Shore, and Nevada by service hours. Washoe RTC stays on the Nevada segment.",
   "cite": "Funding Model V1G.xlsx › Per Route Model Clean rows 12 to 52; Operating Stats F19:F21"
  },
  {
   "title": "TNT/TMA service costs",
   "text": "The model uses the funding model costs: Park & Ride at the $894,233 contract cost (80 percent winter, 20 percent summer), North Lake Tahoe Express at $694,260, and vanpools at $195,800, per TRPA (Nov. 13, 2026). TRPA has not yet confirmed that the NLTE figure is the contract cost; on the estimated 1,200 service hours it works out to $578.55 per hour. TNT/TMA program administration and regional marketing, and the membership and management revenues that pay for them, are outside the per-route model.",
   "cite": "Funding Model V1G.xlsx › Per Route Model Clean AE10:AH10; Operating Stats F32:F34"
  },
  {
   "title": "LCTOP on Nevada routes",
   "text": "The State Funds fact sheet restricts LCTOP to California, but the draft shares on Revenue %s assign part of it to Nevada routes 19X, 22, and 28. The model flags these cells.",
   "cite": "State Funds, Oct. 28, 2026.pdf › LCTOP; Financial PlanG.xlsx › Revenue %s row 15"
  },
  {
   "title": "Federal funds above the operating share",
   "text": "At the costs tab route costs, the draft shares put more federal money on Routes 19X, 22, and 50 than the 50 percent operating share allows, and TTD holds more 5311 than its two rural routes can absorb at 50 percent. TTD's own per-route worksheet uses $912,052 of the $1,798,577 in 5311. Confirm how the remainder is used (administration, capital, or other routes).",
   "cite": "Financial PlanG.xlsx › T2-4 Q146:R146"
  },
  {
   "title": "Sources the funding model leaves out",
   "text": "Per TRPA (Nov. 13, 2026), FY 26-27 amounts follow the funding model. Sources it does not list are $0: the TTD local appropriation ($232,235 in FY 25-26), Emerald Bay Shuttle fares ($53,500 in the financial plan), Martis Zones of Benefit ($50,000 in FY 25-26), and TART's FTA 5310 share. The North Tahoe Community Alliance line is removed: NTCA administers Placer County TOT, which the model already counts. The Nevada State general fund allocation to TTD ($346,500 in FY 25-26) stays at $0.",
   "cite": "Funding Model V1G.xlsx › Per Route Model Clean; Local Funds 1 of 3, Oct. 28, 2026.pdf › Local Appropriation, Martis Zones of Benefit; State Funds, Oct. 28, 2026.pdf › Nevada State"
  },
  {
   "title": "Fact sheet and plan differences",
   "text": "TDVA is $65,000 on the fact sheet (FY 25-26) and $120,000 in the FY 26-27 plan. The Travel North Tahoe Nevada card shows \"TTD budgeted $8,000\" though the funded system is NLTE. TRPA (Oct. 23, 2026): use the plan amount ($120,000).",
   "cite": "Local Funds 2 of 3, Oct. 28, 2026.pdf › Tahoe Douglas Visitor Authority; Travel North Tahoe Nevada"
  },
  {
   "title": "Electrification credits",
   "text": "Revenue %s notes call electrification credits \"not real money, only used as match.\" The fact sheet lists $8,000 budgeted for TTD operations. The model counts them as match only; this can be switched in Details.",
   "cite": "Financial PlanG.xlsx › Revenue %s B16:C16; State Funds, Oct. 28, 2026.pdf › Electrification Credits"
  },
  {
   "title": "Match rates for NDOT 5311",
   "text": "Revenue %s lists 50 percent non-federal match for 5311; partner notes say NDOT match is 20 percent for administration, 40 percent for operating, and 5 percent for capital. TRPA (Oct. 23, 2026): go with 50 percent non-federal for now; we can change it later.",
   "cite": "Financial PlanG.xlsx › Revenue %s C6, F64"
  },
  {
   "title": "Lake Link and placeholder jurisdiction shares",
   "text": "Jurisdiction shares split each service equally among the jurisdictions in the costs tab, except Lake Link (one-third Douglas, two-thirds CSLT). ADA paratransit services have no local conditions listed. Lake Link VSH are contract hours, not actuals.",
   "cite": "Example Transit Financial Scenario Workbook.xlsx › costs columns C, U12"
  },
  {
   "title": "Fares on Route 30",
   "text": "The funding model shows $0 in Emerald Bay Shuttle fares for FY 26-27, so the model carries no Route 30 fares. Route 30 charges $5 one way.",
   "cite": "Funding Model V1G.xlsx › Per Route Model Clean D51; Fare Rates C10"
  },
  {
   "title": "Service plan: replacing 19X",
   "text": "The financial plan adds the US 50 service cost without removing Route 19X. To model a replacement, include the element and exclude Route 19X.",
   "cite": "Financial PlanG.xlsx › T2-4 rows 21, 29"
  },
  {
   "title": "Vanpools",
   "text": "The funding model includes vanpools at $195,800, paid by Placer County TOT through TNT/TMA. The Operating Stats tab has no vanpool row, so vanpools have no service hours.",
   "cite": "Funding Model V1G.xlsx › Per Route Model Clean AH10, AH34"
  },
  {
   "title": "Open questions in the source files",
   "text": "\"What revenues can we count on for 27-28 for Lake Link?\" and \"Do we recommend Transportation user fee?\" A new regional source can be tested with Add source on the Funding sources tab.",
   "cite": "Financial PlanG.xlsx › Questions F4, F6"
  },
  {
   "title": "Fixed costs for contractors",
   "text": "The costs tab notes that fixed costs could be separated out, but that is harder for private contractors, and fixed costs change with large service changes. The model uses fully allocated rates.",
   "cite": "Example Transit Financial Scenario Workbook.xlsx › costs W4"
  },
  {
   "title": "Funding rule decisions from the funding lead (Oct. 23, 2026)",
   "text": "No optimizer: the tool flags problems and shows trade-offs. Match is tested per grant, per recipient. 5307 operating at 50 percent non-federal; 5310 at 20 percent non-federal (to confirm); NDOT 5311 at 50 percent for now. Fares count as local match. Toll credits are assumed unavailable. “Ideally used in” conditions are preferences, and using a source outside its intended jurisdiction is allowed but highlighted. Jurisdiction cost splits stay even-split placeholders for now. Capital is out of scope for this iteration; planning and administration funds are in scope.",
   "cite": "TRPA (Oct. 23, 2026)"
  },
  {
   "title": "Model decisions from TRPA (Nov. 13, 2026)",
   "text": "Funding Model V1G replaces the earlier workbooks for existing transit data: costs, service statistics, operator rates, FY 26-27 revenue, and route allocations. TTD SB 125 is $500,000. Lake Link private partners use the funding model amounts. The Lake Tahoe Visitors Authority money is separate from the Tahoe Blue Events Center fee. Visit Truckee Tahoe is the same contribution as the earlier \"Additional Truckee\" line, and the Park & Ride partners line includes Northstar. For the TART Connect fare savings in the TART Systems Plan, use the smaller staff report figure, $758,000 a year, until updated. Under TTD absorbs Lake Link, SSTMA administration costs carry over to TTD.",
   "cite": "TRPA (Nov. 13, 2026)"
  },
  {
   "title": "South Tahoe Transit JPA",
   "text": "The JPA is not an operator, and the working assumption is that it will not become one (TRPA, Oct. 23, 2026). South shore fixed route funding stays with TTD in this model.",
   "cite": "TRPA (Oct. 23, 2026)"
  },
  {
   "title": "Funding cliffs with no defined replacement",
   "text": "SB 125 ends after FY 26-27 ($1,250,000 across TTD and Lake Link) and the Route 30 pilot funds end after FY 27-28. No replacement funding is defined yet; TRPA (Oct. 23, 2026) asked that this be highlighted as a gap and a need. See the Five-year outlook tab.",
   "cite": "TRPA (Oct. 23, 2026)"
  },
  {
   "title": "Scenario presets",
   "text": "The scenario bar has three presets: the Meyers paratransit and microtransit pilot, TTD absorbs Lake Link, and 30-minute peak frequency on TART fixed routes. Each preset is a set of logged edits on top of the current scenario. Reset returns to the source data. The 30-minute peak preset starts in a fiscal year the user picks, FY 27-28 by default, per TRPA (Nov. 13, 2026).",
   "cite": "TRPA (Oct. 23, 2026); TRPA (Nov. 13, 2026)"
  }
 ],
 "agreements": [
  {
   "title": "Lake Link funding agreements with Douglas County and the City of South Lake Tahoe",
   "text": "The only two written Lake Link contracts. The plan assumes support continues at existing levels after the current terms end.",
   "cite": "Financial PlanG.xlsx › Per Route Model D88; T2-4 note 6"
  },
  {
   "title": "SSTMA operating contract for Lake Link (Downtowner/Via)",
   "text": "Sets the Lake Link hourly cost and the 2027 contract service hours.",
   "cite": "Example Transit Financial Scenario Workbook.xlsx › VRH Rates L9; Financial PlanG.xlsx › T2-4 note 2"
  },
  {
   "title": "Emerald Bay Shuttle (Route 30) pilot: TTD–Via contract and pilot funding",
   "text": "Keep Tahoe Blue, Carbon Reduction Program, El Dorado County, and Placer County funds committed through FY 27-28.",
   "cite": "Financial PlanG.xlsx › T2-4 rows 79–82"
  },
  {
   "title": "Placer County TART Connect contract",
   "text": "Contract-specified escalation of 5 percent per year.",
   "cite": "Example Transit Financial Scenario Workbook.xlsx › VRH Rates L15"
  },
  {
   "title": "My Ride to Work contracts with TART and TNT/TMA",
   "text": "Bus and van rates for Park & Ride shuttles and NLTE; the MRTW contract is listed at $488,320.",
   "cite": "Example Transit Financial Scenario Workbook.xlsx › VRH Rates rows 18–21; Financial PlanG.xlsx › Revenue %s M81"
  },
  {
   "title": "FTA 5307, 5339, and 5310 sub-allocation between TTD and Placer County",
   "text": "Earned-share worksheet based on revenue miles, population, and ridership. FTA expects the MPO and designated recipients to set the split through a \"fair and rational\" process. Per TRPA (Nov. 20, 2026), an MOU documents the split.",
   "cite": "Financial PlanG.xlsx › FTA Allocation Split (26-27); Revenue %s AD59"
  },
  {
   "title": "TRPA TDA apportionment (LTF and STA) to TTD and TART",
   "text": "The plan assumes no change in the TRPA TDA split; TTD applies one-third to rural and two-thirds to urban routes.",
   "cite": "Financial PlanG.xlsx › T2-4 note 2; Revenue %s AE10"
  },
  {
   "title": "LCTOP rotation between TTD and TART",
   "text": "LCTOP alternates every other year based on ridership.",
   "cite": "Financial PlanG.xlsx › Revenue %s D67"
  },
  {
   "title": "NDOT 5311 subrecipient agreement with TTD",
   "text": "Partner notes record NDOT match at 20 percent for administration, 40 percent for operating, and 5 percent for capital.",
   "cite": "Financial PlanG.xlsx › Revenue %s F64"
  },
  {
   "title": "Tahoe Blue Events Center transportation mitigation fee",
   "text": "A $3 ticket surcharge allocated to transit, with an annual attendee cap.",
   "cite": "Financial PlanG.xlsx › T2-4 note 7"
  },
  {
   "title": "Partner cost-sharing practices on TTD routes",
   "text": "Costs are allocated by route by percent of miles per month, utility costs are pooled systemwide by partner agreement, and whoever receives a route's benefit gets its urban or rural benefit.",
   "cite": "Financial PlanG.xlsx › Revenue %s E61:E63, C65"
  },
  {
   "title": "Lake Link private partners",
   "text": "SLTTID, Heavenly, Caesars, Round Hill Pines, Advance Learning, LTVA, and LTCC are listed in the FY 26-27 funding model, with no written commitments on file. TRPA notes that the Caesars and Round Hill Pines money pays for the Lake Link special summer service. Multi-year contribution agreements would let the plan count on these funds.",
   "cite": "Funding Model V1G.xlsx › Per Route Model Clean F44:F50; Financial PlanG.xlsx › T2-4 note 8"
  }
 ],
 "build": {
  "id": "20261124a",
  "builtAt": "2026-11-24T23:41:51",
  "workbooks": {
   "v1g": {
    "file": "Funding Model V1G.xlsx",
    "sha256": "5b92e571c1b4be49",
    "modified": "2026-11-10T23:43:05"
   },
   "scen": {
    "file": "Example Transit Financial Scenario Workbook.xlsx",
    "sha256": "fccb9a121a47afb6",
    "modified": "2026-10-28T02:17:15"
   },
   "plan": {
    "file": "Financial PlanG.xlsx",
    "sha256": "8e0aa78245720af0",
    "modified": "2026-10-28T02:17:15"
   }
  },
  "warnings": []
 }
};
