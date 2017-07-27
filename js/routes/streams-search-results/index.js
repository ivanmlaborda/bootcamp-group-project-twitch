angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/search/streams/results/:query', {
    templateUrl: 'js/routes/streams-search-results/template.html',
    controller: 'streamsResultsController'
  })
})
