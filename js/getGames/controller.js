angular.module('skyStream')
.controller('getGamesController', function ($scope, DataService){

  console.log('controller inside getGames working...')

  DataService.getGames()
  .then(function(oData) {
    console.log(oData)
    console.log('running promise of getGames controller...')
  })
})
