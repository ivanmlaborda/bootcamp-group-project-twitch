angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/search/games/:query', {
    templateUrl: 'js/routes/games-search-results/template.html',
    controller: 'gamesResultsController'
  })
})
