angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/home-page ', {
    templateUrl: '/js/routes/home%20page/js/index.js',
    controller: 'getHomeController'
  })
})
