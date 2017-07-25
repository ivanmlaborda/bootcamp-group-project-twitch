angular.module('skyStream')
.controller('getHomeController', function ($scope, DataService) {
  console.log('controller inside getHome working...')

  DataService.getGames()
  .then(function (oData) {
    $scope.gamesImgs = oData.data.top
    console.log(oData)
    console.log('running promise of getHome controller...')
  })
})
