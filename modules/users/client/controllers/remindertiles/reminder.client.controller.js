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


        $scope.create =function(){
            alert(this.when);
        };
        $scope.open = function () {

            var modalInstance = $modal.open({
                templateUrl: 'modules/users/views/remindertiles/newsms.html',
                size: 'sm',
                controller: function ($scope, $modalInstance) {

                    //when the user hits Submit
                    $scope.ok = function () {
                        // console.log(data);
                        $modalInstance.close();
                    };




                    //When user hits cancel into the modal
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },

            });
            modalInstance.result.then(function (selectedItem) {
                console.log(selectedItem);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }


    }
]);
