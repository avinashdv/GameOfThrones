app.config(['$routeProvider', function($routeProvider){
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
	.otherwise(
	{
		template: '<h1>404 PAGE NOT FOUND</h1>'
	}
	);
}]);