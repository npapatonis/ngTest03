(function () {
    "use strict";

    angular.module('ui.bootstrap.demo', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngMessages', 'ui.bootstrap.datetimepicker', 'mgcrea.ngStrap'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: 'Select a UI Bootstrap control from the menu.'
            })
            .state('buttons', {
                url: '/buttons',
                templateUrl: 'App/Buttons/buttons.html'
            })
            .state('datePicker', {
                url: '/datepicker',
                templateUrl: 'App/DatePicker/datepicker.html'
            })
            .state('timePicker', {
                url: '/timepicker',
                templateUrl: 'App/TimePicker/timepicker.html'
            })
            .state('dateTimePicker', {
                url: '/datetimepicker',
                templateUrl: 'App/DateTimePicker/datetimepicker.html'
            })
            .state('collapsingHeader', {
                url: '/collapsingheader',
                templateUrl: 'App/CollapsingHeader/collapsingheader.html'
            })
            .state('dateRange', {
                url: '/daterange',
                templateUrl: 'App/DateRange/daterange.html'
            })
            .state('tourSummaryFilter', {
                url: '/toursummaryfilter',
                templateUrl: 'App/TourSummaryReport/toursummaryfilter.html'
            })
            .state('tourSummaryReport', {
                url: '/toursummaryreport',
                templateUrl: 'App/TourSummaryReport/toursummaryreport.html'
            })
            .state('promisesTrial', {
                url: '/promisesTrial',
                templateUrl: 'App/PromisesTrial/promisestrial.html'
            });

        var filter = new TourSummaryFilter(new Date(), new Date(), true, false);
    };

})();
