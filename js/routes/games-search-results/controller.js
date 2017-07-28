angular.module('skyStream')
  .controller('gamesResultsController', function ($scope, $routeParams, DataService) {
    $scope.section = 'YOUR RESULTS GAMES'
    $scope.notFound =''
    var game = $routeParams.query
    DataService.searchGames(game)
        .then(function (oResponse) {
          console.log(oResponse.data.games)
          $scope.games = oResponse.data.games
          if($scope.games.length === 0 ){
            $scope.notFound += $routeParams.query + ' not found'
          }else{
            $scope.games = oResponse.data.games
          }
        })
  })
