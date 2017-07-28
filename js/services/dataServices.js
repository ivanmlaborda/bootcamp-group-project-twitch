angular.module('skyStream')
.factory('DataService', function ($http) {
  var apiKey = 't0bygtv4nwlrifc9sigricr063nnt1x'

  function getGames () {
    var url = 'https://api.twitch.tv/kraken/games/top?&limit=100&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'
    return $http.get(url)
  }

  function getStreams () {
    var url = 'https://api.twitch.tv/kraken/streams?&offset=6&stream_type=live&client_id=t0bygtv4nwlrifc9sigricr063nnt1x&limit=24'
    return $http.get(url)
  }

  function getTopVideos () {
    var url = 'https://api.twitch.tv/kraken/videos/top?&client_id=t0bygtv4nwlrifc9sigricr063nnt1x&limit=24'
    return $http.get(url)
  }

  function searchGames (query) {
    var url = 'https://api.twitch.tv/kraken/search/games?query=' + query + '&client_id=t0bygtv4nwlrifc9sigricr063nnt1x&type=suggest'
    return $http.get(url)
  }

  function searchStreams (query) {
    var url = 'https://api.twitch.tv/kraken/search/streams?query=' + query + '&client_id=t0bygtv4nwlrifc9sigricr063nnt1x&type=suggest&limit=24'
    return $http.get(url)
  }

  return {
    getGames: getGames,
    getStreams: getStreams,
    getTopVideos: getTopVideos,
    searchGames: searchGames,
    searchStreams: searchStreams
  }
})
