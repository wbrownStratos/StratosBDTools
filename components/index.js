var app = angular.module('BDTools', ['ngRoute']);

		app.config(['$routeProvider',

            function($routeProvider) {

		        $routeProvider
        			.when('/documents', {
        				templateUrl: '/documents/documents.html',
        				controller: 'docsController'
        			})
        			.when('/FAQs', {
        				templateUrl: '/FAQs/FAQs.html',
        				controller: 'FAQsController'
        			})
        			.when('/', {
        				templateUrl: '/intro/intro.html',
        				controller: 'introController'
        			})
        			.when('/login', {
        				templateUrl: '/login/login.html',
        				controller: 'loginController'
        			})
        			.when('/plans', {
        				templateUrl: '/plans/plans.html',
        				controller: 'plansController'
        			})
        			.when('/profiles', {
        				templateUrl: '/profiles/profiles.html',
        				controller: 'profilesController'
        			})
        			.otherwise({
        				redirectTo: '/'
        			});

            }]);

angular.module('BDTools')
		.controller('mainController', ['$scope','$location', function($scope, $location) {

		$scope.goToDocuments = function() {

		$location.path("/documents");

		};

        $scope.goToFAQs = function() {

		$location.path("/FAQs");

		};

        $scope.goToPlans = function() {

		$location.path("/plans");

		};

        $scope.goToLogin = function() {

		$location.path("/login");

		};

        $scope.goToIntro = function() {

		$location.path("/intro");

		};

}]);






	angular.module('BDTools')
		.controller('docsController', ['$scope', function($scope) {

          console.log('documents controller loaded');
	}]);


	angular.module('BDTools')
		.controller('FAQsController', ['$scope', function($scope) {

          console.log('FAQs controller loaded');
	}]);


	angular.module('BDTools')
		.controller('introController', ['$scope', function($scope) {

          console.log('intro controller loaded');
	}]);


	angular.module('BDTools')
		.controller('loginController', ['$scope', '$http', function($scope, $http) {



          console.log('login controller loaded');

          /* Fields */

          $scope.username = 'please enter a username';
          $scope.password = 'please enter a password';
          $scope.accountBalance = null;
          $scope.firstNameLastName = null;
          $scope.loginSuccess = false;
          //$scope.userDataPlan = null;


         /* Methods */

          $scope.submitLoginRequest = function() {

              var loginTime = function() {

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

                  method: 'POST',
                  url: 'http://dev.BDTools:5000/authRequest',
                  headers : { 'Content-Type' : 'application/json' },
                  data: {

                  "username" : $scope.authUsername,
                  "password" : $scope.authPassword,
                  "loginTime" : loginTime()

                  }

                    }).then(function successCallback(userProfile) {
                                  $scope.loginSuccess = true;
                                  console.log(userProfile);
                                  $scope.accountBalance = userProfile.data.accountBalance;
                                  $scope.firstName = userProfile.data.firstName;

                      }, function errorCallback(error) {
                        console.log(error);
                      });

          console.log(loginTime());

          }

	}]);


	angular.module('BDTools')
		.controller('plansController', ['$scope', function($scope) {

          console.log('plans controller loaded');
	}]);


	angular.module('BDTools')
		.controller('profilesController', ['$scope', function($scope) {

          console.log('profiles controller loaded');
	}]);
