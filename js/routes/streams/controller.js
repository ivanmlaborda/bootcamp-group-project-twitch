angular.module('skyStream')
.controller('getStreamsController', function ($scope, DataService) {
  console.log('controller inside getStreams working...')

  DataService.getStreams()
  .then(function (oData) {
    $scope.streams = oData.data.streams
    console.log($scope.streams)
    console.log(oData)
    console.log('running promise of getStreams controller...')
  })
})
