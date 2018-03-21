var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'NinjaController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
      .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'contactCtrl'
      })
      .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'NinjaController'
      }).otherwise({
        redirectTo: '/home'
      })
}])
