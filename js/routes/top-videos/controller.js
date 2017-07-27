angular.module('skyStream')
.controller('getTopVideosController', function ($scope, DataService, $sce) {
  $scope.section = 'TOP VIDEOS'
  DataService.getTopVideos()
  .then(function (oData) {
    oData.data.videos.forEach(function (key) {
      var url = 'https://player.twitch.tv/?video=' + key._id + '&autoplay=false'
      key._id = $sce.trustAsResourceUrl(url)
    })
    $scope.videos = oData.data.videos
  })
})
