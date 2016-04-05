(function () {
    'use strict';

    angular.module('ui.bootstrap.demo').controller('DatetimepickerDemoCtrl', function ($scope) {
        $scope.dt = new Date();

        $scope.isOpen = false;

        $scope.openCalendar = function (e) {
            e.preventDefault();
            e.stopPropagation();
            $scope.isOpen = true;
        }
    });

})();