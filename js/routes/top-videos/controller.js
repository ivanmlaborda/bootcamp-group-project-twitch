angular.module('skyStream')
.controller('getTopVideosController', function ($scope, DataService, $sce) {
  console.log('controller inside getTopVideos working...')

  DataService.getTopVideos()
  .then(function (oData) {
    let url = 'https://player.twitch.tv/?video=' + oData.data.videos[0]._id
    $scope.videos = $sce.trustAsResourceUrl(url)
    console.log($scope.videos)
    console.log('running promise of getTopVideos controller...')
  })
})

// ESTO FUNCTIONA! NO BORRAR
// angular.module('skyStream')
// .controller('getTopVideosController', function ($scope, DataService, $sce) {
//   console.log('controller inside getTopVideos working...')

//   DataService.getTopVideos()
//   .then(function (oData) {
//     let url = 'https://player.twitch.tv/?video=' + oData.data.videos[0]._id
//     $scope.videos = $sce.trustAsResourceUrl(url)
//     console.log($scope.videos)
//     console.log('running promise of getTopVideos controller...')
//   })
// })
