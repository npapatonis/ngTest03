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
            }
        };

        $scope.toDatePopup = {
            isOpen: false,
            Open: function () {
                $scope.toDatePopup.isOpen = true;
            }
        };

        $scope.filter = reportFactory.initializeTourSummaryFilter();

        var errMsgs = {
            required: {
                fromDate: 'From date is required',
                //toDate: 'To date is required',
                required: 'Required fields are missing',
            },
            //required: 'Required fields are missing',
            date: {
                fromDate: 'From date is invalid',
                toDate: 'To date is invalid'
            }
        };

        $scope.continue = function () {
            if ($scope.tourSummaryFilter.$invalid) {
                var errors = [];
                var keys = Object.keys($scope.tourSummaryFilter.$error);
                angular.forEach(keys, function (key) {
                    if (key in errMsgs) {
                        if (angular.isString(errMsgs[key])) {
                            errors.push(errMsgs[key]);
                        }
                        else if (angular.isObject(errMsgs[key])) {
                            angular.forEach($scope.tourSummaryFilter.$error[key], function (error) {
                                if (error.$name in errMsgs[key]) {
                                    errors.push(errMsgs[key][error.$name]);
                                }
                                else if (key in errMsgs[key]) {
                                    errors.push(errMsgs[key][key]);
                                }
                            });
                        }
                    }
                });
                alert('Invalid entries');
                return;
            }

            $state.go('tourSummaryReport');
        };

        function checkDateRange() {
            var valid = true;
            if ($scope.filter.fromDateTime >= $scope.filter.toDateTime) {
                valid = false;
            }
            $scope.tourSummaryFilter.toDate.$setValidity('validdaterange', valid);
        }
    });

})();