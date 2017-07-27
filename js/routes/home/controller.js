angular.module('skyStream')

  .controller('searchController', function ($scope, $rootScope, $location) {
    console.log('controller inside home working...')
    $scope.getQuery = function (queryRadio) {
      var query = $scope.query

      if (queryRadio === 'games') {
        $location.path('/search/games/' + query)
      } else if (queryRadio === 'streams') {
        $location.path('/search/streams/' + query)
      } else {
        $location.path('/search/games/' + query)
      }
    }
  })
