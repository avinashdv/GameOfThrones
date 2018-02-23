app.factory('errorInterceptor', ['$q', '$location', function ($q, $location) {
        return {
            request: function (config) {
                return config || $q.when(config);
            },
            requestError: function(request){
                return $q.reject(request);
            },
            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (response && response.status >= 500) {
                    $location.path('/error500');
                }
                return $q.reject(response);
            }
        };
}]);