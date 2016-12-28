'use strict';

angular.module('users').controller('RemindertilesController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
    function ($scope, $stateParams, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        
    }
]);
