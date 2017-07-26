angular.module('skyStream')
.factory('DataService', function ($http) {
  var apiKey = 't0bygtv4nwlrifc9sigricr063nnt1x'

  console.log('Enter in factory module')

  function getGames () {
    var url = 'https://api.twitch.tv/kraken/games/top?&limit=100&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'
    return $http.get(url)
    console.log('callingAPI')
  }

  function getStreams () {
    var url = 'https://api.twitch.tv/kraken/streams?limit=100&offset=25&stream_type=live&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'
    return $http.get(url)
    console.log('callingAPI')
  }

  function getTopVideos () {
    var url = 'https://api.twitch.tv/kraken/videos/top?&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'
    return $http.get(url)
    console.log('callingAPI')
  }

  return {
    getGames: getGames,
    getStreams: getStreams,
    getTopVideos: getTopVideos
  }
})

// THIS AJAX CALL IS WORKING
// var url = 'https://api.twitch.tv/kraken/games/top?&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'
//
// $.ajax({
//   url: url
// })
//   .then(function (data) {
//     console.log(data)
//   })
