(function () {
    'use strict';

    angular.module('g1mApp')
        .directive('tksAddressEntry', ['addressFactory', tksAddressEntry]);

    function tksAddressEntry(addressFactory) {
        var directive = {
            restrict: 'E',
            scope: {
                id: '@',
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

                $scope.isUnitedStates = ($scope.country.isoCode === 'US');
                if ($scope.isUnitedStates) {
                    if ($scope.address.state) {
                        // See if state text input matches a state abbreviation.  If so, select it.
                        var findStateResult = $scope.usStates.filter(function (state) {
                            return state.id === $scope.address.state;
                        });
                        if (findStateResult.length === 0) {
                            $scope.address.state = '';
                        }
                    }
                    // Set US postal code pattern
                    $scope.postalCodePattern = /^\d{5}(-\d{4})?$/;
                }
                else {
                    $scope.address.state = '';
                    $scope.postalCodePattern = '';
                }
                $scope.change();
            }

            init();

            function init() {
                if (!$scope.id) {
                    $scope.id = 'tks_ae';
                }

                $scope.usStates = addressFactory.getUsStates();
                $scope.countries = addressFactory.getCountries();

                $scope.isUnitedStates = false;

                $scope.country = $scope.countries.filter(
                    function (country) {
                        return country.isoCode === 'US';
                })[0];
                $scope.countryChange();
            }
        }

        return directive;
    };
})();
