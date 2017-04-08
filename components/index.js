var app = angular.module('BDTools', ['ngRoute']);

		app.config(['$routeProvider',

            function($routeProvider) {

		        $routeProvider
        			.when('/intro', {
        				templateUrl: '/intro/intro.html',
        				controller: 'introController'
        			})
        			.when('/FAQs', {
        				templateUrl: '/FAQs/FAQs.html',
        				controller: 'FAQsController'
        			})
        			.when('/', {
        				templateUrl: '/login/login.html',
        				controller: 'loginController'
        			})
        			.when('/login', {
        				templateUrl: '/login/login.html',
        				controller: 'loginController'
        			})
        			.when('/search', {
        				templateUrl: '/searchEngine/searchEngine.html',
        				controller: 'searchController'
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

        $scope.goToSearch = function() {

		$location.path("/search");

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
		.controller('profilesController', ['$scope', function($scope) {

          console.log('profiles controller loaded');
	}]);
