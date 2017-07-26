angular.module('skyStream')

  .controller('searchController', function ($scope, $rootScope, $location) {
    console.log('controller inside home working...')
    $scope.getQuery = function () {
      var query = $scope.query
      var option = $scope.queryRadio.radio
      console.log(option)
      if (option === 'games') {
        $location.path('/search/games/results/' + query)
      } else if (option === 'streams') {
        $location.path('/search/streams/results/' + query)
      } else {
        $location.path('/search/games/results/' + query)
      }
    }
  })
