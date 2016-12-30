'use strict';

angular.module('users').controller('RemindertilesController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', '$modal',
    function ($scope, $stateParams, $http, $location, Authentication, $modal) {
        $scope.authentication = Authentication;
         $scope.reminders =[];
        
        // Get active reminders
        $http.get('/api/users/reminders').success(function (data) {
            $scope.reminders = data;
        }).
        error(function (err) {
            console.log("this error was encounter: " + err)
        });
        $scope.phonenumber = "";
        $scope.when = "";
        $scope.message = "";


        $scope.send = function myFunction() {
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            var body = {
                phoneNumber: this.phonenumber,
                when: this.when,
                message: this.message
            };
            setTimeout(function () {
                alert("sent!!");
                $http({
                    url: '/api/users/reminders',
                    method: "POST",
                    data: body,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function (response) {
                    $scope.reminders.push(response.reminders);
                    console.log($scope.reminders);
                }).error(function (response) {
                    $scope.error = response.message;
                });

            }, 3000);

        };
        $scope.create = function () {
            $scope.phonenumber = this.phonenumber;
            $scope.when = this.when;
            $scope.message = this.message;
            this.send();
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
                // console.log(selectedItem);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }


    }
]);
