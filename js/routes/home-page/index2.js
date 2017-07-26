angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/routes/home-page/index.html',
    controller: 'getHomeController'
  })
})
