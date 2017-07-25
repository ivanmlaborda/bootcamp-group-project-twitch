angular.module('skyStream')
.controller('getTopVideosController', function ($scope, DataService) {
  console.log('controller inside getTopVideos working...')

  DataService.getTopVideos()
  .then(functigit puon (oData) {
    console.lgit puog(oData)
    console.log('running promise of getTopVideos controller...')
  })
})
