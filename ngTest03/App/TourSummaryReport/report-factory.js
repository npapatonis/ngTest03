(function () {
    'use strict';

    angular
        .module('ui.bootstrap.demo')
        .factory('reportFactory', reportFactory);

    function reportFactory() {

        var service = {
            initializeTourSummaryFilter: initializeTourSummaryFilter
        };

        return service;

        function initializeTourSummaryFilter(
            fromDateTime,
            toDateTime,
            mustStartInRange,
            mustEndInRange,
            includeInProgress,
            includePartiallyCompleted,
            includeEndedByAdmin,
            includeCancelled) {

            var filter = {};

            filter.toDateTime = toDateTime || getDatePart(new Date());
            filter.fromDateTime = fromDateTime || addDays(filter.toDateTime, -1);

            filter.mustStartInRange = mustStartInRange || false;
            filter.mustEndInRange = mustEndInRange || false;
            filter.includeInProgress = includeInProgress || false;
            filter.includePartiallyCompleted = includePartiallyCompleted || false;
            filter.includeEndedByAdmin = includeEndedByAdmin || false;
            filter.includeCancelled = includeCancelled || false;

            return filter;
        }

        function getDatePart(date) {
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
        };

        function addDays(date, days) {
            var origTimezoneOffset = date.getTimezoneOffset();

            var newDate = new Date();
            var newDateTicks = date.getTime() + days * 24 * 60 * 60 * 1000;
            newDate.setTime(newDateTicks);
            var newTimezoneOffset = newDate.getTimezoneOffset();

            // Adjust for daylight/standard transitions
            if (newTimezoneOffset !== origTimezoneOffset) {
                newDateTicks += (newTimezoneOffset - origTimezoneOffset) * 60 * 1000;
                newDate.setTime(newDateTicks);
            }

            return newDate;
        }
    }
})();
