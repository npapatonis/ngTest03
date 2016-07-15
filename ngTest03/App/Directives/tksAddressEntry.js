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
            templateUrl: './app/Templates/tksAddressEntry.tpl.html',
            controller: controller
        }

        controller.$inject = ['$scope', 'addressFactory'];

        function controller($scope, addressFactory) {

            $scope.country = null;

            $scope.useStateSelector = false;

            init();

            function init() {
                $scope.usStates = addressFactory.getUsStates();
                $scope.countries = addressFactory.getCountries();
                $scope.country = $scope.countries[0];

                //$scope.address.country = $scope.country.name;
                //$scope.useStateSelector = ($scope.country.isoCode === 'US');
            }

            $scope.countryChange = function () {
                if ($scope.country) {
                    $scope.address.country = $scope.country.name;
                    $scope.useStateSelector = ($scope.country.isoCode === 'US');
                }
                else {
                    $scope.address.country = '';
                    $scope.useStateSelector = false;
                }
                $scope.address.state = '';

                $scope.change();
            }
        }

        return directive;
    };
})();
