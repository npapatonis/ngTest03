(function () {
    'use strict';

    angular.module('ui.bootstrap.demo')
    .controller('DateRangeCtrl', function ($scope) {
        $scope.FromDate = new Date();
        $scope.ToDate = new Date();
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };
        $scope.formats = ['MM/dd/yyyy'];
        $scope.format = 'MM/dd/yyyy';
        $scope.fromDateIsOpen = false;
        $scope.toDateIsOpen = false;
        $scope.FromDateOpen = function () {
            $scope.fromDateIsOpen = true;
        }
        $scope.ToDateOpen = function () {
            $scope.toDateIsOpen = true;
        }
    });

})();