angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/home-page ', {
    templateUrl: 'js/routes/home page/index.html',
    controller: 'getHomeController'
  })
})
