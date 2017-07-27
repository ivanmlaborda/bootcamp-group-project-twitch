angular.module('skyStream')
  .controller('gamesResultsController', function ($scope, $routeParams, DataService) {
    $scope.section = 'YOUR RESULTS GAMES'
    var game = $routeParams.query
    DataService.searchGames(game)
        .then(function (oResponse) {
          console.log(oResponse.data.games)
          $scope.games = oResponse.data.games
        })
  })
