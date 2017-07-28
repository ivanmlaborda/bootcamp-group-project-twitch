angular.module('skyStream')

  .controller('searchController', function ($scope, $rootScope, $location) {
    console.log('controller inside home working...')
    $scope.getQuery = function (queryRadio) {
      var query = $scope.query
<<<<<<< HEAD
      var option = $scope.queryRadio.radio
      console.log(option)
      if (option === 'games') {
        $location.path('/search/games/' + query)
      } else if (option === 'streams') {
=======

      if (queryRadio === 'games') {
        $location.path('/search/games/' + query)
      } else if (queryRadio === 'streams') {
>>>>>>> 1e49f3004cc29ad7e8e2e55da692a190e8ea8245
        $location.path('/search/streams/' + query)
      } else {
        $location.path('/search/games/' + query)
      }
    }
  })
