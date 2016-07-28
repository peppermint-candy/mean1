(function() {
  angular
    .module('myApp', ['ngRoute', 'ngMessages'])
    .config(config)
  function config($routeProvider) {
    $routeProvider
    .when('/' , {
      templateUrl: 'angular_files/partials/index.html'
    })

    .when('/dashboard' , {
      templateUrl: 'angular_files/partials/dashboard.html'
    })

    .when('/poll/:id', {
      templateUrl: 'angular_files/partials/poll.html'
    })

    .when('/create', {
      templateUrl: 'angular_files/partials/create.html'
    })

    .otherwise({
      redirectTo: '/'
    })
  }
})();
