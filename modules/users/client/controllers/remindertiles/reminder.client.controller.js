'use strict';

angular.module('users').controller('RemindertilesController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', '$modal',
    function ($scope, $stateParams, $http, $location, Authentication, $modal) {
        $scope.authentication = Authentication;
        $scope.reminders = [];

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

            var body = {
                phoneNumber: this.phonenumber,
                when: this.when,
                message: this.message
            };
            setTimeout(function () {
                // body to be sent to DB and SMS sender
                $http({
                    url: '/api/users/reminders',
                    method: "POST",
                    data: body,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function (response) {
                    $scope.reminders = response.reminders;
                    //Send Text message
                    $http({
                        url: '/sms',
                        method: "POST",
                        data: body,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).success(function (response) {
                        console.log("Text message sent!");
                    }).error(function (response) {
                        $scope.error = response.message;
                    });
                    console.log($scope.reminders);
                }).error(function (response) {
                    $scope.error = response.message;
                });

            }, 1000);

        };
        // Create Function will create object in DB 
        // and will send a text message when deisred
        $scope.create = function () {
            $scope.phonenumber = this.phonenumber;
            $scope.when = this.when;
            $scope.message = this.message;
            this.send();
        };
        // opne will be executed when opening the modal
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
