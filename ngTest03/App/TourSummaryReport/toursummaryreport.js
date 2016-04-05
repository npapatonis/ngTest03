(function () {
    'use strict';

    angular.module('ui.bootstrap.demo')
    .controller('TourSummaryReportCtrl', function ($scope, $timeout) {

        $scope.$on('$viewContentLoaded', function (event) {
            $timeout(function () {
                window.print();
            }, 250);
        });

        $scope.tourInstances = [
            {
                name: 'Tour A',
                status: 'Complete',
                startDate: new Date(2016, 0, 1, 6, 30, 0),
                endDate: new Date(2016, 0, 1, 7, 33, 0),
                officer: 'Officer One'
            },
            {
                name: 'Tour B',
                status: 'Complete',
                startDate: new Date(2016, 0, 1, 7, 45, 0),
                endDate: new Date(2016, 0, 1, 9, 0, 0),
                officer: 'Officer Two'
            },
            {
                name: 'Tour C',
                status: 'In Progress',
                startDate: new Date(2016, 0, 1, 9, 30, 0),
                endDate: null,
                officer: 'Officer Three'
            },
            {
                name: 'Tour D',
                status: 'Complete',
                startDate: new Date(2016, 0, 1, 9, 45, 0),
                endDate: new Date(2016, 0, 1, 11, 20, 0),
                officer: 'Officer One'
            },
            {
                name: 'Tour E',
                status: 'Complete',
                startDate: new Date(2016, 0, 1, 13, 15, 0),
                endDate: new Date(2016, 0, 1, 13, 45, 0),
                officer: 'Officer Two'
            },
            {
                name: 'Tour F',
                status: 'Complete',
                startDate: new Date(2016, 0, 1, 14, 30, 0),
                endDate: new Date(2016, 0, 1, 14, 55, 0),
                officer: 'Officer One'
            },
        ];

    });

})();