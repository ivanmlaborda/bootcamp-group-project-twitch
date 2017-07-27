angular.module('skyStream')

  .controller('searchController', function ($scope, $rootScope, $location) {
    console.log('controller inside home working...')
    $scope.getQuery = function () {
      var query = $scope.query
      var selection = $scope.querySelect
      if (selection === 'games') {
        $location.path('/search/games/' + query)
      } else if (selection === 'streams') {
        $location.path('/search/streams/' + query)
      } else {
        $location.path('/')
      }
    }
  })
