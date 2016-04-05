(function () {
    'use strict';

    angular.module('ui.bootstrap.demo').controller('TimepickerDemoCtrl', function ($scope) {
        $scope.time = new Date(1970, 0, 1, 10, 30, 40);
        $scope.selectedTimeAsNumber = 10 * 36e5 + 30 * 6e4 + 40 * 1e3;
        $scope.selectedTimeAsString = '10:00';
        $scope.sharedDate = new Date(new Date().setMinutes(0, 0));
    });

})();