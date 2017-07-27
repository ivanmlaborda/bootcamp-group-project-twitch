angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/video-player/:video-url', {
    templateUrl: 'js/routes/video-player/template.html',
    controller: 'videoPlayerController'
  })
})
