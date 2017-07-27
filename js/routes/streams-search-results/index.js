angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/search/streams/:query', {
    templateUrl: 'js/routes/streams-search-results/template.html',
    controller: 'streamsResultsController'
  })
})
