(function () {
    'use strict';

    angular.module('ui.bootstrap.demo').controller('TourSummaryFilterCtrl', function ($scope, $state, reportFactory) {

        $scope.title = 'tourSummaryFiltersController';

        $scope.dateFormat = 'MM/dd/yyyy';
        $scope.altInputFormats = ['M!/d!/yyyy'];
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 0,
            showWeeks: false
        };

        $scope.fromDatePopup = {
            isOpen: false,
            Open: function () {
                $scope.fromDatePopup.isOpen = true;
            },
            Change: function () {
                handleChange();
            }
        };

        $scope.toDatePopup = {
            isOpen: false,
            Open: function () {
                $scope.toDatePopup.isOpen = true;
            },
            Change: function () {
                handleChange();
            }
        };

        $scope.filter = reportFactory.initializeTourSummaryFilter();

        $scope.continue = function () {
            if (!$scope.tourSummaryFilter.$invalid) {
                navigationFactory.navigateToTourSummaryReport($scope.filter);
            }
        };

        function handleChange() {
            var valid = true;
            if ($scope.filter.fromDateTime >= $scope.filter.toDateTime) {
                valid = false;
            }
            $scope.tourSummaryFilter.toDate.$setValidity('validdaterange', valid);

            if ($scope.tourSummaryFilter.$submitted) {
                $scope.tourSummaryFilter.$submitted = false;
            }
        }
    });

})();