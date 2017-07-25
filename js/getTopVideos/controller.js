angular.module('skyStream')
.controller('getTopVideosController', function ($scope, DataService) {
  console.log('controller inside getTopVideos working...')

  DataService.getTopVideos()
  .then(function(oData) {
    console.log(oData)
    console.log('running promise of getTopVideos controller...')
  })
})
