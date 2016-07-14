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

            $scope.state = null;
            $scope.country = null;

            $scope.useStateSelector = false;

            init();

            function init() {
                $scope.usStates = addressFactory.getUsStates();
                $scope.countries = addressFactory.getCountries();
            }

            $scope.$watch('state', function (oldValue, newValue) {
                $scope.address.state = $scope.state.name;
            });

            $scope.$watch('country', function (oldValue, newValue) {
                if ($scope.country) {
                    $scope.address.country = $scope.country.name;
                    $scope.useStateSelector = ($scope.country.isoCode === 'US');
                }
                else {
                    $scope.address.country = '';
                    $scope.useStateSelector = false;
                }
            });
        }

        return directive;
    };
})();
