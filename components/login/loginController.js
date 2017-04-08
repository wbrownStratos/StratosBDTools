	angular.module('BDTools')
		.controller('loginController', ['$scope', '$http', '$window', function($scope, $http, $window, $routeParams) {



          console.log('login controller loaded');
        /* make sure user logged in to LinkedIn*/

        console.log($routeParams);
          /* Fields */

         /* Config */

          var options = {};
          if ($routeParams.code === undefined) {
          $http({

              method: 'GET',
              url: 'http://localhost:5050/options',
              headers : { 'Content-Type' : 'application/json' },

                }).then(function successCallback(res) {
                    options = res.data;

                    console.log(options);
                    $window.location.href('https://' + options.host + options.path);
                    $scope.params = $routeParams;
                    console.log($routeParams);
                  }, function errorCallback(error) {
                    console.log(error);
                  });
          }

          console.log($routeParams.code);

         /*Linked In Sign in redirect */



	}]);


//
