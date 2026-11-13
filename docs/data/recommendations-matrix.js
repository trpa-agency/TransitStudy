/* Responsibility matrix data for the Draft recommendations tab.
   Source: Tahoe Transit Study responsibility matrix with Kira Richardson's edits (Nov. 13, 2026).
   Service and governance wording follows the Executive Summary, Tables 3 and 4.
   lead and partners are keys into AG. term is the timeframe column. Funding rows have no timeframe. */

window.REC_MATRIX = {
  source: "Source: Tahoe Transit Study responsibility matrix, TRPA, November 2026.",

  groups: ["Transit operators", "Regional and planning", "Local jurisdictions", "State and federal", "Private, nonprofit, and other", "General groups"],

  AG: {
    TTD:    { n: "Tahoe Transportation District (TTD)", s: "TTD", g: "Transit operators" },
    PC:     { n: "Placer County (operates TART)", s: "Placer County/TART", g: "Transit operators" },
    EDT:    { n: "El Dorado Transit", s: "El Dorado Transit", g: "Transit operators" },
    TRPA:   { n: "Tahoe Regional Planning Agency (TRPA)", s: "TRPA", g: "Regional and planning" },
    SSTMA:  { n: "South Shore Transportation Management Association (SSTMA)", s: "SSTMA", g: "Regional and planning" },
    TNT:    { n: "Truckee North Tahoe Transportation Management Association (TNT/TMA)", s: "TNT/TMA", g: "Regional and planning" },
    STTJPA: { n: "South Tahoe Transit Joint Powers Authority (STTJPA)", s: "STTJPA", g: "Regional and planning" },
    RTCW:   { n: "Regional Transportation Commission of Washoe County (Washoe RTC)", s: "Washoe RTC", g: "Regional and planning" },
    CAMPO:  { n: "Carson Area Metropolitan Planning Organization (CAMPO)", s: "CAMPO", g: "Regional and planning" },
    CSLT:   { n: "City of South Lake Tahoe", s: "City of South Lake Tahoe", g: "Local jurisdictions" },
    EDC:    { n: "El Dorado County", s: "El Dorado County", g: "Local jurisdictions" },
    DC:     { n: "Douglas County", s: "Douglas County", g: "Local jurisdictions" },
    WC:     { n: "Washoe County", s: "Washoe County", g: "Local jurisdictions" },
    CC:     { n: "Carson City", s: "Carson City", g: "Local jurisdictions" },
    TRK:    { n: "Town of Truckee", s: "Town of Truckee", g: "Local jurisdictions" },
    NC:     { n: "Nevada County", s: "Nevada County", g: "Local jurisdictions" },
    NDOT:   { n: "Nevada Department of Transportation (NDOT)", s: "NDOT", g: "State and federal" },
    CT:     { n: "Caltrans", s: "Caltrans", g: "State and federal" },
    NVSP:   { n: "Nevada State Parks", s: "Nevada State Parks", g: "State and federal" },
    CASP:   { n: "California State Parks", s: "CA State Parks", g: "State and federal" },
    USFS:   { n: "U.S. Forest Service (USFS)", s: "USFS", g: "State and federal" },
    LTCC:   { n: "Lake Tahoe Community College (LTCC)", s: "LTCC", g: "Private, nonprofit, and other" },
    IVCBVB: { n: "Incline Village Crystal Bay Visitors Bureau (IVCBVB)", s: "IVCBVB", g: "Private, nonprofit, and other" },
    NTCA:   { n: "North Tahoe Community Alliance (NTCA)", s: "NTCA", g: "Private, nonprofit, and other" },
    LTVA:   { n: "Lake Tahoe Visitors Authority (LTVA)", s: "LTVA", g: "Private, nonprofit, and other" },
    HEAV:   { n: "Heavenly", s: "Heavenly", g: "Private, nonprofit, and other" },
    TBEC:   { n: "Tahoe Blue Event Center", s: "Tahoe Blue Event Center", g: "Private, nonprofit, and other" },
    RES:    { n: "Resorts", s: "Resorts", g: "General groups" },
    EMP:    { n: "Employers", s: "Employers", g: "General groups" }
  },

  recs: [
    /* ---------- Service ---------- */
    { type: "service", term: "Short", title: "Discontinue LTCC deviation on TTD Route 50 during the summer season and weekends", lead: ["TTD"], partners: ["SSTMA", "LTCC"] },
    { type: "service", term: "Short", title: "Increase vanpools between Reno and Truckee/North Lake Tahoe", lead: ["TNT"], partners: ["PC", "RTCW", "TRK", "NC", "RES", "EMP"] },
    { type: "service", term: "Medium", title: "Discontinue TTD's operation of Route 19X and reimplement US 50 service between South Shore and Carson City", lead: ["TTD"], partners: ["DC", "CAMPO", "CC", "NDOT"] },
    { type: "service", term: "Medium", title: "Continue summer service from South Lake Y to Sugar Pine (Emerald Bay Shuttle)", lead: ["TTD"], partners: ["PC", "TRPA", "CSLT", "EDC", "CT", "CASP", "USFS", "LTVA"] },
    { type: "service", term: "Medium", title: "Expand microtransit zone to Meyers comingled with paratransit", lead: ["TTD", "SSTMA"], partners: ["TRPA", "EDC", "STTJPA"] },
    { type: "service", term: "Medium to long", title: "Reimplement TART Connect service in Incline Village", lead: ["PC"], partners: ["TRPA", "RTCW", "WC", "IVCBVB"] },
    { type: "service", term: "Long", title: "Expand seasonal service of Route 28 to Spooner Mobility Hub", lead: ["TTD"], partners: ["TRPA", "WC", "CAMPO", "CC", "NDOT", "NVSP"] },
    { type: "service", term: "Long", title: "Increase frequency on TART fixed routes to 30 minutes during peak summer and winter", lead: ["PC"], partners: ["TNT", "TRK", "NTCA", "RES"] },
    { type: "service", term: "Long", title: "Provide Placer TART evening service (6 to 8 p.m.)", lead: ["PC"], partners: ["TNT", "TRK", "NTCA", "RES"] },

    /* ---------- Governance ---------- */
    { type: "governance", term: "Short", title: "Maintain existing North Shore transit governance structure and formalize through agreements", lead: ["PC"], partners: ["TTD", "TNT", "TRPA", "RTCW", "WC", "TRK", "NC", "IVCBVB", "NTCA", "RES", "EMP"] },
    { type: "governance", term: "Short", title: "Establish a South Shore Transit Advisory Committee within TTD", lead: ["TTD"], partners: ["SSTMA", "CSLT", "EDC", "DC", "STTJPA", "HEAV", "TBEC"] },
    { type: "governance", term: "Short", title: "Define the future role of STTJPA", lead: ["STTJPA"], partners: ["CSLT", "EDC"] },
    { type: "governance", term: "Short", title: "Establish a Tahoe Basin Transit Network Manager", lead: ["TTD"], partners: ["PC", "SSTMA", "TNT", "TRPA", "EDT", "RTCW", "CSLT", "EDC", "DC", "WC", "CAMPO", "TRK", "CC", "HEAV"] },
    { type: "governance", term: "Short to medium", title: "Establish cost-sharing agreements for shared transit facilities", lead: ["TTD"], partners: ["SSTMA", "CSLT", "HEAV"] },
    { type: "governance", term: "Short to medium", title: "Establish a unified Tahoe regional transit brand", lead: ["SSTMA", "TNT"], partners: ["TTD", "PC", "TRPA", "TRK", "IVCBVB", "LTVA", "RES"] },
    { type: "governance", term: "Medium", title: "Establish a unified regional transit trip planning platform", lead: ["TTD"], partners: ["PC", "SSTMA", "TNT", "TRPA", "EDT", "RTCW", "TRK", "HEAV", "RES"] },
    { type: "governance", term: "Medium", title: "Ensure sustainability of North Lake Tahoe Express", lead: ["TNT"], partners: ["SSTMA", "TRK", "NTCA", "RES", "EMP"] },
    { type: "governance", term: "Medium", title: "Transfer ownership of the TTD operating and maintenance facility to TTD", lead: ["CSLT"], partners: ["TTD", "TRPA", "STTJPA"] },
    { type: "governance", term: "Medium to long", title: "Formalize regional transit service and funding agreements", lead: ["TTD"], partners: ["PC", "SSTMA", "TNT", "TRPA", "RTCW", "CSLT", "EDC", "DC", "WC", "HEAV"] },
    { type: "governance", term: "Medium to long", title: "Transition Lake Link operations from SSTMA to TTD", lead: ["TTD", "SSTMA"], partners: ["TRPA", "CSLT", "EDC", "DC", "STTJPA", "TBEC"] },
    { type: "governance", term: "Medium to long", title: "Define future role of SSTMA", lead: ["SSTMA"], partners: ["RES", "EMP"] },
    { type: "governance", term: "Long", title: "Develop or secure workforce housing", lead: ["TTD", "PC"], partners: ["TRPA", "CSLT", "EDC", "DC", "WC", "EMP"] },

    /* ---------- Funding ---------- */
    { type: "funding", term: "", title: "Pursue a Transit Business Improvement District in South Lake Tahoe", lead: ["SSTMA"], partners: ["CSLT", "STTJPA", "RES", "EMP"] },
    { type: "funding", term: "", title: "Increase transient occupancy tax (TOT) contributions to South Shore transit", lead: ["SSTMA"], partners: ["TTD", "TRPA", "CSLT", "EDC", "DC", "STTJPA"] },
    { type: "funding", term: "", title: "Consider regional sales tax initiative", lead: ["TTD"], partners: ["PC", "CSLT", "EDC", "DC", "WC", "STTJPA", "CC"] },
    { type: "funding", term: "", title: "Establish sublease agreements between TTD and facility users", lead: ["TTD"], partners: ["SSTMA", "CSLT", "HEAV"] },
    { type: "funding", term: "", title: "Continue escalating funding agreements with local jurisdictions and private entities for Lake Link", lead: ["SSTMA"], partners: ["CSLT", "DC"] },
    { type: "funding", term: "", title: "Consider charging fares on microtransit and recreation routes", lead: ["TTD", "PC", "SSTMA"], partners: ["TNT", "TRPA"] },
    { type: "funding", term: "", title: "Allocate parking revenue to transit", lead: ["TTD"], partners: ["PC", "TRPA", "CSLT", "EDC", "DC", "WC", "NVSP", "CASP", "USFS", "HEAV", "TBEC", "RES"] }
  ]
};
