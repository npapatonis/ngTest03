(function () {
    'use strict';

    angular.module('ui.bootstrap.demo')
    .controller('AddressEntryCtrl', function ($scope, addressFactory) {

        $scope.formData = {
            shipAddress: addressFactory.initializeAddress(),
            billAddress: addressFactory.initializeAddress()
        };

    });

})();