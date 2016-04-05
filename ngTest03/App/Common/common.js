var TourSummaryReportFilter = function (
    fromDateTime,
    toDateTime,
    mustStartInRange,
    mustEndInRange,
    includePartiallyCompleted) {

    this.fromDateTime = fromDateTime;
    this.toDateTime = toDateTime;
    this.mustStartInRange = mustStartInRange;
    this.mustEndInRange = mustEndInRange;
    this.includePartiallyCompleted = includePartiallyCompleted;

};
