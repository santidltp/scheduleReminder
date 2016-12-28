'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    console.log(Authentication.user);
    if (Authentication.user ==  "") {
      $scope.authenticated = true;
    } else {
      $scope.authenticated = false;
    }
  }
]);
