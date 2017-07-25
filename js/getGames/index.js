angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when ('/getGames', {
    templateUrl:  'js/getGames/template.html' ,
    controller:   'getGamesController'
  })
})
