angular.module('skyStream')
  .controller('streamsResultsController', function ($scope, $routeParams, DataService, $sce) {
    var stream = $routeParams.query
    $scope.section = 'YOUR STREAMS RESULTS'
    $scope.notGame = ''
    DataService.searchStreams(stream)
      .then(function (oResponse) {
        oResponse.data.streams.forEach(function (key) {
          var url = 'https://player.twitch.tv/?channel=' + key.channel.name + '&autoplay=false'
          key.channel.vUrl = $sce.trustAsResourceUrl(url)
        })
        $scope.names = oResponse.data.streams
        if($scope.names.length === 0){
          $scope.notGame += $routeParams.query + ' not found'
        }else{
          $scope.names = oResponse.data.streams
        }
      })
  })
