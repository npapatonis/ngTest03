(function () {
    'use strict';

    angular.module('ui.bootstrap.demo')
    .controller('PostalCodePatternsCtrl', function ($scope) {
        $scope.postalCodes = [
            { country: 'United States', pattern: '' },
            { country: 'Canada', pattern: '' },
            { country: 'Mexico', pattern: '' }
        ];
        $scope.formData = {
            selectedPostalCode : $scope.postalCodes[0]
        };
        $scope.postalCode = $scope.postalCodes[0];
    });

})();