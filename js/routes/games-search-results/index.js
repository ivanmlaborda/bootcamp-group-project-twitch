angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/search/games/results/:query', {
    templateUrl: 'js/routes/games-search-results/template.html',
    controller: 'gamesResultsController'
  })
})
