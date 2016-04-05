(function () {
    'use strict';

    angular.module('ui.bootstrap.demo')
        .controller('PromisesTrialCtrl', function ($scope, $q, $timeout) {
            //var vm = this;

            var oneAsync = function () {
                var deferred = $q.defer();
                console.log('oneAsync start');

                $timeout(function () {
                    console.log('oneAsync finished');
                    deferred.resolve('oneAsync resolved');
                }, 2000);

                console.log('oneAsync return');
                return deferred.promise;
            };

            var twoAsync = function () {
                return oneAsync().then(function (result) {
                    console.log('twoAsync -- ' + result);
                    return result;
                },
                function (error) {
                    console.log('twoAsync -- ' + error);
                    return error;
                })
            };

            //var twoAsync = function () {
            //    return oneAsync().then(function (result) {
            //        var deferred = $q.defer();
            //        console.log('twoAsync.success start -- ' + result);

            //        $timeout(function () {
            //            console.log('twoAsync.success finished');
            //            deferred.resolve('twoAsync.success resolved');
            //        }, 2000);

            //        console.log('twoAsync.success return');
            //        //return deferred.promise;
            //        return result;
            //    },
            //    function (error) {
            //        console.log('twoAsync.error -- ' + error);
            //        return error;
            //    })
            //};

            $scope.start = function () {
                twoAsync().then(function (result) {
                    console.log('start -- ' + result);
                },
                function (error) {
                    console.log('start -- ' + error);
                })
            };
        });

})();