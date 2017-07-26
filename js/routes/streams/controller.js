angular.module('skyStream')
.controller('getStreamsController', function ($scope, DataService, $sce) {
  console.log('controller inside getStreams working...')

  DataService.getStreams()
  .then(function (oData) {

    let url = 'https://player.twitch.tv/?channel=' + oData.data.streams["0"].channel.name
    $scope.streamVideosName = $sce.trustAsResourceUrl(url)

    console.log(oData)
    console.log('running promise of streamVideos controller...')
  })
})

/* ------------------------ This is working -------------------------------------------------------- */

// angular.module('skyStream')
// .controller('getStreamsController', function ($scope, DataService, $sce) {
//   console.log('controller inside getStreams working...')
//
//   DataService.getStreams()
//   .then(function (oData) {
//     let url = 'https://player.twitch.tv/?channel=' + oData.data.streams["0"].channel.name
//     $scope.streamVideosName = $sce.trustAsResourceUrl(url)
//     console.log(oData)
//     console.log('running promise of streamVideos controller...')
//   })
// })
