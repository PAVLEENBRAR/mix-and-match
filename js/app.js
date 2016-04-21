var injection = angular.module('injection', ['ngRoute']);

	// configure our routes
	injection.config(function($routeProvider) {
		$routeProvider.

			// route for the home page
			when('/home', {
				templateUrl : 'home',
				//controller : 'mainController'
			}).
			when('/register', {
				templateUrl : 'register.html',
				//controller  : 'aboutController'
			}).

			// route for the contact page
			when('/contact', {
				templateUrl : 'contact.html',
				//controller  : 'contactController'
			}).
			otherwise({
				redirectTo: '/home'
			});
	});
	/*injection.controller('mainController', function($scope) {
		// create a message to display in our view
		});

	scotchApp.controller('aboutController', function($scope) {
		});

	scotchApp.controller('contactController', function($scope) {
		});*/