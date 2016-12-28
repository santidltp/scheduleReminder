'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
    function ($scope, $stateParams, $http, $location, Authentication) {
        $scope.authentication = Authentication;
        if (Authentication.user == "") {
            $scope.authenticated = true;
        } else {
            $scope.authenticated = false;
        }
    }
]);
