angular.module('skyStream')
.controller('homeController', function ($scope, $location, DataService) {
  console.log('controller inside home working...')
})

// angular.module('myGithubApp')
//   .controller('SearchFormController', function( $scope, $location) {

//     $scope.query = 'juanmaguitar'

//     $scope.getSearchQuery = function() {
//       var query = $scope.query;
//       $location.path('/search/' + query);
//     }

//   })
