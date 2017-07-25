angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/streams', {
    templateUrl: 'js/routes/streams/template.html',
    controller: 'getStreamsController'
  })
})
