angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/getTopVideos', {
    templateUrl: 'js/getTopVideos/template.html',
    controller: 'getTopVideosController'
  })
})
