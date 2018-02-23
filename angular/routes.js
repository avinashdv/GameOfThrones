app.config(['$routeProvider', '$locationProvider', "$httpProvider",  function($routeProvider, $locationProvider, $httpProvider){
	
	$routeProvider
	.when('/', {
		templateUrl		: 'pages/main-view.html',
		controller 		: 'firstController',
		controllerAs	: 'firstCtrl'
	})
	.when('/book/:bookName', {
		templateUrl 	: 'pages/self-view.html',
		controller 		: 'selfController',
		controllerAs 	: 'selfCtrl'
	})
	.when('/character/:characterName', {
		templateUrl		: 'pages/self-view.html',
		controller 		: 'selfController',
		controllerAs 	: 'selfCtrl'
	})
	.when('/house/:houseName', {
		templateUrl		: 'pages/self-view.html',
		controller 		: 'selfController',
		controllerAs 	: 'selfCtrl'
	})
	.when('/error500', {
		templateUrl		: '/err500.html'
	})
	.otherwise({
		templateUrl 	: '/err404.html'
	});

	$httpProvider.interceptors.push('errorInterceptor');

	// use the HTML5 History API
        $locationProvider.html5Mode(true);
}]);