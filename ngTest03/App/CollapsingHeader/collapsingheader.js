(function () {
    'use strict';

    angular.module('ui.bootstrap.demo')
    .controller('CollapsingHeaderCtrl', function ($scope) {
        $scope.filters = {
            visible: false,
            dateFormat: 'MM/dd/yyyy',
            dateOptions: {
                formatYear: 'yy',
                startingDay: 1
            },
            altInputFormats: ['M!/d!/yyyy'],
            startDate: {
                from: {
                    date: new Date(),
                    isOpen: false,
                    Open: function () {
                        $scope.filters.startDate.from.isOpen = true;
                    }
                },
                to: {
                    date: new Date(),
                    isOpen: false,
                    Open: function () {
                        isOpen = true;
                    }
                }
            }
        };

        $scope.tourInstances = [
            {
                name: 'Tour ABC',
                status: 'Complete',
                startDate: new Date(2016, 0, 1, 6, 30, 0),
                endDate: new Date(2016, 0, 1, 7, 33, 0),
                officer: 'Bob'
            },
            {
                name: 'Tour DEF',
                status: 'Complete',
                startDate: new Date(2016, 0, 1, 7, 45, 0),
                endDate: new Date(2016, 0, 1, 9, 0, 0),
                officer: 'Jack'
            },
            {
                name: 'Tour XYZ',
                status: 'In Progress',
                startDate: new Date(2016, 0, 1, 9, 30, 0),
                endDate: null,
                officer: 'Clyde'
            },
        ];

    });

})();