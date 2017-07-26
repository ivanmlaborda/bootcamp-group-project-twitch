angular.module('skyStream')
  .controller('searchController', function ($scope, $rootScope) {
    console.log('controller inside home working...')
    $scope.getQuery = function () {
      var query = $scope.query
      $rootScope.$broadcast('queryReady', { query: query })
    }
  })

  .controller('detailsController', function ($scope, DataService) {
    $scope.$on('queryReady', function (e, data) {
      DataService.searchGames(data.query)
          .then(function (oResponse) {
            $scope.gameImgUrl = oResponse.data.avatar_url
            $scope.gameName = oResponse.data.name
          })
    })
  })
