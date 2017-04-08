	angular.module('BDTools')
		.controller('searchController', ['$scope', '$http', '$window', function($scope, $http, $window) {



          console.log('search controller loaded');

          /* Fields */

          $scope.username = 'please enter a username';
          $scope.password = 'please enter a password';
          $scope.accountBalance = null;
          $scope.firstNameLastName = null;
          $scope.loginSuccess = false;
          //$scope.userDataPlan = null;


         /*Linked In Sign in redirect */


         /* Methods */

          $scope.submitSearchRequest = function() {

              var getTime = function() {

                    function addZero(i) {
                        if (i < 10) {
                            i = "0" + i;
                        }
                        return i;
                    }

                  var time = new Date();
                  var currentTime = time.getMonth() + 1 + '/' + time.getDate() + '/' + time.getFullYear() + ' @ ' +
                                    addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());

                  return currentTime;
              }

              $http({

                  method: 'GET',
                  url: 'http://localhost:5050/BDTools',
                  headers : { 'Content-Type' : 'application/json' },
                  data: {

                  "username" : $scope.keyword,
                  "getTime" : getTime()

                  }

                    }).then(function successCallback(res) {
                        console.log(res);

                      }, function errorCallback(error) {
                        console.log(error);
                      });

          console.log(getTime());

          }
          $scope.submitTestRequest = function() {

              var getTime = function() {

                    function addZero(i) {
                        if (i < 10) {
                            i = "0" + i;
                        }
                        return i;
                    }

                  var time = new Date();
                  var currentTime = time.getMonth() + 1 + '/' + time.getDate() + '/' + time.getFullYear() + ' @ ' +
                                    addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());

                  return currentTime;
              }
              

          console.log(getTime());

          }

	}]);


//
