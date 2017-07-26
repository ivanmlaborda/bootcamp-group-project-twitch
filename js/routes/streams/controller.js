angular.module('skyStream')
.controller('getStreamsController', function ($scope, DataService, $sce) {
  console.log('controller inside getStreams working...')

  DataService.getStreams()
  .then(function (oData) {
    oData.data.streams.forEach(function (key) {
      let url = 'https://player.twitch.tv/?channel=' + key.channel.display_name + '&autoplay=false'
      key.channel.display_name = $sce.trustAsResourceUrl(url)
    })
    $scope.names = oData.data.streams
    console.log('running promise of streamVideos controller...')
    console.log(oData)
  })
})

// filter languages

/* ------------------------ This is working --------------------------------------------- */

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
