var url = 'https://api.twitch.tv/kraken/games/top?&client_id=t0bygtv4nwlrifc9sigricr063nnt1x'

$.ajax({
  url: url
})
  .then(function (data) {
    console.log(data)
  })
