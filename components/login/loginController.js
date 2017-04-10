	angular.module('BDTools')
		.controller('loginController', ['$scope', '$http', '$window', function($scope, $http, $window) {



          console.log('login controller loaded');
        /* make sure user logged in to LinkedIn*/

          /* Fields */

         /* Config */
// TODO: need to add ability to refresh code and send to back end.
          var options = {};
          $http({

              method: 'GET',
              url: 'http://localhost:5050/options',
              headers : { 'Content-Type' : 'application/json' },

                }).then(function successCallback(res) {
                    options = res.data;

                    console.log(options);
                    $window.location.href('https://' + options.host + options.path); //TODO: need to
                  }, function errorCallback(error) {
                    console.log(error);
                  });

          console.log('login request sent!');

         /*Linked In Sign in redirect */



	}]);


//
