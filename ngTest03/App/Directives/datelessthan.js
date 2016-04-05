(function () {
    'use strict';

    angular.module('ui.bootstrap.demo')
    .directive('dateLessThan', ["$filter", function ($filter) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {           
                var validateDateRange = function (inputValue) {
                    var fromDate = $filter('date')(inputValue, 'short');
                    var toDate = $filter('date')(attrs.dateLessThan, 'short');
                    var isValid = isValidDateRange(fromDate, toDate);
                    ctrl.$setValidity('dateLessThan', isValid);
                    return inputValue;
                };

                ctrl.$parsers.unshift(validateDateRange);
                ctrl.$formatters.push(validateDateRange);
                attrs.$observe('dateLessThan', function () {
                    validateDateRange(ctrl.$viewValue);
                });
            }
        };
    }]);

    var isValidDate = function (dateStr) {
        if (dateStr == undefined)
            return false;
        var dateTime = Date.parse(dateStr);

        if (isNaN(dateTime)) {
            return false;
        }
        return true;
    };

    var getDateDifference = function (fromDate, toDate) {
        return Date.parse(toDate) - Date.parse(fromDate);
    };

    var isValidDateRange = function (fromDate, toDate) {
        if (fromDate == "" || toDate == "")
            return true;
        if (isValidDate(fromDate) == false) {
            return false;
        }
        if (isValidDate(toDate) == true) {
            var days = getDateDifference(fromDate, toDate);
            if (days < 0) {
                return false;
            }
        }
        return true;
    };

})();