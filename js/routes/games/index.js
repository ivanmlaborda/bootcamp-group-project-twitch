angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/games', {
    templateUrl: 'js/routes/games/template.html',
    controller: 'getGamesController'
  })
})
