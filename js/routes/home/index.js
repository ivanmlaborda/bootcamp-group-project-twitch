angular.module('skyStream')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/routes/home/template.html',
    controller: 'searchController'
  })
})
