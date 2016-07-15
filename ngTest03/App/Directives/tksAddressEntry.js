(function () {
    'use strict';

    angular.module('g1mApp')
        .directive('tksAddressEntry', ['addressFactory', tksAddressEntry]);

    function tksAddressEntry(addressFactory) {
        var directive = {
            restrict: 'E',
            scope: {
                address: '=',  // Bind isolate scope's address property to attribute of the same name
                change: '&'
            },
            templateUrl: function (elem, attrs) {
                if (attrs.templateUrl) {
                    return attrs.templateUrl;
                }
                return './app/Templates/tksAddressEntry.tpl.html';
            },
            controller: controller
        }

        controller.$inject = ['$scope', 'addressFactory'];

        function controller($scope, addressFactory) {

            $scope.countryChange = function () {
                $scope.address.country = $scope.country.name;
                $scope.useStateSelector = ($scope.country.isoCode === 'US');
                $scope.address.state = '';
                $scope.change();

                //if ($scope.country) {
                //    $scope.address.country = $scope.country.name;
                //    $scope.useStateSelector = ($scope.country.isoCode === 'US');
                //}
                //else {
                //    $scope.address.country = '';
                //    $scope.useStateSelector = false;
                //}
                //$scope.address.state = '';

                //$scope.change();
            }

            init();

            function init() {
                $scope.usStates = addressFactory.getUsStates();
                $scope.countries = addressFactory.getCountries();

                $scope.useStateSelector = false;

                $scope.country = $scope.countries[0];
                $scope.countryChange();
            }
        }

        return directive;
    };
})();
