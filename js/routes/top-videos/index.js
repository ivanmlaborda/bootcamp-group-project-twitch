angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/top-videos', {
    templateUrl: 'js/routes/top-videos/template.html',
    controller: 'getTopVideosController'
  })
})
