'use strict';

angular.module('users').controller('RemindertilesController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', '$modal',
    function ($scope, $stateParams, $http, $location, Authentication, $modal) {
        $scope.authentication = Authentication;
        // Get active reminders
        $http.get('/api/users/reminders').success(function (data) {
            $scope.reminders = data;
        }).
        error(function (err) {
            console.log("this error was encounter: " + err)
        });
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.open = function () {
            var myModal = $modal.open({
                templateUrl: 'modules/users/views/remindertiles/newsms.html',
                size: 'sm',
                controller: function ($scope, $modalInstance, items) {

                    $scope.items = items;
                    $scope.selected = {
                        item: $scope.items[0]
                    };

                    $scope.ok = function () {
                        $modalInstance.close($scope.selected.item);
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        }
    }
]);
