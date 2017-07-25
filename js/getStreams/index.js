angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/getStreams', {
    templateUrl: 'js/getStreams/template.html',
    controller: 'getStreamsController'
  })
})
