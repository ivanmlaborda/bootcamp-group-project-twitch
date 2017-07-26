angular.module('skyStream')
  .controller('gamesResultsController', function ($scope, $routeParams, DataService) {
    var game = $routeParams.query
    // $scope.$on('queryReady', function (e, data) {
    //   console.log('I listened!')
    DataService.searchGames(game)
        .then(function (oResponse) {
          // $scope.gameImgUrl = oResponse.data.avatar_url
          // $scope.gameName = oResponse.data.name
          console.log(oResponse.data.games)
          $scope.games = oResponse.data.games
        })
  })
