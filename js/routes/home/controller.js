angular.module('skyStream')
  .controller('searchController', function ($scope, $rootScope/*, DataService */, $location) {
    console.log('controller inside home working...')
    $scope.getQuery = function () {
      var query = $scope.query
      console.log(query)

      $location.path('/search/games/results/' + query)

      // $rootScope.$broadcast('queryReady', { query: query })
    }

    // $scope.$on('queryReady', function (e, data) {
    //   console.log('I listened!')
    //   DataService.searchGames(data.query)
    //     .then(function (oResponse) {
    //       // $scope.gameImgUrl = oResponse.data.avatar_url
    //       // $scope.gameName = oResponse.data.name
    //       console.log(oResponse.data)
    //     })
    // })
  })
