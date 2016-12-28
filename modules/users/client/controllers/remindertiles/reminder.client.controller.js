'use strict';

angular.module('users').controller('RemindertilesController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
    function ($scope, $stateParams, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        $http.get('/api/users/reminders').success(function (data) {
            $scope.reminders = data;
        }).
        error(function (err) {
            console.log("this error was encounter: " + err)
        });
    }
]);
